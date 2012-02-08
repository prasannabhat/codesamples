var DISQUS=function(e,j){var g=e.document,t=0,q=g.getElementsByTagName("head")[0]||g.getElementsByTagName("body")[0],r={running:!1,timer:null,queue:[]},o={"0.0":{},"1.0":{}},v=[],b={config:{},blocks:{theme:{},defaults:{}},status:null,settings:{store_:{},schema_:{"disqus.version":{type:"str"},"disqus.domain":{type:"str"},"disqus.debug":{type:"bool"},"disqus.minified":{type:"bool"},"disqus.readonly":{type:"bool"},"disqus.recaptcha.key":{type:"str"},"disqus.facebook.appId":{type:"str"},"disqus.facebook.apiKey":{type:"str"},
"disqus.urls.main":{type:"str"},"disqus.urls.media":{type:"str"},"disqus.urls.sslMedia":{type:"str"},"disqus.urls.realtime":{type:"str"},"disqus.urls.uploads":{type:"str"},"disqus.urls.unmerged":{type:"str"}}}};b.settings.store_={"disqus.recaptcha.key":"6LdKMrwSAAAAAPPLVhQE9LPRW4LUSZb810_iaa8u","disqus.urls.media":"http://mediacdn.disqus.com/1325732276","disqus.urls.main":"http://disqus.com","disqus.urls.uploads":"http://media.disqus.com/uploads","disqus.urls.realtime":"http://rt.disqus.com/forums/realtime-cached.js",
"disqus.urls.unmerged":"http://disqus.com/embed/profile/unmerged_profiles/","disqus.urls.sslMedia":"https://securecdn.disqus.com/1325732276","disqus.domain":"disqus.com","disqus.version":"1325732276","disqus.debug":!1,"disqus.minified":!0};b.settings.add=function(d,c,f){b.assert(b.settings.schema_[d]==null||f,"Unsafe attempt to update settings schema.");b.assert(c.type!=null,"Missing required property 'key'.");b.settings.schema_[d]=c;return b.settings};b.settings.get=function(d,c){var f=b.settings.schema_[d];
b.assert(f!=null,"Undefined key '"+d+"'.");var i=b.settings.store_[d];if(i==null)return c;if(f.values&&!f.values.length){var l={};b.each(f.values,function(a,b){l[a]=b});return l[i]}return i};b.settings.set=function(d,c){var f=b.settings.schema_[d],i;b.assert(f!=null,"Undefined key '"+d+"'.");i=function(b){for(var a=0,d;d=b[a];a++){if(d=="str"&&typeof c=="string")return!0;if(d=="bool"&&typeof c=="boolean")return!0;if(d=="int"&&typeof c=="number")return!0;if(d=="obj"&&typeof c=="object")return!0}return!1}(typeof f.type==
"string"?[f.type]:f.type);b.assert(i,"Invalid type for rule '"+d+"'.");f.values&&b.assert(b.contains(f.values,c),"Value is not acceptable.");f.rule&&b.assert(f.rule(c,d),"Value didn't pass schema's rule.");b.settings.store_[d]=f.values&&!f.values.length?f.values[c]:c};b.each=function(b,c){var f=b.length,i=Array.prototype.forEach;if(isNaN(f))for(var l in b)b.hasOwnProperty(l)&&c(b[l],l,b);else if(i)i.call(b,c);else for(i=0;i<f;i++)c(b[i],i,b)};b.isBrowser=function(b){var c=e.navigator.userAgent,f=
/(iPhone|Android|iPod|iPad|webOS|Mobile Safari|Windows Phone)/i;switch(b){case "ie":return/msie/i.test(c)&&!/opera/i.test(c);case "ie6":return!e.XMLHttpRequest;case "ie7":return/msie/i.test(c)&&!/opera/i.test(c)&&parseInt(/MSIE\s(\d+\.\d+)/.exec(c)[1],10)==7;case "webkit":return~c.indexOf("AppleWebKit/");case "opera":return!(!e.opera||!e.opera.buildNumber);case "gecko":return~c.indexOf("Gecko/");case "mobile":return f.test(c);case "quirks":return g.compatMode==="BackCompat";default:return!1}};b.AssertionError=
function(b){this.message=b};b.AssertionError.prototype.toString=function(){return"Assertion Error: "+(this.message||"[no message]")};b.assert=function(d,c){if(!d)throw new b.AssertionError(c);};b.api=function(d,c){var f=b.comm&&b.comm.Default.recover();if(f){if(!c.type)c.type="GET";if(!c.success)c.success=function(){};if(!c.failure)c.failure=function(){};if(!c.data)c.data={};f.api(d,c.data,c.type,c.success,c.failure)}else b.once("loader.onDefaultChannelReady",function(){b.api(d,c)})};b.each(["bind",
"once","unbind","unbindAll","trigger"],function(d){b[d]=function(c,f){var i;c&&(c=c.replace(".","_"));switch(d){case "bind":b.bean.add(b,c,f);break;case "once":i=function(){b.unbind(c,i);f.apply(this,arguments)};b.bind(c,i);break;case "unbind":b.bean.remove(b,c,f);break;case "unbindAll":b.bean.remove(b,c);break;case "trigger":b.bean.fire(b,c,[f])}}});b.contains=function(b,c){if(b.length){for(var f=0,i=b.length;f<i;f++)if(b[f]==c)return!0;return!1}for(f in b)if(b.hasOwnProperty(f)&&f==c)return!0;return!1};
b.defer=function(d,c){function f(){var c=r.queue;if(c.length===0)r.running=!1,clearInterval(r.timer);try{for(var d=0,a;a=c[d];d++)a[0]()&&(c.splice(d--,1),a[1]())}catch(f){if(!(f instanceof b.AssertionError))throw f;}}r.queue.push([d,c]);f();if(!r.running)r.running=!0,r.timer=setInterval(f,100)};b.define=function(d,c){for(var f=d.split("."),i=f.shift(),e=b,a=c.call({overwrites:function(a){a.__overwrites__=!0;return a}});i;)e=e[i]?e[i]:e[i]={},i=f.shift();b.each(a,function(c,d){!a.__overwrites__&&
!b.reset_&&b.assert(e[d]==null,"Unsafe attempt to redefine existing module.");e[d]=c;v.push(function(){delete e[d]})})};b.cleanup=function(){for(var b=0;b<v.length;b++)v[b]()};b.empty=function(b){for(var c in b)if(b.hasOwnProperty(c))return!1;return!0};b.extend=function(){var d,c;arguments.length<=1?(d=b,c=[arguments[0]||{}]):(d=arguments[0]||{},c=Array.prototype.slice.call(arguments,1));b.each(c,function(c){b.each(c,function(b,c){d[c]=b})});return d};b.getGuid=function(){return t++};b.partial=function(){var b=
arguments[0],c=Array.prototype.slice.call(arguments,1);return function(){for(var f=Array.prototype.slice.call(arguments),i=[],e=0,a=c.length;e<a;e++)i.push(c[e]===j?f.shift():c[e]);for(;f.length>0;)i.push(f.shift());return b.apply(this,i)}};b.serializeArgs=function(d){var c=[];b.each(d,function(b,d){b!==j&&c.push(d+(b!==null?"="+encodeURIComponent(b):""))});return c.join("&")};b.serialize=function(d,c,f){c&&(d+=~d.indexOf("?")?d.charAt(d.length-1)=="&"?"":"&":"?",d+=b.serializeArgs(c));if(f)return c=
{},c[(new Date).getTime()]=null,b.serialize(d,c);c=d.length;return d.charAt(c-1)=="&"?d.slice(0,c-1):d};b.sdk=function(d){function c(c){return function(){function f(e){c!=e.name||d!=e.version||(e.func.apply({},a),b.unbind("loader.onSDKMethodReady",f))}var a=Array.prototype.slice.call(arguments);b.bind("loader.onSDKMethodReady",f)}}var f=o[d||"1.0"];b.assert(f!==j,"version is not supported.");if(!b.empty(f))return f;f=b.settings.get("disqus.debug")?"/js/src/sdk/":"/build/system/sdk/";b.require(b.settings.get("disqus.urls.media")+
f+d+".js");return{getThread:c("getThread"),getSession:c("getSession")}};b.sdk.add=function(d,c,f){b.assert(o[c]!==j,"version is not supported.");o[c][d]=f;b.trigger("loader.onSDKMethodReady",{name:d,version:c,func:f})};b.useSSL=function(d){var c,f,i;if(e.location.href.match(/^https/))if(d){c=["disqus_url","realtime_url","uploads_url"];for(i=0;f=c[i];i++)d[f]=d[f].replace(/^http/,"https");d.media_url=d.ssl_media_url}else{c=["disqus.urls.main","disqus.urls.realtime","disqus.urls.uploads"];for(i=0;f=
c[i];i++)b.settings.set(f,b.settings.get(f).replace(/^http/,"https"));b.settings.set("disqus.urls.media",b.settings.get("disqus.urls.sslMedia"))}};b.useSSL();b.ready=function(d){function c(){var c=b.settings.get("disqus.urls.media"),d=c+"/js/src/embed/custom/",e=c+"/build/system/",a=b.settings.get("disqus.debug"),g=b.settings.get("disqus.urls.media"),j;b.status="loading";a?(j=c+"/styles/dtpl/defaults.css",c=[d+"strings.js",d+"dtpl.js",d+"actions.js",d+"validators.js",d+"utils.js",d+"nodes.js",d+"sandbox.js",
d+"tooltip.js",d+"comm.js",d+"ui.js",d+"sso.js",d+"compat.js",d+"facebook.js",e+"defaults.js",c+"/js/src/lib/easyxdm.js",c+"/js/src/json.js",c+"/js/src/sdk/1.0.js"],b.config.includeStacktrace&&c.push(g+"/js/src/lib/stacktrace.js")):(j=e+"/defaults.css",c=[e+"disqus.js"]);b.requireStylesheet(j);b.requireSet(c,a,function(){b.status="ready";b.trigger("loader.onFilesReady")})}if(b.status=="ready")d();else b.once("loader.onFilesReady",function(){d()});b.status===null&&c()};b.require=function(d,c,f,e,l){function a(c){if(c.type==
"load"||/^(complete|loaded)$/.test(c.target.readyState))e&&e(),o&&clearTimeout(o),b.bean.remove(c.target,r,a)}var j=g.createElement("script"),r=j.addEventListener?"load":"readystatechange",o=null;j.src=b.serialize(d,c,f);j.async=!0;j.charset="UTF-8";(e||l)&&b.bean.add(j,r,a);l&&(o=setTimeout(function(){l()},2E4));q.appendChild(j);return b};b.requireSet=function(d,c,f){var e=d.length;b.each(d,function(d){b.require(d,{},c,function(){--e===0&&f()})})};b.requireStylesheet=function(d,c,f){var e=g.createElement("link");
e.rel="stylesheet";e.type="text/css";e.href=b.serialize(d,c,f);q.appendChild(e);return b};b.injectCss=function(b){var c=g.createElement("style");c.setAttribute("type","text/css");b=b.replace(/\}/g,"}\n");e.location.href.match(/^https/)&&(b=b.replace(/http:\/\//g,"https://"));c.styleSheet?c.styleSheet.cssText=b:c.appendChild(g.createTextNode(b));q.appendChild(c)};b.addBlocks=function(d,c){if(c)return function(){var d=b.blocks;b.blocks={};c();b.blocks=b.extend(d,{theme:b.blocks})}();var f={Builder:b.strings.Builder,
renderBlock:b.renderBlock,each:b.each,extend:b.extend,blocks:b.blocks[d||"defaults"],interpolate:b.strings.interpolate};return function(b){b(f)}};b.renderBlock=function(d,c){var f=d;typeof d==="string"&&(f=b.getBlock(d));if(f===j)throw"Block "+d+" was not found!";return b.sandbox.wrap(d,f,c)};b.getBlock=function(d){return b.blocks.theme[d]||b.blocks.defaults[d]};b.window={getSize:function(){return typeof e.innerWidth=="number"?[e.innerWidth,e.innerHeight]:g.documentElement?[g.documentElement.clientWidth||
g.body.clientWidth,g.documentElement.clientHeight||g.body.clientHeight]:[-1,-1]},getScrollPosition:function(){var b=g.documentElement;return b&&(b.scrollTop||b.scrollWidth)?[b.scrollWidth,b.scrollTop||g.body.scrollTop]:[g.body.scrollWidth,g.body.scrollTop]}};return b}(this);
(function(e){function j(a){a=a.relatedTarget;if(!a)return a===null;var b;if(b=a!=this)if(b=a.prefix!="xul")if(b=!/document/.test(this.toString())){var c;a:for(a=a.parentNode;a!==null;){if(a==this){c=!0;break a}a=a.parentNode}b=!c}return b}var g=1,t={},q={},r=/over|out/,o=/[^\.]*(?=\..*)\.|.*/,v=/\..*/,b=((e.document||{}).documentElement||{}).addEventListener,d=b?"addEventListener":"attachEvent",c=function(a,b){return a.__uid=b||a.__uid||g++},f=function(a){a=c(a);return t[a]=t[a]||{}},i=b?function(a,
b,c,h){a[h?"addEventListener":"removeEventListener"](b,c,!1)}:function(a,b,c,h,d){d&&h&&(a["_on"+d]=a["_on"+d]||0);a[h?"attachEvent":"detachEvent"]("on"+b,c)},l=function(a,b,c){return function(d){d=h(d||((this.ownerDocument||this.document||this).parentWindow||e).event);return b.apply(a,[d].concat(c))}},a=function(a,c,h,d,k){return function(f){if(d?d.apply(this,arguments):b||f&&f.propertyName=="_on"+h||!f)c.apply(a,Array.prototype.slice.call(arguments,f?0:1).concat(k))}},s=function(h,e,m,F){var n=
e.replace(v,""),w=f(h),w=w[n]||(w[n]={}),j=m,e=c(m,e.replace(o,""));if(w[e])return h;var g=p[n];g&&(m=g.condition?a(h,m,n,g.condition):m,n=g.base||n);m=(g=k[n])?l(h,m,F):a(h,m,n,!1,F);g=b||g;if(n=="unload")var D=m,m=function(){u(h,n,m)&&D()};h[d]&&i(h,g?n:"propertychange",m,!0,!g&&n);w[e]=m;m.__uid=e;m.__originalFn=j;return n=="unload"?h:q[c(h)]=h},u=function(a,c,h){var m;var e,n,w=f(a),g=c.replace(v,"");if(!w||!w[g])return a;m=(c=c.replace(o,""))?c.split("."):[h.__uid],c=m;for(n=c.length;n--;)e=
c[n],h=w[g][e],delete w[g][e],a[d]&&(g=p[g]?p[g].base:g,e=b||k[g],i(a,e?g:"propertychange",h,!1,!e&&g));return a},y=function(a,b,c){return function(h){for(var d=typeof a=="string"?c(a,this):a,k=h.target;k&&k!=this;k=k.parentNode)for(var e=d.length;e--;)if(d[e]==k)return b.apply(k,arguments)}},x=function(a,b,c,h,d){if(typeof b=="object"&&!c)for(var k in b)b.hasOwnProperty(k)&&x(a,k,b[k]);else{k=typeof c=="string";for(var e=(k?c:b).split(" "),c=k?y(b,h,d):c,f=e.length;f--;)s(a,e[f],c,Array.prototype.slice.call(arguments,
k?4:3))}return a},A=function(a,b,c){var h,d,k,e=typeof b=="string",g=e&&b.replace(o,""),p=u,i=f(a);if(e&&/\s/.test(b)){b=b.split(" ");for(k=b.length-1;A(a,b[k])&&k--;);return a}d=e?b.replace(v,""):b;if(!i||e&&!i[d]){if(i&&g)for(h in i)if(i.hasOwnProperty(h))for(k in i[h])i[h].hasOwnProperty(k)&&k===g&&p(a,[h,g].join("."));return a}if(typeof c=="function")p(a,d,c);else if(g)p(a,b);else for(h in p=d?p:A,b=e&&d,d=d?c||i[d]||d:i,d)d.hasOwnProperty(h)&&(p(a,b||h,d[h]),delete d[h]);return a},E=b?function(a,
b,c){evt=document.createEvent(a?"HTMLEvents":"UIEvents");evt[a?"initEvent":"initUIEvent"](b,!0,!0,e,1);c.dispatchEvent(evt)}:function(a,b,c){a?c.fireEvent("on"+b,document.createEventObject()):c["_on"+b]++},B=function(a,b,h){var d=f(b),k;c(a);d=h?d[h]:d;for(k in d)d.hasOwnProperty(k)&&(h?x:B)(a,h||b,h?d[k].__originalFn:k);return a},h=function(a){var b={};if(!a)return b;var c=a.type,d=a.target||a.srcElement;b.preventDefault=h.preventDefault(a);b.stopPropagation=h.stopPropagation(a);b.target=d&&d.nodeType==
3?d.parentNode:d;if(~c.indexOf("key"))b.keyCode=a.which||a.keyCode;else if(/click|mouse|menu/i.test(c)){b.rightClick=a.which==3||a.button==2;b.pos={x:0,y:0};if(a.pageX||a.pageY)b.clientX=a.pageX,b.clientY=a.pageY;else if(a.clientX||a.clientY)b.clientX=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,b.clientY=a.clientY+document.body.scrollTop+document.documentElement.scrollTop;r.test(c)&&(b.relatedTarget=a.relatedTarget||a[(c=="mouseover"?"from":"to")+"Element"])}for(var k in a)k in
b||(b[k]=a[k]);return b};h.preventDefault=function(a){return function(){a.preventDefault?a.preventDefault():a.returnValue=!1}};h.stopPropagation=function(a){return function(){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}};var k={click:1,dblclick:1,mouseup:1,mousedown:1,contextmenu:1,mousewheel:1,DOMMouseScroll:1,mouseover:1,mouseout:1,mousemove:1,selectstart:1,selectend:1,keydown:1,keypress:1,keyup:1,orientationchange:1,touchstart:1,touchmove:1,touchend:1,touchcancel:1,gesturestart:1,gesturechange:1,
gestureend:1,focus:1,blur:1,change:1,reset:1,select:1,submit:1,load:1,unload:1,beforeunload:1,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1},p={mouseenter:{base:"mouseover",condition:j},mouseleave:{base:"mouseout",condition:j},mousewheel:{base:/Firefox/.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel"}},D={add:x,remove:A,clone:B,fire:function(a,b,c){var h,e,p=b.split(" ");for(e=p.length;e--;){var b=p[e].replace(v,""),g=k[b],i=p[e].replace(o,""),j=f(a)[b];if(i){i=
i.split(".");for(h=i.length;h--;)j&&j[i[h]]&&j[i[h]].apply(a,[!1].concat(c))}else if(!c&&a[d])E(g,b,a);else for(h in j)j.hasOwnProperty(h)&&j[h].apply(a,[!1].concat(c))}return a}};e.attachEvent&&x(e,"unload",function(){for(var a in q)if(q.hasOwnProperty(a)){var b=A(q[a]).__uid;b&&(delete q[b],delete t[b])}e.CollectGarbage&&CollectGarbage()});var C=e.bean;D.noConflict=function(){e.bean=C;return this};typeof module!=="undefined"&&module.exports?module.exports=D:e.bean=D})(this);
(function(e,j){function g(){this.c={}}function t(a){y=[];i=0;for(A=a.length;i<A;i++)y[i]=a[i];return y}function q(a){for(;a=a.previousSibling;)if(a.nodeType==1)break;return a}function r(a,b,c,h,d,k,e,g,j,l,m){var n,C;if(b&&this.tagName.toLowerCase()!==b)return!1;if(c&&(n=c.match(p))&&n[1]!==this.id)return!1;if(c&&(B=c.match(D)))for(i=B.length;i--;)if(a=B[i].slice(1),!(G.g(a)||G.s(a,RegExp("(^|\\s+)"+a+"(\\s+|$)"))).test(this.className))return!1;if(j&&f.pseudos[j]&&!f.pseudos[j](this,m))return!1;if(h&&
!e)for(C in u=this.attributes,u)if(Object.prototype.hasOwnProperty.call(u,C)&&(u[C].name||C)==d)return this;if(h&&!v(k,this.getAttribute(d)||"",e))return!1;return this}function o(a){return I.g(a)||I.s(a,a.replace(P,"\\$1"))}function v(a,b,c){switch(a){case "=":return b==c;case "^=":return b.match(z.g("^="+c)||z.s("^="+c,RegExp("^"+o(c))));case "$=":return b.match(z.g("$="+c)||z.s("$="+c,RegExp(o(c)+"$")));case "*=":return b.match(z.g(c)||z.s(c,RegExp(o(c))));case "~=":return b.match(z.g("~="+c)||
z.s("~="+c,RegExp("(?:^|\\s+)"+o(c)+"(?:\\s+|$)")));case "|=":return b.match(z.g("|="+c)||z.s("|="+c,RegExp("^"+o(c)+"(-|$)")))}return 0}function b(a){var b=[],c=[],h,d=0,k,e,f,i,p,g=J.g(a)||J.s(a,a.split(O)),a=a.match(N),g=g.slice(0);if(!g.length)return b;e=g.pop();i=g.length&&(h=g[g.length-1].match(C))?j.getElementById(h[1]):j;if(!i)return b;p=e.match(H);k=a&&/^[+~]$/.test(a[a.length-1])?function(a){for(;i=i.nextSibling;)i.nodeType==1&&(p[1]?p[1]==i.tagName.toLowerCase():1)&&a.push(i);return a}([]):
i.getElementsByTagName(p[1]||"*");h=0;for(e=k.length;h<e;h++)if(f=r.apply(k[h],p))b[d++]=f;if(!g.length)return b;d=0;e=b.length;for(k=0;d<e;d++){f=b[d];for(h=g.length;h--;)for(;f=Q[a[h]](f,b[d]);)if(E=r.apply(f,g[h].match(H)))break;E&&(c[k++]=b[d])}return c}function d(a,b,c){c=typeof b=="string"?c(b)[0]:b||j;if(a===window||a&&a.nodeType&&(a.nodeType==1||a.nodeType==9))return!b||a!==window&&c&&c.nodeType&&(c.nodeType==1||c.nodeType==9)&&K(a,c)?[a]:[];if(a&&typeof a==="object"&&isFinite(a.length))return t(a);
if(s=a.match(C))return(x=j.getElementById(s[1]))?[x]:[];if(s=a.match(M))return t(c.getElementsByTagName(s[1]));return!1}function c(a){var b=[],c,h;c=0;a:for(;c<a.length;c++){for(h=0;h<b.length;h++)if(b[h]==a[c])continue a;b[b.length]=a[c]}return b}function f(a,b){var c=typeof b=="string"?f(b)[0]:b||j;if(!c||!a)return[];if(s=d(a,b,f))return s;return R(a,c)}var i,l,a,s,u,y,x,A,E,B,h,k=j.documentElement,p=/#([\w\-]+)/,D=/\.[\w\-]+/g,C=/^#([\w\-]+$)/,L=/^\.([\w\-]+)$/,M=/^([\w\-]+)$/,m=/^([\w]+)?\.([\w\-]+)$/,
F=/\s*([\s\+\~>])\s*/g,n=/[\s\>\+\~]/,w=/(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\])/,N=RegExp("("+n.source+")"+w.source,"g"),O=RegExp(n.source+w.source),P=/([.*+?\^=!:${}()|\[\]\/\\])/g,H=RegExp(/^([a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/.source+"("+/\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/.source+")?("+/:([\w\-]+)(\(['"]?(\w+)['"]?\))?/.source+")?"),Q={" ":function(a){return a&&a!==k&&a.parentNode},">":function(a,b){return a&&a.parentNode==b.parentNode&&
a.parentNode},"~":function(a){return a&&a.previousSibling},"+":function(a,b,c,h){if(!a)return!1;c=q(a);h=q(b);return c&&h&&c==h&&c}};g.prototype={g:function(a){return this.c[a]||void 0},s:function(a,b){return this.c[a]=b}};var G=new g,I=new g,z=new g,J=new g,K="compareDocumentPosition"in k?function(a,b){return(b.compareDocumentPosition(a)&16)==16}:"contains"in k?function(a,b){b=b==j||b==window?k:b;return b!==a&&b.contains(a)}:function(a,b){for(;a=a.parentNode;)if(a===b)return 1;return 0},R=j.querySelector&&
j.querySelectorAll?function(a,b){if(b.getElementsByClassName&&(s=a.match(L)))return t(b.getElementsByClassName(s[1]));return t(b.querySelectorAll(a))}:function(d,k){var d=d.replace(F,"$1"),e=[],f,i=[],g;if(s=d.match(m)){h=k.getElementsByTagName(s[1]||"*");y=G.g(s[2])||G.s(s[2],RegExp("(^|\\s+)"+s[2]+"(\\s+|$)"));g=0;a=h.length;for(l=0;g<a;g++)y.test(h[g].className)&&(e[l++]=h[g]);return e}g=0;h=d.split(",");for(a=h.length;g<a;g++)i[g]=b(h[g]);g=0;for(a=i.length;g<a&&(f=i[g]);g++){var p=f;if(k!==j){p=
[];l=0;for(s=f.length;l<s&&(element=f[l]);l++)K(element,k)&&p.push(element)}e=e.concat(p)}return c(e)};f.uniq=c;f.pseudos={};var S=e.qwery;f.noConflict=function(){e.qwery=S;return this};e.qwery=f})(this,document);
(function(){DISQUS.extend({bean:bean.noConflict(),qwery:qwery.noConflict(),throttle:function(e,j,g,t){var q=(new Date).getTime();DISQUS.bean.add(e,j,function(e){var j=(new Date).getTime();j-q>=t&&(q=j,g(e))})},debounce:function(e,j,g,t){var q;DISQUS.bean.add(e,j,function(e){q&&clearTimeout(q);q=setTimeout(function(){g(e)},t)})}})})();DISQUS.modules={};DISQUS.addJob=DISQUS.defer;DISQUS.getResourceURL=DISQUS.serialize;
DISQUS.lang={contains:DISQUS.contains,forEach:DISQUS.each,extend:DISQUS.extend,trim:function(e){for(var e=e.replace(/^\s\s*/,""),j=/\s/,g=e.length;j.test(e.charAt(--g)););return e.slice(0,g+1)},partial:DISQUS.partial};DISQUS.events={add:DISQUS.bean.add,remove:DISQUS.bean.remove,debounce:DISQUS.debounce};
DISQUS.browser={ie:DISQUS.isBrowser("ie"),ie6:DISQUS.isBrowser("ie6"),ie7:DISQUS.isBrowser("ie7"),webkit:DISQUS.isBrowser("webkit"),opera:DISQUS.isBrowser("opera"),gecko:DISQUS.isBrowser("gecko"),mobile:DISQUS.isBrowser("mobile"),quirks:DISQUS.isBrowser("quirks")};
(function(e){function j(a,b){return a.hasAttribute?a.hasAttribute(b):a.getAttribute(b)!==null}function g(){for(var a=0,b=u.length;a<b;a++)if(j(u[a],"name")&&u[a].getAttribute("name")=="generator"&&j(u[a],"content")&&u[a].getAttribute("content")=="blogger")return!0;a=l.getElementById("Attribution1");if(a!=null&&a.innerHTML.indexOf("http://www.blogger.com")>0)return!0;return!1}function t(){var a;if(g()){a=l.getElementsByTagName("A");for(var b=0,c=a.length;b<c;b++)if(!j(a[b],"src")&&j(a[b],"name")&&
parseInt(a[b].getAttribute("name"),10)&&a[b].innerHTML==="")return a[b].getAttribute("name")}return null}function q(a){var b=0,c=0;if(!a.offsetParent)return[0,0];do b+=a.offsetLeft,c+=a.offsetTop,a=a.offsetParent;while(a);return[b,c]}function r(b){var c=a.window.getScrollPosition()[1],d=c+a.window.getSize()[1];return b>=c&&b<=d}function o(b){if(!(typeof s!="function"&&typeof b!="function")){var c={preData:"loader.onReady",preInit:"loader.onDataReady",onInit:"loader.onLibraryReady",afterRender:"loader.onTemplateReady",
onReady:"thread.onReady",onPaginate:"thread.onPaginate",onNewComment:"comment.onCreate",preReset:"thread.beforeReset"};a.config.callbacks={};a.config.page={};a.each(c,function(b,c){a.config.callbacks[c]=[]});try{(b||s).call(a.config)}catch(d){}a.each(a.config.callbacks,function(b,d){b.length!==0&&a.each(b,function(b){a.bind(c[d],b)})});a.config.callbacks=c}}function v(){var b={url:"thread.url",title:"thread.title",slug:"thread.slug",category_id:"thread.category",identifier:"thread.identifier",remote_auth_s3:"request.sso.data",
author_s3:"thread.author.sig",api_key:"forum.apiKey"};a.each({disqus_domain:"disqus.domain",disqus_category_id:"thread.category",disqus_thread_slug:"thread.slug",disqus_title:"thread.title",disqus_url:"thread.url",disqus_identifier:"thread.identifier",disqus_per_page:"thread.postsPerPage",disqus_require_moderation_s:"thread.moderatePosts",disqus_skip_auth:"thread.skipAuthRequest",disqus_def_email:"thread.defaults.email",disqus_def_name:"thread.defaults.name",disqus_default_text:"thread.defaults.placeholder",
disqus_shortname:"forum.shortname",disqus_facebook_key:"forum.facebook.key",disqus_custom_strings:"ui.translations",disqus_container_id:"ui.container",DsqLocal:"legacy.trackbacks",disqus_remote_auth_s2:"legacy.sso.data",disqus_author_s2:"legacy.thread.author.sig"},function(b,c){e[c]!=null&&a.settings.set(b,e[c])});if(e.disqus_sort!=null)a.settings.store_["thread.sort"]=e.disqus_sort;e.disqus_developer!=null&&a.settings.set("disqus.developer",!!e.disqus_developer);a.config&&a.config.page&&(a.config.page.remote_auth_s3!=
null&&a.settings.set("request.sso.data",a.config.page.remote_auth_s3),a.config.page.api_key!=null&&a.settings.set("forum.apiKey",a.config.page.api_key),a.each(b,function(b,c){a.config.page[c]!=null&&a.settings.set(b,a.config.page[c])}))}function b(){var b=e.location.hash,c=a.settings.get,d=c("legacy.trackbacks",{});a.extend(a.config,{container_id:c("ui.container","disqus_thread"),trackback_url:d.trackback_url||null,trackbacks:d.trackbacks||null,absorbStyles:!1});a.config.page={url:c("thread.url",
e.location.href),title:c("thread.title",""),slug:c("thread.slug"),sort:c("thread.sort",""),per_page:c("thread.postsPerPage",null),category_id:c("thread.category",""),developer:+c("disqus.developer",0),identifier:c("thread.identifier",""),require_mod_s:c("thread.moderatePosts"),remote_auth_s3:c("request.sso.data"),author_s3:c("thread.author.sig"),api_key:c("forum.apiKey"),disqus_version:c("disqus.version"),remote_auth_s2:c("legacy.sso.data"),author_s2:c("legacy.thread.author.sig")};if(a.config.page!==
"0"){var f;if(~b.search(/comment\-\d+/))a.config.page.lazy="0";else if(d=l.getElementById(a.config.container_id),f=q(d)[1],d&&r(f))a.config.page.lazy="0"}if(g())a.config.page.blogger_id=t(),a.config.page.url=a.config.page.url.replace(/\?.*$/,"");if(b&&(b=b.match(/comment\-([0-9]+)/)))a.config.page.anchor_post_id=b[1];var i=e.disqus_callback;typeof i=="function"&&a.bind("thread.onReady",function(){i(e.disqus_callback_params||null)});a.config.custom_strings=c("ui.translations",{});a.extend(a.config,
{domain:c("disqus.domain"),shortname:c("forum.shortname")||a.getShortname(),facebook_key:c("forum.facebook.key",null),def_name:c("thread.defaults.name"),def_email:c("thread.defaults.email"),def_text:c("thread.defaults.placeholder",""),skip_auth:c("thread.skipAuthRequest",!1)});c=a.config.shortname+"."+a.config.domain+"/thread.js";a.config.json_url=e.location.href.match(/^https/)?"https://"+c:"http://"+c}function d(a){return Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),
a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}function c(){a.bind("thread.onReady",function(){function b(){d&&r(d)&&a.trigger("comments.reply.viewed");f&&r(f)&&a.trigger("comments.viewed")}var c=l.getElementById("dsq-reply")||l.getElementById("dsq-new-post"),d=c?a.nodes.getPosition(c)[1]+c.offsetHeight:null,c=l.getElementById("dsq-comments"),f=a.nodes.getPosition(c)[1]+c.offsetHeight;b();a.events.debounce(e,"scroll",b,250);a.resettable=!0;a.trigger("thread.onResetReady")});a.bind("thread.onReady",
function(){var b=a.comm.Default.recover(),c=d(new Date);b.log("load:start",B);b.log("load:length",c-B);try{e.jQuery&&jQuery.ui?b.log("jslib","jqueryui:"+jQuery.ui.version):e.jQuery?b.log("jslib","jquery:"+jQuery().jquery):e.Prototype?b.log("jslib","prototype:"+Prototype.Version):e.dojo?b.log("jslib","dojo:"+dojo.version.toString()):e.MooTools?b.log("jslib","mootools:"+MooTools.version):e.Ext?b.log("jslib","ext:"+Ext.version):e.YUI?b.log("jslib","yui:"+YUI.version):b.log("jslib","none")}catch(f){b.log("jslib",
"error")}b.flushLog(null)});a.bind("loader.onTemplateReady",function(){var b=a.comm.Default.recover(),c=a.jsonData;c.context.switches.sigma&&b.enable(c.context.sigma_chance);b.log("hit",1);c.forum.id&&b.addMeta("info:forum_id",c.forum.id);c.thread.id&&b.addMeta("info:thread_id",c.thread.id);c.request.user_type&&b.addMeta("info:user_type",c.request.user_type);c.request.user_id&&b.addMeta("info:user_id",c.request.user_id)});a.once("comments.viewed",function(){a.comm.Default.recover().log("viewed:comments",
1)});a.once("comments.reply.viewed",function(){a.comm.Default.recover().log("viewed:comment_box",1)})}function f(){function b(a,c,d,e,f,h){return'<img width="'+a+'" height="'+c+'" alt="'+e+'" src="data:image/'+d+";base64,"+f+'"'+(h?'style="'+h+'"':"")+"/>"}a.jsonData={ready:!1};var d;a.require(a.config.json_url,a.config.page,!0,null,function(){d.innerHTML='There was a problem loading Disqus. For more information, please visit <a href="http://status.disqus.com">status.disqus.com</a>.'});var e=a.qwery("#dsq-content")[0]||
l.createElement("div");e.id="dsq-content";e.style.display="none";d=a.qwery("#dsq-content-stub")[0]||l.createElement("div");d.id="dsq-content-stub";d.innerHTML=a.browser.ie6?"...":b(71,17,"png","DISQUS",A.join(""))+b(16,11,"gif","...",E.join(""),"margin:0 0 3px 5px");var f=a.qwery("#"+a.config.container_id)[0];f.appendChild(e);f.appendChild(d);c();a.ready(function(){a.initThread(function(){d.style.display="none"})})}function i(b){function c(){a.trigger("loader.onDefaultChannelReady")}var d=l.getElementById("dsq-content"),
f=a.settings.get("disqus.urls.media"),g=f+"/build/system/",i=f+"/build/lang/",j=a.jsonData.forum.template.css,m=a.jsonData.forum.template.url,q=a.jsonData.context.switches,n=a.settings.get("disqus.debug"),o=a.settings.get("disqus.preview");(function(){var b=a.jsonData;a.strings.setGlobalContext({profile_url:b.urls.request_user_profile,disqus_url:a.settings.get("disqus.urls.main"),media_url:a.settings.get("disqus.urls.media"),forum_name:b.forum.name,request_username:b.request.username,request_display_username:b.request.display_username})})();
a.trigger("loader.onDataReady");if(a.browser.mobile&&!a.jsonData.forum.mobile_theme_disabled)j=a.jsonData.forum.template.mobile.css,m=a.jsonData.forum.template.mobile.url;else if(o)j=o.styles,m=o.source;!e.disqus_no_style&&j&&a.requireStylesheet(j,{},n);j=a.jsonData.forum.stylesUrl;if(!a.jsonData.context.switches.static_styles||n)j="http://"+a.config.domain+"/forums/"+a.config.shortname+"/styles.css";a.jsonData.forum.hasCustomStyles&&a.requireStylesheet(j,{u:a.jsonData.forum.lastUpdate});m=[m];q.new_toolbar&&
(m.push(g+"/defaults.toolbar.js"),a.requireStylesheet(n?f+"/styles/dtpl/defaults.toolbar.css":g+"/defaults.toolbar.css",{},n));f=e.location.search;~f.indexOf("fbc_channel=1")?a.require("http://static.ak.connect.facebook.com/js/api_lib/v0.4/FeatureLoader.js.php"):~f.indexOf("fb_xd_fragment")?a.require("http://connect.facebook.net/en_US/all.js"):(a.config.language?a.config.language!="en"&&m.push(i+a.config.language+".js"):a.jsonData.forum.language!="en"&&m.push(i+a.jsonData.forum.language+".js"),a.comm.Default.recover()||
a.comm.Default.create(c).setApiKey(a.jsonData.forum.apiKey),a.requireSet(m,n,function(){a.config.custom_strings&&a.lang.extend(a.strings.translations,a.config.custom_strings);if(a.config.def_text==="")a.config.def_text=a.strings.get("Type your comment here.");a.registerActions();a.trigger("loader.onActionsReady");a.nodes.addClass(d,"clearfix");var c=d.parentNode;c.removeChild(d);d.innerHTML=a.renderBlock("thread");c.appendChild(d);a.trigger("loader.onLibraryReady");a.dtpl.actions.fire("thread.initialize");
a.trigger("loader.onTemplateReady");a.bean.add(d,"click change",function(b){for(var c=b.target,e;c&&c!=d;){if(e=a.dtpl.getAction(c,b)){b.preventDefault();e();break}c=c.parentNode}});a.nodes.container=a.nodes.get("#dsq-content");d.style.display="block";b();a.config.page.anchor_post_id&&a.nodes.scrollTo("#dsq-comment-"+a.config.page.anchor_post_id);a.dtpl.actions.fire("thread.ready")}))}var l=e.document,a=e.DISQUS,s=e.disqus_config;a.qwery("head")[0]||a.qwery("#disqus_thread");var u=a.qwery("meta"),
y=!1,x=[],A=["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","TkSuQmCC"],E=["R0lGODlhEAALAPQAAP///z2LqeLt8dvp7u7090GNqz2LqV+fuJ/F1IW2ycrf51aatHWs",
"waXJ14i4ys3h6FmctUCMqniuw+vz9eHs8fb5+meku+Tu8vT4+cfd5bbT3tbm7PH2+AAA","AAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQu","aW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27if","DgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeR","vsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjoth","LOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh","+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+","YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY",
"5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAs","AAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00k","j5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpy","HCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAA","BS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7","AAAAAAAAAAAA"];a.settings.add("disqus.developer",{type:"bool"}).add("disqus.preview",{type:"obj",rule:function(a){return a!=null&&typeof a.source==
"string"&&typeof a.styles=="string"}}).add("thread.category",{type:["str","int"]}).add("thread.slug",{type:"str"}).add("thread.title",{type:"str"}).add("thread.url",{type:"str"}).add("thread.identifier",{type:["str","int"]}).add("thread.postsPerPage",{type:["str","int"]}).add("thread.moderatePosts",{type:"str",values:["all","none","anon"]}).add("thread.skipAuthRequest",{type:"bool"}).add("thread.sort",{type:"str",values:{oldest:1,newest:2,best:3,hot:4,highlighted:5}}).add("thread.defaults.name",{type:"str"}).add("thread.defaults.email",
{type:"str"}).add("thread.defaults.placeholder",{type:"str"}).add("thread.author.sig",{type:"str"}).add("forum.shortname",{type:"str"}).add("forum.apiKey",{type:"str"}).add("forum.facebook.key",{type:"str"}).add("ui.translations",{type:"obj"}).add("ui.container",{type:"str"}).add("request.sso.data",{type:"str"}).add("legacy.trackbacks",{type:"obj"}).add("legacy.thread.author.sig",{type:"str"}).add("legacy.sso.data",{type:"str"}).add("realtime.host",{type:"str"}).add("realtime.port",{type:"int"});
var B=d(new Date);a.extend({cache:{postboxBusy:{},buttonsToRestore:[],popupProfileCache:{},popupStatusCache:{},toggledReplies:{},postSharing:{},realtime:{interval:null,ongoing_request:null,prev_script:null,last_checked:null,newPosts:[]}},states:{edit:{},realtime:!1,noThirdPartyCookies:null,useLoginWindow:!1,loginDisabled:!1,metaViewport:function(){for(var a=0,b=u.length;a<b;a++)if(u[a].getAttribute("name")=="viewport")return!0;return!1}()},curPageId:"dsq-comments",frames:{},config:{template:null},
jsonData:null,isReady:!1,getShortname:function(){function a(b){var b=b.getAttribute?b.getAttribute("src"):b.src,c=[/https?:\/\/(www\.)?disqus\.com\/forums\/([\w_\-]+)/i,/https?:\/\/(www\.)?([\w_\-]+)\.disqus\.com/i,/https?:\/\/(www\.)?dev\.disqus\.org\/forums\/([\w_\-]+)/i,/https?:\/\/(www\.)?([\w_\-]+)\.dev\.disqus\.org/i],d=c.length;if(!b||b.substring(b.length-8)!="embed.js")return null;for(var e=0;e<d;e++){var f=b.match(c[e]);if(f&&f.length&&f.length==3)return f[2]}return null}for(var b=l.getElementsByTagName("script"),
c=b.length-1;c>=0;c--){var d=a(b[c]);if(d!==null)return d}return null},callback:function(b){var c=arguments.length>1?Array.prototype.slice.call(arguments,1):[];a.trigger(b,{args:c})},reset:function(c){x.push(c);a.defer(function(){return a.resettable},function(){var c=a.nodes.get("#"+a.config.container_id),d=x.pop();if(d)x=[],a.comm.reset(!0),a.jsonData=null,a.sandbox.invalidateGlobals(),a.resettable=!1,a.config.page={},c.innerHTML="",a.trigger("thread.beforeReset"),a.unbindAll(),d.reload&&(o(d.config),
v(),b(),f())})},updatePost:function(b,c){var d=a.jsonData.posts[b]||{};if(c)c.id=b,a.jsonData.posts[b]=a.extend(d,c),a.trigger("data.onPostUpdate",{id:b,data:c})},reload:function(b){a.require(a.config.json_url,a.config.page,!0,function(){y=!0;typeof b=="function"&&b()})},redraw:function(b){if(y||b)a.sandbox.invalidateGlobals(),b=a.nodes.get("#dsq-content"),b.innerHTML=a.renderBlock("thread"),a.frames=[],a.dtpl.actions.fire("thread.initialize"),y=!1},initThread:function(b){function c(a){var b=e.onload;
e.onload=typeof e.onload!="function"?a:function(){b&&b();a()}}function d(){var b,c;if(a.isReady){if(g&&clearInterval(g),l.getElementById(a.settings.get("ui.container")),b=l.getElementsByTagName("iframe"),c=l.getElementById("dsq-content"))for(var f=0,h=b.length;f<h;f++)b[f].style.width=c.offsetWidth}else g||(g=e.setInterval(d,500))}var f,g;a.browser.ie&&a.config.frame_theme!=="cnn2"&&c(d);a.trigger("loader.onReady");f=l.getElementById("dsq-content")||l.createElement("div");f.id="dsq-content";f.style.display=
"none";l.getElementById(a.config.container_id).appendChild(f);a.container=l.getElementById("dsq-content");try{a.browser.ie6&&l.execCommand("BackgroundImageCache",!1,!0)}catch(j){}a.config.page.lazy="0";var o=a.partial(i,b),m=a.partial(a.require,a.config.json_url,a.config.page,!0,o);if(a.jsonData==null)return void m();a.defer(function(){var b=a.jsonData;return b&&(b.ready||b.lazy)},function(){if(a.jsonData.ready)return void o();a.once("disqus.viewed",function(){m()})})}});o();v();b();f();(function(){function b(){var d=
q(c)[1];c&&r(d)&&a.trigger("disqus.viewed")}var c=l.getElementById(a.config.container_id);b();a.events.debounce(e,"scroll",b,250)})()})(this);