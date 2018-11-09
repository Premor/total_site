// API for e.g. Mobile application
// This API uses the website

const ejs = require('ejs');
const pdf = require('html-pdf');

exports.install = function() {
	// COMMON
	F.route('/api/ping/',        json_ping);
	F.route('/api/search/',		 search);
	// NEWSLETTER
	F.route('/api/newsletter/',  json_save, ['post', '*Newsletter']);
	F.route('/api/carousel/', get_size);
	// CONTACTFORM
	F.route('/api/contact/',     json_save, ['post', '*Contact']);
	F.route('/api/practics/', get_practics);
	F.route('/api/update-practice/',update_practice);
	F.route('/api/make-contract/',make_contract,['post']);
	F.global.search = [];
	F.global.practics = [];
	load_news();
	load_practics();
	
};

// ==========================================================================
// COMMON
// ==========================================================================

function get_size(){
	this.json({size:F.global.carousel.length});
}

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

/*function load_practics(){
	NOSQL('practics').one().callback((err,res)=>{
		if (!err||res)
			F.global.practics = res;
	});
}*/
function update_practice(){
	let buf;
	for (i in F.global.practics)
		for(j=0;j<F.global.practics[i].length;j++){
			F.global.practics[i][j].linker='';
			for(k=0;k<(F.global.practics[i])[j].category.length;k++){
				buf = {name:(F.global.practics[i])[j].category[k],linker:""}
				F.global.practics[i][j].category[k] = buf;
			}}
	MODEL('practics').save(F.global.practics,(err)=>{if(err){this.json({err:err})}else{this.json({ok:true})}})
	
}

function load_practics(){
	NOSQL('practics').one().where("id",1).callback((err,res)=>{
		if (!err&&res){
			F.global.practics = res.practics;
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


function make_contract(){
	const {fio,address,date,type,company,company2,fio2,osn,osn2,square} = this.body;
	ejs.renderFile('../public/templates/contract.ejs',{fio,address,date,type,company,company2,fio2,osn,osn2,square},(err, str) => {
		console.log('ERR', err);
		console.log('RENDER STRING', str);
		// fs.writeFileSync('./report/t.html',str);
		pdf.create(str, {
			'base': 'http://localhost:8000/',
			type: 'pdf'
		}).toFile(`./contract/${fio}-${type}.pdf`, (err, data) => {
			console.log(err);
			console.log(data);
			this.json({suc:'suc'});
		});
	});
}