const sidebar = require('./sidebar');

module.exports = {
    dest: 'publish',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '仙士可博客,easyswoole/swoole入门新手教程',
            description: 'easyswoole/swoole新手入门教程,教你怎么入门swoole'
        }
    },
    themeConfig: {
        logo: '/resources/logo.png',
        theme: 'vuepress-theme-easyswoole',
        sidebar: 'auto',
        locales: {
            '/': {
                sidebar: sidebar.sidebarCn,
                nav: [
                    {text: '仙士可博客', link: 'http://www.php20.cn'},
                ],
            },
        }
    },
    head: [
        ['script', {src: 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js'}],
        ['script', {src: '/bdtj.js'}],
        ['script', {src: 'https://cdn.bootcss.com/layer/2.3/layer.js'}],
        ['href', {src: 'https://cdn.bootcss.com/layer/2.3/skin/layer.css', rel: "stylesheet"}],
        ['link', {rel: "icon", type: "image/x-icon", href: "/favicon.ico"}]
    ],
    port:8070
};