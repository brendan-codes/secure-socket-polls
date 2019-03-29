class Route {
    constructor(method, route, handler) {
        this.route = route;
        this.method = method;
        this.handler = handler;
    }
    bind(app){
        app[this.method](this.route, this.handler)
    }
}

module.exports = Route