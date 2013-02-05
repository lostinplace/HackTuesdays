var Client = Backbone.Model.extend({
	defaults: {
		company: "Unknown",
		phoneNumbers: []
	},

	idAttribute: "name",

	newPhoneNumber: function (phoneNumber) {
		var phoneArray = this.get("phoneNumbers");
		phoneArray.push(phoneNumber);
		this.set({ phoneNumbers: phoneArray }, { validate: true });
	},

	validate: function (attrs, options) {
		if (attrs.age < 18) {
			return "Too young";
		}
		if (_.every(attrs.phoneNumers, function(val) {
			return val.length >= 7;
		})) {
			return "Invalid phone number";
		}
	}
});

var client = new Client({ name: "John", phoneNumbers: ["123"] });

client.on("invalid", function(model, error) {
	alert(error);
});

client.bind("change:age", function(target, value, options) {
	var old = this.previousAttributes().age;
	alert("Modified age to " + value + " from old value: " + old);
});