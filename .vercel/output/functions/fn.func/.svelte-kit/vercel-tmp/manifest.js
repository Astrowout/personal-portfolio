export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","globe.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.6164e59f.js","app":"_app/immutable/entry/app.9e131877.js","imports":["_app/immutable/entry/start.6164e59f.js","_app/immutable/chunks/index.5f847bdc.js","_app/immutable/chunks/singletons.9264c112.js","_app/immutable/entry/app.9e131877.js","_app/immutable/chunks/index.5f847bdc.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js')
		],
		routes: [
			{
				id: "/life",
				pattern: /^\/life\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/life/[slug]",
				pattern: /^\/life\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
