export const state = () => ({
    users: []
})

export const mutations = {
    add(state, userId) {
        if (!state.users.includes(userId))
            state.users.push(userId)
    },
    remove(state, userId) {
        state.users.splice(state.users.indexOf(userId), 1)
    },
    clear(state) {
        state.users = []
    }
}