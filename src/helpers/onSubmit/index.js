const onSubmit = () => {
  const buttonLoader = document.getElementById("submit__button");
  buttonLoader.innerHTML = "Enviando...";
  const formMessage = document.getElementById("form-message");
  const inputs = document.querySelectorAll(".has-value");
  emailjs
    .sendForm(
      "service_wh5beuk",
      "template_92296fy",
      "#contactForm",
      "JbG1nGAQSx6hkl4F1"
    )
    .then(
      () => {
        buttonLoader.innerHTML = "Enviar mensaje";
        formMessage.innerHTML = "Mensaje enviado correctamente ✅";
        document.getElementById("contactForm").reset();
        inputs.forEach((input) => {
          input.classList.remove("has-value");
        });
        setTimeout(() => {
          formMessage.innerHTML = "";
        }, 5000);
      },
      (error) => {
        buttonLoader.innerHTML = "Enviar mensaje";
        formMessage.innerHTML = "Error al enviar el mensaje ❌";
        console.log(error);
      }
    );
};

export { onSubmit };
