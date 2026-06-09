/** @see https://react-dev-inspector.zthxxx.me/docs/compiler-plugin */
module.exports = {
  presets: ["next/babel"],
  env: {
    development: {
      plugins: ["@react-dev-inspector/babel-plugin"],
    },
  },
};
