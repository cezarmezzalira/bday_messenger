# Automatic BirthDay Messenger - BDay Messenger

The purpose of this project is to send automaticaly to the birthdays of the day, a little message :)

## Getting Started

First make clone of project or download it on your machine.

### Prerequisites

To run this project, you need to get a postgres db (I use one in a docker container), node and yarn.

> To check if docker, node and yarn are installed, run it:

````shell
$ docker -v
  Docker version 19.03.3, build a872fc2f86
$ node -v
  v10.16.3
$ yarn --version
  1.19.1
```
### Installing

After check if have node, yarn and docker, create a docker container with command bellow:
```shell
$ docker docker run --name sample -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
````

Next, run yarn to download all packages of project:

```shell
$ yarn
```

## Authors

- **Cezar Augusto Mezzalira** - _Initial work_ - [cezarmzz](https://github.com/cezarmzz)

## License
