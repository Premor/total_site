// Online visitors counter
PING('GET /api/ping/');
UPTODATE('2 hours', '/');

$(document).ready(function() {
	var originalCode = $('.command-tile').html();
	$(document).on('click', '.personname', function() {
		
		var code = $(this).children('span').text();
		$('.command-tile').html(code);
		$('.backToBeg').removeClass('hidden');
	});
	$(document).on('click', '.backToBeg',function() {
		$('.command-tile').html(originalCode);
		$('.backToBeg').addClass('hidden');
	});
});

COMPONENT('emaildecode', function() {
	var self = this;
	self.readonly();
	self.make = function() {
		var m = self.html().replace(/\(\w+\)/g, function(value) {
			switch (value) {
				case '(at)':
					return '@';
				case '(dot)':
					return '.';
			}
			return value;
		});
		self.html('<a href="mailto:' + m + '">' + m + '</a>');
	};
});

COMPONENT('gallery', function() {

	var self = this;
	var layer;
	var visible = false;

	self.index = 0;
	self.max = 0;
	self.readonly();

	// For all galleries
	if (!window.$gallery_init) {
		$(document.body).append('<div id="gallery-layer"><a herf="javascript:void(0)" class="gallery-close"><span class="fa fa-times"></span></a><div class="gallery-container"><div class="gallery-prev"><span class="fa fa-arrow-left"></span></div><div class="gallery-image"><img src="/img/empty.png" /><div class="gallery-alt"></div></div><div class="gallery-next"><span class="fa fa-arrow-right"></span></div></div></div>');
		window.$gallery_init = true;

		$(window).on('keydown', function(e) {
			if (!window.$gallery)
				return;
			if (e.keyCode === 39)
				window.$gallery.next();
			else if (e.keyCode === 37)
				window.$gallery.prev();
			else if (e.keyCode === 27)
				window.$gallery.hide();
		});

		$(document).on('click', '.gallery-prev,.gallery-next,.gallery-close', function() {
			var el = $(this);
			if (el.hasClass('gallery-close'))
				window.$gallery.hide();
			else if (el.hasClass('gallery-prev'))
				window.$gallery.prev();
			else
				window.$gallery.next();
		});

		$(window).on('resize', function() {
			FIND('gallery', true).forEach(function(component) {
				component.show(true);
			});
		});
	}

	self.next = function() {
		self.go(self.index + 1);
	};

	self.prev = function() {
		self.go(self.index - 1);
	};

	self.hide = function() {
		visible = false;
		layer.hide();
		window.$gallery = null;
	};

	self.go = function(index) {
		if (index >= self.max)
			self.index = 0;
		else if (index < 0)
			self.index = self.max - 1;
		else
			self.index = index;
		self.show();
	};

	self.refresh = function() {
		self.max = 0;
		self.find('.gallery').each(function(index) {
			var item = $(this);
			var image = item.find('img');
			item.append('<div class="gallery-info"><div>' + image.attr('alt') + '</div><span class="fa fa-camera"></span><b>' + image.attr('data-width') + 'x' + image.attr('data-height') + '</b></div>');
			item.attr('data-index', index);
			self.max++;
		});
	};

	self.make = function() {
		layer = $('#gallery-layer');
		self.refresh();
		self.event('click', '.gallery', function() {
			var item = $(this);
			self.index = parseInt(item.attr('data-index'));
			self.show();
		});
	};

	self.show = function(isResize) {

		if (isResize) {
			if (!visible)
				return;
		}

		var img = self.find('.gallery[data-index="' + self.index + '"]').find('img');
		var big = layer.find('img');

		big.attr('src', img.attr('data-original'));

		var mw = img.attr('data-width').parseInt();
		var mh = img.attr('data-height').parseInt();
		var $w = $(window);
		var ww = (($w.width() / 100) * 70) >> 0;
		var wh = (($w.height() / 100) * 90) >> 0;
		var alt = img.attr('alt');
		var w = 0;
		var h = 0;
		var ratio = mw > mh ? mw / mh : mh / mw;

		if (mw > mh) {
			w = mw;
			h = w / ratio;
		} else {
			h = mh;
			w = h / ratio;
		}

		if (w > ww) {
			w = ww - 20;
			h = w / (mw / mh);
		} else if (h > wh) {
			h = wh - 20;
			w = h / (mh / mw);
		}

		big.attr({ width: w >> 0, height: h >> 0 });
		layer.find('.gallery-alt').html(alt).toggleClass('hidden', alt ? false : true);

		if (visible)
			return;

		layer.show();
		visible = true;
		window.$gallery = self;
	};
});

COMPONENT('newsletter', function() {
	var self = this;
	var button;
	var input;

	self.readonly();
	self.make = function() {

		button = self.find('button');
		input = self.find('input');

		self.event('keydown', 'input', function(e) {
			if (e.keyCode !== 13)
				return;
			button.trigger('click');
		});

		button.on('click', function() {

			var mail = input.val();
			if (!mail.isEmail())
				return;

			AJAX('POST /api/newsletter/', { email: input.val() }, function(response) {

				if (response.success) {
					input.addClass('newsletter-success');
					input.val(self.attr('data-success'));
				}

				setTimeout(function() {
					input.val('');
					input.removeClass('newsletter-success');
				}, 3000);
			});
		});
	};
});

COMPONENT('search', 'class:hidden;delay:200;attribute:data-search', function(self, config) {
	self.readonly();
	self.setter = function(value) {

		if (!config.selector || !config.attribute || value == null)
			return;

		KEYPRESS(function() {

			var elements = self.find(config.selector);
			if (!value) {
				elements.rclass(config.class);
				return;
			}

			var search = value.toSearch();
			var hide = [];
			var show = [];

			elements.toArray().waitFor(function(item, next) {
				var el = $(item);
				var val = (el.attr(config.attribute) || '').toSearch();
				if (val.indexOf(search) === -1)
					hide.push(el);
				else
					show.push(el);
				setTimeout(next, 3);
			}, function() {

				hide.forEach(function(item) {
					item.tclass(config.class, true);
				});

				show.forEach(function(item) {
					item.tclass(config.class, false);
				});
			});

		}, config.delay, 'search' + self.id);
	};
});


COMPONENT('features', 'height:37', function(self, config) {

	var container, timeout, input, search, scroller = null;
	var is = false, results = false, selectedindex = 0, resultscount = 0;

	self.oldsearch = '';
	self.items = null;
	self.template = Tangular.compile('<li data-search="{{ $.search }}" data-index="{{ $.index }}"{{ if selected }} class="selected"{{ fi }}>{{ if icon }}<i class="fa fa-{{ icon }}"></i>{{ fi }}{{ name | raw }}</li>');
	self.callback = null;
	self.readonly();
	self.singleton();

	self.configure = function(key, value, init) {
		if (init)
			return;
		switch (key) {
			case 'placeholder':
				self.find('input').prop('placeholder', value);
				break;
		}
	};

	self.make = function() {

		self.aclass('ui-features-layer hidden');
		self.append('<div class="ui-features"><div class="ui-features-search"><span><i class="fa fa-search"></i></span><div><input type="text" placeholder="{0}" class="ui-features-search-input" /></div></div><div class="ui-features-container"><ul></ul></div></div>'.format(config.placeholder));

		container = self.find('ul');
		input = self.find('input');
		search = self.find('.ui-features');
		scroller = self.find('.ui-features-container');

		self.event('touchstart mousedown', 'li[data-index]', function(e) {
			self.callback && self.callback(self.items[+this.getAttribute('data-index')]);
			self.hide();
			e.preventDefault();
			e.stopPropagation();
		});

		$(document).on('touchstart mousedown', function(e) {
			is && !$(e.target).hclass('ui-features-search-input') && self.hide(0);
		});

		$(window).on('resize', function() {
			is && self.hide(0);
		});

		self.event('keydown', 'input', function(e) {
			var o = false;
			switch (e.which) {
				case 27:
					o = true;
					self.hide();
					break;
				case 13:
					o = true;
					var sel = self.find('li.selected');
					if (sel.length && self.callback)
						self.callback(self.items[+sel.attr('data-index')]);
					self.hide();
					break;
				case 38: // up
					o = true;
					selectedindex--;
					if (selectedindex < 0)
						selectedindex = 0;
					else
						self.move();
					break;
				case 40: // down
					o = true;
					selectedindex++ ;
					if (selectedindex >= resultscount)
						selectedindex = resultscount;
					else
						self.move();
					break;
			}

			if (o && results) {
				e.preventDefault();
				e.stopPropagation();
			}
		});

		self.event('keyup', 'input', function() {
			setTimeout2(self.id, self.search, 100, null, this.value);
		});
	};

	self.search = function(value) {

		if (!value) {
			if (self.oldsearch === value)
				return;
			self.oldsearch = value;
			selectedindex = 0;
			results = true;
			resultscount = self.items.length;
			container.find('li').rclass('hidden selected');
			self.move();
			return;
		}

		if (self.oldsearch === value)
			return;

		self.oldsearch = value;
		value = value.toSearch().split(' ');
		results = false;
		resultscount = 0;
		selectedindex = 0;

		container.find('li').each(function() {
			var el = $(this);
			var val = el.attr('data-search');
			var h = false;

			for (var i = 0; i < value.length; i++) {
				if (val.indexOf(value[i]) === -1) {
					h = true;
					break;
				}
			}

			if (!h) {
				results = true;
				resultscount++;
			}

			el.tclass('hidden', h);
			el.rclass('selected');
		});
		self.move();
	};

	self.move = function() {
		var counter = 0;
		var h = scroller.css('max-height').parseInt();

		container.find('li').each(function() {
			var el = $(this);
			if (el.hclass('hidden'))
				return;
			var is = selectedindex === counter;
			el.tclass('selected', is);
			if (is) {
				var t = (config.height * counter) - config.height;
				if ((t + config.height * 5) > h)
					scroller.scrollTop(t);
				else
					scroller.scrollTop(0);
			}
			counter++;
		});
	};

	self.show = function(items, callback) {

		if (is) {
			clearTimeout(timeout);
			self.hide(0);
			return;
		}

		var type = typeof(items);
		var item;

		if (type === 'string')
			items = self.get(items);

		if (!items) {
			self.hide(0);
			return;
		}

		self.items = items;
		self.callback = callback;
		results = true;
		resultscount = self.items.length;

		input.val('');

		var builder = [];
		var indexer = {};

		for (var i = 0, length = items.length; i < length; i++) {
			item = items[i];
			indexer.index = i;
			indexer.search = (item.name + ' ' + (item.keywords || '')).trim().toSearch();
			!item.value && (item.value = item.name);
			builder.push(self.template(item, indexer));
		}

		container.html(builder);

		var W = $(window);
		var top = ((W.height() / 2) - (search.height() / 2)) - scroller.css('max-height').parseInt();
		var options = { top: top, left: (W.width() / 2) - (search.width() / 2) };

		search.css(options);
		self.move();

		if (is)
			return;

		self.rclass('hidden');

		setTimeout(function() {
			self.aclass('ui-features-visible');
		}, 100);

		!isMOBILE && setTimeout(function() {
			input.focus();
		}, 500);

		is = true;
		$('html,body').aclass('ui-features-noscroll');
	};

	self.hide = function(sleep) {
		if (!is)
			return;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			self.aclass('hidden').rclass('ui-features-visible');
			self.callback = null;
			self.target = null;
			is = false;
			$('html,body').rclass('ui-features-noscroll');
		}, sleep ? sleep : 100);
	};
});