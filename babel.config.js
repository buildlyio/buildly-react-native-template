module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      "react-native-paper/babel",
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@app-components": "./src/application/components",
            "@app-hooks": "./src/application/hooks",
            "@app-localization": "./src/application/localization",
            "@app-react-query": "./src/application/react-query",
            "@app-screens": "./src/application/screens",
            "@app-services": "./src/application/services",
            "@app-stacks": "./src/application/stacks",
            "@app-state": "./src/application/state",
            "@app-theme": "./src/application/themes",
            "@app-utils": "./src/application/utils",
            "@app-zustand": "./src/application/zustand",
            "@assets": "./src/assets",
          },
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx",
            ".json",
            ".svg",
          ],
        },
      ],
    ],
  };
};
