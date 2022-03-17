const userId = window.location.href.split('/').pop();
const headerContainer = document.querySelector('header .container');
const postsContainer = document.querySelector('.posts-container');
const profileOwner = document.querySelector('.user-info .username');

const getUserInfo = async () => {
  try {
    let loggedUserId;
    try {
      const loggedUserPayload = await axios.get('/api/v1/user');
      loggedUserId = loggedUserPayload.data.id;
    } catch (e) {
      handleErrPages(e.response.status);
    }
    const userPostsPayload = await axios.get(`/api/v1/user-posts/${userId}`);
    const usernamePayload = await axios.get(`/api/v1/user/${userId}`);
    profileOwner.textContent = `${usernamePayload.data.name} Profile`;
    if (userPostsPayload.data.message === 'No Posts') {
      const noPosts = document.createElement('div');
      noPosts.className = 'no-posts';
      noPosts.textContent = 'No Posts Yet';
      postsContainer.append(noPosts);
    } else {
      postsContainer.textContent = '';
      const userPosts = userPostsPayload.data.posts;
      if (userPosts.length) {
        userPosts.forEach((post) => renderPost(post, postsContainer, loggedUserId, true));
      }
    }
    const payload = await axios.get('/api/v1/user');
    const { name: username } = payload.data;
    authenticatedUserPage(username, headerContainer, postsContainer, userId, false);
  } catch (err) {
    handleErrPages(err.response.status);
  }
};

getUserInfo();

document.addEventListener('click', (e) => {
  if (e.target.matches('.logout')) {
    logoutHandler();
  }
});
