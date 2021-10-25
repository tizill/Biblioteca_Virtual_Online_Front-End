/*Menu 3 barras*/
function openNav(){
	document.getElementById('mySidenav').style.width = "180px";
}

function closeNav(){
	document.getElementById('mySidenav').style.width = "0";
}




//VALIDAÇÕES
function validarEmail(email){
    var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    var check=/@[w-]+./;
    var checkend=/.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){
		return false;
	}
    else {
		return true;
	}
}
	

function validarSenha(){
	var password = document.getElementById("password")
    var confirm_password = document.getElementById("confirm_password");
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes!");
  } else {
    confirm_password.setCustomValidity('');
  }
}
