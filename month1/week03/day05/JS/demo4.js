let vm = new Vue({
    el: "#root",
    data() {
        return {
            headerNav: [
                // id名，内容，点击后添加的 Class 名
                {id: 1, title: "首页", clickClass: "headerCC"},
                {id: 2, title: "关于我们"},
                {id: 3, title: "案例展示"},
                {id: 4, title: "服务内容"},
                {id: 5, title: "新闻中心"},
                {id: 6, title: "联系我们"}
            ],
            slideshow: [
                {id: 1, src: "./images/demo4_slideshow1.png"}
            ],
            main: [
                {
                    id: 1, title: "服务项目", main_class: "main_class_1",
                    main_content: [
                        {
                            id: 1,
                            main_icon: "iconfont icon-mf057",
                            title: "网站开发及设计",
                            text: "为客户提供专业的品牌化网站页面设计、网站策划、网站建设与研发及运营、营销等一体化服"
                        },
                        {
                            id: 2,
                            main_icon: "iconfont icon-weixinwangye",
                            title: "移动设备界面设计",
                            text: "为平板电脑、手机、家电设备、车戴系统等移动终端提供完善的品牌化用户页面及功能设计。"
                        },
                        {
                            id: 3,
                            main_icon: "iconfont icon-iphones",
                            title: "微信开发设计",
                            text: "为微信公众号定制品牌专业性的功能设计,及运营、营销等服务。"
                        },
                        {
                            id: 4,
                            main_icon: "iconfont icon-diaoseban",
                            title: "创意、视觉设计",
                            text: "应用于LOGO、VI系统、产品画册、名片、餐牌、彩页系统图标等设计方案及印刷。"
                        }
                    ]
                },
                {
                    id: 2, title: "案例展示", main_class: "main_class_2",
                    main_content: [
                        {
                            id: 1,
                            main_img: "./images/demo4_cont1_2.png",
                            title: "12个顶尖创意",
                            text: "视差滚动效果,原本是一个天文学术语,当我们观察星空时,高我们远的星星移动速度较慢,…"
                        },
                        {
                            id: 2,
                            main_img: "./images/demo4_cont1_2.png",
                            title: "高端网站建设",
                            text: "为平板电脑、手机、家电设备、车戴系统等移动终端提供完善的品牌化用户页面及功能设计。"
                        },
                        {
                            id: 3,
                            main_img: "./images/demo4_cont3.png",
                            title: "怎样让百度喜",
                            text: "WordPress是目前国内用户使用最多的独立博客程序,易安装易操作。然而,多年来坊间一直在"
                        },
                        {
                            id: 4,
                            main_img: "./images/demo4_cont4.png",
                            title: "外贸建站不可",
                            text: "外贸网站就是外贸企业搭建的面向海外客户的站点,这已经成为他们增加海外订单的有效方式…"
                        }
                    ]
                },
                {
                    id: 3, title: "服务项目", main_class: "main_class_3",
                    main_content: [
                        {
                            id: 1,
                            main_img: "",
                            title: "网站开发及设计",
                            text: "为客户提供专业的品牌化网站页面设计、网站策划、网站建设与研发及运营、营销等一体化服"
                        },
                        {
                            id: 2,
                            main_img: "",
                            title: "移动设备界面设计",
                            text: "为平板电脑、手机、家电设备、车戴系统等移动终端提供完善的品牌化用户页面及功能设计。"
                        },
                        {
                            id: 3,
                            main_img: "",
                            title: "微信开发设计",
                            text: "为微信公众号定制品牌专业性的功能设计,及运营、营销等服务。"
                        },
                        {
                            id: 4,
                            main_img: "",
                            title: "创意、视觉设计",
                            text: "应用于LOGO、VI系统、产品画册、名片、餐牌、彩页系统图标等设计方案及印刷。"
                        }
                    ]
                },
            ]
        }
    },
    methods: {}
})