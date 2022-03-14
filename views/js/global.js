const errorContainer = document.querySelector('#error');

const handleAuthResponse = async (endpoint, data) => {
  try {
    const payload = await axios.post(endpoint, data);
    if (payload.status === 201) {
      window.location.href = '/';
    }
  } catch (err) {
    const errPayload = err.response.data;
    if (errPayload.status === 404) {
      window.location.href = '/html/404.html';
    } else if (errPayload.status === 500) {
      window.location.href = '/html/500.html';
    } else {
      errorContainer.textContent = errPayload.message;
    }
  }
};
