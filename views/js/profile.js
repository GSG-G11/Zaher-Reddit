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
    const userPosts = userPostsPayload.data.posts;
    const usernamePayload = await axios.get(`/api/v1/user/${userId}`);
    profileOwner.textContent = `${usernamePayload.data.name} Profile`;
    if (userPosts.length) {
      userPosts.forEach((post) => renderPost(post, postsContainer, loggedUserId, true));
    } else {
      postsContainer.textContent = 'No Posts Yet';
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
