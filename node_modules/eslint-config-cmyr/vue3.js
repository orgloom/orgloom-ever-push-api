'use strict'
const __ERROR__ = process.env.NODE_ENV === 'production' ? 2 : 0
module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
        require.resolve('./vue'),
    ],
    rules: {
    },
}
