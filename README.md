# Buildly React Native Template

Buildly React Template is a [React Native](https://reactnative.dev/) application that implements the core features of the UI core, pre-configure to connect to [Buildly Core](https://github.com/buildlyio/buildly-core).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

The web application was tested and built with the following versions:

- node v16.13.0
- yarn v1.22.17

### Installing

First of all, you need to have a Buildly Core instance up and running locally.
Further detail about how to deploy Buildly Core locally, check its [documentation](https://buildly-core.readthedocs.io/en/latest/).

To install the application you need to download and install its dependencies, so you have to navigate to the project folder and run the following command:

```
$ yarn install
```

Next, install the pods for iOS.
```
$ cd ios && pod install && cd ..
```

Now, start metro.

```
$ yarn run start
```

In a separate window, build the app.

For iOS, use:

```
$ yarn run ios
```

For Android, use:

```
$ yarn run ios
```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/buildlyio/docs/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/buildlyio/buildly-react-template/tags).

## Authors

* **Buildly** - *Initial work*

See also the list of [contributors](https://github.com/buildlyio/buildly-react-template/graphs/contributors) who participated in this project.

## License

This project is licensed under the GPL v3 License - see the [LICENSE](LICENSE) file for details
