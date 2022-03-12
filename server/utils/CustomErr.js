module.exports = (message, statusCode) => {
  const CustomErr = new Error(message);
  CustomErr.status = statusCode;
  return CustomErr;
};
