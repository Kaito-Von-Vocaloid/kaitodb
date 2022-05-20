## Installation:
```sh
npm install kaitodb
```
## Basic Usage:
```js
const KaitoDB = require('kaitodb'); //requiring the package
const MyDb = new KaitoDB('test_db'); //creating new db
console.log(MyDb.get('test_key')); //expected output: undefined
MyDb.set('test_key', 'test_value'); //sets the key-value
console.log(MyDb.get('test_key')); //expected output: 'test_value'
```
## Documentation:
> `<kaitodb>` will be count as `MyDb` in the [Basic Usage](https://kaitosoftware.skysea28957.repl.co/kaitodb/basicusage.html) code.
#### `<kaitodb>.name`
###### type: [string](https://www.w3schools.com/js/js_strings.asp)
#### `<kaitodb>.path`
###### type: [path](https://nodejs.dev/learn/nodejs-file-paths)
#### `<kaitodb>.get(key)`
###### type: [function](https://www.w3schools.com/js/js_functions.asp)(returns: [string](https://www.w3schools.com/js/js_strings.asp) || [number](https://www.w3schools.com/js/js_numbers.asp) || [array](https://www.w3schools.com/js/js_arrays.asp) || [boolean](https://www.w3schools.com/js/js_booleans.asp))
###### value placement: `<key>`= the name of the value that will be catched from the database(type: [string](https://www.w3schools.com/js/js_strings.asp))
#### `<kaitodb>.set(key, value)`
###### type: [function](https://www.w3schools.com/js/js_functions.asp)(returns: [number](https://www.w3schools.com/js/js_numbers.asp)(returning `0` means completed unsuccessfully and `1` means completed successfully))
###### value placement: `<key>`= the name of the value that will be catched from the database(type: [string](https://www.w3schools.com/js/js_strings.asp)) `<value>` = the key that will be the value of the `<key>` in database(type: [string](https://www.w3schools.com/js/js_strings.asp) || [number](https://www.w3schools.com/js/js_numbers.asp) || [array](https://www.w3schools.com/js/js_arrays.asp) || [boolean](https://www.w3schools.com/js/js_booleans.asp))
## Future Ideas:
- `.env` formated database:
<br>the idea is to make a db using env file format to store data to make it secure with the public file hosts
- `non-node` support
<br>a kaitodb module alternative that can be used with `<script>` tag that not requires node
- alternative language support
<br>making [kaitodb](https://www.npmjs.com/package/kaitodb) more popular by making a module for other languages too but sadly by far the most hard one to become real but if it will be then probably will be `c#`(`.cs`) or `python`(`.py`) because the usage popularity

## Credits:
Only me [kaito_turkish_boi](https://www.npmjs.com/~kaito_turkish_boi) for now.

<a href="https://www.npmjs.com/package/kaitodb"><img src="https://img.shields.io/npm/v/kaitodb.svg"/></a>
<a href="https://discord.gg/49fhAtwwQX"><img src="https://img.shields.io/discord/909371115250548767?color=5865F2&logo=discord&logoColor=white"/></a>
