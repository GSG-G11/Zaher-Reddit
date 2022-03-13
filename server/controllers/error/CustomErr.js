module.exports = (message, statusCode) => {
  const customErr = new Error(message);
  customErr.status = statusCode;
  return customErr;
};
