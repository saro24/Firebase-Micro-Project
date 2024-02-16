const onSignup = () => {
    const first_name = document.getElementById("firstName").value; 
    const last_name = document.getElementById("lastName").value; 
    const email = document.getElementById("email").value; 
    const password = document.getElementById("password").value; 
 
    console.log({
     first_name, last_name, email, password
    })
 
    auth.createUserWithEmailAndPassword(email, password)
    .then((userAccount) => {
      db.collection("users").doc().set({first_name, last_name, email, created_at: new Date()})
      .then((userProfile) => {
        //   alert("User registered successfully")
          console.log(userProfile)
          window.location.href = "./login.html";
      })
      .catch((error) => {
         alert("User not registered")
         console.log(error)
      })
    })
    .catch((error) => {
     alert("Error occurred");
     console.log(error)
    })
 }
 
 const onLogin = () => {
     const email = document.getElementById("email").value; 
     const password = document.getElementById("password").value; 
 
     auth.signInWithEmailAndPassword(email, password)
     .then((userSession) => {
        //  alert("You logged In successfully")
         window.location.href="./dashboard.html"
         console.log(userSession);
     })
     .catch((error) => {
         alert("Invalid credentials")
         console.log(error)
     })
 }