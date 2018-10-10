// Any error will be catch and pass to expressjs
// Exaple usage:
// app.get('/hello', asyncHandler( (req, res, next) => {}));
const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;
