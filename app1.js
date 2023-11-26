// var firebaseConfig = {
//   apiKey: "AIzaSyCPPiK2Pue111SNbRiXBg8LJXxNn-Ru_E0",
//   authDomain: "easifylife-website.firebaseapp.com",
//   databaseURL: "https://easifylife-website-default-rtdb.firebaseio.com",
//   projectId: "easifylife-website",
//   storageBucket: "easifylife-website.appspot.com",
//   messagingSenderId: "244834585893",
//   appId: "1:244834585893:web:81e074ca80a679c8c79ecc",
//   measurementId: "G-89LV6DX9WB"
// };

// // // Initialize Firebase
// var app = firebase.initializeApp(firebaseConfig);
// console.log(firebase.datbase());



// //   function newsletter(){
//     var email = document.getElementById("email");
//     // var password =document.getElementById("password");

//  //  web namespaced API
    
//   firebase.auth().createUserWithEmailAndPassword(email.value)
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//    window.location.href ="index.html";

//    //Send a user a verification email

//   //  firebase.auth().currentUser.sendEmailVerification()
//   // .then(() => {
//   //   alert("Email Verification Sent....");
//   // });
//   // })
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });
  

//     var input = document.getElementById("input");
    
//       var user = {
//           input: input.value,
//       }
    
//       firebase.database().ref("newsletter/useremail").push(user);
//     }

//     // newsletter();


