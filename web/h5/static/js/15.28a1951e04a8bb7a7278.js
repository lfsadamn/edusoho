webpackJsonp([15],{Eyux:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("eqfM");var i=s("/QYm"),n=s("Dd8w"),r=s.n(n),c=s("gyMJ"),a=s("NYxO"),o={name:"exercise-intro",mixins:[s("BX2S").a],data:function(){return{courseId:null,taskId:null,exercise:null}},computed:r()({hasResult:function(){return!!this.exercise.latestExerciseResult}},Object(a.mapState)({isLoading:function(e){return e.isLoading},user:function(e){return e.user}})),created:function(){this.getInfo()},beforeRouteEnter:function(e,t,s){document.getElementById("app").style.background="#f6f6f6",s()},beforeRouteLeave:function(e,t,s){document.getElementById("app").style.background="",s()},methods:r()({},Object(a.mapActions)("course",["handExercisedo"]),{getInfo:function(){var t=this;this.courseId=this.$route.query.courseId,this.taskId=this.$route.query.taskId,c.a.getExerciseIntro({query:{courseId:this.courseId,taskId:this.taskId}}).then(function(e){t.exercise=e.exercise,t.interruption()})},interruption:function(){var s=this;this.canDoing(this.exercise.latestExerciseResult,this.user.id).then(function(){s.startExercise()}).catch(function(e){var t=e.answer;s.submitExercise(t)})},showResult:function(){this.$router.push({name:"exerciseResult",query:{exerciseId:this.exercise.id,exerciseResultId:this.exercise.latestExerciseResult.id,courseId:this.courseId,taskId:this.taskId}})},startExercise:function(){this.$router.push({name:"exerciseDo",query:{targetId:this.taskId,exerciseId:this.exercise.id,courseId:this.courseId},params:{KeepDoing:!0}})},submitExercise:function(e){var t=this,s={answer:e,exerciseId:this.exercise.id,userId:this.user.id,exerciseResultId:this.exercise.latestExerciseResult.id};this.handExercisedo(s).then(function(e){t.showResult()}).catch(function(e){i.a.fail(e.message)})}})},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isLoading?s("e-loading"):t._e(),t._v(" "),t.exercise?s("div",{staticClass:"intro-body"},[s("van-panel",{staticClass:"panel intro-panel",attrs:{title:"练习名称"}},[s("div",{staticClass:"intro-panel__content intro-panel__content--title"},[t._v(t._s(t.exercise.name))])]),t._v(" "),s("van-panel",{staticClass:"panel intro-panel",attrs:{title:"题目数量"}},[s("div",{staticClass:"intro-panel__content"},[t._v("\n              共计 "+t._s(t.exercise.itemCount)+" 题\n          ")])])],1):t._e(),t._v(" "),t.exercise?s("div",{staticClass:"intro-footer"},[t.hasResult?s("van-button",{staticClass:"intro-footer__btn",attrs:{type:"primary"},on:{click:t.showResult}},[t._v("查看结果")]):s("van-button",{staticClass:"intro-footer__btn",attrs:{type:"primary"},on:{click:function(e){t.startExercise()}}},[t._v("开始答题")])],1):t._e()],1)},staticRenderFns:[]};var d=s("VU/8")(o,u,!1,function(e){s("hEhs")},null,null);t.default=d.exports},hEhs:function(e,t){}});