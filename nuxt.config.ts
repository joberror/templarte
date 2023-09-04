// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: "Templarte: creative custom web templates platform",
			meta: [
				{ name: "author", content: "Templarte" },
				{
					name: "description",
					content:
						"Templarte: Where templates and artistry unite for limitless creative expression in showcasing your brand",
				},
				{
					name: "keywords",
					content: "Templates, Web, Artistry, Personalization, Customization, Innovation, Branding, Design, Unique, Inspiration, Expression, Creative, Artisanal, Boundless",
				},
				{ name: "rating", content: "General" },
				{
					name: "copyright",
					content: `Templarte - ${new Date().getFullYear()}`,
				},
				{ hid: "description", name: "description", content: "" },
				{ name: "format-detection", content: "telephone=yes" },
			],
			link: [
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/favicon.svg",
				},
			],
		},
	},
	modules: [
		[
			"@nuxtjs/tailwindcss",
			{
				cssPath: "~/assets/css/tailwind.css",
				configPath: "tailwind.config",
				exposeConfig: true,
				config: {},
				injectPosition: 0,
				viewer: true,
			},
		],
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					Poppins: [400, 500, 600, 700],
					"JetBrains+Mono": [400],
				},
				display: "swap",
				prefetch: true,
				preconnect: true,
			},
		],
	],
	devtools: { enabled: true },
});
