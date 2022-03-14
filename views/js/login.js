const loginForm = document.forms[0];

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    username: loginForm.username.value.trim(),
    password: loginForm.password.value.trim(),
  };

  // guard against empty fields
  if (data.username === '' || data.password === '') return;

  handleAuthResponse('/api/v1/login', data);
});
