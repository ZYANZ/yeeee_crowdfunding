webpackJsonp([19],{"1gWN":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("Dd8w"),i=e.n(r),n=e("O4Lo"),o={data:function(){var t=this;return{id:null,pid:null,pnm:null,pcd:null,visible:!1,otherParamsVisible:!1,catListVisible:!1,catList:[],dataForm:{id:"",cd:"",nm:"",pnm:"",pid:null,tid:null,seq:0,busSeq:0,rmks:"",arg1:"",arg2:"",arg3:"",arg4:"",arg5:""},dataFormOrigin:[],dataRule:{cd:[{required:!0,message:"编码不能为空",trigger:"blur"},{validator:function(a,e,r){var i=t.$query.new();t.$query.toW(i,a.field,e,"EQ"),t.$http.get("/sys/cat/hasExist?query="+encodeURIComponent(t.$query.toJsonStr(i))).then(function(i){var n=i.data;0!==n.code&&r(new Error("服务器异常,校验失败")),e!==t.dataFormOrigin[a.field]&&n.data?r(new Error("已被使用")):r()}).catch(function(){r(new Error("校验失败"))})},trigger:"blur"}],nm:[{required:!0,message:"名称不能为空",trigger:"blur"}]}}},methods:{init:function(t){var a=this;this.id=t,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.pid=a.pid,a.dataForm.tid=a.pid,a.dataForm.pnm=a.pnm,a.listCat().then(function(){a.id&&a.getInfo()})})},listCat:function(){var t=this;return this.$http.get("/sys/cat/listItmTreeNode?pid="+this.pid).then(function(a){var e=a.data;if(0!==e.code)return t.$message.error(e.msg);t.catList=e.data.list}).catch(function(){})},getInfo:function(){var t=this;this.$http.get("/sys/cat/info/"+this.id).then(function(a){var e=a.data;if(0!==e.code)return t.$message.error(e.msg);t.dataForm=i()({},t.dataForm,e.data),t.dataFormOrigin=i()({},t.dataFormOrigin,e.data)}).catch(function(){})},catListTreeCurrentChangeHandle:function(t){this.dataForm.pid=t.id,this.dataForm.pnm=t.nm,this.dataForm.cd=t.cd+".",this.catListVisible=!1},catListTreeSetDefaultHandle:function(){this.dataForm.pid=this.pid,this.dataForm.pnm=this.pnm,this.dataForm.cd=this.pcd+"."},dataFormSubmit:e.n(n)()(function(){var t=this;this.$refs.dataForm.validate(function(a){if(a){var e=t.id?"/sys/cat/upd":"/sys/cat/add";t.$http.post(e,i()({},t.dataForm)).then(function(a){var e=a.data;e&&0===e.code?t.$message({message:"操作成功",type:"success",duration:500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(e.msg)})}})},1e3,{leading:!0,trailing:!1})}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-dialog",{staticClass:"mod-catItm-edit",attrs:{title:t.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(a){t.visible=a}}},[e("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"120px"},nativeOn:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.dataFormSubmit()}}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:11}},[e("el-form-item",{staticClass:"cat-list",attrs:{prop:"pid",label:"父级"}},[e("el-popover",{ref:"catListPopover",attrs:{placement:"bottom-start",trigger:"click"},model:{value:t.catListVisible,callback:function(a){t.catListVisible=a},expression:"catListVisible"}},[e("el-tree",{ref:"catListTree",attrs:{data:t.catList,props:{label:"nm",children:"children"},"node-key":"id","highlight-current":!0,"expand-on-click-node":!1,accordion:""},on:{"current-change":t.catListTreeCurrentChangeHandle}})],1),t._v(" "),e("el-input",{directives:[{name:"popover",rawName:"v-popover:catListPopover",arg:"catListPopover"}],attrs:{readonly:!0,placeholder:t.dataForm.pnm},model:{value:t.dataForm.pnm,callback:function(a){t.$set(t.dataForm,"pnm",a)},expression:"dataForm.pnm"}},[t.dataForm.pid?e("i",{staticClass:"el-icon-circle-close el-input__icon",attrs:{slot:"suffix"},on:{click:function(a){a.stopPropagation(),t.catListTreeSetDefaultHandle()}},slot:"suffix"}):t._e()])],1)],1)],1),t._v(" "),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:11}},[e("el-form-item",{attrs:{label:"编码",prop:"cd"}},[e("el-input",{attrs:{placeholder:"编码"},model:{value:t.dataForm.cd,callback:function(a){t.$set(t.dataForm,"cd",a)},expression:"dataForm.cd"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:11}},[e("el-form-item",{attrs:{label:"名称",prop:"nm"}},[e("el-input",{attrs:{placeholder:"名称"},model:{value:t.dataForm.nm,callback:function(a){t.$set(t.dataForm,"nm",a)},expression:"dataForm.nm"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:11}},[e("el-form-item",{attrs:{label:"显示排序",prop:"seq"}},[e("el-input-number",{attrs:{min:1,max:1e5,label:"显示排序"},model:{value:t.dataForm.seq,callback:function(a){t.$set(t.dataForm,"seq",a)},expression:"dataForm.seq"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:11}},[e("el-form-item",{attrs:{label:"业务排序",prop:"busSeq"}},[e("el-input-number",{attrs:{min:1,max:1e5,label:"业务排序"},model:{value:t.dataForm.busSeq,callback:function(a){t.$set(t.dataForm,"busSeq",a)},expression:"dataForm.busSeq"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:11}},[e("el-form-item",{attrs:{label:"备注",prop:"rmks"}},[e("el-input",{attrs:{placeholder:"备注"},model:{value:t.dataForm.rmks,callback:function(a){t.$set(t.dataForm,"rmks",a)},expression:"dataForm.rmks"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:6}},[e("el-form-item",{staticClass:"input-bar",attrs:{label:"更多参数"}},[e("i",{directives:[{name:"show",rawName:"v-show",value:!t.otherParamsVisible,expression:"!otherParamsVisible"}],staticClass:"el-icon-circle-plus-outline",on:{click:function(a){t.otherParamsVisible=!0}}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:t.otherParamsVisible,expression:"otherParamsVisible"}],staticClass:"el-icon-remove-outline",on:{click:function(a){t.otherParamsVisible=!1}}})])],1)],1),t._v(" "),e("el-row",{directives:[{name:"show",rawName:"v-show",value:t.otherParamsVisible,expression:"otherParamsVisible"}],attrs:{gutter:20}},[e("el-col",{attrs:{span:11}},[e("el-form-item",{attrs:{label:"参数1",prop:"arg1"}},[e("el-input",{attrs:{placeholder:"参数1"},model:{value:t.dataForm.arg1,callback:function(a){t.$set(t.dataForm,"arg1",a)},expression:"dataForm.arg1"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:11}},[e("el-form-item",{attrs:{label:"参数2",prop:"arg2"}},[e("el-input",{attrs:{placeholder:"参数2"},model:{value:t.dataForm.arg2,callback:function(a){t.$set(t.dataForm,"arg2",a)},expression:"dataForm.arg2"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:11}},[e("el-form-item",{attrs:{label:"参数3",prop:"arg3"}},[e("el-input",{attrs:{placeholder:"参数3"},model:{value:t.dataForm.arg3,callback:function(a){t.$set(t.dataForm,"arg3",a)},expression:"dataForm.arg3"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:11}},[e("el-form-item",{attrs:{label:"参数4",prop:"arg4"}},[e("el-input",{attrs:{placeholder:"参数4"},model:{value:t.dataForm.arg4,callback:function(a){t.$set(t.dataForm,"arg4",a)},expression:"dataForm.arg4"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:11}},[e("el-form-item",{attrs:{label:"参数5",prop:"arg5"}},[e("el-input",{attrs:{placeholder:"参数5"},model:{value:t.dataForm.arg5,callback:function(a){t.$set(t.dataForm,"arg5",a)},expression:"dataForm.arg5"}})],1)],1)],1)],1),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.visible=!1}}},[t._v("取消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(a){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]};var l=e("VU/8")(o,s,!1,function(t){e("8hdN")},null,null);a.default=l.exports},"8hdN":function(t,a,e){var r=e("NGUZ");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("ffefbcda",r,!0)},NGUZ:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.mod-catItm .cat-list .el-input__inner,\n.mod-catItm .cat-list .el-input__suffix,\n.mod-catItm .icon-list .el-input__inner,\n.mod-catItm .icon-list .el-input__suffix {\n  cursor: pointer;\n}\n.mod-catItm-icon-popover {\n  width: 458px;\n  overflow: hidden;\n}\n.mod-catItm-icon-inner {\n  width: 478px;\n  max-height: 258px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.mod-catItm-icon-list {\n  width: 458px;\n  padding: 0;\n  margin: -8px 0 0 -8px;\n}\n.mod-catItm-icon-list > .el-button {\n    padding: 8px;\n    margin: 8px 0 0 8px;\n}\n.mod-catItm-icon-list > .el-button > span {\n      display: inline-block;\n      vertical-align: middle;\n      width: 18px;\n      height: 18px;\n      font-size: 18px;\n}\n.mod-catItm-edit .input-bar i {\n  padding-top: 6px;\n  font-size: 24px;\n  color: #3a8ee6;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.15s;\n          transition-duration: 0.15s;\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n  -webkit-transition-delay: initial;\n          transition-delay: initial;\n}\n",""])}});