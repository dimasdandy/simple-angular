//#region IMPORT

import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralServiceInterface } from 'src/app/interfaces/generalservice.interface';
import { ResponseModel } from 'src/app/models/response.model';

//#endregion


//#region INJECTABLE

@Injectable
(
    {
        providedIn: 'root'
    }
)

//#endregion


//#region CLASS

export class BaseService
{
    //#region VARIABLE

    public _httpHeader: HttpHeaders = new HttpHeaders();
    public _httpClient: HttpClient;
    public _httpParams: HttpParams;

    //#endregion


    //#region CONSTRUCTOR

    constructor(private http: HttpClient)
    {
        this._httpClient = http;
        this._httpParams = new HttpParams();
    }

    //#endregion


    //#region METHOD

    protected callServiceGet(interfaceGeneralService: GeneralServiceInterface, stringUrl: string): void
    {
        try
        {
            this._httpClient.get<HttpResponse<any>>
            (
                stringUrl,
                {
                    headers:
                    this._httpHeader
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
                error =>
                {
                    const modelResponse: ResponseModel = new ResponseModel();
                    modelResponse.MessageTitle = error.statusText;
                    modelResponse.HTTPResponseCode = error.status.toString;
                    modelResponse.Data = JSON.stringify(error.body);
                    interfaceGeneralService.fail(modelResponse);
                }
            )
        }
        catch (error)
        {
            alert("Whoopsss something bad happens!");
        }
    }

    protected callServiceGetList(interfaceGeneralService: GeneralServiceInterface, stringUrl: string, page: number, per_page: number): void
    {
        try
        {
            this._httpClient.get<HttpResponse<any>>
            (
                stringUrl,
                {
                    headers: this._httpHeader
                    .append('Accept', 'application/json')
                    .append('Content-Type', 'application/json'),
                    params: this._httpParams
                    .append('page', page)
                    .append('per_page', per_page),
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
                error =>
                {
                    const modelResponse: ResponseModel = new ResponseModel();
                    modelResponse.MessageTitle = error.statusText;
                    modelResponse.HTTPResponseCode = error.status.toString;
                    modelResponse.Data = JSON.stringify(error.body);
                    interfaceGeneralService.fail(modelResponse);
                }
            )
        }
        catch (error)
        {
            alert("Whoopsss something bad happens!");
        }
    }

    protected callServicePost(interfaceGeneralService: GeneralServiceInterface, stringUrl: string, stringData: string): void
    {
        try
        {
            this._httpClient.post<HttpResponse<any>>
            (
                stringUrl, stringData,
                {
                    headers:
                    this._httpHeader
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
                error =>
                {
                    const modelResponse: ResponseModel = new ResponseModel();
                    modelResponse.MessageTitle = error.statusText;
                    modelResponse.HTTPResponseCode = error.status.toString;
                    modelResponse.Data = JSON.stringify(error.body);
                    interfaceGeneralService.fail(modelResponse);
                }
            )
        }
        catch (error)
        {
            alert("Whoopsss something bad happens!");
        }
    }

    //#endregion

}

//#endregion
