import UserService from '../services/UserService';

class UserController {
  async index(req, res) {
    const users = await UserService.getBDayUsers(1, 5);
    return res.json(users);
  }

  async store(req, res) {
    return res.json({ ok: true });
  }
}

export default new UserController();
