const urlApi = "http://localhost:4000/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    
    login:urlApi +"api/users/login",
    admlogin:urlApi +"admin/admins/login",
    uploadFileImg: urlApi + "utils/uploadImg",
    guardarImgUser: urlApi + "api/users/guardarImgUser",
    getImgUser: urlApi + "api/users/imgUserByMail",
    registration:urlApi + "api/users/registration",
    contrato:urlApi + "contrato/contratos/create",

}

export default urlWebServices;