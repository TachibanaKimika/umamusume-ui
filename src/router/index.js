/*
 * @Author: Akarichan
 * @LastEditors: Akarichan
 * @Date: 2021-09-23 14:08:42
 * @LastEditTime: 2021-09-28 11:59:05
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/about.vue')
    },
    {
        path: '/quickstart',
        name: 'quickstart',
        component: () =>
            import ('../views/quickstart.vue')
    },
    {
        path: '/component',
        name: 'component',
        component: () =>
            import ('../views/component.vue'),

        children: [{
            path: '/',
            name: 'index',
            component: () =>
                import ('../views/components/button.vue'),
        }, {
            path: 'button',
            name: 'button',
            component: () =>
                import ('../views/components/button.vue')
        }, {
            path: 'card',
            name: 'card',
            component: () =>
                import ('../views/components/card.vue')
        }, {
            path: 'checkbox',
            name: 'checkbox',
            component: () =>
                import ('../views/components/checkbox.vue')
        }, {
            path: 'dialog',
            name: 'dialog',
            component: () =>
                import ('../views/components/dialog.vue')
        }, {
            path: 'icon',
            name: 'icon',
            component: () =>
                import ('../views/components/icon.vue')
        }, {
            path: 'input',
            name: 'input',
            component: () =>
                import ('../views/components/input.vue')
        }, {
            path: 'menu',
            name: 'menu',
            component: () =>
                import ('../views/components/menu.vue')
        }, {
            path: 'radio',
            name: 'radio',
            component: () =>
                import ('../views/components/radio.vue')
        }, {
            path: 'slider',
            name: 'slider',
            component: () =>
                import ('../views/components/slider.vue')
        }, {
            path: 'switch',
            name: 'switch',
            component: () =>
                import ('../views/components/switch.vue')
        }, {
            path: 'tabs',
            name: 'tabs',
            component: () =>
                import ('../views/components/tabs.vue')
        }, {
            path: 'table',
            name: 'table',
            component: () =>
                import ('../views/components/table.vue')
        }, {
            path: 'tag',
            name: 'tag',
            component: () =>
                import ('../views/components/tag.vue')
        }]
    }
]

const router = new VueRouter({
    routes
})

export default router