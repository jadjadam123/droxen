"use strict";(self["webpackChunkwidget"]=self["webpackChunkwidget"]||[]).push([[7591],{37591:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"record",class:t.isPC?"pc":""},[e("div",{staticClass:"top"},[e("img",{staticClass:"img",attrs:{src:s(89899),alt:""}}),e("span",{staticClass:"title"},[t._v(t._s(t.$t("record"))+" ")]),e("span",{staticClass:"more",on:{click:t.showRecord}},[t._v(t._s(t.$t("more"))+">")])]),"bridgers"!==t.bridgersFlag?e("RecordTab"):t._e(),t._l(t.list,(function(s,i){return e("div",{key:i,staticClass:"box",on:{click:function(e){return t.orderDetail(s)}}},[e("div",{staticClass:"box-top"},[e("span",{staticClass:"time"},[t._v(t._s(s.beginDate||s.createTime))]),e("span",{staticClass:"status",style:{color:t.orderStatus(s.detailState||s.orderStatus)[1]}},[t._v(t._s(t.orderStatus(s.detailState||s.orderStatus)[0]))])]),e("div",{staticClass:"box-cont"},[e("div",{staticClass:"left"},[e("div",{staticClass:"img"},[""===s.isNft||"1"==s.orderSide?e("img",{attrs:{src:`https://transfer.swft.pro/swft-v3/images/coins/${s.fromCoinCode||s.depositCoinCode}.png`,alt:""}}):e("img",{attrs:{src:"sell"===s.isNft?s.nftUrl||s.nftLogoUrl:s.payTokenUrl,alt:""}})]),e("div",{staticClass:"coin"},[e("div",{staticClass:"coin-name"},[t._v(" "+t._s("sell"==s.isNft?s.nftName:s.fromCoinCode||s.depositCoinCode)+" ")]),e("div",{staticClass:"coin-number"},[t._v(" "+t._s(Number(s.fromCoinAmt||s.depositCoinAmt).toFixed(6)-0)+" ")])])]),e("div",{staticClass:"center"},[e("svg",{staticClass:"icon dh-icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-duihuan1"}})])]),e("div",{staticClass:"right"},[e("div",{staticClass:"img"},[""===s.isNft||"0"==s.orderSide?e("img",{attrs:{src:`https://transfer.swft.pro/swft-v3/images/coins/${s.toCoinCode||s.receiveCoinCode}.png`,alt:""}}):e("img",{attrs:{src:"buy"===s.isNft?s.nftUrl||s.nftLogoUrl:s.payTokenUrl,alt:""}})]),e("div",{class:t.isPC?"coinPC coin":"coin"},[e("div",{staticClass:"coin-name"},[t._v(" "+t._s("buy"===s.isNft?s.nftName:s.toCoinCode||s.receiveCoinCode)+" ")]),e("div",{staticClass:"coin-number"},["receive_complete"===s.detailState||"wait_receive_confirm"===s.detailState||"wait_partial_refund"===s.detailState||"wait_partial_refund_confirm"===s.detailState||"partial_complete"===s.detailState||"wait_partial_send_confirm_error"===s.detailState||"wait_partial_refund_confirm_error"===s.detailState||"wait_partial_send"===s.detailState||"wait_partial_send_confirm"===s.detailState||"wait_deposit_send_error"===s.detailState||""!==s.isNft||s.router&&"bridgers1"===s.router.router||s.router&&"bridgers2"===s.router.router?[t._v(" "+t._s(Number(s.toCoinAmt||s.receiveCoinAmt).toFixed(6)-0)+" ")]:[t._v(" "+t._s((s.fromCoinAmt*s.instantRate*(1-s.depositFeeRate)-s.chainFee).toFixed(6)-0)+" ")]],2)])])])])})),e("AIChooseToken",{ref:"AIChooseToken",attrs:{tokenData:t.tokenData}})],2)},r=[],a=s(53202),o=s(25401),n=s(18621),d=function(){var t=this,e=t._self._c;return e("div",[e("DialogContent",{ref:"dialogAIChooseToken",attrs:{width:t.isPC?"500px":"90%"},on:{close:t.dialogClose}},[t.tokenData?e("div",[e("img",{staticClass:"ai-img",attrs:{src:s(5245),alt:""}}),e("div",{staticClass:"aiTip"},[e("div",{staticClass:"ai"},[t._v("AI")]),e("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("aiTips"))+" ")])]),e("div",{staticClass:"token-content"},[e("div",{staticClass:"token"},[e("img",{attrs:{src:"https://transfer.swft.pro/swft-v3/images/coins/"+t.tokenData.from.coinCode+".png",alt:""}}),e("div",[t._v(t._s(t.tokenData.from.coinCodeShow))])]),e("svg",{staticClass:"icon",attrs:{t:"1623380158754",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1319",width:"200",height:"200"}},[e("path",{attrs:{d:"M955.574857 505.947429c-1.993143 145.627429-27.282286 266.203429-101.229714 338.102857-71.917714 73.947429-192.493714 99.236571-338.102857 101.229714-145.627429-1.993143-266.203429-27.282286-338.121143-101.229714-73.947429-71.899429-99.236571-192.475429-101.229714-338.102857 2.011429-145.627429 27.282286-266.203429 101.229714-338.102858 71.917714-73.947429 192.493714-99.254857 338.102857-101.248 145.627429 2.011429 266.203429 27.300571 338.121143 101.229715 73.947429 71.917714 99.236571 192.493714 101.229714 338.121143z",fill:"#F8FBFF","p-id":"1320"}}),e("path",{attrs:{d:"M438.528 358.089143v-82.779429s0.237714-4.352-8.301714-6.4c-7.021714-1.554286-13.805714 3.328-13.805715 3.328-3.017143 2.304-142.884571 103.533714-142.884571 103.533715s-13.293714 6.930286-13.293714 20.772571c0 13.330286 9.526857 18.962286 9.526857 18.962286l143.634286 100.717714s9.051429 3.346286 16.822857 1.810286c8.301714-1.810286 8.301714-7.954286 8.301714-7.954286v-77.659429h139.849143s110.244571 15.122286 110.244571 56.905143c0 0-1.755429-131.236571-113.737143-131.236571h-136.356571z",fill:"#000000","p-id":"1321"}}),e("path",{attrs:{d:"M581.394286 691.547429v82.779428s1.517714 5.12 10.550857 6.144c6.034286 0.768 9.801143-2.304 11.044571-3.328 3.017143-2.048 143.140571-103.533714 143.140572-103.533714s13.312-6.930286 13.312-20.772572c0-13.586286-9.545143-18.962286-9.545143-18.962285l-143.890286-100.717715s-6.034286-3.602286-14.061714-1.554285c-10.057143 2.56-10.550857 7.954286-10.550857 7.954285v77.403429h-140.617143s-110.226286-15.122286-110.226286-56.905143c0 0 1.755429 131.236571 113.993143 131.236572l136.850286 0.256z",fill:"#9f5847","p-id":"1322"}})]),e("div",{staticClass:"token"},[e("img",{attrs:{src:"https://transfer.swft.pro/swft-v3/images/coins/"+t.tokenData.to.coinCode+".png",alt:""}}),e("div",[t._v(t._s(t.tokenData.to.coinCodeShow))])])]),e("div",{staticClass:"btn-group"},[e("button",{staticClass:"sure",on:{click:t.submit}},[t._v(t._s(t.$t("ConfirmNFT")))]),e("button",{staticClass:"cancel",on:{click:t.cancel}},[t._v(t._s(t.$t("btnCancel")))])])]):t._e()])],1)},c=[],l=s(24034),h={name:"WidgetProAIChooseToken",props:["tokenData"],data(){return{show:!1}},watch:{show(t){this.$refs.dialogAIChooseToken.show=t}},components:{DialogContent:l["default"]},computed:{fromToken:{get(){return"bridge"==this.tabActive?this.bridgeFromTokenchain:this.$store.state.fromToken},set(t){this.$store.commit("setFromToken",t)}},toToken:{get(){return"bridge"==this.tabActive?this.bridgeToTokenchain:this.$store.state.toToken},set(t){this.$store.commit("setToToken",t)}}},mounted(){},methods:{dialogClose(){this.show=!1},submit(){this.fromToken=this.tokenData.from,this.toToken=this.tokenData.to,this.cancel()},cancel(){this.$refs.dialogAIChooseToken.show=!1,this.dialogClose()}}},f=h,u=s(43736),m=(0,u.Z)(f,d,c,!1,null,"c93c161a",null),A=m.exports,g=s(77974),_={name:"Record",data(){return{list:[],timer:null,detailinfoTimer:null,sourceFlag:localStorage.getItem("sourceFlag"),bridgersFlag:localStorage.getItem("bridgersFlag"),isFirst:!1,tokenData:null}},components:{RecordTab:n.Z,BridgersRecordTab:g.Z,AIChooseToken:A},computed:{recordType:{get(){return this.$store.state.recordType},set(t){this.$store.commit("setRecordType",t)}},walletAddress:{get(){return"000"==this.$store.state.chainId?this.$store.state.walletPolkadot.addrSS58:"222"==this.$store.state.chainId?this.$store.state.walletPolkadot.addrSS58CRU:"333"==this.$store.state.chainId?this.$store.state.walletPolkadot.addrSS58DBC:"0"==this.$store.state.chainId?this.$store.state.walletTRON:this.$store.state.wallet.address}},tabActive:{get(){return this.$store.state.tabActive}},isUserChoose(){return this.$store.state.isUserChoose},fromToken:{get(){return"bridge"==this.tabActive?this.bridgeFromTokenchain:this.$store.state.fromToken}},toToken:{get(){return"bridge"==this.tabActive?this.bridgeToTokenchain:this.$store.state.toToken}}},methods:{showRecord(){this.$store.commit("setShowTradeBox",!1)},queryAllTrade(){const t=this;clearInterval(this.timer),t.timer=null,t.queryAjax(),t.timer=setInterval((()=>{t.queryAjax()}),5e3)},async queryAjax(){if(""===this.walletAddress)return clearInterval(this.timer),void(this.list=[]);const t={pageNo:1,pageSize:5,fromAddress:this.walletAddress};if("swft"===this.recordType){const e=await a.Z.queryAllTrade(t);if(e&&800==e.resCode){if(""!==this.walletAddress){let t=e.data.pageContent;t.forEach((t=>{""!=t.isNft&&t.router&&(t.isNft="")})),this.list=t}this.isFirst&&this.list.length>0&&"swap"==this.tabActive&&!this.isUserChoose&&this.AISetToken(this.list[0]),this.isFirst=!1}}else if("bridgers1"===this.recordType){const e=await a.Z.getTransData(t);if(100==e.resCode){const t=e.data.list;t.forEach((t=>{this.$set(t,"beginDate",t.createTime),this.$set(t,"isNft",""),this.$set(t,"detailState",t.status),this.$set(t,"fromCoinAmt",t.fromTokenAmount),this.$set(t,"toCoinAmt",t.toTokenAmount),this.$set(t,"router",{router:"bridgers1"})})),this.list=t}}else if("bridgers2"===this.recordType){const e=await a.Z.getbridgers2TransData(t);if(100==e.resCode){const t=e.data.list;t.forEach((t=>{this.$set(t,"beginDate",t.createTime),this.$set(t,"isNft",""),this.$set(t,"detailState",t.status),this.$set(t,"fromCoinAmt",t.fromTokenAmount),this.$set(t,"toCoinAmt",t.toTokenAmount),this.$set(t,"router",{router:"bridgers2"})})),this.list=t}}else if("NFT"===this.recordType){const e=await a.Z.queryAllNftTrade(t);if(e&&800==e.resCode&&""!==this.walletAddress){let t=e.data.pageContent;this.list=t}}},async orderDetail(t){if(this.$bus.emit("showOrderHandle",!0),t.router&&"bridgers1"===t.router.router){const e=await a.Z.getTransDataById({orderId:t.orderId});if("100"==e.resCode){let t=e.data;this.$set(t,"orderdetailStatus",this.orderStatus(t.status)),this.$set(t,"beginDate",t.createTime),this.$set(t,"isNft",""),this.$set(t,"detailState",t.status),this.$set(t,"fromCoinAmt",t.fromTokenAmount),this.$set(t,"toCoinAmt",t.toTokenAmount),this.$set(t,"refundAddr",t.fromAddress),this.$set(t,"destinationAddr",t.toAddress),this.$set(t,"depositCoinCode",t.fromCoinCode),this.$set(t,"depositCoinAmt",t.fromCoinAmt),this.$set(t,"receiveCoinAmt",t.toCoinAmt),this.$set(t,"receiveCoinCode",t.toCoinCode),this.$set(t,"depositTxid",t.hash),this.$set(t,"transactionId",t.toHash),this.$set(t,"router",{router:"bridgers1"}),this.$store.commit("setOrder",t),this.$bus.emit("isShowStatus")}}else if(t.router&&"bridgers2"===t.router.router){const e=await a.Z.getbridgers2TransDataById({orderId:t.orderId});if("100"==e.resCode){let t=e.data;this.$set(t,"orderdetailStatus",this.orderStatus(t.status)),this.$set(t,"beginDate",t.createTime),this.$set(t,"isNft",""),this.$set(t,"detailState",t.status),this.$set(t,"fromCoinAmt",t.fromTokenAmount),this.$set(t,"toCoinAmt",t.toTokenAmount),this.$set(t,"refundAddr",t.fromAddress),this.$set(t,"destinationAddr",t.toAddress),this.$set(t,"depositCoinCode",t.fromCoinCode),this.$set(t,"depositCoinAmt",t.fromCoinAmt),this.$set(t,"receiveCoinAmt",t.toCoinAmt),this.$set(t,"receiveCoinCode",t.toCoinCode),this.$set(t,"depositTxid",t.hash),this.$set(t,"transactionId",t.toHash),this.$set(t,"router",{router:"bridgers2"}),this.$store.commit("setOrder",t),this.$bus.emit("isShowStatus")}}else if(t.router&&"NFT"===t.router){const e=await a.Z.queryOrderStateNFT({orderId:t.orderId});if(800==e.resCode){const t=e.data;this.$set(t,"orderdetailStatus",this.orderStatus(e.data.orderStatus)),this.$store.commit("setOrder",t),this.$bus.emit("isShowStatus")}else(0,o.Z)(e.resCode,this)}else{const e=await a.Z.queryOrderState({orderId:t.orderId});if(800==e.resCode){const t=e.data;this.$set(t,"orderdetailStatus",this.orderStatus(e.data.detailState)),""!=t.isNft&&t.router&&(t.isNft=""),this.$store.commit("setOrder",t),this.$bus.emit("isShowStatus")}else(0,o.Z)(e.resCode,this)}},orderStatus(t){let e=[this.$t("wait_deposit_send"),"#707B9E",1,"loading",!1];switch(t){case"wait_deposits":e[0]=this.$t("wait_deposit_send"),e[1]="#707B9E",e[2]=1,e[3]="loading",e[4]=!1;break;case"wait_deposit_send_fail":e[0]=this.$t("deposit_failed"),e[1]="#FF8484",e[2]=1,e[3]=!1,e[4]=!0;break;case"wait_deposit_send_error":e[0]=this.$t("trade_fail"),e[1]="#FF8484",e[2]=1,e[3]=!1,e[4]=!0;break;case"wait_detect":e[0]=this.$t("wait_deposit_send"),e[1]="#707B9E",e[2]=1,e[3]="loading",e[4]=!1;break;case"exchange":e[0]=this.$t("exchangeIng"),e[1]="#707B9E",e[2]=2,e[3]="loading",e[4]=!1;break;case"wait_exchange":e[0]=this.$t("exchangeIng"),e[1]="#707B9E",e[2]=2,e[3]="loading",e[4]=!1;break;case"trade_fail":e[0]=this.$t("trade_fail"),e[1]="#FF8484",e[2]=2,e[3]=!1,e[4]=!0;break;case"fail":e[0]=this.$t("trade_fail"),e[1]="#FF8484",e[2]=2,e[3]=!1,e[4]=!0;break;case"wait_deposit_send":e[0]=this.$t("wait_deposit_send"),e[1]="#707B9E",e[2]=1,e[3]="loading",e[4]=!1;break;case"wait_receive_send":e[0]=this.$t("wait_receive_send"),e[1]="#707B9E",e[2]=3,e[3]="loading",e[4]=!1;break;case"wait_send":e[0]=this.$t("wait_receive_send"),e[1]="#707B9E",e[2]=3,e[3]="loading",e[4]=!1;break;case"wait_receive_confirm":e[0]=this.$t("wait_receive_confirm"),e[1]="#707B9E",e[2]=3,e[3]="loading",e[4]=!1;break;case"wait_refund_send":e[0]=this.$t("wait_refund_send"),e[1]="#707B9E",e[2]=3,e[3]="loading",e[4]=!1;break;case"wait_refund":e[0]=this.$t("wait_refund_send"),e[1]="#707B9E",e[2]=3,e[3]="loading",e[4]=!1;break;case"wait_exchange_return":e[0]=this.$t("exchangeIng"),e[1]="#707B9E",e[2]=2,e[3]="loading",e[4]=!1;break;case"wait_exchange_push":e[0]=this.$t("exchangeIng"),e[1]="#707B9E",e[2]=2,e[3]="loading",e[4]=!1;break;case"wait_for_information":e[0]=this.$t("exchangeIng"),e[1]="#707B9E",e[2]=2,e[3]="loading",e[4]=!1;break;case"receive_complete":e[0]=this.$t("receive_complete"),e[1]="#1eb740",e[2]=4,e[3]=!0,e[4]=!0;break;case"complete":e[0]=this.$t("receive_complete"),e[1]="#1eb740",e[2]=4,e[3]=!0,e[4]=!0;break;case"refund_complete":e[0]=this.$t("refund_complete"),e[1]="#1eb740",e[2]=2,e[3]=!0,e[4]=!0;break;case"fail":e[0]=this.$t("refund_complete"),e[1]="#1eb740",e[2]=2,e[3]=!1,e[4]=!0;break;case"refund_sending":e[0]=this.$t("refund_sending"),e[1]="#707B9E",e[2]=3,e[3]="loading",e[4]=!1;break;case"wait_kyc":e[0]=this.$t("exchangeIng"),e[1]="#707B9E",e[2]=2,e[3]="loading",e[4]=!1;break;case"timeout":e[0]=this.$t("timeout"),e[1]="#FF8484",e[2]=1,e[3]=!1,e[4]=!0;break;case"wait_refund_confirm":e[0]=this.$t("wait_refund_confirm"),e[1]="#707B9E",e[2]=3,e[3]="loading",e[4]=!1;break;case"wait_partial_send":e[0]=this.$t("wait_partial_send"),e[1]="#707B9E",e[2]=3,e[3]="loading",e[4]=!1;break;case"wait_partial_send_confirm":e[0]=this.$t("wait_partial_send_confirm"),e[1]="#707B9E",e[2]=3,e[3]="loading",e[4]=!1;break;case"wait_partial_refund":e[0]=this.$t("wait_partial_refund"),e[1]="#707B9E",e[2]=3,e[3]="loading",e[4]=!1;break;case"wait_partial_refund_confirm":e[0]=this.$t("wait_partial_refund_confirm"),e[1]="#707B9E",e[2]=3,e[3]="loading",e[4]=!1;break;case"partial_complete":e[0]=this.$t("partial_complete"),e[1]="#1eb740",e[2]=4,e[3]="loading",e[4]=!1;break;case"complete":e[0]=this.$t("receive_complete"),e[1]="#1eb740",e[2]=4,e[3]=!0,e[4]=!0;break;case"wait_partial_send_confirm_error":e[0]=this.$t("wait_partial_send_confirm_error"),e[1]="#707B9E",e[2]=3,e[3]="loading",e[4]=!1;break;case"wait_partial_refund_confirm_error":e[0]=this.$t("wait_partial_refund_confirm_error"),e[1]="#707B9E",e[2]=3,e[3]="loading",e[4]=!1;break;default:e[0]=this.$t("exchangeIng"),e[1]="#707B9E",e[2]=2,e[3]="loading",e[4]=!1}return e},async AISetToken(t){const e=await a.Z.queryCoinList();if(800==e.resCode){const s=e.data,i=s.filter((e=>e.coinCode===t.fromCoinCode)),r=s.filter((e=>e.coinCode===t.toCoinCode));if(this.fromToken&&this.toToken&&this.fromToken.coinCode==i[0].coinCode&&this.toToken.coinCode==r[0].coinCode)return;i.length>0&&r.length>0&&(this.tokenData={from:i[0],to:r[0]},this.$refs.AIChooseToken.show=!0)}}},watch:{"$store.state.wallet":{deep:!0,handler:function(t){this.queryAllTrade()}},"$store.state.walletPolkadot":{deep:!0,handler:function(t){this.queryAllTrade()}},recordType:{deep:!0,handler:function(t){this.list=[],this.queryAllTrade()}},walletAddress(t){""!=t&&(this.isFirst=!0)}},created(){"bridgers"==this.bridgersFlag?this.recordType="bridgers1":this.recordType="swft",this.$bus.on("queryAllTradeHandle",this.queryAllTrade),""===this.$store.state.wallet.address&&null===this.$store.state.wallet.address||this.queryAllTrade()},beforeDestroy(){clearInterval(this.timer),this.$bus.off("queryAllTradeHandle",this.queryAllTrade)}},C=_,p=(0,u.Z)(C,i,r,!1,null,"bd1a23f6",null),b=p.exports},77974:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"record-tab"},[e("div",{staticClass:"tab"},[e("div",{staticClass:"activeDiv",style:{left:t.leftAtive}}),e("span",{class:"bridgers1"==t.recordType?"active":"",on:{click:function(e){return t.changeRecordType("bridgers1")}}},[t._v("bridgers1")]),e("span",{class:"bridgers2"==t.recordType?"active":"",on:{click:function(e){return t.changeRecordType("bridgers2")}}},[t._v("bridgers2")])])])},r=[],a={name:"RecordRab",data(){return{leftAtive:"1%"}},computed:{recordType:{get(){return this.$store.state.recordType},set(t){this.$store.commit("setRecordType",t)}}},methods:{changeRecordType(t){"bridgers1"==t?this.leftAtive="1%":"bridgers2"==t&&(this.leftAtive="50%"),this.recordType=t}}},o=a,n=s(43736),d=(0,n.Z)(o,i,r,!1,null,"68179cc2",null),c=d.exports},18621:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"record-tab"},[e("div",{staticClass:"tab"},[e("div",{staticClass:"activeDiv",style:{left:t.leftAtive}}),e("span",{class:"swft"==t.recordType?"active":"",on:{click:function(e){return t.changeRecordType("swft")}}},[t._v(t._s("miningtw"==t.twFlag?"SWAP":"burndex"==t.twFlag?"Stablex":"DROXEN"))]),e("span",{class:"bridgers1"==t.recordType?"active":"",on:{click:function(e){return t.changeRecordType("bridgers1")}}},[t._v("bridgers")])])])},r=[],a={name:"RecordRab",data(){return{leftAtive:"1%",twFlag:localStorage.getItem("twFlag")}},computed:{recordType:{get(){return this.$store.state.recordType},set(t){this.$store.commit("setRecordType",t)}}},methods:{changeRecordType(t){"swft"==t?this.leftAtive="1%":"bridgers1"==t?this.leftAtive="49%":"NFT"==t&&(this.leftAtive="66%"),this.recordType=t}}},o=a,n=s(43736),d=(0,n.Z)(o,i,r,!1,null,"593a78f7",null),c=d.exports},5245:function(t,e,s){t.exports=s.p+"img/ai-dialog.a11d8c21.svg"},89899:function(t){t.exports="img/logo.png"}}]);