import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    /**
     * Retorna os dados de todos alunos da DB em ordem decrescente de ID.
     *
     * @returns json
    */

    try {
      const alunos = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['filename', 'url'],
        },
      });
      return res.json(alunos);
    } catch (e) {
      return res.status(500).json({
        errors: ['Erro de conexao'],
      });
    }
  }

  async store(req, res) {
    /**
     * Regista um novo aluno na DB e retorna os dados do mesmo.
     *
     * @returns json
    */

    try {
      const aluno = await Aluno.create(req.body);

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    /**
     * Retorna os dados de um aluno específico com base na ID.
     *
     * @returns json
    */

    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID necessário'],
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });

      if (!aluno) {
        return res.status(404).json({
          errors: ['Nenhum aluno com essa ID.'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    /**
     * Atualiza os dados de um aluno específico com base na ID.
     *
     * @returns json
    */

    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID necessário'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Nenhum aluno com essa ID.'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);

      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    /**
     * Apaga o aluno da DB.
     *
     * @returns json
    */

    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID necessário'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Nenhum aluno com essa ID.'],
        });
      }

      await aluno.destroy();

      return res.json(`'${aluno.nome}' apagado(a).`);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
