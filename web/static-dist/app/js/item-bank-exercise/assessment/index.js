!function(l){function e(e){for(var t,n,s=e[0],r=e[1],a=e[2],o=0,i=[];o<s.length;o++)n=s[o],Object.prototype.hasOwnProperty.call(u,n)&&u[n]&&i.push(u[n][0]),u[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(l[t]=r[t]);for(f&&f(e);i.length;)i.shift()();return d.push.apply(d,a||[]),c()}function c(){for(var e,t=0;t<d.length;t++){for(var n=d[t],s=!0,r=1;r<n.length;r++){var a=n[r];0!==u[a]&&(s=!1)}s&&(d.splice(t--,1),e=o(o.s=n[0]))}return e}var n={},u={178:0},d=[];function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=l,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],s=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var f=s;d.push([605,0]),c()}({605:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),a=n(1),o=n.n(a);new(n(139).a)($(".js-assessment-container")),new(function(){function e(){r()(this,e),this.element=$(".js-all-container"),this.init()}return o()(e,[{key:"init",value:function(){var t=this;this.element.on("click",".js-batch-delete",function(e){return t.batchDelete(e)}),this.element.on("click",".js-delete-single",function(e){return t.deleteSingle(e)}),this.initChange()}},{key:"batchDelete",value:function(e){var t,n=$(e.currentTarget);0<this.element.find('[data-role="batch-item"]:checked').length&&(t=[],this.element.find('[data-role="batch-item"]:checked').each(function(){t.push(this.value)}),cd.confirm({title:Translator.trans("item_bank_exercise.assessment_module.assessment_delete.title"),content:Translator.trans("item_bank_exercise.assessment_module.assessment_delete"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",function(){$.post(n.data("url"),{ids:t},function(e){e?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),location.reload()):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})}).error(function(e){cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})})}))}},{key:"deleteSingle",value:function(e){var t=$(e.currentTarget);cd.confirm({title:Translator.trans("item_bank_exercise.assessment_module.assessment_delete.title"),content:Translator.trans("item_bank_exercise.assessment_module.assessment_delete"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",function(){$.post(t.data("url"),function(e){e?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),location.reload()):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})}).error(function(e){cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})})})}},{key:"initChange",value:function(){cd.onoff({el:"#switch"}).on("change",function(t){$.get($("#canOpen").val(),function(e){e?$.post($("#switch").data("url"),{assessmentEnable:t},function(){location.reload()}):(cd.message({type:"danger",message:Translator.trans("item_bank_exercise.module.switch.danger")}),setTimeout(function(){window.location.reload()},1e3))})})}}]),e}())}});