let curUserId;
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

const createCommentBody = async (comment, parent, userId, authenticated) => {
  const commentBody = document.createElement('div');
  commentBody.className = 'comment';
  const commentBy = document.createElement('div');
  commentBy.className = 'by';
  const spanBy = document.createElement('span');
  spanBy.textContent = 'By ';
  const deleteBtnComment = document.createElement('span');
  deleteBtnComment.id = 'delete';
  deleteBtnComment.textContent = 'Delete';
  const commentOwner = document.createElement('a');
  const commentOwnerName = await axios.get(`/api/v1/user/${comment.user_id}`);
  commentOwner.text = commentOwnerName.data.name;
  commentOwner.href = `/users/${comment.user_id}`;
  spanBy.append(commentOwner);
  commentBy.append(spanBy);
  if (authenticated) {
    if (+userId === comment.user_id) {
      commentOwner.textContent = 'You';
      commentBy.textContent = '';
      commentBy.append(spanBy, deleteBtnComment);
    }
  }
  const commentContent = document.createElement('p');
  commentContent.textContent = comment.content;
  commentBody.append(commentBy, commentContent);
  parent.append(commentBody);
};

const renderAuthenticatedUserPrivileges = (usernameLink, parent) => {
  usernameLink.textContent = 'You';
  const deleteBtn = document.createElement('span');
  deleteBtn.id = 'delete';
  deleteBtn.textContent = 'Delete';
  parent.append(deleteBtn);
};

const renderPost = async (post, parent, userId, authenticated) => {
  curUserId = userId;
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
  try {
    const postVotesPayload = await axios(`/api/v1/votes/${post.id}`);
    const votesNumber = postVotesPayload.data.info.votes;
    votesNum.textContent = votesNumber;
  } catch (err) {
    handleErrPages(err.response.status);
  }
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
  showComments.setAttribute('onclick', 'showComments(this)');
  showComments.textContent = 'Show Comments';
  const showCommentsIcon = document.createElement('i');
  showCommentsIcon.className = 'fa-solid fa-message';
  showComments.append(showCommentsIcon);
  // add-comment
  const addComment = document.createElement('p');
  addComment.textContent = 'Add a Comment';
  addComment.className = 'add-comment';
  addComment.setAttribute('onclick', 'addComment(this)');
  const addCommentIcon = document.createElement('i');
  addCommentIcon.className = 'fa-solid fa-plus';
  addComment.append(addCommentIcon);

  commentsControllers.append(showComments, addComment);

  postBody.append(by, title, content, commentsControllers);
  postContainer.append(votes, postBody);
  const comments = document.createElement('div');
  comments.className = 'comments';
  try {
    const commentsPayload = await axios.get(`/api/v1/comments/${post.id}`);
    const postComments = commentsPayload.data.comments;
    if (!postComments.length) {
      const noComments = document.createElement('p');
      noComments.className = 'no-comments';
      noComments.textContent = 'No comments yet';
      comments.append(noComments);
    }
    postComments.forEach(async (comment) => {
      createCommentBody(comment, comments, userId, authenticated);
    });
    const commentFrom = document.createElement('form');
    commentFrom.className = 'comment-form';
    const commentInput = document.createElement('input');
    commentInput.name = 'content';
    commentInput.setAttribute('placeholder', 'Add Comment');
    commentInput.className = 'comment-content';
    const commentSubmit = document.createElement('button');
    commentSubmit.textContent = 'Add';
    commentSubmit.id = 'submit-comment';
    commentFrom.append(commentInput, commentSubmit);
    comments.append(commentFrom);
  } catch (err) {
    console.log(err.response);
  }
  parent.prepend(postContainer, comments);
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
      posts.forEach((post) => renderPost(post, postsContainer, userId, true));
    } catch (err) {
      handleErrPages(err.response.status);
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

const showComments = (button) => {
  const postId = button.parentElement.parentElement.parentElement.dataset.id;
  const commentsSection = document.querySelector(`[data-id="${postId}"] + .comments`);
  commentsSection.classList.toggle('show');
};

const addComment = (button) => {
  showComments(button);
};

document.addEventListener('click', async (e) => {
  if (e.target.matches('#submit-comment')) {
    e.preventDefault();
    const postId = e.target.parentElement.parentElement.previousSibling.dataset.id;
    const commentsSection = document.querySelector(`[data-id="${postId}"] + .comments`);
    const data = {
      content: e.target.parentElement.content.value.trim(),
      postId,
    };

    if (data.content === '') return;

    try {
      const payload = await axios.post('/api/v1/comment', data);
      e.target.parentElement.content.value = '';
      const newComment = payload.data.comment;
      createCommentBody(newComment, commentsSection, curUserId, true);
    } catch (err) {
      if (err.response.status === 401) {
        window.location.href = '/login';
      }
      handleErrPages(err.response.status);
    }
  }
});
