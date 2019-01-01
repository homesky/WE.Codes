<template>
  <a-locale-provider :locale="zh_CN">
    <div id="main" class="app-main">
      <router-view v-wechat-title="$route.meta.title"></router-view>
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
export default {
  data() {
    return {
      locale: zhCN,
    }
  }
}
</script>