"use strict";(self["webpackChunkcli"]=self["webpackChunkcli"]||[]).push([[945],{4945:function(e,s,r){r.r(s),r.d(s,{default:function(){return g}});var t=r(3396),n=r(7139),i=r(1707);const a={class:"container"},l={class:"main__info"},u={class:"main__info-left"},c={class:"user__info"},d=(0,t._)("img",{src:i,alt:"",class:"UserPFP"},null,-1),_=(0,t._)("h2",null,"Address:",-1);function o(e,s,r,i,o,h){return(0,t.wg)(),(0,t.iD)("div",a,[(0,t._)("div",l,[(0,t._)("div",u,[(0,t._)("div",c,[d,(0,t._)("h1",null,(0,n.zw)(h.getUser.name)+"'s information:",1),(0,t._)("p",null,"Name: "+(0,n.zw)(h.getUser.name),1),(0,t._)("p",null,"Username: "+(0,n.zw)(h.getUser.username),1),(0,t._)("p",null,"Email: "+(0,n.zw)(h.getUser.email),1),_,(0,t._)("p",null,"City: "+(0,n.zw)(h.getUser.address.city),1),(0,t._)("p",null,"Street: "+(0,n.zw)(h.getUser.address.street),1)])])])])}var h={data(){return{currentId:null}},created(){this.currentId=this.$route.params.id,this.getUsers()},computed:{users(){return this.$store.state.users},getUser(){return this.users.find((e=>e.id==this.currentId))}},methods:{getUsers(){this.$store.dispatch("getUsers")}}},m=r(89);const f=(0,m.Z)(h,[["render",o]]);var g=f}}]);
//# sourceMappingURL=945.15beb19d.js.map