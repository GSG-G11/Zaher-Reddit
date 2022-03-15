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

const renderAuthenticatedUserPrivileges = (usernameLink, parent) => {
  usernameLink.textContent = 'You';
  const deleteBtn = document.createElement('span');
  deleteBtn.id = 'delete';
  deleteBtn.textContent = 'Delete';
  parent.append(deleteBtn);
};

const renderPost = async (post, parent, userId, authenticated) => {
  // Post Card
  const postContainer = document.createElement('div');
  postContainer.className = 'post';
  postContainer.setAttribute('data-id', post.id);

  // Votes
  const votes = document.createElement('div');
  votes.className = 'votes';
  const votesWrapper = document.createElement('div');
  const upVote = document.createElement('i');
  upVote.className = 'fa-solid fa-chevron-up up-vote';
  const votesNum = document.createElement('div');
  votesNum.className = 'votes-num';
  votesNum.textContent = post.votes;
  const downVote = document.createElement('i');
  downVote.className = 'fa-solid fa-chevron-down down-vote';
  votesWrapper.append(upVote, votesNum, downVote);
  votes.append(votesWrapper);

  // Post Body
  // by
  const postBody = document.createElement('div');
  postBody.className = 'post-body';
  const by = document.createElement('div');
  by.className = 'by';
  const byTxt = document.createElement('span');
  byTxt.textContent = 'Posted by ';
  by.append(byTxt);
  try {
    const payload = await axios.get(`/api/v1/user/${post.user_id}`);
    const username = payload.data.name;
    const usernameLink = document.createElement('a');
    usernameLink.href = `/users/${post.user_id}`;
    usernameLink.textContent = username;
    byTxt.append(usernameLink);
    if (authenticated) {
      if (+userId === post.user_id) {
        renderAuthenticatedUserPrivileges(usernameLink, by);
      }
    }
  } catch (err) {
    handleErrPages(err.response.status);
  }
  // title
  const title = document.createElement('h3');
  title.className = 'title';
  title.textContent = post.title;
  // content
  const content = document.createElement('p');
  content.className = 'content';
  content.textContent = post.content;
  // comments-controllers
  const commentsControllers = document.createElement('div');
  commentsControllers.className = 'comments-controllers';
  const showComments = document.createElement('p');
  showComments.className = 'show-comments';
  showComments.textContent = 'Show Comments';
  const showCommentsIcon = document.createElement('i');
  showCommentsIcon.className = 'fa-solid fa-message';
  showComments.append(showCommentsIcon);
  // add-comment
  const addComment = document.createElement('p');
  addComment.textContent = 'Add a Comment';
  addComment.className = 'add-comment';
  const addCommentIcon = document.createElement('i');
  addCommentIcon.className = 'fa-solid fa-plus';
  addComment.append(addCommentIcon);

  commentsControllers.append(showComments, addComment);

  postBody.append(by, title, content, commentsControllers);
  postContainer.append(votes, postBody);
  parent.append(postContainer);
};

const authenticatedUserPage = async (
  username,
  headerContainer,
  postsContainer,
  userId,
  homepage,
) => {
  document.querySelector('.controls').remove();
  const welcome = document.createElement('p');
  welcome.className = 'welcome';
  welcome.textContent = `Welcome ${username}`;
  const logout = document.createElement('button');
  logout.className = 'logout';
  logout.textContent = 'logout';
  headerContainer.append(welcome, logout);

  if (homepage) {
    try {
      const postsPayload = await axios.get('/api/v1/posts');
      const { posts } = postsPayload.data;
      posts.sort((a, b) => b.votes - a.votes)
        .forEach((post) => renderPost(post, postsContainer, userId, true));
    } catch (e) {
      handleErrPages(e.response);
    }
  }
};

const logoutHandler = async () => {
  try {
    const payload = await axios.delete('/api/v1/logout');
    if (payload.status === 205) {
      window.location.reload();
    }
  } catch (err) {
    handleErrPages(err.response.status);
  }
};
