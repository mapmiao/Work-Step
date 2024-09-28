export class ToDo {
    static ToDoList = [];
    static el = 'root';

    static eMain = ToDo.getEleId(ToDo.el);
    static ToDoValue = ToDo.getEleId('newToDo');
    static addToDo = ToDo.getEleId('addToDo');
    static ToDo_Ul = ToDo.getEleId('ToDo_Ul');

    static getEleId(eId) {
        return document.getElementById(eId);
    }

    /**
     * 初始化待办事项列表
     */
    static init() {
        if (localStorage.getItem('ToDoList')) {
            ToDo.ToDoList = JSON.parse(localStorage.getItem('ToDoList'));
        } else {
            localStorage.setItem('ToDoList', JSON.stringify(ToDo.ToDoList));
        }
        ToDo.ToDoList.forEach(v => ToDo.addEle(v))
    }

    static add() {
        const data = {
            id: ToDo.ToDoList.length + 1,
            ToDo: ToDo.ToDoValue.value,
        }
        ToDo.ToDoList.push(data);
        localStorage.setItem('ToDoList', JSON.stringify(ToDo.ToDoList));

        ToDo.addEle(data)
    }

    static addEle(data) {
        if (data.ToDo === '') return
        ToDo.ToDo_Ul.innerHTML +=
            `<li class="ToDoList">
                <div>
                    <input type="checkbox" name="" id="">
                    <p>${data.ToDo}</p>
                </div>
                <button data-index="${data.id}" class="iconfont icon-shanchu"></button>
            </li>`;
        ToDo.ToDoValue.value = '';
    }

    static del(e) {
        const index = e.target.dataset.index * 1;
        ToDo.ToDoList.splice(index - 1, 1);

        ToDo.ToDo_Ul.innerHTML = '';
        let i = 1;
        ToDo.ToDoList.forEach(v => {
            v.id = i++; // 对id进行重新赋值
        })
        localStorage.setItem('ToDoList', JSON.stringify(ToDo.ToDoList));
        console.log(ToDo.ToDoList)
        ToDo.ToDoList.forEach(v => ToDo.addEle(v)) // 重新渲染页面
    }

    static run() {
        ToDo.init();
        ToDo.addToDo.addEventListener('click', ToDo.add);
        ToDo.ToDoValue.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                ToDo.add()
            }
        })


        ToDo.ToDo_Ul.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON') return
            ToDo.del(e)
        })

    }
}
