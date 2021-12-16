function handleCredentialResponse(response) {
                      
    const data = jwt_decode(response.credential)

    profileInfos(data.name, data.email)

}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "384250235525-mdqbtbonug0k5uo7gcc3qf6mubp2ems6.apps.googleusercontent.com",
    callback: handleCredentialResponse,
    context:"use",
    ux_mode:"popup",
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

function profileInfos(name, email) {

    const inpName = document.querySelector("input.name")
    const inpEmail = document.querySelector("input.email")

    inpName.innerHTML = name
    inpEmail.innerHTML = email

}
