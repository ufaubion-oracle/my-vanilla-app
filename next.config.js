const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ debugId, hash}) => `${debugId}__${hash}`
  // identifiers: 'debug'
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withVanillaExtract(nextConfig);
