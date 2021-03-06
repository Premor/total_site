// API for e.g. Mobile application
// This API uses the website

exports.install = function() {
	// COMMON
	F.route('/api/ping/',        json_ping);
	F.route('/api/search/',		 search);
	// NEWSLETTER
	F.route('/api/newsletter/',  json_save, ['post', '*Newsletter']);

	// CONTACTFORM
	F.route('/api/contact/',     json_save, ['post', '*Contact']);
	F.route('/api/practics/', get_practics);
	F.global.search = [];
	F.global.practics = [];
	load_news();
	load_practics();
};

// ==========================================================================
// COMMON
// ==========================================================================

function create_new(){
	NOSQL('practics').insert({"id":1,"practics":["test1","test2","test3"]});
}

function json_ping() {
	var self = this;
	self.plain('null');
}

function search(){
	this.json(F.global.search)
}

// ==========================================================================
// NEWSLETTER & CONTACT
// ==========================================================================

function json_save() {
	var self = this;
	self.body.$save(self.callback());
}



function get_practics(){
	this.json(F.global.practics);
}

function load_practics(){
	NOSQL('practics').one().where("id",1).callback((err,res)=>{
		if (!err&&res){
			F.global.practics = res.category;
			console.log('load success: ',res);
		}
		else{
			console.log('fuck: ',res);
			console.log('fuck: ',err);
		}
	});
}


function load_news(){
	var filter = NOSQL('posts').find();
	filter.where('category_linker', 'blogs');
	//filter.fields('name','search');
	filter.sort('datecreated', true);
	filter.callback((err, docs, count)=> {
		
		for (a of docs){
				F.global.search.push({name:a.name,keywords:a.search,link:a.linker});
		}
	
	})
}