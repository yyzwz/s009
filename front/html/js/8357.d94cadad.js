"use strict";(self["webpackChunks009"]=self["webpackChunks009"]||[]).push([[8357,3871],{3871:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("编辑")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"二手商品ID",prop:"carId"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.data.carId,callback:function(t){e.$set(e.data,"carId",t)},expression:"data.carId"}})],1),t("FormItem",{attrs:{label:"二手商品名称",prop:"brand"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.data.brand,callback:function(t){e.$set(e.data,"brand",t)},expression:"data.brand"}})],1),t("FormItem",{attrs:{label:"二手商品价格",prop:"sellerMoney"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{readonly:"",min:"0",max:"5000000"},model:{value:e.data.sellerMoney,callback:function(t){e.$set(e.data,"sellerMoney",t)},expression:"data.sellerMoney"}})],1),t("FormItem",{attrs:{label:"商品辆图片",prop:"imageUrl"}},[t("Input",{staticStyle:{width:"570px"},attrs:{disabled:""},model:{value:e.data.imageUrl,callback:function(t){e.$set(e.data,"imageUrl",t)},expression:"data.imageUrl"}})],1),t("FormItem",{attrs:{label:"卖家姓名",prop:"sellerName"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.data.sellerName,callback:function(t){e.$set(e.data,"sellerName",t)},expression:"data.sellerName"}})],1),t("FormItem",{attrs:{label:"卖家手机",prop:"sellerMobile"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.data.sellerMobile,callback:function(t){e.$set(e.data,"sellerMobile",t)},expression:"data.sellerMobile"}})],1),t("FormItem",{attrs:{label:"买家ID",prop:"buyId"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.data.buyId,callback:function(t){e.$set(e.data,"buyId",t)},expression:"data.buyId"}})],1),t("FormItem",{attrs:{label:"买家姓名",prop:"buyName"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.data.buyName,callback:function(t){e.$set(e.data,"buyName",t)},expression:"data.buyName"}})],1),t("FormItem",{attrs:{label:"预定时间",prop:"orderTime"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.data.orderTime,callback:function(t){e.$set(e.data,"orderTime",t)},expression:"data.orderTime"}})],1),t("FormItem",{attrs:{label:"是否签合同",prop:"contractFlag"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.data.contractFlag,callback:function(t){e.$set(e.data,"contractFlag",t)},expression:"data.contractFlag"}})],1),t("FormItem",{attrs:{label:"合同签订时间",prop:"contractTime"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.data.contractTime,callback:function(t){e.$set(e.data,"contractTime",t)},expression:"data.contractTime"}})],1)],1)],1)],1)},l=[];a(4285);const i={name:"edit",components:{},props:{data:Object},data(){return{submitLoading:!1,formValidate:{}}},methods:{init(){},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},r=i;var o=a(1001),n=(0,o.Z)(r,s,l,!1,null,null,null);const c=n.exports},8357:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search"},["edit"==e.currView?t("edit",{attrs:{data:e.formData},on:{close:function(t){e.currView="index"},submited:e.submited}}):e._e(),t("Card",{directives:[{name:"show",rawName:"v-show",value:"index"==e.currView,expression:"currView=='index'"}]},[t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)}}},[t("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{ref:"searchForm",staticStyle:{display:"flex"},attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{attrs:{label:"",prop:"brand"}},[t("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"商品名称",clearable:""},model:{value:e.searchForm.brand,callback:function(t){e.$set(e.searchForm,"brand",t)},expression:"searchForm.brand"}})],1),t("Form-item",{attrs:{label:"",prop:"sellerName"}},[t("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"卖家姓名",clearable:""},model:{value:e.searchForm.sellerName,callback:function(t){e.$set(e.searchForm,"sellerName",t)},expression:"searchForm.sellerName"}})],1),t("Form-item",{attrs:{label:"",prop:"buyName"}},[t("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"买家姓名",clearable:""},model:{value:e.searchForm.buyName,callback:function(t){e.$set(e.searchForm,"buyName",t)},expression:"searchForm.buyName"}})],1),t("Form-item",{attrs:{label:"",prop:"orderTime"}},[t("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"预定时间",clearable:""},model:{value:e.searchForm.orderTime,callback:function(t){e.$set(e.searchForm,"orderTime",t)},expression:"searchForm.orderTime"}})],1),t("Form-item",{staticClass:"br",staticStyle:{"margin-left":"10px"}},[t("Button",{attrs:{type:"primary",icon:"ios-search",size:"small",ghost:""},on:{click:e.handleSearch}},[e._v("搜索")]),t("Button",{attrs:{type:"warning",size:"small",icon:"md-refresh",ghost:""},on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"error",icon:"md-trash",size:"small",ghost:""},on:{click:e.delAll}},[e._v("取消预定")]),t("Button",{attrs:{type:"success",icon:"md-paper-plane",size:"small",ghost:""},on:{click:e.excelData}},[e._v("导出")])],1),t("Form-item",{staticStyle:{position:"fixed",right:"50px",top:"130px"}},[t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"info",icon:"md-settings",size:"small",ghost:""},on:{click:function(t){e.showFilterPanelFlag=!e.showFilterPanelFlag}}},[e._v(" 列筛选")]),t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"warning",icon:"ios-help-circle-outline",size:"small",ghost:""},on:{click:function(t){e.modal1=!0}}},[e._v(" 使用教程")]),t("Modal",{attrs:{title:"使用教程"},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[t("p",[e._v("1.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("2.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("3.XXXXXXXXXXXXXXXXXXXXXXXX")])])],1)],1)],1)],1),t("Row",{staticClass:"operation",staticStyle:{position:"relative"}},[t("transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showFilterPanelFlag,expression:"showFilterPanelFlag"}],staticClass:"filter-panel"},[t("CheckboxGroup",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.mycolumns,(function(e){return t("div",{key:e.key},[t("Checkbox",{staticStyle:{margin:"2px 5px"},attrs:{label:e.title}})],1)})),0)],1)])],1),t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openTip,expression:"openTip"}]}),t("Row",[t("Table",{ref:"table",attrs:{loading:e.loading,height:e.tableHeight,border:"",stripe:"",size:"small",columns:e.columns,data:e.data,sortable:"custom","row-class-name":e.rowClassNmae},on:{"on-sort-change":e.changeSort,"on-selection-change":e.changeSelect,"on-row-click":e.rowClick}})],1),t("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[t("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[15,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1),t("Modal",{attrs:{title:"二手商品合同签订",draggable:"",width:"630","ok-text":"确认签订合同"},on:{"on-ok":e.doSignFx},model:{value:e.signModal,callback:function(t){e.signModal=t},expression:"signModal"}},[t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:"24"}},[t("img",{attrs:{src:a(3827),width:"600px",height:"700px"}})])],1)],1)],1)},l=[],i=a(4285),r=a(3871);const o={name:"single-window",components:{edit:r["default"]},data(){return{signModal:!1,tableHeight:0,selected:["选择","序号","商品名称","商品价格","商品图片","卖家姓名","卖家手机","买家姓名","预定时间","审核情况","合同签署","操作"],modal1:!1,openSearch:!0,openTip:!0,formData:{},currView:"index",loading:!0,searchForm:{pageNumber:1,pageSize:15,sort:"createTime",order:"desc"},selectList:[],selectCount:0,selectRow:0,columns:[{type:"selection",width:60,title:"选择",align:"center",fixed:"left"},{title:"序号",width:85,align:"center",fixed:"left",sortType:!0,render:(e,t)=>e("span",t.index+(this.searchForm.pageNumber-1)*this.searchForm.pageSize+1)},{title:"商品名称",key:"brand",minWidth:120,tooltip:!0,sortable:!1},{title:"商品价格",key:"sellerMoney",minWidth:120,tooltip:!0,sortable:!1},{title:"商品图片",key:"imageUrl",minWidth:180,tooltip:!0,sortable:!1,render:(e,t)=>e("div",[e("img",{attrs:{src:t.row.imageUrl},style:{width:"auto",height:"50px"}})])},{title:"卖家姓名",key:"sellerName",minWidth:120,tooltip:!0,sortable:!1},{title:"卖家手机",key:"sellerMobile",minWidth:120,tooltip:!0,sortable:!1},{title:"买家姓名",key:"buyName",minWidth:120,tooltip:!0,sortable:!1},{title:"预定时间",key:"orderTime",minWidth:180,tooltip:!0,sortable:!1},{title:"审核情况",key:"auditFlag",minWidth:120,tooltip:!0,sortable:!1,render:(e,t)=>0==t.row.auditFlag?e("div",[e("span",{style:{color:"#FF9900"}},"未审核")]):e("div",[e("span",{style:{color:"#000000"}},"已审核")])},{title:"合同签署",key:"contractFlag",minWidth:180,tooltip:!0,sortable:!1,render:(e,t)=>0==t.row.contractFlag?e("div",[e("span",{style:{color:"#FF9900"}},"未签订")]):e("div",[e("span",{style:{color:"#000000"}},"已于 "+t.row.contractTime+" 签订")])},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc",minWidth:180,align:"center",tooltip:!0},{title:"创建者",key:"createBy",sortable:!0,sortType:"desc",minWidth:100,align:"center",tooltip:!0},{title:"修改时间",key:"updateTime",minWidth:180,align:"center",tooltip:!0},{title:"修改者",key:"updateBy",minWidth:100,align:"center",tooltip:!0},{title:"操作",key:"action",align:"center",width:440,fixed:"right",render:(e,t)=>e("div",[e("Button",{props:{type:"success",size:"small",icon:"ios-create-outline",ghost:!0,disabled:t.row.auditFlag},style:{marginRight:"5px"},on:{click:()=>{this.doAuditFx(t.row)}}},"审核"),e("Button",{props:{type:"success",size:"small",icon:"ios-create-outline",ghost:!0,disabled:t.row.contractFlag},style:{marginRight:"5px"},on:{click:()=>{this.openSignFx(t.row)}}},"签订合同"),e("Button",{props:{type:"primary",size:"small",icon:"ios-create-outline",ghost:!0},style:{marginRight:"5px"},on:{click:()=>{this.edit(t.row)}}},"查看详情"),e("Button",{props:{type:"error",size:"small",icon:"md-trash",ghost:!0},on:{click:()=>{this.remove(t.row)}}},"取消预定")])}],data:[],pageNumber:1,pageSize:10,total:0,showFilterPanelFlag:!1,mySelectRow:{}}},methods:{init(){this.getDataList()},doSignFx(){var e=this;(0,i.mD)({id:e.mySelectRow.id}).then((t=>{t.success&&(this.$Message.success("合同签订成功"),e.getDataList())}))},doAuditFx(e){var t=this;(0,i.Ct)({id:e.id}).then((e=>{e.success&&(this.$Message.success("审核成功"),t.getDataList())}))},openSignFx(e){this.mySelectRow=e,this.signModal=!0},submited(){this.currView="index",this.getDataList()},changePage(e){this.searchForm.pageNumber=e,this.getDataList(),this.clearSelectAll()},changePageSize(e){this.searchForm.pageSize=e,this.getDataList()},rowClick(e,t){this.selectRow=e},rowClassNmae(e,t){return e.id==this.selectRow.id?"rowClassNmaeColor":""},excelData(){this.$refs.table.exportCsv({filename:"导出结果"})},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},handleReset(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},changeSort(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"===e.order&&(this.searchForm.order=""),this.getDataList()},clearSelectAll(){this.$refs.table.selectAll(!1)},changeSelect(e){this.selectList=e,this.selectCount=e.length},getDataList(){this.loading=!0,(0,i.nA)(this.searchForm).then((e=>{this.loading=!1,e.success&&(this.data=e.result.records,this.total=e.result.total)}))},edit(e){for(let s in e)null==e[s]&&(e[s]="");let t=JSON.stringify(e),a=JSON.parse(t);this.formData=a,this.currView="edit"},remove(e){this.$Modal.confirm({title:"确认删除",content:"您确认要删除 ?",loading:!0,onOk:()=>{(0,i.le)({ids:e.id}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.getDataList())}))}})},delAll(){this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",loading:!0,onOk:()=>{let e="";this.selectList.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),(0,i.le)({ids:e}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.clearSelectAll(),this.getDataList())}))}})}},mounted(){this.init(),this.tableHeight=Number(window.innerHeight-273),this.mycolumns=this.columns;let e=[];for(var t=0;t<this.selected.length;t++)for(var a=this.selected[t],s=0;s<this.columns.length;s++)this.columns[s].title==a&&e.push(this.columns[s]);this.columns=e},watch:{selected:function(e){let t=[];for(var a=0;a<this.mycolumns.length;a++){var s=this.mycolumns[a];(void 0==s.title||e.contains(s.title))&&t.push(s)}this.columns=t}}},n=o;var c=a(1001),d=(0,c.Z)(n,s,l,!1,null,null,null);const m=d.exports},4285:(e,t,a)=>{a.d(t,{Ct:()=>c,VZ:()=>r,le:()=>o,mD:()=>n,n:()=>i,nA:()=>l});var s=a(7184);const l=e=>(0,s.A_)("/carOrder/getByPage",e),i=e=>(0,s.A_)("/carOrder/getByPageOnUser2",e),r=e=>(0,s.j0)("/carOrder/insert",e),o=e=>(0,s.j0)("/carOrder/delByIds",e),n=e=>(0,s.j0)("/carOrder/doSign",e),c=e=>(0,s.j0)("/carOrder/doAudit",e)},3827:(e,t,a)=>{e.exports=a.p+"img/sign.67df72a1.png"}}]);