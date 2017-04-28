const components_path = './src/components/';
const fs = require('fs');

fs.readdir(components_path, (err, files) => {
    files.forEach(file => {
	    if(file.endsWith('.pug.js')){
		    let exec = require('child_process').exec;

		    let out  = file.replace('.pug.js', '.js');

		    let cmd  = `babel ${components_path}${file} > ${components_path}${out}`;

		    exec(cmd);
	    }
    });
})

