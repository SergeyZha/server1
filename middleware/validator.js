export const recordValidation = (req, res, next) => {
  const { artist, title } = req.body;
  if (!artist || !title) {
    const error = new Error('Some fields are missing!');
    error.status = 404;
    next(error);
  }
  next();
};

export const errorHandler = (error, req, res, next) => {
  res.status(error.status || 500).send(error.message || 'Sorry there is error');
};
