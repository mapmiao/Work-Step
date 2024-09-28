export class ShowCommodity {
    constructor({el, images, width, index = 1}) {
        this.el = document.querySelector(el); // 容器
        this.images = images; //图片
        this.index = index; // 默认显示第一张
        this.width = parseInt(width); // 图片盒子的尺寸

        /*----------- 页面元素 ------------*/
        this.com_img = document.getElementById('commodity_img');
        this.show_box = document.getElementById('show_box')
        this.com_img_img = document.getElementsByClassName('com_img_img')[0];
        this.com_list = document.getElementById('commodity_list');
        this.com_list_ul = document.getElementsByClassName('com_list_ul')[0];
        this.magnifyingLens = document.getElementById('magnifyingLens');
        this.magnifyingLens_img = document.getElementsByClassName('magnifyingLens_img')[0];
        /*----------- 页面元素 ------------*/
        this.create_frame() // 初始化生成框架

        this.run()
    }

    // 生成框架
    create_frame() {
        /*----------- 展示图片 ------------*/
        this.com_img = this.createEle({ele: 'div', eId: 'commodity_img', eClass: 'commodity_img'})
        this.show_box = this.createEle({ele: 'div', eId: 'show_box', eClass: 'show_box'})
        this.com_img_img = this.createEle({ele: 'img', eClass: 'com_img_img', eSrc: this.images[0]})

        this.com_img.setAttribute('style', this.width + 'px')
        this.com_img.appendChild(this.com_img_img)
        this.com_img.appendChild(this.show_box)
        // 修改 show_box 的尺寸
        setTimeout(() => { // 修改放大器的高
            this.show_box.style.width = this.com_img.offsetWidth / 3 + 'px'
            this.show_box.style.height = this.com_img.offsetHeight / 3 + 'px'
        }, 200)
        /*----------- 展示图片 ------------*/

        /*----------- 图片列表 ------------*/
        this.com_list = this.createEle({ele: 'div', eId: 'commodity_list', eClass: 'commodity_list'})
        this.com_list_ul = this.createEle({ele: 'ul', eClass: 'com_list_ul'})
        this.images.forEach((e) => {
            const com_list_li = this.createEle({ele: 'li'})
            const com_list_img = this.createEle({ele: 'img', eSrc: e})
            com_list_li.appendChild(com_list_img)
            this.com_list_ul.appendChild(com_list_li)
        })
        this.com_list.appendChild(this.com_list_ul)
        /*----------- 图片列表 ------------*/


        /*----------- 图片放大 ------------*/
        this.magnifyingLens = this.createEle({ele: 'div', eId: 'magnifyingLens', eClass: 'magnifyingLens'})
        this.magnifyingLens_img = this.createEle({ele: 'img', eClass: 'magnifyingLens_img', eSrc: this.images[0]})
        setTimeout(() => { // 修改放大器的高
            this.magnifyingLens.style.width = this.com_img.offsetWidth + 'px'
            this.magnifyingLens.style.height = this.com_img.offsetHeight + 'px'
            this.magnifyingLens.style.left = this.com_img.offsetWidth + 2 + 'px'
        }, 200)
        this.magnifyingLens.appendChild(this.magnifyingLens_img)
        /*----------- 图片放大 ------------*/

        this.el.appendChild(this.com_img);
        this.el.appendChild(this.com_list);
        this.el.appendChild(this.magnifyingLens);
    }

    // 生成节点
    createEle({ele, eId, eClass, eSrc}) {
        const newEle = document.createElement(ele)
        if (eId) newEle.id = eId
        if (eClass) newEle.classList.add(eClass)
        if (eSrc) newEle.src = eSrc
        return newEle
    }

    // 鼠标移入 commodity_img 显示 show_box
    show_move(e) {
        this.show_box.style.display = 'block'
        this.magnifyingLens.style.display = 'block'
        let x = e.clientX - this.show_box.offsetWidth / 2
        let y = e.clientY - this.show_box.offsetHeight / 2
        if (x <= 0) x = 0
        if (y <= 0) y = 0
        if (x + this.show_box.offsetWidth >= this.com_img.clientWidth) x = this.com_img.clientWidth - this.show_box.offsetWidth
        if (y + this.show_box.offsetHeight >= this.com_img.clientHeight) y = this.com_img.clientHeight - this.show_box.offsetHeight
        this.show_box.style.top = y + 'px'
        this.show_box.style.left = x + 'px'

        this.magnifyingLens_img.style.left = -x * 2 + 'px'
        this.magnifyingLens_img.style.top = -y * 2 + 'px'
    }

    change_list_img(e) {
        if (e.target.tagName !== 'IMG') return;
        this.com_img_img.src = this.magnifyingLens_img.src = e.target.src
    }

    run() {

        // 鼠标移入 commodity_img 显示 show_box
        this.com_img.addEventListener('mouseover', (e) => this.show_move(e))

        // 鼠标移出 commodity_img 隐藏 show_box
        this.com_img.addEventListener('mouseleave', () => {
            this.show_box.style.display = 'none'
            this.magnifyingLens.style.display = 'none'
        })
        this.com_list_ul.addEventListener('click', (e) => this.change_list_img(e))

    }
}
