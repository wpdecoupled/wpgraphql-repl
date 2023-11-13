const { hooks } = window?.wpGraphiQL;

if (!hooks) {
	throw new Error('Hooks not found');
}

hooks.addFilter('graphiql_context_default_value', "graphiql-repl-extension", (context) => {
	const { query, variables } = context;

	window?.parent?.postMessage({
		name: 'graphiql-context',
		type: 'relay',
		data: {
			query,
			variables
		}
	})

	return context;
});
