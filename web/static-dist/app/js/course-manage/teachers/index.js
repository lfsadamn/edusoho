!function(u){function e(e){for(var t,a,n=e[0],r=e[1],o=e[2],i=0,s=[];i<n.length;i++)a=n[i],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&s.push(l[a][0]),l[a]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(u[t]=r[t]);for(f&&f(e);s.length;)s.shift()();return p.push.apply(p,o||[]),c()}function c(){for(var e,t=0;t<p.length;t++){for(var a=p[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==l[o]&&(n=!1)}n&&(p.splice(t--,1),e=i(i.s=a[0]))}return e}var a={},l={127:0},p=[];function i(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=u,i.c=a,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var f=n;p.push([566,0]),c()}({112:function(e,t,a){a(113);var n=a(16).Object;e.exports=function(e,t){return n.defineProperties(e,t)}},113:function(e,t,a){var n=a(31);n(n.S+n.F*!a(64),"Object",{defineProperties:a(142)})},114:function(e,t,a){a(115),e.exports=a(16).Object.getOwnPropertyDescriptors},115:function(e,t,a){var n=a(31),u=a(116),c=a(57),l=a(65),p=a(144);n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,a,n=c(e),r=l.f,o=u(n),i={},s=0;o.length>s;)void 0!==(a=r(n,t=o[s++]))&&p(i,t,a);return i}})},116:function(e,t,a){var n=a(129),r=a(108),o=a(47),i=a(38).Reflect;e.exports=i&&i.ownKeys||function(e){var t=n.f(o(e)),a=r.f;return a?t.concat(a(e)):t}},117:function(e,t,a){a(143),e.exports=a(16).Object.getOwnPropertySymbols},24:function(e,t,a){e.exports=a(89)},27:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(){return Math.random().toString().replace(".","")}},29:function(e,t,a){e.exports=a(114)},30:function(e,t,a){e.exports=a(117)},32:function(e,t,a){"use strict";a.d(t,"a",function(){return T});var n=a(2),r=a.n(n),o=a(0),i=a.n(o),s=a(1),u=a.n(s),c=a(7),l=a.n(c),p=a(4),f=a.n(p),h=a(8),d=a.n(h),m=a(3),y=a.n(m),v=a(23),b=a(27);function g(n){return function(){var e,t=f()(n);if(function(){if("undefined"==typeof Reflect||!r.a)return;if(r.a.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(r()(Date,[],function(){})),1}catch(e){return}}()){var a=f()(this).constructor;e=r()(t,arguments,a)}else e=t.apply(this,arguments);return l()(this,e)}}var T=function(e){d()(n,e);var a=g(n);function n(e){var t;return i()(this,n),(t=a.call(this,e)).listId=Object(b.a)(),t.$list=null,t.$item=null,t}return u()(n,[{key:"componentDidMount",value:function(){var t=this,a="#".concat(this.listId);this.$list=$(a),this.context.sortable&&(Object(v.a)({element:a,itemSelector:"li",ajax:!1},function(e){$(a).children().remove(),$(a).append(t.$item),t.context.sortItem(e)}),this.onChange(a))}},{key:"onChange",value:function(e){var t=this;this.$list.on("mousedown","li",function(){t.$item=$(e).children(".list-group-item")})}},{key:"componentWillMount",value:function(){this.$item=$(this.listId).children().clone()}},{key:"render",value:function(){var a=this,e=this.context,t=e.dataSourceUi,n=e.sortable,r=e.inputName,o=e.listClassName,i="";return 0<t.length&&(i="list-group"),y.a.createElement("ul",{id:this.listId,className:"multi-list sortable-list ".concat(i," ").concat(o)},t.map(function(e,t){return y.a.createElement("li",{className:"list-group-item",id:e.itemId,key:t,"data-seq":e.seq},y.a.createElement("i",{className:n?"es-icon es-icon-yidong drag-icon-btn":"hidden"}),y.a.createElement("span",{className:"content"},e.label),y.a.createElement("a",{className:"move-icon-btn link-gray",onClick:function(e){return a.context.removeItem(e)},"data-item-id":e.itemId},y.a.createElement("i",{className:"es-icon es-icon-close01 "})),y.a.createElement("input",{type:"hidden",name:r,value:e.label}))}))}}]),n}(m.Component);T.contextTypes={removeItem:y.a.PropTypes.func,sortItem:y.a.PropTypes.func,sortable:y.a.PropTypes.bool,listClassName:y.a.PropTypes.string,inputName:y.a.PropTypes.string,dataSourceUi:y.a.PropTypes.array.isRequired}},33:function(e,t,a){"use strict";a.d(t,"a",function(){return B});var n=a(2),r=a.n(n),o=a(13),i=a.n(o),s=a(0),u=a.n(s),c=a(1),l=a.n(c),p=a(21),f=a.n(p),h=a(7),d=a.n(h),m=a(4),y=a.n(m),v=a(8),b=a.n(v),g=a(15),T=a.n(g),P=a(3),k=a.n(P),S=a(32),N=a(41);function x(n){return function(){var e,t=y()(n);if(function(){if("undefined"==typeof Reflect||!r.a)return;if(r.a.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(r()(Date,[],function(){})),1}catch(e){return}}()){var a=y()(this).constructor;e=r()(t,arguments,a)}else e=t.apply(this,arguments);return d()(this,e)}}var C=function(e){b()(n,e);var a=x(n);function n(e){var t;return u()(this,n),(t=a.call(this,e)).state={resultful:t.props.resultful},t}return l()(n,[{key:"render",value:function(){var n=this,r=[];return this.props.searchResult.map(function(e,t){var a=k.a.createElement("li",{key:t},k.a.createElement("a",{"data-item":i()(e),onClick:function(e){return n.handleChange(e)},"data-name":e.nickname},e.nickname));r.push(a)}),r.length<=0&&r.push(k.a.createElement("li",{className:"not-find"},k.a.createElement("a",null,Translator.trans("site.data.not_found")))),k.a.createElement("ul",{className:"dropdown-menu options ".concat(this.state.resultful&&"show"," ")},r)}},{key:"handleChange",value:function(e){this.setState({resultful:!1});var t=e.currentTarget.attributes["data-item"].value;this.props.selectChange(e.currentTarget.attributes["data-name"].value,JSON.parse(t))}}]),n}(P.Component),I=a(14),E=a.n(I);function w(n){return function(){var e,t=y()(n);if(function(){if("undefined"==typeof Reflect||!r.a)return;if(r.a.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(r()(Date,[],function(){})),1}catch(e){return}}()){var a=y()(this).constructor;e=r()(t,arguments,a)}else e=t.apply(this,arguments);return d()(this,e)}}var O=function(e){b()(n,e);var a=w(n);function n(e){var t;return u()(this,n),(t=a.call(this,e)).state={itemName:"",searched:!0,resultful:!1,searchResult:[]},t.timer=!1,t.subscribeMessage(),t}return l()(n,[{key:"subscribeMessage",value:function(){var e=this;E.a.subscribe({channel:"courseInfoMultiInput",topic:"addMultiInput",callback:function(){console.log("add"),e.handleAdd()}})}},{key:"selectChange",value:function(e,t){t&&this.context.addItem(e,t),this.setState({itemName:""})}},{key:"onFocus",value:function(){this.setState({searched:!0})}},{key:"handleNameChange",value:function(e){var t=this,a=e.currentTarget.value;this.setState({itemName:a,searchResult:[],resultful:!1}),!this.context.searchable.enable||a.length<0||!this.state.searched||(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){!function(e,t,a,n){var r=2<arguments.length&&void 0!==a?a:null,o=3<arguments.length&&void 0!==n?n:"POST";$.ajax({url:e,type:o,data:r,success:function(e){t&&"function"==typeof t&&t(e)},error:function(){t&&"function"==typeof t&&t([])}})}(t.context.searchable.url+a,function(e){0<t.state.itemName.length&&(console.log({searchResult:e}),t.setState({searchResult:e,resultful:!0}))})},500))}},{key:"handleAdd",value:function(){0<Object(N.d)(this.state.itemName).length&&this.context.addItem(this.state.itemName,this.state.itemData),this.setState({itemName:"",searchResult:[],resultful:!1})}},{key:"render",value:function(){var a=this,e=Translator.trans("site.data.create");return k.a.createElement("div",{className:"input-group"},k.a.createElement("input",{className:"form-control",value:this.state.itemName,onChange:function(e){return a.handleNameChange(e)},onFocus:function(e){return a.onFocus(e)}}),this.context.searchable.enable&&this.state.resultful&&k.a.createElement(C,{searchResult:this.state.searchResult,selectChange:function(e,t){return a.selectChange(e,t)},resultful:this.state.resultful}),this.context.addable&&k.a.createElement("span",{className:"input-group-btn"},k.a.createElement("a",{className:"btn btn-default",onClick:function(){return a.handleAdd()}},e)))}}]),n}(P.Component);O.contextTypes={addItem:k.a.PropTypes.func,addable:k.a.PropTypes.bool,searchable:k.a.PropTypes.shape({enable:k.a.PropTypes.bool,url:k.a.PropTypes.string})};var U=a(27);function D(n){return function(){var e,t=y()(n);if(function(){if("undefined"==typeof Reflect||!r.a)return;if(r.a.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(r()(Date,[],function(){})),1}catch(e){return}}()){var a=y()(this).constructor;e=r()(t,arguments,a)}else e=t.apply(this,arguments);return d()(this,e)}}function j(e,t){var a={itemId:Object(U.a)(),label:t,outputValue:t};e.push(a)}var B=function(e){b()(n,e);var t=D(n);function n(e){var a;return u()(this,n),a=t.call(this,e),T()(f()(a),"removeItem",function(e){var t=e.currentTarget.attributes["data-item-id"].value;!function(e,t){for(var a=0;a<e.length;a++)if(e[a].itemId==t){e.splice(a,1);break}}(a.state.dataSourceUi,t),a.setState({dataSourceUi:a.state.dataSourceUi})}),T()(f()(a),"sortItem",function(e){a.state.dataSourceUi=function(e,t){for(var a=[],n=0;n<e.length;n++)for(var r=0;r<t.length;r++)if(e[n]==t[r].itemId){a.push(t[r]);break}return a}(e,a.state.dataSourceUi),a.setState({dataSourceUi:a.state.dataSourceUi})}),T()(f()(a),"addItem",function(e,t){j(a.state.dataSourceUi,e),a.setState({dataSourceUi:a.state.dataSourceUi})}),a}return l()(n,[{key:"componentWillMount",value:function(){var a=this;this.state={dataSourceUi:[]},this.props.dataSource.map(function(e,t){j(a.state.dataSourceUi,e)}),console.log({"initItem after":this.state.dataSourceUi})}},{key:"getChildContext",value:function(){return{removeItem:this.removeItem,sortItem:this.sortItem,addItem:this.addItem,addable:this.props.addable,searchable:this.props.searchable,sortable:this.props.sortable,listClassName:this.props.listClassName,inputName:this.props.inputName,dataSourceUi:this.state.dataSourceUi}}},{key:"getOutputSets",value:function(){var a=[];return this.state.dataSourceUi.map(function(e,t){a.push(e.outputValue)}),a}},{key:"getList",value:function(){return k.a.createElement(S.a,null)}},{key:"render",value:function(){var e=this.getList(),t=this.getOutputSets();return k.a.createElement("div",{className:"multi-group"},e,this.props.showAddBtnGroup&&k.a.createElement(O,null),k.a.createElement("input",{type:"hidden",name:this.props.outputDataElement,value:i()(t)}))}}]),n}(P.Component);B.propTypes={multiInputClassName:k.a.PropTypes.string,listClassName:k.a.PropTypes.string,dataSource:k.a.PropTypes.array.isRequired,sortable:k.a.PropTypes.bool,addable:k.a.PropTypes.bool,searchable:k.a.PropTypes.shape({enable:k.a.PropTypes.bool,url:k.a.PropTypes.string}),showAddBtnGroup:k.a.PropTypes.bool,inputName:k.a.PropTypes.string,checkBoxName:k.a.PropTypes.string,outputDataElement:k.a.PropTypes.string},B.defaultProps={multiInputClassName:"multi-group",listClassName:"",dataSource:[],sortable:!0,addable:!0,searchable:{enable:!1,url:""},showAddBtnGroup:!0,inputName:"",checkBoxName:"visible_",outputDataElement:"hidden-input"},B.childContextTypes={removeItem:k.a.PropTypes.func,sortItem:k.a.PropTypes.func,addItem:k.a.PropTypes.func,addable:k.a.PropTypes.bool,searchable:k.a.PropTypes.shape({enable:k.a.PropTypes.bool,url:k.a.PropTypes.string}),sortable:k.a.PropTypes.bool,listClassName:k.a.PropTypes.string,inputName:k.a.PropTypes.string,dataSourceUi:k.a.PropTypes.array.isRequired}},45:function(e,t,a){e.exports=a(112)},566:function(e,t,a){"use strict";a.r(t);var n=a(54),r=a.n(n),o=a(3),i=a.n(o),s=a(77);a(23);r.a.render(i.a.createElement(s.a,{addable:!0,dataSource:$("#course-teachers").data("init-value"),outputDataElement:"teachers",inputName:"ids[]",searchable:{enable:!0,url:$("#course-teachers").data("query-url")+"?q="}}),document.getElementById("course-teachers")),$(".js-btn-save").on("click",function(e){"[]"!==$("input[name=teachers]").val()?$("#teachers-form").submit():cd.message({type:"warning",message:Translator.trans("course.manage.min_teacher_num_error_hint")})})},77:function(e,t,a){"use strict";a.d(t,"a",function(){return F});var n=a(48),r=a.n(n),o=a(45),i=a.n(o),s=a(29),u=a.n(s),c=a(24),l=a.n(c),p=a(30),f=a.n(p),h=a(17),d=a.n(h),m=a(2),y=a.n(m),v=a(0),b=a.n(v),g=a(1),T=a.n(g),P=a(21),k=a.n(P),S=a(7),N=a.n(S),x=a(4),C=a.n(x),I=a(8),E=a.n(I),w=a(15),O=a.n(w),U=a(3),D=a.n(U),j=a(33),B=(a(23),a(27),a(32));function R(t,e){var a=d()(t);if(f.a){var n=f()(t);e&&(n=n.filter(function(e){return l()(t,e).enumerable})),a.push.apply(a,n)}return a}function $(n){return function(){var e,t=C()(n);if(function(){if("undefined"==typeof Reflect||!y.a)return;if(y.a.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(y()(Date,[],function(){})),1}catch(e){return}}()){var a=C()(this).constructor;e=y()(t,arguments,a)}else e=t.apply(this,arguments);return N()(this,e)}}var V=function(e){E()(a,e);var t=$(a);function a(e){return b()(this,a),t.call(this,e)}return T()(a,[{key:"render",value:function(){var a=this,e=this.context,t=e.dataSourceUi,n=e.listClassName,r=e.sortable,o=e.showCheckbox,i=e.showDeleteBtn,s=e.checkBoxName,u=e.inputName,c="";return 0<t.length&&(c="list-group"),D.a.createElement("ul",{id:this.listId,className:"multi-list sortable-list ".concat(c," ").concat(n)},t.map(function(e,t){return D.a.createElement("li",{className:"list-group-item",id:e.itemId,key:t,"data-seq":e.seq},r&&D.a.createElement("i",{className:"es-icon es-icon-yidong mrl color-gray inline-block vertical-middle"}),D.a.createElement("img",{className:"avatar-sm avatar-sm-square mrm",src:e.avatar}),D.a.createElement("span",{className:"label-name text-overflow inline-block vertical-middle"},e.nickname),D.a.createElement("label",{className:o?"":"hidden"},D.a.createElement("input",{type:"checkbox",name:s+e.id,checked:e.isVisible,onChange:function(e){return a.context.onChecked(e)},value:e.itemId}),Translator.trans("course.manage.teacher_display_label")),D.a.createElement("a",{className:i?"pull-right link-gray mtm":"hidden",onClick:function(e){return a.context.removeItem(e)},"data-item-id":e.itemId},D.a.createElement("i",{className:"es-icon es-icon-close01 text-12"})),D.a.createElement("input",{type:"hidden",name:u,value:e.id}))}))}}]),a}(B.a);function _(t,e){var a=d()(t);if(f.a){var n=f()(t);e&&(n=n.filter(function(e){return l()(t,e).enumerable})),a.push.apply(a,n)}return a}function M(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_(Object(a),!0).forEach(function(e){O()(t,e,a[e])}):u.a?i()(t,u()(a)):_(Object(a)).forEach(function(e){r()(t,e,l()(a,e))})}return t}function q(n){return function(){var e,t=C()(n);if(function(){if("undefined"==typeof Reflect||!y.a)return;if(y.a.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(y()(Date,[],function(){})),1}catch(e){return}}()){var a=C()(this).constructor;e=y()(t,arguments,a)}else e=t.apply(this,arguments);return N()(this,e)}}function A(e,t,a,n){var r,o={itemId:Math.random(),nickname:t[n.nickname],isVisible:1==t[n.isVisible],avatar:t[n.avatar],seq:a,id:t[n.id],outputValue:(r={},O()(r,n.id,t[n.id]),O()(r,n.isVisible,t[n.isVisible]),r)};e.push(o)}V.contextTypes=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?R(Object(a),!0).forEach(function(e){O()(t,e,a[e])}):u.a?i()(t,u()(a)):R(Object(a)).forEach(function(e){r()(t,e,l()(a,e))})}return t}({},B.a.contextTypes,{showCheckbox:D.a.PropTypes.bool,showDeleteBtn:D.a.PropTypes.bool,checkBoxName:D.a.PropTypes.string,onChecked:D.a.PropTypes.func});var F=function(e){E()(a,e);var t=q(a);function a(e){var o;return b()(this,a),o=t.call(this,e),O()(k()(o),"onChecked",function(e){var a,n,t=e.currentTarget.value;a=o.state.dataSourceUi,n=t,a.map(function(e,t){e.itemId==n&&(a[t].isVisible=!a[t].isVisible,a[t].outputValue.isVisible=a[t].isVisible?1:0)}),o.setState({dataSourceUi:o.state.dataSourceUi})}),O()(k()(o),"addItem",function(e,t){if(t){o.props.replaceItem&&(o.state.dataSourceUi=[]),A(o.state.dataSourceUi,t,o.state.dataSourceUi.length+1,o.props);var a,n,r=(a=o.state.dataSourceUi,n={},a.reduce(function(e,t){return n[t.id]?cd.message({type:"danger",message:Translator.trans("course.manage.teacher.manage.repeat_tip")}):(n[t.id]=!0,e.push(t)),e},[]));o.setState({dataSourceUi:r})}}),o}return T()(a,[{key:"componentWillMount",value:function(){var a=this;this.state={dataSourceUi:[]},this.props.dataSource.map(function(e,t){A(a.state.dataSourceUi,e,t+1,a.props)})}},{key:"getChildContext",value:function(){return{addable:this.props.addable,searchable:this.props.searchable,sortable:this.props.sortable,listClassName:this.props.listClassName,inputName:this.props.inputName,showCheckbox:this.props.showCheckbox,showDeleteBtn:this.props.showDeleteBtn,checkBoxName:this.props.checkBoxName,onChecked:this.onChecked,removeItem:this.removeItem,sortItem:this.sortItem,addItem:this.addItem,dataSourceUi:this.state.dataSourceUi}}},{key:"getList",value:function(){return D.a.createElement(V,null)}}]),a}(j.a);F.propTypes=M({},j.a.propTypes,{id:D.a.PropTypes.string,nickname:D.a.PropTypes.string,avatar:D.a.PropTypes.string,isVisible:D.a.PropTypes.string,replaceItem:D.a.PropTypes.bool,showCheckbox:D.a.PropTypes.bool,showDeleteBtn:D.a.PropTypes.bool}),F.defaultProps=M({},j.a.defaultProps,{id:"id",nickname:"nickname",avatar:"avatar",isVisible:"isVisible",replaceItem:!1,showCheckbox:!0,showDeleteBtn:!0}),F.childContextTypes=M({},j.a.childContextTypes,{showCheckbox:D.a.PropTypes.bool,showDeleteBtn:D.a.PropTypes.bool,checkBoxName:D.a.PropTypes.string,onChecked:D.a.PropTypes.func})},89:function(e,t,a){a(90);var n=a(16).Object;e.exports=function(e,t){return n.getOwnPropertyDescriptor(e,t)}},90:function(e,t,a){var n=a(57),r=a(65).f;a(106)("getOwnPropertyDescriptor",function(){return function(e,t){return r(n(e),t)}})}});