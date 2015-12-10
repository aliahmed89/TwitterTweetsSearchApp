<span>
[![NPM](https://nodei.co/npm/material-design.png?compact=true)](https://nodei.co/npm/material-design/)
</span>
<span style="margin-left:20px">
![](https://img.shields.io/github/issues/janbiasi/material-design.svg)
</span>

### What is Material Design
At Google we say, *“Focus on the user and all else will follow.”* We embrace that principle in our design by seeking to build experiences that surprise and enlighten our users in equal measure. This site is for exploring how we go about it. You can read our design guidelines, download assets and resources, meet our team, and learn about job and training opportunities.

---

### About this UI Kit

This UI Kit provides you with implemented Material Designed guidelines, components and much more.
Each component can be used with all different color-schemes of the [Material Color Palette](https://www.google.com/design/spec/style/color.html#color-color-palette). That means that you can swap the look of your website with a few class changes, isn't that nice?

##### Components

Below is a list with the current implemented components.

* [Navigation-bar](https://github.com/janbiasi/material-design/tree/master/src/navigation)
* [Cards](https://github.com/janbiasi/material-design/tree/master/src/card)
* [Form-elements](https://github.com/janbiasi/material-design/tree/master/src/form)
* [Buttons](https://github.com/janbiasi/material-design/tree/master/src/button)
* [Badges](https://github.com/janbiasi/material-design/tree/master/src/badge)

---


### Installation
Material Design is avaible for [NPM](http://npmjs.com) and [Bower](http://bower.herokuapp.com), you simply can install it via your systems CLI. If you want to build the
repository locally, you need [grunt](http://gruntjs.com) and some of its plugins and tasks. So if you want to take the whole developer package, use the snippet below to install it!

```sh
npm install -g grunt # optional
npm install --save material-design
cd material-design
grunt --map=true --minify=true --no-compress
```

*Voilà, your build is done!*

##### Dependencies
Here is the list of dependencies used in this project (for all the guys who don't want to read the package.json)


| Name | Minimal version required |
|------|--------------------------|
| chalk | ^1.0.0 |
| grunt | ^0.4.5 |
| grunt-contrib-less | ^1.0.0 |
| grunt-contrib-cssmin | ^0.12.2 |
| grunt-autoprefixer | ^2.2.0 |
| grunt-contrib-compress | ^0.13.0 |


---


### Usage

##### Typography
The recommended Font for material design is [Roboto](http://www.google.com/fonts/specimen/Roboto). You can simply include
the font with google fonts, just go to their website, select the 300, 400 and 500 font-weights and include as CSS, HTML or JavaScript - and you're done.


---

### Build system
You can re-build or custom build the package with Node.js and Grunt. So if you want
to kick a build procedure, just execute the grunt command in your systems CLI.
There are several options to set for the build, they are explained in the table
below. Here's the default "build-queue";


1. **LESS to CSS**
2. **Autoprefix CSS** (<code>--no-auto-prefix</code> to disable)
3. **Create a diff-file**
3. Generate CSS Map file (<code>--make-map</code> to enable)
4. Minify CSS (<code>--minify</code> to enable)
5. Compress - makes archive (<code>--compress</code> to enable)



> default grunt tasks are written **bold**


```sh
grunt
```

| Command             | Description                        |
|---------------------|------------------------------------|
| <code>--full</code> | Autoprefix, Minify, Map, Diff, Zip |
| <code>--compress=false</code> | Add compression to queue |
| <code>--no-compress=true</code> | Selected but not compress |
| <code>--no-auto-prefix=false</code> | Selected but not autoprefix |
| <code>--minify=false</code> | Add minified version of build |
| <code>--make-map=false</code> | Creates a CSS map file |


##### Recommendation
I would recommend you to run the full tasklist, but without the compression. The
compression is implemented if you want to ship the whole package to a server, and
not file by file. So if you want to do everything but not compress, use the following
options.

> **Special tip for windows users:** Simply run the batch file called "run.bat" in the
repository root to execute the recommended command. :smirk:

 

```sh
grunt --map=true --minify=true --no-compress
```
