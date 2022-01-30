Anime Series Downloader
=======================

<img src="./git-images/anime.png" alt="anime-doko" width="250" height="250">
<br />

A simple node-based cli tool that downloads your desired anime series from `gogoanimes`.

> :warning: Windows is not supported at this time.

Table of Contents:
* [Dependencies](#dependencies)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Disclaimer](#disclaimer)

## Dependencies

First, make sure you have the following installed on your machine:
* [yt-dlp](https://github.com/yt-dlp/yt-dlp) - a youtube download fork with additional fixes and features.
* nodejs - the latest LTS should be good

## Installation

Install from NPM - *recommended*:
```sh
npm install -g animego-dl # remove with: npm uninstall -g animego-dl
```

**Install from source**:
1. Clone repo & `cd anime-series-dl`
2. Install script dependencies: `node install`
3. *optional* - install command globally:
    * `npm install -g .`
    * to uninstall: `npm uninstall -g gogoanime-dl-cli`

## Usage

```sh
Usage: animego-dl [options] <anime name>

CLI tool to download your favorite anime series.

Arguments:
  anime name                The name of anime series to download  [string] [required]

Options:
  -V, --version             output the version number
  -d, --directory <string>  the download directory for your anime  [string] [required]
  -h, --help                display help for command
```

**note**: if you installed the package globally, you can simply run:

```sh
animego-dl -d <destination dir> '<anime series name>'`
```

If you did not install globally, you can run from the root of the project's source directory:
```
node bin -d <destination dir> '<anime series name>'`
```
---

> :warning: Please make sure that your input anime series title is properly
> formatted (improvements to tool will be made in the near future).

Anime title input examples:
  * specify dub: `animego-dl -d '<destination dir>' 'Berserk dub'`
    - no special characters, params, or dashes
  * specify sub: `animego-dl -d '<destination dir>' 'sono bisque doll wa koi wo suru'`
    - please note we **do not** specify *dub* in the name -- this will be
      improved in the future
    - no special characters, params, or dashes

## Contributing

All contributions are welcome!  Please refer the [contributing document](CONTRIBUTING.md) for
project practices and the Code of Conduct.

## Disclaimer

This project, and it's owner, does not endorse piracy!  Anime streaming services are
supported both spiritually and financially :heart:

This project uses anime information & sources that is 100% available to the public.
