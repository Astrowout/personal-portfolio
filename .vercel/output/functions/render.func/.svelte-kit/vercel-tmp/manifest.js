export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","favicon.png","globe.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-2dab8b35.js","imports":["_app/immutable/start-2dab8b35.js","_app/immutable/chunks/index-bbeecc85.js","_app/immutable/chunks/singletons-a7e3ef98.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
