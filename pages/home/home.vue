<template>
  <view class="home-container">
    <view class="top-nav">
      <u-navbar placeholder title=" " border>
        <view class="slot-wrap" slot="left"><text class="title">首页</text></view>
      </u-navbar>
    </view>
    <view class="main">
      <view class="btn-box">
        <u-button type="primary" @click="getRequest">测试get请求</u-button>
      </view>
      <view class="content-box">
        <u--input v-model="getValue" type="textarea" />
      </view>
      <view class="btn-box">
        <u-button type="primary" @click="postRequest">测试post请求</u-button>
      </view>
      <view class="content-box">
        <u--input v-model="postValue" type="textarea" />
      </view>
      <view class="content-box">
        <u-tag :text="testData" plain size="mini" type="warning" />
      </view>
      <view class="btn-box">
				<view>
					<u-button type="primary" @click="jumpToSearch">路由测试</u-button>
				</view>
				<view>
					<u-button type="primary" @click="showPopup">自定义组件测试</u-button>
				</view>
      </view>
    </view>
    <login-register-popup ref="LoginRegisterPopupRefs" />
  </view>
</template>

<script>
import LoginRegisterPopup from '../../components/login-register-popup'
import { mapGetters } from 'vuex'
export default {
  components: {
    LoginRegisterPopup,
  },
  data() {
    return {
      getValue: '',
      postValue: '',
    }
  },
  async created() {},
  computed: {
    ...mapGetters(['testData']),
  },
  methods: {
    async getRequest() {
      const res = await this.$http.HOME.queryArticle()
      this.getValue = JSON.stringify(res)
    },
    async postRequest() {
      const res = await this.$http.HOME.updateArticle({
        userId: '6781',
        title: '测试post',
        body: '测试',
      })
      this.postValue = JSON.stringify(res)
    },
    jumpToSearch() {
      uni.navigateTo({
        url: '/pages/device/device-search',
      })
    },
    showPopup() {
      this.$refs.LoginRegisterPopupRefs.show()
    },
  },
  beforeDestroy() {},
}
</script>

<style lang="scss" scoped>
.home-container {
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

  .main {
    padding-top: 32rpx;
    box-sizing: border-box;
    .btn-box {
      padding: 24rpx 12rpx;
      text-align: center;
      background-color: #fff;
    }

    .content-box {
      padding: 24rpx 12rpx;
      background-color: #fff;
    }
		.btn-box{
			display: flex;
			justify-content: space-around;
			&>view{
				width: 50%;
				margin-right: 18rpx;
			}
		}
  }

}
</style>
