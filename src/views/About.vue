<!--
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 *-->
 <template>
  <div class="about">
    <s-header :name="'关于作者'"></s-header>
    <div class="about-body">
      <img class="intro-img" src="/static-files/商城info.jpeg" alt="">
      <van-divider :style="{ color: '#1baeae', borderColor: '#1baeae', fontSize: '20px', fontWeight: 500 }">简介</van-divider>
      <div>区块链商城项目是一套电商系统，包括区块链商城系统及区块链商城后台管理系统，区块链商城系统基于 Spring Boot 3.X 、百度超级链、Gin框架(Golang)等相关技术栈开发。 前台商城系统包含首页门户、商品分类、新品上线、首页轮播、商品推荐、商品搜索、商品展示、购物车、订单结算、订单流程、个人订单管理、会员中心、帮助中心等模块。 后台管理系统包含数据面板、轮播图管理、商品管理、订单管理、会员管理、分类管理、设置等模块。</div>
      <van-divider :style="{ color: '#1baeae', borderColor: '#1baeae', fontSize: '20px', fontWeight: 500 }">开源地址</van-divider>
      <div>
        <div>后台管理系统：<a target="_blank" href="https://juejin.im/book/6844733826191589390">《Vue 商城项目开发实战》</a></div>
        <br/>
        <div>Github项目地址：<a target="_blank" href="https://github.com/bingjiekang/Graduation">https://github.com/bingjiekang/Graduation</a></div>
        <br/>
        <div>本人博客：<a target="_blank" href="https://kangbingjie.cn">https://kangbingjie.cn</a></div>
        <br/>
      </div>
    </div>
  </div>
</template>

<script setup>
import sHeader from '@/components/SimpleHeader.vue'
</script>

<style lang="less" scoped>
  .about {
    box-sizing: border-box;
    padding: 20px;
    .intro-img {
      width: 100%;
    }
    .about-body {
      font-size: 16px;
      a {
        color: #007fff;
      }
    }
  }
</style>
