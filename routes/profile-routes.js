const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(`You are logged in ${req.user.username}`);
});

module.exports = router;
