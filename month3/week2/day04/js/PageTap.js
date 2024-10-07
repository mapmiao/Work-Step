export class PageTap {
    constructor({el, pNum, index = 1}) {
        this.el = document.querySelector(el)
        this.ele_content = this.el.querySelector('#content') // 内容盒子
        this.ele_tap = this.el.querySelector('#tap') // tap 盒子
        this.ele_tapNum = this.el.querySelector('#tapNum') // 页码盒子

        this.startPage = this.el.querySelector('#startPage') // 首页
        this.lastPage = this.el.querySelector('#lastPage') // 上一页
        this.goPage = this.el.querySelector('#goPage') // 页码
        this.tapNum = this.el.querySelector('#tapNum') // 页码
        this.showPage = document.getElementsByClassName('page') // 页码

        this.nextPage = this.el.querySelector('#nextPage') // 下一页
        this.endPage = this.el.querySelector('#endPage') // 尾页
        this.pNum = pNum // 每页显示数量

        this.tap_index = index // tap

        this.index = index // 当前页码
        this.oldindex = index // 上一个页码

        this.pageGroupSize = 5 // 每次显示5个页码
        this.data = this.getData()

        if (this.data && this.data.length > 0) {
            this.run()
        } else {
            alert("没有数据可以显示！")
        }
    }

    // 获取数据
    getData() {
        let data = JSON.parse(localStorage.getItem('data'))
        if (!data || data.length === 0) {
            alert("数据为空！")
            return []
        }
        return data
    }

    // 生成数据结构框架
    add_ele_content(data) {
        const new_li = document.createElement('li')
        new_li.innerHTML = data
        this.ele_content.appendChild(new_li)
    }

    // 生成页码框架，每次显示5个页码
    add_ele_tap() {
        this.tapNum.innerHTML = ''
        let allPages = Math.ceil(this.data.length / this.pNum) // 总页数
        let startPage = Math.floor((this.index - 1) / this.pageGroupSize) * this.pageGroupSize + 1 // 当前显示的第一个页码
        let endPage = Math.min(startPage + this.pageGroupSize - 1, allPages) // 当前显示的最后一个页码

        for (let i = startPage; i <= endPage; i++) {
            const new_li = document.createElement('li')
            const new_btn = document.createElement('button')
            new_btn.setAttribute('data-index', i.toString())
            new_li.classList.add('page')
            new_btn.innerHTML = `${i}`

            if (i === this.index) {
                new_li.classList.add('showPage')
            }
            this.tapNum.appendChild(new_li)
            new_li.appendChild(new_btn)
        }
    }

    // 显示内容
    show_data(index) {
        this.ele_content.innerHTML = ''
        for (let i = (index - 1) * this.pNum; i < index * this.pNum && i < this.data.length; i++) {
            this.add_ele_content(this.data[i])
        }
    }

    // 切换页面样式
    show_style() {
        if (this.showPage[this.oldindex - 1]) {
            this.showPage[this.oldindex - 1].classList.remove('showPage')
        }
        if (this.showPage[this.index - 1]) {
            this.showPage[this.index - 1].classList.add('showPage')
        }
    }

    // 页数管理
    p_allNum() {
        return Math.ceil(this.data.length / this.pNum)
    }

    startP() {
        this.go(1);        // 跳转到第一页
        this.show_data(1); // 显示第一页的数据
        this.add_ele_tap(); // 更新页码显示，确保显示的页码组正确
    }


    lastP() {
        if (this.index === 1) return
        this.go(this.index - 1)
        this.show_data(this.index)
        this.add_ele_tap() // 更新页码显示
    }

    goP(e) {
        if (e.target.tagName !== 'BUTTON') return
        this.oldindex = this.index
        this.index = parseInt(e.target.dataset.index)
        this.show_style()
        this.show_data(this.index)
        this.add_ele_tap() // 切换到正确的页码组
    }

    nextP() {
        let totalPages = this.p_allNum()
        if (this.index >= totalPages) return
        this.go(this.index + 1)
        this.show_data(this.index)
        this.add_ele_tap() // 更新页码显示
    }

    endP() {
        let totalPages = this.p_allNum()
        this.go(totalPages)
        this.show_data(totalPages)
        this.add_ele_tap() // 更新页码显示
    }

    go(index) {
        this.oldindex = this.index
        this.index = index
        this.show_style()
    }

    run() {
        /*-------- 点击事件 ----------*/
        this.startPage.addEventListener('click', this.startP.bind(this))
        this.lastPage.addEventListener('click', this.lastP.bind(this))
        this.goPage.addEventListener('click', this.goP.bind(this))
        this.nextPage.addEventListener('click', this.nextP.bind(this))
        this.endPage.addEventListener('click', this.endP.bind(this))
        /*--------------------------*/

        this.add_ele_tap() // 初始显示页码
        this.show_data(this.index) // 初始显示数据
    }
}
