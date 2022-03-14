module.exports = (req, res, next) => {
  try {
    res
      .status(205)
      .clearCookie('access_token')
      .json({ message: 'Logged out successfully' });
  } catch (err) {
    next(err);
  }
};
