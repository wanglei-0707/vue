webpackJsonp([2,0],{0:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var n=s(118),o=i(n),u=s(394),a=i(u),c=s(409),r=i(c),l=s(396),d=i(l),p=s(398),m=i(p),h=s(395),v=i(h),f=s(138),x=i(f);o.default.use(r.default);var _=new r.default({routes:[{path:"/",component:d.default},{path:"/list",component:d.default},{path:"/new",component:m.default},{path:"/edit/:id",name:"edit",component:m.default},{path:"/check/:id",name:"check",component:v.default},{path:"/view/:id",name:"view",component:v.default}]});new o.default({el:"#app",router:_,store:x.default,template:"<App/>",components:{App:a.default}})},77:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ADD_QUESTIONNAIRE="ADD_QUESTIONNAIRE",e.DEL_QUESTIONNAIRE="DEL_QUESTIONNAIRE",e.SAVE_QUESTIONNAIRE="SAVE_QUESTIONNAIRE"},117:function(t,e,s){var i,n;s(392),i=s(143);var o=s(408);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=i},137:function(t,e,s){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var n=s(77),o=i(n);e.default={addQuestionnaire:function(t,e){var s=t.commit;s(o.ADD_QUESTIONNAIRE,e)},delQuestionnaire:function(t,e){var s=t.commit;s(o.DEL_QUESTIONNAIRE,e)},saveQuestionnaire:function(t,e){var s=t.commit;s(o.SAVE_QUESTIONNAIRE,e)}}},138:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(118),o=i(n),u=s(410),a=i(u),c=s(137),r=i(c),l=s(139),d=i(l);o.default.use(a.default);var p={user:{name:"维尼蕾",img:"dist/images/1.jpg"},questionnaireList:[{id:"1",title:"这是我的第一份问卷",time:"2016-04-92",status:"未发布",questions:[{title:"你喜欢什么运动？",type:"1",must:!0,options:[{text:"足球",num:8},{text:"排球",num:12},{text:"篮球",num:3},{text:"羽毛球",num:5}],picked:[]},{title:"你喜欢排球吗？为什么？",type:"2",must:!1,options:[{text:"",num:2}],picked:""}]},{id:"2",title:"这是我的第二份问卷",time:"2016-04-12",status:"发布中",questions:[{title:"你的性别？",type:"0",must:!0,options:[{text:"男",num:23},{text:"女",num:12}],picked:""},{title:"你的学历？",type:"0",must:!0,options:[{text:"高中",num:5},{text:"专科",num:10},{text:"本科",num:7},{text:"研究生",num:7}],picked:""},{title:"你喜欢以下什么游戏？",type:"1",must:!0,options:[{text:"谁说卧底",num:4},{text:"杀人游戏",num:6},{text:"狼人游戏",num:3},{text:"老鹰捉小鸡",num:2},{text:"丢手绢",num:7},{text:"其他",num:2}],picked:[]},{title:"你的梦想是什么？",type:"2",must:!1,options:[{text:"",num:2}],picked:""}]},{id:"3",title:"这是我的第三份问卷",time:"2016-04-12",status:"已结束",questions:[{title:"你觉得宋茜长得怎么样？",type:"0",must:!0,options:[{text:"漂亮",num:6},{text:"很漂亮",num:9},{text:"太漂亮了",num:14}],picked:""},{title:"你觉得我是一个什么样的人？",type:"1",must:!0,options:[{text:"漂亮",num:12},{text:"可爱",num:7},{text:"聪明",num:5},{text:"努力",num:8}],picked:[]}]},{id:"4",title:"这是我的第四份问卷",time:"2016-04-12",status:"未发布",questions:[{title:"你喜欢什么运动？",type:"1",must:!0,options:[{text:"足球",num:8},{text:"排球",num:12},{text:"篮球",num:3},{text:"羽毛球",num:5}],picked:[]},{title:"你喜欢排球吗？为什么？",type:"2",must:!1,options:[{text:"",num:2}],picked:""}]},{id:"5",title:"这是我的第五份问卷",time:"2016-04-92",status:"未发布",questions:[{title:"你喜欢什么运动？",type:"1",must:!0,options:[{text:"足球",num:8},{text:"排球",num:12},{text:"篮球",num:3},{text:"羽毛球",num:5}],picked:[]},{title:"你喜欢排球吗？为什么？",type:"2",must:!1,options:[{text:"",num:2}],picked:""}]},{id:"6",title:"这是我的第六份问卷",time:"2016-04-92",status:"未发布",questions:[{title:"你喜欢什么运动？",type:"1",must:!0,options:[{text:"足球",num:8},{text:"排球",num:12},{text:"篮球",num:3},{text:"羽毛球",num:5}],picked:[]},{title:"你喜欢排球吗？为什么？",type:"2",must:!1,options:[{text:"",num:2}],picked:""}]},{id:"7",title:"这是我的第七份问卷",time:"2016-04-92",status:"未发布",questions:[{title:"你喜欢什么运动？",type:"1",must:!0,options:[{text:"足球",num:8},{text:"排球",num:12},{text:"篮球",num:3},{text:"羽毛球",num:5}],picked:[]},{title:"你喜欢排球吗？为什么？",type:"2",must:!1,options:[{text:"",num:2}],picked:""}]},{id:"8",title:"这是我的第八份问卷",time:"2016-04-12",status:"发布中",questions:[{title:"你的性别？",type:"0",must:!0,options:[{text:"男",num:23},{text:"女",num:12}],picked:""},{title:"你的学历？",type:"0",must:!0,options:[{text:"高中",num:5},{text:"专科",num:10},{text:"本科",num:7},{text:"研究生",num:7}],picked:""},{title:"你喜欢以下什么游戏？",type:"1",must:!0,options:[{text:"谁说卧底",num:4},{text:"杀人游戏",num:6},{text:"狼人游戏",num:3},{text:"老鹰捉小鸡",num:2},{text:"丢手绢",num:7},{text:"其他",num:2}],picked:[]},{title:"你的梦想是什么？",type:"2",must:!1,options:[{text:"",num:2}],picked:""}]},{id:"9",title:"这是我的第九份问卷",time:"2016-04-12",status:"发布中",questions:[{title:"你的性别？",type:"0",must:!0,options:[{text:"男",num:23},{text:"女",num:12}],picked:""},{title:"你的学历？",type:"0",must:!0,options:[{text:"高中",num:5},{text:"专科",num:10},{text:"本科",num:7},{text:"研究生",num:7}],picked:""},{title:"你喜欢以下什么游戏？",type:"1",must:!0,options:[{text:"谁说卧底",num:4},{text:"杀人游戏",num:6},{text:"狼人游戏",num:3},{text:"老鹰捉小鸡",num:2},{text:"丢手绢",num:7},{text:"其他",num:2}],picked:[]},{title:"你的梦想是什么？",type:"2",must:!1,options:[{text:"",num:2}],picked:""}]},{id:"10",title:"这是我的第十份问卷",time:"2016-04-12",status:"发布中",questions:[{title:"你的性别？",type:"0",must:!0,options:[{text:"男",num:23},{text:"女",num:12}],picked:""},{title:"你的学历？",type:"0",must:!0,options:[{text:"高中",num:5},{text:"专科",num:10},{text:"本科",num:7},{text:"研究生",num:7}],picked:""},{title:"你喜欢以下什么游戏？",type:"1",must:!0,options:[{text:"谁说卧底",num:4},{text:"杀人游戏",num:6},{text:"狼人游戏",num:3},{text:"老鹰捉小鸡",num:2},{text:"丢手绢",num:7},{text:"其他",num:2}],picked:[]},{title:"你的梦想是什么？",type:"2",must:!1,options:[{text:"",num:2}],picked:""}]},{id:"11",title:"这是我的第十一份问卷",time:"2016-04-12",status:"发布中",questions:[{title:"你的性别？",type:"0",must:!0,options:[{text:"男",num:23},{text:"女",num:12}],picked:""},{title:"你的学历？",type:"0",must:!0,options:[{text:"高中",num:5},{text:"专科",num:10},{text:"本科",num:7},{text:"研究生",num:7}],picked:""},{title:"你喜欢以下什么游戏？",type:"1",must:!0,options:[{text:"谁说卧底",num:4},{text:"杀人游戏",num:6},{text:"狼人游戏",num:3},{text:"老鹰捉小鸡",num:2},{text:"丢手绢",num:7},{text:"其他",num:2}],picked:[]},{title:"你的梦想是什么？",type:"2",must:!1,options:[{text:"",num:2}],picked:""}]},{id:"12",title:"这是我的第十二份问卷",time:"2016-04-12",status:"发布中",questions:[{title:"你的性别？",type:"0",must:!0,options:[{text:"男",num:23},{text:"女",num:12}],picked:""},{title:"你的学历？",type:"0",must:!0,options:[{text:"高中",num:5},{text:"专科",num:10},{text:"本科",num:7},{text:"研究生",num:7}],picked:""},{title:"你喜欢以下什么游戏？",type:"1",must:!0,options:[{text:"谁说卧底",num:4},{text:"杀人游戏",num:6},{text:"狼人游戏",num:3},{text:"老鹰捉小鸡",num:2},{text:"丢手绢",num:7},{text:"其他",num:2}],picked:[]},{title:"你的梦想是什么？",type:"2",must:!1,options:[{text:"",num:2}],picked:""}]}],activeQuestionnaire:{}};e.default=new a.default.Store({state:p,mutations:d.default,actions:r.default})},139:function(t,e,s){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e}function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,u=s(149),a=n(u),c=s(77),r=i(c);e.default=(o={},(0,a.default)(o,r.ADD_QUESTIONNAIRE,function(t,e){t.questionnaireList.push(e)}),(0,a.default)(o,r.DEL_QUESTIONNAIRE,function(t,e){for(var s in t.questionnaireList)e===t.questionnaireList[s].id&&t.questionnaireList.splice(s,1)}),(0,a.default)(o,r.SAVE_QUESTIONNAIRE,function(t,e){console.log("save mutation")}),o)},140:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(397),o=i(n);e.default={name:"app",components:{Navbar:o.default}}},141:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(161),o=i(n);e.default={name:"Check",data:function(){var t,e,s;return t=!1,e=this.$store.state.questionnaireList[this.$route.params.id-1],s=e.questions,"view"===this.$route.name&&(t=!0),{mouse:!1,isView:t,questionnaire:e,quesList:s}},mounted:function(){this.isView||this.getData()},methods:{getData:function(){for(var t,e=0,s=this.quesList.length;e<s;e++)if("0"===this.quesList[e].type){var i=[],n=[],u=0;t=o.default.init(document.getElementById("echarts-"+e));for(var a in this.quesList[e].options)i.push(this.quesList[e].options[a].text),u+=this.quesList[e].options[a].num,n.push(this.quesList[e].options[a].num);for(var c in n)n[c]=Math.round(n[c]/u*100);t.setOption({title:{text:"数据占比（%）",x:"left"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:i},series:[{type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:n,itemStyle:{normal:{color:"rgb(247, 120, 2)"}}}]})}else if("1"===this.quesList[e].type){var r=[];t=o.default.init(document.getElementById("echarts-"+e));for(var l in this.quesList[e].options)r.push({value:this.quesList[e].options[l].num,name:this.quesList[e].options[l].text});t.setOption({title:{text:"数据占比",x:"left"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:r,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}},submitQuestionnaire:function(){if("发布中"!==this.questionnaire.status)return void window.alert("问卷未发布或者已结束，提交无效！");for(var t=0,e=this.quesList.length;t<e;t++){var s=this.quesList[t];if(s.must&&(""===s.picked||s.picked===[]))return console.log(t),console.log(s.must),console.log(s.picked),void window.alert("带*号的为必填项");"0"===s.type?(s.options.forEach(function(t){t.text===s.picked&&t.num++}),s.picked=""):"1"===s.type?(s.options.forEach(function(t){for(var e in s.picked)t.text===s.picked[e]&&t.num++}),s.picked=[]):(""!==s.picked&&s.options[0].num++,s.picked="")}this.$store.dispatch("saveQuestionnaire",this.questionnaire),window.alert("问卷提交成功，谢谢参与！"),this.$router.push("/list")}}}},142:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(117),o=i(n),u=s(399),a=i(u);e.default={name:"List",data:function(){return{maskShow:!1,delQuestionnair:{},checkedList:[],checkboxAll:!1,pageCount:2,curPage:0}},computed:{questionnaireList:function(){var t=this.curPage*this.pageCount,e=t+this.pageCount;return this.$store.state.questionnaireList.slice(t,e)},unpublished:function(){var t=[];for(var e in this.questionnaireList)"未发布"===this.questionnaireList[e].status&&t.push(this.questionnaireList[e].id);return t},indexCount:function(){return Math.ceil(this.$store.state.questionnaireList.length/this.pageCount)}},components:{MaskLayer:o.default,Pagination:a.default},methods:{checkOne:function(t){for(var e in this.checkedList)if(t===this.checkedList[e])return this.checkedList.splice(e,1),void(this.checkboxAll=!1);this.checkedList.push(t),this.checkedList.length===this.unpublished.length&&(this.checkboxAll=!0)},checkAll:function(){if(this.checkedList=[],this.checkboxAll)this.checkboxAll=!1;else{for(var t in this.unpublished)this.checkedList.push(this.unpublished[t]);this.checkboxAll=!0}},deleteShowMask:function(t){this.maskShow=!0,this.delQuestionnaire=t},deleteQuestionnaire:function(t){console.log(t.id),this.$store.dispatch("delQuestionnaire",t.id),this.maskShow=!1},hide:function(){this.maskShow=!1},deleteChecked:function(){for(var t=this,e=this.checkedList.length;e>=0;e--)t.$store.dispatch("delQuestionnaire",this.checkedList[e]),this.checkedList.splice(e,1),0===this.checkedList.length&&(this.checkboxAll=!1)},changePage:function(t){this.curPage=t}}}},143:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MaskLayer",props:["message"],methods:{confirm:function(){this.$emit("confirm-event")},hide:function(){this.$emit("hide-event")}}}},144:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Navbar",computed:{user:function(){return this.$store.state.user}}}},145:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(400),o=i(n),u=s(117),a=i(u);e.default={data:function(){var t;return t="/new"===this.$route.path?{id:this.$store.state.questionnaireList.length+1,title:"这里是标题",status:"未发布",time:"",questions:[]}:this.$store.state.questionnaireList[this.$route.params.id-1],{questionnaire:t,quesList:t.questions,maskShow:!1,time:""}},components:{Question:o.default,MaskLayer:a.default},watch:{time:function t(){var e=(new Date).getTime(),t=Date.parse(this.time);t<e&&(window.alert("截止日期不能早于当前日期"),this.time="")}},methods:{Format:function(t,e){console.log(t);var s={"M+":t.getMonth()+1,"D+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var i in s)new RegExp("("+i+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?s[i]:("00"+s[i]).substr((""+s[i]).length)));return e},emptyInput:function(t){t.target.value=""},checkBlank:function(t){""===t.target.value.trim()&&(window.alert("标题不能为空"),t.target.focus())},showTypes:function(){document.getElementsByClassName("question-type")[0].style.display="flex"},addQuestion:function(t){0===t?this.quesList.push({title:"单选题",type:t,must:!0,options:[{text:"选项一",num:0},{text:"选项二",num:0}],picked:""}):1===t?this.quesList.push({title:"多选题",type:t,must:!0,options:[{text:"选项一",num:0},{text:"选项二",num:0},{text:"选项三",num:0},{text:"选项四",num:0}],picked:[]}):2===t&&this.quesList.push({title:"文本题",type:t,must:!1,options:[{text:"在这里写答案",num:0}],picked:""})},saveQues:function(){return this.quesList.length<1?(window.alert("问卷不能为空，至少含有一个问题！"),void(this.maskShow=!1)):this.time?(this.questionnaire.time=this.time,void("/new"===this.$route.path?(this.$store.dispatch("addQuestionnaire",this.questionnaire),window.alert("问卷添加成功！")):(this.$store.dispatch("saveQuestionnaire",this.questionnaire),window.alert("问卷保存成功！")))):void window.alert("请选择日期")},publishQuestionnair:function(){if(this.quesList.length<1)return void window.alert("问卷不能为空，至少含有一个问题！");if(!this.time)return window.alert("请选择日期"),void(this.maskShow=!1);this.questionnaire.time=this.time;for(var t in this.$store.state.questionnaireList)if(this.$store.state.questionnaireList[t].id===this.questionnaire.id)return this.questionnaire.status="发布中",this.$store.dispatch("saveQuestionnaire",this.questionnaire),this.maskShow=!1,void window.alert("问卷发布成功");this.questionnaire.status="发布中",this.$store.dispatch("addQuestionnaire",this.questionnaire),window.alert("问卷发布成功"),this.$router.push("/list")}}}},146:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{prev:!1,next:!0,cur:1}},props:["indexCount"],computed:{indexs:function(){var t=[],e=1,s=void 0,i=this.indexCount,n=this.cur;i>5?n>3&&n<i-2?(e=n-2,s=n-2):n>3?(e=i-4,s=i):(e=1,s=5):(e=1,s=i);for(var o=e,u=0;o<=s;o++,u++)t[u]=o;return t}},ready:function(){},attached:function(){},methods:{changePage:function(t){"minus"===t?this.cur=this.cur>1?this.cur-1:1:"plus"===t?this.cur=this.cur<this.indexCount?this.cur+1:this.indexCount:this.cur=t,this.$emit("change-page",this.cur-1)}},components:{}}},147:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Question",data:function(){return{mousein:!1,showDeleteOption:[],numArr:["一","二","三","四","五","六","七","八","九","十"]}},props:["quesList","quesIndex","ques"],methods:{up:function(){if(this.quesIndex>0){var t=this.quesList.splice(this.quesIndex-1,1,this.quesList[this.quesIndex])[0];this.quesList.splice(this.quesIndex,1,t)}},down:function(){if(console.log(this.quesIndex),this.quesIndex<this.quesList.length-1){var t=this.quesList.splice(this.quesIndex+1,1,this.quesList[this.quesIndex])[0];this.quesList.splice(this.quesIndex,1,t)}},copy:function(){for(var t,e=this.quesList[this.quesIndex].options,s=[],i=0,n=e.length;i<n;i++)t={},t.text=e[i].text,t.num=0,s[i]=t;this.quesList.splice(this.quesIndex+1,0,{title:this.quesList[this.quesIndex].title,type:this.quesList[this.quesIndex].type,must:this.quesList[this.quesIndex].must,options:s})},del:function(){this.quesList.splice(this.quesIndex,1)},addOption:function(){var t=this.quesList[this.quesIndex].options;t.length<10&&t.push({text:"选项"+this.numArr[t.length],num:0})},deleteOption:function(t){var e=this;this.quesList[this.quesIndex].options.splice(t,1),this.quesList[this.quesIndex].options.forEach(function(t,s){t.text.indexOf("选项")!==-1&&(e.quesList[e.quesIndex].options[s].text="选项"+e.numArr[s])})},checkBlank:function(t){""===t.target.value.trim()&&(window.alert("不能为空"),t.target.focus())}}}},384:function(t,e){},385:function(t,e){},386:function(t,e){},387:function(t,e){},388:function(t,e){},389:function(t,e){},390:function(t,e){},391:function(t,e){},392:function(t,e){},394:function(t,e,s){var i,n;s(391),s(390),i=s(140);var o=s(407);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=i},395:function(t,e,s){var i,n;s(387),i=s(141);var o=s(404);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=i},396:function(t,e,s){var i,n;s(386),i=s(142);var o=s(403);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=i},397:function(t,e,s){var i,n;s(389),i=s(144);var o=s(406);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=i},398:function(t,e,s){var i,n;s(388),i=s(145);var o=s(405);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=i},399:function(t,e,s){var i,n;s(385),i=s(146);var o=s(402);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=i},400:function(t,e,s){var i,n;s(384),i=s(147);var o=s(401);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=i},401:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("li",{staticClass:"question",on:{mouseover:function(e){t.mousein=!0},mouseout:function(e){t.mousein=!1}}},[t._v("\n    Q"+t._s(t.quesIndex+1)+"\n    "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.ques.title,expression:"ques.title"}],attrs:{type:"text"},domProps:{value:t._s(t.ques.title)},on:{blur:t.checkBlank,input:function(e){e.target.composing||(t.ques.title=e.target.value)}}}),t._v(" "),t._l(t.ques.options,function(s,i){return 0==t.ques.type||1==t.ques.type?e("div",{staticClass:"question-choice-group",on:{mouseover:function(e){t.showDeleteOption[i]=!0},mouseout:function(e){t.showDeleteOption[i]=!1}}},[0==t.ques.type?e("input",{attrs:{type:"radio",name:"question-"+(t.quesIndex+1)}}):e("input",{attrs:{type:"checkbox",name:"question-"+(t.quesIndex+1)}}),t._v(" "),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.text,expression:"option.text"}],attrs:{type:"text"},domProps:{value:t._s(s.text)},on:{blur:t.checkBlank,input:function(t){t.target.composing||(s.text=t.target.value)}}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.showDeleteOption[i],expression:"showDeleteOption[index]"}],staticClass:"delete-option",on:{click:function(e){t.deleteOption(i)}}},[t._v("X")])]):t._e()}),t._v(" "),2==t.ques.type?e("div",[e("label",{staticClass:"required-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.ques.must,expression:"ques.must"}],attrs:{type:"checkbox",name:"question-"+(t.quesIndex+1)},domProps:{checked:Array.isArray(t.ques.must)?t._i(t.ques.must,null)>-1:t._q(t.ques.must,!0)},on:{change:function(e){var s=t.ques.must,i=e.target,n=!!i.checked;if(Array.isArray(s)){var o=null,u=t._i(s,o);n?u<0&&(t.ques.must=s.concat(o)):u>-1&&(t.ques.must=s.slice(0,u).concat(s.slice(u+1)))}else t.ques.must=n}}}),t._v("此题是否必填")]),t._v(" "),e("textarea",[t._v(t._s(t.ques.options[0].text))])]):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.mousein,expression:"mousein"}],staticClass:"question-actions"},[e("span",{directives:[{name:"show",rawName:"v-show",value:0==t.ques.type||1==t.ques.type,expression:"ques.type == 0 || ques.type == 1"}],staticClass:"add-option",on:{click:t.addOption}},[t._v("+")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:2==t.ques.type,expression:"ques.type == 2"}],staticClass:"add-option hide-add-option"}),t._v(" "),e("span",[e("span",{staticClass:"question-action",on:{click:t.up}},[t._v("上移")]),t._v(" "),e("span",{staticClass:"question-action",on:{click:t.down}},[t._v("下移")]),t._v(" "),e("span",{staticClass:"question-action",on:{click:t.copy}},[t._v("复用")]),t._v(" "),e("span",{staticClass:"question-action",on:{click:t.del}},[t._v("删除")])])])],!0)},staticRenderFns:[]}},402:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{},[e("ul",{staticClass:"page-wrapper"},[e("li",{staticClass:"page-item"},[e("a",{class:{active:1===t.cur},attrs:{href:"#"},on:{click:function(e){t.changePage("minus")}}},[t._v("上一页")])]),t._v(" "),t.cur>3?e("li",{staticClass:"page-item"},[e("a",{class:{active:1===t.cur},attrs:{href:"#"},on:{click:function(e){t.changePage(1)}}},[t._v("1")])]):t._e(),t._v(" "),t.cur>3?e("li",{staticClass:"page-item"},[e("a",{attrs:{href:""}},[t._v("...")])]):t._e(),t._v(" "),t._l(t.indexs,function(s){return e("li",{staticClass:"page-item"},[e("a",{class:{active:t.cur===s},attrs:{href:"#"},on:{click:function(e){t.changePage(s)}}},[t._v(t._s(s))])])}),t._v(" "),t.cur<t.indexCount-1?e("li",{staticClass:"page-item"},[e("a",{attrs:{href:"#"}},[t._v("...")])]):t._e(),t._v(" "),t.cur<t.indexCount-1?e("li",{staticClass:"page-item"},[e("a",{class:{active:t.cur===t.indexCount},attrs:{href:"#"},on:{click:function(e){t.changePage(t.indexCount)}}},[t._v(t._s(t.indexCount))])]):t._e(),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{class:{active:t.cur===t.indexCount},attrs:{href:"#"},on:{click:function(e){t.changePage("plus")}}},[t._v("下一页")])])],!0)])},staticRenderFns:[]}},403:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return 0!==t.questionnaireList.length?e("div",{staticClass:"list-wrapper"},[e("table",[e("thead",[e("tr",[e("th",{staticClass:"checkbox-td"}),t._v(" "),e("th",{staticClass:"td-title"},[t._v("标题")]),t._v(" "),e("th",{staticClass:"td-time"},[t._v("时间")]),t._v(" "),e("th",{staticClass:"td-status"},[t._v("状态")]),t._v(" "),e("th",{staticClass:"td-operators"},[t._v("\n                    操作\n                    "),e("router-link",{staticClass:"new-questionnaire-btn link",attrs:{to:"/new"}},[t._v("+ 新建问卷")])])])]),t._v(" "),e("tbody",[t._l(t.questionnaireList,function(s,i){return e("tr",[e("td",{staticClass:"checkbox-td"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedList,expression:"checkedList"},{name:"show",rawName:"v-show",value:"未发布"===s.status,expression:"item.status === '未发布' ? true : false"}],attrs:{type:"checkbox"},domProps:{value:s.id,checked:Array.isArray(t.checkedList)?t._i(t.checkedList,s.id)>-1:t._q(t.checkedList,!0)},on:{click:function(e){t.checkOne(s.id)},change:function(e){var i=t.checkedList,n=e.target,o=!!n.checked;if(Array.isArray(i)){var u=s.id,a=t._i(i,u);o?a<0&&(t.checkedList=i.concat(u)):a>-1&&(t.checkedList=i.slice(0,a).concat(i.slice(a+1)))}else t.checkedList=o}}})]),t._v(" "),e("td",{staticClass:"td-title"},[t._v(t._s(s.title))]),t._v(" "),e("td",{staticClass:"td-time"},[t._v(t._s(s.time))]),t._v(" "),e("td",{staticClass:"td-status",class:{inpublish:"发布中"===s.status,finished:"已结束"===s.status}},[t._v(t._s(s.status))]),t._v(" "),e("td",{staticClass:"td-operators"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:"未发布"===s.status,expression:"item.status === '未发布'"}],staticClass:"operators-btn",attrs:{to:{name:"edit",params:{id:s.id}}}},[t._v("编辑")]),t._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:"未发布"===s.status,expression:"item.status === '未发布'"}],staticClass:"operators-btn",on:{click:function(e){t.deleteShowMask(s)}}},[t._v("删除")]),t._v(" "),e("router-link",{staticClass:"operators-btn",attrs:{to:{name:"view",params:{id:s.id}}}},[t._v("查看问卷")]),t._v(" "),e("router-link",{directives:[{name:"show",rawName:"v-show",value:"未发布"!==s.status,expression:"item.status !== '未发布'"}],staticClass:"operators-btn",attrs:{to:{name:"check",params:{id:s.id}}}},[t._v("查看数据")])])])}),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkboxAll,expression:"checkboxAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checkboxAll)?t._i(t.checkboxAll,null)>-1:t._q(t.checkboxAll,!0)},on:{click:t.checkAll,change:function(e){var s=t.checkboxAll,i=e.target,n=!!i.checked;if(Array.isArray(s)){var o=null,u=t._i(s,o);n?u<0&&(t.checkboxAll=s.concat(o)):u>-1&&(t.checkboxAll=s.slice(0,u).concat(s.slice(u+1)))}else t.checkboxAll=n}}}),t._v("全选\n                    "),e("button",{staticClass:"deletechecked",on:{click:t.deleteChecked}},[t._v("删除")])])])],!0)]),t._v(" "),e("Pagination",{attrs:{indexCount:t.indexCount},on:{"change-page":t.changePage}}),t._v(" "),t.maskShow?e("MaskLayer",{attrs:{message:"确定删除问卷？"},on:{"confirm-event":function(e){t.deleteQuestionnaire(t.delQuestionnaire)},"hide-event":function(e){t.maskShow=!1}}}):t._e()]):e("div",[e("router-link",{staticClass:"newnaire-btn",attrs:{to:"/new"}},[t._v("+ 新建问卷")])])},staticRenderFns:[]}},404:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"new-content"},[e("div",{staticClass:"questionnaire-header"},[e("h1",{staticClass:"questionnaire-title"},[t._v(t._s(t.questionnaire.title))])]),t._v(" "),e("div",{staticClass:"questionnaire-body"},[e("ul",t._l(t.quesList,function(s,i){return e("li",{staticClass:"question-box",on:{mouseover:function(e){t.mousein=!0},mouseout:function(e){t.mousein=!1}}},[t.isView||0!=s.type&&1!=s.type?t._e():e("div",{staticClass:"question-echarts",attrs:{id:"echarts-"+i}}),t._v(" "),e("p",[t._v("\n                    Q"+t._s(i+1)+"  "+t._s(s.title)+"\n                    "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.must,expression:"item.must"}],staticClass:"required-icon"},[t._v("*")])]),t._v(" "),t._l(s.options,function(n){return 0==s.type||1==s.type?e("div",{staticClass:"question-choice-group"},[t.isView&&0==s.type?e("input",{directives:[{name:"model",rawName:"v-model",value:s.picked,expression:"item.picked"}],attrs:{type:"radio",name:"question-"+(i+1)},domProps:{value:n.text,checked:t._q(s.picked,n.text)},on:{change:function(t){s.picked=n.text}}}):t.isView&&1==s.type?e("input",{directives:[{name:"model",rawName:"v-model",value:s.picked,expression:"item.picked"}],attrs:{type:"checkbox",name:"question-"+(i+1)},domProps:{value:n.text,checked:Array.isArray(s.picked)?t._i(s.picked,n.text)>-1:t._q(s.picked,!0)},on:{change:function(e){var i=s.picked,o=e.target,u=!!o.checked;if(Array.isArray(i)){var a=n.text,c=t._i(i,a);u?c<0&&(s.picked=i.concat(a)):c>-1&&(s.picked=i.slice(0,c).concat(i.slice(c+1)))}else s.picked=u}}}):t._e(),t._v(" "),t._v("\n                    "+t._s(n.text)+"\n                ")]):t._e()}),t._v(" "),2==s.type?e("textarea",{directives:[{name:"model",rawName:"v-model",value:s.picked,expression:"item.picked"}],domProps:{value:t._s(s.picked)},on:{input:function(t){t.target.composing||(s.picked=t.target.value)}}}):t._e()],!0)}))]),t._v(" "),e("div",{staticClass:"questionnaire-footer"},[t.isView?e("button",{staticClass:"ques-btn",on:{click:t.submitQuestionnaire}},[t._v("提交问卷")]):e("router-link",{staticClass:"ques-btn",attrs:{to:"/list"}},[t._v("返回")]),t._v(" ")])])},staticRenderFns:[]}},405:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"new-content"},[e("div",{staticClass:"questionnaire-header"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.questionnaire.title,expression:"questionnaire.title"}],attrs:{id:"questionnaireTitle"},domProps:{value:t._s(t.questionnaire.title)},on:{click:t.emptyInput,blur:t.checkBlank,input:function(e){e.target.composing||(t.questionnaire.title=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"questionnaire-body"},[e("ul",{staticClass:"questionnaire-question"},t._l(t.quesList,function(s,i){return e("Question",{attrs:{ques:s,quesIndex:i,quesList:t.quesList}})})),t._v(" "),e("div",{staticClass:"questionnaire-add-question"},[e("div",{staticClass:"question-type"},[e("button",{staticClass:"type-btn",on:{click:function(e){t.addQuestion(0)}}},[t._v("单选")]),t._v(" "),e("button",{staticClass:"type-btn",on:{click:function(e){t.addQuestion(1)}}},[t._v("多选")]),t._v(" "),e("button",{staticClass:"type-btn",on:{click:function(e){t.addQuestion(2)}}},[t._v("文本题")])]),t._v(" "),e("div",{staticClass:"add-btn",on:{click:t.showTypes}},[t._v("\n                + 添加问题\n            ")])])]),t._v(" "),e("div",{staticClass:"questionnaire-footer"},[e("span",[t._v("问卷截止日期:"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],attrs:{type:"date"},domProps:{value:t._s(t.time)},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}})]),t._v(" "),e("button",{staticClass:"questionnaire-btn",on:{click:t.saveQues}},[t._v("保存问卷")]),t._v(" "),e("button",{staticClass:"questionnaire-btn publish-btn",on:{click:function(e){t.maskShow=!0}}},[t._v("发布问卷")])]),t._v(" "),t.maskShow?e("MaskLayer",{attrs:{message:"是否发布问卷？"},on:{"confirm-event":t.publishQuestionnair,"hide-event":function(e){t.maskShow=!1}}}):t._e()])},staticRenderFns:[]}},406:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("nav",{staticClass:"nav-navbar"},[e("router-link",{staticClass:"nav-name",attrs:{to:"/list"}},[t._v("问卷管理")]),t._v(" "),e("span",{staticClass:"nav-user"},[t._v(t._s(t.user.name))])])},staticRenderFns:[]}},407:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",[e("navbar"),t._v(" "),e("div",{staticClass:"content"},[e("router-view")])])},staticRenderFns:[]}},408:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"mask"},[e("div",{staticClass:"mask-panel"},[e("div",{staticClass:"mask-panel-header"},[e("span",{staticClass:"mask-panel-close-btn",on:{click:t.hide}},[t._v("X")]),t._v(" "),e("h2",[t._v("提示")])]),t._v(" "),e("div",{staticClass:"mask-panel-body"},[t._v("\n                "+t._s(t.message)+"\n            ")]),t._v(" "),e("div",{staticClass:"mask-panel-footer"},[e("button",{staticClass:"mask-panel-btn cancel-btn",on:{click:function(e){t.$emit("hide-event")}}},[t._v("取消")]),t._v(" "),e("button",{staticClass:"mask-panel-btn confirm-btn",on:{click:function(e){t.$emit("confirm-event")}}},[t._v("确定")])])])])])},staticRenderFns:[]}}});
//# sourceMappingURL=app.87081896a1a26c293957.js.map