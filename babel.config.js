module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          AppUtils: './app/utils/AppUtils.js',
          Constant: './app/utils/Constant.js',
          RestAPI: './app/utils/RestAPI.js',
          Styles: './app/theme/index.js',
          Colors: './app/theme/Colors.js',
        },
      },
    ],
  ],
};
