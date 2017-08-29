<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper-header">
        <Menu mode="horizontal" :theme="theme1" active-name="Summarize">
          <div class="wrapper-header-nav">
            <div class="wrapper-header-nav-user">
              <Poptip placement="bottom-start" width="130" class="f_left info-img">
                <Button type="text" size="large"><img src="./assets/img/avatar.png">junjunsoul &nbsp
                  <Badge dot></Badge>
                </Button>
                <div class="api" slot="content"></div>
              </Poptip>
              <Poptip placement="bottom-start" width="238" class="f_left">
                <Button type="text" icon="android-notifications" size="large">
                  <Badge dot>通知 &nbsp</Badge>
                </Button>
                <div class="api" slot="content"></div>
              </Poptip>
              <Radio-group v-model="lang" type="button" size="small" class="f_left">
                <Radio label="CN"></Radio>
                <Radio label="EN" disabled></Radio>
              </Radio-group>
            </div>
            <div class="wrapper-header-nav-list">
              <Menu-item name="Summarize" @click.native.on-select="Goto_page('/Summarize')">
                <Icon type="clipboard" size='18'></Icon>
                推广概览

              </Menu-item>
              <Menu-item name="Summary" @click.native.on-select="Goto_page('/Summary')">
                <Icon type="happy" size='18'></Icon>
                推广活动

              </Menu-item>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="stats-bars" size='18'></Icon>
                  统计分析

                </template>
                <Menu-group title="按天">
                  <Menu-item name="3-1">汇总</Menu-item>
                  <Menu-item name="3-2">付费</Menu-item>
                  <Menu-item name="3-3">汇总留存</Menu-item>
                  <Menu-item name="3-4">LTV</Menu-item>
                </Menu-group>
                <Menu-group title="其它">
                  <Menu-item name="3-5">按时汇总</Menu-item>
                  <Menu-item name="3-6">十分钟汇总</Menu-item>
                  <Menu-item name="3-7">活跃用户占比</Menu-item>
                </Menu-group>
              </Submenu>
              <Menu-item name="Seting" @click.native.on-select="Goto_page('/Seting')">
                <Icon type="settings" size='18'></Icon>
                产品设置

              </Menu-item>
            </div>
            <div class="wrapper-header-nav-search"></div>
            <router-link :to="{path:'/'}" class="wrapper-header-nav-logo"><img src=""></router-link>
          </div>
        </Menu>
      </div>
      <div class="layout-breadcrumb">
        <Breadcrumb>
          <Breadcrumb-item href="#">首页</Breadcrumb-item>
          <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
          <Breadcrumb-item>某应用</Breadcrumb-item>
        </Breadcrumb>
      </div>
      <div class="wrapper-container">
        <router-view></router-view>
      </div>
      <div class="footer">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        theme1: 'light',
        lang: 'CN'
      }
    },
    methods: {
      Goto_page(link){
        this.$router.push({path: link})
      }
    }
  }
</script>
<style lang="less">
  @h_height: 65px;
  #app{
    height: 100%;
  }
  html,body{
    height: 100%;
  }
  .wrapper {
    background-color: #eee;
    padding: 1px;
    padding-top: @h_height;
    height: 100%;
    box-sizing: border-box;
    .wrapper-header {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
      position: fixed;
      width: 100%;
      top: 0;
      letter-spacing: 1px;
      z-index: 999;
      .ivu-menu-horizontal {
        height: @h_height;
        line-height: @h_height;
      }
      .wrapper-header-nav {
        width: 90%;
        height: @h_height;
        margin: 0 auto;
        .wrapper-header-nav-list {
          float: right;
          height: inherit;
          .btn {
            margin-left: 10px;
          }
        }
        .wrapper-header-nav-search {
          float: left;
          margin-left: 100px;
        }
        .wrapper-header-nav-logo {
          height: 50px;
          margin-top: 15px;
          float: left;
        }
        .wrapper-header-nav-user {
          float: right;
        }
        .f_left {
          float: left;
        }
        .info-img img {
          float: left;
          height: 20px;
          width: 20px;
          border-radius: 2px;
          margin-right: 5px;
        }
      }
    }
    .wrapper-container {
      background-color: #fff;
      width: 98%;
      margin: 0px auto 20px;
      border-radius: 6px;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
      height: calc(~"100% - @{h_height}");
      min-height: 500px;
      box-sizing: border-box;
    }
  }
  .footer {
    background-color: #fff;
    color: #666;
  }
  .layout-breadcrumb {
    padding: 10px 30px;
  }
</style>
