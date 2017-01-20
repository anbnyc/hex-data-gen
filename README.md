# hex-data-gen
npm package to create a hexagon-shaped array of data

## Install
`npm install hex-data-gen`

## Usage
```
const HexDataGen = require('hex-data-gen');

// returns an array of objects with 7 rows with lengths: 4, 5, 6, 7, 6, 5, 4
HexDataGen(4);

// writes the same array to myFile.json
HexDataGen(4,'myFile')
```

## Release History
* 0.1.0 Initial Release
* 0.1.1 Add Babel