"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

/*

Não é prático usar as funções 'index' e 'show' do userController em sistemas de API REST.
Um usuário não deve ter acesso a dados de outros usuários.

Mas você pode descomentar para usar em testes.

router.get('/', userController.index);
router.get('/:id', userController.show);

*/

router.post('/', _loginRequired2.default, _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

// O usuário só poderá atualizar e apagar seus próprios dados.

exports. default = router;

/*
    index    Lista todos usuários    GET
    store    Cria um novo usuário    POST
    delete   Apaga um usuário        DELETE
    show     Mostra um usuário       GET
    update   Atualiza um usuário     PUT
*/
