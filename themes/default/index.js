exports.install = function() {
	F.merge('/default/css/default.css', 
	/*main - css*/ '/css/for_pages/main.css', 
	/*main_page*/ '/css/for_pages/main_page/about_us.css',  
	'/css/for_pages/main_page/carousel.css', '/css/for_pages/main_page/contacts.css',  
	'/css/for_pages/main_page/footer.css',  '/css/for_pages/main_page/header.css',  '/css/for_pages/main_page/menu.css',  
	'/css/for_pages/main_page/practice.css','/css/for_pages/main_page/news.css', 
	/*about_us_page*/ '/css/for_pages/about_us_page/our-command.css',
	 '/css/ui.css', '/css/bootstrap.min.css', '/css/animate.css',
	 '=default/public/css/default.css');
	F.merge('/default/js/default.js', '/js/jctajr.min.js', '/js/ui.js', 
	/*cheks if in vp '/js/jquery.viewportchecker.min.js',*/
	/*WowJS '/js/wow.min.js',*/
	/*my main .js file '/js/main.js',*/
	 '=default/public/js/default.js');
	F.localize('/default/templates/*.html', ['compress']);
};