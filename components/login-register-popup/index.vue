<template>
  <view class="login-register-popup-container">
    <u-popup
      closeable
      :show="isLoginModelShow"
      :customStyle="{ width: '640rpx', height: '326rpx' }"
      mode="center"
      round="14"
      @close="hide()"
    >
      <view class="main-box">
        <view class="title">无操作权限</view>
        <view class="tip">要解锁使用该功能，请立即登录</view>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isLoginModelShow: false,
    }
  },
  methods: {
    show() {
      this.isLoginModelShow = true
    },
    hide() {
      this.isLoginModelShow = false
    },
  },
}
</script>

<style lang="scss" scoped>
.login-register-popup-container {
  text-align: center;
  /deep/.u-mode-center-box {
    overflow: visible !important;
    .uni-scroll-view {
      overflow: visible !important;
    }
    .uni-scroll-view {
      overflow: visible !important;
    }
  }

  .main-box {
    position: relative;
    padding: 96rpx 0;
    .title {
      font-size: 40rpx;
      color: (0, 0, 0, 0.85);
      margin-bottom: 16rpx;
      font-weight: 700;
    }
    .tip {
      color: rgba(0, 0, 0, 0.65);
      font-size: 24rpx;
    }
    .btn-box {
      padding: 0 40rpx;
      view {
        font-size: 32rpx;
        color: #1661ff;
        height: 80rpx;
        line-height: 80rpx;
        margin-top: 12rpx;
      }
    }
  }
}
</style>
