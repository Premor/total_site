exports.install = function () {
	F.route('/contacts/', contacts)
	F.route('#practice', practice, ['*Post']);
	F.route('#practicedetail', practice_detail, ['*Post']);
	/*F.route('/news/',news)*/
	// CMS rendering
	F.route('/constructor/', constructor);
	F.route('/', home, ['*Post']);
	F.route('/contacts/', twq);
	F.route('#publication', view_publication, ['*Post']);
	F.route('#publicationdetail', view_publication_detail, ['*Post']);
	F.route('/events/', events);
	F.route('/timeline/', timeline, ['*Post']);

	F.route('/search-all/',search);
	//ROUTE('/registration',view_registration,['#session']);
	//ROUTE('/registration',view_registration_auth,[/*'authorize',*/'#session']);
	//ROUTE('/registration', json_create_user, ['post'/*,'unauthorize'*/,'#session']);
	//ROUTE('/login',view_login,'#session');

	//ROUTE('/login/google',oauth_login,[/*'unauthorize',*/'#session']);
	//ROUTE('/login/google/callback/', oauth_login_callback, [/*'unauthorize',*/'#session']);
	//ROUTE('/test', test);
	//ROUTE('/login', login, ['post','#session']);
	//ROUTE('/logout',logout,[/*'authorize',*/'#session']);


	F.route('/*', view_page);
	F.route('/demo/');


	//F.route('/test/',test, ['*Page','*Post']);
	//F.route('/test/',test);




	// POSTS
	F.route('#person', view_person, ['*Post']);
	F.route('#persondetail', view_person_detail, ['*Post']);
	F.route('/test/', test)
	F.route('#blogs', view_blogs, ['*Post']);
	F.route('#blogsdetail', view_blogs_detail, ['*Post']);

	F.route('#album', view_album, ['*Post']);
	F.route('#albumdetail', view_album_detail, ['*Post']);

	F.route('/about_us/', about_us, ['*Post']);

	F.route('/about_us/', 		about_us,		    ['*Post']);

	F.route('/privacy/', 		privacy,		    ['*Post']);
	
	// FILES
	F.file('/download/', file_read);

	F.route('/contract/',contract);

	F.global.corusel_size = 2;
};

// ==========================================================================
// CMS (Content Management System)
// ==========================================================================


function events() {
	this.repository.size = F.global.carousel;
	this.view('events');
}


function view_page() {
	var self = this;
	// models/pages.js --> Controller.prototype.render()
	self.render(self.url);
}

function search(){
	if(this.query.category){
		$query('Post', {
			url: '/'
		}, function (err, response) {})
	}
}

function privacy() {
	this.view('privacy');
}

function contacts () {
	this.view('contacts');
}

function practice() {
	var self = this;
	var options = {};
	this.repository.size = F.global.carousel;

	options.category = 'Practice';

	if (self.query.q)
		options.search = self.query.q;

	if (self.query.page)
		options.page = self.query.page;

	self.$query(options, self.callback('practice'));
}
/*
function news () {
	this.view('news');
}
*/
function timeline() {
	var self = this;
	var options = {};
	this.repository.size = F.global.carousel;

	options.category = 'Event';

	if (self.query.q)
		options.search = self.query.q;

	if (self.query.page)
		options.page = self.query.page;

	self.$query(options, self.callback('timeline'));
}

function contract(){
	this.view('contract');
}

function constructor() {
	var self = this;
	var options = {};
	options.category = 'Constructor';
	if (this.query.lvl2 && this.query.lvl3) {
		option.lvl2 = this.query.lvl2;
		option.lvl3 = this.query.lvl3;
	}
	//options.linker = linker;
	self.$read(options, function (err, response) {
		if (err)
			return self.throw404(err);
		NOSQL('posts').counter.hit(response.id);
		self.view('constructor', response);
	});
}


function test() {
	const str = 'чутка рандомных слов'
	const engl = 'mother fucker no fuck word'
	console.log(`str: ${str}\nkey: ${str.keywords(false,true)}\nstren: ${engl}\nkey: ${engl.keywords(true,true).concat(['a','b']).join(' ')}\nmy test str: ${str}\nmy test key: ${str.replace(/у/g, 'и')}`)
}

function home() {

	var self = this;
	var options = {};
	this.repository.size = F.global.carousel;

	$GET('Page', {
		url: '/'
	}, function (err, response) {
		//console.log(err, response);
		options.category = 'Blogs';
		options.max = 6;
		options.options = response.body;
		if (self.query.q)
			options.search = self.query.q;

		if (self.query.page)
			options.page = self.query.page;

		self.$query(options, self.callback('home_news'));

	});



	/*NOSQL('posts').find().sort('datecreated').take(6).callback((err,res)=>{
		this.repository.test_NOSQL = res;
		this.render(this.url);
	})*/
}

/*function test() {
	NOSQL('posts').find().filter((res)=>{return Date.now() -Date.parse(res.datecreated) < 2592000000}).callback((err,res)=>{
		this.repository.test_NOSQL = res[0];
		console.log('Work???')
		this.render(this.url);
	})
}*/

function find_practicing(practice) {
	for (i in F.global.practics) {
		for (let j = 0; j < F.global.practics[i].length; j++) {
			if (F.global.practics[i][j].name == practice) {
				return F.global.practics[i][j].practicing;
			} else {
				for (let k = 0; k < F.global.practics[i][j].category.length; k++) {
					if (F.global.practics[i][j].category[k].name == practice) {
						return F.global.practics[i][j].category[k].practicing;
					}
				}
			}
		}

	}
	return '';
}

function short_name(arg) {
	//if (!(arg instanceof String)) {return '';}
	let buf = arg.split(' ');
	buf[1] = `${buf[1].slice(0,1)}.`;
	buf[2] = `${buf[2].slice(0,1)}.`;
	let ret = buf.join(' ');
	return ret;
}

function practice_detail(linker) {
	var self = this;
	var options = {};
	options.category = 'Practice';
	options.linker = linker;
	self.$read(options, function (err, response) {
		if (err)
			return self.throw404(err);
		NOSQL('posts').counter.hit(response.id);
		let options_about = {};
		let name = find_practicing(response.practice);
		options_about.options = response;
		options_about.category = 'Member';
		if (name != '') options_about.name = name;
		//options.max = 6;

		// if (self.query.q)
		// options_about.search = self.query.q;

		// if (self.query.page)
		// options_about.page = self.query.page;

		// if (this.query.author)
		// options_about.name = this.query.author;

		self.$query(options_about, self.callback('practice-detail'));
		//self.view('practice-detail', response);
	});
}

function twq() {
	this.view('contacts');
}
// ==========================================================================
// FILES
// ==========================================================================

// Reads a specific file from database
// For images (jpg, gif, png) supports percentual resizing according "?s=NUMBER" argument in query string e.g.: .jpg?s=50, .jpg?s=80 (for image galleries)
// URL: /download/*.*
function file_read(req, res) {

	var id = req.split[1].replace('.' + req.extension, '');
	var resize = req.query.s && (req.extension === 'jpg' || req.extension === 'gif' || req.extension === 'png') ? true : false;

	if (!resize) {
		// Reads specific file by ID
		F.exists(req, res, function (next, filename) {
			NOSQL('files').binary.read(id, function (err, stream, header) {

				if (err) {
					next();
					return res.throw404();
				}

				var writer = require('fs').createWriteStream(filename);

				CLEANUP(writer, function () {
					res.file(filename);
					next();
				});

				stream.pipe(writer);
			});
		});
		return;
	}

	// Custom image resizing
	var size;

	// Small hack for the file cache.
	// F.exists() uses req.uri.pathname for creating temp identificator and skips all query strings by creating (because this hack).
	if (req.query.s) {
		size = req.query.s.parseInt();
		req.uri.pathname = req.uri.pathname.replace('.', size + '.');
	}

	// Below method checks if the file exists (processed) in temporary directory
	// More information in total.js documentation
	F.exists(req, res, 10, function (next, filename) {

		// Reads specific file by ID
		NOSQL('files').binary.read(id, function (err, stream, header) {

			if (err) {
				next();
				return res.throw404();
			}

			var writer = require('fs').createWriteStream(filename);

			CLEANUP(writer, function () {

				// Releases F.exists()
				next();

				// Image processing
				res.image(filename, function (image) {
					image.output(req.extension);
					req.extension === 'jpg' && image.quality(85);
					size && image.resize(size + '%');
					image.minify();
				});
			});

			stream.pipe(writer);
		});
	});
}

// ============================================
// POSTS
// ============================================


function view_publication() {
	var self = this;
	var options = {};

	options.category = 'Publication';

	if (self.query.q)
		options.search = self.query.q;

	if (self.query.page)
		options.page = self.query.page;

	if (this.query.author)
		options.author = this.query.author;

	self.$query(options, self.callback('publication-all'));
}


function view_blogs() {
	var self = this;
	var options = {};

	options.category = 'Blogs';
	if (self.query.q)
		options.search = self.query.q;

	if (self.query.page)
		options.page = self.query.page;

	self.$query(options, self.callback('blogs-all'));
}

function view_publication_detail(linker) {
	var self = this;
	var options = {};
	options.category = 'Publication';
	options.linker = linker;
	self.$read(options, function (err, response) {
		if (err)
			return self.throw404(err);
		NOSQL('posts').counter.hit(response.id);
		self.view('publication-detail', response);
	});
}

function view_album() {
	var self = this;
	var options = {};

	options.category = 'Album';

	if (self.query.q)
		options.search = self.query.q;

	if (self.query.page)
		options.page = self.query.page;

	self.$query(options, self.callback('album-all'));
}

function view_blogs_detail(linker) {
	var self = this;
	var options = {};
	options.category = 'Blogs';
	options.linker = linker;
	self.$read(options, function (err, response) {
		if (err)
			return self.throw404(err);
		NOSQL('posts').counter.hit(response.id);
		self.view('blogs-detail', response);
	});
}

function view_album_detail(linker) {
	var self = this;
	var options = {};
	options.category = 'Album';
	options.linker = linker;
	self.$read(options, function (err, response) {
		if (err)
			return self.throw404(err);
		NOSQL('posts').counter.hit(response.id);
		self.view('album-detail', response);
	});
}

function about_us() {
	var self = this;
	var options = {};

	options.category = 'Member';
	//options.max = 6;

	if (self.query.q)
		options.search = self.query.q;

	if (self.query.page)
		options.page = self.query.page;

	if (this.query.author)
		options.name = this.query.author;
	
	options.order = false;

	self.$query(options, self.callback('about_us'));

}


function view_person() {
	var self = this;
	var options = {};

	options.category = 'Member';

	if (self.query.q)
		options.search = self.query.q;

	if (self.query.page)
		options.page = self.query.page;

	self.$query(options, self.callback('person-all'));
}

function view_person_detail(linker) {
	var self = this;
	var options = {};
	options.category = 'Member';
	options.linker = linker;
	self.$read(options, function (err, response) {
		if (err)
			return self.throw404(err);
		NOSQL('posts').counter.hit(response.id);
		self.view('person-detail', response);
	});
}

function logout() {
	//this.cookie('user','','-1 day')
	delete this.session.user;
	this.redirect('/')
}

function oauth_login() {
	var self = this;
	var type = self.req.path[1];

	// config:
	// oauth2.google.key =
	// oauth2.google.secret =
	// oauth2.github.key =
	// oauth2.github.secret =
	// ...

	MODULE('oauth2').redirect(type, CONFIG('oauth2.' + type + '.key'), self.host('/login/' + type + '/callback/'), self);
}

// Controller action
function oauth_login_callback() {
	var self = this;
	var type = self.req.path[1];
	var url = self.host('/login/' + type + '/callback/');

	// config:
	// oauth2.google.key =
	// oauth2.google.secret =
	// oauth2.github.key =
	// oauth2.github.secret =
	// ...

	MODULE('oauth2').callback(type, CONFIG('oauth2.' + type + '.key'), CONFIG('oauth2.' + type + '.secret'), url, self, function (err, profile, access_token) {
		//console.log(profile);
		self.session.user = {
			google_profile: profile
		};

		self.view('check', self.session.user);
	});
}


function view_registration_auth() {
	var self = this;

}

function view_registration() {
	var self = this;
	if (self.session.user)
		self.view('registration_auth');
	else
		self.view('registration');
}

function view_login() {
	var self = this;
	self.view('login');
}

function login() {
	var self = this;
	MODEL('user').find_u(this.body.login, this.body.psw, (err, res) => {
		if (err)
			this.view('fail', err);
		else {
			this.session.user = {
				id: res.id,
				login: self.body.login
			};

			this.redirect('/');
		}
	})
}

function json_create_user() {
	var user = {
		id: Utils.GUID(5),
		login: this.body.login,
		password: this.body.psw
	};


	//console.log(this.flags)
	//console.log(this.body)
	// global alias:
	MODEL('user').create(user);
	this.view('/congratulation/', user);
}