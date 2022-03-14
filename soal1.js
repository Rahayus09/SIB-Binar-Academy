 function changedWord(selectText, changeText, text) {
    return text.split(selectText).join(changeText);
}
var kalimat1 = 'Andini sangat mencintai kamu selamanya';
var kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

console.log(changedWord('mencintai', 'membenci', kalimat1));
console.log(changedWord('bromo', 'semeru', kalimat2));
// --!ini hanya untuk membanfingkan--//
