//#region  CLASS

export class WebAdressConstant
{

    static HTTPS: string = "https://"
    static DOMAIN: string = "reqres.in"

    static STRING_URL_POST_LOGIN: string = `${WebAdressConstant.HTTPS}${WebAdressConstant.DOMAIN}/api/login`
    static STRING_URL_POST_USER: string = `${WebAdressConstant.HTTPS}${WebAdressConstant.DOMAIN}/api/users`
    static STRING_URL_GET_LIST_USER: string = `${WebAdressConstant.HTTPS}${WebAdressConstant.DOMAIN}/api/users`

}

//#endregion