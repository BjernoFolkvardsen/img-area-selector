# Image Area Selector

A Javascript package for selecting an area of an image.

<!--[![NPM](https://nodei.co/npm/img-area-selector.png)](https://nodei.co/npm/img-area-selector/)-->

[![NPM version](https://img.shields.io/npm/v/img-area-selector.svg)](https://www.npmjs.com/package/img-area-selector)
[![Build Status](https://travis-ci.org/BjernoFolkvardsen/img-area-selector.svg?branch=master)](https://travis-ci.org/BjernoFolkvardsen/img-area-selector)
[![Coverage Status](https://coveralls.io/repos/github/BjernoFolkvardsen/img-area-selector/badge.svg?branch=master)](https://coveralls.io/github/BjernoFolkvardsen/img-area-selector?branch=master)

## Installation

Clone repository with Git:

```sh
git clone https://github.com/BjernoFolkvardsen/img-area-selector.git
cd img-area-selector
```

Install package dependencies:

```sh
npm install
```

## Testing

Run tests:

```sh
npm test
```

Run tests in watch mode:

```sh
npm run test:watch
```

Run tests with coverage:

```sh
npm run test:coverage
```

View coverage in browser:

```sh
npm run test:coverage:report
open coverage/index.html
```

Lint files:

```sh
npm run lint
```

Fix lint errors:

```sh
npm run lint:fix
```

## Release

Only collaborators with credentials can release and publish:

```sh
npm run release
git push --follow-tags && npm publish
```

To see what files are going to be published, run the command:

```sh
npm pack --dry-run
# tar tvf $(npm pack)
```

## Support

...

## License

[MIT](https://github.com/BjernoFolkvardsen/img-area-selector/blob/master/LICENSE)
