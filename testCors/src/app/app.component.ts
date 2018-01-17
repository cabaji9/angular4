import {Component, OnInit} from '@angular/core';
import {CorsService} from './service/cors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private corsSevice: CorsService) {

  }

  ngOnInit() {

    const requestData = {'terminal': '', 'agencia': '', 'operador': 0, 'canal': '', 'empresa': 0, 'idSolicitud': 22074};

    this.corsSevice.getDatosSolicitud(requestData).then(response => {
      console.log(response);
    }).catch(this.handleError);

  }


  private handleError(error: any): Promise<any> {
    console.log(`An error occurred ${error}`);
    return Promise.reject(error.message || error);
  }
}
