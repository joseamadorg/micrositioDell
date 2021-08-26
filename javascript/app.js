/* function registrar(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  
}



function validar(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        //...
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

      function acceder() {
        location.replace("../micro.html")
      }
      acceder();
};

function observador(){
  


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user.email)
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      console.log('usuario inactivo')
      
      // User is signed out.
      // ...
    }
  });
}
observador();

function salir(){
  firebase.auth().signOut()
  .then(function(){
    location.replace("gracias.html")
  });

}
*/

