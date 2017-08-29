<template>
  <div class="layout-content">
    <Row>
      <i-col span="5">
        <Menu theme="light" active-name="1">
          <Menu-group title="内容管理">
            <Menu-item name="1">
              <Icon type="document-text"></Icon>
              文章管理

            </Menu-item>
            <Menu-item name="2">
              <Icon type="chatbubbles"></Icon>
              评论管理

            </Menu-item>
          </Menu-group>
          <Menu-group title="统计分析">
            <Menu-item name="3">
              <Icon type="heart"></Icon>
              用户留存

            </Menu-item>
            <Menu-item name="4">
              <Icon type="heart-broken"></Icon>
              流失用户

            </Menu-item>
          </Menu-group>
        </Menu>
      </i-col>
      <i-col span="19">
        <div class="layout-content-main">内容区域</div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less">
  .layout-content {
    margin: 0 15px 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main {
    padding: 10px;
  }
</style>
