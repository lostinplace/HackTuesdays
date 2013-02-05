var Clients = Backbone.Collection.extend({
	model: Client,

	comparator: function (client) {
		return client.get("name");
	}
});

var clients = new Clients([
	{name: "John", age: 22},
	{name: "Arthur", age: 23}
]);

clients.add([
	{name: "Joe", age: 24},
	{name: "Art", age: 25}
]);

clients.on("add", function(c) {
	alert("added " + c.get("name"));
});