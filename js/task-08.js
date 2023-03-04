const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  
  const email = formEl.email.value;
  const password = formEl.password.value;
  const formData = {    
    email,
    password,
  }
  console.log(formData);

  if (email === "" || password === "") {
    alert ("Please fill in all the fields!");
  };

  event.currentTarget.reset();
  }