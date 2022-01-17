// 路由列表
const routers = [
    {
        // path 指定当前匹配路径，即加在页面网址后面
        path: '/list',     // http://localhost:8080/list
        meta: {
            title: '商品列表'    // title 即页面标题
        },
        component: (resolve) => require(['./views/list.vue'], resolve)
    },
    {
        path: '/product/:id',   // http://localhost:8080/product/id
        meta: {
            title: '商品详情'
        },
        component: (resolve) => require(['./views/product.vue'], resolve)
    },
    {
        path: '/cart',         // http://localhost:8080/cart
        meta: {
            title: '购物车'
        },
        component: (resolve) => require(['./views/cart.vue'], resolve)
    },
    // 当访问路径不存在时，重新定向到 list 页面，即商品列表页面
    {
        path: '*',
        redirect: '/list'
    }
];
export default routers;