import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

/*

Não é prático usar as funções 'index' e 'show' do userController em sistemas de API REST.
Um usuário não deve ter acesso a dados de outros usuários.

Mas você pode descomentar para usar em testes.

router.get('/', userController.index);
router.get('/:id', userController.show);

*/

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
    index    Lista todos usuários    GET
    store    Cria um novo usuário    POST
    delete   Apaga um usuário        DELETE
    show     Mostra um usuário       GET
    update   Atualiza um usuário     PUT
*/
