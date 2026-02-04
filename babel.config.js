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
            "@app-screens": "./src/application/screens",
            "@app-stacks": "./src/application/stacks",
            "@app-state": "./src/application/state",
            "@app-theme": "./src/application/themes",
            "@assets": "./src/assets",
            "@core-hooks": "./src/core/hooks",
            "@core-localization": "./src/core/localization",
            "@core-react-query": "./src/core/react-query",
            "@core-services": "./src/core/services",
            "@core-stacks": "./src/core/stacks",
            "@core-utils": "./src/core/utils",
            "@core-zustand": "./src/core/zustand",
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
