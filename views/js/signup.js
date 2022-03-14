const signupForm = document.forms[0];

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    username: signupForm.username.value.trim(),
    email: signupForm.email.value.trim(),
    password: signupForm.password.value.trim(),
  };

  // guard against empty fields
  if (data.username === '' || data.email === '' || data.password === '') return;

  handleAuthResponse('/api/v1/signup', data);
});
