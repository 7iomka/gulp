const src = './frontend/';
const app = './public_html/';

module.exports.app  = app;
module.exports.src  = src;
module.exports.path = {
	build: {
		template:		app + 'markup',
		vendors:		app + 'js',
		scripts:		app + 'js',
		styles:			app + 'css',
		images:			app + 'images',
		favicon:		app + 'favicon',
		fonts:			app + 'fonts',
		json:			app + 'json'
	},
	assets: {
		sprite:			[src + 'assets/sprite/**/*'],
		images:			[src + 'assets/images/**/*'],
		favicon:		[src + 'assets/favicon/**/*.*'],
		fonts:			[src + 'assets/fonts/**/*.*'],
		json:			[src + 'assets/json/**/*.json'],
		template:		[src + 'template/*.html'],
		vendors:		[src + 'scripts/vendor/**/*.js'],
		scripts:		[src + 'scripts/app/**/*.js'],
		styles:			[src + 'styles/*.scss']
	},
	watch: {
		template:		[src + 'template/*.html', src + 'template/**/*.html'],
		images:			[src + 'assets/images/**/*.*'],
		favicon: 		[src + 'assets/favicon/**/*.*'],
		fonts:			[src + 'assets/fonts/**/*.*'],
		json:			[src + 'assets/json/**/*.json'],
		vendors:		[src + 'scripts/vendor/**/*.js'],
		scripts_app:	[src + 'scripts/app/**/*.js'],
		styles:			[src + 'styles/**/*.scss'],
		critical:		[src + 'styles/**/*.scss']
	},
	extras: [
		src + 'assets/humans.txt',
		src + 'assets/robots.txt'
	],
	modernizr: [src + 'modernizr.js'],
	compile: {
		app: 'main',
		vendor: 'vendor'
	},
	ftp: {
		user: "username",
		password: 'password',
		port: 'ftp server port',
		host: 'ftp server host',
		uploadPath: 'target path'
	},
	sprite: {
		image: app + 'images/sprite.png',
		style: app + 'css/sprite.css'
	},
	testfile: 'test.js',
	tinypng: 'eGm6p86Xxr4aQ3H7SvfoogEUKOwgBQc3',
	screenshot: [
		'320x480',
		'480x320',

		'320x568',
		'568x320',

		'375x627',
		'627x375',

		'414x736',
		'736x414',

		'600x960',
		'960x600',

		'768x1024',
		'1024x768',

		'1280x1024', 

		'1920x1080'
	],
	critical: {
		// Inline the generated critical-path CSS 
		// - true generates HTML 
		// - false generates CSS 
		inline: false,

		// Your base directory 
		base: app,

		// HTML source file 
		src: 'markup/index.html',

		// Your CSS Files (optional) 
		css: [app + 'css/main.min.css'],

		dimensions: [{
			width: 320,
			height: 480
		}, {
			width: 1200,
			height: 900
		}],

		// Target for final HTML output. 
		// use some css file when the inline option is not set 
		dest: app + 'css/critical.css',

		// Minify critical-path CSS when inlining 
		minify: true,

		// Extract inlined styles from referenced stylesheets 
		extract: true,

		// ignore css rules 
		ignore: ['font-face'],

		// overwrite default options 
		ignoreOptions: {}
	}
};

module.exports.server = {
	proxy: "clean.dev",
	server: {
		baseDir: app
	}
};