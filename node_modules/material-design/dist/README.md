### Builds
This folder contains all builds from the first release version. A build contains all modules resp. components, located
under the [source-folder](https://github.com/janbiasi/material-design/new/master/src/) (<code>material-design/src</code>).
You can also create your own build, just edit the components you'd prefer or update the [global section](https://github.com/janbiasi/material-design/new/master/src/global/) and run grunt via your systems CLI.

##### Using Grunt
Grunt and Grunt plugins are installed and managed via npm, the Node.js package manager. [Grunt](http://gruntjs.com/) 0.4.x requires stable Node.js versions >= 0.8.0. Odd version numbers of [Node.js](http://nodejs.org/) are considered unstable development versions.

In order to get started, you'll want to install Grunt's command line interface (CLI) globally. You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

```sh
npm install -g grunt-cli
```

Next up, you can navigate to the material design project and just write grunt. This will trigger a build of the actual version.
Please note; if you want to create your own build, update the version in the package.json file matching the scheme <code>x.x.x-custom</code>. The output will be in the dist folder under your project version defined in your project file.

```sh
cd my/project/material-design
grunt
```
