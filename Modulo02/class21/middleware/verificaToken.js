let jwt = require("jsonwebtoken");

const verificaToken = function (req, res, next) {
  let token = req.headers.authorization;
  try {
    var decoded = jwt.verify(token, "banana-nanica");
    console.log(decoded.username);

    next();
  } catch (err) {
    res.sendStatus(401);
  }
};

module.exports = verificaToken;
