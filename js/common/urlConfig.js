/**
 * Created by dinghao on 2016/6/12.
 */
var urlConfig=(function(){
    return {
        /*判断企业是否注册*/
        checkCompanyUrl:"http://zanlaoli.vicp.cc:16446/check_existence",

        /*企业注册*/
        companyRegister:"http://zanlaoli.vicp.cc:16446/company_signup",

        /*获取验证码*/
        phoneCodeUrl:"http://zanlaoli.vicp.cc:16446/company_signup",

        /*校验验证码*/
        checkCodeUrl:"http://zanlaoli.vicp.cc:16446/check_message"

    };
})