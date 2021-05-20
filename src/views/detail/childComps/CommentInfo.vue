<template>
  <div v-if="Object.keys(commentInfo).length!==0" class="commentInfo" >
    <div class="commentTop">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="commentCenter">
      <div class="commentUser">
        <img :src="commentInfo.user.avatar" alt="">
        <div>{{commentInfo.user.uname}}</div>
      </div>
      <div class="commentContent">
        {{commentInfo.content}}
      </div>
      <div class="commentStyle">
        <span class="data">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="commentImg">
      <img v-for="(item,index) in commentInfo.images" :src="item" :key="index" alt="">
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/utils";
export default {
  name: "CommentInfo",
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showDate (value) {
      //   1. 将时间戳转化为Date对象
      const date = new Date(value * 1000)
      return formatDate(date,'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style scoped>
.commentInfo{
  margin-top: 10px;
  border-top: 1px solid #a3a3a5;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  background-color: #fff;
}
.commentTop{
  margin: 0 8px;
  padding: 10px 10px;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  border-bottom: 1px solid #a3a3a5;
}
.commentTop :nth-child(1){
  flex: 1;
  text-align: left;
}
.commentTop :nth-child(2){
  flex: 1;
  font-size: 16px;
  text-align: right;
}
.commentCenter{
  margin: 15px 10px;
}
.commentCenter .commentUser img{
  width: 45px;
  height: auto;
  border-radius: 50%;
}
.commentCenter .commentUser div{
  padding-left: 10px;
  display: inline;
  position: relative;
  bottom: 15px;
}
.commentContent{
  margin-top: 8px;
  font-size: 14px;
}
.commentStyle{
  font-size: 12px;
  color:#a1a1a1;
  margin-top: 4px;
}
.commentImg{
  margin-left: 10px;
}
.commentImg img{
  width: 70px;
  height: auto;
  margin-right: 10px;
}
</style>