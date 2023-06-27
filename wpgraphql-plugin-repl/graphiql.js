const { hooks } = window.wpGraphiQL;

hooks.addFilter('graphiql_context_default_value', "graphiql-repl-extension", (context) => {
	const { query, variables } = context;
	window.parent.postMessage({
		name: 'graphiql-context',
		type: 'relay',
		data: {
			query,
			variables
		}
	})
})

window.addEventListener('message', (event) => {

}, false);
