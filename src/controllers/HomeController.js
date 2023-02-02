class HomeController {
  async index(req, res) {
    res.json('API REST ALUNOS');
  }
}

export default new HomeController();
