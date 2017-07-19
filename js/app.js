var initialCats = [
	{
		clickCount: 0,
		name: 'nipsy',
		imgSrc: 'img/cat.jpg',
		nicknames: ['nips']
	},
	{
		clickCount: 0,
		name: 'lil boat',
		imgSrc: 'img/cat1.jpg',
		nicknames: ['chunks', 'bb', 'thumble']
	},
	{
		clickCount: 0,
		name: 'muffins',
		imgSrc: 'img/cat2.jpg',
		nicknames: ['blue boy']
	},
	{
		clickCount: 0,
		name: 'cranky',
		imgSrc: 'img/cat3.jpg',
		nicknames: ['meanies dont get nicknames']
	},
	{
		clickCount: 0,
		name: 'lego',
		imgSrc: 'img/cat4.jpg',
		nicknames: ['go-go']
	},
	{
		clickCount: 0,
		name: 'terry',
		imgSrc: 'img/cat5.jpg',
		nicknames: ['nice boy']
	},
];


var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);

	this.level = ko.computed(function(){
		if (this.clickCount() < 10) {
			return "newborn";
		} else if (this.clickCount() < 20) {
			return "infant";
		} else {
			return "teen";
		}
	}, this);
}

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push (new Cat(catItem) );
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCurrentCat = function(clickedCat) {
		self.currentCat(clickedCat);
	}

}

ko.applyBindings(new ViewModel());