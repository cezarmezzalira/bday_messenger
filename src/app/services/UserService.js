import User from '../models/User';

class UserService {
  async getBdayUsers() {
    const where = ` (date_part('month', users.aniversario) =
                     date_part('month', CURRENT_DATE))
                and (date_part('day', users.aniversario) =
                     date_part('day', CURRENT_DATE)
                and (users.email !=''))`;
    const users = await User.sequelize.query(
      `select * from users where ${where}`,
      {
        model: User,
        mapToModel: true,
      }
    );

    return users;
  }
}

export default new UserService();
