


 
 
 /* EXERCICE 1#############################################

        var myVariable;

        myVariable = 'toto';

        alert(myVariable);




         Exercice 2###########################################################
         Version 1

        var lastName;
        var firstName;
        var city;

        lastName = 'Doe';
        firstName = 'John';
        city = 'New-York';

        alert('Nom : ' + lastName + '\n' + 'Prénom : ' + firstName + '\n' + 'Ville : ' + city);

        Version 2 let lastName = 'Doe', firstName = 'John', city = 'New York';

         version2
         version 2 var myString = 'Nom : ' + lastName + '\n' + 'Prénom : ' + firstName + '\n' + 'Ville : ' + city;
        */





        /*Exercice 3################################################

        var prenom = prompt('Entrez votre prénom :');
        alert('Bonjour ! ' + prenom);
        */


        /*Exercice 4###############################################
        
       function controle() {

       var yourName = document.getElementById("yourName").value;

       var yourNickname = document.getElementById("yourNickname").value;

       var yourCity = document.getElementById("yourCity").value;

       alert("Nom : " + yourName + "\n" + "Prenom : " + yourNickname + "\n" + "Ville : " + yourCity);


      }
      */

      
/* EXERCICE 5############################################

function Valider() {
    var valeur1 = document.getElementById("valeur1").value;

    var valeur2 = document.getElementById("valeur2").value;

    var result = (valeur1 % valeur2);

    alert(result);
}

*/


 /*EXERCICE 6############################################

function Valider() {
    var size = parseInt(document.getElementById("size").value);

    var date = parseInt(document.getElementById("date").value);

    var result = ((((size * 2) + 5) * 50) - date) + 1769;

    alert(result);
}
*/



/*EXERCICE 7############################################*/
function Valider() {
    var age = document.getElementById("age").value;

    if (age >= 18) {
        alert("Vous êtes majeur !");
    } else {
        alert("Vous êtes mineur !");
    }

}
