import { Op, Sequelize } from 'sequelize';
import User from '../models/User';

class UserService {
  /**
   * @deprecated
   * First Commit version
   * Use function getBDayUser
   */
  async getRAWBDayUsers() {
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

  async getBDayUsers(day, month) {
    const currentDay = typeof day !== 'undefined' ? day : new Date().getDate();
    const currentMonth =
      typeof month !== 'undefined' ? month : new Date().getMonth() + 1;

    const users = await User.findAll({
      attributes: ['id', 'nome', 'email', 'aniversario'],
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn('date_part', 'day', Sequelize.col('aniversario')),
            currentDay
          ),
          Sequelize.where(
            Sequelize.fn('date_part', 'month', Sequelize.col('aniversario')),
            currentMonth
          ),
          {
            email: {
              [Op.ne]: null,
            },
          },
        ],
      },
    });
    return users;
  }

  async sendMail() {}
}

export default new UserService();
