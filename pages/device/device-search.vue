<template>
  <view class="device-search-container">
    <view class="top-nav">
      <u-navbar autoBack placeholder leftIconSize="42rpx" title=" " border>
        <view class="slot-wrap" slot="center">
          <u-search
            shape="square"
            placeholder="请输入关键字"
            v-model="keyword"
            actionText="取消"
            @custom="quit"
          ></u-search>
        </view>
      </u-navbar>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      keyword: '',
      list: [],
    }
  },
  methods: {
    quit() {
      uni.navigateBack({
        delta: 1,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.device-search-container {
  .top-nav {
    .slot-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30rpx;
      .title {
        font-size: 36rpx;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.9);
      }
      .right-box {
        color: #333333;
        view:nth-of-type(1) {
          margin-right: 24rpx;
        }
      }
    }
  }
  .item-list {
    padding: 32rpx;
    .item {
      background-color: #ffffff;
      height: 184rpx;
      border-radius: 24rpx;
      display: flex;
      align-items: center;
      padding: 24rpx 32rpx;
      box-sizing: border-box;
      margin-bottom: 32rpx;
      image {
        width: 96rpx;
        height: 96rpx;
        margin-right: 32rpx;
      }
      .title-box {
        width: 420rpx;
        .title {
          font-size: 36rpx;
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
          line-height: 50rpx;
          margin-bottom: 8rpx;
        }
        .unit-id {
          font-size: 24rpx;
          line-height: 34rpx;
          color: rgba(0, 0, 0, 0.65);
          margin-bottom: 8rpx;
        }
        .unit-position {
          font-size: 24rpx;
          line-height: 34rpx;
          color: rgba(0, 0, 0, 0.65);
        }
      }
      .handle {
        flex: 1;
        text-align: right;
        color: $u-primary;
        font-size: 28rpx;
      }
    }
  }
}
</style>
