export default {
    logout (cb) {
        delete localStorage.token
        if (cb) cb()
        this.onChange(false)
    },

    login (email, pass, cb) {
        cb = arguments[arguments.length - 1]
        if (localStorage.token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }
    }
}