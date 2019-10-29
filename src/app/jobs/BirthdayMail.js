import Mail from '../../lib/Mail';

class BirthdayMail {
  get key() {
    return 'BirthdayMail';
  }

  async handle({ data }) {
    const { user } = data;
  }
}
