const onSubmit = () => {
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
        formMessage.innerHTML = "Error al enviar el mensaje ❌";
        console.log(error);
      }
    );
};

export { onSubmit };
