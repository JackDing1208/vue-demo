var app = new Vue({
    el: "#app",
    data: {
        msg: "hello,world!",
        date: new Date(),
        text: "v-text测试",
        html: "<b>v-html测试</b>",
        bind: "bindClass",
        reverseNumber:"45,995,452,436,987,15",
        firstName:"Jack",
        lastName:"Ding",
    },
    computed:{
        reverse:function () {
            return this.reverseNumber.split(',').reverse().join(',')
        },
        fullName:function () {
            return this.firstName+" "+this.lastName
        }
    },
    methods: {
        stopTimer: function () {
            clearInterval(this.timer)
        },

    },
    filters: {
        convertDate: function (value) {
            var date = new Date(value)
            var year = date.getFullYear()
            var month = date.getMonth() + 1      //JS里月份从0开始算
            var day = date.getDate()
            var hour
            date.getHours() < 10 ? hour = '0' + date.getHours() : hour=date.getHours()
            var min
            date.getMinutes() < 10 ? min = '0' + date.getMinutes() : min=date.getMinutes()
            var sec = date.getSeconds()
            date.getSeconds() < 10 ? sec = '0' + date.getSeconds() : sec=date.getSeconds()

            return year + '/' + month + '/' + day + ' ' + hour + ':' + min + ':' + sec
        }
    },
    mounted: function () {
        this.timer = setInterval(() => {
            this.date = new Date()
        }, 1000)
    }
})


