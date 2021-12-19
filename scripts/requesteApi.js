function handleCredentialResponse(response) {
                      
    const data = jwt_decode(response.credential)

    loadInfosProfile(data.name, data.email, "google")

}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "384250235525-mdqbtbonug0k5uo7gcc3qf6mubp2ems6.apps.googleusercontent.com",
    callback: handleCredentialResponse,
    context:"use",
    ux_mode:"popup",
    login_uri:"https://programador-master.github.io/Education-with-Technology/",
    auto_select:"true"
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "filled_black",
     size: "large",
     shape:"pill",
     text:"$ {button.text}",
     logo_alignment:"left" }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}

const btnSubmitGit = document.querySelector('button#btnSubmitGit')

btnSubmitGit.addEventListener('click', () => {

  let nameGit = document.querySelector('input#nameGit')
  let url = `https://api.github.com/users/${nameGit.value}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    loadInfosProfile(data.name, data.email, "git")
  
  })
  
})


function loadInfosProfile(name, email, local) {

  const inpName = document.querySelector('input#name')
  const inpEmail = document.querySelector('input#email')

  if(local == "git") {

    if(name == undefined && email == undefined) {

      alert("Verifique seu nome do GitHub")
  
      nameGit.focus()
  
    }else if(email == null) {
  
      inpName.value = name 
  
      inpEmail.focus()
  
    }else {
  
      inpEmail.value = email
      inpQuestion.focus()
    }

  }else if(local == "google") {

    inpName.value = name 
    inpEmail.value = email

    inpQuestion.focus()

  }

}
