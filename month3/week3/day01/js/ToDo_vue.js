const {createApp, ref, onMounted} = Vue;

const vm = createApp({
    data() {
        return {
            showToDoList: _.cloneDeep(this.ToDoList),
            ToDoList: [],
            ifAllSelect: false,
            showAll: 0, // 1 显示所有，2 显示完成的，3 显示未完成的
        }
    },
    methods: {
        getEleId(eId) {
            return document.getElementById(eId);
        },
        add() {
            const ToDoValue = this.getEleId('newToDo');
            if (!ToDoValue.value) return
            const data = {
                id: this.ToDoList.length + 1,
                ToDo: ToDoValue.value,
                accomplish: false,
            }
            this.ToDoList.push(data);
            ToDoValue.value = '';
            localStorage.setItem('ToDoList', JSON.stringify(this.ToDoList));

        },

        btn_ToDo_Ul(e) {
            if (e.target.tagName === 'BUTTON') {
                this.del(e.target)
            }
            if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
                this.ifAccomplish(e.target)
            }

        },
        ifAccomplish(el) {
            let bool = true
            const ToDoList = document.querySelectorAll('#ToDo_Ul .ToDoList')
            for (let i = 0; i < ToDoList.length; i++) {
                if (!ToDoList[i].checked) {
                    bool = !bool
                    break;
                }
            }
            this.ifAllSelect = bool
        },
        del(el) {
            const ToDo_Ul = this.getEleId('ToDo_Ul');
            const index = el.dataset.index * 1;
            this.ToDoList.splice(index - 1, 1);
            let i = 1;
            this.ToDoList.forEach(v => {
                v.id = i++; // 对id进行重新赋值
            })
            localStorage.setItem('ToDoList', JSON.stringify(this.ToDoList));

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

    },
    mounted() {
        const that = this;
        /* 初始化获取本地 ToDoList 数据 */
        (function () {
            if (localStorage.getItem('ToDoList')) {
                that.ToDoList = JSON.parse(localStorage.getItem('ToDoList'));
            } else {
                localStorage.setItem('ToDoList', JSON.stringify(that.ToDoList));
            }
            // that.showToDoList = _.cloneDeep(that.ToDoList)
            const showToDo = that.getEleId('showToDo')
        })();

    },
}).mount('#myToDo')