module.exports = {
    title: 'JK - UI',
    description: '多点健康ui组件库',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
        ['link', { rel: 'stylesheet', href: '/css/style.css' }],
    ],
    themeConfig: {
        nav: require('../nav.config'),
        sidebar: require('../sidebar.config')
    }
}
