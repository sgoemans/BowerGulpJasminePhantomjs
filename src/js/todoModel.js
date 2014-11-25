App.Models.TodoModel = Backbone.Model.extend({
	defaults: {
		title: '',
		createdAt: new Date(),
		completed: false
	},
	initialize: function(){
		this.on("change", function(model){
			console.log("Changing model attribute values");
		});
	}
});