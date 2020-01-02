const sidebarCn = [
    ["NoobCourse/Introduction", "swoole新手教程"], {
        "title": "运行模式",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
            ["NoobCourse/RunMode/Introduction", "运行模式"],
            ["NoobCourse/RunMode/php-fpm", "php-fpm"], {
                "title": "php-cli",
                "collapsable": true,
                "sidebarDepth": 1,
                "children": [
                    ["NoobCourse/RunMode/php-cli/Introduction", "基础介绍"]
                ]
            }
        ]
    }, {
        "title": "网络协议",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
            ["NoobCourse/NetworkrPotocol/Introduction", "网络协议"],
            ["NoobCourse/NetworkrPotocol/ip", "ip"], {
                "title": "tcp",
                "collapsable": true,
                "sidebarDepth": 1,
                "children": [
                    ["NoobCourse/NetworkrPotocol/tcp/tcp", "tcp"],
                    ["NoobCourse/NetworkrPotocol/tcp/http", "http"],
                    ["NoobCourse/NetworkrPotocol/tcp/websocket", "webSocket"]
                ]
            },
            ["NoobCourse/NetworkrPotocol/udp", "udp"],
            ["NoobCourse/NetworkrPotocol/port", "port端口"]
        ]
    }, {
        "title": "会话管理",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
            ["NoobCourse/Conversation/Introduction", "会话管理"],
            ["NoobCourse/Conversation/Cookie", "cookie"],
            ["NoobCourse/Conversation/Session", "session"],
            ["NoobCourse/Conversation/token", "api/token"]
        ]
    }, {
        "title": "linux基础",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
            ["NoobCourse/Linux/Introduction", "linux基础"],
            ["NoobCourse/Linux/Lnmp", "lnmp安装"],
            ["NoobCourse/Linux/Command", "命令"],
            ["NoobCourse/Linux/Process", "进程管理"],
            ["NoobCourse/Linux/Extention", "扩展安装"],
            ["NoobCourse/Linux/Port", "端口监控"],
            ["NoobCourse/Linux/Firewall", "防火墙说明"]
        ]
    }, {
        "title": "php7.0",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
            ["NoobCourse/PHP/Php7", "部分新特性"]
        ]
    }, {
        "title": "php回调/闭包",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
            ["NoobCourse/PHP/Callback", "回调事件"],
            ["NoobCourse/PHP/Closures", "闭包/匿名函数"]
        ]
    }, {
        "title": "php多进程",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
            ["NoobCourse/PHP/Multiprocess/Introduction", "php多进程"],
            ["NoobCourse/PHP/Multiprocess/fork", "多进程开启"],
            ["NoobCourse/PHP/Multiprocess/ProcessCommunication", "进程通信"],
            ["NoobCourse/PHP/Multiprocess/ProcessSignal", "进程信号"],
            ["NoobCourse/PHP/Multiprocess/ZombieProcess", "僵尸进程"],
            ["NoobCourse/PHP/Multiprocess/OrphanProcess", "孤儿进程"],
            ["NoobCourse/PHP/Multiprocess/Deamon", "守护进程"]
        ]
    },
    ["NoobCourse/Sync", "同步/异步"],
    ["NoobCourse/Block", "阻塞/非阻塞"],
    ["NoobCourse/Coroutine", "协程"], {
        "title": "Swoole",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
            ["NoobCourse/Swoole/Start", "初识Swoole"],
            ["NoobCourse/Swoole/RunningMode", "运行机制"],
            ["NoobCourse/Swoole/Lifecycle", "生命周期"],
            ["", "常见问题"]
        ]
    },
    ["NoobCourse/Composer", "composer使用"], {
        "title": "EasySwoole",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
            ["NoobCourse/EasySwoole/Introduction", "EasySwoole"],
            ["NoobCourse/EasySwoole/DesignIdea", "设计理念"],
            ["NoobCourse/EasySwoole/Section", "组件说明"],
            ["NoobCourse/EasySwoole/RunSteps", "运行过程"],
            ["NoobCourse/EasySwoole/Demo", "demo"]
        ]
    },
    ["NoobCourse/ArtOfAskingQuestions", "提问的艺术"]
];

module.exports = {sidebarCn};
