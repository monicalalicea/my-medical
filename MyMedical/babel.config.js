module.exports = function (api) {
  api.cache(true);

  return {
    // No 'nativewind/babel' here: NativeWind v5 rewrites imports in Metro
    // (metro.config.js). The babel preset also rewrites react-native-web's
    // internals, causing a circular import that crashes web builds.
    presets: [['babel-preset-expo']],

    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],

          alias: {
            '@': './',
            'tailwind.config': './tailwind.config.js',
          },
        },
      ],
      'react-native-worklets/plugin',
    ],
  };
};
