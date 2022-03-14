const headerContainer = document.querySelector('header .container');

const authenticatedUserHeader = (username) => {
  document.querySelector('.controls').remove();
  const welcome = document.createElement('p');
  welcome.className = 'welcome';
  welcome.textContent = `Welcome ${username}`;
  const logout = document.createElement('button');
  logout.className = 'logout';
  logout.textContent = 'logout';
  headerContainer.append(welcome, logout);
};

document.addEventListener('click', async (e) => {
  if (e.target.matches('.logout')) {
    try {
      const payload = await axios.delete('/api/v1/logout');
      if (payload.status === 205) {
        window.location.reload();
      }
    } catch (err) {
      handleErrPages(err.response.status);
    }
  }
});

const getUserInfo = async () => {
  try {
    const payload = await axios.get('/api/v1/user');
    const username = payload.data.name;
    authenticatedUserHeader(username);
  } catch (err) {
    handleErrPages(err.response.status);
  }
};

getUserInfo();
