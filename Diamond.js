'use strict';

var Diamond = function (input)  {
	this.input = input;
};

Diamond.prototype.getString = function () {
	var input = this.input;
	var output = [];
	for (var i = 0; i < 2 * (input.length) - 1; i++)  {
        var ii = i >= input.length ? input.length * 2 - 2 - i : i;
		var line = '';
		for (var j = 0; j < 2 * (input.length) - 1; j++)  {
            var jj = j >= input.length ? input.length * 2 - 2 - j : j;
			line += (ii + jj === input.length - 1) ? input[ii] : '-';
		}
		output.push(line);
	}
	return output;
};

Diamond.prototype.print = function () {
	var output = this.get();
	for (var i = 0; i < output.length; i++)  {
		console.log(output[i]);
	}
};

module.exports = Diamond;
