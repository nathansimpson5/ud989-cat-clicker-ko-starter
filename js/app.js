var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Nipsy');
	this.level = ko.observable('Newborn');
	this.imgSrc = ko.observable('img/cat1.jpg');
	this.imgAttribution = ko.observable('http://google.com');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());