const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send({mensagem: 'Nenhum usuário cadastrado.'});
});

module.exports = router;
