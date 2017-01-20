# hex-data-gen
npm package to create a hexagon-shaped array of data

## Install
`npm install git://github.com/anbnyc/hex-data-gen.git`

## Usage
```
const HexDataGen = require('hex-data-gen');

// returns an array of objects with 7 rows with lengths: 4, 5, 6, 7, 6, 5, 4
HexDataGen(4);

// writes the same array to myFile.json
HexDataGen(4,'myFile')
```
