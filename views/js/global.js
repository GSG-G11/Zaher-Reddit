const handleErrPages = (status) => {
  if (status === 404) {
    window.location.href = '/html/404.html';
  } else if (status === 500) {
    window.location.href = '/html/500.html';
  }
};
