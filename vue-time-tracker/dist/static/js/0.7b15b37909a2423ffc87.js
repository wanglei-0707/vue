webpackJsonp([0,1],{18:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"LogTime",data:function(){return{data:"",totalTime:"",comment:""}},methods:{save:function(){var t={name:"二哲",image:"https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256",date:this.date,totalTime:this.totalTime,comment:this.comment};this.$store.dispatch("savePlan",t),this.$store.dispatch("addTotalTime",this.totalTime),this.$router.go(-1)}}}},56:function(t,e,a){var o,s;o=a(18);var n=a(62);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,t.exports=o},62:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"form-horizontal"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"col-sm-6"},[e("label",[t._v("日期")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Date"},domProps:{value:t._s(t.date)},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("label",[t._v("时间")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.totalTime,expression:"totalTime"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Hours"},domProps:{value:t._s(t.totalTime)},on:{input:function(e){e.target.composing||(t.totalTime=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"col-sm-12"},[e("label",[t._v("备注")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Comment"},domProps:{value:t._s(t.comment)},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})])]),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:function(e){t.save()}}},[t._v("保存")]),t._v(" "),e("router-link",{staticClass:"btn btn-danger",attrs:{to:"/time-entries"}},[t._v("取消")])])},staticRenderFns:[]}}});
//# sourceMappingURL=0.7b15b37909a2423ffc87.js.map