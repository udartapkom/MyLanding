/** @type {import('next').NextConfig} */
const ON_GITHUB_PAGES = process.env.NODE_ENV === 'production';
const repoName = 'MyLanding';

const basePath = ON_GITHUB_PAGES ? `/${repoName}` : '';
const assetPrefix = ON_GITHUB_PAGES ? `/${repoName}/` : '';
const nextConfig = {
    output: 'export',
    assetPrefix,
    basePath: '',
    reactStrictMode: true,
    images: {
        loader: 'custom',
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        loaderFile: './src/utils/imageLoader.ts',
    },
};
export default nextConfig;
