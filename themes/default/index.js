exports.install = function() {
	F.merge('/default/css/default.css', '/css/ui.css','/css/for_pages/news.css', '/css/for_pages/footer.css', '/css/for_pages/about_us.css', '/css/for_pages/carousel.css', '/css/for_pages/contacts.css', '/css/for_pages/practice.css','/css/for_pages/menu.css', '/css/for_pages/Header.css', '/css/bootstrap.min.css', '=default/public/css/default.css');
	F.merge('/default/js/default.js', '/js/jctajr.min.js', '/js/ui.js', '=default/public/js/default.js');
	F.localize('/default/templates/*.html', ['compress']);
};