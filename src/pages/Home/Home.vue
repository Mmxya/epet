<template>
<div>
      <!--下载APP-->
        <div class="appdowing">
            <a href="###">
               <img src="./images/homeheader.jpg" alt="下载app">
            </a>
        </div>

    <!--整体结构-->
    <div id="indexbox" class="main">
      <!--搜索和列表导航-->
      <div class="indexheader">
          <!--搜索栏-->
        <div class="epetsearch">
          <div class="buyinfo">
            <span class="dog">狗狗</span>
            <span class="middle">|</span>
            <span class="addr">重庆</span>
          </div>
          <p class="searchtext">
            <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
            <span class="icon">
            <i class="iconfont icon-sousuosearch82"></i>
            </span>
          </p>
          <span class="item_icon">
            <i class="iconfont icon-sharemessage"></i>
          </span>
        </div>

        <!--导航菜单-->
       <div class="find_nav">
         <ul class="huadong">
           <li><span>首页</span></li>
           <li><span>首页</span></li>
           <li><span>首页</span></li>
           <li><span>首页</span></li>
           <li><span>首页</span></li>
           <li><span>首页</span></li>
         </ul>
       </div>

      </div>

     <!-- 内容区-->
      <div class="allmodule">
        <!--轮播图-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="./images/slider/slider1.jpg"></div>
            <div class="swiper-slide"><img src="./images/slider/slider2.jpg"></div>
            <div class="swiper-slide"><img src="./images/slider/slider3.jpg"></div>
            <div class="swiper-slide"><img src="./images/slider/slider4.jpg"></div>
            <div class="swiper-slide"><img src="./images/slider/slider5.jpg"></div>
            <div class="swiper-slide"><img src="./images/slider/slider6.jpg"></div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <!--<div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>-->
          <!-- 如果需要滚动条 -->
          <!--<div class="swiper-scrollbar"></div>-->
        </div>

        <!--图片导航-->
        <div class="columnnavdiv">
          <div>
            <ul>
              <li><a href="##"><img src="./images/nav/nav01.jpg"></a></li>
              <li><a href="##"><img src="./images/nav/nav02.jpg"></a></li>
              <li><a href="##"><img src="./images/nav/nav03.jpg"></a></li>
              <li><a href="##"><img src="./images/nav/nav04.jpg"></a></li>
              <li><a href="##"><img src="./images/nav/nav05.jpg"></a></li>
              <li><a href="##"><img src="./images/nav/nav06.jpg"></a></li>
              <li><a href="##"><img src="./images/nav/nav07.jpg"></a></li>
              <li><a href="##"><img src="./images/nav/nav08.jpg"></a></li>
              <li><a href="##"><img src="./images/nav/nav09.jpg"></a></li>
              <li><a href="##"><img src="./images/nav/nav10.jpg"></a></li>
            </ul>
          </div>
        </div>

        <!--新人专享-->
        <div class="banner_item">
          <img src="./images/new99.gif" alt="新人专享">
        </div>

        <!--每日疯抢-->
        <div class="surprise_day">
          <!--标题-->
          <div class="surprise">
            <div class="surprise-title">
              <div class="timing"><img src="./images/new_index_icon_suprice.png" alt="每日疯抢"></div>
              <div class="over">本场结束</div>
              <div class="time">15：00</div>
              <!--<div class="more">
                <a href="###"><img src="./images/smallmore.jpg" alt="更多"></a>
              </div>-->
            </div>
            <!--商品-->
            <div class="surprise-pro">
              <ul class="shopList">
                <li>
                  <div><img src="./images/daily/dailyCrazy01.jpg"></div>
                  <p class="sale">￥33.60</p>
                  <p class="sheng">省78.40</p>
                </li>
                <li>
                  <div><img src="./images/daily/dailyCrazy01.jpg"></div>
                  <p class="sale">￥33.60</p>
                  <p class="sheng">省78.40</p>
                </li>
                <li>
                  <div><img src="./images/daily/dailyCrazy01.jpg"></div>
                  <p class="sale">￥33.60</p>
                  <p class="sheng">省78.40</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

</div>
</template>
<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
    export default{
      mounted(){
        new BScroll('.find_nav',{
          probeType: 2,
          scrollX: true,
          click: true //响应点击
        })

        var mySwiper = new Swiper ('.swiper-container', {
//          direction: 'vertical',
          loop: true,
          autoplay:true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })

      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  /*下载app*/
  .appdowing
    width 100%
    height 55px
    img
      width 100%
  #indexbox
    width:100%
  /*搜索栏和列表导航*/
  .indexheader
    width 100%
    height 86px
    .epetsearch
      padding 10px 0
      display flex
      justify-content space-around
      .buyinfo
        position relative
        display flex
        flex-direction row
        span
          font-size 14px
          line-height 25px
          color: #898989;
      .buyinfo::before
        content: '';
        position: absolute;
        border: 5px solid;
        border-color: #898989 transparent transparent;
        top: 10px;
        right: -13px;
      .searchtext
        background #e9e9e9
        height 25px
        border-radius 4px
        input
          background #e9e9e9
          color #bcbcbc
          text-indent 10px
          font-size 13px
          line-height 25px
          border-radius 4px
          outline 0
          width 200px
        .icon
          .iconfont
            font-size 11px
      img
        width: 25px;
        height 25px
  .find_nav
    width 100%
    height 35px
    line-height 35px
    min-width 320px
  .find_nav ul
    width 120%
    display flex
    flex-direction row
  .find_nav ul li
    width 20%
    display inline-block
    text-align center
  .allmodule
    width 100%
    .swiper-container
        width: 100%
        height: 100%
      img
        width 100%

      /*图片导航*/
    .columnnavdiv
      width 100%
      height 180px
      ul
        display flex
        flex-wrap: wrap;
        li
          width 20%
          img
            width 100%
            height 100%
            vertical-align middle
     /*每日疯抢*/
    .surprise_day
      width 100%
      .surprise-title
        position relative
        height 39px
        width 100%
        line-height 39px
        overflow hidden
        .timing
          width 86px
          img
            vertical-align middle
        .over
          position absolute
          top 4px
          left 48%
        .time
          position absolute
          top 4px
          left 65%
          /*更多more____________________*/
        /*.more
          position absolute
          top 0
          right 2%*/
        .surprise-pro
          width 100%
          .shopList
            width 130%
            li
              display inline-block
              width 30%

</style>
