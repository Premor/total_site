exports.install = function() {
	// CMS rendering
	F.route('/lk/', view_lk,['#session']);
	ROUTE('/registration/',view_registration,['#session']);
	//ROUTE('/registration',view_registration_auth,[/*'authorize',*/'#session']);
	ROUTE('/registration/', json_create_user, ['post'/*,'unauthorize'*/,'#session']);
	ROUTE('/login/',view_login,['#session']);
	
	ROUTE('/login/google/',oauth_login,[/*'unauthorize',*/'#session']);
	ROUTE('/login/google/callback/', oauth_login_callback, [/*'unauthorize',*/'#session']);

	ROUTE('/login/', login, ['post','#session']);
	ROUTE('/logout/',logout,[/*'authorize',*/'#session']);



	

	
	
};
function view_lk(){
    if (this.session.user)
        this.view('main');
	else	
		this.redirect('/login/');

}

function logout(){
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

    MODULE('oauth2').callback(type, CONFIG('oauth2.' + type + '.key'), CONFIG('oauth2.' + type + '.secret'), url, self, function(err, profile, access_token) {
		//console.log(profile);
		self.session.user ={google_profile: profile};

        self.view('check', self.session.user);
    });
}


function view_registration(){
	var self = this;
	if (self.session.user)
		self.view('registration_auth');
	else	
		self.view('registration');
}

function json_create_user() {
	var user = { id: Utils.GUID(5), login: this.body.login, password: this.body.psw };
	

	//console.log(this.flags)
	//console.log(this.body)
    // global alias:
    MODEL('user').create(user);
    this.view('/congratulation', user);
}
function view_login(){
	var self = this;
	self.view('login');
}

function login(){
	var self = this;
	MODEL('user').find_u(this.body.login, this.body.psw, (err,res)=>{
		if (err)
			this.view('fail', err);
		else
		{
			this.session.user = {id: res.id, login: self.body.login};
			this.redirect('/');
		}
	})
}

