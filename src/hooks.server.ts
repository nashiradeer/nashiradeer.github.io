export function handle({ event, resolve }) {
	return resolve(event, {
		// Replace %lang% with the language code in the HTML
		transformPageChunk: ({ html }) => html.replace('%lang%', event.params.lang ?? 'en')
	});
}
