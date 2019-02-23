module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'semi': 0,
     // allow debugger during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "eol-last": 0,//文件以单一的换行符结束
    "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
    "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
    "indent": [0, 10],//缩进风格
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "no-undef": 1,//不能有未定义的变量
    // "no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined
    // "no-undefined": 2,//不能使用undefined
    "spaced-comment": 0,//注释风格要不要有空格什么的
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
    "no-return-assign": 0,//return 语句中不能有赋值表达式
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}
