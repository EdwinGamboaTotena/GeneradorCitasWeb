import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

  private requests: HttpRequest<any>[] = [];

  constructor(public loaderService: LoaderService) {
    this.requests = [];
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requests.push(req);
    this.loaderService.show();
    return next.handle(req).pipe(
      finalize(() => {
        this.removeRequets(req);
        if (this.requests.length === 0) {
          this.loaderService.hide();
        }
      })
    );
  }

  private removeRequets(peticion: HttpRequest<any>): void {
    const indexRequest = this.requests.indexOf(peticion);
    if (indexRequest >= 0) {
      this.requests.splice(indexRequest, 1);
    }
  }
}
