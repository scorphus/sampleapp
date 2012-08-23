//steal/js sampleapp/scripts/compress.js

load("steal/rhino/rhino.js");
steal('steal/clean',function(){
	steal.clean('sampleapp/sampleapp.html',{indent_size: 1, indent_char: '\t'});
});
