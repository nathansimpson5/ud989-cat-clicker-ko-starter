var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('lil boat');
	this.imgSrc = ko.observable('img/cat1.jpg');
	this.imgAttribution = ko.observable('http://google.com');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

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

ko.applyBindings(new ViewModel());