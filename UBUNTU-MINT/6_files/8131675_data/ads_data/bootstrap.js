(function(f){function G(a){"$ignore"===a&&(e.define=y,y=null)}function H(a,b,c){c||(c=b,b=[]);h=0;z[a]=!0;p(b,function(){m[a]=c.apply(null,arguments)})}function p(){n.push(arguments);A()}function A(){var a,b,c,d,k,e,f,g;if(n.length){a=n;n=[];e={};l=[];for(b=a.length;b--;){d=[];f=!0;for(c=a[b][0].length;c--;)k=a[b][0][c],k in m?d[c]=m[k]:(e[k]||z[k]||(l.push(k),e[k]=!0),f&&(n.push(a[b]),f=!1));if(f){g=!0;try{a[b][1].apply(null,d)}catch(h){q(h,"runtime")}}}g?A():n.length&&!r&&(r=w(B,100))}}function B(){var a,
b,c,d,e=[];r=C(r);if(!h){x=C(x);for(a=l.length;a--;)d=l[a],t[d]?(l.splice(a,1),2>t[d]&&(t[d]++,e.push(d))):t[d]=1;h=l.length;e.length&&q(Error("Modules '"+e.join("', '")+"' failed to load"),"loadFailed");if(h){x=w(I,6E4);try{b=g.createElement("script"),b.src=J+"//s1.adform.net/stoat/609/s1.adform.net/load/v/0.0.150/e/"+m.$env.$hash()+"/i/"+m.$ignore+"/r:"+l.sort().join(":"),c=g.__gEBTN__("script")[0],b.onerror=K,c?c.parentNode.insertBefore(b,c):(g.body||g.head).appendChild(b)}catch(f){q(f,"script_insert")}}}}function K(){u("response_error",
this.src)}function I(){h=0;B()}function u(a,b,c){var d=[];Math.random()<(c||.03)&&(d.push((v&&v.host||"//track.adform.net")+"/jslog/"),d.push("?src="),d.push(encodeURIComponent(a)),d.push("&msg="),d.push(encodeURIComponent(b)),a=D?new D(1,1):g.createElement("img"),a.src=d.join(""))}function q(a,b){var c=""+(a.stack||a);0>c.indexOf(a.message||"")&&(c=a+"\n"+c);w(function(){throw c;},0);u(b,c)}function E(){for(var a=arguments,b=0,c=a.length,d=[];b<c;b++)L(a[b])||d.push(a[b]);return d.length?F.apply(e,
d):e.length}function L(a){function b(b){b.apply(null,a.slice(1))}var c=a[0],d=m[c];d?b(d):p([c],b)}var y,F,r,x,l,e=f._adfq||(f._adfq=[]),g=f.document,w=f.setTimeout,C=f.clearTimeout,D=f.Image,v=f.Adform,J=v&&"https:"===(v.shost||"").split("/")[0]||"https:"===f.location.protocol?"https:":"http:",m={require:p,$boot:{window:f,require:p,rethrow:q,log:u,deprecate:function(a,b,c){var d=!1;return function(){d||(u("deprecate",b,c),d=!0);return a.apply(this,arguments)}}}},h=0,n=[],z={},t={};g.__gEBTN__=g.getElementsByTagName;
(function(){var a;e.define?e.define=G:(F=e.push,e.define=H,e.push=E,a=e.slice(),e.length=0,E.apply(e,a))})()})(window);
(function(a,h,c,b,e,M,K,L,E,F,H,I,v,x,J,G,d){
a(h,[c],function(c){c=c.window;var a=c.Adform||{},d=a.ET||{},b=a.RMB||{},e=b.Content||{};b.Type=b.Type||{};b.Content=e;a.ET=d;a.RMB=b;return c.Adform=a});
a(b,[c],function(ca){function L(f){return f}function ha(){function f(){for(var M=1,b=t;M<n.length&&!n[M];M++)b=b.parent;try{return b==b.Function("return window")()}catch(a){}}function u(a,b){var c=b.charAt(0).toUpperCase()+b.slice(1);return g(a,b,"ms"+c,"moz"+c,"webkit"+c)}function g(c){for(var b=arguments,a=b.length;--a;)if(b[a]in c)return b[a]}function d(a,b){return 0<=(""+a).toLowerCase().indexOf(b.toLowerCase())}var c=ca.window,e=c.document,v=e.documentElement,h=c.navigator,t=c.parent,
k=h.vendor,a=h.userAgent,w=e.createElement("div"),n=function(a){for(var b,c=100,d=a.top,e=[!0];--c&&a&&a!=d&&a!=a.parent;){try{b=!!(a=a.parent).Image}catch(f){b=!1}e.push(b)}return e}(c),p=c!=t,N=!p||n[1],q=!p||n[n.length-1],O=p&&f(),K=function(){var a,b=h.plugins,d=h.mimeTypes,e=c.ActiveXObject,f=26,b=b&&b["Shockwave Flash"]&&(!d||!d["application/x-shockwave-flash"]||d["application/x-shockwave-flash"].enabledPlugin)&&(b["Shockwave Flash"].version||b["Shockwave Flash"].description)||"";if(!b&&e)for(;6<=
f--;)try{a=new e("ShockwaveFlash.ShockwaveFlash."+f);6==f&&(a.AllowScriptAccess="always",b="WIN 6.0.21.0");try{b=a.GetVariable("$version").replace(/,/g,".")}catch(g){}break}catch(g){}return parseFloat(b.replace(/^.*?(\d+[\.,].*$)/,"$1").replace(/(^\d+\.)|\./g,"$1"))||0}(),da=u(e,"hidden"),C=!!da,x=/MSIE|Trident/i.test(a),ea=x&&("Microsoft Internet Explorer"===h.appName&&/MSIE (\d+[\.\d]*)/i.exec(a)||/rv:(\d+[\.\d]*)/i.exec(a))?parseFloat(RegExp.$1):-1,w=g(w,"addEventListener"),y=d(k,"apple computer"),
D=d(a,"ipad"),E=d(a,"iphone"),l=D||E,m;m=l&&(m=/\sos\s(\d+)_\d+/i.exec(a))&&(m=4<m[1]>>0);var F=d(k,"google"),G=!l&&d(a,"android"),P="ontouchstart"in e||"ontouchstart"in c,Q=(y||F)&&/(chrome|crios)+\/[\d\.]+\s/i.test(a),z=/Firefox\/[\d\.]+/i.test(a),R=d(a,"opera"),k=d(a,"opr")&&d(k,"opera software"),r=!/Chrome|CriOS|Skyfire/i.test(a)&&/Safari+\/[\.\d]+$/i.test(a)&&y,a=x&&(d(a,"IEMobile")||d(a,"WPDesktop")),S=r&&!("webkitRequestAnimationFrame"in c),T="screenX"in c,U="outerWidth"in c,V="mozInnerScreenX"in
c,v=v.msContentZoomFactor,W=!(!e.fireEvent||!e.attachEvent),L=u(c,"requestAnimationFrame"),H=l&&!r&&!h.standalone,X=g(c,"IntersectionObserver")&&!z,A=!!("srcdoc"in e.createElement("iframe")),A=!H&&!z&&A,I=l||G,e=C&&!I&&!a&&q&&g(e,"hasFocus"),Y=!q&&11==ea,J,Z,B=c.wisp,fa=B&&B.sdk&&B.sdk.platform,aa=!!h.sendBeacon,ba=r&&!q;if("android"==fa||"ios"==fa)for(var ga in B)if(/^adObject.+/i.test(ga)){Z=B[ga].inscreen;J=!!Z;break}return{result:[p,N,q,O,C,x,w,y,D,E,l,m,F,G,P,Q,z,R,k,r,a,S,T,U,V,v,W,!1,H,X,A,
I,e,Y,J,aa,ba],exports:{nop:function(){},access:n,frame:p,accParent:N,accTop:q,isolate:O,flashVersion:K,hidden:da,hasHidden:C,isIE:x,ieVersion:ea,addEvent:w,isApple:y,isIPad:D,isIPhone:E,isIOS:l,isIOSF:m,isGoogle:F,isAndroid:G,isTouch:P,isChrome:Q,isFirefox:z,isOpera:R,isOperaWebkit:k,isSafari:r,isIEMobile:a,isSafari5OrLess:S,screenX:T,outerWidth:U,mozInnerScreenX:V,msZF:v,ieDomEvents:W,reqAni:L,isRad:!1,isIOSWebView:H,intersectionAPI:X,hasSrcDoc:A,isIOSOrAndroid:I,hasFocus:e,IEVisibility:Y,isWisp:J,
wisp:Z,hasBeacon:aa,RAFVisibility:ba,frame:p,accParent:N,accTop:q,isolate:O,hasHidden:C,isIE:x,addEvent:w,isApple:y,isIPad:D,isIPhone:E,isIOS:l,isIOSF:m,isGoogle:F,isAndroid:G,isTouch:P,isChrome:Q,isFirefox:z,isOpera:R,isOperaWebkit:k,isSafari:r,isIEMobile:a,isSafari5OrLess:S,screenX:T,outerWidth:U,mozInnerScreenX:V,msZF:v,ieDomEvents:W,isRad:!1,isIOSWebView:H,intersectionAPI:X,hasSrcDoc:A,isIOSOrAndroid:I,hasFocus:e,IEVisibility:Y,isWisp:J,hasBeacon:aa,RAFVisibility:ba}}}var K={$hash:function(){if(!t){for(var f=
ha(),u=f.result,f=f.exports,g=[],d=0,c=u.length,e=0,c=c+(6-c%6)%6;d<c;d++)e=e<<1|!!u[d],5==d%6&&(g.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-".charAt(e)),e=0);for(d in f)K[d]=f[d];t=g.join("")}return t}},t;try{if(!Function("return ("+L+")(1)===1")())throw"Incorrect eval result";}catch(f){ca.log("toString",f)}return K});
a(e,[c,b],function(n,d){var g=n.window,q=g.document,x=g.setTimeout;d.$hash();return function(a){var c,b,f,l,h,k,y=new Date;b=a.type;var r=a.placeId,z=/\.js(\?|$)/i,A=/\.swf(\?|$)/i,m=d.isIE,t=d.flashVersion,p=m&&10>d.ieVersion,m=!m&&21>t;c="standard"==a.type&&"flash"==a.subtype;var B=d.isSafari&&6.1<=d.safariVersion&&c,C=a.fVer||a.ADFVer||a.version,D=a.ADFPoliteSrc,u=a.sources||a.videoSources,v=["src","ADFFlash","ADFInitFlash","bsrc","ADFBuckup"];b=4==a.behavior?"Slider":b.charAt(0).toUpperCase()+
b.slice(1);c=["AdConstructor","types/"+b];if("Standard"==b){for(b=0;b<v.length;b++)(f=a[v[b]])&&(f.match(A)?l=f:f.match(z)?h=f:k=f);k&&p&&(h=0);k&&p&&(u=0);if(C>t||(k||h)&&(m||B))l=0;l?c.push("contents/FlashTag"):h?c.push("contents/HTML"):u&&c.push("contents/VideoTag");(!l&&!h&&k||D)&&c.push("contents/ImageTag")}n.require(c,function w(b,c){var e,d=b.cbuild;e="function"!==typeof c&&c;r?(e=q.getElementById(r)||e)?(a.placement=e.nextSibling||e.previousSibling,e&&e.parentNode.removeChild(e),d(a)):1E4>
new Date-y?x(function(){p&&(g.inDapMgrIf||g.inDapIF||g.inFIF)?w(b,q.body.firstChild):w(b)},0):n.rethrow("Failed to find placement","noplacement"):d(a)})}});
a(M,[c,h],function(f,g){function e(a){return h(a).random()}function h(a){var e={random:k,int32:function(){var b,a,e=[0,2567483615];if(624<=c)for(a=c=0;624>a;a++)b=d[a]&2147483648|d[(a+1)%624]&2147483647,d[a]=d[(a+397)%624]^b>>>1^e[b&1];b=d[c++];b^=b>>>11;b^=b<<7&2636928640;b^=b<<15&4022730752;return(b^b>>>18)>>>0}},d=[],c;a||(a=Math.round(1E5*((new Date).getTime()+Math.random())));d[0]=a>>>0;for(c=1;a=c-1,624>c;c++)a=d[a]^d[a]>>>30,d[c]=(1812433253*((a&4294901760)>>>16)<<16)+1812433253*
(a&65535)+c,d[c]>>>=0;return e}function k(){return Math.floor(this.int32()/65535)}g.random=f.deprecate(e,"Adform.random is deprecated. Use h/random instead.");return e});
a(K,[c,h],function(e,a){function l(a,c){var f=c?9==c.nodeType?c:c.document:m;0<=a.indexOf('"')&&e.log("xss_detected",a);f.write('<script type="text/javascript" src="'+a+'">\x3c/script>')}function n(e){for(var c=a._prepareBannerDataCB,f={},d="ADFVideoCDN ADFDomainCDN ADFDomain VideoCDN ADFVideoCDNList ADFcmpgnID ADFmembID ADFtagID ADFafbanID ADFBanVer ADFBanVerBak ADFbanID ADFbanPlacID ADFUnloadID ADFClientSiteId ADFGeoData ADFGroupId ADFTemplateVersion ADFTemplateId ADF_ClickEvent".split(" "),
g=d.length-1;0<=g;g--)d[g]in h&&(f[d[g]]=h[d[g]]);var k=a.RMBData={clicktags:""};a._prepareBannerDataCB=function(){for(var b=d.length-1;0<=b;b--)d[b]in f&&(h[d[b]]=f[d[b]]);a.prepareBannerData(e);for(b in k)a.RMBData[b]="clicktags"!=b?k[b]:a.RMBData[b]+k[b];c&&c()};c||l(a.scriptBase+"bootstrap/Adform.BannerData.js?v="+a.cache)}var h=e.window,m=h.document;a.host&&(ADFDynamicDomain=a.host+"/banners/");a.shost&&(ADFTemplateDomain=a.shost+"/banners/");a.ENV={akamaiHost:("https:"==m.location.protocol?
"https://":"http://")+"adformvod-vh.akamaihd.net/i/Banners"};a.Log=a.Log||{sendMessage:e.log};a.loadResource=a.loadResource||l;a.prepareBannerData=a.prepareBannerData||n;return{loadResource:a.loadResource,prepareBannerData:a.prepareBannerData}});
a(L,function(){function f(a){a=a||"";var b=a.split(";oobclicktrack=");b.shift();b.length&&(this.tracks=b);a=a.split("?");this._base=a.shift();this._parts=a.join("?").split(";");this.append=[]}function g(a,b,c){var d=a.length;b+="=";var e,f=b.length;for(c||(b=b.toLowerCase());d--&&(e=a[d].slice(0,f),c||(e=e.toLowerCase()),e!==b););return d}var h=Object.prototype.hasOwnProperty,e=f.prototype;e.copy=function(){var a,b=new f;for(a in this)h.call(this,a)&&(b[a]=this[a]&&this[a].slice?this[a].slice(0):
this[a]);return b};e.get=function(a,b){var c=this._parts,d=g(c,a,b);if(~d)return c[d].slice(a.length+1)};e.set=function(a,b,c){var d=this._parts;c=g(d,a,c);0>c?d.push(a+"="+b):d[c]=d[c].slice(0,a.length+1)+b;return this};e.unset=function(a,b){var c=this._parts,d=g(c,a,b);~d&&c.splice(d,1);return this};e.toString=function(){return this._base+"?"+this._parts.join(";")+this.append.join("")};return f});
a(E,[c,b],function(p,q){var b=[/^http:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/api\/getlinks\.php.+/i,/^http:\/\/(.+)\/pixel\.php\?domain=\1&.+$/i,/^http:\/\/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+\/go$/i],a=p.window,d=a.JSON,e=q.accTop?a.top:null;if(e){var a=[],h=[],n=[],c,k,f,g,l,m;c=e.performance;e=e.document;if(c&&"function"==typeof c.getEntries){c=c.getEntries().splice(0,15);for(l=c.length;l--;){k=c[l].name;n[l]=k;f=f||0<=k.indexOf("188.214.30.92");for(m=0;3>m;m++)g=g||b[m].test(k);if(f&&
g)break}a.push(f|0,g|0);h.push(1,1)}else a.push(0,0),h.push(0,0);a.push(""===e.title?1:0);b=(b=e.getElementById("SdkIntegration"))&&"OBJECT"==b.nodeName&&0<(b.getAttribute("data")+"").indexOf("prime")?1:0;a.push(b);h.push(1,1);d={result:a.join(""),mask:h.join(""),logData:d&&d.stringify&&(f||g||b)&&n.length?d.stringify(n):null}}else d={result:"0000",mask:"0000"};return d});
a(F,[c,b,h,e,M,K,L,E],function(r,C,e,X,D,f,Y,v){function w(){var a,b;if(t)return t;this.banners={};this.compoundBanners={};try{h.body||h.write("<html><body></body></html>")}catch(d){}a=n.browserLanguage||n.language||0;b=this.getWin();this.settings=[escape(n.systemLanguage||a),escape(a),x?x.width+"X"+x.height:0,C.flashVersion,50*Math.round(b.w/50),50*Math.round(b.h/50),x?x.colorDepth:0,8,3,7,this.hasIframeSanbox()].join("|")}
function N(a){function b(b){e(["3rdparty/vendor/Adform"],function(c){c(a,b)})}var d=a.placeId="+ADFP"+a.adfxid,c=a.innerTagId,g=["types/ThirdParty"],e=r.require;h.write('<i id="'+d+'" style="display:none"></i>');c&&(_adform.push([c+".on.setup",b]),g.push("3rdparty/vendor/Adform"));e(g,function(b){b(a)});v.logData&&r.log(v.result,v.logData,1)}function O(a){var b,d,c=a||e.BannerList&&e.BannerList.shift()||e.RMBData,g={expanding:1,singleExpanding:1,floating:1,tearback:1,interstitial:1};c&&(a=c.type,
b=c.behavior,d=c.adfxid||c.ADFid,c._beforeScript=e._beforeScript,e._beforeScript=!1,{standard:1,expanding:1,singleExpanding:1}[a]&&![0,0,0,1,1][b]&&(c.placeId="+ADFP"+d,b=t.banners[d],h.write('<div id="'+c.placeId+'"'+(b.singleTag?"":' style="width:'+b.width+"px;height:"+b.height+'px;"')+'></div><i style="display:none"></i>')),X(c),v.logData&&r.log(v.result,v.logData,1),e.ADF_STUB&&g[a]&&r.log("RM_STUB",a,1))}function E(a,b,d){var c=(d=d||h).createElement("div");c.innerHTML='<iframe src="'+a+'" allowtransparency="true" webkitallowfullscreen mozallowfullscreen allowfullscreen marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" style="'+
b+'"></iframe>';d.body.appendChild(c.removeChild(c.firstChild))}function P(a){var b,d,c,f=/\/adfscript/,l=e.ADFIframe&&{src:g.location.href.replace(/cpjs=2/,"cpjs=0")};if(!l)for(b=h.getElementsByTagName("script"),d=b.length;d--&&!l;)(c=b[d]).src&&c.src.match(f)&&-1<c.src.indexOf(a)&&(l=c);return l||{}}function Z(a){var b,d;d=g._adform&&g._adform.tagFrame;var c=a;if("undefined"!=typeof a.URL){try{b=g.top.location.href.split("#")[0]}catch(e){b=d||g,b=(d=(d=b.location.ancestorOrigins)&&d[d.length-1])||
b.document.referrer}b=b?A(b):a.CREFURL;c=new Y(a.URL);c.append.push("&CREFURL="+b);c.CREFURL=b;c.STUBFILE=a.STUBFILE;c.BN=a.BN;c.ROTSEQ=a.ROTSEQ}return c}function F(a,b){try{if(a){(b=b||[]).push(a);for(var d=0;d<a.frames.length;d++)F(a.frames[d],b);return b}}catch(c){}}function Q(a){return D(a+this.id)}function R(a){try{return a.Adform&&a.Adform.ADFUtilInstance}catch(b){}}function aa(){var a=w().banners,b,d,c=[],g=!1,e;for(e in a)S.call(a,e)&&(d=a[e],b||(b=d.cookieID),c.push([d.bn,d.cookieID,d._host]),
a[e].cookieID!=b&&(g=!0));if(g){for(a=0;a<c.length;a++)c[a]=c[a].join("_");r.log("cookies",c.join("|"),1)}}function G(){return(new Date).getTime()}function T(a){try{return ba(a)}catch(b){return a}}var t,m,H,I,z,J,K,g=r.window,h=g.document,n=g.navigator,x=g.screen,U=g.setTimeout,ca=g.clearTimeout,L=g.Image,S=Object.prototype.hasOwnProperty,B=f.loadResource,A=g.encodeURIComponent,ba=g.decodeURIComponent,V=e.cache,M=[];f=w.prototype;var W={webkitVisibilityState:"webkitvisibilitychange",mozVisibilityState:"mozvisibilitychange",
msVisibilityState:"msvisibilitychange",visibilityState:"visibilitychange"};_adform=g._adform||[];if(e.ADFBannerUtils)return e.ADFBannerUtils;for(z in W)z in h&&(H=z,I=W[z]);f.getCompoundBannerInfo=function(a){return this.compoundBanners["c"+a]||null};f.createBanner=function(a){function b(a){var b=a.url;"stubFileExists"in q||(a.helper&&U(function(){r.log("StubFileError","Cref: "+u+" > Adfserve: "+k+" > bn: "+y)},100),(q.stubFileExists=a.exists)?(b=T(b),E(e.scriptBase+"iframe/recache.html?bv="+V,"position:absolute;width:10px;height:10px;left:-9999px;top:-9999px"),
E(b+"#"+V+"#"+P(y).src,"position:absolute;top:0;left:0;width:100%;height:100%",g._adform&&g._adform.tagFrame&&g.parent.document)):((d=e.RMB)&&(d=d.AdConstructor)&&(d=d.cbuild)||(e.RMB=e.RMB||{},e.RMB.AdConstructor={build:O},e.thirdPartyCB=N),B(k)))}var d,c,f,l,k,p=this,m=p.getTagID(),q=p.addNewBanner(m,"undefined"==typeof e.ADFIframe?0:1);a=q.params=Z(a,p);l=a.get("compoundSeqNo");var y=a.BN,n=p.getCompoundBannerInfo(y),w=p.getPropByBn("smid",y),x=a.ROTSEQ,u=a.CREFURL,t=a.STUBFILE,z;a.tracks&&(q.OOBClickTracks=
a.tracks);a.get("singleTag")&&(q.singleTag=!0,l=l||1,a.set("compoundSeqNo",l));q.compoundSeqNo=l;"prerender"==h[H]&&(a.set("hid",2),q.prerender=!0,h.addEventListener(I,function(){"prerender"!=h[H]&&q.prerender&&(h.removeEventListener(I,arguments.callee,!1),p.registerImpression(q))},!1));l&&(l=p.getRotSeed(),c=l.gen(y),l.compound[y]?f=l.compound[y]:x&&(l.compound[y]=x));a.set("js",1);a.set("adfxid",m);a.set(Math.floor(11E3*Math.random())+";set",p.settings);c&&a.set("rotseed",c);f&&a.set("rotseq",A(f));
n&&a.set("rotseqno",n.replace("r",""));w&&a.set("smid",w);e.CDNHost&&a.set("cdnhost",A(e.CDNHost));a.set("fd",parseInt(v.result,2)+"|"+parseInt(v.mask,2));k=a.toString();u&&t&&!e.ADF_STUB&&(u=T(u).replace(/(:\/\/[^\/]+).*/,"$1"),z=t.HOST?u.split("/")[2]===t.HOST&&p.needStubFile(u):p.needStubFile(u));z?(e.stubFile=b,c=e.shost+"/adfstub/?url="+A(u+t.PATH),B(c),B(e.scriptBase+"extra/StubHelper.js?bv="+e.cache)):(e.ADF_STUB&&r.log("adfstub",u,1),(d=e.RMB)&&(d=d.AdConstructor)&&(d=d.cbuild)||(e.RMB=e.RMB||
{},e.RMB.AdConstructor={build:O},e.thirdPartyCB=N),B(k));return q};f.addNewBanner=function(a,b){return this.banners[a]={id:a,type:b,adfserveLoadTime:G()}};f.copyBanner=function(a,b){var d,c=this.banners[a];if(c=c&&c.params||null){c=c.copy();for(d in b)S.call(b,d)&&c.set(d,b[d]);c=this.createBanner(c)}return c};f.wipeOutBanner=function(a){var b=this.banners[a];b&&(m&&(m.id=D(),m.compound&&delete m.compound[b.bn]),delete this.compoundBanners["c"+b.bn],delete this.banners[a])};f.addBannerAttribute=function(a,
b,d){(a=this.banners[a])&&(a[b]=d)};f.getTagID=function(){var a=this.getRotSeed();a.xId||(a.xId=0);return++a.xId+"x"};f.getRotSeed=function(){var a,b,d,c,e;if(!m&&!J){J=!0;try{for(a=F(g.top),b=0,d=a.length;b<d;b++)if(c=a[b],c!=g&&(e=R(c))&&e.getRotSeed){m=e.getRotSeed();break}}catch(f){}m?m.gen=Q:m={compound:{},id:D(),gen:Q}}J=!1;return m};f.getFlashVersion=r.deprecate(function(){return C.flashVersion},"Utils_getFlash");f.getWin=function(){var a=h.documentElement,b=h.body;return{w:g.innerWidth||a&&
a.clientWidth||b&&b.clientWidth,h:g.innerHeight||a&&a.clientHeight||b&&b.clientHeight}};f.getSettings=function(){return this.settings};f.firePixel=function(a){("undefined"==typeof L?h.createElement("img"):new L).src=a};f.fireTargAdPixel=function(a){var b=this.TargAd||{};b[a]||((this.TargAd=b)[a]=!0,a=a.replace("{gmtr}",Math.floor(9999999999*Math.random())).replace("{gmttzd}",(new Date).getTimezoneOffset()),this.firePixel(a))};f.registerImpression=function(a){var b,d;a&&a.prerender&&(b=a.params.copy(),
b.set("hid",1),a.rotseqno&&b.set("rotseqno",a.rotseqno),d=h.createElement("script"),d.src=b.toString(),d.type="text/javascript",h.body.appendChild(d),delete a.prerender)};f.addCompoundBannerInfo=function(a,b){this.compoundBanners["c"+a]="r"+b};f.setBannerRegisteredStatus=function(a){var b,d,c=this.banners[a];if(c){var g=G(),f=g-c.adfserveLoadTime,k=parseInt(c.serverTime,10),h=e.ADFEventsInstance;c._host=e.host;c.adfserveLoadTime=f;k&&(k+=Math.round(.5*f),c.serverTime=k,c.timeDiff=k-g);c.registered=
1;this.sendLoadMetrics(a);if(c.singleTag&&1==c.compoundSeqNo)for(b=2,d=c.syncMembersCount;b<=d;b++)this.copyBanner(a,{compoundSeqNo:b,compoundImpr:0});try{for(h&&h.register(c),b=0,d=M.length;b<d;b++)M[b].call(this)}catch(m){}0<parseInt(c.cookieID,10)&&(K&&ca(K),K=U(aa,3E3))}};f.onBannerRegisteredStatus=function(a){M.push(a)};f.hasIframeSanbox=function(){var a=this._sandbox;if("number"!=typeof a){a=1;try{g.top.document.getElementById,a=0}catch(b){}this._sandbox=a}return a};f.getPropByBn=function(a,
b){var d,c,e=this.banners;for(d in e)if(c=e[d],c.bn==b&&a in c)return c[a]};f.now=G;f.needStubFile=function(a){var b=g.$sf,d=g.parent,c=this._stub,e=g._adform&&g._adform.tagFrame,f=/^https?:/,k=g.location.protocol;if(null==c){c=!(g==d||g.inDapMgrIf||g.inDapIF||g.inFIF||b&&b.ext);!c&&e&&(c=!0,d=e.parent);if(c)try{d.document.getElementById,c=!1}catch(h){}c&&(k=k.match(f)?k:null,C.accParent&&!k&&(k=d.location.protocol,k=k.match(f)?k:null),c=a.split("/")[0]===k);this._stub=c}return c};f.getAdfscript=
P;f.getUnloadId=function(a){try{for(var b,d,c,e,f=F(g.top),h=f.length;h--;)for(c in b=(d=R(f[h]))&&d.banners,b)if(e=b[c],e.bn==a&&1==e.compoundSeqNo)return e.unloadID}catch(m){}};f.sendLoadMetrics=function(a){a=this.banners[a];var b=g.ADFGeoData;!a.metricsSent&&"string"==typeof b&&.1>Math.random()&&(b=b.split(";"),3==b.length&&((new L).src=e.host+"/jsmetrics/?adfserve="+a.adfserveLoadTime+"&sid="+b[2]+"&rid="+b[1]+"&cid="+b[0]));a.metricsSent=!0};f.loadFrame=E;f.ADFCreateObjectCallback=function(a,
b){return function(){b.apply(a,arguments)}};f.eventRegister=function(){};f.getPosition=function(a){for(var b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b};f.getScrollXY=function(){var a=h.body,b=h.documentElement,d={x:0,y:0};"number"==typeof g.pageYOffset?(d.y=g.pageYOffset,d.x=g.pageXOffset):a&&(a.scrollLeft||a.scrollTop)?(d.y=a.scrollTop,d.x=a.scrollLeft):b&&(b.scrollLeft||b.scrollTop)&&(d.y=b.scrollTop,d.x=b.scrollLeft);return d};f.getBrowser=function(){try{var a=n.userAgent;
return~n.appVersion.indexOf("MSIE")&&0>a.indexOf("Opera")?"MSIE":~a.indexOf("Safari")?"Safari":~a.indexOf("Opera")?"Opera":~a.indexOf("Netscape")?~n.product.indexOf("Gecko")&&(~n.vendor.indexOf("Firefox")||~a.indexOf("Firefox"))?"Firefox":"Netscape":void 0}catch(b){}};e.ADFUtilInstance=t=new w;return e.ADFBannerUtils=w.getInstance=w});
a(H,[c,h,F],function(a,e,c){var l=Object.prototype.hasOwnProperty,m=a.window,n=m.document;a={Initialized:!1,InitTime:(new Date).getTime(),Host:e.host||("https:"==n.location.protocol?"https://":"http://")+"track.adform.net",callbacks:[],sendEvent:function(p,f,a,c,h){var d,g,b,k;g=Math.round(((new Date).getTime()-this.InitTime)/1E3);b=q.banners[p];k=e.adRegister&&e.adRegister[p];try{this.notifyAboutEvent.apply(this,arguments)}catch(l){}if(!b&&k)d=k.sendEvent(f,a,c,h);
else if(b&&b.isEventsEnabled){d=b.bn;!b._imprID&&1<b.compoundSeqNo&&(b._imprID=q.getUnloadId(d)||b.unloadID);g=["bn",d,"event",f,"time",(0>g?0:3600<g?3600:g)+"","banner",b.ban,"innerbanner",b.innerban,"asset",a,"name",c,"imprid",b._imprID||b.unloadID,"icid",b.cookieID,"eData",b.eData,"adxvars",b.adxvars,"rnd",Math.floor(1E9*Math.random())];b=0;for(d=[];b<g.length;b+=2)(k=g[b+1])&&d.push(g[b]+"="+encodeURIComponent(k));d=this.Host+"/Serving/Event/?"+d.join("&")+(h||"");(m.Image?new m.Image(1,1):n.createElement("img")).src=
d}return d},Initialize:a.deprecate(function(){this.Initialized=!0},"initEvents",1),registerCallback:function(a,f){"function"==typeof a&&this.callbacks.push([a,f])},unregisterCallback:function(a){var f=this.callbacks,c=f.length;if("function"==typeof a)for(;c--;)f[c][0]==a&&f.splice(c,1)},notifyAboutEvent:function(){for(var a=this.callbacks.slice(),c=0,e=a.length;c<e;c++)a[c][0].apply(a[c][1]||this,arguments)}};var q=c();if(c=e.Events){for(var h in a)l.call(a,h)&&!l.call(c,h)&&(c[h]=a[h]);c.sendEvent=
a.sendEvent}else c=e.Events=a;e.ADFEvents2||(e.ADFEvents2=c);return a});
a(I,[c,h],function(g,b){function d(c){try{var e=c.URL,d=c.BN,h,a,n,k;c=/\/adfscript/;var l=b.ADFIframe&&{src:r.location.href.replace(/cpjs=2/,"cpjs=0")};if(!l)for(a=m.getElementsByTagName("script"),n=a.length;n--&&!l;)(k=a[n]).src&&k.src.match(c)&&-1<k.src.indexOf(d)&&(l=k);h=l||m.currentScript||{};var f=m.createElement("div");a=h;var p,t,q,u,e=e.split(";");e[0]+=";srctype=6";for(e=e.join(";");a;)p="BODY"==a.nodeName,t="HEAD"==a.nodeName,a=!(p||t)&&a.parentNode;p?(q=h.parentNode,u=
h):q=m.body;f.innerHTML='<a href="'+b.host+"/C/?bn="+d+';C=0"><img src="'+e+'"></a>';q.insertBefore(f.firstChild,u||null);g.log("fallback",d)}catch(v){g.rethrow(v,"fallback_error")}}var f,r=g.window,m=r.document;g.require(["$ignore"],function(){var c=b.ADFBannerParams;f||(b.ADFUtilInstance||(b.ADFUtilInstance={}),b.ADFBanner||(b.ADFBanner=d),d(c&&c.length?c.shift():b.ADFBannerData))});return{cancel:function(){f=!0},write:d}});
a(v,[h],function(l){function g(){}function h(b){b?this._events&&this._events[b]&&delete this._events[b]:delete this._events;return this}function k(b){var a=this._events;a||(this._events=a={});return a[b]||(a[b]=[])}var m=Array.prototype.slice,f=g.prototype;l.RMB.EventEmitter=g;f.emit=function(b){var a,c,d,e=this._events;if(e&&(e=e[b])&&(c=e.length))for(d=m.call(arguments,1),e=e.slice(),a=0;a<c;a++)e[a].apply(this,d);return this};f.on=function(b,a){this.emit("newListener",b,a);k.call(this,
b).push(a);return this};f.once=function(b,a){var c=function(){return a.apply(this.off(b,c),arguments)};c._oncep=a;return this.on(b,c)};f.off=function(b,a){var c,d=(c=this._events)&&c[b];if(d){for(c=d.length;c--;)d[c]!=a&&d[c]._oncep!=a||d.splice(c,1);d.length||h.call(this,b);this.emit("removeListener",b,a)}return this};f.clear=h;f.list=k;return g});
a(x,[c,F],function(t,x){function m(g,l){for(var a in l)l.hasOwnProperty(a)&&("object"==typeof l[a]?("object"!=typeof g[a]&&(g[a]={}),m(g[a],l[a])):g[a]=l[a])}var q=t.window,y=q.parent,r={useClose:"expImage.useClose",overlay:"overlay",wallpaper:"options.wallpaper",x:"options.x",y:"options.y",hidden:"options.hidden",position:"options.position",adNotice:"options._adNotice",fixedBounding:"options.fixedBounding",resizeInFIF:"options.iabResize",panel:"panel",responsive:"options.responsive",
testPlace:"options.testPlace"};return function(g,l){var a,u,h,f,n,c,d,b,v,k;d=g.options;b=d.bn;c=x();var e;try{e=((d.iab?y:q)._adform||[]).slice(0)}catch(w){e=[]}var z=/(?:(\d+x|\d+#\d+|#[-_0-9a-z]+|\d+))?\.?(.*)/i,p={};d.iab&&e.push.apply(e,q._adform||[]);c&&c.getPropByBn&&(c=c.getPropByBn("multiPanel",b))&&e.push.apply(e,c);if(c=(d.userParams||{})._adform)try{if((c=Function("return ("+c+")")())&&"object"==typeof c)(e=e||[]).push([d.xId,c]);else throw Error("_adform from userParams should be an object");
}catch(w){t.rethrow(w,"user_params")}if("[object Array]"==Object.prototype.toString.call(e)&&e.length){d=l||["",b,"#"+d.seqNo,b+"#"+d.seqNo,d.xId];b=0;c=d.length;for(v=e.length;b<c;b++)p[d[b]]={};for(b=0;b<v;b++)if(a=e[b][0].match(z),u=p[a[1]||""]){h=e[b][1];if(a[2]){a=a[2].split(".");for(n=f={};1<a.length;)f=f[a.shift()]={};f[a[0]]=h;h=n}if(a=h.on)for(k in a){if("function"==typeof a[k])g.events.on(k,a[k])}else if(h.init)g.events.on("init",h.init);a={};for(f in h)r[f]&&(a[f]=h[f]);m(u,a)}k=p[d[0]];
for(b=1;b<c;b++)m(k,p[d[b]]);for(b in r)if(b in k){a=r[b].split(".");for(n=f={};1<a.length;)f=f[a.shift()]={};f[a[0]]=k[b];m(g,n)}}}});
a(J,[c,b,h,F,v,x],function(v,J,n,z,K,L){function q(c){for(var d=0,k=c.length;d<k;d++){var a=c[d],e=void 0,A=void 0,f,g,q=n.scriptBase,u=n.cache,b,h,p;g=void 0;var r=a.xId,B=a.externalScripts,C=a.trackingPixelUrls;b=a.banner;var w=b.backup,l=b.type,I=b.innerTagId;h=b.clickUrls;var z=a.visibility.testMode,D=a.trackingIframeUrls;p=a.geoLocation;var m={};f=a.csImpressionUrl;var E=x.banners[r];B&&(e=B.before,A=B.after);e&&(F(e),n._beforeScript=
!0);if(D)for(e=D.length;e--;)x.loadFrame(D[e],"display:none");E&&(G(M,a,E),E.isDSPTag="dsp"===a.impressionType,x.setBannerRegisteredStatus(r));if("thirdparty"===l.type){b={bn:b.tagId,xId:r,bannerId:b.id};h={adfxid:r,options:b};I&&(h.innerTagId=I);p=h.events=new K;a=a.banner.script;L(h,[b.bn]);n.thirdPartyCB&&n.thirdPartyCB(h);try{p.emit("setup",h)}catch(H){v.rethrow(H,"setup")}try{(g=b.wrapper)?y.write(N(g,a)):y.write(a)}catch(H){v.rethrow(H,"thirdPartyWrite")}f&&(J.hasBeacon?O.sendBeacon(f,""):(new t.Image).src=
f)}else if("standard"!=l.type||"image"!=l.subType&&"flash"!=l.subType&&"html"!=l.subType)v.log("rollback",b.tagId+" banner not rendered",1);else{g=b.properties;g={type:l.type,subtype:l.subType,landingPageTarget:g.landingTarget,ADFFlash:b.asset&&b.asset.url||b.url,ADFBuckupClickURL:w&&w.clickUrl||a.clickUrl,width:b.size.width,height:b.size.height,ADFid:r,ADFban:b.tagId,bannerAlign:g.align,clicktags:m,flashvars:m,defaultClickTAG:h[0]&&h[0].name,css:q+"assets/css/Adform.RMB.css?bv="+u,quality:g.quality,
wmode:g.wMode,fVer:g.flashVersion};w&&(g.ADFBuckup=w.url);f=0;for(e=h.length;f<e;f++)m[h[f].name]=encodeURIComponent(h[f].url);G(P,a,m);m.domain=encodeURIComponent(a.staticContentUrl);m.bn=b.tagId;m.geo=[p.city.id,p.region.id,p.country.id].join(";");n.RMB.AdConstructor.build(g)}if(C)for(f=0,e=C.length;f<e;f++)x.fireTargAdPixel(C[f]);A&&F(A);z&&F([q+"unload/Adform.Inscreen.js?"+u])}}function u(){Q.apply(this,arguments);q(arguments)}function F(c){for(var d=0;d<c.length;d++)y.write('<script src="'+c[d]+
'">\x3c/script>')}function G(c,d,k){var a,e;for(a in c)e=c[a],"string"===typeof e?null!=d[a]&&(k[e]=d[a]):d[a]&&G(e,d[a],k)}function N(c,d){var k=y.createElement("div");k.innerHTML=c;var a=k.firstChild;a.innerHTML=d;return a.firstChild&&1==a.firstChild.nodeType?k.innerHTML:d}var t=v.window,y=t.document,O=t.navigator,Q=Array.prototype.push,x=z(),M={visitor:{cookieId:"cookieID"},csImpressionUrl:"csImpressionUrl",eData:"eData",uData:"uData",interactionId:"unloadID",visibility:{sendUnload:"sendUnloadData",
area:"visibilityArea",time:"visibilityTime"},serverTime:"serverTime",banner:{id:"ban",version:"bannerVersion",template:{dcoEngineId:"dcoEngineId"},size:{width:"width",height:"height"},rotationSeqenceNumber:"rotseqno",smId:"smid",tagId:"bn",campaignId:"pm",membershipId:"ms",bannerPlacementId:"bnpl",isEventEnabled:"isEventsEnabled"},isAdNoticeEnabled:"adNotice",publisher:{adxvars:"adxvars",publisherUnloadData:"publisherUnloadData",visibility:{area:"publisherVisibilityArea",time:"publisherVisibilityTime"}},
dsp:{inventorySourceId:"rtbInventorySourceId",requestId:"rtbReqId",rtbdata:"rtbdata",isUnloadUfcEnabled:"ufcEnabled",rtbwp:"rtbwp"},disableFlash:"disableFlash"},P={banner:{clientSiteId:"cid",template:{groupId:"gid",version:"tv",id:"tid"},version:"bv",campaignId:"ADFcmpgnID",membershipId:"ADFmembID",id:"ADFbanID",bannerPlacementId:"ADFbanPlacID",properties:{wMode:"wmode"},dynamicAdContent:"dynamicAdContent"},xId:"ADFid",interactionId:"unloadID",trackingSetupId:"trackingSetupId"};return function(){var c=
t.adfjsonbanners;c?(c.push=u,q(c)):(c=[],c.push=u,t.adfjsonbanners=c)}});
a(G,[c,h,H,I,F,J],function(g,a,c,f,h,k){function d(){var b=a.ADFBannerParams,e=b&&b.length?b.shift():a.ADFBannerData;if(e)try{h().createBanner(e)}catch(c){g.rethrow(c,"create_banner"),f.write(e)}b&&b.length&&d()}a.ADFBanner||(a.ADFBanner=d,a.ADFBanner());k();c.IE=9;f.cancel();return d});
a(d,function(){return"8IG-iAAAAEAA"});
})(_adfq.define,"Adform","$boot","$env","$main","h/random","bootstrap/Global","bootstrap/URL","adqa/FDTest","bootstrap/Utils","bootstrap/Events","bootstrap/Fallback","common/EventEmitter","api/ARMA","bootstrap/adfjsonbanners","bootstrap/Banner","$ignore");