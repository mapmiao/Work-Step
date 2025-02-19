new Vue({
    el: "#root",
    data() {
        return {
            result: "",
            numOld: "",
            numNew: 0,
            operVar: "",
            num: 0,
            numDis: false,
            val: ["C", "/", "*", "-", "7", "8", "9", "+", "4", "5", "6", "1", "2", "3", "enter", "0", "."]
        }
    },
    computed: {
        operDis: {
            get() {
                return this.operVar !== "";
            }
        }
    },
    methods: {
        valClick(val) {
            if (this.result !== "")
                this.Clear(); // 如果初始输入时符号为空，则初始化数据
            if (!isNaN(val)) {
                this.Num(val);
            } else {
                this.oper(val);
            }
        },
        // 输入数字处理
        Num(val) {
            if (this.operDis && !this.numDis)
                this.numDis = true;
            this.numNew += val;
            this.numNew *= 1;
        },
        // 运算符处理
        oper(val) {
            // 首先判断输入的是否为 enter
            if (val === "enter")
                this.Print(val);
            else if (val === "C")
                this.Clear();
            else {
                // 连续运算
                if (this.operDis && this.numDis) {
                    this.Print(this.operVar);
                    this.numDis = false;
                    // return
                } else if (!this.operDis && !this.numDis) {
                    this.numOld = this.numNew;
                    this.numNew = 0;
                }
                this.operVar = val;
            }
        },
        // 运算
        Print(val) {
            switch (this.operVar) {
                case "+":
                    this.numOld += this.numNew;
                    break;
                case "-":
                    this.numOld -= this.numNew;
                    break;
                case "*":
                    this.numOld *= this.numNew;
                    break;
                case "/":
                    this.numOld /= this.numNew;
                    break;
            }
            this.numNew = 0;
            if (val === "enter") {
                this.result = this.numOld;
                this.Clear_res();
            }
        },

        // 清除所有数据
        Clear() {
            this.Clear_res();
            this.result = ""
        },
        // 保留result，清除其余数据
        Clear_res() {
            this.numOld = "";
            this.numNew = 0;
            this.operVar = "";
            this.num = 0;
            this.numDis = false;
        }
    }
})