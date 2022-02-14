module.exports = function(name){
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
		this.name = name;
		this.path = `./KaitoDataBases/${name}.json`;
		this.set = function(key, value){
			let setReturnValue;
			if(!errorControllers(key).some(error => error[1] == false)){
				if(value){
					let valueReturn;
					if(value == null){
						valueReturn = "";
					} else {
						valueReturn = value;
					}
					require(`../../KaitoDataBases/${name}.json`)[key] = value;
					setReturnValue = 'success';
				} else {
					console.error('\x1b[31m', '"value" must be defined');
					setReturnValue = null;
				}
			} else {
				console.error('\x1b[31m', '"key" must be an non empty string and shorter than 32 character');
				errorControllers(key).forEach(error => {
					console.error('\x1b[36m%s\x1b[0m', `${error[0]}: ${error[1]}`);
		    });
				setReturnValue = null;
			}
			return setReturnValue;
		};
		this.get = function(key){
			return(require(`../../KaitoDataBases/${name}.json`)[key]);
		}
	} else {
		console.error('\x1b[31m', '"name" must be an non-empty string shorter than 32 character');
		errorControllers(name).forEach(error => {
			console.error('\x1b[36m%s\x1b[0m', `${error[0]}: ${error[1]}`);
		});
	}
}
