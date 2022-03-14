const loginForm = document.forms[0];
const errorContainer = document.querySelector('#error');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    username: loginForm.username.value.trim(),
    password: loginForm.password.value.trim(),
  };

  if (data.username === '' || data.password === '') return;

  try {
    const payload = await axios.post('/api/v1/login', data);
    window.location.href = '/';
  } catch (err) {
    const errPayload = err.response.data;
    if (errPayload.status === 404 || errPayload.status === 500) {
      handleErrPages(errPayload.status);
    } else {
      errorContainer.textContent = errPayload.message;
    }
  }
});
