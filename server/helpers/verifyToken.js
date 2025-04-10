const { verify, JsonWebTokenError, sign } = require("jsonwebtoken");
const { PUBLIC_KEY, PRIVATE_KEY } = require("../helpers/keys");
const model = require("../model/indexModel");

const AuthenticationForJwtToken = async (req, res, next) => {
  try {
    const authToken = req.get("Authorization");
    if (!authToken) {
      req.authToken = false;
      req.authRole = "";
      return next();
    }

    let verifyToken;
    try {
      verifyToken = verify(authToken, PUBLIC_KEY);
    } catch (error) {
      req.authToken = false;
      req.authRole = "";
      return next();
    }

    if (!verifyToken.id) {
      req.authToken = false;
      req.authRole = "";
      return next();
    }

    const findUser = await model.user.findOne({
      where: { user_id: verifyToken.id },
    });

    if (!findUser) {
      req.authToken = false;
      req.authRole = "";
      return next();
    }

    req.userId = findUser.user_id;
    req.userRole = findUser.role;
    req.authToken = true;

    next();
  } catch (error) {
    throw error;
  }
};

const verifyToken = async (token) => {
  try {
    if (!token) {
      return new Error("Sorry! No headers Found.");
    }
    const verifyNow = verify(token, PRIVATE_KEY);

    if (!verifyNow) {
      return JsonWebTokenError("token Error");
    }

    let result;
    if (verifyNow.role == "admin") {
      result = await model.admin.findOne({
        where: { admin_id: verifyNow.id },
      });
    } else {
      result = await model.user.findOne({
        where: { user_id: verifyNow.id },
      });
    }
    return result;
  } catch (error) {
    throw error;
  }
};

const GenerateToken = async (values, expire) => {
  try {
    const generateToken = await sign(values, PRIVATE_KEY, {
      algorithm: "RS256",
      expiresIn: expire ? expire : "12h",
    });
    return generateToken;
  } catch (error) {
    throw error;
  }
};

const readJwtToken = async (token) => {
  if (!token) {
    return new Error("Sorry! No headers Found.");
  }
  const verifyNow = verify(token, PRIVATE_KEY);

  if (!verifyNow) {
    return JsonWebTokenError("token Error");
  }

  return verifyNow;
};
module.exports = {
  AuthenticationForJwtToken,
  verifyToken,
  GenerateToken,
  readJwtToken,
};
