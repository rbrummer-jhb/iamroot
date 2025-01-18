export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.D-GszmH-.js","app":"_app/immutable/entry/app.BhES6rQN.js","imports":["_app/immutable/entry/start.D-GszmH-.js","_app/immutable/chunks/entry.CljA9LH4.js","_app/immutable/chunks/scheduler.Cv9TUz2p.js","_app/immutable/entry/app.BhES6rQN.js","_app/immutable/chunks/scheduler.Cv9TUz2p.js","_app/immutable/chunks/index.C8AfICH1.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
