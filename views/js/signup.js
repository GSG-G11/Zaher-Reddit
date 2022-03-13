const signupForm = document.forms[0];
const errorContainer = document.querySelector('#error');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    username: signupForm.username.value,
    email: signupForm.email.value,
    password: signupForm.password.value,
  };

  // guard against empty fields
  if (data.username.trim() === '' || data.email.trim() === '' || data.password.trim() === '') return;

  try {
    const response = await fetch('/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const payload = await response.json();

    if (payload.status !== 201) {
      errorContainer.textContent = payload.message;
    } else {
      window.location.href = '/';
    }
  } catch (err) {
    alert(err.message);
  }
});
