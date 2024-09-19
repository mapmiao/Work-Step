export class FireFly_bg {
    constructor(eId) {
        this.eId = document.querySelector(eId)

        this.run()
    }

    // 创建一个 “萤火虫”
    add_fireFly() {
        const new_i = document.createElement("i")
        new_i.classList.add('fireFly')
        this.random_size(new_i)
        this.random_position(new_i)
        this.eId.appendChild(new_i)
        return new_i
    }

    // 随机 “萤火虫大小” 20-40px
    random_size(new_i) {
        const size = Math.trunc(Math.random() * 20 + 20)
        new_i.style.width = `${size}px`
        new_i.style.height = `${size}px`
    }

    // 随机位置
    random_position(new_i) {
        const x = Math.trunc(Math.random() * document.documentElement.clientWidth) - parseInt(new_i.style.width)
        const y = Math.trunc(Math.random() * document.documentElement.clientHeight) - parseInt(new_i.style.height)
        new_i.style.left = `${x}px`
        new_i.style.top = `${y}px`
    }


    run() {
        for (let i = 0; i < 100; i++) {
            this.random_position(this.add_fireFly())
        }
        const ele_i = this.eId.querySelectorAll('.fireFly')


        setInterval(() => {
            ele_i.forEach((ele) => {
                this.random_position(ele)
            })
        },4000)
    }
}