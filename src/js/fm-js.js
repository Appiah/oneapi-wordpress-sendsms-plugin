if(typeof(window.console) == 'undefined') {
    /** @ignore */
    window.console = new function() {
        /** @ignore */
        this.log = function() {}
    };
}


if(typeof(FM) == 'undefined') {
    /**
    * @namespace Basic SDK namespace
    */
    FM = {};    


    // propertyes
    FM.version = '0.1';

    // static methods

/**
* Clone object methods and propertyes. This function is not recursive
* @static
* @function 
* @returns {object} Returns true if variable is set
*/
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
            akeys[0] == 'LM' ? lm : window 
            );
        var startIndex = parent == window ? 0 : 1;

        for(var i = startIndex; i < akeys.length; i++) {
            if(!FM.isset(parent[akeys[i]])) return null;
            parent = parent[akeys[i]];
        }

        return parent;
    }

    FM.generateNewID = function() {
        return '_' + new Date().getTime() + "_" + Math.floor(Math.random()*1000000);
    }        

    FM._findClassWithMethod = function(o,m) {
        while(
            FM.isset(o) && o && 
            (FM.getAttr(o,'constructor.prototype.'+m,null) == FM.getAttr(o,'_parent.constructor.prototype.' +m,null))
            ) {
            o = o._parent;
        }
        return FM.isset(o) && o ? o : null;

    }

    FM._super_stack = function(me,method,on) {
        var mStack = FM.getAttr(me,'_parent_call_stack', []);  

        if(on) {
            // only class with same method can call super
            var startcls = FM._findClassWithMethod(
                mStack.length == 0 || mStack[mStack.length-1].m != method? 
                me :
                mStack[mStack.length-1].oext,
                method
                );
        
        
            mStack[mStack.length] = {
                o: startcls,
                m: method,
                oext: FM._findClassWithMethod(startcls._parent,method)
            };
            me._parent_call_stack = mStack;
            return mStack;
        
            // new stack
            if(mStack.length == 0 || mStack[mStack.length-1].m != method ) {
                mStack[mStack.length] = {
                    o: me, //FM._findClassWithMethod(me._parent,method), 
                    m: method
                };

            } else { // old stack
                mStack[mStack.length] = {
                    o: mStack[mStack.length-1].o, //FM._findClassWithMethod(mStack[mStack.length-1].o._parent,method), 
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
            var fnThis = mStack && mStack.length > 0 && mStack[mStack.length-1].oext ?
            FM._findClassWithMethod(mStack[mStack.length-1].oext,method) :
            null
            ;
        
            //if(fnThis) var retc = fnThis[method].apply(me, Array.prototype.slice.call(callArgs, 1));
            var retc = fnThis ?            
            fnThis[method].apply(me, Array.prototype.slice.call(callArgs, 1))
            : undefined;
        
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
            /** @ignore */
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    cbfn();
                }
            };
        } else { //Others
            /** @ignore */
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

    FM.isNumber = function(n) {
        return !isNaN(parseFloat(n));
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
                if(FM.isFunction(val[k]) || !key || FM.isset(options[k])) {
                    dirty = dirty | FM.setAttr(options,undoList,k,val[k]);
                }
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
        if(undoList && FM.isset(options[akeys[0].toString()]) && !FM.isset(undoList[akeys[0].toString()]))  {
            undoList[akeys[0].toString()] = options[akeys[0].toString()];
        }
        ar[aname] = val;
        dirty = true;
        return dirty;
    }

    FM.resolveAttrValue = function(options,attrName,def,context) {
        options = FM.isset(options) && options && FM.isObject(options) ? options : {};
        context = FM.isset(context) && context && FM.isObject(context) ? context : {};
        var v = FM.getAttr(options,attrName,def);
    
        // eval ?
        if(FM.isString(v) && FM.startsWith(v,'@')) {
            
            v = v.substring(FM.startsWith(v,'@@') ? 2 : 1);
            context._fn = function() {
                return eval(v);
            }
            try {
                var retv = context._fn();
            } catch(e) {
                error.log("FM.resolveAttrValue:" + e);
                return undefined;
            }
            v = retv;
        }
    
        return v;
    }


    FM.findNodeWithAttr = function(node,attrName) {
        while(FM.isset(node) && node && !FM.isset(node[attrName])) {
            node = node.parentNode;
        }
        return(
            FM.isset(node) && node ? node[attrName] : null
            );
    }
    
    FM.getNodeWithId = function(id) {
        var jo = $('#' + id);
        if(jo.length < 1) return null;
        return jo[0];
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

    FM.cancelEventPropagation = function() {
        e = window.event;
        //IE9 & Other Browsers
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        //IE8 and Lower
        else {
            e.cancelBubble = true;
        }
    }

    FM.serialize = function(obj,def) {
        def = FM.isset(def) ? def : '';
        if(!FM.isset(obj) || !obj) return def;

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

    // -- dates --------------------------------------------------------------------
    FM.dateTimeDivider = ' ';
    /*
    * Date Format 1.2.3
    * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
    * MIT license
    *
    * Includes enhancements by Scott Trenda <scott.trenda.net>
    * and Kris Kowal <cixar.com/~kris.kowal/>
    *
    * Accepts a date, a mask, or a date and a mask.
    * Returns a formatted version of the given date.
    * The date defaults to the current date/time.
    * The mask defaults to dateFormat.masks.default.
    * 
    * http://blog.stevenlevithan.com/archives/date-time-format
    */

    FM.dateFormat = function () {
        var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

        // Regexes and supporting functions are cached through closure
        return function (date, mask, utc) {
            var dF = FM.dateFormat;

            // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
            if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
                mask = date;
                date = undefined;
            }

            // Passing date through Date applies Date.parse, if necessary
            date = date ? new Date(date) : new Date;
            if (isNaN(date)) throw SyntaxError("invalid date");

            mask = String(dF.masks[mask] || mask || dF.masks["default"]);

            // Allow setting the utc argument via the mask
            if (mask.slice(0, 4) == "UTC:") {
                mask = mask.slice(4);
                utc = true;
            }

            var	_ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d:    d,
                dd:   pad(d),
                ddd:  dF.i18n.dayNames[D],
                dddd: dF.i18n.dayNames[D + 7],
                m:    m + 1,
                mm:   pad(m + 1),
                mmm:  dF.i18n.monthNames[m],
                mmmm: dF.i18n.monthNames[m + 12],
                yy:   String(y).slice(2),
                yyyy: y,
                h:    H % 12 || 12,
                hh:   pad(H % 12 || 12),
                H:    H,
                HH:   pad(H),
                M:    M,
                MM:   pad(M),
                s:    s,
                ss:   pad(s),
                l:    pad(L, 3),
                L:    pad(L > 99 ? Math.round(L / 10) : L),
                t:    H < 12 ? "a"  : "p",
                tt:   H < 12 ? "am" : "pm",
                T:    H < 12 ? "A"  : "P",
                TT:   H < 12 ? "AM" : "PM",
                Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

            return mask.replace(token, function ($0) {
                return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
            });
        };
    }();

    // Some common format strings
    FM.dateFormat.masks = {
        "default":      "ddd mmm dd yyyy HH:MM:ss",
        shortDate:      "m/d/yy",
        shortDateTime:      "m/d/yy HH:MM:ss",
        mediumDate:     "mmm d, yyyy",
        mediumDateTime: "mmm d, yyyy HH:MM:ss",
        longDate:       "mmmm d, yyyy",
        longDateTime:   "mmmm d, yyyy HH:MM:ss",
        fullDate:       "dddd, mmmm d, yyyy",
        fullDateTime:   "dddd, mmmm d, yyyy HH:MM:ss",
        shortTime:      "h:MM TT",
        mediumTime:     "h:MM:ss TT",
        longTime:       "h:MM:ss TT Z",
        isoDate:        "yyyy-mm-dd",
        isoTime:        "HH:MM:ss",
        isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
    };

    // Internationalization strings
    FM.dateFormat.i18n = {
        dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ]
    };



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

    FM.isDateString = function(sdate) { // '2010-05-26 05:56:00'
        var templ = "" + new Date().getFullYear() + '-01-01' + FM.dateTimeDivider + '00:00:00';
        if(sdate.length < templ.length) {
            sdate += templ.substr(sdate.length);
        }
        new RegExp("[-:\\" + FM.dateTimeDivider + "]","g")
        var arr = sdate.split(new RegExp("[-:\\" + FM.dateTimeDivider + "]","g"));
    
        return arr.length == 6;
    }

    FM.parseLocalDateString = function(sdate) { 
        if(!FM.isset(sdate) || sdate == null || sdate == '') return(null);
        var d = new Date(Date.parse(sdate));
        return isNaN(d.getTime()) ? null : d;
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
    
        var templ = "" + new Date().getFullYear() + '-01-01' + FM.dateTimeDivider + '00:00:00';
        if(sdate.length < templ.length) {
            sdate += templ.substr(sdate.length);
        }

        // godina
        pos = sdate.indexOf("-",fpos);
        if(pos < 0) {
            sy = sdate.substr(fpos);
            fpos = -1;
        } else {
            sy = sdate.substr(fpos, pos - fpos);
            fpos = pos + 1;
        }
        if(sy < 1970 || sy > 9999) return('');
    
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
        if(sm < 1 || sm > 12) return('');
    
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
        if(sd < 1 || sd > 31) return('');
    
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
        if(sh < 0 || sh > 23) return('');
    
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
        if(sn < 0 || sn > 59) return('');

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
        if(ss < 0 || ss > 59) return('');
    
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
        return isNaN(d.getTime()) ? '' : d;
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
        return FM.l_timestamp(date) / 1000;
    }
    FM.l_timestamp = function(date) {
        return Math.round((FM.isset(date) ? date : new Date()).getTime());
    }

    FM.getArgs = function(attr,def) {
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            pair[0]=FM.urlDecode(pair[0]);
            pair[1]=FM.isset(pair[1]) ? FM.urlDecode(pair[1]) : '';
          
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = pair[1];
            // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [ query_string[pair[0]], pair[1] ];
                query_string[pair[0]] = arr;
            // If third or later entry with this name
            } else {
                query_string[pair[0]].push(pair[1]);
            }
        } 
        
        var args = query_string;
        args._page = {
            host: window.location.protocol + "//" + window.location.host + 
            (window.location.port == '' ? '' : ":" + window.location.port) ,
            url: window.location.href,
            path: window.location.pathname
        }
        
        var pnamearr = args._page.path.split("/");
        args._page.fullname = pnamearr.length > 0 ? pnamearr[pnamearr.length-1] : args._page.path;
        var i = args._page.fullname.lastIndexOf(".");
        args._page.name = i > -1 ? 
        args._page.fullname.substring(0,i) : 
        args._page.fullname
        ;
        
        return FM.isset(attr) && attr ? FM.getAttr(args,attr,def) : args;        
    }


    // https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
    FM.cancelFullscreen = function() {
        if(document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }   
    FM.expandToFullSCreen = function(elmid) {
        var elem = FM.isString(elmid) ? document.getElementById(elmid) : elmid;
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        }    
    }

    FM.validateEmail = function(email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
 
    FM.getElementFromFmId = function(id,pos,del) {
        del = typeof del !== 'undefined' ? del : '::';
        return id.split(del)[pos];
    }


    FM.getPreferedLanguage = function() {
        return (window.navigator.userLanguage || window.navigator.language).split('-')[0];
    }
// -- Basic FM class -----------------------------------------------------------
/**
* Basic FM class. Provide listeners, attributes, propertyes, log
* @class FM.Object
* @memberOf FM
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
* Returns FM package name
* @public
* @function 
* @returns {string} Returns package name of object
*/
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
        /** @ignore */
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
* @param {Object} calledlist list of olready called listeners
*/   
FM.Object.prototype.onEvent = function(sender,ev,data,calledlist) {
     var cl = FM.isset(calledlist) ? calledlist : {};
    if(!this.isEnabled()) return false;

    //  ako imaš event fn
    if(FM.isset(this[ev])) {
        this[ev](sender,data);
        cl[this.getID()] = '1';
        FM.setAttr(cl,'_executed','1'); 
        //return cl;
    } 

    // proslijedi dalje ako nemas ev fn
    //return this.fireEvent(ev,data,cl);
    return cl;
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
    if(FM.getAttr(cl,'_executed','0') == '1') return cl;
    
    cl[this.getID()] = '0'; 
    
    // obicni listeneri
    var larr = this.listenersArr;
    for(var id in larr) {
        var ldef = larr[id];
        if(!FM.isset(cl[id])) {
            cl[id] = "0";
            try {
                if(ldef.iscallback) {
                    if(FM.isFunction(ldef.listener[ev])) {
                        ldef.listener[ev](this,evdata);
                        cl[ldef.listener.getID()] = '1';
                        FM.setAttr(cl,'_executed','1'); 
                    }
                } else {
                    cl = ldef.listener.onEvent(this,ev,FM.isset(evdata) ? evdata : {},cl);
                }
            } catch(err) {
                console.log("fireEvent error(" + ev + "): " + err);
            }
            //if(FM.getAttr(cl,'_executed','0') == '1') break;            
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

/**
* Discard object attributes changes
* @public
* @function 
*/
FM.Object.prototype.discardChanges = function() {
    for (var option in this.undoList) {
        this.setAttr(option, this.undoList[option]);
    }
    this.setChanged(false, true);
}

FM.Object.prototype.resolveAttrValue = function(attrName,def,context) {
    return FM.resolveAttrValue(this.options,attrName,def,context);
}

/**
* Return an unique string based on object data
* 
* @public
* @function
*/      
FM.Object.prototype.getDataHash = function() {
    var dataHash = '';
    for(var dataName in this.getAttr()) {
        var dataValue = this.d(dataName, '');

        dataHash += dataHash == '' ? dataValue : ',' + dataValue;
    }
    return FM.md5(dataHash);
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
* Evaluate property value
* @static
* @function
* @param {string} attrName Property name
* @param {string} def Default value of property
* @param {array} fnargs resolver arguments
*/
FM.Object.prototype.resolvePropertyValue = function(attrName,def,context) {
    return FM.resolveAttrValue(this.prop,attrName,def,context);
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
* @param {string} callerinfo 
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

/**
* Dispose object
* 
* @public
* @function 
*/
FM.Object.prototype.dispose = function() {
    console.log("DISPOSE:" + this.getSubClassName() + ":" + this.getID());
    this.removeAllListeners();
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


// == static ===================================================================
FM.Object.className = "Object";
FM.Object.fullClassName = 'ob.Object';
/**
* Ajax class. 
* 
* @class FM.UtAjax
* @extends FM.Object
* @param {object} config Options
*/    
FM.UtAjax = function() {    
    var me = this;    
    /** @ignore */
    this._cb_onReadyStateChange = function() {        
        if(me.http.readyState == FM.UtAjax.AJAX_STATE_LOADEND) { // http ok                
            // timeout
            if(me.http.status == 0) {
                return me.fireEvent("onAjaxStateError",new FM.DmGenericError({
                    messageId: "1",
                    text: me.getAttr('url','') + ":\n Timeout or Access-Control-Allow-Origin is not allowed" 
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
            if(true /*me.http.responseText == '' */) {
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
                if(pname === "_body" && this.getAttr("method","POST") == 'POST') {
                    pline =  /*encodeURIComponent */(val);
                } else {
                    pline = pline + (pline == "" ? "" : "&") + pname + "=" + encodeURIComponent(val);
                }
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
/* Primjer sa w3schools, tako radi u IE10 */
    var http = null;
    
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        http = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return http;

/* NASE ORIGINAL */
/* 
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
*/
}
/**
* Ayax job class. 
* 
* @class FM.UtAjaxJob
* @extends FM.Object
* @param {object} oOwner Owner of this instance
* @param {object} initParams
* @param {object} callArguments
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


/**
* Timer class. <b>Ovo bi trebalo srediti da extend FM.object</b>
* 
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
/**
* GPS class. 
* 
* @class FM.UtGps
*/
FM.UtGps = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(FM.UtGps,FM.Object); 

// properties
FM.UtGps.prototype.objectSubClass = "UtGps";

// static
FM.UtGps.className = "UtGps";
FM.UtGps.fullClassName = 'ut.UtGps';

FM.UtGps.prototype._init = function(opt) {            
    this.gpsObject = null;
    this.gpsStatus = false;
    this._super("_init",opt);
    this.objectSubClass = "UtGps";
}

FM.UtGps.prototype._sendGpsEvent = function(p) {
    this.fireEvent("onGpsPosition",{
        xpos:       FM.getAttr(p,'coords.longitude',''),
        ypos:       FM.getAttr(p,'coords.latitude',''),
        zpos:       FM.getAttr(p,'coords.altitude',''),
        xyacc:      FM.getAttr(p,'coords.accuracy',''),
        zacc:       FM.getAttr(p,'coords.altitudeAccuracy',''),
        speed:      FM.getAttr(p,'coords.speed',''),
        heading:    FM.getAttr(p,'coords.heading',''),
        tstamp:     new Date().getTime()
    });
}

FM.UtGps.prototype._sendGpsErrorEvent = function(errormsg) {
    this.fireEvent("onGpsError",errormsg);
}


FM.UtGps.prototype.isStarted = function() {
    return this.gpsObject != null && this.gpsStatus;
}

FM.UtGps.prototype.stopService = function(sendEvent) {
    if(this.gpsObject) {
        navigator.geolocation.clearWatch(this.gpsObject);
        this.gpsObject = null;
    }
    this.gpsStatus = false;
    if(FM.isset(sendEvent) && sendEvent == true) {
        this.fireEvent("onGpsServiceStopped",this);
    }
}

FM.UtGps.prototype.startService = function(sendEvent) {
    if(this.isStarted()) this.stopService();

    var me = this;
    this.gpsObject = navigator.geolocation.watchPosition(function(p) {
        me._sendGpsEvent(p);
    },function(error) {
        me._sendGpsErrorEvent(error.message);
    });
    this.gpsStatus = true;
    if(FM.isset(sendEvent) && sendEvent == true) this.fireEvent("onGpsServiceStarted","");
}

FM.UtGps.prototype.getPosition = function(cbFn) {
    var me = this;
    var callbackFn = isset(cbFn) && cbFn ? cbFn : function() {};
    var stsrv = this.isStarted();
    if(stsrv) this.stopService(false);
    navigator.geolocation.getCurrentPosition(function(p) {
        if(stsrv) me.startService(false);
        if(callbackFn) {
            callbackFn({
                xpos:       FM.getAttr(p,'coords.longitude',''),
                ypos:       FM.getAttr(p,'coords.latitude',''),
                zpos:       FM.getAttr(p,'coords.altitude',''),
                xyacc:      FM.getAttr(p,'coords.accuracy',''),
                zacc:       FM.getAttr(p,'coords.altitudeAccuracy',''),
                speed:      FM.getAttr(p,'coords.speed',''),
                heading:    FM.getAttr(p,'coords.heading',''),
                tstamp:     new Date().getTime()
            },null);
        } else {
            me._sendGpsEvent(p);
        }
    },function(error) {
        if(stsrv) me.startService(false);
        if(callbackFn) callbackFn(null,error.message);
        else me.sendGpsErrorEvent(error.message);
    },{
        timeout:10000
    });
}



FM.UtGps.className = "UtGps";
FM.UtGps.fullClassName = "ut.UtGps";

/**
* GPS cell class. 
* 
* @class FM.UtGsmCell
*/
FM.UtGsmCell = function() {
    this._init.apply(this, arguments); // new poziva _init()
}

FM.extendClass(FM.UtGsmCell,FM.Object); 

// properties
FM.UtGsmCell.prototype.objectSubClass = "UtGsmCell";

// static
FM.UtGsmCell.className = "UtGsmCell";
FM.UtGsmCell.fullClassName = 'ut.UtGsmCell';

FM.UtGsmCell.prototype._init = function(opt) {            
    this.phoneObject = null;
    this.phoneStatus = false;
    this._super("_init",opt);
    this.objectSubClass = "UtGsmCell";
}

FM.UtGsmCell.prototype._sendPhoneEvent = function(p) {
    console.log("_sendPhoneEvent:" + JSON.stringify(p));
    this.fireEvent("onPhonePosition",p);
}

FM.UtGsmCell.prototype._sendPhoneErrorEvent = function(errormsg) {
    this.fireEvent("onPhoneError",errormsg);
}


FM.UtGsmCell.prototype.isStarted = function() {
    return this.phoneObject != null && this.phoneStatus;
}

FM.UtGsmCell.prototype.stopService = function(sendEvent) {
    if(this.phoneObject) {
        fmRemoveCellListener(this.getID());
        this.phoneObject = null;
    }
    this.phoneStatus = false;
    if(FM.isset(sendEvent) && sendEvent == true) {
        this.fireEvent("onPhoneServiceStopped",this);
    }
}

FM.UtGsmCell.prototype.startService = function(sendEvent) {
    if(this.isStarted()) this.stopService();

    var me = this;
    fmAddCellListener(
        this.getID(),
        function(p) {
             console.log("new UtGsmCell");
            me._sendPhoneEvent(JSON.parse(p));
        },function(error) {
            me._sendPhoneErrorEvent(error.message);
        }
        );        
    this.phoneStatus = true;
    
    if(FM.isset(sendEvent) && sendEvent == true) this.fireEvent("onPhoneServiceStarted","");
}

FM.UtGsmCell.prototype.getPosition = function(cbFn) {
    var me = this;
    var callbackFn = isset(cbFn) && cbFn ? cbFn : function() {};
    fmGetGsmCell(function(p) {
        callbackFn(p);
    });
}
FM.UtGsmCell.prototype.getAllCells = function(cbFn) {
    var me = this;
    var callbackFn = isset(cbFn) && cbFn ? cbFn : function() {};
    fmGetAllGsmCells(function(allp) {
        var p = allp.length > 0 ? allp[0] : {};
        callbackFn(p);
    });
}



FM.UtGsmCell.className = "UtGsmCell";
FM.UtGsmCell.fullClassName = "ut.UtGsmCell";

/**
* GPS cell class. 
* 
* @class FM.UtWiFi
*/
FM.UtWiFi = function() {
    this._init.apply(this, arguments); // new poziva _init()
}

FM.extendClass(FM.UtWiFi,FM.Object); 

// properties
FM.UtWiFi.prototype.objectSubClass = "UtWiFi";

// static
FM.UtWiFi.className = "UtWiFi";
FM.UtWiFi.fullClassName = 'ut.UtWiFi';

FM.UtWiFi.prototype._init = function(opt) {            
    this.wifiObject = null;
    this.wifiStatus = false;
    this._super("_init",opt);
    this.objectSubClass = "UtWiFi";
}

FM.UtWiFi.prototype._sendWiFiEvent = function(i) {
    var lst = [];
    FM.forEach(i, function(i,obj) {
        lst.push(new FM.DmWiFiData(obj));
        return true;
    });
    console.log("_sendWiFiEvent:" + JSON.stringify(i));
    this.fireEvent("onWiFiInfo",lst);
}

FM.UtWiFi.prototype._sendWiFiErrorEvent = function(errormsg) {
    this.fireEvent("onWiFiError",errormsg);
}


FM.UtWiFi.prototype.isStarted = function() {
    return this.wifiObject != null && this.wifiStatus;
}

FM.UtWiFi.prototype.stopService = function(sendEvent) {
    if(this.wifiObject) {
        fmRemoveWiFiListener(this.getID());
        this.wifiObject = null;
    }
    this.wifiStatus = false;
    if(FM.isset(sendEvent) && sendEvent == true) {
        this.fireEvent("onWiFiServiceStopped",this);
    }
}

FM.UtWiFi.prototype.startService = function(sendEvent) {
    if(this.isStarted()) this.stopService();

    var me = this;
    fmAddWiFiListener(
        this.getID(),
        function(p) {
             console.log("new UtWiFi");
            me._sendWiFiEvent(JSON.parse(p));
        },function(error) {
            me._sendWiFiErrorEvent(error.message);
        }
        );        
    this.wifiStatus = true;
    
    if(FM.isset(sendEvent) && sendEvent == true) this.fireEvent("onWiFiServiceStarted","");
}

FM.UtWiFi.className = "UtWiFi";
FM.UtWiFi.fullClassName = "ut.UtWiFi";

/**
* Sensor class. 
* 
* @class FM.UtSensor
*/
FM.UtSensor = function() {
    this._init.apply(this, arguments); // new poziva _init()
}

FM.extendClass(FM.UtSensor,FM.Object); 

// properties
FM.UtSensor.prototype.objectSubClass = "UtSensor";
FM.UtSensor.prototype.lastReceivedData = null;

// static
FM.UtSensor.className = "UtSensor";
FM.UtSensor.fullClassName = 'ut.UtSensor';

FM.UtSensor.prototype._init = function(opt) {   
    //console.log("UtSensor:" + JSON.stringify(opt));
    this.sensorStatus = false;
    this.lastReceivedData = null;
    this._super("_init",opt);
    this.objectSubClass = "UtSensor";
}

FM.UtSensor.prototype._sendSensorEvent = function(p) {    
    if(this.sensorStatus != true) return;

    console.log("_sendSensorEvent:" + FM.serialize(p, {}));
    this.lastReceivedData = new FM.DmSensorData({
        sensor: FM.getAttr(p,'type','UNKNOWN'),
        l_tstamp: FM.getAttr(p,'tstamp',''),
        v1: parseFloat(FM.getAttr(p,'values.0','0')),
        v2: parseFloat(FM.getAttr(p,'values.1','0')),
        v3: parseFloat(FM.getAttr(p,'values.2','0')),
        v: 0,
        azimuth: parseFloat(FM.getAttr(p,'orientation.0','0')),
        pitch: parseFloat(FM.getAttr(p,'orientation.1','0')),
        roll: parseFloat(FM.getAttr(p,'orientation.2','0'))        
    });
    
    this.fireEvent("onSensorData",this.lastReceivedData);
}

FM.UtSensor.prototype._sendSensorErrorEvent = function(errormsg) {
    this.fireEvent("onSensorError",errormsg);
}


FM.UtSensor.prototype.isStarted = function() {
    return this.sensorStatus;
}

FM.UtSensor.prototype.stopService = function(sendEvent) {
    if(this.isStarted()) {
        this.sensorStatus = false;
        fmRemoveSensorListener(this.getID(),this.getAttr("type",""));
        console.log("UtSensor stopped:" + this.getAttr("type",""));
        if(FM.isset(sendEvent) && sendEvent == true) {
            this.fireEvent("onSensorServiceStopped",this);
        }
    }
}

FM.UtSensor.prototype.startService = function(sendEvent) {
    if(!this.isStarted()) {
        var me = this;
        this.sensorStatus = true;
        fmAddSensorListener(
            this.getID(),
            this.getAttr("type",""),
            function(p) {
                me._sendSensorEvent(JSON.parse(p));
            },function(error) {
                me._sendSensorErrorEvent(error.message);
            }
        );        

        if(FM.isset(sendEvent) && sendEvent == true) this.fireEvent("onSensorServiceStarted","");
        console.log("UtSensor started:" + this.getAttr("type",""));
    }
}

FM.UtSensor.prototype.get = function() {
    return this.lastReceivedData;
}


FM.UtSensor.className = "UtSensor";
FM.UtSensor.fullClassName = "ut.UtSensor";

/**
* Timer job class. 
* 
* @class FM.UtTimerJob
* @extends FM.Object
* @param {String} event Event to send
* @param {any} evdata Data to send with event
* @param {number} period Period in seconds
* @param {number} number of times to execute
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
* Registry class. 
* 
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

FM.UtRegistry.prototype.set = function(pkey,val) {
    if(this.registry == null) {
        var cookie = FM.loadCookie(this.cookieName);
        if(FM.isset(cookie.reg)) this.registry = FM.unserialize(cookie.reg);
        if(this.registry == null || !FM.isObject(this.registry)) this.registry = {};
    }
    pkey = FM.trim(pkey);
    if(FM.startsWith(pkey, "/")) {
        pkey = pkey.substr(1);
    }
    if(FM.endsWith(pkey, "/")) {
        pkey = pkey.substr(0,pkey.length -1);
    }
    var keyArr = pkey.split('/');
    var keyIndex = keyArr.length -1;
    var cur = this.registry;
    FM.forEach(keyArr,function(i,k) {       
       var c = FM.isset(cur[k]) ? cur[k] : null;       
       if(!c || !FM.isObject(c) || i == keyIndex) {
           cur[k] = i != keyIndex ? {} : val;
       }
       cur = cur[k];
       return true;
    });
    FM.saveCookie(this.cookieName,{reg: FM.serialize(this.registry)});

    return true;
}

FM.UtRegistry.prototype.get = function(pkey,defv) {
    if(this.registry == null) {
        var cookie = FM.loadCookie(this.cookieName);
        if(FM.isset(cookie.reg)) this.registry = FM.unserialize(cookie.reg);
        if(this.registry == null || !FM.isObject(this.registry)) this.registry = {};
    }
    
    pkey = FM.trim(pkey);
    if(FM.startsWith(pkey, "/")) {
        pkey = pkey.substr(1);
    }
    if(FM.endsWith(pkey, "/")) {
        pkey = pkey.substr(0,pkey.length -1);
    }
    pkey = pkey.replace(/\//g,'.');
    var val = FM.getAttr(this.registry,pkey,defv);

    return val;
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

/**
* Templates factory class. 
* 
* @class FM.UtTemplate
* @extends FM.Object
* @param {object} opt Options
*/    
FM.UtTemplate = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(FM.UtTemplate,FM.Object); 

// properties
FM.UtTemplate.prototype.objectSubClass = "";
FM.UtTemplate.loadedTemplates = {};

FM.UtTemplate.prototype._init = function(attrs) {
    this._super("_init",attrs);
    this.objectSubClass = "UtTemplate";
}

FM.UtTemplate.getTemplateArgs = function(attrlist) {
    var params = {};
    FM.forEach(attrlist, function(i,v) {
        if(FM.startsWith(i, "data-fmml-template-attr-")) {
            params[i.substring(24)] = v;
        }
        return true;
    });
    
    return params;
}

FM.UtTemplate.getTemplate = function(app,attrlist,tname,cbfn) {
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    attrlist = FM.isset(attrlist) && attrlist && FM.isObject(attrlist) ? attrlist : {};
    var params = FM.UtTemplate.getTemplateArgs(attrlist);

    FM.UtTemplate._fetchTemplate(app,tname,function(isok,templ) {
        if(isok) {
            callbackFn(true,FM.applyTemplate(params,templ,false,false));
        } else {
            callbackFn(false,templ);
        }
    });
}    
    
FM.UtTemplate._fetchTemplate = function(app,tname,cbfn) {
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    if(FM.isset(FM.UtTemplate.loadedTemplates[tname])) {
        callbackFn(true,FM.UtTemplate.loadedTemplates[tname]);
        return;
    }
    var res = tname.replace(/\./g,'/');    
    res = '/' + res.replace('/html','.html');    
    var dmlist = new FM.DmList({},'getTemplate',app); 
    var lurl = dmlist.getProperty('config.url','');
    lurl += res;
    dmlist.setProperty('config.url', lurl);
    
    var lstnr = {
        onListEnd: function(sender,data) {
            var oData = null;
            FM.forEach(data.Added,function(id, obj) {
                oData = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            if(oData) {
                FM.UtTemplate.loadedTemplates[tname] = oData.getAttr("value");
                callbackFn(true,oData.getAttr("value"));
            } else {
                callbackFn(false,new FM.DmGenericError({
                    messageId: -1,
                    text: 'Data error: invalid response.'
                }));
            }
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(false,new FM.DmGenericError({
                messageId: -1,
                text: data
            }));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();    
}
    


/**
* Translations class. 
* 
* @class FM.UtTranslations
* @extends FM.Object
* @param {object} opt Options
*/    
FM.UtTranslations = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(FM.UtTranslations,FM.Object); 

// properties
FM.UtTranslations.prototype.objectSubClass = "";
FM.UtTranslations.translationsLoaded = false;
FM.UtTranslations.loadedTranslations = {};

FM.UtTranslations.missingTranslations = {};

FM.UtTranslations.prototype._init = function(attrs) {
    this._super("_init",attrs);
    this.objectSubClass = "UtTranslations";
}


    
FM.UtTranslations.fetchTranslations = function(app,cbfn) {
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var dmlist = new FM.DmList({},'getTranslations',app);     
    var lstnr = {
        onListEnd: function(sender,data) {
            FM.UtTranslations.translationsLoaded = true;
            
            FM.forEach(data.Added,function(id, obj) {
                // obj is generic value
                var dataid = FM.md5(obj.getAttr('value.text',''));
                
                FM.UtTranslations.loadedTranslations[dataid] = {
                    id: dataid,
                    text: obj.getAttr('value.text',''),
                    translation: obj.getAttr('value.translation','')
                };
                return true;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true);
            return true;
        },
        onListError: function(sender,data) {
            FM.UtTranslations.translationsLoaded = true;
            
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(false,new FM.DmGenericError({
                messageId: -1,
                text: data
            }));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();    
}
    
_T = function() { // text,app, params
    if(arguments.length < 2) return('');

    // nadji hash i prevedeni string
    var hash = FM.md5(arguments[0]);
    var str;
    
    if(FM.isset(FM.UtTranslations.loadedTranslations[hash])) {
        str = FM.UtTranslations.loadedTranslations[hash].translation;
    } else {
        str = arguments[0];
        console.log("Missing translation:" + arguments[0]);
        FM.UtTranslations.missingTranslations[hash]=arguments[0];
    }

    // ubaci podatke
    for(var i = 2; i < arguments.length; i++)  {
        str = str.replace("[:" + i + "]", arguments[i]);
    }

    // kraj
    return(str);    
}




/**
* Basic DM class. Provide groups
* @class FM.DmObject
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
    this.objectSubClass = "Object";
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

FM.DmObject.subClassTypes = {
    GLOBAL: {}
}; 

/**
* Returns DmObject <b>config</b> class function for <b>config</b> subclass type
* @static
* @function    
* @param {object} app Application
* @param {String} name Configuration name
* @return {object} object configuration or null if not found
*/   
FM.DmObject.getConfiguration = function(app,name) {
    var list = FM.DmObject.subClassTypes;

    app = FM.isset(app) && app ? app : null;
    var appCls = app ? app.getSubClassName() : null;
    var appCfg = appCls && FM.isset(list[appCls]) ? list[appCls] : null;
        
    var obj = null;
    if(appCfg && FM.isset(appCfg[name])) {
        obj = appCfg[name];
    } else if(app && FM.isArray(app.applicationObjectsSpace)) {
        FM.forEach(app.applicationObjectsSpace,function(i,ns) {
            if(FM.isset(list[ns]) && FM.isset(list[ns][name])) {
                obj = list[ns][name];
                return false;
            }
            return true;
        });
    }
    
    if(!obj && FM.isset(list['GLOBAL'][name])) {
        obj = list['GLOBAL'][name];
    }
    
    return obj;
}

FM.DmObject.newObject = function(app,clsname, oAttrs) {    
    var clsFn = FM.DmObject.getConfiguration(app,clsname);
    return clsFn ? new clsFn(oAttrs) : null;
}

FM.DmObject.getSubClassType = function(clsname,app) {
    return clsname == "" ? 
    FM.DmObject : (
        FM.isset(FM.DmObject.subClassTypes[clsname]) ? 
        FM.DmObject.subClassTypes[clsname] : 
        null
        );
}

FM.DmObject.addSubClassType = function(subclsname, clsfn,appCls) {
    appCls = FM.isset(appCls) && FM.isString(appCls) && appCls != '' ? appCls : 'GLOBAL';
    if(!FM.isset(FM.DmObject.subClassTypes[appCls])) {
        FM.DmObject.subClassTypes[appCls]= {};
    }
    
    FM.DmObject.subClassTypes[appCls][subclsname] = clsfn;
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


FM.DmObject.addSubClassType('Object',FM.DmObject,'GLOBAL');
/**
* Generic value DM class.
* @class FM.DmGenericValue
* @extends FM.DmObject
* @param {object} attrs list of attribute name and values
*/    

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

FM.DmObject.addSubClassType('GenericValue',FM.DmGenericValue,'GLOBAL');
/**
* Text translation DM class.
* @class FM.DmTranslation
* @extends FM.DmObject
* @param {object} attrs list of attribute name and values
*/    

FM.DmTranslation = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(FM.DmTranslation, FM.DmObject); 

// properties
FM.DmTranslation.prototype.objectSubClass = "";

// methods
FM.DmTranslation.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        text: '',
        translation: ''
    });
    this.objectSubClass = "Translation";
}
        
FM.DmTranslation.prototype.getDataID = function() {
    return this.getAttr("text",'');
}

FM.DmTranslation.className = "DmTranslation";
FM.DmTranslation.fullClassName = 'dm.DmTranslation';

FM.DmObject.addSubClassType('Translation',FM.DmTranslation,'GLOBAL');
/**
* Generic error DM class.
* @class FM.DmGenericError
* @extends FM.DmObject
* @param {object} attrs list of attribute name and values
* @param {object} options list of additional attributes
* 
*/
FM.DmGenericError = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(FM.DmGenericError, FM.DmObject); 

// properties
FM.DmGenericError.prototype.objectSubClass = "";

// methods
FM.DmGenericError.prototype._init = function(attrs,options) {
    this._super(
        "_init",
        attrs, 
        FM.extend({messageId: "0",text: "No error"},options) 
    );
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


FM.DmGenericError.className = "DmGenericError";
FM.DmGenericError.fullClassName = 'dm.DmGenericError';

FM.DmObject.addSubClassType('GenericError',FM.DmGenericError,'GLOBAL');
//-- SensorData ----------------------------------------------------------------
FM.DmSensorData = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(FM.DmSensorData, FM.DmObject); 

// properties
FM.DmSensorData.prototype.objectSubClass = "";

// methods
FM.DmSensorData.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        sensor: '',
        l_tstamp: '',
        v1: '',
        v2: '',
        v3: '',
        v: '',
        azimuth: '',
        pitch: '',
        roll: ''
    });
    this.objectSubClass = "SensorData";
}
        
FM.DmSensorData.prototype.getDataID = function() {
    return this.getID();
}

FM.DmSensorData.className = "DmSensorData";
FM.DmSensorData.fullClassName = 'dm.DmSensorData';

FM.DmObject.addSubClassType('SensorData',FM.DmSensorData,'GLOBAL');

//-- WiFiData ----------------------------------------------------------------
FM.DmWiFiData = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(FM.DmWiFiData, FM.DmObject); 

// properties
FM.DmWiFiData.prototype.objectSubClass = "";

// methods
FM.DmWiFiData.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        bssid: '',
        ssid: '',
        frequency: '',
        level: '',
        l_tstamp: ''
    });
    this.objectSubClass = "WiFiData";
}
        
FM.DmWiFiData.prototype.getDataID = function() {
    return this.getAttr('bssid');
}

FM.DmWiFiData.className = "DmWiFiData";
FM.DmWiFiData.fullClassName = 'dm.DmWiFiData';

FM.DmObject.addSubClassType('WiFiData',FM.DmWiFiData,'GLOBAL');

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
FM.DmList.prototype.app = null;

FM.DmList.prototype._init = function(attrs,config,app) {            
    this.objectsList = {};
    this.listIndex = [];
    this.app = FM.isset(app) ? app : null;
    
    // ajax
    this.fetchSize = FM.DmList.DEF_FETCH_SIZE;
    this.lastFetchTime = null;
    this.lastFetchEndTime = null;
    this.lastFetchArgs = null;
    this.lastFetchedArgs = null;

    this._super("_init",attrs);
    this.objectSubClass = "Collection";

    // list configuration
    config = FM.isset(config) && config ? config : null;
    if(FM.isString(config)) {
        if(FM.DmList.getConfiguration(this.app,config)) {
            config = FM.cloneObject(FM.DmList.getConfiguration(this.app,config));
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
    getMore = FM.isset(getMore) && getMore == true;
    this.setProperty('clearBeforeAdd',!getMore);
    

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
        if(getMore && this.isAttr("fromrow")) {
            args["fromrow"] = this.getListSize();
        }
        if(this.isAttr("nrows")) {
            if(this.getAttr('nrows','') !== '') {
                this.setFetchSize(parseInt(this.getAttr('nrows','20')));            
            } 
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

FM.DmList.prototype._resFn = function(value,args) {
    var is = value;
    if(FM.isString(is) && is != 'JSON') {
        var isFn = FM.stringPtrToObject(is);
        if(isFn) is = isFn;
    }
    if(is && FM.isFunction(is)) {
        try {
        is = is(args);
        } catch(e) {
            console.log("_resFn err:" + e);
        }
    }

    return is;        
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
    
    var isErrorResponse = this._resFn(
        this.getProperty('config.isErrorResponse',false),
        {dmList: this, utAjax: oAjax, response: response.getAttr('value',null)}
    );
    
    if(isErrorResponse) {        
        var errObj = this._resFn(
            this.getProperty('config.errorParser',null),
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
    var hdrs = this._resFn(
        this.getProperty('config.headers',{}),
        fnargs
    );
    for(var hname in hdrs) {
        hdrs[hname] = FM.applyTemplate(args,hdrs[hname],false,true).replace(/\s*\[\:.*?\]\s*/g, "");
    }
    var url = FM.applyTemplate(
        args,
        this._resFn(
            this.getProperty('config.url',''),
            fnargs
        ),
        false,true
    ).replace(/\s*\[\:.*?\]\s*/g, "");  
    

    var authArgs = this._resFn(
            this.getProperty('config.auth',{}),fnargs);    
        
    // ajax config
    var utAjax = new FM.UtAjax({
        url: url,
        method: this._resFn(this.getProperty('config.method',''),this),
        contentType: this._resFn(this.getProperty('config.contentType','application/x-www-form-urlencoded'),args),
        responseFormat: this._resFn(this.getProperty('config.responseFormat','TEXT'),args),
        validResponseCodes: this._resFn(this.getProperty('config.validResponseCodes',''),args),
        params: this._resFn(this.getProperty('config.params',{}),args),
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
    if (this.isStaticList()) { // Ako je static lista
        var staticlist = this.getStaticList(); // uzmi cache za tip liste
        
        if (FM.isset(staticlist)) {
            var cache = staticlist[this.getDataHash()]; // uzmi iz cachea rezultate za tocno ovu listu (get parametri)
            
            if (FM.isset(cache)) {
                return this.refreshList(cache); // refresh list with cached data    
            }            
        }
    }

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
    var addlst = [];
    
    // ako je lista objekata a ne objekt
    if(FM.isArray(inmember)) {
        addlst = inmember;
    } else {
        if(FM.isset(inmember.getDataID)) addlst.push(inmember);
    }

    return this.refreshList({Added: addlst, Updated: [], Removed: []},false,groupid,false,callevent);

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
        var nlistIndex = [];
        var myrmlist = [];        
        this.forEachListElement(
            function(index,iObj) {
                var odataid = iObj.getDataID();
                if(!FM.isset(rmlist[odataid])) {
                    nlist[odataid] = iObj;
                } else {
                    myrmlist.push(iObj);
                }
                return true;
            }
        );
        this.objectsList = nlist;
        FM.forEach(this.listIndex,function(i,id) {
            if(FM.isset(nlist[id])) {
                nlistIndex.push(id);
            }
            return true;
        });
        this.listIndex = nlistIndex;
        if(callevent != false) {
            this.fireEvent(
                "onListEnd",
                {
                    Removed: myrmlist,
                    Added: [],
                    Updated: []
                });                
        }    
        
        return myrmlist;
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
    this.listIndex = [];

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
// FM.DmList.prototype.set = function(onlyExisting,objList []{},idattr) 
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
        if(!FM.isset(this.objectsList[id.toString()])) {
            this.listIndex.push(id.toString());
        }
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
FM.DmList.prototype.forEachListElement = function(doFn,returnIndex) {
    // pokreni
    var id,lobj,i;

    returnIndex = FM.isset(returnIndex) ? (returnIndex == true) : false;
    for(i = 0; i < this.listIndex.length; i++) {
        lobj = this.objectsList[this.listIndex[i]];
        if(FM.isset(lobj) && FM.isset(lobj.getID)) {
            if(!doFn(id,lobj)) return(returnIndex ? id : lobj);
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
    var added = [];
    var updated = [];
    
    // clear
    var removed = this.getProperty('clearBeforeAdd',false) ? 
        this.clearList(false) : []
        ;
    this.setProperty('clearBeforeAdd',false);
    
    // add
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
    for(var respId =0; respId < respCol.length; respId++) {
        if(responseParser) {
            lstObj = responseParser({dmList: this, response: respCol[respId],raw: val});
            if(!lstObj) {
                this.fireEvent("onListError",new FM.DmGenericError({
                    messageId: -1,
                    text: 'Data error: invalid response.'
                }));
                return false;
            }
        } else {
            lstObj = new FM.DmGenericValue({value: respCol[respId]});
        } 
        
        // osvjezimo listu
        // objekti se ne zamijenjuju, radi se update da ostanu reference na obj ok
        var oldObj = this.get(lstObj.getDataID());
        if(oldObj) {
            updated.push(lstObj);
        } else {
            added.push(lstObj);
        }
    }
    
    if (this.isStaticList()) { // Ako je static lista
        var staticlist = this.getStaticList(); // uzmi cache za tip liste

        if (FM.isset(staticlist)) {
            staticlist[this.getDataHash()] = {Added: added, Updated: updated, Removed: removed};
        }
    }

    return this.refreshList(
        {Added: added, Updated: updated, Removed: removed},onlyExisting,groupid,protectDirty
    );
}


FM.DmList.prototype._refreshAdd = function(list,retList,onlyExisting,groupid,protectDirty) {
    var id,oValue,oOldValue;
    
    for(id = 0; id <list.length; id++) {
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
                    retList.Updated.push(oOldValue);
                    retList.listCount++;
                }
            } else {
                if(groupid && !oValue.isInGroup(groupid)) {
                    oValue.addGroup(groupid);
                }                
                this.set(oValue, oValue.getDataID());
                retList.Added.push(oValue);
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
        Removed: [],
        Added: [],
        Updated: []
    };        

    // brisani
    if(FM.isset(response) && FM.isset(response.Removed)) {
        for(id = 0; id < response.Removed.length; id++) {
            oValue = response.Removed[id];
            oOldValue = this.get(oValue.getDataID());
            if(groupid) {
                // makni grupu
                if(oOldValue.isInGroup(groupid)) {
                    oOldValue.removeGroup(groupid);
                }
                // micemo ga samo ako je broj grupa 0
                if(oOldValue.getGroupsCount() < 1) {
                    this.removeFromList(oOldValue.getDataID(), false);
                    retList.Removed.push(oOldValue);
                    retList.listCount++;
                } else {
                    retList.Updated.push(oOldValue);
                    retList.listCount++;
                }
            } else {
                if(oOldValue) {
                    this.removeFromList(oOldValue.getDataID(), false);
                    retList.Removed.push(oOldValue);
                    retList.listCount++;
                }
            }
        }
    }
    
    // dodani
    if(FM.isset(response) && FM.isset(response.Added)) {
        this._refreshAdd(response.Added,retList,onlyExisting,groupid,protectDirty);
    }
    if(FM.isset(response) && FM.isset(response.Updated)) {
        this._refreshAdd(response.Updated,retList,onlyExisting,groupid,protectDirty);
    }
        

    // posalji evente za change
    for(id = 0; id < retList.Updated.length; id++) {
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


/**
* Return the List configuration name
* @public
* @function    
* @return {string} listname
*/                    
FM.DmList.prototype.getListConfigName = function() {
    return this.getProperty('config.listname', '');
}

/**
* Return if the List is Static (cacheable)
* @public
* @function    
* @return {boolean} isliststatic
*/ 
FM.DmList.prototype.isStaticList = function() {
    return this.getProperty('config.isstatic', false) == true ? true : false;
}

/**
* Return the static list
* @public
* @function    
* @return { {} } list
*/ 
FM.DmList.prototype.getStaticList = function() {
    var listconfig = FM.DmList.getConfiguration(this.app,this.getListConfigName());
    
    if (FM.isset(listconfig)) {
        if (!FM.isset(listconfig.staticlist)) {
            listconfig.staticlist = {};
        }
        return listconfig.staticlist;
    }

    return; //error
}

// == static ===================================================================
FM.DmList.className = "DmList";
FM.DmList.fullClassName = 'dm.DmList';

FM.DmList.DEF_FETCH_SIZE = 20;

FM.DmList.configurations = {
    GLOBAL: {}
};

/**
* Add new DmList configuration
* @static
* @function    
* @param {String} name Name of configuration
* @param {object} config Configuration
* @param {String} appCls Application subclass
*/   

FM.DmList.addConfiguration = function(name,config,appCls) {
    appCls = FM.isset(appCls) && FM.isString(appCls) && appCls != '' ? appCls : 'GLOBAL';
    if(!FM.isset(name) || !name || name == '') return false;
    if(!FM.isset(FM.DmList.configurations[appCls])) {
        FM.DmList.configurations[appCls]= {};
    }
    
    FM.DmList.configurations[appCls][name] = config;
    FM.DmList.configurations[appCls][name].listname = name;
    return true;
}

/**
* Returns DmList <b>config</b> configuration
* @static
* @function    
* @param {object} app Application
* @param {String} name Confiruation name
* @return {object} list configuration or null if not found
*/   
FM.DmList.getConfiguration = function(app,name) {
    var list = FM.DmList.configurations;

    app = FM.isset(app) && app ? app : null;
    var appCls = app ? app.getSubClassName() : null;
    var appCfg = appCls && FM.isset(list[appCls]) ? list[appCls] : null;
        
    var obj = null;
    if(appCfg && FM.isset(appCfg[name])) {
        obj = appCfg[name];
    } else if(app && FM.isArray(app.applicationObjectsSpace)) {
        FM.forEach(app.applicationObjectsSpace,function(i,ns) {
            if(FM.isset(list[ns]) && FM.isset(list[ns][name])) {
                obj = list[ns][name];
                return false;
            }
            return true;
        });
    }
    
    if(!obj && FM.isset(list['GLOBAL'][name])) {
        obj = list['GLOBAL'][name];
    }
    
    return obj;
}

/**
* Returns new DmList winth <b>config</b>  configuration
* @static
* @function    
* @param {object} app Application instance
* @param {object} attrs list of attributes
* @param {String} name Configuation name
* @return {FM.DmList} new DmList
*/   
FM.DmList.newList = function(app,attrs,name) {
    var cfg = FM.DmList.getConfiguration(app,name);
    return cfg ? new FM.DmList(attrs,cfg,app) : null;
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
        for(i = 0; i < list.length; i++) {
            lobj = list[i];
            if(FM.isset(lobj.getID)) {
                id = lobj.getDataID();
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

/* =============================================================================
 * List configurations
 * ========================================================================== */
// -- web UI templates ---------------------------------------------------------
FM.DmList.addConfiguration('getTemplate', {  
    url: FM.getAttr(window,"FM_RESOURCES_PATH","") + '/resources/templates',
    method: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {},
    headers: {},
    auth: null,        
    responseFormat: 'TEXT',
    validResponseCodes: '200',
    listType: 'single'
},'GLOBAL');

// -- web UI templates ---------------------------------------------------------
FM.DmList.addConfiguration('getTranslations', {  
    url: FM.getAttr(window,"FM_TRANSLATIONS_URL",""),
    method: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {},
    headers: {},
    auth: null,        
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'collection'
},'GLOBAL');
// -- osnovna LM klasa ---------------------------------------------------------
/**
* Basic LM class. 
* @class FM.LmObject
* @extends FM.Object
* @memberOf FM
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
FM.LmObject.prototype.dmObject = null;
FM.LmObject.prototype.executed = false;

FM.LmObject.prototype._init = function(app,opt) {            
    this.setExecuted(false);
    this.setApp(app);

    this._super("_init",opt);
    this.objectSubClass = "LmObject";
}

FM.LmObject.prototype.run = function() {
    this._super("run");
    this.setExecuted(true);
}

FM.LmObject.prototype.dispose = function() { 
    // reset
    this.setExecuted(false);
    this.setDmObject();
    this.setApp();            
    this._super("dispose");
}

FM.LmObject.prototype.isExecuted = function() {
    return this.executed;
}
FM.LmObject.prototype.setExecuted = function(e) {
    this.executed = FM.isset(e) && e == true;
}

FM.LmObject.prototype.getApp = function() {
    return this.app;
}

FM.LmObject.prototype.setApp = function(a) {
    this.app = FM.isset(a) && a ? a : null;
}

FM.LmObject.prototype.getDmObject = function() {
    return this.dmObject;
}

FM.LmObject.prototype.setDmObject = function(o,addListener) {
    if(o && o === this.dmObject) return;
    this.log("setDmObject:" + this.getID());
    
    if(this.dmObject) {
        this.dmObject.removeListener(this);
        if(this.getProperty('dmObjectCreated','true') === 'true') {
            this.dmObject.dispose();
            this.dmObject = null;
        }
    }
    
    this.dmObject = FM.isset(o) && o ? o : null;
    if(this.dmObject && FM.isset(addListener) && addListener) {
        this.dmObject.addListener(this);
    }    
}

FM.LmObject.prototype.getRegistryRoot = function() {
    return  "/" + (this.app ? this.app.getSubClassName() : "APP") + 
            "/sClass" +
            "/" + this.getSubClassName()
    ;    
}

FM.LmObject.prototype.getRegistryValue = function(key,dval) {
    return this.app ? this.app.appRegistry.get(
         this.getRegistryRoot() +
         key,
         dval
     ) : dval;    
}

FM.LmObject.prototype.setRegistryValue = function(key,val) {
    if(this.app) this.app.appRegistry.set(
         this.getRegistryRoot() +
         key,
         val
     );        
}


FM.LmObject.className = "LmObject";
FM.LmObject.fullClassName = 'lm.LmObject';
/**
* Basic application class. 
* 
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
FM.AppObject.prototype.applicationObjectsSpace = null;
FM.AppObject.prototype.strictApplicationObjectsSpace = false;

FM.AppObject.prototype.lastError = null;
FM.AppObject.prototype.appRegistry = null;


// methods
FM.AppObject.prototype._init = function(opt) {            
    this._super("_init",this,opt);
    this.objectSubClass = "AppObjects";
    this.applicationObjectsSpace = [];
    this.strictApplicationObjectsSpace = this.getAttr("strict",false) == true;
    this.lastError = new FM.DmGenericError();

    // registry
    this.appRegistry = new FM.UtRegistry();

}

FM.AppObject.prototype.dmListFactory = function(dmData,dmConfig,addlstnr,updChObj) {
    var lst = new FM.DmList(dmData,dmConfig,this);
    if(lst) {
        if(!FM.isset(addlstnr) || addlstnr != false) lst.addListener(this);
    }
    lst.setProperty('appFactory', {createdAt: new Date().getTime()});
    lst.setProperty('appFactory.updateChangedObjects',updChObj == true ? "true" : "false");
    return(lst);
}

FM.AppObject.prototype.dmListDispose = function(lst) {
    lst.dispose();
    return true;
}

FM.AppObject.prototype.onDiscardObjectData = function(sender,evdata) {
    this.discardData(
        FM.getAttr(evdata,'object',null),
        FM.getAttr(evdata,'callback',null)
        );	
}

FM.AppObject.prototype.discardData = function(sender,callback) {
    sender.discardChanges();
}

FM.AppObject.prototype.getErrorObject = function(oErr) {
    oErr = FM.isset(oErr) && oErr ? oErr : '';
    
    if(FM.isString(oErr)) {
        oErr = new FM.DmGenericError({
            messageId: '9999',
            text: oErr
        });
    }
    
    return oErr;
}

FM.AppObject.prototype.getLastError = function() {
    return this.lastError;
}

FM.AppObject.prototype.setLastError = function(oErr) {
    if(!FM.isset(oErr) || !oErr || !FM.isObject(oErr)) {
        oErr = new FM.DmGenericError();
    }
    var me = this;
    this.lastError.forEachAttr(function(attr,value) {
        me.lastError.setAttr(attr,oErr.getAttr(attr,null));
        return true;
    });
    this.lastError.setChanged(true,true); // posalji event
    return oErr /* this.lastError */;
}


FM.AppObject.prototype.submitForm = function(sender,oObj,callbackFn) {
    
    callbackFn = FM.isset(callbackFn) && callbackFn && FM.isFunction(callbackFn) ? callbackFn : function() {};
    sender = FM.isset(sender) && sender ? sender : null;
    oObj = FM.isset(oObj) && oObj ? oObj : null;
    if(!sender) {
        callbackFn(false,null);
        return;
    }
    
    var form = sender.getNode().form;
    if(form) {
        var action = $(form).attr('data-fmml-form-action');
        if(FM.startsWith(action, "@")) {
            action = sender.resolveAttrValue("-",action);
            form.action = action;
        }
        form.submit();
    } else {
        callbackFn(false,null);
        return;        
    }
}

FM.AppObject.prototype.onSubmitForm = function(sender,evdata,options) {
    this.submitForm(
        sender,
        FM.getAttr(evdata,'object',null),
        FM.getAttr(evdata,'callback',null)
    );
}

// static
FM.AppObject.className = "AppObject";
FM.AppObject.fullClassName = 'app.AppObject';

FM.AppObject.applicationInstances = {};

FM.AppObject.startApp = function(args,evHandler) {
    args = FM.isset(args) && args ? args :{};
    var appClsName = FM.getAttr(args,'appClass','FM.AppObject');
    var appCls = FM.getAttr(window,appClsName,FM.AppObject);
    if(!appCls) return null;
    var app = null;
    if(
        FM.isset(FM.AppObject.applicationInstances[appClsName]) && 
        FM.AppObject.applicationInstances[appClsName]
    ) {
        app = FM.AppObject.applicationInstances[appClsName];
    } else {
        app = new appCls(FM.getAttr(args,'options',{}));
    }
    if(!app) return null;
    FM.AppObject.applicationInstances[appClsName] = app;
    if(FM.isset(evHandler)) {
        app.addListener(evHandler);
    }
    app.run();
    return(app);
}

FM.AppObject.stopApp = function(app) {
    if(app) {
        FM.forEach(FM.AppObject.applicationInstances, function(i,v) {
            if(v == app) {
               FM.AppObject.applicationInstances[i] = null;
               return false;
            }
            return true;
        });
        
        return app.dispose();
    }
    
    return true;
}        

/**
* Generic test class. 
* 
* @class FM.TstGeneric
* @extends FM.Object
* @param {object} config Test configuration
*/    
FM.TstGeneric = function() {   
    this._init.apply(this, arguments); // new poziva _init()
}

FM.extendClass(FM.TstGeneric,FM.Object); 

// properties
FM.TstGeneric.prototype.objectSubClass = "";
FM.TstGeneric.prototype.testsList = null;
FM.TstGeneric.prototype.testsResults = null;

// methods
FM.TstGeneric.prototype._init = function(config) {            
    this._super("_init",config);
    this.objectSubClass = "TstGeneric";
    this.testsList = {};
    this.testsResults = {};
    this.runningTests = {};
}

FM.TstGeneric.prototype.run = function(test) {
    this.runningTests = {};
    this.testsResults = {};
    var tlist = {};    
    test = FM.isset(test) ? test : null;
    if(test) {
        this.log("Running tests [" + test + "] ...",FM.logLevels.info,this.getFullClassName());
        if(!FM.isset(this.testsList[test])) {
            this.log("Test [" + test + "] is not found!",FM.logLevels.error,this.getFullClassName());
            return false;
        }
        tlist[test] = true;        
    } else {
        this.log("Running all tests ...",FM.logLevels.info,this.getFullClassName());
        tlist = this.testsList;
    }

    for(var tname in tlist) {
        this.runningTests[tname] = false;
    }

    for(var tname in tlist) {
        this.log("Running test [" + tname + "] ...",FM.logLevels.info,this.getFullClassName());
        this[tname]();
    }
    
    return true;
}     

FM.TstGeneric.prototype.addResult = function(test,result) {
    this.testsResults[test] = result;
    this.runningTests[test] = true;
    
    for(var tname in this.runningTests) {
        if(!this.runningTests[tname]) return true;
    }
    return this.showResults();
}

FM.TstGeneric.prototype.showResults = function() {
    var cntok =0, cnterr = 0;
    this.print(" == Test results =================================================");
    for(var tname in this.testsResults) {
        if(this.testsResults[tname] == true) {
            this.print("Test [" + tname + "] is successfully finished.");
            cntok++;
        } else if(this.testsResults[tname] == false) {
            this.print("Test [" + tname + "] is in error!.");
            cnterr++;
        } else { // bilo sto osim true i false
            this.print("Test [" + tname + "] is invalid!.");
            cnterr++;
        }
    }
    this.print(" =================================================================");
    return true;
}


FM.TstGeneric.prototype.addTest = function(test) {
    if(FM.isset(this[test]) && FM.isFunction(this[test])) {
        this.testsList[test] = true;
        return true;
    }
    
    return false;
}

FM.TstGeneric.prototype.removeTest = function(test) {
    if(FM.isset(this.testsList[test])) {
        delete this.testsList[test];
        return true;
    }
    
    return false;
}

FM.TstGeneric.prototype.enableTest = function(test) {
    if(FM.isset(this.testsList[test])) {
        this.testsList[test] = true;
        return true;
    }
    
    return false;
}

FM.TstGeneric.prototype.disableTest = function(test) {
    if(FM.isset(this.testsList[test])) {
        this.testsList[test] = false;
        return true;
    }
    
    return false;
}

FM.TstGeneric.prototype.print = function(msg) {
    if(FM.isObject(msg) || FM.isArray(msg)) {
        console.dir(msg);
    } else {
        console.log(msg);
    }
}


// static
FM.TstGeneric.className = "TstGeneric";
FM.TstGeneric.fullClassName = 'tst.TstGeneric';

/**
* {@link FM.UtAjax} test class. 
* 
* @class FM.TstAjax
* @extends FM.TstGeneric
* @param {object} config Test configuration
*/    
FM.TstAjax = function() {   
    this._init.apply(this, arguments); // new poziva _init()
}

FM.extendClass(FM.TstAjax,FM.TstGeneric); 

// properties
FM.TstAjax.prototype.objectSubClass = "";


// methods
FM.TstAjax.prototype._init = function(config) {            
    this._super("_init",config);
    this.objectSubClass = "TstAjax";
    // popis testova
    this.addTest("tGet");
    this.addTest("tGetErr");
    this.addTest("tGetJSON");    
    this.addTest("tPostJSONparams");   
    this.addTest("tPutJSONparams");   
    this.addTest("tDeleteJSONparams");
}

FM.TstAjax.prototype.tGet = function() {
    this.log("tGet, Ajax GET/TEXT test started.",FM.logLevels.info,this.getFullClassName());
    
    var oAjax = new FM.UtAjax({
        url: 'http://10.76.150.104:9151/status', 
        method: 'GET',
        contentType: 'application/x-www-form-urlencoded',
        responseFormat: 'TEXT',
        validResponseCodes: '200',
        params: {},
        headers: {},
        auth: null
    });
    
    var me = this;
    oAjax.addListener({
        onAjaxStateStart: function(oAjax,oArgs) {
            me.log("tGet, onAjaxStateStart event:",FM.logLevels.info,me.getFullClassName());
            me.log(oArgs.getAttr("value"),FM.logLevels.info,me.getFullClassName());
        },
        onAjaxStateError: function(oAjax,oErr) {
            me.log("tGet, onAjaxStateError event:",FM.logLevels.info,me.getFullClassName());
            me.log(oErr.getAttr(),FM.logLevels.info,me.getFullClassName());
            me.addResult('tGet',false);
            
        },
        onAjaxStateEnd: function(oAjax,oData) {
            me.log("tGet, onAjaxStateEnd event:",FM.logLevels.info,me.getFullClassName());
            me.log(oData.getAttr("value"),FM.logLevels.info,me.getFullClassName());
            me.addResult('tGet',true);
        }        
    });    
    
    oAjax.send({});
}     

FM.TstAjax.prototype.tGetErr = function() {
    this.log("tGetErr, Ajax GET (invalid request) test started.",FM.logLevels.info,this.getFullClassName());
    
    var oAjax = new FM.UtAjax({
        url: 'http://www.index.hr', 
        method: 'GET',
        contentType: 'application/x-www-form-urlencoded',
        responseFormat: 'TEXT',
        validResponseCodes: '200',
        params: {},
        headers: {},
        auth: null
    });
    
    var me = this;
    oAjax.addListener({
        onAjaxStateStart: function(oAjax,oArgs) {
            me.log("tGetErr, onAjaxStateStart event:",FM.logLevels.info,me.getFullClassName());
            me.log(oArgs.getAttr("value"),FM.logLevels.info,me.getFullClassName());
        },
        onAjaxStateError: function(oAjax,oErr) {
            me.log("tGetErr, onAjaxStateError event:",FM.logLevels.info,me.getFullClassName());
            me.log(oErr.getAttr(),FM.logLevels.info,me.getFullClassName());
            me.addResult('tGetErr',true);
            
        },
        onAjaxStateEnd: function(oAjax,oData) {
            me.log("tGetErr, onAjaxStateEnd event:",FM.logLevels.info,me.getFullClassName());
            me.log(oData.getAttr("value"),FM.logLevels.info,me.getFullClassName());
            me.addResult('tGetErr',false);
        }        
    });    
    
    oAjax.send({});
}     

FM.TstAjax.prototype.tGetJSON = function() {
    this.log("tGetJSON, Ajax Get/JSON test started.",FM.logLevels.info,this.getFullClassName());
    
    var oAjax = new FM.UtAjax({
        url: 'http://www.hicegosum.com/findme-dev/api/users/563771418', 
        method: 'GET',
        contentType: 'application/x-www-form-urlencoded',
        responseFormat: 'JSON',
        validResponseCodes: '200',
        params: {},
        headers: {},
        auth: null
    });
    
    var me = this;
    oAjax.addListener({
        onAjaxStateStart: function(oAjax,oArgs) {
            me.log("tGetJSON, onAjaxStateStart event:",FM.logLevels.info,me.getFullClassName());
            me.log(oArgs.getAttr("value"),FM.logLevels.info,me.getFullClassName());
        },
        onAjaxStateError: function(oAjax,oErr) {
            me.log("tGetJSON, onAjaxStateError event:",FM.logLevels.info,me.getFullClassName());
            me.log(oErr.getAttr(),FM.logLevels.info,me.getFullClassName());
            me.addResult('tGetJSON',false);
            
        },
        onAjaxStateEnd: function(oAjax,oData) {
            me.log("tGetJSON, onAjaxStateEnd event:",FM.logLevels.info,me.getFullClassName());
            me.log(oData.getAttr("value"),FM.logLevels.info,me.getFullClassName());
            me.addResult('tGetJSON',true);
        }        
    });    
    
    oAjax.send({});
}     

FM.TstAjax.prototype.tPostJSONparams = function() {
    this.log("tPostJSONparams, Ajax Post/JSON/params test started.",FM.logLevels.info,this.getFullClassName());
    
    var oAjax = new FM.UtAjax({
        url: 'http://www.hicegosum.com/findme-dev/api/users', 
        method: 'POST',
        contentType: 'application/x-www-form-urlencoded',
        responseFormat: 'JSON',
        validResponseCodes: '200',
        params: {ids: true},
        headers: {},
        auth: null
    });
    
    var me = this;
    oAjax.addListener({
        onAjaxStateStart: function(oAjax,oArgs) {
            me.log("tPostJSONparams, onAjaxStateStart event:",FM.logLevels.info,me.getFullClassName());
            me.log(oArgs.getAttr("value"),FM.logLevels.info,me.getFullClassName());
        },
        onAjaxStateError: function(oAjax,oErr) {
            me.log("tPostJSONparams, onAjaxStateError event:",FM.logLevels.info,me.getFullClassName());
            me.log(oErr.getAttr(),FM.logLevels.info,me.getFullClassName());
            me.addResult('tPostJSONparams',false);
            
        },
        onAjaxStateEnd: function(oAjax,oData) {
            me.log("tPostJSONparams, onAjaxStateEnd event:",FM.logLevels.info,me.getFullClassName());
            me.log(oData.getAttr("value"),FM.logLevels.info,me.getFullClassName());
            me.addResult('tPostJSONparams',true);
        }        
    });    
    
    oAjax.send({ids: '563771418'});
}     


FM.TstAjax.prototype.tPutJSONparams = function() {
    this.log("tPutJSONparams, Ajax Put/JSON/params test started.",FM.logLevels.info,this.getFullClassName());
    
    var oAjax = new FM.UtAjax({
        url: 'http://www.hicegosum.com/findme-dev/api/users', 
        method: 'PUT',
        contentType: 'application/x-www-form-urlencoded',
        responseFormat: 'JSON',
        validResponseCodes: '200',
        params: {ids: true},
        headers: {},
        auth: null
    });
    
    var me = this;
    oAjax.addListener({
        onAjaxStateStart: function(oAjax,oArgs) {
            me.log("tPutJSONparams, onAjaxStateStart event:",FM.logLevels.info,me.getFullClassName());
            me.log(oArgs.getAttr("value"),FM.logLevels.info,me.getFullClassName());
        },
        onAjaxStateError: function(oAjax,oErr) {
            me.log("tPutJSONparams, onAjaxStateError event:",FM.logLevels.info,me.getFullClassName());
            me.log(oErr.getAttr(),FM.logLevels.info,me.getFullClassName());
            me.addResult('tPutJSONparams',false);
            
        },
        onAjaxStateEnd: function(oAjax,oData) {
            me.log("tPutJSONparams, onAjaxStateEnd event:",FM.logLevels.info,me.getFullClassName());
            me.log(oData.getAttr("value"),FM.logLevels.info,me.getFullClassName());
            me.addResult('tPutJSONparams',true);
        }        
    });    
    
    oAjax.send({ids: '563771418'});
}     

FM.TstAjax.prototype.tDeleteJSONparams = function() {
    this.log("tDeleteJSONparams, Ajax Delete/JSON/params test started.",FM.logLevels.info,this.getFullClassName());
    
    var oAjax = new FM.UtAjax({
        url: 'http://www.hicegosum.com/findme-dev/api/users', 
        method: 'DELETE',
        contentType: 'application/x-www-form-urlencoded',
        responseFormat: 'JSON',
        validResponseCodes: '200',
        params: {ids: true},
        headers: {},
        auth: null
    });
    
    var me = this;
    oAjax.addListener({
        onAjaxStateStart: function(oAjax,oArgs) {
            me.log("tDeleteJSONparams, onAjaxStateStart event:",FM.logLevels.info,me.getFullClassName());
            me.log(oArgs.getAttr("value"),FM.logLevels.info,me.getFullClassName());
        },
        onAjaxStateError: function(oAjax,oErr) {
            me.log("tDeleteJSONparams, onAjaxStateError event:",FM.logLevels.info,me.getFullClassName());
            me.log(oErr.getAttr(),FM.logLevels.info,me.getFullClassName());
            me.addResult('tDeleteJSONparams',false);
            
        },
        onAjaxStateEnd: function(oAjax,oData) {
            me.log("tDeleteJSONparams, onAjaxStateEnd event:",FM.logLevels.info,me.getFullClassName());
            me.log(oData.getAttr("value"),FM.logLevels.info,me.getFullClassName());
            me.addResult('tDeleteJSONparams',true);
        }        
    });    
    
    oAjax.send({ids: '563771418'});
}     

// static
FM.TstAjax.className = "TstAjax";
FM.TstAjax.fullClassName = 'tst.TstAjax';

/**
* {@link FM.DmList} test class. 
* 
* @class FM.TstDmList
* @extends FM.TstGeneric
* @param {object} config Test configuration
*/
FM.TstDmList = function() {   
    this._init.apply(this, arguments); // new poziva _init()
}

FM.extendClass(FM.TstDmList,FM.TstGeneric); 

// properties
FM.TstDmList.prototype.objectSubClass = "";


// methods
FM.TstDmList.prototype._init = function(config) {            
    this._super("_init",config);
    this.objectSubClass = "TstAjax";
    
    // popis testova
    this.addTest("tGet");
    this.addTest("tGetList");
    this.addTest("tPostJSONList");
}

FM.TstDmList.prototype.tGet = function() {
    this.log("tGet, DmList test started.",FM.logLevels.info,this.getFullClassName());
    
    var oList = new FM.DmList({},{
        url: 'http://10.76.150.104:9151/status', 
        method: 'GET',
        contentType: 'application/x-www-form-urlencoded',
        responseFormat: 'TEXT',
        validResponseCodes: '200',
        params: {},
        headers: {},
        auth: null,
        
        isErrorResponse: function(me,oAjax,response) {
            me.log("tGet, isErrorResponse?",FM.logLevels.info,me.getFullClassName());
            if(!response || !FM.isset(response.getAttr)  || response.getAttr("value","") != 'OK') return true;
            return false;            
        },
        listType: 'single',
        order:{
            orderAttribute: 'value',
            orderAttributeType: 'STRING',
            orderType: 'ASC'
        }                
    });
    
    var me = this;
    oList.addListener({
        onListStart: function(l,oArgs) {
            me.log("tGet, onListStart event:",FM.logLevels.info,me.getFullClassName());
            me.log(oArgs,FM.logLevels.info,me.getFullClassName());
        },
        onListError: function(l,oErr) {
            me.log("tGet, onListError event:",FM.logLevels.info,me.getFullClassName());
            me.log(oErr.getAttr(),FM.logLevels.info,me.getFullClassName());
            me.addResult('tGet',false);
            
        },
        onListEnd: function(l,oData) {
            me.log("tGet, onListEnd event:",FM.logLevels.info,me.getFullClassName());
            me.log(oData,FM.logLevels.info,me.getFullClassName());
            me.log("tGet, onListEnd list size:" + l.getListSize(),FM.logLevels.info,me.getFullClassName());
            me.addResult('tGet',true);
        }        
    });    
    
    oList.getData();
}     

FM.TstDmList.prototype.tGetList = function() {
    this.log("tGetList, DmList test started.",FM.logLevels.info,this.getFullClassName());
    
    var oList = new FM.DmList({
        uids: '563771418'
    },{
        url: 'http://www.hicegosum.com/findme-dev/api/users', 
        method: 'GET',
        contentType: 'application/x-www-form-urlencoded',
        responseFormat: 'JSON',
        validResponseCodes: '200',
        params: {
            uids: true
        },
        headers: {},
        auth: null,        
        isErrorResponse: function(me,oAjax,response) {            
            me.log("tGet, isErrorResponse?",FM.logLevels.info,me.getFullClassName());
            if(!response || !FM.isset(response.getAttr)) return true;
            
            var fetchResponse = response.getAttr("value",null);
            if(!fetchResponse || !FM.isObject(fetchResponse)) return true;
            if(FM.getAttr(fetchResponse,"error",false)) return true;
            
            return false;            
        },
        listType: 'collection',
        collectionProperty: 'Results.Users',
        order:{
            orderAttribute: 'uid',
            orderAttributeType: 'STRING',
            orderType: 'ASC'
        }                
    });
    
    var me = this;
    oList.addListener({
        onListStart: function(l,oArgs) {
            me.log("tGetList, onListStart event:",FM.logLevels.info,me.getFullClassName());
            me.log(oArgs,FM.logLevels.info,me.getFullClassName());
        },
        onListError: function(l,oErr) {
            me.log("tGetList, onListError event:",FM.logLevels.info,me.getFullClassName());
            me.log(oErr.getAttr(),FM.logLevels.info,me.getFullClassName());
            me.addResult('tGetList',false);
            
        },
        onListEnd: function(l,oData) {
            me.log("tGetList, onListEnd event:",FM.logLevels.info,me.getFullClassName());
            me.log(oData,FM.logLevels.info,me.getFullClassName());
            me.log("tGetList, onListEnd list size:" + l.getListSize(),FM.logLevels.info,me.getFullClassName());
            me.addResult('tGetList',true);
        }        
    });    
    
    oList.getData();
}

FM.TstDmList.prototype.tPostJSONList = function() {
    this.log("tPostJSONList, DmList test started.",FM.logLevels.info,this.getFullClassName());
    
    var oList = new FM.DmList({
        username: 'ivana',
        password: 'ivanaTest'
    },{
        url: 'http://10.76.150.104:9151/1/customerProfile/login', 
        method: 'POST',
        contentType: 'application/x-www-form-urlencoded',
        responseFormat: 'JSON',
        validResponseCodes: '200',
        params: {
            username: true,
            password: true
        },
        headers: {},
        auth: null,
        
        isErrorResponse: function(me,oAjax,response) {
            me.log("tPostJSONList, isErrorResponse?",FM.logLevels.info,me.getFullClassName());
            if(
                !response || 
                !FM.isset(response.getAttr) || 
                !FM.isObject(response.getAttr("value",null))
            ) return true;
                
            var creds = response.getAttr("value",null);
            if(!FM.isset(creds, "IbAuthCookie")) return true;
            
            return false;            
        },
        listType: 'single',
        order:{
            orderAttribute: 'value',
            orderAttributeType: 'STRING',
            orderType: 'ASC'
        }                
    });
    
    var me = this;
    oList.addListener({
        onListStart: function(l,oArgs) {
            me.log("tPostJSONList, onListStart event:",FM.logLevels.info,me.getFullClassName());
            me.log(oArgs,FM.logLevels.info,me.getFullClassName());
        },
        onListError: function(l,oErr) {
            me.log("tPostJSONList, onListError event:",FM.logLevels.info,me.getFullClassName());
            me.log(oErr.getAttr(),FM.logLevels.info,me.getFullClassName());
            me.addResult('tPostJSONList',false);
            
        },
        onListEnd: function(l,oData) {
            me.log("tPostJSONList, onListEnd event:",FM.logLevels.info,me.getFullClassName());
            me.log(oData,FM.logLevels.info,me.getFullClassName());
            me.log("tPostJSONList, onListEnd list size:" + l.getListSize(),FM.logLevels.info,me.getFullClassName());
            me.addResult('tPostJSONList',true);
        }        
    });    
    
    oList.getData();
}     


// static
FM.TstDmList.className = "TstDmList";
FM.TstDmList.fullClassName = 'tst.TstDmList';



// =============================================================================
/**
 * ML host class. 
 * @class FM.MlHost
 * @extends FM.Object
 * @param {FM.AppObject} app application object
 * @param {object} [attrs] DOM node attributes
 * @param {DOMnode} node DOM node
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
FM.MlHost.prototype.masterHost = null;
FM.MlHost.prototype.masterHostDm = null;
FM.MlHost.prototype.clsParams = null;

// methods
FM.MlHost.prototype._init = function(app,attrs,node) {
    this._super("_init",app,attrs);
    this.objectSubClass = "MlHost";
    this.node = node;    
    this.dmObject = null; // ovo popunjava "type" fn
    this.listOfObservers = {};
    this.clsParams = {
        id: '',
        className: ''
    }

    this.executed = false;    
    this.masterHost = null;
    
    // upisi povratne vezu u dom objekt
    this.node.fmmlHost = this;    
    this.app = app;
    app.addListener(this);
    this.addListener(app);
}

FM.MlHost.prototype.run = function(dmObj) {
    if(this.getAttr('data-fmml-run-maximized','false') == 'true') {
        this.onMaximize();
    }

    var id = this.getAttr("data-fmml-object-id",'');
    var className = this.getAttr("data-fmml-object-class",'');
    var objRef = this.getAttr("data-fmml-object-ref",'');
    this.setProperty('dmObjectCreated',this.getAttr("data-fmml-object-destroy-on-dispose",'true'));
    
    //&& (className == '' || dmObj.getSubClassName() == className)
    // Ovo rjesava BUG u BIGu prilikom ucitavanja SA DM objektom
    // ako je setiran object-id u DOMu a ObjectSubClass je razliciti od object-class iz doma
    // DM nije uredu, hvatamo ga...
    // 
    // provjeriti!!!
    // 
    // object
    if(FM.isset(dmObj) && dmObj && (className == '' || dmObj.getSubClassName() == className)){
        this.setProperty('dmObjectCreated','false');
        this.setDmObject(dmObj);    
    } else if(objRef != '' && FM.startsWith(objRef,'@')) {
        dmObj = FM.resolveAttrValue(null,"-",objRef,{
            A: this.getApp(),
            H: this
        });
        this.setProperty('dmObjectCreated','false');
        this.setDmObject(dmObj);
    } else {
        if(this.getAttr('data-fmml-master-host','') != '') {
            var mhostid = this.getAttr('data-fmml-master-host','');
            if(mhostid == 'true') {
                this.masterHost = FM.findNodeWithAttr(this.getNode().parentNode, "fmmlHost");
            } else {            
                var mhostnode = document.getElementById(mhostid);
                if(mhostnode && FM.isset(mhostnode.fmmlHost) && mhostnode.fmmlHost) {
                    this.masterHost = mhostnode.fmmlHost;
                }
            }
            if(this.masterHost) {
                this.masterHost.addListener(this);
                this.masterHostDm = this.masterHost.getDmObject();
                if(this.masterHostDm) this.masterHostDm.addListener(this);
            }
        }
        
        this._checkMasterReload();        
    }

    this._super("run");     
    this.executed = true;
    
    var obsrv = this.listOfObservers;
    for(var id in obsrv) {
        try {
            obsrv[id].run();            
        } catch(e) {
            console.log("run observer() error: " + e);
        }
    }
}


FM.MlHost.prototype._checkMasterReload = function() {
    //this.log("_checkMasterReload:" + this.getID(),FM.logLevels.warn);
    var id = this.getAttr("data-fmml-object-id",'');
    var ownerName = this.getAttr("data-fmml-owner-class",'');
    var className = this.getAttr("data-fmml-object-class",'');
    if(this.getAttr('data-fmml-use-global-args') == 'true'){
        var args = FM.getArgs();
        if(id == '') id = FM.getAttr(args,'id','');
        if(className == '') className = FM.getAttr(args,'cls','');        
    }
    
    //FM.resolveAttrValue = function(options,attrName,def,context)
    if(this.masterHost) {
        id = FM.resolveAttrValue(null,"-",id,{
            A: this.masterHost.getApp(),
            H: this.masterHost, 
            D: this.masterHostDm
        });
        className = FM.resolveAttrValue(null,"-",className,{
            A: this.masterHost.getApp(),
            H: this.masterHost, 
            D: this.masterHostDm
        });
    } else {
        id = FM.resolveAttrValue(null,"-",id,{
            A: this.getApp(),
            H: this, 
            D: this.getDmObject()
        });
        className = FM.resolveAttrValue(null,"-",className,{
            A: this.getApp(),
            H: this, 
            D: this.getDmObject()
        });
    }

    if(id == this.clsParams.id && className == this.clsParams.className) return;
    
    this.clsParams = {
        id: id,
        className: className
    }
    if(id != '') {
        var fnName = 'get' + className;
        if(id != '' && className != '' && FM.isset(this.app[fnName])) {
            var me = this;
            //this.log("_checkMasterReload fetch ...:" + this.getID(),FM.logLevels.warn);
            this.app[fnName](id,function(isok,oObj) {
                if(isok) {
                    //me.log("_checkMasterReload fetch ok:" + me.getID());
                    me.setDmObject(oObj);
                    me.setProperty('dmObjectCreated','true');
                }
                else {
                    me.setDmObject(null);
                }
            });
        }
    } else {
        if(className != '') {
            var attrs = {};
            this.forEachAttr(function(n,v) {
                if(FM.startsWith(n,'data-fmml-object-attr-')) {
                    attrs[n.substr(22)] = v;
                } 
            });
            var oObj = FM.DmObject.newObject(this.getApp(),className, attrs);
            this.setProperty('dmObjectCreated','true');
            this.setDmObject(oObj);
        }
    }
}

FM.MlHost.prototype.dispose = function() {
    if(this.masterHost) {
        this.masterHost.removeListener(this);
        if(this.masterHostDm) this.masterHostDm.removeListener(this);
    }
    
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
    this.listOfObservers = [];
    this.setDmObject();
    this.executed = false;
    
    this._super("dispose");
    return true;
}

FM.MlHost.prototype.getNode = function() {
    return this.node;
}

FM.MlHost.prototype.getDmObject = function() {
    return this.dmObject;
}


FM.MlHost.prototype.setDmObject = function(o) {
    this._super('setDmObject',o,true);

    this.updateAllObservers();    
    this.fireEvent("onSetDmObject",this.dmObject);
}


FM.MlHost.prototype.getLinkedHost = function() {
    var lhost = this.getAttr('data-fmml-linked-host','');
    if(lhost != '') {
        var node = document.getElementById(lhost);
        if( node && FM.isset(node.fmmlHost) && node.fmmlHost) {
            return node.fmmlHost;
        }
    }
    return null;
}

FM.MlHost.prototype.addObserver = function(o) {
    if(!FM.isset(o)  || !o || !FM.isset(o.getID)) return false;
    this.listOfObservers[o.getID()] = o;
    if(this.executed) o.run();
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

FM.MlHost.prototype.verifyAllObservers = function(force) {
    for(var id in this.listOfObservers) {        
        if(!this.verifyObserver(this.listOfObservers[id],force))
            return false;
    }
    return true;
}

FM.MlHost.prototype.verifyObserver = function(o,force) {
    return o.isValid(force);
}

FM.MlHost.prototype.sendEventToObservers = function(sender,ev,data) {    
    var fnd=false;
    for(var id in this.listOfObservers) {
        var o = this.listOfObservers[id];
        if(o.executed) {
            fnd = o.onHostEvent(sender,ev,data);
        //this.updateObserver(o);
        }
    }

    // kraj 
    return fnd;
}

FM.MlHost.prototype._getErrorHost = function() {
    var errnode = document.getElementById(this.getAttr('data-fmml-error-host',''));
    return (
        errnode && FM.isset(errnode.fmmlHost) && errnode.fmmlHost ?
        errnode.fmmlHost : null
        );
}

FM.MlHost.prototype.getLastError = function(oErr) {
    var errhost = this._getErrorHost();
    return errhost ? errhost.getDmObject() : null;
}

FM.MlHost.prototype.setLastError = function(oErr) {
    var errhost = this._getErrorHost();
    if(!errhost) {
        return this.getApp() ? this.getApp().setLastError(oErr) : oErr;
    }
    
    
    if(!FM.isset(oErr) || !oErr || !FM.isObject(oErr)) {        
        oErr = new FM.DmGenericError();
    }
    
    if(!FM.isset(oErr) || !oErr || !FM.isObject(oErr)) {
        oErr = new FM.DmGenericError();
    }
    
    if(!errhost.isExecuted()) {
        errhost.run(oErr);
    } else {
        var dmobj = errhost.getDmObject();
        if(!dmobj) {
            errhost.setDmObject(oErr);
        } else {
            dmobj.forEachAttr(function(attr,value) {
                dmobj.setAttr(attr,oErr.getAttr(attr,null));
                return true;
            });   
            dmobj.setChanged(true,true);
            oErr = dmobj;
        }
    }    
    
    return oErr;
}

// events
FM.MlHost.prototype.onChange = function(sender,obj) {
    if(sender == this.masterHostDm) {
        this._checkMasterReload();
    } else if(sender == this.getDmObject()) {
        this.updateAllObservers();
    }
    
    var hostToRun =  this.getAttr('data-fmml-run-on-update','');
    if(hostToRun != '') {
        var node = document.getElementById(hostToRun);
        if( node && FM.isset(node.fmmlHost) && node.fmmlHost) {
            node.fmmlHost.run(this.getDmObject());
        }
    }

    // kraj
    return true;
}



FM.MlHost.prototype.onSetDmObject = function(sender,obj) {
    this.log("onSetDmObject:" + this.getID() + " < " +  sender.getID(),FM.logLevels.warn);
    if(sender == this.masterHost) {
        if(this.masterHostDm) this.masterHostDm.removeListener(this);
        this.masterHostDm = obj;
        if(this.masterHostDm) this.masterHostDm.addListener(this);
        this._checkMasterReload();
    }
    
    return true;
}

FM.MlHost.prototype.onMaximize = function() {
    FM.expandToFullSCreen(this.node);
    
    // kraj
    return true;
}

FM.MlHost.prototype.onEvent = function(sender,ev,data,calledlist) {
    var cl = FM.isset(calledlist) ? calledlist : {};

    if(!this.isEnabled()) return false;
    
    var done = false;
    
    //  ako imaš event fn
    if(FM.isset(this[ev])) {
        this[ev](sender,data);
        cl[this.getID()] = '1';
        FM.setAttr(cl,'_executed','1'); 
        done = true;
    }

    //  ako imaš event fn u app
    if(!done && FM.isset(this.app[ev])) {
        this.app[ev](sender,data);
        cl[this.app.getID()] = '1';
        FM.setAttr(cl,'_executed','1'); 
        done = true;
    }
    if(!done) {
        if(!this.sendEventToObservers(sender,ev, data)) {
        // proslijedi dalje ako nemas ev fn
        //cl = this.fireEvent(ev,data,cl);        
        }
        done = true;
    }
    
    //console.log("ev:" + ev);
    
    // ako ima def trigger u layoutu
    var evtrg = this.getAttr('data-fmml-host-event-' + ev.toLowerCase(),'');
    if(evtrg !== '') {
        FM.resolveAttrValue(null,"-",evtrg,{
            A: this.getApp(),
            H: this, 
            D: this.getDmObject()
        });
    }
    
    return cl;
}

// static
FM.MlHost.className = "MlHost";
FM.MlHost.fullClassName = 'lm.MlHost';
FM.MlHost.hostTypes = {};

/**
 * Returns MlHost <b>config</b> class function for <b>config</b> subclass type
 * @static
 * @function    
 * @param {object} app Application
 * @param {String} name Configuration name
 * @return {object} host configuration or null if not found
 */   
FM.MlHost.getConfiguration = function(app,name) {
    var list = FM.MlHost.hostTypes;

    app = FM.isset(app) && app ? app : null;
    var appCls = app ? app.getSubClassName() : null;
    var appCfg = appCls && FM.isset(list[appCls]) ? list[appCls] : null;
        
    var obj = null;
    if(appCfg && FM.isset(appCfg[name])) {
        obj = appCfg[name];
    } else if(app && FM.isArray(app.applicationObjectsSpace)) {
        FM.forEach(app.applicationObjectsSpace,function(i,ns) {
            if(FM.isset(list[ns]) && FM.isset(list[ns][name])) {
                obj = list[ns][name];
                return false;
            }
            return true;
        });
    }
    
    if(!obj && FM.isset(list['GLOBAL'][name])) {
        obj = list['GLOBAL'][name];
    }
    
    return obj;
}

FM.MlHost.newHost = function(app,attrs,node,type,oObj) {
    var clsFn = FM.MlHost.getConfiguration(app,type);
    var obj = clsFn ? new clsFn(app,attrs,node) : null;
    if(obj && obj.getAttr('data-fmml-run-on-init','true') != 'false') {
        obj.run(oObj); 
    }
    return obj;
}

FM.MlHost.addHost = function(type,hostfn,appCls) {
    appCls = FM.isset(appCls) && FM.isString(appCls) && appCls != '' ? appCls : 'GLOBAL';
    if(!FM.isset(hostfn) || !FM.isFunction(hostfn)) return false;
    if(!FM.isset(type) || !type || type == '') return false;
    if(!FM.isset(FM.MlHost.hostTypes[appCls])) {
        FM.MlHost.hostTypes[appCls]= {};
    }
    FM.MlHost.hostTypes[appCls][type] = hostfn;
    return true;
}

FM.MlHost.translateNode = function(app,node) {
    // what to translate
    var txtattrs = $(node).attr('data-fmml-translate');
    var attrs = txtattrs.split(",");
    var txttotranslate;
    FM.forEach(attrs, function(i,name) {
        name = FM.trim(name);
            if(name == 'body') {
                txttotranslate = $(node).text(); 
                if(FM.isset(txttotranslate)) {
                    $(node).text(_T(txttotranslate,app));
                    console.log("TRANSLATE(" + name + "):" + txttotranslate);
                }
            } else {
                txttotranslate = $(node).attr(i); 
                if(FM.isset(txttotranslate)) {
                    $(node).attr(name,_T(txttotranslate,app));
                    console.log("TRANSLATE(" + name + "):" + txttotranslate);
                }
            }
        return true;
    });
}
    
// radi update child nodova - promjena na dom nodu koji je nosioc
FM.MlHost.initChildNodes = function(app,checknode,oObj,childsOnly) {
    childsOnly = FM.isset(childsOnly) && childsOnly == false ? false : true;
    checknode = FM.isset(checknode) && checknode ? checknode : $('body')[0];
    var appsc = app.getSubClassName();
    var nodeList = childsOnly ? $(checknode).children() : $(checknode);    
    
    
    nodeList.each(function(index) {
        var domobj = this;        
        var jqobj = $(this);
        if(!jqobj) return;
        if(
            (!FM.isset(domobj.fmmlHost)) &&
            (!FM.isset(domobj.fmmlObserver)) &&                
            (
                jqobj.attr('data-fmml-host') || 
                jqobj.attr('data-fmml-observer') || 
                jqobj.attr('data-fmml-extensions') ||
                jqobj.attr('data-fmml-template') ||
                jqobj.attr('data-fmml-translate')
                )
            ) {
            var mlAppCls = jqobj.attr('data-fmml-app');
            if(!mlAppCls && !app.strictApplicationObjectsSpace) {
                mlAppCls = app.getSubClassName();
            }
            if(mlAppCls == appsc) {  
                // pokupi atribute 
                var attrlist = {};
                $.each(this.attributes, function(i, attrib){
                    if(FM.isString(attrib.value) && FM.startsWith(attrib.value,'@@')) { 
                        try {
                            attrlist[attrib.name] = FM.resolveAttrValue(null,"-",attrib.value,{
                                A: app,
                                D: oObj
                            });
                        } catch(e) {
                            console.log("resolveAttrValue error (" + attrib.value + "): " + e);
                        }
                    } else {
                        attrlist[attrib.name] = attrib.value;
                    }
                });
                
                
                // ako je observer
                if(jqobj.attr('data-fmml-observer')) { 
                    try {
                        FM.MlObserver.newObserver(app,attrlist,domobj,jqobj.attr('data-fmml-observer'));
                    } catch(e) {
                        console.log("new MlObserver(<" + otype + ">) error: " + e);
                    };
                }
                
                // extenzije
                if(jqobj.attr('data-fmml-extensions')) { // ako je observer
                    var extarr = jqobj.attr('data-fmml-extensions').split(" ");
                    for(var i = 0; i < extarr.length; i++) {
                        var otype = extarr[i].toString();
                        try {
                            var oExt = FM.MlExtension.newExtension(app,attrlist,domobj,otype);
                            if(oExt && domobj.fmmlObserver) domobj.fmmlObserver.addExtension(oExt);
                        } catch(e) {
                            console.log("new MlExtension(<" + otype + ">) error: " + e);
                        };
                    }
                }

                // ako je host
                if(jqobj.attr('data-fmml-host')) {
                    try {
                        FM.MlHost.newHost(app,attrlist,domobj,jqobj.attr('data-fmml-host'),oObj);
                    } catch(e) {
                        console.log("new MlHost(<" + jqobj.attr('data-fmml-host') + ">) error: " + e);
                    }                  
                } 

                // ako je translation
                if(jqobj.attr('data-fmml-translate')) {
                    try {
                        FM.MlHost.translateNode(app,domobj);
                    } catch(e) {
                        console.log("translateNode(<" + jqobj.attr('data-fmml-translate') + ">) error: " + e);
                    }                  
                } 

                // ako je template                
                if(jqobj.attr('data-fmml-template')) {
                    if(
                        FM.isset(jqobj.attr('data-fmml-use-global-args')) && 
                        jqobj.attr('data-fmml-use-global-args') == 'true'
                        ) {
                        var args = FM.getArgs();
                        FM.forEach(args, function(n,v) {
                            var attname = 'data-fmml-template-attr-' + n; 
                            if(!FM.isAttr(attrlist,attname)) {
                                if(FM.isString(v) && FM.startsWith(v,'@@')) {                                    
                                    v = FM.resolveAttrValue(null,"-",v,{
                                        A: app,
                                        D: oObj
                                    });
                                } else {
                                    attrlist[attname] = v;
                                }
                            }
                            return true;
                        });
                    }
                    var tname = jqobj.attr('data-fmml-template');
                    tname = FM.applyTemplate(FM.UtTemplate.getTemplateArgs(attrlist), tname, false, false);
                    FM.UtTemplate.getTemplate(app,attrlist,tname,function(isok,templ) {
                        if(isok) {
                            var tmplnode = $(templ);
                            if(jqobj.attr('data-fmml-template-replace') == "true") {
                                jqobj.replaceWith(tmplnode);
                                domobj = tmplnode;
                            } else {
                                jqobj.html(templ);
                            }
                            FM.MlHost.initChildNodes(app,domobj,oObj);                            
                        }
                    });
                
                }                 
            }            
        }
        
        // napravi isto na child nodovima
        FM.MlHost.initChildNodes(app,this,oObj);
    });
    
    return true;
}

// radi update child nodova - promjena na dom nodu koji je nosioc
FM.MlHost.disposeChildNodes = function(checknode,childsOnly) {
    if(FM.isString(checknode)) {
        checknode = $('#' + checknode);
        checknode = checknode.length > 0 ? checknode[0] : null;
    }    
    childsOnly = FM.isset(childsOnly) && childsOnly == false ? false : true;
    var nodes = $(checknode).find("[data-fmml-host]");
    if(!childsOnly && $(checknode).is("[data-fmml-host]")) {
        nodes = nodes.add(checknode);
    }
    
    nodes.each(function(i, n){
        if(FM.isset(n.fmmlHost) && n.fmmlHost) {
            n.fmmlHost.dispose();
        }        
    });  
}

//
FM.MlHost.addHost("Host",FM.MlHost,"GLOBAL");
/**
 * ML query parameters host class. 
 * 
 * @class FM.MlHostQueryParams
 * @extends FM.MlHost
 * @param {FM.AppObject} app application object
 * @param {object} [attrs] DOM node attributes
 * @param {DOMnode} node DOM node
 */
FM.MlHostQueryParams = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(FM.MlHostQueryParams, FM.MlHost);

FM.MlHostQueryParams.prototype._init = function(app,attrs,node) {            
    this._super("_init",app,attrs,node);
    this.objectSubClass ="HostQueryParams";
}

FM.MlHostQueryParams.prototype.run = function() {
    this._super("run");                
    this.setDmObject(new FM.DmObject(null,FM.getArgs()));
}

FM.MlHostQueryParams.className = "MlHostQueryParams";
FM.MlHostQueryParams.fullClassName = 'lm.MlHostQueryParams';

FM.MlHost.addHost("QueryParams",FM.MlHostQueryParams,'GLOBAL');
/**
 * ML generic value host class. 
 * 
 * @class FM.MlHostGenericValue
 * @extends FM.MlHost
 * @param {FM.AppObject} app application object
 * @param {object} [attrs] DOM node attributes
 * @param {DOMnode} node DOM node
 */
FM.MlHostGenericValue = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(FM.MlHostGenericValue, FM.MlHost);

FM.MlHostGenericValue.prototype._init = function(app,attrs,node) {            
    this._super("_init",app,attrs,node);
    this.objectSubClass ="HostGenericValue";
}        

FM.MlHostGenericValue.prototype.run = function(oValue) {
    this._super("run");
    this.setDmObject(FM.isset(oValue) ? oValue : new FM.DmGenericValue({}));
}                        

FM.MlHostGenericValue.className = "MlHostGenericValue";
FM.MlHostGenericValue.fullClassName = 'lm.MlHostGenericValue';

FM.MlHost.addHost("GenericValue",FM.MlHostGenericValue,'GLOBAL');

/**
 * ML generic list host class. 
 * Selection types:
 * - none,[single], many, {N} max number of sel items
 * - [scsession],scpage, scproxy
 * 
 * @class FM.MlHostGenericList
 * @extends FM.MlHost
 * @param {FM.AppObject} app application object
 * @param {object} [attrs] DOM node attributes
 * @param {DOMnode} node DOM node
 */
FM.MlHostGenericList = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(FM.MlHostGenericList, FM.MlHost);

FM.MlHostGenericList.prototype.selectedItems = null;    // list of selected items
FM.MlHostGenericList.prototype.selectionControllerInstance =  null; // session controller instance
FM.MlHostGenericList.prototype.maxSelected = -1;        // max selection size
FM.MlHostGenericList.prototype.selectionController = null; // selection controler type

FM.MlHostGenericList.prototype.rowTemplate = null;
FM.MlHostGenericList.prototype.listViewportSize = -1;
FM.MlHostGenericList.prototype.rowTemplateParentNode = null;
FM.MlHostGenericList.prototype.cursorStartIndex = -1;

FM.MlHostGenericList.prototype._init = function(app,attrs,node) {            
    this._super("_init",app,attrs,node);
    this.objectSubClass ="GenericList";
    
    this.selectedItems = {};
    this.selectionController = "session";
    this.selectionControllerInstance =  null;
    this.maxSelected = -1;

    // determine selection attributes
    var seltypes = FM.trim(this.getAttr('data-fmml-list-selection-type','single;scsession'));
    var seltypesArr = seltypes != '' ? seltypes.split(";") : [];
    for (var i = 0; i < seltypesArr.length; i++) {    
        seltypesArr[i] = FM.trim(seltypesArr[i]);        
        if(seltypesArr[i] == 'single') {
            this.maxSelected = 1;
        } else if(seltypesArr[i] == 'none') {
            this.maxSelected = 0;
        }  else if(seltypesArr[i] == 'many') {
            this.maxSelected = -1;
        } else if(seltypesArr[i] == 'scproxy') {
            this.selectionController = "proxy";
        } else if(seltypesArr[i] == 'scpage') {
            this.selectionController = "page";
        } else if(seltypesArr[i] == 'scsession') {
            this.selectionController = "session";
        } else if(seltypesArr[i] != '') {
            this.maxSelected = parseInt(seltypesArr[i]);            
            if(this.maxSelected == 'NaN') this.maxSelected = 0;
        }
    }

    // find row template
    this.rowTemplate = null;
    this.listViewportSize = 0;
    this.rowTemplateParentNode = null;
    var rowTemp = $(this.node).find(".fmmlClsListRowWrapper");
 
    // number of displayed items
    if(FM.isset(rowTemp) && rowTemp && FM.isset(rowTemp[0])) {
        this.rowTemplate = rowTemp[0];
        this.listViewportSize = parseInt($(this.rowTemplate).attr('data-fmml-list-size'));
        $(this.rowTemplate).removeAttr('data-fmml-list-size');
        if(
            !FM.isset(this.listViewportSize) || 
            this.listViewportSize == null || 
            this.listViewportSize == 'NaN' ||
            this.listViewportSize < 0 ||
            this.listViewportSize > 99
        ) {
            this.listViewportSize = FM.MlHostGenericList.DEF_LIST_SIZE;;
        }
        this.rowTemplateParentNode = FM.isset(this.rowTemplate.parentNode) ?
            this.rowTemplate.parentNode : null
        ;
    }
}    

FM.MlHostGenericList.prototype._createList = function(oObj) {
    var dmconfName = this.getAttr('data-fmml-list','');
    var listOpt = {};
    var pref = 'data-fmml-list-attr-';
    var prefLen = pref.length;
    
    this.forEachAttr(function(pname,value) {
        if(FM.startsWith(pname,pref)) {
            listOpt[pname.substring(prefLen)] = value;
        }                    
        return true;
    });
    
    // input param
    oObj = FM.isset(oObj) && oObj ? oObj : null;
    if(!oObj) {        
        var lhost = this.getLinkedHost();
        if(lhost) {
            var node = document.getElementById(lhost);
            if( node && FM.isset(node.fmmlHost) && node.fmmlHost) {
                oObj = node.fmmlHost.getDmObject();
            }         
        }
    }
    
    if(FM.isset(oObj) && oObj && FM.isset(oObj.forEachAttr)) { // fm obect
        oObj.forEachAttr(function(pname,value) {
            listOpt[pname] = value;
            return true;
        });
        listOpt["objectClass"] = oObj.getSubClassName();
    } else if(FM.isArray(oObj) || FM.isObject(oObj)) { // array
        FM.forEach(oObj, function(pname,value) {
            listOpt[pname] = value;
            return true;
        });        
    }

    return new FM.DmList(listOpt,dmconfName,this.getApp());
}

FM.MlHostGenericList.prototype.run = function(oObj) {
    this._super("run");                
    this.clearSelection(false);

    // find first row wrapper
    if(this.rowTemplate) {
        if(FM.isset(this.listViewportSize)) {                        
            if(FM.isset(this.rowTemplateParentNode) && this.rowTemplateParentNode) {
                $(this.rowTemplateParentNode).html("");
                for(var i = 0; i < this.listViewportSize; i++) {
                    var newNode = $(this.rowTemplate).clone();
                    $(newNode).attr('data-fmml-list-index',"" + i);   
                    $(newNode).addClass(i & 1 ? 'fmmlRowOdd' : 'fmmlRowEven');
                    if(i == 0) $(newNode).addClass('fmmlRowFirst');
                    if(i == this.listViewportSize -1) $(newNode).addClass('fmmlRowLast');
                    $(newNode).addClass('fmmlRowEmpty');
                    $(this.rowTemplateParentNode).append(newNode);                                                     
                }
                FM.MlHost.initChildNodes(this.getApp(),this.rowTemplateParentNode);
            }
        }
    }

    // get data
    this.cursorStartIndex = 0;  
    var dmlist = this._createList(oObj);      
    this.setDmObject(dmlist);        
    dmlist.getData();
}

FM.MlHostGenericList.prototype.dispose = function() {
    this.selectionControllerInstance =  null;
    this.maxSelected = 0;
    this.selectionController = "session";
    this.selectedItems = {};
    
    var dmList = this.getDmObject();
    var me = this;
    dmList.forEachListElement(function(index,obj) {
        obj.removeListener(me);
        return true;
    });
    this._super("dispose");
}


FM.MlHostGenericList.prototype.getListIndex = function(obsnode) {
    if(!FM.isset(obsnode) || !obsnode) return -1;
    
    if(!FM.isset(obsnode.fmmlObserverListIndex)) {
        var parent = obsnode;
        while(parent && parent != this.node && !FM.isset($(parent).attr('data-fmml-list-index'))) {
            parent = parent.parentNode;
        }
        if(FM.isset($(parent).attr('data-fmml-list-index')) && parent != this.node) {
            obsnode.fmmlObserverListIndex = parseInt($(parent).attr('data-fmml-list-index'));
            obsnode.fmmlObserverListIndex = obsnode.fmmlObserverListIndex == 'NaN' ?
                -1 : obsnode.fmmlObserverListIndex;
        } else {
            obsnode.fmmlObserverListIndex = -1;
        }            
    }
    return(obsnode.fmmlObserverListIndex);
}


FM.MlHostGenericList.prototype.getListDmObject = function(oList,obsnode) {
    // find list index
    if(
        !FM.isset(oList) || 
        !oList || 
        !FM.isset(obsnode) || 
        !obsnode 
        || oList.getClassName() != 'DmList'
        ) {
        return oList;
    }
    
    if(this.getListIndex(obsnode) < 0) return this.dmObject;
    
    var listObj = null;
    var curPos = obsnode.fmmlObserverListIndex + this.cursorStartIndex;
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

FM.MlHostGenericList.prototype.getDmObject = function(obsnode) {
    var oObj = this._super("getDmObject");
    if(!oObj) {
        return oObj;
    }
    
    // not list
    if(
        oObj.getClassName() != 'DmList'  || 
        !FM.isset(obsnode) || !obsnode /*|| 
        !$(obsnode).attr('data-fmml-list-index')*/
        ) {
        return oObj;
    }
        
    // find list index
    return this.getListDmObject(oObj,obsnode);        
}

FM.MlHostGenericList.prototype.setDmObject = function(o) {
    var oold = this.getDmObject();    
    var onew = o;
    var me = this;                
    if(oold && oold != onew && oold.getClassName() == 'DmList') {
        oold.forEachListElement(
            function(index,iObj) {
                iObj.removeListener(me);
                return true;
            }
        );
    }
    
    if(onew && oold != onew && onew.getClassName() == 'DmList') {
        onew.forEachListElement(
            function(index,iObj) {
                iObj.addListener(me);
                return true;
            }
        );                
    }
    
    return this._super("setDmObject",o);
}

FM.MlHostGenericList.prototype.updateObserver = function(o,dmobj) {
    if(this.executed && FM.isset(o.update) && FM.isFunction(o.update)) {
        try {
            if(!FM.isset(dmobj) || dmobj == this.getDmObject(o.node)) {
                o.update(this);
            }
        } catch(e) {
            console.log("updateObservers() error: " + e);
        }
    }

    // kraj
    return true;
}

FM.MlHostGenericList.prototype.updateAllObservers = function(obj) {
    for(var id in this.listOfObservers) {
        this.updateObserver(this.listOfObservers[id],obj);
    }

    // kraj
    return true;
}


FM.MlHostGenericList.prototype.getPageIndexForTableIndex = function(ti) {
    var dmList = this.getDmObject();
    if(!dmList) return (-1);
    var vps = this.listViewportSize;    
    return(vps > 0 ? Math.floor(ti/vps) : -1);
}

FM.MlHostGenericList.prototype.setSelectionProxy = function(oProxy) {
    if(this.selectionController == "proxy") { 
        this.selectionControllerInstance = FM.isset(oProxy) && oProxy ? oProxy : null;
    } 
}

FM.MlHostGenericList.prototype.clearSelection = function(sendevent) {
    if(this.selectionController == "proxy") { 
        if(this.selectionControllerInstance && FM.isset(this.selectionControllerInstance.clearSelection)) {
            this.selectionControllerInstance.clearSelection(this,sendevent);
        }
        return;
    } 
 
    this.selectedItems = {};
    if(FM.isset(sendevent) && sendevent) this.updateAllObservers();
}

FM.MlHostGenericList.prototype.addToSelection = function(o,sendevent) {    
    if(this.selectionController == "proxy") { 
        if(this.selectionControllerInstance && FM.isset(this.selectionControllerInstance.addToSelection)) {
            this.selectionControllerInstance.addToSelection(this,o,sendevent);
        }
        return;
    } 
        
        
    if(this.maxSelected == 0) {
        return;
    } else if(this.maxSelected == 1) {
        this.clearSelection(false);
    } else if(this.maxSelected != -1) {
        var cnt = 0;
        FM.forEach(this.selectedItems,function(id,obj) {
            if(obj == true) cnt++;
            return true;
        });
        if(cnt >= this.maxSelected) return;
    }
    
   if(FM.isArray(o)) {
        for(var i= 0; i < o.length; i++) {
            this.selectedItems[o[i].getDataID()]=true;
        }
    } else if(FM.isset(o) && o) {
        this.selectedItems[o.getDataID()]=true;        
    }
    
    if(FM.isset(sendevent) && sendevent) this.updateAllObservers();
}

FM.MlHostGenericList.prototype.removeFromSelection = function(o,sendevent) {    
    if(this.selectionController == "proxy") { 
        if(this.selectionControllerInstance && FM.isset(this.selectionControllerInstance.removeFromSelection)) {
            this.selectionControllerInstance.removeFromSelection(this,o,sendevent);
        }
        return;
    } 
    
    if(FM.isArray(o)) {
        for(var i= 0; i < o.length; i++) {
            if(FM.isset(o[i]) && o[i] && FM.isset(this.selectedItems[o[i].getDataID()])) {
                this.selectedItems[o[i].getDataID()]=false;
            }
        }
    } else if(FM.isset(o) && o && FM.isset(this.selectedItems[o.getDataID()])) {
        this.selectedItems[o.getDataID()]=false;        
    }
    
    if(FM.isset(sendevent) && sendevent) this.updateAllObservers();
}

FM.MlHostGenericList.prototype.isSelected = function(o) {    
    if(this.selectionController == "proxy" && this.selectionControllerInstance && FM.isset(this.selectionControllerInstance.isSelected)) {
        return this.selectionControllerInstance.isSelected(o);
    }
    return(
        FM.isset(o) && o && 
        FM.isset(this.selectedItems[o.getDataID()]) && 
        this.selectedItems[o.getDataID()]
        );
}

// eventi
FM.MlHostGenericList.prototype.onChange = function(oSender,evdata) {
    var dmobj = this.getDmObject();
    if(
        dmobj && oSender && dmobj != oSender && 
        FM.isset(oSender['getDataID']) &&
        dmobj.get(oSender.getDataID())
    ) {
        this.updateAllObservers(oSender);
    } else {
        this._super("onChange",oSender,evdata);
    }
        
    if(
        oSender && oSender.getClassName && oSender.getClassName() == 'DmList' &&
        this.getAttr('data-fmml-list-refresh-on-change','true') != 'false'
        ) {        
        var fromrowAttr = this.getAttr('data-fmml-fromrow-attr-name',"fromrow");
        if(fromrowAttr != '') {
            oSender.setAttr(fromrowAttr,'0',false);
            this.cursorStartIndex = 0;
        }
        this.clearSelection(true);
        //this.disable();
        oSender.getData(false); // novi fetch
        
    }
    
    // kraj
    return true;
}

FM.MlHostGenericList.prototype._checkSelectionOnViewportChange = function(ci,nci) {
    if(
        this.getPageIndexForTableIndex(ci) != this.getPageIndexForTableIndex(nci) && 
        this.selectionController == "page"
    ) {
        this.clearSelection(true);
    }    
}

FM.MlHostGenericList.prototype.onStartOfList = function() {
    var dmList = this.getDmObject();
    if(!dmList) return (true);
    this._checkSelectionOnViewportChange(this.cursorStartIndex,0);
    this.cursorStartIndex = 0;
    this.updateAllObservers();

    // kraj
    return true;
};

FM.MlHostGenericList.prototype.onEndOfList = function() {    
    var dmList = this.getDmObject();
    if(!dmList) return (true);
    
    var vps = this.listViewportSize;
    var ci = vps == -1 ? dmList.getListSize() - 1 : dmList.getListSize() - vps;
    if(ci < 0) ci = 0;
    this._checkSelectionOnViewportChange(this.cursorStartIndex,ci);
    this.cursorStartIndex = ci;
    this.updateAllObservers();

    // kraj
    return true;
};

FM.MlHostGenericList.prototype.onPrevious = function() {
    var dmList = this.getDmObject();
    if(!dmList) return (true);
    var ci = this.cursorStartIndex;
    ci--;
    if(ci > -1) {
        this._checkSelectionOnViewportChange(this.cursorStartIndex,ci);
        this.cursorStartIndex = ci;
        this.updateAllObservers();
    }
    // kraj
    return true;
}

FM.MlHostGenericList.prototype.onPreviousPage = function() {
    var dmList = this.getDmObject();
    if(!dmList) return (true);
    var ci = this.cursorStartIndex;
    var vps = this.listViewportSize;
    
    if(ci < vps || vps < 1) {        
        return true;
    }
    
    var nci = (Math.floor(ci/vps) -1) * vps;
    if(nci > -1) {
        this._checkSelectionOnViewportChange(this.cursorStartIndex,nci);
        this.cursorStartIndex = nci;
        this.updateAllObservers();
    }
    // kraj
    return true;
}

FM.MlHostGenericList.prototype.onNext = function() {
    var dmList = this.getDmObject();
    if(!dmList) return (true);
    var ci = this.cursorStartIndex;
    var vps = this.listViewportSize;
    ci++;
    
    if((vps > 0 && ci + vps - 1 >= dmList.getListSize()) || (vps <1 && ci >= dmList.getListSize())) {
        if(this.getAttr('data-fmml-get-more','false') == 'true') {
            this._checkSelectionOnViewportChange(this.cursorStartIndex,ci);
            this.cursorStartIndex = ci;
            var fromrowAttr = this.getAttr('data-fmml-fromrow-attr-name',"fromrow");
            if(fromrowAttr != '') {
                dmList.setAttr(fromrowAttr,dmList.getListSize(),false);
            }
            dmList.getData(true);
            return true;
        } else {
            ci = dmList.getListSize() - (vps == -1 ? 1 : vps);
        }
    }
    this._checkSelectionOnViewportChange(this.cursorStartIndex,ci);
    this.cursorStartIndex = ci;
    this.updateAllObservers();

    // kraj
    return true;
};

FM.MlHostGenericList.prototype.onNextPage = function() {
    var dmList = this.getDmObject();
    if(!dmList) return (true);
    var ci = this.cursorStartIndex;
    var vps = this.listViewportSize;
    
    ci = (Math.floor(ci/vps) +1) * vps;    
    if((vps > 0 && ci + vps - 1 >= dmList.getListSize()) || (vps <1 && ci >= dmList.getListSize())) {
        if(this.getAttr('data-fmml-get-more','false') == 'true') {
            this._checkSelectionOnViewportChange(this.cursorStartIndex,ci);
            this.cursorStartIndex = ci;
            var fromrowAttr = this.getAttr('data-fmml-fromrow-attr-name',"fromrow");
            if(fromrowAttr != '') {
                dmList.setAttr(fromrowAttr,dmList.getListSize(),false);
            }
            dmList.getData(true);
            return true;
        } else {
            ci = (Math.floor((dmList.getListSize()-1)/vps)) * vps; 
        }
    }
    this._checkSelectionOnViewportChange(this.cursorStartIndex,ci);
    this.cursorStartIndex = ci;
    this.updateAllObservers();

    // kraj
    return true;
}

FM.MlHostGenericList.prototype.onLastPage = function() {
    var dmList = this.getDmObject();
    if(!dmList) return (true);
    var vps = this.listViewportSize;

    var ci = dmList.getListSize() -
        (this.getAttr('data-fmml-get-more','false') == 'true' ? 0 : 1)
    ;
    ci = (Math.floor(ci/vps)) * vps;
    
    if(vps > 0 && ci + vps - 1 >= dmList.getListSize()) {
        if(this.getAttr('data-fmml-get-more','false') == 'true') {
            this._checkSelectionOnViewportChange(this.cursorStartIndex,ci);
            this.cursorStartIndex = ci;
            var fromrowAttr = this.getAttr('data-fmml-fromrow-attr-name',"fromrow");
            if(fromrowAttr != '') {
                dmList.setAttr(fromrowAttr,dmList.getListSize(),false);
            }
            //this.disable();
            dmList.getData(true);
            return true;
        } else {
            ci = (Math.floor((dmList.getListSize()-1)/vps)) * vps; 
        }
    }
    this._checkSelectionOnViewportChange(this.cursorStartIndex,ci);
    this.cursorStartIndex = ci;
    this.updateAllObservers();

    // kraj
    return true;
}

FM.MlHostGenericList.prototype.onListStart = function(sender) {
    this.setLastError();
    this.sendEventToObservers(sender,"onListStart",{});
    // kraj
    return true;
}

FM.MlHostGenericList.prototype._checkRowsStatus = function(oList, startIndex) {    
    if(FM.isset(this.rowTemplateParentNode) && this.rowTemplateParentNode) {
        var me = this;
        var ls = oList.getListSize();
        $(this.rowTemplateParentNode).children().each(function() {
            if(FM.isset($(this).attr('data-fmml-list-index'))) {
                var i = parseInt($(this).attr('data-fmml-list-index'));
                if(i != 'NaN') {
                    if(i + startIndex >= ls) {
                        $(this).addClass("fmmlRowEmpty");
                    } else {
                        $(this).removeClass("fmmlRowEmpty");
                    }
                }
            }
        });
    }
}

FM.MlHostGenericList.prototype.onListEnd = function(sender) {
    var _q = sender.getLastGetArgs();
    this.sendEventToObservers(sender,"onListEnd",{});
    
    var dmList = this.getDmObject();
    if(dmList) {
        var ci = this.cursorStartIndex;
        var vps = this.listViewportSize;
        
        if(ci > dmList.getListSize() - (vps == -1 ? 1 : vps)) {
            if(vps == -1) {
                ci = dmList.getListSize() - 1;
            } else {
                ci = (Math.floor((dmList.getListSize()-1)/vps)) * vps;
            }
            if(ci < 0) ci = 0;
            this._checkSelectionOnViewportChange(this.cursorStartIndex,ci);            
            this.cursorStartIndex = ci;            
        }
        var me = this;
        dmList.forEachListElement(function(index,obj) { 
            obj.setAttr('_query',_q);
            obj.addListener(me); 
            return true;
        });
        
        this._checkRowsStatus(dmList,ci);
    }
    
    // 
    this.updateAllObservers();
    // kraj
    return true;
}

FM.MlHostGenericList.prototype.onListError = function(sender,errObj) {
    this.setLastError(errObj);
    this.sendEventToObservers(sender,"onListError",{});
    var dmList = this.getDmObject();
    var me = this;
    dmList.forEachListElement(function(index,obj) {
        obj.addListener(me);
        return true;
    });
    this.updateAllObservers();
    // kraj
    return true;
}

FM.MlHostGenericList.prototype.getSelectedCount = function() {
    if(this.selectionController == "proxy") { 
        if(this.selectionControllerInstance && FM.isset(this.selectionControllerInstance.getSelectedCount)) {
            return this.selectionControllerInstance.getSelectedCount(this);
        }
        return 0;
    }
    var cnt = 0;
    FM.forEach(this.selectedItems,function(id,obj) {
        if(obj == true) cnt++;
        return true;
    });

    // kraj
    return cnt;
}

FM.MlHostGenericList.prototype.onSelected = function(oSender,evdata) {
    var evObj = FM.getAttr(evdata,'object',null);
    var evCb = FM.getAttr(evdata,'callback',function(){});
    
    if(evObj) this.addToSelection(evObj, true);
    
    // kraj
    return true;
}

FM.MlHostGenericList.prototype.onDeselected = function(oSender,evdata) {
    var evObj = FM.getAttr(evdata,'object',null);
    var evCb = FM.getAttr(evdata,'callback',function(){});
    
    if(evObj) this.removeFromSelection(evObj, true);
    
    // kraj
    return true;
}

FM.MlHostGenericList.prototype.onClearSelection = function(oSender,evdata) {
    var evObj = FM.getAttr(evdata,'object',null);
    var evCb = FM.getAttr(evdata,'callback',function(){});
    
    if(evObj) this.clearSelection(true);
    
    // kraj
    return true;
}

FM.MlHostGenericList.prototype.onAddPageToSelection = function(oSender,evdata) {
    var dmList = this.getDmObject();
    if(dmList) {
        var ci = this.cursorStartIndex;
        var vps = this.listViewportSize;
        var sellst = [];
        var i = 0;
        if(vps > 0) {
            var ce = ci+vps;
            dmList.forEachListElement(function(id,obj) {
                if(i >= ci && i < ce) sellst.push(obj);
                return true;
            });
        }
        if(sellst.length > 0) this.addToSelection(sellst, true);
    }
    
    // kraj
    return true;
}

FM.MlHostGenericList.prototype.onRemovePageFromSelection = function(oSender,evdata) {
    var dmList = this.getDmObject();
    if(dmList) {
        var ci = this.cursorStartIndex;
        var vps = this.listViewportSize;
        var sellst = [];
        var i = 0;
        if(vps > 0) {
            var ce = ci+vps;
            dmList.forEachListElement(function(id,obj) {
                if(i >= ci && i < ce) sellst.push(obj);
                return true;
            });
        }
        if(sellst.length > 0) this.removeFromSelection(sellst, true);
    }
    
    // kraj
    return true;
}

FM.MlHostGenericList.className = "MlHostGenericList";
FM.MlHostGenericList.fullClassName = 'lm.MlHostGenericList';

FM.MlHostGenericList.DEF_LIST_SIZE = 5;

FM.MlHost.addHost("GenericList",FM.MlHostGenericList,'GLOBAL');

/**
 * ML generic collection host class. 
 * Selection types:
 * - none,[single], many, {N} max number of sel items
 * - [scsession],scpage, scproxy
 * 
 * @class FM.MlHostGenericCollection
 * @extends FM.MlHost
 * @param {FM.AppObject} app application object
 * @param {object} [attrs] DOM node attributes
 * @param {DOMnode} node DOM node
 */
FM.MlHostGenericCollection = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(FM.MlHostGenericCollection, FM.MlHost);

FM.MlHostGenericCollection.prototype.selectedItems = null;    // list of selected items
FM.MlHostGenericCollection.prototype.maxSelected = -1;        // max selection size

FM.MlHostGenericCollection.prototype.listItemsContainer = null;
FM.MlHostGenericCollection.prototype.listItemsWrapper = null;
FM.MlHostGenericCollection.prototype.listItemsInner = null;
FM.MlHostGenericCollection.prototype.listEmpty = null;
FM.MlHostGenericCollection.prototype.listWaiting = null;
FM.MlHostGenericCollection.prototype.listOffset = 0;

FM.MlHostGenericCollection.prototype.history = null;

FM.MlHostGenericCollection.prototype._init = function(app,attrs,node) {            
    this._super("_init",app,attrs,node);
    this.objectSubClass ="GenericCollection";

    // selection
    this.selectedItems = {};
    this.maxSelected = -1;
    this.listOffset = 0;
    // find items container
    this.listItemsContainer = this.node;
    var itmCont = $(this.node).find(".fmmlListItems");
    if(FM.isset(itmCont) && itmCont && FM.isset(itmCont[0])) {
        this.listItemsContainer = itmCont[0];
    }

    // find list empty ode
    this.listEmpty = null;
    var itmWrp = $(this.listItemsContainer).find(".fmmlListEmpty");
    if(FM.isset(itmWrp) && itmWrp && FM.isset(itmWrp[0])) {
        this.listEmpty = itmWrp[0];
    }

    // find list waiting ode
    this.listWaiting = null;
    var itmWrp = $(this.listItemsContainer).find(".fmmlListWaiting");
    if(FM.isset(itmWrp) && itmWrp && FM.isset(itmWrp[0])) {
        this.listWaiting = itmWrp[0];
    }

    // find items wrapper
    this.listItemsWrapper = $("<div></div>");
    itmWrp = $(this.listItemsContainer).find(".fmmlListItemWrapper");
    if(FM.isset(itmWrp) && itmWrp && FM.isset(itmWrp[0])) {
        this.listItemsWrapper = itmWrp[0];
    }

    // fmmlListItemInner
    this.listItemsInner = null;
    itmWrp = $(this.listItemsWrapper).find(".fmmlListItemInner");
    if(FM.isset(itmWrp) && itmWrp && FM.isset(itmWrp[0])) {
        this.listItemsInner = itmWrp[0];
    }
    $(this.listItemsWrapper).html("");

    // clear
    this._clearItems();
}    

FM.MlHostGenericCollection.prototype._clearItems = function() {
FM.MlHost.disposeChildNodes(this.listItemsContainer);
    $(this.listItemsContainer).html("");
}

FM.MlHostGenericCollection.prototype._nodeApplyTemplate = function(node,attrs) {
    FM.forEach(node.attributes, function(i,attr) {
        if (attr.specified == true) {
            var val = FM.applyTemplate(attrs, attr.value, false, false);
            if(val != attr.value) {
                attr.value = val;
            }
        }
        return true;
    });
    
}

FM.MlHostGenericCollection.prototype._refreshItems = function() {
    this._clearItems();
    var dmList = this.getDmObject();
    if(!dmList) return false;
    var me = this;
    var curitm = -1;
    var itmcnt = 0;
    var maxitms = parseInt(this.getAttr('data-fmml-list-max-items','200'));
    maxitms = FM.isset(maxitms) ? maxitms : 200;
    
    dmList.forEachListElement(function(i,oObj) {

        
        var layout = me.getRegistryValue(
            "/itemsLayout",
            me.getAttr('data-fmml-list-items-layout','icon')
            );
        
        var attrs = {
            itemsLayout: layout
        };
        if (me._filterItemFromDisplay(oObj) == true) {
            curitm++;
            if(curitm < me.listOffset) return true;
        
            oObj.forEachAttr(function(pname,value) {
                attrs[pname] = value;
                return true;
            });
            attrs["objectClass"] = oObj.getSubClassName();
            attrs["data_id"] = oObj.getDataID();

            var tname = me.getAttr(
                'data-fmml-list-items-template-base',
                "ui.layouts.dm.[:objectClass].[:itemsLayout].html"
                );
            tname = FM.applyTemplate(attrs,tname,false,true);        
            itmcnt++;

            FM.UtTemplate.getTemplate(me.getApp(),attrs,tname,function(isok,templ) {            
                if(isok) {                
                    var itm = $(templ);
                    if(itm) {
                        if(me.listItemsInner) {
                            var iNode = $(me.listItemsInner).clone();
                            if(FM.isset(iNode) && iNode && FM.isset(iNode[0])) {
                                iNode = iNode[0];
                            }
                            me._nodeApplyTemplate(iNode,attrs);
                            $(iNode).append(itm);
                            itm = iNode;
                        }

                        var newNode = $(me.listItemsWrapper).clone();
                        if(FM.isset(newNode) && newNode && FM.isset(newNode[0])) {
                            newNode = newNode[0];
                        }
                        me._nodeApplyTemplate(newNode,attrs);

                        $(newNode).attr('data-fmml-list-index',curitm);   
                        $(newNode).addClass(curitm & 1 ? 'fmmlRowOdd' : 'fmmlRowEven');
                        $(newNode).attr('data-fmml-item-data-id',oObj.getDataID());
                        $(newNode).append(itm);
                        $(me.listItemsContainer).append(newNode);
                        FM.MlHost.initChildNodes(me.getApp(),newNode,oObj);
                    }
                }
            });
        }
    
        return maxitms > itmcnt;
    });

    // empty list
    if(itmcnt == 0) this.setListEmpty();
    
    // send event
    this.sendEventToObservers(this,'onListRefreshCompleted');
}

FM.MlHostGenericCollection.prototype._filterItemFromDisplay = function(oObj) {
    return true;
}

FM.MlHostGenericCollection.prototype._createList = function(oObj) {
    var dmconfName = this.getAttr('data-fmml-list','');
    var listOpt = {};
    var pref = 'data-fmml-list-attr-';
    var prefLen = pref.length;
    
    this.forEachAttr(function(pname,value) {
        if(FM.startsWith(pname,pref)) {
            listOpt[pname.substring(prefLen)] = value;
        }                    
        return true;
    });
    
    // input param
    oObj = FM.isset(oObj) && oObj ? oObj : null;
    if(!oObj) {        
        var lhost = this.getLinkedHost();
        if(lhost) {
            var node = document.getElementById(lhost);
            if( node && FM.isset(node.fmmlHost) && node.fmmlHost) {
                oObj = node.fmmlHost.getDmObject();
            }         
        }
    }
    
    if(FM.isset(oObj) && oObj && FM.isset(oObj.forEachAttr)) { // fm obect
        oObj.forEachAttr(function(pname,value) {
            listOpt[pname] = value;
            return true;
        });
        listOpt["objectClass"] = oObj.getSubClassName();
    } else if(FM.isArray(oObj) || FM.isObject(oObj)) { // array
        FM.forEach(oObj, function(pname,value) {
            listOpt[pname] = value;
            return true;
        });        
    }
    
    dmconfName = FM.resolveAttrValue(null,"-",dmconfName,{
        A: this.getApp(),
        H: this
    });
    var dmList = FM.isObject(dmconfName) && dmconfName ? 
    dmconfName :
    new FM.DmList(listOpt,dmconfName,this.getApp())
    ;
    
    return dmList;
}

FM.MlHostGenericCollection.prototype.run = function(oObj) {
    this._super("run");
    this.clearSelection(false);
    this.history = [];
    
    // get data
    
    var dmlist = FM.isset(oObj) && oObj && oObj.getClassName && oObj.getClassName() == 'DmList' ?
        oObj :  this._createList(oObj)
    ;
              
    this.setDmObject(dmlist);  
    
    if(this.getAttr('data-fmml-list-fetch-on-run','true') != 'false') {
        this.history.push(dmlist.getAttr());
        dmlist.getData();
    } else {
        this._refreshItems();
    }
}

FM.MlHostGenericCollection.prototype.dispose = function() {
    this.maxSelected = 0;
    this.selectedItems = {};
    this._clearItems();    
    this._super("dispose");
}

FM.MlHostGenericCollection.prototype.clearSelection = function(sendevent) {
    this.selectedItems = {};
    $(this.listItemsContainer).find(".fmmlSelected").removeClass("fmmlSelected");
    if(FM.isset(sendevent) && sendevent) this.updateAllObservers();
}

FM.MlHostGenericCollection.prototype.addToSelection = function(o, node, sendevent) {    
    if(this.maxSelected == 0) {
        return;
    } else if(this.maxSelected == 1) {
        this.clearSelection(false);
    } else if(this.maxSelected != -1) {
        var cnt = 0;
        FM.forEach(this.selectedItems,function(id,obj) {
            if(obj == true) cnt++;
            return true;
        });
        if(cnt >= this.maxSelected) return;
    }
    
    if(FM.isArray(o)) {
        for(var i= 0; i < o.length; i++) {
            this.selectedItems[o[i].getDataID()]=true;
        }
    } else {
        var oid = FM.isset(o) && o ? 
        (FM.isString(o) ? o : o.getDataID()) :
        ''
        ;      
        this.selectedItems[oid]=true;
    }
    if(FM.isset(node) && node) $(node).addClass("fmmlSelected");
    if(FM.isset(sendevent) && sendevent) this.updateAllObservers();
}

FM.MlHostGenericCollection.prototype.removeFromSelection = function(o,node,sendevent) { 
    if(FM.isArray(o)) {
        for(var i= 0; i < o.length; i++) {
            if(FM.isset(o[i]) && o[i] && FM.isset(this.selectedItems[o[i].getDataID()])) {
                this.selectedItems[o[i].getDataID()]=false;
            }
        }
    } else {
        var oid = FM.isset(o) && o ? 
        (FM.isString(o) ? o : o.getDataID()) :
        ''
        ;      
        if(FM.isset(this.selectedItems[oid])) this.selectedItems[oid]=false;
    }
    
    if(FM.isset(node) && node) $(node).removeClass("fmmlSelected");
    if(FM.isset(sendevent) && sendevent) this.updateAllObservers();
}

FM.MlHostGenericCollection.prototype.isSelected = function(o) {
    var id = FM.isset(o) && o ? 
    (FM.isString(o) ? o : o.getDataID()) :
    '';
    return(id != '' && FM.isset(this.selectedItems[id]) && this.selectedItems[id]);
}

FM.MlHostGenericCollection.prototype.getSelectionSize = function() {
    var cnt=0;
    FM.forEach(this.selectedItems,function(id) {
        cnt++;
        return true;
    });
    
    return cnt;
}

FM.MlHostGenericCollection.prototype.getSelection = function() {
    var lst = this.getDmObject();
    var sel = [];
    
    if(lst) {
        FM.forEach(this.selectedItems,function(id) {
            var o = lst.get(id);
            if(o) sel.push(o);
            return true;
        });
    }
    return sel;
}

// eventi
FM.MlHostGenericCollection.prototype.onChange = function(oSender,evdata) {
    this._super("onChange",oSender,evdata);
    
    var evObj = FM.getAttr(evdata,'object',null);
    var evCb = FM.getAttr(evdata,'callback',function(){});
    
    if(
        oSender && oSender.getClassName && oSender.getClassName() == 'DmList' &&
        this.getAttr('data-fmml-list-refresh-on-change','true') != 'false'
        ) {
        var fromrowAttr = this.getAttr('data-fmml-fromrow-attr-name',"fromrow");
        if(fromrowAttr != '') {
            oSender.setAttr(fromrowAttr,'0',false);
        }
        this.clearSelection(true);
        this.history.push(oSender.getAttr());
        oSender.getData(false); // novi fetch
    }
    
    // kraj
    return true;
}
FM.MlHostGenericCollection.prototype.getMore = function() {
    var dmList = this.getDmObject();
    if(dmList && FM.isset(dmList,"getData")) {
        dmList.getData(true);
    }    
}

FM.MlHostGenericCollection.prototype.onGetMore = function(oSender,evdata) {
    this.getMore();
}

FM.MlHostGenericCollection.prototype.onRefresh = function(oSender,evdata) {
    var dmList = this.getDmObject();
    if(dmList && FM.isset(dmList,"getData")) {
        dmList.getData(false);
    }
}

FM.MlHostGenericCollection.prototype.onHistoryBack = function(oSender,evdata) {
    if(this.history.length > 1) {
        var mydata = this.history.pop(); // me
        var data = this.history.pop(); // last
        
        var dmList = this.getDmObject();
        if(dmList && FM.isset(dmList,"getData")) {
            FM.forEach(data, function(n,v) {
                dmList.setAttr(n,v);
                return true;
            });
            //dmList.getData(false);
            dmList.setChanged(true,true);
            if(this.getAttr('data-fmml-list-refresh-on-change','true') != 'true') {
                dmList.getData(false);
            }
        }        
        
    }
}

FM.MlHostGenericCollection.prototype.onAddObjectToList = function(oSender,evdata) {
    var oObj = FM.getAttr(evdata,'object',null);
    if(!oObj) return false;
    var dmList = this.getDmObject();
    if(dmList) {
        dmList.addToList(oObj,oObj.getDataID(),true);
    }
    return true;
}

FM.MlHostGenericCollection.prototype.onOpenObject = function(oSender,evdata) {
    var oObj = FM.getAttr(evdata,'object',null);
    if(!oObj) return;    
    var id = oObj.getAttr('value','');
    if(id == '') return;    
    var lst = this.getDmObject();
    var dmObj = lst ? lst.get(id) : null;
    if(dmObj && this.getApp().openObject) {
        this.getApp().openObject(dmObj);
    }
}

FM.MlHostGenericCollection.prototype.onChangeResource = function(oSender,evdata) {
    var oObj = FM.getAttr(evdata,'object',null);
    if(!oObj) return;
    
    var resurl = oObj.getAttr('resource_url',oObj.getAttr('value',''));
    if(resurl != '') {
        var resResolvFn = this.getAttr('data-fmml-list-attr-resource-parser','');
        if(resResolvFn !== '') {
            resResolvFn = FM.stringPtrToObject(resResolvFn, this, this.getApp());
            if(resResolvFn) {
                try {
                    resurl = resResolvFn(this,resurl);
                } catch(e) {
                    error.log("onChangeResource:" + e);
                }
            }
        }
        this.listOffset = 0;
        var dmList = this.getDmObject();
        if(dmList) {
            dmList.setAttr('resource_url',resurl,true);
        }
    }
}

FM.MlHostGenericCollection.prototype.onListStart = function(sender) {    
    this.setWaiting();
    this.sendEventToObservers(sender,"onListStart",{});
    // kraj
    return true;
}


FM.MlHostGenericCollection.prototype.onListEnd = function(sender) {    
    this.sendEventToObservers(sender,"onListEnd",{});
    this.updateAllObservers();
    this._refreshItems();
    // kraj
    return true;
}

FM.MlHostGenericCollection.prototype.onListError = function(sender) {
    this.sendEventToObservers(sender,"onListError",{});
    this.updateAllObservers();
    this.setListEmpty();
    return true;
}

FM.MlHostGenericCollection.prototype.setWaiting = function() {
    
    if(this.listWaiting) {
        var wnode = $(this.listWaiting).clone()[0];
        if(this.getAttr('data-fmml-list-waiting-fs','true') == 'true') {
            $(wnode).width('100%');
            $(wnode).height($(this.listItemsContainer).height());
            this._clearItems();
        }                
        $(this.listItemsContainer).append(wnode);
        FM.MlHost.initChildNodes(this.getApp(), wnode, this.getDmObject());
    }
}

FM.MlHostGenericCollection.prototype.setListEmpty = function() {
    if(this.listEmpty) {
        var enode = $(this.listEmpty).clone()[0];
        $(enode).width('100%');
        $(enode).height($(this.listItemsContainer).height());
        
        this._clearItems();
        
        $(this.listItemsContainer).append(enode);
        FM.MlHost.initChildNodes(this.getApp(), enode, this.getDmObject());
    }
}

FM.MlHostGenericCollection.prototype.onChangeListLayout = function(sender,evdata) {    
    var layout = FM.isset(evdata) && FM.isset(evdata.object) ? 
    evdata.object.getAttr('value','icon') : 
    'icon'
    ;
    this.setAttr('data-fmml-list-items-layout', layout);
    this.setRegistryValue("/itemsLayout",layout);
    
    this._refreshItems();
}

FM.MlHostGenericCollection.prototype.getSelectedCount = function() {
    var cnt = 0;
    FM.forEach(this.selectedItems,function(id,obj) {
        if(obj == true) cnt++;
        return true;
    });

    // kraj
    return cnt;
}

FM.MlHostGenericCollection.prototype.getFilteredCount = function() {
    var dmList = this.getDmObject();
    if(!dmList) return 0;
    
    var itemscnt = 0;
    var me = this;

    dmList.forEachListElement(function(i,oObj) {
        if (me._filterItemFromDisplay(oObj) == true) {
            itemscnt += 1;
        }
        return true;
    });
    
    return itemscnt;
}

FM.MlHostGenericCollection.prototype.onSelected = function(oSender,evdata) {
    var evObj = FM.getAttr(evdata,'object',null);
    var evCb = FM.getAttr(evdata,'callback',function(){});
    if(evObj) this.addToSelection(evObj,this._getNodeListNode(oSender.getNode()), true);
    
    // kraj
    return true;
}

FM.MlHostGenericCollection.prototype.onDeselected = function(oSender,evdata) {
    var evObj = FM.getAttr(evdata,'object',null);
    var evCb = FM.getAttr(evdata,'callback',function(){});
    
    if(evObj) this.removeFromSelection(evObj,this._getNodeListNode(oSender.getNode()), true);
    
    // kraj
    return true;
}

FM.MlHostGenericCollection.prototype.onAlterSelectionState = function(oSender,evdata) {
    var evObj = FM.getAttr(evdata,'object',null);
    var evCb = FM.getAttr(evdata,'callback',function(){});
    var id = '';
    if(oSender && evObj) {
        var inode = this._getNodeListNode(oSender.getNode());
                
        if(inode && FM.isset($(inode).attr('data-fmml-item-data-id'))) {
            id = $(inode).attr('data-fmml-item-data-id');
        }
        if(id != '') {
            if(!this.isSelected(id)) {
                this.addToSelection(id, inode, true)
            } else {
                this.removeFromSelection(id, inode, true);
            }
        }
    }
    
    // kraj
    return true;
}

FM.MlHostGenericCollection.prototype._getNodeListNode = function(node) {
    var inode = node;
    var rnode = null;
    while(inode && !FM.isset($(inode).attr('data-fmml-item-data-id'))) {
        inode = inode.parentNode;
    }

    if(FM.isset($(inode).attr('data-fmml-item-data-id'))) {
        rnode = inode;
    }
    
    return rnode;
}

FM.MlHostGenericCollection.prototype.onClearSelection = function(oSender,evdata) {
    var evObj = FM.getAttr(evdata,'object',null);
    var evCb = FM.getAttr(evdata,'callback',function(){});
    
    if(evObj) this.clearSelection(true);
    
    // kraj
    return true;
}

FM.MlHostGenericCollection.prototype.onNextPage = function() {
    var dmList = this.getDmObject();
    if(!dmList) return (true);
    var maxitms = parseInt(this.getAttr('data-fmml-list-max-items','200'));
    var itemscnt = this.getFilteredCount();
    maxitms = FM.isset(maxitms) && maxitms > 0 ? maxitms : 200;
    var getMoreData = false;
    var calcListOffset = this.listOffset + maxitms;
    this.listOffset = calcListOffset;
    if(this.listOffset > itemscnt) {
        this.listOffset = Math.floor(itemscnt/maxitms) * maxitms;
        getMoreData = true;
    }
    
    if(this.listOffset >= itemscnt) {
        this.listOffset = this.listOffset -= maxitms;
        getMoreData = true;        
    }
    this._refreshItems();
    
    if(getMoreData && this.getAttr('data-fmml-list-get-more-at-end','false') == 'true') this.getMore();
    // kraj
    return true;
}

FM.MlHostGenericCollection.prototype.onPreviousPage = function() {
    var dmList = this.getDmObject();
    if(!dmList) return (true);
    var maxitms = parseInt(this.getAttr('data-fmml-list-max-items','200'));
    maxitms = FM.isset(maxitms) && maxitms > 0 ? maxitms : 200;
    var itemscnt = this.getFilteredCount();
    this.listOffset -= maxitms;
    if(this.listOffset > itemscnt) {
        this.listOffset = Math.floor(itemscnt/maxitms) * maxitms;
    }
    if(this.listOffset < 0) this.listOffset = 0;
    this._refreshItems();
    // kraj
    return true;
}

FM.MlHostGenericCollection.className = "MlHostGenericCollection";
FM.MlHostGenericCollection.fullClassName = 'lm.MlHostGenericCollection';

FM.MlHostGenericCollection.DEF_LIST_SIZE = 5;

FM.MlHost.addHost("GenericCollection",FM.MlHostGenericCollection,'GLOBAL');

/**
* Basic ML observer class. 
* 
* <table>
* <th>List of ML node attributes</th>
* <tr><td>data-fmml-attr-name</td><td>name of attribute</td></tr>
* <tr><td>data-fmml-attr-default-value</td><td>default value of attribute</td></tr>
* <tr><td>data-fmml-validation-rules</td><td>validation rules for observer</td></tr>
* <tr><td>data-fmml-validation-message</td><td>validation error message</td></tr>
* <tr><td>data-fmml-run-on-update</td><td>node id of host to run on update</td></tr>
* </table>
* 
* <table>
* <th>List of ML CSS classes</th>
* <tr><td>fmmlInvalidValue</td><td>attribute value is invalid</td></tr>
* </table>
* 
* @class FM.MlObserver
* @extends FM.LmObject
* @param {object} [attrs] DOM node attributes
* @param {DOMnode} node DOM node
*/    
FM.MlObserver = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(FM.MlObserver,FM.LmObject); 

// properties
FM.MlObserver.prototype.host = null;
FM.MlObserver.prototype.node = null;
FM.MlObserver.prototype.extensions = [];
FM.MlObserver.prototype.errorObject = null;

// methods
FM.MlObserver.prototype._init = function(app,attrs,node) {
    this._super("_init",app,attrs);
    this.objectSubClass = "MlObserver";
    this.executed = false;
    this.node = node;
    this.node.fmmlObserver = this;
    this.extensions = [];
    
    
    // find error host
    this.errorObject = this.getAttr('data-fmml-error-host','') != '' ?            
    new FM.DmGenericError({
        id: '',
        text: ''
    }) : 
    null
    ;
    this.getHost();
    if(this.host) this.host.addObserver(this);
}

FM.MlObserver.prototype.run = function() {
    //if(this.executed) this.dispose();
    this._super("run");

    var attrname = this.getAttr('data-fmml-attr-name','');
    var dmobj = this.getDmObject();

/*
    if(this.getAttr('data-fmml-attr-value-from-dom','false') == 'true' && attrname != '' && dmobj) {
        dmobj.setAttr(attrname, this.getNodeValue(),true);
    }
*/
    for(var i = 0; i < this.extensions.length; i++) {
        this.runExtension(this.extensions[i]);
    }
    this.executed = true;
    this.setNodeValue();
    return true;
}


FM.MlObserver.prototype.dispose = function() {
    var exts = FM.cloneObject(this.extensions);
    for(var i = 0; i < exts.length; i++) {
        var extObj = exts[i];
        if(FM.isset(extObj.dispose)) {
            extObj.dispose(this);
        }
    }
    this.extensions = [];
    
    if(this.node) {
        this.node.fmmlObserver = null;
    }
    if(this.host) {
        this.host.removeObserver(this);
    }
    
    if(this.errorObject) {
        this.errorObject.dispose();
        this.errorObject = null;
    }
        
    return this._super("dispose");
    this.executed = false;
}


FM.MlObserver.prototype._getErrorHost = function() {
    var errnode = document.getElementById(this.getAttr('data-fmml-error-host',''));
    return (
        errnode && FM.isset(errnode.fmmlHost) && errnode.fmmlHost ?
        errnode.fmmlHost : null
        );
}

FM.MlObserver.prototype.getLastError = function() {
    var errhost = this._getErrorHost();
    return errhost ? errhost.getDmObject() : null;
}

FM.MlObserver.prototype.setLastError = function(oErr) {
    var errhost = this._getErrorHost();
    if(!errhost) {
        return oErr;
    }
    
    if(!FM.isset(oErr) || !oErr || !FM.isObject(oErr)) {
        oErr = new FM.DmGenericError();
    }
    
    if(!errhost.isExecuted()) {
        errhost.run(oErr);
    } else {
        var dmobj = errhost.getDmObject();
        if(!dmobj) {
            errhost.setDmObject(oErr);
        } else {
            dmobj.forEachAttr(function(attr,value) {
                dmobj.setAttr(attr,oErr.getAttr(attr,null));
                return true;
            });   
            dmobj.setChanged(true,true);
            oErr = dmobj;
        }
    }    
    
    return oErr;
}

/*
FM.MlObserver.prototype.setLastError2222 = function(oErr) {
    if(!FM.isset(oErr) || !oErr || !FM.isObject(oErr)) {
        oErr = new FM.DmGenericError({
            id: '',
            text: ''
        });
    }

    if(this.errorObject == null) {
        return oErr.getAttr('messageId','') == '' ? oErr : this.getApp().setLastError(oErr);
    }
    
    var me = this;
    this.errorObject.forEachAttr(function(attr,value) {
        me.errorObject.setAttr(attr,oErr.getAttr(attr,null));
        return true;
    });
    
    this.errorObject.setChanged(true,true); // posalji event
        
    this._runErrorHost();
    
    return this.errorObject;
}
*/

FM.MlObserver.prototype.isValid = function(force) {
    var rules = this.getAttr("data-fmml-validation-rules",''); 
    var response = true;
    
    if(rules != '') {        
        var value = this.node ? 
        (FM.isset(this.node.value) ? this.node.value : this.node.innerHTML) : ""
        ;
        force = FM.isset(force) ? force : 
            (
                this.getAttr('data-fmml-force-validation','false') == 'true' ? 
                true : false
            );

        if(force || value != "") {
            var allRules = rules != null && rules != '' ? rules.split(";") : [];

            for (var i = 0; i < allRules.length; i++) {
                var invert = false;
                var rule = allRules[i];
                var ruleArr = rule != null && rule != '' ? rule.split("=") : [];
                var ruleOperator = ruleArr.length > 0 ? ruleArr[0] : '';
                var ruleParamStr = ruleArr.length > 1 ? ruleArr[1] : '';
                var ruleParams = ruleParamStr.split(",");
                if(FM.endsWith(ruleOperator,"!")) {
                    ruleOperator = ruleOperator.substring(0,ruleOperator.length -1);
                    invert = true;
                }
                var v = true;
                var fn = FM.MlObserver.getValidationRule(this.getApp(), ruleOperator);
                
                if(fn) {
                    v = fn(this,ruleParams) == (invert ? false : true);
                }
                if(!v) {
                    response = false;
                    break;
                }
            }
        }
    }
    
    if(response){
        $(this.node).removeClass("fmmlInvalidValue");
        this.setLastError(new FM.DmGenericError({
            messageId: '',
            text: ''
        }));
    }else {
        $(this.node).addClass("fmmlInvalidValue"); 
        this.setLastError(new FM.DmGenericError({
            messageId: 'UIVALIDATION',
            text: this.getAttr('data-fmml-validation-message','Invalid value')
        }));
    }
    return response; //no rules
}

FM.MlObserver.prototype.update = function() {
    if(!this.executed) return false;
    
    // sync node with dmobject
    this.setNodeValue();
    
    // notify extensions
    for(var i = 0; i < this.extensions.length; i++) {
        var extObj = this.extensions[i];
        if(FM.isset(extObj.update)) {
            extObj.update(this);
        }
    }
    
    // check if obs is valid
    if(this.isValid()) {
        var hostToRun =  this.getAttr('data-fmml-run-on-update','');
        if(hostToRun != '') {
            var node = document.getElementById(hostToRun);
            if( node && FM.isset(node.fmmlHost) && node.fmmlHost) {
                node.fmmlHost.run(this.getDmObject());
            }
        }
        return true;
    }
    return false;
}

FM.MlObserver.prototype.setValue = function(value) {
    if(!this.executed) return false;
    
    // conf
    var attrname = this.getAttr('data-fmml-attr-name','');
    var host = this.getHost();  
    
    // value
    var dmobj = this.getDmObject();
    if(!dmobj) return false;
    
    // set
    
    dmobj.setAttr(attrname,value,true);
    
    // end
    return true;
}

FM.MlObserver.prototype.getValue = function() {
    // conf
    var attrname = this.getAttr('data-fmml-attr-name','');
    var defval = this.resolveAttrValue('data-fmml-attr-default-value','');
    if(!this.executed) return defval;
    
    // value
    var dmobj = this.getDmObject();
    if(!dmobj) return defval;
    
    // get
    return dmobj.getAttr(attrname,defval);
}


FM.MlObserver.prototype.getNodeValue = function() {
    var value = '';
    if(FM.isset(this.node.value)) {
        value = this.node.value;
    } else if(this.node.nodeName == 'IMG') {
        value = this.node.getAttribute("src");
    } else {
        value = this.node.innerHTML;
    }

    return value;
}

FM.MlObserver.prototype.setNodeValue = function() {
    // conf
    var attrname = this.getAttr('data-fmml-attr-name','');
    if(attrname == '') return;
    
    if(FM.startsWith(this.getAttr('data-fmml-attr-default-value',''),'@')) {
        var sss = 1;
    }
    var defval = this.resolveAttrValue('data-fmml-attr-default-value','');
    
    // value
    var dmobj = this.getDmObject();
    var value = 
    dmobj && attrname != '' ?
    dmobj.getAttr(attrname,'') :
    defval
    ;
    
    // set
    if(FM.isset(this.node.value)) {
        this.node.value = value;
    } else if(this.node.nodeName == 'IMG') {
        this.node.setAttribute("src",value);
    } else {
        this.node.innerHTML = value;
    }
    this.node.fmmlValueSync = value;
    
}

FM.MlObserver.prototype.addExtension = function(extObj) {
    this.extensions.push(extObj);
    if(this.executed) {
        extObj.run(this);
    }
    return true;
}

FM.MlObserver.prototype.removeExtension = function(extObj) {
    for(var i = 0; i < this.extensions.length; i++) {
        if(extObj == this.extensions[i]) {
            if(FM.isset(this.extensions[i].dispose)) {
                this.extensions[i].dispose(this);
            }
            delete this.extensions[i];
            return true;
        }
    }
    return false;
}

FM.MlObserver.prototype.runExtension = function(extObj) {
    if(FM.isset(extObj.run)) {
        extObj.run(this);
    }
}

FM.MlObserver.prototype.getNode = function() {
    return this.node;
}

FM.MlObserver.prototype.getDmObject = function() {
    return(this.getHost()  ? this.getHost().getDmObject(this.node) : null);
/*
    this.setDmObject(
        (this.getHost()  ? this.getHost().getDmObject(this.node) : null),
        false
        );
    return this._super("getDmObject");
     */
}

FM.MlObserver.prototype.getHost = function() {
    if(this.host) return(this.host);
    this.host = FM.MlObserver.findHost(this.node);
    return(this.host);
}

FM.MlObserver.prototype.onHostEvent = function(sender,ev,evdata) {
    if(FM.isset(this[ev])) {
        try {
            this[ev](sender,evdata);
            return true;
        } catch(e) {
            console.log("onHostEvent() error: " + e);
            return true;
        }        
    } else {
        var fnd = false;
        
        // notify extensions
        for(var i = 0; i < this.extensions.length; i++) {
            var extObj = this.extensions[i];
            if(FM.isset(extObj[ev])) {
                try {
                    extObj[ev](sender,evdata);
                } catch(e) {
                    console.log("onHostEvent-ext() error: " + e);             
                }
                fnd = true;
            }
        }
        return fnd;
    }
}


FM.MlObserver.prototype.resolveAttrValue = function(val,defv) {
    val = FM.resolveAttrValue(this.options,val,defv,{
        A: this.getApp(),
        H: this.getHost(),
        O: this,
        D: this.getDmObject()
    });

    return val;
}

// static
FM.MlObserver.className = "MlObserver";
FM.MlObserver.fullClassName = 'lm.MlObserver';

// pronadji u dom tree na dolje node koji ima fmmlDmObject - to je tvoj dm
// vrati null ako ne nadjes
FM.MlObserver.findHost = function(node) {
    return FM.findNodeWithAttr(node,"fmmlHost");
}


FM.MlObserver.observerTypes = {
    GLOBAL: {}
};


FM.MlObserver.addObserver = function(type,fn,appCls) {    
    appCls = FM.isset(appCls) && FM.isString(appCls) && appCls != '' ? appCls : 'GLOBAL';
    if(!FM.isset(fn) || !FM.isFunction(fn)) return false;
    if(!FM.isset(type) || !type || type == '') return false;
    if(!FM.isset(FM.MlObserver.observerTypes[appCls])) {
        FM.MlObserver.observerTypes[appCls]= {};
    }
    
    FM.MlObserver.observerTypes[appCls][type] = fn;
    return true;
}

/**
* Returns MlObserver <b>config</b> class function for <b>config</b> subclass type
* @static
* @function    
* @param {object} app Application
* @param {String} name Configuration name
* @return {object} observer configuration or null if not found
*/   
FM.MlObserver.getConfiguration = function(app,name) {
    var list = FM.MlObserver.observerTypes;

    app = FM.isset(app) && app ? app : null;
    var appCls = app ? app.getSubClassName() : null;
    var appCfg = appCls && FM.isset(list[appCls]) ? list[appCls] : null;
        
    var obj = null;
    if(appCfg && FM.isset(appCfg[name])) {
        obj = appCfg[name];
    } else if(app && FM.isArray(app.applicationObjectsSpace)) {
        FM.forEach(app.applicationObjectsSpace,function(i,ns) {
            if(FM.isset(list[ns]) && FM.isset(list[ns][name])) {
                obj = list[ns][name];
                return false;
            }
            return true;
        });
    }
    
    if(!obj && FM.isset(list['GLOBAL'][name])) {
        obj = list['GLOBAL'][name];
    }
    
    return obj;
}

FM.MlObserver.newObserver = function(app,attrs,node,type) {
    var clsFn = FM.MlObserver.getConfiguration(app,type);
    return clsFn ? new clsFn(app,attrs,node) : null;
}

/**
 * 
 * @namespace
 */
FM.MlObserver.validationRules = {
    GLOBAL: {
        equal: function(observer, ruleParams,cbFn) {
            var value = observer.getValue();
            if(ruleParams.length < 1) return false;
        
            for(var i = 0; i < ruleParams.length; i++) {
                if(FM.startsWith(ruleParams[i],'#')) {
                    if(value != $(ruleParams[i]).val()) return false;
                } else {
                    try {
                        if(value != '' + eval(ruleParams[i])) {
                            return false;
                        }
                    } catch(e) {                            
                        return false;
                    }
                }
            }
        			
            return true;
        },
        empty: function(observer, ruleParams,cbFn) {
            var value = observer.getValue();
            if(value==null || value == '') {
                return true;
            }
            return false;
        },
        validEmail: function(observer, ruleParams,cbFn) {
            var value = observer.getValue();
            if(value==null || value == '') {
                return true;
            }
            
            // check if email address is valid
            return FM.validateEmail(value);
        }
    }
}

FM.MlObserver.getValidationRule = function(app,name) {
    var list = FM.MlObserver.validationRules;

    app = FM.isset(app) && app ? app : null;
    var appCls = app ? app.getSubClassName() : null;
    var appCfg = appCls && FM.isset(list[appCls]) ? list[appCls] : null;
        
    var obj = null;
    if(appCfg && FM.isset(appCfg[name])) {
        obj = appCfg[name];
    } else if(app && FM.isArray(app.applicationObjectsSpace)) {
        FM.forEach(app.applicationObjectsSpace,function(i,ns) {
            if(FM.isset(list[ns]) && FM.isset(list[ns][name])) {
                obj = list[ns][name];
                return false;
            }
            return true;
        });
    }
    
    if(!obj && FM.isset(list['GLOBAL'][name])) {
        obj = list['GLOBAL'][name];
    }
    
    return obj;
}  

FM.MlObserver.addValidationRule = function(name,fn,appCls) {  
    appCls = FM.isset(appCls) && FM.isString(appCls) && appCls != '' ? appCls : 'GLOBAL';
    if(!FM.isset(name) || !name || name == '') return false;
    if(!FM.isset(fn) || !FM.isFunction(fn)) return false;
    if(!FM.isset(FM.MlObserver.validationRules[appCls])) {
        FM.MlObserver.validationRules[appCls]= {};
    }
    FM.MlObserver.validationRules[appCls][name] = fn;
    return true;
}

/**
* Attribute ML observer class. 
* 
* <table>
* <th>List of ML node attributes</th>
* <tr><td>data-fmml-attr-type</td><td>type of attribute (string,number,date)</td></tr>
* <tr><td>data-fmml-date-is-utc</td><td>set true if dates is in UTC</td></tr>
* </table>
* 
* <table>
* <th>List of ML CSS classes</th>
* </table>
*
* @class FM.MlObserverAttribute
* @extends FM.MlObserver
* @param {object} [attrs] DOM node attributes
* @param {DOMnode} node DOM node
*/    
FM.MlObserverAttribute = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(FM.MlObserverAttribute, FM.MlObserver);

// properties
FM.MlObserverAttribute.prototype.lastValue = null;

FM.MlObserverAttribute.prototype._init = function(app,attrs,node) {            
    this._super("_init",app,attrs,node);
    this.objectSubClass ="ObserverAttribute";
}        

FM.MlObserverAttribute.prototype.setNodeValue = function() {
    // conf
    var attrname = this.getAttr('data-fmml-attr-name','');
    var attrtype = this.getAttr('data-fmml-attr-type','string');
    var decplaces = parseInt(this.getAttr('data-fmml-attr-decimals','2'));
    var attrtemplate = this.getAttr('data-fmml-attr-template','');
    var dateIsUtc = this.getAttr('data-fmml-date-is-utc','true') != 'false';
    var dateFormat = this.getAttr('data-fmml-date-display-as','date');
    var defval = this.resolveAttrValue('data-fmml-attr-default-value','');
    var newlntobr = this.resolveAttrValue('data-fmml-attr-newln-br','false');
    var domprop = this.getAttr('data-fmml-observer-dom-property','');
    var dmobj = this.getDmObject();
    
    var alttext = this.getAttr('data-fmml-attr-hover-text','');
        
    // check defval    
    var value = 
        dmobj && attrname != '' ?
        dmobj.getAttr(attrname,'') :
        ''
    ;
    
    if(dmobj && value == '' && defval != '') {
        return dmobj.setAttr(attrname,defval,true);
    }
    
    // value
    if(value == '') value = defval;
    
    if (this.lastValue == value || dmobj == null) return;
    this.lastValue = value;
    
    // dates
    if(attrtype == "date") {
        if(FM.isDateString(value)) {
             var dateObj = FM.parseDateString(value,dateIsUtc);
            if(dateFormat == 'local') {
                value = FM.dateLocalFormat(dateObj);
            } else if(dateFormat == 'date') {
                value = FM.dateFormat(dateObj,'mediumDate');
            } else if(dateFormat == 'datetime') {
                value = FM.dateFormat(dateObj,'mediumDateTime');
            } else if(dateFormat == 'time') {
                value = FM.dateFormat(dateObj,'isoTime');
            } else if(dateFormat == 'ago') {
                value = FM.strTimeBetween(dateObj,new Date());
            } 
        }  
    } else if(attrtype == "number") {
        value = 0.0 + value;
        value = value.toFixed(decplaces);
    }
    if(attrtemplate != "") {
        var app = this.app;
        if (newlntobr == 'true') value = value.replace(/\n/g, "<br />");
        var attrlist = {
            id: value,
            alttext: alttext
        };
        var tname = attrtemplate;
        var me = this;
        
        FM.UtTemplate.getTemplate(app,attrlist,tname,function(isok,templ) {
            if(isok) {
                var tmplstr = FM.applyTemplate(attrlist, templ, false, false);
                var tmplnode = $(tmplstr);
                if(FM.isset(tmplnode[0])) tmplnode = tmplnode[0];

                me.node.innerHTML = '';
                $(me.node).append(tmplnode);
                FM.MlHost.initChildNodes(app, tmplnode);
            }
        });
    
        return;
    }
    // set
    if(domprop !== '') {
        this.node.setAttribute(domprop,value);
    } else if(attrtype == "url") {
        this.node.innerHTML = '';

        if (value != '') {
            var a = document.createElement('a');
            a.setAttribute('href', value);
            a.setAttribute('target', '_blank');
            a.innerText = value;
            
            this.node.appendChild(a);
        }
        else {
            this.node.innerHTML = '&nbsp;';
        }
    } else {    
        if(FM.isset(this.node.value)) {
            this.node.value = value;
        } else if(this.node.nodeName == 'IMG') {
            this.log("Attr (img src):" + value,FM.logLevels.warn);
            this.node.setAttribute("src",value);
        } else if(this.node.nodeName == 'A') {
            this.node.setAttribute("href",value);
        } else {
            if (newlntobr == 'true') value = value.replace(/\n/g, "<br />");
            this.node.innerHTML = value == '' ? '&nbsp;' : value;
        }
        this.node.fmmlValueSync = value;
    }
}


FM.MlObserverAttribute.className = "MlObserverAttribute";
FM.MlObserverAttribute.fullClassName = 'lm.MlObserverAttribute';

FM.MlObserver.addObserver("Attribute",FM.MlObserverAttribute,'GLOBAL');
/**
* Attribute decoration ML observer class. 
* 
* <table>
* <th>List of ML node attributes</th>
* </table>
* 
* @class FM.MlObserverAttributeDecoration
* @extends FM.MlObserver
* @param {object} [attrs] DOM node attributes
* @param {DOMnode} node DOM node
*/    
FM.MlObserverAttributeDecoration = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(FM.MlObserverAttributeDecoration, FM.MlObserver);

FM.MlObserverAttributeDecoration.prototype._init = function(app,attrs,node) {
    this._super("_init",app,attrs,node);
    this.objectSubClass ="ObserverAttributeDecoration";
}        

FM.MlObserverAttributeDecoration.prototype.setNodeValue = function() {
    // conf
    var attrname = this.getAttr('data-fmml-attr-name','');
    var defval = this.getAttr('data-fmml-attr-default-value','');
    
    // value
    var dmobj = this.getDmObject();
    var value = 
        dmobj ?         
        FM.UiItem.getAttributeDecoration(
            dmobj.getSubClassName(),
            attrname
        ) : defval
    ;
    
    // set
    if(FM.isset(this.node.value)) {
        this.node.value = value;
    } else if(this.node.nodeName == 'IMG') {
        this.node.setAttribute("src",value);
    } else {
        this.node.innerHTML = value;
    }   
}

FM.MlObserverAttributeDecoration.className = "MlObserverAttributeDecoration";
FM.MlObserverAttributeDecoration.fullClassName = 'lm.MlObserverAttributeDecoration';

FM.MlObserver.addObserver("AttributeDecoration",FM.MlObserverAttributeDecoration,'GLOBAL');
/**
* Attribute display ML observer class. 
*
* <table>
* <th>List of ML node attributes</th>
* <tr><td>data-fmml-attr-value-visible</td><td>type of attribute (string,number,date)</td></tr>
* <tr><td>data-fmml-attr-value-hidden</td><td>set true if dates is in UTC</td></tr>
* </table>
* 
* @class FM.MlObserverDisplay
* @extends FM.MlObserver
* @param {object} [attrs] DOM node attributes
* @param {DOMnode} node DOM node
*/    
FM.MlObserverDisplay = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(FM.MlObserverDisplay, FM.MlObserver);

FM.MlObserverDisplay.prototype._init = function(app,attrs,node) {            
    this._super("_init",app,attrs,node);
    this.objectSubClass ="ObserverDisplay";
}        


FM.MlObserverDisplay.prototype.evalCondition = function(dmobj,v) {
    var ok = false;
    
    // if condition is undefined
    if(!FM.isset(v) || v == '' || !v) return ok;
    
    // prop or function in dmobject
    if(dmobj && FM.isset(dmobj[v])) { 
        if(FM.isFunction(dmobj[v])) {
            ok = dmobj[v]();
        } else {
            ok = dmobj[v];
        }
    } else if(dmobj && dmobj.isAttr(v)) { // attr in dmobject
        ok = dmobj.getAttr(v,false);
    } else {
        // eval value
        ok = this.resolveAttrValue("-",v);
    }

    // end
    return FM.isset(ok) && ok != null && ok != '' && ok != false && ok != 'false';    
}

FM.MlObserverDisplay.prototype.evalCondition__old = function(dmobj,v) {
    var ok = false;
    
    if(!dmobj || !FM.isset(v) || v == '' || !v) return ok;
    
    if(dmobj && FM.isset(dmobj[v])) { // ako je fn ili prop u obj
        if(FM.isFunction(dmobj[v])) {
            ok = dmobj[v]();
        } else {
            ok = dmobj[v];
        }
    } else if(dmobj && dmobj.isAttr(v)) {
        ok = dmobj.getAttr(v,false);
    } else {
        // eval
        ok = this.resolveAttrValue("-",v);
    }

    // end
    return FM.isset(ok) && ok != null && ok != '' && ok != false;    
}

FM.MlObserverDisplay.prototype.setNodeValue = function() {
    var visible = null;
    var visibilityCheck = this.getAttr('data-fmml-attr-value-visible','');    
    if(visibilityCheck != '') {
        visible = this.evalCondition(this.getDmObject(),visibilityCheck);
    } else {
        visibilityCheck = this.getAttr('data-fmml-attr-value-hidden','');
        if(visibilityCheck != '') {
            visible = !this.evalCondition(this.getDmObject(),visibilityCheck);
        }
    }
    
    // set
    if(this.getAttr('data-fmml-attr-name','') != '') {
        var value = this.getValue();
    
        if(FM.isset(this.node.value)) {
            this.node.value = value;
        } else if(this.node.nodeName == 'IMG') {
            this.node.setAttribute("src",value);
        } else {
            this.node.innerHTML = value;
        }
    }
    
    // show & hide
    if(visible) {
        $(this.node).show();
    } else {
        $(this.node).hide();
    }
    
}

FM.MlObserverDisplay.className = "MlObserverDisplay";
FM.MlObserverDisplay.fullClassName = 'lm.MlObserverDisplay';

FM.MlObserver.addObserver("Display",FM.MlObserverDisplay,'GLOBAL');
/**
* Event ML observer class. Sends event to host.
* 
* Applicable on HTML nodes with <click> event.
* 
* <table>
* <th>List of ML node attributes</th>
* <tr><td>data-fmml-dom-event</td><td>DOM event which trigger FM event. Default is <click> event</td></tr>
* <tr><td>data-fmml-event-type</td><td>type (name) of event</td></tr>
* <tr><td>data-fmml-event-host</td><td>DOM node id of host which will receive event instead of default host</td></tr>
* <tr><td>data-fmml-event-data</td><td>instead current host dmObject send FM.GenericValue object with this value</td></tr>
* <tr><td>data-fmml-verify-observers</td><td>verify all observers first</td></tr>
* <tr><td>data-fmml-event-async</td><td>Signals that event is async (AJAX request wil be triggered)</td></tr>
* <tr><td>data-fmml-exec-on-success</td><td>code to exec when event is successfully completed</td></tr>
* <tr><td>data-fmml-exec-on-error</td><td>code to exec when event error occurred</td></tr>
* <tr><td>data-fmml-redirect-on-success</td><td>redirect to specified URL when event is successfully completed</td></tr>
* <tr><td>data-fmml-redirect-on-error</td><td>redirect to specified URL when event error occurred</td></tr>
* <tr><td>data-fmml-run-on-success</td><td>run host on DOM node with specified id when event is successfully completed</td></tr>
* <tr><td>data-fmml-run-on-error</td><td>run host on DOM node with specified id when event error occurred</td></tr>
* <tr><td>data-fmml-send-form</td><td>send form on host node to URL specified in data-fmml-redirect-on-success node attribute. Host node type must be <FORM></td></tr>

* </table>
* 
* <table>
* <th>List of ML CSS classes</th>
* <tr><td>fmmlWaitButton</td><td>Async event is in progress</td></tr>
* </table>
* 
* @class FM.MlObserverEvent
* @extends FM.MlObserver
* @param {object} [attrs] DOM node attributes
* @param {DOMnode} node DOM node
*/    
FM.MlObserverEvent = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(FM.MlObserverEvent, FM.MlObserver);

FM.MlObserverEvent.prototype._init = function(app,attrs,node) {
    this._super("_init",app,attrs,node);
    this.objectSubClass ="ObserverEvent";

    this.eventHost = null;
    this.eventHostNode = null;
}


FM.MlObserverEvent.prototype.run = function() {
    this._super("run");
    
    var me = this;
    
    // dom event
    var evtrigger = this.getAttr('data-fmml-dom-event','click');

    $(this.node)[evtrigger](function(event) {
        event.preventDefault();
        
        // blur form change processing (bad, bad, bad)
        if(document.activeElement != this) { // this -> ev node
            document.activeElement.blur();
        }
        
        // my host & host node
        var myhost = me.getHost();
        var myhostnode = myhost ? myhost.getNode() : null;
        
        // obs verify
        if(myhost && me.getAttr('data-fmml-verify-observers','false') == 'true') {
            if(!myhost.verifyAllObservers(true)) {
                me.setLastError(new FM.DmGenericError({
                    messageId: 'UIVALIDATION',
                    text: 'Please enter all required fields'
                }));
                return false; // force validation of empty attributes
            }
        }
        
        // event host
        me.eventHost = null;
        me.eventHostNode = null;
        var evhostid = me.getAttr('data-fmml-event-host','');
        if(evhostid != '') {
            if(evhostid == 'parent' && myhostnode) {
                me.eventHostNode = FM.findNodeWithAttr(myhostnode.parentNode, "fmmlHost");
            } else {
                me.eventHostNode = FM.getNodeWithId(evhostid);
            }
            if (me.eventHostNode != null) {
                me.eventHost = FM.isset(me.eventHostNode.fmmlHost) ? me.eventHostNode.fmmlHost : null;
            }
            if(me.eventHost == null) me.eventHostNode = null;            
        } else {
            me.eventHost = myhost;    
            me.eventHostNode = myhostnode;    
        }
    
        // data to send
        var evdmobj = null;
        var evdata = me.getAttr('data-fmml-event-data','');
        if(evdata != '') {
            if(FM.startsWith(evdata,'@')) {
                evdata = me.resolveAttrValue("-",evdata);
            } 
            evdmobj = FM.isset(evdata) && evdata && FM.isset(evdata.getAttr) ? evdata : new FM.DmGenericValue({
                value: evdata
            });            
        } else {
            evdmobj = me.getDmObject();
        }

        // event to send
        var ev = me.getAttr('data-fmml-event-type','');
        
        // we are now ready to send
        if(ev && ev != '') {
            // set async class
            if(me.getAttr('data-fmml-event-async','false') === 'true') {
                $(me.node).addClass("fmmlWaitButton");
            }
            
            // clear old success & error hosts
            me._runHostOnNode(document.getElementById(me.getAttr('data-fmml-run-on-success','')),null);
            me._runHostOnNode(document.getElementById(me.getAttr('data-fmml-run-on-error','')),null);
            
            // send event
            console.log(
                "Event: send event:" + ev + "/" + (
                evdmobj ? evdmobj.getSubClassName() : "[null]") + ":" + (evdmobj ? evdmobj.getID() : "[null]")
            );
            me.eventHost.onEvent(me,ev,{
                object: evdmobj,
                callback: function(isok, o) {
                    me.eventCallback(isok, o);
                }
            });
        } else {
            me.eventCallback(true, null);
        }
        return false;
    });
}
 
FM.MlObserverEvent.prototype._runHostOnNode = function(hostnode,dmobj) {
    if(FM.isset(hostnode) && hostnode && FM.isset(hostnode.fmmlHost) && hostnode.fmmlHost) {
        hostnode.fmmlHost.run(dmobj);
    }
}

FM.MlObserverEvent.prototype._redirectToPage = function(url,dmobj) {
    var redirApl = FM.isset(url) && url && url != '' ?
         this.resolveAttrValue('-',FM.isset(dmobj) && dmobj ? FM.applyTemplate(dmobj.getAttr(),url) : url) : 
        ''
    ;
    window.location = redirApl;
}

FM.MlObserverEvent.prototype._sendFormToPage = function(url,dmobj) {
    if(!this.eventHost || !FM.isset(this.eventHostNode.submit)) return;
    
    var redirApl = FM.isset(url) && url && url != '' ?
         this.resolveAttrValue('-',FM.isset(dmobj) && dmobj ? FM.applyTemplate(dmobj.getAttr(),url) : url) : 
        ''
    ;
    
    this.eventHostNode.action = redirApl;
    this.eventHostNode.submit();    
}
            
FM.MlObserverEvent.prototype._execCode = function(code,dmobj) {
    try {
        console.log("event-exec-on:" + code);
        var val = FM.resolveAttrValue(this.options,"-", code,{
            A: this.getApp(),
            H: this.getHost(),
            O: this,
            D: dmobj
        });
        console.log("event-run:" + val);        
    } catch(e) {
        console.log("event-exec-on err: " + e);                    
    }
}

FM.MlObserverEvent.prototype.eventCallback = function(isok,oResponse) {
    // remove async class 
    $(this.node).removeClass("fmmlWaitButton");

    // exec
    var code = isok ?
        this.getAttr('data-fmml-exec-on-success','') :
        this.getAttr('data-fmml-exec-on-error','')
    ;
    if(code != '') {
        this._execCode(code,oResponse);
    }
    
    // host run
    var hostid = isok ?
        this.getAttr('data-fmml-run-on-success','') :
        this.getAttr('data-fmml-run-on-error','')
    ;
    if(hostid != '') {
        this._runHostOnNode(document.getElementById(hostid),oResponse);
    }        

    // redirect
    var redir = isok ?
        this.getAttr('data-fmml-redirect-on-success','') :
        this.getAttr('data-fmml-redirect-on-error','')
    ;
    if(redir != '') {
        if(this.getAttr('data-fmml-send-form','false') == 'true') {
            this._sendFormToPage(redir,oResponse);
        } else{
            this._redirectToPage(redir,oResponse);
        }
    }
}

FM.MlObserverEvent.className = "MlObserverEvent";
FM.MlObserverEvent.fullClassName = 'lm.MlObserverEvent';

FM.MlObserver.addObserver("Event",FM.MlObserverEvent,'GLOBAL');
/**
* List remote call state ML observer class for {@link FM.MlHostGenericList} host. 
* 
* @class FM.MlObserverListState
* @extends FM.MlObserver
* @param {object} [attrs] DOM node attributes
* @param {DOMnode} node DOM node
*/ 
FM.MlObserverListState = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(FM.MlObserverListState, FM.MlObserver);

FM.MlObserverListState.prototype._init = function(app,attrs,node) {            
    this._super("_init",app,attrs,node);
    this.objectSubClass ="ObserverListState";
}        

FM.MlObserverListState.prototype.update = function() {            
}        

FM.MlObserverListState.prototype.onListStart = function() {
    $(this.node).removeClass("fmmlInactiveState");
    $(this.node).addClass("fmmlWaitState");
}

FM.MlObserverListState.prototype.onListEnd = function() {
    $(this.node).removeClass("fmmlWaitState");
    $(this.node).addClass("fmmlInactiveState");
}

FM.MlObserverListState.prototype.onListError = function() {
    $(this.node).removeClass("fmmlWaitState");
    $(this.node).addClass("fmmlInactiveState");
}

FM.MlObserverListState.className = "MlObserverListState";
FM.MlObserverListState.fullClassName = 'lm.MlObserverListState';

FM.MlObserver.addObserver("ListState",FM.MlObserverListState,'GLOBAL');
/**
* List index ML observer class for {@link FM.MlHostGenericList} host. 
* 
* @class FM.MlObserverListIndex
* @extends FM.MlObserver
* @param {object} [attrs] DOM node attributes
* @param {DOMnode} node DOM node
*/ 
FM.MlObserverListIndex = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(FM.MlObserverListIndex, FM.MlObserver);

FM.MlObserverListIndex.prototype._init = function(app,attrs,node) {            
    this._super("_init",app,attrs,node);
    this.objectSubClass ="ObserverListIndex";
}        

FM.MlObserverListIndex.prototype.setNodeValue = function() {
    var me = this;
    var value = '';
    
    // get dmobj && dmlist
    var dmobj = this.getDmObject();
    var host = this.getHost();                
    var dmlist = host ? host.getDmObject(null) : null;
    
    if(
        dmobj && dmlist && 
        host && FM.isset(host.cursorStartIndex) && 
        FM.isset(this.node) && FM.isset(this.node.fmmlObserverListIndex)
    ) {
        value = this.node.fmmlObserverListIndex + host.cursorStartIndex + 1;
        value = '' + value;
    }
        
    if(FM.isset(this.node.value)) {
        this.node.value = value;
    } else if(me.node.nodeName == 'IMG') {
        me.node.setAttribute("src",value);
    } else {
        me.node.innerHTML = value;
    }
}


FM.MlObserverListIndex.className = "MlObserverListIndex";
FM.MlObserverListIndex.fullClassName = 'lm.MlObserverListIndex';

FM.MlObserver.addObserver("ListIndex",FM.MlObserverListIndex,'GLOBAL');
/**
* List selection ML observer class for {@link FM.MlHostGenericList} host. 
* 
* @class FM.MlObserverListSelection
* @extends FM.MlObserver
* @param {object} [attrs] DOM node attributes
* @param {DOMnode} node DOM node
*/ 
FM.MlObserverListSelection = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(FM.MlObserverListSelection, FM.MlObserver);  

FM.MlObserverListSelection.prototype._init = function(app,attrs,node) {            
    this._super("_init",app,attrs,node);
    this.objectSubClass ="ObserverListSelection";
    
    var me = this;
    $(this.node).click(function(event) {
        var host = me.getHost();                
        var dmobj = me.getDmObject();
        if(dmobj && FM.isset(host.isSelected)) {
            host.onEvent(
                me,
                host.isSelected(dmobj) ? "onDeselected" : "onSelected", 
                {object: dmobj}
            );
        }
        return true;
    });
}

FM.MlObserverListSelection.prototype.setNodeValue = function() {
    // provjeri
    var host = this.getHost();                
        
    // get dmobj && dmlist
    var dmobj = this.getDmObject();
    var issel = dmobj && FM.isset(host.isSelected) ?  host.isSelected(dmobj) : false;
    if(FM.isset(this.node.checked)) {
        if(this.node.checked != issel) this.node.checked = issel;
    } 
    
    if(issel) {
        $(this.node).closest(".fmmlClsListRowWrapper").addClass("fmmlSelected");
    } else {
        $(this.node).closest(".fmmlClsListRowWrapper").removeClass("fmmlSelected");
    }
}


FM.MlObserverListSelection.className = "MlObserverListSelection";
FM.MlObserverListSelection.fullClassName = 'lm.MlObserverListSelection';

FM.MlObserver.addObserver("ListSelection",FM.MlObserverListSelection,'GLOBAL');
/**
* List order ML observer class for {@link FM.MlHostGenericList} host. 
* 
* @class FM.MlObserverListOrder
* @extends FM.MlObserver
* @param {object} [attrs] DOM node attributes
* @param {DOMnode} node DOM node
*/ 
FM.MlObserverListOrder = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(FM.MlObserverListOrder, FM.MlObserver);

FM.MlObserverListOrder.prototype._init = function(app,attrs,node) {            
    this._super("_init",app,attrs,node);
    this.objectSubClass ="ObserverListOrder";
    
    var me = this;
    $(this.node).click(function(event) { 
        event.preventDefault();
        var dmobj = me.getDmObject();
        if(dmobj) {
            var attrname = me.getAttr('data-fmml-attr-name',''); // mine attr
            var orderAttrname = me.getAttr('data-fmml-order-attr-name','order_attr'); // attr to set order (put attrname here)
            var orderDir = me.getAttr('data-fmml-order-dir-attr-name','order'); // order dir attr (ASC/DESC)
            var curOrderAtrr = dmobj.getAttr(orderAttrname,'');
            var curOrderDir = dmobj.getAttr(orderDir,'ASC');
            if(curOrderAtrr == attrname) {
                dmobj.setAttr(orderDir, curOrderDir == 'DESC' ? 'ASC' : 'DESC',true);
            } else {
                var attrs = {};
                attrs[orderAttrname] = attrname;
                attrs[orderDir] = 'ASC';
                dmobj.setAttr(null,attrs,true);                
            }
        }
    });
}        

FM.MlObserverListOrder.prototype.setNodeValue = function() {    
    // provjeri
    var attrname = this.getAttr('data-fmml-attr-name',''); // mine attr
    var orderAttrname = this.getAttr('data-fmml-order-attr-name','order_attr'); // attr to set order (put attrname here)
    var orderDir = this.getAttr('data-fmml-order-dir-attr-name','order'); // order dir attr (ASC/DESC)
    var dmobj = this.getDmObject();
    if(dmobj && attrname != '') {
        var curOrderAttr = dmobj.getAttr(orderAttrname,'');
        var curOrderDir = dmobj.getAttr(orderDir,'ASC');
        if(curOrderAttr == attrname) {
            if(curOrderDir == 'DESC') {
                $(this.node).removeClass("fmmlOrderAsc");
                $(this.node).addClass("fmmlOrderDesc");
            } else {
                $(this.node).addClass("fmmlOrderAsc");
                $(this.node).removeClass("fmmlOrderDesc");                
            }
        } else {
            $(this.node).removeClass("fmmlOrderAsc");
            $(this.node).removeClass("fmmlOrderDesc");            
        }
    }
}


FM.MlObserverListOrder.className = "MlObserverListOrder";
FM.MlObserverListOrder.fullClassName = 'lm.MlObserverListOrder';

FM.MlObserver.addObserver("ListOrder",FM.MlObserverListOrder,'GLOBAL');
/**
* Basic ML extensions class. 
* 
* @class FM.MlExtension
* @extends FM.Object
 * @param {object} [attrs] DOM node attributes
 * @param {DOMnode} node DOM node
*/
FM.MlExtension = function() {
    this._init.apply(this, arguments); // new poziva _init()
}

FM.extendClass(FM.MlExtension,FM.Object); 

// properties
FM.MlExtension.prototype.objectSubClass = "";
FM.MlExtension.prototype.node = null;
FM.MlExtension.prototype.executed = false;
FM.MlExtension.prototype.observer = null;

// methods
FM.MlExtension.prototype._init = function(attrs,node) {
    this._super("_init",attrs);
    this.objectSubClass = "MlExtension";
    this.node = node;
    this.executed = false;    
}

FM.MlExtension.prototype.run = function(obs) {
    //this.dispose(obs);
    this._super("run");
    this.observer = obs;
    this.executed = true;
}

FM.MlExtension.prototype.dispose = function(obs) {
    this._super("dispose");
    this.executed = false;
}

FM.MlExtension.prototype.update = function(obs) {
    this._super("update");
}

FM.MlExtension.prototype.getObserver = function() {
    return this.observer;
}

FM.MlExtension.prototype.getHost = function() {
    return this.observer ? this.observer.getHost() : null;
}

// static
FM.MlExtension.className = "MlExtension";
FM.MlExtension.fullClassName = 'gui.MlExtension';


FM.MlExtension.extensionTypes = {
    GLOBAL: {}
};

FM.MlExtension.addExtensionType = function(type,fn,appCls) {    
    if(!FM.isset(fn) || !FM.isFunction(fn)) return false;
    appCls = FM.isset(appCls) && FM.isString(appCls) && appCls != '' ? appCls : 'GLOBAL';
    if(!FM.isset(FM.MlExtension.extensionTypes[appCls])) {
        FM.MlExtension.extensionTypes[appCls]= {};
    }
    
    FM.MlExtension.extensionTypes[appCls][type] = fn;
    return true;
}



/**
* Returns MlExtension <b>config</b> class function for <b>config</b> subclass type
* @static
* @function    
* @param {object} app Application
* @param {String} name Configuration name
* @return {object} extension configuration or null if not found
*/   
FM.MlExtension.getConfiguration = function(app,name) {
    var list = FM.MlExtension.extensionTypes;

    app = FM.isset(app) && app ? app : null;
    var appCls = app ? app.getSubClassName() : null;
    var appCfg = appCls && FM.isset(list[appCls]) ? list[appCls] : null;
        
    var obj = null;
    if(appCfg && FM.isset(appCfg[name])) {
        obj = appCfg[name];
    } else if(app && FM.isArray(app.applicationObjectsSpace)) {
        FM.forEach(app.applicationObjectsSpace,function(i,ns) {
            if(FM.isset(list[ns]) && FM.isset(list[ns][name])) {
                obj = list[ns][name];
                return false;
            }
            return true;
        });
    }
    
    if(!obj && FM.isset(list['GLOBAL'][name])) {
        obj = list['GLOBAL'][name];
    }
    
    return obj;
}

FM.MlExtension.newExtension = function(app,attrs,node,type) {
    var clsFn = FM.MlExtension.getConfiguration(app,type);
    return clsFn ? new clsFn(attrs,node) : null;
}
/**
* ML attribute edit extensions class. 
* 
* @class FM.MlAttributeEdit
* @extends FM.MlExtension
 * @param {object} [attrs] DOM node attributes
 * @param {DOMnode} node DOM node
*/
FM.MlAttributeEdit = function() {
    this._init.apply(this, arguments); // new poziva _init()
}

FM.MlAttributeEdit.prototype.triggerEvent = null;
FM.MlAttributeEdit.prototype.editWidget = null;

// methods
FM.MlAttributeEdit.prototype._init = function(attrs,node) {
    this._super("_init",attrs,node);
    this.objectSubClass = "MlAttributeEdit";
    this.triggerEvent = null;
    this.editWidget = null;    
}
FM.extendClass(FM.MlAttributeEdit,FM.MlExtension); 

// properties
FM.MlAttributeEdit.prototype.objectSubClass = "";

// methods
FM.MlAttributeEdit.prototype._cleanup = function(obs) {
    if(FM.isset(this.timer) && this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
    }
    
    if(this.editWidget) {
        this.editWidget.unbind(this.triggerEvent);
        this.triggerEvent = null;
        $(this.node).unbind('click');
        $(obs.node).html("");
        this.editWidget = null;
    } else {
        if(this.triggerEvent) {
            $(this.node).unbind(this.triggerEvent);
            this.triggerEvent = null;
        }        
    }    
}

FM.MlAttributeEdit.prototype.run = function(obs) {
    this._cleanup(obs);
    this._super("run",obs);
    
    var domnode = this.node;
    this.triggerEvent = obs.getAttr('data-fmml-update-condition','blur');
    if(!FM.isset($(domnode)[this.triggerEvent])) {
        this.triggerEvent = 'blur';
    }
    this.editWidget = null;
    var me = this;
    if(domnode.nodeName == 'INPUT' || domnode.nodeName == 'TEXTAREA') {    
        $(domnode)[this.triggerEvent]/*.change | blur*/(function() {
            var value = 
                $(this).is(':checkbox') ?
                ($(this).is(":checked") ? 'true' : 'false'):
                $(this).val()
            ;   
            var savevalue = value;
            var obs = domnode.fmmlObserver;

            $(domnode).html("");
            $(domnode).text(value);

            if(obs && obs.getDmObject()) {
                var attr = obs.getAttr('data-fmml-attr-name','');
                var vtype = obs.getAttr('data-fmml-attr-type','string');                   
                var dmobj = obs.getDmObject();

                if(vtype == 'date') {
                    var isutc = obs.getAttr('data-fmml-date-is-utc','true') != 'false';
                    savevalue = FM.dateToString(FM.parseLocalDateString(value),isutc);
                }

                if(FM.isset(attr) && attr && attr != '') {
                    dmobj.setAttr(attr,savevalue,true);
                }
            }
            return true;
        }); 
        if(obs.getAttr('data-fmml-attr-value-from-dom','false') == 'true') {
            this.timer = window.setInterval(function() {
                if(FM.isset(domnode.fmmlValueSync) && obs.getNodeValue() != domnode.fmmlValueSync) {
                    var attr = obs.getAttr('data-fmml-attr-name','');
                    var dmobj = obs.getDmObject();
                    dmobj.setAttr(attr,obs.getNodeValue(),true);
                }
            },300);
        }
        
    } else if(domnode.nodeName == 'SELECT') {
        $(domnode)[this.triggerEvent]/*.change | blur*/(function() {
            var value = $(this).val();
            var savevalue = value;             
            var obs = domnode.fmmlObserver;

            if(obs && obs.getDmObject()) {
                var attr = obs.getAttr('data-fmml-attr-name','');
                var vtype = obs.getAttr('data-fmml-attr-type','string');                      
                var dmobj = obs.getDmObject();
                if(vtype == 'date') {
                    var isutc = obs.getAttr('data-fmml-date-is-utc','true') != 'false';
                    savevalue = FM.dateToString(FM.parseLocalDateString(value),isutc);
                }
                if(FM.isset(attr) && attr && attr != '') {
                    dmobj.setAttr(attr,savevalue,true);
                }
            }
            return true;
        });
    } else {
        var edittype = obs.getAttr('data-fmml-attr-edittype','input');
        
        if (edittype == 'textarea') {
            this.editWidget = $("<textarea class='fmmlValueInput'></textarea>");    
        }
        else {
            this.editWidget = $("<input type='text' class='fmmlValueInput'>");
        }
        
        
        $(domnode).click(function() {
            var value = $(this).val();
            var savevalue = value;                      
            var obs = domnode.fmmlObserver;
            if(!obs || !obs.getDmObject()) {
                return true;
            }
            if($(this).children().length < 1) {
                var val = $(this).text();

                if (me.editWidgetAdded != true) {
                    me.editWidget.hide();
                    $(this).after(me.editWidget);    
                }
                $(this).hide();
                
                if (edittype == 'textarea') {
                    me.editWidget.text(val);
                }
                else {
                    me.editWidget.val(val);
                }
            
                if (me.editWidgetAdded != true) {
                    me.inputAdded(obs);        
                }
            };
            me.editWidget.show();
            me.editWidget.focus();
            me.editWidgetAdded = true;
            /*
            var defevobsnodeid = me.getAttr('data-fmml-update-def-event-observer','');            
            if(defevobsnodeid != '') me.editWidget.keypress(function(e) {                
                if(e.keyCode == 13) {
                    me.editWidget[me.triggerEvent]();
                    $('#' + defevobsnodeid).click();             
                }
            });*/
            
            me.editWidget[me.triggerEvent]/*.change | blur*/(function() {
                var value = $(this).val();
                var savevalue = value;             

                $(domnode).text(value);
                $(this).hide();
                $(domnode).show();
                var obs = domnode.fmmlObserver;

                if(obs && obs.getDmObject()) {

                    var attr = obs.getAttr('data-fmml-attr-name','');
                    var vtype = obs.getAttr('data-fmml-attr-type','string');                      
                    var dmobj = obs.getDmObject();
                    if(vtype == 'date') {
                        var isutc = obs.getAttr('data-fmml-date-is-utc','true') != 'false';
                        savevalue = FM.dateToString(FM.parseLocalDateString(value),isutc);
                    }

                    if(FM.isset(attr) && attr && attr != '') {
                        dmobj.setAttr(attr,savevalue,true);
                    }
                }

                return false;
            });

            return false;
        });
    }
        
}

FM.MlAttributeEdit.prototype.dispose = function(obs) {
    this._cleanup(obs);
    
    this._super("dispose");
    this.executed = false;
}

FM.MlAttributeEdit.prototype.inputAdded = function(obs) {
    }

// static
FM.MlAttributeEdit.className = "MlAttributeEdit";
FM.MlAttributeEdit.fullClassName = 'gui.MlAttributeEdit';

FM.MlExtension.addExtensionType('MlAttributeEdit', FM.MlAttributeEdit);

// temp !FIX!
FM.MlExtension.addExtensionType('MlExAttributeEdit', FM.MlAttributeEdit);


/**
* ML date attribute edit extensions class. 
* 
* @class FM.MlDateAttributeEdit
* @extends FM.MlExtension
 * @param {object} [attrs] DOM node attributes
 * @param {DOMnode} node DOM node
*/
FM.MlDateAttributeEdit = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(FM.MlDateAttributeEdit,FM.MlExtension); 

// properties
FM.MlDateAttributeEdit.prototype.objectSubClass = "";
FM.MlDateAttributeEdit.prototype.appListener = null;

// methods
FM.MlDateAttributeEdit.prototype.run = function(obs) {
    Date.format="yyyy-mm-dd";
    var domnode = obs.getNode();
    
    this._super("run",obs);
    
    $(domnode).datePicker({
        clickInput: true            
    }).bind('dateSelected',function(e, selectedDate){
        $(this).dpClose();
        var obs = domnode.fmmlObserver;
        if(obs && obs.getDmObject()) {
            var dmobj = obs.getDmObject();
            var attr = obs.getAttr('data-fmml-attr-name','');
            if(attr != '') {
                dmobj.setAttr(
                    attr,FM.dateToString(
                        selectedDate,
                        obs.getAttr('data-fmml-date-is-utc','true') != 'false'
                        ),
                    true
                    );
            }
        }
    });
}



FM.MlExtension.addExtensionType('MlDateAttributeEdit', FM.MlDateAttributeEdit);
/**
* ML waternark extensions class. 
* 
* @class FM.MlWatermark
* @extends FM.MlExtension
 * @param {object} [attrs] DOM node attributes
 * @param {DOMnode} node DOM node
*/
FM.MlWatermark = function() {
    this._init.apply(this, arguments); // new poziva _init()
}

FM.extendClass(FM.MlWatermark,FM.MlExtension); 

// properties
FM.MlWatermark.prototype.objectSubClass = "";

// methods
FM.MlWatermark.prototype.run = function(obs) {
    this._super("run",obs);
    var attr = $(this.node).attr('data-fmml-watermark-value');

    if(this.node.nodeName == 'INPUT' || this.node.nodeName == 'TEXTAREA') {
        $(this.node).watermark(attr);
    } 
}

// static
FM.MlWatermark.className = "MlWatermark";
FM.MlWatermark.fullClassName = 'gui.MlWatermark';

FM.MlExtension.addExtensionType('MlWatermark', FM.MlWatermark);


/**
* ML menu edit extensions class. 
* 
* @class FM.MlMenu
* @extends FM.MlExtension
* @param {object} [attrs] DOM node attributes
* @param {DOMnode} node DOM node
*/
FM.MlMenu = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(FM.MlMenu,FM.MlExtension);

FM.MlMenu.prototype._init = function(attrs,node) {
    this._super("_init",attrs,node);
    this.objectSubClass = "MlMenu";
    this.dmlist = null;
    this.active = false;
    this.lastListArguments = null;
    this.lastListDmObject = null;
    this._initMenu();
}


/*
 * data-fmml-list               - dm list conf
 * data-fmml-list-id-attr       - list attr which correspond to attr of observer
 * data-fmml-list-id            - menu id attr
 * data-fmml-list-text-attr     - menu text attr
 * data-fmml-list-def-selected  - menu def value
 * data-fmml-list-def-selected-attr -
 * data-fmml-list-allow-null    - add empty row in menu
 * data-fmml-list-depends-of    - list of host attributes to send
 */

// methods

FM.MlMenu.prototype.run = function(obs) {
    this._super("run",obs);
    
    var me = this;
    var _obs = obs;
        
    if(me.node != me.listNode) {
        $(_obs.node).click(function() {
            // first call
            if(!me.lastListArguments) me._createMenu(_obs);

            return true;
        });
    } else {
        me._createMenu(_obs);
    }
}

FM.MlMenu.prototype.dispose = function(obs) {
    this._disposeMenu();
    if(this.listNode) $(this.listNode).unbind();
    this._super("dispose");
    this.executed = false;
}

FM.MlMenu.prototype.update = function(obs) {
    this._super("update",obs);
    
    var dmobj = obs.getDmObject();
    var createNew = this.active;
    
    if(this._checkDepedOfChanged(obs)) {
        this._disposeMenu(obs);
    }
    
    var deps = this._checkDepedOf(obs);
    if(deps.ok && createNew) {
        this._createMenu(obs);
    }

    if(
        !deps.ok &&
        dmobj && 
        this._dependsOf && 
        this._dependsOf.length > 0
        ) {
        var attr = obs.getAttr('data-fmml-attr-name','');
        if(attr != '') dmobj.setAttr(attr,'',true);
    }
}

// private
FM.MlMenu.prototype._initMenu = function() {
    console.log("Init menu1: " + this.getAttr('data-fmml-list',''));

    if(this.dmlist != null) return;
    
    this.lastListArguments = null;
    this.lastListDmObject = null;
    
    var selectId = 'selectitem' + this.getID();
    var visibleOptions = $(this.node).attr('data-fmml-list-size');
    visibleOptions = FM.isset(visibleOptions) && visibleOptions > 1 ? visibleOptions : 1;
    
    if(this.node.nodeName != 'SELECT') {
        this.listNode = $(
            '<select id="' + selectId + '"' + 
            (visibleOptions > 1 ? 'size="' + parseInt(visibleOptions) + '" ' : '') +
            ' class="fmmlMenuExtension fmmlValueMenuInactive"></select>'
            );
        $(this.node).addClass("fmmlValueMenuActive");    
        $(this.node).after(this.listNode);
    } else {
        this.listNode = this.node;
        $(this.node).addClass("fmmlValueMenuActive");
    }
    var me = this;
    
    $(this.listNode).blur(function() {
        me._hideMenu();
        return true;
    });

    $(me.node).focus(function() {        
        me._showMenu();
        return true;
    });
    console.log("Init menu2: " + this.getAttr('data-fmml-list',''));
}

// clear options list
FM.MlMenu.prototype._disposeMenu = function() {
    console.log("Dispose menu1: " + this.getAttr('data-fmml-list',''));
    this._hideMenu();
    this.lastListArguments = null;
    this.lastListDmObject = null;
    if(this.listNode && this.listNode != this.node) {
        //        $(this.listNode).unbind();
        $(this.listNode).empty();
    //        $(this.listNode).remove();
    //        this.listNode = null;        
    }
    console.log("Dispose menu2: " + this.getAttr('data-fmml-list',''));
}

FM.MlMenu.prototype._dependsOf = null;

FM.MlMenu.prototype._checkDepedOf = function(obs) {
    var i;
    
    if(this._dependsOf == null) {
        var dependsOfStr = obs.getAttr('data-fmml-list-depends-of','');
        this._dependsOf = dependsOfStr == '' ? [] : dependsOfStr.split(',');
    }
    var listOpt =  {};
    var dmobj = obs.getDmObject();
    var depok = true;
    for(i = 0; i < this._dependsOf.length; i++) {
        listOpt[this._dependsOf[i]] = dmobj ? dmobj.getAttr(this._dependsOf[i],'') : '';
        if(listOpt[this._dependsOf[i]] == '') {
            depok = false;
        }
    }    
    return {
        ok: depok, 
        args: listOpt
    };
}

FM.MlMenu.prototype._checkDepedOfChanged = function(obs) {
    // menu is not created yet
    if(this.lastListArguments == null) return false;
    
    // if dependsof attrs are not collected 
    if(this._dependsOf == null) {
        var dependsOfStr = obs.getAttr('data-fmml-list-depends-of','');
        this._dependsOf = dependsOfStr == '' ? [] : dependsOfStr.split(',');
    }
    
    // if dmobject is changed
    var dmobj = obs.getDmObject();
    if(
        !this.lastListDmObject || 
        this.lastListDmObject != dmobj
        ) {
        return true;
    }

    // check attributes
    var i;
    var depok = false;
    for(i = 0; i < this._dependsOf.length; i++) {        
        if(
            FM.getAttr(this.lastListArguments,this._dependsOf[i],'') 
            != 
            dmobj.getAttr(this._dependsOf[i],'')
            ) {
            depok = true;
            break;
        }
    }
    
    // end
    return(depok);
}

// fill options list
FM.MlMenu.prototype._createMenu = function(obs) {
    console.log("Create menu1: " + this.getAttr('data-fmml-list',''));
    if(!obs || this.dmList) return false;
    this.dmList = 1; // hack da ne uelti tko
    var depOpt =  this._checkDepedOf(obs);
    var listOpt = depOpt.args;
    this.lastListArguments = listOpt;
    this.lastListDmObject = obs.getDmObject();
    if(!depOpt.ok) {
        console.log("Create menu1-: " + this.getAttr('data-fmml-list',''));
        this.dmList = null; // oslobodi lock
        return false;
    }
    
    var dmconfName = obs.getAttr('data-fmml-list','');
    this.dmList = new FM.DmList(listOpt,dmconfName,obs.getApp());

    var me = this;
    var _obs = obs;
     
    var lstnr = {
        /** @ignore */
        onListStart: function(sender,data) {
            console.log("Create menu LSTRT: " + me.getAttr('data-fmml-list',''));
            $(_obs.node).addClass("fmmlWaitState");
            return true;
        },
        /** @ignore */
        onListEnd: function(sender,data) {
            console.log("Create menu LEND: " + me.getAttr('data-fmml-list',''));
            $(_obs.node).removeClass("fmmlWaitState");
            me.dmList.removeListener(lstnr);            
            me._fillMenu(_obs);
            me.dmList.dispose();
            me.dmList = null;

            // 
            me._showMenu();
        },
        /** @ignore */
        onListError: function(sender,data) {
            console.log("Create menu LEER: " + me.getAttr('data-fmml-list',''));
            $(_obs.node).removeClass("fmmlWaitState");
            me.dmList.removeListener(lstnr);            
            me._fillMenu(_obs,data);
            me.dmList.dispose();
            me.dmList = null;
            return true;
        }
    };
    this.dmList.addListener(lstnr);
    this.dmList.getData();
    console.log("Create menu2: " + this.getAttr('data-fmml-list',''));
    return true;
}

FM.MlMenu.prototype._showMenu = function() {
    console.log("Showmenu: " + this.getAttr('data-fmml-list',''));
    this.active = true;
    if(this.listNode != this.node) {
        if(this.listNode) {
            $(this.listNode).removeClass("fmmlValueMenuInactive");
            $(this.listNode).addClass("fmmlValueMenuActive");
        }
        $(this.node).removeClass("fmmlValueMenuActive");
        $(this.node).addClass("fmmlValueMenuInactive");        
    }
}

FM.MlMenu.prototype._hideMenu = function() {
    console.log("Hide menu: " + this.getAttr('data-fmml-list',''));
    this.active = false;
    if(this.listNode != this.node) {
        if(this.listNode) {
            $(this.listNode).removeClass("fmmlValueMenuActive");    
            $(this.listNode).addClass("fmmlValueMenuInactive");
        }
        $(this.node).removeClass("fmmlValueMenuInactive");
        $(this.node).addClass("fmmlValueMenuActive");
    }
}


FM.MlMenu.prototype._fillMenu = function(obs,oerr) {
    console.log("Fill menu: " + this.getAttr('data-fmml-list',''));
    $(this.listNode).unbind();
    $(this.listNode).empty();
    var menuId = obs.getAttr('data-fmml-list-id-attr','id');
    var menuText = obs.getAttr('data-fmml-list-text-attr','');
    var attr = obs.getAttr('data-fmml-attr-name','');

    var defSelValue = obs.getAttr('data-fmml-list-def-selected','');
    if(FM.isFunction(window[defSelValue])) defSelValue = window[defSelValue]();

    var defSelAttr = obs.getAttr('data-fmml-list-def-selected-attr','');
    var allowNulls = obs.getAttr('data-fmml-list-allow-null','false');

    var def=null,first = null,cur=null;
    var dmobj = obs ? obs.getDmObject() : null;
    var curVal = dmobj ? dmobj.getAttr(attr,'') : '';
    

    // ok
    if(!FM.isset(oerr)) {
        // null
        if(allowNulls == 'true') {
            $(this.listNode).append('<option value=""></option>');
        }

        // values    
        var me = this;
        this.dmList.forEachListElement(function(index,obj) {
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
            $(me.listNode).append(
                '<option ' + (defOption ? 'selected="selected"' : '') + ' value="' + obj.getAttr(menuId,'') + '">' +
                obj.getAttr(menuText,'') +
                '</option>'
                );
            return(true);
        });
        
        // listen
        $(me.listNode).change(function() {
            var dmobj = obs.getDmObject();

            var value = $(me.listNode).val();
            if(FM.isset(attr) && attr && attr != '' && dmobj && dmobj.getAttr(attr) !== value) {
                dmobj.setAttr(attr,value,true);
            }
        });
        
        if(cur) {
            $(me.listNode).val(cur.getAttr(menuId,''));
        } else if(def) {
            $(me.listNode).val(def.getAttr(menuId,''));
            if(dmobj) dmobj.setAttr(attr,def.getAttr(menuId,''),true);            
        } else if(allowNulls == 'true') {
            $(me.listNode).val('');
        } else if(first) {
            if(dmobj) dmobj.setAttr(attr,first.getAttr(menuId,''),true);
        //$(me.listNode).val(first.getAttr(menuId,''));
        }

   
    } else {
        $(me.listNode).append(
            '<option value=""><i>' +
            (oerr.getErrorText && oerr.getErrorText() != '' ? oerr.getErrorText() : "Unable to connect to server") +
            '</i></option>'
            );
        
    }
}

// static
FM.MlMenu.className = "MlMenu";
FM.MlMenu.fullClassName = 'gui.MlMenu';

FM.MlExtension.addExtensionType('MlMenu', FM.MlMenu);


/**
* ML typeahead menu edit extensions class. 
* 
* @class FM.MlTypeaheadMenu
* @extends FM.MlExtension
* @param {object} [attrs] DOM node attributes
* @param {DOMnode} node DOM node
*/
FM.MlTypeaheadMenu = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(FM.MlTypeaheadMenu,FM.MlExtension);

FM.MlTypeaheadMenu.prototype._init = function(attrs,node) {
    this._super("_init",attrs,node);
    this.listCache = {};
    this.objectSubClass = "MlTypeaheadMenu";
}


// methods
FM.MlTypeaheadMenu.prototype._createList = function(obs) {
    var dmconfName = this.getAttr('data-fmml-list','');
    var listOpt = {};
    var pref = 'data-fmml-list-attr-';
    var prefLen = pref.length;
    
    this.forEachAttr(function(pname,value) {
        if(FM.startsWith(pname,pref)) {
            listOpt[pname.substring(prefLen)] = value;
        }                    
        return true;
    });
    
    // input param
    var oObj = obs.getDmObject();
    
    if(oObj && FM.isset(oObj.forEachAttr)) { // fm obect
        oObj.forEachAttr(function(pname,value) {
            listOpt[pname] = value;
            return true;
        });
        listOpt["objectClass"] = oObj.getSubClassName();
    } else if(FM.isArray(oObj) || FM.isObject(oObj)) { // array
        FM.forEach(oObj, function(pname,value) {
            listOpt[pname] = value;
            return true;
        });        
    }
    
    return new FM.DmList(listOpt,dmconfName,obs.getApp());
}

FM.MlTypeaheadMenu.prototype._getItemDataID = function(itm) {
    var srch = "<div id='typeahead-";
    
    var itext = itm.indexOf(srch);
    if(itext < 0) {
        return '';
    }
    var txt = itm.substr(itext + srch.length);
    itext = txt.indexOf("'");
    if(itext < 0) {
        return '';
    }
    return txt.substr(0,itext);
}

FM.MlTypeaheadMenu.prototype.run = function(obs) {
    this._super("run",obs);
    var itmtemplate = 
        "<div id='typeahead-[:data_id]' class=''>" +
        "  <div class='fmmlCover pull-left'>" +
        "    <img class='media-object' src='[:cover_url]'></img>" +
        " </div>" +
        " <div class='media-body'>[:description]</div>" + 
        "</div>"
    ;
    this.listCache = {};
    var me = this;
    var _obs = obs;
    
    $(_obs.getNode()).typeahead({
        updater: function(itm) {
            /*
            var srch = "<div class='media-body'>";
            var qry = this.query;
            var itext = itm.indexOf(srch);
            if(itext < 0) {
                return false;
            }
            var btxt = itm.substr(0,itext + srch.length);
            var txt = itm.substr(itext + srch.length);
            itext = txt.indexOf("</div>");
            if(itext < 0) {
                return false;
            }
            var tag = txt.substr(0,itext);
            */
            // run host if required
            var hostid = me.getAttr('data-fmml-typeahead-add-to-on-select','');
            if(hostid != '') {
                var node = document.getElementById(hostid);
                if( node && FM.isset(node.fmmlHost) && node.fmmlHost && 
                    FM.isset(node.fmmlHost.onAddObjectToList)
                ) {
                    var o = FM.getAttr(me.listCache,itm,null);
                    if(o) node.fmmlHost.onAddObjectToList(this,{object: o});
                }
            }
            return ''; //tag;
        },
        highlighter: function(itm) {
            var o = FM.getAttr(me.listCache,itm,null);
            if(!o) return itm;
            var attr = me.getAttr('data-fmml-attr-name','');
            var menuText = me.getAttr('data-fmml-list-text-attr',attr);
            var menuImg = me.getAttr('data-fmml-img-attr','icon_url');
            
            var itmstr = FM.applyTemplate({
                    data_id: FM.md5(itm),
                    cover_url: o.getAttr(menuImg),
                    description: o.getAttr(menuText,'...')
                }, 
                itmtemplate, 
                false, false
            );
            var inode = $(itmstr)[0];

            return inode;
            
            var srch = "<div class='media-body'>";
            var qry = this.query;
            var itext = itm.indexOf(srch);
            if(itext < 0) {
                return false;
            }
            var btxt = itm.substr(0,itext + srch.length);
            var txt = itm.substr(itext + srch.length);
            itext = txt.indexOf("</div>");
            if(itext < 0) {
                return false;
            }
            var atxt = txt.substr(itext);
            txt = txt.substr(0,itext).replace(qry,'<strong>' + qry + "</strong>");
            return btxt + txt + atxt;
            
        },
        matcher: function(itm) {
            var dmobj = FM.getAttr(me.listCache,itm,null);
            var attr = me.getAttr('data-fmml-attr-name','');
            var menuText = me.getAttr('data-fmml-list-text-attr',attr);
            var txt = dmobj.getAttr(menuText,'');
            var qry = this.query;
/*            
            var srch = "<div class='media-body'>";
            var itext = itm.indexOf(srch);
            if(itext < 0) {
                return false;
            }
            var txt = itm.substr(itext + srch.length);
            itext = txt.indexOf("</div>");
            if(itext < 0) {
                return false;
            }
            txt = txt.substr(0,itext);
*/
            return FM.isString(txt) && FM.isString(qry) && txt.toLowerCase().indexOf(qry.toLowerCase()) > -1;
        },
        source: function(val,cbFn){
            var attr = me.getAttr('data-fmml-attr-name','');
            var lstattr = me.getAttr('data-fmml-list-attr-name',attr);
            if(attr != '') {
                var dmList = me._createList(_obs);
                dmList.setAttr(lstattr,val);
                var lstnr = {
                    /** @ignore */
                    onListEnd: function(sender,data) {
                        console.log("Create menu LEND: " + me.getAttr('data-fmml-list',''));
                        dmList.removeListener(lstnr);
                        var menuText = obs.getAttr('data-fmml-list-text-attr',attr);
                        var menuImg = obs.getAttr('data-fmml-img-attr','icon_url');
                        var retc = [];
                        dmList.forEachListElement(function(i,o) {
                            var itmstr = FM.applyTemplate({
                                    data_id: FM.md5(o.getDataID()),
                                    cover_url: o.getAttr(menuImg),
                                    description: o.getAttr(menuText,'...')
                                }, 
                                itmtemplate, 
                                false, false
                            );
                            var inode = $(itmstr)[0];
                            inode.fmmlMenuDmObject = o;
                            retc.push(o.getDataID());
                            me.listCache[o.getDataID()] = o;
                            return true;
                        });
                        dmList.dispose();
                        cbFn(retc);
                    },
                    onListError: function(sender,data) {
                        console.log("Create menu LEER: " + me.getAttr('data-fmml-list',''));
                        dmList.removeListener(lstnr);
                        dmList.dispose();
                        cbFn([]);
                    }
                };
                dmList.addListener(lstnr);
                dmList.getData(false);
            }
        },
        items: parseInt(me.getAttr('data-fmml-list-size','7')),
        minLength: parseInt(me.getAttr('data-fmml-typeahead-chars','2'))
    });
    
    return true;
}


FM.MlExtension.prototype.dispose = function(obs) {
    this.listCache = {};
    this._super("dispose",obs);
    this.executed = false;
}


// static
FM.MlTypeaheadMenu.className = "MlTypeaheadMenu";
FM.MlTypeaheadMenu.fullClassName = 'gui.MlTypeaheadMenu';

FM.MlExtension.addExtensionType('MlTypeaheadMenu', FM.MlTypeaheadMenu);


/**
* ML slider input extensions class. 
* 
* @class FM.MlSlider
* @extends FM.MlExtension
 * @param {object} [attrs] DOM node attributes
 * @param {DOMnode} node DOM node
*/
FM.MlSlider = function() {
    this._init.apply(this, arguments); // new poziva _init()
}

FM.extendClass(FM.MlSlider,FM.MlExtension); 

// properties
FM.MlSlider.prototype.objectSubClass = "";
FM.MlSlider.prototype.sliderWidget = null;
// methods
FM.MlSlider.prototype._init = function(attrs,node) {
    this._super("_init",attrs,node);
    this.objectSubClass = "MlSlider";
    this.sliderDiv = null;
    this.sliderWidget = null;
}

FM.MlSlider.prototype.run = function(obs) {
    this._super("run",obs);
    
    var me = this;
    var attr = '';
    var value = 0;
    var vmin = 0;
    var vmax = 100;
    var vstep = 1;
    var vpostfix = '';
    var vformat = '';
    var vskin = 'blue';

    // calc params
    if(obs) {
        var dmobj = obs.getDmObject();
        attr = obs.getAttr('data-fmml-attr-name','');
        if(dmobj && attr != '') {
            value = dmobj.getAttr(attr,value);
        }
        vmin = obs.getAttr('data-fmml-slider-min','');
        vmin = FM.isset(vmin) && vmin && vmin != '' ? vmin : value;
        if(vmin > value) vmin = value;
        vmax = obs.getAttr('data-fmml-slider-max','');
        vmax = FM.isset(vmax) && vmax && vmax != '' ? vmax : value;
        if(vmax < value) vmax = value;
        vstep = obs.getAttr('data-fmml-slider-step','');
        vstep = FM.isset(vstep) && vstep && vstep != '' ? vstep : 1;
        vpostfix = obs.getAttr('data-fmml-slider-postfix','');
        vpostfix = FM.isset(vpostfix) && vpostfix ? vpostfix : '';
        vformat = obs.getAttr('data-fmml-slider-format','');
        vformat = FM.isset(vformat) && vformat ? vformat : '';
        vskin = obs.getAttr('data-fmml-slider-skin','');
        vskin = FM.isset(vskin) && vskin ? vskin : 'round';            
    }

    
    var jsopts = {
        value: value,
        min: vmin, 
        max: vmax, 
        step: vstep,
        /** @ignore */
        stop: function(event, ui) {
            var value = FM.getAttr(ui,'value',0);
            var obs = me.node.fmmlObserver;
            if(obs && obs.getDmObject()) {
                var dmobj = obs.getDmObject();
                var attr = $(obs.node).attr('data-fmml-attr-name');
                if(FM.isset(attr) && attr && attr != '') {
                    dmobj.setAttr(attr,value,true);
                }
            }
            return true;                
        }
    }

    // run jq plugin
    if(!this.sliderDiv) {
        this.sliderDiv = $('<div class="fmmlSliderValue"></div>');
        $(this.sliderDiv).insertAfter(this.node);
    }
    this.sliderWidget = $(this.sliderDiv).slider(jsopts);                        
}

FM.MlSlider.prototype.dispose = function(obs) {
    this._super("dispose",obs);

    if(this.sliderDiv && this.sliderWidget) {
        $(this.sliderDiv).slider("destroy");
        $(this.sliderDiv).remove();
        this.sliderDiv = null;
        this.sliderWidget = null;
    }
}

FM.MlSlider.prototype.update = function(obs) {
    this._super("update",obs);

    var dmobj = obs && obs.getDmObject() ? obs.getDmObject() : null;
    if(dmobj && this.sliderWidget) {
        if(this.sliderDiv) {
            var attr = obs.getAttr('data-fmml-attr-name','');
            if(attr != '') {
                var value = dmobj.getAttr(attr,value);
                $(this.sliderDiv).slider("value",value);
            }
        }
    }
}

// static
FM.MlSlider.className = "MlSlider";
FM.MlSlider.fullClassName = 'gui.MlSlider';

FM.MlExtension.addExtensionType('MlSlider', FM.MlSlider);

}
