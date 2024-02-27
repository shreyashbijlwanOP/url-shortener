const Auth = require("../service/auth.service");

const checkAuthentication = async (req, res, next) => {
  const tkn = req.cookies.tkn;
  if (!tkn) {
    res.status(401).json({ message: "Not Authorized" });
  }

  let user = Auth.getUser(tkn);

  if (!user) {
    res.status(401).json({ message: "Session has been expired" });
  }

  req.user = user;

  next();
};

const restrictToRoles = (roles) => {
  return (req, res, next) => {
    let user = req.user;
    if (roles.includes(user.role)) {
      return next();
    }
    res
      .send(403)
      .json({ message: "This Page is Forbidden Ask Admin or Leave" });
  };
};

module.exports = { checkAuthentication, restrictToRoles };
