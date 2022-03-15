const headerContainer = document.querySelector('header .container');
const postsContainer = document.querySelector('.posts-container');

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
    authenticatedUserPage(username, headerContainer, postsContainer, userId, true);
  } catch (err) {
    getAllPosts();
    handleErrPages(err.response.status);
  }
};

getUserInfo();

document.addEventListener('click', (e) => {
  if (e.target.matches('.logout')) {
    logoutHandler();
  }
});
