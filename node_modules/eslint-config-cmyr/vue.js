'use strict'
const __ERROR__ = process.env.NODE_ENV === 'production' ? 2 : 0
const __WARN__ = process.env.NODE_ENV === 'production' ? 1 : 0

module.exports = {
    extends: [
        'plugin:vue/recommended',
        '@vue/typescript/recommended',
        require.resolve('./index'),
        require.resolve('./browser'),
    ],
    plugins: [
        'vue',
    ],
    parser: 'vue-eslint-parser',
    rules: {
        'vue/array-bracket-spacing': 2,
        'vue/arrow-spacing': 2,
        'vue/block-spacing': 2,
        // 'vue/block-tag-newline': 2, // 在打开后和关闭块级标记之前强制换行
        'vue/brace-style': 2,
        'vue/camelcase': 2,
        'vue/comma-dangle': 2,
        'vue/component-name-in-template-casing': 2, // 校验组件 case
        'vue/eqeqeq': 2,
        'vue/html-indent': [2, 4], // vue中缩进为4
        'vue/html-quotes': [2, 'double'], // vue中用双引号
        'vue/html-self-closing': [__ERROR__], // 自闭合标签
        'vue/key-spacing': 2,
        'vue/match-component-file-name': [1, { // 要求组件名称属性与其文件名匹配
            extensions: ['jsx', 'tsx', 'vue'],
            shouldMatchCase: false,
        }],
        'vue/max-attributes-per-line': [2, { // 每行属性最大数量
            singleline: 2,
            multiline: {
                max: 1,
            },
        }],
        'vue/no-unused-components': [__WARN__], // 禁止未使用的组件
        'vue/no-unused-vars': 0, // 禁止未使用变量
        'vue/no-reserved-component-names': [2, {
            disallowVueBuiltInComponents: true, // 禁用 vue2 的内置组件
            disallowVue3BuiltInComponents: true, // 禁用 vue3 的内置组件
        }], // 不允许在组件定义中使用保留名称
        'vue/object-curly-spacing': 2,
        'vue/padding-line-between-blocks': [2], // 要求或不允许块之间的填充行
        'vue/require-default-prop': [0],
        'vue/require-name-property': [2], // 组件必须命名
        'vue/static-class-names-order': [2], // 静态 class 排序
        'vue/v-for-delimiter-style': [2, 'in'], // v-for 循环使用 in

    },
}

// const fs = require('fs')
// const { rules } = module.exports
// const ruleList = Object.entries(rules).sort((a, b) => {
//     return a[0].localeCompare(b[0])
// })
// const obj = {}
// ruleList.forEach((e) => {
//     obj[e[0]] = e[1]
// })
// fs.writeFileSync('vue-rules.json', JSON.stringify(obj, null, 4))
