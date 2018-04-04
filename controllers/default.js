exports.install = function() {
	// CMS rendering
	F.route('/', home,['*Post'])
	F.route('/*', view_page);
	F.route('/demo/');

	
	//F.route('/test/',test, ['*Page','*Post']);
	//F.route('/test/',test);




	// POSTS
	F.route('#blogs',            view_blogs, 		['*Post']);
	F.route('#blogsdetail',      view_blogs_detail, ['*Post']);

	F.route('#album',            view_album, 		['*Post']);
	F.route('#albumdetail',      view_album_detail, ['*Post']);
	
	// FILES
	F.file('/download/', file_read);
};

// ==========================================================================
// CMS (Content Management System)
// ==========================================================================

function view_page() {
	var self = this;
	// models/pages.js --> Controller.prototype.render()
	self.render(self.url);
}

function home(){
	var self = this;
	var options = {};

	options.category = 'Blogs';

	if (self.query.q)
		options.search = self.query.q;

	if (self.query.page)
		options.page = self.query.page;
	options.max = 6;
	self.$query(options, self.callback('home_news'));
	/*NOSQL('posts').find().sort('datecreated').take(6).callback((err,res)=>{
		this.repository.test_NOSQL = res;
		this.render(this.url);
	})*/
}

function test() {
	NOSQL('posts').find().filter((res)=>{return Date.now() -Date.parse(res.datecreated) < 2592000000}).callback((err,res)=>{
		this.repository.test_NOSQL = res[0];
		console.log('Work???')
		this.render(this.url);
	})
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
		F.exists(req, res, function(next, filename) {
			NOSQL('files').binary.read(id, function(err, stream, header) {

				if (err) {
					next();
					return res.throw404();
				}

				var writer = require('fs').createWriteStream(filename);

				CLEANUP(writer, function() {
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
	F.exists(req, res, 10, function(next, filename) {

		// Reads specific file by ID
		NOSQL('files').binary.read(id, function(err, stream, header) {

			if (err) {
				next();
				return res.throw404();
			}

			var writer = require('fs').createWriteStream(filename);

			CLEANUP(writer, function() {

				// Releases F.exists()
				next();

				// Image processing
				res.image(filename, function(image) {
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
	self.$read(options, function(err, response) {
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
	self.$read(options, function(err, response) {
		if (err)
			return self.throw404(err);
		NOSQL('posts').counter.hit(response.id);
		self.view('album-detail', response);
	});
}