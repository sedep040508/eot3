const btn = document.querySelector('.btn')
const login = "Qwerty"
const psw = "password"

const access = {
    "admin": "password",
    "qwerty": "12345",
    "color": "0000",
    "user": "loh",
    "quero": "gfhjkm",
    "email": "ytrewq",
    "rab": "itacademy",
    "goha": "1111",
    "alya": "fdfggh",
    "marti": "helloworld",
}
// console.log(access["admin"])
//наличие ключа

console.log("admin" in access)
btn.addEventListener('click', function () {
    let inputLogin = document.querySelector('.input__login').value
    let inputPsw = document.querySelector('.input__psw').value
    // if( inputLogin === login){
    //     document.querySelector('.input_txt__login').style.display = "none"

    // }else{
    //     document.querySelector('.input_txt__login').style.display = "block"
    // }
    // if( inputPsw === psw){
    //     document.querySelector('.input_txt__psw').style.display = "none"

    // }else{
    //     document.querySelector('.input_txt__psw').style.display = "block"
    // }

    // if(inputLogin === login && inputPsw === psw){
    //     document.querySelector('.js-name').innerText = login
    //     document.querySelector('.form').style.display = 'none'
    //     document.querySelector('.success').style.display = 'block'
    // }
    if (inputLogin in access) {
        document.querySelector('.input_txt__login').style.display = "none"

        if (access[inputLogin] === inputPsw) {
            document.querySelector('.input_txt__psw').style.display = "none"

            document.querySelector('.success').style.display = "block"
            console.log('.js-name').innerText = inputLogin
            console.log('.form').style.display = "none"
        } else {
            document.querySelector('.input_txt__psw').style.display = "block"
        }

    }else{
       document.querySelector('.input_txt__login').style.display = "block"
    }
})
