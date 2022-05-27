//#region CLASS

export class RegexConstant
{

    static STRING_REGULAREXPRESSION_EMAIL: string = "^[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}(\\.[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})+$";
    static STRING_REGULAREXPRESSION_EMAIL_FORMAT: string = "^\w+([\._#$%^&*()+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$"
    static STRING_REGULAREXPRESSION_NUMBER_RANGE: string = "/[^0-9]/g"

}

//#endregion