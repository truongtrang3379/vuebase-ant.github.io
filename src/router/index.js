import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routers.config"
// import NProgress from 'nprogress'
// import i18n from "@/locales"
// import { getDetailAdmin } from "@/api/admin.api";
// import VueJwtDecode from "vue-jwt-decode";
// import store from "@/store"
// NProgress.configure({ showSpinner: false })

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// router.beforeEach((to, from, next) => {

//     NProgress.start()
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (localStorage.getItem("Authorization") == null) {
//             Vue.$toast.error(i18n.t("ERROR_NOT_LOGGED_IN"));
//             next({
//                 path: '/',
//             })
//         } else {
//             var jwt = VueJwtDecode.decode(localStorage.getItem("Authorization"));
//             getDetailAdmin(jwt.data.Id).then(res => {
//                 store.authention.userInfo = res.data
//                 // this.info = res.data;
//             }).then(() => {
//                 const { Role } = store.authention.userInfo
//                 if (Role !== "SUPER_ADMIN" && to.path == '/admin-list') {
//                     next({
//                         path: '/dash-board'
//                     })
//                 } else {
//                     next()
//                 }
//             }).catch((err) => {
//                 if (err.message !== 'Network Error') {
//                     localStorage.removeItem("Authorization")
//                     next({
//                         path: '/',
//                     })
//                 }
//             })
//                 ;
//         }
//     }
//     else {
//         if (to.path == '/' && localStorage.getItem("Authorization") !== null) {
//             next({
//                 path: '/dash-board'
//             })
//         } else {
//             next()
//         }
//         next()
//     }
// })
// router.afterEach(() => {
//     NProgress.done()
// })

export default router