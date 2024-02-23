<script>
import {setSystemInfo} from '@/utils/app-store.js'
export default {
  onLaunch: function () {
    console.log('App Launch')
		const systemInfo = uni.getSystemInfoSync();
		setSystemInfo(systemInfo);
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss">
@import './uni_modules/uview-ui/index.scss';
/*每个页面公共css */
page {
  background: #f4f6f8;
  /deep/.u-cell-item-box {
    &.u-border-top:after {
      border-top-width: 0;
    }
    &.u-border-bottom:after {
      border-bottom-width: 0;
    }
    .u-cell {
      &:nth-last-of-type(1) {
        &.u-border-bottom:after {
          border-bottom-width: 0;
        }
      }
    }
  }
}
/* App.vue */
.cell-hover-class {
  background-color: rgb(235, 237, 238);
}

/* 或者单是设置透明度 */
.cell-hover-class {
  opacity: 0.5;
}
</style>
