webpackJsonp([35],{snjo:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Xxa5"),i=s.n(a),r=s("exGp"),n=s.n(r),u=s("Dd8w"),l=s.n(u),c=s("gyMJ"),o=s("NYxO"),d=s("Du/2"),m=s("y1zP"),v=s("xPBg"),_={name:"testpaperResult",data:function(){return{isReadOver:!1,resultId:null,again:0,result:{},calHeight:null,subjectList:{},question_type_seq:[],targetId:null,doTimes:null,redoInterval:null,remainTime:null,timeMeter:null,testpaperTitle:null,obj:{single_choice:"单选题",choice:"多选题",essay:"问答题",uncertain_choice:"不定项选择题",determine:"判断题",fill:"填空题",material:"材料题"},color:{right:"green",none:"brown",wrong:"orange",partRight:"orange",noAnswer:"gray"}}},mixins:[m.a],computed:l()({},Object(o.mapState)({isLoading:function(t){return t.isLoading},user:function(t){return t.user}}),{usedTime:function(){var t=parseInt(this.result.usedTime)||0;return t<=60?1:Math.round(t/60)}}),watch:{doTimes:function(){this.calSubjectHeight()}},created:function(){this.getTestpaperResult()},beforeRouteEnter:function(t,e,s){document.getElementById("app").style.background="#f6f6f6",s()},beforeRouteLeave:function(t,e,s){document.getElementById("app").style.background="",s()},beforeDestroy:function(){this.clearTime()},methods:l()({},Object(o.mapMutations)({setNavbarTitle:d.k}),Object(o.mapActions)("course",["handExamdo"]),{getTestpaperResult:function(){var a=this;return n()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.testpaperResult({query:{resultId:a.$route.query.resultId}}).then(function(t){a.result=t.testpaperResult,a.question_type_seq=t.testpaper.metas.question_type_seq,a.isReadOver="finished"===a.result.status,a.getSubjectList(t.items),a.calSubjectHeight(),a.canDoing(a.result,a.user.id).then(function(){a.startTestpaper("KeepDoing")}).catch(function(t){var e=t.answer,s=t.endTime;a.submitExam(e,s)})});case 2:a.getInfo();case 3:case"end":return t.stop()}},t,a)}))()},judgeTime:function(){var t=this,e=this.redoInterval,s=0;if(0!=e){var a=60*parseInt(e)*1e3,i=(new Date).getTime(),r=1e3*parseInt(this.result.checkedTime)+a;this.again=r<=i,this.again||(this.timeMeter=setInterval(function(){s=s++,t.remainTime=Object(v.getdateTimeDown)(r,s),""==t.remainTime&&(t.again=!0,t.clearTime())},1e3))}else this.again=!0},getSubjectList:function(t){function e(e){var s=[];t[e].forEach(function(t){"material"===e?t.subs.forEach(function(t){a.getStatus(t,s)}):a.getStatus(t,s)}),a.subjectList[e]=s}var a=this;for(var s in t)e(s)},calSubjectHeight:function(){var s=this;this.$nextTick(function(){var t=s.$refs.data.offsetHeight+s.$refs.tag.offsetHeight+46,e=document.documentElement.clientHeight-t-(s.$refs.footer.offsetHeight||0);s.calHeight=e+"px"})},getStatus:function(t,e){var s={};s.seq=t.seq,t.testResult?s.status=t.testResult.status:s.status="noAnswer",e.push(s)},submitExam:function(t,e){var s=this;e=e||(new Date).getTime();var a={answer:t,resultId:this.result.id,userId:this.user.id,beginTime:Number(this.result.beginTime),endTime:e};this.handExamdo(a).then(function(t){s.$router.replace({name:"testpaperResult",query:{resultId:s.$route.query.resultId,testId:s.$route.query.testId,targetId:s.$route.query.targetId}})}).catch(function(t){Toast.fail(t.message)})},clearTime:function(){clearInterval(this.timeMeter),this.timeMeter=null},startTestpaper:function(){this.$router.replace({name:"testpaperDo",query:{testId:this.result.testId,targetId:this.targetId,title:this.testpaperTitle,action:"redo"},params:{KeepDoing:!0}})},getInfo:function(){var e=this;this.testId=this.$route.query.testId,this.targetId=this.$route.query.targetId,c.a.testpaperIntro({params:{targetId:this.targetId,targetType:"task"},query:{testId:this.testId}}).then(function(t){e.testpaperTitle=t.task.title,e.setNavbarTitle(t.task.title),e.doTimes=Number(t.task.activity.testpaperInfo.doTimes),e.redoInterval=Number(t.task.activity.testpaperInfo.redoInterval),e.judgeTime()})},viewAnalysis:function(){this.$router.push({name:"testpaperAnalysis",query:{resultId:this.$route.query.resultId,title:this.testpaperTitle}})}})},f={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"testResults"},[s.isLoading?a("e-loading"):s._e(),s._v(" "),s.result?a("div",{ref:"data",staticClass:"result-data"},[a("div",{staticClass:"result-data__item"},[s._v("\n      本次得分\n      "),s.isReadOver?a("div",{staticClass:"result-data__bottom data-number-orange data-medium"},[a("span",{staticClass:" data-number"},[s._v(s._s(s.result.score))]),s._v("分\n      ")]):a("div",{staticClass:"result-data__bottom data-text-blue"},[s._v("待批阅")])]),s._v(" "),a("div",{staticClass:"result-data__item"},[s._v("\n      正确率\n      "),s.isReadOver?a("div",{staticClass:"result-data__bottom data-number-green data-medium"},[a("span",{staticClass:" data-number"},[s._v(s._s(s.result.rightRate))]),s._v("%\n      ")]):a("div",{staticClass:"result-data__bottom data-text-blue"},[s._v("待批阅")])]),s._v(" "),a("div",{staticClass:"result-data__item"},[s._v("\n      做题用时\n      "),a("div",{staticClass:"result-data__bottom data-number-gray data-medium"},[a("span",{staticClass:" data-number"},[s._v(s._s(s.usedTime))]),s._v("分钟\n      ")])])]):s._e(),s._v(" "),a("div",{ref:"tag",staticClass:"result-tag"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!s.isReadOver,expression:"!isReadOver"}],staticClass:"result-tag-item clearfix"},[a("div",{staticClass:"result-tag-item__circle circle-brown"}),s._v("\n      待批阅\n    ")])]),s._v(" "),a("div",{staticClass:"result-subject",style:{height:s.calHeight}},[s._l(s.question_type_seq,function(t,e){return a("van-panel",{key:e,staticClass:"result-panel",attrs:{title:s.obj[t]}},[a("ul",{staticClass:"result-list"},s._l(s.subjectList[t],function(t,e){return a("li",{key:e,class:["result-list__item testpaper-number","circle-"+s.color[t.status]]},[s._v(s._s(t.seq)+"\n        ")])}))])}),s._v(" "),a("div",{ref:"footer",staticClass:"result-footer"},[a("van-button",{staticClass:"result-footer__btn",style:{marginRight:s.isReadOver&&!s.doTimes?"2vw":0},attrs:{type:"primary"},on:{click:function(t){s.viewAnalysis()}}},[s._v("\n        查看解析\n      ")]),s._v(" "),s.again&&s.isReadOver&&0==s.doTimes?a("van-button",{staticClass:"result-footer__btn",attrs:{type:"primary"},on:{click:function(t){s.startTestpaper()}}},[s._v("\n        再考一次\n      ")]):s._e(),s._v(" "),!s.again&&s.remainTime&&s.isReadOver&&0==s.doTimes?a("van-button",{staticClass:"result-footer__btn",staticStyle:{"line-height":"21px"},attrs:{type:"primary",disabled:""}},[s._v("\n        在"+s._s(s.remainTime)+"后可以再考一次\n      ")]):s._e()],1)],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"result-tag-item clearfix"},[e("div",{staticClass:"result-tag-item__circle circle-green"}),this._v("\n      正确\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"result-tag-item clearfix"},[e("div",{staticClass:"result-tag-item__circle circle-orange"}),this._v("\n      错误\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"result-tag-item clearfix"},[e("div",{staticClass:"result-tag-item__circle circle-gray"}),this._v("\n      未作答\n    ")])}]},g=s("VU/8")(_,f,!1,null,null,null);e.default=g.exports}});