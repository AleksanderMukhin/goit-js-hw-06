const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

if (email === "" || password === "") {
   alert ("Please fill in all the fields!");
} else { 
  const formData = {
    email,
    password,
  };
  console.log(formData);
  event.currentTarget.reset();
  };  
  }