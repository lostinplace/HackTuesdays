$(function() {

	ClientPage = Backbone.View.extend({
		tagName: "li",
		className: "tab",
		template: _.template($("#clientPageTemplate").html()),

		initialize: function () {

		},

		render: function () {
			var content = this.template(this.model.toJSON());
			this.$el.html(content);
			return this;
		}
	});

	var client = new Client({name:"John",age:22});
	var tab = new ClientPage({el:$("body"), model:client});
	$("body").append(tab.render().el);
});