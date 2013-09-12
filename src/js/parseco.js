if(typeof(window['parseco']) == 'undefined') {
// file: src/lib/jquery/jquery-1.8.1.min.js
/*! jQuery v@1.8.1 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.1",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":a.toString().replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||f.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return typeof a=="object"?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length||!d)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||++p.uuid:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")===0&&(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>-1)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n=(p._data(this,"events")||{})[c.type]||[],o=n.delegateCount,q=[].slice.call(arguments),r=!c.exclusive&&!c.namespace,s=p.event.special[c.type]||{},t=[];q[0]=c,c.delegateTarget=this;if(s.preDispatch&&s.preDispatch.call(this,c)===!1)return;if(o&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<o;d++)k=n[d],l=k.selector,h[l]===b&&(h[l]=p(l,this).index(f)>=0),h[l]&&j.push(k);j.length&&t.push({elem:f,matches:j})}n.length>o&&t.push({elem:this,matches:n.slice(o)});for(d=0;d<t.length&&!c.isPropagationStopped();d++){i=t[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){k=i.matches[e];if(r||!c.namespace&&!k.namespace||c.namespace_re&&c.namespace_re.test(k.namespace))c.data=k.data,c.handleObj=k,g=((p.event.special[k.origType]||{}).handle||k.handler).apply(i.elem,q),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return s.postDispatch&&s.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function $(a,b,c,d){c=c||[],b=b||q;var e,f,g,j,k=b.nodeType;if(k!==1&&k!==9)return[];if(!a||typeof a!="string")return c;g=h(b);if(!g&&!d)if(e=L.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&i(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return u.apply(c,t.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&X&&b.getElementsByClassName)return u.apply(c,t.call(b.getElementsByClassName(j),0)),c}return bk(a,b,c,d,g)}function _(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function ba(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bb(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bc(a,b,c,d){var e,g,h,i,j,k,l,m,n,p,r=!c&&b!==q,s=(r?"<s>":"")+a.replace(H,"$1<s>"),u=y[o][s];if(u)return d?0:t.call(u,0);j=a,k=[],m=0,n=f.preFilter,p=f.filter;while(j){if(!e||(g=I.exec(j)))g&&(j=j.slice(g[0].length),h.selector=l),k.push(h=[]),l="",r&&(j=" "+j);e=!1;if(g=J.exec(j))l+=g[0],j=j.slice(g[0].length),e=h.push({part:g.pop().replace(H," "),string:g[0],captures:g});for(i in p)(g=S[i].exec(j))&&(!n[i]||(g=n[i](g,b,c)))&&(l+=g[0],j=j.slice(g[0].length),e=h.push({part:i,string:g.shift(),captures:g}));if(!e)break}return l&&(h.selector=l),d?j.length:j?$.error(a):t.call(y(s,k),0)}function bd(a,b,e,f){var g=b.dir,h=s++;return a||(a=function(a){return a===e}),b.first?function(b){while(b=b[g])if(b.nodeType===1)return a(b)&&b}:f?function(b){while(b=b[g])if(b.nodeType===1&&a(b))return b}:function(b){var e,f=h+"."+c,i=f+"."+d;while(b=b[g])if(b.nodeType===1){if((e=b[o])===i)return b.sizset;if(typeof e=="string"&&e.indexOf(f)===0){if(b.sizset)return b}else{b[o]=i;if(a(b))return b.sizset=!0,b;b.sizset=!1}}}}function be(a,b){return a?function(c){var d=b(c);return d&&a(d===!0?c:d)}:b}function bf(a,b,c){var d,e,g=0;for(;d=a[g];g++)f.relative[d.part]?e=bd(e,f.relative[d.part],b,c):e=be(e,f.filter[d.part].apply(null,d.captures.concat(b,c)));return e}function bg(a){return function(b){var c,d=0;for(;c=a[d];d++)if(c(b))return!0;return!1}}function bh(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)$(a,b[e],c,d)}function bi(a,b,c,d,e,g){var h,i=f.setFilters[b.toLowerCase()];return i||$.error(b),(a||!(h=e))&&bh(a||"*",d,h=[],e),h.length>0?i(h,c,g):[]}function bj(a,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s=0,t=a.length,v=S.POS,w=new RegExp("^"+v.source+"(?!"+A+")","i"),x=function(){var a=1,c=arguments.length-2;for(;a<c;a++)arguments[a]===b&&(n[a]=b)};for(;s<t;s++){f=a[s],g="",m=e;for(h=0,i=f.length;h<i;h++){j=f[h],k=j.string;if(j.part==="PSEUDO"){v.exec(""),l=0;while(n=v.exec(k)){o=!0,p=v.lastIndex=n.index+n[0].length;if(p>l){g+=k.slice(l,n.index),l=p,q=[c],J.test(g)&&(m&&(q=m),m=e);if(r=O.test(g))g=g.slice(0,-5).replace(J,"$&*"),l++;n.length>1&&n[0].replace(w,x),m=bi(g,n[1],n[2],q,m,r)}g=""}}o||(g+=k),o=!1}g?J.test(g)?bh(g,m||[c],d,e):$(g,c,d,e?e.concat(m):m):u.apply(d,m)}return t===1?d:$.uniqueSort(d)}function bk(a,b,e,g,h){a=a.replace(H,"$1");var i,k,l,m,n,o,p,q,r,s,v=bc(a,b,h),w=b.nodeType;if(S.POS.test(a))return bj(v,b,e,g);if(g)i=t.call(g,0);else if(v.length===1){if((o=t.call(v[0],0)).length>2&&(p=o[0]).part==="ID"&&w===9&&!h&&f.relative[o[1].part]){b=f.find.ID(p.captures[0].replace(R,""),b,h)[0];if(!b)return e;a=a.slice(o.shift().string.length)}r=(v=N.exec(o[0].string))&&!v.index&&b.parentNode||b,q="";for(n=o.length-1;n>=0;n--){p=o[n],s=p.part,q=p.string+q;if(f.relative[s])break;if(f.order.test(s)){i=f.find[s](p.captures[0].replace(R,""),r,h);if(i==null)continue;a=a.slice(0,a.length-q.length)+q.replace(S[s],""),a||u.apply(e,t.call(i,0));break}}}if(a){k=j(a,b,h),c=k.dirruns++,i==null&&(i=f.find.TAG("*",N.test(a)&&b.parentNode||b));for(n=0;m=i[n];n++)d=k.runs++,k(m)&&e.push(m)}return e}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=a.document,r=q.documentElement,s=0,t=[].slice,u=[].push,v=function(a,b){return a[o]=b||!0,a},w=function(){var a={},b=[];return v(function(c,d){return b.push(c)>f.cacheLength&&delete a[b.shift()],a[c]=d},a)},x=w(),y=w(),z=w(),A="[\\x20\\t\\r\\n\\f]",B="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",C=B.replace("w","w#"),D="([*^$|!~]?=)",E="\\["+A+"*("+B+")"+A+"*(?:"+D+A+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+C+")|)|)"+A+"*\\]",F=":("+B+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+E+")|[^:]|\\\\.)*|.*))\\)|)",G=":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",H=new RegExp("^"+A+"+|((?:^|[^\\\\])(?:\\\\.)*)"+A+"+$","g"),I=new RegExp("^"+A+"*,"+A+"*"),J=new RegExp("^"+A+"*([\\x20\\t\\r\\n\\f>+~])"+A+"*"),K=new RegExp(F),L=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,M=/^:not/,N=/[\x20\t\r\n\f]*[+~]/,O=/:not\($/,P=/h\d/i,Q=/input|select|textarea|button/i,R=/\\(?!\\)/g,S={ID:new RegExp("^#("+B+")"),CLASS:new RegExp("^\\.("+B+")"),NAME:new RegExp("^\\[name=['\"]?("+B+")['\"]?\\]"),TAG:new RegExp("^("+B.replace("w","w*")+")"),ATTR:new RegExp("^"+E),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+A+"*(even|odd|(([+-]|)(\\d*)n|)"+A+"*(?:([+-]|)"+A+"*(\\d+)|))"+A+"*\\)|)","i"),POS:new RegExp(G,"ig"),needsContext:new RegExp("^"+A+"*[>+~]|"+G,"i")},T=function(a){var b=q.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},U=T(function(a){return a.appendChild(q.createComment("")),!a.getElementsByTagName("*").length}),V=T(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),W=T(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),X=T(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),Y=T(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",r.insertBefore(a,r.firstChild);var b=q.getElementsByName&&q.getElementsByName(o).length===2+q.getElementsByName(o+0).length;return e=!q.getElementById(o),r.removeChild(a),b});try{t.call(r.childNodes,0)[0].nodeType}catch(Z){t=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}$.matches=function(a,b){return $(a,null,null,b)},$.matchesSelector=function(a,b){return $(b,null,null,[a]).length>0},g=$.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=g(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=g(b);return c},h=$.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},i=$.contains=r.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:r.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},$.attr=function(a,b){var c,d=h(a);return d||(b=b.toLowerCase()),f.attrHandle[b]?f.attrHandle[b](a):W||d?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},f=$.selectors={cacheLength:50,createPseudo:v,match:S,order:new RegExp("ID|TAG"+(Y?"|NAME":"")+(X?"|CLASS":"")),attrHandle:V?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:e?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:U?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(R,""),a[3]=(a[4]||a[5]||"").replace(R,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||$.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&$.error(a[0]),a},PSEUDO:function(a,b,c){var d,e;if(S.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(d=a[4])K.test(d)&&(e=bc(d,b,c,!0))&&(e=d.indexOf(")",d.length-e)-d.length)&&(d=d.slice(0,e),a[0]=a[0].slice(0,e)),a[2]=d;return a.slice(0,3)}},filter:{ID:e?function(a){return a=a.replace(R,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(R,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(R,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=x[o][a];return b||(b=x(a,new RegExp("(^|"+A+")"+a+"("+A+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return b?function(d){var e=$.attr(d,a),f=e+"";if(e==null)return b==="!=";switch(b){case"=":return f===c;case"!=":return f!==c;case"^=":return c&&f.indexOf(c)===0;case"*=":return c&&f.indexOf(c)>-1;case"$=":return c&&f.substr(f.length-c.length)===c;case"~=":return(" "+f+" ").indexOf(c)>-1;case"|=":return f===c||f.substr(0,c.length+1)===c+"-"}}:function(b){return $.attr(b,a)!=null}},CHILD:function(a,b,c,d){if(a==="nth"){var e=s++;return function(a){var b,f,g=0,h=a;if(c===1&&d===0)return!0;b=a.parentNode;if(b&&(b[o]!==e||!a.sizset)){for(h=b.firstChild;h;h=h.nextSibling)if(h.nodeType===1){h.sizset=++g;if(h===a)break}b[o]=e}return f=a.sizset-d,c===0?f===0:f%c===0&&f/c>=0}}return function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b,c,d){var e,g=f.pseudos[a]||f.pseudos[a.toLowerCase()];return g||$.error("unsupported pseudo: "+a),g[o]?g(b,c,d):g.length>1?(e=[a,a,"",b],function(a){return g(a,0,e)}):g}},pseudos:{not:v(function(a,b,c){var d=j(a.replace(H,"$1"),b,c);return function(a){return!d(a)}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!f.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},contains:v(function(a){return function(b){return(b.textContent||b.innerText||g(b)).indexOf(a)>-1}}),has:v(function(a){return function(b){return $(a,b).length>0}}),header:function(a){return P.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:_("radio"),checkbox:_("checkbox"),file:_("file"),password:_("password"),image:_("image"),submit:ba("submit"),reset:ba("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return Q.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]},last:function(a,b,c){var d=a.pop();return c?a:[d]},even:function(a,b,c){var d=[],e=c?1:0,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},odd:function(a,b,c){var d=[],e=c?0:1,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,c){var d=a.splice(+b,1);return c?a:d}}},k=r.compareDocumentPosition?function(a,b){return a===b?(l=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return l=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bb(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bb(e[j],f[j]);return j===c?bb(a,f[j],-1):bb(e[j],b,1)},[0,0].sort(k),m=!l,$.uniqueSort=function(a){var b,c=1;l=m,a.sort(k);if(l)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},$.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},j=$.compile=function(a,b,c){var d,e,f,g=z[o][a];if(g&&g.context===b)return g;d=bc(a,b,c);for(e=0,f=d.length;e<f;e++)d[e]=bf(d[e],b,c);return g=z(a,bg(d)),g.context=b,g.runs=g.dirruns=0,g},q.querySelectorAll&&function(){var a,b=bk,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[],f=[":active"],g=r.matchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||r.oMatchesSelector||r.msMatchesSelector;T(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+A+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),T(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+A+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=e.length&&new RegExp(e.join("|")),bk=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a)))if(d.nodeType===9)try{return u.apply(f,t.call(d.querySelectorAll(a),0)),f}catch(i){}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){var j,k,l,m=d.getAttribute("id"),n=m||o,p=N.test(a)&&d.parentNode||d;m?n=n.replace(c,"\\$&"):d.setAttribute("id",n),j=bc(a,d,h),n="[id='"+n+"']";for(k=0,l=j.length;k<l;k++)j[k]=n+j[k].selector;try{return u.apply(f,t.call(p.querySelectorAll(j.join(",")),0)),f}catch(i){}finally{m||d.removeAttribute("id")}}return b(a,d,f,g,h)},g&&(T(function(b){a=g.call(b,"div");try{g.call(b,"[test!='']:sizzle"),f.push(S.PSEUDO.source,S.POS.source,"!=")}catch(c){}}),f=new RegExp(f.join("|")),$.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!h(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=g.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return $(c,null,null,[b]).length>0})}(),f.setFilters.nth=f.setFilters.eq,f.filters=f.pseudos,$.attr=p.attr,p.find=$,p.expr=$.selectors,p.expr[":"]=p.expr.pseudos,p.unique=$.uniqueSort,p.text=$.getText,p.isXMLDoc=$.isXML,p.contains=$.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{cj=f.href}catch(cy){cj=e.createElement("a"),cj.href="",cj=cj.href}ck=ct.exec(cj.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:cj,isLocal:cn.test(ck[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=""+(c||y),k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,ck[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]==ck[1]&&i[2]==ck[2]&&(i[3]||(i[1]==="http:"?80:443))==(ck[3]||(ck[1]==="http:"?80:443)))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e,f=this.createTween(a,b),g=cQ.exec(b),h=f.cur(),i=+h||0,j=1;if(g){c=+g[2],d=g[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&i){i=p.css(f.elem,a,!0)||c||1;do e=j=j||".5",i=i/j,p.style(f.elem,a,i+d),j=f.cur()/h;while(j!==1&&j!==e)}f.unit=d,f.start=i,f.end=g[1]?i+(g[1]+1)*c:c}return f}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j,k,l,m=this[0],n=m&&m.ownerDocument;if(!n)return;return(e=n.body)===m?p.offset.bodyOffset(m):(d=n.documentElement,p.contains(d,m)?(c=m.getBoundingClientRect(),f=da(n),g=d.clientTop||e.clientTop||0,h=d.clientLeft||e.clientLeft||0,i=f.pageYOffset||d.scrollTop,j=f.pageXOffset||d.scrollLeft,k=c.top+i-g,l=c.left+j-h,{top:k,left:l}):{top:0,left:0})},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
// file: src/lib/tabs/tabs.js
$(document).ready(function() {
    $('ul.fmmlTabs').each(function(){
        // For each set of tabs, we want to keep track of
        // which tab is active and it's associated content
        var $active, $content, $links = $(this).find('a');

        // If the location.hash matches one of the links, use that as the active tab.
        // If no match is found, use the first link as the initial active tab.
        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $active.addClass('active');
        $content = $($active.attr('href'));

        // Hide the remaining content
        $links.not($active).each(function () {
            $($(this).attr('href')).hide();
        });

        // Bind the click event handler
        $(this).on('click', 'a', function(e){
            // Make the old tab inactive.
            $active.removeClass('active');
            $content.hide();

            // Update the variables with the new link and content
            $active = $(this);
            $content = $($(this).attr('href'));

            // Make the tab active.
            $active.addClass('active');
            $content.show();

            // Prevent the anchor's default click action
            e.preventDefault();
        });
    });
});

// file: src/lib/accordion-menu/includes/accmenu.js
$(document).ready(function() {
	 
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.fmmlAccordionButton').click(function() {

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.fmmlAccordionButton').removeClass('on');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.fmmlAccordionContent').slideUp('normal');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('on');
			  
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 } 
		  
	 });
	  
	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.fmmlAccordionButton').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	
	/********************************************************************************************************************
	CLOSES ALL S ON PAGE LOAD
	********************************************************************************************************************/	
	$('.fmmlAccordionContent').hide();
});

// file: src/lib/syntaxhighlighter/scripts/shCore.js
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('K M;I(M)1S 2U("2a\'t 4k M 4K 2g 3l 4G 4H");(6(){6 r(f,e){I(!M.1R(f))1S 3m("3s 15 4R");K a=f.1w;f=M(f.1m,t(f)+(e||""));I(a)f.1w={1m:a.1m,19:a.19?a.19.1a(0):N};H f}6 t(f){H(f.1J?"g":"")+(f.4s?"i":"")+(f.4p?"m":"")+(f.4v?"x":"")+(f.3n?"y":"")}6 B(f,e,a,b){K c=u.L,d,h,g;v=R;5K{O(;c--;){g=u[c];I(a&g.3r&&(!g.2p||g.2p.W(b))){g.2q.12=e;I((h=g.2q.X(f))&&h.P===e){d={3k:g.2b.W(b,h,a),1C:h};1N}}}}5v(i){1S i}5q{v=11}H d}6 p(f,e,a){I(3b.Z.1i)H f.1i(e,a);O(a=a||0;a<f.L;a++)I(f[a]===e)H a;H-1}M=6(f,e){K a=[],b=M.1B,c=0,d,h;I(M.1R(f)){I(e!==1d)1S 3m("2a\'t 5r 5I 5F 5B 5C 15 5E 5p");H r(f)}I(v)1S 2U("2a\'t W 3l M 59 5m 5g 5x 5i");e=e||"";O(d={2N:11,19:[],2K:6(g){H e.1i(g)>-1},3d:6(g){e+=g}};c<f.L;)I(h=B(f,c,b,d)){a.U(h.3k);c+=h.1C[0].L||1}Y I(h=n.X.W(z[b],f.1a(c))){a.U(h[0]);c+=h[0].L}Y{h=f.3a(c);I(h==="[")b=M.2I;Y I(h==="]")b=M.1B;a.U(h);c++}a=15(a.1K(""),n.Q.W(e,w,""));a.1w={1m:f,19:d.2N?d.19:N};H a};M.3v="1.5.0";M.2I=1;M.1B=2;K C=/\\$(?:(\\d\\d?|[$&`\'])|{([$\\w]+)})/g,w=/[^5h]+|([\\s\\S])(?=[\\s\\S]*\\1)/g,A=/^(?:[?*+]|{\\d+(?:,\\d*)?})\\??/,v=11,u=[],n={X:15.Z.X,1A:15.Z.1A,1C:1r.Z.1C,Q:1r.Z.Q,1e:1r.Z.1e},x=n.X.W(/()??/,"")[1]===1d,D=6(){K f=/^/g;n.1A.W(f,"");H!f.12}(),y=6(){K f=/x/g;n.Q.W("x",f,"");H!f.12}(),E=15.Z.3n!==1d,z={};z[M.2I]=/^(?:\\\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\\29-26-f]{2}|u[\\29-26-f]{4}|c[A-3o-z]|[\\s\\S]))/;z[M.1B]=/^(?:\\\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\\d*|x[\\29-26-f]{2}|u[\\29-26-f]{4}|c[A-3o-z]|[\\s\\S])|\\(\\?[:=!]|[?*+]\\?|{\\d+(?:,\\d*)?}\\??)/;M.1h=6(f,e,a,b){u.U({2q:r(f,"g"+(E?"y":"")),2b:e,3r:a||M.1B,2p:b||N})};M.2n=6(f,e){K a=f+"/"+(e||"");H M.2n[a]||(M.2n[a]=M(f,e))};M.3c=6(f){H r(f,"g")};M.5l=6(f){H f.Q(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g,"\\\\$&")};M.5e=6(f,e,a,b){e=r(e,"g"+(b&&E?"y":""));e.12=a=a||0;f=e.X(f);H b?f&&f.P===a?f:N:f};M.3q=6(){M.1h=6(){1S 2U("2a\'t 55 1h 54 3q")}};M.1R=6(f){H 53.Z.1q.W(f)==="[2m 15]"};M.3p=6(f,e,a,b){O(K c=r(e,"g"),d=-1,h;h=c.X(f);){a.W(b,h,++d,f,c);c.12===h.P&&c.12++}I(e.1J)e.12=0};M.57=6(f,e){H 6 a(b,c){K d=e[c].1I?e[c]:{1I:e[c]},h=r(d.1I,"g"),g=[],i;O(i=0;i<b.L;i++)M.3p(b[i],h,6(k){g.U(d.3j?k[d.3j]||"":k[0])});H c===e.L-1||!g.L?g:a(g,c+1)}([f],0)};15.Z.1p=6(f,e){H J.X(e[0])};15.Z.W=6(f,e){H J.X(e)};15.Z.X=6(f){K e=n.X.1p(J,14),a;I(e){I(!x&&e.L>1&&p(e,"")>-1){a=15(J.1m,n.Q.W(t(J),"g",""));n.Q.W(f.1a(e.P),a,6(){O(K c=1;c<14.L-2;c++)I(14[c]===1d)e[c]=1d})}I(J.1w&&J.1w.19)O(K b=1;b<e.L;b++)I(a=J.1w.19[b-1])e[a]=e[b];!D&&J.1J&&!e[0].L&&J.12>e.P&&J.12--}H e};I(!D)15.Z.1A=6(f){(f=n.X.W(J,f))&&J.1J&&!f[0].L&&J.12>f.P&&J.12--;H!!f};1r.Z.1C=6(f){M.1R(f)||(f=15(f));I(f.1J){K e=n.1C.1p(J,14);f.12=0;H e}H f.X(J)};1r.Z.Q=6(f,e){K a=M.1R(f),b,c;I(a&&1j e.58()==="3f"&&e.1i("${")===-1&&y)H n.Q.1p(J,14);I(a){I(f.1w)b=f.1w.19}Y f+="";I(1j e==="6")c=n.Q.W(J,f,6(){I(b){14[0]=1f 1r(14[0]);O(K d=0;d<b.L;d++)I(b[d])14[0][b[d]]=14[d+1]}I(a&&f.1J)f.12=14[14.L-2]+14[0].L;H e.1p(N,14)});Y{c=J+"";c=n.Q.W(c,f,6(){K d=14;H n.Q.W(e,C,6(h,g,i){I(g)5b(g){24"$":H"$";24"&":H d[0];24"`":H d[d.L-1].1a(0,d[d.L-2]);24"\'":H d[d.L-1].1a(d[d.L-2]+d[0].L);5a:i="";g=+g;I(!g)H h;O(;g>d.L-3;){i=1r.Z.1a.W(g,-1)+i;g=1Q.3i(g/10)}H(g?d[g]||"":"$")+i}Y{g=+i;I(g<=d.L-3)H d[g];g=b?p(b,i):-1;H g>-1?d[g+1]:h}})})}I(a&&f.1J)f.12=0;H c};1r.Z.1e=6(f,e){I(!M.1R(f))H n.1e.1p(J,14);K a=J+"",b=[],c=0,d,h;I(e===1d||+e<0)e=5D;Y{e=1Q.3i(+e);I(!e)H[]}O(f=M.3c(f);d=f.X(a);){I(f.12>c){b.U(a.1a(c,d.P));d.L>1&&d.P<a.L&&3b.Z.U.1p(b,d.1a(1));h=d[0].L;c=f.12;I(b.L>=e)1N}f.12===d.P&&f.12++}I(c===a.L){I(!n.1A.W(f,"")||h)b.U("")}Y b.U(a.1a(c));H b.L>e?b.1a(0,e):b};M.1h(/\\(\\?#[^)]*\\)/,6(f){H n.1A.W(A,f.2S.1a(f.P+f[0].L))?"":"(?:)"});M.1h(/\\((?!\\?)/,6(){J.19.U(N);H"("});M.1h(/\\(\\?<([$\\w]+)>/,6(f){J.19.U(f[1]);J.2N=R;H"("});M.1h(/\\\\k<([\\w$]+)>/,6(f){K e=p(J.19,f[1]);H e>-1?"\\\\"+(e+1)+(3R(f.2S.3a(f.P+f[0].L))?"":"(?:)"):f[0]});M.1h(/\\[\\^?]/,6(f){H f[0]==="[]"?"\\\\b\\\\B":"[\\\\s\\\\S]"});M.1h(/^\\(\\?([5A]+)\\)/,6(f){J.3d(f[1]);H""});M.1h(/(?:\\s+|#.*)+/,6(f){H n.1A.W(A,f.2S.1a(f.P+f[0].L))?"":"(?:)"},M.1B,6(){H J.2K("x")});M.1h(/\\./,6(){H"[\\\\s\\\\S]"},M.1B,6(){H J.2K("s")})})();1j 2e!="1d"&&(2e.M=M);K 1v=6(){6 r(a,b){a.1l.1i(b)!=-1||(a.1l+=" "+b)}6 t(a){H a.1i("3e")==0?a:"3e"+a}6 B(a){H e.1Y.2A[t(a)]}6 p(a,b,c){I(a==N)H N;K d=c!=R?a.3G:[a.2G],h={"#":"1c",".":"1l"}[b.1o(0,1)]||"3h",g,i;g=h!="3h"?b.1o(1):b.5u();I((a[h]||"").1i(g)!=-1)H a;O(a=0;d&&a<d.L&&i==N;a++)i=p(d[a],b,c);H i}6 C(a,b){K c={},d;O(d 2g a)c[d]=a[d];O(d 2g b)c[d]=b[d];H c}6 w(a,b,c,d){6 h(g){g=g||1P.5y;I(!g.1F){g.1F=g.52;g.3N=6(){J.5w=11}}c.W(d||1P,g)}a.3g?a.3g("4U"+b,h):a.4y(b,h,11)}6 A(a,b){K c=e.1Y.2j,d=N;I(c==N){c={};O(K h 2g e.1U){K g=e.1U[h];d=g.4x;I(d!=N){g.1V=h.4w();O(g=0;g<d.L;g++)c[d[g]]=h}}e.1Y.2j=c}d=e.1U[c[a]];d==N&&b!=11&&1P.1X(e.13.1x.1X+(e.13.1x.3E+a));H d}6 v(a,b){O(K c=a.1e("\\n"),d=0;d<c.L;d++)c[d]=b(c[d],d);H c.1K("\\n")}6 u(a,b){I(a==N||a.L==0||a=="\\n")H a;a=a.Q(/</g,"&1y;");a=a.Q(/ {2,}/g,6(c){O(K d="",h=0;h<c.L-1;h++)d+=e.13.1W;H d+" "});I(b!=N)a=v(a,6(c){I(c.L==0)H"";K d="";c=c.Q(/^(&2s;| )+/,6(h){d=h;H""});I(c.L==0)H d;H d+\'<17 1g="\'+b+\'">\'+c+"</17>"});H a}6 n(a,b){a.1e("\\n");O(K c="",d=0;d<50;d++)c+="                    ";H a=v(a,6(h){I(h.1i("\\t")==-1)H h;O(K g=0;(g=h.1i("\\t"))!=-1;)h=h.1o(0,g)+c.1o(0,b-g%b)+h.1o(g+1,h.L);H h})}6 x(a){H a.Q(/^\\s+|\\s+$/g,"")}6 D(a,b){I(a.P<b.P)H-1;Y I(a.P>b.P)H 1;Y I(a.L<b.L)H-1;Y I(a.L>b.L)H 1;H 0}6 y(a,b){6 c(k){H k[0]}O(K d=N,h=[],g=b.2D?b.2D:c;(d=b.1I.X(a))!=N;){K i=g(d,b);I(1j i=="3f")i=[1f e.2L(i,d.P,b.23)];h=h.1O(i)}H h}6 E(a){K b=/(.*)((&1G;|&1y;).*)/;H a.Q(e.3A.3M,6(c){K d="",h=N;I(h=b.X(c)){c=h[1];d=h[2]}H\'<a 2h="\'+c+\'">\'+c+"</a>"+d})}6 z(){O(K a=1E.36("1k"),b=[],c=0;c<a.L;c++)a[c].3s=="20"&&b.U(a[c]);H b}6 f(a){a=a.1F;K b=p(a,".20",R);a=p(a,".3O",R);K c=1E.4i("3t");I(!(!a||!b||p(a,"3t"))){B(b.1c);r(b,"1m");O(K d=a.3G,h=[],g=0;g<d.L;g++)h.U(d[g].4z||d[g].4A);h=h.1K("\\r");c.39(1E.4D(h));a.39(c);c.2C();c.4C();w(c,"4u",6(){c.2G.4E(c);b.1l=b.1l.Q("1m","")})}}I(1j 3F!="1d"&&1j M=="1d")M=3F("M").M;K e={2v:{"1g-27":"","2i-1s":1,"2z-1s-2t":11,1M:N,1t:N,"42-45":R,"43-22":4,1u:R,16:R,"3V-17":R,2l:11,"41-40":R,2k:11,"1z-1k":11},13:{1W:"&2s;",2M:R,46:11,44:11,34:"4n",1x:{21:"4o 1m",2P:"?",1X:"1v\\n\\n",3E:"4r\'t 4t 1D O: ",4g:"4m 4B\'t 51 O 1z-1k 4F: ",37:\'<!4T 1z 4S "-//4V//3H 4W 1.0 4Z//4Y" "1Z://2y.3L.3K/4X/3I/3H/3I-4P.4J"><1z 4I="1Z://2y.3L.3K/4L/5L"><3J><4N 1Z-4M="5G-5M" 6K="2O/1z; 6J=6I-8" /><1t>6L 1v</1t></3J><3B 1L="25-6M:6Q,6P,6O,6N-6F;6y-2f:#6x;2f:#6w;25-22:6v;2O-3D:3C;"><T 1L="2O-3D:3C;3w-32:1.6z;"><T 1L="25-22:6A-6E;">1v</T><T 1L="25-22:.6C;3w-6B:6R;"><T>3v 3.0.76 (72 73 3x)</T><T><a 2h="1Z://3u.2w/1v" 1F="38" 1L="2f:#3y">1Z://3u.2w/1v</a></T><T>70 17 6U 71.</T><T>6T 6X-3x 6Y 6D.</T></T><T>6t 61 60 J 1k, 5Z <a 2h="6u://2y.62.2w/63-66/65?64=5X-5W&5P=5O" 1L="2f:#3y">5R</a> 5V <2R/>5U 5T 5S!</T></T></3B></1z>\'}},1Y:{2j:N,2A:{}},1U:{},3A:{6n:/\\/\\*[\\s\\S]*?\\*\\//2c,6m:/\\/\\/.*$/2c,6l:/#.*$/2c,6k:/"([^\\\\"\\n]|\\\\.)*"/g,6o:/\'([^\\\\\'\\n]|\\\\.)*\'/g,6p:1f M(\'"([^\\\\\\\\"]|\\\\\\\\.)*"\',"3z"),6s:1f M("\'([^\\\\\\\\\']|\\\\\\\\.)*\'","3z"),6q:/(&1y;|<)!--[\\s\\S]*?--(&1G;|>)/2c,3M:/\\w+:\\/\\/[\\w-.\\/?%&=:@;]*/g,6a:{18:/(&1y;|<)\\?=?/g,1b:/\\?(&1G;|>)/g},69:{18:/(&1y;|<)%=?/g,1b:/%(&1G;|>)/g},6d:{18:/(&1y;|<)\\s*1k.*?(&1G;|>)/2T,1b:/(&1y;|<)\\/\\s*1k\\s*(&1G;|>)/2T}},16:{1H:6(a){6 b(i,k){H e.16.2o(i,k,e.13.1x[k])}O(K c=\'<T 1g="16">\',d=e.16.2x,h=d.2X,g=0;g<h.L;g++)c+=(d[h[g]].1H||b)(a,h[g]);c+="</T>";H c},2o:6(a,b,c){H\'<2W><a 2h="#" 1g="6e 6h\'+b+" "+b+\'">\'+c+"</a></2W>"},2b:6(a){K b=a.1F,c=b.1l||"";b=B(p(b,".20",R).1c);K d=6(h){H(h=15(h+"6f(\\\\w+)").X(c))?h[1]:N}("6g");b&&d&&e.16.2x[d].2B(b);a.3N()},2x:{2X:["21","2P"],21:{1H:6(a){I(a.V("2l")!=R)H"";K b=a.V("1t");H e.16.2o(a,"21",b?b:e.13.1x.21)},2B:6(a){a=1E.6j(t(a.1c));a.1l=a.1l.Q("47","")}},2P:{2B:6(){K a="68=0";a+=", 18="+(31.30-33)/2+", 32="+(31.2Z-2Y)/2+", 30=33, 2Z=2Y";a=a.Q(/^,/,"");a=1P.6Z("","38",a);a.2C();K b=a.1E;b.6W(e.13.1x.37);b.6V();a.2C()}}}},35:6(a,b){K c;I(b)c=[b];Y{c=1E.36(e.13.34);O(K d=[],h=0;h<c.L;h++)d.U(c[h]);c=d}c=c;d=[];I(e.13.2M)c=c.1O(z());I(c.L===0)H d;O(h=0;h<c.L;h++){O(K g=c[h],i=a,k=c[h].1l,j=3W 0,l={},m=1f M("^\\\\[(?<2V>(.*?))\\\\]$"),s=1f M("(?<27>[\\\\w-]+)\\\\s*:\\\\s*(?<1T>[\\\\w-%#]+|\\\\[.*?\\\\]|\\".*?\\"|\'.*?\')\\\\s*;?","g");(j=s.X(k))!=N;){K o=j.1T.Q(/^[\'"]|[\'"]$/g,"");I(o!=N&&m.1A(o)){o=m.X(o);o=o.2V.L>0?o.2V.1e(/\\s*,\\s*/):[]}l[j.27]=o}g={1F:g,1n:C(i,l)};g.1n.1D!=N&&d.U(g)}H d},1M:6(a,b){K c=J.35(a,b),d=N,h=e.13;I(c.L!==0)O(K g=0;g<c.L;g++){b=c[g];K i=b.1F,k=b.1n,j=k.1D,l;I(j!=N){I(k["1z-1k"]=="R"||e.2v["1z-1k"]==R){d=1f e.4l(j);j="4O"}Y I(d=A(j))d=1f d;Y 6H;l=i.3X;I(h.2M){l=l;K m=x(l),s=11;I(m.1i("<![6G[")==0){m=m.4h(9);s=R}K o=m.L;I(m.1i("]]\\>")==o-3){m=m.4h(0,o-3);s=R}l=s?m:l}I((i.1t||"")!="")k.1t=i.1t;k.1D=j;d.2Q(k);b=d.2F(l);I((i.1c||"")!="")b.1c=i.1c;i.2G.74(b,i)}}},2E:6(a){w(1P,"4k",6(){e.1M(a)})}};e.2E=e.2E;e.1M=e.1M;e.2L=6(a,b,c){J.1T=a;J.P=b;J.L=a.L;J.23=c;J.1V=N};e.2L.Z.1q=6(){H J.1T};e.4l=6(a){6 b(j,l){O(K m=0;m<j.L;m++)j[m].P+=l}K c=A(a),d,h=1f e.1U.5Y,g=J,i="2F 1H 2Q".1e(" ");I(c!=N){d=1f c;O(K k=0;k<i.L;k++)(6(){K j=i[k];g[j]=6(){H h[j].1p(h,14)}})();d.28==N?1P.1X(e.13.1x.1X+(e.13.1x.4g+a)):h.2J.U({1I:d.28.17,2D:6(j){O(K l=j.17,m=[],s=d.2J,o=j.P+j.18.L,F=d.28,q,G=0;G<s.L;G++){q=y(l,s[G]);b(q,o);m=m.1O(q)}I(F.18!=N&&j.18!=N){q=y(j.18,F.18);b(q,j.P);m=m.1O(q)}I(F.1b!=N&&j.1b!=N){q=y(j.1b,F.1b);b(q,j.P+j[0].5Q(j.1b));m=m.1O(q)}O(j=0;j<m.L;j++)m[j].1V=c.1V;H m}})}};e.4j=6(){};e.4j.Z={V:6(a,b){K c=J.1n[a];c=c==N?b:c;K d={"R":R,"11":11}[c];H d==N?c:d},3Y:6(a){H 1E.4i(a)},4c:6(a,b){K c=[];I(a!=N)O(K d=0;d<a.L;d++)I(1j a[d]=="2m")c=c.1O(y(b,a[d]));H J.4e(c.6b(D))},4e:6(a){O(K b=0;b<a.L;b++)I(a[b]!==N)O(K c=a[b],d=c.P+c.L,h=b+1;h<a.L&&a[b]!==N;h++){K g=a[h];I(g!==N)I(g.P>d)1N;Y I(g.P==c.P&&g.L>c.L)a[b]=N;Y I(g.P>=c.P&&g.P<d)a[h]=N}H a},4d:6(a){K b=[],c=2u(J.V("2i-1s"));v(a,6(d,h){b.U(h+c)});H b},3U:6(a){K b=J.V("1M",[]);I(1j b!="2m"&&b.U==N)b=[b];a:{a=a.1q();K c=3W 0;O(c=c=1Q.6c(c||0,0);c<b.L;c++)I(b[c]==a){b=c;1N a}b=-1}H b!=-1},2r:6(a,b,c){a=["1s","6i"+b,"P"+a,"6r"+(b%2==0?1:2).1q()];J.3U(b)&&a.U("67");b==0&&a.U("1N");H\'<T 1g="\'+a.1K(" ")+\'">\'+c+"</T>"},3Q:6(a,b){K c="",d=a.1e("\\n").L,h=2u(J.V("2i-1s")),g=J.V("2z-1s-2t");I(g==R)g=(h+d-1).1q().L;Y I(3R(g)==R)g=0;O(K i=0;i<d;i++){K k=b?b[i]:h+i,j;I(k==0)j=e.13.1W;Y{j=g;O(K l=k.1q();l.L<j;)l="0"+l;j=l}a=j;c+=J.2r(i,k,a)}H c},49:6(a,b){a=x(a);K c=a.1e("\\n");J.V("2z-1s-2t");K d=2u(J.V("2i-1s"));a="";O(K h=J.V("1D"),g=0;g<c.L;g++){K i=c[g],k=/^(&2s;|\\s)+/.X(i),j=N,l=b?b[g]:d+g;I(k!=N){j=k[0].1q();i=i.1o(j.L);j=j.Q(" ",e.13.1W)}i=x(i);I(i.L==0)i=e.13.1W;a+=J.2r(g,l,(j!=N?\'<17 1g="\'+h+\' 5N">\'+j+"</17>":"")+i)}H a},4f:6(a){H a?"<4a>"+a+"</4a>":""},4b:6(a,b){6 c(l){H(l=l?l.1V||g:g)?l+" ":""}O(K d=0,h="",g=J.V("1D",""),i=0;i<b.L;i++){K k=b[i],j;I(!(k===N||k.L===0)){j=c(k);h+=u(a.1o(d,k.P-d),j+"48")+u(k.1T,j+k.23);d=k.P+k.L+(k.75||0)}}h+=u(a.1o(d),c()+"48");H h},1H:6(a){K b="",c=["20"],d;I(J.V("2k")==R)J.1n.16=J.1n.1u=11;1l="20";J.V("2l")==R&&c.U("47");I((1u=J.V("1u"))==11)c.U("6S");c.U(J.V("1g-27"));c.U(J.V("1D"));a=a.Q(/^[ ]*[\\n]+|[\\n]*[ ]*$/g,"").Q(/\\r/g," ");b=J.V("43-22");I(J.V("42-45")==R)a=n(a,b);Y{O(K h="",g=0;g<b;g++)h+=" ";a=a.Q(/\\t/g,h)}a=a;a:{b=a=a;h=/<2R\\s*\\/?>|&1y;2R\\s*\\/?&1G;/2T;I(e.13.46==R)b=b.Q(h,"\\n");I(e.13.44==R)b=b.Q(h,"");b=b.1e("\\n");h=/^\\s*/;g=4Q;O(K i=0;i<b.L&&g>0;i++){K k=b[i];I(x(k).L!=0){k=h.X(k);I(k==N){a=a;1N a}g=1Q.4q(k[0].L,g)}}I(g>0)O(i=0;i<b.L;i++)b[i]=b[i].1o(g);a=b.1K("\\n")}I(1u)d=J.4d(a);b=J.4c(J.2J,a);b=J.4b(a,b);b=J.49(b,d);I(J.V("41-40"))b=E(b);1j 2H!="1d"&&2H.3S&&2H.3S.1C(/5s/)&&c.U("5t");H b=\'<T 1c="\'+t(J.1c)+\'" 1g="\'+c.1K(" ")+\'">\'+(J.V("16")?e.16.1H(J):"")+\'<3Z 5z="0" 5H="0" 5J="0">\'+J.4f(J.V("1t"))+"<3T><3P>"+(1u?\'<2d 1g="1u">\'+J.3Q(a)+"</2d>":"")+\'<2d 1g="17"><T 1g="3O">\'+b+"</T></2d></3P></3T></3Z></T>"},2F:6(a){I(a===N)a="";J.17=a;K b=J.3Y("T");b.3X=J.1H(a);J.V("16")&&w(p(b,".16"),"5c",e.16.2b);J.V("3V-17")&&w(p(b,".17"),"56",f);H b},2Q:6(a){J.1c=""+1Q.5d(1Q.5n()*5k).1q();e.1Y.2A[t(J.1c)]=J;J.1n=C(e.2v,a||{});I(J.V("2k")==R)J.1n.16=J.1n.1u=11},5j:6(a){a=a.Q(/^\\s+|\\s+$/g,"").Q(/\\s+/g,"|");H"\\\\b(?:"+a+")\\\\b"},5f:6(a){J.28={18:{1I:a.18,23:"1k"},1b:{1I:a.1b,23:"1k"},17:1f M("(?<18>"+a.18.1m+")(?<17>.*?)(?<1b>"+a.1b.1m+")","5o")}}};H e}();1j 2e!="1d"&&(2e.1v=1v);',62,441,'||||||function|||||||||||||||||||||||||||||||||||||return|if|this|var|length|XRegExp|null|for|index|replace|true||div|push|getParam|call|exec|else|prototype||false|lastIndex|config|arguments|RegExp|toolbar|code|left|captureNames|slice|right|id|undefined|split|new|class|addToken|indexOf|typeof|script|className|source|params|substr|apply|toString|String|line|title|gutter|SyntaxHighlighter|_xregexp|strings|lt|html|test|OUTSIDE_CLASS|match|brush|document|target|gt|getHtml|regex|global|join|style|highlight|break|concat|window|Math|isRegExp|throw|value|brushes|brushName|space|alert|vars|http|syntaxhighlighter|expandSource|size|css|case|font|Fa|name|htmlScript|dA|can|handler|gm|td|exports|color|in|href|first|discoveredBrushes|light|collapse|object|cache|getButtonHtml|trigger|pattern|getLineHtml|nbsp|numbers|parseInt|defaults|com|items|www|pad|highlighters|execute|focus|func|all|getDiv|parentNode|navigator|INSIDE_CLASS|regexList|hasFlag|Match|useScriptTags|hasNamedCapture|text|help|init|br|input|gi|Error|values|span|list|250|height|width|screen|top|500|tagName|findElements|getElementsByTagName|aboutDialog|_blank|appendChild|charAt|Array|copyAsGlobal|setFlag|highlighter_|string|attachEvent|nodeName|floor|backref|output|the|TypeError|sticky|Za|iterate|freezeTokens|scope|type|textarea|alexgorbatchev|version|margin|2010|005896|gs|regexLib|body|center|align|noBrush|require|childNodes|DTD|xhtml1|head|org|w3|url|preventDefault|container|tr|getLineNumbersHtml|isNaN|userAgent|tbody|isLineHighlighted|quick|void|innerHTML|create|table|links|auto|smart|tab|stripBrs|tabs|bloggerMode|collapsed|plain|getCodeLinesHtml|caption|getMatchesHtml|findMatches|figureOutLineNumbers|removeNestedMatches|getTitleHtml|brushNotHtmlScript|substring|createElement|Highlighter|load|HtmlScript|Brush|pre|expand|multiline|min|Can|ignoreCase|find|blur|extended|toLowerCase|aliases|addEventListener|innerText|textContent|wasn|select|createTextNode|removeChild|option|same|frame|xmlns|dtd|twice|1999|equiv|meta|htmlscript|transitional|1E3|expected|PUBLIC|DOCTYPE|on|W3C|XHTML|TR|EN|Transitional||configured|srcElement|Object|after|run|dblclick|matchChain|valueOf|constructor|default|switch|click|round|execAt|forHtmlScript|token|gimy|functions|getKeywords|1E6|escape|within|random|sgi|another|finally|supply|MSIE|ie|toUpperCase|catch|returnValue|definition|event|border|imsx|constructing|one|Infinity|from|when|Content|cellpadding|flags|cellspacing|try|xhtml|Type|spaces|2930402|hosted_button_id|lastIndexOf|donate|active|development|keep|to|xclick|_s|Xml|please|like|you|paypal|cgi|cmd|webscr|bin|highlighted|scrollbars|aspScriptTags|phpScriptTags|sort|max|scriptScriptTags|toolbar_item|_|command|command_|number|getElementById|doubleQuotedString|singleLinePerlComments|singleLineCComments|multiLineCComments|singleQuotedString|multiLineDoubleQuotedString|xmlComments|alt|multiLineSingleQuotedString|If|https|1em|000|fff|background|5em|xx|bottom|75em|Gorbatchev|large|serif|CDATA|continue|utf|charset|content|About|family|sans|Helvetica|Arial|Geneva|3em|nogutter|Copyright|syntax|close|write|2004|Alex|open|JavaScript|highlighter|July|02|replaceChild|offset|83'.split('|'),0,{}))

;

$(document).ready(function() {
    SyntaxHighlighter.all();
});
// file: src/lib/syntaxhighlighter/scripts/shBrushJScript.js
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'break case catch continue ' +
						'default delete do else false  ' +
						'for function if in instanceof ' +
						'new null return super switch ' +
						'this throw true try typeof var while with'
						;

		var r = SyntaxHighlighter.regexLib;
		
		this.regexList = [
			{ regex: r.multiLineDoubleQuotedString,					css: 'string' },			// double quoted strings
			{ regex: r.multiLineSingleQuotedString,					css: 'string' },			// single quoted strings
			{ regex: r.singleLineCComments,							css: 'comments' },			// one line comments
			{ regex: r.multiLineCComments,							css: 'comments' },			// multiline comments
			{ regex: /\s*#.*/gm,									css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' }			// keywords
			];
	
		this.forHtmlScript(r.scriptScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['js', 'jscript', 'javascript'];

	SyntaxHighlighter.brushes.JScript = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

// file: src/lib/syntaxhighlighter/scripts/shBrushCSharp.js
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'abstract as base bool break byte case catch char checked class const ' +
						'continue decimal default delegate do double else enum event explicit ' +
						'extern false finally fixed float for foreach get goto if implicit in int ' +
						'interface internal is lock long namespace new null object operator out ' +
						'override params private protected public readonly ref return sbyte sealed set ' +
						'short sizeof stackalloc static string struct switch this throw true try ' +
						'typeof uint ulong unchecked unsafe ushort using virtual void while';

		function fixComments(match, regexInfo)
		{
			var css = (match[0].indexOf("///") == 0)
				? 'color1'
				: 'comments'
				;
			
			return [new SyntaxHighlighter.Match(match[0], match.index, css)];
		}

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	func : fixComments },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: /@"(?:[^"]|"")*"/g,								css: 'string' },			// @-quoted strings
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// strings
			{ regex: /^\s*#.*/gm,										css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },			// c# keyword
			{ regex: /\bpartial(?=\s+(?:class|interface|struct)\b)/g,	css: 'keyword' },			// contextual keyword: 'partial'
			{ regex: /\byield(?=\s+(?:return|break)\b)/g,				css: 'keyword' }			// contextual keyword: 'yield'
			];
		
		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['c#', 'c-sharp', 'csharp'];

	SyntaxHighlighter.brushes.CSharp = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();


// file: src/lib/syntaxhighlighter/scripts/shBrushPhp.js
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var funcs	=	'abs acos acosh addcslashes addslashes ' +
						'array_change_key_case array_chunk array_combine array_count_values array_diff '+
						'array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill '+
						'array_filter array_flip array_intersect array_intersect_assoc array_intersect_key '+
						'array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map '+
						'array_merge array_merge_recursive array_multisort array_pad array_pop array_product '+
						'array_push array_rand array_reduce array_reverse array_search array_shift '+
						'array_slice array_splice array_sum array_udiff array_udiff_assoc '+
						'array_udiff_uassoc array_uintersect array_uintersect_assoc '+
						'array_uintersect_uassoc array_unique array_unshift array_values array_walk '+
						'array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert '+
						'basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress '+
						'bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir '+
						'checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists '+
						'closedir closelog copy cos cosh count count_chars date decbin dechex decoct '+
						'deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log '+
						'error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded '+
						'feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents '+
						'fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype '+
						'floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf '+
						'fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname '+
						'gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt '+
						'getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext '+
						'gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set '+
						'interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double '+
						'is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long '+
						'is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault '+
						'is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br '+
						'parse_ini_file parse_str parse_url passthru pathinfo print readlink realpath rewind rewinddir rmdir '+
						'round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split '+
						'str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes '+
						'stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk '+
						'strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime '+
						'strtoupper strtr strval substr substr_compare';

		var keywords =	'abstract and array as break case catch cfunction class clone const continue declare default die do ' +
						'else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach ' +
						'function include include_once global goto if implements interface instanceof namespace new ' +
						'old_function or private protected public return require require_once static switch ' +
						'throw try use var while xor ';
		
		var constants	= '__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// single quoted strings
			{ regex: /\$\w+/g,											css: 'variable' },			// variables
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),		css: 'functions' },			// common functions
			{ regex: new RegExp(this.getKeywords(constants), 'gmi'),	css: 'constants' },			// constants
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }			// keyword
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['php'];

	SyntaxHighlighter.brushes.Php = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

// file: src/lib/syntaxhighlighter/scripts/shBrushPython.js
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		// Contributed by Gheorghe Milas and Ahmad Sherif
	
		var keywords =  'and assert break class continue def del elif else ' +
						'except exec finally for from global if import in is ' +
						'lambda not or pass print raise return try yield while';

		var funcs = '__import__ abs all any apply basestring bin bool buffer callable ' +
					'chr classmethod cmp coerce compile complex delattr dict dir ' +
					'divmod enumerate eval execfile file filter float format frozenset ' +
					'getattr globals hasattr hash help hex id input int intern ' +
					'isinstance issubclass iter len list locals long map max min next ' +
					'object oct open ord pow print property range raw_input reduce ' +
					'reload repr reversed round set setattr slice sorted staticmethod ' +
					'str sum super tuple type type unichr unicode vars xrange zip';

		var special =  'None True False self cls class_';

		this.regexList = [
				{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },
				{ regex: /^\s*@\w+/gm, 										css: 'decorator' },
				{ regex: /(['\"]{3})([^\1])*?\1/gm, 						css: 'comments' },
				{ regex: /"(?!")(?:\.|\\\"|[^\""\n])*"/gm, 					css: 'string' },
				{ regex: /'(?!')(?:\.|(\\\')|[^\''\n])*'/gm, 				css: 'string' },
				{ regex: /\+|\-|\*|\/|\%|=|==/gm, 							css: 'keyword' },
				{ regex: /\b\d+\.?\w*/g, 									css: 'value' },
				{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),		css: 'functions' },
				{ regex: new RegExp(this.getKeywords(keywords), 'gm'), 		css: 'keyword' },
				{ regex: new RegExp(this.getKeywords(special), 'gm'), 		css: 'color1' }
				];
			
		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['py', 'python'];

	SyntaxHighlighter.brushes.Python = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

// file: src/lib/syntaxhighlighter/scripts/shBrushJava.js
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'abstract assert boolean break byte case catch char class const ' +
						'continue default do double else enum extends ' +
						'false final finally float for goto if implements import ' +
						'instanceof int interface long native new null ' +
						'package private protected public return ' +
						'short static strictfp super switch synchronized this throw throws true ' +
						'transient try void volatile while';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },		// one line comments
			{ regex: /\/\*([^\*][\s\S]*)?\*\//gm,						css: 'comments' },	 	// multiline comments
			{ regex: /\/\*(?!\*\/)\*[\s\S]*?\*\//gm,					css: 'preprocessor' },	// documentation comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// strings
			{ regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,				css: 'value' },			// numbers
			{ regex: /(?!\@interface\b)\@[\$\w]+\b/g,					css: 'color1' },		// annotation @anno
			{ regex: /\@interface\b/g,									css: 'color2' },		// @interface keyword
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }		// java keyword
			];

		this.forHtmlScript({
			left	: /(&lt;|<)%[@!=]?/g, 
			right	: /%(&gt;|>)/g 
		});
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['java'];

	SyntaxHighlighter.brushes.Java = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

// file: src/lib/syntaxhighlighter/scripts/shBrushRuby.js
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		// Contributed by Erik Peterson.
	
		var keywords =	'alias and BEGIN begin break case class def define_method defined do each else elsif ' +
						'END end ensure false for if in module new next nil not or raise redo rescue retry return ' +
						'self super then throw true undef unless until when while yield';

		var builtins =	'Array Bignum Binding Class Continuation Dir Exception FalseClass File::Stat File Fixnum Fload ' +
						'Hash Integer IO MatchData Method Module NilClass Numeric Object Proc Range Regexp String Struct::TMS Symbol ' +
						'ThreadGroup Thread Time TrueClass';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,	css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// single quoted strings
			{ regex: /\b[A-Z0-9_]+\b/g,									css: 'constants' },		// constants
			{ regex: /:[a-z][A-Za-z0-9_]*/g,							css: 'color2' },		// symbols
			{ regex: /(\$|@@|@)\w+/g,									css: 'variable bold' },	// $global, @instance, and @@class variables
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },		// keywords
			{ regex: new RegExp(this.getKeywords(builtins), 'gm'),		css: 'color1' }			// builtins
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['ruby', 'rails', 'ror', 'rb'];

	SyntaxHighlighter.brushes.Ruby = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

// file: src/lib/watermark/jquery.watermark.js
/*	
	Watermark plugin for jQuery
	Version: 3.1.4
	http://jquery-watermark.googlecode.com/

	Copyright (c) 2009-2012 Todd Northrop
	http://www.speednet.biz/
	
	August 13, 2012

	Requires:  jQuery 1.2.3+
	
	Dual licensed under the MIT or GPL Version 2 licenses.
	See mit-license.txt and gpl2-license.txt in the project root for details.
------------------------------------------------------*/

( function ( $, window, undefined ) {

var
	// String constants for data names
	dataFlag = "watermark",
	dataClass = "watermarkClass",
	dataFocus = "watermarkFocus",
	dataFormSubmit = "watermarkSubmit",
	dataMaxLen = "watermarkMaxLength",
	dataPassword = "watermarkPassword",
	dataText = "watermarkText",
	
	// Copy of native jQuery regex use to strip return characters from element value
	rreturn = /\r/g,
	
	// Used to determine if type attribute of input element is a non-text type (invalid)
	rInvalidType = /^(button|checkbox|hidden|image|radio|range|reset|submit)$/i,

	// Includes only elements with watermark defined
	selWatermarkDefined = "input:data(" + dataFlag + "),textarea:data(" + dataFlag + ")",

	// Includes only elements capable of having watermark
	selWatermarkAble = ":watermarkable",
	
	// triggerFns:
	// Array of function names to look for in the global namespace.
	// Any such functions found will be hijacked to trigger a call to
	// hideAll() any time they are called.  The default value is the
	// ASP.NET function that validates the controls on the page
	// prior to a postback.
	// 
	// Am I missing other important trigger function(s) to look for?
	// Please leave me feedback:
	// http://code.google.com/p/jquery-watermark/issues/list
	triggerFns = [
		"Page_ClientValidate"
	],
	
	// Holds a value of true if a watermark was displayed since the last
	// hideAll() was executed. Avoids repeatedly calling hideAll().
	pageDirty = false,
	
	// Detects if the browser can handle native placeholders
	hasNativePlaceholder = ( "placeholder" in document.createElement( "input" ) );

// Best practice: this plugin adds only one method to the jQuery object.
// Also ensures that the watermark code is only added once.
$.watermark = $.watermark || {

	// Current version number of the plugin
	version: "3.1.4",
		
	runOnce: true,
	
	// Default options used when watermarks are instantiated.
	// Can be changed to affect the default behavior for all
	// new or updated watermarks.
	options: {
		
		// Default class name for all watermarks
		className: "watermark",
		
		// If true, plugin will detect and use native browser support for
		// watermarks, if available. (e.g., WebKit's placeholder attribute.)
		useNative: true,
		
		// If true, all watermarks will be hidden during the window's
		// beforeunload event. This is done mainly because WebKit
		// browsers remember the watermark text during navigation
		// and try to restore the watermark text after the user clicks
		// the Back button. We can avoid this by hiding the text before
		// the browser has a chance to save it. The regular unload event
		// was tried, but it seems the browser saves the text before
		// that event kicks off, because it didn't work.
		hideBeforeUnload: true
	},
	
	// Hide one or more watermarks by specifying any selector type
	// i.e., DOM element, string selector, jQuery matched set, etc.
	hide: function ( selector ) {
		$( selector ).filter( selWatermarkDefined ).each(
			function () {
				$.watermark._hide( $( this ) );
			}
		);
	},
	
	// Internal use only.
	_hide: function ( $input, focus ) {
		var elem = $input[ 0 ],
			inputVal = ( elem.value || "" ).replace( rreturn, "" ),
			inputWm = $input.data( dataText ) || "",
			maxLen = $input.data( dataMaxLen ) || 0,
			className = $input.data( dataClass );
	
		if ( ( inputWm.length ) && ( inputVal == inputWm ) ) {
			elem.value = "";
			
			// Password type?
			if ( $input.data( dataPassword ) ) {
				
				if ( ( $input.attr( "type" ) || "" ) === "text" ) {
					var $pwd = $input.data( dataPassword ) || [], 
						$wrap = $input.parent() || [];
						
					if ( ( $pwd.length ) && ( $wrap.length ) ) {
						$wrap[ 0 ].removeChild( $input[ 0 ] ); // Can't use jQuery methods, because they destroy data
						$wrap[ 0 ].appendChild( $pwd[ 0 ] );
						$input = $pwd;
					}
				}
			}
			
			if ( maxLen ) {
				$input.attr( "maxLength", maxLen );
				$input.removeData( dataMaxLen );
			}
		
			if ( focus ) {
				$input.attr( "autocomplete", "off" );  // Avoid NS_ERROR_XPC_JS_THREW_STRING error in Firefox
				
				window.setTimeout(
					function () {
						$input.select();  // Fix missing cursor in IE
					}
				, 1 );
			}
		}
		
		className && $input.removeClass( className );
	},
	
	// Display one or more watermarks by specifying any selector type
	// i.e., DOM element, string selector, jQuery matched set, etc.
	// If conditions are not right for displaying a watermark, ensures that watermark is not shown.
	show: function ( selector ) {
		$( selector ).filter( selWatermarkDefined ).each(
			function () {
				$.watermark._show( $( this ) );
			}
		);
	},
	
	// Internal use only.
	_show: function ( $input ) {
		var elem = $input[ 0 ],
			val = ( elem.value || "" ).replace( rreturn, "" ),
			text = $input.data( dataText ) || "",
			type = $input.attr( "type" ) || "",
			className = $input.data( dataClass );

		if ( ( ( val.length == 0 ) || ( val == text ) ) && ( !$input.data( dataFocus ) ) ) {
			pageDirty = true;
		
			// Password type?
			if ( $input.data( dataPassword ) ) {
				
				if ( type === "password" ) {
					var $pwd = $input.data( dataPassword ) || [],
						$wrap = $input.parent() || [];
						
					if ( ( $pwd.length ) && ( $wrap.length ) ) {
						$wrap[ 0 ].removeChild( $input[ 0 ] ); // Can't use jQuery methods, because they destroy data
						$wrap[ 0 ].appendChild( $pwd[ 0 ] );
						$input = $pwd;
						$input.attr( "maxLength", text.length );
						elem = $input[ 0 ];
					}
				}
			}
		
			// Ensure maxLength big enough to hold watermark (input of type="text" or type="search" only)
			if ( ( type === "text" ) || ( type === "search" ) ) {
				var maxLen = $input.attr( "maxLength" ) || 0;
				
				if ( ( maxLen > 0 ) && ( text.length > maxLen ) ) {
					$input.data( dataMaxLen, maxLen );
					$input.attr( "maxLength", text.length );
				}
			}
            
			className && $input.addClass( className );
			elem.value = text;
		}
		else {
			$.watermark._hide( $input );
		}
	},
	
	// Hides all watermarks on the current page.
	hideAll: function () {
		if ( pageDirty ) {
			$.watermark.hide( selWatermarkAble );
			pageDirty = false;
		}
	},
	
	// Displays all watermarks on the current page.
	showAll: function () {
		$.watermark.show( selWatermarkAble );
	}
};

$.fn.watermark = $.fn.watermark || function ( text, options ) {
	///	<summary>
	///		Set watermark text and class name on all input elements of type="text/password/search" and
	/// 	textareas within the matched set. If className is not specified in options, the default is
	/// 	"watermark". Within the matched set, only input elements with type="text/password/search"
	/// 	and textareas are affected; all other elements are ignored.
	///	</summary>
	///	<returns type="jQuery">
	///		Returns the original jQuery matched set (not just the input and texarea elements).
	/// </returns>
	///	<param name="text" type="String">
	///		Text to display as a watermark when the input or textarea element has an empty value and does not
	/// 	have focus. The first time watermark() is called on an element, if this argument is empty (or not
	/// 	a String type), then the watermark will have the net effect of only changing the class name when
	/// 	the input or textarea element's value is empty and it does not have focus.
	///	</param>
	///	<param name="options" type="Object" optional="true">
	///		Provides the ability to override the default watermark options ($.watermark.options). For backward
	/// 	compatibility, if a string value is supplied, it is used as the class name that overrides the class
	/// 	name in $.watermark.options.className. Properties include:
	/// 		className: When the watermark is visible, the element will be styled using this class name.
	/// 		useNative (Boolean or Function): Specifies if native browser support for watermarks will supersede
	/// 			plugin functionality. If useNative is a function, the return value from the function will
	/// 			determine if native support is used. The function is passed one argument -- a jQuery object
	/// 			containing the element being tested as the only element in its matched set -- and the DOM
	/// 			element being tested is the object on which the function is invoked (the value of "this").
	///	</param>
	/// <remarks>
	///		The effect of changing the text and class name on an input element is called a watermark because
	///		typically light gray text is used to provide a hint as to what type of input is required. However,
	///		the appearance of the watermark can be something completely different: simply change the CSS style
	///		pertaining to the supplied class name.
	///		
	///		The first time watermark() is called on an element, the watermark text and class name are initialized,
	///		and the focus and blur events are hooked in order to control the display of the watermark.  Also, as
	/// 	of version 3.0, drag and drop events are hooked to guard against dropped text being appended to the
	/// 	watermark.  If native watermark support is provided by the browser, it is detected and used, unless
	/// 	the useNative option is set to false.
	///		
	///		Subsequently, watermark() can be called again on an element in order to change the watermark text
	///		and/or class name, and it can also be called without any arguments in order to refresh the display.
	///		
	///		For example, after changing the value of the input or textarea element programmatically, watermark()
	/// 	should be called without any arguments to refresh the display, because the change event is only
	/// 	triggered by user actions, not by programmatic changes to an input or textarea element's value.
	/// 	
	/// 	The one exception to programmatic updates is for password input elements:  you are strongly cautioned
	/// 	against changing the value of a password input element programmatically (after the page loads).
	/// 	The reason is that some fairly hairy code is required behind the scenes to make the watermarks bypass
	/// 	IE security and switch back and forth between clear text (for watermarks) and obscured text (for
	/// 	passwords).  It is *possible* to make programmatic changes, but it must be done in a certain way, and
	/// 	overall it is not recommended.
	/// </remarks>
	
	if ( !this.length ) {
		return this;
	}
	
	var hasClass = false,
		hasText = ( typeof( text ) === "string" );
	
	if ( hasText ) {
		text = text.replace( rreturn, "" );
	}
	
	if ( typeof( options ) === "object" ) {
		hasClass = ( typeof( options.className ) === "string" );
		options = $.extend( {}, $.watermark.options, options );
	}
	else if ( typeof( options ) === "string" ) {
		hasClass = true;
		options = $.extend( {}, $.watermark.options, { className: options } );
	}
	else {
		options = $.watermark.options;
	}
	
	if ( typeof( options.useNative ) !== "function" ) {
		options.useNative = options.useNative? function () { return true; } : function () { return false; };
	}
	
	return this.each(
		function () {
			var $input = $( this );
			
			if ( !$input.is( selWatermarkAble ) ) {
				return;
			}
			
			// Watermark already initialized?
			if ( $input.data( dataFlag ) ) {
			
				// If re-defining text or class, first remove existing watermark, then make changes
				if ( hasText || hasClass ) {
					$.watermark._hide( $input );
			
					if ( hasText ) {
						$input.data( dataText, text );
					}
					
					if ( hasClass ) {
						$input.data( dataClass, options.className );
					}
				}
			}
			else {
			
				// Detect and use native browser support, if enabled in options
				if (
					( hasNativePlaceholder )
					&& ( options.useNative.call( this, $input ) )
					&& ( ( $input.attr( "tagName" ) || "" ) !== "TEXTAREA" )
				) {
					// className is not set because current placeholder standard doesn't
					// have a separate class name property for placeholders (watermarks).
					if ( hasText ) {
						$input.attr( "placeholder", text );
					}
					
					// Only set data flag for non-native watermarks
					// [purposely commented-out] -> $input.data(dataFlag, 1);
					return;
				}
				
				$input.data( dataText, hasText? text : "" );
				$input.data( dataClass, options.className );
				$input.data( dataFlag, 1 ); // Flag indicates watermark was initialized
				
				// Special processing for password type
				if ( ( $input.attr( "type" ) || "" ) === "password" ) {
					var $wrap = $input.wrap( "<span>" ).parent(),
						$wm = $( $wrap.html().replace( /type=["']?password["']?/i, 'type="text"' ) );
					
					$wm.data( dataText, $input.data( dataText ) );
					$wm.data( dataClass, $input.data( dataClass ) );
					$wm.data( dataFlag, 1 );
					$wm.attr( "maxLength", text.length );
					
					$wm.focus(
						function () {
							$.watermark._hide( $wm, true );
						}
					).bind( "dragenter",
						function () {
							$.watermark._hide( $wm );
						}
					).bind( "dragend",
						function () {
							window.setTimeout( function () { $wm.blur(); }, 1 );
						}
					);
					
					$input.blur(
						function () {
							$.watermark._show( $input );
						}
					).bind( "dragleave",
						function () {
							$.watermark._show( $input );
						}
					);
					
					$wm.data( dataPassword, $input );
					$input.data( dataPassword, $wm );
				}
				else {
					
					$input.focus(
						function () {
							$input.data( dataFocus, 1 );
							$.watermark._hide( $input, true );
						}
					).blur(
						function () {
							$input.data( dataFocus, 0 );
							$.watermark._show( $input );
						}
					).bind( "dragenter",
						function () {
							$.watermark._hide( $input );
						}
					).bind( "dragleave",
						function () {
							$.watermark._show( $input );
						}
					).bind( "dragend",
						function () {
							window.setTimeout( function () { $.watermark._show($input); }, 1 );
						}
					).bind( "drop",
						// Firefox makes this lovely function necessary because the dropped text
						// is merged with the watermark before the drop event is called.
						function ( evt ) {
							var elem = $input[ 0 ],
								dropText = evt.originalEvent.dataTransfer.getData( "Text" );
							
							if ( ( elem.value || "" ).replace( rreturn, "" ).replace( dropText, "" ) === $input.data( dataText ) ) {
								elem.value = dropText;
							}
							
							$input.focus();
						}
					);
				}
				
				// In order to reliably clear all watermarks before form submission,
				// we need to replace the form's submit function with our own
				// function.  Otherwise watermarks won't be cleared when the form
				// is submitted programmatically.
				if ( this.form ) {
					var form = this.form,
						$form = $( form );
					
					if ( !$form.data( dataFormSubmit ) ) {
						$form.submit( $.watermark.hideAll );
						
						// form.submit exists for all browsers except Google Chrome
						// (see "else" below for explanation)
						if ( form.submit ) {
							$form.data( dataFormSubmit, form.submit );
							
							form.submit = ( function ( f, $f ) {
								return function () {
									var nativeSubmit = $f.data( dataFormSubmit );
									
									$.watermark.hideAll();
									
									if ( nativeSubmit.apply ) {
										nativeSubmit.apply( f, Array.prototype.slice.call( arguments ) );
									}
									else {
										nativeSubmit();
									}
								};
							})( form, $form );
						}
						else {
							$form.data( dataFormSubmit, 1 );
							
							// This strangeness is due to the fact that Google Chrome's
							// form.submit function is not visible to JavaScript (identifies
							// as "undefined").  I had to invent a solution here because hours
							// of Googling (ironically) for an answer did not turn up anything
							// useful.  Within my own form.submit function I delete the form's
							// submit function, and then call the non-existent function --
							// which, in the world of Google Chrome, still exists.
							form.submit = ( function ( f ) {
								return function () {
									$.watermark.hideAll();
									delete f.submit;
									f.submit();
								};
							})( form );
						}
					}
				}
			}
			
			$.watermark._show( $input );
		}
	);
};

// The code included within the following if structure is guaranteed to only run once,
// even if the watermark script file is included multiple times in the page.
if ( $.watermark.runOnce ) {
	$.watermark.runOnce = false;

	$.extend( $.expr[ ":" ], {

		// Extends jQuery with a custom selector - ":data(...)"
		// :data(<name>)  Includes elements that have a specific name defined in the jQuery data
		// collection. (Only the existence of the name is checked; the value is ignored.)
		// A more sophisticated version of the :data() custom selector originally part of this plugin
		// was removed for compatibility with jQuery UI. The original code can be found in the SVN
		// source listing in the file, "jquery.data.js".
		data: $.expr.createPseudo ?
			$.expr.createPseudo( function( dataName ) {
				return function( elem ) {
					return !!$.data( elem, dataName );
				};
			}) :
			// support: jQuery <1.8
			function( elem, i, match ) {
				return !!$.data( elem, match[ 3 ] );
			},

		// Extends jQuery with a custom selector - ":watermarkable"
		// Includes elements that can be watermarked, including textareas and most input elements
		// that accept text input.  It uses a "negative" test (i.e., testing for input types that DON'T
		// work) because the HTML spec states that you can basically use any type, and if it doesn't
		// recognize the type it will default to type=text.  So if we only looked for certain type attributes
		// we would fail to recognize non-standard types, which are still valid and watermarkable.
		watermarkable: function ( elem ) {
			var type,
				name = elem.nodeName;
			
			if ( name === "TEXTAREA" ) {
				return true;
			}
			
			if ( name !== "INPUT" ) {
				return false;
			}
			
			type = elem.getAttribute( "type" );
			
			return ( ( !type ) || ( !rInvalidType.test( type ) ) );
		}
	});

	// Overloads the jQuery .val() function to return the underlying input value on
	// watermarked input elements.  When .val() is being used to set values, this
	// function ensures watermarks are properly set/removed after the values are set.
	// Uses self-executing function to override the default jQuery function.
	( function ( valOld ) {

		$.fn.val = function () {
			var args = Array.prototype.slice.call( arguments );
			
			// Best practice: return immediately if empty matched set
			if ( !this.length ) {
				return args.length? this : undefined;
			}

			// If no args, then we're getting the value of the first element;
			// else we're setting values for all elements in matched set
			if ( !args.length ) {

				// If element is watermarked, get the underlying value;
				// else use native jQuery .val()
				if ( this.data( dataFlag ) ) {
					var v = ( this[ 0 ].value || "" ).replace( rreturn, "" );
					return ( v === ( this.data( dataText ) || "" ) )? "" : v;
				}
				else {
					return valOld.apply( this );
				}
			}
			else {
				valOld.apply( this, args );
				$.watermark.show( this );
				return this;
			}
		};

	})( $.fn.val );
	
	// Hijack any functions found in the triggerFns list
	if ( triggerFns.length ) {

		// Wait until DOM is ready before searching
		$( function () {
			var i, name, fn;
		
			for ( i = triggerFns.length - 1; i >= 0; i-- ) {
				name = triggerFns[ i ];
				fn = window[ name ];
				
				if ( typeof( fn ) === "function" ) {
					window[ name ] = ( function ( origFn ) {
						return function () {
							$.watermark.hideAll();
							return origFn.apply( null, Array.prototype.slice.call( arguments ) );
						};
					})( fn );
				}
			}
		});
	}

	$( window ).bind( "beforeunload", function () {
		if ( $.watermark.options.hideBeforeUnload ) {
			$.watermark.hideAll();
		}
	});
}

})( jQuery, window );

// file: src/lib/date-picker/date.js
/*
 * Date prototype extensions. Doesn't depend on any
 * other code. Doens't overwrite existing methods.
 *
 * Adds dayNames, abbrDayNames, monthNames and abbrMonthNames static properties and isLeapYear,
 * isWeekend, isWeekDay, getDaysInMonth, getDayName, getMonthName, getDayOfYear, getWeekOfYear,
 * setDayOfYear, addYears, addMonths, addDays, addHours, addMinutes, addSeconds methods
 *
 * Copyright (c) 2006 Jörn Zaefferer and Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 *
 * Additional methods and properties added by Kelvin Luck: firstDayOfWeek, dateFormat, zeroTime, asString, fromString -
 * I've added my name to these methods so you know who to blame if they are broken!
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * An Array of day names starting with Sunday.
 * 
 * @example dayNames[0]
 * @result 'Sunday'
 *
 * @name dayNames
 * @type Array
 * @cat Plugins/Methods/Date
 */
Date.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * An Array of abbreviated day names starting with Sun.
 * 
 * @example abbrDayNames[0]
 * @result 'Sun'
 *
 * @name abbrDayNames
 * @type Array
 * @cat Plugins/Methods/Date
 */
Date.abbrDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * An Array of month names starting with Janurary.
 * 
 * @example monthNames[0]
 * @result 'January'
 *
 * @name monthNames
 * @type Array
 * @cat Plugins/Methods/Date
 */
Date.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * An Array of abbreviated month names starting with Jan.
 * 
 * @example abbrMonthNames[0]
 * @result 'Jan'
 *
 * @name monthNames
 * @type Array
 * @cat Plugins/Methods/Date
 */
Date.abbrMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * The first day of the week for this locale.
 *
 * @name firstDayOfWeek
 * @type Number
 * @cat Plugins/Methods/Date
 * @author Kelvin Luck
 */
Date.firstDayOfWeek = 1;

/**
 * The format that string dates should be represented as (e.g. 'dd/mm/yyyy' for UK, 'mm/dd/yyyy' for US, 'yyyy-mm-dd' for Unicode etc).
 *
 * @name format
 * @type String
 * @cat Plugins/Methods/Date
 * @author Kelvin Luck
 */
Date.format = 'dd/mm/yyyy';
//Date.format = 'mm/dd/yyyy';
//Date.format = 'yyyy-mm-dd';
//Date.format = 'dd mmm yy';

/**
 * The first two numbers in the century to be used when decoding a two digit year. Since a two digit year is ambiguous (and date.setYear
 * only works with numbers < 99 and so doesn't allow you to set years after 2000) we need to use this to disambiguate the two digit year codes.
 *
 * @name format
 * @type String
 * @cat Plugins/Methods/Date
 * @author Kelvin Luck
 */
Date.fullYearStart = '20';

(function() {

	/**
	 * Adds a given method under the given name 
	 * to the Date prototype if it doesn't
	 * currently exist.
	 *
	 * @private
	 */
	function add(name, method) {
		if( !Date.prototype[name] ) {
			Date.prototype[name] = method;
		}
	};
	
	/**
	 * Checks if the year is a leap year.
	 *
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.isLeapYear();
	 * @result true
	 *
	 * @name isLeapYear
	 * @type Boolean
	 * @cat Plugins/Methods/Date
	 */
	add("isLeapYear", function() {
		var y = this.getFullYear();
		return (y%4==0 && y%100!=0) || y%400==0;
	});
	
	/**
	 * Checks if the day is a weekend day (Sat or Sun).
	 *
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.isWeekend();
	 * @result false
	 *
	 * @name isWeekend
	 * @type Boolean
	 * @cat Plugins/Methods/Date
	 */
	add("isWeekend", function() {
		return this.getDay()==0 || this.getDay()==6;
	});
	
	/**
	 * Check if the day is a day of the week (Mon-Fri)
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.isWeekDay();
	 * @result false
	 * 
	 * @name isWeekDay
	 * @type Boolean
	 * @cat Plugins/Methods/Date
	 */
	add("isWeekDay", function() {
		return !this.isWeekend();
	});
	
	/**
	 * Gets the number of days in the month.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.getDaysInMonth();
	 * @result 31
	 * 
	 * @name getDaysInMonth
	 * @type Number
	 * @cat Plugins/Methods/Date
	 */
	add("getDaysInMonth", function() {
		return [31,(this.isLeapYear() ? 29:28),31,30,31,30,31,31,30,31,30,31][this.getMonth()];
	});
	
	/**
	 * Gets the name of the day.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.getDayName();
	 * @result 'Saturday'
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.getDayName(true);
	 * @result 'Sat'
	 * 
	 * @param abbreviated Boolean When set to true the name will be abbreviated.
	 * @name getDayName
	 * @type String
	 * @cat Plugins/Methods/Date
	 */
	add("getDayName", function(abbreviated) {
		return abbreviated ? Date.abbrDayNames[this.getDay()] : Date.dayNames[this.getDay()];
	});

	/**
	 * Gets the name of the month.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.getMonthName();
	 * @result 'Janurary'
	 *
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.getMonthName(true);
	 * @result 'Jan'
	 * 
	 * @param abbreviated Boolean When set to true the name will be abbreviated.
	 * @name getDayName
	 * @type String
	 * @cat Plugins/Methods/Date
	 */
	add("getMonthName", function(abbreviated) {
		return abbreviated ? Date.abbrMonthNames[this.getMonth()] : Date.monthNames[this.getMonth()];
	});

	/**
	 * Get the number of the day of the year.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.getDayOfYear();
	 * @result 11
	 * 
	 * @name getDayOfYear
	 * @type Number
	 * @cat Plugins/Methods/Date
	 */
	add("getDayOfYear", function() {
		var tmpdtm = new Date("1/1/" + this.getFullYear());
		return Math.floor((this.getTime() - tmpdtm.getTime()) / 86400000);
	});
	
	/**
	 * Get the number of the week of the year.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.getWeekOfYear();
	 * @result 2
	 * 
	 * @name getWeekOfYear
	 * @type Number
	 * @cat Plugins/Methods/Date
	 */
	add("getWeekOfYear", function() {
		return Math.ceil(this.getDayOfYear() / 7);
	});

	/**
	 * Set the day of the year.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.setDayOfYear(1);
	 * dtm.toString();
	 * @result 'Tue Jan 01 2008 00:00:00'
	 * 
	 * @name setDayOfYear
	 * @type Date
	 * @cat Plugins/Methods/Date
	 */
	add("setDayOfYear", function(day) {
		this.setMonth(0);
		this.setDate(day);
		return this;
	});
	
	/**
	 * Add a number of years to the date object.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.addYears(1);
	 * dtm.toString();
	 * @result 'Mon Jan 12 2009 00:00:00'
	 * 
	 * @name addYears
	 * @type Date
	 * @cat Plugins/Methods/Date
	 */
	add("addYears", function(num) {
		this.setFullYear(this.getFullYear() + num);
		return this;
	});
	
	/**
	 * Add a number of months to the date object.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.addMonths(1);
	 * dtm.toString();
	 * @result 'Tue Feb 12 2008 00:00:00'
	 * 
	 * @name addMonths
	 * @type Date
	 * @cat Plugins/Methods/Date
	 */
	add("addMonths", function(num) {
		var tmpdtm = this.getDate();
		
		this.setMonth(this.getMonth() + num);
		
		if (tmpdtm > this.getDate())
			this.addDays(-this.getDate());
		
		return this;
	});
	
	/**
	 * Add a number of days to the date object.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.addDays(1);
	 * dtm.toString();
	 * @result 'Sun Jan 13 2008 00:00:00'
	 * 
	 * @name addDays
	 * @type Date
	 * @cat Plugins/Methods/Date
	 */
	add("addDays", function(num) {
		//this.setDate(this.getDate() + num);
		this.setTime(this.getTime() + (num*86400000) );
		return this;
	});
	
	/**
	 * Add a number of hours to the date object.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.addHours(24);
	 * dtm.toString();
	 * @result 'Sun Jan 13 2008 00:00:00'
	 * 
	 * @name addHours
	 * @type Date
	 * @cat Plugins/Methods/Date
	 */
	add("addHours", function(num) {
		this.setHours(this.getHours() + num);
		return this;
	});

	/**
	 * Add a number of minutes to the date object.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.addMinutes(60);
	 * dtm.toString();
	 * @result 'Sat Jan 12 2008 01:00:00'
	 * 
	 * @name addMinutes
	 * @type Date
	 * @cat Plugins/Methods/Date
	 */
	add("addMinutes", function(num) {
		this.setMinutes(this.getMinutes() + num);
		return this;
	});
	
	/**
	 * Add a number of seconds to the date object.
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.addSeconds(60);
	 * dtm.toString();
	 * @result 'Sat Jan 12 2008 00:01:00'
	 * 
	 * @name addSeconds
	 * @type Date
	 * @cat Plugins/Methods/Date
	 */
	add("addSeconds", function(num) {
		this.setSeconds(this.getSeconds() + num);
		return this;
	});
	
	/**
	 * Sets the time component of this Date to zero for cleaner, easier comparison of dates where time is not relevant.
	 * 
	 * @example var dtm = new Date();
	 * dtm.zeroTime();
	 * dtm.toString();
	 * @result 'Sat Jan 12 2008 00:01:00'
	 * 
	 * @name zeroTime
	 * @type Date
	 * @cat Plugins/Methods/Date
	 * @author Kelvin Luck
	 */
	add("zeroTime", function() {
		this.setMilliseconds(0);
		this.setSeconds(0);
		this.setMinutes(0);
		this.setHours(0);
		return this;
	});
	
	/**
	 * Returns a string representation of the date object according to Date.format.
	 * (Date.toString may be used in other places so I purposefully didn't overwrite it)
	 * 
	 * @example var dtm = new Date("01/12/2008");
	 * dtm.asString();
	 * @result '12/01/2008' // (where Date.format == 'dd/mm/yyyy'
	 * 
	 * @name asString
	 * @type Date
	 * @cat Plugins/Methods/Date
	 * @author Kelvin Luck
	 */
	add("asString", function(format) {
		var r = format || Date.format;
		return r
			.split('yyyy').join(this.getFullYear())
			.split('yy').join((this.getFullYear() + '').substring(2))
			.split('dd').join(_zeroPad(this.getDate()))
			.split('d').join(this.getDate())
			.split('DD').join(this.getDayName(false))
			.split('D').join(this.getDayName(true))
			.split('mmmm').join(this.getMonthName(false))
			.split('mmm').join(this.getMonthName(true))
			.split('mm').join(_zeroPad(this.getMonth()+1))
			.split('hh').join(_zeroPad(this.getHours()))
			.split('min').join(_zeroPad(this.getMinutes()))
			.split('ss').join(_zeroPad(this.getSeconds()));
	});
	
	/**
	 * Returns a new date object created from the passed String according to Date.format or false if the attempt to do this results in an invalid date object
	 * (We can't simple use Date.parse as it's not aware of locale and I chose not to overwrite it incase it's functionality is being relied on elsewhere)
	 *
	 * @example var dtm = Date.fromString("12/01/2008");
	 * dtm.toString();
	 * @result 'Sat Jan 12 2008 00:00:00' // (where Date.format == 'dd/mm/yyyy'
	 * 
	 * @name fromString
	 * @type Date
	 * @cat Plugins/Methods/Date
	 * @author Kelvin Luck
	 */
	Date.fromString = function(s, format)
	{
		var f = format || Date.format,
		    d = new Date('01/01/1977'),
		    mLength = 0,
		    iM, iD, iY,
		    i, mStr;

		iM = f.indexOf('mmmm');
		if (iM > -1) {
			for (i=0; i<Date.monthNames.length; i++) {
				mStr = s.substr(iM, Date.monthNames[i].length);
				if (Date.monthNames[i] == mStr) {
					mLength = Date.monthNames[i].length - 4;
					break;
				}
			}
			d.setMonth(i);
		} else {
			iM = f.indexOf('mmm');
			if (iM > -1) {
				mStr = s.substr(iM, 3);
				for (i=0; i<Date.abbrMonthNames.length; i++) {
					if (Date.abbrMonthNames[i] == mStr) break;
				}
				d.setMonth(i);
			} else {
				d.setMonth(Number(s.substr(f.indexOf('mm'), 2)) - 1);
			}
		}
		
		iY = f.indexOf('yyyy');

		if (iY > -1) {
			if (iM < iY)
			{
				iY += mLength;
			}
			d.setFullYear(Number(s.substr(iY, 4)));
		} else {
			if (iM < iY)
			{
				iY += mLength;
			}
			// TODO - this doesn't work very well - are there any rules for what is meant by a two digit year?
			d.setFullYear(Number(Date.fullYearStart + s.substr(f.indexOf('yy'), 2)));
		}
		iD = f.indexOf('dd');
		if (iM < iD)
		{
			iD += mLength;
		}
		d.setDate(Number(s.substr(iD, 2)));
		if (isNaN(d.getTime())) {
			return false;
		}
		return d;
	};
	
	// utility method
	var _zeroPad = function(num) {
		var s = '0'+num;
		return s.substring(s.length-2)
		//return ('0'+num).substring(-2); // doesn't work on IE :(
	};
	
})();

// file: src/lib/date-picker/jquery.datePicker.js
/**
 * Copyright (c) 2008 Kelvin Luck (http://www.kelvinluck.com/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * .
 * $Id$
 **/

(function($){
    
	$.fn.extend({
/**
 * Render a calendar table into any matched elements.
 * 
 * @param Object s (optional) Customize your calendars.
 * @option Number month The month to render (NOTE that months are zero based). Default is today's month.
 * @option Number year The year to render. Default is today's year.
 * @option Function renderCallback A reference to a function that is called as each cell is rendered and which can add classes and event listeners to the created nodes. Default is no callback.
 * @option Number showHeader Whether or not to show the header row, possible values are: $.dpConst.SHOW_HEADER_NONE (no header), $.dpConst.SHOW_HEADER_SHORT (first letter of each day) and $.dpConst.SHOW_HEADER_LONG (full name of each day). Default is $.dpConst.SHOW_HEADER_SHORT.
 * @option String hoverClass The class to attach to each cell when you hover over it (to allow you to use hover effects in IE6 which doesn't support the :hover pseudo-class on elements other than links). Default is dp-hover. Pass false if you don't want a hover class.
 * @type jQuery
 * @name renderCalendar
 * @cat plugins/datePicker
 * @author Kelvin Luck (http://www.kelvinluck.com/)
 *
 * @example $('#calendar-me').renderCalendar({month:0, year:2007});
 * @desc Renders a calendar displaying January 2007 into the element with an id of calendar-me.
 *
 * @example
 * var testCallback = function($td, thisDate, month, year)
 * {
 * if ($td.is('.current-month') && thisDate.getDay() == 4) {
 *		var d = thisDate.getDate();
 *		$td.bind(
 *			'click',
 *			function()
 *			{
 *				alert('You clicked on ' + d + '/' + (Number(month)+1) + '/' + year);
 *			}
 *		).addClass('thursday');
 *	} else if (thisDate.getDay() == 5) {
 *		$td.html('Friday the ' + $td.html() + 'th');
 *	}
 * }
 * $('#calendar-me').renderCalendar({month:0, year:2007, renderCallback:testCallback});
 * 
 * @desc Renders a calendar displaying January 2007 into the element with an id of calendar-me. Every Thursday in the current month has a class of "thursday" applied to it, is clickable and shows an alert when clicked. Every Friday on the calendar has the number inside replaced with text.
 **/
		renderCalendar  :   function(s)
		{
			var dc = function(a)
			{
				return document.createElement(a);
			};

			s = $.extend({}, $.fn.datePicker.defaults, s);
			
			if (s.showHeader != $.dpConst.SHOW_HEADER_NONE) {
				var headRow = $(dc('tr'));
				for (var i=Date.firstDayOfWeek; i<Date.firstDayOfWeek+7; i++) {
					var weekday = i%7;
					var day = Date.dayNames[weekday];
					headRow.append(
						jQuery(dc('th')).attr({'scope':'col', 'abbr':day, 'title':day, 'class':(weekday == 0 || weekday == 6 ? 'weekend' : 'weekday')}).html(s.showHeader == $.dpConst.SHOW_HEADER_SHORT ? day.substr(0, 1) : day)
					);
				}
			};
			
			var calendarTable = $(dc('table'))
									.attr(
										{
											'cellspacing':2
										}
									)
									.addClass('jCalendar')
									.append(
										(s.showHeader != $.dpConst.SHOW_HEADER_NONE ? 
											$(dc('thead'))
												.append(headRow)
											:
											dc('thead')
										)
									);
			var tbody = $(dc('tbody'));
			
			var today = (new Date()).zeroTime();
			today.setHours(12);
			
			var month = s.month == undefined ? today.getMonth() : s.month;
			var year = s.year || today.getFullYear();
			
			var currentDate = (new Date(year, month, 1, 12, 0, 0));
			
			
			var firstDayOffset = Date.firstDayOfWeek - currentDate.getDay() + 1;
			if (firstDayOffset > 1) firstDayOffset -= 7;
			var weeksToDraw = Math.ceil(( (-1*firstDayOffset+1) + currentDate.getDaysInMonth() ) /7);
			currentDate.addDays(firstDayOffset-1);
			
			var doHover = function(firstDayInBounds)
			{
				return function()
				{
					if (s.hoverClass) {
						var $this = $(this);
						if (!s.selectWeek) {
							$this.addClass(s.hoverClass);
						} else if (firstDayInBounds && !$this.is('.disabled')) {
							$this.parent().addClass('activeWeekHover');
						}
					}
				}
			};
			var unHover = function()
			{
				if (s.hoverClass) {
					var $this = $(this);
					$this.removeClass(s.hoverClass);
					$this.parent().removeClass('activeWeekHover');
				}
			};

			var w = 0;
			while (w++<weeksToDraw) {
				var r = jQuery(dc('tr'));
				var firstDayInBounds = s.dpController ? currentDate > s.dpController.startDate : false;
				for (var i=0; i<7; i++) {
					var thisMonth = currentDate.getMonth() == month;
					var d = $(dc('td'))
								.text(currentDate.getDate() + '')
								.addClass((thisMonth ? 'current-month ' : 'other-month ') +
													(currentDate.isWeekend() ? 'weekend ' : 'weekday ') +
													(thisMonth && currentDate.getTime() == today.getTime() ? 'today ' : '')
								)
								.data('datePickerDate', currentDate.asString())
								.hover(doHover(firstDayInBounds), unHover)
							;
					r.append(d);
					if (s.renderCallback) {
						s.renderCallback(d, currentDate, month, year);
					}
					// addDays(1) fails in some locales due to daylight savings. See issue 39.
					//currentDate.addDays(1);
					// set the time to midday to avoid any weird timezone issues??
					currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()+1, 12, 0, 0);
				}
				tbody.append(r);
			}
			calendarTable.append(tbody);
			
			return this.each(
				function()
				{
					$(this).empty().append(calendarTable);
				}
			);
		},
/**
 * Create a datePicker associated with each of the matched elements.
 *
 * The matched element will receive a few custom events with the following signatures:
 *
 * dateSelected(event, date, $td, status)
 * Triggered when a date is selected. event is a reference to the event, date is the Date selected, $td is a jquery object wrapped around the TD that was clicked on and status is whether the date was selected (true) or deselected (false)
 * 
 * dpClosed(event, selected)
 * Triggered when the date picker is closed. event is a reference to the event and selected is an Array containing Date objects.
 *
 * dpMonthChanged(event, displayedMonth, displayedYear)
 * Triggered when the month of the popped up calendar is changed. event is a reference to the event, displayedMonth is the number of the month now displayed (zero based) and displayedYear is the year of the month.
 *
 * dpDisplayed(event, $datePickerDiv)
 * Triggered when the date picker is created. $datePickerDiv is the div containing the date picker. Use this event to add custom content/ listeners to the popped up date picker.
 *
 * @param Object s (optional) Customize your date pickers.
 * @option Number month The month to render when the date picker is opened (NOTE that months are zero based). Default is today's month.
 * @option Number year The year to render when the date picker is opened. Default is today's year.
 * @option String|Date startDate The first date date can be selected.
 * @option String|Date endDate The last date that can be selected.
 * @option Boolean inline Whether to create the datePicker as inline (e.g. always on the page) or as a model popup. Default is false (== modal popup)
 * @option Boolean createButton Whether to create a .dp-choose-date anchor directly after the matched element which when clicked will trigger the showing of the date picker. Default is true.
 * @option Boolean showYearNavigation Whether to display buttons which allow the user to navigate through the months a year at a time. Default is true.
 * @option Boolean closeOnSelect Whether to close the date picker when a date is selected. Default is true.
 * @option Boolean displayClose Whether to create a "Close" button within the date picker popup. Default is false.
 * @option Boolean selectMultiple Whether a user should be able to select multiple dates with this date picker. Default is false.
 * @option Number numSelectable The maximum number of dates that can be selected where selectMultiple is true. Default is a very high number.
 * @option Boolean clickInput If the matched element is an input type="text" and this option is true then clicking on the input will cause the date picker to appear.
 * @option Boolean rememberViewedMonth Whether the datePicker should remember the last viewed month and open on it. If false then the date picker will always open with the month for the first selected date visible.
 * @option Boolean selectWeek Whether to select a complete week at a time...
 * @option Number verticalPosition The vertical alignment of the popped up date picker to the matched element. One of $.dpConst.POS_TOP and $.dpConst.POS_BOTTOM. Default is $.dpConst.POS_TOP.
 * @option Number horizontalPosition The horizontal alignment of the popped up date picker to the matched element. One of $.dpConst.POS_LEFT and $.dpConst.POS_RIGHT.
 * @option Number verticalOffset The number of pixels offset from the defined verticalPosition of this date picker that it should pop up in. Default in 0.
 * @option Number horizontalOffset The number of pixels offset from the defined horizontalPosition of this date picker that it should pop up in. Default in 0.
 * @option (Function|Array) renderCallback A reference to a function (or an array of separate functions) that is called as each cell is rendered and which can add classes and event listeners to the created nodes. Each callback function will receive four arguments; a jquery object wrapping the created TD, a Date object containing the date this TD represents, a number giving the currently rendered month and a number giving the currently rendered year. Default is no callback.
 * @option String hoverClass The class to attach to each cell when you hover over it (to allow you to use hover effects in IE6 which doesn't support the :hover pseudo-class on elements other than links). Default is dp-hover. Pass false if you don't want a hover class.
 * @option String autoFocusNextInput Whether focus should be passed onto the next input in the form (true) or remain on this input (false) when a date is selected and the calendar closes
 * @type jQuery
 * @name datePicker
 * @cat plugins/datePicker
 * @author Kelvin Luck (http://www.kelvinluck.com/)
 *
 * @example $('input.date-picker').datePicker();
 * @desc Creates a date picker button next to all matched input elements. When the button is clicked on the value of the selected date will be placed in the corresponding input (formatted according to Date.format).
 *
 * @example demo/index.html
 * @desc See the projects homepage for many more complex examples...
 **/
		datePicker : function(s)
		{			
			if (!$.event._dpCache) $.event._dpCache = [];
			
			// initialise the date picker controller with the relevant settings...
			s = $.extend({}, $.fn.datePicker.defaults, s);
			
			return this.each(
				function()
				{
					var $this = $(this);
					var alreadyExists = true;
					
					if (!this._dpId) {
						this._dpId = $.guid++;
						$.event._dpCache[this._dpId] = new DatePicker(this);
						alreadyExists = false;
					}
					
					if (s.inline) {
						s.createButton = false;
						s.displayClose = false;
						s.closeOnSelect = false;
						$this.empty();
					}
					
					var controller = $.event._dpCache[this._dpId];
					
					controller.init(s);
					
					if (!alreadyExists && s.createButton) {
						// create it!
						controller.button = $('<a href="#" class="dp-choose-date" title="' + $.dpText.TEXT_CHOOSE_DATE + '">' + $.dpText.TEXT_CHOOSE_DATE + '</a>')
								.bind(
									'click',
									function()
									{
										$this.dpDisplay(this);
										this.blur();
										return false;
									}
								);
						$this.after(controller.button);
					}
					
					if (!alreadyExists && $this.is(':text')) {
						$this
							.bind(
								'dateSelected',
								function(e, selectedDate, $td)
								{
									this.value = selectedDate.asString();
								}
							).bind(
								'change',
								function()
								{
									if (this.value == '') {
										controller.clearSelected();
									} else {
										var d = Date.fromString(this.value);
										if (d) {
											controller.setSelected(d, true, true);
										}
									}
								}
							);
						if (s.clickInput) {
							$this.bind(
								'click',
								function()
								{
									// The change event doesn't happen until the input loses focus so we need to manually trigger it...
									$this.trigger('change');
									$this.dpDisplay();
								}
							);
						}
						var d = Date.fromString(this.value);
						if (this.value != '' && d) {
							controller.setSelected(d, true, true);
						}
					}
					
					$this.addClass('dp-applied');
					
				}
			)
		},
/**
 * Disables or enables this date picker
 *
 * @param Boolean s Whether to disable (true) or enable (false) this datePicker
 * @type jQuery
 * @name dpSetDisabled
 * @cat plugins/datePicker
 * @author Kelvin Luck (http://www.kelvinluck.com/)
 *
 * @example $('.date-picker').datePicker();
 * $('.date-picker').dpSetDisabled(true);
 * @desc Prevents this date picker from displaying and adds a class of dp-disabled to it (and it's associated button if it has one) for styling purposes. If the matched element is an input field then it will also set the disabled attribute to stop people directly editing the field.
 **/
		dpSetDisabled : function(s)
		{
			return _w.call(this, 'setDisabled', s);
		},
/**
 * Updates the first selectable date for any date pickers on any matched elements.
 *
 * @param String|Date d A Date object or string representing the first selectable date (formatted according to Date.format).
 * @type jQuery
 * @name dpSetStartDate
 * @cat plugins/datePicker
 * @author Kelvin Luck (http://www.kelvinluck.com/)
 *
 * @example $('.date-picker').datePicker();
 * $('.date-picker').dpSetStartDate('01/01/2000');
 * @desc Creates a date picker associated with all elements with a class of "date-picker" then sets the first selectable date for each of these to the first day of the millenium.
 **/
		dpSetStartDate : function(d)
		{
			return _w.call(this, 'setStartDate', d);
		},
/**
 * Updates the last selectable date for any date pickers on any matched elements.
 *
 * @param String|Date d A Date object or string representing the last selectable date (formatted according to Date.format).
 * @type jQuery
 * @name dpSetEndDate
 * @cat plugins/datePicker
 * @author Kelvin Luck (http://www.kelvinluck.com/)
 *
 * @example $('.date-picker').datePicker();
 * $('.date-picker').dpSetEndDate('01/01/2010');
 * @desc Creates a date picker associated with all elements with a class of "date-picker" then sets the last selectable date for each of these to the first Janurary 2010.
 **/
		dpSetEndDate : function(d)
		{
			return _w.call(this, 'setEndDate', d);
		},
/**
 * Gets a list of Dates currently selected by this datePicker. This will be an empty array if no dates are currently selected or NULL if there is no datePicker associated with the matched element.
 *
 * @type Array
 * @name dpGetSelected
 * @cat plugins/datePicker
 * @author Kelvin Luck (http://www.kelvinluck.com/)
 *
 * @example $('.date-picker').datePicker();
 * alert($('.date-picker').dpGetSelected());
 * @desc Will alert an empty array (as nothing is selected yet)
 **/
		dpGetSelected : function()
		{
			var c = _getController(this[0]);
			if (c) {
				return c.getSelected();
			}
			return null;
		},
/**
 * Selects or deselects a date on any matched element's date pickers. Deselcting is only useful on date pickers where selectMultiple==true. Selecting will only work if the passed date is within the startDate and endDate boundries for a given date picker.
 *
 * @param String|Date d A Date object or string representing the date you want to select (formatted according to Date.format).
 * @param Boolean v Whether you want to select (true) or deselect (false) this date. Optional - default = true.
 * @param Boolean m Whether you want the date picker to open up on the month of this date when it is next opened. Optional - default = true.
 * @param Boolean e Whether you want the date picker to dispatch events related to this change of selection. Optional - default = true.
 * @type jQuery
 * @name dpSetSelected
 * @cat plugins/datePicker
 * @author Kelvin Luck (http://www.kelvinluck.com/)
 *
 * @example $('.date-picker').datePicker();
 * $('.date-picker').dpSetSelected('01/01/2010');
 * @desc Creates a date picker associated with all elements with a class of "date-picker" then sets the selected date on these date pickers to the first Janurary 2010. When the date picker is next opened it will display Janurary 2010.
 **/
		dpSetSelected : function(d, v, m, e)
		{
			if (v == undefined) v=true;
			if (m == undefined) m=true;
			if (e == undefined) e=true;
			return _w.call(this, 'setSelected', Date.fromString(d), v, m, e);
		},
/**
 * Sets the month that will be displayed when the date picker is next opened. If the passed month is before startDate then the month containing startDate will be displayed instead. If the passed month is after endDate then the month containing the endDate will be displayed instead.
 *
 * @param Number m The month you want the date picker to display. Optional - defaults to the currently displayed month.
 * @param Number y The year you want the date picker to display. Optional - defaults to the currently displayed year.
 * @type jQuery
 * @name dpSetDisplayedMonth
 * @cat plugins/datePicker
 * @author Kelvin Luck (http://www.kelvinluck.com/)
 *
 * @example $('.date-picker').datePicker();
 * $('.date-picker').dpSetDisplayedMonth(10, 2008);
 * @desc Creates a date picker associated with all elements with a class of "date-picker" then sets the selected date on these date pickers to the first Janurary 2010. When the date picker is next opened it will display Janurary 2010.
 **/
		dpSetDisplayedMonth : function(m, y)
		{
			return _w.call(this, 'setDisplayedMonth', Number(m), Number(y), true);
		},
/**
 * Displays the date picker associated with the matched elements. Since only one date picker can be displayed at once then the date picker associated with the last matched element will be the one that is displayed.
 *
 * @param HTMLElement e An element that you want the date picker to pop up relative in position to. Optional - default behaviour is to pop up next to the element associated with this date picker.
 * @type jQuery
 * @name dpDisplay
 * @cat plugins/datePicker
 * @author Kelvin Luck (http://www.kelvinluck.com/)
 *
 * @example $('#date-picker').datePicker();
 * $('#date-picker').dpDisplay();
 * @desc Creates a date picker associated with the element with an id of date-picker and then causes it to pop up.
 **/
		dpDisplay : function(e)
		{
			return _w.call(this, 'display', e);
		},
/**
 * Sets a function or array of functions that is called when each TD of the date picker popup is rendered to the page
 *
 * @param (Function|Array) a A function or an array of functions that are called when each td is rendered. Each function will receive four arguments; a jquery object wrapping the created TD, a Date object containing the date this TD represents, a number giving the currently rendered month and a number giving the currently rendered year.
 * @type jQuery
 * @name dpSetRenderCallback
 * @cat plugins/datePicker
 * @author Kelvin Luck (http://www.kelvinluck.com/)
 *
 * @example $('#date-picker').datePicker();
 * $('#date-picker').dpSetRenderCallback(function($td, thisDate, month, year)
 * {
 * 	// do stuff as each td is rendered dependant on the date in the td and the displayed month and year
 * });
 * @desc Creates a date picker associated with the element with an id of date-picker and then creates a function which is called as each td is rendered when this date picker is displayed.
 **/
		dpSetRenderCallback : function(a)
		{
			return _w.call(this, 'setRenderCallback', a);
		},
/**
 * Sets the position that the datePicker will pop up (relative to it's associated element)
 *
 * @param Number v The vertical alignment of the created date picker to it's associated element. Possible values are $.dpConst.POS_TOP and $.dpConst.POS_BOTTOM
 * @param Number h The horizontal alignment of the created date picker to it's associated element. Possible values are $.dpConst.POS_LEFT and $.dpConst.POS_RIGHT
 * @type jQuery
 * @name dpSetPosition
 * @cat plugins/datePicker
 * @author Kelvin Luck (http://www.kelvinluck.com/)
 *
 * @example $('#date-picker').datePicker();
 * $('#date-picker').dpSetPosition($.dpConst.POS_BOTTOM, $.dpConst.POS_RIGHT);
 * @desc Creates a date picker associated with the element with an id of date-picker and makes it so that when this date picker pops up it will be bottom and right aligned to the #date-picker element.
 **/
		dpSetPosition : function(v, h)
		{
			return _w.call(this, 'setPosition', v, h);
		},
/**
 * Sets the offset that the popped up date picker will have from it's default position relative to it's associated element (as set by dpSetPosition)
 *
 * @param Number v The vertical offset of the created date picker.
 * @param Number h The horizontal offset of the created date picker.
 * @type jQuery
 * @name dpSetOffset
 * @cat plugins/datePicker
 * @author Kelvin Luck (http://www.kelvinluck.com/)
 *
 * @example $('#date-picker').datePicker();
 * $('#date-picker').dpSetOffset(-20, 200);
 * @desc Creates a date picker associated with the element with an id of date-picker and makes it so that when this date picker pops up it will be 20 pixels above and 200 pixels to the right of it's default position.
 **/
		dpSetOffset : function(v, h)
		{
			return _w.call(this, 'setOffset', v, h);
		},
/**
 * Closes the open date picker associated with this element.
 *
 * @type jQuery
 * @name dpClose
 * @cat plugins/datePicker
 * @author Kelvin Luck (http://www.kelvinluck.com/)
 *
 * @example $('.date-pick')
 *		.datePicker()
 *		.bind(
 *			'focus',
 *			function()
 *			{
 *				$(this).dpDisplay();
 *			}
 *		).bind(
 *			'blur',
 *			function()
 *			{
 *				$(this).dpClose();
 *			}
 *		);
 **/
		dpClose : function()
		{
			return _w.call(this, '_closeCalendar', false, this[0]);
		},
/**
 * Rerenders the date picker's current month (for use with inline calendars and renderCallbacks).
 *
 * @type jQuery
 * @name dpRerenderCalendar
 * @cat plugins/datePicker
 * @author Kelvin Luck (http://www.kelvinluck.com/)
 *
 **/
		dpRerenderCalendar : function()
		{
			return _w.call(this, '_rerenderCalendar');
		},
		// private function called on unload to clean up any expandos etc and prevent memory links...
		_dpDestroy : function()
		{
			// TODO - implement this?
		}
	});
	
	// private internal function to cut down on the amount of code needed where we forward
	// dp* methods on the jQuery object on to the relevant DatePicker controllers...
	var _w = function(f, a1, a2, a3, a4)
	{
		return this.each(
			function()
			{
				var c = _getController(this);
				if (c) {
					c[f](a1, a2, a3, a4);
				}
			}
		);
	};
	
	function DatePicker(ele)
	{
		this.ele = ele;
		
		// initial values...
		this.displayedMonth		=	null;
		this.displayedYear		=	null;
		this.startDate			=	null;
		this.endDate			=	null;
		this.showYearNavigation	=	null;
		this.closeOnSelect		=	null;
		this.displayClose		=	null;
		this.rememberViewedMonth=	null;
		this.selectMultiple		=	null;
		this.numSelectable		=	null;
		this.numSelected		=	null;
		this.verticalPosition	=	null;
		this.horizontalPosition	=	null;
		this.verticalOffset		=	null;
		this.horizontalOffset	=	null;
		this.button				=	null;
		this.renderCallback		=	[];
		this.selectedDates		=	{};
		this.inline				=	null;
		this.context			=	'#dp-popup';
		this.settings			=	{};
	};
	$.extend(
		DatePicker.prototype,
		{	
			init : function(s)
			{
				this.setStartDate(s.startDate);
				this.setEndDate(s.endDate);
				this.setDisplayedMonth(Number(s.month), Number(s.year));
				this.setRenderCallback(s.renderCallback);
				this.showYearNavigation = s.showYearNavigation;
				this.closeOnSelect = s.closeOnSelect;
				this.displayClose = s.displayClose;
				this.rememberViewedMonth =	s.rememberViewedMonth;
				this.selectMultiple = s.selectMultiple;
				this.numSelectable = s.selectMultiple ? s.numSelectable : 1;
				this.numSelected = 0;
				this.verticalPosition = s.verticalPosition;
				this.horizontalPosition = s.horizontalPosition;
				this.hoverClass = s.hoverClass;
				this.setOffset(s.verticalOffset, s.horizontalOffset);
				this.inline = s.inline;
				this.settings = s;
				if (this.inline) {
					this.context = this.ele;
					this.display();
				}
			},
			setStartDate : function(d)
			{
				if (d) {
					if (d instanceof Date) {
						this.startDate = d;
					} else {
						this.startDate = Date.fromString(d);
					}
				}
				if (!this.startDate) {
					this.startDate = (new Date()).zeroTime();
				}
				this.setDisplayedMonth(this.displayedMonth, this.displayedYear);
			},
			setEndDate : function(d)
			{
				if (d) {
					if (d instanceof Date) {
						this.endDate = d;
					} else {
						this.endDate = Date.fromString(d);
					}
				}
				if (!this.endDate) {
					this.endDate = (new Date('12/31/2999')); // using the JS Date.parse function which expects mm/dd/yyyy
				}
				if (this.endDate.getTime() < this.startDate.getTime()) {
					this.endDate = this.startDate;
				}
				this.setDisplayedMonth(this.displayedMonth, this.displayedYear);
			},
			setPosition : function(v, h)
			{
				this.verticalPosition = v;
				this.horizontalPosition = h;
			},
			setOffset : function(v, h)
			{
				this.verticalOffset = parseInt(v) || 0;
				this.horizontalOffset = parseInt(h) || 0;
			},
			setDisabled : function(s)
			{
				$e = $(this.ele);
				$e[s ? 'addClass' : 'removeClass']('dp-disabled');
				if (this.button) {
					$but = $(this.button);
					$but[s ? 'addClass' : 'removeClass']('dp-disabled');
					$but.attr('title', s ? '' : $.dpText.TEXT_CHOOSE_DATE);
				}
				if ($e.is(':text')) {
					$e.attr('disabled', s ? 'disabled' : '');
				}
			},
			setDisplayedMonth : function(m, y, rerender)
			{
				if (this.startDate == undefined || this.endDate == undefined) {
					return;
				}
				var s = new Date(this.startDate.getTime());
				s.setDate(1);
				var e = new Date(this.endDate.getTime());
				e.setDate(1);
				
				var t;
				if ((!m && !y) || (isNaN(m) && isNaN(y))) {
					// no month or year passed - default to current month
					t = new Date().zeroTime();
					t.setDate(1);
				} else if (isNaN(m)) {
					// just year passed in - presume we want the displayedMonth
					t = new Date(y, this.displayedMonth, 1);
				} else if (isNaN(y)) {
					// just month passed in - presume we want the displayedYear
					t = new Date(this.displayedYear, m, 1);
				} else {
					// year and month passed in - that's the date we want!
					t = new Date(y, m, 1)
				}
				// check if the desired date is within the range of our defined startDate and endDate
				if (t.getTime() < s.getTime()) {
					t = s;
				} else if (t.getTime() > e.getTime()) {
					t = e;
				}
				var oldMonth = this.displayedMonth;
				var oldYear = this.displayedYear;
				this.displayedMonth = t.getMonth();
				this.displayedYear = t.getFullYear();

				if (rerender && (this.displayedMonth != oldMonth || this.displayedYear != oldYear))
				{
					this._rerenderCalendar();
					$(this.ele).trigger('dpMonthChanged', [this.displayedMonth, this.displayedYear]);
				}
			},
			setSelected : function(d, v, moveToMonth, dispatchEvents)
			{
				if (d < this.startDate || d.zeroTime() > this.endDate.zeroTime()) {
					// Don't allow people to select dates outside range...
					return;
				}
				var s = this.settings;
				if (s.selectWeek)
				{
					d = d.addDays(- (d.getDay() - Date.firstDayOfWeek + 7) % 7);
					if (d < this.startDate) // The first day of this week is before the start date so is unselectable...
					{
						return;
					}
				}
				if (v == this.isSelected(d)) // this date is already un/selected
				{
					return;
				}
				if (this.selectMultiple == false) {
					this.clearSelected();
				} else if (v && this.numSelected == this.numSelectable) {
					// can't select any more dates...
					return;
				}
				if (moveToMonth && (this.displayedMonth != d.getMonth() || this.displayedYear != d.getFullYear())) {
					this.setDisplayedMonth(d.getMonth(), d.getFullYear(), true);
				}
				this.selectedDates[d.asString()] = v;
				this.numSelected += v ? 1 : -1;
				var selectorString = 'td.' + (d.getMonth() == this.displayedMonth ? 'current-month' : 'other-month');
				var $td;
				$(selectorString, this.context).each(
					function()
					{
						if ($(this).data('datePickerDate') == d.asString()) {
							$td = $(this);
							if (s.selectWeek)
							{
								$td.parent()[v ? 'addClass' : 'removeClass']('selectedWeek');
							}
							$td[v ? 'addClass' : 'removeClass']('selected'); 
						}
					}
				);
				$('td', this.context).not('.selected')[this.selectMultiple &&  this.numSelected == this.numSelectable ? 'addClass' : 'removeClass']('unselectable');
				
				if (dispatchEvents)
				{
					var s = this.isSelected(d);
					$e = $(this.ele);
					var dClone = Date.fromString(d.asString());
					$e.trigger('dateSelected', [dClone, $td, s]);
					$e.trigger('change');
				}
			},
			isSelected : function(d)
			{
				return this.selectedDates[d.asString()];
			},
			getSelected : function()
			{
				var r = [];
				for(var s in this.selectedDates) {
					if (this.selectedDates[s] == true) {
						r.push(Date.fromString(s));
					}
				}
				return r;
			},
			clearSelected : function()
			{
				this.selectedDates = {};
				this.numSelected = 0;
				$('td.selected', this.context).removeClass('selected').parent().removeClass('selectedWeek');
			},
			display : function(eleAlignTo)
			{
				if ($(this.ele).is('.dp-disabled')) return;
				
				eleAlignTo = eleAlignTo || this.ele;
				var c = this;
				var $ele = $(eleAlignTo);
				var eleOffset = $ele.offset();
				
				var $createIn;
				var attrs;
				var attrsCalendarHolder;
				var cssRules;
				
				if (c.inline) {
					$createIn = $(this.ele);
					attrs = {
						'id'		:	'calendar-' + this.ele._dpId,
						'class'	:	'dp-popup dp-popup-inline'
					};

					$('.dp-popup', $createIn).remove();
					cssRules = {
					};
				} else {
					$createIn = $('body');
					attrs = {
						'id'		:	'dp-popup',
						'class'	:	'dp-popup'
					};
					cssRules = {
						'top'	:	eleOffset.top + c.verticalOffset,
						'left'	:	eleOffset.left + c.horizontalOffset
					};
					
					var _checkMouse = function(e)
					{
						var el = e.target;
						var cal = $('#dp-popup')[0];
						
						while (true){
							if (el == cal) {
								return true;
							} else if (el == document) {
								c._closeCalendar();
								return false;
							} else {
								el = $(el).parent()[0];
							}
						}
					};
					this._checkMouse = _checkMouse;
					
					c._closeCalendar(true);
					$(document).bind(
						'keydown.datepicker', 
						function(event)
						{
							if (event.keyCode == 27) {
								c._closeCalendar();
							}
						}
					);
				}
				
				if (!c.rememberViewedMonth)
				{
					var selectedDate = this.getSelected()[0];
					if (selectedDate) {
						selectedDate = new Date(selectedDate);
						this.setDisplayedMonth(selectedDate.getMonth(), selectedDate.getFullYear(), false);
					}
				}
				
				$createIn
					.append(
						$('<div></div>')
							.attr(attrs)
							.css(cssRules)
							.append(
//								$('<a href="#" class="selecteee">aaa</a>'),
								$('<h2></h2>'),
								$('<div class="dp-nav-prev"></div>')
									.append(
										$('<a class="dp-nav-prev-year" href="#" title="' + $.dpText.TEXT_PREV_YEAR + '">&lt;&lt;</a>')
											.bind(
												'click',
												function()
												{
													return c._displayNewMonth.call(c, this, 0, -1);
												}
											),
										$('<a class="dp-nav-prev-month" href="#" title="' + $.dpText.TEXT_PREV_MONTH + '">&lt;</a>')
											.bind(
												'click',
												function()
												{
													return c._displayNewMonth.call(c, this, -1, 0);
												}
											)
									),
								$('<div class="dp-nav-next"></div>')
									.append(
										$('<a class="dp-nav-next-year" href="#" title="' + $.dpText.TEXT_NEXT_YEAR + '">&gt;&gt;</a>')
											.bind(
												'click',
												function()
												{
													return c._displayNewMonth.call(c, this, 0, 1);
												}
											),
										$('<a class="dp-nav-next-month" href="#" title="' + $.dpText.TEXT_NEXT_MONTH + '">&gt;</a>')
											.bind(
												'click',
												function()
												{
													return c._displayNewMonth.call(c, this, 1, 0);
												}
											)
									),
								$('<div class="dp-calendar"></div>')
							)
							.bgIframe()
						);
					
				var $pop = this.inline ? $('.dp-popup', this.context) : $('#dp-popup');
				
				if (this.showYearNavigation == false) {
					$('.dp-nav-prev-year, .dp-nav-next-year', c.context).css('display', 'none');
				}
				if (this.displayClose) {
					$pop.append(
						$('<a href="#" id="dp-close">' + $.dpText.TEXT_CLOSE + '</a>')
							.bind(
								'click',
								function()
								{
									c._closeCalendar();
									return false;
								}
							)
					);
				}
				c._renderCalendar();

				$(this.ele).trigger('dpDisplayed', $pop);
				
				if (!c.inline) {
					if (this.verticalPosition == $.dpConst.POS_BOTTOM) {
						$pop.css('top', eleOffset.top + $ele.height() - $pop.height() + c.verticalOffset);
					}
					if (this.horizontalPosition == $.dpConst.POS_RIGHT) {
						$pop.css('left', eleOffset.left + $ele.width() - $pop.width() + c.horizontalOffset);
					}
//					$('.selectee', this.context).focus();
					$(document).bind('mousedown.datepicker', this._checkMouse);
				}
				
			},
			setRenderCallback : function(a)
			{
				if (a == null) return;
				if (a && typeof(a) == 'function') {
					a = [a];
				}
				this.renderCallback = this.renderCallback.concat(a);
			},
			cellRender : function ($td, thisDate, month, year) {
				var c = this.dpController;
				var d = new Date(thisDate.getTime());
				
				// add our click handlers to deal with it when the days are clicked...
				
				$td.bind(
					'click',
					function()
					{
						var $this = $(this);
						if (!$this.is('.disabled')) {
							c.setSelected(d, !$this.is('.selected') || !c.selectMultiple, false, true);
							if (c.closeOnSelect) {
								// Focus the next input in the form…
								if (c.settings.autoFocusNextInput) {
									var ele = c.ele;
									var found = false;
									$(':input', ele.form).each(
										function()
										{
											if (found) {
												$(this).focus();
												return false;
											}
											if (this == ele) {
												found = true;
											}
										}
									);
								} else {
									try {
										c.ele.focus();
									} catch (e) {}
								}
								c._closeCalendar();
							}
						}
					}
				);
				if (c.isSelected(d)) {
					$td.addClass('selected');
					if (c.settings.selectWeek)
					{
						$td.parent().addClass('selectedWeek');
					}
				} else  if (c.selectMultiple && c.numSelected == c.numSelectable) {
					$td.addClass('unselectable');
				}
				
			},
			_applyRenderCallbacks : function()
			{
				var c = this;
				$('td', this.context).each(
					function()
					{
						for (var i=0; i<c.renderCallback.length; i++) {
							$td = $(this);
							c.renderCallback[i].apply(this, [$td, Date.fromString($td.data('datePickerDate')), c.displayedMonth, c.displayedYear]);
						}
					}
				);
				return;
			},
			// ele is the clicked button - only proceed if it doesn't have the class disabled...
			// m and y are -1, 0 or 1 depending which direction we want to go in...
			_displayNewMonth : function(ele, m, y) 
			{
				if (!$(ele).is('.disabled')) {
					this.setDisplayedMonth(this.displayedMonth + m, this.displayedYear + y, true);
				}
				ele.blur();
				return false;
			},
			_rerenderCalendar : function()
			{
				this._clearCalendar();
				this._renderCalendar();
			},
			_renderCalendar : function()
			{
				// set the title...
				$('h2', this.context).html((new Date(this.displayedYear, this.displayedMonth, 1)).asString($.dpText.HEADER_FORMAT));
				
				// render the calendar...
				$('.dp-calendar', this.context).renderCalendar(
					$.extend(
						{},
						this.settings, 
						{
							month			: this.displayedMonth,
							year			: this.displayedYear,
							renderCallback	: this.cellRender,
							dpController	: this,
							hoverClass		: this.hoverClass
						})
				);
				
				// update the status of the control buttons and disable dates before startDate or after endDate...
				// TODO: When should the year buttons be disabled? When you can't go forward a whole year from where you are or is that annoying?
				if (this.displayedYear == this.startDate.getFullYear() && this.displayedMonth == this.startDate.getMonth()) {
					$('.dp-nav-prev-year', this.context).addClass('disabled');
					$('.dp-nav-prev-month', this.context).addClass('disabled');
					$('.dp-calendar td.other-month', this.context).each(
						function()
						{
							var $this = $(this);
							if (Number($this.text()) > 20) {
								$this.addClass('disabled');
							}
						}
					);
					var d = this.startDate.getDate();
					$('.dp-calendar td.current-month', this.context).each(
						function()
						{
							var $this = $(this);
							if (Number($this.text()) < d) {
								$this.addClass('disabled');
							}
						}
					);
				} else {
					$('.dp-nav-prev-year', this.context).removeClass('disabled');
					$('.dp-nav-prev-month', this.context).removeClass('disabled');
					var d = this.startDate.getDate();
					if (d > 20) {
						// check if the startDate is last month as we might need to add some disabled classes...
						var st = this.startDate.getTime();
						var sd = new Date(st);
						sd.addMonths(1);
						if (this.displayedYear == sd.getFullYear() && this.displayedMonth == sd.getMonth()) {
							$('.dp-calendar td.other-month', this.context).each(
								function()
								{
									var $this = $(this);
									if (Date.fromString($this.data('datePickerDate')).getTime() < st) {
										$this.addClass('disabled');
									}
								}
							);
						}
					}
				}
				if (this.displayedYear == this.endDate.getFullYear() && this.displayedMonth == this.endDate.getMonth()) {
					$('.dp-nav-next-year', this.context).addClass('disabled');
					$('.dp-nav-next-month', this.context).addClass('disabled');
					$('.dp-calendar td.other-month', this.context).each(
						function()
						{
							var $this = $(this);
							if (Number($this.text()) < 14) {
								$this.addClass('disabled');
							}
						}
					);
					var d = this.endDate.getDate();
					$('.dp-calendar td.current-month', this.context).each(
						function()
						{
							var $this = $(this);
							if (Number($this.text()) > d) {
								$this.addClass('disabled');
							}
						}
					);
				} else {
					$('.dp-nav-next-year', this.context).removeClass('disabled');
					$('.dp-nav-next-month', this.context).removeClass('disabled');
					var d = this.endDate.getDate();
					if (d < 13) {
						// check if the endDate is next month as we might need to add some disabled classes...
						var ed = new Date(this.endDate.getTime());
						ed.addMonths(-1);
						if (this.displayedYear == ed.getFullYear() && this.displayedMonth == ed.getMonth()) {
							$('.dp-calendar td.other-month', this.context).each(
								function()
								{
									var $this = $(this);
									var cellDay = Number($this.text());
									if (cellDay < 13 && cellDay > d) {
										$this.addClass('disabled');
									}
								}
							);
						}
					}
				}
				this._applyRenderCallbacks();
			},
			_closeCalendar : function(programatic, ele)
			{
				if (!ele || ele == this.ele)
				{
					$(document).unbind('mousedown.datepicker');
					$(document).unbind('keydown.datepicker');
					this._clearCalendar();
					$('#dp-popup a').unbind();
					$('#dp-popup').empty().remove();
					if (!programatic) {
						$(this.ele).trigger('dpClosed', [this.getSelected()]);
					}
				}
			},
			// empties the current dp-calendar div and makes sure that all events are unbound
			// and expandos removed to avoid memory leaks...
			_clearCalendar : function()
			{
				// TODO.
				$('.dp-calendar td', this.context).unbind();
				$('.dp-calendar', this.context).empty();
			}
		}
	);
	
	// static constants
	$.dpConst = {
		SHOW_HEADER_NONE	:	0,
		SHOW_HEADER_SHORT	:	1,
		SHOW_HEADER_LONG	:	2,
		POS_TOP				:	0,
		POS_BOTTOM			:	1,
		POS_LEFT			:	0,
		POS_RIGHT			:	1,
		DP_INTERNAL_FOCUS	:	'dpInternalFocusTrigger'
	};
	// localisable text
	$.dpText = {
		TEXT_PREV_YEAR		:	'Previous year',
		TEXT_PREV_MONTH		:	'Previous month',
		TEXT_NEXT_YEAR		:	'Next year',
		TEXT_NEXT_MONTH		:	'Next month',
		TEXT_CLOSE			:	'Close',
		TEXT_CHOOSE_DATE	:	'Choose date',
		HEADER_FORMAT		:	'mmmm yyyy'
	};
	// version
	$.dpVersion = '$Id$';

	$.fn.datePicker.defaults = {
		month				: undefined,
		year				: undefined,
		showHeader			: $.dpConst.SHOW_HEADER_SHORT,
		startDate			: undefined,
		endDate				: undefined,
		inline				: false,
		renderCallback		: null,
		createButton		: true,
		showYearNavigation	: true,
		closeOnSelect		: true,
		displayClose		: false,
		selectMultiple		: false,
		numSelectable		: Number.MAX_VALUE,
		clickInput			: false,
		rememberViewedMonth	: true,
		selectWeek			: false,
		verticalPosition	: $.dpConst.POS_TOP,
		horizontalPosition	: $.dpConst.POS_LEFT,
		verticalOffset		: 0,
		horizontalOffset	: 0,
		hoverClass			: 'dp-hover',
		autoFocusNextInput  : false
	};

	function _getController(ele)
	{
		if (ele._dpId) return $.event._dpCache[ele._dpId];
		return false;
	};
	
	// make it so that no error is thrown if bgIframe plugin isn't included (allows you to use conditional
	// comments to only include bgIframe where it is needed in IE without breaking this plugin).
	if ($.fn.bgIframe == undefined) {
		$.fn.bgIframe = function() {return this; };
	};


	// clean-up
	$(window)
		.bind('unload', function() {
			var els = $.event._dpCache || [];
			for (var i in els) {
				$(els[i].ele)._dpDestroy();
			}
		});
		
	
})(jQuery);

// file: src/lib/oneapi.js
if(typeof(window['FM']) == 'undefined') {
// file: src/lib/fm/fm.js
if(typeof(FM) == 'undefined') {
    /**
    * @namespace Basic SDK namespace
    */
    FM = function() {};    
}


// propertyes
FM.version = '0.1';

// static methods
FM.isset = function(obj) {
    return (typeof(obj) != 'undefined');
}


FM.isString = function(obj){
    return (typeof obj == 'string' && obj !== null);
}

FM.isFunction = function (obj){
    return (typeof obj == 'function'  && obj !== null);
}

FM.isArray = function(obj) {
    if(!FM.isset(obj) || !obj) return false;
    if (obj.constructor.toString().indexOf("Array") == -1)
        return false;
    else
        return FM.isset(obj.length);
}

FM.isObject = function(obj) {
    return (typeof obj == 'object' && obj !== null);
}

FM.isEqual = function(v1,v2,maxlvl, _l) {
    maxlvl = FM.isset(maxlvl) ? maxlvl : 9;
    _l = isset(_l) ? _l : -1;
    _l++;
    if(_l > maxlvl) return true;
    
    if(FM.isset(v1) && FM.isset(v2)) {
        var eq=true;
        
        if(FM.isObject(v1)) {
            if(!FM.isObject(v2)) return false;

            FM.forEach(v2, function(name,value){                
                if(!FM.isset(v1[name])) {
                    eq = false;
                }
                return(eq);
            });            

            if(eq) FM.forEach(v1, function(name,value){
                eq = FM.isEqual(value,v2[name],maxlvl, _l);
                return eq;
            });            
            return eq;
            
            
        } else if(FM.isArray(v1)) {
            if(!FM.isArray(v2)) return false;
            if(v1.length != v2.length) return false;
                
            for(var i=0; i < v1.length; i++) {
                if(!FM.isEqual(v1[i],v2[i],maxlvl, _l)) return false;
            }
            
            return true;
        }    
    }
    
    return(v1 == v2);
}

FM.isInstanceOf = function(object, constructorFunction) {
    while(object != null) {
        if (object == constructorFunction.prototype){
            return true;
        }
        object = object.__proto__;
    }
    return false;
}

FM.sizeOf = function(o) {
    if(!FM.isset(o) || o == null) return(-1);
    var i=0;
    for(var id in o) {
        i++;
    }
    return(i);
}


FM.applyTemplate = function(attrs,template,escapeValues,encodeValues,prefix) {
    var templ = FM.isset(template) && template ? template : "";
    var pref = FM.isset(prefix) && prefix ? "" + prefix + "." : "";

    var val;
    var me = this;

    // ako imas dmobject
    if(attrs) {
        FM.forEach(attrs,function(name,value) {
            if(!FM.isset(value) || !value) value = '';
            if(!FM.isFunction(value) && !FM.isObject(value) && !FM.isArray(value)) {                
                if(FM.isset(encodeValues) && encodeValues == true) {
                    val = FM.urlEncode(value.toString());
                } else {
                    val = value;
                }
                if(FM.isset(escapeValues) && escapeValues != false) {
                    val = FM.escapeStr(val);
                } 
                
                templ = templ.replace(new RegExp("\\[\\:" + pref + name + "\\]","g"),val);
            } else if((FM.isObject(value) || FM.isArray(value)) && (pref.split(".").length - 1 < 2)) {
                templ = FM.applyTemplate(value,templ,escapeValues,encodeValues,pref + name);                
            }
            return true;
        });
    }

    // kraj
    return(templ);
}       

FM.stringPtrToObject = function(objptr,lm,app) {
    var akeys = objptr.split(".");
    if(akeys.length < 1) return null;

    var parent = akeys[0] == 'APP' ? app : (
        akeys[0] == 'LM' ? lm : (
            akeys[0] == '' ? window : FM
            )
        );
    var startIndex = 0;
    if(akeys[0] == 'APP' || akeys[0] == 'LM' || akeys[0] == '') {
        startIndex = 1;
    }

    for(var i = startIndex; i < akeys.length; i++) {
        if(!FM.isset(parent[akeys[i]])) return null;
        parent = parent[akeys[i]];
    }

    return parent;
}

FM.generateNewID = function() {
    return '_' + new Date().getTime() + "_" + Math.floor(Math.random()*1000000);
}        

FM._super_stack = function(me,method,on) {
    //var s = FM.getStackTrace().slice(3,4);
    var mStack = FM.getAttr(me,'_parent_call_stack', []);  
  
    if(on) {
        if(mStack.length == 0 || mStack[mStack.length-1].m != method ) {
            mStack[mStack.length] = {
                o: me, 
                m: method
            };

        } else {
            mStack[mStack.length] = {
                o: mStack[mStack.length-1].o._parent, 
                m: method
            }
        }
    } else {
        mStack = Array.prototype.slice.call(mStack, 0,mStack.length -1);        
    }

    me._parent_call_stack = mStack;
    return mStack;
}

FM._super = function() {
    var me = arguments[0]
    var callArgs = arguments[1];
    var method = callArgs[0];
    
    var mStack = FM._super_stack(me,method,true);
    try {
        // nadji klasu od koje polazis
        var fnThis = mStack[mStack.length-1].o;
        var retc = fnThis._parent[method].apply(me, Array.prototype.slice.call(callArgs, 1));
        
        // makni stack
        FM._super_stack(me,method,false);
        return retc;
    } catch(e) {
        // makni stack
        FM._super_stack(me,method,false);
        return undefined;
    }
}

FM.loadScript = function(url,cbfn) {
    var script = document.createElement("script")
    script.type = "text/javascript";
 
    if (script.readyState) { //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                cbfn();
            }
        };
    } else { //Others
        script.onload = function () {
            cbfn();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
 
FM.extend = function(oDest,oSrc,isclass) {
    isclass = FM.isset(isclass) && isclass;        
    oDest = oDest ? oDest : {};
    oSrc = oSrc ? oSrc : {};
    
    for (var property in oSrc) {
        oDest[property] = oSrc[property];
    }    

    if(FM.isset(isclass) && isclass == true) { 
        oDest._super = function() {
            return FM._super(this,arguments);
        }
    }

    return oDest;
}

FM.extendClass = function(oDest,oSrc) {        
    if(oSrc) {
        for (var property in oSrc.prototype) {
            oDest.prototype[property] = oSrc.prototype[property];
        }    
        oDest.prototype._parent = oSrc.prototype;
    } else {
        oDest.prototype._parent = null;
    }
    
    oDest.prototype._super = function() {
        return FM._super(this,arguments);
    }
    
    return oDest;
}


/**
* Clone object methods and propertyes. This function is not recursive
* @static
* @function 
* @returns {object} Returns copy of object
*/
FM.cloneObject = function(obj) {
    if(!FM.isset(obj) || !FM.isObject(obj)) return obj;    
    return FM.extend({},obj);
}



FM.isAttr = function(options,key) {
    if(!FM.isset(options) || !options || !FM.isset(key)) return false;

    var akeys = key.split(".");
    var ar = options;
    var val = null;
    for(var i = 0; i < akeys.length; i++) {
        var k = akeys[i].toString();
        if(!FM.isObject(ar) || !FM.isset(ar[k])) return false;
        ar = ar[k];
    }
    return true;
}

FM.getAttr = function(options,key,defv) {
    if(!options) return options;

    if(FM.isset(key)) {
        var akeys = key.split(".");
        var ar = options;
        var val = null;
        for(var i = 0; i < akeys.length; i++) {
            var k = akeys[i].toString();
            if(
                (!FM.isObject(ar) && !FM.isFunction(ar)) || !FM.isset(ar[k]) || ar[k] == null || (FM.isString(ar[k]) && ar[k] == '')
                ) {
                return(FM.isset(defv) ? defv : '');
            }
            ar = ar[k];
            val = ar;
        }

        return val == null ? (FM.isset(defv) ? defv : '') : val;
    } else {
        return FM.cloneObject(options);
    }
}

/**
* Set attribute of object
* @static
* @function 
* @param {object} options Object with attributes
* @param {string} undoList Undo list 
* @param {string} key Attribute name
* @param {string} val Value of attribute
* @returns {boolean} <i>true</i> if value of attribute is changed, otherwise <i>false</i>
*/
FM.setAttr = function(options,undoList,key,val) {
    var i,k,aname;
    var dirty = false;

    if(!options) return dirty;
    
    if(!FM.isString(key)) {
        for(k in val) {
            if(FM.isFunction(val[k]) || !key || FM.isset(options[k])) dirty = FM.setAttr(options,undoList,k,val[k]);
        }
        return dirty;
    }

    var akeys = key.split(".");
    var ar = options;    

    for(i = 0; i < akeys.length-1; i++) {
        k = akeys[i].toString();
        if(
            !FM.isObject(ar) || !FM.isset(ar[k]) || ar[k] == null || (FM.isString(ar[k]) && ar[k] == '')
            ) {
            return dirty;
        }
        ar = ar[k];
    }
    aname = akeys[akeys.length-1].toString();
    if(!FM.isObject(ar)) return dirty;

    if(FM.isset(ar[aname]) && ar[aname] == val) return dirty;
    if(undoList && FM.isset(options[akeys[0].toString()]))  {
        undoList[akeys[0].toString()] = options[akeys[0].toString()];
    }
    ar[aname] = val;
    dirty = true;
    return dirty;
}

FM.resolveAttrValue = function(options,attrName,def,callArgs) {
    var v = FM.getAttr(options,attrName,def);
    
    // if attr is function call it and return result    
    if(FM.isFunction(v)) {
        return(v(callArgs));
    }
    
    // if attr is string try to eval object
    if(FM.isString(v)) {
        var ptr = FM.stringPtrToObject(v);
        // if attr is evaluated to function
        if(FM.isFunction(ptr)) {
            return(ptr(callArgs));
        }
        if(ptr) {
            v= ptr;
        }
    }
    
    return v;
}

/**
* For each element in <i>ar</i> call function <i>doFn(id,elm)</i> until end of list or <i>false</i> return value
* @static
* @function 
* @param {object} [ar={}] 
* @param {function} [doFn={}]
* 
*/
FM.forEach = function(ar,doFn) {
    ar = FM.isset(ar) ? ar : {};
    for(var aname in ar) {
        if(!doFn(aname,ar[aname])) return(aname);
    }
    return null;
}

FM.removeArrayElement = function(arr,index) {
    var newarr = [];

    for(var ai in arr) {
        if(ai != index) newarr.push(arr[ai]);
    }

    return newarr;
}

FM.serialize = function(obj,def) {
    def = FM.isset(def) ? def : '';
    if(!FM.isset(obj) || !FM.obj) return def;

    try {
        return FM.isFunction(obj.serialize) ? obj.serialize() : JSON.stringify(obj);
    } catch(e) {        
        console.log('ERROR  serialize object!');
        var oar = FM.logObjectMsgToArray(obj);
        for(var i =0; i < oar.length; i++) console.log(oar[i]);        
    }
    return def;
}

FM.unserialize = function(str,def) {
    def = FM.isset(def) ? def : null;
    if(!FM.isset(str) || !str) return def;

    try {
        return JSON.parse(str);
    } catch(e) {
        console.log('ERROR  unserialize string ! [' +  str + ']');
    }
    return def;
}

FM.deleteCookie = function(name,domain) {
    FM.saveCookie(name,"",0,domain);
//document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
}

FM.saveCookie = function(name,value,expiredays,domain) {
    var daysahead, expires = null;

    if(FM.isset(expiredays)) {
        daysahead = parseInt(expiredays);    
        if(daysahead <= 0) daysahead=3650; // 10 godina = zauvijek
    } else {
        daysahead=3650; // 10 godina = zauvijek
    }   
    expires = new Date();
    expires.setDate(expires.getDate() + daysahead);

    if(!FM.isset(value) || value == null) value = {};

    document.cookie =
    name + "=" + 
    escape(FM.isString(value) ? value : FM.arrayToUrl(value)) + 
    (FM.isset(domain) && domain ?  ";domain=" + domain : "") +
    "; path=/" +
    ((expires == null) ? "" : "; expires=" + expires.toGMTString())
    ;

    return document.cookie;
}


FM.loadCookie = function(name,asstring) {
    var dc = document.cookie;
    var cname = name + "=";
    var cbegin,cend,retstr="";

    asstring = FM.isset(asstring) ? asstring == true : false;

    if (dc.length > 0) {
        cbegin = dc.indexOf(cname);
        if (cbegin != -1) {
            cbegin += cname.length;
            cend = dc.indexOf(";", cbegin);
            if (cend == -1) cend = dc.length;
            retstr = unescape(dc.substring(cbegin, cend));            
        }
    }

    return asstring ? retstr :  FM.urlToArray(retstr);
}

// -- URL ------------------------------------------------------------------
FM.escapeStr = function(str) {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#039;");
    return str;
}

FM.unescapeStr = function(str) {
    str = str.replace(/&amp;/g, "&");
    str = str.replace(/&gt;/g, ">");
    str = str.replace(/&lt;/g, "<");
    str = str.replace(/&quot;/g, "\"");
    str = str.replace(/&#039;/g, "'");
    return str;
}

FM.urlEncode = function(s) {
    return encodeURIComponent(s).replace( /\%20/g, '+' ).replace( /!/g, '%21' ).replace( /'/g, '%27' ).replace( /\(/g, '%28' ).replace( /\)/g, '%29' ).replace( /\*/g, '%2A' ).replace( /\~/g, '%7E');
}

FM.urlDecode = function(s) {
    return decodeURIComponent(s.replace( /\+/g, '%20' ).replace( /\%21/g, '!' ).replace( /\%27/g, "'" ).replace( /\%28/g, '(' ).replace( /\%29/g, ')' ).replace( /\%2A/g, '*' ).replace( /\%7E/g, '~' ) );
}

FM.arrayToUrl = function(params) {
    var ret = "";
    var first = true;
    for (var vname in params) {
        if(first != true) ret = ret + '&';
        ret = ret + vname + '=' + FM.urlEncode(params[vname]);
        first = false;
    }

    return ret;
}

FM.urlToArray = function(url) {
    //location.queryString = {};
    var arr = {};

    var pairs = url.split( "&" );

    for (var i=0; i < pairs.length; i++ )  {
        var keyval = pairs[ i ].split( "=" );
        arr[ keyval[0] ] = FM.isset(keyval[1]) ? FM.urlDecode(keyval[1]) : '';
    }

    return arr;
}

FM.isURL = function(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
}    

// -- STRING ---------------------------------------------------------------
FM.trim = function(s) {
    if(!FM.isset(s) || s == null) return('');
    var ss = '' + s;
    return ss.replace(/^\s+|\s+$/g,"");
}

FM.ltrim = function(s) {
    if(!FM.isset(s) || s == null) return('');
    var ss = '' + s;
    return ss.replace(/^\s+/,"");
}

FM.rtrim = function(s) {
    if(!FM.isset(s) || s == null) return('');
    var ss = '' + s;
    return ss.replace(/\s+$/,"");
}


FM.startsWith = function(instr,fstr) {
    return (instr ? instr.match("^"+fstr)==fstr : false);
}

FM.endsWith = function(instr,fstr) {
    return (instr ? instr.match(fstr+"$")==fstr : false);
}

FM.utf8_encode = function(s) {
    return unescape( encodeURIComponent( s ) );
}

FM.utf8_decode = function(s) {
    return decodeURIComponent(escape(s));
}


FM.addslashes = function(str) {
    str=str.replace(/\\/g,'\\\\');
    str=str.replace(/\'/g,'\\\'');
    str=str.replace(/\"/g,'\\"');
    str=str.replace(/\0/g,'\\0');
    return str;
}

FM.stripslashes = function(str) {
    str=str.replace(/\\'/g,'\'');
    str=str.replace(/\\"/g,'"');
    str=str.replace(/\\0/g,'\0');
    str=str.replace(/\\\\/g,'\\');
    return str;
}

FM.tokenize = function(argsstr) {
    var i,instr;

    // napravi listu tokena
    var elm_array = [];
    var st_array = argsstr.split('"');

    instr = false;
    for( i=0; i < st_array.length; i++) {
        // ako nisi u stringu
        if(!instr) {
            var e = st_array[i].split(/[\s,]+/);
            for(var j=0; j < e.length;j++) {
                if(e[j] != "") elm_array.push(e[j]);
            }
        } else {
            elm_array.push(st_array[i]);
        }

        instr = !instr;
    }

    return elm_array;
}    

// -- MD5 ------------------------------------------------------------------
FM.md5 = function(str) {
    // Calculate the md5 hash of a string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/md5
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // + namespaced by: Michael White (http://getsprink.com)
    // +    tweaked by: Jack
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: utf8_encode
    // *     example 1: md5('Kevin van Zonneveld');
    // *     returns 1: '6e658d4bfcb59cc13f96c14450ac40b9'
    var xl;

    var rotateLeft = function (lValue, iShiftBits) {
        return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
    };

    var addUnsigned = function (lX,lY) {
        var lX4,lY4,lX8,lY8,lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    };

    var _F = function (x,y,z) {
        return (x & y) | ((~x) & z);
    };
    var _G = function (x,y,z) {
        return (x & z) | (y & (~z));
    };
    var _H = function (x,y,z) {
        return (x ^ y ^ z);
    };
    var _I = function (x,y,z) {
        return (y ^ (x | (~z)));
    };

    var _FF = function (a,b,c,d,x,s,ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var _GG = function (a,b,c,d,x,s,ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var _HH = function (a,b,c,d,x,s,ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var _II = function (a,b,c,d,x,s,ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var convertToWordArray = function (str) {
        var lWordCount;
        var lMessageLength = str.length;
        var lNumberOfWords_temp1=lMessageLength + 8;
        var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
        var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
        var lWordArray=new Array(lNumberOfWords-1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while ( lByteCount < lMessageLength ) {
            lWordCount = (lByteCount-(lByteCount % 4))/4;
            lBytePosition = (lByteCount % 4)*8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount)<<lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount-(lByteCount % 4))/4;
        lBytePosition = (lByteCount % 4)*8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
        lWordArray[lNumberOfWords-2] = lMessageLength<<3;
        lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
        return lWordArray;
    };

    var wordToHex = function (lValue) {
        var wordToHexValue="",wordToHexValue_temp="",lByte,lCount;
        for (lCount = 0;lCount<=3;lCount++) {
            lByte = (lValue>>>(lCount*8)) & 255;
            wordToHexValue_temp = "0" + lByte.toString(16);
            wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length-2,2);
        }
        return wordToHexValue;
    };

    var x={},
    k,AA,BB,CC,DD,a,b,c,d,
    S11=7, S12=12, S13=17, S14=22,
    S21=5, S22=9 , S23=14, S24=20,
    S31=4, S32=11, S33=16, S34=23,
    S41=6, S42=10, S43=15, S44=21;

    str = this.utf8_encode(str);
    x = convertToWordArray(str);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    xl = x.length;
    for (k=0;k<xl;k+=16) {
        AA=a;
        BB=b;
        CC=c;
        DD=d;
        a=_FF(a,b,c,d,x[k+0], S11,0xD76AA478);
        d=_FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
        c=_FF(c,d,a,b,x[k+2], S13,0x242070DB);
        b=_FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
        a=_FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
        d=_FF(d,a,b,c,x[k+5], S12,0x4787C62A);
        c=_FF(c,d,a,b,x[k+6], S13,0xA8304613);
        b=_FF(b,c,d,a,x[k+7], S14,0xFD469501);
        a=_FF(a,b,c,d,x[k+8], S11,0x698098D8);
        d=_FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
        c=_FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
        b=_FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
        a=_FF(a,b,c,d,x[k+12],S11,0x6B901122);
        d=_FF(d,a,b,c,x[k+13],S12,0xFD987193);
        c=_FF(c,d,a,b,x[k+14],S13,0xA679438E);
        b=_FF(b,c,d,a,x[k+15],S14,0x49B40821);
        a=_GG(a,b,c,d,x[k+1], S21,0xF61E2562);
        d=_GG(d,a,b,c,x[k+6], S22,0xC040B340);
        c=_GG(c,d,a,b,x[k+11],S23,0x265E5A51);
        b=_GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
        a=_GG(a,b,c,d,x[k+5], S21,0xD62F105D);
        d=_GG(d,a,b,c,x[k+10],S22,0x2441453);
        c=_GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
        b=_GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
        a=_GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
        d=_GG(d,a,b,c,x[k+14],S22,0xC33707D6);
        c=_GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
        b=_GG(b,c,d,a,x[k+8], S24,0x455A14ED);
        a=_GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
        d=_GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
        c=_GG(c,d,a,b,x[k+7], S23,0x676F02D9);
        b=_GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
        a=_HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
        d=_HH(d,a,b,c,x[k+8], S32,0x8771F681);
        c=_HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
        b=_HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
        a=_HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
        d=_HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
        c=_HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
        b=_HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
        a=_HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
        d=_HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
        c=_HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
        b=_HH(b,c,d,a,x[k+6], S34,0x4881D05);
        a=_HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
        d=_HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
        c=_HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
        b=_HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
        a=_II(a,b,c,d,x[k+0], S41,0xF4292244);
        d=_II(d,a,b,c,x[k+7], S42,0x432AFF97);
        c=_II(c,d,a,b,x[k+14],S43,0xAB9423A7);
        b=_II(b,c,d,a,x[k+5], S44,0xFC93A039);
        a=_II(a,b,c,d,x[k+12],S41,0x655B59C3);
        d=_II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
        c=_II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
        b=_II(b,c,d,a,x[k+1], S44,0x85845DD1);
        a=_II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
        d=_II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
        c=_II(c,d,a,b,x[k+6], S43,0xA3014314);
        b=_II(b,c,d,a,x[k+13],S44,0x4E0811A1);
        a=_II(a,b,c,d,x[k+4], S41,0xF7537E82);
        d=_II(d,a,b,c,x[k+11],S42,0xBD3AF235);
        c=_II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
        b=_II(b,c,d,a,x[k+9], S44,0xEB86D391);
        a=addUnsigned(a,AA);
        b=addUnsigned(b,BB);
        c=addUnsigned(c,CC);
        d=addUnsigned(d,DD);
    }

    var temp = wordToHex(a)+wordToHex(b)+wordToHex(c)+wordToHex(d);

    return temp.toLowerCase();
}    

// -- base64 ---------------------------------------------------------------
FM.base64_decode = function(input) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }
    } while (i < input.length);

    return output;
}


FM.base64_encode = function(input) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    do {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) +
        keyStr.charAt(enc3) + keyStr.charAt(enc4);
    } while (i < input.length);

    return output;
}

// -- log ----------------------------------------------------------------------
FM.logLevels = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
    fatal: 99
}

FM.logLevelNames = {
    0: 'DEBUG',
    1: 'INFO',
    2: 'WARN',
    3: 'ERROR',
    99: 'FATAL'
}

// subclass/min loglevel def. info
FM.logDefaultLevel = FM.logLevels.warn;
FM.logConfig = {
    ut: FM.logLevels.warn,
    ob: FM.logLevels.warn,
    dm: FM.logLevels.warn,        
    lm: FM.logLevels.warn,
    ui: FM.logLevels.warn,
    app: FM.logLevels.warn,
    tst: FM.logLevels.info
};


FM.setDefaultLogLevel = function(level) {
    FM.logDefaultLevel = level;
}

FM.getDefaultLogLevel = function(pkg) {
    return FM.logDefaultLevel;
}

FM.setLogLevel = function(pkg,level) {
    FM.logConfig[pkg] = level;
}

FM.getLogLevel = function(pkg) {
    return FM.isset(FM.logConfig[pkg]) ? FM.logConfig[pkg] : FM.logDefaultLevel;
}

FM.getPackageLogLevel = function(oObj) {
    var pname = oObj && FM.isset(oObj.getPackageName) ? oObj.getPackageName() : null;
    return (pname && FM.isset(FM.logConfig[pname])) ? FM.logConfig[pname] : FM.logDefaultLevel;    
}

FM.getLogId = function(oObj) {
    return oObj && FM.isset(oObj.getClassName) ? oObj.getClassName() : '<anonymous>';
}

FM.getLogTypeName = function(level) {
    return FM.isset(FM.logLevelNames[level]) ? FM.logLevelNames[level] : FM.logLevelNames[FM.logLevels.info];
}

FM.setPackageLogLevel = function(pkg,level) {
    FM.logConfig[pkg] = level;    
}

FM.logObjectMsgToArray = function(obj) {
    if(!FM.isset(obj) || !obj) return [];
    if(FM.isset(obj.length)) return obj;
    if(FM.isset(obj.toLogArray)) return(obj.toLogArray());
    var ar = ['('];
    for(var id in obj) {
        ar.push(
            '  ' + id + ":" + (obj[id] === null ? 'null' : (
                FM.isset(obj[id].getFullClassName) ?  obj[id].getFullClassName() :
                (
                    FM.isFunction(obj[id]) ? "function() {...}" :
                    (
                        FM.isArray(obj[id]) ? "[...]" : 
                        (
                            FM.isObject(obj[id]) ? "{...}" : 
                            (
                                obj[id]
                                )
                            )
                        )
                    )
                ))
            );
    }
    ar.push(")");
    return ar;
}


FM.getStackTraceStr = function(err) {
    err = FM.isset(err) ? err : new Error();

    return err.stack ? err.stack : "";        
}

FM.getStackTrace = function(err) {    
    var strace = FM.getStackTraceStr(err);    

    return strace.split("\n").slice(3); //strace.length > 2 ? strace.slice(2) : [];

}

FM.getCallerInfo = function(shift) {    
    var strace = FM.getStackTrace();
    var pos1,pos2,name,file;
    var lin = "<anonymous>";

    shift = FM.isset(shift) ? shift : 0;
    // mi smo na 1
    if(strace.length < 2 + shift) return lin;

    lin = strace[1+shift];
    pos1 = lin.indexOf("at ");
    if(pos1 < 0) return lin;

    lin = lin.substr(pos1+3);    
    pos1 = lin.indexOf("(");
    pos2 = lin.indexOf(")");
    if(pos1 > -1 && pos2 > -1) {
        name = lin.substr(0,pos1);
        file = lin.substr(pos1+1,pos2-pos1-1);
        pos1 = file.lastIndexOf("/");
        if(pos1 > -1) {
            file = file.substring(pos1+1);
        }
        lin = name + "("  + file + ")";
    }
    return(lin);
}


FM.log = function(oObj,msg,level,callerinfo) {
    var minlevel = 
    oObj&& FM.isset(oObj.objectLogLevel) && oObj.objectLogLevel != null ? 
    oObj.objectLogLevel : FM.getPackageLogLevel(oObj)
    ;
    if(!FM.isset(level)) level = FM.logLevels.info;
    if(level < minlevel) return false;
    if(FM.isset(callerinfo) && callerinfo.indexOf('.') < 0) {
        callerinfo = FM.getLogId(oObj) + '.' + callerinfo;
    } else if(!FM.isset(callerinfo)) {
        callerinfo = FM.getLogId(oObj) +
        '.' +
        (FM.isset(FM.log.caller.name) && FM.log.caller.name != '' ? FM.log.caller.name : '<unknown>');        
    }

    // formiraj header    
    console.log(
        (FM.isset(callerinfo) ? callerinfo : "Unknown") +
        " [" + FM.getLogTypeName(level) + "]:" + 
        (msg && !FM.isString(msg) ? '' : msg)
        );
    /*
    var amsg = FM.logObjectMsgToArray(msg);
    if(FM.isArray(amsg)) {
        for(var i=0; i < amsg.length; i++) {
            console.log(' >' + amsg[i]);
        }
    }*/
    if(FM.isObject(msg) || FM.isArray(msg)) {
        console.dir(msg);
    }
    return true;
}

FM._T = function() {
    if(arguments.length < 1) return('');

    if(false /*T_messages_loaded */) {
        // nadji hash i prevedeni string
        var hash = md5(arguments[0]);
        var str;

        if(isset(T_messages[hash])) {
            str = T_messages[hash];
        } else {
            str = arguments[0];
            if(T_missing_messages == null) T_missing_messages = {};
            T_missing_messages[hash] = str;
        }
    } else {
        str = arguments[0];
    }

    // ubaci podatke
    for(var i = 1; i < arguments.length; i++)  {
        str = str.replace("[:" + i + "]", arguments[i]);
    }

    // kraj
    return(str);
}

// -- sdk namespace - dates ----------------------------------------------------
if(typeof(FM) == 'undefined') {
    FM = function() {};
}

FM.dateTimeDivider = ' ';

FM.dateToString = function(dat,utc) {
    var sy,sm,sd,sh,sn,ss;
    var d = dat;

    if(!FM.isset(d) || d == null || d == '') return('');

    if(utc) {
        sy = d.getUTCFullYear();
        sm = (d.getUTCMonth() + 1);
        sd = d.getUTCDate();
        sh = d.getUTCHours();
        sn = d.getUTCMinutes();
        ss = d.getUTCSeconds();
    } else {
        sy = d.getFullYear();
        sm = (d.getMonth() + 1);
        sd = d.getDate();
        sh = d.getHours();
        sn = d.getMinutes();
        ss = d.getSeconds();
    ;
    }

    // formiraj string
    return(
        sy +
        (sm < 9 ? '-0' + sm : '-' + sm) +
        (sd < 9 ? '-0' + sd : '-' + sd) +
        (sh < 9 ? ' 0' + sh : FM.dateTimeDivider + sh) +
        (sn < 9 ? ':0' + sn : ':' + sn) +
        (ss < 9 ? ':0' + ss : ':' + ss)
        );
}

FM.parseDateString = function(sdate,utc) { // '2010-05-26 05:56:00', true/false
    var fpos = 0,pos;
    var sy = '1970';
    var sm = '01';
    var sd = '01';
    var sh = '00';
    var sn = '00';
    var ss = '00';
    var d;

    if(!FM.isset(sdate) || sdate == null || sdate == '') return(sdate);
    if(sdate == FM.endOfHistory() || sdate == FM.startOfHistory()) return('');

    // godina
    pos = sdate.indexOf("-",fpos);
    if(pos < 0) {
        sy = sdate.substr(fpos);
        fpos = -1;
    } else {
        sy = sdate.substr(fpos, pos - fpos);
        fpos = pos + 1;
    }

    // mjesec
    if(fpos > -1) {
        pos = sdate.indexOf("-",fpos);
        if(pos < 0) {
            sm = sdate.substr(fpos);
            fpos = -1;
        } else {
            sm = sdate.substr(fpos, pos - fpos);
            fpos = pos + 1;
        }
    }
    if(sm.substr(0,1) == '0') {
        sm = sm.substr(1);
    }

    // dan
    if(fpos > -1) {
        pos = sdate.indexOf(FM.dateTimeDivider,fpos);
        if(pos < 0) {
            sd = sdate.substr(fpos);
            fpos = -1;
        } else {
            sd = sdate.substr(fpos, pos - fpos);
            fpos = pos + 1;
        }
    }
    if(sd.substr(0,1) == '0') {
        sd = sd.substr(1);
    }

    // sat
    if(fpos > -1) {
        pos = sdate.indexOf(":",fpos);
        if(pos < 0) {
            sh = sdate.substr(fpos);
            fpos = -1;
        } else {
            sh = sdate.substr(fpos, pos - fpos);
            fpos = pos + 1;
        }
    }
    if(sh.substr(0,1) == '0') {
        sh = sh.substr(1);
    }

    // minute
    if(fpos > -1) {
        pos = sdate.indexOf(":",fpos);
        if(pos < 0) {
            sn = sdate.substr(fpos);
            fpos = -1;
        } else {
            sn = sdate.substr(fpos, pos - fpos);
            fpos = pos + 1;
        }
    }
    if(sn.substr(0,1) == '0') {
        sn = sn.substr(1);
    }


    // sekunde
    if(fpos > -1) {
        pos = sdate.indexOf(":",fpos);
        if(pos < 0) {
            ss = sdate.substr(fpos);
            fpos = -1;
        } else {
            ss = sdate.substr(fpos, pos - fpos);
            fpos = pos + 1;
        }
    }
    if(ss.substr(0,1) == '0') ss = ss.substr(1);

    if(utc) {
        d = new Date(
            Date.UTC(
                parseInt(sy), parseInt(sm)-1, parseInt(sd),
                parseInt(sh), parseInt(sn), parseInt(ss), 0
                )
            );
    } else {
        d = new Date();
        d.setFullYear(parseInt(sy), parseInt(sm)-1, parseInt(sd));
        d.setHours(parseInt(sh), parseInt(sn), parseInt(ss), 0);
    }

    // kraj
    return(d);
}

FM.srv2locDate = function(srvstr) {
    return(FM.dateToString(FM.parseDateString(srvstr ,true),false));
}

FM.loc2srvDate = function(locstr) {
    return(FM.dateToString(FM.parseDateString(locstr ,false),true));
}

FM.locNow = function() {
    return(FM.dateToString(new Date(),false));
}

FM.srvNow = function() {
    return(FM.dateToString(new Date(),true));
}

FM.strTimeBetween = function(d1, d2) {
    if(!FM.isset(d1) || !d1 || d1 == ' ' || !FM.isset(d2) || !d2 || d2 == ' ') return '';

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;
    var ONE_HOUR = 1000 * 60 * 60;
    var ONE_MINUTE = 1000 * 60;
    var ONE_SEC = 1000;

    var dif,ret;

    // Convert both dates to milliseconds
    var date1_ms = d1.getTime();
    var date2_ms = d2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms);

    // ONE_SEC
    dif = Math.round(difference_ms/ONE_SEC);
    
    if (dif < 60) {
        ret = FM._T(date1_ms < date2_ms ? "[:1] seconds ago" : "In [:1] seconds",dif);
    } else { // ONE_MINUTE
        dif = Math.round(difference_ms/ONE_MINUTE);
        if (dif < 60) {
            ret = FM._T(date1_ms < date2_ms ? "[:1] minutes ago" : "In [:1] minutes",dif);
        } else { // ONE_HOUR
            dif = Math.round(difference_ms/ONE_HOUR);
            if (dif < 24) {
                ret = FM._T(date1_ms < date2_ms ? "[:1] hours ago" : "In [:1] hours",dif);
            } else { // ONE_DAY
                dif = Math.round(difference_ms/ONE_DAY);
                
                if (dif == 1) {
                    ret = FM._T(date1_ms < date2_ms ? "Yesterday" : "Tomorow",dif);
                }
                else {
                    ret = FM._T(date1_ms < date2_ms ? "[:1] days ago" : "In [:1] days",dif);    
                }
                
                
            }
        }
    }


    // kraj
    return(ret);
}

FM.dateLocalFormat = function(d) {
    if(!FM.isset(d) || d == null || d == '') return('');

    try {
        var s = d.toLocaleString();
    } catch(err) {
        alert(err)
    };
    var i = s.indexOf("GMT");
    if(i >= 0) s = s.substr(0,i);
    return(s);
}

FM.startOfHistory = function() {
    return '1970-01-01' + FM.dateTimeDivider + '00:00:00';
}

FM.endOfHistory = function() {
    return '2050-01-01' + FM.dateTimeDivider + '00:00:00';
}

FM.timestamp = function(date) {
    return Math.round((FM.isset(date) ? date : new Date()).getTime() / 1000);
}

FM.getArgs = function() {
    return decodeURIComponent(window.location.search.slice(1))
    .split('&')
    .reduce(function _reduce (a,b) {
        b = b.split('=');
        a[b[0]] = b[1];
        return a;
    }, {});    
}


FM.expandToFullSCreen = function(elmid) {
    var elem = document.getElementById(elmid);
    if (elem.requestFullScreen) {
        elem.requestFullScreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullScreen) {
        elem.webkitRequestFullScreen();
    }    
}




// file: src/lib/fm/ob/ob.Object.js
// -- Basic FM class -----------------------------------------------------------
/**
* Basic FM class. Provide listeners, attributes, propertyes, log
* @class FM.Object
* @param {object} attrs list of attribute name and values
* @param {object} [flds] allowed attributes
*/    
FM.Object = function() {
    this._init.apply(this, arguments); // new poziva _init()
}

// ne extenda nista
FM.extendClass(FM.Object,null);

// properties
FM.Object.prototype.objectSubClass = "";
FM.Object.objectLogLevel = null;
FM.Object.prototype.id = null;   
FM.Object.prototype.enabled = true;
FM.Object.prototype.listenersArr = null;
FM.Object.prototype.prop = null;
FM.Object.prototype.undoList = null;
FM.Object.prototype.options = null;
FM.Object.prototype.strictOptions = false;
    
// methods

/**
* Get  FM class name
* @public     
* @function 
* @returns {string} Returns name of the object
*/   
FM.Object.prototype.getClassName = function() {
    var o=this;

    while(o && !FM.isset(o.constructor.className)) {
        o = o.parent? o.parent : null;
    }
    return(o ? o.constructor.className : '');
}

/**
* Get full (package and class name) FM class name
* @public     
* @function 
* @returns {string} Returns package and name of the object
*/   
FM.Object.prototype.getFullClassName = function() {
    var o=this;
    while(o && !FM.isset(o.constructor.fullClassName)) {
        o = o.parent? o.parent : null;
    }
    return(o ? o.constructor.fullClassName : '');
}

/**
* Get FM subclass name
* @public     
* @function 
* @returns {string} Returns subclass of object
*/   
FM.Object.prototype.getSubClassName = function() {
    return this.objectSubClass;
},

/**
* Get object id
* @public     
* @function 
* @returns {string} Returns id of object
*/   
FM.Object.prototype.getID = function() {
    if(this.id == null) this.id = FM.generateNewID();
    return(this.id);
}

/**
* Get object data id 
* @public     
* @function 
* @returns {string} Returns id of object
*/   
FM.Object.prototype.getDataID = function() {    
    return(this.getID());
}


/**
* Add listener
* @public     
* @function 
* @param {FM.Object|object} oListener FM.Object to register as listener or object with event functions
* @param {object} [config] Additional options
*/   
FM.Object.prototype.addListener = function(oListener,config) {

    // definicija listenera
    var lstnrdef = {
        listener: oListener,
        config: FM.isset(config) ? config : {},
        iscallback: !FM.isset(oListener.onEvent)
    };

    // if the listener is not object
    if(!FM.isset(oListener.getID)) {
        var lid = '_CB_' + FM.generateNewID();
        oListener.getID = function() {
            return lid;
        }
    }
    this.listenersArr[oListener.getID()] = lstnrdef;
}

/**
* Remove listener
* @public     
* @function 
* @param {FM.Object|object} oListener 
*/   
FM.Object.prototype.removeListener = function(oListener) {
    if(!FM.isset(oListener)  || !oListener || !FM.isset(oListener.getID)) return false;

    var nlist = {};
    var objId = oListener.getID();
    if(!objId) return false;

    for(var id in this.listenersArr) {
        if(objId != id) nlist[id] = this.listenersArr[id];
    }

    this.listenersArr = nlist;

    return true;
}

/**
* Remove all listeners
* @public     
* @function 
*/   
FM.Object.prototype.removeAllListeners = function() {
    this.listenersArr = {};
    return true;
}


/**
* Event function
* @public     
* @function 
* @param {FM.Object} sender Sender of event
* @param {String} ev Event
* @param {String} data Event data
*/   
FM.Object.prototype.onEvent = function(sender,ev,data,calledlist) {
    if(!this.isEnabled()) return false;

    //  ako imaš event fn
    if(FM.isset(this[ev])) {
        this[ev](sender,data);
        return calledlist;
    }

    // proslijedi dalje ako nemas ev fn
    return this.fireEvent(ev,data,calledlist);
}

/**
* Send event to all listeners
* @public     
* @function 
* @param {String} ev Event
* @param {String} evdata Event data
*/   
FM.Object.prototype.fireEvent = function(ev,evdata,calledlist) {
    var cl = FM.isset(calledlist) ? calledlist : {};

    // obicni listeneri
    for(var id in this.listenersArr) {
        var ldef = this.listenersArr[id];
        if(!FM.isset(cl[id])) {
            cl[id] = "1";
            try {
                if(ldef.iscallback) {
                    if(FM.isFunction(ldef.listener[ev])) {
                        ldef.listener[ev](this,evdata);
                    }
                } else {
                    cl = ldef.listener.onEvent(this,ev,FM.isset(evdata) ? evdata : {},cl);
                }
            } catch(err) {
                console.log("fireEvent error(" + ev + "): " + err);
            }
        }
    }

    // kraj
    return cl;
}

/**
* Test attribute existence
* @public     
* @function 
* @param {string} [key] Attribute name
* @returns {boolean} 
*/   
FM.Object.prototype.isAttr = function(key) {
    return FM.isAttr(this.options,key);
}

/**
* Get attribute value
* @public     
* @function 
* @param {string} [key] Attribute name
* @param {string} [defv] Default value of attribute. Default for default is empty string :)
* @returns {object|string|number} Returns attribute value of <i>key</i> attribute or all attributes in object if <i>key</i> is undefined
*/   
FM.Object.prototype.getAttr = function(key,defv) {
    return FM.getAttr(this.options,key,defv);
}

/**
* Set value of <i>key</i> attribute to <i>val</i> value
* @public
* @function
* @param {string} key Attribute name
* @param {string} val Value of attribute
* @param {boolean} callevent Fire <i>onChange</i> after object update (default is true)
*/
FM.Object.prototype.setAttr = function(key,val,callevent) {
    if(FM.setAttr(this.options,this.undoList,key,val)) {
        this.setProperty('dirty',true);
        this.setProperty('timestamp',new Date().getTime());
        if(FM.isset(callevent) && callevent == true) this.fireEvent("onChange", this);
    }
}

/**
* See <i>FM.Object.getAttr()</i>
* @see FM.Object#getAttr
*/    
FM.Object.prototype.d = function(key,defv) {
    return this.getAttr(key,defv);
}

/**
* See <i>FM.Object.setAttr()</i>
* @see FM.Object#setAttr
*/    
FM.Object.prototype.s = function(key,val,callevent) {
    return this.setAttr(key,val,callevent);
}

/**
* Check if <i>key</i> attribute is changed
* @public
* @function 
* @param {string} key Attribute name
* @returns {boolean} Returns <i>true</i> if attribute is changed 
*/
FM.Object.prototype.isChanged = function(key) {
    if(FM.isset(key)) {
        if(FM.isset(this.undoList[key])) return true;
        return false;
    }
    return this.getProperty('dirty');
}

/**
* Set object <i>changed</i> property 
* @public
* @function 
* @param {boolean} v true or false
* @param {boolean} callevent Fire <i>onChange</i> after object update (default is false)
*/
FM.Object.prototype.setChanged = function(v,callevent) {
    this.setProperty('dirty',v == true);
    if(!this.getProperty('dirty')) this.undoList = {};
    if(FM.isset(callevent) && callevent == true) this.fireEvent("onChange", this);
}

FM.Object.prototype.resolveAttrValue = function(attrName,def,fnargs) {
    return FM.resolveAttrValue(this.options,attrName,def,fnargs);
}

/**
* Return object with all changed attributes
* @public     
* @function 
* @returns {object} Returns with changed attributes
*/
FM.Object.prototype.getChangedAttrList = function() {
    return FM.cloneObject(this.undoList);
}

/**
* For each attribute call function <i>doFn(id,attr)</i> until end of attributes or <i>false</i> return value.    
* @public
* @function 
* @param {function} [doFn={}]
* @return {string} In case of <i>false</i> return value of <i>doFn()</i> call return attribute name otherwise null
*/
FM.Object.prototype.forEachAttr = function(doFn) {
    return FM.forEach(this.options,doFn);
}

/**
* Get property value
* @function 
* @param {string} key Property name
* @param {string} defv Default value of property
* @returns Returns property value
*/    
FM.Object.prototype.getProperty = function(key,defv) {
    return FM.getAttr(this.prop,key,defv);
}

/**
* Set property value
* @static
* @function
* @param {string} key Property name
* @param {string} val Value of property
* @param [boolean] callevent Fire <i>onChange</i> after object update (default is true)
*/
FM.Object.prototype.setProperty = function(key,val,callevent) {
    if(FM.setAttr(this.prop,null,key,val)) {
        if(FM.isset(callevent) && callevent == true) this.fireEvent("onChange", this);
    } else {
        return false;
    }
    return true;
}

FM.Object.prototype.resolvePropertyValue = function(attrName,def,fnargs) {
    return FM.resolveAttrValue(this.prop,attrName,def,fnargs);
}

/**
* For each property call function <i>doFn(id,prop)</i> until end of properties or <i>false</i> return value.    
* @public
* @function 
* @param {function} [doFn={}]
* @return {string} In case of <i>false</i> return value of <i>doFn()</i> call return property name otherwise null
*/
FM.Object.prototype.forEachProperty = function(doFn) {
    return FM.forEach(this.prop,doFn);
}

/**
* Enable object. Object start to process events.
* @public
* @function 
*/
FM.Object.prototype.enable = function() {
    this.enabled = true;
}

/**
* Disable object. Object stop to process events.
* @public
* @function 
*/
FM.Object.prototype.disable = function() {
    this.enabled = false;
}


/**
* Check if object is enabled
* @public
* @function 
* @return {boolean} 
*/
FM.Object.prototype.isEnabled = function() {
    return this.enabled;
}

/**
* Log function to call from this object
* @public
* @function 
* @param {string} msg Log text
* @param {number} level Log level
*/
FM.Object.prototype.log = function(msg,level,callerinfo) {
    //return;
    /*
    if(level >= FM.getPackageLogLevel(this)) {
        if(!FM.isset(callerinfo)) callerinfo = FM.getCallerInfo(1);
        FM.log(this,msg,level,callerinfo);
    }*/
    FM.log(this,msg,level,callerinfo);
}                

/**
* Set log level for this object
* @public
* @function 
* @param {string | number} level Log level
*/
FM.Object.prototype.setLogLevel = function(level) {
    if(FM.isString(level)) {
        if(FM.isset(FM.logLevels[level.toLowerCase()])) {
            this.objectLogLevel = FM.logLevels[level.toLowerCase()];
        }
    } else {
        this.objectLogLevel = level;
    }
}

/**
* Get log level for this object
* 
* @public
* @function 
*/
FM.Object.prototype.getLogLevel = function() {
    return FM.logLevelNames[this.objectLogLevel != null ? this.objectLogLevel : FM.getPackageLogLevel(this)];

}

FM.Object.prototype._init = function(attrs,flds) {
    this.objectSubClass = "Objects";            
    this.id =  null;    
    this.objectLogLevel = null;
    
    this.enabled = true;
    this.listenersArr = {};
    this.undoList = {};
    this.options = {};
    this.strictOptions = false;

    // properties
    this.prop = {
        dirty: false,
        timestamp: new Date().getTime(),
        fetched: true // da li je new loc ili je fetchan
    },        

    this.setAttr(false,FM.isset(flds) ? flds : {},false);
    this.strictOptions = FM.isset(flds) ? true : false;
    if(FM.isset(attrs) && attrs) {
        if(FM.isString(attrs)) attrs = FM.stringPtrToObject(attrs);
        if(FM.isFunction(attrs)) attrs = attrs();        
        this.setAttr(this.strictOptions,attrs,false);
    }
    
    this.setChanged(false,false);
}

FM.Object.prototype.getPackageName = function() {
    var fcname = this.getFullClassName();
    if(fcname == '') {
        console.log("ERROR undefined full class name!");
        console.log(this);                        
    } else {
        fcname = fcname.split('.');
    }

    return (fcname && FM.isset(fcname.length) && fcname.length > 1) ? fcname[0] : null;        
}

// == static ===================================================================
FM.Object.className = "Object";
FM.Object.fullClassName = 'ob.Object';

// file: src/lib/fm/ut/ut.UtAjax.js
/**
* Ajax class. 
*     var example_options = {
        url: 'http://...',
        method: 'GET',
        contentType: 'application/x-www-form-urlencoded',        
        params: [], // or: p1=v1&p2=v2 ...
        headers: {},
        auth: { // basic http auth
            username: '',
            password: ''
        },
        responseFormat: 'JSON',
        validResponseCodes: '200,201'        
    }
* 
* @class FM.UtAjax
* @extends FM.Object
* @param {object} config Options
*/    
FM.UtAjax = function() {    
    var me = this;        
    this._cb_onReadyStateChange = function() {        
        if(me.http.readyState == FM.UtAjax.AJAX_STATE_LOADEND) { // http ok                
            // timeout
            if(me.http.status == 0) {
                return me.fireEvent("onAjaxStateError",new FM.DmGenericError({
                    messageId: "1",
                    text: "Timeout or Access-Control-Allow-Origin is not allowed" 
                }));
            }   

            // deserijaliziraj rezultat ako je JSON
            var responseFormat = me.getAttr('responseFormat','TEXT');
            var responseObject = null;
            if(responseFormat == 'JSON') {
                responseObject = FM.unserialize(me.http.responseText,null);
                // neuspjela deserijalizacija
                if(responseObject == null) {
                    return me.fireEvent("onAjaxStateError",new FM.DmGenericError({
                        messageId: "1",
                        text: me.http.responseText != '' ? "Error: " + me.http.responseText : "Invalid response format"
                    }));
                }
            } else {
                responseObject = me.http.responseText;
            }
                
            // provjeri response status code (samo ako nema nikakvog povratnog teksta
            if(me.http.responseText == '') {
                var respCodesStr = FM.trim(me.getAttr('validResponseCodes',''));            
                var responseCodes = respCodesStr == '' ? [] : me.getAttr('validResponseCodes','').split(",");            
                var i;
                for(i=0;i < FM.sizeOf(responseCodes); i++) {
                    if(FM.trim(responseCodes[i]) == me.http.status) break;
                }
                if(i != 0 && i == FM.sizeOf(responseCodes)) {
                    return me.fireEvent("onAjaxStateError",new FM.DmGenericError({
                        messageId: "1",
                        text: "Invalid response code (found:" + me.http.status + ", expected:" + responseCodes + ")"
                    }));
                }
            }
            
            // ako sam stigsao do tu sve je ok
            return me.fireEvent(
                "onAjaxStateEnd",
                new FM.DmGenericValue({value: responseObject})
            );
        }
    }
   
    // pozovi konstruktor
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(FM.UtAjax,FM.Object); 

// properties
FM.UtAjax.prototype.objectSubClass = "";
FM.UtAjax.prototype.http = null;

// methods
FM.UtAjax.prototype._init = function(config) {            
    this._super("_init",config);
    this.objectSubClass = "UtAjax";

    this.http = null;
}

FM.UtAjax.prototype.send = function(args) {
    var url = this.getAttr('url','');
    var params = this.getAttr('params',{});
    var headers = this.getAttr('headers',{});

    
    var pline = "";
    /*
    if(FM.isObject(args)) {
        var val;
        for(var pname in params) {
            val = FM.getAttr(args,pname,'');
            pline = pline + (pline == "" ? "" : "&") + pname + "=" + encodeURIComponent(val);
        }
    }
    */
    if(FM.isObject(args)) {
        var val;
        for(var pname in args) {
            if(FM.isset(params[pname])) {
                val = FM.getAttr(args,pname,'');
                pline = pline + (pline == "" ? "" : "&") + pname + "=" + encodeURIComponent(val);
            }
        }
    }
    
    var callUrl = this.getAttr("method","POST") == 'POST' ? url : url + "?" + pline;
    this.http = FM.UtAjax.initHttpObject();
    if(this.http == null) {
        return this.fireEvent("onAjaxStateError",new FM.DmGenericError({
            messageId: "1",
            text: "Unable to init connection"
        }));
    }
    
    var auth = this.getAttr('auth',null);
    if(auth) {
        this.http.open(
            this.getAttr("method","POST"), 
            callUrl, true,
            this.getAttr('auth.username',''),this.getAttr('auth.password','')
        );
    } else {
        this.http.open(
            this.getAttr("method","POST"), 
            callUrl, true
        );                
    }
    
    if(this.getAttr("method","POST") == 'POST') {
        this.http.setRequestHeader(
            "Content-type", 
            this.getAttr('contentType',"application/x-www-form-urlencoded")
        );
        //this.http.setRequestHeader("Content-length", params.length);
        //this.http.setRequestHeader("Connection", "close");
    } else {
        this.http.setRequestHeader(
            "Content-type", 
            this.getAttr('contentType',"application/x-www-form-urlencoded")
        );        
    }
        
    if(FM.isset(headers) && headers) for(var hdr in headers) {
        this.http.setRequestHeader(hdr, headers[hdr]);
    }
    this.http.onreadystatechange = this._cb_onReadyStateChange;

    // posalji (ovo treba samo za POST, get ima parametre u url-u ali ne smeta)
    this.http.send(pline);

    // event
    return this.fireEvent("onAjaxStateStart",new FM.DmGenericValue({value: args}));
}     


// static
FM.UtAjax.className = "UtAjax";
FM.UtAjax.fullClassName = 'ut.UtAjax';

// mapiranje ajax resp
FM.UtAjax.AJAX_STATE_OPEN = 1;
FM.UtAjax.AJAX_STATE_SEND = 2;
FM.UtAjax.AJAX_STATE_LOADSTART = 3;
FM.UtAjax.AJAX_STATE_LOADEND = 4;

FM.UtAjax.initHttpObject = function() {
    var http = null;
    if(window.XMLHttpRequest && !(window.ActiveXObject)) {
        try {
            http = new XMLHttpRequest();
        } catch(e1) {
            http = null;
        }
    } else if(window.ActiveXObject) {
        try {
            http = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e2) {
            try {
                http = new ActiveXObject("MSXML2.XMLHTTP.3.0");
            } catch (e3) {
                try {
                    http = new ActiveXObject("Microsoft.XMLHTTP");

                } catch (e4) {
                    http = null;
                }
            }
        }
    }
    return(http);
}       


// == jobovi ===================================================================
/**
* Ayax class. 
* @class FM.UtAjaxJob
* @extends FM.Object
*/    
FM.UtAjaxJob = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(FM.UtAjaxJob,FM.Object); 

// properties
FM.UtAjaxJob.prototype.objectSubClass = "";
FM.UtAjaxJob.prototype.owner = null;
FM.UtAjaxJob.prototype.initParams = null;
FM.UtAjaxJob.prototype.callArguments = null;
FM.UtAjaxJob.prototype.ajaxConnector = null;
FM.UtAjaxJob.prototype.callTime = null;
FM.UtAjaxJob.prototype.runTime = 0;
FM.UtAjaxJob.prototype.endTime = 0;
FM.UtAjaxJob.prototype.finished = false;

FM.UtAjaxJob.prototype._init = function(oOwner,initParams,callArguments) {
    this._super("_init",callArguments);
    this.objectSubClass = "UtAjaxJob";            
    this.owner = oOwner;
    this.initParams = initParams;
    this.callArguments = callArguments;

    this.ajaxConnector = null;
    this.callTime = new Date().getTime();
    this.runTime = 0;
    this.endTime = 0;
    this.finished = false;
}

FM.UtAjaxJob.prototype.getThreadID = function() {
    return(this.owner.getID());
}

FM.UtAjaxJob.prototype.run = function() {
    this.finished = false;
    this.runTime = new Date().getTime();
    this.addListener(this.owner); // ??????
    this.ajaxConnector = new FM.UtAjax(this.initParams);
    this.ajaxConnector.addListener(this);
    this.ajaxConnector.send(this.callArguments);
    return(true);
}

FM.UtAjaxJob.prototype.stop = function() {
    this.finished = true;
    this.endTime = new Date().getTime();
}

FM.UtAjaxJob.prototype.discardJob = function(message) {
    this.stop();
    this.fireEvent("onAjaxStateError",message);
}

FM.UtAjaxJob.prototype.isJobOver = function() {
    return this.finished;
}

FM.UtAjaxJob.prototype.isJobTimeout = function() {
    return (this.callTime && new Date().getTime() - this.callTime > FM.UtAjaxJob.jobQueueTimeout);
}

FM.UtAjaxJob.prototype.isAjaxTimeout = function() {
    return (this.runTime && new Date().getTime() - this.runTime > FM.UtAjaxJob.jobTimeout);
}

FM.UtAjaxJob.prototype.isTimeout = function() {
    if(this.isJobOver()) return(false);
    return (this.isJobTimeout() || this.isAjaxTimeout());
}

FM.UtAjaxJob.prototype.onAjaxStateEnd = function(oAjax,response) {
    this.log("onAjaxStateEnd",response,FM.logLevels.info,this.getFullClassName());
    this.stop();
    this.fireEvent("onGetDataFromServer",{job: this, connection: oAjax, event: 'end', response: response});
    this.fireEvent("onAjaxStateEnd",response);
}

FM.UtAjaxJob.prototype.onAjaxStateError = function(oAjax,errmsg) {
    this.log("onAjaxStateError",errmsg,FM.logLevels.error,this.getFullClassName());
    this.fireEvent("onGetDataFromServer",{job: this, connection: oAjax, event: 'error', message: errmsg});
    this.discardJob(errmsg);
}


FM.UtAjaxJob.prototype.onAjaxStateStart = function(oAjax,data) {
    this.log("onAjaxStateStart",data,FM.logLevels.info,this.getFullClassName());
    this.fireEvent("onGetDataFromServer",{job: this, connection: oAjax, event: 'start', params: data});
    this.fireEvent("onAjaxStateStart",data);
}

// static
FM.UtAjaxJob.className = "UtAjaxJob";
FM.UtAjaxJob.fullClassName = 'ut.UtAjaxJob';
FM.UtAjaxJob.timer = null;
FM.UtAjaxJob.jobQueueTimeout = 60000; // 60 sec
FM.UtAjaxJob.jobTimeout = 20000; // 20 sec
FM.UtAjaxJob.jobMaxTrhreads = 3;
FM.UtAjaxJob.jobList = {}; // {id1: [j1,j2, ..], id2: [...], ...}
FM.UtAjaxJob.threadsList = []; // jobovi

// id je ovdje obj.getID() - to osigurava da jedna dmklasa vrti samo jedan
// job u neko vrijeme, i da istovremeno se vrte najvise x jobova        
FM.UtAjaxJob.addToQueue = function(job) {
    if(FM.UtAjaxJob.timer) {
        clearTimeout(FM.UtAjaxJob.timer);
        FM.UtAjaxJob.timer = null;
    }

    // dodaj job u listu
    if(!FM.isset(FM.UtAjaxJob.jobList[job.getThreadID()])) {
        FM.UtAjaxJob.jobList[job.getThreadID()] = [];
    }

    var jlist = FM.UtAjaxJob.jobList[job.getThreadID()];
    jlist.push(job);

    // odmah kreni u run
    FM.UtAjaxJob.__checklist__();

    // kraj
    return true;
}

FM.UtAjaxJob.__checklist__ = function() {
    // iskljuci tajmer ako radi da ne ulijecemou procesiranje tokom rada
    if(FM.UtAjaxJob.timer) {
        clearTimeout(FM.UtAjaxJob.timer);
        FM.UtAjaxJob.timer = null;
    }

    var i,job,idlist,id;

    // waiting list
    var njoblist = {};    
    for(id in FM.UtAjaxJob.jobList) {
        idlist = FM.UtAjaxJob.jobList[id];

        // iz svake liste samo jedan kandidat
        var nidlist = [];
        for(i=0; i < idlist.length; i++) {
            job = idlist[i];
            if(job.isTimeout()) {
                job.discardJob("Timeout.");
            } else if(!job.isJobOver()) {
                nidlist.push(job);
            }
        }
        if(nidlist.length > 0) {
            njoblist[id] = nidlist;
        }
    }
    FM.UtAjaxJob.jobList = njoblist;

    // running list
    var nlist = [];
    for(i=0; i < FM.UtAjaxJob.threadsList.length; i++) {
        job = FM.UtAjaxJob.threadsList[i];

        // provjeri timeoute
        if(job.isTimeout()) {
            job.discardJob("Timeout.");
        }
        if(!job.isJobOver()) {
            nlist.push(job);
        }
    }
    FM.UtAjaxJob.threadsList = nlist;

    // sad imamo listu osvjezenu
    // ako ima mjesta pokreni novi job
    if(FM.UtAjaxJob.threadsList.length <  FM.UtAjaxJob.jobMaxTrhreads) {
        var numnext = FM.UtAjaxJob.jobMaxTrhreads - FM.UtAjaxJob.threadsList.length;
        var nextJobs = [];
        for(id in FM.UtAjaxJob.jobList) {
            idlist = FM.UtAjaxJob.jobList[id];

            // iz svake liste samo jedan kandidat
            var njob = null;
            for(i=0; i < idlist.length; i++) {
                job = idlist[i];
                if(job.runTime == 0 && (njob == null || njob.callTime > job.callTime)) njob = job;
            }

            if(njob != null) {
                if(nextJobs.length < numnext) {
                    nextJobs.push(job);
                } else {
                    nextJobs.sort(function(j1,j2) {
                        return(j1.callTime - j2.callTime);
                    });
                    if(job.calltime < nextJobs[nextJobs.length-1].calltime) {
                        nextJobs[nextJobs.length-1] = job;
                    }
                }
            }
        }

        // dodaj nove jobove i pokreni ih
        for(i=0; i < nextJobs.length; i++) {
            job = nextJobs[i];
            FM.UtAjaxJob.threadsList.push(job);
            job.run();
        }
    }

    if(!FM.UtAjaxJob.timer && FM.UtAjaxJob.threadsList.length > 0) {
        setTimeout("FM.UtAjaxJob.__checklist__()",2000);
    }
}

// file: src/lib/fm/ut/ut.UtTimer.js
/**
* Timer job class. 
* @class FM.UtTimerJob
* @extends FM.Object
* @param {String} event Event to send
* @param {any} evdata Data to send with event
* @param {number} period Period in secconds
* @param {number} executecount
*/    
FM.UtTimerJob = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(FM.UtTimerJob,FM.Object); 

// properties
FM.UtTimerJob.prototype.objectSubClass = "";
FM.UtTimerJob.prototype.event = '';
FM.UtTimerJob.prototype.evdata = null;
FM.UtTimerJob.prototype.period = -1;
FM.UtTimerJob.prototype.executecount = -1;
FM.UtTimerJob.prototype.suspended = false;
FM.UtTimerJob.prototype.started = false;
FM.UtTimerJob.prototype.lastRun = 0;

FM.UtTimerJob.prototype._init = function(event,evdata,period,executecount) {
    this.objectSubClass = "UtTimerJob";
    this.event = '';
    this.evdata = null;
    this.period = -1;
    this.executecount = -1;
    this.suspended = false;
    this.started = false;
    this.lastRun = 0;

    this._super("_init",evdata);

    this.event = event;
    this.evdata = evdata;
    this.period = period < FM.UtTimer.minPeriod ? FM.UtTimer.minPeriod : period;
    this.executecount = FM.isset(executecount) ? executecount : -1;
    this.suspended = false;
    this.started = false;
    this.lastRun = 0;
}

FM.UtTimerJob.prototype.start = function() {
    this.started = true;
    FM.UtTimer.jobsList.push(this);
    if(!FM.UtTimer.timeoutHandle) {
        FM.UtTimer.__checklist__();
    }
}

FM.UtTimerJob.prototype.isStarted = function() {
    return this.started;
}

FM.UtTimerJob.prototype.isSuspended = function() {
    return this.suspended;
}

FM.UtTimerJob.prototype.suspend = function() {
    this.suspended = true;
}

FM.UtTimerJob.prototype.resume = function() {
    if(!this.isStarted()) this.start();
    this.suspended = false;
}

FM.UtTimerJob.prototype.dispose = function() {    
    FM.UtTimer.suspended = true;
    
    this.suspended = true;
    this.started = false;
    
    var nlist = [];
    for(var i=0; i < FM.UtTimer.jobsList.length; i++) {
        if(FM.UtTimer.jobsList[i] != this) {
            nlist.push(FM.UtTimer.jobsList[i]);
        }
    }
    FM.UtTimer.jobsList = nlist;
    
    this.removeAllListeners();
    
}

// static
FM.UtTimerJob.className = "UtTimerJob";
FM.UtTimerJob.fullClassName = 'ut.UtTimerJob';


/**
* Timer class. <b>Ovo bi trebalo srediti da extend FM.object</b>
* @class FM.UtTimer
*/
FM.UtTimer = function() {
    //this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(FM.UtTimer,null); 

// properties
FM.UtTimer.prototype.objectSubClass = "UtTimer";

// static
FM.UtTimer.className = "UtTimer";
FM.UtTimer.fullClassName = 'ut.UtTimer';

FM.UtTimer.minPeriod = 1;
FM.UtTimer.timeoutHandle = null;
FM.UtTimer.jobsList = [];
FM.UtTimer.suspended = false;

FM.UtTimer.__checklist__ = function() {
    if(!FM.UtTimer.suspended) {
        var nlist = [];
        for(var i=0; i < FM.UtTimer.jobsList.length; i++) {
            var job = FM.UtTimer.jobsList[i];
            if(
                job.executecount != 0 && job.suspeded != false &&
                job.lastRun + job.period * 1000 < new Date().getTime()
            ) {
                job.lastRun = new Date().getTime();
                job.executecount--;
                if(job.executecount != 0) nlist.push(job);
                job.fireEvent(job.event, job.evdata);
            } else {
                if(job.executecount != 0) nlist.push(job);
            }
        }
        FM.UtTimer.jobsList = nlist;

        if(FM.UtTimer.jobsList.length > 0) {
            FM.UtTimer.timeoutHandle = setTimeout("FM.UtTimer.__checklist__()",FM.UtTimer.minPeriod * 1000);
        }else {
            FM.UtTimer.timeoutHandle = null;
        }
    } else { // za svaki slucaj
        FM.UtTimer.timeoutHandle = null;
    }
}

FM.UtTimer.suspendQueue = function() {
    FM.UtTimer.suspended = true;
}

FM.UtTimer.resumeQueue = function() {
    FM.UtTimer.suspended = false;
    FM.UtTimer.__checklist__();
}

// file: src/lib/fm/ut/ut.UtRegistry.js
/**
* Registry class. 
* @class FM.UtRegistry
* @extends FM.Object
* @param {object} opt Options
*/    
FM.UtRegistry = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(FM.UtRegistry,FM.Object); 

// properties
FM.UtRegistry.prototype.objectSubClass = "";
FM.UtRegistry.prototype.cookieName = '';
FM.UtRegistry.prototype.registry = null;

FM.UtRegistry.prototype._init = function(opt) {            
    this.cookieName = '';
    this.registry = null;

    this._super("_init",opt);
    this.objectSubClass = "UtRegistry";

    this.cookieName = this.getAttr('cookieName','fmRegistry');
    this.registry = null;
}

FM.UtRegistry.prototype.set = function(pkey,val,force) {
    force = FM.isset(force) && force == true ? true: false;
    if(this.registry == null) {
        var cookie = FM.loadCookie(this.cookieName);
        if(FM.isset(cookie.reg)) this.registry = FM.unserialize(cookie.reg);
        if(this.registry == null || !FM.isObject(this.registry)) this.registry = {};
    }

    var ndef = FM.UtRegistry.findKey(this.registry,pkey,force);
    if(!ndef.node) return false;
    ndef.node[ndef.keyName] = val;

    FM.saveCookie(this.cookieName,{reg: FM.serialize(this.registry)});

    return true;
}

FM.UtRegistry.prototype.get = function(pkey,defv) {
    if(this.registry == null) {
        var cookie = FM.loadCookie(this.cookieName);
        if(FM.isset(cookie.reg)) this.registry = FM.unserialize(cookie.reg);
        if(this.registry == null || !FM.isObject(this.registry)) this.registry = {};
    }

    var ndef = FM.UtRegistry.findKey(this.registry,pkey);
    if(!ndef.node) return FM.isset(defv) ? defv : '';

    return (
        !FM.isset(ndef.keyValue) ||  
        ndef.keyValue == null || 
        (FM.isString(ndef.keyValue) && ndef.keyValue == '')  ? 
        (FM.isset(defv) ? defv : '') : 
        ndef.keyValue
    );
}

FM.UtRegistry.prototype.remove = function(pkey) {
    if(this.registry == null) {
        var cookie = FM.loadCookie(this.cookieName);
        if(FM.isset(cookie.reg)) this.registry = FM.unserialize(cookie.reg);
        if(this.registry == null || !FM.isObject(this.registry)) this.registry = {};
    }

    var ndef = FM.UtRegistry.findKey(this.registry,pkey);
    if(!ndef.node) return false;

    var nnode = {};
    for(var en in ndef.node) {
        if(en != ndef.keyName) {
            nnode[en] = ndef.node[en];
        }
    }

    if(ndef.parent) ndef.parent[ndef.nodeKey] = nnode;
    else this.registry = nnode;

    FM.saveCookie(this.cookieName,{reg: FM.serialize(this.registry)});
    return true;
}

FM.UtRegistry.prototype.findKey = function(key,force) {
    return FM.UtRegistry(this.registry,key,force);
}

// static
FM.UtRegistry.className = "UtRegistry";
FM.UtRegistry.fullClassName = 'ut.UtRegistry';


FM.UtRegistry.findKey = function(reg,key,force) {
    var retc = {found: false, node: null, nodeKey: '', parent: null, keyName: '', keyValue: null};
    force = FM.isset(force) && force == true ? true: false;

    if(!FM.isset(reg) || !reg || !FM.isObject(reg)) return retc;
    if(!FM.isset(key) || !key || key == '') return retc;

    var apath_f = key.split("/");
    var apath = [];
    for(var k=0; k < apath_f.length; k++) {
        if(apath_f[k] != null && apath_f[k] != '') {
            apath.push(apath_f[k]);
        }
    }
    if(apath.length < 1) return retc;

    var ndirs = apath.length -1;

    retc.keyName = apath[apath.length -1];
    retc.node = reg;
    for(var i = 0; i < ndirs; i++) {
        var nname = apath[i];
        if(!FM.isset(retc.node[nname]) || !FM.isObject(retc.node[nname])) {
            if(force) retc.node[nname] = {};
            else return retc;
        }
        retc.parent = retc.node;
        retc.nodeKey = nname;
        retc.node = retc.node[nname];
    }

    if(FM.isset(retc.node[retc.keyName])) {
        retc.found = true;
        retc.keyValue = retc.node[retc.keyName];
    }

    return retc;
}


// file: src/lib/fm/dm/dm.DmObject.js
// -- Basic DM class -----------------------------------------------------------
/**
* Basic DM class. Provide groups
* @class DmObject
* @extends FM.Object
* @param {object} attrs list of attribute name and values
* @param {object} [flds] allowed attributes
*/    
FM.DmObject = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(FM.DmObject,FM.Object); 

// properties
FM.DmObject.prototype.objectSubClass = "";
FM.DmObject.prototype.objectGroups = {};
FM.DmObject.prototype.defaultGroup = '';

// methods

FM.DmObject.prototype._init = function(attrs,flds) {            
    this.objectGroups = {};
    this.defaultGroup = '';               

    this._super("_init",attrs,flds);
    this.objectSubClass = "Objects";
}

FM.DmObject.prototype.getDataID = function() {
    return this.getID();
}

// groups
FM.DmObject.prototype.addGroup = function(s,callevent) {
    if(!FM.isset(s) || !s || s == '') return false;

    this.objectGroups[s] = {
        name: s
    }

    if(FM.isset(callevent) && callevent == true) this.fireEvent("onChange", this);
    return true;
}

FM.DmObject.prototype.removeGroup = function(s,callevent) {
    if(!FM.isset(s) || !s || !FM.isset(this.objectGroups[s])) return false;
    var newglist = {};            
    FM.forEachAttr(this.objectGroups,function(name,value) {
        if(name != s) {
            newglist[name] = value;
        }
        return true;
    });

    this.objectGroups = newglist;
    if(this.defaultGroup == s) this.defaultGroup = '';
    if(FM.isset(callevent) && callevent == true) this.fireEvent("onChange", this);
    return true;
}

FM.DmObject.prototype.isInGroup = function(s) {
    return (
        FM.isset(s) && s && FM.isset(this.objectGroups[s]) ?
        true : false
        );
}

FM.DmObject.prototype.removeAllGroups = function(callevent) {
    this.objectGroups = {};
    this.defaultGroup = '';
    if(FM.isset(callevent) && callevent == true) this.fireEvent("onChange", this);
    return true;
}


FM.DmObject.prototype.getGroups = function() {
    return FM.cloneObject(this.objectGroups);
}

FM.DmObject.prototype.getGroupsCount = function() {
    return FM.sizeOf(this.objectGroups);
}

FM.DmObject.prototype.forEachGroup = function(doFn) {
    return FM.forEach(this.objectGroups,doFn);
}

FM.DmObject.prototype.setDefaultGroup = function(s,callevent) {
    s = FM.isset(s) && s ? s : '';
    if(s == '' || FM.isset(this.objectGroups[s])) {
        this.defaultGroup = s;
        if(FM.isset(callevent) && callevent == true) this.fireEvent("onChange", this);
        return true;
    }            
    return false;
}

FM.DmObject.prototype.getDefaultGroup = function() {
    if(this.defaultGroup != '') {
        return FM.getAttr(this.objectGroups,this.defaultGroup,null);
    }

    // ako nema def ili nije vidljiv
    var defgrp = null;
    FM.forEach(this.objectGroups,function(name,value) {
        // prvi u listi
        defgrp = value;
        return false;
    }); 
    return defgrp;
}        
// == static ===================================================================
FM.DmObject.className = "DmObject";
FM.DmObject.fullClassName = 'dm.DmObject';

FM.DmObject.subClassTypes = {}; 

FM.DmObject.newObject = function(clsname, oAttrs) {
    var fclass = FM.isset(FM.DmObject.subClassTypes[clsname]) ? 
    FM.DmObject.subClassTypes[clsname] : null
    ;

    return fclass ? new fclass(oAttrs) : null;
}

FM.DmObject.getSubClassType = function(clsname) {
    return clsname == "" ? 
    FM.DmObject : (
        FM.isset(FM.DmObject.subClassTypes[clsname]) ? 
        FM.DmObject.subClassTypes[clsname] : 
        null
        )
;
}

FM.DmObject.addSubClassType = function(subclsname, clsfn) {
    FM.DmObject.subClassTypes[subclsname] = clsfn;
}

// class decorations
FM.DmObject.classDecorations = {};

FM.DmObject.defineClassDecorations = function(clsName,flds) {
        FM.DmObject.classDecorations[clsName] = flds;
}

FM.DmObject.getClassDecoration = function(clsName) {
    return FM.getAttr(FM.DmObject.classDecorations,clsName,null);
}

FM.DmObject.getAttributeDecoration = function(clsName,attr) {
    return FM.getAttr(FM.DmObject.classDecorations, clsName + '.' + attr, attr);
}


// == generic classes ==========================================================

// generic value
FM.DmGenericValue = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(FM.DmGenericValue, FM.DmObject); 

// properties
FM.DmGenericValue.prototype.objectSubClass = "";

// methods
FM.DmGenericValue.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        value: ""
    });
    this.objectSubClass = "GenericValue";
}
        
FM.DmGenericValue.prototype.getDataID = function() {
    return this.getID();
}
FM.DmGenericValue.className = "DmGenericValue";
FM.DmGenericValue.fullClassName = 'dm.DmGenericValue';

FM.DmObject.addSubClassType('GenericValue',FM.DmGenericValue);


// generic error
FM.DmGenericError = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(FM.DmGenericError, FM.DmObject); 

// properties
FM.DmGenericError.prototype.objectSubClass = "";

// methods
FM.DmGenericError.prototype._init = function(attrs,options) {
    this._super("_init",attrs, FM.extend({messageId: "0",text: "No error"},options));
    this.objectSubClass = "GenericError";
}
        
FM.DmGenericError.prototype.getDataID = function() {
    return this.getID();
}

FM.DmGenericError.prototype.getErrorCode = function() {
    return this.getAttr('messageId','0');
}

FM.DmGenericError.prototype.setErrorCode = function(ec) {
    return this.getAttr('messageId',ec);
}

FM.DmGenericError.prototype.getErrorText = function() {
    return this.getAttr('text','');
}

FM.DmGenericError.prototype.setErrorText = function(text) {
    return this.setAttr('text',text);
}

FM.DmGenericError.prototype.isError = function() {
    var errCode = this.getErrorCode();
    
    return errCode !== '' && errCode !== '0';
}

FM.DmGenericError.prototype.getDataID = function() {
    return this.getErrorCode();
}

FM.DmGenericError.className = "DmGenericError";
FM.DmGenericError.fullClassName = 'dm.DmGenericError';

FM.DmObject.addSubClassType('GenericError',FM.DmGenericError);

// file: src/lib/fm/dm/dm.DmList.js
// -- DM list class ------------------------------------------------------------
/**
* DM list holds  DM.Objects. 
*
* @class DmList
* @extends FM.DmObject
* @param {object} attrs list of attribute name and values
* @param {object|String} [config] configuration. Literal presentation or object
*/    
FM.DmList = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(FM.DmList,FM.DmObject); // extends FM.DmObject

// properties
FM.DmList.prototype.objectSubClass = "";
FM.DmList.prototype.objectsList = null;
FM.DmList.prototype.fetchSize = 0;
FM.DmList.prototype.lastFetchTime = null;
FM.DmList.prototype.lastFetchEndTime = null;
FM.DmList.prototype.lastFetchArgs = null;
FM.DmList.prototype.lastFetchedArgs = null;

FM.DmList.prototype._init = function(attrs,config) {            
    this.objectsList = {};

    // ajax
    this.fetchSize = FM.DmList.DEF_FETCH_SIZE;
    this.lastFetchTime = null;
    this.lastFetchEndTime = null;
    this.lastFetchArgs = null;
    this.lastFetchedArgs = null;

    this._super("_init",attrs);
    this.objectSubClass = "ListOfItems";

    // list configuration
    config = FM.isset(config) && config ? config : null;
    if(FM.isString(config)) {
        if(FM.DmList.getConfiguration(config)) {
            config = FM.cloneObject(FM.DmList.getConfiguration(config));
        } else {
            config = FM.stringPtrToObject(config);
        }
    }

    this.setProperty('config',config ? config : {},false);
}

// -- func AJAX --------------------------------------------------------
/**
* Get arguments of last fetch
* @public
* @function
* @returns {object} List of arguments of last fetch or null
*/            
FM.DmList.prototype.getLastGetArgs = function() {
    return this.lastFetchArgs;        
}

/**
* Get arguments of last sucessfull fetch  
* @public
* @function
* @returns {object} List of arguments of last sucessfull fetch or null
*/            
FM.DmList.prototype.getLastFetchedArgs = function() {
    return this.lastFetchedArgs;        
}

/**
* Get arguments for fetch
* @public
* @function
* @param {boolean} getMore New fetch or fetch more data
* @returns {object} List of arguments for new fetch
*/            
FM.DmList.prototype.getDataArgs = function(getMore) {
    var args = {};

    // ako imamo fn pozivamo nju, inace saljemo sve atribute  
    var fnFetchArgs = this.getProperty('config.getFetchArguments',null);
    if(fnFetchArgs && FM.isString(fnFetchArgs)) fnFetchArgs = FM.stringPtrToObject(fnFetchArgs);
    if(fnFetchArgs && FM.isFunction(fnFetchArgs)) {
        args = fnFetchArgs({dmList: this, getMore: getMore});
    } else { // ako nemamo fn stavljamo atribute
        this.forEachAttr(function(pname,value) {
            if(!FM.isFunction(value)) {
                args[pname] = value;
            }
            return true;
        });
        if(this.isAttr("fromrow")) {
            args["fromrow"] = this.getListSize();
        }
        if(this.isAttr("nrows")) {
            args["nrows"] = this.getFetchSize();
        }
    }
    this.lastFetchArgs = args;

    // serijaliziraj argumente
    FM.forEach(args,function(name,value) {
        if(FM.isArray(value) || FM.isObject(value)) {
            args[name] = FM.serialize(value);
        }
        return true;
    });            

   
    // kraj
    return(args);
}

/**
* Before start of fetch. Fires <i>onListStart</i> event
* @event
* @param {object} oAjax UtAjax object
* @param {object} oArgs data Fetch arguments
*/                
FM.DmList.prototype.onAjaxStateStart = function(oAjax,oArgs) {
    this.log("Starting fetch ...",FM.logLevels.info,'onAjaxStateStart');
    this.fireEvent("onListStart",oArgs);
}

/**
* After successfull fetch. 
* @public
* @event
* @param {object} oAjax UtAjax object
* @param {FM.DmGenericValue} response 
*  {
*    error: 0,
*    errorMessage: '',
*    responseText: '',
*    responseObject: null
*  }
*/                
FM.DmList.prototype.onAjaxStateEnd = function(oAjax,response) {    
    this.log("Fetch completed.",FM.logLevels.info,'onAjaxStateEnd');
    oAjax.removeListener(this);
    
    this.lastFetchEndTime = new Date().getTime();
    
    // provjeri param
    if(!FM.isObject(response) || !FM.isset(response.getAttr)) {
        return this.onAjaxStateError(oAjax,new FM.DmGenericError({
            messageId: "-1",
            text: "Ajax call error (empty response)"               
        }));
    }
    
    // imas objekt, provjeri da nije error obj
    var isErrorResponse = this.resolvePropertyValue(
        'config.isErrorResponse',false,
        {dmList: this, utAjax: oAjax, response: response.getAttr('value',null)}
    );            
    
    if(isErrorResponse) {
        var errObj = this.resolvePropertyValue(
            'config.errorParser',null,
            {dmList: this, utAjax: oAjax, response: response.getAttr('value',null)}
        );
        if(!errObj) {
            errObj = new FM.DmGenericError({
                messageId: "-1",
                text: "Error parsing response"
            });
        }
        return this.onAjaxStateError(oAjax,errObj);            
    }
    
    return this.addResponseToList(response);
}

/**
* After fetch error. 
* @public
* @event
* @param {object} oAjax UtAjax object
* @param {object} errObj (class extending FM.DmGenericError)
*/                
FM.DmList.prototype.onAjaxStateError = function(oAjax,errObj) {    
    if(!FM.isset(errObj) || !errObj || !FM.isObject(errObj) || !FM.isset(errObj.getErrorText)) {
        errObj = new FM.DmGenericError({
            messageId: "-1",
            text: "Error fetching data from server"
        });
    }
    this.log(
        errObj.getErrorText(),
        FM.logLevels.warn, 'onAjaxStateError'
    );
        
    oAjax.removeListener(this);

    this.lastFetchEndTime = new Date().getTime();    
    this.fireEvent("onListError",errObj);
}

/**
* Start ajax call. 
* @private
* @function    
* @param {object} args Fetch arguments
*/                
FM.DmList.prototype._ajaxCall = function(args) {
    var fnargs = {dmList: this, arguments: args};
    
    this.lastFetchTime = new Date().getTime();
    
    // resolve headers
    var hdrs = this.resolvePropertyValue(
        'config.headers',{},fnargs
    );
    for(var hname in hdrs) {
        hdrs[hname] = FM.applyTemplate(args,hdrs[hname],false,true).replace(/\s*\[\:.*?\]\s*/g, "");
    }
    var url = FM.applyTemplate(
        args,
        this.resolvePropertyValue(
            'config.url','',fnargs
        ),
        false,true
    );  
    

    var authArgs = this.resolvePropertyValue('config.auth',{},fnargs);    
        
    // ajax config
    var utAjax = new FM.UtAjax({
        url: url,
        method: this.resolvePropertyValue('config.method','',this),
        contentType: this.resolvePropertyValue('config.contentType','application/x-www-form-urlencoded',args),
        responseFormat: this.resolvePropertyValue('config.responseFormat','TEXT',args),
        validResponseCodes: this.resolvePropertyValue('config.validResponseCodes','',args),
        params: this.resolvePropertyValue('config.params',{},args),
        headers: hdrs,
        auth:   FM.getAttr(authArgs,'username','') == '' ? null : {
            username: FM.getAttr(authArgs,'username',''),
            password: FM.getAttr(authArgs,'password','')
        }
    });
    
    // add listener
    utAjax.addListener(this);
    
    // send
    utAjax.send(args);
    
    return true;
}

/**
* Get data from server. 
* @public
* @function    
* @param {boolean} getMore Continue or start new fetch
*/                
FM.DmList.prototype.getData = function(getMore) {   
    // ako nema url-a ne radimo fetch
    if(this.getProperty('config.url','') == '') {
        this.fireEvent(
            "onListEnd",
            {
                Removed: {},
                Added: {},
                Updated: {}
            });
        return true;                
    }

    // args za fetch
    var args = this.getDataArgs(getMore);

    // call            
    if(args) this._ajaxCall(args);

    return true;
}

/**
* Get number of objects to fetch from server. 
* @public
* @function    
* @returns {number} Number of objects to fetch from server
*/                
FM.DmList.prototype.getFetchSize = function() {
    return(this.fetchSize);
}

/**
* Set number of objects to fetch from server. 
* @public
* @function    
* @param {number} s Number of objects to fetch from server
*/                
FM.DmList.prototype.setFetchSize = function(s) {
    this.fetchSize = FM.isset(s) && s > 0 && s < 1000 ? s : this.fetchSize;
}

/**
* Add DmObject to list
* @public
* @function    
* @param {DmObject} inmember DmObject to add
* @param {string} mid DmObject id
* @param {boolean} callevent Send <i>onListEnd</i> event
* @param {string} groupid Id of DmObject group
*/ 
FM.DmList.prototype.addToList = function(inmember,mid,callevent,groupid) {
    var addlst;
    
    // ako je lista objekata a ne objekt
    if(FM.isObject(inmember) && !FM.isset(inmember.getDataID)) {
        addlst = inmember;
    } else {
        if(!FM.isset(mid)) mid = inmember.getDataID();
        addlst[mid] = inmember;
    }

    return this.refreshList({Added: addlst, Updated: {}, Removed: {}},false,groupid,false,callevent);

    // kraj
    return true;
}

/**
* Remove DmObject from list
* @public
* @function    
* @param {string} id Id of DmObject to remove or object with list od DmObjects to remove
* @param {boolean} callevent Send <i>onListEnd</i> event
* @param {string} groupid Id of DmObject group
*/                
FM.DmList.prototype.removeFromList = function(id,callevent,groupid) {
    var rmlist = {};
    var oOldObj;
    
    // ako je lista objekata ili objekt a ne id objekta
    if(FM.isObject(id)) {
        if(!FM.isset(id.getDataID)) {
            rmlist = id;
        } else {            
            rmlist[id.getDataID()] = id;
        }
    } else if(FM.isString(id)) { // string id
        oOldObj = this.get(id);
        if(oOldObj) {
            rmlist[oOldObj.getDataID()] = oOldObj;
        }
    }
    
        var nlist = {};
        var myrmlist = {};        
        this.forEachListElement(
            function(index,iObj) {
                var odataid = iObj.getDataID();
                if(!FM.isset(rmlist[odataid])) {
                    nlist[index] = iObj;
                } else {
                    myrmlist[odataid] = iObj;
                }
                return true;
            }
        );
        this.objectsList = nlist;

        if(callevent != false) {
            this.fireEvent(
                "onListEnd",
                {
                    Removed: myrmlist,
                    Added: {},
                    Updated: {}
                });                
        }    
}

/**
* Remove all DmObjects with <i>attr</i> attribute value equal to <i>value</i> from list
* @public
* @function    
* @param {string} attr Attribute name
* @param {string} value Attribute value
* @param {boolean} callevent Send <i>onListEnd</i> event
* @param {string} groupid Id of DmObject group
*/                
FM.DmList.prototype.removeFromListByAttr = function(attr, value,callevent,groupid) {
    var rmlist = {};

    this.forEachListElement(
        function(index,iObj) {
            if(iObj.getAttr(attr) == value.toString()) {
                rmlist[index] = iObj;
            }
            return true;
        }
    );
    return this.removeFromList(rmlist,callevent,groupid);
}

/**
* Remove all DmObjects from list
* @public
* @function    
*/                
FM.DmList.prototype.clearList = function(callevent,groupid) {
    return this.removeFromList(FM.cloneObject(this.objectsList),callevent,groupid);
}

/**
* Dispose list
* @public
* @function    
*/                
FM.DmList.prototype.dispose = function() {
    this.clearList(false);
    
    // event
    this.fireEvent("onListDispose", {});

    // props & listeners
    this.removeListener();
    this.options = {};
    this.prop = {};

    // list
    this.objectsList = {};

    // ajax
    this.lastFetchTime = null;
    this.lastFetchEndTime = null;
    this.lastFetchArgs = null;
    this.lastFetchedArgs = null;
}

/**
* Get DmObject from list by id or attribute name/value pair
* @public
* @function    
* @param {string} key id of DmObject to remove or attribute value
* @param {string} aname undefined or attribute name
* @returns {DmObject} 
*/                
FM.DmList.prototype.get = function(key,aname) {
    // ako je aname def onda je par name/value attributa a ne dataid
    if(FM.isset(aname) && aname && aname != '') {
        return this.findByAttr(aname,key);
    }

    // drito u listu pod dataid-u
    if(FM.isset(this.objectsList[key.toString()])) {
        return this.objectsList[key.toString()];
    }

    // nije nadjen
    return null;
}

/**
* See DmList.get
* @see DmList#get
*/                
FM.DmList.prototype.c = function(key,aname) {
    return this.get(key,aname);
}

/**
* Add DmObject to list
* Examples:
*  this.set(obj,'1234')
*  this.set(false,[o1,o2,o3],'uid')
*  (R)
*  
* @public
* @function    
* @param {DmObject} member DmObject to add
* @param {string} id Id of DmObject to add
* @param {String} idattr - 
* @returns {DmObject} 
*/                
FM.DmList.prototype.set = function(member,id,idattr) {
    if(FM.isset(idattr)) {
        var olist = id;
        var onlyExisting = member;
        for(var k in olist) {
            var obj = olist[k];
            if(FM.isObject(obj)) {
                if(!onlyExisting || (this.get(obj[idattr]) != null)) this.set(obj,obj[idattr]);
            }
        }
    } else {
        this.objectsList[id.toString()] = member;
    }
    return true;
}

/**
* See DmList.set
* @see DmList#set
*/                
FM.DmList.prototype.l = function(member,id,idattr) {
    return this.set(member,id,idattr);
}

/**
* Get list of objects
* @public
* @function    
* @returns {object} 
*/                
FM.DmList.prototype.getList = function() {
    return this.objectsList;
}

/**
* Find DmObject(s) 
* @public
* @function    
* @param {string} aname Attribute name 
* @param {string} value Attribute value
* @param {boolean} all Return all objects (or only first that mach criteria)
* @param {object} orderList List index 
* @returns {object} DMObject or DmObject collection
*/                    
FM.DmList.prototype.findByAttr = function(aname,value,all,orderList) {
    var getall = (FM.isset(all) ? all : false);
    var retarr = getall ? {} : null;

    var obj = this.forEachListElement(
        function(index,obj) {
            if(obj.getAttr(aname.toString()) == value) {
                if(getall) {
                    if(!retarr) retarr = {};
                    retarr[index] = obj;                    
                } else {
                    retarr = obj;
                    return(false);
                }
            }
            return(true);
        }, orderList
    );

    return(getall);
}

/**
* Find DmObject data id by attribute name/value pair 
* @public
* @function    
* @param {string} attrname Attribute name 
* @param {string} attrval Attribute value
* @returns {object} DmObject or null
*/                    
FM.DmList.prototype.findElementIndex = function(attrname,attrval) {
    var i = this.forEachListElement(
        function(index,obj) {
            if(obj.getAttr(attrname.toString()) == attrval.toString()) return(false);
            return(true);
        },
        true
        );
    return(i);
}

/**
* Get list size
* @public
* @function    
* @returns {number} Number of DmObject in list
*/                    
FM.DmList.prototype.getListSize = function() {
    return FM.sizeOf(this.getList());
}

/**
* For each DmObject in list call function <i>doFn(id,attr)</i> until end of list or <i>false</i> return value.    
* @public
* @function    
* @param {function} doFn Callback function
* @param {boolean} returnIndex Return index of DmObject instead DmObject itself
* @param {boolean} doSort Sort index by orderAttribute (from config)
* @return {string} In case of <i>false</i> return value of <i>doFn()</i> call return DmObject (or data id of DmObject) otherwise null or -1
*/                    
FM.DmList.prototype.forEachListElement = function(doFn,returnIndex,doSort) {
    // tu treba kreirati index
    doSort = FM.isset(doSort) && doSort == true ? true : false;
    if(doSort) {
        var orderList = this.createListIndex(
            this.getProperty('config.order.orderAttribute','__fetch_order'),
            this.getProperty('config.order.orderAttributeType','NUMBER'),
            this.getProperty('config.order.orderType','ASC') == 'DESC' ? false : true
        );
    } else {
        orderList = null;
    }

    // pokreni
    var id,lobj,i;

    returnIndex = FM.isset(returnIndex) ? (returnIndex == true) : false;
    if(orderList) {
        for(i = 0; i < orderList.length; i++) {
            lobj = orderList[i];
            if(lobj && FM.isset(lobj.getDataID)) {
                id = lobj.getDataID();
                if(!doFn(id,lobj)) return(returnIndex ? id : lobj);
            }
        }
    } else {

        for(id in this.objectsList) {
            lobj = this.objectsList[id];
            if(FM.isset(lobj.getID)) {
                if(!doFn(id,lobj)) return(returnIndex ? id : lobj);
            }
        }
    }

    // kraj
    return(returnIndex ? -1 : null);
}

/**
* Create list filter
* @public
* @function    
* @param {function} callbackFn Callback for creating list
* @param {object} startFilter Master filter
* @returns {object} List filter
*/                    
FM.DmList.prototype.createListFilter = function(callbackFn,startFilter) {
    var lst = {};
    var cbFn = FM.isset(callbackFn) ?  callbackFn : function(){
        return false;
    };
    var fltStart = FM.isset(startFilter) ?  startFilter : null;

    this.forEachListElement(function(index,iObj) {
        if(!fltStart || FM.isset(fltStart[iObj.getDataID()])) {
            if(cbFn(iObj)) lst[iObj.getDataID()] = iObj;
        }
        return true;
    });

    return(lst);
}


/**
* Create list index
* @public
* @function    
* @param {string} attr Attribute name 
* @param {string} attrtype Attribute type (STRING,DATE,NUMBER)
* @param {boolean} asc Ascending
* @param {object} filterTable list filter to use
* @returns {object} List index
*/                    
FM.DmList.prototype.createListIndex = function(attr,attrtype, asc,filterTable) {
    var lst = [];
    this.forEachListElement(function(index,iObj) {
        if(!FM.isset(filterTable) || FM.isset(filterTable[iObj.getDataID()])) lst.push(iObj);
        return true;
    });

    var sortFn = function(a,b) {
        var at,bt;
        if(attrtype == 'DATE') {
            at = FM.parseDateString(a.getAttr(attr,''),true);
            bt = FM.parseDateString(b.getAttr(attr,''),true);
        } else if(attrtype == 'NUMBER') {
            at = parseFloat(a.getAttr(attr,'0'),true);
            bt = parseFloat(b.getAttr(attr,'0'),true);
        } else { // STRING
            at = a.getAttr(attr,'').toString();
            bt = b.getAttr(attr,'').toString();
        }

        return(
            at > bt ? 1 : (at == bt ? 0: -1)
            );
    }

    lst.sort(sortFn);
    if(FM.isset(asc) && asc == false) lst.reverse();

    return(lst);
}


/**
* Return soprt options from list congig
* @public
* @function    
* @return {array} sortOptions
*/                    
FM.DmList.prototype.getSortOptions = function() {
    this.getProperty('config.sortOptions',{});
}

/**
* Add  objects from fetch response to list. Fires <i>onListEnd</i> event.
* @public
* @function
* @param {object} response Fetch response
* @param {boolean} onlyExisting Replace only existing object 
* @param {string} groupid ID od objects group
* @param {boolean} protectDirty Don't change dirty objects
*/            

FM.DmList.prototype.addResponseToList = function(response,onlyExisting,groupid,protectDirty) {
    response = 
        FM.isset(response) && response ? 
        response : null
    ;

    // init
    var added = {};
    var updated = {};
    var responseParser = this.getProperty('config.responseParser',null);
    var listType = this.getProperty('config.listType',"collection"); // collection|single
    
    // za svaki ili samo jednom
    var respCol = [];
    if(response && FM.isObject(response) && FM.isset(response.getAttr)) {
        var rlprop = this.getProperty('config.dataProperty',null);
        var val = response.getAttr("value",null);
        if(listType == 'single') {
            if(val) respCol = [rlprop ? FM.getAttr(val,rlprop,null) : val];
        } else if(listType == 'none') {
            respCol = [];
        } else {
            respCol = rlprop ? FM.getAttr(val,rlprop,null) : val;
            if(!FM.isObject(respCol) && !FM.isArray(respCol)) {
                respCol = [];
            }
        }
    }

    var lstObj = null;
    for(var respId in respCol) {
        if(responseParser) {
            lstObj = responseParser({dmList: this, response: respCol[respId]});
            if(!lstObj) {
                this.fireEvent("onListError",new FM.DmGenericError({
                    messageId: -1,
                    text: 'Data error: invalid response.'
                }));
                return false;
            }
        } else {
            lstObj = respCol[respId];
        } 
        
        // osvjezimo listu
        // objekti se ne zamijenjuju, radi se update da ostanu reference na obj ok
        var oldObj = this.get(lstObj.getDataID());
        if(oldObj) {
            updated[lstObj.getDataID()] = lstObj;
        } else {
            added[lstObj.getDataID()] = lstObj;
        }
    }
    
    return this.refreshList(
        {Added: added, Updated: updated, Removed: {}},onlyExisting,groupid,protectDirty
    );
}


FM.DmList.prototype._refreshAdd = function(list,retList,onlyExisting,groupid,protectDirty) {
    var id,oValue,oOldValue;
    
    for(id in list) {
        oValue = list[id];
        oOldValue = this.get(oValue.getDataID());
        if(!oOldValue || !onlyExisting) {
            if(oOldValue) { // vec postoji, ako nije editiran zamijenimo ga
                if(!oOldValue.isChanged() || !protectDirty) {
                    oValue.forEachAttr(function(name,value) {
                        oOldValue.setAttr(name,value,false); // ne zovi evente
                        return true;
                    });
                    if(groupid && !oOldValue.isInGroup(groupid)) {
                        oOldValue.addGroup(groupid);
                    }
                    retList.Updated[oOldValue.getDataID()] = oOldValue;
                    retList.listCount++;
                }
            } else {
                if(groupid && !oValue.isInGroup(groupid)) {
                    oValue.addGroup(groupid);
                }                
                this.set(oValue, oValue.getDataID());
                retList.Added[oValue.getDataID()] = oValue;
                retList.listCount++;
            }
        }
    }    
}

/**
* Add objects to list. Fires <i>onListEnd</i> event.
* @public
* @function
* @param {object} response List of updated, deleted and inserted objects (onListEnd format)
* @param {boolean} onlyExisting Replace only existing object 
* @param {string} groupid ID od objects group
* @param {boolean} protectDirty Ignore changed objects
* @param {boolean} callEvents Call events  (default is true)
*/            
FM.DmList.prototype.refreshList = function(response,onlyExisting,groupid,protectDirty,callEvents) {
    var id,oValue,oOldValue;
    
    // def params
    onlyExisting = FM.isset(onlyExisting) && onlyExisting == true ? true : false;
    groupid = FM.isset(groupid) && groupid ? groupid : null;
    protectDirty = FM.isset(protectDirty) && protectDirty  == true ? true : false;
    response = 
        FM.isset(response) && response ? 
        response : null
    ;
    callEvents = FM.isset(callEvents) && callEvents  == false ? false : true;
    
    // init
    var retList = {
        listCount: 0,
        Removed: {},
        Added: {},
        Updated: {}
    };        

    // dodani
    if(FM.isset(response) && FM.isset(response.Added)) {
        this._refreshAdd(response.Added,retList,onlyExisting,groupid,protectDirty);
    }
    if(FM.isset(response) && FM.isset(response.Updated)) {
        this._refreshAdd(response.Updated,retList,onlyExisting,groupid,protectDirty);
    }
    
    // brisani
    if(FM.isset(response) && FM.isset(response.Removed)) {
        for(id in response.Removed) {
            oValue = response.Removed[id];
            oOldValue = this.get(oValue.getDataID());
            if(groupid) {
                // makni grupu
                if(oOldValue.isInGroup(groupid)) {
                    oOldValue.removeGroup(groupid);
                }
                // micemo ga samo ako je broj grupa 0
                if(oOldValue.getGroupsCount() < 1) {
                    this.removeFromList(id, false);
                    retList.Removed[id] = this.get(id,oOldValue);
                    retList.listCount++;
                } else {
                    retList.Updated[id] = oOldValue;
                    retList.listCount++;
                }
            } else {
                this.removeFromList(id, false);
                retList.Removed[id] = this.get(id,null);
                retList.listCount++;
            }
        }
    }

    // posalji evente za change
    for(id in retList.Updated) {
        oOldValue = retList.Updated[id];
        oOldValue.setChanged(false,true); // call ev
    }
    
    // ako je listType none uvijek posalji event
    if(this.getProperty('config.listType',"collection") == 'none') {
        callEvents = true;
    }
    // kraj
    if(callEvents) this.fireEvent("onListEnd",retList);

    // kraj
    return(true);
}

// == static ===================================================================
FM.DmList.className = "DmList";
FM.DmList.fullClassName = 'dm.DmList';

FM.DmList.DEF_FETCH_SIZE = 20;

FM.DmList.configurations = {};

/**
* Add new DmList configuration
* @static
* @function    
* @param {String} name Name of configuration
* @param {object} config Confiruation
*/   

FM.DmList.addConfiguration = function(name,config) {
    FM.DmList.configurations[name] = config;
    return true;
}

/**
* Returns new DmList with <b>config</b> configuration
* @static
* @function    
* @param {object} attrs list of attributes
* @param {String} config Confiruation name
* @return {object} list configuration or null if not found
*/   
FM.DmList.getConfiguration = function(name) {
    return FM.getAttr(FM.DmList.configurations,name,null);
}

/**
* Returns new DmList winth <b>config</b>  configuration
* @static
* @function    
* @param {object} attrs list of attributes
* @param {String} config Confiruation name
* @return {FM.DmList} new DmList
*/   
FM.DmList.newList = function(attrs,config) {            
    return new FM.DmList(attrs,FM.getAttr(FM.DmList.configurations,config,{}));
}

/**
* For each DmObject in list call function <i>doFn(id,attr)</i> until end of list or <i>false</i> return value.    
* @static
* @function    
* @param {object} list DmObject collection
* @param {function} doFn Callback function
* @param {boolean} returnIndex Return index of DmObject instead DmObject itself
* @param {object} orderList List index 
* @return {string} In case of <i>false</i> return value of <i>doFn()</i> call return DmObject (or data id of DmObject) otherwise null or -1
*/   
FM.DmList.forEachListElement = function(list,doFn,returnIndex,orderList) {
    var id,lobj,i;

    returnIndex = FM.isset(returnIndex) ? (returnIndex == true) : false;
    orderList =
        FM.isset(orderList) && orderList && (FM.isArray(orderList) && orderList.length > 0) ?
        orderList : null;

    if(orderList) {
        for(i = 0; i < orderList.length; i++) {
            lobj = orderList[i];
            if(lobj && FM.isset(lobj.getDataID)) {
                id = lobj.getDataID();
                if(!doFn(id,lobj)) return(returnIndex ? id : lobj);
            }
        }
    } else {
        for(id in list) {
            lobj = list[id];
            if(FM.isset(lobj.getID)) {
                if(!doFn(id,lobj)) return(returnIndex ? id : lobj);
            }
        }
    }
    return(returnIndex ? -1 : null);
}

/**
* Get collection size
* @static
* @function    
* @param {object} list Collection
* @param {function} filterFn Callback to filter collection
* @returns {number} Number of elements in collection
*/                    
FM.DmList.getListSize = function(list,filterFn) {
    var n = 0;
    FM.DmList.forEachListElement(list,function(id,obj) {
        if(FM.isset(filterFn)) {
            if(filterFn(obj) == true) n++;
        } else {
            n++;
        }
        return true;
    });

    return n;
}        


// file: src/lib/fm/lm/lm.LmObject.js
// -- osnovna LM klasa ---------------------------------------------------------
/**
* Basic LM class. 
* @class FM.LmObject
* @extends FM.Object
* @param {FM.AppObject} app application object
* @param {object} [options] Options
*/    
FM.LmObject = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(FM.LmObject,FM.Object); // extends FM.Object

// properties
FM.LmObject.prototype.objectSubClass = "";
FM.LmObject.prototype.app = null;
FM.LmObject.prototype.bindObject = null;
FM.LmObject.prototype.executed = false;

FM.LmObject.prototype._init = function(app,opt) {            
    this.app = app;            
    this.bindObject = null;
    this.executed = false;

    this._super("_init",opt);
    this.objectSubClass = "LmObject";

}

FM.LmObject.prototype.run = function() {
    this.executed = true;  

    // dodaj listener na dm
    var f = this.getDmList();
    if(f & this.getAttr('dmListEvents','true') != 'false') f.addListener(this);    

    // npravi bind ako treba
    this.bind();                      
}

FM.LmObject.prototype.dispose = function() { 
    // makni listener sa dm-a. ako ga nismo ni dodavali nema veze
    var f = this.getDmList();
    if(f) f.removeListener(this);    

    // unbind
    this.unbind();

    // reset
    this.app = null;            
    this.executed = false;
}

FM.LmObject.prototype.isExecuted = function() {
    return this.executed;
}

FM.LmObject.prototype.getApp = function() {
    return this.app;
}

FM.LmObject.prototype.getDmObject = function() {
    var dmobj = null, f = this.getAttr('dmObject',null);

    if(f) {                
        // ako je string
        if(FM.isString(f)) f = FM.stringPtrToObject(f,this,this.app);
        if(f) dmobj = !FM.isset(f.getClassName) ? f(this.app,this) : f;
        if(!dmobj) {
            dmobj = new FM.DmObject({}); // svaki lmobjekt ima dmobjekt, makar prazan
        }
        this.setAttr('dmObject',dmobj);
    }

    return dmobj;
}

FM.LmObject.prototype.getDmList = function() {
    var dmobj = null, f = this.getAttr('dmList',null);            
    if(f) {                
        // ako je string
        if(FM.isString(f)) {                    
            f = FM.stringPtrToObject(f,this,this.app);
        }
        if(f) dmobj = !FM.isset(f.getClassName) ? f(this.app,this) : f;
        this.setAttr('dmList',dmobj);
    }

    return dmobj;
}


FM.LmObject.prototype.getDmFilter = function() {
    var f = this.getAttr('dmFilter',null);
    // ako je string
    if(FM.isString(f)) {
        f = FM.stringPtrToObject(f,this,this.app);
        this.setAttr('dmFilter',f);
    }                
    return  f;
}

FM.LmObject.prototype.bind = function() {
    if(this.getAttr('bindID','') != '') {
        this.fireEvent("onRegisterBindEvents",{
            bindID: this.getAttr('bindID',''),
            object: this
        });            
    }

    // npravi bind ako treba
    if(this.getAttr('bindTo','') != '') {
        var me = this;
        this.fireEvent("onBindToObject",{
            bindID: this.getAttr('bindTo',''),
            callbackID: this.getID(),
            bindEvents: this.getAttr('bindEvents',''),
            callback: function(enable,lmobj) {                        
                var bindHandler = me.getAttr('bindHandler',null);
                if(FM.isString(bindHandler)) {
                    bindHandler = FM.stringPtrToObject(bindHandler,me,me.app);
                }
                if(FM.isFunction(bindHandler)) {
                    bindHandler(me,enable,lmobj);
                } else if(FM.isset(me.bindHandler)) {
                    me.bindHandler(enable,lmobj);
                }

                me.setBindObject(enable ? lmobj : null);
            }
        });
    }            
}

FM.LmObject.prototype.unbind = function() {
    // npravi unbind ako treba
    if(this.getAttr('bindID','') != '' && this.bindObject) {
        this.fireEvent("onUnregisterBindEvents",{
            bindID: this.getAttr('bindID','')
        });
    }   

    if(this.getAttr('bindTo','') != '' && this.bindObject) {
        this.fireEvent("onUnbindFromObject",{
            bindID: this.getAttr('bindTo',''),
            callbackID: this.getID()
        });    
    }            
}

FM.LmObject.prototype.getBindObject = function() {
    return this.bindObject;
}

FM.LmObject.prototype.setBindObject = function(obj) {
    this.bindObject = obj;
}

// owr events procs
FM.LmObject.prototype.fireEvent = function(ev,evdata,calledlist) {
    var cl = FM.isset(calledlist) ? calledlist : {};

    // provjeri prvo bindObject
    if(
        ev != "onUnregisterBindEvents" &&
        ev != "onUnbindFromObject" &&
        ev != "onBindToObject" &&
        ev != "onRegisterBindEvents" &&        
        this.bindObject
    ) {
        var bev = this.getAttr('bindEvents','');
        if(bev == '' || bev.indexOf('|' + ev + '|') > -1) {
            try {
                this.log("Executing bind event " + ev + "() ...",FM.logLevels.debug,'fireEvent');
                return this.bindObject.isExecuted() ?
                    this.bindObject.onEvent(this,ev,evdata,cl) :
                    cl;
                this.log("Executing " + ev + "() done.",FM.logLevels.debug,'fireEvent');
            } catch(e) {
                this.log("ERROR executing bind event " + ev + "()! [" + e.type + "]",FM.logLevels.error,'fireEvent');
            }
        }
    }

    // obicni listeneri
    return this._super("fireEvent",ev,evdata,cl);
}

FM.LmObject.prototype.onEvent = function(sender,ev,data,calledlist) {
    var oev = ev;
    var ex = false;

    this.log("*EV:" + ev,FM.logLevels.info,'onEvent');
    this.log(data,FM.logLevels.debug,'onEvent');

    // prvo provjeri da li imas normalniu event funkciju        
    // ako je imas prvo pozovi nju 
    if(FM.isset(this[ev])) {
        //eval(this[ev])(sender,data);
        this.log("Executing local " + ev + "()...",FM.logLevels.debug,'onEvent');            
        try {
            this[ev](sender,data);
        } catch(e) {
            this.log("ERROR executing local " + ev + "()! [" + e.type + "]",FM.logLevels.error,'onEvent');
            this.log(this.getAttr(),FM.logLevels.debug,'onEvent');
        }
        ex = true;
        this.log("Executing local " + ev + "() done.",FM.logLevels.debug,'onEvent');
    }

    // dataevent se uvijek proslijedjuju dalje
    //  provjeri da li imas event tog tipa u conf dataevents         
    if(this.getAttr('dataEvents.' + ev,null)) {
        this.log("Executing dataEvent " + ev + "() ...",FM.logLevels.debug,'onEvent');
        var dev,fld,obj,val=null;

        dev = this.getAttr('dataEvents.' + ev + '.event',ev); // koji event
        fld = this.getAttr('dataEvents.' + ev + '.value',''); // koje polje iz DmObjekta
        var val;
        // ako u config imamo na pcetku # uzmi iz objekta
        if(FM.startsWith(fld,'#')) {
            var dmObj = this.getDmObject();
            val = dmObj.getAttr(fld.substr(1),'');
        } else {
            // uzmi dmlist
            var f = this.getDmList();
            obj = f != null ? f.get(data) : null;
            if(obj) {
                val = obj.getAttr(fld,'');
                if(FM.startsWith(val,'#')) {
                    dev = val.substr(1);
                    val = this;
                }
            }
        }

        // dataevent 
        this.log("Fire dataEvent " + dev + "()",FM.logLevels.debug,'onEvent');
        this.fireEvent(dev,val,calledlist);
        ex = true;
        this.log("Fire dataEvent " + dev + "() done.",FM.logLevels.debug,'onEvent');
    }

    // ako nije izvrsen ni ev ni dev
    if(!ex) {
        this.log("Fire event " + ev + "()",FM.logLevels.debug,'onEvent');
        this.fireEvent(ev,data,calledlist);
        this.log("Fire event " + ev + "() done.",FM.logLevels.debug,'onEvent');
    }        

    // vrati cl ako je pozvan loc ev
    this.log("*EV:" + ev + "() done.",FM.logLevels.info,'onEvent');
    return calledlist;
}        

FM.LmObject.className = "LmObject";
FM.LmObject.fullClassName = 'lm.LmObject';

// file: src/lib/fm/app/app.AppObject.js
/**
* Basic application class. 
* @class FM.AppObject
* @extends FM.LmObject
* @param {object} [options] Options
*/    
FM.AppObject = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(FM.AppObject,FM.LmObject); 

// properties
FM.AppObject.prototype.objectSubClass = "";

// methods
FM.AppObject.prototype._init = function(opt) {            
    this._super("_init",this,opt);
    this.objectSubClass = "AppObjects";
}

FM.AppObject.prototype.dmListFactory = function(dmData,dmConfig,addlstnr) {
    var lst = new FM.DmList(dmData,dmConfig);
    if(lst) {
        if(!isset(addlstnr) || addlstnr != false) lst.addListener(this);
    }
    return(lst);
}

FM.AppObject.prototype.dmListDispose = function(lst) {
    lst.dispose();
    return true;
}

// static
FM.AppObject.className = "AppObject";
FM.AppObject.fullClassName = 'app.AppObject';

FM.AppObject.startApp = function(args,evHandler) {   
    var appCls = FM.getAttr(window,args.appClass,null);
    if(!appCls) return null;    
    var app = new appCls(args);
    if(!app) return null;
    
    if(FM.isset(evHandler)) {
        app.addListener(evHandler);
    }
    app.run();
    return(app);
}

FM.AppObject.stopApp = function(app) {
    if(app) {
        return app.dispose();

    }
    
    return true;
}        


// file: src/oa/config/oa.ClassConfig.js
if(typeof(OA) == 'undefined') {
    /**
    * @namespace OneAPI SDK namespace
    */
    OA = function() {};    
}

/* =============================================================================
 * Dm Class declaration
 * ========================================================================== */
    
// -- error --------------------------------------------------------------------
OA.DmApiError = function() {
    this._init.apply(this, arguments);
}
FM.extendClass(OA.DmApiError, FM.DmGenericError);

// properties
OA.DmApiError.prototype.objectSubClass = "";

OA.DmApiError.prototype._init = function(attrs) {
    this._super("_init",attrs, {        
        clientCorrelator: '',        
        serviceException: {},
        policyException: {},
        messageId: '',
        text: ''
    });    
    this.objectSubClass = "ApiErrors";
    
    var messageId = this.getAttr('serviceException.messageId',this.getAttr('policyException.messageId',''));
    var text = this.getAttr('serviceException.text', this.getAttr('policyException.text',''));
    var variables = this.getAttr('serviceException.variables', this.getAttr('policyException.variables',''));
    if(FM.isArray(variables)) {
        for(var i=variables.length-1; i > -1; i--) {
            text = text.replace('%' + (i+1),variables[i]);
        }
    }
    
    this.setAttr('messageId',messageId);
    this.setAttr('text',text);
}

OA.DmApiError.className = "DmApiError";
OA.DmApiError.fullClassName = 'dm.DmApiError';

FM.DmObject.addSubClassType('DmApiErrors',OA.DmApiError);


// -- user credentials ---------------------------------------------------------
OA.DmUserCredentials = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(OA.DmUserCredentials, FM.DmObject); 

// properties
OA.DmUserCredentials.prototype.objectSubClass = "";

// methods
OA.DmUserCredentials.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        username: "",
        ibAuthCookie: "",
        verified: false
    });
    this.objectSubClass = "UserCredentials";
}
        
OA.DmUserCredentials.prototype.getDataID = function() {
    return this.getAttr('ibAuthCookie','');
}

OA.DmUserCredentials.prototype.isAuthenticated = function() {
    return this.getAttr('ibAuthCookie','') != '';
}

OA.DmUserCredentials.prototype.isVerified = function() {
    return this.getAttr('ibAuthCookie','') != '' && this.getAttr('verified',false);
}

OA.DmUserCredentials.className = "DmUserCredentials";
OA.DmUserCredentials.fullClassName = 'dm.DmUserCredentials';

FM.DmObject.addSubClassType('UserCredentials',OA.DmUserCredentials);

// -- user login data ----------------------------------------------------------
OA.DmUserLoginData = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(OA.DmUserLoginData, FM.DmObject); 

// properties
OA.DmUserLoginData.prototype.objectSubClass = "";

// methods
OA.DmUserLoginData.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        username: '',
        password: ''
    });
    this.objectSubClass = "DmUserLoginData";
}
        
OA.DmUserLoginData.prototype.getDataID = function() {
    return this.getAttr('username','');
}


OA.DmUserLoginData.className = "DmUserLoginData";
OA.DmUserLoginData.fullClassName = 'dm.DmUserLoginData';

FM.DmObject.addSubClassType('UserLoginData',OA.DmUserLoginData);


// -- countries ----------------------------------------------------------------
OA.DmCountry = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(OA.DmCountry, FM.DmObject); 

// properties
OA.DmCountry.prototype.objectSubClass = "";

// methods
OA.DmCountry.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        id: '',
        code: '',
        prefix: '',
        name: '',
        locale: ''
    });
    this.objectSubClass = "DmCountry";
}
        
OA.DmCountry.prototype.getDataID = function() {
    return this.getAttr('code','');
}


OA.DmCountry.className = "DmCountry";
OA.DmCountry.fullClassName = 'dm.DmCountry';

FM.DmObject.addSubClassType('Country',OA.DmCountry);

// -- timezones ----------------------------------------------------------------
OA.DmTimezone = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(OA.DmTimezone, FM.DmObject); 

// properties
OA.DmTimezone.prototype.objectSubClass = "";

// methods
OA.DmTimezone.prototype._init = function(attrs) {            
    this._super("_init",attrs, {
        id: '',
        name: '',
        standardUtcOffset: '',
        dstOffset: '',
        dstStartTime: '',
        dstEndTime: '',
        countryId: '',
        title: ''
    });
    this.objectSubClass = "DmTimezone";

    var utcOff = parseInt(this.getAttr('standardUtcOffset',0));
    var utcH = utcOff / 60.0;
    var offH = Math.floor(Math.abs(utcH)) * (utcH < 0 ? -1 : 1);
    var offM = Math.floor(Math.abs(utcH - offH) * 60);
    var offStr = '(UTC ' + (offH < 0 ? '-' : '+');
    
    offStr += (offH < 10 && offH > -10 ?
        '0' + '' + Math.abs(offH) :
        '' + Math.abs(offH)) +
    ':' +
    (offM < 10 && offM > -10 ?
        '0' + '' + offM :
        '' + offM) +
    ') '
    ;
    
    this.setAttr('title',offStr + this.getAttr('name',''));
}
        
OA.DmTimezone.prototype.getDataID = function() {
    return this.getAttr('id','');
}


OA.DmTimezone.className = "DmTimezone";
OA.DmTimezone.fullClassName = 'dm.DmTimezone';

FM.DmObject.addSubClassType('Timezone',OA.DmTimezone);

// -- languages ----------------------------------------------------------------
OA.DmLanguage = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(OA.DmLanguage, FM.DmObject); 

// properties
OA.DmLanguage.prototype.objectSubClass = "";

// methods
OA.DmLanguage.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        id: '',
        languageCode: '',
        languageName: '',
        languageNameLocal: ''
    });
    this.objectSubClass = "DmLanguage";
}
        
OA.DmLanguage.prototype.getDataID = function() {
    return this.getAttr('languageCode','');
}


OA.DmLanguage.className = "DmLanguage";
OA.DmLanguage.fullClassName = 'dm.DmLanguage';

FM.DmObject.addSubClassType('Language',OA.DmLanguage);

// -- customer profile ---------------------------------------------------------
OA.DmCustomerProfile = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(OA.DmCustomerProfile, FM.DmObject); // extends FM.Object

// properties
OA.DmCustomerProfile.prototype.objectSubClass = "";

// methods
OA.DmCustomerProfile.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        id: '',
        city: '',
        countryId:  '',
        email:  '',
        enabled:  false,
        fax:  '',
        forename:  '',
        gsm:  '',            
        msn:  '',
        primaryLanguageId:  '',
        secondaryLanguageId:  '',
        skype:  '',
        street:  '',
        surname:  '',
        telephone:  '',
        timezoneId:  '',
        username:  '',
        zipCode:  ''
    });
    this.objectSubClass = "CustomerProfile";
}
        
OA.DmCustomerProfile.prototype.getDataID = function() {
    return this.getAttr('id','');
}
OA.DmCustomerProfile.className = "DmCustomerProfile";
OA.DmCustomerProfile.fullClassName = 'dm.DmCustomerProfile';
FM.DmObject.addSubClassType('CustomerProfile',OA.DmCustomerProfile);

// -- SMS message --------------------------------------------------------------
OA.DmSMSMessage = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(OA.DmSMSMessage, FM.DmObject); // extends FM.Object

// properties
OA.DmSMSMessage.prototype.objectSubClass = "";

// methods
OA.DmSMSMessage.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        senderAddress: '',
        senderName: '',
        message: '',
        address: '',
        notifyURL: '',
        callbackData: '',
        dataCoding: '0',
        clientCorrelator: ''
    });
    this.objectSubClass = "SMSMessage";
}
        
OA.DmSMSMessage.prototype.getDataID = function() {
    return this.getAttr('clientCorrelator','');
}
OA.DmSMSMessage.className = "DmSMSMessage";
OA.DmSMSMessage.fullClassName = 'dm.DmSMSMessage';
FM.DmObject.addSubClassType('SMSMessage',OA.DmSMSMessage);


// Delivery info !! dupli (DmDeliveryInfoNotification)
OA.DmDeliveryInfo = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(OA.DmDeliveryInfo, FM.DmObject); // extends FM.Object

// properties
OA.DmDeliveryInfo.prototype.objectSubClass = "";

// methods
OA.DmDeliveryInfo.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        address: '',
        deliveryStatus: '',
        deliveryInfoMessage: ''
    });
    this.objectSubClass = "DeliveryInfo";
}
        
OA.DmDeliveryInfo.prototype.getDataID = function() {
    return this.getID();
}

OA.DmDeliveryInfo.className = "DmDeliveryInfo";
OA.DmDeliveryInfo.fullClassName = 'dm.DmDeliveryInfo';
FM.DmObject.addSubClassType('DeliveryInfo',OA.DmDeliveryInfo);


// delivery status of SMS message
OA.DmDeliveryInfoNotification = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(OA.DmDeliveryInfoNotification, FM.DmObject); // extends FM.Object

// properties
OA.DmDeliveryInfoNotification.prototype.objectSubClass = "";

// methods
OA.DmDeliveryInfoNotification.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        deliveryInfo: {
            address: '',
            deliveryStatus: ''
        },
        callbackData: ''
    });
    this.objectSubClass = "DeliveryInfoNotification";
}
        
OA.DmDeliveryInfoNotification.prototype.getDataID = function() {
    return this.getID();
}

OA.DmDeliveryInfoNotification.className = "DmDeliveryInfoNotification";
OA.DmDeliveryInfoNotification.fullClassName = 'dm.DmDeliveryInfoNotification';
FM.DmObject.addSubClassType('DeliveryInfoNotification',OA.DmDeliveryInfoNotification);

// -- REST resource reference --------------------------------------------------
OA.DmResourceReference = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(OA.DmResourceReference, FM.DmObject); // extends FM.Object

// properties
OA.DmResourceReference.prototype.objectSubClass = "";

// methods
OA.DmResourceReference.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        resourceURL: '',
        resourceObject: null
    });
    this.objectSubClass = "ResourceReference";
}
        
OA.DmResourceReference.prototype.getDataID = function() {
    return this.getAttr('resourceURL','');
}
OA.DmSMSMessage.className = "DmResourceReference";
OA.DmSMSMessage.fullClassName = 'dm.DmResourceReference';
FM.DmObject.addSubClassType('ResourceReference',OA.DmResourceReference);

// -- inbound message ----------------------------------------------------------
OA.DmInboundMessage = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(OA.DmInboundMessage, FM.DmObject); // extends FM.Object

// properties
OA.DmInboundMessage.prototype.objectSubClass = "";

// methods
OA.DmInboundMessage.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        dateTime: '',
        destinationAddress: '',
        messageId: '',
        message: '',
        resourceURL: '',
        senderAddress: ''
    });
    this.objectSubClass = "InboundMessage";
}
        
OA.DmInboundMessage.prototype.getDataID = function() {
    return this.getID();
}

OA.DmInboundMessage.className = "DmInboundMessage";
OA.DmInboundMessage.fullClassName = 'dm.DmInboundMessage';
FM.DmObject.addSubClassType('InboundMessage',OA.DmInboundMessage);

// inboud query
OA.DmInboundQuery = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(OA.DmInboundQuery, FM.DmObject); // extends FM.Object

// properties
OA.DmInboundQuery.prototype.objectSubClass = "";

// methods
OA.DmInboundQuery.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        subscriptionId: '',
        maxBatchSize: '100'
    });
    this.objectSubClass = "InboundQuery";
}
        
OA.DmInboundQuery.prototype.getDataID = function() {
    return this.getAttr('subscriptionId','');
}

OA.DmInboundQuery.className = "DmInboundQuery";
OA.DmInboundQuery.fullClassName = 'dm.DmInboundQuery';
FM.DmObject.addSubClassType('InboundQuery',OA.DmInboundQuery);

// -- Hlr requests -------------------------------------------------------------
OA.DmTerminalRoamingQuery = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(OA.DmTerminalRoamingQuery, FM.DmObject); // extends FM.Object

// properties
OA.DmTerminalRoamingQuery.prototype.objectSubClass = "";

// methods
OA.DmTerminalRoamingQuery.prototype._init = function(attrs) {
    this._super("_init",attrs, {        
        address: '',
        notifyURL:'',
        includeExtendedData:'',
        clientCorrelator: '',
        callbackData: ''
    });
    this.objectSubClass = "DmTerminalRoamingQuery";
}
        
OA.DmTerminalRoamingQuery.prototype.getDataID = function() {
    return this.getAttr('address','');
}
OA.DmTerminalRoamingQuery.className = "DmTerminalRoamingQuery";
OA.DmTerminalRoamingQuery.fullClassName = 'dm.DmTerminalRoamingQuery';
FM.DmObject.addSubClassType('TerminalRoamingQuery',OA.DmTerminalRoamingQuery);


OA.DmTerminalRoamingStatus = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(OA.DmTerminalRoamingStatus, FM.DmObject); // extends FM.Object

// properties
OA.DmTerminalRoamingStatus.prototype.objectSubClass = "";

// methods
OA.DmTerminalRoamingStatus.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        address: '',
        currentRoaming: '',
        currentRoamingInfoMessage: '',
        servingMccMnc: {
            mcc: '',
            mnc: ''
        },
        resourceURL: '',
        retrievalStatus: '',
        extendedData: '',
        callbackData: ''
    });
    this.objectSubClass = "TerminalRoamingStatus";
}
        
OA.DmTerminalRoamingStatus.prototype.getDataID = function() {
    return this.getAttr('resourceURL','');
}
OA.DmTerminalRoamingStatus.className = "DmTerminalRoamingStatus";
OA.DmTerminalRoamingStatus.fullClassName = 'dm.DmTerminalRoamingStatus';
FM.DmObject.addSubClassType('TerminalRoamingStatus',OA.DmTerminalRoamingStatus);

// -- Account balance ----------------------------------------------------------
OA.DmAccountBalance = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(OA.DmAccountBalance, FM.DmObject); // extends FM.Object

// properties
OA.DmAccountBalance.prototype.objectSubClass = "";

// methods
OA.DmAccountBalance.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        currency: {
            id: '',
            currencyName: '',
            symbol: ''
        },
        balance: ''
    });
    this.objectSubClass = "AccountBalance";
}
        
OA.DmAccountBalance.prototype.getDataID = function() {
    return this.getID();
}
OA.DmAccountBalance.className = "DmAccountBalance";
OA.DmAccountBalance.fullClassName = 'dm.DmAccountBalance';
FM.DmObject.addSubClassType('AccountBalance',OA.DmAccountBalance);


// Inbound sms message 
OA.DmInboundSmsMessage = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(OA.DmInboundSmsMessage, FM.DmObject); // extends FM.Object

// properties
OA.DmInboundSmsMessage.prototype.objectSubClass = "";

// methods
OA.DmInboundSmsMessage.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        messageId: '',
        dateTime: '',
        destinationAddress: '',    
        message: '',
        resourceURL: '',
        senderAddress: ''
    });
    this.objectSubClass = "InboundSmsMessage";
}
        
OA.DmInboundSmsMessage.prototype.getDataID = function() {
    return this.getAttr('messageId','');
}

OA.DmInboundSmsMessage.className = "DmInboundSmsMessage";
OA.DmInboundSmsMessage.fullClassName = 'dm.DmInboundSmsMessage';
FM.DmObject.addSubClassType('InboundSmsMessage',OA.DmInboundSmsMessage);

// MO subscription
OA.DmMoSubscription = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(OA.DmMoSubscription, FM.DmObject); // extends FM.Object

// properties
OA.DmMoSubscription.prototype.objectSubClass = "";

// methods
OA.DmMoSubscription.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        subscriptionId: '',
        notifyURL: '',
        callbackData: '',
        criteria:"",
        destinationAddress: '',
        notificationFormat: '',
        title: ''
    });
    this.objectSubClass = "MoSubscription";
    this.setAttr('title',this.getAttr('destinationAddress','') + ', ' + this.getAttr('criteria',''));
    this.setChanged(false,false);
}

OA.DmMoSubscription.prototype.getDataID = function() {
    return this.getAttr('subscriptionId','');
}
OA.DmMoSubscription.className = "DmMoSubscription";
OA.DmMoSubscription.fullClassName = 'dm.DmMoSubscription';
FM.DmObject.addSubClassType('MoSubscription',OA.DmMoSubscription);

//-- USSD ----------------------------------------------------------------------
OA.DmUSSDQuery = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(OA.DmUSSDQuery, FM.DmObject); // extends FM.Object

// properties
OA.DmUSSDQuery.prototype.objectSubClass = "";

// methods
OA.DmUSSDQuery.prototype._init = function(attrs) {
    this._super("_init",attrs, {        
        address: '',
        message:'',
        stopSession: 'false',
        _ussd_function: null
    });
    this.objectSubClass = "USSDQuery";
}
        
OA.DmUSSDQuery.prototype.getDataID = function() {
    return this.getID();
}
OA.DmUSSDQuery.className = "DmUSSDQuery";
OA.DmUSSDQuery.fullClassName = 'dm.DmUSSDQuery';
FM.DmObject.addSubClassType('USSDQuery',OA.DmUSSDQuery);


// file: src/oa/config/oa.ListConfig.js
/* =============================================================================
 * List helper functions 
 * ========================================================================== */

// -- urls & proxy -------------------------------------------------------------
OA.apiURL = 'http://api.parseco.com/1';
OA.proxyURL= '';
OA.setProxy = function(url) {  
    OA.proxyURL = FM.isset(url) && url ? url : '';
}

OA.setAPIurl = function(url) {  
    OA.apiURL = FM.isset(url) && url ? url : '';
}


//options = {dmList: this, arguments: args};
OA.getApiUrl = function(options) {
    var dmList = FM.getAttr(options,'dmList',null);
    
    var url = OA.proxyURL != '' ? 
    OA.proxyURL :
    OA.apiURL + (
        dmList && FM.isset(dmList['getAttr']) ? 
        dmList.getProperty('config.resourcePath','') : 
        ''
        )
    ;
    
    if(url.substr(url.length-1) == "/") {
        url = url.substr(0,url.length-1);
    }
    return url;
}


// -- ajax call headers --------------------------------------------------------
OA.getApiHeaders = function(options) {
    var dmList = FM.getAttr(options,'dmList',null);
    var hdrs = {};
    if(OA.proxyURL != '') {
        if(OA.apiAuth.getAttr("ibAuthCookie",'') != '') {
            hdrs['P-Authorization'] = 'IBSSO ' + OA.apiAuth.getAttr("ibAuthCookie",'');
        }
        hdrs['P-Rest-Service'] = dmList ? dmList.getProperty('config.resourcePath','') : '';
        hdrs['P-Http-Headers'] = 'Authorization';
        hdrs['P-Http-Method']  = dmList ? dmList.getProperty('config.resourceMethod','POST') : 'POST';
    } else {
        if(OA.apiAuth.getAttr("ibAuthCookie",'') != '') {
            hdrs['Authorization'] = 'IBSSO ' + OA.apiAuth.getAttr("ibAuthCookie",'');
        }
    }
    
    return hdrs;
}

// -- ajax call method ---------------------------------------------------------
OA.getApiMethod = function(dmList) {
    if(OA.proxyURL != '') {
        return 'POST';
    } else {
        return dmList ? dmList.getProperty('config.resourceMethod','POST') : 'POST';
    }
}

// -- ajax response parsing ----------------------------------------------------
// {dmList: this, utAjax: oAjax, response: response.getAttr('value',null)}
OA.isErrorResponse = function(options) {  
    var oData = FM.getAttr(options,'response',{});
    
    if(!FM.isObject(oData)) {
        oData = FM.unserialize(oData,{});
    }
    var response = FM.isset(oData) && oData ? oData : null;
    return response && FM.isset(response['requestError']);
}

OA.errorParser = function(options) {
    var response = FM.getAttr(options,'response',{});
    if(!FM.isObject(response)) {
        response = FM.unserialize(response,{});
    }
    return new OA.DmApiError(FM.getAttr(response,'requestError',{}));
}

OA.responseParser = function(options) {
    var oData = FM.getAttr(options,'response',{});
    var oList = FM.getAttr(options,'dmList',null);
    
    if(!oList || !FM.isset(oList.getProperty)) {
        return new FM.DmGenericValue({
            value: oData
        });
    }
    
    var cls = oList.getProperty('config._responseClass',null);
    if(!cls) return new FM.DmGenericValue({
        value: oData
    });
    
    
    if(FM.isString(cls)) {
        cls = FM.stringPtrToObject(cls);
        if(!cls) return null;
    }
    
    if(!FM.isFunction(cls)) return null;
    return new cls(oData); 
}


/* =============================================================================
 * List configurations
 * ========================================================================== */
// == cache ====================================================================
// -- customer profiles cache --------------------------------------------------
FM.DmList.addConfiguration('cache', {});

// == user managment ===========================================================
// -- user login ---------------------------------------------------------------
FM.DmList.addConfiguration('USER_login', {
    resourcePath: '/customerProfile/login',
    url: OA.getApiUrl,
    method: OA.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        username: true,
        password: true
    },
    headers: OA.getApiHeaders,
    auth: null,        
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: 'login',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    // custom
    _responseClass: OA.DmUserCredentials
});

// -- user logout --------------------------------------------------------------
FM.DmList.addConfiguration('USER_logout', {
    resourcePath: '/customerProfile/logout',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {},
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'TEXT',
    validResponseCodes: '204', // nocontent
    listType: 'single',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser    
});

// == utils ====================================================================
// -- list of countries --------------------------------------------------------
FM.DmList.addConfiguration('UTIL_countries', {
    resourcePath: '/countries/[:id]',
    url: OA.getApiUrl,
    method: OA.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        id: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',    
    listType: 'collection',
    dataProperty: 'countries',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    // custom
    _responseClass: OA.DmCountry
});

// -- list of timezones --------------------------------------------------------
FM.DmList.addConfiguration('UTIL_timezones', {
    resourcePath: '/timezones/[:id]',
    url: OA.getApiUrl,
    method: OA.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        id: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',    
    listType: 'collection',
    dataProperty: 'timeZones',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    // custom
    _responseClass: OA.DmTimezone
});

// -- list of languages --------------------------------------------------------
FM.DmList.addConfiguration('UTIL_languages', {
    resourcePath: '/languages/[:id]',
    method: OA.getApiMethod,
    url: OA.getApiUrl,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        id: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',    
    listType: 'collection',
    dataProperty: 'languages',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    // custom
    _responseClass: OA.DmLanguage
});

// == profile managment ========================================================
// -- customer profile ---------------------------------------------------------
// ovo bi trebalo odraditi poziv sa i bez id-a
FM.DmList.addConfiguration('CUSTOMER_profile_get', {
    resourcePath: '/customerProfile/[:userId]',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        userId: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',    
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    // custom
    _responseClass: OA.DmCustomerProfile    
});

// -- customer profile update --------------------------------------------------
FM.DmList.addConfiguration('CUSTOMER_profile_update', {
    resourcePath: '/customerProfile',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'PUT',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        id: true,
        username: true,
        forename: true,
        surname: true,
        street: true,
        city: true,
        zipCode: true,
        telephone: true,
        gsm: true,
        fax: true,
        email: true,
        msn: true,
        skype: true,
        countryId: true,
        //countryCode: true,
        timezoneId: true,
        primaryLanguageId: true,
        secondaryLanguageId: true,
        enabled: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '201', // ??   
    listType: 'single',    
    dataProperty: '',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    // custom
    _responseClass: OA.DmCustomerProfile
});

// == MO =======================================================================
FM.DmList.addConfiguration('SMS_inbound_update', {
    resourcePath: '/smsmessaging/inbound/subscriptions',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'PUT',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        notifyURL: true,
        subscriptionId: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'TEXT',
    validResponseCodes: '201',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser
});

FM.DmList.addConfiguration('SMS_inbound_sub_get', {
    resourcePath: '/smsmessaging/inbound/subscriptions',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        page: '',
        pageSize: ''
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'collection',
    dataProperty: 'subscriptions',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    // custom
    _responseClass: OA.DmMoSubscription
});

FM.DmList.addConfiguration('SMS_inbound_sub_add', {
    resourcePath: '/smsmessaging/inbound/subscriptions',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        destinationAddress: '',
        notifyURL: '',
        criteria: '',
        notificationFormat: '',
        callbackData: '',
        clientCorrelator: ''        
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'TEXT',
    validResponseCodes: '201',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    // custom
    _responseClass: FM.DmGenericValue
});

FM.DmList.addConfiguration('SMS_inbound_sub_delete', {
    resourcePath: '/smsmessaging/inbound/subscriptions/[:subscriptionId]',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'DELETE',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        subscriptionId: ''
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'TEXT',
    validResponseCodes: '204',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser
});

FM.DmList.addConfiguration('SMS_inbound_get_messages', {
    resourcePath: '/smsmessaging/inbound/registrations/[:subscriptionId]/messages',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        subscriptionId: true,
        maxBatchSize: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'collection',
    dataProperty: 'inboundSMSMessageList.inboundSMSMessage',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    
    // custom
    _responseClass: OA.DmInboundMessage
});

// == SMS ======================================================================
FM.DmList.addConfiguration('SMS_send', {
    resourcePath: '/smsmessaging/outbound/[:senderAddress]/requests',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        senderAddress: true,
        senderName: true,
        message: true,
        address: true,
        notifyURL: true,
        callbackData: true,
        dataCoding: true,
        clientCorrelator: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '201',
    listType: 'single',
    dataProperty: 'resourceReference',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    // custom
    _responseClass: OA.DmResourceReference
});

// Delivery info
FM.DmList.addConfiguration('DELIVERY_INFOS_get', {
    resourcePath: '/smsmessaging/outbound/[:senderAddress]/requests/[:requestID]/deliveryInfos',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        senderAddress: true,
        requestID: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'collection',
    dataProperty: 'deliveryInfoList.deliveryInfo',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    
    // custom
    _responseClass: OA.DmDeliveryInfo
});

// == HLR ======================================================================
FM.DmList.addConfiguration('HLR_send', {
    resourcePath: '/terminalstatus/queries/roamingStatus',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {        
        address: true,
        notifyURL: true,
        includeExtendedData: true,
        clientCorrelator: true,
        callbackData: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: 'roaming',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    
    // custom
    _responseClass: OA.DmTerminalRoamingStatus
});

    
// == USSD =====================================================================
FM.DmList.addConfiguration('USSD_send', {
    resourcePath: '/ussd/outbound',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        address: true,
        message: true,
        stopSession: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    // custom
    _responseClass: OA.DmInboundMessage
});

FM.DmList.addConfiguration('USSD_send_stop', {
    resourcePath: '/ussd/outbound',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        address: true,
        message: true,
        stopSession: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'TEXT',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser
});

// == Account balance ==========================================================
FM.DmList.addConfiguration('CUSTOMER_balance_get', {
    resourcePath: '/customerProfile/balance',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {},
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    
    // custom
    _responseClass: OA.DmAccountBalance
});

// file: src/oa/config/oa.ClassDecorations.js
// -- decorations --------------------------------------------------------------
FM.DmObject.defineClassDecorations('SignupData',{
        username:  'Username',
        forename:  'First name',
        surname:  'Last name',
        gsm:  'Telephone (GSM)',
        telephone:  'Telephone',
        email:  'Email address',
        password:  'Password',
        password2:  'Repeat password',
        data: 'Data'
});


FM.DmObject.defineClassDecorations('CustomerProfile',{
        id:  'Id',
        username:  'Username',
        forename:  'First name',
        surname:  'Last name',
        
        countryId:  'Country',
        city: 'City',
        street:  'Street',
        zipCode:  'Zip code',

        fax:  'Fax',        
        gsm:  'Telephone (GSM)',
        telephone:  'Telephone',

        email:  'Email address',
        msn:  'MSN id',
        skype:  'Skype id',
        
        primaryLanguageId:  'Language',
        secondaryLanguageId:  'Secondary language',
        timezoneId:  'Timezone',
                
        enabled:  'Enabled',
        data: 'Data'
});


// file: src/oa/oa.AppOneApi.js
// -- osnovna APP klasa --------------------------------------------------------
OA.AppOneApi = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(OA.AppOneApi,FM.AppObject); 

// properties
OA.AppOneApi.prototype.objectSubClass = "";
OA.AppOneApi.prototype.customersList = null;
OA.AppOneApi.prototype.userID = '';
OA.AppOneApi.prototype.appRegistry = null;


OA.AppOneApi.prototype._init = function(attrs) {            
    // set date format
    FM.dateTimeDivider = 'T';
    
    this.userID =  ''; // !test
    this.appRegistry = new FM.UtRegistry();
    this.customersList = new FM.DmList({},'cache');
    
    this._super("_init",attrs);    
    this.objectSubClass = "AppOneApi";

    if(!OA.apiLastErr) {
        OA.apiLastErr = new OA.DmApiError();
        OA.apiLastErr.addListener(this);
    }    

    // imas li token u cookie-u
    this.loadCredentials();
        
}

       
OA.AppOneApi.prototype.run = function() {
    this._super("run");
    this.userID =  ''; // !test
}

OA.AppOneApi.prototype.dispose = function() {        
    this._super("dispose");
}


OA.AppOneApi.prototype.getErrorObject = function(oErr) {
    oErr = FM.isset(oErr) && oErr ? oErr : '';
    
    if(FM.isString(oErr)) {
        oErr = new OA.DmApiError({
            serviceException: {
                messageId: (oErr == '' ? '0' : '999'),
                text: oErr
            }
        });
    }
    
    return oErr;
}

OA.AppOneApi.prototype.setLastError = function(oErr) {
    if(!FM.isset(oErr) || !oErr || !FM.isObject(oErr)) {
        oErr = new OA.DmApiError();
    }
    if(!OA.apiLastErr) {
        OA.apiLastErr = oErr;
        return OA.apiLastErr;
    }
    OA.apiLastErr.forEachAttr(function(attr,value) {
        OA.apiLastErr.setAttr(attr,oErr.getAttr(attr,null));
        return true;
    });
    OA.apiLastErr.setChanged(true,true); // posalji event
    return OA.apiLastErr;
}

// --  auth ------------------------------------------------------------
OA.AppOneApi.prototype._clearAuthData = function() {
    var dom = document.domain;
    if(dom.indexOf('.') > 0) {
        dom = dom.substr(dom.indexOf('.'));
    }
    FM.deleteCookie('IbAuthCookie',dom);

    OA.apiAuth.setAttr("username","");
    OA.apiAuth.setAttr("password","");
    OA.apiAuth.setAttr("verified",false);
    OA.apiAuth.setAttr("ibAuthCookie","");
    
}

OA.AppOneApi.prototype.saveCredentials = function() {
    if(OA.apiAuth)  {        
        var dom = document.domain;
        if(dom.indexOf('.') > 0) {
            dom = dom.substr(dom.indexOf('.'));
        }
        FM.saveCookie('IbAuthCookie', OA.apiAuth.getAttr('ibAuthCookie',''), -1,dom);
        FM.saveCookie('IbAuthCookieInfo', OA.apiAuth.getAttr(), -1,dom);
    }
}

OA.AppOneApi.prototype.loadCredentials = function() {
    var authArr = FM.loadCookie('IbAuthCookieInfo');    
    var authKey = FM.loadCookie('IbAuthCookie',true);
    authArr['ibAuthCookie'] = authKey;
    authArr = authArr && FM.isObject(authArr) ? authArr : {
        username: "",
        ibAuthCookie: "",
        verified: false        
    };
    
    // if credentials object is not created yet
    if(!OA.apiAuth) {
        OA.apiAuth = FM.DmObject.newObject('UserCredentials', {
            username:   FM.getAttr(authArr,'username',''),
            ibAuthCookie: FM.getAttr(authArr,'ibAuthCookie',''),
            verified: FM.getAttr(authArr,'verified','false') == 'true'
        });
        OA.apiAuth.addListener(this);        // add app listener
    }    
}

// pr .login(DmUserLoginData,cbfn)
OA.AppOneApi.prototype.login = function(username, password,cbfn) {
    if(FM.isObject(username) && FM.isset(username.getSubClassName) && username.getSubClassName() == 'DmUserLoginData') {
        cbfn = password;
        var o = username;
        username = o.getAttr('username','');
        password = o.getAttr('password','');
    }
    var me = this;
    var dmlist = new FM.DmList({
        username: username, 
        password: password
    },
    'USER_login'
    );
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oCred = null;
            FM.forEach(data.Added,function(id, obj) {
                oCred = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            oCred.forEachAttr(function(name,value) {
                OA.apiAuth.setAttr(name,value);
                return true;
            });
            OA.apiAuth.setAttr('username',username);
            me.saveCredentials();
            OA.apiAuth.setChanged(true,true); // posalji event
            callbackFn(true,OA.apiAuth);
            
            // posalji auth changed
            me.fireEvent('onAuthChanged',OA.apiAuth);
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();            
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();
}


OA.AppOneApi.prototype.logout = function(cbfn) {
    var me = this;
    var dmlist = new FM.DmList({},'USER_logout');
        
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var dom = document.domain;
    if(dom.indexOf('.') > 0) {
        dom = dom.substr(dom.indexOf('.'));
    }
    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        
        onListEnd: function(sender,data) {
            me._clearAuthData();
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            OA.apiAuth.setChanged(true,true);
            callbackFn(true,OA.apiAuth);
            me.fireEvent('onAuthChanged',OA.apiAuth);
            return true;
        },
        onListError: function(sender,data) {
            me._clearAuthData();
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            OA.apiAuth.setChanged(true,true);
            callbackFn(true,OA.apiAuth);
            me.fireEvent('onAuthChanged',OA.apiAuth);
            return true;
        }
      
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
     
    return true;
}


// country cache
OA.AppOneApi.prototype.getCountries = function(code,cbfn) {        
    // 
    code = FM.isset(code) && code ? code : '';
    var me = this;
    var dmlist = new FM.DmList({
        countryCode: code 
    },'UTIL_countries'
    );
    
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            callbackFn(true,dmlist);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

OA.AppOneApi.prototype.getLanguages = function(code,cbfn) {        
    // 
    code = FM.isset(code) && code ? code : '';
    var me = this;
    var dmlist = new FM.DmList({
        countryCode: code 
    },'UTIL_languages'
    );
    
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            callbackFn(true,dmlist);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

OA.AppOneApi.prototype.sendSMS = function(oSmsMessage,cbfn) {        
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    if(!FM.isset(oSmsMessage) || !oSmsMessage) {
        callbackFn(false,null);
        return;
    }
    
    var me = this;
    var dmlist = new FM.DmList(oSmsMessage.getAttr(),'SMS_send');
    if(oSmsMessage.getAttr('clientCorrelator','') == '') {
        dmlist.setAttr('clientCorrelator',FM.generateNewID());
    }
    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oRef = null;
            FM.forEach(data.Added,function(id, obj) {
                oRef = obj;
                oRef.setAttr('resourceObject',oSmsMessage.getAttr());
                oRef.setAttr('resourceObject.clientCorrelator',dmlist.getAttr('clientCorrelator',''));
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,oRef);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

/* WORK IN PROGRESS */
OA.AppOneApi.prototype.deleteInboundSubscription = function(oSub,cbfn) {
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    
    var me = this;
    var params = {
        subscriptionId: oSub.getAttr('subscriptionId','')
    };
    
   
    var dmlist = new FM.DmList(params,'SMS_inbound_sub_delete');    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oNums = [];
            FM.forEach(data.Added,function(id, obj) {
                oNums.push(obj);
                return true;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,oNums);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();                
}


OA.AppOneApi.prototype.retrieveInboundSubscriptions = function(
    /*
    destinationAddress,notifyURL,
    criteria,notificationFormat,
    callbackData,
    clientCorrelator,
*/
    page,pageSize,
    cbfn
    ) {
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    
    var me = this;
    var params = {};
    if(FM.isset(page) && page) params['page'] = page;
    if(FM.isset(pageSize) && pageSize) params['pageSize'] = pageSize;
    
    /*
    var params = {
        destinationAddress: destinationAddress
    };
    if(FM.isset(notifyURL) && notifyURL) params['notifyURL'] = notifyURL;
    if(FM.isset(criteria) && criteria) params['criteria'] = criteria;
    if(FM.isset(notificationFormat) && notificationFormat) params['notificationFormat'] = notificationFormat;
    if(FM.isset(callbackData) && callbackData) params['callbackData'] = callbackData;
    if(FM.isset(clientCorrelator) && clientCorrelator) params['clientCorrelator'] = clientCorrelator;
    */
   
    var dmlist = new FM.DmList(params,'SMS_inbound_sub_get');
    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {            
            var oMsgs = [];
            FM.forEach(data.Added,function(id, obj) {
                oMsgs.push(obj);
                return true;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,oMsgs);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

OA.AppOneApi.prototype.subscribeToInboundMessagesNotifications = function(
    destinationAddress,notifyURL,
    criteria,notificationFormat,
    callbackData,
    clientCorrelator,
    cbfn
    ) {
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    
    var me = this;
    var params = {
        destinationAddress: destinationAddress
    };
    if(FM.isset(notifyURL) && notifyURL) params['notifyURL'] = notifyURL;
    if(FM.isset(criteria) && criteria) params['criteria'] = criteria;
    if(FM.isset(notificationFormat) && notificationFormat) params['notificationFormat'] = notificationFormat;
    if(FM.isset(callbackData) && callbackData) params['callbackData'] = callbackData;
    if(FM.isset(clientCorrelator) && clientCorrelator) params['clientCorrelator'] = clientCorrelator;
   
    var dmlist = new FM.DmList(params,'SMS_inbound_sub_add');
    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {            
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,data);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}
        
OA.AppOneApi.prototype.retrieveRoamingStatus = function(
    sAddress,sNotifyURL,
    bExternalData, sClientCorrelator, sCallbackData, 
    cbfn
    ) {
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    if(!FM.isset(sAddress) || sAddress == '') {
        callbackFn(false,null);
        return;
    }
    
    var me = this;
    var params = {
        address: sAddress
    };
    if(FM.isset(sNotifyURL) && sNotifyURL != '' && sNotifyURL != null) {
        params['notifyURL'] = sNotifyURL;
    }
    /*
    if(FM.isset(bExternalData) && bExternalData != null) {
        params['includeExtendedData'] = bExternalData != true;
    }
    if(FM.isset(sClientCorrelator) && sClientCorrelator != '' && sClientCorrelator != null) {
        params['clientCorrelator'] = sClientCorrelator;
    }
    if(FM.isset(sCallbackData) && sCallbackData != '' && sCallbackData != null) {
        params['callbackData'] = sCallbackData;
    }
    */
    var dmlist = new FM.DmList(params,'HLR_send');
    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oRef = null;
            FM.forEach(data.Added,function(id, obj) {
                oRef = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            if(!oRef.isAttr('currentRoaming'))  { // not found
                me.setLastError(new FM.DmGenericError({messageId: 'CLI0001', text: 'Unable to query roaming status'}));
                callbackFn(false,OA.apiLastErr);
                return true;
            }
            callbackFn(true,oRef);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

OA.AppOneApi.prototype.updateInboundSubscription = function(oSub,cbfn) {
    // 
    var me = this;
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    
    var dmlist = new FM.DmList({
        notifyURL: oSub.getAttr('notifyURL',''),
        subscriptionId: oSub.getAttr('subscriptionId','')
        },'SMS_inbound_update');    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,null);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}



OA.AppOneApi.prototype.isAuthenticated = function() {
    return OA.apiAuth.isAuthenticated();
}

OA.AppOneApi.prototype.onDoLogin = function(sender,evdata) {
    var dmobj = FM.getAttr(evdata,'object',null);
    if(!dmobj) return;
    
    this.login(dmobj.getAttr('username',''), dmobj.getAttr('password',''),FM.getAttr(evdata,'callback',null));
}

OA.AppOneApi.prototype.onDoLogout = function(sender,evdata) {
    this.logout(FM.getAttr(evdata,'callback',null));
}

// --  customer --------------------------------------------------------
OA.AppOneApi.prototype.getCustomerId = function() {
    return(OA.apiAuth.getAttr('id',''));
}

OA.AppOneApi.prototype.getCustomerProfile = function(id,callbackFn) {
    var oProfile = null;
    var me = this;
    
    // ako je new
    if(id == 'new') {
        oProfile = new OA.DmCustomerProfile({
            id: 'new'
        });
        if(FM.isset(callbackFn)) {
            callbackFn(true,oProfile);
        }
        return(oProfile);        
    }
        
    // ako nisi auth
    if(!OA.apiAuth.isAuthenticated()) {
        if(FM.isset(callbackFn)) {
            callbackFn(false,oProfile);
        }
        return(oProfile);                
    }
    
    // auth je ok i nije new
    if(id == 'me' || id == OA.apiAuth.getAttr('id','')) {        
        id = '';
    }
    
    oProfile = this.customersList.get(id == '' ? OA.apiAuth.getAttr('id','') : id);

    // ako nije fetchan a callback nije poslan vrati null
    // samo u slucaju kad je auth prosao
    if(!oProfile && FM.isset(callbackFn)) {
        return this.fetchCustomerProfile(id,function(ok, cp) {
            /*
            if(ok && id == '') {
                OA.apiAuth.setAttr('username',cp.getAttr('username',''))
                me.saveCredentials();
            }*/
            if(callbackFn) {
                callbackFn(ok,cp);
            }
        });
    } else if(oProfile && oProfile.getAttr('id','y') == OA.apiAuth.getAttr('id','x')) {
        OA.apiAuth.setAttr('username',oProfile.getAttr('username',''))
        this.saveCredentials();        
    }

    // kraj
    if(FM.isset(callbackFn)) {
        callbackFn(true,oProfile);
    }
    return(oProfile);
}


// 
OA.AppOneApi.prototype.fetchCustomerProfile = function(id,callbackFn) {
    id = id == 'me' ? '' : id;
    callbackFn = FM.isset(callbackFn) ? callbackFn : function() {};

    var me = this;
    var dmlist = new FM.DmList({
        userId: id
    },'CUSTOMER_profile_get');
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oProfile = null;
            FM.forEach(data.Added,function(id, obj) {
                oProfile = obj;
                return false;
            });
            oProfile.setAttr('forename',oProfile.getAttr('forename','Unknown') == 'Unknown' ? '' : oProfile.getAttr('forename',''));
            oProfile.setAttr('surname',oProfile.getAttr('surname','Unknown') == 'Unknown' ? '' : oProfile.getAttr('surname',''));
            oProfile.setChanged(false,false);
	    
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            me.customersList.refreshList(data,false,'', false,true);
            try {
                callbackFn(true,oProfile);
            } catch(e) {}
            return true;
        },
        onListError: function(sender,data) {                                   
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };                
    dmlist.addListener(lstnr);
    dmlist.getData();
}


// callbackFn(ev,data)
OA.AppOneApi.prototype.updateCustomerProfile = function(oCustomer,callbackFn) {
    callbackFn = FM.isset(callbackFn) && callbackFn && FM.isFunction(callbackFn) ? callbackFn : function() {};
    oCustomer = 
    !FM.isset(oCustomer) || !oCustomer || oCustomer == '' || oCustomer == 'me'?
    this.getCustomerProfile() :  oCustomer
    ;

    if(!oCustomer || oCustomer.getSubClassName() != 'CustomerProfile') { 
        if(FM.isset(callbackFn)) {
            try {
                callbackFn(false,null);
            } catch(e) {}
        }
        return false;
    }

    var dmlist = new FM.DmList(oCustomer.getAttr(),'CUSTOMER_profile_update');
    var me = this;
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            me.customersList.refreshList(data,false,'', false,true);
            callbackFn(true,me.customersList.get(oCustomer.getDataID()));
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }  
    };

    dmlist.addListener(lstnr);                
    dmlist.getData();
    return true;
},

OA.AppOneApi.prototype.createCustomerProfile = function(oCustomer,callbackFn) {            
    callbackFn = FM.isset(callbackFn) && callbackFn && FM.isFunction(callbackFn) ? callbackFn : function() {};
    oCustomer = 
    FM.isset(oCustomer) && oCustomer && oCustomer.getSubClassName() == 'CustomerProfile' ?
    oCustomer : 
    null
    ;

    if(!oCustomer) { 
        if(FM.isset(callbackFn)) {
            try {
                callbackFn(false,null);
            } catch(e) {}
        }
        return false;
    }

    var uname = oCustomer.getAttr('username','');
    var pass = oCustomer.getAttr('password','');

    var dmlist = new FM.DmList(oCustomer.getAttr(),'CUSTOMER_profile_create');
    var me = this;
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            // nadji novi cp                     
            var oNewCustomer = null;
            dmlist.forEachListElement(function(pname,value) {
                oNewCustomer = value;
                return false;
            });                    

            // disposaj listu
            dmlist.removeListener(lstnr);
            dmlist.dispose();

            // akjo nismo nasli novi cp
            if(!oNewCustomer) {
                if(FM.isset(callbackFn) && callbackFn) callbackFn(false,oNewCustomer);
                return true;
            }

            // da bi nam ml host radio moramo new objekt "prepisati" (da ptr. na dmobjekt ostane isti)
            var oOldCustomer = me.customersList.get('new');
            if(oOldCustomer) {
                oOldCustomer.forEachAttr(function(name, value) {
                    oOldCustomer.setAttr(name,oNewCustomer.getAttr(name,''));
                    return true;
                });
                me.customersList.addToList(oOldCustomer,oOldCustomer.getDataID(),true);
                me.customersList.removeFromList('new',true);
                oOldCustomer.setChanged(true,true);                        
            } else {
                me.customersList.addToList(oNewCustomer,oNewCustomer.getDataID(),true);
                oOldCustomer = oNewCustomer;
            }


            if(FM.isset(callbackFn) && callbackFn) callbackFn(true,oOldCustomer);
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }  
    };

    dmlist.addListener(lstnr);                
    dmlist.getData();
    return true;
}

OA.AppOneApi.prototype.deleteCustomerProfile = function(id,callbackFn) {
    id = FM.isset(id) ? (id == 'me' ? this.getCustomerId() : id) : this.getCustomerId();
    callbackFn = FM.isset(callbackFn) ? callbackFn : function() {};

    var me = this;
    var dmlist = new FM.DmList({
        id: id
    },'CUSTOMER_profile_delete');
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            if(me.customersList.get(id)) {
                me.customersList.removeFromList(id,true);
            }
            try {
                callbackFn(true);
            } catch(e) {}
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };                
    dmlist.addListener(lstnr);
    dmlist.getData();
}

OA.AppOneApi.prototype.getAccountBalance = function(callbackFn) {
    callbackFn = FM.isset(callbackFn) ? callbackFn : function() {};

    var me = this;
    var dmlist = new FM.DmList({
        },'CUSTOMER_balance_get');
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            var oBalance = null;
            FM.forEach(data.Added,function(id, obj) {
                oBalance = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            
            try {
                callbackFn(true,oBalance);
            } catch(e) {}
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };                
    dmlist.addListener(lstnr);
    dmlist.getData();
}

OA.AppOneApi.prototype.queryDeliveryStatus = function(address,clientCorrelatorOrResourceReference,callbackFn) {
    callbackFn = FM.isset(callbackFn) ? callbackFn : function() {};

    var me = this;
    var dmlist = new FM.DmList({
        senderAddress: address,
        requestID: clientCorrelatorOrResourceReference        
    },'DELIVERY_INFOS_get');
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            var oDeliveryInfo = null;
            FM.forEach(data.Added,function(id, obj) {
                oDeliveryInfo = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            
            try {
                callbackFn(true,oDeliveryInfo);
            } catch(e) {}
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };                
    dmlist.addListener(lstnr);
    dmlist.getData();        
}


OA.AppOneApi.prototype.onUpdateCustomerProfile = function(sender,evdata) {
    evdata = FM.isset(evdata) && FM.isObject(evdata) ? evdata : {};
    
    var oCustomer = FM.getAttr(evdata,'object',null);
    // 
    if(!oCustomer || (this.isAuthenticated() != true && oCustomer.getAttr('id','') != 'new')) return false;
    
    
    return  (
        oCustomer.getAttr('id','') != "new" ? 
        this.updateCustomerProfile(oCustomer,FM.getAttr(evdata,'callback',null)) : 
        this.createCustomerProfile(oCustomer,FM.getAttr(evdata,'callback',null))
        );
}

OA.AppOneApi.prototype.onCreateCustomerProfile = function(sender,evdata) {
    var oCustomer = this.customersList.get('new');
    if(!oCustomer) return false;
    return this.createCustomerProfile(oCustomer);            
}

OA.AppOneApi.prototype.onChange = function(oObj) {   
    if(oObj == OA.apiLastErr && OA.apiLastErr.getAttr("messageId") == 'SVC0003') {
        this._clearAuthData();
        //this.setLastError();
        OA.apiAuth.setChanged(true,true);
        this.fireEvent('onAuthChanged',OA.apiAuth);
    }
}   

OA.AppOneApi.className = "AppOneApi";
OA.AppOneApi.fullClassName = 'oa.AppOneApi';
    

// file: src/oa/api.js
// -- api namespace ------------------------------------------------------------
if(typeof(oneapi) == 'undefined') {
    oneapi = function() {};

    // session
    oneapi.session = {};
    oneapi.session.version = '0.1';        
    oneapi.session.app = null;
    oneapi.session.listeners = {};    
    oneapi.session.evHandler = {};
    oneapi.ml = {};    
    // methods
    
    
    /** Returns Infobip API version
    * 
    */
    oneapi.getVersion = function() {
        return oneapi.session.version;
    }

    /*
     * Inicijalizacija, options su tu za slucaj kad zelimo i widgete
     * pa moramo aplikaciju konfigurirati drugacije
     * Vraca app / null
     */
    oneapi.init = function(args,options) {
        args = FM.isset(args) && args ? args : {};
        options = FM.isset(options) && options ? options : {
            appClass: 'OA.AppOneApi',
            dmObject: new FM.DmObject(args)
        }
        oneapi.session.app = FM.AppObject.startApp(options,oneapi.session.evHandler);
                
        return oneapi.session.app;
    }
    

    /*
     * Events
     */    
    oneapi._procEvents = function(ev,data) {
        if(!FM.isset(oneapi.session.listeners[ev])) {
            return true;
        }        
        
        var lst = oneapi.session.listeners[ev];
        for(var i = 0; i <lst.length;i++)  {
            if(FM.isFunction(lst[i])) {
                try {
                    lst[i](data);
                } catch(e) {}
            }
        }
        
        return true;
    }
    
    oneapi.addListener = function(ev,cbFn) {
        if(!FM.isset(oneapi.session.listeners[ev])) {
            oneapi.session.listeners[ev] = [];
        }        
        for(var i = 0; i < oneapi.session.listeners[ev].length;i++)  {
            if(oneapi.session.listeners[ev][i] == cbFn) return true;
        }
        oneapi.session.listeners[ev].push(cbFn);
        
        if(!FM.isset(oneapi.session.evHandler[ev])) {
            oneapi.session.evHandler[ev] = function(sender,data) {
                oneapi._procEvents(ev,data);
            }
        }
        return true;
    }
    
    oneapi.removeListener = function(ev,cbFn) {
        if(!FM.isset(oneapi.session.listeners[ev])) {
            return true;
        }        
        
        var nlist = [];
        for(var i = 0; i < oneapi.session.listeners[ev].length;i++)  {
            if(oneapi.session.listeners[ev][i] != cbFn) {
                nlist.push(oneapi.session.listeners[ev][i]);
            }
        }
        oneapi.session.listeners[ev] = nlist;
        return true;
    }

    // == API methods ==========================================================
    /*
     * login & signup
    */
    oneapi.login = function(username,password,callbackFn) {
        oneapi.session.app.login(username, password,callbackFn);
    }
    
    oneapi.logout = function() {
        return oneapi.session.app.logout();
    }


    /*
    * Customer
    */
    oneapi.getCustomerId = function() {
        return oneapi.session.app.getCustomerId();
    }
   
    oneapi.getCustomerProfile = function(id,callbackFn) {
        id = FM.isset(id) && id && id != '' ? id : 'me';
        return oneapi.session.app.getCustomerProfile(id,callbackFn);
    }
    
    
    oneapi.updateCustomerProfile = function(oCustomer,callbackFn) {
        oCustomer = FM.isset(oCustomer) && oCustomer ? oCustomer : 'me';
        return oneapi.session.app.updateCustomerProfile(oCustomer,callbackFn);
    }
 
    oneapi.createCustomerProfile = function(attrs,callbackFn) {
        attrs = attrs = FM.isset(attrs) ? attrs : {};
        
        // kreiraj novi profil
        var oCustomer = FM.DmObject.newObject('CustomerProfiles', attrs);
        if(!oCustomer) {
            // ako imas cb fn
            if(callbackFn) try {
                callbackFn(false,null);
            } catch(e) {}
            return null;
        }
        
        return oneapi.session.app.createCustomerProfile(oCustomer,callbackFn);
    }

    oneapi.deleteCustomerProfile = function(id,callbackFn) {
        id = FM.isset(id) && id && id != '' ? id : 'me';
        return oneapi.session.app.deleteCustomerProfile(id,callbackFn);                    
    }

    oneapi.getAccountBalance = function(callbackFn) {
        return oneapi.session.app.getAccountBalance(callbackFn);                    
    }


    /*
    * SMS
    */
    oneapi.sendSMS = function(oSmsMessage,callbackFn) {
        return oneapi.session.app.sendSMS(oSmsMessage,callbackFn);
    }
   
    oneapi.queryDeliveryStatus = function(address,clientCorrelatorOrResourceReference,callbackFn) {
        return oneapi.session.app.sendSMS(address,clientCorrelatorOrResourceReference,callbackFn);
    }

    oneapi.retrieveInboundSubscriptions = function(
    /*
        destinationAddress,notifyURL,
        criteria,notificationFormat,
        callbackData,
        clientCorrelator,
    */
        page,pageSize,
        callbackFn
    ) {
        return oneapi.session.app.retrieveInboundSubscriptions(
        /*
            destinationAddress,notifyURL,
            criteria,notificationFormat,
            callbackData,
            clientCorrelator,
        */
            page,pageSize,
            callbackFn
        );
    }
   
   
    oneapi.subscribeToInboundMessagesNotifications = function(
        destinationAddress,notifyURL,
        criteria,notificationFormat,
        callbackData,
        clientCorrelator,
        callbackFn
    ) {
        return oneapi.session.app.subscribeToInboundMessagesNotifications(
            destinationAddress,notifyURL,
            criteria,notificationFormat,
            callbackData,
            clientCorrelator,
            callbackFn
        );
    }


    /*
    * Hlr
    */
    oneapi.retrieveRoamingStatus = function(
        sAddress,sNotifyURL, bExternalData, 
        sClientCorrelator, sCallbackData, callbackFn
    ) {
        return oneapi.session.app.retrieveRoamingStatus(
            sAddress,sNotifyURL, bExternalData, 
            sClientCorrelator, sCallbackData, callbackFn
        );
    }
    
    
    /*
    * Utils
    */
    oneapi.getCountries = function(code,callbackFn) {
        return oneapi.session.app.getCountries(code,callbackFn);
    }

    oneapi.getTimezones = function(code,callbackFn) {
        return oneapi.session.app.getTimezones(code,callbackFn);
    }
}

}

// file: src/lib/fm/lm/ml/lm.MlHost.js
// =============================================================================
/**
 * ML host class. 
 * @class FM.MlHost
 * @extends FM.Object
 * @param {FM.AppObject} app application object
 * @param {object} [attrs] DOM node attributes
 * @param {DOMnode} DOM node
 * @param {String} type Host type
 */    
FM.MlHost = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(FM.MlHost,FM.LmObject); 

// properties
FM.MlHost.prototype.objectSubClass = "";
FM.MlHost.prototype.node = null;
FM.MlHost.prototype.dmObject = null;
FM.MlHost.prototype.app = null;
FM.MlHost.prototype.listOfObservers = null;
FM.MlHost.prototype.executed = false;

// methods
FM.MlHost.prototype._init = function(app,attrs,node,type) {
    this._super("_init",app,attrs);
    this.objectSubClass = "MlHost";
    this.node = node;    
    this.dmObject = null; // ovo popunjava "type" fn
    this.listOfObservers = {};
    
    // upisi povratne vezu u dom objekt
    this.node.fmmlHost = this;    
    this.app = app;
    app.addListener(this);
    this.addListener(app);
}

FM.MlHost.prototype.run = function() {
    this._super("run");     
    this.executed = true;
}


FM.MlHost.prototype.dispose = function() {
    this.app.removeListener(this);
    if(this.node) this.node.fmmlHost = null;
    var obsrv = this.listOfObservers;
    for(var id in obsrv) {
        try {
            obsrv[id].dispose();
            
        } catch(e) {
            console.log("dispose observer() error: " + e);
        }
    }
    
    return true;
}


FM.MlHost.prototype.getNode = function() {
    return this.node;
}

FM.MlHost.prototype.getListDmObject = function(obsnode) {
    // find list index
    if(
        !FM.isset(this.dmObject) || 
        !this.dmObject || 
        !FM.isset(obsnode) || 
        !obsnode 
        || this.dmObject.getClassName() != 'DmList'
    ) {
        return this.dmObject;
    }
    
    if(!FM.isset(obsnode.fmmlObserverListIndex)) {
        var parent = obsnode;
        while(parent && parent != this.node && !FM.isset($(parent).attr('data-fmml-list-index'))) {
            parent = parent.parentNode;
        }
        if(FM.isset($(parent).attr('data-fmml-list-index')) && parent != this.node) {
            obsnode.fmmlObserverListIndex = parseInt($(parent).attr('data-fmml-list-index'));
        } else {
            obsnode.fmmlObserverListIndex = -1;
        }            
    }
        
    if(obsnode.fmmlObserverListIndex < 0) return this.dmObject;
    
    var listObj = null;
    var curPos = obsnode.fmmlObserverListIndex + parseInt(this.dmObject.getProperty('cursorStartIndex','0'));
    var cnt=0;
    this.dmObject.forEachListElement(
        function(index,iObj) {
            if(cnt == curPos) {
                listObj = iObj;
                return false;
            }
            cnt++;
            return true;
        }
        );

    return listObj;
}

FM.MlHost.prototype.getDmObject = function(obsnode) {
    if(!FM.isset(this.dmObject) || !this.dmObject) {
        return null;
    }
    
    // not list
    if(this.dmObject.getClassName() != 'DmList'  || !obsnode)  {
        return this.dmObject;
    }
        
    // find list index
    return this.getListDmObject(obsnode);        
}


FM.MlHost.prototype.setDmObject = function(o) {
    var oold = this.getDmObject();
    this.dmObject = o;
    if(oold != o) {
        if(oold) oold.removeListener(this);
        if(this.dmObject) {
            this.dmObject.addListener(this);
        }        
    }
    this.updateAllObservers();
}

FM.MlHost.prototype.addObserver = function(o) {
    if(!FM.isset(o)  || !o || !FM.isset(o.getID)) return false;
    this.listOfObservers[o.getID()] = o;
    this.updateObserver(o);
    return true;
}

FM.MlHost.prototype.removeObserver = function(o) {
    if(!FM.isset(o)  || !o || !FM.isset(o.getID)) return false;

    var nlist = {};
    var objId = o.getID();
    if(!objId) return false;

    for(var id in this.listOfObservers) {
        if(objId != id) nlist[id] = this.listOfObservers[id];
    }

    this.listOfObservers = nlist;

    return true;
}

/**
 * Call update of all observers
 * @public     
 * @function 
 */   

FM.MlHost.prototype.updateObserver = function(o) {
    if(this.executed && FM.isset(o.update) && FM.isFunction(o.update)) {
        try {
            o.update(this);
        } catch(e) {
            console.log("updateObservers() error: " + e);
        }
    }

    // kraj
    return true;
}

FM.MlHost.prototype.updateAllObservers = function() {
    for(var id in this.listOfObservers) {        
        this.updateObserver(this.listOfObservers[id]);
    }

    // kraj
    return true;
}

FM.MlHost.prototype.sendEventToObservers = function(ev,data) {
    for(var id in this.listOfObservers) {
        var o = this.listOfObservers[id];
        if(FM.isset(o[ev])) {
            try {
                o[ev](this,data);
            } catch(e) {
                console.log("updateObservers() error: " + e);
            }
            
        }
        this.updateObserver(this.listOfObservers[id]);
    }

    // kraj
    return true;
}

// events
FM.MlHost.prototype.onChange = function() {
    this.updateAllObservers();
    // kraj
    return true;
}

FM.MlHost.prototype.onAuthChanged = function() {
    this.run();
    // kraj
    return true;
}


    
// static
FM.MlHost.className = "MlHost";
FM.MlHost.fullClassName = 'lm.MlHost';

FM.MlHost.hostTypes = { // popis svih registriranhi host makroa    
    GenericValue: function(app,attrs,node) {
        var hst = new FM.MlHost(app,attrs,node);
        if(hst) {
            hst.run = function() {
                this._super("run");
                this.setDmObject(new FM.DmGenericValue({}));
            }                        
            
            // pokreni ga 
            if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();
        }
    },
    
    GenericList: function(app,attrs,node) {
        var hst = new FM.MlHost(app,attrs,node);
        if(hst) {
            hst._wrpList = $(hst.node).find(".fmmlClsListRowWrapper");
            hst._curViewportSize = FM.isset(hst._wrpList) && hst._wrpList ? hst._wrpList.length : -1;                
            hst._wrpNode = FM.isset(hst._wrpList) && FM.isset(hst._wrpList[0]) ?  hst._wrpList[0] : null;
            hst._nrows = $(hst._wrpNode).attr('data-fmml-list-size');
            if(FM.isset(hst._nrows)) {
                $(hst._wrpNode).removeAttr('data-fmml-list-size');
                hst._parentNode = hst._wrpNode.parentNode;
                if(FM.isset(hst._parentNode) && hst._parentNode) {
                    $(hst._parentNode).html("");
                }                
                if(hst._nrows < 1 || hst._nrows > 99) hst._nrows = 5;
            }
            
            
            hst.run = function(oObj) {
                this._super("run");                
                var dmconfName = this.getAttr('data-fmml-list','');
                var listOpt = {};
                this.forEachAttr(function(pname,value) {
                    if(FM.startsWith(pname,'data-fmml-list-attr-')) {
                        listOpt[pname.substring(20)] = value;
                    }                    
                    return true;
                });
                if(FM.isset(oObj) && oObj && FM.isset(oObj.forEachAttr)) {
                    oObj.forEachAttr(function(pname,value) {listOpt[pname] = value; return true;});
                }
                
                // find first row wrapper
                if(this._wrpNode) {
                    // dinamyc list
                    if(FM.isset(this._nrows)) {                        
                        if(FM.isset(this._parentNode) && this._parentNode) {
                            $(this._parentNode).html("");
                            for(var i = 0; i < this._nrows; i++) {
                                var newNode = $(this._wrpNode).clone();
                                $(newNode).attr('data-fmml-list-index',"" + i);                                
                                $(this._parentNode).append(newNode);                                                     
                            }
                            FM.MlHost.initChildNodes(this._parentNode);
                        }
                    }
                }
                                                
                // get data
                var dmlist = new FM.DmList(listOpt,dmconfName);
                dmlist.setProperty('cursorStartIndex','0');
                dmlist.setProperty('cursorViewportSize',this._curViewportSize);
                this.setDmObject(dmlist);
                dmlist.getData();
            };
            
            hst.dispose =function() {
                var dmList = this.getDmObject();
                var me = this;
                dmList.forEachListElement(function(index,obj) { obj.removeListener(me)});
                this._super("dispose");                
            };
            
            hst.onStartOfList = function() {
                var dmList = this.getDmObject();
                if(!dmList) return (true);
                dmList.setProperty('cursorStartIndex',"0");
                this.updateAllObservers();
                
                // kraj
                return true;
            };
            
            hst.onEndOfList = function() {
                var dmList = this.getDmObject();
                if(!dmList) return (true);
                                
                var vps = parseInt(dmList.getProperty('cursorViewportSize','-1'));
                var ci = vps == -1 ? dmList.getListSize() - 1 : dmList.getListSize() - vps;
                if(ci < 0) ci = 0;
                dmList.setProperty('cursorStartIndex',"" + ci);
                this.updateAllObservers();
                
                // kraj
                return true;
            };

            hst.onPrevious = function() {
                var dmList = this.getDmObject();
                if(!dmList) return (true);
                var ci = parseInt(dmList.getProperty('cursorStartIndex','0'));
                ci--;
                if(ci > -1) {
                    dmList.setProperty('cursorStartIndex',"" + ci);
                    this.updateAllObservers();
                }
                // kraj
                return true;
            };


            hst.onNext = function() {
                var dmList = this.getDmObject();
                if(!dmList) return (true);
                
                var ci = parseInt(dmList.getProperty('cursorStartIndex','0'));
                var vps = parseInt(dmList.getProperty('cursorViewportSize','-1'));
                if((vps > 0 && ci + vps < dmList.getListSize()) || vps == -1) {
                    ci++;
                }                                
                
                if(ci >= dmList.getListSize()) {
                    ci = dmList.getListSize() -1;
                }
                dmList.setProperty('cursorStartIndex',"" + ci);
                this.updateAllObservers();
                
                // kraj
                return true;
            };

            hst.onListStart = function() {
                this.sendEventToObservers("onListStart",{});
                // kraj
                return true;
            };
            
            hst.onListEnd = function() {
                this.sendEventToObservers("onListEnd",{});
                var dmList = this.getDmObject();
                var me = this;
                dmList.forEachListElement(function(index,obj) { 
                    obj.setAttr('_query',dmList.getAttr());
                    obj.setChanged(false,false);
                    obj.addListener(me); 
                    return true;
                });
                this.updateAllObservers();
                // kraj
                return true;
            };

            hst.onListError = function() {
                this.sendEventToObservers("onListError",{});
                var dmList = this.getDmObject();
                var me = this;
                dmList.forEachListElement(function(index,obj) { obj.addListener(me); return true;});
                this.updateAllObservers();
                // kraj
                return true;
            };

            hst.onChange = function() {
                this.updateAllObservers();
                // kraj
                return true;
            };

            // pokreni ga
            if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();
        }
    },
    
    QueryParams: function(app,attrs,node) {
        var hst = new FM.MlHost(app,attrs,node);
        if(hst) {
            hst.run = function() {
                this._super("run");                
                this.setDmObject(new FM.DmObject(null,FM.getArgs()));
            }                        
            
            // pokreni ga
            if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();
        }
    }
};


FM.MlHost.newHost = function(app,attrs,node,type) {    
    var hst = null;
    if(FM.isset(FM.MlHost.hostTypes[type])) {
        hst = FM.MlHost.hostTypes[type](app,attrs,node);
    }        
    return hst;
}


FM.MlHost.addHost = function(type,hostfn) {    
    if(!FM.isset(hostfn) || !FM.isFunction(hostfn)) return false;
    
    FM.MlHost.hostTypes[type] = hostfn;
    return true;
}

// radi update child nodova - promjena na dom nodu koji je nosioc
FM.MlHost.initChildNodes = function(app,checknode) {
    var jqnode = $(FM.isset(checknode) && checknode ? checknode : 'body');
    jqnode.children().each(function(index) {
        var domobj = this;        
        var jqobj = $(this);
        if(jqobj) {
            // ako nema registriran host ili observer na tom nodu
            // i ako ima atribut
            if(
                (!FM.isset(domobj.fmmlHost) /*|| !domobj.fmmlHost */) &&
                (!FM.isset(domobj.fmmlObserver) /* || !domobj.fmmlObserver */) &&
                (jqobj.attr('data-fmml-host') || jqobj.attr('data-fmml-observer') || jqobj.attr('data-fmml-extensions'))
                ) {
                // pokupi atribute
                var attrlist = {};
                $.each(this.attributes, function(i, attrib){
                    attrlist[attrib.name] = attrib.value;                    
                });
                
                // ako je host
                if(jqobj.attr('data-fmml-host')) {
                    var htype = jqobj.attr('data-fmml-host');
                    if(FM.getAttr(FM.MlHost.hostTypes,htype,null)) {
                        try {
                            FM.MlHost.newHost(app,attrlist,domobj,htype);
                        } catch(e) {
                            console.log("new MlHost(<" + htype + ">) error: " + e);
                        };
                    }
                    
                } else if(jqobj.attr('data-fmml-observer')) { // ako je observer
                    var otype = jqobj.attr('data-fmml-observer');
                    if(FM.getAttr(FM.MlObserver.observerTypes,otype,null)) {
                        try {
                            FM.MlObserver.newObserver(attrlist,domobj,otype);
                        } catch(e) {
                            console.log("new MlObserver(<" + otype + ">) error: " + e);
                        };
                    }
                }
                
                // extenzije
                if(jqobj.attr('data-fmml-extensions')) { // ako je observer
                    var extarr = jqobj.attr('data-fmml-extensions').split(" ");
                    for(var i = 0; i < extarr.length; i++) {
                        var ext = extarr[i].toString();
                        if(FM.isset($.fn[ext])) {
                            var oExt = $(domobj)[ext]();
                        }
                    }
                }
            }
            
            // napravi isto na child nodovima
            FM.MlHost.initChildNodes(app,this);
        }
    });
    
    return true;
}


// file: src/lib/fm/lm/ml/lm.MlObserver.js
// =============================================================================
/**
* Basic ML observer class. 
* @class FM.MlObserver
* @extends FM.Object
* @param {FM.AppObject} app application object
* @param {DOMnode} DOM node
* @param {object} [options] Options
*/    
FM.MlObserver = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(FM.MlObserver,FM.Object); 

// properties
FM.MlObserver.prototype.objectSubClass = "";
FM.MlObserver.prototype.node = null;
FM.MlObserver.prototype.host = null;
FM.MlObserver.prototype.extensions = [];

// methods
FM.MlObserver.prototype._init = function(attrs,node) {
    this._super("_init",attrs);
    this.objectSubClass = "MlObserver";
    this.node = node;
    this.node.fmmlObserver = this;
}

FM.MlObserver.prototype.run = function() {
    this._super("run");
        
    this.host = FM.MlObserver.findHost(this.node);    
    if(this.host) this.host.addObserver(this);
    return true;
}

FM.MlObserver.prototype.dispose = function() {
    var exts = FM.cloneObject(this.extensions);
    for(var i = 0; i < exts; i++) {
        var extObj = this.exts[i];
        if(FM.isset(extObj.dispose)) {
            extObj.dispose();
        }
    }
    
    if(this.node) {
        this.node.fmmlObserver = null;
    }
    if(this.host) {
        this.host.removeObserver(this);
    }
    
    return true;
}

FM.MlObserver.prototype.update = function() {
    return true;
}

FM.MlObserver.prototype.addExtension = function(extObj) {
    this.extensions.push(extObj);
    return true;
}

FM.MlObserver.prototype.removeExtension = function(extObj) {
    for(var i = 0; i < this.extensions.length; i++) {
        if(extObj == this.extensions[i]) {
            delete this.extensions[i];
            return true;
        }
    }
    return false;
}

FM.MlObserver.prototype.getNode = function() {
    return this.node;
}

FM.MlObserver.prototype.getDmObject = function() {
    var host = this.getHost();
    return(host  ? host.getDmObject(this.node) : null);
}

FM.MlObserver.prototype.getHost = function() {
    if(this.host) return(this.host);
    this.host = FM.MlObserver.findHost(this.node);
    return(this.host);
}

FM.MlObserver.prototype.resolveAttributeValue = function(val,defv,cbfn) {
    if(FM.startsWith(val,'@')) { // object (@CustomerProfile::me::gsm)
        val = val.substring(1);
        var varr = val.split("::");
        var cls = varr.length > 0 ? varr[0] : null;
        var dataId = varr.length > 1 ? varr[1] : null;
        var attrname = varr.length > 2 ? varr[2] : null;

        
        if(cls && dataId && attrname && cls != '' && dataId  != '' && attrname != '') {
            
            var method = 'get' + cls;
            var host = this.getHost();
            if(host && host.getApp() && FM.isset(host.getApp()[method])) {
                host.getApp()[method](dataId,function(isok, oObj) {
                    if(isok) {
                        cbfn(oObj ? oObj.getAttr(attrname,defv) : defv);
                    } else {
                        cbfn(defv);
                    }
                });
            }            
        } else if(varr.length == 1) { // samo attrname
            var oObj = this.getDmObject();
            cbfn(oObj ? oObj.getAttr(cls,defv) : defv);
        }
                
    } else {
        cbfn(val && val != '' ? val : defv);
    }
}

// static
FM.MlObserver.className = "MlObserver";
FM.MlObserver.fullClassName = 'lm.MlObserver';

// pronadji u dom tree na dolje node koji ima fmmlDmObject - to je tvoj dm
// vrati null ako ne nadjes
FM.MlObserver.findHost = function(node) {
    while(FM.isset(node) && node && !FM.isset(node.fmmlHost)) {
        node = node.parentNode;
    }
    return(
        FM.isset(node) && node ? node.fmmlHost : null
        );
}


FM.MlObserver.observerTypes = {
    // prikaz imena atributa
    AttributeDecoration: function (attrs,node) {
        var obs = new FM.MlObserver(attrs,node);
        if(obs) {
            obs.update = function() {
                // provjeri
                var value = '';
                var attrname = this.getAttr('data-fmml-attr-name','');
                var host = this.getHost();
                var dmobj = host ? host.getDmObject(this.node) : null;
                if(dmobj && attrname != '') {
                    value = FM.UiItem.getAttributeDecoration(dmobj.getSubClassName(),attrname);
                }

                if(this.node) {
                    if(FM.isset(this.node.value)) {
                        node.value = value;
                    } else {
                        this.node.innerHTML = value;
                    }
                }
                return true;
            };        
            
            // pokreni ga
            obs.run();
        }        
        
        return obs;        
    },
    
    // prikaz text atributa
    Attribute: function(attrs,node) {
        var obs = new FM.MlObserver(attrs,node);
        if(obs) {
            obs.update = function() {
                var me = this;
                
                // provjeri
                var value = '';
                var attrname = this.getAttr('data-fmml-attr-name','');
                var defval = this.getAttr('data-fmml-attr-default-value','');
                var host = obs.getHost();                
                
                if(defval !== '') {
                    this.setAttr('data-fmml-attr-default-value',defval);
                    
                    this.resolveAttributeValue(defval,'',function(val) {
                        var dmobj = host ? host.getDmObject(me.node) : null;
                        if(dmobj && dmobj.getAttr(attrname,'') == '') {
                            dmobj.setAttr(attrname,val,true);
                        }
                    });
                }
                var dmobj = host ? host.getDmObject(this.node) : null;
                if(dmobj && attrname != '') {
                    value = dmobj.getAttr(attrname,'');
                }

                if(this.node) {
                    if(FM.isset(obs.node.value)) {
                        node.value = value;
                    } else {
                        this.node.innerHTML = value;
                    }
                }
                return true;
            };        
            
            // pokreni ga
            obs.run();
        }        
        
        return obs;
    },
    // prikaz date atributa. datum može biti u utc ili loc formatu
    // datum se ispisuje kao localized string
    // klik na item otvara kontrolu
    DateAttribute: function(attrs,node) {
        var obs = new FM.MlObserver(attrs,node);
        if(obs) {
            obs.update = function() {
                var me = this;
                
                // provjeri
                var value = '';
                var attrname = this.getAttr('data-fmml-attr-name','');
                var defval = this.getAttr('data-fmml-attr-default-value','');
                var host = obs.getHost();                
                
                if(defval !== '') {
                    this.setAttr('data-fmml-attr-default-value',defval);
                    
                    this.resolveAttributeValue(defval,'',function(val) {
                        var dmobj = host ? host.getDmObject(me.node) : null;
                        if(dmobj && dmobj.getAttr(attrname,'') == '') {
                            dmobj.setAttr(attrname,val,true);
                        }
                    });
                }
                var dmobj = host ? host.getDmObject(this.node) : null;
                if(dmobj && attrname != '') {
                    value = dmobj.getAttr(attrname,'');
                }

                // set, value is in geek format (2012-11-13T23:59:59)
                var dspValue = FM.dateLocalFormat(FM.parseDateString(
                    value,
                    this.getAttr('data-fmml-date-is-utc','true') != 'false'
                ));
                
                if(this.node) {
                    if(FM.isset(obs.node.value)) {
                        node.value = dspValue;
                    } else {
                        this.node.innerHTML = dspValue;
                    }
                }
                return true;
            };        
            
            // pokreni ga
            obs.run();
        }        
        
        return obs;
    },
    ListState: function (attrs,node) {
        var obs = new FM.MlObserver(attrs,node);
        if(obs) {
            obs.onListStart = function() {
                $(this.node).addClass("wait");
            }
            
            obs.onListEnd = function() {
                $(this.node).removeClass("wait");
            }

            obs.onListError = function() {
                $(this.node).removeClass("wait");
            }

            // pokreni ga
            obs.run();
        }        
        
        return obs;        
    },
    
    // prikaz text atributa
    Display: function(attrs,node) {
        var obs = new FM.MlObserver(attrs,node);
        if(obs) {
            obs.update = function() {
                // provjeri
                var value = '';
                var attrname = this.getAttr('data-fmml-attr-name','');
                var host = this.getHost();
                var dmobj = host ? host.getDmObject(obs.node) : null;
                if(dmobj && attrname != '') {
                    value = dmobj.getAttr(attrname,'');
                }
                
                var visible = null;
                var visibilityCheck = this.getAttr('data-fmml-attr-value-visible','');
                if(visibilityCheck != '') {
                    if(dmobj && FM.isset(dmobj[visibilityCheck])) { // ako je fn ili prop u obj
                        if(FM.isFunction(dmobj[visibilityCheck])) {
                            visible = dmobj[visibilityCheck]();
                        } else {
                            visible = dmobj[visibilityCheck];
                        }
                    } else if(dmobj && dmobj.isAttr(visibilityCheck)) {
                        visible = dmobj.getAttr(visibilityCheck,false);
                    } else {
                        visible = false; // no object or attribute
                    }
                    visible = visible != null && visible != '' && visible != false;
                } else {
                    visibilityCheck = this.getAttr('data-fmml-attr-value-hidden','');
                    if(visibilityCheck != '') {
                        if(dmobj && FM.isset(dmobj[visibilityCheck])) { // ako je fn ili prop u obj
                            if(FM.isFunction(dmobj[visibilityCheck])) {
                                visible = dmobj[visibilityCheck]();
                            } else {
                                visible = dmobj[visibilityCheck];
                            }
                        } else if(dmobj && dmobj.isAttr(visibilityCheck)) {
                            visible = dmobj.getAttr(visibilityCheck,false);
                        } else {
                            visible = false;
                        }
                        visible = !(visible != null && visible != '' && visible != false);
                    }
                }
                
                if(this.node) {
                    if(attrname != '') {
                        if(FM.isset(this.node.value)) {
                            node.value = value;
                        } else {
                            this.node.innerHTML = value;
                        }
                    }
                    if(visible) {
                        $(this.node).show();
                    } else {
                        $(this.node).hide();
                    }
                }
                return true;
            };        
            
            // pokreni ga
            obs.run();
        }        
        
        return obs;
    },
    Event: function(attrs,node) {
        var obs = new FM.MlObserver(attrs,node);        
        if(obs) {            
            $(node).click(function(event) { 
                event.preventDefault();
                
                var host = obs.getHost();
                var dmobj = host ? host.getDmObject(obs.node) : null;
                //var dmobj = obs.getDmObject();
                var ev = obs.getAttr('data-fmml-event-type','');
                if(host) {                    
                    if(ev && ev != '' && dmobj) {
                       if(obs.getAttr('data-fmml-event-async','false') === 'true') $(obs.node).addClass("waitButton");
                        
                        host.onEvent(obs,ev,{
                            object: dmobj,
                            callback: function(isok,oResponse) {                                
                                // klase 
                                $(obs.node).removeClass("waitButton");
                                
                                var redir = '';
                                if(isok) {
                                    redir = obs.getAttr('data-fmml-redirect-on-success','');
                                    if(redir != '') {
                                        window.location = FM.applyTemplate (oResponse.getAttr(),redir);
                                    }
                                    var hostToRun =  obs.getAttr('data-fmml-run-on-success','');
                                    if(hostToRun != '') {
                                        var node = document.getElementById(hostToRun);
                                        if(node && FM.isset(node.fmmlHost) && node.fmmlHost) {
                                            node.fmmlHost.run(oResponse);
                                        }
                                    }                                    
                                } else {
                                    redir = obs.getAttr('data-fmml-redirect-on-error','');
                                    if(redir != '') {
                                        window.location = FM.applyTemplate (oResponse.getAttr(),redir);
                                    }                                    
                                }
                            }
                        });
                    } else {
                        redir = obs.getAttr('data-fmml-redirect-on-success','');
                        if(redir != '') {
                            window.location = FM.applyTemplate (dmobj.getAttr(),redir);
                        }
                        var hostToRun =  obs.getAttr('data-fmml-run-on-success','');
                        if(hostToRun != '') {
                            var node = document.getElementById(hostToRun);
                            if(node && FM.isset(node.fmmlHost) && node.fmmlHost) {
                                node.fmmlHost.run(dmobj);
                            }
                        }                                    
                        
                    }
                } else {
                    var redir = obs.getAttr('data-fmml-redirect-on-success','');                            
                    if(redir != '') {
                        window.location = redir;
                    }                  
                    var hostToRun =  obs.getAttr('data-fmml-run-on-success','');
                    if(hostToRun != '') {
                        var node = document.getElementById(hostToRun);
                        if(node && FM.isset(node.fmmlHost) && node.fmmlHost) {
                            node.fmmlHost.run(dmobj);
                        }
                    }                                    
                }
                
                return false;
            });
            
            // pokreni ga
            obs.run();
        }        
        
        return obs;
    }
};


FM.MlObserver.addObserver = function(type,fn) {    
    if(!FM.isset(fn) || !FM.isFunction(fn)) return false;
    FM.MlObserver.observerTypes[type] = fn;
    return true;
}

FM.MlObserver.newObserver = function(attrs,node,type) {    
    var obs = null;
    if(FM.isset(FM.MlObserver.observerTypes[type])) {
        obs = FM.MlObserver.observerTypes[type](attrs,node);
    }
    
    return obs;
}

// file: src/lib/fm/gui/gui.MlExtensions.js
// -----------------------------------------------------------------------------
MlExAttributeEdit = function($) {
    $.fn.MlExAttributeEdit = function()   {
        var domnode = this[0];
        var triggerEvent = $(domnode).attr('data-fmml-update-condition');
        if(!FM.isset(triggerEvent) || !triggerEvent) {
             triggerEvent = 'blur';
        }
        if(!FM.isset($(domnode)[triggerEvent])) {
            triggerEvent = 'blur';
        }
        
        if(domnode.nodeName == 'INPUT' || domnode.nodeName == 'TEXTAREA') {
            $(domnode)[triggerEvent]/*.change | blur*/(function() {
                var value = $(this).val();
                $(domnode).html("");
                $(domnode).text(value);

                var obs = domnode.fmmlObserver;
                if(obs && obs.getDmObject()) {
                    var dmobj = obs.getDmObject();
                    var attr = $(obs.node).attr('data-fmml-attr-name');
                    if(FM.isset(attr) && attr && attr != '') {
                        dmobj.setAttr(attr,value,true);
                    }
                }
                return true;
            }); 
        } else if(domnode.nodeName == 'SELECT') {
            $(domnode)[triggerEvent]/*.change | blur*/(function() {
            //$(domnode).change(function() {
                var value = $(this).val();
                var obs = domnode.fmmlObserver;
                if(obs && obs.getDmObject()) {
                    var dmobj = obs.getDmObject();
                    var attr = $(obs.node).attr('data-fmml-attr-name');
                    if(FM.isset(attr) && attr && attr != '') {
                        dmobj.setAttr(attr,value,true);
                    }
                }
                return true;
            });
        } else {
            var inputbox = $("<input type='text' class='MlExAttributeEdit'\">");

            $(this).click(function() {
                if($(this).children().length < 1) {
                    var val = $(this).text();
                    $(this).html("");
                    $(this).append(inputbox);
                    $(inputbox).val(val);
                };
                $(inputbox).focus();
                $(inputbox)[triggerEvent]/*.change | blur*/(function() {
                //$(inputbox).blur(function() {
                    var value = $(this).val();
                    $(domnode).html("");
                    $(domnode).text(value);

                    var obs = domnode.fmmlObserver;
                    if(obs && obs.getDmObject()) {
                        var dmobj = obs.getDmObject();
                        var attr = $(obs.node).attr('data-fmml-attr-name');
                        if(FM.isset(attr) && attr && attr != '') {
                            dmobj.setAttr(attr,value,true);
                        }
                    }
                    return true;
                });

                return true;
            });
        }
    }    
}
MlExAttributeEdit(jQuery);

MlMenu = function($) {
    $.fn.MlMenu = function()   {
        var domnode = this[0];
        
        var dmconfName = $(domnode).attr('data-fmml-list');
        var menuId = $(domnode).attr('data-fmml-list-id-attr');
        var arg = $(domnode).attr('data-fmml-list-id');
        arg = FM.isset(arg) && arg ? arg : 'id';
        
        var menuText = $(domnode).attr('data-fmml-list-text-attr');
        var attr = $(domnode).attr('data-fmml-attr-name');

        var defSelValue = $(domnode).attr('data-fmml-list-def-selected');
	defSelValue = FM.isset(defSelValue) ? defSelValue : '';
	if(FM.isFunction(window[defSelValue])) defSelValue = window[defSelValue]();

        var defSelAttr = $(domnode).attr('data-fmml-list-def-selected-attr');
	defSelAttr = FM.isset(defSelAttr) ? defSelAttr : '';

        var listOpt =  {};

        listOpt[arg] = '';
        var dmlist = new FM.DmList(listOpt,dmconfName);

        var lstnr = {
            onListStart: function(sender,data) {
                return true;
            },
            onListEnd: function(sender,data) {
                var def=null,first = null,cur=null;
                var obs = domnode.fmmlObserver;
                var dmobj = obs ? obs.getDmObject() : null;
                var curVal = dmobj ? dmobj.getAttr(attr,'') : '';
                
                dmlist.removeListener(lstnr);
                $(domnode).html(""); // ocisti
                dmlist.forEachListElement(function(index,obj) {
                    var defOption = false;
                    if(defSelAttr != '' && defSelValue!='') {
                        if(obj.getAttr(defSelAttr,'') == defSelValue) {
                            defOption = true;
			    def = obj;
                        }
                    }

                    if(!first) {
                        first = obj;
                    }
                    if(obj.getAttr(menuId,'x') == curVal) {
                        cur = obj;
                    }
                    $(domnode).append(
			'<option ' + (defOption ? 'selected="selected"' : '') + ' value="' + obj.getAttr(menuId,'') + '">' +
                        obj.getAttr(menuText,'') +
                        '</option>'
                    );
                    return(true);
                });
                if(cur) {
                    $(domnode).val(cur.getAttr(menuId,''));
                } else if(def) {
                    $(domnode).val(def.getAttr(menuId,''));
                } else if(first) {
                    $(domnode).val(first.getAttr(menuId,''));
                }
                dmlist.dispose();
                
                $(domnode).change(function() {
                    var obs = domnode.fmmlObserver;
                    var dmobj = obs ? obs.getDmObject() : null;

                    var value = $(this).val();
                    if(FM.isset(attr) && attr && attr != '' && dmobj) {
                        dmobj.setAttr(attr,value,true);
                    }                    
                });
                $(domnode).change();                
                
            },            
            onListError: function(sender,data) {
                $(domnode).append(
                    '<option value=""><i>' +
                    (data.getErrorText && data.getErrorText() != '' ? data.getErrorText() : "Unable to connect to server") +
                    '</i></option>'
                );

                dmlist.removeListener(lstnr);
                dmlist.dispose();
                return true;
            }
        };
        dmlist.addListener(lstnr);
        dmlist.getData();            
    }
}
MlMenu(jQuery);



MlCaptcha = function($) {
    $.fn.MlCaptcha = function()   {
        var appLstnr = null;
        
        var fetchCaptcha = function(w,h,obs,attr,captchaImgNode) {
            var listOpt =  {
                width: w,
                height: h,
                imageFormat: 'png'
            };

            var dmlist = new FM.DmList(listOpt,'UTIL_captcha');

            var lstnr = {
                onListStart: function(sender,data) {
                    return true;
                },
                onListEnd: function(sender,data) {
                    dmlist.removeListener(lstnr);
                    var oCaptcha = null;
                    dmlist.forEachListElement(function(index,obj) {
                        oCaptcha = obj;
                        return false;
                    });
                    dmlist.dispose();
                    if(oCaptcha) {
                        if(obs) {
                            var dmObject = obs.getDmObject();
                            dmObject.setAttr(attr,oCaptcha.getAttr('id',''),true);
                        }
                        if(FM.isset(captchaImgNode)) {
                            $('#' + captchaImgNode).attr('src',oCaptcha.getImageUrl());
                        }
                    }
                },    
                onListError: function(sender,data) {
                    dmlist.removeListener(lstnr);
                    dmlist.dispose();
                    return true;
                }
            };
            dmlist.addListener(lstnr);
            dmlist.getData();                        
        }        
        
        var domnode = this[0];
        var obs = domnode.fmmlObserver;
        var captchaImgNode = $(domnode).attr('data-fmml-captcha-image-node');
        var captchaReloadNode = $(domnode).attr('data-fmml-captcha-reload-node');
        var attr = $(domnode).attr('data-fmml-attr-name');
        
        var w=200,h=150;
        var captchaImg = $('#' + captchaImgNode);
        if(FM.isset(captchaImg) && captchaImg) {
            if(FM.isset(captchaImg.attr('width'))) {
                w = captchaImg.attr('width');
            }
            if(FM.isset(captchaImg.attr('height'))) {
                h = captchaImg.attr('height');
            }
        }
        
        if(FM.isset(captchaReloadNode) && captchaReloadNode) {
            $('#' + captchaReloadNode).click(function() {
                fetchCaptcha(w,h,obs,attr,captchaImgNode);
                return false;
            });
        }
        
        if(obs) {
            var reloadCond = $(domnode).attr('data-fmml-captcha-reload-on');
            if(FM.isset(reloadCond) && reloadCond) {
                var reloadEvents = reloadCond.split(".");
                // ako imamo ev onda se nakaci i na app (host & app events)
                if(reloadEvents.length > 0) {
                    if(obs.getHost()) {
                        var app = obs.getHost().getApp();
                        if(app) {
                            appLstnr = {};
                            for(var rei = 0; rei < reloadEvents.length; rei++) {
                                appLstnr[reloadEvents[rei]] = function(sender,data) {
                                    fetchCaptcha(w,h,obs,attr,captchaImgNode);
                                    return true;
                                }
                            }
                            app.addListener(appLstnr);
                            
                            // registriraj se kod observera zbog dispose
                            obs.addExtension(new function() {
                                this.dispose = function() {
                                    app.removeListener(appLstnr);
                                    obs.removeExtension(this);
                                }
                            });
                        }
                    }
                }
            }
        }
        
        fetchCaptcha(w,h,obs,attr,captchaImgNode);
        
    }
}
MlCaptcha(jQuery);


MlVextSlider = function($) {
    var sliderClass = 'flexslider';
    
    $.fn.MlVextSlider = function()   {
        var domnode = this[0];
        var options = {};
        
        // get slider options (data-fmml-slider-*)
        var attrsPrefix = 'data-fmml-slider-opt-';        
        var prefLen = attrsPrefix.length;        
        var attr;
        for (var i=0; i < domnode.attributes.length; i++) {
            attr = domnode.attributes.item(i);
            if(FM.startsWith(attr.nodeName,attrsPrefix)) {
                options[attr.nodeName.substring(prefLen)] = attr.nodeValue;
            }
        }
        
        // add clallbacks
        var ev;        
        var host = FM.MlObserver.findHost(domnode);
        if(host) {
            ev = domnode.getAttr('data-fmml-slider-start-event','');
            if(ev) {
                options['start'] = function (slider) {
                    host.onEvent(host,ev,{extension: slider, node: domnode});
                };
            }
            
            ev = domnode.getAttr('data-fmml-slider-beforechange-event','');
            if(ev) {
                options['before'] = function (slider) {
                    host.onEvent(host,ev,{extension: slider, node: domnode});
                };
            }

            ev = domnode.getAttr('data-fmml-slider-afterchange-event','');
            if(ev) {
                options['after'] = function (slider) {
                    host.onEvent(host,ev,{extension: slider, node: domnode});
                };
            }

            ev = domnode.getAttr('data-fmml-slider-listend-event','');
            if(ev) {
                options['end'] = function (slider) {
                    host.onEvent(host,ev,{extension: slider, node: domnode});
                };
            }

            ev = domnode.getAttr('data-fmml-slider-add-event','');
            if(ev) {
                options['added'] = function (slider) {
                    host.onEvent(host,ev,{extension: slider, node: domnode});
                };
            }

            ev = domnode.getAttr('data-fmml-slider-remove-event','');
            if(ev) {
                options['removed'] = function (slider) {
                    host.onEvent(host,ev,{extension: slider, node: domnode});
                };
            }
        }
        
        // init 
        $(domnode)[sliderClass](options);
    }
}
MlVextSlider(jQuery);


MlDateAttributeEdit = function($) {
    Date.format="yyyy-mm-dd";
    
    $.fn.MlDateAttributeEdit = function()   {
        var domnode = this[0];
        $(domnode).datePicker({
            clickInput: true            
        }).bind('dateSelected',function(e, selectedDate){
            $(this).dpClose();
            var obs = domnode.fmmlObserver;
            if(obs && obs.getDmObject()) {
                var dmobj = obs.getDmObject();
                var attr = $(obs.node).attr('data-fmml-attr-name');
                if(FM.isset(attr) && attr && attr != '') {
                    dmobj.setAttr(
                        attr,FM.dateToString(
                            selectedDate,
                            $(obs.node).attr('data-fmml-date-is-utc') != 'false'
                        ),
                        true
                    );
                }
            }
            
        });
    }
}
MlDateAttributeEdit(jQuery);

//-----------------------------------------------------------------------------
MlWatermark = function($) {
    $.fn.MlWatermark = function()   {
        var domnode = this[0];
        var attr = $(domnode).attr('data-fmml-watermark-value');

        if(domnode.nodeName == 'INPUT' || domnode.nodeName == 'TEXTAREA') {
        	$(domnode).watermark(attr);
        } 
    }    
}
MlWatermark(jQuery);

// file: src/lib/fm/legacy.js
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function _format_prices() {
	var mycountry = geoip_country_name();

        $('.country').hide();

        var head = null;
        var r = {};
        $('.generic-table-wide tr').each(function(tri,tr){
                var c = [];
                $(tr).children().each(function(tdi,td) {

                        if(tdi==0) $(td).hide();
                        c.push($(td).html());
                });
                if(head == null) {
                        head = c;
                } else {
                        var country = c[0];
                        var net = c[1];
                        var price = c[2];
                        if(!FM.isset(r[country])) r[country] = {};
                        r[country][net] = price;
                        $(tr).attr('data-fmml-group-id',country);
                        $(tr).addClass('country');
                }
        });

        console.log(r);

        var nsel = $('<select name="country" class="fmmlValueSelect"></select>');
        var opts = "";
        FM.forEach(r,function(cname,oCountry) {
		opts += '<option value="' + cname +'"' + (cname == mycountry ? 'selected="selected"' : "") + '>' + cname + '</option>';
                // opts += '<option value="' + cname +'">' + cname + '</option>';
                return true;
        });
        $(nsel).html(opts);
        console.log($(nsel));
        $('#country-list').append(nsel);
        $(nsel).change(function() {
                var value = $(this).val();
                $('.country').hide();
                $('tr[data-fmml-group-id="' + value + '"]').show();
        });
        $(nsel).change();
        $('.generic-table-wide').show();
}


// file: src/parseco/config/parseco.ClassConfig.js
if(typeof(parseco) == 'undefined') {
    /**
    * @namespace OneAPI SDK namespace
    */
    parseco = function() {};    
}

/* =============================================================================
 * Dm Class declaration
 * ========================================================================== */
//-- usename check -------------------------------------------------------------
parseco.DmUsernameCheck = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(parseco.DmUsernameCheck, FM.DmObject); 

// properties
parseco.DmUsernameCheck.prototype.objectSubClass = "";

// methods
parseco.DmUsernameCheck.prototype._init = function(attrs) {
    this._super("_init",attrs, {
    	usernameCheck: ''
    });
    this.objectSubClass = "UsernameCheck";
}
        
parseco.DmUsernameCheck.prototype.getDataID = function() {
    return this.getID();
}

parseco.DmUsernameCheck.className = "DmUsernameCheck";
parseco.DmUsernameCheck.fullClassName = 'dm.DmUsernameCheck';

FM.DmObject.addSubClassType('UsernameCheck',parseco.DmUsernameCheck);


// -- captcha ------------------------------------------------------------------
parseco.DmCaptcha = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(parseco.DmCaptcha, FM.DmObject); 

// properties
parseco.DmCaptcha.prototype.objectSubClass = "";

// methods
parseco.DmCaptcha.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        id: '',
        width: 0,
        height: 0,
        imageFormat: 'png',
        image: ''
    });
    this.objectSubClass = "Captcha";
}
        
parseco.DmCaptcha.prototype.getDataID = function() {
    return this.getAttr('id','');
}

parseco.DmCaptcha.prototype.getImageUrl = function() {
    return "data:image/" + this.getAttr('imageFormat','png') + 
    ";base64," +  this.getAttr('image','')
;
}

parseco.DmCaptcha.className = "DmCaptcha";
parseco.DmCaptcha.fullClassName = 'dm.DmCaptcha';

FM.DmObject.addSubClassType('Captcha',parseco.DmCaptcha);

   
// -- user signup data ---------------------------------------------------------
parseco.DmUserSignupData = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(parseco.DmUserSignupData, FM.DmObject); 

// properties
parseco.DmUserSignupData.prototype.objectSubClass = "";

// methods
parseco.DmUserSignupData.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        username: '',
        forename: 'Unknown',
        surname: 'Unknown',
        email: '',
        gsm: '',
        countryCode: '',
        timezoneId: '1',
        password: '',
        password2: '', // dummy 
        captchaId: '',
        captchaAnswer: ''
    });
    this.objectSubClass = "DmUserSignupData";
}
        
parseco.DmUserSignupData.prototype.getDataID = function() {
    return this.getAttr('username','');
}

parseco.DmUserSignupData.className = "DmUserSignupData";
parseco.DmUserSignupData.fullClassName = 'dm.DmUserSignupData';

FM.DmObject.addSubClassType('UserSignupData',parseco.DmUserSignupData);


// -- Mo -----------------------------------------------------------------------
parseco.DmMoAvailableNumber = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(parseco.DmMoAvailableNumber, FM.DmObject); // extends FM.Object

// properties
parseco.DmMoAvailableNumber.prototype.objectSubClass = "";

// methods
parseco.DmMoAvailableNumber.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        //id: '',
        number: '',
        free: '',
        //moNoTypeId: '',
        //gSMModemId: '',
        networkId: '',
	networkName: '',
        setupFee: 0.0,
        monthlyFee: 0.0,
        // added after fetch
        _query: {}
    });
    this.objectSubClass = "MoAvailableNumber";
}
        
parseco.DmMoAvailableNumber.prototype.getDataID = function() {
    return this.getID();
}

parseco.DmMoAvailableNumber.className = "DmMoAvailableNumber";
parseco.DmMoAvailableNumber.fullClassName = 'dm.DmMoAvailableNumber';
FM.DmObject.addSubClassType('MoAvailableNumber',parseco.DmMoAvailableNumber);


// inbound available numbers query
parseco.DmMoAvailableQuery = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(parseco.DmMoAvailableQuery, FM.DmObject); // extends FM.Object

// properties
parseco.DmMoAvailableQuery.prototype.objectSubClass = "";

// methods
parseco.DmMoAvailableQuery.prototype._init = function(attrs) {
    this._super("_init",attrs, {        
        countryId: '',
	countryCode: '',
        dateFrom: '',
        dateTo: '',
        criteria: '',
        page: '1',
        pageSize: '20'
    });
    this.objectSubClass = "MoAvailableQuery";    
}
        
parseco.DmMoAvailableQuery.prototype.getDataID = function() {
    return this.getID();
}
parseco.DmMoAvailableQuery.className = "DmMoAvailableQuery";
parseco.DmMoAvailableQuery.fullClassName = 'dm.DmMoAvailableQuery';
FM.DmObject.addSubClassType('MoAvailableQuery',parseco.DmMoAvailableQuery);


// file: src/parseco/config/parseco.ListConfig.js
// == user managment ===========================================================
// -- username check ----------------------------------------------------------------
FM.DmList.addConfiguration('USER_username_check', {  
    resourcePath: '/customerProfile/username/check',
    url: OA.getApiUrl,
    method: OA.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        username: true
    },
    headers: OA.getApiHeaders,
    auth: null,        
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    // custom
    _responseClass: parseco.DmUsernameCheck
});


// -- captcha ------------------------------------------------------------------
FM.DmList.addConfiguration('UTIL_captcha', {  
    resourcePath: '/captcha/generate',
    url: OA.getApiUrl,
    method: OA.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        width: true,
        height: true,
        imageFormat: true
    },
    headers: OA.getApiHeaders,
    auth: null,        
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    // custom
    _responseClass: parseco.DmCaptcha
});

// -- user signup --------------------------------------------------------------
FM.DmList.addConfiguration('USER_signup', {
    resourcePath: '/customerProfile/signup',
    url: OA.getApiUrl,
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        username: true,
        password: true,
        forename: true,
        surname: true,
        email: true,
        gsm: true,
        countryCode: true,
        timezoneId: true,
        // captcha
        captchaId: true,
        captchaAnswer: true        
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '201', // created            
    listType: 'single',
    dataProperty: 'signup',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    // custom
    _responseClass: OA.DmUserCredentials    
});

// -- user verify --------------------------------------------------------------
FM.DmList.addConfiguration('USER_verify', {
    resourcePath: '/customerProfile/verify',
    url: OA.getApiUrl,
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        verificationCode: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser
});

// -- user password check ------------------------------------------------------
FM.DmList.addConfiguration('USER_password_check', {
    resourcePath: '/customerProfile/password/check',
    url: OA.getApiUrl,
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        password: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single'
});

// -- user password generate ---------------------------------------------------
FM.DmList.addConfiguration('USER_password_generate', {
    resourcePath: '/customerProfile/password/generate',
    url: OA.getApiUrl,
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {},
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '201',
    listType: 'single'
});

// -- user username check for avialibility -------------------------------------
FM.DmList.addConfiguration('USER_username_check', {
    resourcePath: '/customerProfile/username/check',
    url: OA.getApiUrl,
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        username: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single'
});

// -- user password change -----------------------------------------------------
FM.DmList.addConfiguration('USER_password_change', {
    resourcePath: '/customerProfile/changePassword',
    url: OA.getApiUrl,
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        oldPassword: true,
        newPassword: true,
        newPassword2: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single'
});


// -- MO -----------------------------------------------------------------------
FM.DmList.addConfiguration('SMS_inbound_available', {
    resourcePath: '/smsmessaging/inbound/available',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
//        countryId: true,
	countryCode: true,
        dateFrom: true,
        dateTo: true,
        criteria: true,
        free: true,
        page: true,
        pageSize: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'collection',
    dataProperty: 'availableNumbers',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    // custom
    _responseClass: parseco.DmMoAvailableNumber
});

FM.DmList.addConfiguration('SMS_inbound_trial', {
    resourcePath: '/smsmessaging/inbound/freeTrial',
    url: OA.getApiUrl,
    
    // ajax config
    method: OA.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        notifyURL: true
    },
    headers: OA.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'collection',
    dataProperty: 'availableNumbers',
    //
    isErrorResponse: OA.isErrorResponse,
    errorParser: OA.errorParser,
    responseParser: OA.responseParser, 
    // custom
    _responseClass: parseco.DmMoAvailableNumber
});

// file: src/parseco/config/parseco.ClassDecorations.js
// -- decorations --------------------------------------------------------------
FM.DmObject.defineClassDecorations('SignupData',{
        username:  'Username',
        forename:  'First name',
        surname:  'Last name',
        gsm:  'Telephone (GSM)',
        telephone:  'Telephone',
        email:  'Email address',
        password:  'Password',
        password2:  'Repeat password',
        data: 'Data'
});

// file: src/parseco/config/parseco.HostsConfig.js
/* 
 * Parseco MlHosts
  */
 
// API errors
FM.MlHost.addHost('ApiErrors', function(app,attrs,node) {
    var hst = new FM.MlHost(app,attrs,node);
    if(hst) {
        hst.run = function() {
            this._super("run");
            this.setDmObject(OA.apiLastErr);
        }

        // pokreni ga
        if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();
    }
});

// Signup data
FM.MlHost.addHost('UserSignupData', function(app,attrs,node) {
    var hst = new FM.MlHost(app,attrs,node);
    if(hst) {
        hst.run = function() {
            this._super("run");
            this.setDmObject(new parseco.DmUserSignupData({}));
        }

        // pokreni ga
        if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();
    }
});

// Login data
FM.MlHost.addHost('UserLoginData', function(app,attrs,node) {
    var hst = new FM.MlHost(app,attrs,node);
    if(hst) {
        hst.onAuthChanged = function() {
            return true;
        }

        hst.run = function() {
            this._super("run");
            var obj =  new OA.DmUserLoginData({
                username: hst.getAttr('data-fmml-username',''),
                password: hst.getAttr('data-fmml-password','')
            })

            this.setDmObject(obj);
            var me = this;
            if(hst.getAttr('data-fmml-login-on-run','false') == 'true') {
                //pokreni proces
                this.fireEvent('onDoLogin',{
                    object: obj,
                    callback: function(isok,oResponse) {

                        var redir = '';
                        if(isok) {
                            redir = me.getAttr('data-fmml-redirect-on-success','');
                            if(redir != '') {
                                window.location = FM.applyTemplate (oResponse.getAttr(),redir);
                            }
                            var hostToRun =  me.getAttr('data-fmml-run-on-success','');
                            if(hostToRun != '') {
                                var node = document.getElementById(hostToRun);
                                if(node && FM.isset(node.fmmlHost) && node.fmmlHost) {
                                    node.fmmlHost.run(oResponse);
                                }
                            }
                        } else {
                            redir = me.getAttr('data-fmml-redirect-on-error','');
                            if(redir != '') {
                                window.location = FM.applyTemplate (oResponse.getAttr(),redir);
                            }
                        }
                    }
                });

            }

        }

        // pokreni ga
        if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();
    }
});


// Customer profile
FM.MlHost.addHost('CustomerProfile', function(app,attrs,node) {
    var hst = new FM.MlHost(app,attrs,node);        
    if(hst) {            
        hst.run = function() {
            this._super("run");
            // provjeri ima li takav objekt        
            var id = this.getAttr("data-fmml-customer-id",'me');
            var me = this;
            if(id == 'me' && !this.app.isAuthenticated()) {
                id = 'new';
            }
            this.app.getCustomerProfile(id,function(ok, cp) {
                if(ok) {
                    me.setDmObject(cp);
                }                    
            });
        }
        // pokreni ga
        if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();

    }
});

// User credentials
FM.MlHost.addHost('UserCredentials',function(app,attrs,node) {
    var hst = new FM.MlHost(app,attrs,node);        
    if(hst) {            
        hst.run = function() {
            this._super("run");
            this.setDmObject(OA.apiAuth);                
        }
            
        // pokreni ga
        if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();

    } 
});


// SMS message
FM.MlHost.addHost('SMSMessage', function(app,attrs,node) {
    var hst = new FM.MlHost(app,attrs,node);        
    if(hst) {            
        hst.run = function() {
            this._super("run");
            this.setDmObject(new OA.DmSMSMessage({}));
        }
            
        // pokreni ga
        if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();
    }
});

// Query SMS delivery status
FM.MlHost.addHost('QuerySMSDeliveryStatus', function(app,attrs,node) {
    var hst = new FM.MlHost(app,attrs,node);                
    var statusMapping = {
        DeliveryQueryStart: '',
        DeliveryImpossible: 'Message not sent',
        DeliveredToNetwork: 'Message was successfully sent!',
        DeliveredToTerminal: 'Message was successfully sent!',
        DeliveryUncertain: 'Message is waiting for delivery',
        MessageWaiting: 'Message is waiting for delivery'
    };
    
    if(hst) { 
        hst.oResourceReference = null;
        hst.oTimer = null;
        var infoMessage = hst.getAttr('data-fmml-info-message','Queryng SMS delivery status ...');
        var queryInterval = hst.getAttr('data-fmml-interval','0');
        var finished = true;
        hst.onQueryDeliveryStatus = function() {
            hst._querySMSDeliveryStatus();
        }
            

        hst._setStatusCss = function(newstatus) {
            newstatus = FM.isset(newstatus) ? newstatus : '';
            var node = this.getNode();
            if(node) {
                // izbaci staru css klasu
                var rmcls = "";     
                var clsstr = $(node).attr('class');
                if(!FM.isset(clsstr)) clsstr = "";
                var classes = clsstr.split(" ");
                for(var i in classes) {
                    if(FM.startsWith(classes[i],'fmmlSMSStatus') && classes[i] !== 'fmmlSMSStatus') {
                        rmcls = rmcls + (rmcls == "" ? "" : " ") + classes[i];
                    }
                }
                if(rmcls != "") $(node).removeClass(rmcls);
                
                // postavi css klasu
                $(node).addClass('fmmlSMSStatus' + newstatus);
            }
        }
        
        hst._querySMSDeliveryStatus = function() {            
            var me = this;
            if(queryInterval <= 0) return;
            var suspended = false;
            if(this.oTimer && !this.oTimer.isStarted()) {
                this.oTimer.suspend();                
                suspended = true;
            }
            
            
            this.app.queryDeliveryStatus(
                this.oResourceReference.getAttr('resourceObject.senderAddress',''),
                this.oResourceReference.getAttr('resourceObject.clientCorrelator',''),
                function(ok, ds) {
                    if(ok) {
                        ds.setAttr(
                            'deliveryInfoMessage',
                            FM.isset(statusMapping[ds.getAttr('deliveryStatus','')]) ? 
                            statusMapping[ds.getAttr('deliveryStatus','')] : ds.getAttr('deliveryStatus','')
                        );
                        me.setDmObject(ds);
                        if(ds.getAttr('deliveryStatus','') == 'DeliveredToTerminal') {
                            if(me.oTimer && me.oTimer.isStarted()) {
                                me.oTimer.dispose();
                                finished = true;
                            }
                        }
                        me._setStatusCss(ds.getAttr('deliveryStatus',''));
                    } else {                        
                        me._setStatusCss('MessageError');
                    }
                    
                    if(me.oTimer && suspended && !finished) {
                        me.oTimer.resume();
                    }
                });
        }
            
        hst.run = function(oResRef) {
            if(!oResRef) return;
                
            this._super("run");      
            this.oResourceReference = oResRef;
            if(this.oTimer) this.oTimer.dispose();
            
            this.setDmObject(new OA.DmDeliveryInfo({
                deliveryStatus: 'DeliveryQueryStart',
                deliveryInfoMessage: infoMessage
            }));
            
            if(queryInterval > 0) {
                finished = false;                    
                hst.oTimer = new FM.UtTimerJob('onQueryDeliveryStatus',{},queryInterval,10); // 10 times                
                hst.oTimer.addListener(this);
            } 
            
            this._setStatusCss();
            this._querySMSDeliveryStatus();

            hst.oTimer.start();
        }
            
        // pokreni ga
        if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();
    }
});

// HLR query
FM.MlHost.addHost('TerminalRoamingQuery',  function(app,attrs,node) {
    var hst = new FM.MlHost(app,attrs,node);        
    if(hst) {            
        hst.run = function() {
            this._super("run");
            this.setDmObject(new OA.DmTerminalRoamingQuery({}));
        }
            
        // pokreni ga
        if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();
    }
});

// HLR response
FM.MlHost.addHost('TerminalRoamingStatus', function(app,attrs,node) {
    var statusMapping = {
        Unknown: 'Unknown roaming',
        NotRoaming: 'Not in roaming',
        DomesticRoaming: 'Domestic roaming',
        InternationalRoaming: 'International roaming'
    };
    
    var hst = new FM.MlHost(app,attrs,node);        
    if(hst) {            
        hst._setStatusCss = function(newstatus) {
            newstatus = FM.isset(newstatus) ? newstatus : '';
            var node = this.getNode();
            if(node) {
                // izbaci staru css klasu
                var rmcls = "";     
                var clsstr = $(node).attr('class');
                if(!FM.isset(clsstr)) clsstr = "";
                var classes = clsstr.split(" ");
                for(var i in classes) {
                    if(FM.startsWith(classes[i],'fmmlHLRStatus') && classes[i] !== 'fmmlHLRStatus') {
                        rmcls = rmcls + (rmcls == "" ? "" : " ") + classes[i];
                    }
                }
                if(rmcls != "") $(node).removeClass(rmcls);
                
                // postavi css klasu
                $(node).addClass('fmmlHLRStatus' + newstatus);
            }
        }
        
        hst.run = function(oStatus) {
            this._super("run");
            oStatus = oStatus ? oStatus : new OA.DmTerminalRoamingStatus({
                currentRoaming: 'Unknown'
            })
            oStatus.setAttr('currentRoamingInfoMessage', statusMapping[oStatus.getAttr('currentRoaming','Unknown')]);
            this.setDmObject(oStatus);
            this._setStatusCss(oStatus.getAttr('currentRoaming','Unknown'));
        }

        // pokreni ga
        if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();
    }
});

// USSD query
FM.MlHost.addHost('USSDQuery', function(app,attrs,node) {
    var hst = new FM.MlHost(app,attrs,node);        
        
    if(hst) {                        
        hst.run = function() {
            this._super("run");
            this.setDmObject(new OA.DmUSSDQuery({}));
        }
                        
        // pokreni ga
        if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();
    }
});


// MO query
FM.MlHost.addHost('InboundQuery', function(app,attrs,node) {
    var hst = new FM.MlHost(app,attrs,node);        

    if(hst) {                        
        hst.run = function() {
            this._super("run");
            this.setDmObject(new OA.DmInboundQuery({}));
        }

        // pokreni ga
        if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();
    }
});

// MO message
FM.MlHost.addHost('InboundMessage', function(app,attrs,node) {
    var hst = new FM.MlHost(app,attrs,node);        
    if(hst) {            
        hst.run = function(oMsg) {
            this._super("run");
            this.setDmObject(oMsg ? oMsg : new OA.DmInboundMessage({}));
        }
            
        // pokreni ga
        if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();
    }
});


// MO av query
FM.MlHost.addHost('InboundAvailableToBuy', function(app,attrs,node) {
    var hst = new FM.MlHost(app,attrs,node);        
    if(hst) {            
        hst.run = function(oQry) {
            this._super("run");
            this.setDmObject(oQry ? oQry : new parseco.DmMoAvailableQuery({}));
        }
            
        // pokreni ga
        if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();
    }
});

// username check
FM.MlHost.addHost('UsernameCheck', function(app,attrs,node) {
    var hst = new FM.MlHost(app,attrs,node);        
    if(hst) {            
        hst.run = function(oObj) {
            this._super("run");
            this.setDmObject(oObj ? oObj : new parseco.DmUsernameCheck({}));
        }
            
        // pokreni ga
        if(hst.getAttr('data-fmml-run-on-init','true') != 'false') hst.run();
    }
});




// file: src/parseco/config/parseco.ObserversConfig.js
/* 
 * 
 * Parseco MlObservers
 */

// file: src/parseco/parseco.AppParseco.js
// -- osnovna APP klasa --------------------------------------------------------
parseco.AppParseco = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(parseco.AppParseco,OA.AppOneApi); 

// properties
parseco.AppParseco.prototype.objectSubClass = "";

parseco.AppParseco.prototype._init = function(attrs) {            
    this._super("_init",attrs);
    this.objectSubClass = "AppParseco";
}

parseco.AppParseco.prototype.mlInit = function(node) {
    return FM.MlHost.initChildNodes(this, node);
}
       
parseco.AppParseco.prototype.run = function() {
    this._super("run");
}

parseco.AppParseco.prototype.dispose = function() {        
    this._super("dispose");
}

// -- util ---------------------------------------------------------------------
parseco.AppParseco.prototype.getCaptcha = function(width,height,imageFormat,cbfn) {
    var me = this;
    var dmlist = new FM.DmList({
            width: FM.isset(width) && width != null ? width : 200,
            height: FM.isset(height) && height != null ? width : 75,
            imageFormat: FM.isset(imageFormat) && imageFormat && imageFormat != ''? imageFormat : 'png'
        },
        'UTIL_captcha'
    );
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oCaptcha = null;
            
            FM.forEach(data.Added,function(id, obj) {
                oCaptcha = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            if(oCaptcha) {
                callbackFn(true,oCaptcha);
            } else {
                callbackFn(false,null);
            }
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();
}

// --  auth --------------------------------------------------------------------
parseco.AppParseco.prototype.signup = function(oSignupData,cbfn) {
    var me = this;
    
    var dmlist = new FM.DmList(oSignupData.getAttr(),'USER_signup');
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oCred = null;
            FM.forEach(data.Added,function(id, obj) {
                oCred = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            oCred.forEachAttr(function(name,value) {
                OA.apiAuth.setAttr(name,value);
                return true;
            });
            OA.apiAuth.setAttr('username',oSignupData.getAttr('username',''));
            me.saveCredentials();
            OA.apiAuth.setChanged(true,true); // posalji event
            callbackFn(true,OA.apiAuth);
            
            // posalji auth changed
            me.fireEvent('onAuthChanged',OA.apiAuth);
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();            
            me.setLastError(me.getErrorObject(data));
            me.fireEvent('onAuthError',data);
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };                
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

parseco.AppParseco.prototype.verifyAccount = function(vercode,cbfn) {
    if(FM.isObject(vercode) && FM.isset(vercode.getSubClassName) && vercode.getSubClassName() == 'GenericValue') {
        var o = vercode;
        vercode = o.getAttr('value','');
    }
    
    var me = this;
    var dmlist = new FM.DmList({
        verificationCode: vercode
    },'USER_verify'
    );
        
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var username = OA.apiAuth.getAttr('username','');
            var oCred = null;
            FM.forEach(data.Added,function(id, obj) {
                oCred = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            OA.apiAuth.setAttr('verified',oCred.getAttr('value.verify',false));
            me.saveCredentials();
            OA.apiAuth.setChanged(true,true); // posalji event
            callbackFn(true,OA.apiAuth);
            
            // posalji auth changed
            me.fireEvent('onAuthChanged',OA.apiAuth);
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();            
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

parseco.AppParseco.prototype.checkPasswordStrength = function(password,cbFn) {
    
}

parseco.AppParseco.prototype.generatePassword = function(cbFn) {
    
}

parseco.AppParseco.prototype.changePassword = function(oldPassword,newPassword,newPassword2,cbFn) {
    
}


parseco.AppParseco.prototype.checkUsernameAvialiability = function(username, cbFn) {
    
}


parseco.AppParseco.prototype.verifyAccount = function(vercode,cbfn) {
    if(FM.isObject(vercode) && FM.isset(vercode.getSubClassName) && vercode.getSubClassName() == 'GenericValue') {
        var o = vercode;
        vercode = o.getAttr('value','');
    }
    
    var me = this;
    var dmlist = new FM.DmList({
            verificationCode: vercode
        },'USER_verify'
    );
        
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var username = OA.apiAuth.getAttr('username','');
            var oCred = null;
            FM.forEach(data.Added,function(id, obj) {
                oCred = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            OA.apiAuth.setAttr('verified',oCred.getAttr('value.verify',false));
            me.saveCredentials();
            OA.apiAuth.setChanged(true,true); // posalji event
            callbackFn(true,OA.apiAuth);
            
            // posalji auth changed
            me.fireEvent('onAuthChanged',OA.apiAuth);
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();            
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}


// --  MO ----------------------------------------------------------------------
parseco.AppParseco.prototype.getAvailableNumbersToBuy = function(oMoAvQuery,cbfn) {
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    if(!FM.isset() || !oMoAvQuery) {
        callbackFn(false,null);
        return;
    }
    
    
    var me = this;
    var params = {
        countryId: oMoAvQuery.getAttr('countryId',''),
        dateFrom: oMoAvQuery.getAttr('dateFrom',''),
        dateTo: oMoAvQuery.getAttr('dateTo',''),
        criteria: oMoAvQuery.getAttr('criteria',''),
        page: oMoAvQuery.getAttr('page','1'),
        pageSize: oMoAvQuery.getAttr('pageSize','20')
    };
    
   
    var dmlist = new FM.DmList(params,'SMS_inbound_available');
    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {            
            var oNums = [];
            FM.forEach(data.Added,function(id, obj) {
                obj.setAttr('countryId',oMoAvQuery.getAttr('countryId',''));
                obj.setAttr('dateFrom',oMoAvQuery.getAttr('dateFrom',''));
                obj.setAttr('dateTo',oMoAvQuery.getAttr('dateTo',''));
                obj.setAttr('criteria',oMoAvQuery.getAttr('criteria',''));
                oNums.push(obj);
                return true;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,oNums);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}


parseco.AppParseco.prototype.getFreeTrialNumber = function(
    notifyURL,
    cbfn
) {
    // 
    if(FM.isObject(notifyURL) && FM.isset(notifyURL.getSubClassName)) {
        var o = notifyURL;
        notifyURL = o.getAttr('notify_url',o.getAttr('value',''));
    }
    
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    
    var me = this;
    var params = {
        notifyURL: notifyURL
    };
    
   
    var dmlist = new FM.DmList(params,'SMS_inbound_trial');
    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {            
            var oNums = [];
            FM.forEach(data.Added,function(id, obj) {
                oNums.push(obj);
                return true;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,oNums);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

// --  USSD --------------------------------------------------------------------
parseco.AppParseco.prototype.sendUSSD = function(oUSSDQuery,cbfn) {
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    if(!FM.isset(oUSSDQuery) || !oUSSDQuery) {
        callbackFn(false,null);
        return;
    }
    
    
    var appFnName = oUSSDQuery.getAttr('_ussd_function','');
    var appFn = FM.isFunction(window[appFnName]) ? window[appFnName] : null;
    
    var me = this;
    
    // ako je appfn provjeri
    if(appFn) {
        if(!appFn(oUSSDQuery,null)) { // stop
            callbackFn(false,null);
        }
    }
    
    var params = { 
        address: oUSSDQuery.getAttr('address',''),
        stopSession: oUSSDQuery.getAttr('stopSession','false'),
        message: oUSSDQuery.getAttr('message','').replace("|","\n")
    };

    var dmlist = new FM.DmList(params,'USSD_send');    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oSms = null;
            if(FM.isString(data)) { // STOP
                callbackFn(true,null);
                return false;
            }
        
            FM.forEach(data.Added,function(id, obj) {
                oSms = obj;
                return false;
            });
            if(oSms == null) {
                FM.forEach(data.Updated,function(id, obj) {
                    oSms = obj;
                    return false;
                });                
            }
            
            callbackFn(true,oSms);
            
            if(oUSSDQuery.getAttr('stopSession','false') != 'true' && appFn) {
                if(appFn(oUSSDQuery,oSms)) { // resend                    
                    if(oUSSDQuery.getAttr('stopSession','false') == 'true') {
                        dmlist.removeListener(lstnr);
                        dmlist.dispose();            
                        dmlist = new FM.DmList(params,'USSD_send_stop');
                        dmlist.addListener(lstnr);
                    } 
                    dmlist.setAttr('address', oUSSDQuery.getAttr('address','')),
                    dmlist.setAttr('stopSession', oUSSDQuery.getAttr('stopSession','false')),
                    dmlist.setAttr('message', oUSSDQuery.getAttr('message','').replace(/\|/g,"\n"))
                    
                    dmlist.getData(); // new api call
                    return true;
                }
            }
            dmlist.removeListener(lstnr);
            dmlist.dispose();            
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            me.setLastError(me.getErrorObject(data));
            callbackFn(false,OA.apiLastErr);
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}


/* events */
parseco.AppParseco.prototype.onSignup = function(sender,evdata) {
    this.signup(FM.getAttr(evdata,'object',null),FM.getAttr(evdata,'callback',null));
}

parseco.AppParseco.prototype.onSignupVerify = function(sender,evdata) {
    this.verifyAccount(FM.getAttr(evdata,'object',null),FM.getAttr(evdata,'callback',null));
}

parseco.AppParseco.prototype.onFreeTrial = function(sender,evdata) {
    this.getFreeTrialNumber(FM.getAttr(evdata,'object',null),FM.getAttr(evdata,'callback',null));
}

parseco.AppParseco.prototype.onSendSMS = function(sender,evdata) {
    this.sendSMS(FM.getAttr(evdata,'object',null),FM.getAttr(evdata,'callback',null));
}

parseco.AppParseco.prototype.onRetrieveRoamingStatus = function(sender,evdata) {
    var oParams = FM.getAttr(evdata,'object',null);
    
    this.retrieveRoamingStatus(
        oParams.getAttr('address',''),
        oParams.getAttr('notifyURL',''),
        oParams.getAttr('includeExtendedData',''),
        oParams.getAttr('clientCorrelator',''),
        oParams.getAttr('callbackData',''),
        FM.getAttr(evdata,'callback',null)
    );
}

parseco.AppParseco.prototype.onUpdateInboundSubscription = function(sender,evdata) {
    this.updateInboundSubscription(
        FM.getAttr(evdata,'object',null),
        FM.getAttr(evdata,'callback',null)
    );
}

parseco.AppParseco.prototype.onSendUSSD = function(sender,evdata) {
    this.sendUSSD(
        FM.getAttr(evdata,'object',null),
        FM.getAttr(evdata,'callback',null)
    );
}

parseco.AppParseco.prototype.onGetAvailableNumbersToBuy = function(sender,evdata) {
    this.getAvailableNumbersToBuy(
        FM.getAttr(evdata,'object',null),
        FM.getAttr(evdata,'callback',null)
    );    
}


    
// -- username check -------------------------------------------------------
parseco.AppParseco.prototype.usernameCheck = function(
	    oParam,
	    cbfn
	) {
	    // 
	    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
	    
	    var me = this;
	    var params = {
	        username: oParam.getAttr('value','')
	    };
	    
	   
	    var dmlist = new FM.DmList(params,'USER_username_check');
	    
	    var lstnr = {
	        onListStart: function(sender,data) {
	            me.setLastError();
	            return true;
	        },
	        onListEnd: function(sender,data) {            
	            var oResult = null;
	            FM.forEach(data.Added,function(id, obj) {
	            	oResult = obj;
	                return false;
	            });
	            dmlist.removeListener(lstnr);
	            dmlist.dispose();
	            callbackFn(true,oResult);
	            return true;
	        },
	        onListError: function(sender,data) {
	            dmlist.removeListener(lstnr);
	            dmlist.dispose();	            
	            me.setLastError(me.getErrorObject(data));
	            callbackFn(false,OA.apiLastErr);
	            return true;
	        }
	    };
	    dmlist.addListener(lstnr);
	    dmlist.getData();            
	}

parseco.AppParseco.prototype.onUsernameCheck = function(sender,evdata) {
    this.usernameCheck(
            FM.getAttr(evdata,'object',null),
            FM.getAttr(evdata,'callback',null)
        );
	
}

parseco.AppParseco.className = "AppParseco";
parseco.AppParseco.fullClassName = 'parseco.AppParseco';
    

// file: src/parseco/api.js
// -- api namespace, extending oneapi ------------------------------------------
if(typeof(oneapi) != 'undefined') {
    /* owr
     * 
     * Inicijalizacija, options su tu za slucaj kad zelimo i widgete
     * pa moramo aplikaciju konfigurirati drugacije
     * Vraca app / null
     */
    oneapi.init = function(args,options) {
        args = FM.isset(args) && args ? args : {};
        options = FM.isset(options) && options ? options : {
            appClass: 'parseco.AppParseco',
            dmObject: new FM.DmObject(args)
        }
        oneapi.session.app = FM.AppObject.startApp(options,oneapi.session.evHandler);
                
        return oneapi.session.app;
    }
    
    
    oneapi.mlInit = function(node) {
        return oneapi.session.app.mlInit(node);
    }
    
}


}
