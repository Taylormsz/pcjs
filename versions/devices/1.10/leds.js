(function(){/*
 http://pcjs.org/modules/devices/device.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/input.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/led.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/rom.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/time.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/ledctrl.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/machine.js (C) Jeff Parsons 2012-2017
*/
var t,ca="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={ta:!0},ha={};try{ha.__proto__=fa;ea=ha.ta;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da;
function v(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ca=b.prototype}var ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},y="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ka(){ka=function(){};y.Symbol||(y.Symbol=la)}var la=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();function ma(){ka();var a=y.Symbol.iterator;a||(a=y.Symbol.iterator=y.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return na(this)}});ma=function(){}}function na(a){var b=0;return oa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function oa(a){ma();a={next:a};a[y.Symbol.iterator]=function(){return this};return a}function pa(a){ma();var b=a[Symbol.iterator];return b?b.call(a):na(a)}function qa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}function z(a,b){if(b){var c=y;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ja(c,a,{configurable:!0,writable:!0,value:b})}}z("Number.parseInt",function(a){return a||parseInt});
z("Math.trunc",function(a){return a?a:function(a){a=Number(a);if(isNaN(a)||Infinity===a||-Infinity===a||0===a)return a;var b=Math.floor(Math.abs(a));return 0>a?-b:b}});z("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});z("Math.log2",function(a){return a?a:function(a){return Math.log(a)/Math.LN2}});
z("String.prototype.startsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");var b=this+"";a+="";var e=b.length,f=a.length;c=Math.max(0,Math.min(c|0,b.length));for(var m=0;m<f&&c<e;)if(b[c++]!=a[m++])return!1;return m>=f}});var ra="Machine";
function A(a,b,c,d){this.c=d||{};this.o=a;this.ka=b;this.version=c||0;this.j={};B[this.o]||(B[this.o]=[]);B[this.o].push(this);sa(this,this.c);ta(this,this.c);ua(this,this.c.bindings)}var va;
A.prototype.W=function(a,b){var c=this;switch(a){case wa:b.onclick=function(){var a=xa(c);a&&(a.value="")};break;case ya:b.value="",b.addEventListener("keypress",function(a){a=a||window.event;var d=a.which||a.keyCode;if(d){var f=b.value;b.setSelectionRange(f.length,f.length);a.stopPropagation();if(13==d&&(d=za,d=C[c.o]&&C[c.o][d]))for(a.preventDefault(),f=b.value+="\n",b.blur(),b.focus(),a=f.slice(f.lastIndexOf("\n",f.length-2)+1,-1),f=0;f<d.length&&!d[f](a);f++);}})}};
function ua(a,b){var c=Array.isArray(b),d;for(d in b){var e=b[d];c&&(d=e);var f=document.getElementById(e);f?(a.j[d]=f,a.W(d,f)):c||D(a,"unable to find device ID: "+e)}}function Aa(a,b,c,d){c&&(a.options.length=0);if(b)for(var e in b)c=document.createElement("option"),c.text=e,c.value="string"==typeof b[e]?b[e]:e,a.appendChild(c),c.value==d&&(a.selectedIndex=a.options.length-1)}function Ba(a,b){var c=za;C[a.o]||(C[a.o]={});C[a.o][c]||(C[a.o][c]=[]);C[a.o][c].push(b)}
function ta(a,b){if(b.overrides){var c=Ca(),d;for(d in c)if(0<=b.overrides.indexOf(d)){var e=c[d];if(e.match(/^[+-]?[0-9.]+$/))var f=Number.parseInt(e,10);else"true"==e?f=!0:"false"==e?f=!1:(f=e,e='"'+e+'"');b[d]=f;D(a,"overriding "+a.ka+" property '"+d+"' with "+e)}}}
function sa(a,b){if(a.version){var c="",d=B[a.o];if(d)for(var e in d)if(d[e].ka==a.o){var f=d[e];break}if(f.version!=a.version){c="Machine";var m=f.version}else b.version&&b.version!=a.version&&(c="Config",m=b.version);c&&(b="Error: "+a.ca("%s Device version (%3.2f) does not match %s version (%3.2f)",b.va,a.version,c,m)+"\n\nClearing your browser's cache may resolve the issue.",(c=Da)&&0>Ea.indexOf(c)&&(alert(b),Ea.push(c)),D(a,b))}}
function xa(a){var b=ya,c=a.j[b];if(void 0===c){var d=B[a.o],e;for(e in d)if(c=d[e].j[b])break;c||(c=null);a.j[b]=c}return c}function E(a,b){if(a=B[a.o])for(var c in a)if(a[c].c["class"]==b){var d=a[c];break}return d}function Fa(a){var b=Ga;return a.c.bindings&&a.c.bindings[b]}function Ha(a){if(a=a.j[Ia])var b=a.textContent;return b}function Ja(a,b,c){a=+a||0;a<b&&(a=b);a>c&&(a=c);return a}function Ka(a,b){return void 0!==a?a:b}
function La(a){if(void 0===Ma){var b=!1;if(window)try{window.localStorage.setItem(F,F),b=window.localStorage.getItem(F)==F,window.localStorage.removeItem(F)}catch(c){D(a,c.message),b=!1}Ma=b}return!!Ma}function Na(a){if(window){var b=window.navigator.userAgent;return"iOS"==a&&!!b.match(/(iPod|iPhone|iPad)/)&&!!b.match(/AppleWebKit/)||"MSIE"==a&&!!b.match(/(MSIE|Trident)/)||0<=b.indexOf(a)}return!1}
function Oa(a,b){if(G&&0<=G.indexOf(Pa))H+=b;else{if(a=xa(a))a.value+=b,8192<a.value.length&&(a.value=a.value.substr(a.value.length-4096)),a.scrollTop=a.scrollHeight;a||(a=b.lastIndexOf("\n"),0<=a&&(console.log(H+b.substr(0,a)),H="",b=b.substr(a+1)),H+=b)}}function D(a,b){Oa(a,b+"\n")}A.prototype.X=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];Oa(this,this.ca.apply(this,[].concat([a],c instanceof Array?c:qa(pa(c)))))};function I(a,b,c){if(a=a.j[b])a.textContent=c}
function Qa(a,b){b=void 0===b?"":b;var c=G,d=!b&&G&&0<=G.indexOf(Pa);G=b;d&&(b=H,H="",Oa(a,b));return c}
A.prototype.ca=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d="";var e=a.split(/%([-+ 0#]?)([0-9]*)(\.?)([0-9]*)([hlL]?)([A-Za-z%])/),f=0,m;for(m=0;m<e.length-7;m+=7){d+=e[m];var n=c[f++],g=e[m+1],p=+e[m+2]||0,h=+e[m+4]||0,k=e[m+6],l=null;switch(k){case "d":n=Math.trunc(n);case "f":k=Math.trunc(n)+"";h&&(p-=h+1);k.length<p&&("0"==g?(0>n&&p--,k=("0000000000"+Math.abs(n)).slice(-p),0>n&&(k="-"+k)):k=("          "+k).slice(-p));h&&(n=Math.trunc((n-Math.trunc(n))*Math.pow(10,
h)),k+="."+("0000000000"+Math.abs(n)).slice(-h));d+=k;break;case "s":for(;n.length<p;)n="-"==g?n+" ":" "+n;d+=n;break;case "X":l=Ra;case "x":l||(l=Sa);k="";do k=l[n&15]+k,n>>>=4;while(0<--p||n);d+=k;break;default:d+="(unrecognized printf conversion %"+k+")"}}return d+=e[m]};
function Ca(){var a,b=va;if(!b){b={};if(window){a||(a=window.location.search.substr(1));for(var c,d=/\+/g,e=/([^&=]+)=?([^&]*)/g;c=e.exec(a);)b[decodeURIComponent(c[1].replace(d," ")).trim()]=decodeURIComponent(c[2].replace(d," ")).trim()}va=b}return b}var wa="clear",ya="print",Pa="buffer",za="command",Ea=[],Da="version",Ma=void 0,F="PCjs.localStorage",C={},B={},G="",H="",Sa="0123456789abcdef",Ra="0123456789ABCDEF";
function J(a,b,c){A.call(this,a,b,Ta,c);this.time=E(this,K);this.J=this.I=this.b=this.H=null;if(a=this.j[Ua]){b=this.c.location;this.ga=b[0];this.ha=b[1];this.f=b[2];this.l=b[3];this.m=b[4]||1;this.v=b[5]||1;this.da=b[6]||a.naturalWidth||this.f;this.ea=b[7]||a.naturalHeight||this.l;this.U=b[8]||0;this.V=b[9]||0;this.aa=b[10]||0;this.ba=b[11]||0;(this.a=this.c.map)?(this.u=this.a.length,this.h=this.a[0].length):(this.h=this.m,this.u=this.v,this.m=this.v=0);this.fa=!!this.c.drag;this.Z=!!this.c.hexagonal;
this.L=this.f/(this.h+this.h*this.m)|0;this.M=this.l/(this.u+this.u*this.v)|0;this.$=this.L*this.m|0;this.O=this.M*this.v|0;this.i=this.w=-1;Va(this,a);Wa(this,a);if(this.time){var d=this;this.S=Xa(this.time,"timerInputRelease",function(){0>d.i&&0>d.w&&L(d,-1,-1)});this.a&&(this.T=Xa(this.time,"timerKeyRelease",function(){1==d.g?(d.g++,L(d,-1,-1),M(d.time,d.T,Ya)):(d.g=0,d.s.length&&Za(d,d.s.shift()))}),this.g=0,this.s=[],$a(this))}this.K=this.R=-1}}v(J,A);
J.prototype.W=function(a,b){var c=this;switch(a){case ab:b.onclick=function(){c.b&&c.b()};break;case bb:b.onclick=function(){c.I&&c.I()}}A.prototype.W.call(this,a,b)};function cb(a,b,c){a.b=b;a.I=c}function db(a,b){a.J=b}function eb(a,b){a.H=b}
function $a(a){var b=document;b.addEventListener("keydown",function(b){b=b||window.event;if(document.activeElement==a.j[ab]){var c=fb[b.which||b.keyCode];c&&Za(a,c)&&b.preventDefault()}});b.addEventListener("keypress",function(b){b=b||window.event;var c=String.fromCharCode(b.which||b.charCode);c&&Za(a,c)&&b.preventDefault()})}
function Za(a,b){for(var c=0;c<a.a.length;c++)for(var d=a.a[c],e=0;e<d.length;e++)if(0<=d[e].split("|").indexOf(b))return a.g?16>a.s.length&&a.s.push(b):(a.g=1,L(a,e,c),M(a.time,a.T,Ya)),!0;a.X("unrecognized key '%s' (0x%02x)\n",b,b.charCodeAt(0));return!1}
function Va(a,b){b.addEventListener("mousedown",function(c){var d=a.j[ab];if(d){var e=window.scrollX,f=window.scrollY;d.focus();window.scrollTo(e,f)}c.button||N(a,b,gb,c)});b.addEventListener("mousemove",function(c){N(a,b,hb,c)});b.addEventListener("mouseup",function(c){c.button||N(a,b,P,c)});b.addEventListener("mouseout",function(c){0>a.i?N(a,b,hb,c):N(a,b,P,c)})}
function Wa(a,b){b.addEventListener("touchstart",function(c){N(a,b,gb,c)});b.addEventListener("touchmove",function(c){N(a,b,hb,c)});b.addEventListener("touchend",function(c){N(a,b,P,c)})}
function N(a,b,c,d){var e=-1,f=-1,m;if(c<P){d=d||window.event;if(d.targetTouches&&d.targetTouches.length){var n=d.targetTouches[0].pageX;var g=d.targetTouches[0].pageY}else n=d.pageX,g=d.pageY;var p=m=0;var h=b;do isNaN(h.offsetLeft)||(m+=h.offsetLeft,p+=h.offsetTop);while(h=h.offsetParent);n=a.da/b.offsetWidth*(n-m)|0;g=a.ea/b.offsetHeight*(g-p)|0;b=n-a.ga;var k=g-a.ha;p=m=!1;h=n>=a.U&&n<a.U+a.aa&&g>=a.V&&g<a.V+a.ba;if(0<=b&&b<a.f&&0<=k+a.O||h)if(d.preventDefault(),0<=b&&b<a.f&&0<=k&&k<a.l){p=!0;
d=a.f/a.h|0;var l=a.l/a.u|0,q=b/d|0,r=k/l|0;!a.Z||r&1||(b-=d>>1,q=b/d|0,q==a.h-1&&(b=-1));l=r*l+(a.O>>1);b-=q*d+(a.$>>1);k-=l;0<=b&&b<a.L&&0<=k&&k<a.M&&(e=q,f=r,m=!0)}}c==gb?(a.i=n,a.w=g,p?(L(a,e,f),m&&M(a.time,a.S,Ya,!0)):h&&a.b&&a.b()):c==hb?0<=a.i&&0<=a.w&&a.fa?L(a,e,f):a.J&&a.J(e,f):c==P?(c=a.time,e=a.S,c.a&&0<e&&e<=c.b.length&&0<=c.b[e-1].N||L(a,-1,-1),a.i=a.w=-1):D(a,"unrecognized action: "+c)}function L(a,b,c){if(b!=a.K||c!=a.R)a.K=b,a.R=c,a.H&&a.H(b,c)}
var gb=1,hb=2,P=3,ab="power",bb="reset",Ua="surface",fb={8:"\b"},Ya=50,Ta=1.1;
function ib(a,b,c){A.call(this,a,b,jb,c);a=this.j[Ga];if(!a)throw Error("LED binding for '"+Ga+"' missing: '"+this.c.j[Ga]+"'");b=document.createElement("canvas");if(!b||!b.getContext)throw a.innerHTML="LED device requires HTML5 canvas support",Error("LED device requires HTML5 canvas support");this.ja=a;this.type=Ja(this.c.type||kb,kb,lb);this.i=mb[this.type][0];this.m=mb[this.type][1];this.width=this.c.width||this.i;this.height=this.c.height||this.m;this.cols=this.c.cols||1;this.rows=this.c.rows||
1;this.J=this.width*this.cols;this.I=this.height*this.rows;this.g=Q("black",0);this.f=nb(this.c.color)||this.g;this.U=Q(this.f,1,.25);this.T=Q(this.f,1,2);this.h=nb(this.c.backgroundColor);this.V=this.c.fixed||!1;this.V||(b.style.width="100%",b.style.height="auto");this.u=this.c.persistent;void 0==this.u&&(this.u=this.type<lb);this.O=this.c.hexagonal||!1;this.K=this.c.highlight;void 0===this.K&&(this.K=!0);b.setAttribute("width",this.J.toString());b.setAttribute("height",this.I.toString());b.style.backgroundColor=
this.g;a.appendChild(b);this.R=b.getContext("2d");if(this.w=document.createElement("canvas"))this.w.width=this.M=this.i*this.cols,this.w.height=this.L=this.m*this.rows,this.b=this.w.getContext("2d");this.S=(this.rows+1)*this.cols*4;this.a=Array(this.S);this.s=null;this.l=this.v=!1;this.H=-1;var d=this;(this.time=E(this,K))&&ob(this.time,function(){R(d)})}v(ib,A);function S(a,b){pb(a,a.a);a.l=a.v=!0;b&&R(a,!0)}
function qb(a){a.h?(a.b.fillStyle=a.h,a.b.fillRect(0,0,a.M,a.L)):a.b.clearRect(0,0,a.M,a.L)}
function R(a,b){b=void 0===b?!1:b;if(a.l||b){if(a.type<lb){a.u&&!b||qb(a);for(var c=0,d=0;d<a.rows;d++)for(var e=0;e<a.cols;e++){var f=a.a[c],m=a.a[c+1]||a.g,n=a.K&&c==a.H;if(a.a[c+3]&T||n||b){a:{var g=a;var p=m;var h=e;m=d;var k=n;h=void 0===h?0:h;m=void 0===m?0:m;k=void 0===k?!1:k;var l=0;if(g.O&&!(m&1)&&(l=g.i>>1,h==g.cols-1))break a;if(g.u){var q=h*g.i+l;var r=m*g.m;g.h?(g.b.fillStyle=g.h,g.b.fillRect(q,r,g.i,g.m)):g.b.clearRect(q,r,g.i,g.m)}p&&p!=g.f?(q=k?Q(p,1,2):p,p=Q(p,1,.25)):(q=k?g.T:g.f,
p=g.U);k=!1;p=f?q:p;q==g.g&&(p=g.h,k=!0);g.b.fillStyle=p;f=h*g.i+l;m*=g.m;h=rb[g.type];3==h.length?(g.b.beginPath(),g.b.arc(h[0]+f,h[1]+m,h[2],0,2*Math.PI),k?(g.b.globalCompositeOperation="destination-out",g.b.fill(),g.b.globalCompositeOperation="source-over"):g.b.fill()):g.b.fillRect(h[0]+f,h[1]+m,h[2],h[3])}a.a[c+3]&=~T;n&&(a.a[c+3]|=T)}c+=4}}else{b="";for(c=0;c<a.a.length;c+=4)b+=a.a[c]||" ",a.a[c+3]&sb&&(b+=".");qb(a);for(e=d=c=0;c<b.length;c++){m=b[c];"."==m&&d&&d--;n=a;g=d;f=e;g=void 0===g?
0:g;f=void 0===f?0:f;if(m=tb[m])for(h=0;h<m.length;h++)if(l=n,k=ub[m[h]]){p=(void 0===g?0:g)*l.i;q=(void 0===f?0:f)*l.m;l.b.fillStyle=l.f;l.b.beginPath();if(3==k.length)l.b.arc(k[0]+p,k[1]+q,k[2],0,2*Math.PI);else for(r=0;r<k.length;r+=2)r?l.b.lineTo(k[r]+p,k[r+1]+q):l.b.moveTo(k[r]+p,k[r+1]+q);l.b.closePath();l.b.fill()}if(++d==a.cols&&(d=0,++e==a.rows))break}}a.R.globalCompositeOperation=a.h&&!a.u?"source-over":"copy";a.R.drawImage(a.w,0,0,a.M,a.L,0,0,a.J,a.I);a.l=!1;a.H=-1}else a.u||a.v||S(a,!0);
a.v=!1}function vb(a,b,c){b=4*(c*a.cols+b);return b<=a.a.length-4?a.a[b+2]:0}function U(a,b,c){var d;b=4*(c*a.cols+b);0<=b&&b<=a.a.length-4&&(d=a.a[b]);return d}function nb(a){return(a=a||void 0)&&wb[a]||a}function Q(a,b,c){b=void 0===b?1:b;c=void 0===c?1:c;if(a){var d=[];a=wb[a]||a;if(xb(a,d)){a="rgba(";var e;for(e=0;3>e;e++){var f=Math.round(d[e]*c);f=0>f?0:255<f?255:f;a+=f+","}a+=(e<d.length?d[e]:b)+")"}}return a}
function pb(a,b){for(var c=0;c<b.length;c+=4)b[c]=a.type<lb?V:" ",b[c+1]=a.f==a.g?null:a.f,b[c+2]=0,b[c+3]=T}function xb(a,b){var c=16,d=a.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);d||(c=10,d=a.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,?\s*(\d+|)\)$/i));if(d){for(a=1;a<d.length;a++)b[a-1]=Number.parseInt(d[a],c);b.length=a-1;return!0}return!1}
function yb(a,b,c,d){var e=null;0<=c&&c<a.rows&&0<=b&&b<a.cols&&(e=!1,d=d||a.f,d==a.g&&(d=null),b=4*(c*a.cols+b),a.a[b+1]!==d&&((a.a[b+1]=d)||(a.a[b]=V),a.a[b+3]|=T,a.l=e=!0),a.H=b,a.v=!0);return e}function zb(a,b,c,d){if(0<=c&&c<a.rows&&0<=b&&b<a.cols){b=4*(c*a.cols+b);c=0;if(a.a[b+1])for(var e=0;e<d.length;e++)c=c<<4|d[e]&15;a.a[b+2]!==c&&(a.a[b+2]=c,a.a[b+3]|=T,a.l=!0);a.H=b;a.v=!0}}
function W(a,b,c,d){var e=void 0===e?0:e;var f=null;if(0<=c&&c<a.rows&&0<=b&&b<a.cols){f=!1;b=4*(c*a.cols+b);if(a.a[b]!==d||(a.a[b+3]&Ab)!==e)a.a[b]=d,a.a[b+3]=a.a[b+3]&~Ab|e|T,a.l=f=!0;a.H=b;a.v=!0}return f}
var kb=1,lb=3,Ga="container",wb={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",
darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",
goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",
lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",
olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",
slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},V=0,Ab=129,sb=1,T=128,Bb={},rb=(Bb[kb]=[16,16,14],Bb[2]=[2,2,28,28],Bb),mb=[[],[32,32],[32,32],[96,128]],ub={A:[30,8,79,8,67,19,37,19],B:[83,10,77,52,67,46,70,22],C:[77,59,71,100,61,89,64,64],D:[28,91,58,91,69,
104,15,104],E:[18,59,28,64,25,88,12,100],F:[24,10,34,21,31,47,18,52],G:[24,56,34,50,60,50,71,56,61,61,33,61],P:[80,102,8]},tb={" ":[],0:"ABCDEF".split(""),1:["B","C"],2:["A","B","D","E","G"],3:["A","B","C","D","G"],4:["B","C","F","G"],5:["A","C","D","F","G"],6:"ACDEFG".split(""),7:["A","B","C"],8:"ABCDEFG".split(""),9:"ABCDFG".split(""),"-":["G"],E:["A","D","E","F","G"],".":["P"]},jb=1.1;
function Cb(a,b,c){A.call(this,a,b,Eb,c);this.data=c.values;if(this.j[Fb]){var d=this,e=Math.log2(this.data.length)/2;this.cols=Math.pow(2,Math.ceil(e));this.rows=Math.pow(2,Math.floor(e));this.a=new ib(a,b+"LEDs",{va:"LED",j:{ja:c.j[Fb]},type:kb,cols:this.cols,rows:this.rows,color:c.colorROM||"green",backgroundColor:c.backgroundColorROM||"black",Ba:!0}),S(this.a,!0);this.b=new J(a,b+"Input",{"class":"Input",location:[0,0,this.a.J,this.a.I,this.cols,this.rows],bindings:{surface:c.j[Fb]}});this.g=
Ha(this);db(this.b,function(a,b){if(d.f){var c=d.g;0<=a&&0<=b&&(a=b*d.cols+a,c=d.f.Aa(d.data[a],a));I(d,Ia,c)}})}}v(Cb,A);var Fb="array",Ia="cellDesc",Eb=1.1;
function X(a,b,c){A.call(this,a,b,Gb,c);this.aa=this.c.cyclesMinimum||1E5;this.ga=this.c.cyclesMaximum||3E6;this.S=Ja(this.c.cyclesPerSecond||65E4,this.aa,this.ga);this.H=Ja(this.c.yieldsPerSecond||Hb,30,120);this.ha=Ja(this.c.yieldsPerUpdate||Ib,1,this.H);this.I=this.c.requestAnimationFrame;void 0===this.I&&(this.I=!0);this.ea=this.fa=this.M=1;this.Z=this.S/1E4/100;this.h=this.s=this.Z*this.M;this.v=0;this.R=Math.round(1E3/this.H);this.T=[];this.O=[];this.b=[];this.U=[];this.a=this.V=this.m=!1;this.w=
this.g=0;this.oa=this.ya.bind(this);this.na=this.ba.bind(this);this.da=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.setTimeout).bind(window);var d=this;Xa(this,"timerYield",function(){d.V=!0;var a=d.v,b=Jb(d);b>=d.H?d.v++:d.v+=Math.ceil(d.H/b);d.v>=d.ha&&a<d.ha&&Y(d);d.v>=d.H&&(d.v=0)},this.R);this.K=this.J=this.l=0;Kb(this)||Lb(this,this.ea)}v(X,A);function ob(a,b){a.T.push(b)}
X.prototype.W=function(a,b){var c=this;switch(a){case Mb:b.onclick=function(){c.a?Nb(c):c.start()};break;case Ob:b.onclick=function(){c.a?D(c,"already running"):c.g?Nb(c):Pb(c,void 0)};break;case Qb:b.addEventListener("mousedown",function(){c.m=!0}),b.addEventListener("mouseup",function(){Kb(c);c.m=!1}),b.addEventListener("mousemove",function(){c.m&&Kb(c)}),b.addEventListener("change",function(){c.m=!0;Kb(c);c.m=!1})}A.prototype.W.call(this,a,b)};
function Xa(a,b,c,d){d=void 0===d?-1:d;var e=a.b.length+1;a.b.push({id:b,ua:c,ia:d,N:-1});0<=d&&M(a,e,d);return e}X.prototype.ba=function(){for(var a=0;a<this.T.length;a++)this.T[a]();this.a&&this.I&&this.da(this.na)};function Rb(a){var b=a.h/a.Z;if(!b||b>a.M)b=a.M;a.xa=a.S/a.H*b;a.fa=b}function Sb(a,b,c){a.J=a.l=b;if(!a.O.length)return a.l=0,a.J;for(var d=0;0<a.l;)d<a.O.length?b=a.O[d++](c?0:b)||1:d=b=0,a.l-=b;return a.J-a.l}
function Tb(a,b){b=void 0===b?a.J-a.l:b;a.J=a.l=0;a.L+=b;a.K+=b;a.a||(a.K=0);return b}function Jb(a,b){return Math.ceil(a.S*a.fa/1E3*(void 0===b?1E3:b))}function Ub(a){1<=a?a=a.toFixed(2)+"Mhz":(a=Math.round(1E6*a),a=999>=a?a+"Hz":Math.ceil(a/1E3)+"Khz");return a}
X.prototype.ya=function(){this.w=0;if(this.a){Rb(this);this.$=this.L=0;this.u=Date.now();this.f||(this.f=this.u);if(this.i){var a=this.u-this.i;a>this.R&&(this.f+=a,this.f>this.u&&(this.f=this.u))}try{this.V=!1;do{for(var b=Jb(this,this.R),c=this.b.length;0<c;c--){var d=this.b[c-1];!(0>d.N)&&b>d.N&&(b=d.N)}Vb(this,Tb(this,Sb(this,b)))}while(this.a&&!this.V)}catch(e){D(this,e.message);Nb(this);return}if(this.a){a=setTimeout;b=this.oa;this.i=Date.now();this.$&&(this.f+=this.$,this.u+=this.$);c=this.R;
this.L&&(c=Math.round(c*this.L/this.xa));c-=this.i-this.u;if(d=this.i-this.f)this.h=this.K/(10*d)/100;0>c?(-1E3>c&&(this.f-=c),c=0):this.h<this.s&&(c=0);this.i+=c;G&&0<=G.indexOf("time")&&this.X("after running %d cycles, resting for %dms\n",this.L,c);this.w=a(b,c);this.I||this.ba()}}};function Kb(a){var b=a.j[Qb];return b?(Lb(a,Math.floor((b.value-b.min)/(b.max-b.min)*(a.ga-a.aa)+a.aa)/a.S),!0):!1}
function Lb(a,b){void 0!==b&&(!a.m&&0<a.h&&a.h<.9*a.s&&(b=a.ea),a.M=b,b=a.Z*a.M,a.s!=b&&(a.s=b,I(a,Wb,Ub(a.s))),a.h=a.s);a.K=0;a.f=a.i=0;Rb(a);for(b=a.b.length;0<b;b--){var c=a.b[b-1];0<=c.ia&&M(a,b,c.ia,!0)}}function M(a,b,c,d){0<b&&b<=a.b.length&&(b=a.b[b-1],d||0>b.N)&&(c=Jb(a,c),a.a&&(c+=Tb(a)),b.N=c)}X.prototype.start=function(){if(this.a||this.g)return!1;this.w&&(clearTimeout(this.w),this.w=0);this.a=!0;this.f=this.i=0;Y(this,!0);this.w=setTimeout(this.oa,0);this.I&&this.da(this.na);return!0};
function Pb(a,b){b=void 0===b?1:b;a.a||(b&&!a.g&&(a.g=b),a.g&&(a.g--,Vb(a,Tb(a,Sb(a,1,!0))),Y(a),a.g&&setTimeout(function(){Pb(a,0)},0)))}function Nb(a){a.g?(a.g=0,Y(a,!0)):a.a&&(a.a=!1,Tb(a),Y(a,!0))}function Y(a,b){b&&(a.a?D(a,"starting (target speed: "+Ub(a.s)+")"):D(a,"stopping"));I(a,Mb,a.a?"Halt":"Run");I(a,Ob,a.g?"Stop":"Step");a.m||I(a,Wb,a.a&&a.h?Ub(a.h):"Stopped");for(var c=0;c<a.U.length;c++)a.U[c](b)}
function Vb(a,b){for(var c=a.b.length;0<c;c--){var d=a.b[c-1];0>d.N||(d.N-=b,0>=d.N&&(d.N=-1,d.ua(),0<=d.ia&&M(a,c,d.ia)))}}var Mb="run",Wb="speed",Ob="step",Qb="throttle",Hb=120,Ib=60,Gb=1.1;
function Xb(a,b,c){A.call(this,a,b,Yb,c);this.H=Ka(this.c.toggle,!0);this.h=Ka(this.c.wrap,!1);this.l=Ka(this.c.rule,"B3/S23");this.i=Ka(this.c.pattern,"");this.w=Array(Zb(this).length);if(c=E(this,$b)){this.a=c;ac(this)||S(c,!0);var d=this;this.u=new J(a,b+"Input",{"class":"Input",location:[0,0,c.J,c.I,c.cols,c.rows],drag:!0,hexagonal:c.O,bindings:{surface:Fa(c)}});eb(this.u,function(a,b){var c=d.a;0<=a&&0<=b&&(d.g?yb(c,a,b,d.g)?W(c,a,b,1):d.H?W(c,a,b,1-U(c,a,b)):yb(c,a,b):W(c,a,b,1-U(c,a,b)),zb(c,
a,b,Zb(d,!!U(c,a,b))),R(c))});this.f=[];this.v=c.f;bc(this,this.v);cc(this);dc(this,this.c[ec]);this.s=E(this,fc);cb(this.s,this.Y.bind(this),this.ma.bind(this));if(this.time=E(this,K))this.time.O.push(this.wa.bind(this)),this.time.U.push(this.sa.bind(this));this.m="";Ba(this,this.za.bind(this))}}v(Xb,A);t=Xb.prototype;
t.W=function(a,b){var c=this;switch(a){case gc:case hc:b.onchange=function(){ic(c,a)};ic(this);break;case ec:b.onchange=function(){dc(c)};break;case Z:Aa(b,jc(this.c[Z]),!1,this.c.pattern);b.onchange=function(){var a=c.j[Z];a&&a.options.length&&((a=a.options[a.selectedIndex].value)?ac(c,a):c.ma())};break;case kc:b.onclick=function(){var a=lc(c);D(c,a);var b=window.location.href;b=0<=b.indexOf("pattern\x3d")?b.replace(/(pattern=)[^&]*/,"$1"+a.replace(/\$/g,"$$$$")):b+((0>b.indexOf("?")?"?":"\x26")+
"pattern\x3d"+a);window.location=b};break;default:if(a.startsWith(mc))b.onclick=function(){cc(c,a)};else{var d=this.c[Z];d&&d[a]&&(b.onclick=function(){ac(c,a)})}}A.prototype.W.call(this,a,b)};function jc(a){var b={},c;for(c in a){for(var d=c,e=a[c],f=0;f<e.length;f++)if(0==e[f].indexOf("#N")){d=e[f].substr(2).trim();break}b[d]=c}return b}
t.wa=function(a){a=void 0===a?0:a;var b=0;if(0<=a){do{switch(this.l){case "C8":var c=0;for(var d=this.a,e=d.cols,f=d.rows,m=this.w,n=0;n<f;n++)for(var g=0;g<e;g++){var p=m,h=!1,k=4*(n*d.cols+g);if(k<=d.a.length-4&&d.a[k+1]){h=!0;k=d.a[k+2];for(var l=p.length-1;0<=l;l--)p[l]=k&15,k>>>=4}if(h){c++;if(m[0])m[0]--;else{h=(p=U(d,g,n))||0;switch(p){case 1:if(h=V,m[0]=m[2],m[0]){m[0]--;break}case V:if(m[3]&&(h=this.f.indexOf(d.a[4*(n*d.cols+g)+1]||d.g),0<=h)){for(h+=m[3];h>=this.f.length;)h-=this.f.length;
yb(d,g,n,this.f[h])}h=1;m[0]=m[1];m[0]&&m[0]--}h!==p&&W(d,g,n,h)}zb(d,g,n,m)}}break;default:c=0;d=this.a.a;e=this.a;e.s||(e.s=Array(e.S),pb(e,e.s));e=e.s;f=this.a.cols;m=this.a.rows;n=4*f;g=m*n;p=0;h=p-n;k=h-4;l=h+4;for(var q=p-4,r=p+4,u=p+n,w=u-4,x=u+4,O=0;O<m;O++){O?O==m-1&&(this.h?(u-=g,w-=g,x-=g):u=w=x=g):this.h?(h+=g,k+=g,l+=g):h=k=l=g;for(var aa=0;aa<f;aa++){aa?1==aa?this.h?(q-=n,k-=n,w-=n):(q=p-4,k=h-4,w=u-4):aa==f-1&&(this.h?(r-=n,l-=n,x-=n):r=l=x=g):this.h?(q+=n,k+=n,w+=n):q=k=w=g;var ba=
d[p],Db=d[k]+d[h]+d[l]+d[r]+d[x]+d[u]+d[w]+d[q];3==Db?ba=1:2!=Db&&(ba=V);e[p]=ba;e[p+1]=d[p+1];e[p+2]=d[p+2];e[p+3]=d[p+3]|(d[p]!==ba?T:0);p+=4;k+=4;h+=4;l+=4;r+=4;x+=4;u+=4;w+=4;q+=4;1==ba&&c++}this.h?(O||(h-=g,k-=g,l-=g),r+=n,l+=n,x+=n):(O||(h=p-n,k=h-4),r=p+4,l=h+4,x=u+4)}d=this.a;e=d.a;d.a=d.s;d.s=e;d.l=!0}a||D(this,"living cells: "+c);b+=1}while(b<a)}return b};function nc(a,b){var c=0;(a=a.j[b])&&a.options&&(c=(c=a.options[a.selectedIndex])&&+c.value||0);return c}
function Zb(a,b){var c=0;if(b&&(b=a.j[oc])&&b.options){var d=b.options[b.selectedIndex];d&&(c=+d.value||0,b.selectedIndex++,d=nc(a,pc)+nc(a,qc),!(d&1)&&c==d-1||0>b.selectedIndex||b.selectedIndex>=b.options.length)&&(b.selectedIndex=0)}c=[c];for(b=1;b<rc.length;b++)c.push(nc(a,rc[b]));return c}
function ac(a,b){var c=a.a,d=-1,e=-1,f="";b||a.i.match(/^[0-9]/)||(b=a.i);if(b){var m=a.c[Z];m=m&&m[b];if(!m)return D(a,"unknown pattern: "+b),!1;D(a,"loading pattern '"+b+"'");var n=0;for(b=0;n<m.length;n++){var g=m[n];if("#"==g[0])D(a,g);else if(b++){var p=g.indexOf("!");if(0<=p){f+=g.substr(0,p);break}f+=g}else{var h=g.match(/x\s*=\s*([0-9]+)\s*,\s*y\s*=\s*([0-9]+)\s*(?:,\s*rule\s*=\s*(\S+)|)/i);if(!h)return D(a,"unrecognized header line"),!1;var k=+h[1];var l=+h[2];h=h[3]}}}else{if(!a.i)return!1;
b=0;f=a.i.split("/");5==f.length&&(d=+f[b++],e=+f[b++]);if(3==f.length||5==f.length)k=+f[b++],l=+f[b++],f=f[b];else return D(a,"unrecognized pattern: "+a.i),!1;h=a.l}if(h!=a.l)return D(a,"unsupported rule: "+h),!1;0>d&&(d=c.cols-k>>1);0>e&&(e=c.rows-l>>1);if(0>d||d+k>c.cols||0>e||e+l>c.rows)return a.X("pattern too large (%d,%d)\n",k,l),!1;k=0;l=d;f=f.split(/([a-z$])/i);S(c);h=[0,0,0,1];m=0;for(g=n=!1;k<f.length-1;){b=f[k++];p=f[k++];var q=+b;for(b=""===b?1:q;b--;){var r=0,u=!1;switch(p){case "$":n=
g=!1;l=d;e++;break;case "C":m=q;g=!0;break;case "R":h[0]=q;n=!0;break;case "G":h[1]=q;n=!0;break;case "B":h[2]=q;n=!0;break;case "A":h[3]=q;n=!0;break;case "b":u=W(c,l,e,V);r++;break;case "o":u=W(c,l,e,1);r++;break;default:a.X("unrecognized pattern token: %s\n",p)}null==u?a.X("invalid pattern position (%d,%d)\n",l,e):(n&&yb(c,l,e,4>h.length||1==h[3]?c.ca("#%02x%02x%02x",h[0],h[1],h[2]):c.ca("rgba(%d,%d,%d,%d)",h[0],h[1],h[2],h[3])),g&&(u=4*(e*c.cols+l),u<=c.a.length-4&&c.a[u+2]!=m&&(c.a[u+2]=m)),
l+=r)}}R(c,!0);return!0}t.za=function(a){var b="";""==a&&(a=this.m);this.m="";a=a.trim();var c=a.split(" "),d=c[1];switch(c[0][0]){case "c":d?(D(this,"set category '"+d+"'"),Qa(this,d)):(d=Qa(this))?D(this,"cleared category '"+d+"'"):D(this,"no category set");break;case "?":b="available commands:";sc.forEach(function(a){b+="\n"+a});break;default:a&&(b="unrecognized command '"+a+"' (try '?')")}b&&D(this,b.trim());return!0};t.Y=function(a){a?this.time.start():Nb(this.time)};
t.ma=function(){D(this,"reset");S(this.a,!0)};t.pa=function(){var a,b=null;if(La(this)&&window)try{(a=window.localStorage.getItem(this.o))&&(b=JSON.parse(a))}catch(e){D(this,e.message)}a=b;if(a)if(b=a.ra.shift(),(b|0)!==(Yb|0))this.X("Saved state version mismatch: %3.2f\n",b);else if(!Ca().pattern&&!Ca()[ec]&&a.la&&this.a){b=this.a;var c=a.la;a=c.shift();var d=c.shift();c=c.shift();if(a==b.f&&d==b.h&&c&&c.length==b.a.length){b.a=c;for(a=0;a<=b.a.length-4;a+=4)b.a[a+1]==b.g&&(b.a[a+1]=null);R(b,!0)}}};
t.qa=function(){var a={ra:[],la:[]};a.ra.push(Yb);if(this.a){var b=this.a,c=a.la;b.a&&(c.push(b.f),c.push(b.h),c.push(b.a))}if(La(this)){a=JSON.stringify(a);try{window.localStorage.setItem(this.o,a)}catch(d){D(this,d.message)}}};
function lc(a){function b(a){var b=!1;null==g[3]&&(g[3]=1);if(r){if(n){if(g[0]!==l[0]||g[1]!==l[1]||g[2]!==l[2]||g[3]!==l[3])b=!0;x!==q&&(b=!0)}w!==k&&(b=!0);if(b||a&&k)n&&(p[0]!==l[0]&&(p[0]=l[0],d+=(l[0]||"")+"R"),p[1]!==l[1]&&(p[1]=l[1],d+=(l[1]||"")+"G"),p[2]!==l[2]&&(p[2]=l[2],d+=(l[2]||"")+"B"),p[3]!==l[3]&&(p[3]=l[3],d+=(l[3]||"")+"A"),h!==q&&(h=q,d+=(q||"")+"C")),1<r&&(d+=r),d+=1===k?"o":"b",b=!0}a?(d+="$",r=0):(b?r=1:r++,k=w,l[0]=g[0],l[1]=g[1],l[2]=g[2],l[3]=g[3],q=x)}var c=a.a,d="",e=0,
f=a.a.cols,m=a.a.rows,n=!!a.f.length,g=[0,0,0],p=[0,0,0,1],h=0,k=0,l=[0,0,0,1],q=0,r=0;for(a=0;a<c.rows;a++){for(var u=0;u<c.cols;u++){var w=U(c,u,a);xb(c.a[4*(a*c.cols+u)+1]||c.g,g);var x=vb(c,u,a);b()}b(!0)}for(;"$"==d[0];)e++,m--,d=d.slice(1);for(;"$$"==d.slice(-2);)m--,d=d.slice(0,-1);d="0/"+e+"/"+f+"/"+m+"/"+d.slice(0,-1);return d=d.replace(/\$+$/,"")}
function dc(a,b){var c=a.j[ec];if(c&&c.options.length){if(b)for(var d=0;d<c.options.length;d++)if(c.options[d].value==b){c.selectedIndex=d;break}b=c.options[c.selectedIndex].value;a=a.a;a.ja&&(a.ja.style.backgroundImage=b?"url('"+b+"')":"none")}}
function ic(a,b){var c=a.j[gc],d=a.j[hc];b=b===gc;c&&!c.options.length&&(Aa(c,a.c.colors,!0),b=!0);if(c&&d&&(!d.options.length||b)){a.b=a.c.colors[c.options[c.selectedIndex].value];for(var e in a.b)if(b=a.c[e.toLowerCase()])"#"!=b[0]&&(b="#"+b),D(a,"overriding color '"+e+"' with "+b+" (formerly "+a.b[e]+")"),a.b[e]=b;Aa(d,a.b,!0)}c&&d&&d.options.length&&(a.g=d.options[d.selectedIndex].value,cc(a))}
function bc(a,b){var c=a.j[hc];if(c){var d;for(d=0;d<c.options.length;d++)if(c.options[d].value==b){a.g=b;c.selectedIndex!=d&&(c.selectedIndex=d);break}d==c.options.length&&(c.selectedIndex=0)}}
function cc(a,b){var c=1,d;!b&&a.g&&(d=a.j[tc])&&(d.style.backgroundColor=a.g);if(a.b)for(var e in a.b){var f=a.b[e];a.f&&(a.f[c-1]=f);var m=mc+c++;d=a.j[m];if(!d)break;d.style.display="inline-block";m==b&&bc(a,f);f!=a.g&&(f=Q(f,1,.5));d.style.backgroundColor=f}for(;;){b=mc+c++;b=a.j[b];if(!b)break;b.style.display="none"}}t.sa=function(){this.time.a||R(this.a)};
var gc="colorPalette",hc="colorSelection",mc="colorSwatch",tc="colorSwatchSelected",oc="countInit",pc="countOn",qc="countOff",ec="backgroundImage",Z="patterns",kc="saveToURL",rc=[null,pc,qc,"countCycle"],sc=["c\tset category"],Yb=1.1;ra="LEDs";
function uc(a,b){A.call(this,a,a,vc);try{this.c=JSON.parse(b);var c=this.c[a];sa(this,c);ta(this,c);ua(this,c.bindings);this.a=!1!==c.autoPower}catch(m){c=m.message;var d=c.match(/position ([0-9]+)/);d&&(c+=" ('"+b.substr(+d[1],40).replace(/\s+/g," ")+"...')");D(this,"machine '"+a+"' initialization error: "+c)}var e=this,f=null;window.addEventListener("load",function(){for(var a,b,c,d,h=0;h<wc.length;h++)for(a in e.c)try{var k=e.c[a],l="";b=k["class"];if(b==wc[h]){switch(b){case xc:d=c=new Xb(e.o,
a,k);break;case fc:c=new J(e.o,a,k);break;case $b:c=new ib(e.o,a,k);break;case yc:c=new Cb(e.o,a,k);c.c.revision&&(l="revision "+c.c.revision);break;case K:c=new X(e.o,a,k);break;case zc:e.X("PCjs %s v%3.2f\n",k.name,vc);D(e,Ac);D(e,Bc);continue;default:D(e,"unrecognized device class: "+b);continue}D(e,b+" device initialized"+(l?" ("+l+")":""))}}catch(u){D(e,"error initializing "+b+" device '"+a+"':\n"+u.message);l=void 0;var q=a,r=B[e.o];if(r)for(l in r)if(r[l].ka==q){r.splice(l,1);break}}if(f=d)f.pa&&
f.pa(),f.Y&&e.a&&f.Y(!0)});window.addEventListener((Na("iOS")?"pagehide":Na("Opera")?"unload":void 0)||"beforeunload",function(){f&&(f.qa&&f.qa(),f.Y&&f.Y(!1))})}v(uc,A);var xc="Chip",fc="Input",$b="LED",zc="Machine",yc="ROM",K="Time",wc=[zc,K,$b,fc,yc,xc],Ac="Copyright \u00a9 2012-2017 Jeff Parsons \x3cJeff@pcjs.org\x3e",Bc="License: GPL version 3 or later \x3chttp://gnu.org/licenses/gpl.html\x3e",vc=1.1;window[ra]=uc;})()
//# sourceMappingURL=leds.js.map
