(function() {

	if( typeof String.prototype.repeatt === "function" ) return;

	String.prototype.repeatt = function(count) {

		var output = "",
			string = this.toString();

		for(var i = 0; i < count; i++){
			output += string;
		}


		return output;

	};

})();