module.exports = function(name){
	const colors = [
		"\x1b[31m",
		"\x1b[36m%s\x1b[0m"
	];
	var errorControllers = function(object){
		return([
			["Is string?", (typeof object === 'string')],
		  ["Is non-empty?(only works on string)", (Number(object) != 0)],
		  ["Is shorter than 32 character(only works on string)", (object.length <= 32)]
	  ]);
	}
	if(!errorControllers(name).some(error => error[1] == false)){
		var fs = require('fs');
		if(!fs.existsSync('./KaitoDataBases')){
			fs.mkdirSync('./KaitoDataBases');
		}
		if(!fs.existsSync(`./KaitoDataBases/${name}.json`)){
			fs.writeFileSync(`./KaitoDataBases/${name}.json`, '{}', 'utf-8');
		}
		var jsonFile = require(`../../KaitoDataBases/${name}.json`);
		this.name = name;
		this.path = `./KaitoDataBases/${name}.json`;
		this.set = function(key, value){
			let setReturnValue = 0; //no succes
			if(!errorControllers(key).some(error => error[1] == false)){
				if(value){
					let valueReturn;
					if(value == null){
						valueReturn = "";
					} else {
						valueReturn = value;
					}
					var results = [];
					for(var i in jsonFile){
						results.push([i, jsonFile[i]]);
					}
					var jsonText = '{';
					results.forEach(result => {
						jsonText += `"${result[0]}": "${result[1]}",`;
					});
					jsonText += `"${key}": "${value}"}`;
					fs.writeFileSync(`../../KaitoDataBases/${name}.json`, jsonText, 'utf-8');
					setReturnValue = 1; //succes
				} else {
					console.error(colors[0], '"value" must be defined');
					setReturnValue = 0;
				}
			} else {
				console.error(colors[0], '"key" must be an non empty string and shorter than 32 character');
				errorControllers(key).forEach(error => {
					console.error(colors[1], `${error[0]}: ${error[1]}`);
		    });
				setReturnValue = 0;
			}
			return setReturnValue;
		};
		this.get = function(key){
			return jsonFile[key];
		}
	} else {
		console.error(colors[0], '"name" must be an non-empty string shorter than 32 character');
		errorControllers(name).forEach(error => {
			console.error(colors[1], `${error[0]}: ${error[1]}`);
		});
	}
}
