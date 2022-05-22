//#region  CLASS

export class WebAdressConstant
{

    static HTTPS: string = "https://"
    static DOMAIN: string = "reqres.in"
    static DOMAIN_USER_BRINS: string = "development.user.api.brinesia.app"

    static STRING_URL_POST_LOGIN: string = `${WebAdressConstant.HTTPS}${WebAdressConstant.DOMAIN}/api/login`
    static STRING_URL_POST_USER: string = `${WebAdressConstant.HTTPS}${WebAdressConstant.DOMAIN}/api/users`
    static STRING_URL_POST_GENERATE_TOKEN_DUMMY: string = `${WebAdressConstant.HTTPS}${WebAdressConstant.DOMAIN_USER_BRINS}/Dummy/generateTokenDummy`
    static STRING_URL_POST_VERIFY_TOKEN_DUMMY: string = `${WebAdressConstant.HTTPS}${WebAdressConstant.DOMAIN_USER_BRINS}/Dummy/verifyTokenDummy`
    static STRING_URL_GET_LIST_USER: string = `${WebAdressConstant.HTTPS}${WebAdressConstant.DOMAIN}/api/users`

}

//#endregion