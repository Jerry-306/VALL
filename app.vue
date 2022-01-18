<template>
    <div>
        <div class="header" id="header">
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
        <div v-show="this.show" class="scroll-to-top" @click="handleScroll">△</div>
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
                let timer  = null;
                cancelAnimationFrame(timer);
                timer = requestAnimationFrame(function fn() {
                    let oldTop = document.body.scrollTop || document.documentElement.scrollTop;
                    if(oldTop > 0) {
                        scrollTo(0, oldTop - 100);
                        timer = requestAnimationFrame(fn);
                    } else {
                        cancelAnimationFrame(timer);
                    }    
                });
            },
        }
    }
</script>