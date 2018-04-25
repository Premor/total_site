F.resize('/img/small/', function(image) {
	image.resize(100, 100);
	image.quality(90);
	image.minify();
}, ['/img/']);

F.resize('/small/', function(image) {
	image.resize(100, 100);
	image.quality(90);
	image.minify();
});


F.resize('/img/grayscale/', function(image) {
	image.grayscale();
}, ['/img/', 'nocache']);

F.resize('/img/filters/', function(image) {
	image.blur(1);
	image.sepia();
	image.flip();
	image.flop();
}, ['/img/']);

F.resize('/img/50percent/', function(image) {
	image.resize('50%');
}, ['/img/']);

F.resize('/img/medium/', function(image) {
	image.resize('70%');
}, ['/img/', '.png']);