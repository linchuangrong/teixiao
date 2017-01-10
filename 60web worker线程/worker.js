onmessage = function(event) {
	var baseNumber = event.data.baseNumber;
	var numberArray = [];
	for(var i = 1; i <= 100000; i++) {
		var item = i;
		if(item % baseNumber == 0) {
			if(item % (baseNumber * 10) == 0) {
				item += "<br>";
			}
			numberArray.push(item);
		}
	}
	console.log(numberArray);
	self.postMessage(numberArray.join(' '));
}