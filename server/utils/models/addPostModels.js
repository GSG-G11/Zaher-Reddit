const validPost = {
  title: 'Great Work',
  content: 'I love your website',
};

const emptyTitle = {
  title: '',
  content: 'I love your website',
};

const tooShortTitle = {
  title: '..',
  content: 'I love your website',
};

const tooLongContent = {
  title: 'Valid Title',
  content: '9zKI2hyfnDmTeU0EYZwMdLJADu7untJUK1S4TrbFFX2bZBzGtC4NW8p2QB2PzcZQUpuCrbMCyBDxYjT9aSYsymAg69vqoGEwDykxFarHvHaBkOin9X8eaNty8behUDuRiuNqLMu2YkGMggmXjrR6wzQIeMip5TRvHcx0SIUdeOMnxucIFAfKZa6e8H4jLy6oShrI2hGHN0a90YbGZdX43gNeI449xhs9cKpmRJfNZ1qAAhGDG5Yf1Q1BSwi3SXXvNYt3kwEaw3QidfxUkRMP09rWTztziFa4LspKOt1HYXE4',
};

module.exports = {
  validPost,
  emptyTitle,
  tooShortTitle,
  tooLongContent,
};
