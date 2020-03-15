import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpInterceptor
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

const appKey = "kid_Hk2nQ-LrU";
const appSecret = "db15201ba4fb4287b33d3013b8d47f58";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.endsWith("login") || request.url.endsWith(appKey)) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${btoa(`${appKey}:${appSecret}`)}`,
          "Content-Type": "application/json"
        }
      });
    } else {
      request = request.clone({
        setHeaders: {
          Authorization: `Kinvey ${localStorage.getItem("authtoken")}`,
          "Content-Type": "application/json"
        }
      });
    }

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && request.url.endsWith("login")) {
          this.successfulLoginData(event.body);
        }
      })
    );
  }

  private successfulLoginData(data) {
    this.authService.authtoken = data["_kmd"]["authtoken"];
    localStorage.setItem("authtoken", data["_kmd"]["authtoken"]);
    localStorage.setItem("id", data["_id"]);
    localStorage.setItem("username", data["username"]);
    this.router.navigate(["/books/all"]);
  }
}
