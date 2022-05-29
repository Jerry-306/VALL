<template>
    <div>
        <div class="header" id="header">
            <router-link to="/list" class="header-title">
                <img src="https://consumer-res.huawei.com/etc/designs/huawei-cbg-site/clientlib-campaign-v4/common-v4/images/logo.svg" alt="">
            </router-link>
            <div class="header-menu">
                <router-link to="/cart" class="header-menu-cart">
                    购物车
                    <span v-if="cartList.length">{{ cartList.length }}</span>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
        <div title="回到顶部" v-show="this.show" class="scroll-to-top" @click="handleScroll">△</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                show: false
            }
        },
        computed: {
            cartList () {
                return this.$store.state.cartList;
            }
        },
        mounted () {
            document.addEventListener('scroll', this.showButton)
        },
        beforeDestroy () {
            document.removeEventListener('scroll', this.showButton)
        },
        methods: {
            showButton () {
                let oldTop = document.body.scrollTop || document.documentElement.scrollTop;
                if (oldTop > 300) {
                    this.show = true;
                } else {
                    this.show = false;
                }
            },
            handleScroll () {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            },
        }
    }
</script>