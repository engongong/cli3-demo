<template>
  <div class="index">
    <p>
      千山鸟飞绝，万径人踪灭
      <img src="~images/icon_th@2x.png" alt />
    </p>
    {{$store.state.count.num}}
  <div>
    <van-button type="primary" @click="next">下一句</van-button>
    <van-button type="primary" @click="$store.commit('add')">+1</van-button>
  </div>
<!-- <div class="circle1">
    <div class="cir cir1"></div>
    <div class="cir cir2"></div>
</div> -->
    <!-- <van-button type="primary" @click="clickStore">{{ $store.state.show}}</van-button> -->
    <!-- 旋转动画 -->
    <!-- <div class="circle">
      <div class="small-circle">1</div>
      <div class="small-circle">2</div>
      <div class="small-circle">3</div>
      <div class="small-circle">4</div>
    </div> -->
    <transition name="cover">
      <router-view class="second-view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  methods: {
    next() {
      this.$message.info('普通消息')
      // this.$router.push("/list/1");
    },
    clickStore() {
      this.$nextTick(function() {
        // this.$store.state.show++;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
h2{
  color:$primary_blue;
}
p {
  font-size: 32px;
  color: $background_blue_level1;
}
.circle1{
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: yellow;
}
.cir{
    position: absolute;
    width: 200px;
    height: 200px;
    transform: rotate(30deg);
    clip: rect(0px, 100px, 200px, 0px);
    border-radius: 100px;
    background-color: red;
}
.cir2 {
  transform: rotate(-90deg);
}
.circle {
  position: relative;
  animation: antRotate 1.2s infinite linear;
  -webkit-animation: antRotate 1.2s infinite linear;
  transform: rotate(45deg);
  width: 2rem;
  height: 2rem;
  .small-circle {
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    opacity: 0;
    border-radius: 50%;
    display: block;
    background-color: lightblue;
    animation: antSpin 1s infinite linear;
    -webkit-animation: antSpin 1s infinite linear;
    &:nth-child(1) {
      left: 0;
      top: 0;
    }
    &:nth-child(2) {
      right: 0;
      top: 0;
      animation-delay: 0.4s;
    }
    &:nth-child(3) {
      right: 0;
      bottom: 0;
      animation-delay: 0.8s;
    }
    &:nth-child(4) {
      left: 0;
      bottom: 0;
      animation-delay: 1.2s;
    }
  }
}
@keyframes antSpin {
  to {
    opacity: 1;
  }
}
@-webkit-keyframes antSpin {
  to {
    opacity: 1;
  }
}
@keyframes antRotate {
  to {
    transform: rotate(405deg);
  }
}
@-webkit-keyframes antRotate {
  to {
    transform: rotate(405deg);
  }
}
</style>