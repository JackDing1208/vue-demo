var app = new Vue({
    el: "#app",
    data: {
        msg: "hello,world!",
        date: new Date(),
        text: "v-text测试",
        html: "<b>v-html测试</b>",
        bind: "bindClass",
        reverseNumber: "45,995,452,436,987,15,26,84,62,36,29,74",
        firstName: "Jack",
        lastName: "Ding",
        url: 'http://www.baidu.com',
        isActive: true,
        isOn: false,
        class1: 'bindClass1',
        class2: 'bindClass2',
        color: "red",
        height: 50,
        once: "我只渲染一次",
        hero:["BatMan", "IronMan", "SpiderMan", "Thor"]



    },
    computed: {
        sort: function () {
            // 要返回值的函数一定记得加return!!!!!
            return this.reverseNumber.split(',').sort(function (x, y) {
                return x - y
            }).join(',')
        },
        fullName: function () {
            return this.firstName + " " + this.lastName
        }
    },
    methods: {
        stopTimer: function () {
            clearInterval(this.timer)
        },
        watch: function () {
            return this.firstName + " " + this.lastName
        }

    },
    filters: {
        convertDate: function (value) {
            var date = new Date(value)
            var year = date.getFullYear()
            var month = date.getMonth() + 1      //JS里月份从0开始算
            var day = date.getDate()
            var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
            var min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
            var sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
            return year + '/' + month + '/' + day + ' ' + hour + ':' + min + ':' + sec
        }
    },
    mounted: function () {
        this.timer = setInterval(() => {
            this.date = new Date()
        }, 1000)

    }
})


