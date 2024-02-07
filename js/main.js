const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass);
  const iconEye = document.getElementById(loginEye);

  iconEye.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";
      iconEye.classList.add("ri-eye-line");
      iconEye.classList.remove("ri-eye-off-line");
    } else {
      input.type = "password";
      iconEye.classList.remove("ri-eye-line");
      iconEye.classList.add("ri-eye-off-line");
    }
  });
};

const submitData = () => {
  let form = document.getElementById("formLogin");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let inputs = form.getElementsByTagName("input");
    let message = "";

    for (const element of inputs) {
      if (element.type !== "checkbox") {
        message += element.name + ": " + element.value + "\n";
        element.value = "";
      }
    }

    alert(message);
  });
};

showHiddenPass("login-pass", "login-eye");
submitData();
