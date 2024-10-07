export class FireFly_bg {
    constructor({eId, bg_img, bg_time}) {
        this.eId = document.querySelector(eId) // 特效容器
        this.bg_img = bg_img // 特效样式
        this.bg_time = bg_time // 动画过度时间

        // 创建实例之后调用运行
        this.run()
    }

    // 创建一个 “萤火虫”
    add_fireFly() {
        const new_i = document.createElement("i")
        this.add_style(new_i) // 设置样式
        this.random_size(new_i) // 设置初识大小
        this.random_position(new_i) // 设置初识位置
        this.eId.appendChild(new_i) // 将 new_i 添加给容器
        return new_i
    }

    // 给 “萤火虫”添加样式
    add_style(new_i) {
        new_i.setAttribute('style', `
            display: block;
            position: absolute;
            background-image: url(${this.bg_img});
            background-repeat: no-repeat;
            background-size: 100%;
            transition: all ${this.bg_time}s;
        `)
    }


    // 随机 “萤火虫大小” 20-40px
    random_size(new_i) {
        const size = Math.trunc(Math.random() * 20 + 20)
        new_i.style.width = `${size}px`;
        new_i.style.height = `${size}px`;
    }

    // 随机位置
    random_position(new_i) {
        const x = Math.trunc(Math.random() * document.documentElement.clientWidth) - parseInt(new_i.style.width)
        const y = Math.trunc(Math.random() * document.documentElement.clientHeight) - parseInt(new_i.style.height)

        new_i.style.left = `${x}px`;
        new_i.style.top = `${y}px`;
    }


    run() {
        for (let i = 0; i < 100; i++) {
            this.random_position(this.add_fireFly())
        }
        const ele_i = this.eId.querySelectorAll('i')


        setInterval(() => {
            ele_i.forEach((ele) => {
                this.random_position(ele)
            })
        }, this.bg_time * 1000 / 2)
    }
}