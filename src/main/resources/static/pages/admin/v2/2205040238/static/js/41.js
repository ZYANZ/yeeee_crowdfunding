webpackJsonp([41],{"7xyf":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={mixins:[a("u7jc").a],data:function(){return{module:"/act/task/",gridOptions:{isQuery:!1},dataForm:{}}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-taskAll"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.listData()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"任务名称",clearable:""},model:{value:e.dataForm.taskName,callback:function(t){e.$set(e.dataForm,"taskName",t)},expression:"dataForm.taskName"}})],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"办理人",clearable:""},model:{value:e.dataForm.taskAssignee,callback:function(t){e.$set(e.dataForm,"taskAssignee",t)},expression:"dataForm.taskAssignee"}})],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"业务KEY",clearable:""},model:{value:e.dataForm.busKey,callback:function(t){e.$set(e.dataForm,"busKey",t)},expression:"dataForm.busKey"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.listData()}}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.delHandle()}}},[e._v("删除")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:"",stripe:"","max-height":e.tableHeight},on:{"selection-change":e.selectionChangeHandle,"sort-change":e.sortChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"任务ID","header-align":"center",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"任务名称","header-align":"center",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"processInstanceId",label:"流程实例ID","header-align":"center",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"processDefinitionId",label:"流程定义ID","header-align":"center",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"assignee",label:"办理人","header-align":"center",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"任务创建时间","header-align":"center",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right","header-align":"center",align:"center",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-delete",title:"删除"},on:{click:function(a){e.delHandle(t.row.id)}}})]}}])})],1),e._v(" "),this.gridOptions.isPage?a("el-pagination",{attrs:{"current-page":e.pageNo,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}):e._e()],1)},staticRenderFns:[]},r=a("VU/8")(l,n,!1,null,null,null);t.default=r.exports}});