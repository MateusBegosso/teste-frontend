export function submitData() {
  let form = document.getElementById("form");

  form.addEventListener("submit", (event) => {
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
}
