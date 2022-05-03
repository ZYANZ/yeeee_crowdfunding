webpackJsonp([40],{"/mIH":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Dd8w"),o=r.n(a),s=r("O4Lo"),i={data:function(){var e=this;return{id:null,visible:!1,dataForm:{jobName:"",jobGroup:"default",jobDesc:"",cronExpression:"",triggerDesc:""},dataRule:{jobName:[{required:!0,message:"任务编码不能为空",trigger:"blur"},{validator:function(t,r,a){!e.id&&/[\u4E00-\u9FA5]/.test(r)?a(new Error("不能输入中文汉字")):a()},trigger:"blur"}],jobGroup:[{required:!0,message:"任务组不能为空",trigger:"blur"}],jobDesc:[{required:!0,message:"任务URL不能为空",trigger:"blur"}],cronExpression:[{required:!0,message:"时间表达式不能为空",trigger:"blur"}]}}},methods:{init:function(e,t){var r=this;this.id=null,this.visible=!0,this.$nextTick(function(){r.$refs.dataForm.resetFields(),t&&(r.dataForm.jobGroup=t),e&&(r.id=1,r.dataForm.jobName=e),r.id&&r.getInfo()})},getInfo:function(){var e=this;this.$http.get("/sched/qrtz/info",{params:{jobName:this.dataForm.jobName,jobGroup:this.dataForm.jobGroup}}).then(function(t){var r=t.data;if(0!==r.code)return e.$message.error(r.msg);e.dataForm=o()({},e.dataForm,r.data)}).catch(function(){})},dataFormSubmit:r.n(s)()(function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var r=e.id?"/sched/qrtz/updJob":"/sched/qrtz/addJob";e.$http.post(r,o()({},e.dataForm)).then(function(t){var r=t.data;r&&0===r.code?e.$message({message:"操作成功",type:"success",duration:500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(r.msg)})}})},1e3,{leading:!0,trailing:!1})}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"mod-qrtz-edit",attrs:{title:e.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[r("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{label:"任务编码",prop:"jobName"}},[r("el-input",{attrs:{placeholder:"如: testTask",disabled:e.id>0},model:{value:e.dataForm.jobName,callback:function(t){e.$set(e.dataForm,"jobName",t)},expression:"dataForm.jobName"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{label:"任务组",prop:"jobGroup"}},[r("el-input",{attrs:{placeholder:"任务组"},model:{value:e.dataForm.jobGroup,callback:function(t){e.$set(e.dataForm,"jobGroup",t)},expression:"dataForm.jobGroup"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{label:"任务URL",prop:"jobDesc"}},[r("el-input",{attrs:{placeholder:"任务URL"},model:{value:e.dataForm.jobDesc,callback:function(t){e.$set(e.dataForm,"jobDesc",t)},expression:"dataForm.jobDesc"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{label:"时间表达式",prop:"cronExpression"}},[r("el-input",{attrs:{placeholder:"如: 0 0 12 * * ?"},model:{value:e.dataForm.cronExpression,callback:function(t){e.$set(e.dataForm,"cronExpression",t)},expression:"dataForm.cronExpression"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{label:"备注",prop:"triggerDesc"}},[r("el-input",{attrs:{placeholder:"备注"},model:{value:e.dataForm.triggerDesc,callback:function(t){e.$set(e.dataForm,"triggerDesc",t)},expression:"dataForm.triggerDesc"}})],1)],1)],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},n=r("VU/8")(i,l,!1,null,null,null);t.default=n.exports}});