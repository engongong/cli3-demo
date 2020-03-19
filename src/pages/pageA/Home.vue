<template>
  <div class="index">
    <p>
      千山鸟飞绝，万径人踪灭
      <img src="~images/icon_th@2x.png" alt />
    </p>
    <van-button type="primary" @click="next">下一句</van-button>
    <van-button type="primary" @click="clickStore">{{ $store.state.show}}</van-button>
    <transition name="cover">
      <router-view class="second-view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  methods: {
    next() {
      this.$router.push("/list")
    },
    clickStore(){
      console.log(this.$store.state.show);
      this.$nextTick(function () {
		     this.$store.state.show++;
    	})
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 2rem;
  color: $background_blue_level1;
}
</style>