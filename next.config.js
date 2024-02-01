/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "i.postimg.cc",
      "i.ibb.co",
      "ibb.co",
      "ds.rokomari.store",
      "www.flaticon.com",
      "img.icons8.com",
    ],
  },
  webpack: (config, { isServer }) => {
    // Modify the CSS loader configuration to handle CSS modules without styles object
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneOfRule) => {
          if (oneOfRule.test && oneOfRule.test.toString().includes('.module.css')) {
            // Disable the CSS modules configuration for the standard import syntax
            delete oneOfRule.modules;

            // Add a new loader to handle the standard import syntax
            oneOfRule.use.unshift('style-loader', 'css-loader');
          }
        });
      }
    });

    return config;
  },
};

module.exports = nextConfig;

