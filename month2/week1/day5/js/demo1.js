let vm = new Vue({
    el: "#root",
    data() {
        return {
            navs: ['网站首页', '关于我们', '新闻资讯', '成功案例', '尊享服务', '招商加盟', '联系我们'],
            slideshows: [
                {
                    id: 1,
                    img: './images/demo1_1.png',
                    title: '跨屏时代 全网营销',
                    text: 'CROSS SCREEN THE WHOLE NETWORK MARKETIG.'
                }
            ],
            partners: [
                './images/demo1_logo/dangdang.png',
                './images/demo1_logo/tianmao.png',
                './images/demo1_logo/jd.png',
                './images/demo1_logo/weibo.png',
                './images/demo1_logo/weipinhui.png',
                './images/demo1_logo/mengbasha.png',
                './images/demo1_logo/wanke.png',
                './images/demo1_logo/hengda.png',
                './images/demo1_logo/lvdijituan.png',
                './images/demo1_logo/biguiyuan.png',
                './images/demo1_logo/baolidichan.png',
                './images/demo1_logo/longhudichan.png'
            ],
            advantages: [
                {
                    title: '我们的设计 Our Design',
                    text: '从实地到方案敲定再到设计出图,每一步都有优秀的设计团队全程跟踪,为您打造出最合适的作品是最诚恳的义务。'
                },
                {
                    title: '我们的设计 Our Design',
                    text: '从实地到方案敲定再到设计出图,每一步都有优秀的设计团队全程跟踪,为您打造出最合适的作品是最诚恳的义务。'
                },
                {
                    title: '我们的设计 Our Design',
                    text: '从实地到方案敲定再到设计出图,每一步都有优秀的设计团队全程跟踪,为您打造出最合适的作品是最诚恳的义务。'
                }
            ],
            cont3_navs: {
                title: [
                    {id: 1, name: '服务行业'},
                    {id: 2, name: '教育行业'},
                    {id: 3, name: '房产行业'},
                    {id: 4, name: '能源行业'},
                ],
                images: [
                    ['./images/demo1_success/1.png', './images/demo1_success/2.png', './images/demo1_success/3.png', './images/demo1_success/4.png', './images/demo1_success/5.png', './images/demo1_success/6.png']
                ]
            },
            news: [
                {
                    id: 1,
                    title: '公司新闻 Company News',
                    texts: [
                        {
                            new: '一款APP从设计稿到切图过程全方位揭秘',
                            time: '10-10'
                        },
                        {
                            new: '关于移动端设计工作者必备相关素质',
                            time: '10-09'
                        },
                        {
                            new: '移动产品经理必须了解 产品的体验进化设',
                            time: '10-09'
                        },
                        {
                            new: 'App细节设计系列Path for iOS分析',
                            time: '10-09'
                        },
                        {
                            new: '指尖上的世界杯 看国内新闻客户端功能剖',
                            time: '10-09'
                        },
                        {
                            new: '更好的方式来引导用户为APP应用打分',
                            time: '10-09'
                        }
                    ]
                },
                {
                    id: 2,
                    title: '行业新闻 Industry News',
                    texts: [
                        {
                            new: '拿什么拯救你“尴尬”的UI界面(二)',
                            time: '10-10'
                        },
                        {
                            new: '当今的移动搜索产品为什么都是那么的难',
                            time: '10-09'
                        },
                        {
                            new: '看看著名天气类APP的7条设计经验',
                            time: '10-09'
                        },
                        {
                            new: '指尖上的新体验 移动互联时代的世界杯',
                            time: '10-09'
                        },
                        {
                            new: '微信购物 电商去中心化之路',
                            time: '10-09'
                        },
                        {
                            new: '移动互联网APP应用的10项设计原则概述',
                            time: '10-09'
                        }
                    ]
                },
                {
                    id: 3,
                    title: '公司新闻 Company News',
                    texts: [
                        {
                            new: '一款APP从设计稿到切图过程全方位揭秘',
                            time: '10-10'
                        },
                        {
                            new: '关于移动端设计工作者必备相关素质',
                            time: '10-09'
                        },
                        {
                            new: '移动产品经理必须了解 产品的体验进化设',
                            time: '10-09'
                        },
                        {
                            new: 'App细节设计系列Path for iOS分析',
                            time: '10-09'
                        },
                        {
                            new: '指尖上的世界杯 看国内新闻客户端功能剖',
                            time: '10-09'
                        },
                        {
                            new: '更好的方式来引导用户为APP应用打分',
                            time: '10-09'
                        }
                    ]
                }
            ]
        }
    },
    methods: {}
})