import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

  confirm(message: string, okCallBack: () => any) {
    alertify.confirm(message, (e: any) => {
      if ( e ) {
        okCallBack();
      }
    });
  }

  success(message: any) {
    alertify.success(message);
  }

  error(message: any) {
    alertify.error(message);
  }

  warning(message: any) {
    alertify.warning(message);
  }

  message(message: any) {
    alertify.message(message);
  }
}
