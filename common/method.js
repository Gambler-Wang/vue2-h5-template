const install = (Vue, vm) => {
  let getUserInfo = function () {
    vm.$u.api
      .getUserInfo({})
      .then((res) => {
        vm.$u.vuex('vuex_user', Object.assign(vm.vuex_user, res.data))
      })
      .catch((e) => {
        console.log(e)
      })
  }

  let clearAllUserInfo = function () {
    vm.store.vuex('app/setTestData', '')
  }

  let logoutUser = function (lastPage) {}
}
export default {
  install,
}
