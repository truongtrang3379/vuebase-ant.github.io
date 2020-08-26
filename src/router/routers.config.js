import BasicLayout from "@/Layout/BasicLayout.vue"
import Login from "@/view/login/Login.vue"
import i18n from "@/i18n"
const routes = [
    {
        path: '/',
        name: 'Login',
        hidden: true,
        component: Login
    },
    {
        path: "/getting-started",
        name: 'getting-started',
        redirect: "/dash-board",
        component: BasicLayout,
        meta: {
            title: 'TEXT_DASHBOARD',
            icon: "fas fa-home",
            requiresAuth: true
        },
        hideChildrenInMenu: true,
        children: [
            {
                path: "/getting-started",
                name: i18n.t('getting-started'),
                component: () => import('@/view/gettingStarted/GettingStarted.vue'),
                meta: {
                    title: i18n.t('getting-started'),
                }
            }
        ]
    },
    {
        path: "/style-spacing",
        name: "styles",
        redirect: "/style-spacing",
        component: BasicLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: "/style-spacing",
                name: "Spacing",
                component: () => import('@/view/style/Spacing.vue'),
                meta: {
                    title: "spacing",
                }
            },
            {
                path: "/style-width-height",
                name: "Width and height",
                component: () => import('@/view/style/WidthAndHeight.vue'),
                meta: {
                    title: "width-and-height",
                }
            },
            {
                path: "/style-text",
                name: "Text",
                component: () => import('@/view/style/Text.vue'),
                meta: {
                    title: "text",
                }
            }
            ,
            {
                path: "/style-float",
                name: "float",
                component: () => import('@/view/style/Float.vue'),
                meta: {
                    title: "float",
                }
            }
        ]
    },
    {
        path: "/component-spacer",
        name: "components",
        redirect: "/component-spacer",
        component: BasicLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: "/component-spacer",
                name: "Spacer",
                component: () => import('@/view/components/Spacer.vue'),
                meta: {
                    title: "spacer",
                }
            }
        ]
    },
    {
        path: '*',
        name: '404',
        hidden: true,
        component: () => import('@/view/exception/404.vue'),
    }
]

export default routes;