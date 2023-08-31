"use strict";(self["webpackChunks009"]=self["webpackChunks009"]||[]).push([[3948],{8032:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var s=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("编辑")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"新闻标题",prop:"newTitle"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.newTitle,callback:function(t){e.$set(e.form,"newTitle",t)},expression:"form.newTitle"}})],1),t("FormItem",{attrs:{label:"新闻时效",prop:"periodTime"}},[t("DatePicker",{ref:"myDatePicker",staticStyle:{width:"570px"},attrs:{editable:!1,type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss",value:e.form.periodTime},on:{"on-change":e.changeServiceDate}})],1),t("FormItem",{attrs:{label:"是否公开",prop:"isPublic"}},[t("Select",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.isPublic,callback:function(t){e.$set(e.form,"isPublic",t)},expression:"form.isPublic"}},[t("Option",{attrs:{value:"yes"}},[e._v("是")]),t("Option",{attrs:{value:"no"}},[e._v("否")])],1)],1),t("FormItem",{attrs:{label:"图片",prop:"photo"}},[t("upload-pic-input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.photo,callback:function(t){e.$set(e.form,"photo",t)},expression:"form.photo"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1),t("Divider",{attrs:{dashed:""}}),t("FormItem",{attrs:{label:"新闻描述",prop:"newDescribe"}},[t("VueUeditorWrap",{attrs:{config:e.editorConfig,"editor-id":"editor-demo-01"},model:{value:e.form.newDescribe,callback:function(t){e.$set(e.form,"newDescribe",t)},expression:"form.newDescribe"}})],1)],1)],1)],1)},r=[],a=i(8434),o=i.n(a),l=i(2179),n=i(6413);const c={name:"edit",components:{VueUeditorWrap:o(),uploadPicInput:n["default"]},props:{data:Object},data(){return{currentPublishOrganizationId:"-1",submitLoading:!1,form:{newTitle:"",newDescribe:"",periodTime:"",isPublic:"",photo:"",relateServiceId:"",relateServiceName:""},formValidate:{newTitle:[{required:!0,message:"不能为空",trigger:"blur"},{type:"string",max:100,message:"不能超过100个字符",trigger:"blur"}],newDescribe:[{required:!0,message:"不能为空",trigger:"blur"},{type:"string",max:2e3,message:"不能超过2000个字符",trigger:"blur"}],periodTime:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{init(){this.handleReset(),this.form=this.data},getServiceIdsFormSon(e){if(this.form.relateServiceId=e,this.relateServiceDrawer=!1,""==e)return this.form.relateServiceName="",void(this.form.relateServiceId="");var t={ids:e};(0,l.j1)(t).then((e=>{this.submitLoading=!1;var t="";if(e.success){for(var i=0;i<e.result.length;i++)""!=t&&(t+="\n"),t=t+(i+1)+"."+e.result[i].serviceName;this.form.relateServiceName=t}}))},changeServiceDate(e){this.form.periodTime=e[0]+" - "+e[1]},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,l.t5)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},created(){this.editorConfig={UEDITOR_HOME_URL:"/UEditor/",autoHeightEnabled:!1,initialFrameHeight:400,initialFrameWidth:"100%",serverUrl:"https://zwz99.top:16888/ueditor/jsp/controller.jsp"}},mounted(){this.init()}},d=c;var m=i(1001),p=(0,m.Z)(d,s,r,!1,null,null,null);const u=p.exports},2179:(e,t,i)=>{i.d(t,{KY:()=>c,R9:()=>a,Xm:()=>n,_k:()=>o,j1:()=>r,js:()=>d,t5:()=>l});var s=i(7184);const r=e=>(0,s.A_)("/dynamic_new/get_service_by_ids",e),a=e=>(0,s.A_)("/hospitalNews/getByPage",e),o=e=>(0,s.j0)("/hospitalNews/insertOrUpdate",e),l=e=>(0,s.j0)("/hospitalNews/insertOrUpdate",e),n=e=>(0,s.j0)("/hospitalNews/delByIds",e),c=e=>(0,s.j0)("/hospitalNews/set_top_by_id",e),d=e=>(0,s.j0)("/hospitalNews/set_public_by_id",e)}}]);