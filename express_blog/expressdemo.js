// demo about express middleware 
const http = require("http")
const silce = Array.prototype.slice

class App {
    constructor() {
        this.routes = {
            all: [],
            get: [],
            post: []
        }
    }


    register(path) {
        const info = {}
        if (typeof path === "string") {
            info.path = path
            info.stack = silce.call(arguments, 1)
        } else {
            info.path = "/"
            info.stack = silce.call(arguments, 0)
        }

        return info
    }

    user() {
        const info = this.register.apply(this, arguments)
        this.routes.all.push(info)
    }
    get() {
        const info = this.register.apply(this, arguments)
        this.routes.get.push(info)
    }

    post() {
        const info = this.register.apply(this, arguments)
        this.routes.post.push(info)
    }


    match(method, url) {
        let stack = []
        if (url === "favicon.ico") {
            return
        }
        let curRoutes = []

        curRoutes = curRoutes.concat(this.routes.all)
        curRoutes = curRoutes.concat(this.routes[method])

        curRoutes.forEach(item => {
            if (url.indexOf(item.path) === 0) {
                stack = stack.concat(item.stack)
            }

        })
        return stack
    }
    handle(req, res, stack) {
        const next = () => {
            const middleware = stack.shift()
            if (middleware) {
                //执行中间件函数
                middleware(req, res, next)
            }
        }

        next()
    }

    callback() {
        return (req, res) => {
            res.json((data) => {
                res.setHeader("content-type", "application/json")
                res.end(JSON.stringify(data))
            })

            const method = req.method.toLowerCase()
            const url = req.url

            const resultList = this.match(method, url)
            this.handle(req, res, resultList)
            // const stack=[]
            // stack=this.routes.all.concat
        }
    }

    listen(...args) {
        const sever = http.createServer(this.callback())
        sever.listen(...args)
    }
}


module.express = () => {
    return new App()
}