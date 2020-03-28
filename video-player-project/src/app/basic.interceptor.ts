import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

@Injectable()
export class BasicInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // set source header for every outgoing request

            request = request.clone({
                setHeaders: { 
                    'source': 'web'
                }
            });

        return next.handle(request).pipe(
            tap(
              event => {
                //logging the http response to browser's console in case of a success
                if (event instanceof HttpResponse) {
                  console.log("api call success :", event);
                }
              },
              error => {
                //logging the http response to browser's console in case of a failuer
                if (event instanceof HttpResponse) {
                  console.log("api call error :", event);
                }
              }
            )
        );
    }
}