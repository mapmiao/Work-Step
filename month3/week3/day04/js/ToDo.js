import {Ajax} from '/lib/Ajax.js'

const {createApp} = Vue;


const vm = createApp({
    data() {
        return {
            showToDoList: null,
            ToDoList: [],
            ifAllSelect: false,
            showAll: 0, // 1 显示所有，2 显示完成的，3 显示未完成的

            url: 'http://localhost:3000',
            get_todos: '/todos',
            post_add_todo: '/todos',
            delete_del_todo: '/todos',
        }
    },
    methods: {
        getEleId(eId) {
            return document.getElementById(eId);
        },
        init() {
            const that = this;
            Ajax({request: 'GET', url: this.url, port: this.get_todos}, (res) => {
                that.ToDoList = res;
            });
        },
        add() {
            const that = this;
            const newToDo = this.getEleId('newToDo')
            let parameters = {
                title: newToDo.value,
            };
            Ajax({
                request: 'POST',
                url: this.url,
                contentType: 'JSON',
                parameter: parameters,
                port: this.get_todos
            }, () => {
                console.log('ok')
                that.init()
            });
            newToDo.value = '';
        },
        del(id) {
            const that = this;
            Ajax({
                request: 'DELETE',
                url: this.url,
                parId: id,
                port: this.delete_del_todo
            }, () => {
                that.init()
            })
        },
        ifAccomplish(id, updata) {
            const that = this;
            Ajax({
                    request: 'GET',
                    url: this.url,
                    contentType: 'JSON',
                    parId: id,
                    port: this.get_todos,
                    completed: updata
                },
                () => {
                    that.init();
                }
            )
            ;
        },
        selectAll(e) {
            this.ToDoList.forEach((e) => {
                e.accomplish = !this.ifAllSelect
            })
            this.ifAllSelect = !this.ifAllSelect
        },
        show() {

        },
        delAll() {

        }

    }, mounted() {
        let that = this;
        /* 初始化获取GET请求 ToDoList 数据 */
        that.init();

    },
}).mount('#myToDo')