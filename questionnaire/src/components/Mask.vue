<template>
    <transition name='modal'>
        <div class="mask">
            <div class="mask-panel">
                <div class="mask-panel-header">
                    <span class="mask-panel-close-btn" @click="hide">X</span>
                    <h2>提示</h2>
                </div>
                <div class="mask-panel-body">
                    {{message}}
                </div>
                <div class="mask-panel-footer">
                    <button class="mask-panel-btn cancel-btn" @click="$emit('hide-event')">取消</button>
                    <button class="mask-panel-btn confirm-btn" @click="$emit('confirm-event')">确定</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'MaskLayer',
        props: [
            'maskShow', 'message'
        ],
        methods: {
            confirm () {
                this.$emit('confirm-event')
            },
            hide () {
                this.$emit('hide-event')
            }
        }
    }
</script>

<style>
    .modal-enter {
      opacity: 0;
    }
    .modal-leave-active {
      opacity: 0;
    }
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    .mask{
        width:100%;
        height:100%;
        background:rgba(0,0,0,.8);
        position: fixed;
        top:0;
        left:0;
    }
    .mask-panel{
        width:320px;
        height:160px;
        padding:10px 20px;
        box-sizing: border-box;
        background: #fff;
        border:5px;
        font-size: 14px;
        box-shadow: 1px 1px 3px #444444;
        border-radius: 5px;
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-80px;
        margin-left:-160px;
    }
    .mask-panel-header{
        height:20%;
    }
    .mask-panel-header h2{
        font-size: 16px;
        font-weight: bold;
    }
    .mask-panel-header span.mask-panel-close-btn{
        float:right;
        cursor: pointer;
    }
    .mask-panel-body{
        height:60%;
        padding-top:20px;
        box-sizing: border-box;
    }
    .mask-panel-footer{
        height:20%;
    }
    .mask-panel-footer button.mask-panel-btn{
        width:6em;
        height:2em;
        line-height: 2em;
        font-size: 12px;
        border-radius: 3px;
        border:1px solid #c0c0c0;
        float:right;
        margin-right: 5px;
    }
    .mask-panel-footer button.confirm-btn{
        background:rgb(247, 120, 2);
        color:#fff;
    }
    .mask-panel-footer button.cancel-btn{
        background:#fff;
        color:#000;
    }
</style>
