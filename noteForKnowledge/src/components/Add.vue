<template>
    <div class="note-add">
        <!-- <transition name="fade"> -->
        <div class="note-add-menu-wrapper">
            <ul class="note-add-menu">
                <li class="note-add-menu-li">
                    <span class="note-add-menu-content">更多模板</span>
                    <i class="icon-circle iconfont icon-more3"></i>
                </li>
                <li class="note-add-menu-li">
                    <span class="note-add-menu-content">Markdown</span>
                    <i class="icon-circle icon-markdown">M</i>
                </li>
                <li class="note-add-menu-li">
                    <span class="note-add-menu-content">手指画</span>
                    <i class="icon-circle iconfont icon-bi"></i>
                </li>
                <li class="note-add-menu-li">
                    <span class="note-add-menu-content">拍照</span>
                    <i class="icon-circle iconfont icon-zhaoxiangji"></i>
                </li>
                <li class="note-add-menu-li">
                    <span class="note-add-menu-content">文本</span>
                    <i class="icon-circle iconfont icon-detail"></i>
                </li>
            </ul>
        </div>
        <!-- </transition> -->
        <div class="note-add-btn" @click="addClick">+</div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      menuShow: false
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    addClick: function (event) {
      this.menuShow = !this.menuShow
      let addBtnClassList = event.target.classList
      let menu = event.target.previousElementSibling.classList
      if (addBtnClassList.contains('rotate-add-btn')) {
        addBtnClassList.remove('rotate-add-btn')
        addBtnClassList.add('rerotate-add-btn')
        menu.remove('show-menu')
        menu.add('hide-menu')
      } else {
        addBtnClassList.remove('rerotate-add-btn')
        addBtnClassList.add('rotate-add-btn')
        menu.remove('hide-menu')
        menu.add('show-menu')
      }
    }
  },
  components: {}
}
</script>

<style lang="css">
/*.note-add{
    width:100vw;
    height:100vh;
    position: absolute;
    top:0;
    left:0;
    overflow: hidden;
}*/
.note-add-btn{
    width:10vw;
    height:10vw;
    line-height: 10vw;
    border-radius: 50%;
    font-size: 1.2em;
    color:#fff;
    background:#2277BF;
    text-align: center;
    cursor: pointer;
    position: fixed;
    bottom: 5vw;
    right:10vw;
    z-index:99;
}
.rotate-add-btn{
    -webkit-animation: rotateAddBtn .2s forwards;
            animation: rotateAddBtn .2s forwards;
}
@-webkit-keyframes rotateAddBtn {
    0{
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
    70%{
        -webkit-transform: rotate(150deg);
                transform: rotate(150deg);
    }
    100%{
        -webkit-transform: rotate(135deg);
                transform: rotate(135deg);
    }
}
@keyframes rotateAddBtn {
    0{
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
    70%{
        -webkit-transform: rotate(150deg);
                transform: rotate(150deg);
    }
    100%{
        -webkit-transform: rotate(135deg);
                transform: rotate(135deg);
    }
}
.rerotate-add-btn{
    -webkit-animation: rerotateAddBtn .2s forwards;
            animation: rerotateAddBtn .2s forwards;
}
@-webkit-keyframes rerotateAddBtn {
    0{
        -webkit-transform: rotate(135deg);
                transform: rotate(135deg);
    }
    70%{
        -webkit-transform: rotate(-15deg);
                transform: rotate(-15deg);
    }
    100%{
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
}
@keyframes rerotateAddBtn {
    0{
        -webkit-transform: rotate(135deg);
                transform: rotate(135deg);
    }
    70%{
        -webkit-transform: rotate(-15deg);
                transform: rotate(-15deg);
    }
    100%{
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
}
@media screen and (min-width: 1024px) {
    .note-add{
        right:25vw;
    }
    .note-add-btn{
        width:5vw;
        height:5vw;
        line-height: 5vw;
    }
}
.note-add-menu-wrapper{
    width:100vw;
    height:100vh;
    background:#f3f3f3;
    position: fixed;
    left:0;
    top:100vh;
}
/*.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}*/
.note-add-menu{
    width:50vw;
    position: absolute;
    bottom:15vw;
    right:10vw;
}
.note-add-menu-li{
    width:100%;
    height:8vh;
    text-align: right;
}
.note-add-menu-content{
    display: inline-block;
    padding:5px 10px;
    background: #fff;
    border-radius: 3px;
}
.show-menu{
    -webkit-animation: show-menu .5s forwards;
            animation: show-menu .5s forwards;
}
@-webkit-keyframes show-menu {
    0%{
        display: none;
        top:100vh;
        height:110vh;
    }
    70%{
        display: block;
        top:-0vh;
    }
    100%{
        display: block;
        top:0;
        height:100vh;
    }
}
@keyframes show-menu {
    0%{
        display: none;
        top:100vh;
        height:110vh;
    }
    70%{
        display: block;
        top:-10vh;
    }
    100%{
        display: block;
        top:0;
        height:100vh;
    }
}
.hide-menu{
    -webkit-animation: hide-menu .3s forwards;
            animation: hide-menu .3s forwards;
}
@-webkit-keyframes hide-menu {
    0%{
        display: block;
        top:0;
    }
    100%{
        display: none;
        top:100vh;
    }
}
@keyframes hide-menu {
    0%{
        display: block;
        top:0;
    }
    100%{
        display: none!important;
        top:100vh;
    }
}
.icon-circle{
    display: inline-block;
    width:10vw;
    height:10vw;
    line-height: 10vw;
    margin-left:5vw;
    border-radius: 50%;
    background:#000;
    color:#fff;
    font-size:1.1em;
    text-align: center;
}
.icon-more3{
    background:#38C5AB;
}
.icon-markdown{
    background:#E4618B;
}
.icon-bi{
    background:#E0AC4B;
}
.icon-zhaoxiangji{
    background:#F34848;
}
.icon-detail{
    background:#5C95EA;
}
</style>
