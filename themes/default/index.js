exports.install = function() {
	F.merge('/default/css/default.css', '/css/ui.css', '/css/bootstrap.min.css', '/css/for_pages/news.css', '/css/for_pages/Header.css', '=default/public/css/default.css');
	F.merge('/default/js/default.js', '/js/jctajr.min.js', '/js/ui.js', '=default/public/js/default.js');
	F.localize('/default/templates/*.html', ['compress']);
};