<template>
  <a-locale-provider :locale="zh_CN">
    <div id="main" class="app-main">
      <router-view v-wechat-title="$route.meta.title"></router-view>
    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
export default {
  data() {
    return {
      zh_CN,
    }
  },
  mounted(){
    //http://192.168.0.143:8054/api/equake/getnew
    this.$get('equake/getnew').then((res)=>{
     console.log(res);
    })
  }
}
</script>