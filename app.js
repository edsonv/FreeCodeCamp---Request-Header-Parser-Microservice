const { Router } = require('express');

const router = Router();

router.get('/whoami', (req, res, next) => {
  console.log(req.headers);
  return res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent'],
  });
});

module.exports = router;
