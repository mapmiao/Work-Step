let vm = new Vue({
    el: '#root',
    data() {
        return {
            images: [
                {id: 1, src: './images/demo1_1.jpg', alt: 'demo1'},
                {id: 2, src: './images/demo1_2.jpg', alt: 'demo1'},
                {id: 3, src: './images/demo1_3.jpg', alt: 'demo1'},
                {id: 4, src: './images/demo1_4.jpg', alt: 'demo1'},
                {id: 5, src: './images/demo1_5.jpg', alt: 'demo1'},
                {id: 6, src: './images/demo1_6.jpg', alt: 'demo1'},
                {id: 7, src: './images/demo1_7.jpg', alt: 'demo1'},
                {id: 8, src: './images/demo1_8.jpg', alt: 'demo1'},
                {id: 9, src: './images/demo1_9.jpg', alt: 'demo1'}
            ],
            colBox: document.getElementsByClassName('colBox'),

        }
    },
    methods: {

        // 建立新的 div>img
        newImg(i) {
            let newBox = document.createElement("div");
            let newImg = document.createElement("img");
            newImg.setAttribute("src", this.images[i].src);
            newBox.appendChild(newImg);
            return newBox;
        },
        // 创建新的 div > img 节点
        addImg() {
            let length = this.images.length;
            for (let i = 0; i < length; i++) {
                this.colBox[this.minHeight()[0]].appendChild(this.newImg(i));
            }
        },
        // 最小高度
        minHeight() {
            let minIndex = 0;
            let colBox = document.getElementsByClassName('colBox');
            for (let i = 0; i < colBox.length; i++) {
                if (colBox[i].offsetHeight < colBox[minIndex].offsetHeight) {
                    minIndex = i;
                }
            }
            return [minIndex, colBox[minIndex].offsetHeight];
        }

    },
    mounted() {
        let that = this;

        // 初始添加可以显示滚动条数量的图片
        /*function firstAdd() {
        let win = document.documentElement.clientHeight;

            if (win < that.minHeight()[1]) {
                return 0;
            } else {
                that.addImg()
                // firstAdd();
                console.log(win, that.minHeight()[1])
                console.log(that.colBox[that.minHeight()[0]])
            }
        }

        firstAdd()*/

        for (let i = 0; i < 3; i++) {
            that.addImg();
        }

        // 滚动添加
        window.onscroll = function () {
            let scrollTop = document.documentElement.scrollTop;
            let win = document.documentElement.clientHeight;
            if (scrollTop + win - 100 > that.minHeight()[1] - 100) {
                that.addImg()
            }
            console.log(win, that.minHeight()[1])
        }

    }
})

