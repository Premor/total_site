PATH = `css/for_pages`

exports.install = function() {
	F.merge(`/default/css/default.css`, 
	/*main - css*/ `/${PATH}/main.css`, 
	/*main_page*/ `/${PATH}/main_page/about_us.css`,  
	`/${PATH}/main_page/carousel.css`, `/${PATH}/main_page/contacts.css`,  
	`/${PATH}/main_page/footer.css`,  `/${PATH}/main_page/header.css`,  `/${PATH}/main_page/menu.css`,  
	`/${PATH}/main_page/practice.css`,`/${PATH}/main_page/news.css`, 
	/*about_us_page*/ `/${PATH}/about_us_page/our-command.css`,
	`/${PATH}/about_us_page/member.css`,
	 /*search*/ `/css/search.css`,
	 /*contacts_page*/ `/${PATH}/contacts_page/contacts.css`,
	 /*login & registration */ `/${PATH}/logreg_pages/logreg.css`,
	 /*practice_page */ `/${PATH}/practice_page/practice.css`,
	 /*news page*/ `/${PATH}/news_page/news.css`,
	 /*publications*/ `/${PATH}/publications_page/publications.css`,
	 /*events*/ `/${PATH}/events_page/events.css`,
	 /*slick carousel*/ `/css/slick.css`, `/css/slick-theme.css`,
	 `/css/ui.css`, `/css/bootstrap.min.css`, `/css/animate.css`,
	 `=default/public/css/default.css`);
	F.merge(`/default/js/default.js`, `/js/spa.min.js`, `/js/ui.js`,
	/*my own js*/ //`/js/practice.js`, 
	`/js/main.js`,
	/*slick carousel*/ `/js/slick.min.js`,
	 `=default/public/js/default.js`);
	F.localize(`/default/templates/*.html`, [`compress`]);
};