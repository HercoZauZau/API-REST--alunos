import User from '../models/User';

class UserController {
  async store(req, res) {
    /**
     * Regista um usuário aluno na DB e retorna os dados do mesmo.
     *
     * @returns json
    */

    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    /**
     * Retorna os dados de todos usuários da DB.
     *
     * @returns json
    */

    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    /**
     * Retorna os dados de um usuário específico com base na ID.
     *
     * @returns json
    */

    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  async update(req, res) {
    /**
     * Atualiza os dados do usuário em secção.
     *
     * Troque "req.userId" por "req.params.id" para especificar o usuário
     *
     * @returns json
    */

    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Nenhum usuário com essa ID.'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    /**
     * Apaga o usuário em secção da DB.
     *
     * Troque "req.userId" por "req.params.id" para especificar o usuário
     *
     * @returns json
    */

    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Nenhum usuário com essa ID.'],
        });
      }

      await user.destroy();

      return res.json({
        msg: `'${user.nome}' apagado(a).`,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
