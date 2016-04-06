/**
 * Global settings shared by all modules
 * @type {Object}
 */
var settings = module.exports = {
	breakpoints: {
		xs: 481,
		s: 641,
		m: 1000,
		ml: 999,
		l: 1281,
		xl: 1441,
		xxl: 1921
	},
	padding: {
		top: $(window).height() * .04,
		left: $(window).width() * .03
	},
	scrollContainer: 0,
	animationSpeed: 700,
	scrollPos: undefined,
	animating: false,
	unique: true,
	tier: {
		current: 0,
		target: 1
	},
	index: {
		current: 0,
		target: 1
	},
	page: { 
		current: 'landing',
		target: ''
	},
	image: {
		current: 0
	}
};

settings.breakpoints = settings.breakpoints;
settings.padding = settings.padding;
settings.animationSpeed = settings.animationSpeed;
settings.scrollPos = settings.scrollPos;
settings.scrollContainer = settings.scrollContainer;
settings.animating = settings.animating;
settings.page.current = settings.page.current;
settings.page.target = settings.page.target;
settings.tier.current = settings.tier.current;
settings.tier.target = settings.tier.target;
settings.index.current = settings.index.current;
settings.index.target = settings.index.target;
settings.image.current = settings.image.current;
settings.unique = settings.unique;

/*
settings.breakpoints.header = settings.breakpoints.m;
settings.breakpoints.navHover = settings.breakpoints.m;
settings.breakpoints.mobile = settings.breakpoints.l;
*/ 