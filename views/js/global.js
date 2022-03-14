const errorContainer = document.querySelector('#error');

const handleErrPages = (status) => {
  if (status === 404) {
    window.location.href = '/html/404.html';
  } else if (status === 500) {
    window.location.href = '/html/500.html';
  }
};

const handleAuthResponse = async (endpoint, data) => {
  try {
    const payload = await axios.post(endpoint, data);
    if (payload.status === 201) {
      window.location.href = '/';
    }
  } catch (err) {
    const errPayload = err.response.data;
    const { status } = errPayload;
    if (status === 404 || status === 500) {
      handleErrPages(status);
    } else {
      errorContainer.textContent = errPayload.message;
    }
  }
};
