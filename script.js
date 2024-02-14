
function afficheVille() {
 // 1. Récupération de la valeur courante du select avec son id
	 let nomVilleChoisie = document.getElementById("choixVille").value;
	 // 2. Récupération de la liste de toutes les div correspondant à une div de météo
	// grâce à la classe « ville »
	 let villes =document.getElementsByClassName("Ville");
	 let appid=appid="eccf8200898239c01b81626293da9f1d";
	 fetch("https://api.openweathermap.org/data/2.5/weather?q=$(villes)&$(appid)");
	 // 3. Parcours de la liste des div météo. On cache celles non sélectionnées.
	 for (i=0; i<villes.length; i++) 
	 {
	 // l’attribut id de l’élément est comparée à la ville choisie
	 if (villes[i].id == nomVilleChoisie) 
	 {
	 // garder l'élément visible -> ELEMENT.style.display= "";
		villes[i].style.display="";
	 } else 
	 {
		villes[i].style.display="none";
	 }
	}
}
	 // cacher l'élément -> ELEMENT.style.display= "none";
window.onload=function(){
	documen.getElementById("choixVille").value="Poitiers";
	afficheVille();
	 
	 }