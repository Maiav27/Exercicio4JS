function exibirNome(){
    var Lnome = window.document.getElementById('nome');
    var nome = String(Lnome.value);
    window.alert(`O nome completo é : ${nome}`);
}