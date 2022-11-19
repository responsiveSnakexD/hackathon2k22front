module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@app': './src',
          },
        },
      ],
      require.resolve('expo-router/babel'),
      'react-native-reanimated/plugin',
    ],
  };
};
