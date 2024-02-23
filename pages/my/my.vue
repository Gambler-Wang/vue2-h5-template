<template>
  <view class="my-container">
    <view class="top-nav">
      <u-navbar title=" " border placeholder>
        <view class="slot-wrap" slot="left">
          <text class="title">我的</text>
        </view>
				<view class="slot-wrap" slot="right">
					<u-icon name="scan" size="46" @click="clickScan"></u-icon>
				</view>
      </u-navbar>
    </view>
    <view class="my-content">
      <view class="head-box">
        <u-cell-group>
          <u-cell icon="setting-fill" size="large" title="测试uToast" isLink @click="handleClick"></u-cell>
          <u-cell icon="integral-fill" size="large" title="测试全局变量" isLink @click="checkGlobalValue"></u-cell>
        </u-cell-group>
      </view>
    </view>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
		}
  },
  created() {},
  onShow() {},
  methods: {
    handleClick() {
      this.$refs.uToast.show({
        message: '点击了' + Math.floor(1000 * Math.random()),
        duration: 1200,
      })
    },
    checkGlobalValue() {
      this.$store.commit('setTestData', '全局变量得到测试' + Math.floor(1000 * Math.random()))
      this.$refs.uToast.show({
        message: '全局变量改变了',
        duration: 1200,
      })
    },
    clickScan() {
      const that = this
      uni.scanCode({
        success: function (res) {
          console.log('条码类型：' + res.scanType)
          console.log('条码内容：' + res.result)
          console.log(res.result.length)
          if (res.result.length !== 25) {
            that.$u.toast('二维码错误')
            return
          }
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.my-container {
  .top-nav {
    .slot-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      padding: 0 30rpx;
      .title {
        font-size: 36rpx;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
  .my-content {
    padding: 32rpx 0;
    padding-top: 32rpx;
    box-sizing: border-box;
    .head-box {
      margin-bottom: 32rpx;
      background-color: #fff;
      /deep/.u-cell-item-box {
        border-radius: 24rpx;
      }
      .item-box {
        display: flex;
        align-items: center;
        .title-box {
          margin-left: 30rpx;
          overflow: hidden;
          .title {
            font-size: 40rpx;
            color: rgba(0, 0, 0, 0.85);
            margin-bottom: 6rpx;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .title-tip {
            color: rgba(0, 0, 0, 0.65);
            font-size: 24rpx;
            text-align: left;
          }
        }
      }
    }
    .main-box {
      border-radius: 24rpx;
      overflow: hidden;
      margin-bottom: 32rpx;
      .item-box {
        display: flex;
        align-items: center;
        image {
          width: 58rpx;
          height: 58rpx;
          margin-right: 30rpx;
        }
        .title {
          font-size: 36rpx;
          color: rgba(0, 0, 0, 0.85);
        }
      }
    }
    .app_info {
      margin-top: 50rpx;
      display: flex;
      width: 100%;
      justify-content: center;
      align-content: center;
      color: rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
