export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "iamroot/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BeTo6ynz.js","app":"_app/immutable/entry/app.NKY5vknd.js","imports":["_app/immutable/entry/start.BeTo6ynz.js","_app/immutable/chunks/entry.CxBxfMo4.js","_app/immutable/chunks/scheduler.DTOClJAy.js","_app/immutable/entry/app.NKY5vknd.js","_app/immutable/chunks/scheduler.DTOClJAy.js","_app/immutable/chunks/index.3e9ivkJs.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
