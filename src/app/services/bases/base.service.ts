//#region IMPORT

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralServiceInterface } from 'src/app/interfaces/generalservice.interface';
import { ResponseModel } from 'src/app/models/response.model';

//#endregion


//#region INJECTABLE

@Injectable({
  providedIn: 'root'
})

//#endregion


//#region CLASS

export class BaseService
{
  //#region VARIABLE

  _headerHttp: HttpHeaders = new HttpHeaders();

  //#endregion


  //#region CONSTRUCTOR

  constructor(private http: HttpClient)
  {

  }

  //#endregion


  //#region METHOD

  protected callServiceGet(interfaceGeneralService: GeneralServiceInterface, stringUrl: string): void
  {
    try {
      this.http.get<HttpResponse<any>>(stringUrl,
          {
            headers:
            this._headerHttp
            .append('Accept', 'application/json')
            .append('Content-Type', 'application/json'),
            observe:'response'
          }
        )
        .subscribe
        (
          modelHttpResponse =>
          {
            const modelResponse: ResponseModel = new ResponseModel();
            if (modelHttpResponse.body != null)
            {
              modelResponse.MessageTitle = modelHttpResponse.statusText;
              modelResponse.HTTPResponseCode = modelHttpResponse.status.toString();
              modelResponse.Data = JSON.stringify(modelHttpResponse.body);
              interfaceGeneralService.success(modelResponse);
            }
            else
            {
              interfaceGeneralService.signout;
            }
          },
          (error: {error: any; message: string;}) => {
            const modelResponse: ResponseModel = new ResponseModel();
            modelResponse.MessageTitle = error.message;
            modelResponse.HTTPResponseCode = error.error;
            modelResponse.Data = JSON.stringify(error.error);
            // alert(JSON.stringify(modelResponse));
            alert("Whoopss something bad happens!");
            interfaceGeneralService.fail(modelResponse);
          }
        )
    } catch (error) {
      alert("Whoopsss something bad happens!");
    }
  }

  protected callServicePost(interfaceGeneralService: GeneralServiceInterface, stringUrl: string, stringData: string): void
  {
    try {
      this.http.post<HttpResponse<any>>(stringUrl, stringData,
          {
            headers:
            this._headerHttp
            .append('Accept', 'application/json')
            .append('Content-Type', 'application/json'),
            observe:'response'
          }
        )
        .subscribe
        (
          modelHttpResponse =>
          {
            const modelResponse: ResponseModel = new ResponseModel();
            if (modelHttpResponse.body != null)
            {
              modelResponse.MessageTitle = modelHttpResponse.statusText;
              modelResponse.HTTPResponseCode = modelHttpResponse.status.toString();
              modelResponse.Data = JSON.stringify(modelHttpResponse.body);
              // alert(JSON.stringify(modelResponse));
              interfaceGeneralService.success(modelResponse);
            }
            else
            {
              interfaceGeneralService.signout;
            }
          },
          (error: {error: any; message: string;}) => {
            const modelResponse: ResponseModel = new ResponseModel();
            modelResponse.MessageTitle = error.message;
            modelResponse.HTTPResponseCode = error.error;
            modelResponse.Data = JSON.stringify(error.error);
            // alert(JSON.stringify(modelResponse));
            alert("Whoopss something bad happens!");
            interfaceGeneralService.fail(modelResponse);
          }
        )
    } catch (error) {
      alert("Whoopsss something bad happens!");
    }
  }

  //#endregion
}

//#endregion
