'use strict'
const __ERROR__ = process.env.NODE_ENV === 'production' ? 2 : 0
const __WARN__ = process.env.NODE_ENV === 'production' ? 1 : 0

module.exports = {
    globals: {
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
        'plugin:@typescript-eslint/recommended',
        require.resolve('./js'),
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    plugins: [
        '@typescript-eslint',
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
            jsx: true,
        },
    },
    parser: '@typescript-eslint/parser',
    rules: {
        indent: [0], // 强制使用一致的缩进
        semi: [0], // 要求或禁止使用分号代替 ASI
        'no-extra-parens': [0], // 禁止冗余的括号
        'no-redeclare': [0], // 禁止重新声明变量
        'no-shadow': [0], // 禁止变量声明与外层作用域的变量同名
        'no-unused-vars': [0], // 禁止出现未使用过的变量
        // '@typescript-eslint/await-thenable': [2], // 不允许等待一个非Thhenable的值
        '@typescript-eslint/brace-style': [2, '1tbs'], // 大括号风格要求
        '@typescript-eslint/comma-dangle': [2, 'always-multiline'], // 要求或禁止使用拖尾逗号
        '@typescript-eslint/comma-spacing': [2, { before: false, after: true }], // 强制在逗号周围使用空格
        '@typescript-eslint/camelcase': [0], // 驼峰式风格
        '@typescript-eslint/default-param-last': [2], // 最后执行缺省参数
        '@typescript-eslint/explicit-function-return-type': [0], // 要求函数和类方法的显式返回类型
        '@typescript-eslint/explicit-module-boundary-types': [0, {
            allowArgumentsExplicitlyTypedAsAny: true,
        }], // 要求导出函数和类的公共类方法的显式返回和参数类型
        '@typescript-eslint/indent': [2, 4, { SwitchCase: 1 }], // 强制使用一致的缩进// case 子句将相对于 switch 语句缩进 4 个空格，即一个tab
        '@typescript-eslint/keyword-spacing': [2, { before: true, after: true }], // 强制关键字周围空格的一致性
        '@typescript-eslint/member-delimiter-style': [2, { // 接口和类型定义中禁用不必要的分号(typescript扩展支持)
            multiline: {
                delimiter: 'none', // 多行类型定义不使用分隔符
                requireLast: false,
            },
            singleline: {
                delimiter: 'comma', // 单行类型定义使用逗号分隔
                requireLast: false,
            },
        }],
        '@typescript-eslint/no-empty-function': [__WARN__], // 禁止空函数
        '@typescript-eslint/no-empty-interface': [0], // 不允许声明空接口
        '@typescript-eslint/no-explicit-any': [0], // 不允许使用any类型
        '@typescript-eslint/no-extra-parens': [1, 'all', { enforceForArrowConditionals: false }], // 不允许不必要的括号
        '@typescript-eslint/no-extra-semi': [2], // 禁止冗余的分号
        '@typescript-eslint/no-inferrable-types': [0], // 对于初始化为数字、字符串或布尔值的变量或参数，不允许显式类型声明
        '@typescript-eslint/no-redeclare': [2, { ignoreDeclarationMerge: true }], // 禁止重新声明变量
        '@typescript-eslint/no-shadow': [2], // 禁止变量声明与外层作用域的变量同名
        '@typescript-eslint/no-unused-vars': [__WARN__], // 禁止未使用的变量
        '@typescript-eslint/object-curly-spacing': [2, 'always'], // 强制在花括号中使用一致的空格
        '@typescript-eslint/quotes': [2, 'single'], // 强制使用前后一致的双引号、双引号或单引号
        '@typescript-eslint/semi': [2, 'never'], // 禁用不必要的分号(typescript扩展支持)
        '@typescript-eslint/type-annotation-spacing': [2], // 需要在类型注释前后保持一致的间距。
        '@typescript-eslint/space-infix-ops': [2], // 要求操作符周围有空格
        // '@typescript-eslint/no-floating-promises': [0, { ignoreIIFE: true }], // 需要适当地处理类似 promise 的值
        // '@typescript-eslint/no-misused-promises':[0],// 避免在非 promise 的地方使用 promise
        // '@typescript-eslint/no-unsafe-assignment': [0], // 不允许将变量和属性分配给 any
        // '@typescript-eslint/no-unsafe-call': [0], // 不允许调用 any
        // '@typescript-eslint/no-unsafe-member-access': [0], // 不允许成员访问 any 类型变量
        // '@typescript-eslint/no-unsafe-return': [0], // 不允许从函数返回 any
        // '@typescript-eslint/prefer-regexp-exec': [0], // 强制执行RegExp#exec被使用，而不是String#match如果没有提供全局标志
        // '@typescript-eslint/require-await': [__ERROR__], // 不允许没有异步函数的异步函数await表达
        // '@typescript-eslint/return-await': [__ERROR__, 'never'], // 禁用不必要的 return await
        // '@typescript-eslint/restrict-template-expressions': [0], // 强制模板文字表达式为字符串类型
        // '@typescript-eslint/restrict-plus-operands': [0], // 当添加两个变量时，操作数必须类型为数字或类型为字符串

    },
}
