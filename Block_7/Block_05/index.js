// 1. Написать регулярное выражение проверки номера телефона по формату +сс(mmm)xxx-xx-xx, 
////Где cc - код страны, mmm - код мобильного оператора, x - номер телефона
// формат кода страны +сс
function checkIsValidPhone(phone) {
    return /^\+\d{2}\(\d{3}\)\d{3}(-\d{2}){2}$/g.test(phone);
}
// формат кода страны +с, +сc, +сcc, +с-ccc
function checkIsValidPhoneNumber(phone) {
    return /^\+\d(\d{0,2}|-\d{3})\(\d{3}\)\d{3}(-\d{2}){2}$/g.test(phone);
}
// 2. Написать регулярное выражение проверки на email
function checkIsValidEmail(email) {
    return /^\w+([-+.]?\w+)*@\w+([-.]?\w+)*(\.\w{2,6})+$/g.test(email);
}
// 3. Написать регулярное выражение проверку на сайт: http(s)://test.dev(.dev.dev...)
function checkIsSite(url) {
    return /^(https?\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})*/g.test(url);
}
// 4. Написать регулярное выражение проверки пароля, который должен быть минимум 6 символов, максимум 25, 
//   состоять из латинских символов и цифр, может содержать в себе знак подчеркивания
function checkIsValidPassword(password) {
    return /^\w{6,25}$/g.test(password);
}
//5. Проверить строку на валидность ipv4 адреса
function checkIsValidIpv4(ipv4) {
    return /^(([0-1]?\d?\d|2[0-4]\d|25[0-5])\.){3}([0-1]?\d?\d|2[0-4]\d|25[0-5])$/g.test(ipv4);
}
