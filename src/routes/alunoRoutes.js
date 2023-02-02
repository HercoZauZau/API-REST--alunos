import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.get('/:id', alunoController.show);
router.post('/', loginRequired, alunoController.store);
router.put('/:id', loginRequired, alunoController.update);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;

/*
    index    Lista todos alunos    GET
    store    Cria um novo aluno    POST
    delete   Apaga um aluno        DELETE
    show     Mostra um aluno       GET
    update   Atualiza um aluno     PUT
*/
