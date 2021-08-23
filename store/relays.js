export const state = () => ({
    relays: [],
    permissions: []
})

export const mutations = {
    add(state, relay) {
        for (const [index, item] of state.relays.entries()) {
            if (item.id === relay.id)
                state.relays.splice(index, 1)
        }
        state.relays.push(relay)
    },
    remove(state, id) {
        for (const item of state.relays)
            if (item.id === id)
                state.relays.splice(index, 1)
    },
    clear(state) {
        state.relays = []
    }
}

export const actions = {
    async fetchAll({ commit }) {
        try {
            const relays = [{
                        id: 'asdasdas-sdgsdg-asdasdd',
                        name: 'Blablabla1'
                    },
                    {
                        id: 'asdasdas-sdgsdg-sdfsdf',
                        name: 'Blablabla2'
                    },
                    {
                        id: 'asdasdas-sdgasfasfas',
                        name: 'Blablabla3'
                    },
                    {
                        id: 'asdasdas-sdcvbvcbcvbd',
                        name: 'Blablabla4'
                    },
                    {
                        id: 'asdasdpiopiopdd',
                        name: 'Blablabla5'
                    }
                ] //await this.$axios.$get('/relay')
            for (const relay of relays) {
                commit('add', relay)
            }
        } catch (e) {}
    },
    async fetchOne({ commit }, id) {
        try {
            const relay = await this.$axios.$get(`/relay/${id}`)
            commit('add', relay)
            return true
        } catch (e) {
            return false
        }
    },
    async ensureOne({ state, dispatch }, id) {
        for (const relay of state.relays) {
            if (relay.id === id)
                return true
        }
        return await dispatch('fetchOne', id)
    }
}