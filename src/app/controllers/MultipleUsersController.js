import path from 'path';

import csvtojson from 'csvtojson';
import User from '../models/User';

import UserService from '../services/UserService';

import 'dotenv/config';

class MultipleUserController {
  async index(req, res) {
    const users = await UserService.getBdayUsers();

    return res.json(users);
  }

  async store(req, res) {
    const { filename } = req.file;

    const fileCSV = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'uploads',
      filename
    );

    // Converte o arquivo csv que foi carregado para o servidor
    // em array JSON
    const usersJSON = await csvtojson({
      // noheader: true,
      // output: 'line',
      // delimiter: ';',
      headers: ['id', 'nome', 'aniver', 'email'],
    }).fromFile(fileCSV);

    usersJSON.forEach(user => {
      const { id, nome, aniver, email } = user;

      const diaMes = aniver.split('/');

      const mesEquivalente = [
        'jan',
        'fev',
        'mar',
        'abr',
        'mai',
        'jun',
        'jul',
        'ago',
        'set',
        'out',
        'nov',
        'dez',
      ];
      const aniversario = new Date(
        1990,
        mesEquivalente.indexOf(diaMes[1]),
        diaMes[0]
      );

      User.create({
        id,
        nome,
        email,
        password: process.env.DEFAULT_PASS,
        aniversario,
      });
    });

    return res.json({ ok: true });
  }
}

export default new MultipleUserController();
