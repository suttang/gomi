var client = require('cheerio-httpcli');

var Collector = {
	data: [],
	get: function(callback) {
		var _this = this;
		client.fetch('http://www.city.setagaya.lg.jp/kurashi/101/113/260/d00131841.html', {}, function (error, $, response, body) {
			var list = $('div.h2-mdl.fix h2 table tr');
			list.each(function(index, element) {
				var tds = $(this).find('td');
				_this.data.push($(tds.get(1)).text() + ': ' + $(tds.get(3)).text());
				// console.log(_this.data);

				if (callback) {
					callback(_this.data);
				}
			});
		});
	}
}

module.exports = Collector;