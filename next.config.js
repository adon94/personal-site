/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

const withTM = require("next-transpile-modules")(["letterizejs", "animejs"]); // pass the modules you would like to see transpiled

module.exports = withTM(nextConfig);

// module.exports = nextConfig
