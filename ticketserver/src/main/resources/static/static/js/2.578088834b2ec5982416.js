webpackJsonp([2],{"6mHw":function(t,e){},"7lhF":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-top":"22px"}},[i("el-container",[i("el-main",{staticStyle:{"padding-left":"0px","padding-top":"0px"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.advanceSearchViewVisible,expression:"advanceSearchViewVisible"}],staticClass:"search-box"},[i("el-row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[i("el-col",{attrs:{span:6}},[i("el-input",{staticStyle:{width:"97%"},attrs:{placeholder:"请输入工单编号...","prefix-icon":"el-icon-search"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchTicket(e):null}},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择申报形式"},model:{value:t.ticket.declarationId,callback:function(e){t.$set(t.ticket,"declarationId",e)},expression:"ticket.declarationId"}},t._l(t.declarations,function(t){return i("el-option",{key:t.declaration_id,attrs:{label:t.description,value:t.declaration_id}})}),1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择来源分类"},model:{value:t.ticket.sourceId,callback:function(e){t.$set(t.ticket,"sourceId",e)},expression:"ticket.sourceId"}},t._l(t.sources,function(t){return i("el-option",{key:t.source_id,attrs:{label:t.description,value:t.source_id}})}),1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择服务分类"},model:{value:t.ticket.serverId,callback:function(e){t.$set(t.ticket,"serverId",e)},expression:"ticket.serverId"}},t._l(t.servers,function(t){return i("el-option",{key:t.server_id,attrs:{label:t.description,value:t.server_id}})}),1)],1)],1),t._v(" "),i("el-row",{staticStyle:{"margin-bottom":"0px"}},[i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择影响范围"},model:{value:t.ticket.affectId,callback:function(e){t.$set(t.ticket,"affectId",e)},expression:"ticket.affectId"}},t._l(t.affects,function(t){return i("el-option",{key:t.affect_id,attrs:{label:t.description,value:t.affect_id}})}),1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择优先级"},model:{value:t.ticket.priorityId,callback:function(e){t.$set(t.ticket,"priorityId",e)},expression:"ticket.priorityId"}},t._l(t.priorities,function(t){return i("el-option",{key:t.priority_id,attrs:{label:t.description,value:t.priority_id}})}),1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择工单状态"},model:{value:t.ticket.status,callback:function(e){t.$set(t.ticket,"status",e)},expression:"ticket.status"}},t._l(t.statuses,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-badge",{staticStyle:{width:"97%"}},[i("el-tooltip",{attrs:{effect:"light",content:"查询",placement:"left"}}),t._v(" "),i("el-button",{staticClass:"myButtonQ",attrs:{size:"mini",type:"primary",icon:"el-icon-search"},on:{click:t.searchTicket}},[t._v("查询")]),t._v("\n                      \n              "),i("el-tooltip",{attrs:{effect:"light",content:"刷新",placement:"right"}}),t._v(" "),i("el-button",{staticClass:"myButtonR",attrs:{size:"mini",type:"success",icon:"el-icon-refresh"},on:{click:t.cancelSearch}},[t._v("刷新")])],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"myTable",staticStyle:{"margin-top":"15px"}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{data:t.tickets,border:"",stripe:"",size:"mini","header-cell-style":{background:"#f0f0f0",color:"#68727c"}},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{prop:"logId",fixed:"left",label:"工单编号",width:"140",align:"left","show-overflow-tooltip":"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("router-link",{staticStyle:{color:"#0b6dd8","text-decoration":"none"},attrs:{to:{path:"/tkt/detail",query:{index:e.$index,row:e.row,backroute:"/tkt/all"}}}},[t._v("\n                "+t._s(e.row.logId)+"\n              ")])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"150",label:"工单生成时间",align:"left","show-overflow-tooltip":"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatDateTime")(e.row.createdDate)))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"title",label:"事件标题",width:"150",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"customerName",label:"申报人",width:"120",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"customerId",label:"申报人组织",width:"120",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"mobile",label:"申报人手机",width:"120",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"tel",label:"申报人座机",width:"120",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"email",label:"申报人邮箱",width:"150",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"vipdesc",label:"VIP",width:"120",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"declaration.description",label:"申报形式","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"source.description",label:"来源分类","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"server.description",label:"服务分类","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"questiontype.description",label:"问题分类","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"subclass.description",label:"问题子分类","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"affect.description",label:"影响范围","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"priority.description",label:"优先级","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"emailGroup.description",label:"转发地址","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"hr.name",label:"责任人","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{fixed:"right",prop:"status",label:"工单状态",width:"135",align:"left","show-overflow-tooltip":"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(e.row.status))]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"分配",placement:"top"}}),t._v(" "),"New"==e.row.status?i("el-tag",{attrs:{type:"danger"},nativeOn:{click:function(i){t.showEditTicketView(e.$index,e.row)}}},[i("i",{staticClass:"el-icon-edit-outline"},[t._v(t._s("分配"))])]):t._e()]}}])})],1),t._v(" "),i("div",{staticStyle:{padding:"20px 5px"}},[i("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])],1),t._v(" "),i("el-form",{ref:"assignTicketForm",attrs:{model:t.ticket,rules:t.rules}},[i("div",{staticClass:"myDialog"},[i("el-dialog",{attrs:{title:t.ticketEdit,visible:t.dialogVisible,width:"20%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"mt20"}),t._v(" "),i("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{disabled:!0,placeholder:"请输入新的工单编号..."},model:{value:t.updateLogId,callback:function(e){t.updateLogId=e},expression:"updateLogId"}}),t._v(" "),i("el-form-item",{attrs:{"label-width":"90px",label:"责任人:",prop:"assigneeId"}},[i("el-select",{attrs:{placeholder:"请选择责任人"},on:{change:t.currentSel},model:{value:t.ticket.assigneeId,callback:function(e){t.$set(t.ticket,"assigneeId",e)},expression:"ticket.assigneeId"}},t._l(t.assignees,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),i("div",{staticClass:"mt10"}),t._v(" "),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{staticClass:"myButtonQ",attrs:{type:"primary"},on:{click:t.updateTicketExec}},[t._v("确 定")])],1)],1)],1)])],1)},staticRenderFns:[]};var a=i("VU/8")({components:{},name:"TicketListTable",filters:{statusFilter:function(t){return{New:"danger",Assigned:"warning","In progress":"",Pending:"",Resolved:"info",Closed:"success"}[t]}},data:function(){return{tickets:[],keywords:"",title:"",positionName:"",declarations:[],sources:[],priorities:[],servers:[],affects:[],assignees:[],emailgroups:[],status:"",updateLogId:"",rowindex:"",assignee:"",updateTitleLevel:"",faangledoubleup:"fa-angle-double-up",faangledoubledown:"fa-angle-double-down",ticketEdit:"分配工单",titleLevel:"",updatePosId:-1,totalCount:-1,currentPage:1,pageSize:10,tableLoading:!1,dialogVisible:!1,multipleSelection:[],type:[],statuses:["New","Assigned","In progress","Pending","Closed"],advanceSearchViewVisible:!0,ticket:{logId:"",title:"",createdDate:"",customerName:"",customerId:"",mobile:"",tel:"",email:"",vipdesc:"",status:"",declarationId:"",sourceId:"",serverId:"",affectId:"",priorityId:"",assigneeId:"",groupId:""},hr:{address:"",dept:"",enabled:"",id:"",name:"",phone:"",roles:"",email:"",userface:"",username:""},rules:{declarationId:[{required:!0,message:"必填:申报形式",trigger:"change"}]}}},mounted:function(){this.initData(),this.loadTickets()},methods:{updateTicketExec:function(){var t=this;if(this.isNotNullORBlank(this.updateLogId)){this.tableLoading=!0;var e=this;this.putRequest("/ticket/basic/assign",{logId:this.updateLogId,assigneeId:this.ticket.assigneeId}).then(function(i){if(e.tableLoading=!1,i&&200==i.status){t.dialogVisible=!1;var s=i.data;e.$message({type:s.status,message:s.msg}),t.emptyTicketList(),t.loadTickets(),t.postRequest("/chat/nf",{message:t.updateLogId+" 已被分配给 "+t.assignee,title:t.updateLogId+" 已被分配给 "+t.assignee}).then(function(t){t&&200==t.status&&"success"==t.data.status&&(e.$store.commit("toggleNFDot",!0),e.$store.state.stomp.send("/ws/nf",{},""),e.initSysMsgs(),e.cancelSend())})}})}else this.$message.warning("工单编号不能为空!")},currentSel:function(t){var e;e=this.assignees.find(function(e){return e.id===t}),this.assignee=e.name},cancelSearch:function(){this.advanceSearchViewVisible=!0,this.emptyTicketList(),this.loadTickets()},handleSelectionChange:function(t){this.multipleSelection=t},handleDelete:function(t,e){var i=this,s=this;this.$confirm("删除["+e.name+"], 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){s.doDelete(e.id)}).catch(function(){i.$message({type:"info",message:"已取消删除"})})},doDelete:function(t){var e=this;e.tableLoading=!0,this.deleteRequest("/system/basic/joblevel/"+t).then(function(t){e.tableLoading=!1,t&&200==t.status&&e.loadTableData()})},loadTableData:function(){var t=this;this.tableLoading=!0,this.getRequest("/ticket/tickets").then(function(e){t.tableLoading=!1})},initData:function(){var t=this;this.getRequest("/ticket/basic/lovdata").then(function(e){if(e&&200==e.status){var i=e.data;t.declarations=i.declarations,t.sources=i.sources,t.priorities=i.priorities,t.servers=i.servers,t.questiontypes=i.questiontypes,t.subclasses=i.subclasses,t.affects=i.affects,t.assignees=i.assignees,t.emailgroups=i.emailgroups}})},showEditTicketView:function(t,e){this.rowindex=t,this.updateLogId=e.logId,this.dialogVisible=!0},searchTicket:function(){this.loadTickets()},handleSizeChange:function(t){this.pageSize=t,this.loadTickets()},handleCurrentChange:function(t){this.currentPage=t,this.loadTickets()},loadTickets:function(){var t=this,e=this;this.tableLoading=!0,this.getRequest("/ticket/basic/tkt?page="+this.currentPage+"&size="+this.pageSize+"&keywords="+this.keywords+"&declarationId="+this.ticket.declarationId+"&sourceId="+this.ticket.sourceId+"&serverId="+this.ticket.serverId+"&affectId="+this.ticket.affectId+"&priorityId="+this.ticket.priorityId+"&status="+this.ticket.status+"&assigneeId="+this.ticket.assigneeId+"&groupId="+this.ticket.groupId).then(function(i){if(t.tableLoading=!1,i&&200==i.status){var s=i.data;e.tickets=s.tickets,e.totalCount=s.count}})},emptyTicketList:function(){this.ticket={logId:"",title:"",createdDate:"",customerName:"",customerId:"",mobile:"",tel:"",email:"",vipdesc:"",status:"",declarationId:"",sourceId:"",serverId:"",affectId:"",priorityId:"",assigneeId:"",groupId:"",rowindex:""},this.keywords=""}},computed:{user:function(){return this.$store.state.user},routes:function(){return this.$store.state.routes}}},s,!1,function(t){i("qPzJ")},"data-v-29867789",null);e.default=a.exports},CGYL:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-top":"22px"}},[i("el-container",[i("el-main",{staticStyle:{"padding-left":"0px","padding-top":"0px"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.advanceSearchViewVisible,expression:"advanceSearchViewVisible"}],staticClass:"search-box"},[i("el-row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[i("el-col",{attrs:{span:6}},[i("el-input",{staticStyle:{width:"97%"},attrs:{placeholder:"请输入工单编号...","prefix-icon":"el-icon-search"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchTicket(e):null}},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择申报形式"},model:{value:t.ticket.declarationId,callback:function(e){t.$set(t.ticket,"declarationId",e)},expression:"ticket.declarationId"}},t._l(t.declarations,function(t){return i("el-option",{key:t.declaration_id,attrs:{label:t.description,value:t.declaration_id}})}),1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择来源分类"},model:{value:t.ticket.sourceId,callback:function(e){t.$set(t.ticket,"sourceId",e)},expression:"ticket.sourceId"}},t._l(t.sources,function(t){return i("el-option",{key:t.source_id,attrs:{label:t.description,value:t.source_id}})}),1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择服务分类"},model:{value:t.ticket.serverId,callback:function(e){t.$set(t.ticket,"serverId",e)},expression:"ticket.serverId"}},t._l(t.servers,function(t){return i("el-option",{key:t.server_id,attrs:{label:t.description,value:t.server_id}})}),1)],1)],1),t._v(" "),i("el-row",{staticStyle:{"margin-bottom":"0px"}},[i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择影响范围"},model:{value:t.ticket.affectId,callback:function(e){t.$set(t.ticket,"affectId",e)},expression:"ticket.affectId"}},t._l(t.affects,function(t){return i("el-option",{key:t.affect_id,attrs:{label:t.description,value:t.affect_id}})}),1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择优先级"},model:{value:t.ticket.priorityId,callback:function(e){t.$set(t.ticket,"priorityId",e)},expression:"ticket.priorityId"}},t._l(t.priorities,function(t){return i("el-option",{key:t.priority_id,attrs:{label:t.description,value:t.priority_id}})}),1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择工单状态"},model:{value:t.ticket.status,callback:function(e){t.$set(t.ticket,"status",e)},expression:"ticket.status"}},t._l(t.statuses,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-badge",{staticStyle:{width:"97%"}},[i("el-tooltip",{attrs:{effect:"light",content:"查询",placement:"left"}}),t._v(" "),i("el-button",{staticClass:"myButtonQ",attrs:{size:"mini",type:"primary",icon:"el-icon-search"},on:{click:t.searchTicket}},[t._v("查询")]),t._v("\n                      \n              "),i("el-tooltip",{attrs:{effect:"light",content:"刷新",placement:"right"}}),t._v(" "),i("el-button",{staticClass:"myButtonR",attrs:{size:"mini",type:"success",icon:"el-icon-refresh"},on:{click:t.cancelSearch}},[t._v("刷新")])],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"myTable",staticStyle:{"margin-top":"15px"}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{data:t.tickets,border:"",stripe:"",size:"mini","header-cell-style":{background:"#f0f0f0",color:"#68727c"}},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{prop:"logId",fixed:"left",label:"工单编号",width:"140",align:"left","show-overflow-tooltip":"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("router-link",{staticStyle:{color:"#0b6dd8","text-decoration":"none"},attrs:{to:{path:"/tkt/detail",query:{index:e.$index,row:e.row,backroute:"/tkt/list"}}}},[t._v("\n                "+t._s(e.row.logId)+"\n              ")])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"150",label:"工单生成时间",align:"left","show-overflow-tooltip":"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatDateTime")(e.row.createdDate)))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"title",label:"事件标题",width:"150",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"customerName",label:"申报人",width:"120",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"customerId",label:"申报人组织",width:"120",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"mobile",label:"申报人手机",width:"120",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"tel",label:"申报人座机",width:"120",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"email",label:"申报人邮箱",width:"150",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"vipdesc",label:"VIP",width:"120",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"declaration.description",label:"申报形式","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"source.description",label:"来源分类","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"server.description",label:"服务分类","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"questiontype.description",label:"问题分类","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"subclass.description",label:"问题子分类","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"affect.description",label:"影响范围","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"priority.description",label:"优先级","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"emailGroup.description",label:"转发地址","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"hr.name",label:"责任人","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{fixed:"right",prop:"status",label:"工单状态",width:"135",align:"left","show-overflow-tooltip":"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(e.row.status))]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"分配",placement:"top"}}),t._v(" "),"New"==e.row.status?i("el-tag",{attrs:{type:"danger"},nativeOn:{click:function(i){t.showEditTicketView(e.$index,e.row)}}},[i("i",{staticClass:"el-icon-edit-outline"},[t._v(t._s("分配"))])]):t._e()]}}])})],1),t._v(" "),i("div",{staticStyle:{padding:"20px 5px"}},[i("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])],1),t._v(" "),i("el-form",{ref:"assignTicketForm",attrs:{model:t.ticket,rules:t.rules}},[i("div",{staticClass:"myDialog"},[i("el-dialog",{attrs:{title:t.ticketEdit,visible:t.dialogVisible,width:"20%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"mt20"}),t._v(" "),i("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{disabled:!0,placeholder:"请输入新的工单编号..."},model:{value:t.updateLogId,callback:function(e){t.updateLogId=e},expression:"updateLogId"}}),t._v(" "),i("el-form-item",{attrs:{"label-width":"90px",label:"责任人:",prop:"assigneeId"}},[i("el-select",{attrs:{placeholder:"请选择责任人"},on:{change:t.currentSel},model:{value:t.ticket.assigneeId,callback:function(e){t.$set(t.ticket,"assigneeId",e)},expression:"ticket.assigneeId"}},t._l(t.assignees,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),i("div",{staticClass:"mt10"}),t._v(" "),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{staticClass:"myButtonQ",attrs:{type:"primary"},on:{click:t.updateTicketExec}},[t._v("确 定")])],1)],1)],1)])],1)},staticRenderFns:[]};var a=i("VU/8")({components:{},name:"TicketListTable",filters:{statusFilter:function(t){return{New:"danger",Assigned:"warning","In progress":"",Pending:"",Resolved:"info",Closed:"success"}[t]}},data:function(){return{tickets:[],keywords:"",title:"",positionName:"",declarations:[],sources:[],priorities:[],servers:[],affects:[],assignees:[],emailgroups:[],status:"",updateLogId:"",rowindex:"",assignee:"",updateTitleLevel:"",faangledoubleup:"fa-angle-double-up",faangledoubledown:"fa-angle-double-down",ticketEdit:"分配工单",titleLevel:"",updatePosId:-1,totalCount:-1,currentPage:1,pageSize:10,tableLoading:!1,dialogVisible:!1,multipleSelection:[],type:[],statuses:["New","Assigned","In progress","Pending","Closed"],advanceSearchViewVisible:!0,ticket:{logId:"",title:"",createdDate:"",customerName:"",customerId:"",mobile:"",tel:"",email:"",vipdesc:"",status:"",declarationId:"",sourceId:"",serverId:"",affectId:"",priorityId:"",assigneeId:"",groupId:""},hr:{address:"",dept:"",enabled:"",id:"",name:"",phone:"",roles:"",email:"",userface:"",username:""},rules:{declarationId:[{required:!0,message:"必填:申报形式",trigger:"change"}]}}},mounted:function(){this.initData(),this.loadTickets()},methods:{updateTicketExec:function(){var t=this;if(this.isNotNullORBlank(this.updateLogId)){this.tableLoading=!0;var e=this;this.putRequest("/ticket/basic/assign",{logId:this.updateLogId,assigneeId:this.ticket.assigneeId}).then(function(i){if(e.tableLoading=!1,i&&200==i.status){t.dialogVisible=!1;var s=i.data;e.$message({type:s.status,message:s.msg}),t.emptyTicketList(),t.loadTickets(),t.postRequest("/chat/nf",{message:t.updateLogId+" 已被分配给 "+t.assignee,title:t.updateLogId+" 已被分配给 "+t.assignee}).then(function(t){t&&200==t.status&&"success"==t.data.status&&(e.$store.commit("toggleNFDot",!0),e.$store.state.stomp.send("/ws/nf",{},""),e.initSysMsgs(),e.cancelSend())})}})}else this.$message.warning("工单编号不能为空!")},currentSel:function(t){var e;e=this.assignees.find(function(e){return e.id===t}),this.assignee=e.name},cancelSearch:function(){this.advanceSearchViewVisible=!0,this.emptyTicketList(),this.loadTickets()},handleSelectionChange:function(t){this.multipleSelection=t},handleDelete:function(t,e){var i=this,s=this;this.$confirm("删除["+e.name+"], 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){s.doDelete(e.id)}).catch(function(){i.$message({type:"info",message:"已取消删除"})})},doDelete:function(t){var e=this;e.tableLoading=!0,this.deleteRequest("/system/basic/joblevel/"+t).then(function(t){e.tableLoading=!1,t&&200==t.status&&e.loadTableData()})},loadTableData:function(){var t=this;this.tableLoading=!0,this.getRequest("/ticket/tickets").then(function(e){t.tableLoading=!1})},initData:function(){var t=this;this.getRequest("/ticket/basic/lovdata").then(function(e){if(e&&200==e.status){var i=e.data;t.declarations=i.declarations,t.sources=i.sources,t.priorities=i.priorities,t.servers=i.servers,t.questiontypes=i.questiontypes,t.subclasses=i.subclasses,t.affects=i.affects,t.assignees=i.assignees,t.emailgroups=i.emailgroups}})},showEditTicketView:function(t,e){this.rowindex=t,this.updateLogId=e.logId,this.dialogVisible=!0},searchTicket:function(){this.loadTickets()},handleSizeChange:function(t){this.pageSize=t,this.loadTickets()},handleCurrentChange:function(t){this.currentPage=t,this.loadTickets()},loadTickets:function(){var t=this,e=this;this.tableLoading=!0,this.getRequest("/ticket/basic/tkt?page="+this.currentPage+"&size="+this.pageSize+"&keywords="+this.keywords+"&declarationId="+this.ticket.declarationId+"&sourceId="+this.ticket.sourceId+"&serverId="+this.ticket.serverId+"&affectId="+this.ticket.affectId+"&priorityId="+this.ticket.priorityId+"&status="+this.ticket.status+"&assigneeId="+this.user.id+"&groupId="+this.ticket.groupId).then(function(i){if(t.tableLoading=!1,i&&200==i.status){var s=i.data;e.tickets=s.tickets,e.totalCount=s.count}})},emptyTicketList:function(){this.ticket={logId:"",title:"",createdDate:"",customerName:"",customerId:"",mobile:"",tel:"",email:"",vipdesc:"",status:"",declarationId:"",sourceId:"",serverId:"",affectId:"",priorityId:"",assigneeId:"",groupId:"",rowindex:""},this.keywords=""}},computed:{user:function(){return this.$store.state.user},routes:function(){return this.$store.state.routes}}},s,!1,function(t){i("6mHw")},"data-v-9264f23e",null);e.default=a.exports},Y4LK:function(t,e,i){var s={"./TktAll.vue":"7lhF","./TktDetail.vue":"nFJj","./TktList.vue":"CGYL","./TktNew.vue":"m12F"};function a(t){return i(l(t))}function l(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(s)},a.resolve=l,t.exports=a,a.id="Y4LK"},"de6+":function(t,e){},m12F:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-top":"22px"}},[i("el-container",[i("el-main",{staticStyle:{"padding-left":"0px","padding-top":"0px"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.advanceSearchViewVisible,expression:"advanceSearchViewVisible"}],staticClass:"search-box"},[i("el-row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[i("el-col",{attrs:{span:6}},[i("el-input",{staticStyle:{width:"97%"},attrs:{placeholder:"请输入工单编号...","prefix-icon":"el-icon-search"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchTicket(e):null}},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择申报形式"},model:{value:t.ticket.declarationId,callback:function(e){t.$set(t.ticket,"declarationId",e)},expression:"ticket.declarationId"}},t._l(t.declarations,function(t){return i("el-option",{key:t.declaration_id,attrs:{label:t.description,value:t.declaration_id}})}),1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择来源分类"},model:{value:t.ticket.sourceId,callback:function(e){t.$set(t.ticket,"sourceId",e)},expression:"ticket.sourceId"}},t._l(t.sources,function(t){return i("el-option",{key:t.source_id,attrs:{label:t.description,value:t.source_id}})}),1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择服务分类"},model:{value:t.ticket.serverId,callback:function(e){t.$set(t.ticket,"serverId",e)},expression:"ticket.serverId"}},t._l(t.servers,function(t){return i("el-option",{key:t.server_id,attrs:{label:t.description,value:t.server_id}})}),1)],1)],1),t._v(" "),i("el-row",{staticStyle:{"margin-bottom":"0px"}},[i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择影响范围"},model:{value:t.ticket.affectId,callback:function(e){t.$set(t.ticket,"affectId",e)},expression:"ticket.affectId"}},t._l(t.affects,function(t){return i("el-option",{key:t.affect_id,attrs:{label:t.description,value:t.affect_id}})}),1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择优先级"},model:{value:t.ticket.priorityId,callback:function(e){t.$set(t.ticket,"priorityId",e)},expression:"ticket.priorityId"}},t._l(t.priorities,function(t){return i("el-option",{key:t.priority_id,attrs:{label:t.description,value:t.priority_id}})}),1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-select",{staticStyle:{width:"97%"},attrs:{placeholder:"请选择工单状态"},model:{value:t.ticket.status,callback:function(e){t.$set(t.ticket,"status",e)},expression:"ticket.status"}},t._l(t.statuses,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-badge",{staticStyle:{width:"97%"}},[i("el-tooltip",{attrs:{effect:"light",content:"查询",placement:"left"}}),t._v(" "),i("el-button",{staticClass:"myButtonQ",attrs:{size:"mini",type:"primary",icon:"el-icon-search"},on:{click:t.searchTicket}},[t._v("查询")]),t._v("\n                      \n              "),i("el-tooltip",{attrs:{effect:"light",content:"刷新",placement:"right"}}),t._v(" "),i("el-button",{staticClass:"myButtonR",attrs:{size:"mini",type:"success",icon:"el-icon-refresh"},on:{click:t.cancelSearch}},[t._v("刷新")])],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"myTable",staticStyle:{"margin-top":"15px"}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{data:t.tickets,border:"",stripe:"",size:"mini","header-cell-style":{background:"#f0f0f0",color:"#68727c"}},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{prop:"logId",fixed:"left",label:"工单编号",width:"140",align:"left","show-overflow-tooltip":"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("router-link",{staticStyle:{color:"#0b6dd8","text-decoration":"none"},attrs:{to:{path:"/tkt/detail",query:{index:e.$index,row:e.row,backroute:"/tkt/new"}}}},[t._v("\n                "+t._s(e.row.logId)+"\n              ")])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"150",label:"工单生成时间",align:"left","show-overflow-tooltip":"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatDateTime")(e.row.createdDate)))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"title",label:"事件标题",width:"150",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"customerName",label:"申报人",width:"120",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"customerId",label:"申报人组织",width:"120",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"mobile",label:"申报人手机",width:"120",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"tel",label:"申报人座机",width:"120",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"email",label:"申报人邮箱",width:"150",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{prop:"vipdesc",label:"VIP",width:"120",align:"left","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"declaration.description",label:"申报形式","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"source.description",label:"来源分类","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"server.description",label:"服务分类","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"questiontype.description",label:"问题分类","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"subclass.description",label:"问题子分类","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"affect.description",label:"影响范围","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"priority.description",label:"优先级","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"emailGroup.description",label:"转发地址","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{width:"100",prop:"hr.name",label:"责任人","show-overflow-tooltip":"true"}}),t._v(" "),i("el-table-column",{attrs:{fixed:"right",prop:"status",label:"工单状态",width:"135",align:"left","show-overflow-tooltip":"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(e.row.status))]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"分配",placement:"top"}}),t._v(" "),"New"==e.row.status?i("el-tag",{attrs:{type:"danger"},nativeOn:{click:function(i){t.showEditTicketView(e.$index,e.row)}}},[i("i",{staticClass:"el-icon-edit-outline"},[t._v(t._s("分配"))])]):t._e()]}}])})],1),t._v(" "),i("div",{staticStyle:{padding:"20px 5px"}},[i("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])],1),t._v(" "),i("el-form",{ref:"assignTicketForm",attrs:{model:t.ticket,rules:t.rules}},[i("div",{staticClass:"myDialog"},[i("el-dialog",{attrs:{title:t.ticketEdit,visible:t.dialogVisible,width:"20%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"mt20"}),t._v(" "),i("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{disabled:!0,placeholder:"请输入新的工单编号..."},model:{value:t.updateLogId,callback:function(e){t.updateLogId=e},expression:"updateLogId"}}),t._v(" "),i("el-form-item",{attrs:{"label-width":"90px",label:"责任人:",prop:"assigneeId"}},[i("el-select",{attrs:{placeholder:"请选择责任人"},on:{change:t.currentSel},model:{value:t.ticket.assigneeId,callback:function(e){t.$set(t.ticket,"assigneeId",e)},expression:"ticket.assigneeId"}},t._l(t.assignees,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),i("div",{staticClass:"mt10"}),t._v(" "),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{staticClass:"myButtonQ",attrs:{type:"primary"},on:{click:t.updateTicketExec}},[t._v("确 定")])],1)],1)],1)])],1)},staticRenderFns:[]};var a=i("VU/8")({components:{},name:"TicketListTable",filters:{statusFilter:function(t){return{New:"danger",Assigned:"warning","In progress":"",Pending:"",Resolved:"info",Closed:"success"}[t]}},data:function(){return{tickets:[],keywords:"",title:"",positionName:"",declarations:[],sources:[],priorities:[],servers:[],affects:[],assignees:[],emailgroups:[],status:"",updateLogId:"",rowindex:"",assignee:"",updateTitleLevel:"",faangledoubleup:"fa-angle-double-up",faangledoubledown:"fa-angle-double-down",ticketEdit:"分配工单",titleLevel:"",updatePosId:-1,totalCount:-1,currentPage:1,pageSize:10,tableLoading:!1,dialogVisible:!1,multipleSelection:[],type:[],statuses:["New","Assigned","In progress","Pending","Closed"],advanceSearchViewVisible:!0,ticket:{logId:"",title:"",createdDate:"",customerName:"",customerId:"",mobile:"",tel:"",email:"",vipdesc:"",status:"",declarationId:"",sourceId:"",serverId:"",affectId:"",priorityId:"",assigneeId:"",groupId:""},hr:{address:"",dept:"",enabled:"",id:"",name:"",phone:"",roles:"",email:"",userface:"",username:""},rules:{declarationId:[{required:!0,message:"必填:申报形式",trigger:"change"}]}}},mounted:function(){this.initData(),this.loadTickets()},methods:{updateTicketExec:function(){var t=this;if(this.isNotNullORBlank(this.updateLogId)){this.tableLoading=!0;var e=this;this.putRequest("/ticket/basic/assign",{logId:this.updateLogId,assigneeId:this.ticket.assigneeId}).then(function(i){if(e.tableLoading=!1,i&&200==i.status){t.dialogVisible=!1;var s=i.data;e.$message({type:s.status,message:s.msg}),t.emptyTicketList(),t.loadTickets(),t.postRequest("/chat/nf",{message:t.updateLogId+" 已被分配给 "+t.assignee,title:t.updateLogId+" 已被分配给 "+t.assignee}).then(function(t){t&&200==t.status&&"success"==t.data.status&&(e.$store.commit("toggleNFDot",!0),e.$store.state.stomp.send("/ws/nf",{},""),e.initSysMsgs(),e.cancelSend())})}})}else this.$message.warning("工单编号不能为空!")},currentSel:function(t){var e;e=this.assignees.find(function(e){return e.id===t}),this.assignee=e.name},cancelSearch:function(){this.advanceSearchViewVisible=!0,this.emptyTicketList(),this.loadTickets()},handleSelectionChange:function(t){this.multipleSelection=t},handleDelete:function(t,e){var i=this,s=this;this.$confirm("删除["+e.name+"], 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){s.doDelete(e.id)}).catch(function(){i.$message({type:"info",message:"已取消删除"})})},doDelete:function(t){var e=this;e.tableLoading=!0,this.deleteRequest("/system/basic/joblevel/"+t).then(function(t){e.tableLoading=!1,t&&200==t.status&&e.loadTableData()})},loadTableData:function(){var t=this;this.tableLoading=!0,this.getRequest("/ticket/tickets").then(function(e){t.tableLoading=!1})},initData:function(){var t=this;this.getRequest("/ticket/basic/lovdata").then(function(e){if(e&&200==e.status){var i=e.data;t.declarations=i.declarations,t.sources=i.sources,t.priorities=i.priorities,t.servers=i.servers,t.questiontypes=i.questiontypes,t.subclasses=i.subclasses,t.affects=i.affects,t.assignees=i.assignees,t.emailgroups=i.emailgroups}})},showEditTicketView:function(t,e){this.rowindex=t,this.updateLogId=e.logId,this.dialogVisible=!0},searchTicket:function(){this.loadTickets()},handleSizeChange:function(t){this.pageSize=t,this.loadTickets()},handleCurrentChange:function(t){this.currentPage=t,this.loadTickets()},loadTickets:function(){var t=this,e=this;this.tableLoading=!0,this.getRequest("/ticket/basic/tkt?page="+this.currentPage+"&size="+this.pageSize+"&keywords="+this.keywords+"&declarationId="+this.ticket.declarationId+"&sourceId="+this.ticket.sourceId+"&serverId="+this.ticket.serverId+"&affectId="+this.ticket.affectId+"&priorityId="+this.ticket.priorityId+"&status=New&assigneeId="+this.ticket.assigneeId+"&groupId="+this.ticket.groupId).then(function(i){if(t.tableLoading=!1,i&&200==i.status){var s=i.data;e.tickets=s.tickets,e.totalCount=s.count}})},emptyTicketList:function(){this.ticket={logId:"",title:"",createdDate:"",customerName:"",customerId:"",mobile:"",tel:"",email:"",vipdesc:"",status:"",declarationId:"",sourceId:"",serverId:"",affectId:"",priorityId:"",assigneeId:"",groupId:"",rowindex:""},this.keywords=""}},computed:{user:function(){return this.$store.state.user},routes:function(){return this.$store.state.routes}}},s,!1,function(t){i("de6+")},"data-v-5dc68be1",null);e.default=a.exports},qPzJ:function(t,e){}});