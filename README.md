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
<a href="https://www.npmjs.com/package/kaitodb"><img src="https://img.shields.io/npm/v/kaitodb.svg?maxAge=3600"/></a>
<a href="https://discord.gg/49fhAtwwQX"><img src="https://img.shields.io/discord/909371115250548767?color=5865F2&logo=discord&logoColor=white"/></a>
