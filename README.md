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

### Installing

After check if have node, yarn and docker, create a docker container with command bellow:
```shell
$ docker docker run --name sample -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
````

Next, run yarn to download all packages of project:

```shell
$ yarn
```

> now install npm and bower packages

```shell
$ npm install
$ bower install
```

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
