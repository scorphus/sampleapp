//steal/js sampleapp/scripts/compress.js

load("steal/rhino/rhino.js");
steal('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('sampleapp/scripts/build.html',{to: 'sampleapp'});
});
