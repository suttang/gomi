var setagaya = require('./data/tokyo/setagaya');

setagaya.get(function(data) {
	console.log('----hoge');
	console.log(data);
});