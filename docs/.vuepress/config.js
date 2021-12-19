const nav = require('./nav.js');
const sidebar = require('./sidebar.js');

module.exports = {
    title: '《BungeeCord插件开发》中文翻译',
    base: '/BungeeCord-CN-Translation/',
    markdown: {
        lineNumbers: true
    },
    theme: 'vdoing',
    themeConfig: {
        repo: 'mouse0w0/BungeeCord-CN-Translation',
        nav,
        sidebar,
        sidebarDepth: 2,
        updateBar: {
            showToArticle: false
        },
        titleBadge: false,
        category: false,
        tag: false,
        archive: false,
        rightMenuBar: false,
        editLinks: true,
        editLinkText: '编辑此页面'
    }
}