/**
 * 用于app和小程序或是web的本地缓存
 */

const KEY_TOKEN = 'token';
const KEY_CURRENT_USER_INFO = 'current_user_info';
const KEY_SYSTEM_INFO = 'system_info'

export function setSystemInfo(systemInfo) {
	if(!systemInfo){
    uni.removeStorageSync(KEY_SYSTEM_INFO);
	}
  uni.setStorageSync(KEY_SYSTEM_INFO, JSON.stringify(systemInfo));
}

export function getSystemInfo() {
	const systemInfoStr = uni.getStorageSync(KEY_SYSTEM_INFO);
	if (!systemInfoStr) {
	  return null;
	}
	return JSON.parse(systemInfoStr);
}

export function setToken(token) {
  uni.setStorageSync(KEY_TOKEN, token);
}

export function getToken() {
  return uni.getStorageSync(KEY_TOKEN);
}

export function setUserInfo(userInfo) {
  if (!userInfo) {
    uni.removeStorageSync(KEY_CURRENT_USER_INFO);
  }
  uni.setStorageSync(KEY_CURRENT_USER_INFO, JSON.stringify(userInfo));
}

export function getUserInfo() {
  const userInfoStr = uni.getStorageSync(KEY_CURRENT_USER_INFO);
  if (!userInfoStr) {
    return null;
  }
  return JSON.parse(userInfoStr);
}