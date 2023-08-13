const app = firebase.initializeApp(firebaseConfig);
console.log(app);
const signup = () => {
    let username = document.getElementById('username').value;
    let contact = document.getElementById('contact').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let role = 'User'
    // let role = document.querySelector('input[name="genre"]:checked').value;
    console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    let user = userCredential.user;
    console.log(user)

    firebase.database().ref('users/' + user.uid).set({
        uid : user.uid,
        username: username,
        email: email,
        role : role,
        profile_picture : imageUrl
      })
      .then(()=>{
        console.log('User created successfully.')
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  )
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode + ': ' + errorMessage)
    // ..
  });
}
const signin = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    let user = userCredential.user;
    console.log(user)
    const dbRef = firebase.database.ref();
    dbRef
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}