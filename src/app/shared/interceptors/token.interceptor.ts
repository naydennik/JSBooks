import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

const appKey = "kid_rkQIJij8U";
const appSecret = "8c58a51391de4c9cb5e0279302d15bca";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.endsWith("login") || request.url.endsWith(appKey)) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${btoa(`${appKey}:${appSecret}`)}`,
          "Content-Type": "application/json",
        },
      });
    } else {
      request = request.clone({
        setHeaders: {
          Authorization: `Kinvey ${sessionStorage.getItem("authtoken")}`,
          "Content-Type": "application/json",
        },
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
    sessionStorage.setItem("authtoken", data["_kmd"]["authtoken"]);
    sessionStorage.setItem("id", data["_id"]);
    sessionStorage.setItem("username", data["username"]);
    this.router.navigate(["/books/all"]);
  }
}
