(() => {
    db.collection("users").get().then((users) => {
        console.log(users);
        const tbody = document.getElementById("tbody");
        users.forEach((user) => {
          tbody.innerHTML += `
            <tr>
              <td>${user.data().first_name}</td>
              <td>${user.data().last_name}</td>
              <td>${user.data().email}</td>
              <td>${new Date(Date(user.data().created_at)).toLocaleDateString()}</td>
              <td>
              <button class="edit-btn">Edit</button>
              <button class="delete-btn">Delete</button>
             </td>
            </tr>
          `
        })
    })
})()

// fetch logged-in user profile
const getAuth = () => {
  auth.onAuthStateChanged((userSession) => {
    if(userSession){
      console.log("Have a session")
      db.collection("users").where('email', '==', userSession.email).get()
      .then((querySnapshot) => {
        if(!querySnapshot.empty){
          const userData = querySnapshot.docs[0].data();
          const firstName = userData.first_name;
          const lastName = userData.last_name;
          document.getElementById("user-name").innerHTML = `${firstName} ${lastName}`
        }
      })
    }
    else{
      window.location.href="./login.html";
    }
  })
}

getAuth();

const logout = () => {
  auth.signOut().then(() => {
    // alert("User logged out");
    window.location.href="./login.html"
  })
  .catch((error) => {
    console.log(error)
  })
}