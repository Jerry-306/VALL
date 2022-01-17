<template>
    <div>
        <div class="header">
            <router-link to="/list" class="header-title">
                <img src="https://www-file.huawei.com/-/media/corporate/images/home/logo/huawei_logo.png" alt="">
            </router-link>
            <div class="header-menu">
                <router-link to="/cart" class="header-menu-cart">
                    购物车
                    <span v-if="cartList.length">{{ cartList.length }}</span>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        computed: {
            cartList () {
                return this.$store.state.cartList;
            }
        }
    }
</script>