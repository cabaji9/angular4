import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CorsService {

  backend= 'http://localhost:8580/workflow/api';

  constructor(private http: Http) {
  }

  getDatosSolicitud(requestData: any) {
    const url = this.backend + '/datos-solicitud/consulta';
    return this.http.post(url, requestData).toPromise();
  }

}
