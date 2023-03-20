const { User } = require("../model/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userController = {
  add: async (req, res) => {
    const { name, email, phone, password } = req.body;

    const userEmail = await User.findOne({ email });
    const userName = await User.findOne({ name });
    if (userEmail || userName) {
      res.status(409).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    try {
      const user = new User({
        name: name,
        email: email,
        password: hashPassword,
        phone: phone,
      });
      await user.save();
      const token = jwt.sign({ id: user._id }, process.env.TOKENSECRET, {
        expiresIn: "3h",
      });
      res.status(200).json({
        user,
        token,
      });
    } catch (error) {}
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
      res.status(400).json({ message: "ten nguoi dung khong ton tai" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "mat khau khong dung" });
    }
    user.password = undefined;

    const token = jwt.sign({ id: user._id }, process.env.TOKENSECRET, {
      expiresIn: "3h",
    });
    res.status(200).json({
      user,
      token,
    });
  },
  getId: async (req, res) => {
    const user = req.user;
    if (user) {
      res.status(200).json(user);
    }
    res.status(401).json({ message: "no not user" });
  },
};

module.exports = userController;
