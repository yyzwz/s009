import{o as p,p as x,c as r,_ as m,d as y,e as B}from"./qrcode.d77583fa.js";import{_ as P}from"./longLogo.97a27f5f.js";import{_ as w,a as h,r as k,o as i,c as n,b as s,d as f,e as I,t,F as _,f as b,g as O,h as M,p as S,i as C}from"./index.339df906.js";const L={data(){return{token:"",test:"hello world",class1:"none",positionList:[],selectPositionStr:"",loginUserName:"",loginPassword:"",orderList:[],orderList2:[]}},components:{},methods:{init(){this.getByAllOnUserFx(),this.getByAllOnUserFx2()},getByAllOnUserFx(){var o=this;p().then(a=>{a.data.success?o.orderList=a.data.result:h({type:"error",message:"\u67E5\u8BE2\u6211\u7684\u8BA2\u5355\u5931\u8D25  "+a.data.message})})},getByAllOnUserFx2(){var o=this;x().then(a=>{a.data.success?o.orderList2=a.data.result:h({type:"error",message:"\u67E5\u8BE2\u6211\u7684\u8BA2\u5355\u5931\u8D25  "+a.data.message})})},loginOut(){r.remove("token"),this.removeStore("token"),this.token="",this.$router.push("/")},selectPositionByTitleFx(){this.selectPositionStr=document.getElementById("zwzSearchPositionInput").value,this.getByAllOnUserFx()},toMainPage(){this.$router.push("/")},toNewsPage(){this.$router.push("/news")},toZhaoPinPage(){this.$router.push("/position")},toMyOwnPage(){this.$router.push("/myOwn")},toMyOrderPage(){this.$router.push("/myOrder")},toMessagePage(){this.$router.push("/message")},toOrderItemPage(o){r.set("orderId",o.id),this.setStore("orderId",o.id),this.$router.push("/myOrderItem")},toLookItemPage(o){r.set("lookId",o.id),this.setStore("lookId",o.id),this.$router.push("/myLookItem")},classHeader:function(){var o=document.documentElement.scrollTop;o>420?this.class1="fixed":this.class1="none"}},mounted(){this.token=r.get("token"),this.init(),this.classHeader(),window.addEventListener("scroll",this.classHeader)},onShow(){console.log("onShow")}},d=o=>(S("data-v-5718bb0d"),o=o(),C(),o),N={id:"home"},T={id:"header",class:"header"},F=d(()=>s("div",{class:"logo"},[s("img",{class:"logoImg",src:m,alt:""}),s("div",{class:"logoText"},"\u4E8C\u624B\u5546\u54C1\u4EA4\u6613\u7F51\u7AD9")],-1)),U={class:"rightBox"},A=d(()=>s("div",{class:"shu"},null,-1)),z=d(()=>s("div",{class:"shu"},null,-1)),E=d(()=>s("div",{class:"shu"},null,-1)),H=d(()=>s("div",{class:"shu"},null,-1)),V=d(()=>s("div",{class:"shu"},null,-1)),Z={class:"white"},D=d(()=>s("header",null,[s("div",{class:"imgBox"},[s("img",{class:"headerImg",src:P,alt:""})])],-1)),W={class:"body"},j={class:"main"},q={class:"mainBox"},G={class:"mainTitle"},J=["onClick"],K={class:"name"},Q=d(()=>s("div",{class:"labelBox"},null,-1)),R={class:"labelBox"},X={class:"labelBox"},Y={class:"labelBox"},$={class:"labelBox"},ss={class:"labelBox"},es={class:"labelBox"},ts={class:"labelBox"},as={class:"labelBox"},os={style:{display:"inline"}},ls=["src"],ds={class:"mainBox"},is={class:"mainTitle"},ns=["onClick"],cs={class:"name"},rs={class:"labelBox"},vs=d(()=>s("div",{class:"smallShu"},null,-1)),hs=d(()=>s("div",{class:"smallShu"},null,-1)),_s=d(()=>s("div",{class:"smallShu"},null,-1)),bs=d(()=>s("div",{class:"smallShu"},null,-1)),us={class:"labelBox"},gs={class:"labelBox"},ps={class:"labelBox"},xs={class:"labelBox"},ms={class:"labelBox"},ys={class:"labelBox"},Bs={style:{display:"inline"}},Ps=["src"],ws=O('<div class="footer" data-v-5718bb0d><div class="footerBox" data-v-5718bb0d><div class="footerTeal" data-v-5718bb0d><div class="logoBox" data-v-5718bb0d><img class="footerLogo" src="'+y+'" alt="" data-v-5718bb0d><div class="logoTitle" data-v-5718bb0d>\u7CBE\u54C1\u6BD5\u8BBE\u9879\u76EE</div></div><span class="smallTitle" data-v-5718bb0d>\u7CBE\u54C1\u6BD5\u8BBE\u9879\u76EE</span><span class="smallTitle" data-v-5718bb0d>Copyright \xA9 2020 - \u81F3\u4ECA ICP\u5907\u6848 \u6D59ICP\u59071xxxxxxx\u53F7-1</span></div><div class="lie" data-v-5718bb0d></div><div class="footerAway" data-v-5718bb0d><span class="text1" data-v-5718bb0d>\u8054\u7CFB\u6211\u4EEC</span><span class="text2" data-v-5718bb0d>https://zwz99.blog.csdn.net</span><span class="text2" data-v-5718bb0d>\u610F\u89C1\u53CD\u9988</span></div><div class="lie" data-v-5718bb0d></div><div class="footerAway" data-v-5718bb0d><span class="text1" data-v-5718bb0d>CSDN</span><span class="text2" data-v-5718bb0d>https://zwz99.blog.csdn.net</span><span class="text2" data-v-5718bb0d>\u7CBE\u54C1\u6BD5\u8BBE\u9879\u76EE</span></div><div class="lie" data-v-5718bb0d></div><div class="footerWait" data-v-5718bb0d><span class="text1" data-v-5718bb0d>\u66F4\u591A\u7CBE\u54C1\u6BD5\u8BBE\u9879\u76EE\uFF0C\u8BF7\u8054\u7CFB\u6211</span><img class="codeImg" src="'+B+'" alt="" data-v-5718bb0d><div class="yuanyuan" data-v-5718bb0d><div class="yuan" data-v-5718bb0d></div><div class="yuan" data-v-5718bb0d></div><div class="yuan" data-v-5718bb0d></div><div class="yuan" data-v-5718bb0d></div><div class="yuan" data-v-5718bb0d></div></div></div></div></div>',1);function ks(o,a,fs,Is,c,l){const u=k("el-button");return i(),n("div",N,[s("div",T,[F,s("div",U,[s("div",{class:"white",onClick:a[0]||(a[0]=(...e)=>l.toMainPage&&l.toMainPage(...e))},"\u9996\u9875"),A,s("div",{class:"white",onClick:a[1]||(a[1]=(...e)=>l.toZhaoPinPage&&l.toZhaoPinPage(...e))},"\u4E70\u5546\u54C1"),z,s("div",{class:"white",onClick:a[2]||(a[2]=(...e)=>l.toNewsPage&&l.toNewsPage(...e))},"\u5B9D\u5178"),E,s("div",{class:"white current",onClick:a[3]||(a[3]=(...e)=>l.toMyOrderPage&&l.toMyOrderPage(...e))},"\u670D\u52A1\u4FDD\u969C"),H,s("div",{class:"white",onClick:a[4]||(a[4]=(...e)=>l.toMessagePage&&l.toMessagePage(...e))},"\u5728\u7EBF\u7559\u8A00"),V,s("div",Z,[f(u,{type:"text",onClick:l.loginOut},{default:I(()=>[M("\u9000\u51FA")]),_:1},8,["onClick"])])])]),D,s("div",W,[s("div",j,[s("div",q,[s("div",G,"\u6211\u7684\u4E8C\u624B\u5546\u54C1\u9884\u8BA2\u5355 \uFF08"+t(c.orderList.length)+"\uFF09",1),(i(!0),n(_,null,b(c.orderList,(e,v)=>(i(),n("div",{class:"box",key:v,onClick:g=>l.toOrderItemPage(e)},[s("span",K,"\u3010"+t(e.brand)+"\u3011"+t(e.sellerMoney)+"\u4E07",1),Q,s("div",R," \u4E8C\u624B\u5546\u54C1\u54C1\u724C: "+t(e.brand),1),s("div",X," \u4E8C\u624B\u5546\u54C1\u4EF7\u683C: "+t(e.sellerMoney),1),s("div",Y," \u5356\u5BB6\u59D3\u540D: "+t(e.sellerName),1),s("div",$," \u5356\u5BB6\u624B\u673A: "+t(e.sellerMobile),1),s("div",ss," \u4E70\u5BB6\u59D3\u540D: "+t(e.buyName),1),s("div",es," \u9884\u5B9A\u65F6\u95F4: "+t(e.orderTime),1),s("div",ts," \u662F\u5426\u7B7E\u5408\u540C: "+t(e.contractFlag)+" -- "+t(e.contractTime),1),s("div",as," \u662F\u5426\u5BA1\u6838: "+t(e.auditFlag),1),s("div",os,[s("img",{src:e.imageUrl,style:{height:"200px",width:"60%"}},null,8,ls)])],8,J))),128))]),s("div",ds,[s("div",is,"\u6211\u7684\u4E8C\u624B\u5546\u54C1\u9884\u7EA6\u5355 \uFF08"+t(c.orderList2.length)+"\uFF09",1),(i(!0),n(_,null,b(c.orderList2,(e,v)=>(i(),n("div",{class:"box",key:v,onClick:g=>l.toLookItemPage(e)},[s("span",cs,"\u3010"+t(e.brand)+"\u3011"+t(e.sellerMoney)+"\u4E07",1),s("div",rs,[s("span",null,"\u5356\u5BB6\uFF1A"+t(e.sellerName),1),vs,s("span",null,"\u4E0A\u67B6\u65E5\u671F"+t(e.orderTime),1),hs,s("span",null,"\u8054\u7CFB\u65B9\u5F0F\uFF1A"+t(e.sellerMobile),1),_s,s("span",null,"\u4E70\u5BB6"+t(e.buyName),1),bs]),s("div",us," \u4E8C\u624B\u5546\u54C1\u54C1\u724C: "+t(e.brand),1),s("div",gs," \u4E8C\u624B\u5546\u54C1\u4EF7\u683C: "+t(e.sellerMoney),1),s("div",ps," \u5356\u5BB6\u59D3\u540D: "+t(e.sellerName),1),s("div",xs," \u5356\u5BB6\u624B\u673A: "+t(e.sellerMobile),1),s("div",ms," \u4E70\u5BB6\u59D3\u540D: "+t(e.buyName),1),s("div",ys," \u9884\u5B9A\u65F6\u95F4: "+t(e.orderTime),1),s("div",Bs,[s("img",{src:e.imageUrl,style:{height:"200px",width:"60%"}},null,8,Ps)])],8,ns))),128))])]),ws])])}var Cs=w(L,[["render",ks],["__scopeId","data-v-5718bb0d"]]);export{Cs as default};
