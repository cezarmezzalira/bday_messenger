import UserService from './UserService';

class MailService {
  async sendBDayEmails() {
    const bdayUsers = await UserService.getBDayUsers();
    bdayUsers.forEach(user => {
      console.log(`Email enviado para ${user.email} as ${new Date()}`);
    });
    return `Sent at ${new Date()}`;
  }
}

export default new MailService();
