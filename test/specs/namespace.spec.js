describe("Namespace..", function() {
	it("must include views, models, and collections", function() {
		expect(App).toBeDefined();
	});
	it("must include the 'app' namespace for instantiated objects", function () {
		expect(app).toBeDefined()
	});
});