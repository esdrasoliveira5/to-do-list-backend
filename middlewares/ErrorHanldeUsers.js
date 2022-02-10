const ErrorHanldeUsers = (err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: `Erro: ${err.message}` });
};

module.exports = {
  ErrorHanldeUsers,
};
