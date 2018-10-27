<template>
    <div class="vip">
        <div class="api-select">
            <div class="apiUrl"><input type="text" v-model="videoSrc"></div>
            <div class="apiList">
                <span @click.stop="toggleList">{{ apiName }}</span>
                <ul v-if="isShow">
                    <li v-for="(item,index) in api" @click="selectApi(index)">{{ item.name }}</li>
                </ul>
            </div>
        </div>
        <iframe id="videos" src="" frameborder="0" class="api-video"></iframe>
    </div>
</template>

<script>
export default {
  name: "Vip",
  data: function() {
    return {
      msg: "VIP 视频解析",
      nowIndex: -1,
      videoSrc: "https://v.qq.com/x/cover/p8bvvfh82dqrqgq.html",
      api: [],
      apiName: "请选择接口",
      isShow: false,
      width: "",
      height: ""
    };
  },
  methods: {
    toggleList: function() {
      this.isShow = !this.isShow;
    },
    selectApi: function(index) {
      this.nowIndex = index;
      this.toggleList();
    }
  },
  computed: {
    getApi: function() {
      this.apiName = this.api[this.nowIndex].name; 
      return this.api[this.nowIndex].url + this.videoSrc;
    }
  },
  watch: {
    videoSrc: function() {
        console.log("??")
      document.getElementById("videos").src = this.getApi;
    },
    nowIndex: function() {
        console.log("?1?")
      document.getElementById("videos").src = this.getApi;
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  mounted: function() {
    this.$axios.get("../static/json/VideoApi.json").then(response => {
      this.api = response.data.api;
      this.videoSrc = response.data.video;
      this.nowIndex = 0;
    });
    let that = this;
    // 点击空白区域，列表消失
    document.documentElement.addEventListener("click", function() {
      that.isShow = false;
    });
    // 打开默认播放默认视频
    //document.getElementById("videos").src = this.getApi;
  }
};
</script>

<style>
span,
ul {
  user-select: none;
}
.vip {
  height: 100%;
}
.api-video {
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 5px;
}
.api-select {
  width: 500px;
  height: 30px;
  line-height: 30px;
  border: 4px solid #fff;
  background-color: #fff;
  border-radius: 3px;
  position: relative;
  margin: auto;
}
.api-select input {
  width: 100%;
  border: none;
  outline: none;
  text-indent: 1em;
}
.api-select .apiUrl {
  line-height: 30px;
  width: 370px;
  border-right: 2px solid #dadada;
  position: absolute;
}
.api-select .apiList {
  position: absolute;
  right: 0;
  width: 125px;
  line-height: 30px;
  font-size: 0.8em;
  overflow-x: hidden;
}
.api-select .apiList span {
  display: block;
  cursor: pointer;
  position: relative;
  background-color: #fff;
  width: 100%;
}
.api-select .apiList span:after {
  content: "";
  display: block;
  position: absolute;
  top: 11px;
  right: 8px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid black;
  border-bottom: none;
}
.api-select .apiList ul {
  background-color: #fff;
  margin-top: 4px;
  list-style-type: none;
  height: 300px;
  overflow-y: scroll;
}
.api-select .apiList ul li {
  cursor: pointer;
}
.api-select .apiList ul li:hover {
  background-color: rgba(255, 0, 0, 0.5);
}
.api-select .tips {
  position: absolute;
  right: -20px;
  color: #fff;
  transform: translateX(100%);
}
</style>
