module.exports = {
    root: true,
    env: {
        node: true
    },
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:vue/essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended',
    ],
    env:{
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
}