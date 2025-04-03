export default {
  presets: [
      [
          '@babel/preset-env',
          {
              modules: false, // Ensure ES Modules are preserved
          },
      ],
  ],
};