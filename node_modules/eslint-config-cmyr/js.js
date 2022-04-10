const __ERROR__ = process.env.NODE_ENV === 'production' ? 2 : 0
const __WARN__ = process.env.NODE_ENV === 'production' ? 1 : 0

module.exports = {
    root: true,
    globals: { // 处理全局变量
        globalThis: true,
    },
    env: {
        browser: true,
        es6: true,
        commonjs: true,
        node: true,
        mocha: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
    ],
    plugins: [
    ],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
            jsx: true,
        },
    },
    rules: {
        'array-callback-return': [1], // 强制数组方法的回调函数中有 return 语句
        'arrow-body-style': [__WARN__, 'as-needed'], // 要求箭头函数体使用大括号,当大括号是可以省略的，强制不使用它们 (默认)
        'array-element-newline': [1, 'consistent'], //  需要一致地使用数组元素之间的换行符
        'arrow-parens': [1, 'always'], // 要求在所有情况下使用圆括号将参数括起来
        'arrow-spacing': [2, { before: true, after: true }], // 要求箭头函数的箭头之前或之后有空格
        'block-spacing': [2, 'always'], // 禁止或强制在代码块中开括号前和闭括号后有空格
        'brace-style': [2], // 大括号风格要求
        'comma-dangle': [2, 'always-multiline'], // 要求或禁止使用拖尾逗号
        'comma-spacing': [2, { before: false, after: true }], // 强制在逗号周围使用空格
        'consistent-this': [1], // 当获取当前执行环境的上下文时，强制使用一致的命名
        curly: [2, 'all'], // 要求遵循大括号约定
        'dot-notation': [0], // 强制尽可能地使用点号
        'eol-last': [__WARN__, 'always'], // 要求或禁止文件末尾存在空行
        eqeqeq: [2], // 要求使用 === 和 !==
        'func-style': [2, 'declaration', { allowArrowFunctions: true }], // 强制 function 声明或表达式的一致性
        'handle-callback-err:': [0, '^(e|err|error)$'], // 强制回调错误处理
        'implicit-arrow-linebreak': [2, 'beside'], // 禁止在箭头函数体之前出现换行
        indent: [2, 4, { SwitchCase: 1 }], // 强制使用一致的缩进// case 子句将相对于 switch 语句缩进 4 个空格，即一个tab
        'jsx-quotes': [1, 'prefer-double'], // 强制所有不包含双引号的 JSX 属性值使用双引号
        'key-spacing': [2, { beforeColon: false, afterColon: true }], // 强制在对象字面量的键和值之间使用一致的空格
        'keyword-spacing': [2, { before: true, after: true }], // 强制关键字周围空格的一致性
        'linebreak-style': [2, 'unix'], // 强制使用一致的换行风格
        'new-cap': [0], // 要求构造函数首字母大写
        'new-parens': [2, 'always'], // 要求调用无参构造函数时带括号
        'no-alert': [__WARN__], // 禁用 Alert
        'no-buffer-constructor': [2], // 禁用 Buffer() 构造函数
        'no-confusing-arrow': [2, { allowParens: true }], // 禁止在可能与比较操作符相混淆的地方使用箭头函数
        'no-console': [__WARN__, { allow: ['warn', 'error'] }], // 禁止console
        'no-debugger': [__ERROR__], // 禁止debugger
        'no-div-regex': [1], // 禁止除法操作符显式的出现在正则表达式开始的位置
        'no-duplicate-imports': [2], // 禁止模块重复导入
        'no-else-return': [2,
            {
                allowElseIf: false, // 禁止在 return 之后有 else if 块
            }], // 禁止在 else 前有 return
        'no-empty': [1], // 禁止有空代码块
        'no-eval': [2], // 禁用 eval()
        'no-extend-native': [2, { exceptions: [] }], // 禁止扩展原生对象
        'no-extra-boolean-cast': [2], // 禁止不必要的布尔类型转换
        'no-extra-parens': [2], // 禁止冗余的括号
        'no-floating-decimal': [1], // 禁止数字字面量中使用前导和末尾小数点
        'no-implied-eval': [1], // 禁用隐式的eval()
        'no-lonely-if': [2], // 禁止 if 语句作为唯一语句出现在 else 语句块中
        'no-loop-func': [1], // 禁止在循环语句中出现包含不安全引用的函数声明
        'no-magic-numbers': [0,
            {
                ignore: [0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9], // 指定检测中可以忽略的数字
                ignoreArrayIndexes: true, // 指定数字用作数组的索引是否是可以的
                enforceConst: false, // 指定是否应该在数字变量的声明中检测 const 关键
                detectObjects: false, // 指定是否应该在设置对象属性时检测数字
            }], // 禁用魔术数字
        'no-mixed-requires': [2], // 禁止混合常规变量声明和 require 调用
        'no-multi-assign': [2], // 禁止连续赋值
        'no-multi-spaces': [2, { ignoreEOLComments: true }], // 禁止出现多个空格
        'no-multiple-empty-lines': [__ERROR__, { max: 1 }], // 不允许多个空行
        'no-nested-ternary': [2], // 禁止使用嵌套的三元表达式
        'no-new-require': [2], // 禁止调用 require 时使用 new 操作符
        'no-new-wrappers': [2], // 禁止原始包装实例
        'no-path-concat': [2], // 禁止对 __dirname 和 __filename 进行字符串连接
        'no-plusplus': [0], // 禁止++或--
        'no-redeclare': [2, { builtinGlobals: true }], // 禁止重新声明变量
        'no-return-assign': [2], // 禁止在返回语句中赋值
        'no-return-await': [__ERROR__], // 禁用不必要的 return await
        'no-shadow': [2], // 禁止变量声明与外层作用域的变量同名
        'no-sync': [1, { allowAtRootLevel: true }], // 禁止使用同步方法
        'no-trailing-spaces': [0], // 禁用行尾空格
        'no-unneeded-ternary': [2], // 禁止可以在有更简单的可替代的表达式时使用三元操作符
        'no-unused-vars': [__WARN__], // 禁止出现未使用过的变量
        'no-use-before-define': [0], // 禁止在变量定义之前使用它们
        'no-useless-call': [1], // 禁止不必要的 .call() 和 .apply()
        'no-useless-constructor': [__ERROR__], // 禁用不必要的构造函数
        'no-useless-return': [__ERROR__], // 禁止多余的 return 语句
        'no-var': [2], // 要求使用 let 或 const 而不是 var
        'no-whitespace-before-property': [2], // 禁止属性前有空白
        'max-len': [0, { code: 200 }], // 强制行的最大长度
        'max-lines': [0, { max: 500 }], // 强制文件的最大行数
        'max-lines-per-function': [0, { max: 120 }], // 强制函数最大行数
        'max-nested-callbacks': [1, { max: 5 }], // 强制回调函数最大嵌套深度
        'max-params': [1, { max: 5 }], // 强制函数定义中最大参数个数
        'object-curly-spacing': [2, 'always'], // 强制在花括号中使用一致的空格
        'object-shorthand': [2], // 要求或禁止对象字面量中方法和属性使用简写语法
        'object-property-newline': [2, { allowAllPropertiesOnSameLine: true }], // 强制将对象的属性放在不同的行上
        'one-var': [1, 'never'], // 强制函数中的变量在一起声明或分开声明
        'operator-assignment': [2], // 要求或禁止尽可能地简化赋值操作
        'padded-blocks': [0], // 要求或禁止块内填充
        'prefer-arrow-callback': [2], // 要求回调函数使用箭头函数
        'prefer-const': [__ERROR__], // 建议使用const
        'prefer-rest-params': [2], // 要求使用剩余参数而不是 arguments
        'prefer-template': [2], // 建议使用模板字面量而非字符串连接 (prefer-template)
        'quote-props': [2, 'as-needed', { keywords: false, numbers: true }], // 当没有严格要求时，禁止对象字面量属性名称使用引号
        quotes: [2, 'single'], // 强制使用一致的反勾号、双引号或单引号double
        'require-await': [0], // 不允许没有异步函数的异步函数await表达
        semi: [2, 'never'], // 要求或禁止使用分号代替 ASI
        'semi-style': [2, 'last'], // 强制分号出现在句子末尾
        'sort-imports': [0], // import 排序
        'space-before-blocks': [1, 'always'], // 要求或禁止语句块之前的空格
        'space-before-function-paren': [0,
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            }], // 要求或禁止函数圆括号之前有一个空格
        'space-infix-ops': [2], // 要求操作符周围有空格
        'spaced-comment': [2, 'always'], // 要求或禁止在注释前有空白
        'template-curly-spacing': [2, 'never'], // 强制模板字符串中空格的使用
    },
}
