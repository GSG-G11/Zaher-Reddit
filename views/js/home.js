const headerContainer = document.querySelector('header .container');
const postsContainer = document.querySelector('.posts-container');
const createPostInput = document.querySelector('.create-post input');
const { body } = document;

const createAddPostForm = () => {
  const model = document.createElement('div');
  model.className = 'create-post-model';
  const container = document.createElement('div');
  container.className = 'container';
  const form = document.createElement('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addPost({ title: form.title.value.trim(), content: form.content.value.trim() });
  });
  const heading = document.createElement('h2');
  heading.textContent = 'Create new post';
  const titlePair = document.createElement('div');
  titlePair.className = 'pairs';
  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'title');
  titleLabel.textContent = 'Post Title';
  const titleInput = document.createElement('input');
  titleInput.name = 'title';
  titleInput.type = 'title';
  titleInput.id = 'title';
  titlePair.append(titleLabel, titleInput);
  const contentPair = document.createElement('div');
  contentPair.className = 'pairs';
  const contentLabel = document.createElement('label');
  contentLabel.setAttribute('for', 'content');
  contentLabel.textContent = 'Post Content';
  const contentTextarea = document.createElement('textarea');
  contentTextarea.name = 'content';
  contentTextarea.type = 'content';
  contentTextarea.id = 'content';
  contentPair.append(contentLabel, contentTextarea);
  const error = document.createElement('p');
  error.id = 'error';
  const submit = document.createElement('button');
  submit.textContent = 'Submit';
  submit.id = 'add-post';
  container.append(heading, titlePair, contentPair, error, submit);
  form.append(container);
  model.append(form);
  body.append(model);
};

const getAllPosts = async () => {
  try {
    const payload = await axios.get('/api/v1/posts');
    const { posts } = payload.data;
    console.log(posts);
    forEach((post) => renderPost(post, postsContainer));
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

document.addEventListener('click', async (e) => {
  if (e.target.matches('.logout')) {
    logoutHandler();
  } else if (e.target.matches('.create-post-model')) {
    document.querySelector('.create-post-model').remove();
    body.classList.remove('model-appear');
  } else if (e.target.matches('.up-vote')) {
    const postId = e.target.parentElement.parentElement.parentElement.dataset.id;
    const upVote = document.querySelector(`[data-id="${postId}"] .up-vote`);
    const downVote = document.querySelector(`[data-id="${postId}"] .down-vote`);
    const votesNum = document.querySelector(`[data-id="${postId}"] .votes-num`);
    upVote.classList.add('disable');
    downVote.classList.remove('disable');
    const prevCount = Number(votesNum.textContent);
    votesNum.textContent = prevCount + 1;
    try {
      await axios.put('/api/v1/vote', { postId: Number(postId), voteType: 'up' });
    } catch (err) {
      console.log(err.response);
    }
  } else if (e.target.matches('.down-vote')) {
    const postId = e.target.parentElement.parentElement.parentElement.dataset.id;
    const upVote = document.querySelector(`[data-id="${postId}"] .up-vote`);
    const downVote = document.querySelector(`[data-id="${postId}"] .down-vote`);
    const votesNum = document.querySelector(`[data-id="${postId}"] .votes-num`);
    downVote.classList.add('disable');
    upVote.classList.remove('disable');
    const prevCount = Number(votesNum.textContent);
    votesNum.textContent = prevCount - 1;
    try {
      await axios.put('/api/v1/vote', { postId: Number(postId), voteType: 'down' });
    } catch (err) {
      console.log(err.response);
    }
  }
});

createPostInput.addEventListener('click', () => {
  createAddPostForm();
  body.className = 'model-appear';
});

const addPost = async (data) => {
  try {
    if (data.title === '' || data.content === '') return;
    body.classList.remove('model-appear');
    const payload = await axios.post('/api/v1/post', data);
    const { post } = payload.data;
    renderPost(post, postsContainer, post.user_id, true);
    document.querySelector('.create-post-model').remove();
  } catch (err) {
    if (err.response.status === 401) {
      window.location.href = '/login';
    } else if (err.response.status === 400) {
      document.querySelector('#error').textContent = err.response.data.message;
    } else handleErrPages(err.response.status);
  }
};
