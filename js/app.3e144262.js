(function(e){function t(t){for(var c,a,u=t[0],s=t[1],i=t[2],b=0,f=[];b<u.length;b++)a=u[b],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],c=!0,u=1;u<r.length;u++){var s=r[u];0!==n[s]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var c={},n={app:0},o=[];function a(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=c,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(r,c,function(t){return e[t]}.bind(null,c));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/frontend-challenge/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02d8":function(e,t,r){},4993:function(e,t,r){"use strict";r("5eb4")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var c=r("7a23"),n={key:0,class:"home"},o=Object(c["e"])("h2",null,"Project of a SPA using public resources from github. (Demo version. The css will be redone. I'M BACKEND !!!)",-1),a=Object(c["e"])("h4",null,"That shit must be reactive and responsive. If it’s not like that on your device, let me know!",-1),u=Object(c["e"])("p",{class:"search-devs"},"Search Devs:",-1),s={for:"username"},i={key:1,class:"grid-container",id:"profile"},l={class:"conteiner-profile"},b={class:"conteiner-repository"};function f(e,t,r,f,j,p){var O=Object(c["j"])("Profile"),d=Object(c["j"])("Repo");return Object(c["f"])(),Object(c["c"])("div",null,[0==this.user?(Object(c["f"])(),Object(c["c"])("div",n,[Object(c["e"])("h1",null,Object(c["k"])(j.title),1),o,a,u,Object(c["e"])("label",s,[Object(c["e"])("input",{onKeyup:t[1]||(t[1]=Object(c["l"])((function(){return p.getUser&&p.getUser.apply(p,arguments)}),["enter"])),id:"search",type:"text",name:"username",placeholder:"GitHub name",class:"form-control",required:""},null,32)])])):Object(c["d"])("",!0),0!=j.user?(Object(c["f"])(),Object(c["c"])("div",i,[Object(c["e"])("div",l,[Object(c["e"])(O,{user:j.user},null,8,["user"])]),Object(c["e"])("div",b,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(j.repos,(function(e){return Object(c["f"])(),Object(c["c"])(d,{key:e,repo:e},null,8,["repo"])})),128))])])):Object(c["d"])("",!0)])}r("99af"),r("b0c0");var j=Object(c["m"])("data-v-7c17c2a6");Object(c["h"])("data-v-7c17c2a6");var p={class:"container-profile",id:"profile"},O={class:"information"},d={class:"name"},h={class:"username"},v={key:0,class:"bio"},m={key:1},g={key:2},y={key:3},k={key:4};Object(c["g"])();var w=j((function(e,t,r,n,o,a){return Object(c["f"])(),Object(c["c"])("div",null,[Object(c["e"])("div",p,[Object(c["e"])("a",{to:r.user.html_url},[Object(c["e"])("img",{style:{height:"auto"},alt:"Avatar",width:"125",height:"125",class:"avatar",src:r.user.avatar_url},null,8,["src"])],8,["to"]),Object(c["e"])("div",O,[Object(c["e"])("p",d,[Object(c["e"])("b",null,Object(c["k"])(r.user.name),1)]),Object(c["e"])("p",h,"@"+Object(c["k"])(r.user.login),1),r.user.bio?(Object(c["f"])(),Object(c["c"])("p",v,Object(c["k"])(r.user.bio),1)):Object(c["d"])("",!0),Object(c["e"])("p",null,Object(c["k"])(r.user.followers)+" followers, "+Object(c["k"])(r.user.following)+" following ",1),r.user.company?(Object(c["f"])(),Object(c["c"])("p",m,"Company: "+Object(c["k"])(r.user.company),1)):Object(c["d"])("",!0),r.user.location?(Object(c["f"])(),Object(c["c"])("p",g,"Location: "+Object(c["k"])(r.user.location),1)):Object(c["d"])("",!0),r.user.twitter_username?(Object(c["f"])(),Object(c["c"])("p",y,"Twitter: @"+Object(c["k"])(r.user.twitter_username),1)):Object(c["d"])("",!0),r.user.email?(Object(c["f"])(),Object(c["c"])("p",k,"Email: "+Object(c["k"])(r.user.email),1)):Object(c["d"])("",!0)])])])})),_={data:function(){return{bio:"",image:""}},props:["user"],methods:{getBio:function(e){this.bio=e.target.value}}};r("4993");_.render=w,_.__scopeId="data-v-7c17c2a6";var P=_,x=r("bc3a"),S=r.n(x),M=(r("a4d3"),r("e01a"),Object(c["m"])("data-v-3c9267f4"));Object(c["h"])("data-v-3c9267f4");var T={class:"repository"},I=Object(c["e"])("hr",null,null,-1);Object(c["g"])();var A=M((function(e,t,r,n,o,a){return Object(c["f"])(),Object(c["c"])("div",T,[Object(c["e"])("h2",null,[Object(c["e"])("b",null,Object(c["k"])(r.repo.name),1)]),Object(c["e"])("p",null,Object(c["k"])(r.repo.description),1),Object(c["e"])("p",null,"stars: "+Object(c["k"])(r.repo.stargazers_count)+" watchers: "+Object(c["k"])(r.repo.watchers_count),1),I])})),D={props:["repo"]};r("ffe2");D.render=A,D.__scopeId="data-v-3c9267f4";var U=D,B={data:function(){return{title:"Frontend challenge",github:{url:"https://api.github.com/users",client_id:"",client_secret:"",count:7,sort:"create_at"},user:[],repos:[]}},components:{Profile:P,Repo:U},methods:{getUser:function(e){var t=this,r=e.target.value,c=this.github.url;S.a.get("".concat(c,"/").concat(r)).then((function(e){var r=e.data;return t.user=r})),S.a.get("".concat(c,"/").concat(r,"/repos")).then((function(e){var r=e.data;return t.repos=r}))}}};r("fbd8");B.render=f;var C=B;Object(c["b"])(C).mount("#app")},"5eb4":function(e,t,r){},"83fc":function(e,t,r){},fbd8:function(e,t,r){"use strict";r("83fc")},ffe2:function(e,t,r){"use strict";r("02d8")}});
//# sourceMappingURL=app.3e144262.js.map