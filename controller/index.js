const requestHandle = (app) => {
  app.use('/api', require('./api'));
}

module.exports = requestHandle;