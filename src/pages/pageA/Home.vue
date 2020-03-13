<template>
  <div>
    <p>千山鸟飞绝，万径人踪灭</p>
    <van-button type="primary" @click="next">下一句</van-button>
    <transition name="cover">
      <router-view class="second-view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
    methods:{
        next(){
            this.$router.push('/list')
        }
    }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 2rem;
}
</style>