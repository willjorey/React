(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,n){e.exports=n(51)},29:function(e,t,n){},35:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"DATA_AVAILABLE",function(){return b}),n.d(a,"LOGOUT",function(){return h}),n.d(a,"SET_PROFILE",function(){return g}),n.d(a,"LOGOUT_PROFILE",function(){return E}),n.d(a,"ADD_SUB",function(){return O}),n.d(a,"setProfile",function(){return v});var o=n(1),r=n.n(o),i=n(19),c=n.n(i),l=(n(29),n(6)),s=n(7),u=n(10),p=n(8),m=n(11),f=n(9),d=n(3),b="DATA_AVAILABLE",h="LOGOUT",g="SET_PROFILE",E="LOGOUT_PROFILE",O="ADD_SUB";function v(e){return function(t){t({type:g,profile:e})}}n(35);var w=n(22),A=n.n(w).a.initializeApp({apiKey:"AIzaSyCbIHF6AK4Kc1HK0Z9wELL7BEI3qst7-bg",authDomain:"basketball-9e231.firebaseapp.com",databaseURL:"https://basketball-9e231.firebaseio.com",projectId:"basketball-9e231",storageBucket:"basketball-9e231.appspot.com",messagingSenderId:"223402913199"}),L=n(23),j=n.n(L),I=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).setEmail=function(e){n.setState({email:e.target.value})},n.setPass=function(e){n.setState({pass:e.target.value})},n.onLogin=function(){var e=n.state.email,t=n.state.pass;A.auth().signInWithEmailAndPassword(e,t).then(function(e){console.log(e.user)}).catch(function(e){"auth/invalid-email"===e.code&&console.log(e.code),"auth/wrong-password"===e.code&&console.log(e.code)})},console.log(n.props),n.state={email:"",pass:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"form"},r.a.createElement("img",{src:j.a,className:"App-logo",alt:"logo"}),r.a.createElement("form",{id:"login"},r.a.createElement("p",null,"Email"),r.a.createElement("input",{type:"text",value:this.state.email,onChange:this.setEmail}),r.a.createElement("br",null),r.a.createElement("p",null,"Password"),r.a.createElement("input",{type:"text",value:this.state.pass,onChange:this.setPass}),r.a.createElement("br",null)),r.a.createElement("button",{onClick:this.onLogin},"Login")))}}]),t}(o.Component);var k=Object(f.b)(function(e,t){return{profile:e.profileReducer.profile}},function(e){return Object(d.a)(a,e)})(I),y=n(15),P={profile:{email:"My email"}},B=Object(d.b)({profileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return e=Object(y.a)({},P,{profile:t.profile});case E:return e=Object(y.a)({},P.profile);default:return e}}}),S=Object(d.c)(B),T=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{store:S},r.a.createElement(k,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.35f39d9f.chunk.js.map