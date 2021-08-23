export default function({ $auth, $axios, store }) {
    if (!$auth.loggedIn) {
        return
    }
    const user = {
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        name: "John Dee",
        isSuperAdmin: true
    }
    $auth.setUser(user)

    /*  $axios
         .$get('user/me')
         .then(user => $auth.setUser(user))
         .catch((e) => {
             const user = {
                 id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                 name: "John Dee",
                 isSuperAdmin: true
             }
             $auth.setUser(user)
         }); */
}