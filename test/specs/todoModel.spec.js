describe("todoModel...", function() {
	it(" should exist", function() {
		expect(App.Models.TodoModel).toBeDefined();
	});
	it("newly instantiated objects should have proper values", function() {
		var todoModel = new App.Models.TodoModel( { title: "My own title!", completed: true } );
		expect(todoModel.get('completed')).toEqual(true);
		expect(todoModel.get('title')).toEqual("My own title!");
	});
});