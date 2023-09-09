/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	reactStrictMode: false,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import 'styles/_variables.scss';`,
	},
	images: {
		domains: ['images.unsplash.com'],
	},
	compiler: { styledComponent: true }, // styledcomponent나 modules.css 쓸 때 클래스명 다른 문제
};

module.exports = nextConfig;
