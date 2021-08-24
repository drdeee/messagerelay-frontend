export const state = () => ({
    current: false
})

export const mutations = {
    setSnack(state, data) {
        state.current = {
            message: data.msg,
            level: data.level + ' snackbar text-center'
        }
    },
    clearSnack(state) {
        state.current = false
    }
}

export const actions = {
    info({ commit }, msg) {
        return new Promise((res, rej) => {
            commit('setSnack', {
                msg,
                level: 'info'
            })

            setTimeout(() => {
                commit('clearSnack')
                res()
            }, 4700)
        })
    },
    warn({ commit }, msg) {
        return new Promise((res, rej) => {
            commit('setSnack', {
                msg,
                level: 'error'
            })

            setTimeout(() => {
                commit('clearSnack')
                res()
            }, 4700)
        })
    }
}