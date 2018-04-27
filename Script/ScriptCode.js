
let monImage = document.getElementById('ImgMap');
let monButton = document.querySelector('button'); 
let MonTitre = document.getElementById('BienvenuWord');

monImage.onclick = function () {

	let maSrc = monImage.getAttribute('src');
		if (maSrc === './Image/Tangier.10.gif') {
		monImage.src = './Image/185676979.jpg';
	}
	else{
		monImage.src='./Image/Tangier.10.gif';
	}
}
 function definirNomUtilisation(){
  	let monNom = prompt("Veuillez Saisir Votre Nom :");
  	localStorage.setItem("Nom", monNom);
  	MonTitre.innerHTML += " "+monNom;
  }
  if (!localStorage.getItem("Nom")) {
  	definirNomUtilisation();
  }
else{
	nomEnrg = localStorage.getItem("Nom");
	MonTitre.innerHTML += " "+nomEnrg;
}

monButton.onclick = function(){
	definirNomUtilisation();
}



