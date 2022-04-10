const __ERROR__ = process.env.NODE_ENV === 'production' ? 2 : 0
const __WARN__ = process.env.NODE_ENV === 'production' ? 1 : 0
module.exports = {
    extends: [
        'react-app',
        'react-app/jest',
        require.resolve('./index'),
        require.resolve('./browser'),
    ],
    rules: {
    },
}
