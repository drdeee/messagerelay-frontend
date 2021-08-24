const target = process.env.TARGET === 'STATIC'

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,
    target: target ? 'static' : 'server',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'MessageRelay',
        htmlAttrs: {
            lang: 'de'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    css: [
        '~/assets/css/bootstrap.min.css',
        '~/assets/css/fonts.css',
        '~/assets/css/background.css',
        '~/assets/css/snackbar.css',
        '~/assets/css/styles.css'
    ],

    plugins: [],

    components: true,

    buildModules: [

    ],

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next'
    ],

    auth: {
        redirects: {
            callback: '/',
            logout: '/login'
        },
        strategies: {
            local: false,
            cloud: {
                scheme: 'oauth2',
                endpoints: {
                    authorization: 'https://auth.messenger.fridaysforfuture.dev/auth/realms/dev/protocol/openid-connect/auth',
                    token: 'https://auth.messenger.fridaysforfuture.dev/auth/realms/dev/protocol/openid-connect/token',
                    userInfo: 'https://auth.messenger.fridaysforfuture.dev/auth/realms/dev/protocol/openid-connect/userinfo',
                },
                token: {
                    maxAge: 600,
                },
                responseType: 'code',
                grantType: 'authorization_code',
                clientId: 'test',
                scope: ['openid'],
                codeChallengeMethod: 'plain',
            },
        },
        plugins: [
            '~/plugins/fetchUser.js'
        ]
    },
    axios: {
        baseURL: 'http://localhost/api/v1/'
    },

    router: {
        middleware: ['auth']
    },
    build: {}
}
