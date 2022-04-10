const __ERROR__ = process.env.NODE_ENV === 'production' ? 2 : 0
module.exports = {
    rules: {
        'no-console': [__ERROR__, { allow: ['warn', 'error'] }], // 禁止console
    },
}
