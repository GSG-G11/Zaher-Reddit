const headerContainer = document.querySelector('header .container');
const postsContainer = document.querySelector('.posts-container');

const authenticatedUserPage = async (username, userId) => {
  document.querySelector('.controls').remove();
  const welcome = document.createElement('p');
  welcome.className = 'welcome';
  welcome.textContent = `Welcome ${username}`;
  const logout = document.createElement('button');
  logout.className = 'logout';
  logout.textContent = 'logout';
  headerContainer.append(welcome, logout);

  try {
    const payload = await axios.get('/api/v1/posts');
    const { posts } = payload.data;
    posts.sort((a, b) => b.votes - a.votes)
      .forEach((post) => renderPost(post, postsContainer, userId, true));
  } catch (err) {
    handleErrPages(err.response.status);
  }
};

const getAllPosts = async () => {
  try {
    const payload = await axios.get('/api/v1/posts');
    const { posts } = payload.data;
    posts.sort((a, b) => b.votes - a.votes).forEach((post) => renderPost(post, postsContainer));
  } catch (err) {
    handleErrPages(err.response.status);
  }
};

const getUserInfo = async () => {
  try {
    const payload = await axios.get('/api/v1/user');
    const { name: username, id: userId } = payload.data;
    authenticatedUserPage(username, userId);
  } catch (err) {
    getAllPosts();
    handleErrPages(err.response.status);
  }
};

getUserInfo();

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
