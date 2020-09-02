<template>
  <div>
    <p>完</p>
    <van-button type="primary" @click="back">返回</van-button>
    <transition name="cover">
      <router-view class="second-view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  methods:{
    back(){
      this.$router.go(-1)
    }
  },
  mounted(){
 
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 32px;
}
</style>