(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.pm(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.o(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.jn(b)
return new s(c,this)}:function(){if(s===null)s=A.jn(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.jn(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
jq(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iB(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.jo==null){A.p8()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.h(A.kn("Return interceptor for "+A.z(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.ic
if(o==null)o=$.ic=A.iA(n)
p=q[o]}if(p!=null)return p
p=A.pe(a)
if(p!=null)return p
if(typeof a=="function")return B.br
s=Object.getPrototypeOf(a)
if(s==null)return B.b0
if(s===Object.prototype)return B.b0
if(typeof q=="function"){o=$.ic
if(o==null)o=$.ic=A.iA(n)
Object.defineProperty(q,o,{value:B.ag,enumerable:false,writable:true,configurable:true})
return B.ag}return B.ag},
iY(a,b){if(a<0||a>4294967295)throw A.h(A.ab(a,0,4294967295,"length",null))
return J.jZ(new Array(a),b)},
aM(a,b){if(a>4294967295)throw A.h(A.ab(a,0,4294967295,"length",null))
return J.jZ(new Array(a),b)},
jY(a,b){if(a<0)throw A.h(A.a2("Length must be a non-negative integer: "+a,null))
return A.o(new Array(a),b.k("u<0>"))},
h2(a,b){return A.o(new Array(a),b.k("u<0>"))},
jZ(a,b){var s=A.o(a,b.k("u<0>"))
s.$flags=1
return s},
bW(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.df.prototype
return J.eR.prototype}if(typeof a=="string")return J.cu.prototype
if(a==null)return J.dg.prototype
if(typeof a=="boolean")return J.eQ.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
if(typeof a=="symbol")return J.cw.prototype
if(typeof a=="bigint")return J.cv.prototype
return a}if(a instanceof A.D)return a
return J.iB(a)},
N(a){if(typeof a=="string")return J.cu.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
if(typeof a=="symbol")return J.cw.prototype
if(typeof a=="bigint")return J.cv.prototype
return a}if(a instanceof A.D)return a
return J.iB(a)},
ay(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
if(typeof a=="symbol")return J.cw.prototype
if(typeof a=="bigint")return J.cv.prototype
return a}if(a instanceof A.D)return a
return J.iB(a)},
bj(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
if(typeof a=="symbol")return J.cw.prototype
if(typeof a=="bigint")return J.cv.prototype
return a}if(a instanceof A.D)return a
return J.iB(a)},
el(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bW(a).H(a,b)},
e(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.pc(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.N(a).m(a,b)},
a1(a,b,c){return J.ay(a).j(a,b,c)},
iO(a,b){return J.ay(a).N(a,b)},
lC(a,b,c){return J.bj(a).ed(a,b,c)},
jE(a,b,c){return J.bj(a).ee(a,b,c)},
lD(a,b,c){return J.bj(a).ef(a,b,c)},
lE(a,b,c){return J.bj(a).eg(a,b,c)},
jF(a,b,c){return J.bj(a).eh(a,b,c)},
fJ(a,b,c){return J.bj(a).ei(a,b,c)},
Q(a){return J.bj(a).ej(a)},
O(a,b,c){return J.bj(a).bR(a,b,c)},
lF(a,b){return J.ay(a).cg(a,b)},
iP(a,b){return J.ay(a).b_(a,b)},
cQ(a,b,c,d){return J.ay(a).al(a,b,c,d)},
bk(a){return J.bW(a).gA(a)},
lG(a){return J.N(a).gF(a)},
lH(a){return J.N(a).gbc(a)},
em(a){return J.ay(a).gB(a)},
b3(a){return J.N(a).gl(a)},
lI(a){return J.bW(a).gan(a)},
lJ(a,b,c){return J.ay(a).c_(a,b,c)},
lK(a,b,c,d,e){return J.ay(a).X(a,b,c,d,e)},
fK(a,b){return J.ay(a).aN(a,b)},
lL(a,b,c){return J.ay(a).bJ(a,b,c)},
lM(a,b){return J.ay(a).ex(a,b)},
bZ(a){return J.bW(a).v(a)},
eK:function eK(){},
eQ:function eQ(){},
dg:function dg(){},
di:function di(){},
b9:function b9(){},
f5:function f5(){},
dJ:function dJ(){},
aS:function aS(){},
cv:function cv(){},
cw:function cw(){},
u:function u(a){this.$ti=a},
eP:function eP(){},
h3:function h3(a){this.$ti=a},
cR:function cR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dh:function dh(){},
df:function df(){},
eR:function eR(){},
cu:function cu(){}},A={iZ:function iZ(){},
eq(a,b,c){if(t.R.b(a))return new A.dU(a,b.k("@<0>").aw(c).k("dU<1,2>"))
return new A.bl(a,b.k("@<0>").aw(c).k("bl<1,2>"))},
hc(a){return new A.cx("Field '"+a+"' has not been initialized.")},
mb(a){return new A.cx("Field '"+a+"' has already been initialized.")},
aW(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hz(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
kk(a,b,c){return A.hz(A.aW(A.aW(c,a),b))},
fC(a,b,c){return a},
jp(a){var s,r
for(s=$.aq.length,r=0;r<s;++r)if(a===$.aq[r])return!0
return!1},
bP(a,b,c,d){A.am(b,"start")
if(c!=null){A.am(c,"end")
if(b>c)A.Y(A.ab(b,0,c,"start",null))}return new A.dH(a,b,c,d.k("dH<0>"))},
ki(a,b,c){var s="count"
if(t.R.b(a)){A.fM(b,s,t.q)
A.am(b,s)
return new A.cb(a,b,c.k("cb<0>"))}A.fM(b,s,t.q)
A.am(b,s)
return new A.aV(a,b,c.k("aV<0>"))},
h1(){return new A.cC("No element")},
jX(){return new A.cC("Too few elements")},
bg:function bg(){},
cT:function cT(a,b){this.a=a
this.$ti=b},
bl:function bl(a,b){this.a=a
this.$ti=b},
dU:function dU(a,b){this.a=a
this.$ti=b},
dT:function dT(){},
az:function az(a,b){this.a=a
this.$ti=b},
cx:function cx(a){this.a=a},
aj:function aj(a){this.a=a},
hx:function hx(){},
q:function q(){},
aB:function aB(){},
dH:function dH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
by:function by(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dk:function dk(a,b,c){this.a=a
this.b=b
this.$ti=c},
aV:function aV(a,b,c){this.a=a
this.b=b
this.$ti=c},
cb:function cb(a,b,c){this.a=a
this.b=b
this.$ti=c},
dF:function dF(a,b,c){this.a=a
this.b=b
this.$ti=c},
cW:function cW(a){this.$ti=a},
cX:function cX(a){this.$ti=a},
ac:function ac(){},
aZ:function aZ(){},
cD:function cD(){},
ed:function ed(){},
l8(a){var s=A.l7(a)
if(s!=null)return s
return"minified:"+a},
pc(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
z(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bZ(a)
return s},
dD(a){var s,r=$.kf
if(r==null)r=$.kf=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
f8(a){var s,r,q,p
if(a instanceof A.D)return A.ap(A.ar(a),null)
s=J.bW(a)
if(s===B.bo||s===B.bs||t.bJ.b(a)){r=B.ai(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.ap(A.ar(a),null)},
mE(a){var s,r,q
if(typeof a=="number"||A.jk(a))return J.bZ(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.b4)return a.v(0)
s=$.lA()
for(r=0;r<1;++r){q=s[r].iI(a)
if(q!=null)return q}return"Instance of '"+A.f8(a)+"'"},
ke(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mF(a){var s,r,q,p=A.o([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a0)(a),++r){q=a[r]
if(!A.iv(q))throw A.h(A.bi(q))
if(q<=65535)B.e.N(p,q)
else if(q<=1114111){B.e.N(p,55296+(B.a.i(q-65536,10)&1023))
B.e.N(p,56320+(q&1023))}else throw A.h(A.bi(q))}return A.ke(p)},
kg(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.iv(q))throw A.h(A.bi(q))
if(q<0)throw A.h(A.bi(q))
if(q>65535)return A.mF(a)}return A.ke(a)},
mG(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
M(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.a.i(s,10)|55296)>>>0,s&1023|56320)}throw A.h(A.ab(a,0,1114111,null,null))},
cz(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mD(a){var s=A.cz(a).getUTCFullYear()+0
return s},
mB(a){var s=A.cz(a).getUTCMonth()+1
return s},
mx(a){var s=A.cz(a).getUTCDate()+0
return s},
my(a){var s=A.cz(a).getUTCHours()+0
return s},
mA(a){var s=A.cz(a).getUTCMinutes()+0
return s},
mC(a){var s=A.cz(a).getUTCSeconds()+0
return s},
mz(a){var s=A.cz(a).getUTCMilliseconds()+0
return s},
mw(a){var s=a.$thrownJsError
if(s==null)return null
return A.ei(s)},
mH(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.R(a,s)
a.$thrownJsError=s
s.stack=""}},
fF(a){throw A.h(A.bi(a))},
a(a,b){if(a==null)J.b3(a)
throw A.h(A.fE(a,b))},
fE(a,b){var s,r="index"
if(!A.iv(b))return new A.ai(!0,b,r,null)
s=J.b3(a)
if(b<0||b>=s)return A.fY(b,s,a,r)
return new A.bc(null,null,!0,b,r,"Value not in range")},
p0(a,b,c){if(a<0||a>c)return A.ab(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ab(b,a,c,"end",null)
return new A.ai(!0,b,"end",null)},
bi(a){return new A.ai(!0,a,null,null)},
h(a){return A.R(a,new Error())},
R(a,b){var s
if(a==null)a=new A.aX()
b.dartException=a
s=A.pn
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
pn(){return J.bZ(this.dartException)},
Y(a,b){throw A.R(a,b==null?new Error():b)},
c(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.Y(A.og(a,b,c),s)},
og(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.dK("'"+s+"': Cannot "+o+" "+l+k+n)},
a0(a){throw A.h(A.aJ(a))},
aY(a){var s,r,q,p,o,n
a=A.pk(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.o([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.hA(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
hB(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kl(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
j_(a,b){var s=b==null,r=s?null:b.method
return new A.eW(a,r,s?null:b.receiver)},
as(a){if(a==null)return new A.hk(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.bY(a,a.dartException)
return A.oS(a)},
bY(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
oS(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.i(r,16)&8191)===10)switch(q){case 438:return A.bY(a,A.j_(A.z(s)+" (Error "+q+")",null))
case 445:case 5007:A.z(s)
return A.bY(a,new A.dx())}}if(a instanceof TypeError){p=$.ld()
o=$.le()
n=$.lf()
m=$.lg()
l=$.lj()
k=$.lk()
j=$.li()
$.lh()
i=$.lm()
h=$.ll()
g=p.b5(s)
if(g!=null)return A.bY(a,A.j_(A.b1(s),g))
else{g=o.b5(s)
if(g!=null){g.method="call"
return A.bY(a,A.j_(A.b1(s),g))}else if(n.b5(s)!=null||m.b5(s)!=null||l.b5(s)!=null||k.b5(s)!=null||j.b5(s)!=null||m.b5(s)!=null||i.b5(s)!=null||h.b5(s)!=null){A.b1(s)
return A.bY(a,new A.dx())}}return A.bY(a,new A.fe(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.dG()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.bY(a,new A.ai(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.dG()
return a},
ei(a){var s
if(a==null)return new A.e7(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.e7(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fG(a){if(a==null)return J.bk(a)
if(typeof a=="object")return A.dD(a)
return J.bk(a)},
oX(a){if(typeof a=="number")return B.b.gA(a)
if(a instanceof A.fw)return A.dD(a)
return A.fG(a)},
kZ(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
oq(a,b,c,d,e,f){t.Z.a(a)
switch(A.v(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.h(new A.i0("Unsupported number of arguments for wrapped closure"))},
eh(a,b){var s=a.$identity
if(!!s)return s
s=A.oY(a,b)
a.$identity=s
return s},
oY(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.oq)},
lU(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.fb().constructor.prototype):Object.create(new A.c_(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.jK(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.lQ(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.jK(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
lQ(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.h("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.lN)}throw A.h("Error in functionType of tearoff")},
lR(a,b,c,d){var s=A.jJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jK(a,b,c,d){if(c)return A.lT(a,b,d)
return A.lR(b.length,d,a,b)},
lS(a,b,c,d){var s=A.jJ,r=A.lO
switch(b?-1:a){case 0:throw A.h(new A.fa("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
lT(a,b,c){var s,r
if($.jH==null)$.jH=A.jG("interceptor")
if($.jI==null)$.jI=A.jG("receiver")
s=b.length
r=A.lS(s,c,a,b)
return r},
jn(a){return A.lU(a)},
lN(a,b){return A.ip(v.typeUniverse,A.ar(a.a),b)},
jJ(a){return a.a},
lO(a){return a.b},
jG(a){var s,r,q,p=new A.c_("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.h(A.a2("Field name "+a+" not found.",null))},
iA(a){return v.getIsolateTag(a)},
qQ(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pe(a){var s,r,q,p,o,n=A.b1($.l1.$1(a)),m=$.iy[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iF[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.kJ($.kU.$2(a,n))
if(q!=null){m=$.iy[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iF[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.iH(s)
$.iy[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iF[n]=s
return s}if(p==="-"){o=A.iH(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.l3(a,s)
if(p==="*")throw A.h(A.kn(n))
if(v.leafTags[n]===true){o=A.iH(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.l3(a,s)},
l3(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jq(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
iH(a){return J.jq(a,!1,null,!!a.$iak)},
pg(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.iH(s)
else return J.jq(s,c,null,null)},
p8(){if(!0===$.jo)return
$.jo=!0
A.p9()},
p9(){var s,r,q,p,o,n,m,l
$.iy=Object.create(null)
$.iF=Object.create(null)
A.p7()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.l4.$1(o)
if(n!=null){m=A.pg(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
p7(){var s,r,q,p,o,n,m=B.b6()
m=A.cM(B.b7,A.cM(B.b8,A.cM(B.aj,A.cM(B.aj,A.cM(B.b9,A.cM(B.ba,A.cM(B.bb(B.ai),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.l1=new A.iC(p)
$.kU=new A.iD(o)
$.l4=new A.iE(n)},
cM(a,b){return a(b)||b},
p_(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
pk(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cU:function cU(){},
e_:function e_(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
br:function br(a,b){this.a=a
this.$ti=b},
cV:function cV(){},
cZ:function cZ(a,b){this.a=a
this.$ti=b},
dE:function dE(){},
hA:function hA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dx:function dx(){},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
fe:function fe(a){this.a=a},
hk:function hk(a){this.a=a},
e7:function e7(a){this.a=a
this.b=null},
b4:function b4(){},
er:function er(){},
es:function es(){},
fc:function fc(){},
fb:function fb(){},
c_:function c_(a,b){this.a=a
this.b=b},
fa:function fa(a){this.a=a},
aA:function aA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hf:function hf(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bx:function bx(a,b){this.a=a
this.$ti=b},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hg:function hg(a,b){this.a=a
this.$ti=b},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bw:function bw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
pm(a){throw A.R(new A.cx("Field '"+a+"' has been assigned during initialization."),new Error())},
b(){throw A.R(A.hc(""),new Error())},
J(){throw A.R(A.mb(""),new Error())},
ks(){var s=new A.hZ()
return s.b=s},
hZ:function hZ(){this.b=null},
ao(a,b,c){},
B(a){var s,r,q
if(t.e.b(a))return a
s=J.N(a)
r=A.aC(s.gl(a),null,!1,t.z)
for(q=0;q<s.gl(a);++q)B.e.j(r,q,s.m(a,q))
return r},
me(a,b,c){var s
A.ao(a,b,c)
s=new DataView(a,b,c)
return s},
mf(a){return new Float32Array(a)},
mg(a,b,c){A.ao(a,b,c)
c=B.a.a0(a.byteLength-b,4)
return new Float32Array(a,b,c)},
mh(a,b,c){A.ao(a,b,c)
c=B.a.a0(a.byteLength-b,2)
return new Int16Array(a,b,c)},
mi(a){return new Int32Array(a)},
mj(a,b,c){A.ao(a,b,c)
c=B.a.a0(a.byteLength-b,4)
return new Int32Array(a,b,c)},
k3(a){return new Int8Array(a)},
mk(a,b,c){A.ao(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
ml(a){return new Uint16Array(a)},
mm(a){return new Uint32Array(a)},
mn(a,b,c){A.ao(a,b,c)
c=B.a.a0(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
dw(a){return new Uint8Array(a)},
mo(a){return new Uint8Array(A.B(a))},
mp(a,b,c){A.ao(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
b2(a,b,c){if(a>>>0!==a||a>=c)throw A.h(A.fE(b,a))},
fA(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.h(A.p0(a,b,c))
if(b==null)return c
return b},
ba:function ba(){},
bz:function bz(){},
ds:function ds(){},
iq:function iq(a){this.a=a},
f0:function f0(){},
a_:function a_(){},
dr:function dr(){},
al:function al(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
aN:function aN(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
j2(a,b){var s=b.c
return s==null?b.c=A.ea(a,"cc",[b.x]):s},
kh(a){var s=a.w
if(s===6||s===7)return A.kh(a.x)
return s===11||s===12},
mI(a){return a.as},
ag(a){return A.io(v.typeUniverse,a,!1)},
bT(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.bT(a1,s,a3,a4)
if(r===s)return a2
return A.kB(a1,r,!0)
case 7:s=a2.x
r=A.bT(a1,s,a3,a4)
if(r===s)return a2
return A.kA(a1,r,!0)
case 8:q=a2.y
p=A.cL(a1,q,a3,a4)
if(p===q)return a2
return A.ea(a1,a2.x,p)
case 9:o=a2.x
n=A.bT(a1,o,a3,a4)
m=a2.y
l=A.cL(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.je(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.cL(a1,j,a3,a4)
if(i===j)return a2
return A.kC(a1,k,i)
case 11:h=a2.x
g=A.bT(a1,h,a3,a4)
f=a2.y
e=A.oP(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.kz(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.cL(a1,d,a3,a4)
o=a2.x
n=A.bT(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.jf(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.h(A.ep("Attempted to substitute unexpected RTI kind "+a0))}},
cL(a,b,c,d){var s,r,q,p,o=b.length,n=A.it(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bT(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
oQ(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.it(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bT(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
oP(a,b,c,d){var s,r=b.a,q=A.cL(a,r,c,d),p=b.b,o=A.cL(a,p,c,d),n=b.c,m=A.oQ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.fq()
s.a=q
s.b=o
s.c=m
return s},
o(a,b){a[v.arrayRti]=b
return a},
kW(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.p6(s)
return a.$S()}return null},
pb(a,b){var s
if(A.kh(b))if(a instanceof A.b4){s=A.kW(a)
if(s!=null)return s}return A.ar(a)},
ar(a){if(a instanceof A.D)return A.j(a)
if(Array.isArray(a))return A.an(a)
return A.jj(J.bW(a))},
an(a){var s=a[v.arrayRti],r=t.cO
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
j(a){var s=a.$ti
return s!=null?s:A.jj(a)},
jj(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.on(a,s)},
on(a,b){var s=a instanceof A.b4?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.nZ(v.typeUniverse,s.name)
b.$ccache=r
return r},
p6(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.io(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
p5(a){return A.bV(A.j(a))},
oO(a){var s=a instanceof A.b4?A.kW(a):null
if(s!=null)return s
if(t.ci.b(a))return J.lI(a).a
if(Array.isArray(a))return A.an(a)
return A.ar(a)},
bV(a){var s=a.r
return s==null?a.r=new A.fw(a):s},
aH(a){return A.bV(A.io(v.typeUniverse,a,!1))},
om(a){var s=this
s.b=A.oM(s)
return s.b(a)},
oM(a){var s,r,q,p,o
if(a===t.K)return A.ow
if(A.bX(a))return A.oA
s=a.w
if(s===6)return A.ok
if(s===1)return A.kO
if(s===7)return A.or
r=A.oL(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.bX)){a.f="$i"+q
if(q==="p")return A.ou
if(a===t.m)return A.ot
return A.oz}}else if(s===10){p=A.p_(a.x,a.y)
o=p==null?A.kO:p
return o==null?A.fz(o):o}return A.oi},
oL(a){if(a.w===8){if(a===t.q)return A.iv
if(a===t.V||a===t.u)return A.ov
if(a===t.N)return A.oy
if(a===t.y)return A.jk}return null},
ol(a){var s=this,r=A.oh
if(A.bX(s))r=A.o9
else if(s===t.K)r=A.fz
else if(A.cO(s)){r=A.oj
if(s===t.h6)r=A.o7
else if(s===t.dk)r=A.kJ
else if(s===t.fQ)r=A.o5
else if(s===t.cg)r=A.kI
else if(s===t.cD)r=A.o6
else if(s===t.an)r=A.o8}else if(s===t.q)r=A.v
else if(s===t.N)r=A.b1
else if(s===t.y)r=A.o4
else if(s===t.u)r=A.jg
else if(s===t.V)r=A.kH
else if(s===t.m)r=A.fy
s.a=r
return s.a(a)},
oi(a){var s=this
if(a==null)return A.cO(s)
return A.pd(v.typeUniverse,A.pb(a,s),s)},
ok(a){if(a==null)return!0
return this.x.b(a)},
oz(a){var s,r=this
if(a==null)return A.cO(r)
s=r.f
if(a instanceof A.D)return!!a[s]
return!!J.bW(a)[s]},
ou(a){var s,r=this
if(a==null)return A.cO(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.D)return!!a[s]
return!!J.bW(a)[s]},
ot(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.D)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
kN(a){if(typeof a=="object"){if(a instanceof A.D)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
oh(a){var s=this
if(a==null){if(A.cO(s))return a}else if(s.b(a))return a
throw A.R(A.kK(a,s),new Error())},
oj(a){var s=this
if(a==null||s.b(a))return a
throw A.R(A.kK(a,s),new Error())},
kK(a,b){return new A.e8("TypeError: "+A.kt(a,A.ap(b,null)))},
kt(a,b){return A.eA(a)+": type '"+A.ap(A.oO(a),null)+"' is not a subtype of type '"+b+"'"},
ax(a,b){return new A.e8("TypeError: "+A.kt(a,b))},
or(a){var s=this
return s.x.b(a)||A.j2(v.typeUniverse,s).b(a)},
ow(a){return a!=null},
fz(a){if(a!=null)return a
throw A.R(A.ax(a,"Object"),new Error())},
oA(a){return!0},
o9(a){return a},
kO(a){return!1},
jk(a){return!0===a||!1===a},
o4(a){if(!0===a)return!0
if(!1===a)return!1
throw A.R(A.ax(a,"bool"),new Error())},
o5(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.R(A.ax(a,"bool?"),new Error())},
kH(a){if(typeof a=="number")return a
throw A.R(A.ax(a,"double"),new Error())},
o6(a){if(typeof a=="number")return a
if(a==null)return a
throw A.R(A.ax(a,"double?"),new Error())},
iv(a){return typeof a=="number"&&Math.floor(a)===a},
v(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.R(A.ax(a,"int"),new Error())},
o7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.R(A.ax(a,"int?"),new Error())},
ov(a){return typeof a=="number"},
jg(a){if(typeof a=="number")return a
throw A.R(A.ax(a,"num"),new Error())},
kI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.R(A.ax(a,"num?"),new Error())},
oy(a){return typeof a=="string"},
b1(a){if(typeof a=="string")return a
throw A.R(A.ax(a,"String"),new Error())},
kJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.R(A.ax(a,"String?"),new Error())},
fy(a){if(A.kN(a))return a
throw A.R(A.ax(a,"JSObject"),new Error())},
o8(a){if(a==null)return a
if(A.kN(a))return a
throw A.R(A.ax(a,"JSObject?"),new Error())},
kR(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.ap(a[q],b)
return s},
oD(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.kR(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.ap(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
kL(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.o([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.e.N(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.a(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.ap(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.ap(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.ap(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.ap(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.ap(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
ap(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.ap(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.ap(a.x,b)+">"
if(l===8){p=A.oR(a.x)
o=a.y
return o.length>0?p+("<"+A.kR(o,b)+">"):p}if(l===10)return A.oD(a,b)
if(l===11)return A.kL(a,b,null)
if(l===12)return A.kL(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
oR(a){var s=A.l7(a)
if(s!=null)return s
return"minified:"+a},
o_(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
nZ(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.io(a,b,!1)
else if(typeof m=="number"){s=m
r=A.eb(a,5,"#")
q=A.it(s)
for(p=0;p<s;++p)q[p]=r
o=A.ea(a,b,q)
n[b]=o
return o}else return m},
nX(a,b){return A.kF(a.tR,b)},
nW(a,b){return A.kF(a.eT,b)},
io(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.kD(a,null,b,!1)
r.set(b,s)
return s},
ip(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.kD(a,b,c,!0)
q.set(c,r)
return r},
nY(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.je(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
kD(a,b,c,d){return A.nO(A.nI(a,b,c,d))},
bh(a,b){b.a=A.ol
b.b=A.om
return b},
eb(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aE(null,null)
s.w=b
s.as=c
r=A.bh(a,s)
a.eC.set(c,r)
return r},
kB(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.nU(a,b,r,c)
a.eC.set(r,s)
return s},
nU(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.bX(b))if(!(b===t.a||b===t.T))if(s!==6)r=s===7&&A.cO(b.x)
if(r)return b
else if(s===1)return t.a}q=new A.aE(null,null)
q.w=6
q.x=b
q.as=c
return A.bh(a,q)},
kA(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.nS(a,b,r,c)
a.eC.set(r,s)
return s},
nS(a,b,c,d){var s,r
if(d){s=b.w
if(A.bX(b)||b===t.K)return b
else if(s===1)return A.ea(a,"cc",[b])
else if(b===t.a||b===t.T)return t.eH}r=new A.aE(null,null)
r.w=7
r.x=b
r.as=c
return A.bh(a,r)},
nV(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aE(null,null)
s.w=13
s.x=b
s.as=q
r=A.bh(a,s)
a.eC.set(q,r)
return r},
e9(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
nR(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
ea(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.e9(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aE(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.bh(a,r)
a.eC.set(p,q)
return q},
je(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.e9(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aE(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.bh(a,o)
a.eC.set(q,n)
return n},
kC(a,b,c){var s,r,q="+"+(b+"("+A.e9(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.aE(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.bh(a,s)
a.eC.set(q,r)
return r},
kz(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.e9(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.e9(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.nR(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.aE(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.bh(a,p)
a.eC.set(r,o)
return o},
jf(a,b,c,d){var s,r=b.as+("<"+A.e9(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.nT(a,b,c,r,d)
a.eC.set(r,s)
return s},
nT(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.it(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.bT(a,b,r,0)
m=A.cL(a,c,r,0)
return A.jf(a,n,m,c!==m)}}l=new A.aE(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.bh(a,l)},
nI(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nO(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.nK(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.kx(a,r,l,k,!1)
else if(q===46)r=A.kx(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.bS(a.u,a.e,k.pop()))
break
case 94:k.push(A.nV(a.u,k.pop()))
break
case 35:k.push(A.eb(a.u,5,"#"))
break
case 64:k.push(A.eb(a.u,2,"@"))
break
case 126:k.push(A.eb(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.nM(a,k)
break
case 38:A.nL(a,k)
break
case 63:p=a.u
k.push(A.kB(p,A.bS(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.kA(p,A.bS(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.nJ(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.ky(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.nP(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.bS(a.u,a.e,m)},
nK(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kx(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.o_(s,o.x)[p]
if(n==null)A.Y('No "'+p+'" in "'+A.mI(o)+'"')
d.push(A.ip(s,o,n))}else d.push(p)
return m},
nM(a,b){var s,r=a.u,q=A.kw(a,b),p=b.pop()
if(typeof p=="string")b.push(A.ea(r,p,q))
else{s=A.bS(r,a.e,p)
switch(s.w){case 11:b.push(A.jf(r,s,q,a.n))
break
default:b.push(A.je(r,s,q))
break}}},
nJ(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.kw(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.bS(p,a.e,o)
q=new A.fq()
q.a=s
q.b=n
q.c=m
b.push(A.kz(p,r,q))
return
case-4:b.push(A.kC(p,b.pop(),s))
return
default:throw A.h(A.ep("Unexpected state under `()`: "+A.z(o)))}},
nL(a,b){var s=b.pop()
if(0===s){b.push(A.eb(a.u,1,"0&"))
return}if(1===s){b.push(A.eb(a.u,4,"1&"))
return}throw A.h(A.ep("Unexpected extended operation "+A.z(s)))},
kw(a,b){var s=b.splice(a.p)
A.ky(a.u,a.e,s)
a.p=b.pop()
return s},
bS(a,b,c){if(typeof c=="string")return A.ea(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.nN(a,b,c)}else return c},
ky(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bS(a,b,c[s])},
nP(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bS(a,b,c[s])},
nN(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.h(A.ep("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.h(A.ep("Bad index "+c+" for "+b.v(0)))},
pd(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.U(a,b,null,c,null)
r.set(c,s)}return s},
U(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.bX(d))return!0
s=b.w
if(s===4)return!0
if(A.bX(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.U(a,c[b.x],c,d,e))return!0
q=d.w
p=t.a
if(b===p||b===t.T){if(q===7)return A.U(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.U(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.U(a,b.x,c,d,e))return!1
return A.U(a,A.j2(a,b),c,d,e)}if(s===6)return A.U(a,p,c,d,e)&&A.U(a,b.x,c,d,e)
if(q===7){if(A.U(a,b,c,d.x,e))return!0
return A.U(a,b,c,A.j2(a,d),e)}if(q===6)return A.U(a,b,c,p,e)||A.U(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.gT)return!0
if(q===12){if(b===t.b)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.U(a,j,c,i,e)||!A.U(a,i,e,j,c))return!1}return A.kM(a,b.x,c,d.x,e)}if(q===11){if(b===t.b)return!0
if(p)return!1
return A.kM(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.os(a,b,c,d,e)}if(o&&q===10)return A.ox(a,b,c,d,e)
return!1},
kM(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.U(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.U(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.U(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.U(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.U(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
os(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.ip(a,b,r[o])
return A.kG(a,p,null,c,d.y,e)}return A.kG(a,b.y,null,c,d.y,e)},
kG(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.U(a,b[s],d,e[s],f))return!1
return!0},
ox(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.U(a,r[s],c,q[s],e))return!1
return!0},
cO(a){var s=a.w,r=!0
if(!(a===t.a||a===t.T))if(!A.bX(a))if(s!==6)r=s===7&&A.cO(a.x)
return r},
bX(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
kF(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
it(a){return a>0?new Array(a):v.typeUniverse.sEA},
aE:function aE(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
fq:function fq(){this.c=this.b=this.a=null},
fw:function fw(a){this.a=a},
fo:function fo(){},
e8:function e8(a){this.a=a},
nA(){var s,r,q
if(self.scheduleImmediate!=null)return A.oT()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.eh(new A.hW(s),1)).observe(r,{childList:true})
return new A.hV(s,r,q)}else if(self.setImmediate!=null)return A.oU()
return A.oV()},
nB(a){self.scheduleImmediate(A.eh(new A.hX(t.M.a(a)),0))},
nC(a){self.setImmediate(A.eh(new A.hY(t.M.a(a)),0))},
nD(a){t.M.a(a)
A.nQ(0,a)},
nQ(a,b){var s=new A.ij()
s.f0(a,b)
return s},
iQ(a){var s
if(t.C.b(a)){s=a.gbI()
if(s!=null)return s}return B.R},
oo(a,b){if($.X===B.p)return null
return null},
op(a,b){if($.X!==B.p)A.oo(a,b)
if(t.C.b(a)){b=a.gbI()
if(b==null){A.mH(a,B.R)
b=B.R}}else b=B.R
return new A.aI(a,b)},
j8(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.mJ()
b.dh(new A.aI(new A.ai(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.dQ(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.cc()
b.c6(o.a)
A.cH(b,p)
return}b.a^=2
A.fB(null,null,b.b,t.M.a(new A.i4(o,b)))},
cH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.jm(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.cH(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.jm(j.a,j.b)
return}g=$.X
if(g!==h)$.X=h
else g=null
c=c.c
if((c&15)===8)new A.i8(q,d,n).$0()
else if(o){if((c&1)!==0)new A.i7(q,j).$0()}else if((c&2)!==0)new A.i6(d,q).$0()
if(g!=null)$.X=g
c=q.c
if(c instanceof A.aw){p=q.a.$ti
p=p.k("cc<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cd(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.j8(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cd(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
oE(a,b){var s=t.Q
if(s.b(a))return s.a(a)
s=t.v
if(s.b(a))return s.a(a)
throw A.h(A.fL(a,"onError",u.c))},
oC(){var s,r
for(s=$.cK;s!=null;s=$.cK){$.ef=null
r=s.b
$.cK=r
if(r==null)$.ee=null
s.a.$0()}},
oN(){$.jl=!0
try{A.oC()}finally{$.ef=null
$.jl=!1
if($.cK!=null)$.jx().$1(A.kV())}},
kS(a){var s=new A.fl(a),r=$.ee
if(r==null){$.cK=$.ee=s
if(!$.jl)$.jx().$1(A.kV())}else $.ee=r.b=s},
oK(a){var s,r,q,p=$.cK
if(p==null){A.kS(a)
$.ef=$.ee
return}s=new A.fl(a)
r=$.ef
if(r==null){s.b=p
$.cK=$.ef=s}else{q=r.b
s.b=q
$.ef=r.b=s
if(q==null)$.ee=s}},
jm(a,b){A.oK(new A.iw(a,b))},
kQ(a,b,c,d,e){var s,r=$.X
if(r===c)return d.$0()
$.X=c
s=r
try{r=d.$0()
return r}finally{$.X=s}},
oG(a,b,c,d,e,f,g){var s,r=$.X
if(r===c)return d.$1(e)
$.X=c
s=r
try{r=d.$1(e)
return r}finally{$.X=s}},
oF(a,b,c,d,e,f,g,h,i){var s,r=$.X
if(r===c)return d.$2(e,f)
$.X=c
s=r
try{r=d.$2(e,f)
return r}finally{$.X=s}},
fB(a,b,c,d){t.M.a(d)
if(B.p!==c){d=c.hT(d)
d=d}A.kS(d)},
hW:function hW(a){this.a=a},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
ij:function ij(){},
ik:function ik(a,b){this.a=a
this.b=b},
aI:function aI(a,b){this.a=a
this.b=b},
fm:function fm(){},
dS:function dS(a,b){this.a=a
this.$ti=b},
dV:function dV(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aw:function aw(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
i1:function i1(a,b){this.a=a
this.b=b},
i5:function i5(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a,b){this.a=a
this.b=b},
ia:function ia(a){this.a=a},
i7:function i7(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
fl:function fl(a){this.a=a
this.b=null},
ec:function ec(){},
ft:function ft(){},
ih:function ih(a,b){this.a=a
this.b=b},
iw:function iw(a,b){this.a=a
this.b=b},
ku(a,b){var s=a[b]
return s===a?null:s},
ja(a,b,c){if(c==null)a[b]=a
else a[b]=c},
j9(){var s=Object.create(null)
A.ja(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
mc(a,b){return new A.aA(a.k("@<0>").aw(b).k("aA<1,2>"))},
k1(a,b,c){return b.k("@<0>").aw(c).k("j0<1,2>").a(A.kZ(a,new A.aA(b.k("@<0>").aw(c).k("aA<1,2>"))))},
Z(a,b){return new A.aA(a.k("@<0>").aw(b).k("aA<1,2>"))},
md(a){return new A.e0(a.k("e0<0>"))},
jc(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
f_(a,b,c){var s=A.mc(b,c)
a.b4(0,new A.hh(s,b,c))
return s},
j1(a){var s,r
if(A.jp(a))return"{...}"
s=new A.bO("")
try{r={}
B.e.N($.aq,a)
s.a+="{"
r.a=!0
a.b4(0,new A.hi(r,s))
s.a+="}"}finally{if(0>=$.aq.length)return A.a($.aq,-1)
$.aq.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dW:function dW(){},
dZ:function dZ(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dX:function dX(a,b){this.a=a
this.$ti=b},
dY:function dY(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
e0:function e0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fr:function fr(a){this.a=a
this.b=null},
e1:function e1(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
y:function y(){},
a6:function a6(){},
hi:function hi(a,b){this.a=a
this.b=b},
bd:function bd(){},
e6:function e6(){},
o1(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.ls()
else s=new Uint8Array(o)
for(r=0;r<o;++r){q=b+r
if(!(q<a.length))return A.a(a,q)
p=a[q]
if((p&255)!==p)p=255
s[r]=p}return s},
o0(a,b,c,d){var s=a?$.lr():$.lq()
if(s==null)return null
if(0===c&&d===b.length)return A.kE(s,b)
return A.kE(s,b.subarray(c,d))},
kE(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
k0(a,b,c){return new A.dj(a,b)},
of(a){return a.iT()},
nG(a,b){return new A.id(a,[],A.oZ())},
nH(a,b,c){var s,r=new A.bO(""),q=A.nG(r,b)
q.cn(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
o2(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
is:function is(){},
ir:function ir(){},
im:function im(){},
il:function il(){},
bm:function bm(){},
ew:function ew(){},
ez:function ez(){},
dj:function dj(a,b){this.a=a
this.b=b},
eY:function eY(a,b){this.a=a
this.b=b},
eX:function eX(){},
hb:function hb(a){this.b=a},
ie:function ie(){},
ig:function ig(a,b){this.a=a
this.b=b},
id:function id(a,b,c){this.c=a
this.a=b
this.b=c},
eZ:function eZ(){},
he:function he(){},
hd:function hd(a){this.a=a},
ff:function ff(){},
fg:function fg(a){this.a=a},
fx:function fx(a){this.a=a
this.b=16
this.c=0},
m_(a){var s=!0
s=typeof a=="number"
if(s)A.jQ(a)},
jQ(a){throw A.h(A.fL(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
lY(a,b){a=A.R(a,new Error())
if(a==null)a=A.fz(a)
a.stack=b.v(0)
throw a},
aC(a,b,c,d){var s,r=J.iY(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
k2(a,b){var s,r,q=A.o([],b.k("u<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a0)(a),++r)B.e.N(q,b.a(a[r]))
return q},
n(a,b){var s,r
if(Array.isArray(a))return A.o(a.slice(0),b.k("u<0>"))
s=A.o([],b.k("u<0>"))
for(r=J.em(a);r.C();)B.e.N(s,r.gJ())
return s},
hy(a,b,c){var s,r,q,p,o
A.am(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.h(A.ab(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.kg(b>0||c<o?p.slice(b,c):p)}if(t.bm.b(a))return A.mL(a,b,c)
if(r)a=J.lM(a,c)
if(b>0)a=J.fK(a,b)
s=A.n(a,t.q)
return A.kg(s)},
mL(a,b,c){var s=a.length
if(b>=s)return""
return A.mG(a,b,c==null||c>s?s:c)},
kj(a,b,c){var s=J.em(b)
if(!s.C())return a
if(c.length===0){do a+=A.z(s.gJ())
while(s.C())}else{a+=A.z(s.gJ())
while(s.C())a=a+c+A.z(s.gJ())}return a},
mJ(){return A.ei(new Error())},
lW(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
jM(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ey(a){if(a>=10)return""+a
return"0"+a},
eA(a){if(typeof a=="number"||A.jk(a)||a==null)return J.bZ(a)
if(typeof a=="string")return JSON.stringify(a)
return A.mE(a)},
lZ(a,b){A.fC(a,"error",t.K)
A.fC(b,"stackTrace",t.l)
A.lY(a,b)},
ep(a){return new A.eo(a)},
a2(a,b){return new A.ai(!1,null,b,a)},
fL(a,b,c){return new A.ai(!0,a,b,c)},
fM(a,b,c){return a},
ab(a,b,c,d,e){return new A.bc(b,c,!0,a,d,"Invalid value")},
aU(a,b,c){if(0>a||a>c)throw A.h(A.ab(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.h(A.ab(b,a,c,"end",null))
return b}return c},
am(a,b){if(a<0)throw A.h(A.ab(a,0,null,b,null))
return a},
fY(a,b,c,d){return new A.eI(b,!0,a,d,"Index out of range")},
aO(a){return new A.dK(a)},
kn(a){return new A.fd(a)},
j4(a){return new A.cC(a)},
aJ(a){return new A.ev(a)},
jS(a,b,c){return new A.a9(a,b,c)},
m9(a,b,c){var s,r
if(A.jp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.o([],t.s)
B.e.N($.aq,a)
try{A.oB(a,s)}finally{if(0>=$.aq.length)return A.a($.aq,-1)
$.aq.pop()}r=A.kj(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
iX(a,b,c){var s,r
if(A.jp(a))return b+"..."+c
s=new A.bO(b)
B.e.N($.aq,a)
try{r=s
r.a=A.kj(r.a,a,", ")}finally{if(0>=$.aq.length)return A.a($.aq,-1)
$.aq.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
oB(a,b){var s,r,q,p,o,n,m,l=a.gB(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.C())return
s=A.z(l.gJ())
B.e.N(b,s)
k+=s.length+2;++j}if(!l.C()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gJ();++j
if(!l.C()){if(j<=4){B.e.N(b,A.z(p))
return}r=A.z(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gJ();++j
for(;l.C();p=o,o=n){n=l.gJ();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.e.N(b,"...")
return}}q=A.z(p)
r=A.z(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.e.N(b,m)
B.e.N(b,q)
B.e.N(b,r)},
k4(a,b,c,d){var s
if(B.t===c)return A.kk(B.a.gA(a),B.a.gA(b),$.fI())
if(B.t===d){s=B.a.gA(a)
b=B.a.gA(b)
c=J.bk(c)
return A.hz(A.aW(A.aW(A.aW($.fI(),s),b),c))}s=B.a.gA(a)
b=B.a.gA(b)
c=J.bk(c)
d=J.bk(d)
d=A.hz(A.aW(A.aW(A.aW(A.aW($.fI(),s),b),c),d))
return d},
k(a){var s,r,q=$.fI()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a0)(a),++r)q=A.aW(q,J.bk(a[r]))
return A.hz(q)},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
i_:function i_(){},
H:function H(){},
eo:function eo(a){this.a=a},
aX:function aX(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bc:function bc(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eI:function eI(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dK:function dK(a){this.a=a},
fd:function fd(a){this.a=a},
cC:function cC(a){this.a=a},
ev:function ev(a){this.a=a},
f2:function f2(){},
dG:function dG(){},
i0:function i0(a){this.a=a},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
d:function d(){},
ae:function ae(){},
D:function D(){},
fu:function fu(){},
bO:function bO(a){this.a=a},
eC:function eC(a,b){this.a=a
this.$ti=b},
hj:function hj(a){this.a=a},
oc(a,b,c){t.Z.a(a)
if(A.v(c)>=1)return a.$1(b)
return a.$0()},
pi(a,b){var s=new A.aw($.X,b.k("aw<0>")),r=new A.dS(s,b.k("dS<0>"))
a.then(A.eh(new A.iJ(r,b),1),A.eh(new A.iK(r),1))
return s},
kP(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
kY(a){if(A.kP(a))return a
return new A.ix(new A.dZ(t.hg)).$1(a)},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(a){this.a=a},
ix:function ix(a){this.a=a},
aa:function aa(a,b,c){this.a=a
this.b=b
this.$ti=c},
iU(a,b){var s=new A.fR()
s.eP(a,b)
return s},
fR:function fR(){this.a=$
this.b=0
this.c=2147483647},
da:function da(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.r=_.f=_.e=0
_.w=d
_.x=null
_.y=0},
cJ:function cJ(a,b){this.a=a
this.b=b},
hU:function hU(){},
iu:function iu(){},
lX(a,b,c,d){var s=A.jb(),r=A.jb(),q=A.jb(),p=new Uint16Array(16),o=new Uint32Array(573),n=new Uint8Array(573)
s=new A.fN(a,c,s,r,q,p,o,n)
s.fX(b,d)
s.fC(B.Q)
return s},
jO(a,b,c,d){var s,r=b*2,q=a.length
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
s=c*2
if(!(s>=0&&s<q))return A.a(a,s)
s=a[s]
if(r>=s)if(r===s){if(!(b>=0&&b<573))return A.a(d,b)
r=d[b]
if(!(c>=0&&c<573))return A.a(d,c)
r=r<=d[c]}else r=!1
else r=!0
return r},
jb(){return new A.ib()},
nE(a,b,c){var s,r,q,p,o,n,m,l=new Uint16Array(16)
for(s=0,r=1;r<=15;++r){s=s+c[r-1]<<1>>>0
if(!(r<16))return A.a(l,r)
l[r]=s}for(q=a.length,p=0;p<=b;++p){o=p*2
n=o+1
if(!(n<q))return A.a(a,n)
m=a[n]
if(m===0)continue
if(!(m<16))return A.a(l,m)
n=l[m]
if(!(m<16))return A.a(l,m)
l[m]=n+1
n=A.nF(n,m)
a.$flags&2&&A.c(a)
if(!(o<q))return A.a(a,o)
a[o]=n}},
nF(a,b){var s,r=0
do{s=A.ah(a,1)
r=(r|a&1)<<1>>>0
if(--b,b>0){a=s
continue}else break}while(!0)
return A.ah(r,1)},
kv(a){var s
if(a<256){if(!(a>=0))return A.a(B.V,a)
s=B.V[a]}else{s=256+A.ah(a,7)
if(!(s<512))return A.a(B.V,s)
s=B.V[s]}return s},
jd(a,b,c,d,e){return new A.ii(a,b,c,d,e)},
ah(a,b){if(a>=0)return B.a.bu(a,b)
else return B.a.bu(a,b)+B.a.L(2,(~b>>>0)+65536&65535)},
cG:function cG(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0
_.x=_.w=_.r=_.f=$
_.y=2
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=$
_.k1=0
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=$
_.p4=c
_.R8=d
_.RG=e
_.rx=f
_.ry=g
_.x1=_.to=$
_.x2=h
_.aI=_.ap=_.bb=_.bq=_.b3=_.af=_.b2=_.y2=_.y1=_.xr=$},
av:function av(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ib:function ib(){this.c=this.b=this.a=$},
ii:function ii(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=null
_.c=b
_.f=!1
_.w=_.r=0},
at(a){return new A.en(a,null,null)},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
cS:function cS(a,b){this.a=a
this.b=b},
jW(a,b,c){return new A.db(a.b,a.c+b,c,a.a)},
db:function db(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=0
_.a=d},
fn:function fn(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.r=_.f=_.e=0
_.w=!1
_.a=d},
h_(a,b,c,d){var s,r,q,p,o=new A.dc(b)
if(d==null)d=0
A.am(d,"offset")
if(d<0)d=0
else{s=a.length
if(d>s)d=s}r=a.length-d
if(c==null)c=r
if(c<0||c>r)c=r
q=t.p.b(a)?a:new Uint8Array(A.B(a))
p=J.O(B.c.gu(q),q.byteOffset+d,c)
o.b=p
o.d=p.length
return o},
dc:function dc(a){var _=this
_.b=null
_.c=0
_.d=$
_.a=a},
dd:function dd(){},
mq(a){return new A.f4(new Uint8Array(32768),a)},
f4:function f4(a,b){this.b=0
this.c=a
this.a=b},
dy:function dy(){},
pp(a){var s,r,q,p,o,n,m,l,k,j,i
if(a.length!==4||B.e.hS(a,new A.iL()))throw A.h(A.a2("Four normalized image corners are required",null))
for(s=a.length,r=0,q=0;q<4;q=o){if(!(q<s))return A.a(a,q)
p=a[q]
o=q+1
n=o%4
if(!(n<s))return A.a(a,n)
m=a[n]
n=(q+2)%4
if(!(n<s))return A.a(a,n)
l=a[n]
n=m.a
k=p.a
j=m.b
i=p.b
if((n-k)*(l.b-j)-(j-i)*(l.a-n)<=0.000001)throw A.h(A.a2("Corners must form a convex clockwise quadrilateral",null))
r+=k*j-i*n}if(r<0.0002)throw A.h(A.a2("Crop area is too small",null))},
ph(c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6={},c7=c9.b,c8=!0
if(c7>=1)if(c7<=6){c8=c9.c
c8=c8<1||c8>6}if(c8)A.Y(A.a2("Scan grids must have 1\u20136 rows and columns",c5))
c8=c9.a
if(c8.length>20971520)A.Y(A.a2("Scan image exceeds 20 MiB",c5))
s=c9.e
A.pp(s)
r=c6.a=A.oe(c8)
c8=r.gbj().m(0,"ifd0").a.aC(274)&&r.gbj().m(0,"ifd0").gbr()!==1?c6.a=A.oW(r):r
q=c9.d
if(q!==0)c6.a=A.fD(c8,90*q)
c8=A.an(s)
q=c8.k("dk<1,aa<w>>")
p=A.n(new A.dk(s,c8.k("aa<w>(1)").a(new A.iI(c6)),q),q.k("aB.E"))
if(1>=p.length)return A.a(p,1)
c8=p[1].c3(0,p[0]).gck()
s=p.length
if(2>=s)return A.a(p,2)
q=p[2]
if(3>=s)return A.a(p,3)
o=Math.max(c8,q.c3(0,p[3]).gck())+1
if(3>=p.length)return A.a(p,3)
q=p[3].c3(0,p[0]).gck()
if(2>=p.length)return A.a(p,2)
n=Math.max(q,p[2].c3(0,p[1]).gck())+1
m=Math.min(1,4096/Math.max(o,n))
q=c9.c
l=B.a.S(B.b.ew(o*m),q,4096)
k=B.a.S(B.b.ew(n*m),c7,4096)
c8=c6.a
if(c8.gT()<2||c8.gV()<2)throw A.h(B.bh)
c8=p.length
if(1>=c8)return A.a(p,1)
s=p[1]
j=s.a
if(2>=c8)return A.a(p,2)
i=p[2]
h=i.a
g=j-h
if(3>=c8)return A.a(p,3)
c8=p[3]
f=c8.a
e=f-h
s=s.b
i=i.b
d=s-i
c8=c8.b
c=c8-i
b=p[0]
a=b.a
a0=a-j+h-f
b=b.b
a1=b-s+i-c8
a2=g*c-e*d
if(Math.abs(a2)<1e-10)A.Y(A.a2("Degenerate crop",c5))
i=(a0*c-e*a1)/a2
h=(g*a1-a0*d)/a2
j=j-a+i*j
f=f-a+h*f
s=s-b+i*s
c8=c8-b+h*c8
a3=A.o([],t.h)
for(a4=0;a4<c7;){a5=B.a.ac(a4*k,c7);++a4
a6=B.a.ac(a4*k,c7)
for(a7=a6-a5,a8=0;a8<q;){a9=B.a.ac(a8*l,q);++a8
b0=B.a.ac(a8*l,q)
b1=A.cp(c5,c5,B.k,0,B.v,a7,c5,0,3,c5,b0-a9,!1)
for(b2=a5;b2<a6;++b2){b3=(b2+0.5)/k
for(b4=b2-a5,b5=h*b3,b6=f*b3,b7=c8*b3,b8=a9;b8<b0;++b8){b9=(b8+0.5)/l
a2=i*b9+b5+1
c0=c6.a
c1=c0.a
c1=c1==null?c5:c1.a
if(c1==null)c1=0
c1=B.b.S((j*b9+b6+a)/a2,0,c1-1)
c2=c6.a.a
c2=c2==null?c5:c2.b
if(c2==null)c2=0
c3=c0.d1(c1,B.b.S((s*b9+b7+b)/a2,0,c2-1),B.bq)
c4=c3.ga8()
c2=c3.ga5()
b9=c3.ga2()
c1=c3.ga3()
c0=b1.a
if(c0!=null)c0.aG(b8-a9,b4,(c2*c4+1-c4)*255,(b9*c4+1-c4)*255,(c1*c4+1-c4)*255)}}B.e.N(a3,new A.hr(B.hR,1,c5).i5(b1,!1))}}return a3},
pa(a){var s,r,q,p,o,n,m,l,k
if(a.length>20971520)throw A.h(A.a2("Scan image exceeds 20 MiB",null))
try{p=t.N
o=A.o([],t.dm)
n=A.o([],t.t)
m=new A.fk(268435456)
m.b=24e6
s=A.o([new A.f6(new A.h0(A.Z(p,p),o,n),24e6),new A.eT(24e6),m],t.g5)
for(p=s,o=p.length,l=0;l<p.length;p.length===o||(0,A.a0)(p),++l){r=p[l]
if(!r.cX(a))continue
q=r.cq(a)
if(q==null||q.gT()<2||q.gV()<2||q.gT()*q.gV()>24e6)throw A.h(B.bk)
q.gT()
q.gV()
return new A.hv(r)}}catch(k){if(A.as(k) instanceof A.a9)throw k
else throw A.h(B.a4)}throw A.h(B.bm)},
oe(a){var s,r,q=A.pa(a)
try{s=q.c.cU(0)
if(s==null||s.gT()*s.gV()>24e6)throw A.h(B.a4)
return s}catch(r){if(A.as(r) instanceof A.a9)throw r
else throw A.h(B.a4)}},
iL:function iL(){},
hw:function hw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iI:function iI(a){this.a=a},
hv:function hv(a){this.c=a},
j3:function j3(){var _=this
_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$},
G:function G(a){this.a=-1
this.b=a},
c0:function c0(a){this.a=a},
c1:function c1(a){this.a=a},
c2:function c2(a){this.a=a},
c3:function c3(a){this.a=a},
c4:function c4(a){this.a=a},
c5:function c5(a){this.a=a},
c6:function c6(a,b){this.a=a
this.b=b},
c7:function c7(a){this.a=a},
c8:function c8(a,b){this.a=a
this.b=b},
c9:function c9(a){this.a=a},
ca:function ca(a,b){this.a=a
this.b=b},
lV(a,b,c,d){var s=new A.et(new Uint8Array(4))
s.eO(a,b,c,d)
return s},
bn:function bn(a){this.a=a},
et:function et(a){this.a=a},
cN(a,b,c){var s
if(b===c)return a
switch(b.a){case 0:if(a===0)s=0
else{s=B.b_.m(0,c)
s.toString}return s
case 1:switch(c.a){case 0:return a===0?0:1
case 1:return a
case 2:return a*5
case 3:return a*75
case 4:return a*21845
case 5:return a*1431655765
case 6:return a*42
case 7:return a*10922
case 8:return a*715827882
case 9:case 10:case 11:return a/3}break
case 2:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.i(A.v(a),1)
case 2:return a
case 3:return a*17
case 4:return a*4369
case 5:return a*286331153
case 6:return a*8
case 7:return a*2184
case 8:return a*143165576
case 9:case 10:case 11:return a/3}break
case 3:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.i(A.v(a),6)
case 2:return B.a.i(A.v(a),4)
case 3:return a
case 4:return a*257
case 5:return a*16843009
case 6:return B.a.i(A.v(a),1)
case 7:return a*128
case 8:return a*8421504
case 9:case 10:case 11:return a/255}break
case 4:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.i(A.v(a),14)
case 2:return B.a.i(A.v(a),12)
case 3:return B.a.i(A.v(a),8)
case 4:return a
case 5:return A.v(a)<<8>>>0
case 6:return B.a.i(A.v(a),9)
case 7:return B.a.i(A.v(a),1)
case 8:return a*524296
case 9:case 10:case 11:return a/65535}break
case 5:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.i(A.v(a),30)
case 2:return B.a.i(A.v(a),28)
case 3:return B.a.i(A.v(a),24)
case 4:return B.a.i(A.v(a),16)
case 5:return a
case 6:return B.a.i(A.v(a),25)
case 7:return B.a.i(A.v(a),17)
case 8:return B.a.i(A.v(a),1)
case 9:case 10:case 11:return a/4294967295}break
case 6:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.i(A.v(a),5)
case 2:return a<=0?0:B.a.i(A.v(a),3)
case 3:return a<=0?0:A.v(a)<<1>>>0
case 4:return a<=0?0:A.v(a)*516
case 5:return a<=0?0:A.v(a)*33818640
case 6:return a
case 7:return a*258
case 8:return a*16909320
case 9:case 10:case 11:return a/127}break
case 7:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.i(A.v(a),15)
case 2:return a<=0?0:B.a.i(A.v(a),11)
case 3:return a<=0?0:B.a.i(A.v(a),7)
case 4:return a<=0?0:A.v(a)<<1>>>0
case 5:return a<=0?0:A.v(a)*131076
case 6:return B.a.i(A.v(a),8)
case 7:return a
case 8:return A.v(a)*65538
case 9:case 10:case 11:return a/32767}break
case 8:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.i(A.v(a),29)
case 2:return a<=0?0:B.a.i(A.v(a),27)
case 3:return a<=0?0:B.a.i(A.v(a),23)
case 4:return a<=0?0:B.a.i(A.v(a),16)
case 5:return a<=0?0:A.v(a)<<1>>>0
case 6:return B.a.i(A.v(a),24)
case 7:return B.a.i(A.v(a),16)
case 8:return a
case 9:case 10:case 11:return a/2147483647}break
case 9:case 10:case 11:switch(c.a){case 0:return a===0?0:1
case 1:return B.b.h(B.b.S(a,0,1)*3)
case 2:return B.b.h(B.b.S(a,0,1)*15)
case 3:return B.b.h(B.b.S(a,0,1)*255)
case 4:return B.b.h(B.b.S(a,0,1)*65535)
case 5:return B.b.h(B.b.S(a,0,1)*4294967295)
case 6:return B.b.h(a<0?B.b.S(a,-1,1)*128:B.b.S(a,-1,1)*127)
case 7:return B.b.h(a<0?B.b.S(a,-1,1)*32768:B.b.S(a,-1,1)*32767)
case 8:return B.b.h(a<0?B.b.S(a,-1,1)*2147483648:B.b.S(a,-1,1)*2147483647)
case 9:case 10:case 11:return a}break}},
a8:function a8(a,b){this.a=a
this.b=b},
cY(a){var s,r=new A.bp(A.Z(t.N,t.P))
r.eQ(a)
s=a.b
if(s!=null)r.b=new Uint8Array(A.B(s))
return r},
jP(a){var s=new A.bp(A.Z(t.N,t.P))
s.bV(a)
return s},
bp:function bp(a){this.b=null
this.c=0
this.a=a},
fp:function fp(a,b){this.a=a
this.b=b},
f(a,b,c){return new A.eB(a,b)},
eB:function eB(a,b){this.a=a
this.b=b},
aQ:function aQ(a){this.a=a},
fS:function fS(a){this.a=a},
jU(a){var s=new A.aK(A.Z(t.q,t.r),new A.aQ(A.Z(t.N,t.P)))
s.i_(a)
return s},
aK:function aK(a,b){this.a=a
this.b=b},
fT:function fT(a){this.a=a},
fU:function fU(a){this.a=a},
m5(a){var s=new Uint32Array(1)
s[0]=a
return new A.bt(s)},
m6(a,b){var s,r=J.h2(b,t.i)
for(s=0;s<b;++s)r[s]=new A.cA(a.O(),a.O())
return new A.ch(r)},
m7(a,b){var s,r,q,p,o=J.h2(b,t.i)
for(s=0;s<b;++s){r=a.O()
q=$.cP()
q.$flags&2&&A.c(q)
q[0]=r
r=$.iN()
if(0>=r.length)return A.a(r,0)
p=r[0]
q[0]=a.O()
o[s]=new A.cA(p,r[0])}return new A.ck(o)},
a3:function a3(a,b){this.a=a
this.b=b},
S:function S(){},
ce:function ce(a){this.a=a},
cf:function cf(a){this.a=a},
cm:function cm(a){this.a=a},
bt:function bt(a){this.a=a},
ch:function ch(a){this.a=a},
ci:function ci(a){this.a=a},
cl:function cl(a){this.a=a},
cj:function cj(a){this.a=a},
ck:function ck(a){this.a=a},
cn:function cn(a){this.a=a},
cg:function cg(a){this.a=a},
co:function co(a){this.a=a},
d2:function d2(a){this.a=a},
bo:function bo(){},
fO:function fO(){},
jL(a,b,c,d,e){var s,r
if(a===b)s=0
else s=a===1&&b===4?2:1
if(c===d)r=0
else r=c===1&&d===4?2:1
return new A.eu(e,s,r)},
eu:function eu(a,b,c){this.e=a
this.f=b
this.r=c},
l2(a){var s,r,q=$.lz()
A.m_(a)
s=q.a
r=s.get(a)
if(r==null){r=A.oa(a)
q.$ti.k("1?").a(r)
s.set(a,r)
q=r}else q=r
return q},
oa(a){var s,r,q,p,o,n=new Uint16Array(512)
for(s=0;s<512;++s)for(r=a,q=1;q<=9;++q){p=r[B.a.ad(s,9-q)&1]
if(p instanceof A.cd){o=p.a
if(!(s<512))return A.a(n,s)
n[s]=(q<<8|o)>>>0
break}if(!(p instanceof A.bs))break
r=p.a}return n},
b6:function b6(){},
bs:function bs(a){this.a=a},
cd:function cd(a){this.a=a},
k_(a){var s,r=a.f.e
r.toString
s=a.b
s=new A.h8(a,B.a.ac(r+s-1,s),a.gco())
s.eZ(a)
return s},
l0(a){var s,r=A.k_(a)
r.eC(0,a.gco())
s=r.d
s===$&&A.b()
return s},
h8:function h8(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
h4:function h4(){this.d=null},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.x=_.w=_.r=_.f=_.e=$
_.y=!1
_.z=0
_.ay=_.ax=_.at=_.as=_.Q=$},
h5(){var s,r,q,p,o=A.aC(4,null,!1,t.bC),n=A.o([],t.f8),m=t.ez,l=J.jY(0,m)
m=J.jY(0,m)
s=A.o([],t.eB)
r=A.o([],t.cJ)
q=new Uint8Array(64)
p=new Int32Array(64)
return new A.eS(new A.bp(A.Z(t.N,t.P)),o,n,l,m,s,r,q,p,new Int16Array(0))},
ma(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=B.a.ac(8,b),e=f*f
for(s=e>>>1,r=c.length,q=0;q<b;++q){p=d+q
if(!(p<r))return A.a(c,p)
p=c[p]
p.toString
for(o=p.$flags|0,n=q*f,m=0;m<b;++m){for(l=m*f,k=0,j=0;j<f;++j){i=(n+j)*8+l
for(h=0;h<f;++h){g=i+h
if(!(g<64))return A.a(a,g)
k+=a[g]}}l=a0+m
g=B.a.ac(k+s,e)
o&2&&A.c(p)
if(!(l<p.length))return A.a(p,l)
p[l]=g}}},
eS:function eS(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=0
_.b=1
_.d=_.c=$
_.x=_.r=_.f=_.e=null
_.y=a
_.z=b
_.Q=c
_.as=d
_.at=e
_.ax=f
_.ay=!1
_.ch=0
_.cx=_.CW=!1
_.cy=null
_.db=g
_.dx=h
_.dy=i
_.fr=j},
cI:function cI(a){this.a=a
this.b=0},
fs:function fs(){},
eU:function eU(a,b){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=a
_.z=b},
h9:function h9(){this.b=this.a=0},
ha:function ha(){this.r=this.f=$},
eV:function eV(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.f=$
_.r=null
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.ay=null
_.cx=_.CW=_.ch=0
_.cy=!1
_.dx=_.db=0
_.dy=$
_.fr=i},
eT:function eT(a){this.a=a
this.d=null},
h7:function h7(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.b=b},
dC:function dC(){},
eL:function eL(a,b,c){this.y=a
this.b=b
this.c=c},
bb:function bb(a,b){this.a=a
this.b=b},
hu:function hu(){},
h0:function h0(a,b,c){var _=this
_.c=_.b=_.a=0
_.d=-1
_.r=_.f=0
_.x=_.w=null
_.Q=""
_.at=null
_.ax=a
_.cy=b
_.db=c},
f6:function f6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.e=$
_.f=0},
hp:function hp(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
fv:function fv(){},
mv(a){var s,r,q=new A.aj(a),p=!q.gF(q)&&a.length<=79&&q.gic(q)!==32&&q.gcj(q)!==32,o=a.length,n=0
for(;;){if(!(p&&n<o))break
if(!(n<o))return A.a(a,n)
s=a.charCodeAt(n)
if(!(s>=32&&s<=126))r=s>=161&&s<=255
else r=!0
if(r){if(s===32){r=n-1
if(!(r>=0))return A.a(a,r)
r=a.charCodeAt(r)===32}else r=!1
p=!r}else p=!1;++n}return p?a:"ICC_PROFILE"},
mt(a,b,c){var s,r,q,p=a.length,o=c.$flags|0,n=1,m=0
for(;;){if(!(m<b&&m<p))break
s=n+1
if(!(m<p))return A.a(a,m)
r=a[m]
o&2&&A.c(c)
if(!(n<c.length))return A.a(c,n)
c[n]=r;++m
n=s}for(m=b;m<p;++m,n=s){s=n+1
r=a[m]
q=m-b
if(!(q>=0))return A.a(a,q)
q=a[q]
o&2&&A.c(c)
if(!(n<c.length))return A.a(c,n)
c[n]=r-q}},
mu(a,b,c){var s,r,q,p,o,n,m,l=a.length
for(s=b.length,r=c.$flags|0,q=1,p=0;p<l;++p,q=o){o=q+1
n=a[p]
if(!(p<s))return A.a(b,p)
m=b[p]
r&2&&A.c(c)
if(!(q<c.length))return A.a(c,q)
c[q]=n-m}},
mr(a,b,c,d){var s,r,q,p,o=a.length,n=b.length,m=d.$flags|0,l=1,k=0
for(;;){if(!(k<c&&k<o))break
s=l+1
if(!(k<o))return A.a(a,k)
r=a[k]
if(!(k<n))return A.a(b,k)
q=b[k]
m&2&&A.c(d)
if(!(l<d.length))return A.a(d,l)
d[l]=r-(q>>>1);++k
l=s}for(k=c;k<o;++k,l=s){s=l+1
r=a[k]
q=k-c
if(!(q>=0))return A.a(a,q)
q=a[q]
if(!(k<n))return A.a(b,k)
p=b[k]
m&2&&A.c(d)
if(!(l<d.length))return A.a(d,l)
d[l]=r-(q+p>>>1)}},
ms(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=a.length,i=b.length,h=d.$flags|0,g=1,f=0
for(;;){if(!(f<c&&f<j))break
s=g+1
if(!(f<j))return A.a(a,f)
r=a[f]
if(!(f<i))return A.a(b,f)
q=b[f]
h&2&&A.c(d)
if(!(g<d.length))return A.a(d,g)
d[g]=r-q;++f
g=s}for(f=c;f<j;++f,g=s){r=f-c
if(!(r>=0))return A.a(a,r)
p=a[r]
if(!(f<i))return A.a(b,f)
o=b[f]
if(!(r<i))return A.a(b,r)
n=b[r]
m=o-n
l=p-n
k=m+l
if(m<0)m=-m
if(l<0)l=-l
if(k<0)k=-k
s=g+1
r=a[f]
if(m<=l&&m<=k)q=p
else q=l<=k?o:n
h&2&&A.c(d)
if(!(g<d.length))return A.a(d,g)
d[g]=r-q}},
f7:function f7(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c){var _=this
_.a=null
_.b=a
_.c=0
_.d=b
_.e=$
_.f=0
_.r=!1
_.w=null
_.z=c},
ht:function ht(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
j5(a,b){var s=new Int32Array(4),r=new Int32Array(4),q=new Int8Array(4),p=new Int8Array(4),o=A.aC(8,null,!1,t.eW),n=A.aC(4,null,!1,t.dP)
return new A.hD(a,b,new A.hL(),new A.hO(),new A.hF(s,r),new A.hQ(q,p),o,n,new Uint8Array(4))},
af(a,b,c,d,e){var s,r,q,p,o
for(s=c.length,r=a.$flags|0,q=0;q<e;++q){p=b+q
o=d+q
if(!(o>=0&&o<s))return A.a(c,o)
o=c[o]
r&2&&A.c(a)
if(!(p>=0&&p<a.length))return A.a(a,p)
a[p]=o}},
kq(a,b,c){if(c===0)if(a===0)return b===0?6:5
else return b===0?4:0
return c},
hD:function hD(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=$
_.d=null
_.e=$
_.f=c
_.r=d
_.w=e
_.x=f
_.as=_.Q=_.z=_.y=0
_.ax=_.at=null
_.ch=_.ay=$
_.cx=_.CW=null
_.cy=$
_.db=g
_.dy=h
_.fr=null
_.fy=_.fx=$
_.go=null
_.id=i
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=$
_.R8=_.p4=null
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=$
_.xr=null
_.y2=_.y1=0
_.b2=$
_.af=null
_.b3=$
_.bb=_.bq=null
_.ap=$},
ko(a){var s=new A.dM(a)
s.b=254
s.c=0
s.d=-8
return s},
dM:function dM(a){var _=this
_.a=a
_.d=_.c=_.b=$
_.e=!1},
A(a,b,c){return B.a.au(B.a.i(a+2*b+c+2,2),32)},
n_(a){var s,r=A.o([A.A(J.e(a.a,a.d+-33),J.e(a.a,a.d+-32),J.e(a.a,a.d+-31)),A.A(J.e(a.a,a.d+-32),J.e(a.a,a.d+-31),J.e(a.a,a.d+-30)),A.A(J.e(a.a,a.d+-31),J.e(a.a,a.d+-30),J.e(a.a,a.d+-29)),A.A(J.e(a.a,a.d+-30),J.e(a.a,a.d+-29),J.e(a.a,a.d+-28))],t.t)
for(s=0;s<4;++s)a.cl(s*32,4,r)},
mS(a){var s=J.e(a.a,a.d+-33),r=J.e(a.a,a.d+-1),q=J.e(a.a,a.d+31),p=J.e(a.a,a.d+63),o=J.e(a.a,a.d+95),n=A.r(a,0),m=n.cm(),l=A.A(s,r,q)
m.$flags&2&&A.c(m)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*l
n.d+=32
l=n.cm()
m=A.A(r,q,p)
l.$flags&2&&A.c(l)
if(0>=l.length)return A.a(l,0)
l[0]=16843009*m
n.d+=32
m=n.cm()
l=A.A(q,p,o)
m.$flags&2&&A.c(m)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*l
n.d+=32
l=n.cm()
m=A.A(p,o,o)
l.$flags&2&&A.c(l)
if(0>=l.length)return A.a(l,0)
l[0]=16843009*m},
mQ(a){var s,r,q,p
for(s=4,r=0;r<4;++r)s+=J.e(a.a,a.d+(r-32))+J.e(a.a,a.d+(-1+r*32))
s=B.a.i(s,3)
for(r=0;r<4;++r){q=a.a
p=a.d+r*32
J.cQ(q,p,p+4,s)}},
j6(a,b){var s,r,q,p,o,n,m=255-J.e(a.a,a.d+-33)
for(s=0,r=0;r<b;++r){q=m+J.e(a.a,a.d+(s-1))
for(p=0;p<b;++p){o=$.iM()
n=q+J.e(a.a,a.d+(-32+p))
if(!(n>=0&&n<766))return A.a(o,n)
n=o[n]
J.a1(a.a,a.d+(s+p),n)}s+=32}},
mY(a){A.j6(a,4)},
mZ(a){A.j6(a,8)},
mX(a){A.j6(a,16)},
mW(a){var s,r=J.e(a.a,a.d+-1),q=J.e(a.a,a.d+31),p=J.e(a.a,a.d+63),o=J.e(a.a,a.d+95),n=J.e(a.a,a.d+-33),m=J.e(a.a,a.d+-32),l=J.e(a.a,a.d+-31),k=J.e(a.a,a.d+-30),j=J.e(a.a,a.d+-29)
a.j(0,96,A.A(q,p,o))
s=A.A(r,q,p)
a.j(0,97,s)
a.j(0,64,s)
s=A.A(n,r,q)
a.j(0,98,s)
a.j(0,65,s)
a.j(0,32,s)
s=A.A(m,n,r)
a.j(0,99,s)
a.j(0,66,s)
a.j(0,33,s)
a.j(0,0,s)
s=A.A(l,m,n)
a.j(0,67,s)
a.j(0,34,s)
a.j(0,1,s)
s=A.A(k,l,m)
a.j(0,35,s)
a.j(0,2,s)
a.j(0,3,A.A(j,k,l))},
mV(a){var s,r=J.e(a.a,a.d+-32),q=J.e(a.a,a.d+-31),p=J.e(a.a,a.d+-30),o=J.e(a.a,a.d+-29),n=J.e(a.a,a.d+-28),m=J.e(a.a,a.d+-27),l=J.e(a.a,a.d+-26),k=J.e(a.a,a.d+-25)
a.j(0,0,A.A(r,q,p))
s=A.A(q,p,o)
a.j(0,32,s)
a.j(0,1,s)
s=A.A(p,o,n)
a.j(0,64,s)
a.j(0,33,s)
a.j(0,2,s)
s=A.A(o,n,m)
a.j(0,96,s)
a.j(0,65,s)
a.j(0,34,s)
a.j(0,3,s)
s=A.A(n,m,l)
a.j(0,97,s)
a.j(0,66,s)
a.j(0,35,s)
s=A.A(m,l,k)
a.j(0,98,s)
a.j(0,67,s)
a.j(0,99,A.A(l,k,k))},
n1(a){var s=J.e(a.a,a.d+-1),r=J.e(a.a,a.d+31),q=J.e(a.a,a.d+63),p=J.e(a.a,a.d+-33),o=J.e(a.a,a.d+-32),n=J.e(a.a,a.d+-31),m=J.e(a.a,a.d+-30),l=J.e(a.a,a.d+-29),k=B.a.au(B.a.i(p+o+1,1),32)
a.j(0,65,k)
a.j(0,0,k)
k=B.a.au(B.a.i(o+n+1,1),32)
a.j(0,66,k)
a.j(0,1,k)
k=B.a.au(B.a.i(n+m+1,1),32)
a.j(0,67,k)
a.j(0,2,k)
a.j(0,3,B.a.au(B.a.i(m+l+1,1),32))
a.j(0,96,A.A(q,r,s))
a.j(0,64,A.A(r,s,p))
k=A.A(s,p,o)
a.j(0,97,k)
a.j(0,32,k)
k=A.A(p,o,n)
a.j(0,98,k)
a.j(0,33,k)
k=A.A(o,n,m)
a.j(0,99,k)
a.j(0,34,k)
a.j(0,35,A.A(n,m,l))},
n0(a){var s,r=J.e(a.a,a.d+-32),q=J.e(a.a,a.d+-31),p=J.e(a.a,a.d+-30),o=J.e(a.a,a.d+-29),n=J.e(a.a,a.d+-28),m=J.e(a.a,a.d+-27),l=J.e(a.a,a.d+-26),k=J.e(a.a,a.d+-25)
a.j(0,0,B.a.au(B.a.i(r+q+1,1),32))
s=B.a.au(B.a.i(q+p+1,1),32)
a.j(0,64,s)
a.j(0,1,s)
s=B.a.au(B.a.i(p+o+1,1),32)
a.j(0,65,s)
a.j(0,2,s)
s=B.a.au(B.a.i(o+n+1,1),32)
a.j(0,66,s)
a.j(0,3,s)
a.j(0,32,A.A(r,q,p))
s=A.A(q,p,o)
a.j(0,96,s)
a.j(0,33,s)
s=A.A(p,o,n)
a.j(0,97,s)
a.j(0,34,s)
s=A.A(o,n,m)
a.j(0,98,s)
a.j(0,35,s)
a.j(0,67,A.A(n,m,l))
a.j(0,99,A.A(m,l,k))},
mT(a){var s,r=J.e(a.a,a.d+-1),q=J.e(a.a,a.d+31),p=J.e(a.a,a.d+63),o=J.e(a.a,a.d+95)
a.j(0,0,B.a.au(B.a.i(r+q+1,1),32))
s=B.a.au(B.a.i(q+p+1,1),32)
a.j(0,32,s)
a.j(0,2,s)
s=B.a.au(B.a.i(p+o+1,1),32)
a.j(0,64,s)
a.j(0,34,s)
a.j(0,1,A.A(r,q,p))
s=A.A(q,p,o)
a.j(0,33,s)
a.j(0,3,s)
s=A.A(p,o,o)
a.j(0,65,s)
a.j(0,35,s)
a.j(0,99,o)
a.j(0,98,o)
a.j(0,97,o)
a.j(0,96,o)
a.j(0,66,o)
a.j(0,67,o)},
mR(a){var s=J.e(a.a,a.d+-1),r=J.e(a.a,a.d+31),q=J.e(a.a,a.d+63),p=J.e(a.a,a.d+95),o=J.e(a.a,a.d+-33),n=J.e(a.a,a.d+-32),m=J.e(a.a,a.d+-31),l=J.e(a.a,a.d+-30),k=B.a.au(B.a.i(s+o+1,1),32)
a.j(0,34,k)
a.j(0,0,k)
k=B.a.au(B.a.i(r+s+1,1),32)
a.j(0,66,k)
a.j(0,32,k)
k=B.a.au(B.a.i(q+r+1,1),32)
a.j(0,98,k)
a.j(0,64,k)
a.j(0,96,B.a.au(B.a.i(p+q+1,1),32))
a.j(0,3,A.A(n,m,l))
a.j(0,2,A.A(o,n,m))
k=A.A(s,o,n)
a.j(0,35,k)
a.j(0,1,k)
k=A.A(r,s,o)
a.j(0,67,k)
a.j(0,33,k)
k=A.A(q,r,s)
a.j(0,99,k)
a.j(0,65,k)
a.j(0,97,A.A(p,q,r))},
nc(a){var s
for(s=0;s<16;++s)a.bG(s*32,16,a,-32)},
na(a){var s,r,q,p,o
for(s=0,r=16;r>0;--r){q=J.e(a.a,a.d+(s-1))
p=a.a
o=a.d+s
J.cQ(p,o,o+16,q)
s+=32}},
hJ(a,b){var s,r,q
for(s=0;s<16;++s){r=b.a
q=b.d+s*32
J.cQ(r,q,q+16,a)}},
n2(a){var s,r
for(s=16,r=0;r<16;++r)s+=J.e(a.a,a.d+(-1+r*32))+J.e(a.a,a.d+(r-32))
A.hJ(B.a.i(s,5),a)},
n4(a){var s,r
for(s=8,r=0;r<16;++r)s+=J.e(a.a,a.d+(-1+r*32))
A.hJ(B.a.i(s,4),a)},
n3(a){var s,r
for(s=8,r=0;r<16;++r)s+=J.e(a.a,a.d+(r-32))
A.hJ(B.a.i(s,4),a)},
n5(a){A.hJ(128,a)},
nd(a){var s
for(s=0;s<8;++s)a.bG(s*32,8,a,-32)},
nb(a){var s,r,q,p,o
for(s=0,r=0;r<8;++r){q=J.e(a.a,a.d+(s-1))
p=a.a
o=a.d+s
J.cQ(p,o,o+8,q)
s+=32}},
hK(a,b){var s,r,q
for(s=0;s<8;++s){r=b.a
q=b.d+s*32
J.cQ(r,q,q+8,a)}},
n6(a){var s,r
for(s=8,r=0;r<8;++r)s+=J.e(a.a,a.d+(r-32))+J.e(a.a,a.d+(-1+r*32))
A.hK(B.a.i(s,4),a)},
n7(a){var s,r
for(s=4,r=0;r<8;++r)s+=J.e(a.a,a.d+(r-32))
A.hK(B.a.i(s,3),a)},
n8(a){var s,r
for(s=4,r=0;r<8;++r)s+=J.e(a.a,a.d+(-1+r*32))
A.hK(B.a.i(s,3),a)},
n9(a){A.hK(128,a)},
hG(a,b){return B.a.i(a*b+1073741824,16)-16384},
hH(a,b,c,d,e){var s=b+c+d*32
a.j(0,s,A.mP(J.e(a.a,a.d+s)+(B.a.i(e+65536,3)-8192)))},
hI(a,b,c,d,e){A.hH(a,0,0,b,c+d)
A.hH(a,0,1,b,c+e)
A.hH(a,0,2,b,c-e)
A.hH(a,0,3,b,c-d)},
mU(){var s,r,q,p
if(!$.kp){for(s=-255;s<=255;++s){r=$.jt()
q=255+s
p=s<0?-s:s
r.$flags&2&&A.c(r)
r[q]=p
p=$.ju()
r=B.a.i(r[q],1)
p.$flags&2&&A.c(p)
p[q]=r}for(s=-1020;s<=1020;++s){r=$.jv()
if(s<-128)q=-128
else q=s>127?127:s
r.$flags&2&&A.c(r)
r[1020+s]=q}for(s=-112;s<=112;++s){r=$.jw()
if(s<-16)q=-16
else q=s>15?15:s
r.$flags&2&&A.c(r)
r[112+s]=q}for(s=-255;s<=510;++s){r=$.iM()
if(s<0)q=0
else q=s>255?255:s
r.$flags&2&&A.c(r)
r[255+s]=q}$.kp=!0}},
mP(a){var s
if((a&-256)>>>0===0)s=a
else s=a<0?0:255
return s},
hE:function hE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mO(){var s,r=J.aM(3,t.p)
for(s=0;s<3;++s)r[s]=new Uint8Array(11)
return new A.dL(r)},
nt(){var s,r,q,p,o=new Uint8Array(3),n=J.aM(4,t.B)
for(s=t.dd,r=0;r<4;++r){q=J.aM(8,s)
for(p=0;p<8;++p)q[p]=A.mO()
n[r]=q}B.c.al(o,0,3,255)
return new A.hP(o,n)},
hL:function hL(){this.d=$},
hO:function hO(){},
hQ:function hQ(a,b){var _=this
_.b=_.a=!1
_.c=!0
_.d=a
_.e=b},
dL:function dL(a){this.a=a},
hP:function hP(a,b){this.a=a
this.b=b},
hF:function hF(a,b){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=a
_.f=b},
b_:function b_(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
dO:function dO(){this.b=this.a=0},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
dP:function dP(a,b){var _=this
_.a=a
_.b=$
_.c=b
_.e=_.d=null
_.f=$},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.c=c},
j7(a,b){var s,r=A.o([],t.U),q=A.o([],t.Y),p=new Uint32Array(2),o=new A.fh(a,p)
p=o.e=J.O(B.i.gu(p),0,null)
s=a.K()
p.$flags&2&&A.c(p)
if(0>=p.length)return A.a(p,0)
p[0]=s
s=a.K()
p.$flags&2&&A.c(p)
if(1>=p.length)return A.a(p,1)
p[1]=s
s=a.K()
p.$flags&2&&A.c(p)
if(2>=p.length)return A.a(p,2)
p[2]=s
s=a.K()
p.$flags&2&&A.c(p)
if(3>=p.length)return A.a(p,3)
p[3]=s
s=a.K()
p.$flags&2&&A.c(p)
if(4>=p.length)return A.a(p,4)
p[4]=s
s=a.K()
p.$flags&2&&A.c(p)
if(5>=p.length)return A.a(p,5)
p[5]=s
s=a.K()
p.$flags&2&&A.c(p)
if(6>=p.length)return A.a(p,6)
p[6]=s
s=a.K()
p.$flags&2&&A.c(p)
if(7>=p.length)return A.a(p,7)
p[7]=s
o.b=!1
return new A.dN(o,b,r,q)},
be(a,b){return B.a.i(a+B.a.L(1,b)-1,b)},
dN:function dN(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.w=_.r=_.f=0
_.x=null
_.Q=_.z=_.y=0
_.as=null
_.at=0
_.ax=c
_.ay=null
_.ch=d
_.CW=0
_.cx=null
_.cy=$
_.db=0
_.dx=null
_.fr=_.dy=0},
eM:function eM(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.w=_.r=_.f=0
_.x=null
_.Q=_.z=_.y=0
_.as=null
_.at=0
_.ax=c
_.ay=null
_.ch=d
_.CW=0
_.cx=null
_.cy=$
_.db=0
_.dx=null
_.fr=_.dy=0},
fh:function fh(a,b){var _=this
_.a=0
_.b=!0
_.c=a
_.d=b
_.e=$},
hM:function hM(a,b){this.a=a
this.b=b},
b0(a,b){return((a^b)>>>1&2139062143)+((a&b)>>>0)},
bR(a){if(a<0)return 0
if(a>255)return 255
return a},
hN(a,b,c){return Math.abs(b-c)-Math.abs(a-c)},
ne(a,b,c){return 4278190080},
nf(a,b,c){return a},
nk(a,b,c){if(!(c>=0&&c<b.length))return A.a(b,c)
return b[c]},
nl(a,b,c){var s=c+1
if(!(s>=0&&s<b.length))return A.a(b,s)
return b[s]},
nm(a,b,c){var s=c-1
if(!(s>=0&&s<b.length))return A.a(b,s)
return b[s]},
nn(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c+1
if(!(r<q))return A.a(b,r)
return A.b0(A.b0(a,b[r]),s)},
no(a,b,c){var s=c-1
if(!(s>=0&&s<b.length))return A.a(b,s)
return A.b0(a,b[s])},
np(a,b,c){if(!(c>=0&&c<b.length))return A.a(b,c)
return A.b0(a,b[c])},
nq(a,b,c){var s=c-1,r=b.length
if(!(s>=0&&s<r))return A.a(b,s)
s=b[s]
if(!(c>=0&&c<r))return A.a(b,c)
return A.b0(s,b[c])},
nr(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c+1
if(!(r<q))return A.a(b,r)
return A.b0(s,b[r])},
ng(a,b,c){var s,r,q=c-1,p=b.length
if(!(q>=0&&q<p))return A.a(b,q)
q=b[q]
if(!(c>=0&&c<p))return A.a(b,c)
s=b[c]
r=c+1
if(!(r<p))return A.a(b,r)
r=b[r]
return A.b0(A.b0(a,q),A.b0(s,r))},
nh(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c-1
if(!(r>=0&&r<q))return A.a(b,r)
r=b[r]
return A.hN(s>>>24,a>>>24,r>>>24)+A.hN(s>>>16&255,a>>>16&255,r>>>16&255)+A.hN(s>>>8&255,a>>>8&255,r>>>8&255)+A.hN(s&255,a&255,r&255)<=0?s:a},
ni(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c-1
if(!(r>=0&&r<q))return A.a(b,r)
r=b[r]
return(A.bR((a>>>24)+(s>>>24)-(r>>>24))<<24|A.bR((a>>>16&255)+(s>>>16&255)-(r>>>16&255))<<16|A.bR((a>>>8&255)+(s>>>8&255)-(r>>>8&255))<<8|A.bR((a&255)+(s&255)-(r&255)))>>>0},
nj(a,b,c){var s,r,q,p,o,n=b.length
if(!(c>=0&&c<n))return A.a(b,c)
s=b[c]
r=c-1
if(!(r>=0&&r<n))return A.a(b,r)
r=b[r]
q=A.b0(a,s)
s=q>>>24
n=q>>>16&255
p=q>>>8&255
o=q>>>0&255
return(A.bR(s+B.a.a0(s-(r>>>24),2))<<24|A.bR(n+B.a.a0(n-(r>>>16&255),2))<<16|A.bR(p+B.a.a0(p-(r>>>8&255),2))<<8|A.bR(o+B.a.a0(o-(r&255),2)))>>>0},
bQ:function bQ(a,b){this.a=a
this.b=b},
fi:function fi(a){var _=this
_.a=a
_.c=_.b=0
_.d=null
_.e=0},
hR:function hR(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
dR:function dR(){},
eN:function eN(a,b){var _=this
_.c=a
_.d=b
_.w=1
_.y=_.x=$},
iT(a){var s,r=J.h2(a,t.gj)
for(s=0;s<a;++s)r[s]=new A.eD()
return new A.d0(r,0)},
m4(){var s,r,q=J.aM(5,t.fa)
for(s=0;s<5;++s)q[s]=A.iT(0)
r=J.aM(64,t.ak)
for(s=0;s<64;++s)r[s]=new A.eE()
return new A.d_(q,r)},
eD:function eD(){this.b=this.a=0},
eE:function eE(){this.b=this.a=0},
d0:function d0(a,b){this.a=a
this.b=b},
d_:function d_(a,b){var _=this
_.a=a
_.b=!1
_.c=0
_.e=_.d=!1
_.f=b},
d1:function d1(){var _=this
_.b=_.a=null
_.e=_.d=0},
eF:function eF(a){this.a=a
this.b=null},
cF:function cF(a,b){this.a=a
this.b=b},
bf:function bf(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.r=null
_.w=""
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
de:function de(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.r=null
_.w=""
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
fk:function fk(a){this.a=null
this.b=a
this.c=null},
hT:function hT(a,b){this.a=a
this.b=b},
hS:function hS(a,b){this.a=a
this.b=b},
jT(a){return new A.b7(a.a,a.b,B.c.eM(a.c,0))},
eG:function eG(a,b){this.a=a
this.b=b},
b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},
cp(a,b,c,d,e,f,g,h,i,j,k,l){var s=null,r=new A.aL(s,s,s,a,h,e,d,0)
B.e.N(r.gaa(),r)
if(k<0||f<0)A.Y(A.a2("Invalid image dimensions "+k+"x"+f,s))
r.c=g
if(b!=null)r.e=A.cY(b)
r.dv(k,f,c,i,j)
return r},
fV(a,b,c,d){var s,r,q=null,p=a.e
p=p==null?q:A.cY(p)
s=a.c
s=s==null?q:A.jT(s)
r=a.w
p=new A.aL(q,s,p,q,a.r,r,a.y,a.z)
p.eY(a,b,c,d)
return p},
aR(a,b,c){var s,r,q,p=null,o=a.a
o=o==null?p:o.aR(c)
s=a.e
s=s==null?p:A.cY(s)
r=a.c
r=r==null?p:A.jT(r)
q=a.w
o=new A.aL(o,r,s,p,a.r,q,a.y,a.z)
o.eX(a,b,c)
return o},
fQ:function fQ(a,b){this.a=a
this.b=b},
aL:function aL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c
_.f=d
_.r=e
_.w=f
_.x=$
_.y=g
_.z=h},
fX:function fX(a,b){this.a=a
this.b=b},
fW:function fW(){},
a4:function a4(){},
d3:function d3(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
d4:function d4(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
d5:function d5(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
d6:function d6(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
d7:function d7(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
d8:function d8(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cq:function cq(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
bu:function bu(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
cr:function cr(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
d9:function d9(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cs:function cs(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
jV(a,b,c){return new A.ct(new Uint8Array(a*b*c),null,a,b,c)},
ct:function ct(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
eO:function eO(a,b){this.a=a
this.b=b},
dz:function dz(){},
dA:function dA(a,b,c){this.c=a
this.a=b
this.b=c},
bB:function bB(a,b,c){this.c=a
this.a=b
this.b=c},
k5(a){return new A.bC(-1,0,-a.c,a)},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k6(a){return new A.bD(-1,0,-a.c,a)},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k7(a){return new A.bE(-1,0,-a.c,a)},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k8(a){return new A.bF(-1,0,-a.c,a)},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k9(a){return new A.bG(-1,0,-a.c,a)},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ka(a){return new A.bH(-1,0,-a.c,a)},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hl(a){return new A.bI(-1,0,0,-1,0,a)},
bI:function bI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kb(a){return new A.bJ(-1,0,-a.c,a)},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hm(a){return new A.bK(-1,0,0,-2,0,a)},
bK:function bK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kc(a){return new A.bL(-1,0,-a.c,a)},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hn(a){return new A.bM(-1,0,0,-(a.c<<2>>>0),a)},
bM:function bM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kd(a){return new A.bN(-1,0,-a.c,a)},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
K:function K(){},
p1(a,b){switch(b.a){case 0:A.iz(a)
break
case 1:A.l_(a)
break
case 2:A.p2(a)
break}return a},
l_(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=a3.gaa().length
for(s=t.g,r=0;r<a2;++r){q=a3.x
if(q===$)q=a3.x=A.o([],s)
if(!(r<q.length))return A.a(q,r)
p=q[r]
o=p.a
n=o==null
m=n?a1:o.a
if(m==null)m=0
l=n?a1:o.b
if(l==null)l=0
k=B.a.a0(l,2)
if(!n){j=J.Q(o.gu(o))
if(j==null){o=p.a
o=o==null?a1:o.gu(o)
if(o==null)o=B.c.gu(new Uint8Array(0))
j=J.Q(o)}i=p.a.gam()
h=new Uint8Array(i)
for(g=l-1,f=0;f<k;++f,--g){e=f*i
d=g*i
B.c.X(h,0,i,j,e)
B.c.X(j,e,e+i,j,d)
B.c.ag(j,d,d+i,h)}continue}o=a3.a
if((o==null?a1:o.gM())!=null)for(g=l-1,f=0;f<k;++f,--g)for(c=0;c<m;++c){o=p.a
b=o==null?a1:o.U(c,f,a1)
if(b==null)b=new A.K()
o=p.a
a=o==null?a1:o.U(c,g,a1)
if(a==null)a=new A.K()
a0=b.gD()
b.sD(a.gD())
a.sD(a0)}else for(g=l-1,f=0;f<k;++f,--g)for(c=0;c<m;++c){o=p.a
b=o==null?a1:o.U(c,f,a1)
if(b==null)b=new A.K()
o=p.a
a=o==null?a1:o.U(c,g,a1)
if(a==null)a=new A.K()
a0=b.gn()
b.sn(a.gn())
a.sn(a0)
a0=b.gp()
b.sp(a.gp())
a.sp(a0)
a0=b.gq()
b.sq(a.gq())
a.sq(a0)
a0=b.gt()
b.st(a.gt())
a.st(a0)}}return a3},
iz(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1=a2.gaa().length
for(s=t.g,r=0;r<a1;++r){q=a2.x
if(q===$)q=a2.x=A.o([],s)
if(!(r<q.length))return A.a(q,r)
p=q[r]
o=p.a
n=o==null
m=n?a0:o.a
if(m==null)m=0
l=n?a0:o.b
if(l==null)l=0
k=B.a.a0(m,2)
j=A.bU(p)
if(j>0){o=p.a
i=o==null?a0:J.Q(o.gu(o))
if(i==null){o=p.a
o=o==null?a0:o.gu(o)
if(o==null)o=B.c.gu(new Uint8Array(0))
i=J.Q(o)}h=p.a.gam()
for(g=0;g<l;++g)A.l5(i,g*h,m,j)
continue}o=a2.a
if((o==null?a0:o.gM())!=null)for(f=m-1,g=0;g<l;++g)for(e=f,d=0;d<k;++d,--e){o=p.a
c=o==null?a0:o.U(d,g,a0)
if(c==null)c=new A.K()
o=p.a
b=o==null?a0:o.U(e,g,a0)
if(b==null)b=new A.K()
a=c.gD()
c.sD(b.gD())
b.sD(a)}else for(f=m-1,g=0;g<l;++g)for(e=f,d=0;d<k;++d,--e){o=p.a
c=o==null?a0:o.U(d,g,a0)
if(c==null)c=new A.K()
o=p.a
b=o==null?a0:o.U(e,g,a0)
if(b==null)b=new A.K()
a=c.gn()
c.sn(b.gn())
b.sn(a)
a=c.gp()
c.sp(b.gp())
b.sp(a)
a=c.gq()
c.sq(b.gq())
b.sq(a)
a=c.gt()
c.st(b.gt())
b.st(a)}}return a2},
p2(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.gaa().length
for(s=t.g,r=0;r<a0;++r){q=a1.x
if(q===$)q=a1.x=A.o([],s)
if(!(r<q.length))return A.a(q,r)
p=q[r]
o=p.a
n=o==null
m=n?a:o.a
if(m==null)m=0
l=n?a:o.b
if(l==null)l=0
k=A.bU(p)
if(k>0){o=p.a
o=o==null?a:J.Q(o.gu(o))
if(o==null){o=p.a
o=o==null?a:o.gu(o)
if(o==null)o=B.c.gu(new Uint8Array(0))
o=J.Q(o)}A.l5(o,0,m*l,k)
continue}o=p.a
if((o==null?a:o.gM())!=null)for(j=l-1,i=m-1,h=0;h<=j;++h,--j){g=h===j?B.a.a0(m,2):m
for(f=i,e=0;e<g;++e,--f){o=p.a
d=o==null?a:o.U(e,h,a)
if(d==null)d=new A.K()
o=p.a
c=o==null?a:o.U(f,j,a)
if(c==null)c=new A.K()
b=d.gD()
d.sD(c.gD())
c.sD(b)}}else for(j=l-1,i=m-1,h=0;h<=j;++h,--j){g=h===j?B.a.a0(m,2):m
for(f=i,e=0;e<g;++e,--f){o=p.a
d=o==null?a:o.U(e,h,a)
if(d==null)d=new A.K()
o=p.a
c=o==null?a:o.U(f,j,a)
if(c==null)c=new A.K()
b=d.gn()
d.sn(c.gn())
c.sn(b)
b=d.gp()
d.sp(c.gp())
c.sp(b)
b=d.gq()
d.sq(c.gq())
c.sq(b)
b=d.gt()
d.st(c.gt())
c.st(b)}}}return a1},
fP:function fP(a,b){this.a=a
this.b=b},
C(a){return new A.eH(a)},
eH:function eH(a){this.a=a},
F(a,b,c,d){var s=J.N(a),r=s.gl(a)
s=c==null?s.gl(a):d+c
return new A.ad(a,d,Math.min(r,s),d,b)},
r(a,b){var s=a.a,r=a.d,q=J.b3(s)
return new A.ad(s,a.b,Math.min(q,a.c),r+b,a.e)},
ad:function ad(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f1:function f1(a,b,c,d){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=a
_.at=b
_.ax=c
_.ay=d
_.CW=_.ch=$},
bA(a,b){return new A.f3(a,new Uint8Array(b))},
f3:function f3(a,b){this.a=0
this.b=a
this.c=b},
f9:function f9(){},
cA:function cA(a,b){this.a=a
this.b=b},
pf(){var s,r=A.fy(v.G.self),q=new A.iG()
if(typeof q=="function")A.Y(A.a2("Attempting to rewrap a JS function.",null))
s=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.oc,q)
s[$.js()]=q
r.onmessage=s},
iG:function iG(){},
mM(a){throw A.h(A.aO("Uint64List not supported on the web."))},
m8(a,b,c){return J.jF(a,b,c)},
km(a,b){return J.fJ(a,b,null)},
m2(a){return J.jE(a,0,null)},
m3(a){return a.iS(0,0,null)},
l7(a){return v.mangledGlobalNames[a]},
p4(a){var s=A.p3(a.aD(a.gl(0)).a1(),1)
return s},
p3(a,b){var s=A.o3(a,b)
return s},
o3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=b&65535,e=b>>>16,d=a.length
for(s=d,r=0;s>0;){q=s<3800?s:3800
s-=q
p=r+q
o=p-8
for(;r<=o;f=g){if(!(r>=0&&r<d))return A.a(a,r)
f+=a[r]
n=r+1
if(!(n<d))return A.a(a,n)
m=f+a[n]
n=r+2
if(!(n<d))return A.a(a,n)
l=m+a[n]
n=r+3
if(!(n<d))return A.a(a,n)
k=l+a[n]
n=r+4
if(!(n<d))return A.a(a,n)
j=k+a[n]
n=r+5
if(!(n<d))return A.a(a,n)
i=j+a[n]
n=r+6
if(!(n<d))return A.a(a,n)
h=i+a[n]
n=r+7
if(!(n<d))return A.a(a,n)
g=h+a[n]
e=e+f+m+l+k+j+i+h+g
r+=8}for(;r<p;++r){if(!(r>=0&&r<d))return A.a(a,r)
f+=a[r]
e+=f}f=B.a.a6(f,65521)
e=B.a.a6(e,65521)}return(e<<16|f)>>>0},
aP(a,b){var s,r,q,p
if(t.p.b(a)&&a.length>=32)return A.od(a,b)
s=J.N(a)
r=s.gl(a)
b^=4294967295
for(q=0;r>=8;){p=q+1
b=B.o[(b^s.m(a,q))&255]^b>>>8
q=p+1
b=B.o[(b^s.m(a,p))&255]^b>>>8
p=q+1
b=B.o[(b^s.m(a,q))&255]^b>>>8
q=p+1
b=B.o[(b^s.m(a,p))&255]^b>>>8
p=q+1
b=B.o[(b^s.m(a,q))&255]^b>>>8
q=p+1
b=B.o[(b^s.m(a,p))&255]^b>>>8
p=q+1
b=B.o[(b^s.m(a,q))&255]^b>>>8
q=p+1
b=B.o[(b^s.m(a,p))&255]^b>>>8
r-=8}if(r>0)do{p=q+1
b=B.o[(b^s.m(a,q))&255]^b>>>8
if(--r,r>0){q=p
continue}else break}while(!0)
return(b^4294967295)>>>0},
ob(a){var s,r,q,p,o,n,m,l=new Uint32Array(8192)
for(s=0;s<256;++s){r=a[s]
if(!(s<8192))return A.a(l,s)
l[s]=r}for(q=1;q<32;++q)for(r=(q-1)*256,p=q*256,s=0;s<256;++s){o=r+s
if(!(o>=0&&o<8192))return A.a(l,o)
n=l[o]
o=p+s
m=l[n&255]
if(!(o<8192))return A.a(l,o)
l[o]=(n>>>8^m)>>>0}return l},
od(c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=$.kT
if(c7==null)c7=$.kT=A.ob(B.o)
s=c8.length
r=J.lC(B.c.gu(c8),c8.byteOffset,s)
q=c9^4294967295
p=s-32
for(o=0;o<=p;){n=q^r.getUint32(o,!0)
m=r.getUint32(o+4,!0)
l=r.getUint32(o+8,!0)
k=r.getUint32(o+12,!0)
j=r.getUint32(o+16,!0)
i=r.getUint32(o+20,!0)
h=r.getUint32(o+24,!0)
g=r.getUint32(o+28,!0)
f=c7[7936+(n&255)]
e=c7[7680+(n>>>8&255)]
d=c7[7424+(n>>>16&255)]
c=7168+(n>>>24)
if(!(c<8192))return A.a(c7,c)
c=c7[c]
b=c7[6912+(m&255)]
a=c7[6656+(m>>>8&255)]
a0=c7[6400+(m>>>16&255)]
a1=6144+(m>>>24)
if(!(a1<8192))return A.a(c7,a1)
a1=c7[a1]
a2=c7[5888+(l&255)]
a3=c7[5632+(l>>>8&255)]
a4=c7[5376+(l>>>16&255)]
a5=5120+(l>>>24)
if(!(a5<8192))return A.a(c7,a5)
a5=c7[a5]
a6=c7[4864+(k&255)]
a7=c7[4608+(k>>>8&255)]
a8=c7[4352+(k>>>16&255)]
a9=4096+(k>>>24)
if(!(a9<8192))return A.a(c7,a9)
a9=c7[a9]
b0=c7[3840+(j&255)]
b1=c7[3584+(j>>>8&255)]
b2=c7[3328+(j>>>16&255)]
b3=3072+(j>>>24)
if(!(b3<8192))return A.a(c7,b3)
b3=c7[b3]
b4=c7[2816+(i&255)]
b5=c7[2560+(i>>>8&255)]
b6=c7[2304+(i>>>16&255)]
b7=2048+(i>>>24)
if(!(b7<8192))return A.a(c7,b7)
b7=c7[b7]
b8=c7[1792+(h&255)]
b9=c7[1536+(h>>>8&255)]
c0=c7[1280+(h>>>16&255)]
c1=1024+(h>>>24)
if(!(c1<8192))return A.a(c7,c1)
c1=c7[c1]
c2=c7[768+(g&255)]
c3=c7[512+(g>>>8&255)]
c4=c7[256+(g>>>16&255)]
c5=g>>>24
if(!(c5<8192))return A.a(c7,c5)
q=f^e^d^c^b^a^a0^a1^a2^a3^a4^a5^a6^a7^a8^a9^b0^b1^b2^b3^b4^b5^b6^b7^b8^b9^c0^c1^c2^c3^c4^c7[c5]
o+=32}for(;o<s;o=c6){c6=o+1
q=c7[(q^c8[o])&255]^q>>>8}return(q^4294967295)>>>0},
ej(a,b){var s,r,q
try{r=a.$0()
return r}catch(q){s=A.as(q)
if(s instanceof A.eH)throw q
throw A.h(A.C("Invalid image data: "+A.z(s)))}},
eg(a,b,c){var s=a<1||b<1
if(s)throw A.h(A.C("Invalid image dimensions "+a+"x"+b))
if(c>0&&a*b>c)throw A.h(A.C("Image dimensions "+a+"x"+b+" exceed the maximum of "+c+" pixels"))},
pj(b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
if($.ji==null){s=new Uint8Array(768)
for(r=0;r<256;++r){q=256+r
if(!(q<768))return A.a(s,q)
s[q]=r}for(r=256;r<512;++r){q=256+r
if(!(q<768))return A.a(s,q)
s[q]=255}$.ji=s}for(q=b4.length,p=b7.$flags|0,r=0;r<64;++r){o=b5+r
if(!(o<q))return A.a(b4,o)
o=b4[o]
n=b3[r]
p&2&&A.c(b7)
if(!(r<64))return A.a(b7,r)
b7[r]=o*n}for(m=0,r=0;r<8;++r,m+=8){q=1+m
if(!(q<64))return A.a(b7,q)
o=b7[q]
n=!1
if(o===0){l=2+m
if(!(l<64))return A.a(b7,l)
if(b7[l]===0){l=3+m
if(!(l<64))return A.a(b7,l)
if(b7[l]===0){l=4+m
if(!(l<64))return A.a(b7,l)
if(b7[l]===0){l=5+m
if(!(l<64))return A.a(b7,l)
if(b7[l]===0){l=6+m
if(!(l<64))return A.a(b7,l)
if(b7[l]===0){n=7+m
if(!(n<64))return A.a(b7,n)
n=b7[n]===0}}}}}}if(n){if(!(m<64))return A.a(b7,m)
q=B.a.i(5793*b7[m]+512,10)
k=(q&2147483647)-((q&2147483648)>>>0)
p&2&&A.c(b7)
if(!(m<64))return A.a(b7,m)
b7[m]=k
q=m+1
if(!(q<64))return A.a(b7,q)
b7[q]=k
q=m+2
if(!(q<64))return A.a(b7,q)
b7[q]=k
q=m+3
if(!(q<64))return A.a(b7,q)
b7[q]=k
q=m+4
if(!(q<64))return A.a(b7,q)
b7[q]=k
q=m+5
if(!(q<64))return A.a(b7,q)
b7[q]=k
q=m+6
if(!(q<64))return A.a(b7,q)
b7[q]=k
q=m+7
if(!(q<64))return A.a(b7,q)
b7[q]=k
continue}if(!(m<64))return A.a(b7,m)
n=B.a.i(5793*b7[m]+128,8)
j=(n&2147483647)-((n&2147483648)>>>0)
n=4+m
if(!(n<64))return A.a(b7,n)
l=B.a.i(5793*b7[n]+128,8)
i=(l&2147483647)-((l&2147483648)>>>0)
l=2+m
if(!(l<64))return A.a(b7,l)
h=b7[l]
g=6+m
if(!(g<64))return A.a(b7,g)
f=b7[g]
e=7+m
if(!(e<64))return A.a(b7,e)
d=b7[e]
c=B.a.i(2896*(o-d)+128,8)
b=(c&2147483647)-((c&2147483648)>>>0)
d=B.a.i(2896*(o+d)+128,8)
a=(d&2147483647)-((d&2147483648)>>>0)
d=3+m
if(!(d<64))return A.a(b7,d)
o=b7[d]<<4
a0=(o&2147483647)-((o&2147483648)>>>0)
o=5+m
if(!(o<64))return A.a(b7,o)
c=b7[o]<<4
a1=(c&2147483647)-((c&2147483648)>>>0)
c=B.a.i(j-i+1,1)
k=(c&2147483647)-((c&2147483648)>>>0)
c=B.a.i(j+i+1,1)
j=(c&2147483647)-((c&2147483648)>>>0)
c=B.a.i(h*3784+f*1567+128,8)
c=(c&2147483647)-((c&2147483648)>>>0)
a2=B.a.i(h*1567-f*3784+128,8)
h=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.i(b-a1+1,1)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
a3=B.a.i(b+a1+1,1)
b=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.i(a+a0+1,1)
a3=(a3&2147483647)-((a3&2147483648)>>>0)
a4=B.a.i(a-a0+1,1)
a0=(a4&2147483647)-((a4&2147483648)>>>0)
a4=B.a.i(j-c+1,1)
a4=(a4&2147483647)-((a4&2147483648)>>>0)
c=B.a.i(j+c+1,1)
j=(c&2147483647)-((c&2147483648)>>>0)
c=B.a.i(k-h+1,1)
c=(c&2147483647)-((c&2147483648)>>>0)
a5=B.a.i(k+h+1,1)
i=(a5&2147483647)-((a5&2147483648)>>>0)
a5=B.a.i(b*2276+a3*3406+2048,12)
k=(a5&2147483647)-((a5&2147483648)>>>0)
a3=B.a.i(b*3406-a3*2276+2048,12)
b=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.i(a0*799+a2*4017+2048,12)
a3=(a3&2147483647)-((a3&2147483648)>>>0)
a2=B.a.i(a0*4017-a2*799+2048,12)
a0=(a2&2147483647)-((a2&2147483648)>>>0)
p&2&&A.c(b7)
if(!(m<64))return A.a(b7,m)
b7[m]=j+k
if(!(e<64))return A.a(b7,e)
b7[e]=j-k
if(!(q<64))return A.a(b7,q)
b7[q]=i+a3
if(!(g<64))return A.a(b7,g)
b7[g]=i-a3
if(!(l<64))return A.a(b7,l)
b7[l]=c+a0
if(!(o<64))return A.a(b7,o)
b7[o]=c-a0
if(!(d<64))return A.a(b7,d)
b7[d]=a4+b
if(!(n<64))return A.a(b7,n)
b7[n]=a4-b}for(r=0;r<8;++r){a6=8+r
a7=16+r
a8=24+r
a9=32+r
b0=40+r
b1=48+r
b2=56+r
q=b7[a6]
if(q===0&&b7[a7]===0&&b7[a8]===0&&b7[a9]===0&&b7[b0]===0&&b7[b1]===0&&b7[b2]===0){q=B.a.i(5793*b7[r]+8192,14)
k=(q&2147483647)-((q&2147483648)>>>0)
p&2&&A.c(b7)
if(!(r<64))return A.a(b7,r)
b7[r]=k
if(!(a6<64))return A.a(b7,a6)
b7[a6]=k
if(!(a7<64))return A.a(b7,a7)
b7[a7]=k
if(!(a8<64))return A.a(b7,a8)
b7[a8]=k
if(!(a9<64))return A.a(b7,a9)
b7[a9]=k
if(!(b0<64))return A.a(b7,b0)
b7[b0]=k
if(!(b1<64))return A.a(b7,b1)
b7[b1]=k
if(!(b2<64))return A.a(b7,b2)
b7[b2]=k
continue}o=B.a.i(5793*b7[r]+2048,12)
j=(o&2147483647)-((o&2147483648)>>>0)
o=B.a.i(5793*b7[a9]+2048,12)
i=(o&2147483647)-((o&2147483648)>>>0)
h=b7[a7]
f=b7[b1]
o=b7[b2]
n=B.a.i(2896*(q-o)+2048,12)
b=(n&2147483647)-((n&2147483648)>>>0)
o=B.a.i(2896*(q+o)+2048,12)
a=(o&2147483647)-((o&2147483648)>>>0)
a0=b7[a8]
a1=b7[b0]
o=B.a.i(j-i+1,1)
k=(o&2147483647)-((o&2147483648)>>>0)
o=B.a.i(j+i+1,1)
j=(o&2147483647)-((o&2147483648)>>>0)
o=B.a.i(h*3784+f*1567+2048,12)
q=(o&2147483647)-((o&2147483648)>>>0)
o=B.a.i(h*1567-f*3784+2048,12)
h=(o&2147483647)-((o&2147483648)>>>0)
o=B.a.i(b-a1+1,1)
o=(o&2147483647)-((o&2147483648)>>>0)
n=B.a.i(b+a1+1,1)
b=(n&2147483647)-((n&2147483648)>>>0)
n=B.a.i(a+a0+1,1)
n=(n&2147483647)-((n&2147483648)>>>0)
l=B.a.i(a-a0+1,1)
a0=(l&2147483647)-((l&2147483648)>>>0)
l=B.a.i(j-q+1,1)
l=(l&2147483647)-((l&2147483648)>>>0)
q=B.a.i(j+q+1,1)
j=(q&2147483647)-((q&2147483648)>>>0)
q=B.a.i(k-h+1,1)
q=(q&2147483647)-((q&2147483648)>>>0)
g=B.a.i(k+h+1,1)
i=(g&2147483647)-((g&2147483648)>>>0)
g=B.a.i(b*2276+n*3406+2048,12)
k=(g&2147483647)-((g&2147483648)>>>0)
n=B.a.i(b*3406-n*2276+2048,12)
b=(n&2147483647)-((n&2147483648)>>>0)
n=B.a.i(a0*799+o*4017+2048,12)
n=(n&2147483647)-((n&2147483648)>>>0)
o=B.a.i(a0*4017-o*799+2048,12)
a0=(o&2147483647)-((o&2147483648)>>>0)
p&2&&A.c(b7)
if(!(r<64))return A.a(b7,r)
b7[r]=j+k
if(!(b2<64))return A.a(b7,b2)
b7[b2]=j-k
b7[a6]=i+n
b7[b1]=i-n
b7[a7]=q+a0
b7[b0]=q-a0
b7[a8]=l+b
b7[a9]=l-b}for(q=$.ji,p=b6.$flags|0,r=0;r<64;++r){q.toString
o=B.a.i(b7[r]+8,4)
o=384+((o&2147483647)-((o&2147483648)>>>0))
if(!(o>=0&&o<768))return A.a(q,o)
o=q[o]
p&2&&A.c(b6)
if(!(r<64))return A.a(b6,r)
b6[r]=o}},
ek(a,b){return(a&65535)*b+((a>>>16)*b&65535)*65536>>>0},
ny(a,b,c,d,e,f){A.nv(f,a,b,c,d,e,!0,f)},
nz(a,b,c,d,e,f){A.nw(f,a,b,c,d,e,!0,f)},
nx(a,b,c,d,e,f){A.nu(f,a,b,c,d,e,!0,f)},
cE(a,b,c,d,e){var s,r,q
for(s=0;s<d;++s){r=J.e(a.a,a.d+s)
q=J.e(b.a,b.d+s)
J.a1(c.a,c.d+s,r+q)}},
nv(a,b,c,d,e,f,g,h){var s,r,q=e*d,p=e+f,o=A.F(a,!1,null,q),n=A.F(h,!1,null,q),m=A.r(n,0)
if(e===0){n.j(0,0,J.e(o.a,o.d))
A.cE(A.r(o,1),m,A.r(n,1),b-1,!0)
m.d+=d
o.d+=d
n.d+=d
e=1}for(s=-d,r=b-1;e<p;){A.cE(o,A.r(m,s),n,1,!0)
A.cE(A.r(o,1),m,A.r(n,1),r,!0);++e
m.d+=d
o.d+=d
n.d+=d}},
nw(a,b,c,d,e,f,g,h){var s=e*d,r=e+f,q=A.F(a,!1,null,s),p=A.F(h,!1,null,s),o=A.r(p,0)
if(e===0){p.j(0,0,J.e(q.a,q.d))
A.cE(A.r(q,1),o,A.r(p,1),b-1,!0)
q.d+=d
p.d+=d
e=1}else o.d-=d
while(e<r){A.cE(q,o,p,b,!0);++e
o.d+=d
q.d+=d
p.d+=d}},
nu(a,b,c,d,e,f,g,h){var s,r,q,p,o,n=e*d,m=e+f,l=A.F(a,!1,null,n),k=A.F(h,!1,null,n),j=A.r(k,0)
if(e===0){k.j(0,0,J.e(l.a,l.d))
A.cE(A.r(l,1),j,A.r(k,1),b-1,!0)
j.d+=d
l.d+=d
k.d+=d
e=1}for(s=-d;e<m;){A.cE(l,A.r(j,s),k,1,!0)
for(r=1;r<b;++r){q=r-d
p=J.e(j.a,j.d+(r-1))+J.e(j.a,j.d+q)-J.e(j.a,j.d+(q-1))
if((p&4294967040)>>>0===0)o=p
else o=p<0?0:255
q=J.e(l.a,l.d+r)
J.a1(k.a,k.d+r,q+o)}++e
j.d+=d
l.d+=d
k.d+=d}},
bU(a){var s,r,q=a.a
if(q==null)return 0
s=a.gak()*q.c
if((s&7)!==0)return 0
r=s>>>3
return q.gam()===a.gT()*r?r:0},
pl(a,b,c,d){var s,r,q,p,o,n,m
for(s=a.length,r=a.$flags|0,q=0;q<d;++q){p=b+q
if(!(p>=0&&p<s))return A.a(a,p)
o=a[p]
n=c+q
if(!(n>=0&&n<s))return A.a(a,n)
m=a[n]
r&2&&A.c(a)
a[p]=m
a[n]=o}},
l5(a,b,c,d){var s,r
for(s=b+(c-1)*d,r=b;r<s;r+=d,s-=d)A.pl(a,r,s,d)},
oW(a){var s,r="ifd0"
if(!a.gbj().m(0,r).a.aC(274)||a.gbj().m(0,r).gbr()===1)return A.aR(a,!1,!1)
switch(a.gbj().m(0,r).gbr()){case 2:s=A.iz(A.aR(a,!1,!1))
break
case 3:s=A.p1(A.aR(a,!1,!1),B.bg)
break
case 4:s=A.l_(A.aR(a,!1,!1))
break
case 5:s=A.iz(A.fD(a,90))
break
case 6:s=A.fD(a,90)
break
case 7:s=A.iz(A.fD(a,-90))
break
case 8:s=A.fD(a,-90)
break
default:s=A.aR(a,!1,!1)
break}s.e=A.cY(a.gbj())
s.gbj().m(0,r).sbr(null)
return s},
fD(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=B.a.a6(b0,360)
a9.gbl()
if(B.a.a6(a8,90)===0)switch(B.a.a0(a8,90)){case 1:return A.oJ(a9)
case 2:return A.oH(a9)
case 3:return A.oI(a9)
default:return A.aR(a9,!1,!1)}s=a8*3.141592653589793/180
r=Math.cos(s)
q=Math.sin(s)
p=a9.gT()
o=a9.gT()
n=a9.gV()
m=a9.gV()
l=0.5*a9.gT()
k=0.5*a9.gV()
n=Math.abs(p*r)+Math.abs(n*q)
j=0.5*n
m=Math.abs(o*q)+Math.abs(m*r)
i=0.5*m
h=a9.gaa().length
for(p=t.g,g=a7,f=0;f<h;++f){e=a9.x
if(e===$)e=a9.x=A.o([],p)
if(!(f<e.length))return A.a(e,f)
d=e[f]
o=g==null
c=o?a7:g.cf()
if(c==null){b=B.b.h(n)
c=A.fV(a9,B.b.h(m),!0,b)}if(o)g=c
for(o=c.a,o=o.gB(o);o.C();){a=o.gJ()
a0=a.gaK()
a1=a.gaL()
b=a0-j
a2=a1-i
a3=l+b*r+a2*q
a4=k-b*q+a2*r
b=!1
if(a3>=0)if(a4>=0){a2=d.a
a5=a2==null
a6=a5?a7:a2.a
if(a3<(a6==null?0:a6)){b=a5?a7:a2.b
b=a4<(b==null?0:b)}}if(b)c.c2(a0,a1,d.d1(a3,a4,B.bp))}}g.toString
return g},
oJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null
for(s=a.gaa(),r=s.length,q=b,p=0;p<s.length;s.length===r||(0,A.a0)(s),++p){o=s[p]
n=q==null
m=n?b:q.cf()
if(m==null){l=o.a
k=l==null
j=k?b:l.b
if(j==null)j=0
l=k?b:l.a
m=A.fV(o,l==null?0:l,!0,j)}if(n)q=m
n=o.a
n=n==null?b:n.b
i=(n==null?0:n)-1
h=A.bU(o)
if(h>0&&A.bU(m)===h){n=o.a
l=n==null
k=l?b:n.a
g=-(k==null?0:k)*h
f=l?b:J.Q(n.gu(n))
if(f==null){n=o.a
n=n==null?b:n.gu(n)
if(n==null)n=B.c.gu(new Uint8Array(0))
f=J.Q(n)}n=m.a
e=n==null?b:J.Q(n.gu(n))
if(e==null){n=m.a
n=n==null?b:n.gu(n)
if(n==null)n=B.c.gu(new Uint8Array(0))
e=J.Q(n)}d=0
for(;;){n=m.a
l=n==null
k=l?b:n.b
if(!(d<(k==null?0:k)))break
k=o.a
k=k==null?b:k.a
if(k==null)k=0
j=l?b:n.a
if(j==null)j=0
n=l?b:n.a
if(n==null)n=0
A.jh(f,(i*k+d)*h,g,e,d*j*h,n,h);++d}continue}d=0
for(;;){n=m.a
n=n==null?b:n.b
if(!(d<(n==null?0:n)))break
c=0
for(;;){n=m.a
n=n==null?b:n.a
if(!(c<(n==null?0:n)))break
n=o.a
n=n==null?b:n.U(d,i-c,b)
m.c2(c,d,n==null?new A.K():n);++c}++d}}q.toString
return q},
oH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
for(s=a.gaa(),r=s.length,q=c,p=0;p<s.length;s.length===r||(0,A.a0)(s),++p){o=s[p]
n=o.a
m=n==null
l=m?c:n.a
k=(l==null?0:l)-1
n=m?c:n.b
j=(n==null?0:n)-1
n=q==null
i=n?c:q.cf()
if(i==null)i=A.aR(o,!0,!0)
if(n)q=i
h=A.bU(o)
if(h>0&&A.bU(i)===h){n=o.a
m=n==null
l=m?c:n.a
if(l==null)l=0
g=m?c:n.b
f=l*(g==null?0:g)
n=m?c:J.Q(n.gu(n))
if(n==null){n=o.a
n=n==null?c:n.gu(n)
if(n==null)n=B.c.gu(new Uint8Array(0))
n=J.Q(n)}m=i.a
m=m==null?c:J.Q(m.gu(m))
if(m==null){m=i.a
m=m==null?c:m.gu(m)
if(m==null)m=B.c.gu(new Uint8Array(0))
m=J.Q(m)}A.jh(n,(f-1)*h,-h,m,0,f,h)
continue}e=0
for(;;){n=i.a
n=n==null?c:n.b
if(!(e<(n==null?0:n)))break
n=j-e
d=0
for(;;){m=i.a
m=m==null?c:m.a
if(!(d<(m==null?0:m)))break
m=o.a
m=m==null?c:m.U(k-d,n,c)
i.c2(d,e,m==null?new A.K():m);++d}++e}}q.toString
return q},
oI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null
for(s=a.gaa(),r=s.length,q=b,p=0;p<s.length;s.length===r||(0,A.a0)(s),++p){o=s[p]
n=a.a
n=n==null?b:n.a
m=(n==null?0:n)-1
n=q==null
l=n?b:q.cf()
if(l==null){k=o.a
j=k==null
i=j?b:k.b
if(i==null)i=0
k=j?b:k.a
l=A.fV(o,k==null?0:k,!0,i)}if(n)q=l
h=A.bU(o)
n=!1
if(h>0)if(A.bU(l)===h){n=o.a
n=n==null?b:n.a
if(n==null)n=0
k=a.a
k=k==null?b:k.a
n=n===(k==null?0:k)}if(n){n=o.a
k=n==null
j=k?b:n.a
g=(j==null?0:j)*h
f=k?b:J.Q(n.gu(n))
if(f==null){n=o.a
n=n==null?b:n.gu(n)
if(n==null)n=B.c.gu(new Uint8Array(0))
f=J.Q(n)}n=l.a
e=n==null?b:J.Q(n.gu(n))
if(e==null){n=l.a
n=n==null?b:n.gu(n)
if(n==null)n=B.c.gu(new Uint8Array(0))
e=J.Q(n)}d=0
for(;;){n=l.a
k=n==null
j=k?b:n.b
if(!(d<(j==null?0:j)))break
j=k?b:n.a
if(j==null)j=0
n=k?b:n.a
if(n==null)n=0
A.jh(f,(m-d)*h,g,e,d*j*h,n,h);++d}continue}d=0
for(;;){n=l.a
n=n==null?b:n.b
if(!(d<(n==null?0:n)))break
n=m-d
c=0
for(;;){k=l.a
k=k==null?b:k.a
if(!(c<(k==null?0:k)))break
k=o.a
k=k==null?b:k.U(n,c,b)
l.c2(c,d,k==null?new A.K():k);++c}++d}}q.toString
return q},
jh(a,b,c,d,e,f,g){var s,r,q,p,o,n
for(s=a.length,r=d.$flags|0,q=0;q<f;++q,b+=c)for(p=0;p<g;++p,e=o){o=e+1
n=b+p
if(!(n>=0&&n<s))return A.a(a,n)
n=a[n]
r&2&&A.c(d)
if(!(e>=0&&e<d.length))return A.a(d,e)
d[e]=n}},
po(a){var s
$.jB().j(0,0,a)
s=$.lx()
if(0>=s.length)return A.a(s,0)
return s[0]},
l6(a,b,c,d){return(B.a.S(a,0,255)|B.a.S(b,0,255)<<8|B.a.S(c,0,255)<<16|B.a.S(d,0,255)<<24)>>>0},
aF(a,b,c){var s,r,q,p,o,n=b.gl(b),m=b.gG(),l=a.gM(),k=l==null?null:l.gG()
if(k==null)k=a.gG()
s=a.gl(a)
if(n===1)b.j(0,0,A.cN(B.b.bk(a.gl(a)>2?a.ga4():a.m(0,0)),k,m))
else if(n===2){r=s>2?a.ga4():a.m(0,0)
b.j(0,0,A.cN(!B.hS.ba(0,k)?B.b.bk(r):r,k,m))
b.j(0,1,A.cN(s===2?a.m(0,1):a.gt(),k,m))}else if(n<=s)for(q=0;q<n;++q)b.j(0,q,A.cN(a.m(0,q),k,m))
else if(s===2){p=A.cN(a.m(0,0),k,m)
if(n===3){b.j(0,0,p)
b.j(0,1,p)
b.j(0,2,p)}else{c=A.cN(a.m(0,1),k,m)
b.j(0,0,p)
b.j(0,1,p)
b.j(0,2,p)
b.j(0,3,c)}}else{for(q=0;q<s;++q)b.j(0,q,A.cN(a.m(0,q),k,m))
o=s===1?b.m(0,0):0
for(q=s;q<n;++q)b.j(0,q,q===3?c:o)}return b},
kX(a,b,c,d,e){var s,r,q=a.gM(),p=q==null?null:q.gG()
if(p==null)p=a.gG()
q=e==null
s=q?null:e.gG()
c=s==null?c:s
if(c==null)c=a.gG()
s=q?null:e.gl(e)
d=s==null?d:s
if(d==null)d=a.gl(a)
if(b==null)b=0
if(c===p&&d===a.gl(a)){if(q)return a.I()
e.aF(a)
return e}switch(c.a){case 3:if(q)r=new A.bn(new Uint8Array(d))
else r=e
return A.aF(a,r,b)
case 0:return A.aF(a,q?new A.c6(d,0):e,b)
case 1:return A.aF(a,q?new A.c8(d,0):e,b)
case 2:if(q){q=d<3?1:2
r=new A.ca(d,new Uint8Array(q))}else r=e
return A.aF(a,r,b)
case 4:if(q)r=new A.c7(new Uint16Array(d))
else r=e
return A.aF(a,r,b)
case 5:if(q)r=new A.c9(new Uint32Array(d))
else r=e
return A.aF(a,r,b)
case 6:if(q)r=new A.c5(new Int8Array(d))
else r=e
return A.aF(a,r,b)
case 7:if(q)r=new A.c3(new Int16Array(d))
else r=e
return A.aF(a,r,b)
case 8:if(q)r=new A.c4(new Int32Array(d))
else r=e
return A.aF(a,r,b)
case 9:if(q)r=new A.c0(new Uint16Array(d))
else r=e
return A.aF(a,r,b)
case 10:if(q)r=new A.c1(new Float32Array(d))
else r=e
return A.aF(a,r,b)
case 11:if(q)r=new A.c2(new Float64Array(d))
else r=e
return A.aF(a,r,b)}},
P(a){return 0.299*a.gn()+0.587*a.gp()+0.114*a.gq()},
I(a){var s,r,q,p=$.jy()
p.$flags&2&&A.c(p)
p[0]=a
p=$.lt()
if(0>=p.length)return A.a(p,0)
s=p[0]
if(a===0)return s>>>16
if($.V==null)A.a7()
r=s>>>23&511
p=$.jR.bO()
if(!(r<p.length))return A.a(p,r)
r=p[r]
if(r!==0){q=s&8388607
return r+(q+4095+(q>>>13&1)>>>13)}return A.m0(s)},
m0(a){var s,r,q=a>>>16&32768,p=(a>>>23&255)-112,o=a&8388607
if(p<=0){if(p<-10)return q
o|=8388608
s=14-p
return(q|B.a.bu(o+(B.a.a_(1,s-1)-1)+(B.a.ad(o,s)&1),s))>>>0}else if(p===143)if(o===0)return q|31744
else{o=o>>>13
r=o===0?1:0
return q|o|r|31744}else{o=o+4095+(o>>>13&1)
if((o&8388608)!==0){++p
o=0}if(p>30)return q|31744
return(q|p<<10|o>>>13)>>>0}},
a7(){var s,r,q,p,o,n=$.V
if(n!=null)return n
s=new Uint32Array(65536)
$.V=J.jE(B.i.gu(s),0,null)
n=new Uint16Array(512)
$.jR.b=n
for(r=0;r<256;++r){q=(r&255)-112
if(q<=0||q>=30){n[r]=0
p=(r|256)>>>0
if(!(p<512))return A.a(n,p)
n[p]=0}else{p=q<<10>>>0
n[r]=p
o=(r|256)>>>0
if(!(o<512))return A.a(n,o)
n[o]=(p|32768)>>>0}}for(r=0;r<65536;++r)s[r]=A.m1(r)
n=$.V
n.toString
return n},
m1(a){var s,r=a>>>15&1,q=a>>>10&31,p=a&1023
if(q===0)if(p===0)return r<<31>>>0
else{while((p&1024)===0){p=p<<1;--q}++q
p&=4294966271}else if(q===31){s=r<<31
if(p===0)return(s|2139095040)>>>0
else return(s|p<<13|2139095040)>>>0}return(r<<31|q+112<<23|p<<13)>>>0}},B={}
var w=[A,J,B]
var $={}
A.iZ.prototype={}
J.eK.prototype={
H(a,b){return a===b},
gA(a){return A.dD(a)},
v(a){return"Instance of '"+A.f8(a)+"'"},
gan(a){return A.bV(A.jj(this))}}
J.eQ.prototype={
v(a){return String(a)},
gA(a){return a?519018:218159},
gan(a){return A.bV(t.y)},
$iE:1,
$iaG:1}
J.dg.prototype={
H(a,b){return null==b},
v(a){return"null"},
gA(a){return 0},
$iE:1}
J.di.prototype={$iL:1}
J.b9.prototype={
gA(a){return 0},
v(a){return String(a)}}
J.f5.prototype={}
J.dJ.prototype={}
J.aS.prototype={
v(a){var s=a[$.l9()]
if(s==null)s=a[$.js()]
if(s==null)return this.eN(a)
return"JavaScript function for "+J.bZ(s)},
$ibq:1}
J.cv.prototype={
gA(a){return 0},
v(a){return String(a)}}
J.cw.prototype={
gA(a){return 0},
v(a){return String(a)}}
J.u.prototype={
cg(a,b){return new A.az(a,A.an(a).k("@<1>").aw(b).k("az<1,2>"))},
N(a,b){A.an(a).c.a(b)
a.$flags&1&&A.c(a,29)
a.push(b)},
em(a){a.$flags&1&&A.c(a,"clear","clear")
a.length=0},
ex(a,b){return A.bP(a,0,A.fC(b,"count",t.q),A.an(a).c)},
aN(a,b){return A.bP(a,b,null,A.an(a).c)},
b_(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
c_(a,b,c){A.aU(b,c,a.length)
return A.bP(a,b,c,A.an(a).c)},
gcj(a){var s=a.length
if(s>0)return a[s-1]
throw A.h(A.h1())},
X(a,b,c,d,e){var s,r,q,p
A.an(a).k("d<1>").a(d)
a.$flags&2&&A.c(a,5)
A.aU(b,c,a.length)
s=c-b
if(s===0)return
A.am(e,"skipCount")
r=A.j(d)
r=A.eq(J.fK(d.a,e),r.c,r.y[1])
r=A.n(r,A.j(r).k("d.E"))
r.$flags=1
q=r
if(s>q.length)throw A.h(A.jX())
if(0<b)for(p=s-1;p>=0;--p){if(!(p>=0&&p<q.length))return A.a(q,p)
a[b+p]=q[p]}else for(p=0;p<s;++p){if(!(p>=0&&p<q.length))return A.a(q,p)
a[b+p]=q[p]}},
hS(a,b){var s,r
A.an(a).k("aG(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.h(A.aJ(a))}return!1},
ba(a,b){var s
for(s=0;s<a.length;++s)if(J.el(a[s],b))return!0
return!1},
gF(a){return a.length===0},
gbc(a){return a.length!==0},
v(a){return A.iX(a,"[","]")},
gB(a){return new J.cR(a,a.length,A.an(a).k("cR<1>"))},
gA(a){return A.dD(a)},
gl(a){return a.length},
sl(a,b){a.$flags&1&&A.c(a,"set length","change the length of")
if(b<0)throw A.h(A.ab(b,0,null,"newLength",null))
if(b>a.length)A.an(a).c.a(null)
a.length=b},
m(a,b){if(!(b>=0&&b<a.length))throw A.h(A.fE(a,b))
return a[b]},
j(a,b,c){A.an(a).c.a(c)
a.$flags&2&&A.c(a)
if(!(b>=0&&b<a.length))throw A.h(A.fE(a,b))
a[b]=c},
$ia5:1,
$iq:1,
$id:1,
$ip:1}
J.eP.prototype={
iI(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.f8(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.h3.prototype={}
J.cR.prototype={
gJ(){var s=this.d
return s==null?this.$ti.c.a(s):s},
C(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.a0(q)
throw A.h(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ix:1}
J.dh.prototype={
cT(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.a.gcW(b)
if(this.gcW(a)===s)return 0
if(this.gcW(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcW(a){return a===0?1/a<0:a<0},
h(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.h(A.aO(""+a+".toInt()"))},
aH(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.h(A.aO(""+a+".ceil()"))},
bk(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.h(A.aO(""+a+".floor()"))},
ew(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.h(A.aO(""+a+".round()"))},
S(a,b,c){if(B.a.cT(b,c)>0)throw A.h(A.bi(b))
if(this.cT(a,b)<0)return b
if(this.cT(a,c)>0)return c
return a},
ey(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.h(A.ab(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.a(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.Y(A.aO("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.a(p,1)
s=p[1]
if(3>=r)return A.a(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.r.d3("0",o)},
v(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a6(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ac(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e2(a,b)},
a0(a,b){return(a|0)===a?a/b|0:this.e2(a,b)},
e2(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.h(A.aO("Result of truncating division is "+A.z(s)+": "+A.z(a)+" ~/ "+b))},
a_(a,b){if(b<0)throw A.h(A.bi(b))
return b>31?0:a<<b>>>0},
L(a,b){return b>31?0:a<<b>>>0},
bu(a,b){var s
if(b<0)throw A.h(A.bi(b))
if(a>0)s=this.Y(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
i(a,b){var s
if(a>0)s=this.Y(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ad(a,b){if(0>b)throw A.h(A.bi(b))
return this.Y(a,b)},
Y(a,b){return b>31?0:a>>>b},
gan(a){return A.bV(t.u)},
$iw:1,
$il:1}
J.df.prototype={
au(a,b){var s=this.a_(1,b-1)
return((a&s-1)>>>0)-((a&s)>>>0)},
gan(a){return A.bV(t.q)},
$iE:1,
$ii:1}
J.eR.prototype={
gan(a){return A.bV(t.V)},
$iE:1}
J.cu.prototype={
c4(a,b,c){return a.substring(b,A.aU(b,c,a.length))},
d3(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.h(B.bd)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
v(a){return a},
gA(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gan(a){return A.bV(t.N)},
gl(a){return a.length},
m(a,b){if(b>=a.length)throw A.h(A.fE(a,b))
return a[b]},
$ia5:1,
$iE:1,
$iW:1}
A.bg.prototype={
gB(a){return new A.cT(J.em(this.gbg()),A.j(this).k("cT<1,2>"))},
gl(a){return J.b3(this.gbg())},
gF(a){return J.lG(this.gbg())},
gbc(a){return J.lH(this.gbg())},
aN(a,b){var s=A.j(this)
return A.eq(J.fK(this.gbg(),b),s.c,s.y[1])},
b_(a,b){return A.j(this).y[1].a(J.iP(this.gbg(),b))},
v(a){return J.bZ(this.gbg())}}
A.cT.prototype={
C(){return this.a.C()},
gJ(){return this.$ti.y[1].a(this.a.gJ())},
$ix:1}
A.bl.prototype={
gbg(){return this.a}}
A.dU.prototype={$iq:1}
A.dT.prototype={
m(a,b){return this.$ti.y[1].a(J.e(this.a,b))},
j(a,b,c){var s=this.$ti
J.a1(this.a,b,s.c.a(s.y[1].a(c)))},
c_(a,b,c){var s=this.$ti
return A.eq(J.lJ(this.a,b,c),s.c,s.y[1])},
X(a,b,c,d,e){var s=this.$ti
J.lK(this.a,b,c,A.eq(s.k("d<2>").a(d),s.y[1],s.c),e)},
ag(a,b,c,d){return this.X(0,b,c,d,0)},
$iq:1,
$ip:1}
A.az.prototype={
cg(a,b){return new A.az(this.a,this.$ti.k("@<1>").aw(b).k("az<1,2>"))},
gbg(){return this.a}}
A.cx.prototype={
v(a){return"LateInitializationError: "+this.a}}
A.aj.prototype={
gl(a){return this.a.length},
m(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s.charCodeAt(b)}}
A.hx.prototype={}
A.q.prototype={}
A.aB.prototype={
gB(a){var s=this
return new A.by(s,s.gl(s),A.j(s).k("by<aB.E>"))},
gF(a){return this.gl(this)===0},
aN(a,b){return A.bP(this,b,null,A.j(this).k("aB.E"))}}
A.dH.prototype={
gfK(){var s=J.b3(this.a),r=this.c
if(r==null||r>s)return s
return r},
ghM(){var s=J.b3(this.a),r=this.b
if(r>s)return s
return r},
gl(a){var s,r=J.b3(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
b_(a,b){var s=this,r=s.ghM()+b
if(b<0||r>=s.gfK())throw A.h(A.fY(b,s.gl(0),s,"index"))
return J.iP(s.a,r)},
aN(a,b){var s,r,q=this
A.am(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.cW(q.$ti.k("cW<1>"))
return A.bP(q.a,s,r,q.$ti.c)},
d_(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.N(n),l=m.gl(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=J.iY(0,p.$ti.c)
return n}r=A.aC(s,m.b_(n,o),!1,p.$ti.c)
for(q=1;q<s;++q){B.e.j(r,q,m.b_(n,o+q))
if(m.gl(n)<l)throw A.h(A.aJ(p))}return r}}
A.by.prototype={
gJ(){var s=this.d
return s==null?this.$ti.c.a(s):s},
C(){var s,r=this,q=r.a,p=J.N(q),o=p.gl(q)
if(r.b!==o)throw A.h(A.aJ(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.b_(q,s);++r.c
return!0},
$ix:1}
A.dk.prototype={
gl(a){return J.b3(this.a)},
b_(a,b){return this.b.$1(J.iP(this.a,b))}}
A.aV.prototype={
aN(a,b){A.fM(b,"count",t.q)
A.am(b,"count")
return new A.aV(this.a,this.b+b,A.j(this).k("aV<1>"))},
gB(a){var s=this.a
return new A.dF(s.gB(s),this.b,A.j(this).k("dF<1>"))}}
A.cb.prototype={
gl(a){var s=this.a,r=s.gl(s)-this.b
if(r>=0)return r
return 0},
aN(a,b){A.fM(b,"count",t.q)
A.am(b,"count")
return new A.cb(this.a,this.b+b,this.$ti)},
$iq:1}
A.dF.prototype={
C(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.C()
this.b=0
return s.C()},
gJ(){return this.a.gJ()},
$ix:1}
A.cW.prototype={
gB(a){return B.b5},
gF(a){return!0},
gl(a){return 0},
b_(a,b){throw A.h(A.ab(b,0,0,"index",null))},
aN(a,b){A.am(b,"count")
return this},
d_(a,b){var s=J.iY(0,this.$ti.c)
return s}}
A.cX.prototype={
C(){return!1},
gJ(){throw A.h(A.h1())},
$ix:1}
A.ac.prototype={}
A.aZ.prototype={
j(a,b,c){A.j(this).k("aZ.E").a(c)
throw A.h(A.aO("Cannot modify an unmodifiable list"))},
X(a,b,c,d,e){A.j(this).k("d<aZ.E>").a(d)
throw A.h(A.aO("Cannot modify an unmodifiable list"))},
ag(a,b,c,d){return this.X(0,b,c,d,0)},
al(a,b,c,d){A.j(this).k("aZ.E?").a(d)
throw A.h(A.aO("Cannot modify an unmodifiable list"))}}
A.cD.prototype={}
A.ed.prototype={}
A.cU.prototype={
gF(a){return this.gl(this)===0},
v(a){return A.j1(this)},
$iaD:1}
A.e_.prototype={
gJ(){var s=this.d
return s==null?this.$ti.c.a(s):s},
C(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ix:1}
A.br.prototype={
bA(){var s=this,r=s.$map
if(r==null){r=new A.bw(s.$ti.k("bw<1,2>"))
A.kZ(s.a,r)
s.$map=r}return r},
m(a,b){return this.bA().m(0,b)},
b4(a,b){this.$ti.k("~(1,2)").a(b)
this.bA().b4(0,b)},
gbF(){var s=this.bA()
return new A.bx(s,A.j(s).k("bx<1>"))},
gl(a){return this.bA().a}}
A.cV.prototype={}
A.cZ.prototype={
gl(a){return this.a.length},
gF(a){return this.a.length===0},
gbc(a){return this.a.length!==0},
gB(a){var s=this.a
return new A.e_(s,s.length,this.$ti.k("e_<1>"))},
bA(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.bw(o.$ti.k("bw<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.a0)(s),++q){p=s[q]
n.j(0,p,p)}o.$map=n}return n},
ba(a,b){return this.bA().aC(b)}}
A.dE.prototype={}
A.hA.prototype={
b5(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.dx.prototype={
v(a){return"Null check operator used on a null value"}}
A.eW.prototype={
v(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.fe.prototype={
v(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hk.prototype={
v(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.e7.prototype={
v(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icB:1}
A.b4.prototype={
v(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.l8(r==null?"unknown":r)+"'"},
$ibq:1,
giN(){return this},
$C:"$1",
$R:1,
$D:null}
A.er.prototype={$C:"$0",$R:0}
A.es.prototype={$C:"$2",$R:2}
A.fc.prototype={}
A.fb.prototype={
v(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.l8(s)+"'"}}
A.c_.prototype={
H(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.c_))return!1
return this.$_target===b.$_target&&this.a===b.a},
gA(a){return(A.fG(this.a)^A.dD(this.$_target))>>>0},
v(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.f8(this.a)+"'")}}
A.fa.prototype={
v(a){return"RuntimeError: "+this.a}}
A.aA.prototype={
gl(a){return this.a},
gF(a){return this.a===0},
gbF(){return new A.bx(this,A.j(this).k("bx<1>"))},
aC(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.ij(a)},
ij(a){var s=this.d
if(s==null)return!1
return this.bT(this.dC(s,a),a)>=0},
m(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ik(b)},
ik(a){var s,r,q=this.d
if(q==null)return null
s=this.dC(q,a)
r=this.bT(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.j(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.dd(s==null?q.b=q.cI():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.dd(r==null?q.c=q.cI():r,b,c)}else q.im(b,c)},
im(a,b){var s,r,q,p,o=this,n=A.j(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.cI()
r=o.ci(a)
q=s[r]
if(q==null)s[r]=[o.cJ(a,b)]
else{p=o.bT(q,a)
if(p>=0)q[p].b=b
else q.push(o.cJ(a,b))}},
iA(a,b){if((b&0x3fffffff)===b)return this.hE(this.c,b)
else return this.il(b)},
il(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ci(a)
r=n[s]
q=o.bT(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.e5(p)
if(r.length===0)delete n[s]
return p.b},
b4(a,b){var s,r,q=this
A.j(q).k("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.h(A.aJ(q))
s=s.c}},
dd(a,b,c){var s,r=A.j(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.cJ(b,c)
else s.b=c},
hE(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.e5(s)
delete a[b]
return s.b},
dL(){this.r=this.r+1&1073741823},
cJ(a,b){var s=this,r=A.j(s),q=new A.hf(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.dL()
return q},
e5(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.dL()},
ci(a){return J.bk(a)&1073741823},
dC(a,b){return a[this.ci(b)]},
bT(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.el(a[r].a,b))return r
return-1},
v(a){return A.j1(this)},
cI(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ij0:1}
A.hf.prototype={}
A.bx.prototype={
gl(a){return this.a.a},
gF(a){return this.a.a===0},
gB(a){var s=this.a
return new A.T(s,s.r,s.e,this.$ti.k("T<1>"))}}
A.T.prototype={
gJ(){return this.d},
C(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.h(A.aJ(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ix:1}
A.hg.prototype={
gl(a){return this.a.a},
gF(a){return this.a.a===0},
gB(a){var s=this.a
return new A.aT(s,s.r,s.e,this.$ti.k("aT<1>"))}}
A.aT.prototype={
gJ(){return this.d},
C(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.h(A.aJ(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ix:1}
A.bw.prototype={
ci(a){return A.oX(a)&1073741823},
bT(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.el(a[r].a,b))return r
return-1}}
A.iC.prototype={
$1(a){return this.a(a)},
$S:7}
A.iD.prototype={
$2(a,b){return this.a(a,b)},
$S:16}
A.iE.prototype={
$1(a){return this.a(A.b1(a))},
$S:17}
A.hZ.prototype={
bO(){var s=this.b
if(s===this)throw A.h(A.hc(""))
return s}}
A.ba.prototype={
gan(a){return B.hT},
bR(a,b,c){A.ao(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
ej(a){return this.bR(a,0,null)},
eh(a,b,c){A.ao(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
ef(a,b,c){A.ao(a,b,c)
c=B.a.a0(a.byteLength-b,2)
return new Int16Array(a,b,c)},
ei(a,b,c){A.ao(a,b,c)
c=B.a.a0(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
eg(a,b,c){A.ao(a,b,c)
c=B.a.a0(a.byteLength-b,4)
return new Int32Array(a,b,c)},
ee(a,b,c){A.ao(a,b,c)
c=B.a.a0(a.byteLength-b,4)
return new Float32Array(a,b,c)},
ed(a,b,c){var s
A.ao(a,b,c)
s=new DataView(a,b,c)
return s},
$iE:1,
$iba:1}
A.bz.prototype={$ibz:1}
A.ds.prototype={
gu(a){if(((a.$flags|0)&2)!==0)return new A.iq(a.buffer)
else return a.buffer},
h_(a,b,c,d){var s=A.ab(b,0,c,d,null)
throw A.h(s)},
dl(a,b,c,d){if(b>>>0!==b||b>c)this.h_(a,b,c,d)}}
A.iq.prototype={
bR(a,b,c){var s=A.mp(this.a,b,c)
s.$flags=3
return s},
ej(a){return this.bR(0,0,null)},
eh(a,b,c){var s=A.mk(this.a,b,c)
s.$flags=3
return s},
ef(a,b,c){var s=A.mh(this.a,b,c)
s.$flags=3
return s},
ei(a,b,c){var s=A.mn(this.a,b,c)
s.$flags=3
return s},
eg(a,b,c){var s=A.mj(this.a,b,c)
s.$flags=3
return s},
ee(a,b,c){var s=A.mg(this.a,b,c)
s.$flags=3
return s},
ed(a,b,c){var s=A.me(this.a,b,c)
s.$flags=3
return s}}
A.f0.prototype={
gan(a){return B.hU},
$iE:1}
A.a_.prototype={
gl(a){return a.length},
hH(a,b,c,d,e){var s,r,q
t.gu.a(d)
s=a.length
this.dl(a,b,s,"start")
this.dl(a,c,s,"end")
if(b>c)throw A.h(A.ab(b,0,c,null,null))
r=c-b
if(e<0)throw A.h(A.a2(e,null))
q=d.length
if(q-e<r)throw A.h(A.j4("Not enough elements"))
if(e!==0||q!==r)d=d.subarray(e,e+r)
a.set(d,b)},
$ia5:1,
$iak:1}
A.dr.prototype={
m(a,b){A.b2(b,a,a.length)
return a[b]},
j(a,b,c){A.kH(c)
a.$flags&2&&A.c(a)
A.b2(b,a,a.length)
a[b]=c},
X(a,b,c,d,e){t.bM.a(d)
a.$flags&2&&A.c(a,5)
this.da(a,b,c,d,e)},
ag(a,b,c,d){return this.X(a,b,c,d,0)},
$iq:1,
$id:1,
$ip:1}
A.al.prototype={
j(a,b,c){A.v(c)
a.$flags&2&&A.c(a)
A.b2(b,a,a.length)
a[b]=c},
X(a,b,c,d,e){t.hb.a(d)
a.$flags&2&&A.c(a,5)
if(t.bc.b(d)){this.hH(a,b,c,d,e)
return}this.da(a,b,c,d,e)},
ag(a,b,c,d){return this.X(a,b,c,d,0)},
$iq:1,
$id:1,
$ip:1}
A.dl.prototype={
gan(a){return B.hV},
$iE:1,
$iiR:1}
A.dm.prototype={
gan(a){return B.hW},
$iE:1,
$iiS:1}
A.dn.prototype={
gan(a){return B.hX},
m(a,b){A.b2(b,a,a.length)
return a[b]},
bJ(a,b,c){return new Int16Array(a.subarray(b,A.fA(b,c,a.length)))},
$iE:1,
$ibv:1}
A.dp.prototype={
gan(a){return B.hY},
m(a,b){A.b2(b,a,a.length)
return a[b]},
$iE:1,
$iiV:1}
A.dq.prototype={
gan(a){return B.hZ},
m(a,b){A.b2(b,a,a.length)
return a[b]},
$iE:1,
$iiW:1}
A.dt.prototype={
gan(a){return B.i0},
m(a,b){A.b2(b,a,a.length)
return a[b]},
$iE:1,
$ihC:1}
A.du.prototype={
gan(a){return B.i1},
m(a,b){A.b2(b,a,a.length)
return a[b]},
$iE:1,
$idI:1}
A.dv.prototype={
gan(a){return B.i2},
gl(a){return a.length},
m(a,b){A.b2(b,a,a.length)
return a[b]},
$iE:1}
A.aN.prototype={
gan(a){return B.i3},
gl(a){return a.length},
m(a,b){A.b2(b,a,a.length)
return a[b]},
bJ(a,b,c){return new Uint8Array(a.subarray(b,A.fA(b,c,a.length)))},
eM(a,b){return this.bJ(a,b,null)},
$iE:1,
$iaN:1,
$iau:1}
A.e2.prototype={}
A.e3.prototype={}
A.e4.prototype={}
A.e5.prototype={}
A.aE.prototype={
k(a){return A.ip(v.typeUniverse,this,a)},
aw(a){return A.nY(v.typeUniverse,this,a)}}
A.fq.prototype={}
A.fw.prototype={
v(a){return A.ap(this.a,null)}}
A.fo.prototype={
v(a){return this.a}}
A.e8.prototype={$iaX:1}
A.hW.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:8}
A.hV.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:18}
A.hX.prototype={
$0(){this.a.$0()},
$S:9}
A.hY.prototype={
$0(){this.a.$0()},
$S:9}
A.ij.prototype={
f0(a,b){if(self.setTimeout!=null)self.setTimeout(A.eh(new A.ik(this,b),0),a)
else throw A.h(A.aO("`setTimeout()` not found."))}}
A.ik.prototype={
$0(){this.b.$0()},
$S:2}
A.aI.prototype={
v(a){return A.z(this.a)},
$iH:1,
gbI(){return this.b}}
A.fm.prototype={
eo(a){var s=this.a
if((s.a&30)!==0)throw A.h(A.j4("Future already completed"))
s.dh(A.op(a,null))}}
A.dS.prototype={}
A.dV.prototype={
iq(a){if((this.c&15)!==6)return!0
return this.b.b.cZ(t.al.a(this.d),a.a,t.y,t.K)},
ig(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.iC(q,m,a.b,o,n,t.l)
else p=l.cZ(t.v.a(q),m,o,n)
try{o=r.$ti.k("2/").a(p)
return o}catch(s){if(t.eK.b(A.as(s))){if((r.c&1)!==0)throw A.h(A.a2("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.h(A.a2("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.aw.prototype={
iF(a,b,c){var s,r,q=this.$ti
q.aw(c).k("1/(2)").a(a)
s=$.X
if(s===B.p){if(!t.Q.b(b)&&!t.v.b(b))throw A.h(A.fL(b,"onError",u.c))}else{c.k("@<0/>").aw(q.c).k("1(2)").a(a)
b=A.oE(b,s)}r=new A.aw(s,c.k("aw<0>"))
this.de(new A.dV(r,3,a,b,q.k("@<1>").aw(c).k("dV<1,2>")))
return r},
hG(a){this.a=this.a&1|16
this.c=a},
c6(a){this.a=a.a&30|this.a&1
this.c=a.c},
de(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.de(a)
return}r.c6(s)}A.fB(null,null,r.b,t.M.a(new A.i1(r,a)))}},
dQ(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.dQ(a)
return}m.c6(n)}l.a=m.cd(a)
A.fB(null,null,m.b,t.M.a(new A.i5(l,m)))}},
cc(){var s=t.F.a(this.c)
this.c=null
return this.cd(s)},
cd(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fc(a){var s,r=this
r.$ti.c.a(a)
s=r.cc()
r.a=8
r.c=a
A.cH(r,s)},
fb(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.cc()
q.c6(a)
A.cH(q,r)},
dr(a){var s=this.cc()
this.hG(a)
A.cH(this,s)},
f3(a){var s=this.$ti
s.k("1/").a(a)
if(s.k("cc<1>").b(a)){this.f9(a)
return}this.f4(a)},
f4(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.fB(null,null,s.b,t.M.a(new A.i3(s,a)))},
f9(a){A.j8(this.$ti.k("cc<1>").a(a),this,!1)
return},
dh(a){this.a^=2
A.fB(null,null,this.b,t.M.a(new A.i2(this,a)))},
$icc:1}
A.i1.prototype={
$0(){A.cH(this.a,this.b)},
$S:2}
A.i5.prototype={
$0(){A.cH(this.b,this.a.a)},
$S:2}
A.i4.prototype={
$0(){A.j8(this.a.a,this.b,!0)},
$S:2}
A.i3.prototype={
$0(){this.a.fc(this.b)},
$S:2}
A.i2.prototype={
$0(){this.a.dr(this.b)},
$S:2}
A.i8.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.iB(t.fO.a(q.d),t.z)}catch(p){s=A.as(p)
r=A.ei(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.iQ(q)
n=k.a
n.c=new A.aI(q,o)
q=n}q.b=!0
return}if(j instanceof A.aw&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.aw){m=k.b.a
l=new A.aw(m.b,m.$ti)
j.iF(new A.i9(l,m),new A.ia(l),t.w)
q=k.a
q.c=l
q.b=!1}},
$S:2}
A.i9.prototype={
$1(a){this.a.fb(this.b)},
$S:8}
A.ia.prototype={
$2(a,b){A.fz(a)
t.l.a(b)
this.a.dr(new A.aI(a,b))},
$S:19}
A.i7.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.cZ(o.k("2/(1)").a(p.d),m,o.k("2/"),n)}catch(l){s=A.as(l)
r=A.ei(l)
q=s
p=r
if(p==null)p=A.iQ(q)
o=this.a
o.c=new A.aI(q,p)
o.b=!0}},
$S:2}
A.i6.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.iq(s)&&p.a.e!=null){p.c=p.a.ig(s)
p.b=!1}}catch(o){r=A.as(o)
q=A.ei(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.iQ(p)
m=l.b
m.c=new A.aI(p,n)
p=m}p.b=!0}},
$S:2}
A.fl.prototype={}
A.ec.prototype={$ikr:1}
A.ft.prototype={
iD(a){var s,r,q
t.M.a(a)
try{if(B.p===$.X){a.$0()
return}A.kQ(null,null,this,a,t.w)}catch(q){s=A.as(q)
r=A.ei(q)
A.jm(A.fz(s),t.l.a(r))}},
hT(a){return new A.ih(this,t.M.a(a))},
m(a,b){return null},
iB(a,b){b.k("0()").a(a)
if($.X===B.p)return a.$0()
return A.kQ(null,null,this,a,b)},
cZ(a,b,c,d){c.k("@<0>").aw(d).k("1(2)").a(a)
d.a(b)
if($.X===B.p)return a.$1(b)
return A.oG(null,null,this,a,b,c,d)},
iC(a,b,c,d,e,f){d.k("@<0>").aw(e).aw(f).k("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.X===B.p)return a.$2(b,c)
return A.oF(null,null,this,a,b,c,d,e,f)}}
A.ih.prototype={
$0(){return this.a.iD(this.b)},
$S:2}
A.iw.prototype={
$0(){A.lZ(this.a,this.b)},
$S:2}
A.dW.prototype={
gl(a){return this.a},
gF(a){return this.a===0},
gbF(){return new A.dX(this,this.$ti.k("dX<1>"))},
aC(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.fd(a)},
fd(a){var s=this.d
if(s==null)return!1
return this.bM(this.dq(s,a),a)>=0},
m(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.ku(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.ku(q,b)
return r}else return this.fa(b)},
fa(a){var s,r,q=this.d
if(q==null)return null
s=this.dq(q,a)
r=this.bM(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.dn(s==null?m.b=A.j9():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.dn(r==null?m.c=A.j9():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.j9()
p=A.fG(b)&1073741823
o=q[p]
if(o==null){A.ja(q,p,[b,c]);++m.a
m.e=null}else{n=m.bM(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
b4(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.k("~(1,2)").a(b)
s=m.dt()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.m(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.h(A.aJ(m))}},
dt(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.aC(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
dn(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.ja(a,b,c)},
dq(a,b){return a[A.fG(b)&1073741823]}}
A.dZ.prototype={
bM(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.dX.prototype={
gl(a){return this.a.a},
gF(a){return this.a.a===0},
gbc(a){return this.a.a!==0},
gB(a){var s=this.a
return new A.dY(s,s.dt(),this.$ti.k("dY<1>"))}}
A.dY.prototype={
gJ(){var s=this.d
return s==null?this.$ti.c.a(s):s},
C(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.h(A.aJ(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ix:1}
A.e0.prototype={
gB(a){var s=this,r=new A.e1(s,s.r,s.$ti.k("e1<1>"))
r.c=s.e
return r},
gl(a){return this.a},
gF(a){return this.a===0},
gbc(a){return this.a!==0},
N(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dm(s==null?q.b=A.jc():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dm(r==null?q.c=A.jc():r,b)}else return q.f1(b)},
f1(a){var s,r,q,p=this
p.$ti.c.a(a)
s=p.d
if(s==null)s=p.d=A.jc()
r=J.bk(a)&1073741823
q=s[r]
if(q==null)s[r]=[p.cw(a)]
else{if(p.bM(q,a)>=0)return!1
q.push(p.cw(a))}return!0},
dm(a,b){this.$ti.c.a(b)
if(t.br.a(a[b])!=null)return!1
a[b]=this.cw(b)
return!0},
cw(a){var s=this,r=new A.fr(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
bM(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.el(a[r].a,b))return r
return-1}}
A.fr.prototype={}
A.e1.prototype={
gJ(){var s=this.d
return s==null?this.$ti.c.a(s):s},
C(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.h(A.aJ(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.k("1?").a(r.a)
s.c=r.b
return!0}},
$ix:1}
A.hh.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:20}
A.y.prototype={
gB(a){return new A.by(a,this.gl(a),A.ar(a).k("by<y.E>"))},
b_(a,b){return this.m(a,b)},
gF(a){return this.gl(a)===0},
gbc(a){return!this.gF(a)},
gic(a){if(this.gl(a)===0)throw A.h(A.h1())
return this.m(a,0)},
gcj(a){if(this.gl(a)===0)throw A.h(A.h1())
return this.m(a,this.gl(a)-1)},
ba(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(J.el(this.m(a,s),b))return!0
if(r!==this.gl(a))throw A.h(A.aJ(a))}return!1},
aN(a,b){return A.bP(a,b,null,A.ar(a).k("y.E"))},
ex(a,b){return A.bP(a,0,A.fC(b,"count",t.q),A.ar(a).k("y.E"))},
cg(a,b){return new A.az(a,A.ar(a).k("@<y.E>").aw(b).k("az<1,2>"))},
bJ(a,b,c){var s,r=this.gl(a)
A.aU(b,c,r)
s=A.n(this.c_(a,b,c),A.ar(a).k("y.E"))
return s},
c_(a,b,c){A.aU(b,c,this.gl(a))
return A.bP(a,b,c,A.ar(a).k("y.E"))},
al(a,b,c,d){var s
A.ar(a).k("y.E?").a(d)
A.aU(b,c,this.gl(a))
for(s=b;s<c;++s)this.j(a,s,d)},
X(a,b,c,d,e){var s,r,q,p,o
A.ar(a).k("d<y.E>").a(d)
A.aU(b,c,this.gl(a))
s=c-b
if(s===0)return
A.am(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.fK(d,e).d_(0,!1)
r=0}p=J.N(q)
if(r+s>p.gl(q))throw A.h(A.jX())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.m(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.m(q,r+o))},
ag(a,b,c,d){return this.X(a,b,c,d,0)},
d4(a,b,c){A.ar(a).k("d<y.E>").a(c)
this.ag(a,b,b+c.length,c)},
v(a){return A.iX(a,"[","]")},
$iq:1,
$id:1,
$ip:1}
A.a6.prototype={
b4(a,b){var s,r,q,p=A.j(this)
p.k("~(a6.K,a6.V)").a(b)
for(s=this.gbF(),s=s.gB(s),p=p.k("a6.V");s.C();){r=s.gJ()
q=this.m(0,r)
b.$2(r,q==null?p.a(q):q)}},
gl(a){var s=this.gbF()
return s.gl(s)},
gF(a){var s=this.gbF()
return s.gF(s)},
v(a){return A.j1(this)},
$iaD:1}
A.hi.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.z(a)
r.a=(r.a+=s)+": "
s=A.z(b)
r.a+=s},
$S:10}
A.bd.prototype={
gF(a){return this.gl(this)===0},
gbc(a){return this.gl(this)!==0},
v(a){return A.iX(this,"{","}")},
aN(a,b){return A.ki(this,b,A.j(this).c)},
b_(a,b){var s,r
A.am(b,"index")
s=this.gB(this)
for(r=b;s.C();){if(r===0)return s.gJ();--r}throw A.h(A.fY(b,b-r,this,"index"))},
$iq:1,
$id:1}
A.e6.prototype={}
A.is.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:11}
A.ir.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:11}
A.im.prototype={
bE(a){var s,r,q=a.length,p=A.aU(0,null,q),o=new Uint8Array(p)
for(s=0;s<p;++s){if(!(s<q))return A.a(a,s)
r=a.charCodeAt(s)
if((r&4294967040)!==0)throw A.h(A.fL(a,"string","Contains invalid characters."))
if(!(s<p))return A.a(o,s)
o[s]=r}return o}}
A.il.prototype={
bE(a){var s,r,q,p
t.L.a(a)
s=a.length
r=A.aU(0,null,s)
for(q=0;q<r;++q){if(!(q<s))return A.a(a,q)
p=a[q]
if((p&4294967040)!==0){if(!this.a)throw A.h(A.jS("Invalid value in input: "+p,null,null))
return this.ff(a,0,r)}}return A.hy(a,0,r)},
ff(a,b,c){var s,r,q,p
t.L.a(a)
for(s=a.length,r=b,q="";r<c;++r){if(!(r<s))return A.a(a,r)
p=a[r]
q+=A.M((p&4294967040)!==0?65533:p)}return q.charCodeAt(0)==0?q:q}}
A.bm.prototype={}
A.ew.prototype={}
A.ez.prototype={}
A.dj.prototype={
v(a){var s=A.eA(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.eY.prototype={
v(a){return"Cyclic error in JSON stringify"}}
A.eX.prototype={
i6(a,b){var s=A.nH(a,this.gi8().b,null)
return s},
gi8(){return B.bt}}
A.hb.prototype={}
A.ie.prototype={
eE(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.r.c4(a,r,q)
r=q+1
o=A.M(92)
s.a+=o
o=A.M(117)
s.a+=o
o=A.M(100)
s.a+=o
o=p>>>8&15
o=A.M(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.M(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.M(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.r.c4(a,r,q)
r=q+1
o=A.M(92)
s.a+=o
switch(p){case 8:o=A.M(98)
s.a+=o
break
case 9:o=A.M(116)
s.a+=o
break
case 10:o=A.M(110)
s.a+=o
break
case 12:o=A.M(102)
s.a+=o
break
case 13:o=A.M(114)
s.a+=o
break
default:o=A.M(117)
s.a+=o
o=A.M(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.M(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.M(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.r.c4(a,r,q)
r=q+1
o=A.M(92)
s.a+=o
o=A.M(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.r.c4(a,r,m)},
cu(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.h(new A.eY(a,null))}B.e.N(s,a)},
cn(a){var s,r,q,p,o=this
if(o.eB(a))return
o.cu(a)
try{s=o.b.$1(a)
if(!o.eB(s)){q=A.k0(a,null,o.gdO())
throw A.h(q)}q=o.a
if(0>=q.length)return A.a(q,-1)
q.pop()}catch(p){r=A.as(p)
q=A.k0(a,r,o.gdO())
throw A.h(q)}},
eB(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.v(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.eE(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.cu(a)
q.iL(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.cu(a)
r=q.iM(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return r}else return!1},
iL(a){var s,r,q=this.c
q.a+="["
s=J.N(a)
if(s.gbc(a)){this.cn(s.m(a,0))
for(r=1;r<s.gl(a);++r){q.a+=","
this.cn(s.m(a,r))}}q.a+="]"},
iM(a){var s,r,q,p,o,n,m=this,l={}
if(a.gF(a)){m.c.a+="{}"
return!0}s=a.gl(a)*2
r=A.aC(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.b4(0,new A.ig(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.eE(A.b1(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.a(r,n)
m.cn(r[n])}p.a+="}"
return!0}}
A.ig.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.e.j(s,r.a++,a)
B.e.j(s,r.a++,b)},
$S:10}
A.id.prototype={
gdO(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.eZ.prototype={
ep(a){var s
t.L.a(a)
s=B.bu.bE(a)
return s}}
A.he.prototype={}
A.hd.prototype={}
A.ff.prototype={
i0(a,b){t.L.a(a)
return(b===!0?B.i5:B.i4).bE(a)}}
A.fg.prototype={
bE(a){return new A.fx(this.a).du(t.L.a(a),0,null,!0)}}
A.fx.prototype={
du(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.aU(b,c,a.length)
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.o1(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.o0(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.cA(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.o2(o)
l.b=0
throw A.h(A.jS(m,a,p+l.c))}return n},
cA(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.a.a0(b+c,2)
r=q.cA(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.cA(a,s,c,d)}return q.i3(a,b,c,d)},
i3(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bO(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.a(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.a(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.a(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.M(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.M(h)
e.a+=p
break
case 65:p=A.M(h)
e.a+=p;--d
break
default:p=A.M(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break A
o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.a(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.a(a,l)
p=A.M(a[l])
e.a+=p}else{p=A.hy(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.M(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.ex.prototype={
H(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.ex)if(this.a===b.a)s=this.b===b.b
return s},
gA(a){return A.k4(this.a,this.b,B.t,B.t)},
v(a){var s=this,r=A.lW(A.mD(s)),q=A.ey(A.mB(s)),p=A.ey(A.mx(s)),o=A.ey(A.my(s)),n=A.ey(A.mA(s)),m=A.ey(A.mC(s)),l=A.jM(A.mz(s)),k=s.b,j=k===0?"":A.jM(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"}}
A.i_.prototype={
v(a){return this.ar()}}
A.H.prototype={
gbI(){return A.mw(this)}}
A.eo.prototype={
v(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.eA(s)
return"Assertion failed"}}
A.aX.prototype={}
A.ai.prototype={
gcC(){return"Invalid argument"+(!this.a?"(s)":"")},
gcB(){return""},
v(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.z(p),n=s.gcC()+q+o
if(!s.a)return n
return n+s.gcB()+": "+A.eA(s.gcV())},
gcV(){return this.b}}
A.bc.prototype={
gcV(){return A.kI(this.b)},
gcC(){return"RangeError"},
gcB(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.z(q):""
else if(q==null)s=": Not greater than or equal to "+A.z(r)
else if(q>r)s=": Not in inclusive range "+A.z(r)+".."+A.z(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.z(r)
return s}}
A.eI.prototype={
gcV(){return A.v(this.b)},
gcC(){return"RangeError"},
gcB(){if(A.v(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$ibc:1,
gl(a){return this.f}}
A.dK.prototype={
v(a){return"Unsupported operation: "+this.a}}
A.fd.prototype={
v(a){return"UnimplementedError: "+this.a}}
A.cC.prototype={
v(a){return"Bad state: "+this.a}}
A.ev.prototype={
v(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.eA(s)+"."}}
A.f2.prototype={
v(a){return"Out of Memory"},
gbI(){return null},
$iH:1}
A.dG.prototype={
v(a){return"Stack Overflow"},
gbI(){return null},
$iH:1}
A.i0.prototype={
v(a){return"Exception: "+this.a}}
A.a9.prototype={
v(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.c
return q!=null?r+(" (at offset "+A.z(q)+")"):r}}
A.d.prototype={
cg(a,b){return A.eq(this,A.j(this).k("d.E"),b)},
d_(a,b){var s=A.j(this).k("d.E")
if(b)s=A.n(this,s)
else{s=A.n(this,s)
s.$flags=1
s=s}return s},
gl(a){var s,r=this.gB(this)
for(s=0;r.C();)++s
return s},
gF(a){return!this.gB(this).C()},
gbc(a){return!this.gF(this)},
aN(a,b){return A.ki(this,b,A.j(this).k("d.E"))},
b_(a,b){var s,r
A.am(b,"index")
s=this.gB(this)
for(r=b;s.C();){if(r===0)return s.gJ();--r}throw A.h(A.fY(b,b-r,this,"index"))},
v(a){return A.m9(this,"(",")")}}
A.ae.prototype={
gA(a){return A.D.prototype.gA.call(this,0)},
v(a){return"null"}}
A.D.prototype={$iD:1,
H(a,b){return this===b},
gA(a){return A.dD(this)},
v(a){return"Instance of '"+A.f8(this)+"'"},
gan(a){return A.p5(this)},
toString(){return this.v(this)}}
A.fu.prototype={
v(a){return""},
$icB:1}
A.bO.prototype={
gl(a){return this.a.length},
v(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$imK:1}
A.eC.prototype={
m(a,b){var s=!0
s=typeof b=="number"
if(s)A.jQ(b)
return this.a.get(b)},
v(a){return"Expando:null"}}
A.hj.prototype={
v(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.iJ.prototype={
$1(a){var s=this.a,r=s.$ti
a=r.k("1/?").a(this.b.k("0/?").a(a))
s=s.a
if((s.a&30)!==0)A.Y(A.j4("Future already completed"))
s.f3(r.k("1/").a(a))
return null},
$S:12}
A.iK.prototype={
$1(a){if(a==null)return this.a.eo(new A.hj(a===undefined))
return this.a.eo(a)},
$S:12}
A.ix.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.kP(a))return a
s=this.a
a.toString
if(s.aC(a))return s.m(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.Y(A.ab(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.fC(!0,"isUtc",t.y)
return new A.ex(r,0,!0)}if(a instanceof RegExp)throw A.h(A.a2("structured clone of RegExp",null))
if(a instanceof Promise)return A.pi(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.Z(p,p)
s.j(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.ay(n),p=s.gB(n);p.C();)m.push(A.kY(p.gJ()))
for(l=0;l<s.gl(n);++l){k=s.m(n,l)
if(!(l<m.length))return A.a(m,l)
j=m[l]
if(k!=null)o.j(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.j(0,a,o)
h=A.v(a.length)
for(s=J.N(i),l=0;l<h;++l)o.push(this.$1(s.m(i,l)))
return o}return a},
$S:21}
A.aa.prototype={
v(a){return"Point("+A.z(this.a)+", "+A.z(this.b)+")"},
H(a,b){if(b==null)return!1
return b instanceof A.aa&&this.a===b.a&&this.b===b.b},
gA(a){return A.kk(B.b.gA(this.a),B.b.gA(this.b),0)},
c3(a,b){var s,r=this.$ti
r.a(b)
s=r.c
return new A.aa(s.a(this.a-b.a),s.a(this.b-b.b),r)},
gck(){var s=this.a,r=this.b
return Math.sqrt(s*s+r*r)}}
A.fR.prototype={
eP(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a1.length
for(s=0;s<a0;++s){r=a1[s]
if(r>a.b)a.b=r
if(r<a.c)a.c=r}r=a.b
if(r>15)throw A.h(B.bi)
q=r+1
p=new Uint16Array(q)
for(o=0;o<a0;++o){n=a1[o]
if(n!==0){if(!(n>=0&&n<q))return A.a(p,n)
m=p[n]
if(!(n<q))return A.a(p,n)
p[n]=m+1}}for(l=1,k=1;k<=r;++k){l=(l<<1>>>0)-p[k]
if(l<0)throw A.h(B.bl)}if(l>0)q=r>(a2?0:1)
else q=!1
if(q)throw A.h(B.bj)
j=B.a.a_(1,r)
r=a.a=new Uint32Array(j)
for(q=a.b,m=a1.length,i=1,h=0,g=2;i<=q;){for(f=i<<16,s=0;s<a0;++s){if(!(s<m))return A.a(a1,s)
if(a1[s]===i){for(e=h,d=0,c=0;c<i;++c){d=(d<<1|e&1)>>>0
e=e>>>1}for(b=(f|s)>>>0,c=d;c<j;c+=g){if(!(c>=0&&c<j))return A.a(r,c)
r[c]=b}++h}}++i
h=h<<1>>>0
g=g<<1>>>0}}}
A.da.prototype={
ar(){return"InflateFormat."+this.b}}
A.eJ.prototype={
gih(){var s,r=this.x
if(r==null)return 32768
s=r.e+r.f-this.y
return s>32768?s:32768},
i2(a){var s,r,q,p,o,n,m,l,k=this,j="Truncated zlib stream"
switch(k.w.a){case 0:s=k.a
r=s.c
q=s.d
q===$&&A.b()
if(r>=q){if(k.e===0&&k.b!==B.bn)throw A.h(A.at("Empty input is not a "+k.b.b+" stream"))
k.w=B.b4
return!1}if(k.b===B.a7)if(!k.hw()){if(k.e!==0)throw A.h(A.at("Data after the last gzip member"))
s.c=r
k.b=B.M}if(k.b===B.M){if(s.gl(0)<2)A.Y(A.at(j))
p=s.K()
o=s.K()
if((p&15)!==8)A.Y(A.at("Only deflate compression is supported"))
if(B.a.a6(p*256+o,31)!==0)A.Y(A.at("Invalid zlib header"))
if((o&32)!==0)A.Y(A.at("zlib preset dictionaries are not supported"))}k.f=a.e+a.f
k.r=k.b===B.M?1:0
k.d=new A.fZ(s,a)
k.w=B.ib
return!0
case 1:if(!k.d.ii())k.w=B.ic
k.x=null
return!0
case 2:s=k.b
if(s===B.a7){s=k.a
if(s.gl(0)<8)throw A.h(A.at("Truncated gzip stream"))
s.O()
n=s.O()
if(B.a.a6(a.e+a.f-k.f,4294967296)!==n)throw A.h(A.at("gzip member length does not match"))}else if(s===B.M){s=k.a
if(s.gl(0)<4)throw A.h(A.at(j))
for(m=0,l=0;l<4;++l){r=s.b
r.toString
q=s.c++
if(!(q>=0&&q<r.length))return A.a(r,q)
m=m<<8|r[q]}}++k.e
s=k.b===B.a7
k.w=s?B.b3:B.b4
return s
case 3:return!1}},
hw(){var s,r,q=this.a
if(q.gl(0)<10)return!1
if(q.W()!==35615)return!1
if(q.K()!==8)return!1
s=q.K()
q.O()
q.K()
q.K()
if((s&4)!==0){if(q.gl(0)<2)return!1
r=q.W()
if(q.gl(0)<r)return!1
q.aN(0,r)}if((s&8)!==0&&!this.e_())return!1
if((s&16)!==0&&!this.e_())return!1
if((s&2)!==0){if(q.gl(0)<2)return!1
q.W()}return!0},
e_(){var s,r,q=this.a
for(;;){s=q.c
r=q.d
r===$&&A.b()
if(!(s<r))break
r=q.b
r.toString
q.c=s+1
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===0)return!0}return!1},
$ilP:1}
A.cJ.prototype={
ar(){return"_State."+this.b}}
A.hU.prototype={}
A.iu.prototype={
eq(a,b,c){var s
t.L.a(a)
s=A.mq(B.E)
this.i7(A.h_(a,B.D,null,null),s,b,!1,c)
return J.O(B.c.gu(s.c),s.c.byteOffset,s.b)},
i7(a,b,c,d,e){var s=b.a
b.a=B.E
try{this.hP(a,b,c,e)}finally{b.shV(s)}},
hP(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
if(d===8)s=9
else s=d
r=(s-8<<4|8)>>>0
b.P(r)
q=r*256
for(p=0;o=(p|0)>>>0,B.a.a6(q+o,31)!==0;)++p
b.P(o)
n=a.c
m=A.p4(a)
a.c=n
o=c==null?6:c
A.lX(a,o,b,d)
o=m&255
l=m>>>24&255
k=m>>>16&255
j=m>>>8&255
if(b.a===B.E){b.P(l)
b.P(k)
b.P(j)
b.P(o)}else{b.P(o)
b.P(j)
b.P(k)
b.P(l)}}}
A.cG.prototype={
ar(){return"_DeflateFlushMode."+this.b}}
A.fN.prototype={
fX(a,b){var s,r,q,p,o,n=this
if(b===8)b=9
s=!0
if(b>=9)if(b<=15)s=a>9
if(s)throw A.h(A.a2("Invalid Deflate parameters",null))
r=n.fT(a)
if(r==null)return!1
$.b5.b=r
s=new Uint16Array(1146)
n.p1=s
q=new Uint16Array(122)
n.p2=q
p=new Uint16Array(78)
n.p3=p
n.as=b
o=n.Q=B.a.L(1,b)
n.at=o-1
n.db=15
n.cy=32768
n.dx=32767
n.dy=5
n.ax=new Uint8Array(o*2)
n.ch=new Uint16Array(o)
n.CW=new Uint16Array(32768)
n.y1=16384
n.f=new Uint8Array(65536)
n.r=65536
n.b2=16384
n.xr=49152
n.k4=a
n.w=n.x=n.ok=0
n.c=113
n.d=0
o=n.p4
o.a=s
o.c=$.lp()
o=n.R8
o.a=q
o.c=$.lo()
o=n.RG
o.a=p
o.c=$.ln()
n.aI=n.ap=0
n.bb=8
n.dJ()
n.ay=2*n.Q
B.n.al(n.CW,0,n.cy,0)
n.k2=n.fr=n.id=0
n.fx=n.k3=2
n.cx=n.go=0
return!0},
fC(a){var s,r,q,p,o=this,n=o.x
n===$&&A.b()
if(n!==0)o.cF()
n=o.a
s=n.c
n=n.d
n===$&&A.b()
r=!0
if(s>=n){n=o.k2
n===$&&A.b()
if(n===0)n=a!==B.a3&&o.c!==666
else n=r}else n=r
if(n){switch($.b5.bO().e){case 0:q=o.fF(a)
break
case 1:q=o.fD(a)
break
case 2:q=o.fE(a)
break
default:q=-1
break}n=q===2
if(n||q===3)o.c=666
if(q===0||n)return 0
if(q===1){if(a===B.i9){o.ae(2,3)
o.bC(256,B.W)
o.ek()
n=o.bb
n===$&&A.b()
s=o.aI
s===$&&A.b()
if(1+n+10-s<9){o.ae(2,3)
o.bC(256,B.W)
o.ek()}o.bb=7}else{o.e3(0,0,!1)
if(a===B.ia){n=o.cy
n===$&&A.b()
s=o.CW
p=0
for(;p<n;++p){s===$&&A.b()
s.$flags&2&&A.c(s)
if(!(p<s.length))return A.a(s,p)
s[p]=0}}}o.cF()}}if(a!==B.Q)return 0
return 1},
dJ(){var s=this,r=s.p1
r===$&&A.b()
B.n.al(r,0,572,0)
r=s.p2
r===$&&A.b()
B.n.al(r,0,60,0)
r=s.p3
r===$&&A.b()
B.n.al(r,0,38,0)
r=s.p1
r.$flags&2&&A.c(r)
r[512]=1
s.y2=s.bq=s.af=s.b3=0},
cN(a,b){var s,r,q,p,o,n,m=this.ry
if(!(b>=0&&b<573))return A.a(m,b)
s=m[b]
r=b<<1>>>0
q=m.$flags|0
p=this.x2
for(;;){o=this.to
o===$&&A.b()
if(!(r<=o))break
if(r<o){o=r+1
if(!(o>=0&&o<573))return A.a(m,o)
o=m[o]
if(!(r>=0&&r<573))return A.a(m,r)
o=A.jO(a,o,m[r],p)}else o=!1
if(o)++r
if(!(r>=0&&r<573))return A.a(m,r)
if(A.jO(a,s,m[r],p))break
o=m[r]
q&2&&A.c(m)
if(!(b>=0&&b<573))return A.a(m,b)
m[b]=o
n=r<<1>>>0
b=r
r=n}q&2&&A.c(m)
if(!(b>=0&&b<573))return A.a(m,b)
m[b]=s},
dW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
if(1>=h)return A.a(a,1)
s=a[1]
if(s===0){r=138
q=3}else{r=7
q=4}p=(b+1)*2+1
a.$flags&2&&A.c(a)
if(!(p>=0&&p<h))return A.a(a,p)
a[p]=65535
for(p=this.p3,o=0,n=-1,m=0;o<=b;s=k){++o
l=o*2+1
if(!(l<h))return A.a(a,l)
k=a[l];++m
if(m<r&&s===k)continue
else{j=3
if(m<q){p===$&&A.b()
l=s*2
if(!(l<78))return A.a(p,l)
i=p[l]
p.$flags&2&&A.c(p)
p[l]=i+m}else if(s!==0){if(s!==n){p===$&&A.b()
l=s*2
if(!(l<78))return A.a(p,l)
i=p[l]
p.$flags&2&&A.c(p)
p[l]=i+1}p===$&&A.b()
l=p[32]
p.$flags&2&&A.c(p)
p[32]=l+1}else if(m<=10){p===$&&A.b()
l=p[34]
p.$flags&2&&A.c(p)
p[34]=l+1}else{p===$&&A.b()
l=p[36]
p.$flags&2&&A.c(p)
p[36]=l+1}}if(k===0){q=j
r=138}else if(s===k){q=j
r=6}else{r=7
q=4}n=s
m=0}},
f5(){var s,r,q=this,p=q.p1
p===$&&A.b()
s=q.p4.b
s===$&&A.b()
q.dW(p,s)
s=q.p2
s===$&&A.b()
p=q.R8.b
p===$&&A.b()
q.dW(s,p)
q.RG.ct(q)
for(p=q.p3,r=18;r>=3;--r){p===$&&A.b()
s=B.a1[r]*2+1
if(!(s<78))return A.a(p,s)
if(p[s]!==0)break}p=q.af
p===$&&A.b()
q.af=p+(3*(r+1)+5+5+4)
return r},
hF(a,b,c){var s,r,q,p,o=this
o.ae(a-257,5)
s=b-1
o.ae(s,5)
o.ae(c-4,4)
for(r=0;r<c;++r){q=o.p3
q===$&&A.b()
if(!(r<19))return A.a(B.a1,r)
p=B.a1[r]*2+1
if(!(p<78))return A.a(q,p)
o.ae(q[p],3)}q=o.p1
q===$&&A.b()
o.dX(q,a-1)
q=o.p2
q===$&&A.b()
o.dX(q,s)},
dX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.length
if(1>=e)return A.a(a,1)
s=a[1]
if(s===0){r=138
q=3}else{r=7
q=4}for(p=t.L,o=0,n=-1,m=0;o<=b;s=k){++o
l=o*2+1
if(!(l<e))return A.a(a,l)
k=a[l];++m
if(m<r&&s===k)continue
else{j=3
if(m<q){l=s*2
i=l+1
do{h=f.p3
h===$&&A.b()
p.a(h)
if(!(l<78))return A.a(h,l)
g=h[l]
if(!(i<78))return A.a(h,i)
f.ae(g&65535,h[i]&65535)}while(--m,m!==0)}else if(s!==0){if(s!==n){l=f.p3
l===$&&A.b()
p.a(l)
i=s*2
if(!(i<78))return A.a(l,i)
h=l[i];++i
if(!(i<78))return A.a(l,i)
f.ae(h&65535,l[i]&65535);--m}l=f.p3
l===$&&A.b()
p.a(l)
f.ae(l[32]&65535,l[33]&65535)
f.ae(m-3,2)}else{l=f.p3
if(m<=10){l===$&&A.b()
p.a(l)
f.ae(l[34]&65535,l[35]&65535)
f.ae(m-3,3)}else{l===$&&A.b()
p.a(l)
f.ae(l[36]&65535,l[37]&65535)
f.ae(m-11,7)}}}if(k===0){q=j
r=138}else if(s===k){q=j
r=6}else{r=7
q=4}n=s
m=0}},
ho(a,b,c){var s,r,q=this
if(c===0)return
s=q.f
s===$&&A.b()
r=q.x
r===$&&A.b()
B.c.X(s,r,r+c,a,b)
q.x=q.x+c},
aP(a){var s,r=this.f
r===$&&A.b()
s=this.x
s===$&&A.b()
this.x=s+1
r.$flags&2&&A.c(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a},
bC(a,b){var s,r,q
t.L.a(b)
s=a*2
r=b.length
if(!(s<r))return A.a(b,s)
q=b[s];++s
if(!(s<r))return A.a(b,s)
this.ae(q&65535,b[s]&65535)},
ae(a,b){var s,r=this,q=r.aI
q===$&&A.b()
s=r.ap
if(q>16-b){s===$&&A.b()
q=r.ap=(s|B.a.a_(a,q)&65535)>>>0
r.aP(q)
r.aP(A.ah(q,8))
r.ap=A.ah(a,16-r.aI)
r.aI=r.aI+(b-16)}else{s===$&&A.b()
r.ap=(s|B.a.a_(a,q)&65535)>>>0
r.aI=q+b}},
bQ(a,b){var s,r,q,p,o,n=this,m=n.f
m===$&&A.b()
s=n.b2
s===$&&A.b()
r=n.y2
r===$&&A.b()
r=s+r*2
s=A.ah(a,8)
m.$flags&2&&A.c(m)
if(!(r<m.length))return A.a(m,r)
m[r]=s
s=n.f
r=n.b2
m=n.y2
r=r+m*2+1
s.$flags&2&&A.c(s)
q=s.length
if(!(r<q))return A.a(s,r)
s[r]=a
r=n.xr
r===$&&A.b()
r+=m
if(!(r<q))return A.a(s,r)
s[r]=b
n.y2=m+1
if(a===0){m=n.p1
m===$&&A.b()
s=b*2
if(!(s>=0&&s<1146))return A.a(m,s)
r=m[s]
m.$flags&2&&A.c(m)
m[s]=r+1}else{m=n.bq
m===$&&A.b()
n.bq=m+1
m=n.p1
m===$&&A.b()
if(!(b>=0&&b<256))return A.a(B.ac,b)
s=(B.ac[b]+256+1)*2
if(!(s<1146))return A.a(m,s)
r=m[s]
m.$flags&2&&A.c(m)
m[s]=r+1
r=n.p2
r===$&&A.b()
s=A.kv(a-1)*2
if(!(s<122))return A.a(r,s)
m=r[s]
r.$flags&2&&A.c(r)
r[s]=m+1}m=n.y2
if((m&8191)===0){s=n.k4
s===$&&A.b()
s=s>2}else s=!1
if(s){p=m*8
m=n.id
m===$&&A.b()
s=n.fr
s===$&&A.b()
for(r=n.p2,o=0;o<30;++o){r===$&&A.b()
q=o*2
if(!(q<122))return A.a(r,q)
p+=r[q]*(5+B.y[o])}p=A.ah(p,3)
r=n.bq
r===$&&A.b()
q=n.y2
if(r<q/2&&p<(m-s)/2)return!0
m=q}s=n.y1
s===$&&A.b()
return m===s-1},
ds(a,b){var s,r,q,p,o,n,m,l,k=this,j=t.L
j.a(a)
j.a(b)
j=k.y2
j===$&&A.b()
if(j!==0){s=0
do{j=k.f
j===$&&A.b()
r=k.b2
r===$&&A.b()
r+=s*2
q=j.length
if(!(r<q))return A.a(j,r)
p=j[r];++r
if(!(r<q))return A.a(j,r)
o=p<<8&65280|j[r]&255
r=k.xr
r===$&&A.b()
r+=s
if(!(r<q))return A.a(j,r)
n=j[r]&255;++s
if(o===0)k.bC(n,a)
else{m=B.ac[n]
k.bC(m+256+1,a)
if(!(m<29))return A.a(B.a8,m)
l=B.a8[m]
if(l!==0)k.ae(n-B.bK[m],l);--o
m=A.kv(o)
k.bC(m,b)
if(!(m<30))return A.a(B.y,m)
l=B.y[m]
if(l!==0)k.ae(o-B.cw[m],l)}}while(s<k.y2)}k.bC(256,a)
if(513>=a.length)return A.a(a,513)
k.bb=a[513]},
eJ(){var s,r,q,p,o
for(s=this.p1,r=0,q=0;r<7;){s===$&&A.b()
p=r*2
if(!(p<1146))return A.a(s,p)
q+=s[p];++r}for(o=0;r<128;){s===$&&A.b()
p=r*2
if(!(p<1146))return A.a(s,p)
o+=s[p];++r}while(r<256){s===$&&A.b()
p=r*2
if(!(p<1146))return A.a(s,p)
q+=s[p];++r}this.y=q>A.ah(o,2)?0:1},
ek(){var s=this,r=s.aI
r===$&&A.b()
if(r===16){r=s.ap
r===$&&A.b()
s.aP(r)
s.aP(A.ah(r,8))
s.aI=s.ap=0}else if(r>=8){r=s.ap
r===$&&A.b()
s.aP(r)
s.ap=A.ah(s.ap,8)
s.aI=s.aI-8}},
di(){var s=this,r=s.aI
r===$&&A.b()
if(r>8){r=s.ap
r===$&&A.b()
s.aP(r)
s.aP(A.ah(r,8))}else if(r>0){r=s.ap
r===$&&A.b()
s.aP(r)}s.aI=s.ap=0},
be(a){var s,r,q,p,o,n=this,m=n.fr
m===$&&A.b()
if(m>=0)s=m
else s=-1
r=n.id
r===$&&A.b()
m=r-m
r=n.k4
r===$&&A.b()
if(r>0){if(n.y===2)n.eJ()
n.p4.ct(n)
n.R8.ct(n)
q=n.f5()
r=n.af
r===$&&A.b()
p=A.ah(r+3+7,3)
r=n.b3
r===$&&A.b()
o=A.ah(r+3+7,3)
if(o<=p)p=o}else{o=m+5
p=o
q=0}if(m+4<=p&&s!==-1)n.e3(s,m,a)
else if(o===p){n.ae(2+(a?1:0),3)
n.ds(B.W,B.aG)}else{n.ae(4+(a?1:0),3)
m=n.p4.b
m===$&&A.b()
s=n.R8.b
s===$&&A.b()
n.hF(m+1,s+1,q+1)
s=n.p1
s===$&&A.b()
m=n.p2
m===$&&A.b()
n.ds(s,m)}n.dJ()
if(a)n.di()
n.fr=n.id
n.cF()},
fF(a){var s,r,q,p,o,n=this,m=n.r
m===$&&A.b()
s=m-5
s=65535>s?s:65535
for(m=a===B.a3;;){r=n.k2
r===$&&A.b()
if(r<=1){n.cE()
r=n.k2
q=r===0
if(q&&m)return 0
if(q)break}q=n.id
q===$&&A.b()
r=n.id=q+r
n.k2=0
q=n.fr
q===$&&A.b()
p=q+s
if(r>=p){n.k2=r-p
n.id=p
n.be(!1)}r=n.id
q=n.fr
o=n.Q
o===$&&A.b()
if(r-q>=o-262)n.be(!1)}m=a===B.Q
n.be(m)
return m?3:1},
e3(a,b,c){var s,r=this
r.ae(c?1:0,3)
r.di()
r.bb=8
r.aP(b)
r.aP(A.ah(b,8))
s=(~b>>>0)+65536&65535
r.aP(s)
r.aP(A.ah(s,8))
s=r.ax
s===$&&A.b()
r.ho(s,a,b)},
cE(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
do{s=h.ay
s===$&&A.b()
r=h.k2
r===$&&A.b()
q=h.id
q===$&&A.b()
p=s-r-q
if(p===0&&q===0&&r===0){s=h.Q
s===$&&A.b()
p=s}else{s=h.Q
s===$&&A.b()
if(q>=s+s-262){r=h.ax
r===$&&A.b()
B.c.X(r,0,s,r,s)
s=h.k1
o=h.Q
h.k1=s-o
h.id=h.id-o
s=h.fr
s===$&&A.b()
h.fr=s-o
s=h.cy
s===$&&A.b()
r=h.CW
r===$&&A.b()
q=r.length
n=r.$flags|0
m=s
l=m
do{--m
if(!(m>=0&&m<q))return A.a(r,m)
k=r[m]&65535
s=k>=o?k-o:0
n&2&&A.c(r)
r[m]=s}while(--l,l!==0)
s=h.ch
s===$&&A.b()
r=s.length
q=s.$flags|0
m=o
l=m
do{--m
if(!(m>=0&&m<r))return A.a(s,m)
k=s[m]&65535
n=k>=o?k-o:0
q&2&&A.c(s)
s[m]=n}while(--l,l!==0)
p+=o}}s=g.c
r=g.d
r===$&&A.b()
if(s>=r)return
s=h.ax
s===$&&A.b()
l=h.hr(s,h.id+h.k2,p)
s=h.k2=h.k2+l
if(s>=3){r=h.ax
q=h.id
n=r.length
if(q>>>0!==q||q>=n)return A.a(r,q)
j=r[q]&255
h.cx=j
i=h.dy
i===$&&A.b()
i=B.a.a_(j,i);++q
if(!(q<n))return A.a(r,q)
q=r[q]
r=h.dx
r===$&&A.b()
h.cx=((i^q&255)&r)>>>0}}while(s<262&&!(g.c>=g.d))},
fD(a){var s,r,q,p,o,n,m,l,k,j,i=this
for(s=a===B.a3,r=0;;){q=i.k2
q===$&&A.b()
if(q<262){i.cE()
q=i.k2
if(q<262&&s)return 0
if(q===0)break}if(q>=3){q=i.cx
q===$&&A.b()
p=i.dy
p===$&&A.b()
p=B.a.a_(q,p)
q=i.ax
q===$&&A.b()
o=i.id
o===$&&A.b()
n=o+2
if(!(n>=0&&n<q.length))return A.a(q,n)
n=q[n]
q=i.dx
q===$&&A.b()
q=((p^n&255)&q)>>>0
i.cx=q
n=i.CW
n===$&&A.b()
if(!(q<n.length))return A.a(n,q)
p=n[q]
r=p&65535
m=i.ch
m===$&&A.b()
l=i.at
l===$&&A.b()
l=(o&l)>>>0
m.$flags&2&&A.c(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=p
n.$flags&2&&A.c(n)
n[q]=o}if(r!==0){q=i.id
q===$&&A.b()
p=i.Q
p===$&&A.b()
p=(q-r&65535)<=p-262
q=p}else q=!1
if(q){q=i.ok
q===$&&A.b()
if(q!==2)i.fx=i.dK(r)}q=i.fx
q===$&&A.b()
p=i.id
if(q>=3){p===$&&A.b()
k=i.bQ(p-i.k1,q-3)
q=i.k2
p=i.fx
q-=p
i.k2=q
o=$.b5.b
if(o===$.b5)A.Y(A.hc(""))
if(p<=o.b&&q>=3){q=i.fx=p-1
do{p=i.id=i.id+1
o=i.cx
o===$&&A.b()
n=i.dy
n===$&&A.b()
n=B.a.a_(o,n)
o=i.ax
o===$&&A.b()
m=p+2
if(!(m>=0&&m<o.length))return A.a(o,m)
m=o[m]
o=i.dx
o===$&&A.b()
o=((n^m&255)&o)>>>0
i.cx=o
m=i.CW
m===$&&A.b()
if(!(o<m.length))return A.a(m,o)
n=m[o]
r=n&65535
l=i.ch
l===$&&A.b()
j=i.at
j===$&&A.b()
j=(p&j)>>>0
l.$flags&2&&A.c(l)
if(!(j>=0&&j<l.length))return A.a(l,j)
l[j]=n
m.$flags&2&&A.c(m)
m[o]=p}while(q=i.fx=q-1,q!==0)
i.id=p+1}else{q=i.id=i.id+p
i.fx=0
p=i.ax
p===$&&A.b()
o=p.length
if(!(q>=0&&q<o))return A.a(p,q)
n=p[q]&255
i.cx=n
m=i.dy
m===$&&A.b()
m=B.a.a_(n,m);++q
if(!(q<o))return A.a(p,q)
q=p[q]
p=i.dx
p===$&&A.b()
i.cx=((m^q&255)&p)>>>0}}else{q=i.ax
q===$&&A.b()
p===$&&A.b()
if(!(p>=0&&p<q.length))return A.a(q,p)
k=i.bQ(0,q[p]&255)
i.k2=i.k2-1
i.id=i.id+1}if(k)i.be(!1)}s=a===B.Q
i.be(s)
return s?3:1},
fE(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=a===B.a3,r=0;;){q=h.k2
q===$&&A.b()
if(q<262){h.cE()
q=h.k2
if(q<262&&s)return 0
if(q===0)break}if(q>=3){q=h.cx
q===$&&A.b()
p=h.dy
p===$&&A.b()
p=B.a.a_(q,p)
q=h.ax
q===$&&A.b()
o=h.id
o===$&&A.b()
n=o+2
if(!(n>=0&&n<q.length))return A.a(q,n)
n=q[n]
q=h.dx
q===$&&A.b()
q=((p^n&255)&q)>>>0
h.cx=q
n=h.CW
n===$&&A.b()
if(!(q<n.length))return A.a(n,q)
p=n[q]
r=p&65535
m=h.ch
m===$&&A.b()
l=h.at
l===$&&A.b()
l=(o&l)>>>0
m.$flags&2&&A.c(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=p
n.$flags&2&&A.c(n)
n[q]=o}q=h.fx
q===$&&A.b()
h.k3=q
h.fy=h.k1
h.fx=2
p=!1
if(r!==0){o=$.b5.b
if(o===$.b5)A.Y(A.hc(""))
if(q<o.b){q=h.id
q===$&&A.b()
p=h.Q
p===$&&A.b()
p=(q-r&65535)<=p-262
q=p}else q=p}else q=p
p=2
if(q){q=h.ok
q===$&&A.b()
if(q!==2){q=h.dK(r)
h.fx=q}else q=p
o=!1
if(q<=5)if(h.ok!==1){if(q===3){o=h.id
o===$&&A.b()
o=o-h.k1>4096}}else o=!0
if(o){h.fx=2
q=p}}else q=p
p=h.k3
if(p>=3&&q<=p){q=h.id
q===$&&A.b()
k=q+h.k2-3
j=h.bQ(q-1-h.fy,p-3)
p=h.k2
q=h.k3
h.k2=p-(q-1)
q=h.k3=q-2
do{p=h.id=h.id+1
if(p<=k){o=h.cx
o===$&&A.b()
n=h.dy
n===$&&A.b()
n=B.a.a_(o,n)
o=h.ax
o===$&&A.b()
m=p+2
if(!(m>=0&&m<o.length))return A.a(o,m)
m=o[m]
o=h.dx
o===$&&A.b()
o=((n^m&255)&o)>>>0
h.cx=o
m=h.CW
m===$&&A.b()
if(!(o<m.length))return A.a(m,o)
n=m[o]
r=n&65535
l=h.ch
l===$&&A.b()
i=h.at
i===$&&A.b()
i=(p&i)>>>0
l.$flags&2&&A.c(l)
if(!(i>=0&&i<l.length))return A.a(l,i)
l[i]=n
m.$flags&2&&A.c(m)
m[o]=p}}while(q=h.k3=q-1,q!==0)
h.go=0
h.fx=2
h.id=p+1
if(j)h.be(!1)}else{q=h.go
q===$&&A.b()
if(q!==0){q=h.ax
q===$&&A.b()
p=h.id
p===$&&A.b();--p
if(!(p>=0&&p<q.length))return A.a(q,p)
if(h.bQ(0,q[p]&255))h.be(!1)
h.id=h.id+1
h.k2=h.k2-1}else{h.go=1
q=h.id
q===$&&A.b()
h.id=q+1
h.k2=h.k2-1}}}s=h.go
s===$&&A.b()
if(s!==0){s=h.ax
s===$&&A.b()
q=h.id
q===$&&A.b();--q
if(!(q>=0&&q<s.length))return A.a(s,q)
h.bQ(0,s[q]&255)
h.go=0}s=a===B.Q
h.be(s)
return s?3:1},
dK(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=$.b5.bO().d,a=c.id
a===$&&A.b()
s=c.k3
s===$&&A.b()
r=c.Q
r===$&&A.b()
r-=262
q=a>r?a-r:0
p=$.b5.bO().c
r=c.at
r===$&&A.b()
o=c.id+258
n=c.ax
n===$&&A.b()
m=a+s
l=m-1
k=n.length
if(!(l>=0&&l<k))return A.a(n,l)
j=n[l]
if(!(m>=0&&m<k))return A.a(n,m)
i=n[m]
if(c.k3>=$.b5.bO().a)b=b>>>2
n=c.k2
n===$&&A.b()
if(p>n)p=n
h=o-258
g=s
f=a
do{A:{a=c.ax
s=a0+g
n=a.length
if(!(s>=0&&s<n))return A.a(a,s)
m=!0
if(a[s]===i){--s
if(!(s>=0))return A.a(a,s)
if(a[s]===j){if(!(a0>=0&&a0<n))return A.a(a,a0)
s=a[a0]
if(!(f>=0&&f<n))return A.a(a,f)
if(s===a[f]){e=a0+1
if(!(e<n))return A.a(a,e)
s=a[e]
m=f+1
if(!(m<n))return A.a(a,m)
m=s!==a[m]
s=m}else{s=m
e=a0}}else{s=m
e=a0}}else{s=m
e=a0}if(s)break A
f+=2;++e
do{++f
if(!(f>=0&&f<n))return A.a(a,f)
s=a[f];++e
if(!(e>=0&&e<n))return A.a(a,e)
m=!1
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
s=s===a[e]&&f<o}else s=m}else s=m}else s=m}else s=m}else s=m}else s=m}else s=m}while(s)
d=258-(o-f)
if(d>g){c.k1=a0
if(d>=p){g=d
break}a=c.ax
s=h+d
n=s-1
m=a.length
if(!(n>=0&&n<m))return A.a(a,n)
j=a[n]
if(!(s<m))return A.a(a,s)
i=a[s]
g=d}f=h}a=c.ch
a===$&&A.b()
s=a0&r
if(!(s>=0&&s<a.length))return A.a(a,s)
a0=a[s]&65535
if(a0>q){--b
a=b!==0}else a=!1}while(a)
a=c.k2
if(g<=a)return g
return a},
hr(a,b,c){var s,r,q,p,o,n,m=this
if(c!==0){s=m.a
r=s.c
s=s.d
s===$&&A.b()
s=r>=s}else s=!0
if(s)return 0
q=m.a.aD(c)
p=q.gl(q)
if(p===0)return 0
o=q.a1()
n=o.length
if(p>n)p=n
B.c.ag(a,b,b+p,o)
m.e+=p
m.d=A.aP(o,m.d)
return p},
cF(){var s,r=this,q=r.x
q===$&&A.b()
s=r.f
s===$&&A.b()
r.b.d0(s,q)
s=r.w
s===$&&A.b()
r.w=s+q
q=r.x-q
r.x=q
if(q===0)r.w=0},
fT(a){switch(a){case 0:return new A.av(0,0,0,0,0)
case 1:return new A.av(4,4,8,4,1)
case 2:return new A.av(4,5,16,8,1)
case 3:return new A.av(4,6,32,32,1)
case 4:return new A.av(4,4,16,16,2)
case 5:return new A.av(8,16,32,32,2)
case 6:return new A.av(8,16,128,128,2)
case 7:return new A.av(8,32,128,256,2)
case 8:return new A.av(32,128,258,1024,2)
case 9:return new A.av(32,258,258,4096,2)}return null}}
A.av.prototype={}
A.ib.prototype={
fR(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.a
a3===$&&A.b()
s=a2.c
s===$&&A.b()
r=s.a
q=s.b
p=s.c
o=s.e
for(s=a4.rx,n=s.$flags|0,m=0;m<=15;++m){n&2&&A.c(s)
s[m]=0}l=a4.ry
k=a4.x1
k===$&&A.b()
if(!(k>=0&&k<573))return A.a(l,k)
j=l[k]*2+1
a3.$flags&2&&A.c(a3)
i=a3.length
if(!(j>=0&&j<i))return A.a(a3,j)
a3[j]=0
for(h=k+1,k=r!=null,j=q.length,g=0;h<573;++h){f=l[h]
e=f*2
d=e+1
if(!(d>=0&&d<i))return A.a(a3,d)
c=a3[d]*2+1
if(!(c<i))return A.a(a3,c)
m=a3[c]+1
if(m>o){++g
m=o}a3.$flags&2&&A.c(a3)
a3[d]=m
c=a2.b
c===$&&A.b()
if(f>c)continue
if(!(m<16))return A.a(s,m)
c=s[m]
n&2&&A.c(s)
s[m]=c+1
if(f>=p){c=f-p
if(!(c>=0&&c<j))return A.a(q,c)
b=q[c]}else b=0
if(!(e>=0&&e<i))return A.a(a3,e)
a=a3[e]
e=a4.af
e===$&&A.b()
a4.af=e+a*(m+b)
if(k){e=a4.b3
e===$&&A.b()
if(!(d<r.length))return A.a(r,d)
a4.b3=e+a*(r[d]+b)}}if(g===0)return
m=o-1
do{a0=m
for(;;){if(!(a0>=0&&a0<16))return A.a(s,a0)
k=s[a0]
if(!(k===0))break;--a0}n&2&&A.c(s)
s[a0]=k-1
k=a0+1
if(!(k<16))return A.a(s,k)
s[k]=s[k]+2
if(!(o<16))return A.a(s,o)
s[o]=s[o]-1
g-=2}while(g>0)
for(m=o;m!==0;--m){if(!(m>=0))return A.a(s,m)
f=s[m]
while(f!==0){--h
if(!(h>=0&&h<573))return A.a(l,h)
a1=l[h]
n=a2.b
n===$&&A.b()
if(a1>n)continue
n=a1*2
k=n+1
if(!(k>=0&&k<i))return A.a(a3,k)
j=a3[k]
if(j!==m){e=a4.af
e===$&&A.b()
if(!(n>=0&&n<i))return A.a(a3,n)
a4.af=e+(m-j)*a3[n]
a3.$flags&2&&A.c(a3)
a3[k]=m}--f}}},
ct(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a
a0===$&&A.b()
s=a.c
s===$&&A.b()
r=s.a
q=s.d
a1.to=0
a1.x1=573
for(s=a0.length,p=a1.ry,o=p.$flags|0,n=a1.x2,m=n.$flags|0,l=a0.$flags|0,k=0,j=-1;k<q;++k){i=k*2
if(!(i<s))return A.a(a0,i)
if(a0[i]!==0){i=++a1.to
o&2&&A.c(p)
if(!(i>=0&&i<573))return A.a(p,i)
p[i]=k
m&2&&A.c(n)
if(!(k<573))return A.a(n,k)
n[k]=0
j=k}else{++i
l&2&&A.c(a0)
if(!(i<s))return A.a(a0,i)
a0[i]=0}}for(i=r!=null;h=a1.to,h<2;){++h
a1.to=h
if(j<2){++j
g=j}else g=0
o&2&&A.c(p)
if(!(h>=0))return A.a(p,h)
p[h]=g
h=g*2
l&2&&A.c(a0)
if(!(h>=0&&h<s))return A.a(a0,h)
a0[h]=1
m&2&&A.c(n)
if(!(g>=0))return A.a(n,g)
n[g]=0
f=a1.af
f===$&&A.b()
a1.af=f-1
if(i){f=a1.b3
f===$&&A.b();++h
if(!(h<r.length))return A.a(r,h)
a1.b3=f-r[h]}}a.b=j
for(k=B.a.a0(h,2);k>=1;--k)a1.cN(a0,k)
g=q
do{k=p[1]
i=a1.to--
if(!(i>=0&&i<573))return A.a(p,i)
i=p[i]
o&2&&A.c(p)
p[1]=i
a1.cN(a0,1)
e=p[1]
i=--a1.x1
if(!(i>=0&&i<573))return A.a(p,i)
p[i]=k;--i
a1.x1=i
if(!(i>=0))return A.a(p,i)
p[i]=e
i=g*2
h=k*2
if(!(h>=0&&h<s))return A.a(a0,h)
f=a0[h]
d=e*2
if(!(d>=0&&d<s))return A.a(a0,d)
c=a0[d]
l&2&&A.c(a0)
if(!(i<s))return A.a(a0,i)
a0[i]=f+c
if(!(k>=0&&k<573))return A.a(n,k)
c=n[k]
if(!(e>=0&&e<573))return A.a(n,e)
f=n[e]
i=c>f?c:f
m&2&&A.c(n)
if(!(g<573))return A.a(n,g)
n[g]=i+1;++h;++d
if(!(d<s))return A.a(a0,d)
a0[d]=g
if(!(h<s))return A.a(a0,h)
a0[h]=g
b=g+1
p[1]=g
a1.cN(a0,1)
if(a1.to>=2){g=b
continue}else break}while(!0)
s=--a1.x1
o=p[1]
if(!(s>=0&&s<573))return A.a(p,s)
p[s]=o
a.fR(a1)
A.nE(a0,j,a1.rx)}}
A.ii.prototype={}
A.fZ.prototype={
ii(){var s,r="Invalid deflate data",q=null
try{q=this.h6()}catch(s){if(t.b8.b(A.as(s)))throw A.h(A.at(r))
else throw s}if(!q&&!this.f)throw A.h(A.at(r))
return q},
gbf(){var s=this.a
if(s==null)return s
s.d===$&&A.b()
return s},
h6(){var s,r,q,p=this,o=p.gbf()
if(o!=null){s=o.c
r=o.d
r===$&&A.b()
r=s>=r
s=r}else s=!0
if(s)return!1
q=p.aQ(3)
s=(q&1)===0
switch(B.a.i(q,1)){case 0:if(p.hg()===-1)return!1
break
case 1:if(p.dI($.lb(),$.la())===-1)return!1
break
case 2:if(p.h7()===-1)return!1
break
default:return!1}if(!s)p.f=!0
return s},
aQ(a){var s,r,q,p,o=this
if(a===0)return 0
while(s=o.w,s<a){s=o.gbf()
r=s.c
s=s.d
s===$&&A.b()
if(r>=s)return-1
s=o.gbf()
r=s.b
r.toString
s=s.c++
if(!(s>=0&&s<r.length))return A.a(r,s)
q=r[s]
s=o.r
r=o.w
o.r=(s|B.a.a_(q,r))>>>0
o.w=r+8}r=o.r
p=B.a.L(1,a)
o.r=B.a.Y(r,a)
o.w=s-a
return(r&p-1)>>>0},
cO(a){var s,r,q,p,o,n,m=this,l=a.a
l===$&&A.b()
s=a.b
while(m.w<s){r=m.gbf()
q=r.c
r=r.d
r===$&&A.b()
if(q>=r)break
r=m.gbf()
q=r.b
q.toString
r=r.c++
if(!(r>=0&&r<q.length))return A.a(q,r)
p=q[r]
r=m.r
q=m.w
m.r=(r|B.a.a_(p,q))>>>0
m.w=q+8}r=m.r
q=(r&B.a.a_(1,s)-1)>>>0
if(!(q<l.length))return A.a(l,q)
o=l[q]
n=o>>>16
if(n===0||n>m.w)return-1
m.r=B.a.Y(r,n)
m.w-=n
return o&65535},
hg(){var s,r=this
r.w=r.r=0
s=r.aQ(16)
if(s!==(r.aQ(16)^65535)>>>0)return-1
if(s>r.gbf().gl(0))return-1
r.c.eD(r.gbf().aD(s))
return 0},
h7(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.aQ(5)
if(f===-1)return-1
f+=257
if(f>286)return-1
s=g.aQ(5)
if(s===-1)return-1;++s
if(s>32)return-1
r=g.aQ(4)
if(r===-1)return-1
r+=4
if(r>19)return-1
q=new Uint8Array(19)
for(p=0;p<r;++p){o=g.aQ(3)
if(o===-1)return-1
n=B.a1[p]
if(!(n<19))return A.a(q,n)
q[n]=o}m=g.e1(q,!0)
if(m==null)return-1
n=f+s
l=new Uint8Array(n)
k=J.O(B.c.gu(l),0,f)
j=J.O(B.c.gu(l),f,s)
if(g.fh(n,m,l)===-1)return-1
i=g.e0(k)
n=i==null
h=n?null:g.e0(j)
if(n||h==null)return-1
return g.dI(i,h)},
e1(a,b){var s,r
t.L.a(a)
try{s=A.iU(a,b)
return s}catch(r){if(A.as(r) instanceof A.a9)return null
else throw r}},
e0(a){return this.e1(a,!1)},
dI(a,b){var s,r,q,p,o,n,m,l,k,j=this
for(s=j.c;;){r=j.cO(a)
if(r<0||r>285)return-1
if(r===256)break
if(r<256){s.P(r&255)
continue}q=r-257
if(!(q>=0&&q<31))return A.a(B.aY,q)
p=j.aQ(B.aY[q])
if(p<0)return-1
if(!(q<29))return A.a(B.aQ,q)
o=B.aQ[q]
n=j.cO(b)
if(n<0||n>29)return-1
if(!(n>=0&&n<30))return A.a(B.y,n)
m=j.aQ(B.y[n])
if(m<0)return-1
l=B.fZ[n]+m
if(l<1||l>s.gl(s))return-1
s.eA(l,o+p)}while(s=j.w,s>=8){j.w=s-8
s=j.gbf()
o=s.c
if(1>=o)s.c=0
else{k=s.d
k===$&&A.b()
if(1<=o-k)s.c=k
else s.c=o-1}}return 0},
fh(a,b,c){var s,r,q,p,o,n,m,l,k=this
for(s=0,r=0;r<a;){q=k.cO(b)
if(q===-1)return-1
p=0
switch(q){case 16:if(r===0)return-1
o=k.aQ(2)
if(o===-1)return-1
o+=3
if(r+o>a)return-1
for(n=c.$flags|0;m=o-1,o>0;o=m,r=l){l=r+1
n&2&&A.c(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=s}break
case 17:o=k.aQ(3)
if(o===-1)return-1
o+=3
if(r+o>a)return-1
for(n=c.$flags|0;m=o-1,o>0;o=m,r=l){l=r+1
n&2&&A.c(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=0}s=p
break
case 18:o=k.aQ(7)
if(o===-1)return-1
o+=11
if(r+o>a)return-1
for(n=c.$flags|0;m=o-1,o>0;o=m,r=l){l=r+1
n&2&&A.c(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=0}s=p
break
default:if(q<0||q>15)return-1
l=r+1
c.$flags&2&&A.c(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=q
r=l
s=q
break}}return 0}}
A.en.prototype={}
A.cS.prototype={
ar(){return"ByteOrder."+this.b}}
A.db.prototype={
gcY(){return this.e},
d5(a){return this.e=a},
gl(a){var s=this,r=s.d
if(r!=null)return Math.max(0,r-s.e)
return s.b.ev(s.c+s.e)},
gip(){var s,r,q=this,p=q.d
if(p!=null&&q.e>=p)return!0
s=q.b
r=q.c+q.e
s.c8(r,1)
return r>=s.e+s.f},
d9(a,b){var s=this.d
if(s!=null)a=Math.min(a,Math.max(0,s-b))
return A.jW(this,b,a)},
K(){var s,r=this
if(r.gip())return 0
s=r.b.hU(r.c+r.e);++r.e
return s},
aD(a){var s,r,q=this,p=q.d
if(p!=null)a=Math.max(0,Math.min(a,p-q.e))
s=q.e
r=A.jW(q,s,a)
q.e=s+a
return r},
a1(){var s,r,q=this,p=q.d
if(p!=null){s=q.e
return q.b.eu(q.c+s,Math.max(0,p-s))}s=q.b
r=q.c+q.e
return s.eu(r,s.ev(r))}}
A.fn.prototype={
gl(a){return this.e+this.f},
c8(a,b){var s,r=this,q=r.e
if(a<q)throw A.h(A.at("Position "+a+" of the decoded data has already been read past, only the last "+r.f+" bytes from "+q+" are still held"))
r.r=a
q=r.b
s=a+b
for(;;){if(!(!r.w&&r.e+r.f<s))break
if(!q.i2(r))r.w=!0}},
hU(a){var s,r,q=this
q.c8(a,1)
s=q.e
if(a>=s+q.f)return 0
r=q.d
s=a-s
if(!(s>=0&&s<r.length))return A.a(r,s)
return r[s]},
eu(a,b){var s,r,q=this
q.c8(a,b)
s=q.e
r=Math.max(0,Math.min(b,s+q.f-a))
if(r===0)return new Uint8Array(0)
s=a-s
return B.c.bJ(q.d,s,s+r)},
ev(a){this.c8(a,1125899906842624)
return Math.max(0,this.e+this.f-a)},
cR(a){var s,r,q,p,o=this,n=o.f,m=o.d
if(n+a<=m.length)return
s=o.e
r=Math.max(s,Math.min(o.r-o.c,s+n-o.b.gih()))-s
if(r>0){B.c.X(m,0,n-r,m,r)
n=o.f-=r
o.e+=r}m=n+a
s=o.d
q=s.length
if(m>q){m=Math.max(q*2,m)
p=new Uint8Array(m)
B.c.ag(p,0,n,s)
o.d=p}},
P(a){var s,r,q=this
if(q.f===q.d.length)q.cR(1)
s=q.d
r=q.f++
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a},
d0(a,b){var s,r,q=this
t.L.a(a)
b=a.length
q.cR(b)
s=q.d
r=q.f
B.c.ag(s,r,r+b,a)
q.f+=b},
b9(a){return this.d0(a,null)},
eD(a){return this.b9(a.a1())},
eA(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
i.cR(b)
s=i.f
r=s-a
if(r<0)throw A.h(A.at("Back reference before the start of the data"))
q=s+b
if(a>=b){p=i.d
B.c.X(p,s,q,p,r)}else for(p=i.d,o=p.length,n=p.$flags|0,m=r;s<q;s=l,m=k){l=s+1
k=m+1
if(!(m<o))return A.a(p,m)
j=p[m]
n&2&&A.c(p)
if(!(s>=0&&s<o))return A.a(p,s)
p[s]=j}i.f+=b}}
A.dc.prototype={
gcY(){return this.c},
gl(a){var s=this.b
return s==null?0:s.length-this.c},
d5(a){this.c=a},
aN(a,b){var s,r=this,q=r.d
q===$&&A.b()
s=r.c
if(b>=q-s)r.c=q
else if(b<=-s)r.c=0
else r.c=s+b},
m(a,b){var s=this.b,r=this.c+b
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
d9(a,b){var s=this.b
if(s==null)return A.h_(A.o([],t.t),B.D,null,null)
return A.h_(s,this.a,a,b)},
K(){var s,r=this.b
r.toString
s=this.c++
if(!(s>=0&&s<r.length))return A.a(r,s)
return r[s]},
a1(){var s,r,q,p,o=this,n=o.b
if(n==null)return new Uint8Array(0)
s=o.gl(0)
r=n.length
q=o.c
p=r-q
if(s<0||s>p)s=p
if(q<0)throw A.h(A.ab(q,0,r,"position",null))
return J.O(B.c.gu(n),o.b.byteOffset+o.c,s)}}
A.dd.prototype={
W(){var s=this.K(),r=this.K()
if(this.a===B.E)return(s<<8|r)>>>0
return(r<<8|s)>>>0},
O(){var s=this,r=s.K(),q=s.K(),p=s.K(),o=s.K()
if(s.a===B.E)return(r<<24|q<<16|p<<8|o)>>>0
return(o<<24|p<<16|q<<8|r)>>>0},
aD(a){var s=this,r=s.d9(a,s.gcY())
s.d5(s.gcY()+r.gl(r))
return r}}
A.f4.prototype={
P(a){var s,r,q=this
if(q.b===q.c.length)q.h5()
s=q.c
r=q.b++
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a},
d0(a,b){var s,r,q,p,o=this
t.L.a(a)
if(b==null)b=a.length
while(s=o.b,r=s+b,q=o.c,p=q.length,r>p)o.cb(r-p)
B.c.ag(q,s,r,a)
o.b+=b},
eD(a){var s,r,q,p,o=this
while(s=o.b,r=a.gl(a),q=o.c,s+r>q.length)o.cb(o.b+a.gl(a)-o.c.length)
if(a instanceof A.dc){s=a.b
if(s!=null){r=o.b
B.c.X(q,r,r+a.gl(0),s,a.c)}}else{p=a.a1()
s=o.c
r=o.b
q=p.length
B.c.X(s,r,r+q,p,0)
o.b+=q
return}o.b=o.b+a.gl(0)},
eA(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
while(s=i.b,r=s+b,q=i.c,p=q.length,r>p)i.cb(r-p)
o=s-a
if(a>=b)B.c.X(q,s,r,q,o)
else for(n=q.$flags|0,m=o;s<r;s=l,m=k){l=s+1
k=m+1
if(!(m>=0&&m<p))return A.a(q,m)
j=q[m]
n&2&&A.c(q)
if(!(s>=0))return A.a(q,s)
q[s]=j}i.b+=b},
cb(a){var s,r=this.c,q=r.length,p=q+(a==null?1:a),o=q===0?32768:q*2
if(o<p)o=p
s=new Uint8Array(o)
B.c.ag(s,0,q,r)
this.c=s},
h5(){return this.cb(null)},
gl(a){return this.b}}
A.dy.prototype={
shV(a){this.a=t.k.a(a)}}
A.iL.prototype={
$1(a){var s,r
t.O.a(a)
s=a.a
if(isFinite(s)){r=a.b
s=!isFinite(r)||s<0||s>1||r<0||r>1}else s=!0
return s},
$S:22}
A.hw.prototype={}
A.iI.prototype={
$1(a){var s,r=t.O
r.a(a)
s=this.a.a
return new A.aa(a.a*(s.gT()-1),a.b*(s.gV()-1),r)},
$S:23}
A.hv.prototype={}
A.j3.prototype={}
A.G.prototype={
C(){var s=this.b
return++this.a<s.gl(s)},
gJ(){return this.b.m(0,this.a)},
$ix:1}
A.c0.prototype={
I(){return new A.c0(new Uint16Array(A.B(this.a)))},
gG(){return B.L},
gl(a){return this.a.length},
gM(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]
r=$.V
r=r!=null?r:A.a7()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
j(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=A.I(c)
r.$flags&2&&A.c(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gD(){return this.gn()},
gn(){var s,r=this.a
if(!B.n.gF(r)){if(0>=r.length)return A.a(r,0)
r=r[0]
s=$.V
s=s!=null?s:A.a7()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gp(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]
r=$.V
r=r!=null?r:A.a7()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else if(r>1){s=s[1]
r=$.V
r=r!=null?r:A.a7()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
gq(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]
r=$.V
r=r!=null?r:A.a7()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else if(r>2){s=s[2]
r=$.V
r=r!=null?r:A.a7()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
gt(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]
r=$.V
r=r!=null?r:A.a7()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else if(r>3){s=s[3]
r=$.V
r=r!=null?r:A.a7()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
ga5(){return this.gn()/1},
ga2(){return this.gp()/1},
ga3(){return this.gq()/1},
ga8(){return this.gt()/1},
ga4(){return this.a.length===2?this.gn():A.P(this)},
gB(a){return new A.G(this)},
H(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gl(b)===this.a.length){s=b.gA(b)
r=A.n(this,A.j(this).k("d.E"))
s=s===A.k(r)}return s},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$it:1}
A.c1.prototype={
I(){return new A.c1(new Float32Array(A.B(this.a)))},
gG(){return B.H},
gl(a){return this.a.length},
gM(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
j(a,b,c){var s=this.a,r=s.length
if(b<r){s.$flags&2&&A.c(s)
if(!(b>=0))return A.a(s,b)
s[b]=c}},
gD(){var s=this.a
if(!B.A.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a
if(!B.A.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gq(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gt(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:1
return s},
ga5(){var s=this.a
if(!B.A.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s/1},
ga2(){return this.gp()/1},
ga3(){return this.gq()/1},
ga8(){return this.gt()/1},
ga4(){var s=this.a,r=s.length
if(r===2)if(!B.A.gF(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.P(this)
return s},
gB(a){return new A.G(this)},
H(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gl(b)===this.a.length){s=b.gA(b)
r=A.n(this,A.j(this).k("d.E"))
s=s===A.k(r)}return s},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$it:1}
A.c2.prototype={
I(){return new A.c2(new Float64Array(A.B(this.a)))},
gG(){return B.I},
gl(a){return this.a.length},
gM(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
j(a,b,c){var s=this.a,r=s.length
if(b<r){s.$flags&2&&A.c(s)
if(!(b>=0))return A.a(s,b)
s[b]=c}},
gD(){var s=this.a
if(!B.B.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a
if(!B.B.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gq(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gt(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:1
return s},
ga5(){var s=this.a
if(!B.B.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s/1},
ga2(){return this.gp()/1},
ga3(){return this.gq()/1},
ga8(){return this.gt()/1},
ga4(){var s=this.a,r=s.length
if(r===2)if(!B.B.gF(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.P(this)
return s},
gB(a){return new A.G(this)},
H(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gl(b)===this.a.length){s=b.gA(b)
r=A.n(this,A.j(this).k("d.E"))
s=s===A.k(r)}return s},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$it:1}
A.c3.prototype={
I(){return new A.c3(new Int16Array(A.B(this.a)))},
gG(){return B.T},
gl(a){return this.a.length},
gM(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
j(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.c(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gD(){var s=this.a
if(!B.C.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a
if(!B.C.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gq(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gt(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:0
return s},
ga5(){var s=this.a
if(!B.C.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s/32767},
ga2(){return this.gp()/32767},
ga3(){return this.gq()/32767},
ga8(){return this.gt()/32767},
ga4(){var s=this.a,r=s.length
if(r===2)if(!B.C.gF(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.P(this)
return s},
gB(a){return new A.G(this)},
H(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gl(b)===this.a.length){s=b.gA(b)
r=A.n(this,A.j(this).k("d.E"))
s=s===A.k(r)}return s},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$it:1}
A.c4.prototype={
I(){return new A.c4(new Int32Array(A.B(this.a)))},
gG(){return B.U},
gl(a){return this.a.length},
gM(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
j(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.c(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gD(){var s=this.a
if(!B.q.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a
if(!B.q.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gq(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gt(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:0
return s},
ga5(){var s=this.a
if(!B.q.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s/2147483647},
ga2(){return this.gp()/2147483647},
ga3(){return this.gq()/2147483647},
ga8(){return this.gt()/2147483647},
ga4(){var s=this.a,r=s.length
if(r===2)if(!B.q.gF(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.P(this)
return s},
gB(a){return new A.G(this)},
H(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gl(b)===this.a.length){s=b.gA(b)
r=A.n(this,A.j(this).k("d.E"))
s=s===A.k(r)}return s},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$it:1}
A.c5.prototype={
I(){return new A.c5(new Int8Array(A.B(this.a)))},
gG(){return B.S},
gl(a){return this.a.length},
gM(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
j(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.c(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gD(){var s=this.a
if(!B.O.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a
if(!B.O.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gq(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gt(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:0
return s},
ga5(){var s=this.a
if(!B.O.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s/127},
ga2(){return this.gp()/127},
ga3(){return this.gq()/127},
ga8(){return this.gt()/127},
ga4(){var s=this.a,r=s.length
if(r===2)if(!B.O.gF(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.P(this)
return s},
gB(a){return new A.G(this)},
H(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gl(b)===this.a.length){s=b.gA(b)
r=A.n(this,A.j(this).k("d.E"))
s=s===A.k(r)}return s},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$it:1}
A.c6.prototype={
I(){var s=this.b
s===$&&A.b()
return new A.c6(this.a,s)},
gG(){return B.F},
gM(){return null},
aV(a){var s
if(a<this.a){s=this.b
s===$&&A.b()
s=B.a.ad(s,7-a)&1}else s=0
return s},
bw(a,b){var s
if(a>=this.a)return
a=7-a
s=this.b
s===$&&A.b()
this.b=b!==0?(s|B.a.a_(1,a))>>>0:(s&~(B.a.a_(1,a)&255))>>>0},
m(a,b){return this.aV(b)},
j(a,b,c){return this.bw(b,c)},
gD(){return this.aV(0)},
gn(){return this.aV(0)},
gp(){return this.aV(this.a===2?0:1)},
gq(){return this.aV(this.a===2?0:2)},
gt(){return this.aV(this.a===2?1:3)},
ga5(){return this.aV(0)/1},
ga2(){return this.aV(this.a===2?0:1)/1},
ga3(){return this.aV(this.a===2?0:2)/1},
ga8(){return this.aV(this.a===2?1:3)/1},
ga4(){return this.a===2?this.aV(0):A.P(this)},
a7(a,b,c,d){var s,r=this
r.bw(0,a)
s=r.a
if(s===2)r.bw(1,d)
else if(s>2){r.bw(1,b)
r.bw(2,c)
r.bw(3,d)}},
gB(a){return new A.G(this)},
H(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gl(b)===this.a){s=b.gA(b)
r=A.n(this,A.j(this).k("d.E"))
s=s===A.k(r)}return s},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$it:1,
gl(a){return this.a}}
A.c7.prototype={
I(){return new A.c7(new Uint16Array(A.B(this.a)))},
gG(){return B.u},
gl(a){return this.a.length},
gM(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
j(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.c(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gD(){var s=this.a
if(!B.n.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a
if(!B.n.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gq(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gt(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:0
return s},
ga5(){var s=this.a
if(!B.n.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s/65535},
ga2(){return this.gp()/65535},
ga3(){return this.gq()/65535},
ga8(){return this.gt()/65535},
ga4(){var s=this.a,r=s.length
if(r===2)if(!B.n.gF(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.P(this)
return s},
gB(a){return new A.G(this)},
H(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gl(b)===this.a.length){s=b.gA(b)
r=A.n(this,A.j(this).k("d.E"))
s=s===A.k(r)}return s},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$it:1}
A.c8.prototype={
I(){var s=this.b
s===$&&A.b()
return new A.c8(this.a,s)},
gG(){return B.G},
gM(){return null},
aW(a){var s
if(a<this.a){s=this.b
s===$&&A.b()
s=B.a.ad(s,6-(a<<1>>>0))&3}else s=0
return s},
bx(a,b){var s,r,q
if(a>=this.a)return
if(!(a>=0&&a<4))return A.a(B.ay,a)
s=B.ay[a]
r=B.b.h(b)
q=this.b
q===$&&A.b()
this.b=(q&s|B.a.a_(r&3,6-(a<<1>>>0)))>>>0},
m(a,b){return this.aW(b)},
j(a,b,c){return this.bx(b,c)},
gD(){return this.aW(0)},
gn(){return this.aW(0)},
gp(){return this.aW(this.a===2?0:1)},
gq(){return this.aW(this.a===2?0:2)},
gt(){return this.aW(this.a===2?1:3)},
ga5(){return this.aW(0)/3},
ga2(){return this.aW(this.a===2?0:1)/3},
ga3(){return this.aW(this.a===2?0:2)/3},
ga8(){return this.aW(this.a===2?1:3)/3},
ga4(){return this.a===2?this.aW(0):A.P(this)},
a7(a,b,c,d){var s,r=this
r.bx(0,a)
s=r.a
if(s===2)r.bx(1,d)
else if(s>2){r.bx(1,b)
r.bx(2,c)
r.bx(3,d)}},
gB(a){return new A.G(this)},
H(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gl(b)===this.a){s=b.gA(b)
r=A.n(this,A.j(this).k("d.E"))
s=s===A.k(r)}return s},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$it:1,
gl(a){return this.a}}
A.c9.prototype={
I(){return new A.c9(new Uint32Array(A.B(this.a)))},
gG(){return B.K},
gl(a){return this.a.length},
gM(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
j(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.c(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gD(){var s=this.a
if(!B.i.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a
if(!B.i.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gq(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gt(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:0
return s},
ga5(){var s=this.a
if(!B.i.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s/4294967295},
ga2(){return this.gp()/4294967295},
ga3(){return this.gq()/4294967295},
ga8(){return this.gt()/4294967295},
ga4(){var s=this.a,r=s.length
if(r===2)if(!B.i.gF(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.P(this)
return s},
gB(a){return new A.G(this)},
H(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gl(b)===this.a.length){s=b.gA(b)
r=A.n(this,A.j(this).k("d.E"))
s=s===A.k(r)}return s},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$it:1}
A.ca.prototype={
I(){return new A.ca(this.a,new Uint8Array(A.B(this.b)))},
gG(){return B.J},
gM(){return null},
aX(a){var s,r
if(a<0||a>=this.a)s=0
else{s=this.b
r=s.length
if(a<2){if(0>=r)return A.a(s,0)
s=B.a.ad(s[0],4-(a<<2>>>0))&15}else{if(1>=r)return A.a(s,1)
s=B.a.ad(s[1],4-((a&1)<<2))&15}}return s},
bD(a,b){var s,r,q,p
if(a>=this.a)return
s=B.a.S(B.b.h(b),0,15)
if(a>1){a&=1
r=1}else r=0
if(a===0){q=this.b
if(!(r<q.length))return A.a(q,r)
p=q[r]
q.$flags&2&&A.c(q)
q[r]=(p&15|s<<4)>>>0}else if(a===1){q=this.b
if(!(r<q.length))return A.a(q,r)
p=q[r]
q.$flags&2&&A.c(q)
q[r]=(p&240|s)>>>0}},
m(a,b){return this.aX(b)},
j(a,b,c){return this.bD(b,c)},
gD(){return this.aX(0)},
gn(){return this.aX(0)},
gp(){return this.aX(this.a===2?0:1)},
gq(){return this.aX(this.a===2?0:2)},
gt(){return this.aX(this.a===2?1:3)},
ga5(){return this.aX(0)/15},
ga2(){return this.aX(this.a===2?0:1)/15},
ga3(){return this.aX(this.a===2?0:2)/15},
ga8(){return this.aX(this.a===2?1:3)/15},
ga4(){return this.a===2?this.aX(0):A.P(this)},
a7(a,b,c,d){var s,r=this
r.bD(0,a)
s=r.a
if(s===2)r.bD(1,d)
else if(s>2){r.bD(1,b)
r.bD(2,c)
r.bD(3,d)}},
gB(a){return new A.G(this)},
H(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gl(b)===this.a){s=b.gA(b)
r=A.n(this,A.j(this).k("d.E"))
s=s===A.k(r)}return s},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$it:1,
gl(a){return this.a}}
A.bn.prototype={
eO(a,b,c,d){var s,r=this.a
r.$flags&2&&A.c(r)
s=r.length
if(0>=s)return A.a(r,0)
r[0]=a
if(1>=s)return A.a(r,1)
r[1]=b
if(2>=s)return A.a(r,2)
r[2]=c
if(3>=s)return A.a(r,3)
r[3]=d},
I(){return new A.bn(new Uint8Array(A.B(this.a)))},
gG(){return B.k},
gl(a){return this.a.length},
gM(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
j(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.c(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gD(){var s=this.a
if(!B.c.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a
if(!B.c.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gp(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gq(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gt(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:255
return s},
ga5(){var s=this.a
if(!B.c.gF(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s/255},
ga2(){return this.gp()/255},
ga3(){return this.gq()/255},
ga8(){return this.gt()/255},
ga4(){var s=this.a,r=s.length
if(r===2)if(!B.c.gF(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.P(this)
return s},
gB(a){return new A.G(this)},
H(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gl(b)===this.a.length){s=b.gA(b)
r=A.n(this,A.j(this).k("d.E"))
s=s===A.k(r)}return s},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$it:1}
A.et.prototype={}
A.a8.prototype={
ar(){return"Format."+this.b}}
A.bp.prototype={
c1(a){var s=$.lB()
if(!s.aC(a))return"<unknown>"
return s.m(0,a).a},
v(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(s=e.a,r=new A.T(s,s.r,s.e,A.j(s).k("T<1>")),q=t.q,p=t.r,o=t.N,n=t.P,m="";r.C();){l=r.d
m+=l+"\n"
k=s.m(0,l)
for(l=k.a,l=new A.T(l,l.r,l.e,A.j(l).k("T<1>"));l.C();){j=l.d
i=k.m(0,j)
m=i==null?m+("\t"+e.c1(j)+"\n"):m+("\t"+e.c1(j)+": "+i.v(0)+"\n")}for(l=k.b.a,j=new A.T(l,l.r,l.e,A.j(l).k("T<1>"));j.C();){h=j.d
m+=h+"\n"
if(!l.aC(h))l.j(0,h,new A.aK(A.Z(q,p),new A.aQ(A.Z(o,n))))
g=l.m(0,h)
for(h=g.a,h=new A.T(h,h.r,h.e,A.j(h).k("T<1>"));h.C();){f=h.d
i=g.m(0,f)
m=i==null?m+("\t"+e.c1(f)+"\n"):m+("\t"+e.c1(f)+": "+i.v(0)+"\n")}}}return m.charCodeAt(0)==0?m:m},
bV(c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="Length must be a non-negative integer: ",c5=c6.e
c6.e=!0
s=c6.d
a1=c6.W()
if(a1===18761){c6.e=!1
if(c6.W()!==42){c6.e=c5
return!1}}else if(a1===19789){c6.e=!0
if(c6.W()!==42){c6.e=c5
return!1}}else return!1
r=c6.O()
c3.c=0
q=0
a2=t.q
a3=A.md(a2)
a4=c3.a
a5=t.gn
a6=c6.c
a7=t.r
a8=t.N
a9=t.P
for(;;){b0=r
if(typeof b0!=="number")return b0.iO()
if(b0>0){b0=q
if(typeof b0!=="number")return b0.d2()
b0=b0<64&&a3.N(0,r)}else b0=!1
if(!b0)break
try{b0=s
b1=r
if(typeof b0!=="number")return b0.aq()
if(typeof b1!=="number")return A.fF(b1)
b1=b0+b1
c6.d=b1
if(a6-b1<2)break
p=new A.aK(A.Z(a2,a7),new A.aQ(A.Z(a8,a9)))
o=c6.W()
b0=o
if(typeof b0!=="number")return b0.d3()
if(b0*12>a6-c6.d)break
n=o
b0=n
if(b0<0)A.Y(A.a2(c4+A.z(b0),null))
m=A.o(new Array(b0),a5)
l=0
for(;;){b0=l
b1=n
if(typeof b0!=="number")return b0.d2()
if(typeof b1!=="number")return A.fF(b1)
if(!(b0<b1))break
J.a1(m,l,c3.dS(c6,s))
b0=l
if(typeof b0!=="number")return b0.aq()
l=b0+1}k=m
for(b0=k,b1=b0.length,b2=0;b2<b0.length;b0.length===b1||(0,A.a0)(b0),++b2){j=b0[b2]
if(j.b!=null){b3=j.a
b4=j.b
b4.toString
J.a1(p,b3,b4)}}a4.j(0,"ifd"+A.z(q),p)
b0=q
if(typeof b0!=="number")return b0.aq()
q=b0+1
r=c6.O()}catch(b5){break}}for(b0=new A.aT(a4,a4.r,a4.e,A.j(a4).k("aT<2>"));b0.C();){i=b0.d
for(b1=B.aZ.gbF(),b1=b1.gB(b1);b1.C();){h=b1.gJ()
b3=A.v(h)
if(i.a.aC(b3))try{g=J.e(i,h).h(0)
b3=s
b4=g
if(typeof b3!=="number")return b3.aq()
if(typeof b4!=="number")return A.fF(b4)
c6.d=b3+b4
f=new A.aK(A.Z(a2,a7),new A.aQ(A.Z(a8,a9)))
e=c6.W()
d=e
b4=d
if(b4<0)A.Y(A.a2(c4+A.z(b4),null))
c=A.o(new Array(b4),a5)
b=0
for(;;){b3=b
b4=d
if(typeof b3!=="number")return b3.d2()
if(typeof b4!=="number")return A.fF(b4)
if(!(b3<b4))break
J.a1(c,b,c3.dS(c6,s))
b3=b
if(typeof b3!=="number")return b3.aq()
b=b3+1}a=c
for(b3=a,b4=b3.length,b2=0;b2<b3.length;b3.length===b4||(0,A.a0)(b3),++b2){a0=b3[b2]
if(a0.b!=null){b6=a0.a
b7=a0.b
b7.toString
J.a1(f,b6,b7)}}b3=i.b
b4=B.aZ.m(0,h)
b4.toString
b3.a.j(0,b4,a9.a(f))}catch(b5){continue}}}c3.b=null
b8=a4.m(0,"ifd1")
if(b8!=null){a2=b8.a
a2=a2.aC(513)&&a2.aC(514)}else a2=!1
if(a2){b9=b8.m(0,513).h(0)
c0=b8.m(0,514).h(0)
a2=s
if(typeof a2!=="number")return a2.aq()
c1=a2+b9
if(c0>0){a2=s
if(typeof a2!=="number")return A.fF(a2)
a2=c1>=a2&&c1+c0<=a6}else a2=!1
if(a2){c2=c6.d
c6.d=c1
c3.b=c6.aD(c0).a1()
c6.d=c2}}c6.e=c5
return!1},
dS(a,b){var s,r,q,p,o,n,m,l=a.W(),k=a.W(),j=a.O(),i=new A.fp(l,null)
if(k>=14)return i
s=B.dX[k]
r=j*B.cR[k]
if(this.c+r>16777216)return i
q=a.d
if((r>4?a.d=a.O()+b:q)+r>a.c)return i
p=a.aD(r)
this.c+=r
switch(s.a){case 0:break
case 6:i.b=new A.ci(new Int8Array(A.B(J.jF(B.c.gu(p.a1()),0,j))))
break
case 1:i.b=new A.ce(new Uint8Array(A.B(p.aD(j).a1())))
break
case 7:i.b=new A.co(new Uint8Array(A.B(p.aD(j).a1())))
break
case 2:i.b=new A.cf(j===0?"":p.b6(j-1))
break
case 3:o=new A.cm(new Uint16Array(j))
o.eV(p,j)
i.b=o
break
case 4:o=new A.bt(new Uint32Array(j))
o.eS(p,j)
i.b=o
break
case 5:i.b=A.m6(p,j)
break
case 10:i.b=A.m7(p,j)
break
case 8:o=new A.cl(new Int16Array(j))
o.eU(p,j)
i.b=o
break
case 9:o=new A.cj(new Int32Array(j))
o.eT(p,j)
i.b=o
break
case 11:o=new A.cn(new Float32Array(j))
o.eW(p,j)
i.b=o
break
case 12:o=new A.cg(new Float64Array(j))
o.eR(p,j)
i.b=o
break
case 13:if(j===1){o=new A.d2(0)
n=p.O()
m=$.cP()
m.$flags&2&&A.c(m)
m[0]=n
n=$.iN()
if(0>=n.length)return A.a(n,0)
o.a=n[0]
i.b=o}break}a.d=q+4
return i}}
A.fp.prototype={}
A.eB.prototype={}
A.aQ.prototype={
eQ(a){a.a.b4(0,new A.fS(this))},
m(a,b){var s
A.b1(b)
s=this.a
if(!s.aC(b))s.j(0,b,new A.aK(A.Z(t.q,t.r),new A.aQ(A.Z(t.N,t.P))))
s=s.m(0,b)
s.toString
return s}}
A.fS.prototype={
$2(a,b){var s
A.b1(a)
s=A.jU(t.P.a(b))
this.a.a.j(0,a,s)
return s},
$S:13}
A.aK.prototype={
i_(a){a.a.b4(0,new A.fT(this))
a.b.a.b4(0,new A.fU(this))},
m(a,b){var s=this.a.m(0,b)
return s},
j(a,b,c){this.a.j(0,b,c)},
gbr(){var s=this.a.m(0,274)
return s==null?null:s.h(0)},
sbr(a){this.a.iA(0,274)}}
A.fT.prototype={
$2(a,b){var s
A.v(a)
s=t.r.a(b).I()
this.a.a.j(0,a,s)
return s},
$S:24}
A.fU.prototype={
$2(a,b){var s
A.b1(a)
s=A.jU(t.P.a(b))
this.a.b.a.j(0,a,s)
return s},
$S:13}
A.a3.prototype={
ar(){return"IfdValueType."+this.b}}
A.S.prototype={
h(a){return 0},
v(a){return""},
H(a,b){var s=this
if(b==null)return!1
return b instanceof A.S&&s.gaE()===b.gaE()&&s.gl(s)===b.gl(b)&&s.gA(s)===b.gA(b)},
gA(a){return 0}}
A.ce.prototype={
I(){return new A.ce(new Uint8Array(A.B(this.a)))},
gaE(){return B.ao},
gl(a){return this.a.length},
H(a,b){var s,r
if(b==null)return!1
if(b instanceof A.ce){s=this.a
r=b.a
s=s.length===r.length&&A.k(s)===A.k(r)}else s=!1
return s},
gA(a){return A.k(this.a)},
h(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return s[0]},
v(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.z(s)
return s}}
A.cf.prototype={
I(){return new A.cf(this.a)},
gaE(){return B.h},
gl(a){return this.a.length+1},
H(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cf){s=this.a
r=b.a
s=s.length+1===r.length+1&&B.r.gA(s)===B.r.gA(r)}else s=!1
return s},
gA(a){return B.r.gA(this.a)},
v(a){return this.a}}
A.cm.prototype={
eV(a,b){var s,r,q,p
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.W()
r&2&&A.c(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
I(){return new A.cm(new Uint16Array(A.B(this.a)))},
gaE(){return B.f},
gl(a){return this.a.length},
H(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cm){s=this.a
r=b.a
s=s.length===r.length&&A.k(s)===A.k(r)}else s=!1
return s},
gA(a){return A.k(this.a)},
h(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return s[0]},
v(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.z(s)
return s}}
A.bt.prototype={
eS(a,b){var s,r,q,p
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.O()
r&2&&A.c(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
I(){return new A.bt(new Uint32Array(A.B(this.a)))},
gaE(){return B.j},
gl(a){return this.a.length},
H(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bt){s=this.a
r=b.a
s=s.length===r.length&&A.k(s)===A.k(r)}else s=!1
return s},
gA(a){return A.k(this.a)},
h(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return s[0]},
v(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.z(s)
return s}}
A.ch.prototype={
I(){return new A.ch(A.k2(this.a,t.i))},
gaE(){return B.l},
gl(a){return this.a.length},
h(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return s[0].h(0)},
H(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.ch){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.k(s)===A.k(q)}else s=!1
return s},
gA(a){return A.k(this.a)},
v(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=s[0].v(0)}else s=A.z(s)
return s}}
A.ci.prototype={
I(){return new A.ci(new Int8Array(A.B(this.a)))},
gaE(){return B.at},
gl(a){return this.a.length},
H(a,b){var s,r
if(b==null)return!1
if(b instanceof A.ci){s=this.a
r=b.a
s=s.length===r.length&&A.k(s)===A.k(r)}else s=!1
return s},
gA(a){return A.k(this.a)},
h(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return s[0]},
v(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.z(s)
return s}}
A.cl.prototype={
eU(a,b){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.W()
o=$.jA()
o.$flags&2&&A.c(o)
o[0]=p
p=$.lv()
if(0>=p.length)return A.a(p,0)
p=p[0]
r&2&&A.c(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
I(){return new A.cl(new Int16Array(A.B(this.a)))},
gaE(){return B.au},
gl(a){return this.a.length},
H(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cl){s=this.a
r=b.a
s=s.length===r.length&&A.k(s)===A.k(r)}else s=!1
return s},
gA(a){return A.k(this.a)},
h(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return s[0]},
v(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.z(s)
return s}}
A.cj.prototype={
eT(a,b){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.O()
o=$.cP()
o.$flags&2&&A.c(o)
o[0]=p
p=$.iN()
if(0>=p.length)return A.a(p,0)
p=p[0]
r&2&&A.c(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
I(){return new A.cj(new Int32Array(A.B(this.a)))},
gaE(){return B.av},
gl(a){return this.a.length},
H(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cj){s=this.a
r=b.a
s=s.length===r.length&&A.k(s)===A.k(r)}else s=!1
return s},
gA(a){return A.k(this.a)},
h(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return s[0]},
v(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.z(s)
return s}}
A.ck.prototype={
I(){return new A.ck(A.k2(this.a,t.i))},
gaE(){return B.ap},
gl(a){return this.a.length},
H(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.ck){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.k(s)===A.k(q)}else s=!1
return s},
gA(a){return A.k(this.a)},
h(a){var s=this.a
if(0>=s.length)return A.a(s,0)
return s[0].h(0)},
v(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=s[0].v(0)}else s=A.z(s)
return s}}
A.cn.prototype={
eW(a,b){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.O()
o=$.cP()
o.$flags&2&&A.c(o)
o[0]=p
p=$.lw()
if(0>=p.length)return A.a(p,0)
p=p[0]
r&2&&A.c(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
I(){return new A.cn(new Float32Array(A.B(this.a)))},
gaE(){return B.aq},
gl(a){return this.a.length},
H(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cn){s=this.a
r=b.a
s=s.length===r.length&&A.k(s)===A.k(r)}else s=!1
return s},
gA(a){return A.k(this.a)},
v(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.z(s[0])}else s=A.z(s)
return s}}
A.cg.prototype={
eR(a,b){var s,r
for(s=this.a,r=0;r<b;++r)B.B.j(s,r,a.iv())},
I(){return new A.cg(new Float64Array(A.B(this.a)))},
gaE(){return B.ar},
gl(a){return this.a.length},
H(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cg){s=this.a
r=b.a
s=s.length===r.length&&A.k(s)===A.k(r)}else s=!1
return s},
gA(a){return A.k(this.a)},
v(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.z(s[0])}else s=A.z(s)
return s}}
A.co.prototype={
I(){return new A.co(new Uint8Array(A.B(this.a)))},
gaE(){return B.w},
gl(a){return this.a.length},
H(a,b){var s,r
if(b==null)return!1
if(b instanceof A.co){s=this.a
r=b.a
s=s.length===r.length&&A.k(s)===A.k(r)}else s=!1
return s},
gA(a){return A.k(this.a)},
v(a){return"<data>"}}
A.d2.prototype={
I(){return A.m5(this.a)},
gaE(){return B.as},
gl(a){return 1},
H(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.d2)s=this.a===b.a
return s},
gA(a){return this.a},
h(a){return this.a},
v(a){return"Ifd@"+this.a}}
A.bo.prototype={}
A.fO.prototype={}
A.eu.prototype={}
A.b6.prototype={}
A.bs.prototype={}
A.cd.prototype={}
A.h8.prototype={
eZ(a){var s,r,q,p,o,n,m,l=this,k=null,j="ifd0",i=l.a,h=i.y
if(h.m(0,j).a.aC(274)){s=h.m(0,j).gbr()
s.toString
r=s}else r=0
q=r>=5&&r<=8
p=q?l.c:l.b
s=A.cp(k,k,B.k,0,B.v,q?l.b:l.c,k,0,3,k,p,!1)
s.e=A.cY(h)
s.gbj().m(0,j).sbr(k)
s.c=i.x
l.d!==$&&A.J()
l.d=s
i=s.a
i=J.Q(i.gu(i))
l.e!==$&&A.J()
l.e=i
o=s.a.gam()
n=l.b-1
m=l.c-1
i=l.f
switch(r){case 2:i!==$&&A.J()
l.f=n*3
l.r!==$&&A.J()
l.r=-3
l.w!==$&&A.J()
l.w=o
break
case 3:i!==$&&A.J()
l.f=m*o+n*3
l.r!==$&&A.J()
l.r=-3
l.w!==$&&A.J()
l.w=-o
break
case 4:i!==$&&A.J()
l.f=m*o
l.r!==$&&A.J()
l.r=3
l.w!==$&&A.J()
l.w=-o
break
case 5:i!==$&&A.J()
l.f=0
l.r!==$&&A.J()
l.r=o
l.w!==$&&A.J()
l.w=3
break
case 6:i!==$&&A.J()
l.f=m*3
l.r!==$&&A.J()
l.r=o
l.w!==$&&A.J()
l.w=-3
break
case 7:i!==$&&A.J()
l.f=n*o+m*3
l.r!==$&&A.J()
l.r=-o
l.w!==$&&A.J()
l.w=-3
break
case 8:i!==$&&A.J()
l.f=n*o
l.r!==$&&A.J()
l.r=-o
l.w!==$&&A.J()
l.w=3
break
default:i!==$&&A.J()
l.f=0
l.r!==$&&A.J()
l.r=3
l.w!==$&&A.J()
l.w=o
break}},
eC(d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=c9.a,d1=d0.ax,d2=d1.length
switch(d2){case 1:if(0>=d2)return A.a(d1,0)
s=d1[0]
r=s.f
q=s.r
d0=c9.f
d0===$&&A.b()
d2=c9.w
d2===$&&A.b()
p=d0+d3*d2
for(d0=c9.b,o=c9.r,n=c9.e,m=s.e,l=m.length,k=d3;k<d4;++k,p+=d2){j=B.a.i(k,q)
if(!(j<l))return A.a(m,j)
i=m[j]
j=i.length
h=p
g=0
while(g<d0){f=B.a.Y(g,r)
if(!(f<j))return A.a(i,f)
e=i[f]
n===$&&A.b()
n.$flags&2&&A.c(n)
f=n.length
if(!(h>=0&&h<f))return A.a(n,h)
n[h]=e
d=h+1
if(!(d<f))return A.a(n,d)
n[d]=e
d=h+2
if(!(d<f))return A.a(n,d)
n[d]=e;++g
o===$&&A.b()
h+=o}}break
case 3:d0=d0.e
c=d0==null||d0.d===1
if(0>=d2)return A.a(d1,0)
s=d1[0]
if(1>=d2)return A.a(d1,1)
b=d1[1]
if(2>=d2)return A.a(d1,2)
a=d1[2]
r=s.f
q=s.r
a0=b.f
a1=b.r
a2=a.f
a3=a.r
a4=$.jD()
d0=c9.f
d0===$&&A.b()
d2=c9.w
d2===$&&A.b()
p=d0+d3*d2
for(d0=c9.b,o=c9.r,n=c9.e,m=s.e,l=m.length,j=b.e,f=j.length,d=a.e,a5=d.length,k=d3;k<d4;++k,p+=d2){a6=B.a.i(k,q)
if(!(a6<l))return A.a(m,a6)
a6=m[a6]
a6.toString
a7=B.a.i(k,a1)
if(!(a7<f))return A.a(j,a7)
a7=j[a7]
a7.toString
a8=B.a.i(k,a3)
if(!(a8<a5))return A.a(d,a8)
a8=d[a8]
a8.toString
if(c){a9=a6.length
b0=a7.length
b1=a8.length
h=p
g=0
while(g<d0){b2=B.a.Y(g,r)
if(!(b2<a9))return A.a(a6,b2)
e=(a6[b2]<<8>>>0)+65536
b2=B.a.Y(g,a0)
if(!(b2<b0))return A.a(a7,b2)
b3=a7[b2]-128
b2=B.a.Y(g,a2)
if(!(b2<b1))return A.a(a8,b2)
b4=a8[b2]-128
n===$&&A.b()
b2=B.a.i(e+359*b4,8)
if(!(b2<768))return A.a(a4,b2)
b2=a4[b2]
n.$flags&2&&A.c(n)
b5=n.length
if(!(h>=0&&h<b5))return A.a(n,h)
n[h]=b2
b2=h+1
b6=B.a.i(e-88*b3-183*b4,8)
if(!(b6<768))return A.a(a4,b6)
b6=a4[b6]
if(!(b2<b5))return A.a(n,b2)
n[b2]=b6
b6=h+2
b2=B.a.i(e+454*b3,8)
if(!(b2<768))return A.a(a4,b2)
b2=a4[b2]
if(!(b6<b5))return A.a(n,b6)
n[b6]=b2;++g
o===$&&A.b()
h+=o}}else{a9=a6.length
b0=a7.length
b1=a8.length
h=p
g=0
while(g<d0){n===$&&A.b()
b2=B.a.Y(g,r)
if(!(b2<a9))return A.a(a6,b2)
b2=a6[b2]
n.$flags&2&&A.c(n)
b5=n.length
if(!(h>=0&&h<b5))return A.a(n,h)
n[h]=b2
b2=h+1
b6=B.a.Y(g,a0)
if(!(b6<b0))return A.a(a7,b6)
b6=a7[b6]
if(!(b2<b5))return A.a(n,b2)
n[b2]=b6
b6=h+2
b2=B.a.Y(g,a2)
if(!(b2<b1))return A.a(a8,b2)
b2=a8[b2]
if(!(b6<b5))return A.a(n,b6)
n[b6]=b2;++g
o===$&&A.b()
h+=o}}}break
case 4:d0=d0.e
if(d0==null)throw A.h(A.C("Unsupported color mode (4 components)"))
d0=d0.d===0
if(0>=d2)return A.a(d1,0)
s=d1[0]
if(1>=d2)return A.a(d1,1)
b=d1[1]
if(2>=d2)return A.a(d1,2)
a=d1[2]
if(3>=d2)return A.a(d1,3)
b7=d1[3]
r=s.f
q=s.r
a0=b.f
a1=b.r
a2=a.f
a3=a.r
b8=b7.f
b9=b7.r
a4=$.jD()
d2=c9.f
d2===$&&A.b()
o=c9.w
o===$&&A.b()
p=d2+d3*o
for(d2=c9.b,n=c9.r,m=c9.e,l=s.e,j=l.length,f=b.e,d=f.length,a5=a.e,a6=a5.length,a7=b7.e,a8=a7.length,k=d3;k<d4;++k,p+=o){a9=B.a.i(k,q)
if(!(a9<j))return A.a(l,a9)
a9=l[a9]
a9.toString
b0=B.a.i(k,a1)
if(!(b0<d))return A.a(f,b0)
b0=f[b0]
b0.toString
b1=B.a.i(k,a3)
if(!(b1<a6))return A.a(a5,b1)
b1=a5[b1]
b1.toString
b2=B.a.i(k,b9)
if(!(b2<a8))return A.a(a7,b2)
c0=a7[b2]
b2=a9.length
b5=b0.length
b6=b1.length
c1=c0.length
h=p
g=0
while(g<d2){c2=B.a.Y(g,b8)
if(!(c2<c1))return A.a(c0,c2)
c3=c0[c2]
if(d0){c2=B.a.Y(g,r)
if(!(c2<b2))return A.a(a9,c2)
c4=a9[c2]
c2=B.a.Y(g,a0)
if(!(c2<b5))return A.a(b0,c2)
c5=b0[c2]
c2=B.a.Y(g,a2)
if(!(c2<b6))return A.a(b1,c2)
e=b1[c2]}else{c2=B.a.Y(g,r)
if(!(c2<b2))return A.a(a9,c2)
c6=(a9[c2]<<8>>>0)+65536
c2=B.a.Y(g,a0)
if(!(c2<b5))return A.a(b0,c2)
b3=b0[c2]-128
c2=B.a.Y(g,a2)
if(!(c2<b6))return A.a(b1,c2)
b4=b1[c2]-128
c2=B.a.i(c6+359*b4,8)
if(!(c2<768))return A.a(a4,c2)
c4=255-a4[c2]
c2=B.a.i(c6-88*b3-183*b4,8)
if(!(c2<768))return A.a(a4,c2)
c5=255-a4[c2]
c2=B.a.i(c6+454*b3,8)
if(!(c2<768))return A.a(a4,c2)
e=255-a4[c2]}m===$&&A.b()
c2=B.a.i(c4*c3,8)
m.$flags&2&&A.c(m)
c7=m.length
if(!(h>=0&&h<c7))return A.a(m,h)
m[h]=c2
c2=h+1
c8=B.a.i(c5*c3,8)
if(!(c2<c7))return A.a(m,c2)
m[c2]=c8
c8=h+2
c2=B.a.i(e*c3,8)
if(!(c8<c7))return A.a(m,c8)
m[c8]=c2;++g
n===$&&A.b()
h+=n}}break
default:throw A.h(A.C("Unsupported color mode"))}}}
A.h4.prototype={}
A.b8.prototype={}
A.eS.prototype={
iK(a){var s,r,q,p,o,n=this,m=A.F(t.L.a(a),!0,null,0)
n.c=m
s=m.cr(2,0)
if(J.e(s.a,s.d)!==255||J.e(s.a,s.d+1)!==216)return!1
if(n.b1()!==216)return!1
r=n.b1()
q=!1
p=!1
for(;;){if(r!==217){m=n.c
m=m.d<m.c}else m=!1
if(!m)break
o=n.c.W()
if(o<2)break
m=n.c
m.d=m.d+(o-2)
switch(r){case 192:case 193:case 194:q=!0
break
case 218:if(q)return!0
p=!0
break}r=n.b1()}return q&&p},
iw(a){var s,r,q,p,o,n,m=this
m.c=A.F(t.L.a(a),!0,null,0)
if(m.b1()!==216)return null
s=new A.h9()
r=m.b1()
q=!1
p=!1
for(;;){if(r!==217){o=m.c
o=o.d<o.c}else o=!1
if(!o)break
switch(r){case 192:case 193:case 194:m.dT(r,m.dR(),!1)
q=!0
break
case 218:m.dZ()
p=!0
break
default:m.dZ()
break}r=m.b1()}o=m.f
if(o!=null){n=o.e
n.toString
s.a=n
o=o.d
o.toString
s.b=o}o=m.f=null
B.e.em(m.Q)
return q&&p?s:o},
bV(a){var s,r,q,p,o,n,m=this
m.c=A.F(t.L.a(a),!0,null,0)
m.hp()
if(m.Q.length!==1)throw A.h(A.C("Only single frame JPEGs supported"))
s=m.f
s.toString
if(m.cy!=null)return
if(!m.ay){m.ay=!0
s.iu(m.b===8)}for(r=s.z,q=s.y,p=m.ax,o=0;o<r.length;++o){n=q.m(0,r[o])
B.e.N(p,A.jL(n.a,s.f,n.b,s.r,m.f6(s,n)))}},
gco(){var s,r=this.f.d
r.toString
s=this.b
return B.a.ac(r+s-1,s)},
hp(){var s,r,q,p,o=this
o.ch=0
if(o.b1()!==216)throw A.h(A.C("Start Of Image marker not found."))
s=o.b1()
for(;;){if(s!==217){r=o.c
r===$&&A.b()
r=r.d<r.c}else r=!1
if(!r)break
A:{if(s>=208&&s<=215||s===1){s=o.b1()
break A}q=o.dR()
switch(s){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:o.hq(s,q)
break
case 219:o.ht(q)
break
case 192:case 193:case 194:o.hv(s,q)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw A.h(A.C("Unhandled frame type "+B.a.ey(s,16)))
case 196:o.hs(q)
break
case 221:o.r=q.W()
break
case 218:o.hB(q)
break
case 255:r=o.c
r===$&&A.b()
if(J.e(r.a,r.d)!==255)--o.c.d
break
default:r=o.c
r===$&&A.b()
p=!1
if(J.e(r.a,r.d+-3)===255){r=o.c
if(J.e(r.a,r.d+-2)>=192){r=o.c
r=J.e(r.a,r.d+-2)<=254}else r=p}else r=p
if(r){o.c.d-=3
break}if(s!==0)throw A.h(A.C("Unknown JPEG marker "+B.a.ey(s,16)))
break}s=o.b1()}}},
dZ(){var s,r=this.c
r===$&&A.b()
s=r.W()
if(s<2)throw A.h(A.C("Invalid Block"))
r=this.c
r.d=r.d+(s-2)},
dR(){var s,r=this.c
r===$&&A.b()
s=r.W()
if(s<2)throw A.h(A.C("Invalid Block"))
return this.c.aD(s-2)},
b1(){var s,r=this,q=r.c
q===$&&A.b()
if(q.d>=q.c)return 0
do{do{s=r.c.K()
if(s!==255){q=r.c
q=q.d<q.c}else q=!1}while(q)
q=r.c
if(q.d>=q.c)return s
do{s=r.c.K()
if(s===255){q=r.c
q=q.d<q.c}else q=!1}while(q)
if(s===0){q=r.c
q=q.d<q.c}else q=!1}while(q)
return s},
hA(a){var s
for(s=0;s<12;++s)if(J.e(a.a,a.d++)!==B.hg[s])return
this.x=new A.b7("ICC_PROFILE",B.a5,a.a1())},
hu(a){if(a.O()!==1165519206)return
if(a.W()!==0)return
this.y.bV(a)},
hq(a,b){var s,r,q,p,o,n=this,m=b
if(n.cy!=null)s=a===225||a===238
else s=!1
if(s)n.cx=!0
if(a===224){s=m
r=!1
if(J.e(s.a,s.d)===74){s=m
if(J.e(s.a,s.d+1)===70){s=m
if(J.e(s.a,s.d+2)===73){s=m
if(J.e(s.a,s.d+3)===70){s=m
s=J.e(s.a,s.d+4)===0}else s=r}else s=r}else s=r}else s=r
if(s){s=new A.ha()
r=m
J.e(r.a,r.d+5)
r=m
J.e(r.a,r.d+6)
r=m
J.e(r.a,r.d+7)
r=m
J.e(r.a,r.d+8)
r=m
J.e(r.a,r.d+9)
r=m
J.e(r.a,r.d+10)
r=m
J.e(r.a,r.d+11)
r=m
r=J.e(r.a,r.d+12)
s.f=r
q=m
q=J.e(q.a,q.d+13)
s.r=q
n.d=s
m.cr(14+3*r*q,14)}}else if(a===225)n.hu(m)
else if(a===226)n.hA(m)
else if(a===238){s=m
r=!1
if(J.e(s.a,s.d)===65){s=m
if(J.e(s.a,s.d+1)===100){s=m
if(J.e(s.a,s.d+2)===111){s=m
if(J.e(s.a,s.d+3)===98){s=m
if(J.e(s.a,s.d+4)===101){s=m
s=J.e(s.a,s.d+5)===0}else s=r}else s=r}else s=r}else s=r}else s=r
if(s){p=new A.h4()
s=m
J.e(s.a,s.d+6)
s=m
J.e(s.a,s.d+7)
s=m
J.e(s.a,s.d+8)
s=m
J.e(s.a,s.d+9)
s=m
J.e(s.a,s.d+10)
s=m
p.d=J.e(s.a,s.d+11)
n.e=p}}else if(a===254)try{m.iy()}catch(o){}},
ht(a){var s,r,q,p,o,n,m,l,k
for(s=a.c,r=this.z;q=a.d,p=q<s,p;){p=a.a
a.d=q+1
o=J.e(p,q)
n=B.a.i(o,4)
o&=15
if(o>=4)throw A.h(A.C("Invalid number of quantization tables"))
if(r[o]==null)B.e.j(r,o,new Int16Array(64))
m=r[o]
for(q=n!==0,l=0;l<64;++l){k=q?a.W():J.e(a.a,a.d++)
m.toString
p=$.fH()
if(!(l<p.length))return A.a(p,l)
p=p[l]
m.$flags&2&&A.c(m)
if(!(p<64))return A.a(m,p)
m[p]=k}}if(p)throw A.h(A.C("Bad length for DQT block"))},
dT(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.f!=null)throw A.h(A.C("Duplicate JPG frame data found."))
s=A.Z(t.q,t.d2)
r=A.o([],t.t)
q=new A.eU(s,r)
q.b=a===194
q.c=b.K()
q.d=b.W()
q.e=b.W()
p=b.K()
for(o=i.z,n=0;n<p;++n){m=J.e(b.a,b.d++)
l=J.e(b.a,b.d++)
k=B.a.i(l,4)
j=J.e(b.a,b.d++)
B.e.N(r,m)
s.j(0,m,new A.b8(k&15,l&15,o,j))}if(c)i.hO(q)
i.f=q
B.e.N(i.Q,q)},
hv(a,b){return this.dT(a,b,!0)},
hO(a){var s,r,q,p=a.e
p.toString
s=a.d
s.toString
if(p===0||s===0)throw A.h(A.C("Invalid JPEG dimensions "+p+"x"+s))
r=this.a
if(r>0&&p*s>r)throw A.h(A.C("JPEG dimensions "+p+"x"+s+" exceed the maximum of "+r+" pixels"))
p=a.y
s=p.a
if(s===0||s>4)throw A.h(A.C("Unsupported number of JPEG components: "+s))
for(p=new A.aT(p,p.r,p.e,A.j(p).k("aT<2>"));p.C();){s=p.d
r=s.a
q=!0
if(r>=1)if(r<=4){s=s.b
s=s<1||s>4}else s=q
else s=q
if(s)throw A.h(A.C("Invalid JPEG sampling factor"))}},
hs(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.c,r=this.at,q=this.as;p=a.d,p<s;){o=a.a
a.d=p+1
n=J.e(o,p)
m=new Uint8Array(16)
for(l=0,k=0;k<16;++k){p=J.e(a.a,a.d++)
if(!(k<16))return A.a(m,k)
m[k]=p
l+=m[k]}j=a.aO(l)
a.d=a.d+(j.c-j.d)
i=j.a1()
if((n&16)!==0){n-=16
h=q}else h=r
if(h.length<=n)B.e.sl(h,n+1)
B.e.j(h,n,this.f7(m,i))}},
hB(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this
if(++a0.ch>1000)throw A.h(A.C("Too many JPEG scans"))
s=a1.K()
if(s<1||s>4)throw A.h(A.C("Invalid SOS block"))
r=a0.f
r.toString
q=A.o([],t.b7)
for(p=a0.as,o=a0.at,n=r.y,m=t.D,l=0;l<s;++l){k=J.e(a1.a,a1.d++)
j=J.e(a1.a,a1.d++)
if(!n.aC(k))throw A.h(A.C("Invalid Component in SOS block"))
i=n.m(0,k)
i.toString
h=B.a.i(j,4)&15
g=j&15
f=o.length
if(h<f){if(!(h<f))return A.a(o,h)
f=o[h]
f.toString
i.Q=m.a(f)
i.at=A.l2(f)}f=p.length
if(g<f){if(!(g<f))return A.a(p,g)
f=p[g]
f.toString
i.as=m.a(f)
i.ax=A.l2(f)}B.e.N(q,i)}e=a1.K()
d=a1.K()
c=a1.K()
p=B.a.i(c,4)
o=r.b
o.toString
if(o&&a0.b===8&&e>0)return
if(a0.cy!=null)throw A.h(B.bf)
b=!1
if(!a0.ay){a0.ay=!0
o=r.z
if(0>=o.length)return A.a(o,0)
o=n.m(0,o[0])
o.toString
if(a0.CW){m=r.b
m.toString
if(!m){m=q.length
if(m===n.a)if(m<=1)o=o.a===1&&o.b===1
else o=!0
else o=b
b=o}}r.es(b,a0.b===8)
if(b)a0.hK(r)}o=a0.c
o===$&&A.b()
n=a0.r
a=new A.eV(o,r,q,n,e,d,p&15,c&15,new Int16Array(64))
p=r.w
p===$&&A.b()
a.f=p
a.r=r.b
if(b)a.sis(a0.gfn())
a.bp()},
f7(a,b){var s,r,q,p,o,n,m,l,k=A.o([],t.e8),j=16
for(;;){if(!(j>0&&a[j-1]===0))break;--j}s=t.fe
B.e.N(k,new A.cI(A.aC(2,null,!1,s)))
if(0>=k.length)return A.a(k,0)
r=k[0]
for(q=b.length,p=0,o=0;o<j;){for(n=0;n<a[o];++n){if(0>=k.length)return A.a(k,-1)
r=k.pop()
m=r.b
if(!(p>=0&&p<q))return A.a(b,p)
B.e.j(r.a,m,new A.cd(b[p]))
while(m=r.b,m>0){if(0>=k.length)return A.a(k,-1)
r=k.pop()}r.b=m+1
B.e.N(k,r)
for(;k.length<=o;r=l){m=A.aC(2,null,!1,s)
l=new A.cI(m)
B.e.N(k,l)
B.e.j(r.a,r.b,new A.bs(m))}++p}++o
if(o<j){m=A.aC(2,null,!1,s)
l=new A.cI(m)
B.e.N(k,l)
B.e.j(r.a,r.b,new A.bs(m))
r=l}}if(0>=k.length)return A.a(k,0)
return k[0].a},
f6(a,b){var s,r,q,p,o,n,m,l,k=b.e
k===$&&A.b()
s=b.f
s===$&&A.b()
r=B.a.ac(8,this.b)
q=k*r
p=new Int32Array(64)
o=new Uint8Array(64)
n=A.aC(s*r,null,!1,t.d)
for(m=0;m<s;++m){for(k=m*r,l=0;l<r;++l)B.e.j(n,k+l,new Uint8Array(q))
this.dk(b,m,n,k,o,p)}b.x=new Int16Array(0)
return n},
dk(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t.by.a(a0)
s=B.a.ac(8,this.b)
r=a.x
r===$&&A.b()
q=a.r
q===$&&A.b()
p=a.c
o=a.d
if(!(o>=0&&o<4))return A.a(p,o)
o=p[o]
o.toString
p=s===8
n=s===1
q=b*q
m=a0.length
l=r.length
k=0
for(;;){j=a.e
j===$&&A.b()
if(!(k<j))break
A:{i=q+k
h=i<<6>>>0
if(n){j=a.y?i:h
if(!(j>=0&&j<l))return A.a(r,j)
g=r[j]
if(!(a1<m))return A.a(a0,a1)
j=a0[a1]
j.toString
f=128+B.b.bk((B.b.bk((5793*B.b.bk((5793*(g*o[0])+512)/1024)+8192)/16384)+8)/16)
if(f<0)e=0
else e=f>255?255:f
j.$flags&2&&A.c(j)
if(!(k<j.length))return A.a(j,k)
j[k]=e
break A}A.pj(o,r,h,a2,a3)
d=k*s
if(p)for(j=d+8,c=0;c<8;++c){e=a1+c
if(!(e<m))return A.a(a0,e)
e=a0[e]
if(e!=null)B.c.X(e,d,j,a2,c<<3>>>0)}else A.ma(a2,s,a0,a1,d)}++k}},
i4(a){var s,r,q,p=this
t.L.a(a)
p.CW=!0
try{p.bV(a)}catch(s){if(A.as(s) instanceof A.fs)return p.dw(a)
else throw s}r=p.cy
if(r==null)return A.l0(p)
if(p.cx)return p.dw(a)
q=r.d
q===$&&A.b()
q.c=p.x
return q},
dw(a){var s
t.L.a(a)
s=A.h5()
s.a=this.a
s.b=this.b
s.bV(a)
return A.l0(s)},
hK(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=B.a.ac(8,c.b),a=c.db
B.e.em(a)
for(s=a0.z,r=s.length,q=t.h,p=a0.y,o=c.ax,n=t.d,m=0;m<s.length;s.length===r||(0,A.a0)(s),++m){l=p.m(0,s[m])
k=l.a
j=a0.f
i=l.b
h=a0.r
g=l.f
g===$&&A.b()
B.e.N(o,A.jL(k,j,i,h,A.aC(g*b,null,!1,n)))
f=i*b
e=A.o(new Array(f),q)
for(k=l.e,d=0;d<f;++d){k===$&&A.b()
e[d]=new Uint8Array(k*b)}B.e.N(a,e)}c.cy=A.k_(c)},
fo(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.f
a6.toString
s=B.a.ac(8,a5.b)
for(r=a6.z,q=a5.dx,p=a5.dy,o=a6.y,n=a5.ax,m=a5.db,l=0;l<r.length;++l){k=o.m(0,r[l])
k.toString
if(!(l<n.length))return A.a(n,l)
j=n[l].e
if(!(l<m.length))return A.a(m,l)
i=m[l]
for(h=k.b,g=a7*h,f=0;f<h;++f){e=g+f
d=k.f
d===$&&A.b()
if(e>=d)break
for(d=e*s,c=f*s,b=0;b<s;++b){a=c+b
if(!(a<i.length))return A.a(i,a)
B.e.j(j,d+b,i[a])}a5.dk(k,f,j,d,q,p)}k=k.x
k===$&&A.b()
h=a5.fr
g=k.length
if(h.length<g)h=a5.fr=new Int16Array(g)
B.C.ag(k,0,g,h)}a0=a6.r*s
a1=a7*a0
a2=Math.min(a1+a0,a5.gco())
if(a1<a2)a5.cy.eC(a1,a2)
for(l=0;l<r.length;++l){a6=o.m(0,r[l])
a6.toString
if(!(l<n.length))return A.a(n,l)
j=n[l].e
a6=a6.b
a3=a7*a6*s
a6=a3+a6*s
q=j.length
a4=a3
for(;;){if(!(a4<a6&&a4<q))break
B.e.j(j,a4,null);++a4}}}}
A.cI.prototype={}
A.fs.prototype={}
A.eU.prototype={
es(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
for(s=i.y,r=A.j(s).k("T<1>"),q=new A.T(s,s.r,s.e,r);q.C();){p=s.m(0,q.d)
i.f=Math.max(i.f,p.a)
i.r=Math.max(i.r,p.b)}q=i.e
q.toString
i.w=B.b.aH(q/8/i.f)
q=i.d
q.toString
i.x=B.b.aH(q/8/i.r)
for(r=new A.T(s,s.r,s.e,r);r.C();){q=s.m(0,r.d)
q.toString
o=i.e
o.toString
n=q.a
m=B.b.aH(B.b.aH(o/8)*n/i.f)
o=i.d
o.toString
l=q.b
k=B.b.aH(B.b.aH(o/8)*l/i.r)
j=i.w*n
n=i.x
q.e=m
q.f=k
q.r=j
n=q.w=n*l
q.y=b
q.z=a?l:0
o=a?l:n
n=b?1:64
q.x=new Int16Array(j*o*n)}},
iu(a){return this.es(!1,a)}}
A.h9.prototype={
gT(){return this.a},
gV(){return this.b}}
A.ha.prototype={}
A.eV.prototype={
bp(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.y,a1=a0.length,a2=a.r
a2.toString
if(a2)if(a.Q===0)s=a.at===0?a.gfs():a.gfu()
else s=a.at===0?a.gfi():a.gfk()
else s=a.gfp()
a2=a1===1
if(a2){if(0>=a1)return A.a(a0,0)
r=a0[0]
q=r.e
q===$&&A.b()
r=r.f
r===$&&A.b()
p=q*r}else{r=a.f
r===$&&A.b()
q=a.b.x
q===$&&A.b()
p=r*q}r=a.z
if(r==null||r===0)a.z=p
for(r=a.a,q=t.E,o=0;o<p;){for(n=0;n<a1;++n){if(!(n<a0.length))return A.a(a0,n)
a0[n].ay=0}a.db=0
if(a2){if(0>=a0.length)return A.a(a0,0)
m=a0[0]
l=0
for(;;){k=a.z
k.toString
if(!(l<k))break
q.a(s)
k=m.e
k===$&&A.b()
j=B.a.ac(o,k)
i=B.a.a6(o,k)
k=m.z
k=k>0?B.a.a6(j,k):j
h=m.r
h===$&&A.b()
a.dz(m,s,k*h+i);++o
if(a.ay!=null&&B.a.a6(o,m.e)===0)a.cS(B.a.ac(o,m.e));++l}}else{l=0
for(;;){k=a.z
k.toString
if(!(l<k))break
for(n=0;n<a1;++n){if(!(n<a0.length))return A.a(a0,n)
m=a0[n]
g=m.a
f=m.b
for(e=0;e<f;++e)for(d=0;d<g;++d)a.fA(m,s,o,e,d)}++o
if(a.ay!=null){k=a.f
k===$&&A.b()
k=B.a.a6(o,k)===0}else k=!1
if(k){k=a.f
k===$&&A.b()
a.cS(B.a.ac(o,k))}++l}}a.cx=a.CW=0
k=a.cy=!1
if(o>=p)break
c=J.e(r.a,r.d)
b=J.e(r.a,r.d+1)
if(c===255)if(b>=208?b<=215:k)r.d+=2
else break}if(a.ay!=null){if(a2){if(0>=a0.length)return A.a(a0,0)
a0=a0[0].f
a0===$&&A.b()}else{a0=a.b.x
a0===$&&A.b()}a.cS(a0)}},
cS(a){var s,r
while(s=this.ch,s<a){r=this.ay
r.toString
this.ch=s+1
r.$1(s)}},
cD(){var s,r,q=this,p=q.a,o=p.c
for(;;){if(!(q.cx<=24&&!q.cy))break
s=p.d
if(s>=o){q.cy=!0
break}r=J.e(p.a,s)
if(r===255){s=p.d
if(o-s<2||J.e(p.a,s+1)!==0){q.cy=!0
break}p.d+=2}else ++p.d
q.CW=(q.CW<<8|r)>>>0
q.cx+=8}},
bB(){var s=this,r=s.cx
if(r===0){s.cD()
r=s.cx
if(r===0)return null}--r
s.cx=r
return B.a.ad(s.CW,r)&1},
bK(a,b){var s,r,q,p,o,n,m=this
t.D.a(a)
if(m.cx<9)m.cD()
s=m.cx
if(s>=9){r=B.a.ad(m.CW,s-9)&511
if(!(r<b.length))return A.a(b,r)
q=b[r]
if(q!==0){m.cx=s-(q>>>8)
return q&255}}for(p=a;;){o=m.bB()
if(o==null)return null
if(o>>>0!==o||o>=2)return A.a(p,o)
n=p[o]
if(n instanceof A.cd)return n.a
if(!(n instanceof A.bs))return null
p=n.a}},
cP(a){var s=this,r=s.cx
if(r<a){s.cD()
r=s.cx
if(r<a){s.cx=0
return null}}r-=a
s.cx=r
return(B.a.ad(s.CW,r)&B.a.L(1,a)-1)>>>0},
bP(a){var s
if(a==null)return 0
if(a===1)return this.bB()===1?1:-1
s=this.cP(a)
if(s==null)return 0
if(s>=B.a.a_(1,a-1))return s
return s+B.a.L(-1,a)+1},
fq(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=a.Q
j===$&&A.b()
s=a.at
s===$&&A.b()
r=k.bK(j,s)
q=r===0?0:k.bP(r)
j=a.ay
j===$&&A.b()
j+=q
a.ay=j
b.$flags&2&&A.c(b)
s=b.length
if(!(c<s))return A.a(b,c)
b[c]=j
for(p=1;p<64;){j=a.as
j===$&&A.b()
o=a.ax
o===$&&A.b()
n=k.bK(j,o)
if(n==null)break
m=n&15
l=n>>>4
if(m===0){if(l<15)break
p+=16
continue}p+=l
m=k.bP(m)
j=$.fH()
if(!(p>=0&&p<j.length))return A.a(j,p)
j=c+j[p]
b.$flags&2&&A.c(b)
if(!(j<s))return A.a(b,j)
b[j]=m;++p}},
ft(a,b,c){var s,r,q,p=a.Q
p===$&&A.b()
s=a.at
s===$&&A.b()
r=this.bK(p,s)
q=r===0?0:B.a.L(this.bP(r),this.ax)
p=a.ay
p===$&&A.b()
p+=q
a.ay=p
b.$flags&2&&A.c(b)
if(!(c<b.length))return A.a(b,c)
b[c]=p},
fv(a,b,c){var s,r
if(!(c<b.length))return A.a(b,c)
s=b[c]
r=this.bB()
r.toString
r=B.a.L(r,this.ax)
b.$flags&2&&A.c(b)
b[c]=(s|r)>>>0},
fj(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.db
if(k>0){l.db=k-1
return}s=l.Q
r=l.as
for(k=l.ax;s<=r;){q=a.as
q===$&&A.b()
p=a.ax
p===$&&A.b()
p=l.bK(q,p)
p.toString
o=p&15
n=p>>>4
if(o===0){if(n<15){k=l.cP(n)
k.toString
l.db=k+B.a.L(1,n)-1
break}s+=16
continue}s+=n
q=$.fH()
if(!(s>=0&&s<q.length))return A.a(q,s)
q=c+q[s]
p=l.bP(o)
m=B.a.L(1,k)
b.$flags&2&&A.c(b)
if(!(q<b.length))return A.a(b,q)
b[q]=p*m;++s}},
fl(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.Q,i=k.as
A:for(s=b.length,r=k.ax,q=0;j<=i;){p=$.fH()
if(!(j>=0&&j<p.length))return A.a(p,j)
o=c+p[j]
p=k.dx
switch(p){case 0:p=a.as
p===$&&A.b()
n=a.ax
n===$&&A.b()
m=k.bK(p,n)
if(m==null)throw A.h(A.C("Invalid progressive encoding"))
l=m&15
q=m>>>4
if(l===0)if(q<15){p=k.cP(q)
p.toString
k.db=p+B.a.L(1,q)
k.dx=4}else{k.dx=1
q=16}else{if(l!==1)throw A.h(A.C("invalid ACn encoding"))
k.dy=k.bP(l)
k.dx=q!==0?2:3}continue A
case 1:case 2:if(!(o<s))return A.a(b,o)
n=b[o]
if(n!==0){p=k.bB()
p.toString
p=B.a.L(p,r)
b.$flags&2&&A.c(b)
b[o]=n+p}else{--q
if(q===0)k.dx=p===2?3:0}break
case 3:if(!(o<s))return A.a(b,o)
p=b[o]
if(p!==0){n=k.bB()
n.toString
n=B.a.L(n,r)
b.$flags&2&&A.c(b)
b[o]=p+n}else{p=k.dy
p===$&&A.b()
p=B.a.L(p,r)
b.$flags&2&&A.c(b)
b[o]=p
k.dx=0}break
case 4:if(!(o<s))return A.a(b,o)
p=b[o]
if(p!==0){n=k.bB()
n.toString
n=B.a.L(n,r)
b.$flags&2&&A.c(b)
b[o]=p+n}break}++j}if(k.dx===4)if(--k.db===0)k.dx=0},
fA(a,b,c,d,e){var s,r,q,p
t.E.a(b)
s=this.f
s===$&&A.b()
r=B.a.ac(c,s)*a.b+d
q=B.a.a6(c,s)*a.a+e
s=a.w
s===$&&A.b()
if(r<s){s=a.r
s===$&&A.b()
s=q>=s}else s=!0
if(s)return
s=a.z
s=s>0?B.a.a6(r,s):r
p=a.r
p===$&&A.b()
this.dz(a,b,s*p+q)},
dz(a,b,c){var s,r,q
t.E.a(b)
s=a.x
s===$&&A.b()
if(!a.y){b.$3(a,s,c<<6>>>0)
return}r=this.fr
if(!(c>=0&&c<s.length))return A.a(s,c)
q=s[c]
r.$flags&2&&A.c(r)
r[0]=q
b.$3(a,r,0)
q=r[0]
s.$flags&2&&A.c(s)
s[c]=q},
sis(a){this.ay=t.bK.a(a)}}
A.eT.prototype={
cX(a){var s,r=a.length,q=!0
if(r>=2){if(0>=r)return A.a(a,0)
if(a[0]===255){if(1>=r)return A.a(a,1)
r=a[1]!==216}else r=q}else r=q
if(r)return!1
try{r=A.h5().iK(a)
return r}catch(s){return!1}},
cq(a){return A.ej(new A.h7(this,a),t.c)},
cU(a){return A.ej(new A.h6(this,a),t.H)},
fw(a){var s,r=this.d
if(r==null)return null
s=A.h5()
s.a=this.a
s.b=1
return s.i4(r.a)}}
A.h7.prototype={
$0(){var s=this.b
this.a.d=A.F(s,!0,null,0)
return A.h5().iw(s)},
$S:14}
A.h6.prototype={
$0(){return this.a.fw(this.b)},
$S:4}
A.hq.prototype={}
A.cy.prototype={
ar(){return"PngDisposeMode."+this.b}}
A.dB.prototype={
ar(){return"PngBlendMode."+this.b}}
A.dC.prototype={}
A.eL.prototype={}
A.bb.prototype={
ar(){return"PngFilterType."+this.b}}
A.hu.prototype={
sT(a){this.a=A.v(a)},
sV(a){this.b=A.v(a)},
sM(a){this.w=t.di.a(a)},
siH(a){this.x=t.eg.a(a)},
gT(){return this.a},
gV(){return this.b}}
A.h0.prototype={}
A.f6.prototype={
cX(a){var s
if(a.length<8)return!1
for(s=0;s<8;++s)if(a[s]!==B.aP[s])return!1
return!0},
cq(a){return A.ej(new A.hp(this,a),t.c)},
hi(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.F(b4,!0,b2,0)
b1.e=b3
s=b3.aD(8)
for(r=0;r<8;++r)if(J.e(s.a,s.d+r)!==B.aP[r])return b2
for(b3=b1.a,q=b3.cy,p=t.t,o=b3.db,n=t.L,m=b1.b,l=b3.ax;;){k=b1.e
j=k.d-k.b
i=k.O()
h=b1.e.b6(4)
switch(h){case"tEXt":k=b1.e
g=k.aO(i)
k.d=k.d+(g.c-g.d)
f=g.a1()
e=f.length
for(r=0;r<e;++r)if(f[r]===0){k=r+1
l.j(0,B.ak.ep(new Uint8Array(f.subarray(0,A.fA(0,r,e)))),B.ak.ep(new Uint8Array(f.subarray(k,A.fA(k,b2,e)))))
break}b1.e.d+=4
break
case"pHYs":k=b1.e
g=k.aO(i)
k.d=k.d+(g.c-g.d)
d=A.r(g,0)
d.O()
d.O()
J.e(d.a,d.d++)
b1.e.d+=4
break
case"IHDR":k=b1.e
g=k.aO(i)
k.d=k.d+(g.c-g.d)
c=A.r(g,0)
b=c.a1()
b3.a=c.O()
k=c.O()
b3.b=k
A.eg(b3.a,k,m)
b3.c=J.e(c.a,c.d++)
b3.d=J.e(c.a,c.d++)
J.e(c.a,c.d++)
b3.f=J.e(c.a,c.d++)
b3.r=J.e(c.a,c.d++)
k=b3.d
if(!(k===0||k===2||k===3||k===4||k===6))return b2
if(b3.f!==0)return b2
switch(k){case 0:if(!B.e.ba(A.o([1,2,4,8,16],p),b3.c))return b2
break
case 2:if(!B.e.ba(A.o([8,16],p),b3.c))return b2
break
case 3:if(!B.e.ba(A.o([1,2,4,8],p),b3.c))return b2
break
case 4:if(!B.e.ba(A.o([8,16],p),b3.c))return b2
break
case 6:if(!B.e.ba(A.o([8,16],p),b3.c))return b2
break}if(b1.e.O()!==A.aP(n.a(b),A.aP(new A.aj(h),0)))throw A.h(A.C("Invalid "+h+" checksum"))
break
case"PLTE":k=b1.e
g=k.aO(i)
k.d=k.d+(g.c-g.d)
b3.sM(g.a1())
if(b1.e.O()!==A.aP(n.a(n.a(b3.w)),A.aP(new A.aj(h),0)))throw A.h(A.C("Invalid "+h+" checksum"))
break
case"tRNS":k=b1.e
g=k.aO(i)
k.d=k.d+(g.c-g.d)
b3.siH(g.a1())
a=b1.e.O()
k=b3.x
k.toString
if(a!==A.aP(n.a(k),A.aP(new A.aj(h),0)))throw A.h(A.C("Invalid "+h+" checksum"))
break
case"IEND":b1.e.d+=4
break
case"gAMA":if(i!==4)throw A.h(A.C("Invalid gAMA chunk"))
b1.e.O()
b1.e.d+=4
break
case"IDAT":B.e.N(o,j)
k=b1.e
k.d=(k.d+=i)+4
break
case"acTL":b1.e.O()
b1.e.O()
b1.e.d+=4
break
case"fcTL":b1.e.O()
a0=b1.e.O()
a1=b1.e.O()
b1.e.O()
b1.e.O()
b1.e.W()
b1.e.W()
k=b1.e
a2=J.e(k.a,k.d++)
k=b1.e
a3=J.e(k.a,k.d++)
if(!(a2>=0&&a2<3))return A.a(B.bI,a2)
if(!(a3>=0&&a3<2))return A.a(B.dQ,a3)
B.e.N(q,new A.eL(A.o([],p),a0,a1))
b1.e.d+=4
break
case"fdAT":b1.e.O()
B.e.N(B.e.gcj(q).y,j)
k=b1.e
k.d=(k.d+=i-4)+4
break
case"bKGD":k=b3.d
if(k===3){k=b1.e
a4=J.e(k.a,k.d++);--i
a5=a4*3
k=b3.w
a6=k.length
if(!(a5>=0&&a5<a6))return A.a(k,a5)
a7=k[a5]
a8=a5+1
if(!(a8<a6))return A.a(k,a8)
a9=k[a8]
a8=a5+2
if(!(a8<a6))return A.a(k,a8)
b0=k[a8]
k=b3.x
if(k!=null){k=B.c.ba(k,a4)?0:255
a6=new Uint8Array(4)
a6[0]=a7
a6[1]=a9
a6[2]=b0
a6[3]=k}else{k=new Uint8Array(3)
k[0]=a7
k[1]=a9
k[2]=b0}}else if(k===0||k===4){b1.e.W()
i-=2}else if(k===2||k===6){k=b1.e
k.W()
k.W()
k.W()
i-=24}if(i>0)b1.e.d+=i
b1.e.d+=4
break
case"iCCP":b3.Q=b1.e.ix()
k=b1.e
J.e(k.a,k.d++)
k=b3.Q
a6=b1.e
g=a6.aO(i-(k.length+2))
a6.d=a6.d+(g.c-g.d)
b3.at=g.a1()
b1.e.d+=4
break
case"cICP":k=b1.e
a6=k.d
if(i===4){a8=k.a
k.d=a6+1
J.e(a8,a6)
a6=b1.e
J.e(a6.a,a6.d++)
a6=b1.e
J.e(a6.a,a6.d++)
a6=b1.e
J.e(a6.a,a6.d++)}else k.d=a6+i
b1.e.d+=4
break
default:k=b1.e
k.d=(k.d+=i)+4
break}if(h==="IEND")break
k=b1.e
if(k.d>=k.c)return b2}return b3},
cU(a){return A.ej(new A.ho(this,a),t.H)},
hh(c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=this,b8=null,b9=b7.a,c0=b9.a,c1=b9.b,c2=b9.cy,c3=c2.length
if(c3===0||c4===0){m=A.o([],t.h)
c2=b9.db
l=c2.length
for(c3=t.L,k=0,j=0;j<l;++j){i=b7.e
i===$&&A.b()
if(!(j<c2.length))return A.a(c2,j)
i.d=c2[j]
h=i.O()
g=b7.e.b6(4)
i=b7.e
f=i.aO(h)
i.d=i.d+(f.c-f.d)
e=f.a1()
k+=e.length
B.e.N(m,e)
if(b7.e.O()!==A.aP(c3.a(e),A.aP(new A.aj(g),0)))throw A.h(A.C("Invalid "+g+" checksum"))}d=new Uint8Array(k)
for(c2=m.length,c=0,b=0;b<m.length;m.length===c2||(0,A.a0)(m),++b){e=m[b]
B.c.d4(d,c,e)
c+=e.length}}else{if(c4>=c3)throw A.h(A.C("Invalid Frame Number: "+c4))
if(!(c4<c3))return A.a(c2,c4)
a=c2[c4]
c0=a.b
c1=a.c
A.eg(c0,c1,b7.b)
m=A.o([],t.h)
for(c2=a.y,k=0,j=0;j<c2.length;++j){c3=b7.e
c3===$&&A.b()
c3.d=c2[j]
h=c3.O()
c3=b7.e
c3.b6(4)
c3.d+=4
c3=b7.e
f=c3.aO(h-4)
c3.d=c3.d+(f.c-f.d)
e=f.a1()
k+=e.length
B.e.N(m,e)}d=new Uint8Array(k)
for(c2=m.length,c=0,b=0;b<m.length;m.length===c2||(0,A.a0)(m),++b){e=m[b]
B.c.d4(d,c,e)
c+=e.length}}c2=b9.d
a0=1
if(!(c2===3))if(!(c2===0)){if(c2===4)c2=2
else c2=c2===6?4:3
a0=c2}c2=A.h_(d,B.D,b8,b8)
s=new A.db(new A.fn(new A.eJ(c2,B.M,!1,B.b3),0,new Uint8Array(65536),B.D),0,b8,B.D)
b7.d=b7.c=0
a1=b8
if(b9.d===3){c2=b9.w
if(c2!=null){c3=c2.length
a2=c3/3|0
a3=b9.x
i=a3!=null
a4=i?a3.length:0
a5=i?4:3
a1=new A.bB(new Uint8Array(a2*a5),a2,a5)
for(i=a5===4,j=0,a6=0;j<a2;++j,a6+=3){if(i&&j<a4){if(!(j<a3.length))return A.a(a3,j)
a7=a3[j]}else a7=255
if(!(a6<c3))return A.a(c2,a6)
a8=c2[a6]
a9=a6+1
if(!(a9<c3))return A.a(c2,a9)
a9=c2[a9]
b0=a6+2
if(!(b0<c3))return A.a(c2,b0)
a1.d6(j,a8,a9,c2[b0],a7)}}}if(b9.d===0&&b9.x!=null&&a1==null&&b9.c<=8){a3=b9.x
b1=a3.length
c2=b9.c
a2=B.a.a_(1,c2)
c3=a2*4
i=new Uint8Array(c3)
a1=new A.bB(i,a2,4)
if(c2===1)b2=255
else if(c2===2)b2=85
else{c2=c2===4?17:1
b2=c2}for(j=0;j<a2;++j){b3=j*b2
a1.d6(j,b3,b3,b3,255)}for(j=0;j<b1;j+=2){c2=a3[j]
a8=j+1
if(!(a8<b1))return A.a(a3,a8)
b4=(c2&255)<<8|a3[a8]&255
if(b4<a2){c2=b4*4+3
if(!(c2<c3))return A.a(i,c2)
i[c2]=0}}}c2=b9.c
if(c2===1)b5=B.F
else if(c2===2)b5=B.G
else{if(c2===4)c3=B.J
else c3=c2===16?B.u:B.k
b5=c3}c3=b9.d
if(c3===0&&b9.x!=null&&c2>8)a0=4
r=A.cp(b8,b8,b5,0,B.v,c1,b8,0,c3===2&&b9.x!=null?4:a0,a1,c0,!1)
q=b9.a
p=b9.b
b9.a=c0
b9.b=c1
o=c0
n=c1
b7.f=0
try{if(b9.r!==0){c2=o
if(typeof c2!=="number")return c2.aq()
c2=B.b.i(c2+7,3)
c3=n
if(typeof c3!=="number")return c3.aq()
b7.bn(s,r,0,0,8,8,c2,B.b.i(c3+7,3))
c3=o
if(typeof c3!=="number")return c3.aq()
c3=B.b.i(c3+3,3)
c2=n
if(typeof c2!=="number")return c2.aq()
b7.bn(s,r,4,0,8,8,c3,B.b.i(c2+7,3))
c2=o
if(typeof c2!=="number")return c2.aq()
c2=B.b.i(c2+3,2)
c3=n
if(typeof c3!=="number")return c3.aq()
b7.bn(s,r,0,4,4,8,c2,B.b.i(c3+3,3))
c3=o
if(typeof c3!=="number")return c3.aq()
c3=B.b.i(c3+1,2)
c2=n
if(typeof c2!=="number")return c2.aq()
b7.bn(s,r,2,0,4,4,c3,B.b.i(c2+3,2))
c2=o
if(typeof c2!=="number")return c2.aq()
c2=B.b.i(c2+1,1)
c3=n
if(typeof c3!=="number")return c3.aq()
b7.bn(s,r,0,2,2,4,c2,B.b.i(c3+1,2))
c3=o
if(typeof c3!=="number")return c3.bu()
c3=B.b.i(c3,1)
c2=n
if(typeof c2!=="number")return c2.aq()
b7.bn(s,r,1,0,2,2,c3,B.b.i(c2+1,1))
c2=n
if(typeof c2!=="number")return c2.bu()
b7.bn(s,r,0,1,1,2,o,B.b.i(c2,1))}else b7.hk(s,r)}catch(b6){c2=A.as(b6)
if(c2 instanceof A.en)return b8
else if(c2 instanceof A.a9)return b8
else if(c2 instanceof A.fv)return b8
else throw b6}finally{c2=s
if(c2.c===0&&c2.d==null){c2=c2.b
c2.d=new Uint8Array(0)
c2.e=c2.e+c2.f
c2.f=0
c2.w=!0}b9.sT(q)
b9.sV(p)}c2=b9.at
if(c2!=null)r.c=new A.b7(b9.Q,B.a6,c2)
b9=b9.ax
if(b9.a!==0)r.hR(b9)
return r},
gcM(){var s=this.a.d
if(s===4)s=2
else if(s===2)s=3
else s=s===6?4:1
return s},
bn(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(a4===0||a5===0)return
s=c.gcM()
r=c.a.c
q=s*r
p=B.a.i(q+7,3)
o=B.a.a0(q*a4+7,8)
n=r===8||r===16
m=A.o([0,0,0,0],t.t)
for(l=a1,k=null,j=null,i=0;i<a5;++i,l+=a3,++c.f,j=g){s=a.K()
if(!(s<5))return A.a(B.a0,s)
h=B.a0[s]
g=a.aD(o).a1()
s=g.length
if(s!==o)throw A.h(B.am)
c.e4(h,p,g,j)
if(n){c.eb(g,b,l,a0,a2,a4)
continue}c.d=c.c=0
f=new A.ad(g,0,Math.min(s,s),0,!0)
for(e=a0,d=0;d<a4;++d,e+=a2){c.dV(f,m)
s=b.a
k=s==null?null:s.U(e,l,k)
if(k==null)k=new A.K()
c.dY(k,m)}}},
hk(a,a0){var s,r,q,p,o,n,m,l=this,k=l.gcM(),j=l.a,i=j.c,h=k*i,g=j.a,f=j.b,e=B.a.a0(g*h+7,8),d=B.a.i(h+7,3),c=i===8||i===16,b=A.o([0,0,0,0],t.t)
k=a0.a
s=k.gB(k)
s.C()
for(r=null,q=0;q<f;++q,r=o){k=a.K()
if(!(k<5))return A.a(B.a0,k)
p=B.a0[k]
o=a.aD(e).a1()
k=o.length
if(k!==e)throw A.h(B.am)
l.e4(p,d,o,r)
if(c){l.eb(o,a0,q,0,1,g)
continue}l.d=l.c=0
n=new A.ad(o,0,Math.min(k,k),0,!0)
for(m=0;m<g;++m){l.dV(n,b)
l.dY(s.gJ(),b)
s.C()}}},
eb(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.gcM(),b=a3.a,a=b.c,a0=this.a,a1=a0.x
if(a0.c===8){s=J.Q(b.gu(b))
r=a4*a3.a.gam()+a5*a
q=a6*a
if(a===c){if(a6===1){B.c.ag(s,r,r+a7*c,a2)
return}for(b=a2.length,a0=s.$flags|0,p=0,o=0;p<a7;++p,r+=q)for(n=0;n<c;++n,o=l){m=r+n
l=o+1
if(!(o>=0&&o<b))return A.a(a2,o)
k=a2[o]
a0&2&&A.c(s)
if(!(m>=0&&m<s.length))return A.a(s,m)
s[m]=k}return}b=a1.length
if(0>=b)return A.a(a1,0)
a0=a1[0]
if(1>=b)return A.a(a1,1)
j=(a0&255)<<8|a1[1]&255
if(2>=b)return A.a(a1,2)
a0=a1[2]
if(3>=b)return A.a(a1,3)
i=(a0&255)<<8|a1[3]&255
if(4>=b)return A.a(a1,4)
a0=a1[4]
if(5>=b)return A.a(a1,5)
h=(a0&255)<<8|a1[5]&255
for(b=a2.length,a0=s.$flags|0,p=0,o=0;p<a7;++p,o+=3,r+=q){if(!(o<b))return A.a(a2,o)
g=a2[o]
m=o+1
if(!(m<b))return A.a(a2,m)
f=a2[m]
m=o+2
if(!(m<b))return A.a(a2,m)
e=a2[m]
a0&2&&A.c(s)
m=s.length
if(!(r>=0&&r<m))return A.a(s,r)
s[r]=g
k=r+1
if(!(k<m))return A.a(s,k)
s[k]=f
k=r+2
if(!(k<m))return A.a(s,k)
s[k]=e
k=r+3
d=g===j&&f===i&&e===h?0:255
if(!(k<m))return A.a(s,k)
s[k]=d}return}s=t.cV.a(b).d
r=(a4*a3.gT()+a5)*a
q=a6*a
if(a===c)for(b=a2.length,a0=s.$flags|0,p=0,o=0;p<a7;++p,r+=q)for(n=0;n<c;++n,o+=2){m=r+n
if(!(o>=0&&o<b))return A.a(a2,o)
k=a2[o]
d=o+1
if(!(d<b))return A.a(a2,d)
d=a2[d]
a0&2&&A.c(s)
if(!(m>=0&&m<s.length))return A.a(s,m)
s[m]=(k<<8|d)>>>0}else if(c===3){b=a1.length
if(0>=b)return A.a(a1,0)
a0=a1[0]
if(1>=b)return A.a(a1,1)
j=(a0&255)<<8|a1[1]&255
if(2>=b)return A.a(a1,2)
a0=a1[2]
if(3>=b)return A.a(a1,3)
i=(a0&255)<<8|a1[3]&255
if(4>=b)return A.a(a1,4)
a0=a1[4]
if(5>=b)return A.a(a1,5)
h=(a0&255)<<8|a1[5]&255
for(b=a2.length,a0=s.$flags|0,p=0,o=0;p<a7;++p,o+=6,r+=q){if(!(o<b))return A.a(a2,o)
m=a2[o]
k=o+1
if(!(k<b))return A.a(a2,k)
g=(m<<8|a2[k])>>>0
k=o+2
if(!(k<b))return A.a(a2,k)
k=a2[k]
m=o+3
if(!(m<b))return A.a(a2,m)
f=(k<<8|a2[m])>>>0
m=o+4
if(!(m<b))return A.a(a2,m)
m=a2[m]
k=o+5
if(!(k<b))return A.a(a2,k)
e=(m<<8|a2[k])>>>0
a0&2&&A.c(s)
k=s.length
if(!(r>=0&&r<k))return A.a(s,r)
s[r]=g
m=r+1
if(!(m<k))return A.a(s,m)
s[m]=f
m=r+2
if(!(m<k))return A.a(s,m)
s[m]=e
m=r+3
d=g===j&&f===i&&e===h?0:65535
if(!(m<k))return A.a(s,m)
s[m]=d}}else{b=a1.length
if(0>=b)return A.a(a1,0)
a0=a1[0]
if(1>=b)return A.a(a1,1)
i=(a0&255)<<8|a1[1]&255
for(b=a2.length,a0=s.$flags|0,p=0,o=0;p<a7;++p,o+=2,r+=q){if(!(o<b))return A.a(a2,o)
m=a2[o]
k=o+1
if(!(k<b))return A.a(a2,k)
f=(m<<8|a2[k])>>>0
a0&2&&A.c(s)
k=s.length
if(!(r>=0&&r<k))return A.a(s,r)
s[r]=f
m=r+1
if(!(m<k))return A.a(s,m)
s[m]=f
m=r+2
if(!(m<k))return A.a(s,m)
s[m]=f
m=r+3
d=f===i?0:65535
if(!(m<k))return A.a(s,m)
s[m]=d}}},
e4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.length,f=b<g?b:g
switch(a.a){case 0:break
case 1:for(s=c.$flags|0,r=b;r<g;++r){q=c[r]
p=r-b
if(!(p>=0))return A.a(c,p)
p=c[p]
s&2&&A.c(c)
c[r]=q+p}break
case 2:if(d!=null)for(s=d.length,q=c.$flags|0,r=0;r<g;++r){p=c[r]
if(!(r<s))return A.a(d,r)
o=d[r]
q&2&&A.c(c)
c[r]=p+o}break
case 3:if(d==null)for(s=c.$flags|0,r=b;r<g;++r){q=c[r]
p=r-b
if(!(p>=0))return A.a(c,p)
p=c[p]
s&2&&A.c(c)
c[r]=q+(p>>>1)}else{for(s=d.length,q=c.$flags|0,r=0;r<f;++r){if(!(r<g))return A.a(c,r)
p=c[r]
if(!(r<s))return A.a(d,r)
o=d[r]
q&2&&A.c(c)
c[r]=p+(o>>>1)}for(r=b;r<g;++r){p=c[r]
o=r-b
if(!(o>=0))return A.a(c,o)
o=c[o]
if(!(r<s))return A.a(d,r)
n=d[r]
q&2&&A.c(c)
c[r]=p+(o+n>>>1)}}break
case 4:if(d==null)for(s=c.$flags|0,r=b;r<g;++r){q=c[r]
p=r-b
if(!(p>=0))return A.a(c,p)
p=c[p]
s&2&&A.c(c)
c[r]=q+p}else{for(s=d.length,q=c.$flags|0,r=0;r<f;++r){if(!(r<g))return A.a(c,r)
p=c[r]
if(!(r<s))return A.a(d,r)
o=d[r]
q&2&&A.c(c)
c[r]=p+o}for(r=b;r<g;++r){p=r-b
if(!(p>=0))return A.a(c,p)
m=c[p]
if(!(r<s))return A.a(d,r)
l=d[r]
if(!(p<s))return A.a(d,p)
k=d[p]
j=l-k
i=m-k
h=j+i
if(j<0)j=-j
if(i<0)i=-i
if(h<0)h=-h
p=c[r]
if(j<=i&&j<=h)o=m
else o=i<=h?l:k
q&2&&A.c(c)
c[r]=p+o}}break}},
aY(a,b){var s,r,q,p,o,n=this
if(b===0)return 0
if(b===8)return a.K()
if(b===16)return a.W()
for(s=a.c;r=n.d,r<b;){r=a.d
if(r>=s)throw A.h(A.C("Invalid PNG data."))
q=a.a
a.d=r+1
p=J.e(q,r)
r=n.d
n.c=B.a.a_(p,r)
n.d=r+8}if(b===1)o=1
else if(b===2)o=3
else{if(b===4)s=15
else s=0
o=s}s=r-b
r=B.a.ad(n.c,s)
n.d=s
return r&o},
dV(a,b){var s,r,q=this
t.L.a(b)
s=q.a
r=s.d
switch(r){case 0:B.e.j(b,0,q.aY(a,s.c))
return
case 2:B.e.j(b,0,q.aY(a,s.c))
B.e.j(b,1,q.aY(a,s.c))
B.e.j(b,2,q.aY(a,s.c))
return
case 3:B.e.j(b,0,q.aY(a,s.c))
return
case 4:B.e.j(b,0,q.aY(a,s.c))
B.e.j(b,1,q.aY(a,s.c))
return
case 6:B.e.j(b,0,q.aY(a,s.c))
B.e.j(b,1,q.aY(a,s.c))
B.e.j(b,2,q.aY(a,s.c))
B.e.j(b,3,q.aY(a,s.c))
return}throw A.h(A.C("Invalid color type: "+r+"."))},
dY(a,b){var s,r,q,p,o,n,m,l,k,j
t.L.a(b)
s=this.a
r=s.d
switch(r){case 0:r=s.x
if(r!=null&&s.c>8){s=r.length
if(0>=s)return A.a(r,0)
q=r[0]
if(1>=s)return A.a(r,1)
r=r[1]
p=b[0]
a.a7(p,p,p,p!==((q&255)<<8|r&255)?a.gE():0)
return}a.ao(b[0],0,0)
return
case 2:o=b[0]
p=b[1]
n=b[2]
s=s.x
if(s!=null){r=s.length
if(0>=r)return A.a(s,0)
q=s[0]
if(1>=r)return A.a(s,1)
m=s[1]
if(2>=r)return A.a(s,2)
l=s[2]
if(3>=r)return A.a(s,3)
k=s[3]
if(4>=r)return A.a(s,4)
j=s[4]
if(5>=r)return A.a(s,5)
s=s[5]
if(o!==((q&255)<<8|m&255)||p!==((l&255)<<8|k&255)||n!==((j&255)<<8|s&255)){a.a7(o,p,n,a.gE())
return}}a.ao(o,p,n)
return
case 3:a.sD(b[0])
return
case 4:a.a7(b[0],0,0,b[1])
return
case 6:a.a7(b[0],b[1],b[2],b[3])
return}throw A.h(A.C("Invalid color type: "+r+"."))}}
A.hp.prototype={
$0(){return this.a.hi(this.b)},
$S:14}
A.ho.prototype={
$0(){return this.a.hh(this.b)},
$S:4}
A.fv.prototype={}
A.f7.prototype={
ar(){return"PngFilter."+this.b}}
A.hr.prototype={
bi(a){var s,r,q,p,o,n,m=this,l=8192,k={},j=a.a
j=j==null?null:j.gaS()
if(!(j===!0&&a.gG()!==B.u))j=a.gak()<8&&!a.gbl()&&a.gbd()>1
else j=!0
if(j)a=a.hZ(B.k)
if(m.w==null){j=A.bA(!0,l)
m.w=j
j.b9(A.o([137,80,78,71,13,10,26,10],t.t))
s=A.bA(!0,l)
s.b0(a.gT())
s.b0(a.gV())
s.P(a.gak())
if(a.gbl())j=3
else if(a.gbd()===1)j=0
else if(a.gbd()===2)j=4
else j=a.gbd()===3?2:6
s.P(j)
s.P(0)
s.P(0)
s.P(0)
j=m.w
j.toString
m.aZ(j,"IHDR",J.O(B.c.gu(s.c),0,s.a))
j=a.c
if(j!=null){s=A.bA(!0,l)
s.b9(new A.aj(A.mv(j.a)))
s.P(0)
s.P(0)
s.b9(j.hY())
j=m.w
j.toString
m.aZ(j,"iCCP",J.O(B.c.gu(s.c),0,s.a))}if(a.gbl()){j=m.a
if(j!=null){j=j.a
j===$&&A.b()
m.ea(j)}else{j=a.a
j=j==null?null:j.gM()
j.toString
m.ea(j)}}if(m.r){s=A.bA(!0,l)
j=m.e
j===$&&A.b()
s.b0(j)
s.b0(m.c)
j=m.w
j.toString
m.aZ(j,"acTL",J.O(B.c.gu(s.c),0,s.a))}}j=a.d
if(j!=null)for(j=new A.T(j,j.r,j.e,A.j(j).k("T<1>"));j.C();){r=j.d
q=a.d.m(0,r)
q.toString
s=new A.f3(!0,new Uint8Array(8192))
s.b9(B.al.bE(r))
s.P(0)
s.b9(B.al.bE(q))
r=m.w
r.toString
m.aZ(r,"tEXt",J.O(B.c.gu(s.c),0,s.a))}if(m.r){s=A.bA(!0,l)
s.b0(m.f)
s.b0(a.gT())
s.b0(a.gV())
s.b0(0)
s.b0(0)
s.eF(a.y)
s.eF(1000)
s.P(1)
s.P(0)
j=m.w
j.toString
m.aZ(j,"fcTL",J.O(B.c.gu(s.c),0,s.a));++m.f}p=m.f<=1
o=p?0:4
s=new Uint8Array(o+65536)
k.a=o
k.b=0
j=new A.ht(k,m,p,s,o)
r=m.d
q=new A.hs(k,s,j)
n=A.bA(!1,(a.a.gam()+1)*a.gV())
m.fN(0,a,new A.hq(r,q,n))
q.$1(B.an.eq(t.L.a(J.O(B.c.gu(n.c),0,n.a)),r,15))
if(k.a>o||k.b===0)j.$0()},
ib(){var s,r=this,q=r.w
if(q==null)return null
r.aZ(q,"IEND",A.o([],t.t))
r.f=0
q=r.w
s=J.O(B.c.gu(q.c),0,q.a)
r.w=null
return s},
i5(a,b){var s,r,q,p,o,n,m=this
if(a.gT()<1||a.gV()<1||a.a==null)A.Y(A.C("Cannot encode an empty image"))
s=a.gaa().length
if(s<=1){m.e=1
m.r=!1
m.bi(a)}else{s=a.gaa().length
m.e=s
m.r=s>1
m.c=a.r
if(a.gbl()){s=new Int32Array(256)
r=new Int32Array(0)
q=new Int32Array(65536)
p=new A.f1(s,r,q,new Uint16Array(65536))
p.fZ(256)
p.ec(a)
m.a=p
for(s=a.gaa(),r=s.length,o=0;o<s.length;s.length===r||(0,A.a0)(s),++o){n=s[o]
if(n!==a)p.ec(n)}}for(s=a.gaa(),r=s.length,o=0;o<s.length;s.length===r||(0,A.a0)(s),++o){n=s[o]
q=m.a
if(q!=null)m.bi(q.eG(n))
else m.bi(n)}}s=m.ib()
s.toString
return s},
ea(a){var s,r,q,p=this
if(a.gG()===B.k&&a.b===3&&a.a===256){s=p.w
s.toString
p.aZ(s,"PLTE",J.O(a.gu(a),0,null))}else{s=a.a
r=A.bA(!0,s*3)
for(q=0;q<s;++q){r.P(B.b.h(a.c0(q)))
r.P(B.b.h(a.bZ(q)))
r.P(B.b.h(a.bY(q)))}s=p.w
s.toString
p.aZ(s,"PLTE",J.O(B.c.gu(r.c),0,r.a))}if(a.b===4){s=a.a
r=A.bA(!0,s)
for(q=0;q<s;++q)r.P(B.b.h(a.bX(q)))
s=p.w
s.toString
p.aZ(s,"tRNS",J.O(B.c.gu(r.c),0,r.a))}},
aZ(a,b,c){t.L.a(c)
a.b0(c.length)
a.b9(new A.aj(b))
a.b9(c)
a.b0(A.aP(c,A.aP(new A.aj(b),0)))},
fN(a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a8.gbl()?B.hQ:this.b,a=a8.gu(0),a0=a8.a.gam(),a1=a8.gbl()?1:a8.gbd(),a2=a1*a8.gak()+7>>>3,a3=a8.gak()+7>>>3,a4=new Uint8Array(a0),a5=[a4,new Uint8Array(a0)],a6=a5[1]
a4=a0+1
s=new Uint8Array(a4)
r=b.a
if(0>=a4)return A.a(s,0)
s[0]=r
q=a9.c
p=a3>1
o=J.bj(a)
n=a3-1
m=0
l=0
for(;;){k=a8.a
k=k==null?null:k.b
if(!(l<(k==null?0:k)))break
j=o.bR(a,m,a0)
i=a5[l&1]
if(p)for(k=j.length,h=i.$flags|0,g=0;g<a0;g+=a3)for(f=n,e=0;e<a3;++e,--f){d=g+e
c=g+f
if(!(c>=0&&c<k))return A.a(j,c)
c=j[c]
h&2&&A.c(i)
if(!(d<i.length))return A.a(i,d)
i[d]=c}else B.c.ag(i,0,a0,j)
switch(r){case 0:B.c.ag(s,1,a4,i)
break
case 1:A.mt(i,a2,s)
break
case 2:A.mu(i,a6,s)
break
case 3:A.mr(i,a6,a2,s)
break
case 4:A.ms(i,a6,a2,s)
break}q.b9(s);++l
m+=a0
a6=i}}}
A.ht.prototype={
$0(){var s,r,q=this,p=q.b,o=q.d,n=q.a
if(q.c){s=p.w
s.toString
p.aZ(s,"IDAT",J.O(B.c.gu(o),0,n.a))}else{s=p.f
o.$flags&2&&A.c(o)
r=o.length
if(0>=r)return A.a(o,0)
o[0]=s>>>24&255
if(1>=r)return A.a(o,1)
o[1]=s>>>16&255
if(2>=r)return A.a(o,2)
o[2]=s>>>8&255
if(3>=r)return A.a(o,3)
o[3]=s&255
p.f=s+1
s=p.w
s.toString
p.aZ(s,"fdAT",J.O(B.c.gu(o),0,n.a))}n.a=q.e;++n.b},
$S:2}
A.hs.prototype={
$1(a){var s,r,q,p,o,n,m,l
for(s=a.length,r=this.a,q=this.b,p=q.length,o=this.c,n=0;n<s;){m=r.a
l=Math.min(s-n,p-m)
B.c.X(q,m,m+l,a,n)
n+=l
if((r.a+=l)===p)o.$0()}},
$S:26}
A.hD.prototype={
bS(){var s,r=this.a,q=r.b7()
if((q&1)!==0)return!1
if((q>>>1&7)>3)return!1
if((q>>>4&1)===0)return!1
this.f.d=q>>>5
if(r.b7()!==2752925)return!1
s=this.b
s.a=r.W()
s.b=r.W()
return!0},
bp(){var s,r,q,p,o=this,n=null
if(!o.fU())return n
s=o.b
r=s.a
o.d=A.cp(n,n,B.k,0,B.v,s.b,n,0,4,n,r,!1)
o.fY()
if(!o.h9())return n
r=s.w
if(r.length!==0){q=A.F(new A.aj(r),!1,n,0)
r=o.d
r.toString
r.e=A.jP(q)}p=s.r
if(p!=null)o.d.c=new A.b7("ICC_PROFILE",B.a5,p)
return o.d},
fU(){var s,r,q,p,o=this
if(!o.bS())return!1
o.fr=A.nt()
for(s=o.dy,r=0;r<4;++r){q=new Int32Array(2)
p=new Int32Array(2)
B.e.j(s,r,new A.fj(q,p,new Int32Array(2)))}o.y=o.Q=0
s=o.b
q=s.a
o.z=q
s=s.b
o.as=s
o.at=q+15>>>4
o.ax=s+15>>>4
o.k1=0
s=o.a
q=o.f
p=q.d
p===$&&A.b()
p=A.ko(s.aO(p))
o.c=p
s.d+=q.d
p.R(1)
o.c.R(1)
o.hf(o.x,o.fr)
o.h8()
if(!o.hb(s))return!1
o.hd()
o.c.R(1)
o.hc()
return!0},
hf(a,b){var s,r,q,p=this,o=p.c
o===$&&A.b()
o=o.R(1)!==0
a.a=o
if(o){a.b=p.c.R(1)!==0
if(p.c.R(1)!==0){a.c=p.c.R(1)!==0
for(o=a.d,s=0;s<4;++s){if(p.c.R(1)!==0){r=p.c
q=r.R(7)
r=r.R(1)===1?-q:q}else r=0
o.$flags&2&&A.c(o)
o[s]=r}for(o=a.e,s=0;s<4;++s){if(p.c.R(1)!==0){r=p.c
q=r.R(6)
r=r.R(1)===1?-q:q}else r=0
o.$flags&2&&A.c(o)
o[s]=r}}if(a.b)for(s=0;s<3;++s){o=b.a
r=p.c.R(1)!==0?p.c.R(8):255
o.$flags&2&&A.c(o)
o[s]=r}}else a.b=!1
return!0},
h8(){var s,r,q,p=this,o=p.w,n=p.c
n===$&&A.b()
o.a=n.R(1)!==0
o.b=p.c.R(6)
o.c=p.c.R(3)
n=p.c.R(1)!==0
o.d=n
if(n)if(p.c.R(1)!==0){for(n=o.e,s=0;s<4;++s)if(p.c.R(1)!==0){r=p.c
q=r.R(6)
r=r.R(1)===1?-q:q
n.$flags&2&&A.c(n)
n[s]=r}for(n=o.f,s=0;s<4;++s)if(p.c.R(1)!==0){r=p.c
q=r.R(6)
r=r.R(1)===1?-q:q
n.$flags&2&&A.c(n)
n[s]=r}}if(o.b===0)n=0
else n=o.a?1:2
p.af=n
return!0},
hb(a){var s,r,q,p,o,n,m,l=a.c-a.d,k=this.c
k===$&&A.b()
k=B.a.L(1,k.R(2))
this.cy=k
s=k-1
r=s*3
if(l<r)return!1
for(k=this.db,q=0,p=0;p<s;++p,r=n){o=a.cr(3,q)
n=r+((J.e(o.a,o.d)|J.e(o.a,o.d+1)<<8|J.e(o.a,o.d+2)<<16)>>>0)
if(n>l)n=l
m=new A.dM(a.bm(n-r,r))
m.b=254
m.c=0
m.d=-8
B.e.j(k,p,m)
q+=3}B.e.j(k,s,A.ko(a.bm(l-r,a.d-a.b+r)))
return r<l},
hd(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.c
e===$&&A.b()
s=e.R(7)
r=f.c.R(1)!==0?f.c.bH(4):0
q=f.c.R(1)!==0?f.c.bH(4):0
p=f.c.R(1)!==0?f.c.bH(4):0
o=f.c.R(1)!==0?f.c.bH(4):0
n=f.c.R(1)!==0?f.c.bH(4):0
m=f.x
for(e=f.dy,l=m.d,k=0;k<4;++k){if(m.a){j=l[k]
if(!m.c)j+=s}else{if(k>0){i=e[0]
if(!(k>=0&&k<4))return A.a(e,k)
e[k]=i
continue}j=s}h=e[k]
i=h.a
g=j+r
if(g<0)g=0
else if(g>127)g=127
g=B.aa[g]
i.$flags&2&&A.c(i)
i[0]=g
if(j<0)g=0
else g=j>127?127:j
i[1]=B.ab[g]
g=h.b
i=j+q
if(i<0)i=0
else if(i>127)i=127
i=B.aa[i]
g.$flags&2&&A.c(g)
g[0]=i*2
i=j+p
if(i<0)i=0
else if(i>127)i=127
g[1]=B.ab[i]*101581>>>16
if(g[1]<8)g[1]=8
i=h.c
g=j+o
if(g<0)g=0
else if(g>117)g=117
g=B.aa[g]
i.$flags&2&&A.c(i)
i[0]=g
g=j+n
if(g<0)g=0
else if(g>127)g=127
i[1]=B.ab[g]}},
hc(){var s,r,q,p,o,n,m=this,l=m.fr
for(s=0;s<4;++s)for(r=0;r<8;++r)for(q=0;q<3;++q)for(p=0;p<11;++p){o=m.c
o===$&&A.b()
n=o.Z(B.fM[s][r][q][p])!==0?m.c.R(8):B.c3[s][r][q][p]
o=l.b
if(!(s<o.length))return A.a(o,s)
o=o[s]
if(!(r<o.length))return A.a(o,r)
o=o[r].a
if(!(q<o.length))return A.a(o,q)
o=o[q]
o.$flags&2&&A.c(o)
o[p]=n}o=m.c
o===$&&A.b()
o=o.R(1)!==0
m.fx=o
if(o)m.fy=m.c.R(8)},
hj(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.af
f.toString
if(f>0){s=g.w
for(f=s.e,r=s.f,q=g.x,p=q.e,o=0;o<4;++o){if(q.a){n=p[o]
if(!q.c){m=s.b
m.toString
n+=m}}else n=s.b
for(l=0;l<=1;++l){m=g.b3
m===$&&A.b()
if(!(o<m.length))return A.a(m,o)
k=m[o][l]
m=s.d
m===$&&A.b()
if(m){n.toString
j=n+f[0]
if(l!==0)j+=r[0]}else j=n
j.toString
if(j<0)j=0
else if(j>63)j=63
if(j>0){m=s.c
m===$&&A.b()
if(m>0){i=m>4?B.a.i(j,2):B.a.i(j,1)
h=9-m
if(i>h)i=h}else i=j
if(i<1)i=1
k.b=i
k.a=2*j+i
if(j>=40)m=2
else m=j>=15?1:0
k.d=m}else k.a=0
k.c=l!==0}}}},
fY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.b,c=d.at
if(c!=null)f.bb=c
c=t.e6
s=J.aM(4,c)
for(r=t.ao,q=0;q<4;++q)s[q]=A.o([new A.b_(),new A.b_()],r)
f.b3=t.gS.a(s)
r=f.at
r.toString
s=J.aM(r,t.dE)
for(p=0;p<r;++p){o=new Uint8Array(16)
n=new Uint8Array(8)
s[p]=new A.dQ(o,n,new Uint8Array(8))}f.k2=t.cC.a(s)
f.ok=new Uint8Array(832)
r=f.at
r.toString
f.go=new Uint8Array(4*r)
o=f.p4=16*r
r=8*r
f.R8=r
n=f.af
n.toString
if(!(n<3))return A.a(B.x,n)
m=B.x[n]
l=m*o
k=(m/2|0)*r
f.p1=A.F(new Uint8Array(16*o+l),!1,e,l)
r=f.R8
r.toString
f.p2=A.F(new Uint8Array(8*r+k),!1,e,k)
r=f.R8
r.toString
f.p3=A.F(new Uint8Array(8*r+k),!1,e,k)
r=d.a
f.RG=A.F(new Uint8Array(r),!1,e,0)
j=d.a+1>>>1
f.rx=A.F(new Uint8Array(j),!1,e,0)
f.ry=A.F(new Uint8Array(j),!1,e,0)
d=f.af
d.toString
if(!(d<3))return A.a(B.x,d)
i=B.x[d]
if(d===2)f.ch=f.ay=0
else{d=B.a.a0(f.y-i,16)
f.ay=d
r=B.a.a0(f.Q-i,16)
f.ch=r
if(d<0)f.ay=0
if(r<0)f.ch=0}d=B.a.a0(f.as+15+i,16)
f.cx=d
r=B.a.a0(f.z+15+i,16)
f.CW=r
o=f.at
o.toString
if(r>o)f.CW=o
r=f.ax
r.toString
if(d>r)f.cx=r
h=o+1
s=J.aM(h,t.ai)
for(p=0;p<h;++p)s[p]=new A.dO()
f.k3=t.eQ.a(s)
d=f.at
d.toString
s=J.aM(d,t.cP)
for(p=0;p<d;++p){r=new Int16Array(384)
s[p]=new A.dP(r,new Uint8Array(16))}f.b2=t.db.a(s)
d=f.at
d.toString
s=J.aM(d,t.fD)
for(p=0;p<d;++p)s[p]=new A.b_()
f.k4=c.a(s)
f.hj()
d=$.jt()
c=$.ju()
r=$.jv()
o=$.jw()
n=$.iM()
g=new Int32Array(16)
A.mU()
f.e=new A.hE(d,c,r,o,n,g)
return!0},
h9(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.y2=0
s=e.id
r=e.x
q=e.db
p=0
for(;;){o=e.cx
o.toString
if(!(p<o))break
o=e.cy
o===$&&A.b()
o=(p&o-1)>>>0
if(!(o>=0&&o<8))return A.a(q,o)
n=q[o]
for(;;){p=e.y1
o=e.at
o.toString
if(!(p<o))break
o=e.k3
o===$&&A.b()
m=o.length
if(0>=m)return A.a(o,0)
l=o[0]
k=1+p
if(!(k<m))return A.a(o,k)
j=o[k]
k=e.b2
k===$&&A.b()
if(!(p<k.length))return A.a(k,p)
i=k[p]
if(r.b){p=e.c
p===$&&A.b()
p=p.Z(e.fr.a[0])
o=e.c
m=e.fr
e.k1=p===0?o.Z(m.a[1]):2+o.Z(m.a[2])}p=e.fx
p===$&&A.b()
if(p){p=e.c
p===$&&A.b()
o=e.fy
o===$&&A.b()
h=p.Z(o)!==0}else h=!1
e.ha()
if(!h)h=e.he(j,n)
else{l.a=j.a=0
p=i.b
p===$&&A.b()
if(!p)l.b=j.b=0
i.f=i.e=0}p=e.af
p.toString
if(p>0){p=e.b3
p===$&&A.b()
o=e.k1
o===$&&A.b()
if(!(o<p.length))return A.a(p,o)
o=p[o]
p=i.b
p===$&&A.b()
g=o[p?1:0]
o=e.k4
o===$&&A.b()
m=e.y1
if(!(m<o.length))return A.a(o,m)
m=o[m]
m.a=g.a
m.b=g.b
m.d=g.d
m.c=g.c||!h}++e.y1}p=e.k3
p===$&&A.b()
if(0>=p.length)return A.a(p,0)
p=p[0]
p.b=p.a=0
B.c.al(s,0,4,0)
e.y1=0
e.hD()
p=e.af
p.toString
f=!1
if(p>0){p=e.y2
o=e.ch
o===$&&A.b()
if(p>=o){o=e.cx
o.toString
o=p<=o
f=o}}if(!e.fP(f))return!1
p=++e.y2}return!0},
hD(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.y2,b1=a9.ok
b1===$&&A.b()
s=A.F(b1,!1,null,40)
r=A.F(b1,!1,null,584)
q=A.F(b1,!1,null,600)
p=a9.p1
p===$&&A.b()
o=t.p
n=o.a(p.a)
p=a9.p2
p===$&&A.b()
m=o.a(p.a)
p=a9.p3
p===$&&A.b()
l=o.a(p.a)
p=a9.p4
p.toString
o=a9.R8
o.toString
k=b0>0
j=b1.$flags|0
i=0
for(;;){h=a9.at
h.toString
if(!(i<h))break
h=a9.b2
h===$&&A.b()
if(!(i<h.length))return A.a(h,i)
g=h[i]
if(i>0){for(f=-1;f<16;++f){h=40+f*32
A.af(b1,h-4,b1,h+12,4)}for(f=-1;f<8;++f){h=f*32
e=584+h
A.af(b1,e-4,b1,e+4,4)
h=600+h
A.af(b1,h-4,b1,h+4,4)}}else{for(f=0;f<16;++f){h=40+f*32-1
j&2&&A.c(b1)
if(!(h<832))return A.a(b1,h)
b1[h]=129}for(f=0;f<8;++f){h=f*32
e=584+h-1
j&2&&A.c(b1)
if(!(e<832))return A.a(b1,e)
b1[e]=129
h=600+h-1
if(!(h<832))return A.a(b1,h)
b1[h]=129}if(k){j&2&&A.c(b1)
b1[567]=129
b1[551]=129
b1[7]=129}}h=a9.k2
h===$&&A.b()
if(!(i<h.length))return A.a(h,i)
d=h[i]
c=g.a
b=g.e
if(k){A.af(b1,8,d.a,0,16)
A.af(b1,552,d.b,0,8)
A.af(b1,568,d.c,0,8)}else if(i===0){B.c.al(b1,7,28,127)
B.c.al(b1,551,560,127)
B.c.al(b1,567,576,127)}h=g.b
h===$&&A.b()
if(h){if(k){h=a9.at
h.toString
if(i>=h-1)B.c.al(b1,24,28,d.a[15])
else{h=a9.k2
e=i+1
if(!(e<h.length))return A.a(h,e)
A.af(b1,24,h[e].a,0,4)}}A.af(b1,152,b1,24,4)
A.af(b1,280,b1,24,4)
A.af(b1,408,b1,24,4)
for(h=g.c,a=0;a<16;++a,b=b<<2>>>0){a0=A.r(s,B.aW[a])
e=h[a]
if(!(e<10))return A.a(B.aM,e)
B.aM[e].$1(a0)
b.toString
e=a*16
a9.dA(b,new A.ad(c,e,Math.min(384,384),e,!1),a0)}}else{h=A.kq(i,b0,g.c[0])
h.toString
if(!(h<7))return A.a(B.aV,h)
B.aV[h].$1(s)
if(b!==0)for(a=0;a<16;++a,b=b<<2>>>0){a0=A.r(s,B.aW[a])
b.toString
h=a*16
a9.dA(b,new A.ad(c,h,Math.min(384,384),h,!1),a0)}}h=g.f
h===$&&A.b()
e=A.kq(i,b0,g.d)
e.toString
if(!(e<7))return A.a(B.ad,e)
B.ad[e].$1(r)
B.ad[e].$1(q)
e=Math.min(384,384)
a1=new A.ad(c,256,e,256,!1)
if((h&255)!==0){a2=a9.e
if((h&170)!==0){a2===$&&A.b()
a2.b8(a1,r)
a2.b8(A.r(a1,16),A.r(r,4))
a3=A.r(a1,32)
a4=A.r(r,128)
a2.b8(a3,a4)
a2.b8(A.r(a3,16),A.r(a4,4))}else{a2===$&&A.b()
a2.ez(a1,r)}}a5=new A.ad(c,320,e,320,!1)
h=h>>>8
if((h&255)!==0){e=a9.e
if((h&170)!==0){e===$&&A.b()
e.b8(a5,q)
e.b8(A.r(a5,16),A.r(q,4))
h=A.r(a5,32)
a2=A.r(q,128)
e.b8(h,a2)
e.b8(A.r(h,16),A.r(a2,4))}else{e===$&&A.b()
e.ez(a5,q)}}h=a9.ax
h.toString
if(b0<h-1){A.af(d.a,0,b1,520,16)
A.af(d.b,0,b1,808,8)
A.af(d.c,0,b1,824,8)}a6=a9.p1.d+i*16
h=i*8
a7=a9.p2.d+h
a8=a9.p3.d+h
for(f=0;f<16;++f)A.af(n,a6+f*p,b1,40+f*32,16)
for(f=0;f<8;++f){h=f*o
e=f*32
A.af(m,a7+h,b1,584+e,8)
A.af(l,a8+h,b1,600+e,8)}++i}},
dA(a,b,c){var s,r,q,p,o,n
switch(a>>>30){case 3:s=this.e
s===$&&A.b()
s.iG(b,c,!1)
break
case 2:this.e===$&&A.b()
r=J.e(b.a,b.d)+4
q=A.hG(J.e(b.a,b.d+4),35468)
p=A.hG(J.e(b.a,b.d+4),85627)
o=A.hG(J.e(b.a,b.d+1),35468)
n=A.hG(J.e(b.a,b.d+1),85627)
A.hI(c,0,r+p,n,o)
A.hI(c,1,r+q,n,o)
A.hI(c,2,r-q,n,o)
A.hI(c,3,r-p,n,o)
break
case 1:s=this.e
s===$&&A.b()
s.bW(b,c)
break
default:break}},
fH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.p4
d.toString
s=e.k4
s===$&&A.b()
if(!(a>=0&&a<s.length))return A.a(s,a)
r=s[a]
s=e.p1
s===$&&A.b()
q=t.p
p=q.a(s.a)
o=s.d+a*16
n=r.a
if(n===0)return
if(e.af===1){if(a>0){s=e.e
s===$&&A.b()
s.d7(p,o,d,n+4)}if(r.c){s=e.e
s===$&&A.b()
s.eK(p,o,d,n)}if(b>0){s=e.e
s===$&&A.b()
s.d8(p,o,d,n+4)}if(r.c){s=e.e
s===$&&A.b()
s.eL(p,o,d,n)}}else{m=r.b
s=e.R8
s.toString
l=e.p2
l===$&&A.b()
k=q.a(l.a)
j=a*8
i=l.d+j
l=e.p3
l===$&&A.b()
h=q.a(l.a)
g=l.d+j
f=r.d
if(a>0){q=e.e
q===$&&A.b()
l=n+4
q.bz(p,o,1,d,16,l,m,f)
q.bz(k,i,1,s,8,l,m,f)
q.bz(h,g,1,s,8,l,m,f)}if(r.c){q=e.e
q===$&&A.b()
q.ie(p,o,d,n,m,f)
q.by(k,i+4,1,s,8,n,m,f)
q.by(h,g+4,1,s,8,n,m,f)}if(b>0){q=e.e
q===$&&A.b()
l=n+4
q.bz(p,o,d,1,16,l,m,f)
q.bz(k,i,s,1,8,l,m,f)
q.bz(h,g,s,1,8,l,m,f)}if(r.c){q=e.e
q===$&&A.b()
q.iJ(p,o,d,n,m,f)
d=4*s
q.by(k,i+d,s,1,8,n,m,f)
q.by(h,g+d,s,1,8,n,m,f)}}},
fO(){var s,r=this,q=r.ay
q===$&&A.b()
s=q
for(;;){q=r.CW
q.toString
if(!(s<q))break
r.fH(s,r.y2);++s}},
fP(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.af
a0.toString
if(!(a0<3))return A.a(B.x,a0)
s=B.x[a0]
a0=a.p4
a0.toString
r=s*a0
a0=a.R8
a0.toString
q=(s/2|0)*a0
a0=a.p1
a0===$&&A.b()
p=-r
o=A.r(a0,p)
a0=a.p2
a0===$&&A.b()
n=-q
m=A.r(a0,n)
a0=a.p3
a0===$&&A.b()
l=A.r(a0,n)
k=a.y2
a0=a.cx
a0.toString
j=k*16
i=(k+1)*16
if(a1)a.fO()
if(k!==0){j-=s
a.to=A.r(o,0)
a.x1=A.r(m,0)
a.x2=A.r(l,0)}else{a.to=A.r(a.p1,0)
a.x1=A.r(a.p2,0)
a.x2=A.r(a.p3,0)}a0=k<a0-1
if(a0)i-=s
h=a.as
if(i>h)i=h
a.xr=null
if(a.bb!=null&&j<i){g=a.xr=a.fB(j,i-j)
if(g==null)return!1}else g=null
f=a.Q
if(j<f){e=f-j
d=a.to
d===$&&A.b()
c=d.d
b=a.p4
b.toString
d.d=c+b*e
b=a.x1
b===$&&A.b()
c=b.d
d=a.R8
d.toString
d*=B.a.i(e,1)
b.d=c+d
c=a.x2
c===$&&A.b()
c.d+=d
if(g!=null)g.d=g.d+a.b.a*e
j=f}if(j<i){d=a.to
d===$&&A.b()
c=d.d
b=a.y
d.d=c+b
c=a.x1
c===$&&A.b()
d=b>>>1
c.d=c.d+d
c=a.x2
c===$&&A.b()
c.d+=d
if(g!=null)g.d+=b
a.hn(j-f,a.z-b,i-j)}if(a0){a0=a.p1
g=a.p4
g.toString
a0.bG(p,r,o,16*g)
g=a.p2
p=a.R8
p.toString
g.bG(n,q,m,8*p)
p=a.p3
g=a.R8
g.toString
p.bG(n,q,l,8*g)}return!0},
hn(a,b,c){if(b<=0||c<=0)return!1
this.fJ(a,b,c)
this.fI(a,b,c)
return!0},
cv(a){var s
if((a&-4194304)>>>0===0)s=B.a.i(a,14)
else s=a<0?0:255
return s},
bh(a,b,c,d,e){var s,r,q,p
t.p.a(d)
s=19077*a
r=this.cv(s+26149*c+-3644112)
d.$flags&2&&A.c(d)
q=d.length
if(!(e>=0&&e<q))return A.a(d,e)
d[e]=r
r=e+1
p=this.cv(s-6419*b-13320*c+2229552)
if(!(r<q))return A.a(d,r)
d[r]=p
p=e+2
s=this.cv(s+33050*b+-4527440)
if(!(p<q))return A.a(d,p)
d[p]=s
s=e+3
if(!(s<q))return A.a(d,s)
d[s]=255},
ce(c2,c3,c4,c5,c6,c7,c8,c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.p,a7=a6.a(c2.a),a8=c2.d,a9=a6.a(c4.a),b0=c4.d,b1=a6.a(c5.a),b2=c5.d,b3=a6.a(c6.a),b4=c6.d,b5=a6.a(c7.a),b6=c7.d,b7=a6.a(c8.a),b8=c8.d,b9=c3==null,c0=b9?a5:a6.a(c3.a),c1=b9?a5:c3.d
if(c1==null)c1=0
b9=c9==null
s=b9?a5:a6.a(c9.a)
r=b9?a5:c9.d
if(r==null)r=0
a6=d0-1
q=B.a.i(a6,1)
b9=a9.length
if(!(b0>=0&&b0<b9))return A.a(a9,b0)
p=a9[b0]
o=b1.length
if(!(b2>=0&&b2<o))return A.a(b1,b2)
n=(p|b1[b2]<<16)>>>0
p=b3.length
if(!(b4>=0&&b4<p))return A.a(b3,b4)
m=b3[b4]
l=b5.length
if(!(b6>=0&&b6<l))return A.a(b5,b6)
k=(m|b5[b6]<<16)>>>0
j=3*n+k+131074>>>2
m=a7.length
if(!(a8>=0&&a8<m))return A.a(a7,a8)
a4.bh(a7[a8],j&255,j>>>16,b7,b8)
i=c0!=null
if(i){j=3*k+n+131074>>>2
if(!(c1>=0&&c1<c0.length))return A.a(c0,c1)
h=c0[c1]
s.toString
a4.bh(h,j&255,j>>>16,s,r)}for(g=1;g<=q;++g,k=d,n=e){h=b0+g
if(!(h<b9))return A.a(a9,h)
h=a9[h]
f=b2+g
if(!(f<o))return A.a(b1,f)
e=(h|b1[f]<<16)>>>0
f=b4+g
if(!(f<p))return A.a(b3,f)
f=b3[f]
h=b6+g
if(!(h<l))return A.a(b5,h)
d=(f|b5[h]<<16)>>>0
c=n+e+k+d+524296
b=c+2*(e+k)>>>3
a=c+2*(n+d)>>>3
j=b+n>>>1
a0=a+e>>>1
h=2*g
f=a8+h
a1=f-1
if(!(a1>=0&&a1<m))return A.a(a7,a1)
a2=(h-1)*4
a4.bh(a7[a1],j&255,j>>>16,b7,b8+a2)
if(!(f<m))return A.a(a7,f)
a1=h*4
a4.bh(a7[f],a0&255,a0>>>16,b7,b8+a1)
if(i){j=a+k>>>1
a0=b+d>>>1
h=c1+h
f=h-1
a3=c0.length
if(!(f>=0&&f<a3))return A.a(c0,f)
f=c0[f]
s.toString
a4.bh(f,j&255,j>>>16,s,r+a2)
if(!(h>=0&&h<a3))return A.a(c0,h)
a4.bh(c0[h],a0&255,a0>>>16,s,r+a1)}}if((d0&1)===0){j=3*n+k+131074>>>2
b9=a8+d0-1
if(!(b9>=0&&b9<m))return A.a(a7,b9)
a6*=4
a4.bh(a7[b9],j&255,j>>>16,b7,b8+a6)
if(i){j=3*k+n+131074>>>2
b9=c1+d0-1
if(!(b9>=0&&b9<c0.length))return A.a(c0,b9)
b9=c0[b9]
s.toString
a4.bh(b9,j&255,j>>>16,s,r+a6)}}},
fI(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.xr
if(f==null)return
s=t.p.a(f.a)
r=f.d
if(a===0){q=c-1
p=a}else{p=a-1
r-=g.b.a
q=c}f=g.Q
o=g.as
if(f+a+c===o)q=o-f-p
n=g.d.a1()
m=g.d.gT()*4
for(f=g.b.a,o=s.length,l=n.$flags|0,k=0;k<q;++k){j=(k+p)*m+3
for(i=0;i<b;++i,j+=4){h=r+i
if(!(h>=0&&h<o))return A.a(s,h)
h=s[h]
l&2&&A.c(n)
if(!(j>=0&&j<n.length))return A.a(n,j)
n[j]=h}r+=f}},
fJ(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b,d=A.F(J.O(g.d.gu(0),0,null),!1,f,a*e.a*4),c=g.to
c===$&&A.b()
s=A.r(c,0)
c=g.x1
c===$&&A.b()
r=A.r(c,0)
c=g.x2
c===$&&A.b()
q=A.r(c,0)
p=a+a0
o=B.a.i(b+1,1)
n=e.a*4
e=g.rx
e===$&&A.b()
m=A.r(e,0)
e=g.ry
e===$&&A.b()
l=A.r(e,0)
if(a===0){g.ce(s,f,r,q,r,q,d,f,b)
k=a0}else{e=g.RG
e===$&&A.b()
g.ce(e,s,m,l,r,q,A.r(d,-n),d,b)
k=a0+1}m.su(0,r.a)
l.su(0,q.a)
for(e=2*n,c=-n,j=a;j+=2,j<p;){m.d=r.d
l.d=q.d
i=r.d
h=g.R8
h.toString
r.d=i+h
q.d+=h
d.d+=e
h=s.d
i=g.p4
i.toString
s.d=h+2*i
g.ce(A.r(s,-i),s,m,l,r,q,A.r(d,c),d,b)}e=s.d
c=g.p4
c.toString
s.d=e+c
if(g.Q+p<g.as){e=g.RG
e===$&&A.b()
e.cl(0,b,s)
g.rx.cl(0,o,r)
g.ry.cl(0,o,q);--k}else if((p&1)===0)g.ce(s,f,r,q,r,q,A.r(d,n),f,b)
return k},
fB(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.b,h=i.a,g=i.b
if(a<0||b<=0||a+b>g)return null
if(a===0){i=h*g
j.ap=new Uint8Array(i)
s=j.bb
r=new A.hR(s,h,g)
q=s.K()
p=r.d=q&3
r.e=B.a.i(q,2)&3
r.f=B.a.i(q,4)&3
r.r=B.a.i(q,6)&3
if(r.ger())if(p===0){if(s.c-s.d<i)r.r=1}else if(p===1){o=new A.bf(B.P,A.o([],t.J))
o.a=h
o.b=g
i=A.o([],t.U)
p=A.o([],t.Y)
n=new Uint32Array(2)
m=new A.fh(s,n)
n=m.e=J.O(B.i.gu(n),0,null)
l=s.K()
n.$flags&2&&A.c(n)
if(0>=n.length)return A.a(n,0)
n[0]=l
l=s.K()
n.$flags&2&&A.c(n)
if(1>=n.length)return A.a(n,1)
n[1]=l
l=s.K()
n.$flags&2&&A.c(n)
if(2>=n.length)return A.a(n,2)
n[2]=l
l=s.K()
n.$flags&2&&A.c(n)
if(3>=n.length)return A.a(n,3)
n[3]=l
l=s.K()
n.$flags&2&&A.c(n)
if(4>=n.length)return A.a(n,4)
n[4]=l
l=s.K()
n.$flags&2&&A.c(n)
if(5>=n.length)return A.a(n,5)
n[5]=l
l=s.K()
n.$flags&2&&A.c(n)
if(6>=n.length)return A.a(n,6)
n[6]=l
s=s.K()
n.$flags&2&&A.c(n)
if(7>=n.length)return A.a(n,7)
n[7]=s
m.b=!1
p=new A.eM(m,o,i,p)
p.dy=h
p.fr=g
r.x=p
p.bL(h,g,!0)
i=r.x
s=i.ch
p=s.length
if(p===1){if(0>=p)return A.a(s,0)
i=s[0].a===B.b2&&i.h2()}else i=!1
if(i){r.y=!0
i=r.x
s=i.c
k=s.a*s.b
i.db=0
s=B.a.a6(k,4)
s=new Uint8Array(k+(4-s))
i.cy=s
i.cx=J.fJ(B.c.gu(s),0,null)}else{r.y=!1
r.x.df(h)}}else r.r=1
j.bq=r}i=j.bq
if(i!=null)if(!i.w){s=j.ap
s===$&&A.b()
if(!i.i1(a,b,s))return null}i=j.ap
i===$&&A.b()
return A.F(i,!1,null,a*h)},
he(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.fr.b,a4=a2.dy,a5=a2.k1
a5===$&&A.b()
if(!(a5<4))return A.a(a4,a5)
s=a4[a5]
a5=a2.b2
a5===$&&A.b()
a4=a2.y1
if(!(a4<a5.length))return A.a(a5,a4)
r=a5[a4]
q=A.F(r.a,!1,null,0)
a4=a2.k3
a4===$&&A.b()
if(0>=a4.length)return A.a(a4,0)
p=a4[0]
q.ir(0,q.c-q.d,0)
a4=r.b
a4===$&&A.b()
if(!a4){o=A.F(new Int16Array(16),!1,null,0)
a4=a6.b
a5=p.b
if(1>=a3.length)return A.a(a3,1)
n=a2.cH(a7,a3[1],a4+a5,s.b,0,o)
a6.b=p.b=n>0?1:0
if(n>1)a2.hN(o,q)
else{m=B.a.i(J.e(o.a,o.d)+3,3)
for(l=0;l<256;l+=16)J.a1(q.a,q.d+l,m)}k=a3[0]
j=1}else{if(3>=a3.length)return A.a(a3,3)
k=a3[3]
j=0}i=a6.a&15
h=p.a&15
for(g=0,f=0;f<4;++f){e=h&1
for(d=0,c=0;c<4;++c){n=a2.cH(a7,k,e+(i&1),s.a,j,q)
e=n>j?1:0
i=i>>>1|e<<7
a4=J.e(q.a,q.d)!==0?1:0
if(n>3)a4=3
else if(n>1)a4=2
d=d<<2|a4
q.d+=16}i=i>>>4
h=h>>>1|e<<7
g=(g<<8|d)>>>0}b=h>>>4
for(a4=a3.length,a=i,a0=0,a1=0;a1<4;a1+=2){a5=4+a1
i=B.a.Y(a6.a,a5)
h=B.a.Y(p.a,a5)
for(d=0,f=0;f<2;++f){e=h&1
for(c=0;c<2;++c){if(2>=a4)return A.a(a3,2)
n=a2.cH(a7,a3[2],e+(i&1),s.c,0,q)
e=n>0?1:0
i=i>>>1|e<<3
a5=J.e(q.a,q.d)!==0?1:0
if(n>3)a5=3
else if(n>1)a5=2
d=(d<<2|a5)>>>0
q.d+=16}i=i>>>2
h=h>>>1|e<<5}a0=(a0|B.a.L(d,4*a1))>>>0
a=(a|B.a.L(i<<4>>>0,a1))>>>0
b=(b|B.a.L(h&240,a1))>>>0}a6.a=a
p.a=b
r.e=g
r.f=a0
if((a0&43690)===0)s.toString
return(g|a0)>>>0===0},
hN(a,b){var s,r,q,p,o,n,m,l,k,j,i=new Int32Array(16)
for(s=0;s<4;++s){r=12+s
q=J.e(a.a,a.d+s)+J.e(a.a,a.d+r)
p=4+s
o=8+s
n=J.e(a.a,a.d+p)+J.e(a.a,a.d+o)
m=J.e(a.a,a.d+p)-J.e(a.a,a.d+o)
l=J.e(a.a,a.d+s)-J.e(a.a,a.d+r)
if(!(s<16))return A.a(i,s)
i[s]=q+n
if(!(o<16))return A.a(i,o)
i[o]=q-n
i[p]=l+m
if(!(r<16))return A.a(i,r)
i[r]=l-m}for(k=0,s=0;s<4;++s){r=s*4
if(!(r<16))return A.a(i,r)
j=i[r]+3
p=3+r
if(!(p<16))return A.a(i,p)
p=i[p]
q=j+p
o=1+r
if(!(o<16))return A.a(i,o)
o=i[o]
r=2+r
if(!(r<16))return A.a(i,r)
r=i[r]
n=o+r
m=o-r
l=j-p
p=B.a.i(q+n,3)
J.a1(b.a,b.d+k,p)
p=B.a.i(l+m,3)
J.a1(b.a,b.d+(k+16),p)
p=B.a.i(q-n,3)
J.a1(b.a,b.d+(k+32),p)
p=B.a.i(l-m,3)
J.a1(b.a,b.d+(k+48),p)
k+=64}},
fV(a,b){var s,r,q,p,o,n,m
t.L.a(b)
if(a.Z(b[3])===0)s=a.Z(b[4])===0?2:3+a.Z(b[5])
else if(a.Z(b[6])===0)s=a.Z(b[7])===0?5+a.Z(159):7+2*a.Z(165)+a.Z(145)
else{r=a.Z(b[8])
q=9+r
if(!(q<11))return A.a(b,q)
p=2*r+a.Z(b[q])
if(!(p<4))return A.a(B.az,p)
o=B.az[p]
n=o.length
for(s=0,m=0;m<n;++m)s+=s+a.Z(o[m])
s+=3+B.a.L(8,p)}return s},
cH(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j
t.B.a(b)
t.L.a(d)
s=b.length
if(!(e<s))return A.a(b,e)
r=b[e].a
if(!(c<r.length))return A.a(r,c)
q=r[c]
for(;e<16;e=p){if(a.Z(q[0])===0)return e
while(a.Z(q[1])===0){++e
if(!(e>=0&&e<17))return A.a(B.a_,e)
r=B.a_[e]
if(!(r<s))return A.a(b,r)
r=b[r].a
if(0>=r.length)return A.a(r,0)
q=r[0]
if(e===16)return 16}p=e+1
if(!(p>=0&&p<17))return A.a(B.a_,p)
r=B.a_[p]
if(!(r<s))return A.a(b,r)
o=b[r].a
r=o.length
if(a.Z(q[2])===0){if(1>=r)return A.a(o,1)
q=o[1]
n=1}else{n=this.fV(a,q)
if(2>=r)return A.a(o,2)
q=o[2]}if(!(e>=0&&e<16))return A.a(B.aK,e)
r=B.aK[e]
m=a.b
m===$&&A.b()
l=a.dj(B.a.i(m,1))
m=a.b
if(m>>>0!==m||m>=128)return A.a(B.Y,m)
k=B.Y[m]
a.b=B.aN[m]
m=a.d
m===$&&A.b()
a.d=m-k
m=l!==0?-n:n
j=d[e>0?1:0]
J.a1(f.a,f.d+r,m*j)}return 16},
ha(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.y1,g=4*h,f=i.go,e=i.id,d=i.b2
d===$&&A.b()
if(!(h<d.length))return A.a(d,h)
s=d[h]
h=i.c
h===$&&A.b()
h=h.Z(145)===0
s.b=h
if(!h){if(i.c.Z(156)!==0)r=i.c.Z(128)!==0?1:3
else r=i.c.Z(163)!==0?2:0
h=s.c
h.$flags&2&&A.c(h)
h[0]=r
f.toString
B.c.al(f,g,g+4,r)
B.c.al(e,0,4,r)}else{q=s.c
for(p=0,o=0;o<4;++o,p=j){r=e[o]
for(n=0;n<4;++n){h=g+n
if(!(h<f.length))return A.a(f,h)
d=f[h]
if(!(d<10))return A.a(B.aL,d)
d=B.aL[d]
if(!(r>=0&&r<10))return A.a(d,r)
m=d[r]
l=i.c.Z(m[0])
if(!(l<18))return A.a(B.X,l)
k=B.X[l]
while(k>0){d=i.c
if(!(k<9))return A.a(m,k)
d=2*k+d.Z(m[k])
if(!(d>=0&&d<18))return A.a(B.X,d)
k=B.X[d]}r=-k
f.$flags&2&&A.c(f)
f[h]=r}j=p+4
f.toString
B.c.X(q,p,j,f,g)
e.$flags&2&&A.c(e)
if(!(o<4))return A.a(e,o)
e[o]=r}}if(i.c.Z(142)===0)h=0
else if(i.c.Z(114)===0)h=2
else h=i.c.Z(183)!==0?1:3
s.d=h}}
A.dM.prototype={
R(a){var s,r
for(s=0;r=a-1,a>0;a=r)s=(s|B.a.a_(this.Z(128),r))>>>0
return s},
bH(a){var s=this.R(a)
return this.R(1)===1?-s:s},
Z(a){var s,r=this,q=r.b
q===$&&A.b()
s=r.dj(B.a.i(q*a,8))
if(r.b<=126)r.hI()
return s},
dj(a){var s,r,q,p,o,n=this,m=n.d
m===$&&A.b()
if(m<0){s=n.a
r=s.c
q=s.d
if(r-q>=1){p=s.K()
m=n.c
m===$&&A.b()
n.c=(p|m<<8)>>>0
m=n.d+8
n.d=m
o=m}else{if(q<r){m=s.K()
s=n.c
s===$&&A.b()
n.c=(m|s<<8)>>>0
s=n.d+8
n.d=s
m=s}else if(!n.e){s=n.c
s===$&&A.b()
n.c=s<<8>>>0
m+=8
n.d=m
n.e=!0}o=m}}else o=m
m=n.c
m===$&&A.b()
if(B.a.bu(m,o)>a){s=n.b
s===$&&A.b()
r=a+1
n.b=s-r
n.c=m-B.a.a_(r,o)
return 1}else{n.b=a
return 0}},
hI(){var s,r=this,q=r.b
q===$&&A.b()
if(!(q>=0&&q<128))return A.a(B.Y,q)
s=B.Y[q]
r.b=B.aN[q]
q=r.d
q===$&&A.b()
r.d=q-s}}
A.hE.prototype={
d8(a,b,c,d){var s,r
t.p.a(a)
for(s=0;s<16;++s){r=b+s
if(this.dM(a,r,c,d))this.c7(a,r,c)}},
d7(a,b,c,d){var s,r
t.p.a(a)
for(s=0;s<16;++s){r=b+s*c
if(this.dM(a,r,1,d))this.c7(a,r,1)}},
eL(a,b,c,d){var s
t.p.a(a)
for(s=1;s<=3;++s)this.d8(a,b+4*s*c,c,d)},
eK(a,b,c,d){var s
t.p.a(a)
for(s=1;s<=3;++s)this.d7(a,b+4*s,c,d)},
iJ(a,b,c,d,e,f){var s
t.p.a(a)
for(s=1;s<=3;++s)this.by(a,b+4*s*c,c,1,16,d,e,f)},
ie(a,b,c,d,e,f){var s
t.p.a(a)
for(s=1;s<=3;++s)this.by(a,b+4*s,1,c,16,d,e,f)},
bz(a5,a6,a7,a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
t.p.a(a5)
for(s=3*a7,r=a5.length,q=2*a7,p=a4.c,o=a4.e,n=a5.$flags|0,m=0;m<a9;++m,a6+=a8)if(a4.dN(a5,a6,a7,b0,b1))if(a4.dH(a5,a6,a7,b2))a4.c7(a5,a6,a7)
else{l=a6-s
if(!(l>=0&&l<r))return A.a(a5,l)
k=a5[l]
j=a6-q
if(!(j>=0&&j<r))return A.a(a5,j)
i=a5[j]
h=a6-a7
if(!(h>=0&&h<r))return A.a(a5,h)
g=a5[h]
if(!(a6>=0&&a6<r))return A.a(a5,a6)
f=a5[a6]
e=a6+a7
if(!(e<r))return A.a(a5,e)
d=a5[e]
c=a6+q
if(!(c<r))return A.a(a5,c)
b=a5[c]
a=1020+i-d
if(!(a>=0&&a<2041))return A.a(p,a)
a=1020+3*(f-g)+p[a]
if(!(a>=0&&a<2041))return A.a(p,a)
a0=p[a]
a1=B.a.i(27*a0+63+3456,7)-27
a2=B.a.i(18*a0+63+2304,7)-18
a3=B.a.i(9*a0+63+1152,7)-9
a=255+k+a3
if(!(a<766))return A.a(o,a)
a=o[a]
n&2&&A.c(a5)
a5[l]=a
a=255+i+a2
if(!(a<766))return A.a(o,a)
a5[j]=o[a]
a=255+g+a1
if(!(a<766))return A.a(o,a)
a5[h]=o[a]
a=255+f-a1
if(!(a>=0&&a<766))return A.a(o,a)
a5[a6]=o[a]
a=255+d-a2
if(!(a>=0&&a<766))return A.a(o,a)
a5[e]=o[a]
a=255+b-a3
if(!(a>=0&&a<766))return A.a(o,a)
a5[c]=o[a]}},
by(a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
t.p.a(a0)
for(s=2*a2,r=a0.length,q=a.d,p=a.e,o=a0.$flags|0,n=0;n<a4;++n,a1+=a3)if(a.dN(a0,a1,a2,a5,a6))if(a.dH(a0,a1,a2,a7))a.c7(a0,a1,a2)
else{m=a1-s
if(!(m>=0&&m<r))return A.a(a0,m)
l=a0[m]
k=a1-a2
if(!(k>=0&&k<r))return A.a(a0,k)
j=a0[k]
if(!(a1>=0&&a1<r))return A.a(a0,a1)
i=a0[a1]
h=a1+a2
if(!(h<r))return A.a(a0,h)
g=a0[h]
f=3*(i-j)
e=B.a.i(f+4+1024,3)-128+112
if(!(e>=0&&e<225))return A.a(q,e)
d=q[e]
e=B.a.i(f+3+1024,3)-128+112
if(!(e>=0&&e<225))return A.a(q,e)
c=q[e]
b=B.a.i(d+1+16,1)-8
e=255+l+b
if(!(e<766))return A.a(p,e)
e=p[e]
o&2&&A.c(a0)
a0[m]=e
e=255+j+c
if(!(e>=0&&e<766))return A.a(p,e)
a0[k]=p[e]
e=255+i-d
if(!(e>=0&&e<766))return A.a(p,e)
a0[a1]=p[e]
e=255+g-b
if(!(e>=0&&e<766))return A.a(p,e)
a0[h]=p[e]}},
c7(a,b,c){var s,r,q,p,o,n,m,l,k
t.p.a(a)
s=b-2*c
r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
q=a[s]
s=b-c
if(!(s>=0&&s<r))return A.a(a,s)
p=a[s]
if(!(b>=0&&b<r))return A.a(a,b)
o=a[b]
n=b+c
if(!(n<r))return A.a(a,n)
r=this.c
n=1020+q-a[n]
if(!(n>=0&&n<2041))return A.a(r,n)
m=3*(o-p)+r[n]
n=this.d
r=B.a.i(m+4+1024,3)-128+112
if(!(r>=0&&r<225))return A.a(n,r)
l=n[r]
r=B.a.i(m+3+1024,3)-128+112
if(!(r>=0&&r<225))return A.a(n,r)
k=this.e
r=255+p+n[r]
if(!(r>=0&&r<766))return A.a(k,r)
r=k[r]
a.$flags&2&&A.c(a)
a[s]=r
r=255+o-l
if(!(r>=0&&r<766))return A.a(k,r)
a[b]=k[r]},
dH(a,b,c,d){var s,r,q,p,o,n
t.p.a(a)
s=b-2*c
r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
q=a[s]
s=b-c
if(!(s>=0&&s<r))return A.a(a,s)
p=a[s]
if(!(b>=0&&b<r))return A.a(a,b)
o=a[b]
s=b+c
if(!(s<r))return A.a(a,s)
n=a[s]
s=this.a
r=255+q-p
if(!(r>=0&&r<511))return A.a(s,r)
if(s[r]<=d){r=255+n-o
if(!(r>=0&&r<511))return A.a(s,r)
r=s[r]>d
s=r}else s=!0
return s},
dM(a,b,c,d){var s,r,q,p,o,n,m
t.p.a(a)
s=b-2*c
r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
q=a[s]
s=b-c
if(!(s>=0&&s<r))return A.a(a,s)
p=a[s]
if(!(b>=0&&b<r))return A.a(a,b)
o=a[b]
s=b+c
if(!(s<r))return A.a(a,s)
n=a[s]
s=this.a
r=255+p-o
if(!(r>=0&&r<511))return A.a(s,r)
r=s[r]
s=this.b
m=255+q-n
if(!(m>=0&&m<511))return A.a(s,m)
return 2*r+s[m]<=d},
dN(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.p.a(a)
s=b-4*c
r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
q=a[s]
s=3*c
p=b-s
if(!(p>=0&&p<r))return A.a(a,p)
o=a[p]
p=2*c
n=b-p
if(!(n>=0&&n<r))return A.a(a,n)
m=a[n]
n=b-c
if(!(n>=0&&n<r))return A.a(a,n)
l=a[n]
if(!(b>=0&&b<r))return A.a(a,b)
k=a[b]
n=b+c
if(!(n<r))return A.a(a,n)
j=a[n]
p=b+p
if(!(p<r))return A.a(a,p)
i=a[p]
s=b+s
if(!(s<r))return A.a(a,s)
h=a[s]
s=this.a
r=255+l-k
if(!(r>=0&&r<511))return A.a(s,r)
r=s[r]
p=this.b
n=255+m
g=n-j
if(!(g>=0&&g<511))return A.a(p,g)
if(2*r+p[g]>d)return!1
r=255+q-o
if(!(r>=0&&r<511))return A.a(s,r)
p=!1
if(s[r]<=e){r=255+o-m
if(!(r>=0&&r<511))return A.a(s,r)
if(s[r]<=e){r=n-l
if(!(r>=0&&r<511))return A.a(s,r)
if(s[r]<=e){r=255+h-i
if(!(r>=0&&r<511))return A.a(s,r)
if(s[r]<=e){r=255+i-j
if(!(r>=0&&r<511))return A.a(s,r)
if(s[r]<=e){r=255+j-k
if(!(r>=0&&r<511))return A.a(s,r)
r=s[r]<=e
s=r}else s=p}else s=p}else s=p}else s=p}else s=p
return s},
b8(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.dQ.a(a.a),d=t.p.a(a0.a),c=this.f,b=a.d
for(s=e.length,r=c.$flags|0,q=0,p=0;p<4;++p){if(!(b>=0&&b<s))return A.a(e,b)
o=e[b]
n=b+8
if(!(n<s))return A.a(e,n)
n=e[n]
m=o+n
l=o-n
n=b+4
if(!(n<s))return A.a(e,n)
n=e[n]
o=B.a.i(n*35468+1073741824,16)
k=b+12
if(!(k<s))return A.a(e,k)
k=e[k]
j=o-16384-(B.a.i(k*85627+1073741824,16)-16384)
i=B.a.i(n*85627+1073741824,16)-16384+(B.a.i(k*35468+1073741824,16)-16384)
h=q+1
r&2&&A.c(c)
if(!(q<16))return A.a(c,q)
c[q]=m+i
q=h+1
if(!(h<16))return A.a(c,h)
c[h]=l+j
h=q+1
if(!(q<16))return A.a(c,q)
c[q]=l-j
q=h+1
if(!(h<16))return A.a(c,h)
c[h]=m-i;++b}g=a0.d
for(s=d.$flags|0,r=d.length,q=0,p=0;p<4;++p){if(!(q<16))return A.a(c,q)
f=c[q]+4
o=q+8
if(!(o<16))return A.a(c,o)
o=c[o]
m=f+o
l=f-o
o=q+4
if(!(o<16))return A.a(c,o)
o=c[o]
n=B.a.i(o*35468+1073741824,16)
k=q+12
if(!(k<16))return A.a(c,k)
k=c[k]
j=n-16384-(B.a.i(k*85627+1073741824,16)-16384)
i=B.a.i(o*85627+1073741824,16)-16384+(B.a.i(k*35468+1073741824,16)-16384)
if(!(g>=0&&g<r))return A.a(d,g)
k=d[g]+(B.a.i(m+i+65536,3)-8192)
if((k&-256)>>>0===0)o=k
else o=k<0?0:255
s&2&&A.c(d)
d[g]=o
o=g+1
if(!(o<r))return A.a(d,o)
n=d[o]+(B.a.i(l+j+65536,3)-8192)
if(!((n&-256)>>>0===0))n=n<0?0:255
d[o]=n
n=g+2
if(!(n<r))return A.a(d,n)
o=d[n]+(B.a.i(l-j+65536,3)-8192)
if(!((o&-256)>>>0===0))o=o<0?0:255
d[n]=o
o=g+3
if(!(o<r))return A.a(d,o)
n=d[o]+(B.a.i(m-i+65536,3)-8192)
if(!((n&-256)>>>0===0))n=n<0?0:255
d[o]=n;++q
g+=32}},
iG(a,b,c){this.b8(a,b)
if(c)this.b8(A.r(a,16),A.r(b,4))},
bW(a,b){var s,r,q,p,o,n
for(s=J.e(a.a,a.d)+4+65536,r=0;r<4;++r)for(q=r*32,p=0;p<4;++p){o=p+q
n=J.e(b.a,b.d+o)+(B.a.i(s,3)-8192)
if(!((n&-256)>>>0===0))n=n<0?0:255
J.a1(b.a,b.d+o,n)}},
ez(a,b){var s=this
if(J.e(a.a,a.d)!==0)s.bW(a,b)
if(J.e(a.a,a.d+16)!==0)s.bW(A.r(a,16),A.r(b,4))
if(J.e(a.a,a.d+32)!==0)s.bW(A.r(a,32),A.r(b,128))
if(J.e(a.a,a.d+48)!==0)s.bW(A.r(a,48),A.r(b,132))}}
A.hL.prototype={}
A.hO.prototype={}
A.hQ.prototype={}
A.dL.prototype={}
A.hP.prototype={}
A.hF.prototype={}
A.b_.prototype={}
A.dO.prototype={}
A.fj.prototype={}
A.dP.prototype={}
A.dQ.prototype={}
A.dN.prototype={
bS(){var s,r,q,p,o=this,n=o.b
if(n.a9(8)!==47)return!1
s=n.a9(14)+1
r=n.a9(14)+1
q=n.a9(1)
o.dy=s
o.fr=r
p=o.c
p.f=B.a2
p.a=s
p.b=r
p.d=q!==0
if(n.a9(3)!==0)return!1
return!0},
bp(){var s,r,q,p,o,n,m=this,l=null
m.f=0
if(!m.bS())return l
m.bL(m.dy,m.fr,!0)
m.df(m.dy)
s=m.dy
m.d=A.cp(l,l,B.k,0,B.v,m.fr,l,0,4,l,s,!1)
s=m.cx
s.toString
r=m.c
q=r.a
p=r.b
if(!m.cz(s,q,p,p,m.ghl()))return l
s=r.w
if(s.length!==0){o=A.F(new A.aj(s),!1,l,0)
s=m.d
s.toString
s.e=A.jP(o)}n=r.r
if(n!=null)m.d.c=new A.b7("ICC_PROFILE",B.a5,n)
return m.d},
df(a){var s,r=this,q=r.c
q=q.a*q.b+a
s=new Uint32Array(q+a*16)
r.cx=s
r.cy=J.O(B.i.gu(s),0,null)
r.db=q
return!0},
hC(a){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=l.b
r=s.a9(2)
q=l.CW
p=B.a.L(1,r)
if((q&p)>>>0!==0)return!1
l.CW=(q|p)>>>0
o=new A.fi(B.b1)
B.e.N(l.ch,o)
if(!(r<4))return A.a(B.aS,r)
q=B.aS[r]
o.a=q
o.b=a[0]
o.c=a[1]
switch(q.a){case 0:case 1:s=s.a9(3)+2
o.e=s
o.d=l.bL(A.be(o.b,s),A.be(o.c,o.e),!1)
break
case 3:n=s.a9(8)+1
if(n>16)m=0
else if(n>4)m=1
else{s=n>2?2:3
m=s}B.e.j(a,0,A.be(o.b,m))
o.e=m
o.d=l.bL(n,1,!1)
l.fL(n,o)
break
case 2:break}return!0},
bL(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(c)for(s=k.b,r=t.t,q=b,p=a;s.a9(1)!==0;){o=A.o([p,q],r)
if(!k.hC(o))throw A.h(A.C("Invalid Transform"))
p=o[0]
q=o[1]}else{q=b
p=a}s=k.b
if(s.a9(1)!==0){n=s.a9(4)
if(!(n>=1&&n<=11))throw A.h(A.C("Invalid Color Cache"))}else n=0
if(!k.hy(p,q,n,c))throw A.h(A.C("Invalid Huffman Codes"))
if(n>0){s=B.a.L(1,n)
k.w=s
k.x=new A.hM(new Uint32Array(s),32-n)}else k.w=0
s=k.c
s.a=p
s.b=q
m=k.z
k.Q=A.be(p,m)
k.y=m===0?4294967295:B.a.L(1,m)-1
if(c){k.f=0
return null}l=new Uint32Array(p*q)
if(!k.cz(l,p,q,q,null))throw A.h(A.C("Failed to decode image data."))
k.f=0
return l},
cz(b6,b7,b8,b9,c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=506832829
t.e7.a(c0)
s=b4.f
r=B.a.ac(s,b7)
q=B.a.a6(s,b7)
p=b7*b8
o=b7*b9
if(s>=o){if(c0!=null)c0.$2(b9,!1)
return!0}n=b4.dE(q,r)
m=b4.w
l=280+m
k=m>0?b4.x:null
j=b4.y
for(m=b6.length,i=b4.b,h=c0!=null,g=b6.$flags|0,f=s;f<o;){if((q&j)>>>0===0){e=b4.bN(b4.as,b4.Q,b4.z,q,r)
d=b4.ax
if(!(e<d.length))return A.a(d,e)
n=d[e]}c=0
if(n.d){d=n.c
g&2&&A.c(b6)
if(!(f>=0&&f<m))return A.a(b6,f)
b6[f]=d;++f;++q
if(q>=b7){++r
if(h&&r<=b9)c0.$2(r,!0)
if(k!=null)for(d=k.a,b=k.b,a=d.$flags|0;s<f;){if(!(s>=0&&s<m))return A.a(b6,s)
a0=b6[s]
a1=B.a.ad(A.ek(a0,b5),b)
a&2&&A.c(d)
if(!(a1<d.length))return A.a(d,a1)
d[a1]=a0;++s}q=c}continue}if(i.a>=32)i.bo()
if(n.e){a2=i.bU()&63
d=n.f
if(!(a2<d.length))return A.a(d,a2)
a3=d[a2]
d=a3.a
b=i.a
if(d<256){i.a=b+d
d=a3.b
g&2&&A.c(b6)
if(!(f>=0&&f<m))return A.a(b6,f)
b6[f]=d
a4=0}else{i.a=b+(d-256)
a4=a3.b}if(i.b)break
if(a4===0){++f;++q
if(q>=b7){++r
if(h&&r<=b9)c0.$2(r,!0)
if(k!=null)for(d=k.a,b=k.b,a=d.$flags|0;s<f;){if(!(s>=0&&s<m))return A.a(b6,s)
a0=b6[s]
a1=B.a.ad(A.ek(a0,b5),b)
a&2&&A.c(d)
if(!(a1<d.length))return A.a(d,a1)
d[a1]=a0;++s}q=c}continue}}else a4=n.bs(0,i)
if(a4<256){if(n.b){d=n.c
g&2&&A.c(b6)
if(!(f>=0&&f<m))return A.a(b6,f)
b6[f]=(d|a4<<8)>>>0}else{a5=n.bs(1,i)
if(i.a>=32)i.bo()
a6=A.l6(n.bs(2,i),a4,a5,n.bs(3,i))
g&2&&A.c(b6)
if(!(f>=0&&f<m))return A.a(b6,f)
b6[f]=a6}++f;++q
if(q>=b7){++r
if(h&&r<=b9)c0.$2(r,!0)
if(k!=null)for(d=k.a,b=k.b,a=d.$flags|0;s<f;){if(!(s>=0&&s<m))return A.a(b6,s)
a0=b6[s]
a1=B.a.ad(A.ek(a0,b5),b)
a&2&&A.c(d)
if(!(a1<d.length))return A.a(d,a1)
d[a1]=a0;++s}q=c}}else if(a4<280){a7=b4.ca(a4-256)
a8=n.bs(4,i)
if(i.a>=32)i.bo()
a9=b4.dP(b7,b4.ca(a8))
if(f<a9||p-f<a7)return!1
else{b0=f-a9
for(b1=0;b1<a7;++b1){d=f+b1
b=b0+b1
if(!(b>=0&&b<m))return A.a(b6,b)
b=b6[b]
g&2&&A.c(b6)
if(!(d>=0&&d<m))return A.a(b6,d)
b6[d]=b}}f+=a7
q+=a7
while(q>=b7){q-=b7;++r
if(h&&r<=b9)c0.$2(r,!0)}if((q&j)>>>0!==0){e=b4.bN(b4.as,b4.Q,b4.z,q,r)
d=b4.ax
if(!(e<d.length))return A.a(d,e)
n=d[e]}if(k!=null)for(d=k.a,b=k.b,a=d.$flags|0;s<f;){if(!(s>=0&&s<m))return A.a(b6,s)
a0=b6[s]
a1=B.a.ad(A.ek(a0,b5),b)
a&2&&A.c(d)
if(!(a1<d.length))return A.a(d,a1)
d[a1]=a0;++s}}else if(a4<l){b2=a4-280
while(s<f){k.toString
if(!(s>=0&&s<m))return A.a(b6,s)
d=b6[s]
b=k.a
a=B.a.ad(A.ek(d,b5),k.b)
b.$flags&2&&A.c(b)
if(!(a<b.length))return A.a(b,a)
b[a]=d;++s}d=k.a
b=d.length
if(!(b2<b))return A.a(d,b2)
a=d[b2]
g&2&&A.c(b6)
if(!(f>=0&&f<m))return A.a(b6,f)
b6[f]=a;++f;++q
if(q>=b7){++r
if(h&&r<=b9)c0.$2(r,!0)
for(a=k.b,a0=d.$flags|0;s<f;){if(!(s>=0&&s<m))return A.a(b6,s)
a1=b6[s]
b3=B.a.ad(A.ek(a1,b5),a)
a0&2&&A.c(d)
if(!(b3<b))return A.a(d,b3)
d[b3]=a1;++s}q=c}}else return!1}if(h)c0.$2(r>b9?b9:r,!1)
b4.f=f
return!0},
h2(){var s,r,q,p,o,n,m,l
if(this.w>0)return!1
for(s=this.at,r=this.ax,q=r.length,p=0;p<s;++p){if(!(p<q))return A.a(r,p)
o=r[p].a
n=o.length
if(1>=n)return A.a(o,1)
m=o[1]
l=m.a
m=m.b
if(!(m<l.length))return A.a(l,m)
if(l[m].a>0)return!1
if(2>=n)return A.a(o,2)
m=o[2]
l=m.a
m=m.b
if(!(m<l.length))return A.a(l,m)
if(l[m].a>0)return!1
if(3>=n)return A.a(o,3)
n=o[3]
m=n.a
n=n.b
if(!(n<m.length))return A.a(m,n)
if(m[n].a>0)return!1}return!0},
fM(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(b&&B.a.a6(a,16)!==0)return
s=g.r
r=a-s
q=g.dy
p=q*s
while(r>0){o=r>16?16:r
n=q*o
m=q*s
l=g.db
g.dg(s,o,p)
for(q=g.dx,k=g.cx,j=0;j<n;++j){q.toString
i=m+j
h=l+j
if(!(h<k.length))return A.a(k,h)
h=k[h]
q.$flags&2&&A.c(q)
if(!(i>=0&&i<q.length))return A.a(q,i)
q[i]=h>>>8&255}r-=o
q=g.dy
p+=o*q
s+=o}g.r=a},
fm(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.f,d=B.a.ac(e,a0),c=B.a.a6(e,a0),b=a0*a1,a=a0*a2
if(e>=a){f.c9(d)
return!0}s=f.dE(c,d)
r=f.y
q=f.b
for(;;){if(!(!q.b&&e<a))break
if((c&r)>>>0===0){p=f.bN(f.as,f.Q,f.z,c,d)
o=f.ax
if(!(p<o.length))return A.a(o,p)
s=o[p]}if(q.a>=32)q.bo()
n=s.bs(0,q)
if(n<256){o=f.cy
o===$&&A.b()
o.$flags&2&&A.c(o)
if(!(e>=0&&e<o.length))return A.a(o,e)
o[e]=n;++e;++c
if(c>=a0){++d
if(B.a.a6(d,16)===0)f.c9(d)
c=0}}else if(n<280){m=f.ca(n-256)
l=s.bs(4,q)
if(q.a>=32)q.bo()
k=f.dP(a0,f.ca(l))
if(e>=k&&b-e>=m)for(o=f.cy,j=0;j<m;++j){o===$&&A.b()
i=e+j
h=i-k
g=o.length
if(!(h>=0&&h<g))return A.a(o,h)
h=o[h]
o.$flags&2&&A.c(o)
if(!(i>=0&&i<g))return A.a(o,i)
o[i]=h}else{f.f=e
return!0}e+=m
c+=m
while(c>=a0){c-=a0;++d
if(B.a.a6(d,16)===0)f.c9(d)}if(e<a&&(c&r)>>>0!==0){p=f.bN(f.as,f.Q,f.z,c,d)
o=f.ax
if(!(p<o.length))return A.a(o,p)
s=o[p]}}else return!1}f.c9(d)
f.f=e
return!0},
c9(a){var s,r,q,p=this,o=p.r,n=a-o,m=p.cy
m===$&&A.b()
s=A.F(m,!1,null,p.c.a*o)
if(n>0){r=p.r
o=p.dx
o.toString
q=A.F(o,!1,null,p.dy*r)
o=p.ch
if(0>=o.length)return A.a(o,0)
o[0].hW(r,r+n,s,q)}p.r=a},
hm(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.a,f=h.r
if(b)if(B.a.a6(a,16)!==0)return
s=a-f
if(s<=0){h.r=a
return}h.dg(f,s,g*f)
g=h.cx
g.toString
r=h.d.a1()
f=h.r
q=h.dy
p=f*q*4
for(o=h.db,f=g.length,n=r.$flags|0,m=0;m<s;++m)for(l=0;l<q;++l,++o){if(!(o>=0&&o<f))return A.a(g,o)
k=g[o]
j=p+1
n&2&&A.c(r)
i=r.length
if(!(p>=0&&p<i))return A.a(r,p)
r[p]=k>>>16&255
p=j+1
if(!(j>=0&&j<i))return A.a(r,j)
r[j]=k>>>8&255
j=p+1
if(!(p>=0&&p<i))return A.a(r,p)
r[p]=k&255
p=j+1
if(!(j>=0&&j<i))return A.a(r,j)
r[j]=k>>>24&255}h.r=a},
dg(a,b,c){var s,r=this,q=r.ch,p=q.length,o=r.c.a,n=a+b,m=r.db,l=r.cx
l.toString
B.i.X(l,m,m+o*b,l,c)
for(;s=p-1,p>0;p=s){if(!(s>=0&&s<q.length))return A.a(q,s)
o=q[s]
l=r.cx
l.toString
o.io(a,n,l,m,l,m)}},
hy(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=1,c=null
if(a1&&e.b.a9(1)!==0){s=2+e.b.a9(3)
r=A.be(a,s)
q=A.be(b,s)
p=r*q
o=e.bL(r,q,!1)
if(o==null)return!1
e.z=s
for(n=o.length,m=o.$flags|0,l=d,k=0;k<p;++k){if(!(k<n))return A.a(o,k)
j=o[k]>>>8&65535
m&2&&A.c(o)
o[k]=j
if(j>=l)l=j+1}if(l>1000||l>a*b){c=new Int32Array(1)
B.q.al(c,0,1,255)
for(d=0,k=0;k<p;++k){if(!(k<n))return A.a(o,k)
i=o[k]
if(!(i<1))return A.a(c,i)
if(c[i]===-1){h=d+1
c[i]=d
d=h}g=c[i]
m&2&&A.c(o)
o[k]=g}}else d=l}else{o=null
l=1}if(e.b.b)return!1
f=e.hz(a0,d,l,c)
if(f==null)return!1
e.as=o
e.at=d
e.ax=f
return!0},
cQ(a,b,c,d,e,f){var s,r=a.a,q=a.b,p=d
do{p-=c
s=q+(b+p)
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
s.a=e
s.b=f}while(p>0)},
h4(a,b,c){var s=B.a.a_(1,b-c)
while(b<15){s-=a[b]
if(s<=0)break;++b
s=s<<1>>>0}return b-c},
dG(a,b){var s=B.a.a_(1,b-1)
while((a&s)>>>0!==0)s=s>>>1
return s!==0?((a&s-1)>>>0)+s:a},
e7(a5,a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=B.a.L(1,a6),a3=new Int32Array(16),a4=new Int32Array(16)
for(s=a7.length,r=0;r<a8;++r){if(!(r<s))return A.a(a7,r)
q=a7[r]
if(q>15)return 0
if(!(q>=0))return A.a(a3,q)
a3[q]=a3[q]+1}if(a3[0]===a8)return 0
a4[1]=0
for(p=1;p<15;p=o){q=a3[p]
if(q>B.a.L(1,p))return 0
o=p+1
a4[o]=a4[p]+q}for(q=a9!=null,r=0;r<a8;++r){if(!(r<s))return A.a(a7,r)
n=a7[r]
if(n>0)if(q){if(!(n<16))return A.a(a4,n)
m=a4[n]
if(m>=a8)return 0
a4[n]=m+1
a9.$flags&2&&A.c(a9)
if(!(m>=0&&m<a9.length))return A.a(a9,m)
a9[m]=r}else{if(!(n<16))return A.a(a4,n)
a4[n]=a4[n]+1}}if(a4[15]===1){if(q){a5.toString
if(0>=a9.length)return A.a(a9,0)
a1.cQ(a5,0,1,a2,0,a9[0])}return a2}l=a2-1
for(s=a5==null,k=0,j=1,i=1,r=0,p=1,h=2;p<=a6;++p,h=h<<1>>>0){i=i<<1>>>0
j+=i
if(!(p<16))return A.a(a3,p)
i-=a3[p]
if(i<0)return 0
if(s)continue
for(g=p&255;a3[p]>0;a3[p]=a3[p]-1,r=f){f=r+1
if(!(r>=0&&r<a9.length))return A.a(a9,r)
a1.cQ(a5,k,h,a2,g,a9[r])
k=a1.dG(k,p)}}for(p=a6+1,s=!s,e=a2,d=0,c=4294967295,h=2;p<=15;++p,h=h<<1>>>0){i=i<<1>>>0
j+=i
i-=a3[p]
if(i<0)return 0
for(g=p-a6&255;a3[p]>0;a3[p]=a3[p]-1){b=(k&l)>>>0
if(b!==c){if(s)d+=e
a=a1.h4(a3,p,a6)
e=B.a.a_(1,a)
a2+=e
if(s){q=a5.a
m=a5.b+b
if(!(m>=0&&m<q.length))return A.a(q,m)
m=q[m]
m.a=a+a6&255
m.b=d-b}c=b}if(s){f=r+1
if(!(r>=0&&r<a9.length))return A.a(a9,r)
a0=a9[r]
a1.cQ(a5,d+B.a.Y(k,a6),h,e,g,a0)
r=f}k=a1.dG(k,p)}}if(j!==2*a4[15]-1)return 0
return a2},
e8(a,b,c,d){var s,r,q,p,o,n,m=this.e7(null,b,c,d,null)
if(m===0||a==null)return m
s=a.b
r=s.d
q=s.e
if(r+m>=q){p=new A.d1()
if(m>q)q=m
o=A.iT(q)
p.e=q
p.b=p.a=o
a.b=p
s=p}n=new Uint16Array(d)
this.e7(s.b,b,c,d,n)
return m},
hx(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new A.eF(new A.d1())
c.dc(128)
if(this.e8(c,7,a,19)===0)return!1
s=this.b
if(s.a9(1)!==0){r=2+s.a9(2+2*s.a9(3))
if(r>b)return!1}else r=b
for(q=8,p=0;p<b;r=o){o=r-1
if(r===0)break
if(s.a>=32)s.bo()
n=c.b.a
n.toString
m=n.a
n=n.b+(s.bU()&127)
if(!(n<m.length))return A.a(m,n)
l=m[n]
s.a=s.a+l.a
k=l.b
if(k<16){j=p+1
a0.$flags&2&&A.c(a0)
if(!(p>=0&&p<a0.length))return A.a(a0,p)
a0[p]=k
if(k!==0)q=k
p=j}else{i=k-16
if(!(i<3))return A.a(B.ax,i)
h=B.ax[i]
g=B.bS[i]
f=s.a9(h)+g
if(p+f>b)return!1
e=k===16?q:0
for(n=a0.$flags|0;d=f-1,f>0;f=d,p=j){j=p+1
n&2&&A.c(a0)
if(!(p>=0&&p<a0.length))return A.a(a0,p)
a0[p]=e}}}return!0},
dU(a,b,c){var s,r,q,p,o,n,m,l=this.b,k=l.a9(1)
B.q.al(b,0,a,0)
if(k!==0){s=l.a9(1)
r=l.a9(l.a9(1)===0?1:8)
b.$flags&2&&A.c(b)
q=b.length
if(!(r<q))return A.a(b,r)
b[r]=1
if(s+1===2){r=l.a9(8)
if(!(r<q))return A.a(b,r)
b[r]=1}p=!0}else{o=new Int32Array(19)
n=l.a9(4)+4
for(m=0;m<n;++m){if(!(m<19))return A.a(B.aJ,m)
s=B.aJ[m]
q=l.a9(3)
if(!(s<19))return A.a(o,s)
o[s]=q}p=this.hx(o,a,b)}return p&&!l.b?this.e8(c,8,b,a):0},
c5(a,b,c){var s=c.a,r=a.a
c.a=s+r
c.b=(c.b|B.a.L(a.b,b))>>>0
return r},
f8(a){var s,r,q,p,o,n,m,l,k,j,i=this
for(s=a.a,r=s.length,q=a.f,p=q.length,o=0;o<64;++o){if(!(o<p))return A.a(q,o)
n=q[o]
if(0>=r)return A.a(s,0)
m=s[0]
l=m.a
m=m.b+o
if(!(m<l.length))return A.a(l,m)
k=l[m]
m=k.b
if(m>=256){n.a=k.a+256
n.b=m}else{n.b=n.a=0
j=B.a.Y(o,i.c5(k,8,n))
if(1>=r)return A.a(s,1)
m=s[1]
l=m.a
m=m.b+j
if(!(m<l.length))return A.a(l,m)
j=B.a.Y(j,i.c5(l[m],16,n))
if(2>=r)return A.a(s,2)
m=s[2]
l=m.a
m=m.b+j
if(!(m<l.length))return A.a(l,m)
j=B.a.Y(j,i.c5(l[m],0,n))
if(3>=r)return A.a(s,3)
m=s[3]
l=m.a
m=m.b+j
if(!(m<l.length))return A.a(l,m)
B.a.Y(j,i.c5(l[m],24,n))}}},
hz(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a9>0,a8=280+(a7?B.a.L(1,a9):0)
if(!(a9<12))return A.a(B.aB,a9)
s=B.aB[a9]
r=b2==null
if(r&&b0!==b1)return a6
q=new Int32Array(a8)
p=J.aM(b0,t.x)
for(o=0;o<b0;++o)p[o]=A.m4()
n=new A.eF(new A.d1())
n.dc(b0*s)
a5.ay=n
for(n=!r,m=0;m<b1;++m){if(n){if(!(m<b2.length))return A.a(b2,m)
l=b2[m]===-1}else l=!1
if(l)for(k=0;k<5;++k){j=B.aD[k]
if(a5.dU(k===0&&a7?j+B.a.L(1,a9):j,q,a6)===0)return a6}else{if(r)l=m
else{if(!(m<b2.length))return A.a(b2,m)
l=b2[m]}if(!(l>=0&&l<b0))return A.a(p,l)
i=p[l]
h=i.a
for(l=h.length,g=0,f=!0,e=0,k=0;k<5;++k){j=B.aD[k]
if(k===0&&a7)j+=B.a.L(1,a9)
d=a5.dU(j,q,a5.ay)
c=a5.ay.b.b
c.toString
B.e.j(h,k,c)
if(d===0)return a6
if(f&&B.ey[k]===1){if(!(k<l))return A.a(h,k)
c=h[k]
b=c.a
c=c.b
if(!(c<b.length))return A.a(b,c)
f=b[c].a===0}if(!(k<l))return A.a(h,k)
c=h[k]
b=c.a
c=c.b
if(!(c<b.length))return A.a(b,c)
e+=b[c].a
c=a5.ay.b
c.d+=d
b=c.b
c.b=new A.d0(b.a,b.b+d)
if(k<=3){a=q[0]
for(a0=1;a0<j;++a0){if(!(a0<a8))return A.a(q,a0)
a1=q[a0]
if(a1>a)a=a1}g+=a}}i.b=f
i.d=!1
c=!1
if(f){if(1>=l)return A.a(h,1)
b=h[1]
a2=b.a
b=b.b
if(!(b<a2.length))return A.a(a2,b)
a3=a2[b].b
if(2>=l)return A.a(h,2)
b=h[2]
a2=b.a
b=b.b
if(!(b<a2.length))return A.a(a2,b)
a4=a2[b].b
if(3>=l)return A.a(h,3)
l=h[3]
b=l.a
l=l.b
if(!(l<b.length))return A.a(b,l)
l=(b[l].b<<24|a3<<16|a4)>>>0
i.c=l
if(e===0){c=h[0]
b=c.a
c=c.b
if(!(c<b.length))return A.a(b,c)
c=b[c].b<256}if(c){i.d=!0
b=h[0]
a2=b.a
b=b.b
if(!(b<a2.length))return A.a(a2,b)
i.c=(l|a2[b].b<<8)>>>0}l=c}else l=c
l=!l&&g<6
i.e=l
if(l)a5.f8(i)}}return p},
ca(a){var s
if(a<4)return a+1
s=B.a.i(a-2,1)
return B.a.L(2+(a&1),s)+this.b.a9(s)+1},
dP(a,b){var s,r,q
if(b>120)return b-120
else{s=b-1
if(!(s>=0))return A.a(B.aE,s)
r=B.aE[s]
q=(r>>>4)*a+(8-(r&15))
return q>=1?q:1}},
fL(a,b){var s,r,q,p,o,n,m,l,k=B.a.L(1,B.a.Y(8,b.e)),j=new Uint32Array(k),i=b.d
i.toString
s=J.O(B.i.gu(i),0,null)
r=J.O(B.i.gu(j),0,null)
i=b.d
if(0>=i.length)return A.a(i,0)
i=i[0]
if(0>=k)return A.a(j,0)
j[0]=i
q=4*a
for(i=s.length,p=r.length,o=r.$flags|0,n=4;n<q;++n){if(!(n<i))return A.a(s,n)
m=s[n]
l=n-4
if(!(l<p))return A.a(r,l)
l=r[l]
o&2&&A.c(r)
if(!(n<p))return A.a(r,n)
r[n]=m+l&255}for(q=4*k;n<q;++n){o&2&&A.c(r)
if(!(n<p))return A.a(r,n)
r[n]=0}b.d=j
return!0},
bN(a,b,c,d,e){var s
if(c===0||a==null)return 0
s=b*B.a.i(e,c)+B.a.i(d,c)
if(!(s<a.length))return A.a(a,s)
return a[s]},
dE(a,b){var s=this,r=s.bN(s.as,s.Q,s.z,a,b),q=s.ax
if(!(r<q.length))return A.a(q,r)
return q[r]}}
A.eM.prototype={
ia(a,b){return this.fM(a,b)}}
A.fh.prototype={
bU(){var s,r,q,p=this.a
if(p<32){s=this.d
r=B.a.ad(s[0],p)
s=s[1]
if(!(p>=0))return A.a(B.N,p)
q=r+((s&B.N[p])>>>0)*(B.N[32-p]+1)}else{s=this.d
q=p===32?s[1]:B.a.ad(s[1],p-32)}return q},
a9(a){var s,r,q=this
if(!q.b&&a<25){s=q.bU()
if(!(a<33))return A.a(B.N,a)
r=B.N[a]
q.a+=a
q.bo()
return(s&r)>>>0}else{q.b=!0
throw A.h(A.C("Not enough data in input."))}},
bo(){var s,r,q,p=this,o=p.c,n=p.d,m=n.$flags|0,l=o.c
for(;;){if(!(p.a>=8&&o.d<l))break
s=J.e(o.a,o.d++)
r=n[0]
q=n[1]
m&2&&A.c(n)
n[0]=(r>>>8)+(q&255)*16777216
n[1]=q>>>8
n[1]=(n[1]|s*16777216)>>>0
p.a-=8}}}
A.hM.prototype={}
A.bQ.prototype={
ar(){return"VP8LImageTransformType."+this.b}}
A.fi.prototype={
io(a,b,c,d,e,f){var s,r,q,p,o=this,n=o.b
switch(o.a.a){case 2:o.hQ(e,f,(b-a)*n)
break
case 0:o.it(a,b,c,d,e,f)
if(b!==o.c){s=f-n
B.i.X(e,s,s+n,c,f+(b-a-1)*n)}break
case 1:o.hX(a,b,c,d,e,f)
break
case 3:if(d===f&&o.e>0){r=b-a
q=r*A.be(n,o.e)
p=f+r*n-q
B.i.X(e,p,p+q,c,f)
o.en(a,b,c,p,e,f)}else o.en(a,b,c,d,e,f)
break}},
hW(a,b,c,d){var s,r,q,p,o,n,m=this.e,l=B.a.Y(8,m),k=this.b,j=this.d
if(l<8){s=B.a.L(1,m)-1
r=B.a.L(1,l)-1
for(q=a;q<b;++q)for(p=0,o=0;o<k;++o){if((o&s)>>>0===0){p=J.e(c.a,c.d);++c.d}m=(p&r)>>>0
if(!(m>=0&&m<j.length))return A.a(j,m)
m=j[m]
J.a1(d.a,d.d,m>>>8&255);++d.d
p=B.a.i(p,l)}}else for(q=a;q<b;++q)for(o=0;o<k;++o){n=J.e(c.a,c.d);++c.d
if(!(n>=0&&n<j.length))return A.a(j,n)
m=j[n]
J.a1(d.a,d.d,m>>>8&255);++d.d}},
en(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=this.e,i=B.a.Y(8,j),h=this.b,g=this.d
if(i<8){s=B.a.L(1,j)-1
r=B.a.L(1,i)-1
for(j=e.$flags|0,q=c.length,p=a;p<b;++p)for(o=0,n=0;n<h;++n,f=l){if((n&s)>>>0===0){m=d+1
if(!(d>=0&&d<q))return A.a(c,d)
o=c[d]>>>8&255
d=m}l=f+1
k=o&r
if(!(k>=0&&k<g.length))return A.a(g,k)
k=g[k]
j&2&&A.c(e)
if(!(f>=0&&f<e.length))return A.a(e,f)
e[f]=k
o=B.a.Y(o,i)}}else for(j=c.length,q=e.$flags|0,p=a;p<b;++p)for(n=0;n<h;++n,f=l,d=m){l=f+1
g.toString
m=d+1
if(!(d>=0&&d<j))return A.a(c,d)
k=c[d]>>>8&255
if(!(k<g.length))return A.a(g,k)
k=g[k]
q&2&&A.c(e)
if(!(f>=0&&f<e.length))return A.a(e,f)
e[f]=k}},
hX(a5,a6,a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.b,a1=a.e,a2=B.a.L(1,a1)-1,a3=A.be(a0,a1),a4=B.a.i(a5,a.e)*a3
for(a1=a7.length,s=a9.$flags|0,r=a5;r<a6;){q=new Uint8Array(3)
for(p=a4,o=0;o<a0;++o){if((o&a2)>>>0===0){n=a.d
m=p+1
if(!(p<n.length))return A.a(n,p)
n=n[p]
q[0]=n&255
q[1]=n>>>8&255
q[2]=n>>>16&255
p=m}n=b0+o
l=a8+o
if(!(l<a1))return A.a(a7,l)
l=a7[l]
k=l>>>8&255
j=q[0]
i=$.jC()
i.$flags&2&&A.c(i)
i[0]=j
j=$.ly()
if(0>=j.length)return A.a(j,0)
h=j[0]
i[0]=k
g=j[0]
f=$.jz()
f.$flags&2&&A.c(f)
f[0]=h*g
e=$.lu()
if(0>=e.length)return A.a(e,0)
d=(l>>>16&255)+(e[0]>>>5)>>>0&255
i[0]=q[1]
h=j[0]
i[0]=k
f[0]=h*j[0]
c=e[0]
i[0]=q[2]
h=j[0]
i[0]=d
f[0]=h*j[0]
b=e[0]
s&2&&A.c(a9)
if(!(n<a9.length))return A.a(a9,n)
a9[n]=(l&4278255360|d<<16|((l&255)+(c>>>5)>>>0)+(b>>>5)>>>0&255)>>>0}b0+=a0
a8+=a0;++r
if((r&a2)>>>0===0)a4+=a3}},
bv(a,b){return(((a&4278255360)>>>0)+((b&4278255360)>>>0)&4278255360|(a&16711935)+(b&16711935)&16711935)>>>0},
it(b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=4278190080,b0=a8.b
if(b1===0){s=b3.length
if(!(b4<s))return A.a(b3,b4)
r=a8.bv(b3[b4],a9)
b5.$flags&2&&A.c(b5)
q=b5.length
if(!(b6<q))return A.a(b5,b6)
b5[b6]=r
p=b4+1
o=b6+1
n=b0-1
m=b5[b6]
for(r=b5.$flags|0,l=0;l<n;++l){k=p+l
if(!(k<s))return A.a(b3,k)
m=a8.bv(b3[k],m)
k=o+l
r&2&&A.c(b5)
if(!(k<q))return A.a(b5,k)
b5[k]=m}b4+=b0
b6+=b0;++b1}s=a8.e
j=B.a.L(1,s)
i=j-1
h=A.be(b0,s)
g=B.a.i(b1,a8.e)*h
for(s=b3.length,r=~i,q=b5.length,f=b1;f<b2;){k=b6-b0
if(!(k>=0&&k<q))return A.a(b5,k)
e=b5[k]
if(!(b4<s))return A.a(b3,b4)
k=a8.bv(b3[b4],e)
b5.$flags&2&&A.c(b5)
if(!(b6<q))return A.a(b5,b6)
b5[b6]=k
for(d=g,c=1;c<b0;c=a1,d=b){k=a8.d
b=d+1
if(!(d<k.length))return A.a(k,d)
a=k[d]>>>8&15
a0=$.ns[a]
a1=((c&r)>>>0)+j
if(a1>b0)a1=b0
a2=b4+c
k=b6+c
a3=k-b0
a4=a1-c
if(a===0)for(a5=b5.$flags|0,l=0;l<a4;++l){a6=k+l
a7=a2+l
if(!(a7>=0&&a7<s))return A.a(b3,a7)
a7=a8.bv(b3[a7],a9)
a5&2&&A.c(b5)
if(!(a6>=0&&a6<q))return A.a(b5,a6)
b5[a6]=a7}else if(a===1){a5=k-1
if(!(a5>=0&&a5<q))return A.a(b5,a5)
m=b5[a5]
for(a5=b5.$flags|0,l=0;l<a4;++l){a6=a2+l
if(!(a6>=0&&a6<s))return A.a(b3,a6)
m=a8.bv(b3[a6],m)
a6=k+l
a5&2&&A.c(b5)
if(!(a6>=0&&a6<q))return A.a(b5,a6)
b5[a6]=m}}else for(l=0;l<a4;++l){a5=k+l
a6=a5-1
if(!(a6>=0&&a6<q))return A.a(b5,a6)
e=a0.$3(b5[a6],b5,a3+l)
a6=a2+l
if(!(a6>=0&&a6<s))return A.a(b3,a6)
a6=a8.bv(b3[a6],e)
b5.$flags&2&&A.c(b5)
if(!(a5>=0&&a5<q))return A.a(b5,a5)
b5[a5]=a6}}b4+=b0
b6+=b0;++f
if((f&i)>>>0===0)g+=h}},
hQ(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=a.$flags|0,q=0;q<c;++q){p=b+q
if(!(p<s))return A.a(a,p)
o=a[p]
n=o>>>8&255
r&2&&A.c(a)
a[p]=(o&4278255360|(o&16711935)+(n<<16|n)&16711935)>>>0}}}
A.hR.prototype={
ger(){var s=this,r=s.d
if(r>1||s.e>=4||s.f>1||s.r!==0)return!1
return!0},
i1(a,b,c){var s,r,q,p,o,n,m=this
if(!m.ger())return!1
s=m.e
if(!(s<4))return A.a(B.aX,s)
r=B.aX[s]
if(m.d===0){s=m.b
q=a*s
p=m.a
B.c.X(c,q,q+b*s,p.a,p.d-p.b+q)}else{s=a+b
p=m.x
p===$&&A.b()
p.dx=c
o=p.c
if(m.y)s=p.fm(o.a,o.b,s)
else{n=p.cx
n.toString
p=p.cz(n,o.a,o.b,s,t.d6.a(p.gi9()))
s=p}if(!s)return!1}if(r!=null){s=m.b
r.$6(s,m.c,s,a,b,c)}if(m.f===1)if(!m.fG(c,m.b,m.c,a,b))return!1
if(a+b>=m.c)m.w=!0
return!0},
fG(a,b,c,d,e){if(b<=0||c<=0||d<0||e<0||d+e>c)return!1
return!0}}
A.dR.prototype={
f_(a,b){a.K()
this.w=0
this.x=a.d-a.b
this.y=b-16}}
A.eN.prototype={}
A.eD.prototype={}
A.eE.prototype={}
A.d0.prototype={
gl(a){return this.a.length-this.b},
m(a,b){var s=this.a,r=this.b+b
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]}}
A.d_.prototype={
m(a,b){var s=this.a
if(!(b<s.length))return A.a(s,b)
return s[b]},
bs(a,b){var s,r,q,p,o,n=b.bU()&255,m=this.a
if(!(a<m.length))return A.a(m,a)
s=m[a]
r=s.a
q=s.b+n
if(!(q<r.length))return A.a(r,q)
p=r[q].a-8
if(p>0){b.a+=8
o=b.bU()
m=m[a]
s=m.a
r=m.b+n
if(!(r<s.length))return A.a(s,r)
n=n+s[r].b+((o&B.a.a_(1,p)-1)>>>0)}else m=s
s=b.a
r=m.a
m=m.b+n
if(!(m>=0&&m<r.length))return A.a(r,m)
m=r[m]
b.a=s+m.a
return m.b}}
A.d1.prototype={}
A.eF.prototype={
dc(a){var s=this.b=this.a,r=A.iT(a)
s.e=a
s.b=s.a=r}}
A.cF.prototype={
ar(){return"WebPFormat."+this.b}}
A.bf.prototype={
gT(){return this.a},
gV(){return this.b}}
A.de.prototype={}
A.fk.prototype={
cX(a){var s,r=A.F(t.L.a(a),!1,null,0)
this.c=r
try{r=this.dD(r)
return r}catch(s){return!1}},
cq(a){return A.ej(new A.hT(this,t.L.a(a)),t.g2)},
hL(a){var s,r,q,p=this,o=null,n=A.F(t.L.a(a),!1,o,0)
p.c=n
if(!p.dD(n))return o
n=new A.de(B.P,A.o([],t.J))
p.a=n
s=p.c
s.toString
if(!p.dF(s,n))return o
n=p.a
switch(n.f.a){case 3:A.eg(n.a,n.b,p.b)
for(n=p.a.z,s=n.length,r=0;r<n.length;n.length===s||(0,A.a0)(n),++r){q=n[r]
A.eg(q.c,q.d,p.b)}n=p.a
n.as=n.z.length
return n
case 2:s=p.c
s.toString
s.d=n.ay
if(!A.j7(s,n).bS())return o
n=p.a
A.eg(n.a,n.b,p.b)
n=p.a
n.as=n.z.length
return n
case 1:s=p.c
s.toString
s.d=n.ay
if(!A.j5(s,n).bS())return o
n=p.a
A.eg(n.a,n.b,p.b)
n=p.a
n.as=n.z.length
return n
case 0:throw A.h(A.C("Unknown format for WebP"))}},
cU(a){return A.ej(new A.hS(this,a),t.H)},
fz(a){var s,r,q,p,o=this,n=o.c
if(n==null||o.a==null)return null
s=o.a
if(s.e){s=s.z
r=s.length
if(a>=r)return null
if(!(a<r))return A.a(s,a)
q=s[a]
s=q.y
s===$&&A.b()
r=q.x
r===$&&A.b()
return o.e9(n.bm(s,r),a)}r=s.f
if(r===B.a2){p=n.bm(s.ch,s.ay)
n=o.a
n.toString
return A.j7(p,n).bp()}else if(r===B.ah){p=n.bm(s.ch,s.ay)
n=o.a
n.toString
return A.j5(p,n).bp()}return null},
e9(a,b){var s,r,q,p=null,o=A.o([],t.J),n=new A.de(B.P,o)
if(!this.dF(a,n))return p
if(n.f===B.P)return p
n.as=this.a.as
if(n.e){s=o.length
if(b>=s)return p
if(!(b<s))return A.a(o,b)
r=o[b]
o=r.y
o===$&&A.b()
s=r.x
s===$&&A.b()
return this.e9(a.bm(o,s),b)}else{q=a.bm(n.ch,n.ay)
o=n.f
if(o===B.a2)return A.j7(q,n).bp()
else if(o===B.ah)return A.j5(q,n).bp()}return p},
dD(a){if(a.b6(4)!=="RIFF")return!1
a.O()
if(a.b6(4)!=="WEBP")return!1
return!0},
dF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=a.c,r=a.b;a.d<s;){q=a.b6(4)
p=a.O()
o=p+1>>>1<<1>>>0
n=a.d
m=n-r
switch(q){case"VP8X":if(!this.fW(a,b))return!1
break
case"VP8 ":b.ay=m
b.ch=p
b.f=B.ah
break
case"VP8L":b.ay=m
b.ch=p
b.f=B.a2
break
case"ALPH":b.toString
n=a.a
l=a.e
k=J.N(n)
j=k.gl(n)
k=k.gl(n)
n=new A.ad(n,0,Math.min(j,k),0,l)
b.at=n
n.d=a.d
a.d+=o
break
case"ANIM":b.f=B.i8
i=a.O()
n=new Uint8Array(4)
n[0]=i>>>16&255
n[1]=i>>>8&255
n[2]=i&255
n[3]=i>>>24&255
a.W()
break
case"ANMF":if(!this.fS(a,b,p))return!1
break
case"ICCP":b.toString
h=a.aO(p)
a.d=a.d+(h.c-h.d)
b.r=h.a1()
break
case"EXIF":b.toString
b.w=a.b6(p)
break
case"XMP ":b.toString
a.b6(p)
break
default:a.d=n+o
break}n=a.d
g=o-(n-r-m)
if(g>0)a.d=n+g}if(!b.d)b.d=b.at!=null
return b.f!==B.P},
fW(a,b){var s,r,q,p,o=a.K()
if((o&192)!==0)return!1
s=B.a.i(o,4)
r=B.a.i(o,1)
if((o&1)!==0)return!1
if(a.b7()!==0)return!1
q=a.b7()
p=a.b7()
b.a=q+1
b.b=p+1
b.e=(r&1)!==0
b.d=(s&1)!==0
return!0},
fS(a,b,c){var s,r,q
a.b7()
a.b7()
s=a.b7()
r=a.b7()
a.b7()
q=new A.eN(s+1,r+1)
q.f_(a,c)
if(q.w!==0)return!1
B.e.N(b.z,q)
return!0}}
A.hT.prototype={
$0(){return this.a.hL(this.b)},
$S:27}
A.hS.prototype={
$0(){return this.a.fz(this.b)},
$S:4}
A.eG.prototype={
ar(){return"IccProfileCompression."+this.b}}
A.b7.prototype={
hY(){var s,r=this
if(r.b===B.a6)return r.c
s=B.an.eq(t.L.a(r.c),null,15)
r.c=s
r.b=B.a6
return s}}
A.fQ.prototype={
ar(){return"FrameType."+this.b}}
A.aL.prototype={
gaa(){var s=this.x
return s===$?this.x=A.o([],t.g):s},
eY(a,b,c,d){var s,r,q,p=this,o=a.gG(),n=a.gbd(),m=a.a
p.dv(d,b,o,n,m==null?null:m.gM())
o=a.b
if(o!=null)p.b=A.f_(o,t.N,t.I)
o=a.d
if(o!=null){n=t.N
p.d=A.f_(o,n,n)}B.e.N(p.gaa(),p)
if(!c){s=a.gaa().length
for(o=t.g,r=1;r<s;++r){q=a.x
if(q===$)q=a.x=A.o([],o)
if(!(r<q.length))return A.a(q,r)
p.bi(A.fV(q[r],b,!1,d))}}},
eX(a,b,c){var s,r,q,p,o=this,n=a.b
if(n!=null)o.b=A.f_(n,t.N,t.I)
n=a.d
if(n!=null){s=t.N
o.d=A.f_(n,s,s)}B.e.N(o.gaa(),o)
if(!b&&a.gaa().length>1){r=a.gaa().length
for(n=t.g,q=1;q<r;++q){p=a.x
if(p===$)p=a.x=A.o([],n)
if(!(q<p.length))return A.a(p,q)
o.bi(A.aR(p[q],!1,!1))}}},
bi(a){var s=this
if(a==null)a=A.aR(s,!0,!0)
a.z=s.gaa().length
if(s.gaa().length===0||B.e.gcj(s.gaa())!==a)B.e.N(s.gaa(),a)
return a},
cf(){return this.bi(null)},
dv(a,b,c,d,e){var s,r,q=this,p=null
switch(c.a){case 0:if(e==null){s=B.b.aH(a*d/8)
r=new A.cq($,s,p,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.aH(a/8)
r=new A.cq($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 1:if(e==null){s=B.b.aH(a*(d<<1>>>0)/8)
r=new A.cr($,s,p,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.aH(a/4)
r=new A.cr($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 2:if(e==null){if(d===2)s=a
else if(d===4)s=a*2
else s=d===3?B.b.aH(a*1.5):B.b.aH(a/2)
r=new A.cs($,s,p,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.aH(a/2)
r=new A.cs($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 3:if(e==null)q.a=A.jV(a,b,d)
else q.a=new A.ct(new Uint8Array(a*b),e,a,b,1)
break
case 4:s=a*b
if(e==null)q.a=new A.bu(new Uint16Array(s*d),p,a,b,d)
else q.a=new A.bu(new Uint16Array(s),e,a,b,1)
break
case 5:q.a=new A.d9(new Uint32Array(a*b*d),a,b,d)
break
case 6:q.a=new A.d8(new Int8Array(a*b*d),a,b,d)
break
case 7:q.a=new A.d6(new Int16Array(a*b*d),a,b,d)
break
case 8:q.a=new A.d7(new Int32Array(a*b*d),a,b,d)
break
case 9:q.a=new A.d3(new Uint16Array(a*b*d),a,b,d)
break
case 10:q.a=new A.d4(new Float32Array(a*b*d),a,b,d)
break
case 11:q.a=new A.d5(new Float64Array(a*b*4*d),a,b,d)
break}},
v(a){var s=this
return"Image("+s.gT()+", "+s.gV()+", "+s.gG().b+", "+s.gbd()+")"},
gT(){var s=this.a
s=s==null?null:s.a
return s==null?0:s},
gV(){var s=this.a
s=s==null?null:s.b
return s==null?0:s},
gG(){var s=this.a
s=s==null?null:s.gG()
return s==null?B.k:s},
gbj(){var s=this.e
return s==null?this.e=new A.bp(A.Z(t.N,t.P)):s},
gB(a){var s=this.a
return s.gB(s)},
gu(a){var s=this.a
s=s==null?null:s.gu(s)
if(s==null)s=B.c.gu(new Uint8Array(0))
return s},
a1(){var s=this.a
s=s==null?null:J.Q(s.gu(s))
return s==null?J.Q(this.gu(0)):s},
gbd(){var s=this.a
s=s==null?null:s.gM()
s=s==null?null:s.b
if(s==null){s=this.a
s=s==null?null:s.c}return s==null?0:s},
gbl(){var s=this.a
return(s==null?null:s.gM())!=null},
gak(){var s=this.a
s=s==null?null:s.gak()
return s==null?0:s},
av(a,b,c,d){var s=this.a
s=s==null?null:s.av(a,b,c,d)
if(s==null)s=new A.bn(new Uint8Array(0))
return s},
U(a,b,c){var s=this.a
s=s==null?null:s.U(a,b,c)
return s==null?new A.K():s},
ab(a,b){if(a<0||a>=this.gT()||b<0||b>=this.gV())return new A.K()
return this.U(a,b,null)},
d1(a,b,c){switch(c.a){case 0:return this.ab(B.b.h(a),B.b.h(b))
case 1:case 3:return this.eI(a,b)
case 2:return this.eH(a,b)}},
eI(a,b){var s,r,q,p,o,n,m=this,l=B.b.h(a),k=l-(a>=0?0:1),j=k+1
l=B.b.h(b)
s=l-(b>=0?0:1)
r=s+1
l=new A.fX(a-k,b-s)
q=m.ab(k,s)
p=r>=m.gV()?q:m.ab(k,r)
o=j>=m.gT()?q:m.ab(j,s)
n=j>=m.gT()||r>=m.gV()?q:m.ab(j,r)
return m.av(l.$4(q.gn(),o.gn(),p.gn(),n.gn()),l.$4(q.gp(),o.gp(),p.gp(),n.gp()),l.$4(q.gq(),o.gq(),p.gq(),n.gq()),l.$4(q.gt(),o.gt(),p.gt(),n.gt()))},
eH(c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=this,c3=B.b.h(c8),c4=c3-(c8>=0?0:1),c5=c4-1,c6=c4+1,c7=c4+2
c3=B.b.h(c9)
s=c3-(c9>=0?0:1)
r=s-1
q=s+1
p=s+2
o=c8-c4
n=c9-s
c3=new A.fW()
m=c2.ab(c4,s)
l=c5<0
k=!l
j=!k||r<0?m:c2.ab(c5,r)
i=r<0
h=i?m:c2.ab(c4,r)
g=i||c6>=c2.gT()?m:c2.ab(c6,r)
f=c7>=c2.gT()||i?m:c2.ab(c7,r)
e=c3.$5(o,j.gn(),h.gn(),g.gn(),f.gn())
d=c3.$5(o,j.gp(),h.gp(),g.gp(),f.gp())
c=c3.$5(o,j.gq(),h.gq(),g.gq(),f.gq())
b=c3.$5(o,j.gt(),h.gt(),g.gt(),f.gt())
a=l?m:c2.ab(c5,s)
a0=c6>=c2.gT()?m:c2.ab(c6,s)
a1=c7>=c2.gT()?m:c2.ab(c7,s)
a2=c3.$5(o,a.gn(),m.gn(),a0.gn(),a1.gn())
a3=c3.$5(o,a.gp(),m.gp(),a0.gp(),a1.gp())
a4=c3.$5(o,a.gq(),m.gq(),a0.gq(),a1.gq())
a5=c3.$5(o,a.gt(),m.gt(),a0.gt(),a1.gt())
a6=!k||q>=c2.gV()?m:c2.ab(c5,q)
a7=q>=c2.gV()?m:c2.ab(c4,q)
a8=c6>=c2.gT()||q>=c2.gV()?m:c2.ab(c6,q)
a9=c7>=c2.gT()||q>=c2.gV()?m:c2.ab(c7,q)
b0=c3.$5(o,a6.gn(),a7.gn(),a8.gn(),a9.gn())
b1=c3.$5(o,a6.gp(),a7.gp(),a8.gp(),a9.gp())
b2=c3.$5(o,a6.gq(),a7.gq(),a8.gq(),a9.gq())
b3=c3.$5(o,a6.gt(),a7.gt(),a8.gt(),a9.gt())
b4=!k||p>=c2.gV()?m:c2.ab(c5,p)
b5=p>=c2.gV()?m:c2.ab(c4,p)
b6=c6>=c2.gT()||p>=c2.gV()?m:c2.ab(c6,p)
b7=c7>=c2.gT()||p>=c2.gV()?m:c2.ab(c7,p)
b8=c3.$5(o,b4.gn(),b5.gn(),b6.gn(),b7.gn())
b9=c3.$5(o,b4.gp(),b5.gp(),b6.gp(),b7.gp())
c0=c3.$5(o,b4.gq(),b5.gq(),b6.gq(),b7.gq())
c1=c3.$5(o,b4.gt(),b5.gt(),b6.gt(),b7.gt())
return c2.av(c3.$5(n,e,a2,b0,b8),c3.$5(n,d,a3,b1,b9),c3.$5(n,c,a4,b2,c0),c3.$5(n,b,a5,b3,c1))},
c2(a,b,c){var s
if(t.dv.b(c))if(c.gaJ().gM()!=null)if(this.gbl()){s=this.a
if(s!=null)s.aG(a,b,c.gD(),0,0)
return}s=this.a
if(s!=null)s.aM(a,b,c.gn(),c.gp(),c.gq(),c.gt())},
hZ(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=a3.gbd(),a6=B.b_.m(0,a8),a7=!1
if(a8===a3.gG())if(a5===a3.gbd()){s=a3.a
a7=(s==null?a4:s.gM())==null}if(a7){r=A.aR(a3,!1,!1)
return r}for(a7=a3.gaa(),s=a7.length,q=t.N,p=t.q,o=a4,n=0;n<a7.length;a7.length===s||(0,A.a0)(a7),++n,o=f){m=a7[n]
l=m.a
k=l==null
j=k?a4:l.a
if(j==null)j=0
l=k?a4:l.b
if(l==null)l=0
k=m.e
k=k==null?a4:A.cY(k)
i=m.c
if(i==null)i=a4
else{h=i.a
g=i.b
i=i.c
i=new A.b7(h,g,new Uint8Array(i.subarray(0,A.fA(0,a4,i.length))))}h=m.w
r=A.cp(a4,k,a8,m.y,h,l,i,m.r,a5,a4,j,!1)
l=m.d
r.siE(l!=null?A.f_(l,q,q):a4)
if(o!=null){o.bi(r)
f=o}else f=r
l=r.a
e=l==null?a4:l.gM()
l=r.a
l=l==null?a4:l.gM()
d=l==null?a4:l.gG()
if(d==null)d=a8
l=m.a
if(e!=null){c=A.Z(p,p)
b=l==null?a4:l.U(0,0,a4)
if(b==null)b=new A.K()
for(l=r.a,l=l.gB(l),a=0;l.C();){a0=l.gJ()
a1=A.l6(B.b.bk(b.ga5()*255),B.b.bk(b.ga2()*255),B.b.bk(b.ga3()*255),0)
if(c.aC(a1)){k=c.m(0,a1)
k.toString
a0.sD(k)}else{c.j(0,a1,a)
a0.sD(a)
a2=A.kX(b,a6,d,a5,a4)
e.cp(a,a2.gn(),a2.gp(),a2.gq());++a}b.C()}}else{b=l==null?a4:l.U(0,0,a4)
if(b==null)b=new A.K()
for(l=r.a,l=l.gB(l);l.C();){A.kX(b,a6,a4,a4,l.gJ())
b.C()}}}o.toString
return o},
hR(a){var s,r,q,p
t.ck.a(a)
if(this.d==null){s=t.N
this.d=A.Z(s,s)}for(s=new A.T(a,a.r,a.e,A.j(a).k("T<1>"));s.C();){r=s.d
q=this.d
q.toString
p=a.m(0,r)
p.toString
q.j(0,r,p)}},
siE(a){this.d=t.cZ.a(a)}}
A.fX.prototype={
$4(a,b,c,d){var s=this.b
return a+this.a*(b-a+s*(a+d-c-b))+s*(c-a)},
$S:28}
A.fW.prototype={
$5(a,b,c,d,e){var s=-b,r=a*a
return c+0.5*(a*(s+d)+r*(2*b-5*c+4*d-e)+r*a*(s+3*c-3*d+e))},
$S:29}
A.a4.prototype={
gM(){return null}}
A.d3.prototype={
aR(a){var s=this,r=s.d
if(a)r=new Uint16Array(r.length)
else r=new Uint16Array(A.B(r))
return new A.d3(r,s.a,s.b,s.c)},
gG(){return B.L},
gu(a){return B.n.gu(this.d)},
gak(){return 16},
gam(){return this.a*this.c*2},
gB(a){return A.k5(this)},
gl(a){return this.d.byteLength},
gaS(){return!0},
av(a,b,c,d){var s=new Uint16Array(4),r=new A.c0(s)
s[0]=A.I(a)
s[1]=A.I(b)
s[2]=A.I(c)
s[3]=A.I(d)
s=r
return s},
U(a,b,c){var s,r
if(c==null||!(c instanceof A.bC)||c.d!==this)c=A.k5(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aG(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.I(c)
p.$flags&2&&A.c(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=o
if(r>2){r=q+1
o=A.I(d)
if(!(r<s))return A.a(p,r)
p[r]=o
o=q+2
r=A.I(e)
if(!(o<s))return A.a(p,o)
p[o]=r}},
aM(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=A.I(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q===2){q=p+1
n=A.I(f)
if(!(q<s))return A.a(o,q)
o[q]=n}else if(q>2){n=p+1
r=A.I(d)
if(!(n<s))return A.a(o,n)
o[n]=r
r=p+2
n=A.I(e)
if(!(r<s))return A.a(o,r)
o[r]=n
if(q>3){q=p+3
n=A.I(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
v(a){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"}}
A.d4.prototype={
aR(a){var s=this,r=s.d
if(a)r=new Float32Array(r.length)
else r=new Float32Array(A.B(r))
return new A.d4(r,s.a,s.b,s.c)},
gG(){return B.H},
gu(a){return B.A.gu(this.d)},
gak(){return 32},
gB(a){return A.k6(this)},
gl(a){return this.d.byteLength},
gam(){return this.a*this.c*4},
gaS(){return!0},
av(a,b,c,d){var s=new Float32Array(4),r=new A.c1(s)
s[0]=a
s[1]=b
s[2]=c
s[3]=d
s=r
return s},
U(a,b,c){var s,r
if(c==null||!(c instanceof A.bD)||c.d!==this)c=A.k6(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aG(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d
p.$flags&2&&A.c(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=c
if(r>2){r=q+1
if(!(r<s))return A.a(p,r)
p[r]=d
r=q+2
if(!(r<s))return A.a(p,r)
p[r]=e}},
aM(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=c
if(q===2){q=p+1
if(!(q<s))return A.a(o,q)
o[q]=f}else if(q>2){r=p+1
if(!(r<s))return A.a(o,r)
o[r]=d
r=p+2
if(!(r<s))return A.a(o,r)
o[r]=e
if(q>3){q=p+3
if(!(q<s))return A.a(o,q)
o[q]=f}}},
v(a){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"}}
A.d5.prototype={
aR(a){var s=this,r=s.d
if(a)r=new Float64Array(r.length)
else r=new Float64Array(A.B(r))
return new A.d5(r,s.a,s.b,s.c)},
gG(){return B.I},
gu(a){return B.B.gu(this.d)},
gl(a){return this.d.byteLength},
gak(){return 64},
gB(a){return A.k7(this)},
gam(){return this.a*this.c*8},
gaS(){return!0},
av(a,b,c,d){var s=new Float64Array(4),r=new A.c2(s)
s[0]=a
s[1]=b
s[2]=c
s[3]=d
s=r
return s},
U(a,b,c){var s,r
if(c==null||!(c instanceof A.bE)||c.d!==this)c=A.k7(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aG(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d
p.$flags&2&&A.c(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=c
if(r>2){r=q+1
if(!(r<s))return A.a(p,r)
p[r]=d
r=q+2
if(!(r<s))return A.a(p,r)
p[r]=e}},
aM(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=c
if(q===2){q=p+1
if(!(q<s))return A.a(o,q)
o[q]=f}else if(q>2){r=p+1
if(!(r<s))return A.a(o,r)
o[r]=d
r=p+2
if(!(r<s))return A.a(o,r)
o[r]=e
if(q>3){q=p+3
if(!(q<s))return A.a(o,q)
o[q]=f}}},
v(a){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"}}
A.d6.prototype={
aR(a){var s=this,r=s.d
if(a)r=new Int16Array(r.length)
else r=new Int16Array(A.B(r))
return new A.d6(r,s.a,s.b,s.c)},
gG(){return B.T},
gu(a){return B.C.gu(this.d)},
gB(a){return A.k8(this)},
gl(a){return this.d.byteLength},
gaS(){return!0},
gak(){return 16},
gam(){return this.a*this.c*2},
av(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new Int16Array(4),n=new A.c3(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
U(a,b,c){var s,r
if(c==null||!(c instanceof A.bF)||c.d!==this)c=A.k8(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aG(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=o
if(r>2){r=q+1
o=B.b.h(d)
if(!(r<s))return A.a(p,r)
p[r]=o
o=q+2
r=B.b.h(e)
if(!(o<s))return A.a(p,o)
p[o]=r}},
aM(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q===2){q=p+1
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}else if(q>2){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
r=p+2
n=B.b.h(e)
if(!(r<s))return A.a(o,r)
o[r]=n
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
v(a){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"}}
A.d7.prototype={
aR(a){var s=this,r=s.d
if(a)r=new Int32Array(r.length)
else r=new Int32Array(A.B(r))
return new A.d7(r,s.a,s.b,s.c)},
gG(){return B.U},
gu(a){return B.q.gu(this.d)},
gak(){return 32},
gam(){return this.a*this.c*4},
gB(a){return A.k9(this)},
gl(a){return this.d.byteLength},
gaS(){return!0},
av(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new Int32Array(4),n=new A.c4(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
U(a,b,c){var s,r
if(c==null||!(c instanceof A.bG)||c.d!==this)c=A.k9(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aG(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=o
if(r>2){r=q+1
o=B.b.h(d)
if(!(r<s))return A.a(p,r)
p[r]=o
o=q+2
r=B.b.h(e)
if(!(o<s))return A.a(p,o)
p[o]=r}},
aM(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q===2){q=p+1
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}else if(q>2){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
r=p+2
n=B.b.h(e)
if(!(r<s))return A.a(o,r)
o[r]=n
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
v(a){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"}}
A.d8.prototype={
aR(a){var s=this,r=s.d
if(a)r=new Int8Array(r.length)
else r=new Int8Array(A.B(r))
return new A.d8(r,s.a,s.b,s.c)},
gG(){return B.S},
gu(a){return B.O.gu(this.d)},
gam(){return this.a*this.c},
gB(a){return A.ka(this)},
gl(a){return this.d.byteLength},
gaS(){return!0},
gak(){return 8},
av(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new Int8Array(4),n=new A.c5(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
U(a,b,c){var s,r
if(c==null||!(c instanceof A.bH)||c.d!==this)c=A.ka(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aG(a,b,c,d,e){var s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=o
if(r>2){r=q+1
o=B.b.h(d)
if(!(r<s))return A.a(p,r)
p[r]=o
o=q+2
r=B.b.h(e)
if(!(o<s))return A.a(p,o)
p[o]=r}},
aM(a,b,c,d,e,f){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q===2){q=p+1
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}else if(q>2){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
r=p+2
n=B.b.h(e)
if(!(r<s))return A.a(o,r)
o[r]=n
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
v(a){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"}}
A.cq.prototype={
iP(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.J()
this.d=s},
aR(a){var s,r=this,q=r.d
if(a){q===$&&A.b()
q=new Uint8Array(q.length)}else{q===$&&A.b()
q=new Uint8Array(A.B(q))}s=r.f
s=s==null?null:s.I()
return new A.cq(q,r.e,s,r.a,r.b,r.c)},
gG(){return B.F},
gl(a){var s=this.d
s===$&&A.b()
return s.byteLength},
gE(){var s=this.f
s=s==null?null:s.gE()
return s==null?1:s},
gaS(){return!1},
gu(a){var s=this.d
s===$&&A.b()
return B.c.gu(s)},
gak(){return 1},
gB(a){return A.hl(this)},
av(a,b,c,d){var s=new A.c6(4,0)
s.a7(B.b.h(a),B.b.h(b),B.b.h(c),B.b.h(d))
return s},
U(a,b,c){if(c==null||!(c instanceof A.bI)||c.f!==this)c=A.hl(this)
c.aU(a,b)
return c},
aG(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.hl(r):s).aU(a,b)
r.r.ao(c,d,e)},
aM(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.hl(r):s).aU(a,b)
r.r.a7(c,d,e,f)},
v(a){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
gam(){return this.e},
gM(){return this.f}}
A.bu.prototype={
aR(a){var s,r=this,q=r.d
if(a)q=new Uint16Array(q.length)
else q=new Uint16Array(A.B(q))
s=r.e
s=s==null?null:s.I()
return new A.bu(q,s,r.a,r.b,r.c)},
gG(){return B.u},
gu(a){return B.n.gu(this.d)},
gak(){return 16},
gE(){var s=this.e
s=s==null?null:s.gE()
return s==null?65535:s},
gam(){return this.a*this.c*2},
gB(a){return A.kb(this)},
gl(a){return this.d.byteLength},
gaS(){return!0},
av(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new Uint16Array(4),n=new A.c7(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
U(a,b,c){var s,r
if(c==null||!(c instanceof A.bJ)||c.d!==this)c=A.kb(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aG(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=o
if(r>2){r=q+1
o=B.b.h(d)
if(!(r<s))return A.a(p,r)
p[r]=o
o=q+2
r=B.b.h(e)
if(!(o<s))return A.a(p,o)
p[o]=r}},
aM(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q===2){q=p+1
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}else if(q>2){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
r=p+2
n=B.b.h(e)
if(!(r<s))return A.a(o,r)
o[r]=n
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
v(a){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
gM(){return this.e}}
A.cr.prototype={
iQ(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.J()
this.d=s},
aR(a){var s,r=this,q=r.d
if(a){q===$&&A.b()
q=new Uint8Array(q.length)}else{q===$&&A.b()
q=new Uint8Array(A.B(q))}s=r.f
s=s==null?null:s.I()
return new A.cr(q,r.e,s,r.a,r.b,r.c)},
gG(){return B.G},
gak(){return 2},
gu(a){var s=this.d
s===$&&A.b()
return B.c.gu(s)},
gB(a){return A.hm(this)},
gl(a){var s=this.d
s===$&&A.b()
return s.byteLength},
gE(){var s=this.f
s=s==null?null:s.gE()
return s==null?3:s},
gaS(){return!1},
av(a,b,c,d){var s=new A.c8(4,0)
s.a7(B.b.h(a),B.b.h(b),B.b.h(c),B.b.h(d))
return s},
U(a,b,c){if(c==null||!(c instanceof A.bK)||c.f!==this)c=A.hm(this)
c.aU(a,b)
return c},
aG(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.hm(r):s).aU(a,b)
r.r.ao(c,d,e)},
aM(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.hm(r):s).aU(a,b)
r.r.a7(c,d,e,f)},
v(a){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
gam(){return this.e},
gM(){return this.f}}
A.d9.prototype={
aR(a){var s=this,r=s.d
if(a)r=new Uint32Array(r.length)
else r=new Uint32Array(A.B(r))
return new A.d9(r,s.a,s.b,s.c)},
gG(){return B.K},
gu(a){return B.i.gu(this.d)},
gam(){return this.a*this.c*4},
gak(){return 32},
gB(a){return A.kc(this)},
gl(a){return this.d.byteLength},
gaS(){return!0},
av(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new Uint32Array(4),n=new A.c9(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
U(a,b,c){var s,r
if(c==null||!(c instanceof A.bL)||c.d!==this)c=A.kc(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aG(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=o
if(r>2){r=q+1
o=B.b.h(d)
if(!(r<s))return A.a(p,r)
p[r]=o
o=q+2
r=B.b.h(e)
if(!(o<s))return A.a(p,o)
p[o]=r}},
aM(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q===2){q=p+1
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}else if(q>2){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
r=p+2
n=B.b.h(e)
if(!(r<s))return A.a(o,r)
o[r]=n
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
v(a){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"}}
A.cs.prototype={
iR(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.J()
this.d=s},
aR(a){var s,r=this,q=r.d
if(a){q===$&&A.b()
q=new Uint8Array(q.length)}else{q===$&&A.b()
q=new Uint8Array(A.B(q))}s=r.f
s=s==null?null:s.I()
return new A.cs(q,r.e,s,r.a,r.b,r.c)},
gG(){return B.J},
gu(a){var s=this.d
s===$&&A.b()
return B.c.gu(s)},
gB(a){return A.hn(this)},
gl(a){var s=this.d
s===$&&A.b()
return s.byteLength},
gE(){var s=this.f
s=s==null?null:s.gE()
return s==null?15:s},
gaS(){return!1},
gak(){return 4},
av(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new A.ca(4,new Uint8Array(2))
o.a7(s,r,q,p)
s=o
return s},
U(a,b,c){if(c==null||!(c instanceof A.bM)||c.e!==this)c=A.hn(this)
c.aU(a,b)
return c},
aG(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.hn(r):s).aU(a,b)
r.r.ao(c,d,e)},
aM(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.hn(r):s).aU(a,b)
r.r.a7(c,d,e,f)},
v(a){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
gam(){return this.e},
gM(){return this.f}}
A.ct.prototype={
aR(a){var s,r=this,q=r.d
if(a)q=new Uint8Array(q.length)
else q=new Uint8Array(A.B(q))
s=r.e
s=s==null?null:s.I()
return new A.ct(q,s,r.a,r.b,r.c)},
gG(){return B.k},
gu(a){return B.c.gu(this.d)},
gam(){return this.a*this.c},
gak(){return 8},
gB(a){return A.kd(this)},
gl(a){return this.d.byteLength},
gE(){var s=this.e
s=s==null?null:s.gE()
return s==null?255:s},
gaS(){return!1},
av(a,b,c,d){var s=A.lV(B.b.h(B.b.S(a,0,255)),B.b.h(B.b.S(b,0,255)),B.b.h(B.b.S(c,0,255)),B.b.h(B.b.S(d,0,255)))
return s},
U(a,b,c){var s,r
if(c==null||!(c instanceof A.bN)||c.d!==this)c=A.kd(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aG(a,b,c,d,e){var s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=o
if(r>2){r=q+1
o=B.b.h(d)
if(!(r<s))return A.a(p,r)
p[r]=o
o=q+2
r=B.b.h(e)
if(!(o<s))return A.a(p,o)
p[o]=r}},
aM(a,b,c,d,e,f){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q===2){q=p+1
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}else if(q>2){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
r=p+2
n=B.b.h(e)
if(!(r<s))return A.a(o,r)
o[r]=n
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
v(a){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
gM(){return this.e}}
A.eO.prototype={
ar(){return"Interpolation."+this.b}}
A.dz.prototype={}
A.dA.prototype={
I(){return new A.dA(new Uint32Array(A.B(this.c)),this.a,this.b)},
gu(a){return B.i.gu(this.c)},
gG(){return B.K},
gE(){return 4294967295},
cp(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.h(b)
s.$flags&2&&A.c(s)
q=s.length
if(!(a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.h(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
bt(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
c0(a){var s
a*=this.b
s=this.c
if(!(a<s.length))return A.a(s,a)
return s[a]},
bZ(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r<s.length))return A.a(s,r)
return s[r]},
bY(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r<s.length))return A.a(s,r)
return s[r]},
bX(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r<s.length))return A.a(s,r)
return s[r]}}
A.bB.prototype={
I(){return new A.bB(new Uint8Array(A.B(this.c)),this.a,this.b)},
gu(a){return B.c.gu(this.c)},
gG(){return B.k},
gE(){return 255},
cp(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.h(b)
s.$flags&2&&A.c(s)
q=s.length
if(!(a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.h(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
d6(a,b,c,d,e){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.a.h(b)
s.$flags&2&&A.c(s)
q=s.length
if(!(a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.a.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){r=a+2
p=B.a.h(d)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>3){o=a+3
r=B.a.h(e)
if(!(o<q))return A.a(s,o)
s[o]=r}}}},
bt(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
c0(a){var s
a*=this.b
s=this.c
if(a>=s.length)return 0
return s[a]},
bZ(a){var s,r,q=this.b
if(q<2)return 0
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+1
if(!(r<s))return A.a(q,r)
return q[r]},
bY(a){var s,r,q=this.b
if(q<3)return 0
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+2
if(!(r<s))return A.a(q,r)
return q[r]},
bX(a){var s,r,q=this.b
if(q<4)return 255
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+3
if(!(r<s))return A.a(q,r)
return q[r]}}
A.bC.prototype={
I(){var s=this
return new A.bC(s.a,s.b,s.c,s.d)},
gG(){return B.L},
gl(a){return this.d.c},
gM(){return null},
gE(){return 1},
gaK(){return this.a},
gaL(){return this.b},
gJ(){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
m(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.V
r=r!=null?r:A.a7()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
j(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=A.I(c)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gD(){return this.gn()},
sD(a){this.sn(a)},
gn(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.V
r=r!=null?r:A.a7()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sn(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=A.I(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gp(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.V
s=s!=null?s:A.a7()
if(!(r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>1){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.V
s=s!=null?s:A.a7()
if(!(r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sp(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=A.I(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=A.I(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gq(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.V
s=s!=null?s:A.a7()
if(!(r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>2){s=s.d
r=this.c+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.V
s=s!=null?s:A.a7()
if(!(r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sq(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=A.I(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=A.I(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gt(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.V
s=s!=null?s:A.a7()
if(!(r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>3){s=s.d
r=this.c+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.V
s=s!=null?s:A.a7()
if(!(r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=1
return s},
st(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=A.I(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=A.I(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
ga5(){return this.gn()/1},
ga2(){return this.gp()/1},
ga3(){return this.gq()/1},
ga8(){return this.gt()/1},
ga4(){return this.d.c===2?this.gn():A.P(this)},
aF(a){var s=this
if(s.d.c>0){s.sn(a.gn())
s.sp(a.gp())
s.sq(a.gq())
s.st(a.gt())}},
ao(a,b,c){var s,r,q,p=this,o=p.d,n=o.c
if(n>0){o=o.d
s=p.c
r=A.I(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>2){n=p.c+1
s=A.I(b)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s
s=p.c+2
n=A.I(c)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=n}}},
a7(a,b,c,d){var s,r,q,p=this,o=p.d,n=o.c
if(n>0){o=o.d
s=p.c
r=A.I(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n===2){n=p.c+1
s=A.I(d)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s}else if(n>2){s=p.c+1
r=A.I(b)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
r=p.c+2
s=A.I(c)
if(!(r>=0&&r<q))return A.a(o,r)
o[r]=s
if(n>3){n=p.c+3
s=A.I(d)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s}}}},
gB(a){return new A.G(this)},
H(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.bC){s=A.n(n,A.j(n).k("d.E"))
s=A.k(s)
r=A.n(b,A.j(b).k("d.E"))
return s===A.k(r)}if(t.L.b(b)){s=J.N(b)
r=n.d
q=r.c
if(s.gl(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.m(b,3))return!1}}}return!0}return!1},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$ix:1,
$it:1,
$im:1,
gaJ(){return this.d}}
A.bD.prototype={
I(){var s=this
return new A.bD(s.a,s.b,s.c,s.d)},
gl(a){return this.d.c},
gM(){return null},
gE(){return 1},
gG(){return B.H},
gaK(){return this.a},
gaL(){return this.b},
gJ(){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
m(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
j(a,b,c){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
r.$flags&2&&A.c(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=c}},
gD(){return this.gn()},
sD(a){this.sn(a)},
gn(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sn(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
r.$flags&2&&A.c(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gp(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>1){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sp(a){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}else if(r>1){s=s.d
r=this.c+1
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}},
gq(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>2){s=s.d
r=this.c+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sq(a){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}else if(r>2){s=s.d
r=this.c+2
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}},
gt(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>3){s=s.d
r=this.c+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=1
return s},
st(a){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}else if(r>3){s=s.d
r=this.c+3
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}},
ga5(){return this.gn()/1},
ga2(){return this.gp()/1},
ga3(){return this.gq()/1},
ga8(){return this.gt()/1},
ga4(){return this.d.c===2?this.gn():A.P(this)},
aF(a){var s=this
s.sn(a.gn())
s.sp(a.gp())
s.sq(a.gq())
s.st(a.gt())},
ao(a,b,c){var s,r=this.d,q=r.d,p=this.c
q.$flags&2&&A.c(q)
s=q.length
if(!(p>=0&&p<s))return A.a(q,p)
q[p]=a
if(r.c>2){r=p+1
if(!(r<s))return A.a(q,r)
q[r]=b
p+=2
if(!(p<s))return A.a(q,p)
q[p]=c}},
a7(a,b,c,d){var s,r,q=this.d,p=q.d,o=this.c
p.$flags&2&&A.c(p)
s=p.length
if(!(o>=0&&o<s))return A.a(p,o)
p[o]=a
q=q.c
if(q===2){q=o+1
if(!(q<s))return A.a(p,q)
p[q]=d}else if(q>2){r=o+1
if(!(r<s))return A.a(p,r)
p[r]=b
r=o+2
if(!(r<s))return A.a(p,r)
p[r]=c
if(q>3){q=o+3
if(!(q<s))return A.a(p,q)
p[q]=d}}},
gB(a){return new A.G(this)},
H(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.bD){s=A.n(n,A.j(n).k("d.E"))
s=A.k(s)
r=A.n(b,A.j(b).k("d.E"))
return s===A.k(r)}if(t.L.b(b)){s=J.N(b)
r=n.d
q=r.c
if(s.gl(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.m(b,3))return!1}}}return!0}return!1},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$ix:1,
$it:1,
$im:1,
gaJ(){return this.d}}
A.bE.prototype={
I(){var s=this
return new A.bE(s.a,s.b,s.c,s.d)},
gl(a){return this.d.c},
gM(){return null},
gE(){return 1},
gG(){return B.I},
gaK(){return this.a},
gaL(){return this.b},
gJ(){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
m(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
j(a,b,c){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
r.$flags&2&&A.c(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=c}},
gD(){return this.gn()},
sD(a){this.sn(a)},
gn(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sn(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
r.$flags&2&&A.c(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gp(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>1){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sp(a){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}else if(r>1){s=s.d
r=this.c+1
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}},
gq(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>2){s=s.d
r=this.c+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sq(a){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}else if(r>2){s=s.d
r=this.c+2
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}},
gt(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>3){s=s.d
r=this.c+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=1
return s},
st(a){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}else if(r>3){s=s.d
r=this.c+3
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}},
ga5(){return this.gn()/1},
ga2(){return this.gp()/1},
ga3(){return this.gq()/1},
ga8(){return this.gt()/1},
ga4(){return this.d.c===2?this.gn():A.P(this)},
aF(a){var s=this
s.sn(a.gn())
s.sp(a.gp())
s.sq(a.gq())
s.st(a.gt())},
ao(a,b,c){var s,r=this.d,q=r.d,p=this.c
q.$flags&2&&A.c(q)
s=q.length
if(!(p>=0&&p<s))return A.a(q,p)
q[p]=a
if(r.c>2){r=p+1
if(!(r<s))return A.a(q,r)
q[r]=b
p+=2
if(!(p<s))return A.a(q,p)
q[p]=c}},
a7(a,b,c,d){var s,r,q=this.d,p=q.d,o=this.c
p.$flags&2&&A.c(p)
s=p.length
if(!(o>=0&&o<s))return A.a(p,o)
p[o]=a
q=q.c
if(q===2){q=o+1
if(!(q<s))return A.a(p,q)
p[q]=d}else if(q>2){r=o+1
if(!(r<s))return A.a(p,r)
p[r]=b
r=o+2
if(!(r<s))return A.a(p,r)
p[r]=c
if(q>3){q=o+3
if(!(q<s))return A.a(p,q)
p[q]=d}}},
gB(a){return new A.G(this)},
H(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.bE){s=A.n(n,A.j(n).k("d.E"))
s=A.k(s)
r=A.n(b,A.j(b).k("d.E"))
return s===A.k(r)}if(t.L.b(b)){s=J.N(b)
r=n.d
q=r.c
if(s.gl(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.m(b,3))return!1}}}return!0}return!1},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$ix:1,
$it:1,
$im:1,
gaJ(){return this.d}}
A.bF.prototype={
I(){var s=this
return new A.bF(s.a,s.b,s.c,s.d)},
gl(a){return this.d.c},
gM(){return null},
gE(){return 32767},
gG(){return B.T},
gaK(){return this.a},
gaL(){return this.b},
gJ(){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
m(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
j(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(c)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gD(){return this.gn()},
sD(a){this.sn(a)},
gn(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sn(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gp(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>1){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sp(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gq(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>2){s=s.d
r=this.c+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sq(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gt(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>3){s=s.d
r=this.c+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=32767
return s},
st(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
ga5(){return this.gn()/32767},
ga2(){return this.gp()/32767},
ga3(){return this.gq()/32767},
ga8(){return this.gt()/32767},
ga4(){return this.d.c===2?this.gn():A.P(this)},
aF(a){var s=this
s.sn(a.gn())
s.sp(a.gp())
s.sq(a.gq())
s.st(a.gt())},
ao(a,b,c){var s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
s=this.c
r=B.a.h(a)
p.$flags&2&&A.c(p)
q=p.length
if(!(s>=0&&s<q))return A.a(p,s)
p[s]=r
if(o>2){o=s+1
r=B.a.h(b)
if(!(o<q))return A.a(p,o)
p[o]=r
s+=2
r=B.a.h(c)
if(!(s<q))return A.a(p,s)
p[s]=r}}},
a7(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n===2){n=s+1
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}else if(n>2){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
p=s+2
r=B.a.h(c)
if(!(p<q))return A.a(o,p)
o[p]=r
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
gB(a){return new A.G(this)},
H(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.bF){s=A.n(n,A.j(n).k("d.E"))
s=A.k(s)
r=A.n(b,A.j(b).k("d.E"))
return s===A.k(r)}if(t.L.b(b)){s=J.N(b)
r=n.d
q=r.c
if(s.gl(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.m(b,3))return!1}}}return!0}return!1},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$ix:1,
$it:1,
$im:1,
gaJ(){return this.d}}
A.bG.prototype={
I(){var s=this
return new A.bG(s.a,s.b,s.c,s.d)},
gl(a){return this.d.c},
gM(){return null},
gE(){return 2147483647},
gG(){return B.U},
gaK(){return this.a},
gaL(){return this.b},
gJ(){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
m(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
j(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(c)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gD(){return this.gn()},
sD(a){this.sn(a)},
gn(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sn(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gp(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>1){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sp(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gq(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>2){s=s.d
r=this.c+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sq(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gt(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>3){s=s.d
r=this.c+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=2147483647
return s},
st(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
ga5(){return this.gn()/2147483647},
ga2(){return this.gp()/2147483647},
ga3(){return this.gq()/2147483647},
ga8(){return this.gt()/2147483647},
ga4(){return this.d.c===2?this.gn():A.P(this)},
aF(a){var s=this
s.sn(a.gn())
s.sp(a.gp())
s.sq(a.gq())
s.st(a.gt())},
ao(a,b,c){var s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
s=this.c
r=B.a.h(a)
p.$flags&2&&A.c(p)
q=p.length
if(!(s>=0&&s<q))return A.a(p,s)
p[s]=r
if(o>2){o=s+1
r=B.a.h(b)
if(!(o<q))return A.a(p,o)
p[o]=r
s+=2
r=B.a.h(c)
if(!(s<q))return A.a(p,s)
p[s]=r}}},
a7(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n===2){n=s+1
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}else if(n>2){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
p=s+2
r=B.a.h(c)
if(!(p<q))return A.a(o,p)
o[p]=r
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
gB(a){return new A.G(this)},
H(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.bG){s=A.n(n,A.j(n).k("d.E"))
s=A.k(s)
r=A.n(b,A.j(b).k("d.E"))
return s===A.k(r)}if(t.L.b(b)){s=J.N(b)
r=n.d
q=r.c
if(s.gl(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.m(b,3))return!1}}}return!0}return!1},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$ix:1,
$it:1,
$im:1,
gaJ(){return this.d}}
A.bH.prototype={
I(){var s=this
return new A.bH(s.a,s.b,s.c,s.d)},
gl(a){return this.d.c},
gM(){return null},
gE(){return 127},
gG(){return B.S},
gaK(){return this.a},
gaL(){return this.b},
gJ(){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
m(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
j(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(c)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gD(){return this.gn()},
sD(a){this.sn(a)},
gn(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sn(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gp(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>1){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sp(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gq(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>2){s=s.d
r=this.c+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sq(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gt(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>3){s=s.d
r=this.c+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=127
return s},
st(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
ga5(){return this.gn()/127},
ga2(){return this.gp()/127},
ga3(){return this.gq()/127},
ga8(){return this.gt()/127},
ga4(){return this.d.c===2?this.gn():A.P(this)},
aF(a){var s=this
s.sn(a.gn())
s.sp(a.gp())
s.sq(a.gq())
s.st(a.gt())},
ao(a,b,c){var s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
s=this.c
r=B.a.h(a)
p.$flags&2&&A.c(p)
q=p.length
if(!(s>=0&&s<q))return A.a(p,s)
p[s]=r
if(o>2){o=s+1
r=B.a.h(b)
if(!(o<q))return A.a(p,o)
p[o]=r
s+=2
r=B.a.h(c)
if(!(s<q))return A.a(p,s)
p[s]=r}}},
a7(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n===2){n=s+1
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}else if(n>2){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
p=s+2
r=B.a.h(c)
if(!(p<q))return A.a(o,p)
o[p]=r
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
gB(a){return new A.G(this)},
H(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.bH){s=A.n(n,A.j(n).k("d.E"))
s=A.k(s)
r=A.n(b,A.j(b).k("d.E"))
return s===A.k(r)}if(t.L.b(b)){s=J.N(b)
r=n.d
q=r.c
if(s.gl(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.m(b,3))return!1}}}return!0}return!1},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$ix:1,
$it:1,
$im:1,
gaJ(){return this.d}}
A.bI.prototype={
I(){var s=this
return new A.bI(s.a,s.b,s.c,s.d,s.e,s.f)},
gl(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gM(){return this.f.f},
gE(){var s=this.f.f
s=s==null?null:s.gE()
return s==null?1:s},
gG(){return B.F},
gaK(){return this.a},
gaL(){return this.b},
aU(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.f
r=b*s.e
q.e=r
s=a*s.c
q.c=r+B.a.i(s,3)
q.d=s&7},
gJ(){return this},
C(){var s,r=this,q=++r.a,p=r.f
if(q===p.a){r.a=0
q=++r.b
r.d=0;++r.c
r.e=r.e+p.e
return q<p.b}s=p.c
if(p.f!=null||s===1){if(++r.d>7){r.d=0;++r.c}}else{q*=s
r.d=q&7
r.c=r.e+B.a.i(q,3)}q=r.c
p=p.d
p===$&&A.b()
return q<p.byteLength},
cK(a){var s,r,q=this.c,p=7-(this.d+a)
if(p<0){p+=8;++q}s=this.f.d
s===$&&A.b()
r=s.length
if(q>=r)return 0
if(!(q>=0))return A.a(s,q)
return B.a.ad(s[q],p)&1},
az(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.cK(a):0
else s=r.bt(this.cK(0),a)
return s},
ah(a,b){var s,r,q,p,o,n,m=this.f
if(a>=m.c)return
s=this.c
r=7-(this.d+a)
if(r<0){++s
r+=8}q=m.d
q===$&&A.b()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.S(B.b.h(b),0,1)
if(!(r>=0&&r<8))return A.a(B.aF,r)
n=B.aF[r]
q=B.a.a_(o,r)
m=m.d
m.$flags&2&&A.c(m)
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
m(a,b){return this.az(b)},
j(a,b,c){return this.ah(b,c)},
gD(){return this.cK(0)},
sD(a){this.ah(0,a)},
gn(){return this.az(0)},
sn(a){this.ah(0,a)},
gp(){return this.f.c===2?this.az(0):this.az(1)},
sp(a){this.ah(this.f.c===2?0:1,a)},
gq(){return this.f.c===2?this.az(0):this.az(2)},
sq(a){this.ah(this.f.c===2?0:2,a)},
gt(){var s=this.f,r=s.f==null
if(r&&s.c===2)s=this.az(1)
else s=r&&s.c<4?s.gE():this.az(3)
return s},
st(a){this.ah(this.f.c===2?1:3,a)},
ga5(){return this.az(0)/this.f.gE()},
ga2(){return this.gp()/this.f.gE()},
ga3(){return this.gq()/this.f.gE()},
ga8(){return this.gt()/this.f.gE()},
ga4(){return this.f.c===2?this.az(0):A.P(this)},
aF(a){var s,r,q=this
q.ah(0,a.gn())
s=a.gp()
r=q.f.c===2
q.ah(r?0:1,s)
s=a.gq()
q.ah(r?0:2,s)
s=a.gt()
q.ah(r?1:3,s)},
ao(a,b,c){var s=this,r=s.f.c
if(r>0){s.ah(0,a)
if(r>2){s.ah(1,b)
s.ah(2,c)}}},
a7(a,b,c,d){var s=this,r=s.f.c
if(r>0){s.ah(0,a)
if(r===2)s.ah(1,d)
else if(r>2){s.ah(1,b)
s.ah(2,c)
if(r>3)s.ah(3,d)}}},
gB(a){return new A.G(this)},
H(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.bI){s=A.n(p,A.j(p).k("d.E"))
s=A.k(s)
r=A.n(b,A.j(b).k("d.E"))
return s===A.k(r)}if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.N(b)
if(s.gl(b)!==q)return!1
if(p.az(0)!==s.m(b,0))return!1
if(q>1){if(p.az(1)!==s.m(b,1))return!1
if(q>2){if(p.az(2)!==s.m(b,2))return!1
if(q>3)if(p.az(3)!==s.m(b,3))return!1}}return!0}return!1},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$ix:1,
$it:1,
$im:1,
gaJ(){return this.f}}
A.bJ.prototype={
I(){var s=this
return new A.bJ(s.a,s.b,s.c,s.d)},
gl(a){var s=this.d,r=s.e
r=r==null?null:r.b
return r==null?s.c:r},
gM(){return this.d.e},
gE(){var s=this.d.e
s=s==null?null:s.gE()
return s==null?65535:s},
gG(){return B.u},
gaK(){return this.a},
gaL(){return this.b},
gJ(){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c
s+=q.e==null?q.c:1
r.c=s
return s<q.d.length},
aT(a){var s,r=this.d,q=r.e
if(q!=null){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.bt(r[s],a)
r=s}else if(a<r.c){r=r.d
q=this.c+a
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
return r},
m(a,b){return this.aT(b)},
j(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(c)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gD(){return this.gn()},
sD(a){this.sn(a)},
gn(){var s,r=this.d,q=r.e
if(q==null)if(r.c>0){r=r.d
q=this.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.c0(r[s])
r=s}return r},
sn(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gp(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>1){q=q.d
p=r.c+1
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.bZ(q[s])
q=s}return q},
sp(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gq(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>2){q=q.d
p=r.c+2
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.bY(q[s])
q=s}return q},
sq(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gt(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c+1
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>3){q=q.d
p=r.c+3
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=q.gE()}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.bX(q[s])
q=s}return q},
st(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
ga5(){return this.gn()/this.d.gE()},
ga2(){return this.gp()/this.d.gE()},
ga3(){return this.gq()/this.d.gE()},
ga8(){return this.gt()/this.d.gE()},
ga4(){return this.d.c===2?this.gn():A.P(this)},
aF(a){var s=this
s.sn(a.gn())
s.sp(a.gp())
s.sq(a.gq())
s.st(a.gt())},
ao(a,b,c){var s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
s=this.c
r=B.a.h(a)
p.$flags&2&&A.c(p)
q=p.length
if(!(s>=0&&s<q))return A.a(p,s)
p[s]=r
if(o>2){o=s+1
r=B.a.h(b)
if(!(o<q))return A.a(p,o)
p[o]=r
s+=2
r=B.a.h(c)
if(!(s<q))return A.a(p,s)
p[s]=r}}},
a7(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n===2){n=s+1
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}else if(n>2){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
p=s+2
r=B.a.h(c)
if(!(p<q))return A.a(o,p)
o[p]=r
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
gB(a){return new A.G(this)},
H(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.bJ){s=A.n(p,A.j(p).k("d.E"))
s=A.k(s)
r=A.n(b,A.j(b).k("d.E"))
return s===A.k(r)}if(t.L.b(b)){s=p.d
r=s.e
q=r!=null?r.b:s.c
s=J.N(b)
if(s.gl(b)!==q)return!1
if(p.aT(0)!==s.m(b,0))return!1
if(q>1){if(p.aT(1)!==s.m(b,1))return!1
if(q>2){if(p.aT(2)!==s.m(b,2))return!1
if(q>3)if(p.aT(3)!==s.m(b,3))return!1}}return!0}return!1},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$ix:1,
$it:1,
$im:1,
gaJ(){return this.d}}
A.bK.prototype={
I(){var s=this
return new A.bK(s.a,s.b,s.c,s.d,s.e,s.f)},
gl(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gM(){return this.f.f},
gE(){var s=this.f.f
s=s==null?null:s.gE()
return s==null?3:s},
gG(){return B.G},
gel(){var s=this.f
return s.f!=null?2:s.c<<1>>>0},
gaK(){return this.a},
gaL(){return this.b},
aU(a,b){var s,r,q,p=this
p.a=a
p.b=b
s=p.gel()
r=b*p.f.e
p.e=r
q=a*s
p.c=r+B.a.i(q,3)
p.d=q&7},
gJ(){return this},
C(){var s=this,r=++s.a,q=s.f
if(r===q.a){s.a=0
r=++s.b
s.d=0;++s.c
s.e=s.e+q.e
return r<q.b}if(q.f!=null||q.c===1){if((s.d+=2)>7){s.d=0;++s.c}}else{r*=s.gel()
s.d=r&7
s.c=s.e+B.a.i(r,3)}r=s.c
q=q.d
q===$&&A.b()
return r<q.length},
cL(a){var s,r=this.c,q=6-(this.d+(a<<1>>>0))
if(q<0){q+=8;++r}s=this.f.d
s===$&&A.b()
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.ad(s[r],q)&3},
aA(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.cL(a):0
else s=r.bt(this.cL(0),a)
return s},
ai(a,b){var s,r,q,p,o,n,m=this.f
if(a>=m.c)return
s=this.c
r=6-(this.d+(a<<1>>>0))
if(r<0){++s
r+=8}q=m.d
q===$&&A.b()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.S(B.b.h(b),0,3)
q=B.a.i(r,1)
if(!(q<4))return A.a(B.aw,q)
n=B.aw[q]
q=B.a.a_(o,r)
m=m.d
m.$flags&2&&A.c(m)
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
m(a,b){return this.aA(b)},
j(a,b,c){return this.ai(b,c)},
gD(){return this.cL(0)},
sD(a){this.ai(0,a)},
gn(){return this.aA(0)},
sn(a){this.ai(0,a)},
gp(){return this.f.c===2?this.aA(0):this.aA(1)},
sp(a){this.ai(this.f.c===2?0:1,a)},
gq(){return this.f.c===2?this.aA(0):this.aA(2)},
sq(a){this.ai(this.f.c===2?0:2,a)},
gt(){var s=this.f,r=s.f==null
if(r&&s.c===2)s=this.aA(1)
else s=r&&s.c<4?s.gE():this.aA(3)
return s},
st(a){this.ai(this.f.c===2?1:3,a)},
ga5(){return this.aA(0)/this.f.gE()},
ga2(){return this.gp()/this.f.gE()},
ga3(){return this.gq()/this.f.gE()},
ga8(){return this.gt()/this.f.gE()},
ga4(){return this.f.c===2?this.aA(0):A.P(this)},
aF(a){var s,r,q=this
q.ai(0,a.gn())
s=a.gp()
r=q.f.c===2
q.ai(r?0:1,s)
s=a.gq()
q.ai(r?0:2,s)
s=a.gt()
q.ai(r?1:3,s)},
ao(a,b,c){var s=this,r=s.f.c
if(r>0){s.ai(0,a)
if(r>2){s.ai(1,b)
s.ai(2,c)}}},
a7(a,b,c,d){var s=this,r=s.f.c
if(r>0){s.ai(0,a)
if(r===2)s.ai(1,d)
else if(r>2){s.ai(1,b)
s.ai(2,c)
if(r>3)s.ai(3,d)}}},
gB(a){return new A.G(this)},
H(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.bK){s=A.n(p,A.j(p).k("d.E"))
s=A.k(s)
r=A.n(b,A.j(b).k("d.E"))
return s===A.k(r)}if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.N(b)
if(s.gl(b)!==q)return!1
if(p.aA(0)!==s.m(b,0))return!1
if(q>1){if(p.aA(1)!==s.m(b,1))return!1
if(q>2){if(p.aA(2)!==s.m(b,2))return!1
if(q>3)if(p.aA(3)!==s.m(b,3))return!1}}return!0}return!1},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$ix:1,
$it:1,
$im:1,
gaJ(){return this.f}}
A.bL.prototype={
I(){var s=this
return new A.bL(s.a,s.b,s.c,s.d)},
gl(a){return this.d.c},
gM(){return null},
gE(){return 4294967295},
gG(){return B.K},
gaK(){return this.a},
gaL(){return this.b},
gJ(){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
m(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
j(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(c)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gD(){return this.gn()},
sD(a){this.sn(a)},
gn(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sn(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gp(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>1){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sp(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gq(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>2){s=s.d
r=this.c+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sq(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gt(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>3){s=s.d
r=this.c+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=4294967295
return s},
st(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
ga5(){return this.gn()/4294967295},
ga2(){return this.gp()/4294967295},
ga3(){return this.gq()/4294967295},
ga8(){return this.gt()/4294967295},
ga4(){return this.d.c===2?this.gn():A.P(this)},
aF(a){var s=this
s.sn(a.gn())
s.sp(a.gp())
s.sq(a.gq())
s.st(a.gt())},
ao(a,b,c){var s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
s=this.c
r=B.a.h(a)
p.$flags&2&&A.c(p)
q=p.length
if(!(s>=0&&s<q))return A.a(p,s)
p[s]=r
if(o>2){o=s+1
r=B.a.h(b)
if(!(o<q))return A.a(p,o)
p[o]=r
s+=2
r=B.a.h(c)
if(!(s<q))return A.a(p,s)
p[s]=r}}},
a7(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n===2){n=s+1
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}else if(n>2){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
p=s+2
r=B.a.h(c)
if(!(p<q))return A.a(o,p)
o[p]=r
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
gB(a){return new A.G(this)},
H(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.bL){s=A.n(n,A.j(n).k("d.E"))
s=A.k(s)
r=A.n(b,A.j(b).k("d.E"))
return s===A.k(r)}if(t.L.b(b)){s=J.N(b)
r=n.d
q=r.c
if(s.gl(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.m(b,3))return!1}}}return!0}return!1},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$ix:1,
$it:1,
$im:1,
gaJ(){return this.d}}
A.bM.prototype={
I(){var s=this
return new A.bM(s.a,s.b,s.c,s.d,s.e)},
gl(a){var s=this.e,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gM(){return this.e.f},
gE(){var s=this.e.f
s=s==null?null:s.gE()
return s==null?15:s},
gG(){return B.J},
gaK(){return this.a},
gaL(){return this.b},
aU(a,b){var s,r,q,p=this
p.a=a
p.b=b
s=p.e
r=s.c*4
q=s.e
if(r===4)s=b*q+B.a.i(a,1)
else if(r===8)s=b*s.a+a
else{s=b*q
s=r===16?s+(a<<1>>>0):s+B.a.i(a*r,3)}p.c=s
s=a*r
p.d=r>7?s&4:s&7},
gJ(){return this},
C(){var s,r,q,p=this,o=p.e
if(++p.a===o.a){p.a=0
s=++p.b
p.d=0
p.c=s*o.e
return s<o.b}r=o.c
s=o.f!=null||r===1
q=p.d
if(s){s=q+4
p.d=s
if(s>7){p.d=0;++p.c}}else{s=p.d=q+(r<<2>>>0)
while(s>7){s-=8
p.d=s;++p.c}}s=p.c
o=o.d
o===$&&A.b()
return s<o.length},
cG(a){var s,r=this.c,q=4-(this.d+(a<<2>>>0))
if(q<0){q+=8;++r}s=this.e.d
s===$&&A.b()
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.ad(s[r],q)&15},
aB(a){var s=this.e,r=s.f
if(r==null)s=s.c>a?this.cG(a):0
else s=r.bt(this.cG(0),a)
return s},
aj(a,b){var s,r,q,p,o,n,m=this.e
if(a>=m.c)return
s=this.c
r=4-(this.d+(a<<2>>>0))
if(r<0){r+=8;++s}q=m.d
q===$&&A.b()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.S(B.b.h(b),0,15)
n=r===4?15:240
q=B.a.a_(o,r)
m=m.d
m.$flags&2&&A.c(m)
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
m(a,b){return this.aB(b)},
j(a,b,c){return this.aj(b,c)},
gD(){return this.cG(0)},
sD(a){this.aj(0,a)},
gn(){return this.aB(0)},
sn(a){this.aj(0,a)},
gp(){return this.e.c===2?this.aB(0):this.aB(1)},
sp(a){this.aj(this.e.c===2?0:1,a)},
gq(){return this.e.c===2?this.aB(0):this.aB(2)},
sq(a){this.aj(this.e.c===2?0:2,a)},
gt(){var s=this.e,r=s.f==null
if(r&&s.c===2)s=this.aB(1)
else s=r&&s.c<4?s.gE():this.aB(3)
return s},
st(a){this.aj(this.e.c===2?1:3,a)},
ga5(){return this.aB(0)/this.e.gE()},
ga2(){return this.gp()/this.e.gE()},
ga3(){return this.gq()/this.e.gE()},
ga8(){return this.gt()/this.e.gE()},
ga4(){return this.e.c===2?this.aB(0):A.P(this)},
aF(a){var s,r,q=this
q.aj(0,a.gn())
s=a.gp()
r=q.e.c===2
q.aj(r?0:1,s)
s=a.gq()
q.aj(r?0:2,s)
s=a.gt()
q.aj(r?1:3,s)},
ao(a,b,c){var s=this,r=s.e.c
if(r>0){s.aj(0,a)
if(r>2){s.aj(1,b)
s.aj(2,c)}}},
a7(a,b,c,d){var s=this,r=s.e.c
if(r>0){s.aj(0,a)
if(r===2)s.aj(1,d)
else if(r>2){s.aj(1,b)
s.aj(2,c)
if(r>3)s.aj(3,d)}}},
gB(a){return new A.G(this)},
H(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.bM){s=A.n(p,A.j(p).k("d.E"))
s=A.k(s)
r=A.n(b,A.j(b).k("d.E"))
return s===A.k(r)}if(t.L.b(b)){q=p.e.c
s=J.N(b)
if(s.gl(b)!==q)return!1
if(p.aB(0)!==s.m(b,0))return!1
if(q>1){if(p.aB(1)!==s.m(b,1))return!1
if(q>2){if(p.aB(2)!==s.m(b,2))return!1
if(q>3)if(p.aB(3)!==s.m(b,3))return!1}}return!0}return!1},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$ix:1,
$it:1,
$im:1,
gaJ(){return this.e}}
A.bN.prototype={
I(){var s=this
return new A.bN(s.a,s.b,s.c,s.d)},
gl(a){var s=this.d,r=s.e
r=r==null?null:r.b
return r==null?s.c:r},
gM(){return this.d.e},
gE(){var s=this.d.e
s=s==null?null:s.gE()
return s==null?255:s},
gG(){return B.k},
gaK(){return this.a},
gaL(){return this.b},
gJ(){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c
s+=q.e==null?q.c:1
r.c=s
return s<q.d.length},
aT(a){var s,r=this.d,q=r.e
if(q!=null){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.bt(r[s],a)
r=s}else if(a<r.c){r=r.d
q=this.c+a
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
return r},
m(a,b){return this.aT(b)},
j(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(B.b.S(c,0,255))
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gD(){var s=this.d.d,r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
sD(a){var s=this.d.d,r=this.c,q=B.b.h(B.b.S(a,0,255))
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=q},
gn(){var s,r=this.d,q=r.e
if(q==null)if(r.c>0){r=r.d
q=this.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.c0(r[s])
r=s}return r},
sn(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(B.b.S(a,0,255))
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gp(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>1){q=q.d
p=r.c+1
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.bZ(q[s])
q=s}return q},
sp(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(B.b.S(a,0,255))
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=B.b.h(B.b.S(a,0,255))
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gq(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>2){q=q.d
p=r.c+2
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.bY(q[s])
q=s}return q},
sq(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(B.b.S(a,0,255))
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=B.b.h(B.b.S(a,0,255))
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gt(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c+1
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>3){q=q.d
p=r.c+3
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=255}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.bX(q[s])
q=s}return q},
st(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=B.b.h(B.b.S(a,0,255))
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=B.b.h(B.b.S(a,0,255))
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
ga5(){return this.gn()/this.d.gE()},
ga2(){return this.gp()/this.d.gE()},
ga3(){return this.gq()/this.d.gE()},
ga8(){return this.gt()/this.d.gE()},
ga4(){return this.d.c===2?this.gn():A.P(this)},
aF(a){var s=this
if(s.d.e!=null)s.sD(a.gD())
else{s.sn(a.gn())
s.sp(a.gp())
s.sq(a.gq())
s.st(a.gt())}},
ao(a,b,c){var s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
s=this.c
r=B.a.h(a)
p.$flags&2&&A.c(p)
q=p.length
if(!(s>=0&&s<q))return A.a(p,s)
p[s]=r
if(o>2){o=s+1
r=B.a.h(b)
if(!(o<q))return A.a(p,o)
p[o]=r
s+=2
r=B.a.h(c)
if(!(s<q))return A.a(p,s)
p[s]=r}}},
a7(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n===2){n=s+1
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}else if(n>2){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
p=s+2
r=B.a.h(c)
if(!(p<q))return A.a(o,p)
o[p]=r
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
gB(a){return new A.G(this)},
H(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.bN){s=A.n(p,A.j(p).k("d.E"))
s=A.k(s)
r=A.n(b,A.j(b).k("d.E"))
return s===A.k(r)}if(t.L.b(b)){s=p.d
r=s.e
q=r!=null?r.b:s.c
s=J.N(b)
if(s.gl(b)!==q)return!1
if(p.aT(0)!==s.m(b,0))return!1
if(q>1){if(p.aT(1)!==s.m(b,1))return!1
if(q>2){if(p.aT(2)!==s.m(b,2))return!1
if(q>3)if(p.aT(3)!==s.m(b,3))return!1}}return!0}return!1},
gA(a){var s=A.n(this,A.j(this).k("d.E"))
return A.k(s)},
$ix:1,
$it:1,
$im:1,
gaJ(){return this.d}}
A.K.prototype={
I(){return new A.K()},
gaJ(){return $.lc()},
gaK(){return 0},
gaL(){return 0},
gl(a){return 0},
gE(){return 0},
gG(){return B.k},
gM(){return null},
m(a,b){return 0},
j(a,b,c){},
gD(){return 0},
sD(a){},
gn(){return 0},
sn(a){},
gp(){return 0},
sp(a){},
gq(){return 0},
sq(a){},
gt(){return 0},
st(a){},
ga5(){return 0},
ga2(){return 0},
ga3(){return 0},
ga8(){return 0},
ga4(){return 0},
aF(a){},
ao(a,b,c){},
a7(a,b,c,d){},
gJ(){return this},
C(){return!1},
H(a,b){if(b==null)return!1
return b instanceof A.K},
gA(a){return 0},
gB(a){return new A.G(this)},
$ix:1,
$it:1,
$im:1}
A.fP.prototype={
ar(){return"FlipDirection."+this.b}}
A.eH.prototype={
v(a){return"ImageException: "+this.a}}
A.ad.prototype={
gl(a){return this.c-this.d},
m(a,b){return J.e(this.a,this.d+b)},
j(a,b,c){J.a1(this.a,this.d+b,c)
return c},
bG(a,b,c,d){var s=this.a,r=J.ay(s),q=this.d+a
if(c instanceof A.ad)r.X(s,q,q+b,c.a,c.d+d)
else r.X(s,q,q+b,t.L.a(c),d)},
cl(a,b,c){return this.bG(a,b,c,0)},
ir(a,b,c){var s=this.a,r=this.d+a
J.cQ(s,r,r+b,c)},
cs(a,b,c){var s=this,r=c!=null?s.b+c:s.d
return A.F(s.a,s.e,a,r+b)},
aO(a){return this.cs(a,0,null)},
cr(a,b){return this.cs(a,b,null)},
bm(a,b){return this.cs(a,0,b)},
K(){return J.e(this.a,this.d++)},
aD(a){var s=this.aO(a)
this.d=this.d+(s.c-s.d)
return s},
b6(a){var s,r,q,p,o,n=this
if(a==null){s=A.o([],t.t)
for(r=n.c;q=n.d,q<r;){p=n.a
n.d=q+1
o=J.e(p,q)
if(o===0)return A.hy(s,0,null)
B.e.N(s,o)}throw A.h(A.C("EOF reached without finding string terminator (length: "+A.z(a)+")"))}return A.hy(n.aD(a).a1(),0,null)},
ix(){return this.b6(null)},
iy(){var s,r,q,p,o=this,n=A.o([],t.t)
for(s=o.c;r=o.d,r<s;){q=o.a
o.d=r+1
p=J.e(q,r)
if(p===0){t.L.a(n)
return new A.fx(!0).du(n,0,null,!0)}B.e.N(n,p)}return B.be.i0(n,!0)},
W(){var s=this,r=J.e(s.a,s.d++)&255,q=J.e(s.a,s.d++)&255
if(s.e)return r<<8|q
return q<<8|r},
b7(){var s=this,r=J.e(s.a,s.d++)&255,q=J.e(s.a,s.d++)&255,p=J.e(s.a,s.d++)&255
if(s.e)return p|q<<8|r<<16
return r|q<<8|p<<16},
O(){var s=this,r=J.e(s.a,s.d++)&255,q=J.e(s.a,s.d++)&255,p=J.e(s.a,s.d++)&255,o=J.e(s.a,s.d++)&255
if(s.e)return(r<<24|q<<16|p<<8|o)>>>0
return(o<<24|p<<16|q<<8|r)>>>0},
iv(){return A.po(this.iz())},
iz(){var s=this,r=J.e(s.a,s.d++)&255,q=J.e(s.a,s.d++)&255,p=J.e(s.a,s.d++)&255,o=J.e(s.a,s.d++)&255,n=J.e(s.a,s.d++)&255,m=J.e(s.a,s.d++)&255,l=J.e(s.a,s.d++)&255,k=J.e(s.a,s.d++)&255
if(s.e)return(B.a.L(r,56)|B.a.L(q,48)|B.a.L(p,40)|B.a.L(o,32)|n<<24|m<<16|l<<8|k)>>>0
return(B.a.L(k,56)|B.a.L(l,48)|B.a.L(m,40)|B.a.L(n,32)|o<<24|p<<16|q<<8|r)>>>0},
a1(){var s=this,r=s.d,q=s.c-r,p=s.a
if(t.p.b(p))return J.O(B.c.gu(p),p.byteOffset+s.d,q)
r=new Uint8Array(A.B(J.lL(p,r,r+q)))
return r},
cm(){var s=this.a
if(t.p.b(s))return J.fJ(B.c.gu(s),s.byteOffset+this.d,null)
return J.fJ(B.c.gu(this.a1()),0,null)},
su(a,b){this.a=t.L.a(b)}}
A.f1.prototype={
ec(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.h3(a)
i.fQ()
i.h0()
i.fg()
B.q.al(i.ax,0,65536,0)
s=i.c
r=s*4
q=i.at=new Int32Array(r)
for(p=i.Q,o=0;o<s;++o)for(n=o*4,m=0;m<4;++m){l=n+m
p===$&&A.b()
k=p.b
if(m<k){j=p.c
k=o*k+m
if(!(k<j.length))return A.a(j,k)
k=j[k]}else k=0
k=B.a.h(k)
if(!(l<r))return A.a(q,l)
q[l]=k}},
fZ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c=Math.max(a,4)
g.f=f-g.d
g.r=f-1
s=B.b.a0(f,8)
g.w=s
g.x=s*256
g.Q=new A.dA(new Uint32Array(1024),256,4)
g.a=new A.bB(new Uint8Array(768),256,3)
g.d=3
g.e=2
s=B.b.i(f,3)
g.y=new Int32Array(s)
s=g.z=new Float64Array(f*3)
r=g.ch=new Float64Array(f)
q=g.CW=new Float64Array(f)
p=s.length
if(0>=p)return A.a(s,0)
s[0]=0
if(1>=p)return A.a(s,1)
s[1]=0
if(2>=p)return A.a(s,2)
s[2]=0
if(3>=p)return A.a(s,3)
s[3]=255
if(4>=p)return A.a(s,4)
s[4]=255
if(5>=p)return A.a(s,5)
s[5]=255
o=1/f
for(n=q.length,m=r.length,l=0;l<3;++l){if(!(l<n))return A.a(q,l)
q[l]=o
if(!(l<m))return A.a(r,l)
r[l]=0}for(k=3*3,j=g.f,l=3;l<f;++l,k=i){i=k+1
h=255*(l-3)/j
if(!(k<p))return A.a(s,k)
s[k]=h
k=i+1
if(!(i<p))return A.a(s,i)
s[i]=h
i=k+1
if(!(k<p))return A.a(s,k)
s[k]=h
if(!(l<n))return A.a(q,l)
q[l]=o
if(!(l<m))return A.a(r,l)
r[l]=0}},
fg(){var s,r,q,p,o,n,m
for(s=0;s<this.c;++s){r=this.a
r===$&&A.b()
q=this.Q
q===$&&A.b()
p=q.b
if(2<p){o=q.c
n=s*p+2
if(!(n<o.length))return A.a(o,n)
n=o[n]
o=n}else o=0
if(1<p){n=q.c
m=s*p+1
if(!(m<n.length))return A.a(n,m)
m=n[m]
n=m}else n=0
if(0<p){q=q.c
p=s*p
if(!(p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0
r.cp(s,Math.abs(o),Math.abs(n),Math.abs(q))}},
h1(a,b,c){var s,r,q,p,o,n,m,l,k,j=this.at,i=this.as
if(!(b>=0&&b<256))return A.a(i,b)
s=i[b]
r=s-1
q=this.c
i=j.length
p=1000
o=-1
for(;;){n=s<q
if(!(n||r>=0))break
if(n){n=s*4
m=n+1
if(!(m>=0&&m<i))return A.a(j,m)
l=j[m]-b
if(l>=p)s=q
else{if(l<0)l=-l
if(!(n>=0&&n<i))return A.a(j,n)
k=j[n]-a
l+=k<0?-k:k
if(l<p){n+=2
if(!(n<i))return A.a(j,n)
k=j[n]-c
l+=k<0?-k:k
if(l<p){o=s
p=l}}++s}}if(r>=0){n=r*4
m=n+1
if(!(m>=0&&m<i))return A.a(j,m)
l=b-j[m]
if(l>=p)r=-1
else{if(l<0)l=-l
if(!(n>=0&&n<i))return A.a(j,n)
k=j[n]-a
l+=k<0?-k:k
if(l<p){n+=2
if(!(n<i))return A.a(j,n)
k=j[n]-c
l+=k<0?-k:k
if(l<p){o=r
p=l}}--r}}}return o},
fQ(){var s,r,q,p,o,n,m,l=this
for(s=0,r=0;s<l.c;++s){for(q=0;q<3;++q,++r){p=l.z
p===$&&A.b()
if(!(r>=0&&r<p.length))return A.a(p,r)
o=B.a.S(B.b.h(0.5+p[r]),0,255)
p=l.Q
p===$&&A.b()
n=p.b
if(q<n){p=p.c
n=s*n+q
m=B.a.h(o)
p.$flags&2&&A.c(p)
if(!(n<p.length))return A.a(p,n)
p[n]=m}}p=l.Q
p===$&&A.b()
n=p.b
if(3<n){p=p.c
n=s*n+3
m=B.a.h(s)
p.$flags&2&&A.c(p)
if(!(n<p.length))return A.a(p,n)
p[n]=m}}},
h0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
for(s=b.c,r=b.Q,q=b.as,p=q.$flags|0,o=0,n=0,m=0;m<s;m=g){r===$&&A.b()
l=r.b
k=1<l
if(k){j=r.c
i=m*l+1
if(!(i<j.length))return A.a(j,i)
h=j[i]}else h=0
for(g=m+1,f=g,e=m;f<s;++f){if(k){j=r.c
i=f*l+1
if(!(i<j.length))return A.a(j,i)
i=j[i]
j=i}else j=0
if(j<h){if(k){j=r.c
i=f*l+1
if(!(i<j.length))return A.a(j,i)
h=j[i]}else h=0
e=f}}if(m!==e){j=0<l
if(j){i=r.c
d=e*l
if(!(d<i.length))return A.a(i,d)
f=i[d]}else f=0
if(j){i=r.c
d=m*l
if(!(d<i.length))return A.a(i,d)
d=i[d]
i=d}else i=0
if(j){c=e*l
d=r.c
i=B.a.h(i)
d.$flags&2&&A.c(d)
if(!(c<d.length))return A.a(d,c)
d[c]=i}if(j){c=m*l
j=r.c
i=B.a.h(f)
j.$flags&2&&A.c(j)
if(!(c<j.length))return A.a(j,c)
j[c]=i}if(k){j=r.c
i=e*l+1
if(!(i<j.length))return A.a(j,i)
f=j[i]}else f=0
if(k){j=r.c
i=m*l+1
if(!(i<j.length))return A.a(j,i)
i=j[i]
j=i}else j=0
if(k){i=r.c
d=e*l+1
j=B.a.h(j)
i.$flags&2&&A.c(i)
if(!(d<i.length))return A.a(i,d)
i[d]=j}if(k){k=r.c
j=m*l+1
i=B.a.h(f)
k.$flags&2&&A.c(k)
if(!(j<k.length))return A.a(k,j)
k[j]=i}k=2<l
if(k){j=r.c
i=e*l+2
if(!(i<j.length))return A.a(j,i)
f=j[i]}else f=0
if(k){j=r.c
i=m*l+2
if(!(i<j.length))return A.a(j,i)
i=j[i]
j=i}else j=0
if(k){i=r.c
d=e*l+2
j=B.a.h(j)
i.$flags&2&&A.c(i)
if(!(d<i.length))return A.a(i,d)
i[d]=j}if(k){k=r.c
j=m*l+2
i=B.a.h(f)
k.$flags&2&&A.c(k)
if(!(j<k.length))return A.a(k,j)
k[j]=i}k=3<l
if(k){j=r.c
i=e*l+3
if(!(i<j.length))return A.a(j,i)
f=j[i]}else f=0
if(k){j=r.c
i=m*l+3
if(!(i<j.length))return A.a(j,i)
i=j[i]
j=i}else j=0
if(k){i=r.c
d=e*l+3
j=B.a.h(j)
i.$flags&2&&A.c(i)
if(!(d<i.length))return A.a(i,d)
i[d]=j}if(k){k=r.c
l=m*l+3
j=B.a.h(f)
k.$flags&2&&A.c(k)
if(!(l<k.length))return A.a(k,l)
k[l]=j}}if(h!==o){p&2&&A.c(q)
if(!(o>=0&&o<256))return A.a(q,o)
q[o]=n+m>>>1
for(f=o+1;f<h;++f){if(!(f<256))return A.a(q,f)
q[f]=m}n=m
o=h}}s=b.r
s.toString
r=B.a.i(n+s,1)
p&2&&A.c(q)
if(!(o>=0&&o<256))return A.a(q,o)
q[o]=r
for(g=o+1;g<256;++g)q[g]=s},
e6(a,b){var s,r,q,p
for(s=this.y,r=a*a,q=0;q<a;++q){s===$&&A.b()
p=B.b.h(b*((r-q*q)*256/r))
s.$flags&2&&A.c(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
h3(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.x
a6===$&&A.b()
s=a5.b
r=30+B.a.a0(s-1,3)
q=a7.gT()*a7.gV()
p=B.a.ac(q,s)
o=Math.max(B.a.a0(p,100),1)
if(o===0)o=1
n=B.a.i(a6,8)
if(n<=1)n=0
a5.e6(n,1024)
if(q<1509)m=a5.b=1
else if(B.a.a6(q,499)!==0)m=499
else if(B.a.a6(q,491)!==0)m=491
else m=B.a.a6(q,487)!==0?487:503
l=a7.gT()
k=a7.gV()
for(j=a6,i=1024,h=0,g=0,f=0,e=0,d=null;e<p;){a6=a7.a
d=a6==null?null:a6.U(g,f,d)
if(d==null)d=new A.K()
c=d.gn()
b=d.gp()
a=d.gq()
if(e===0){a6=a5.z
a6===$&&A.b()
s=a5.e
s===$&&A.b()
s*=3
a6.$flags&2&&A.c(a6)
a0=a6.length
if(!(s>=0&&s<a0))return A.a(a6,s)
a6[s]=a
a1=s+1
if(!(a1<a0))return A.a(a6,a1)
a6[a1]=b
s+=2
if(!(s<a0))return A.a(a6,s)
a6[s]=c}a2=a5.hJ(a,b,c)
if(a2<0)a2=a5.fe(a,b,c)
if(a2>=a5.d){a3=i/1024
a4=a2*3
a6=a5.z
a6===$&&A.b()
s=a6.length
if(!(a4>=0&&a4<s))return A.a(a6,a4)
a0=a6[a4]
a6.$flags&2&&A.c(a6)
a6[a4]=a0-a3*(a0-a)
a0=a4+1
if(!(a0<s))return A.a(a6,a0)
a1=a6[a0]
a6[a0]=a1-a3*(a1-b)
a1=a4+2
if(!(a1<s))return A.a(a6,a1)
s=a6[a1]
a6[a1]=s-a3*(s-c)
if(n>0)a5.f2(a3,n,a2,a,b,c)}h+=m
g+=m
while(g>l){g-=l;++f}while(h>=q){h-=q
f-=k}++e
if(B.a.a6(e,o)===0){i-=B.a.ac(i,r)
j-=B.a.a0(j,30)
n=B.a.i(j,8)
if(n<=1)n=0
a5.e6(n,i)}}},
f2(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=c-b,d=f.d-1
if(e<d)e=d
s=c+b
r=f.c
if(s>r)s=r
q=c+1
p=c-1
o=f.y
n=f.z
m=1
for(;;){l=q<s
if(!(l||p>e))break
o===$&&A.b()
k=m+1
if(!(m<o.length))return A.a(o,m)
j=o[m]
if(l){i=q*3
n===$&&A.b()
l=n.length
if(!(i>=0&&i<l))return A.a(n,i)
h=n[i]
n.$flags&2&&A.c(n)
n[i]=h-j*(h-a0)/262144
h=i+1
if(!(h<l))return A.a(n,h)
g=n[h]
n[h]=g-j*(g-a1)/262144
g=i+2
if(!(g<l))return A.a(n,g)
l=n[g]
n[g]=l-j*(l-a2)/262144;++q}if(p>e){i=p*3
n===$&&A.b()
l=n.length
if(!(i>=0&&i<l))return A.a(n,i)
h=n[i]
n.$flags&2&&A.c(n)
n[i]=h-j*(h-a0)/262144
h=i+1
if(!(h<l))return A.a(n,h)
g=n[h]
n[h]=g-j*(g-a1)/262144
g=i+2
if(!(g<l))return A.a(n,g)
l=n[g]
n[g]=l-j*(l-a2)/262144;--p}m=k}},
fe(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=1e30
for(s=b.d,r=s*3,q=b.c,p=b.CW,o=b.ch,n=b.z,m=a,l=m,k=-1,j=-1;s<q;++s,r=i){n===$&&A.b()
i=r+1
h=n.length
if(!(r<h))return A.a(n,r)
g=n[r]-a0
if(g<0)g=-g
r=i+1
if(!(i<h))return A.a(n,i)
f=n[i]-a1
if(f<0)f=-f
i=r+1
if(!(r<h))return A.a(n,r)
e=n[r]-a2
if(e<0)e=-e
g=g+f+e
if(g<l){k=s
l=g}o===$&&A.b()
if(!(s<o.length))return A.a(o,s)
d=g-o[s]
if(d<m){j=s
m=d}p===$&&A.b()
if(!(s<p.length))return A.a(p,s)
h=p[s]
p.$flags&2&&A.c(p)
p[s]=h-0.0009765625*h
h=o[s]
c=p[s]
o.$flags&2&&A.c(o)
o[s]=h+c}p===$&&A.b()
if(!(k>=0&&k<p.length))return A.a(p,k)
q=p[k]
p.$flags&2&&A.c(p)
p[k]=q+0.0009765625
o===$&&A.b()
if(!(k<o.length))return A.a(o,k)
q=o[k]
o.$flags&2&&A.c(o)
o[k]=q-1
return j},
hJ(a,b,c){var s,r,q,p,o,n,m
for(s=this.d,r=this.z,q=0,p=0;q<s;++q){r===$&&A.b()
o=p+1
n=r.length
if(!(p<n))return A.a(r,p)
m=!1
if(r[p]===a){p=o+1
if(!(o<n))return A.a(r,o)
if(r[o]===b){o=p+1
if(!(p<n))return A.a(r,p)
n=r[p]===c
p=o}else n=m}else{n=m
p=o}if(n)return q}return-1}}
A.f3.prototype={
P(a){var s,r=this,q=r.a
if(q===r.c.length)r.dB(q+1)
q=r.c
s=r.a++
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=a&255},
b9(a){var s,r,q,p=this
t.L.a(a)
s=J.b3(a)
r=p.a+s
if(r>p.c.length)p.dB(r)
r=p.c
q=p.a
B.c.ag(r,q,q+s,a)
p.a+=s},
eF(a){var s=this
if(s.b){s.P(a>>>8&255)
s.P(a&255)
return}s.P(a&255)
s.P(a>>>8&255)},
b0(a){var s=this
if(s.b){s.P(B.a.i(a,24)&255)
s.P(B.a.i(a,16)&255)
s.P(B.a.i(a,8)&255)
s.P(a&255)
return}s.P(a&255)
s.P(B.a.i(a,8)&255)
s.P(B.a.i(a,16)&255)
s.P(B.a.i(a,24)&255)},
dB(a){var s=this.c,r=Math.max(s.length*3,a+8192),q=new Uint8Array(r)
B.c.ag(q,0,this.a,s)
this.c=q},
gl(a){return this.a}}
A.f9.prototype={
eG(a){var s,r,q,p,o,n,m=a.gT(),l=a.gV(),k=this.a
k===$&&A.b()
s=A.cp(null,null,B.k,0,B.v,l,null,0,1,k,m,!1)
m=s.a
r=m.gB(m)
r.C()
s.z=a.z
s.w=a.w
s.y=a.y
for(m=a.a,m=m.gB(m);m.C();){q=m.gJ()
p=r.gJ()
o=B.b.h(q.gn())
n=B.b.h(q.gp())
p.j(0,0,this.h1(B.b.h(q.gq()),n,o))
r.C()}return s}}
A.cA.prototype={
h(a){var s=this.b
return s===0?0:B.a.ac(this.a,s)},
H(a,b){if(b==null)return!1
return b instanceof A.cA&&this.a===b.a&&this.b===b.b},
gA(a){return A.k4(this.a,this.b,B.t,B.t)},
v(a){return""+this.a+"/"+this.b}}
A.iG.prototype={
$1(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
A.fy(a2)
try{s=t.f.a(A.kY(a2.data))
r=J.e(s,"bytes")
e=t.p.b(r)?r:new Uint8Array(A.B(J.lF(t.j.a(r),t.q)))
d=A.v(J.e(s,"rows"))
c=A.v(J.e(s,"columns"))
q=A.o([],t.bI)
for(b=J.em(t.j.a(J.e(s,"corners"))),a=t.O;b.C();){p=b.gJ()
J.iO(q,new A.aa(A.jg(J.e(p,0)),A.jg(J.e(p,1)),a))}o=new A.hw(e,d,c,B.a.a6(A.v(J.e(s,"turns")),4),q)
n=A.ph(o)
m=A.o([],t.as)
for(q=n,e=q.length,a0=0;a0<q.length;q.length===e||(0,A.a0)(q),++a0){l=q[a0]
J.iO(m,l)}q=t.a6
k=q.a(m)
m=A.fy(v.G.self)
j=A.o([],t.dH)
e=k
e=J.em(t.fS.b(e)?e:new A.az(e,A.an(e).k("az<1,aN>")))
d=t.e9
while(e.C()){i=e.gJ()
J.iO(j,d.a(i.buffer))}m.postMessage(k,q.a(j))}catch(a1){h=A.as(a1)
q=A.fy(v.G.self)
m=h instanceof A.ai?"argument":"format"
g=null
f=h
A:{if(f instanceof A.ai){g=J.bZ(h.d)
break A}if(f instanceof A.a9){g=h.a
break A}g="Image could not be processed"
break A}j=t.N
q.postMessage(B.bc.i6(A.k1(["error",m,"message",g],j,j),null))}},
$S:30};(function aliases(){var s=J.b9.prototype
s.eN=s.v
s=A.y.prototype
s.da=s.X})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_1u,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers.installStaticTearOff
s(A,"oT","nB",5)
s(A,"oU","nC",5)
s(A,"oV","nD",5)
r(A,"kV","oN",2)
s(A,"oZ","of",7)
q(A.eS.prototype,"gfn","fo",25)
var m
p(m=A.eV.prototype,"gfp",0,3,null,["$3"],["fq"],3,0,0)
p(m,"gfs",0,3,null,["$3"],["ft"],3,0,0)
p(m,"gfu",0,3,null,["$3"],["fv"],3,0,0)
p(m,"gfi",0,3,null,["$3"],["fj"],3,0,0)
p(m,"gfk",0,3,null,["$3"],["fl"],3,0,0)
s(A,"pz","n_",0)
s(A,"ps","mS",0)
s(A,"pq","mQ",0)
s(A,"px","mY",0)
s(A,"py","mZ",0)
s(A,"pw","mX",0)
s(A,"pv","mW",0)
s(A,"pu","mV",0)
s(A,"pB","n1",0)
s(A,"pA","n0",0)
s(A,"pt","mT",0)
s(A,"pr","mR",0)
s(A,"pM","nc",0)
s(A,"pK","na",0)
s(A,"pC","n2",0)
s(A,"pE","n4",0)
s(A,"pD","n3",0)
s(A,"pF","n5",0)
s(A,"pN","nd",0)
s(A,"pL","nb",0)
s(A,"pG","n6",0)
s(A,"pH","n7",0)
s(A,"pI","n8",0)
s(A,"pJ","n9",0)
o(A.dN.prototype,"ghl","hm",15)
o(A.eM.prototype,"gi9","ia",15)
n(A,"jr",3,null,["$3"],["ne"],1,0)
n(A,"pO",3,null,["$3"],["nf"],1,0)
n(A,"pT",3,null,["$3"],["nk"],1,0)
n(A,"pU",3,null,["$3"],["nl"],1,0)
n(A,"pV",3,null,["$3"],["nm"],1,0)
n(A,"pW",3,null,["$3"],["nn"],1,0)
n(A,"pX",3,null,["$3"],["no"],1,0)
n(A,"pY",3,null,["$3"],["np"],1,0)
n(A,"pZ",3,null,["$3"],["nq"],1,0)
n(A,"q_",3,null,["$3"],["nr"],1,0)
n(A,"pP",3,null,["$3"],["ng"],1,0)
n(A,"pQ",3,null,["$3"],["nh"],1,0)
n(A,"pR",3,null,["$3"],["ni"],1,0)
n(A,"pS",3,null,["$3"],["nj"],1,0)
n(A,"q1",6,null,["$6"],["ny"],6,0)
n(A,"q2",6,null,["$6"],["nz"],6,0)
n(A,"q0",6,null,["$6"],["nx"],6,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.D,null)
q(A.D,[A.iZ,J.eK,A.dE,J.cR,A.d,A.cT,A.H,A.y,A.hx,A.by,A.dF,A.cX,A.ac,A.aZ,A.cU,A.e_,A.bd,A.hA,A.hk,A.e7,A.b4,A.a6,A.hf,A.T,A.aT,A.hZ,A.iq,A.aE,A.fq,A.fw,A.ij,A.aI,A.fm,A.dV,A.aw,A.fl,A.ec,A.dY,A.fr,A.e1,A.ew,A.bm,A.ie,A.fx,A.ex,A.i_,A.f2,A.dG,A.i0,A.a9,A.ae,A.fu,A.bO,A.eC,A.hj,A.aa,A.fR,A.eJ,A.hU,A.fN,A.av,A.ib,A.ii,A.fZ,A.dd,A.dy,A.hw,A.hv,A.j3,A.G,A.aQ,A.fp,A.eB,A.aK,A.S,A.bo,A.fO,A.eu,A.b6,A.h8,A.h4,A.b8,A.eS,A.cI,A.fs,A.eU,A.h9,A.ha,A.eV,A.hq,A.dC,A.hu,A.fv,A.hD,A.dM,A.hE,A.hL,A.hO,A.hQ,A.dL,A.hP,A.hF,A.b_,A.dO,A.fj,A.dP,A.dQ,A.dN,A.fh,A.hM,A.fi,A.hR,A.dR,A.eD,A.eE,A.d0,A.d_,A.d1,A.eF,A.bf,A.b7,A.dz,A.eH,A.ad,A.f9,A.f3,A.cA])
q(J.eK,[J.eQ,J.dg,J.di,J.cv,J.cw,J.dh,J.cu])
q(J.di,[J.b9,J.u,A.ba,A.ds])
q(J.b9,[J.f5,J.dJ,J.aS])
r(J.eP,A.dE)
r(J.h3,J.u)
q(J.dh,[J.df,J.eR])
q(A.d,[A.bg,A.q,A.aV,A.c0,A.c1,A.c2,A.c3,A.c4,A.c5,A.c6,A.c7,A.c8,A.c9,A.ca,A.bn,A.aL,A.a4,A.bC,A.bD,A.bE,A.bF,A.bG,A.bH,A.bI,A.bJ,A.bK,A.bL,A.bM,A.bN,A.K])
q(A.bg,[A.bl,A.ed])
r(A.dU,A.bl)
r(A.dT,A.ed)
r(A.az,A.dT)
q(A.H,[A.cx,A.aX,A.eW,A.fe,A.fa,A.fo,A.dj,A.eo,A.ai,A.dK,A.fd,A.cC,A.ev])
r(A.cD,A.y)
r(A.aj,A.cD)
q(A.q,[A.aB,A.cW,A.bx,A.hg,A.dX])
q(A.aB,[A.dH,A.dk])
r(A.cb,A.aV)
r(A.br,A.cU)
q(A.bd,[A.cV,A.e6])
r(A.cZ,A.cV)
r(A.dx,A.aX)
q(A.b4,[A.er,A.es,A.fc,A.iC,A.iE,A.hW,A.hV,A.i9,A.iJ,A.iK,A.ix,A.iL,A.iI,A.hs,A.fX,A.fW,A.iG])
q(A.fc,[A.fb,A.c_])
q(A.a6,[A.aA,A.dW])
r(A.bw,A.aA)
q(A.es,[A.iD,A.ia,A.hh,A.hi,A.ig,A.fS,A.fT,A.fU])
r(A.bz,A.ba)
q(A.ds,[A.f0,A.a_])
q(A.a_,[A.e2,A.e4])
r(A.e3,A.e2)
r(A.dr,A.e3)
r(A.e5,A.e4)
r(A.al,A.e5)
q(A.dr,[A.dl,A.dm])
q(A.al,[A.dn,A.dp,A.dq,A.dt,A.du,A.dv,A.aN])
r(A.e8,A.fo)
q(A.er,[A.hX,A.hY,A.ik,A.i1,A.i5,A.i4,A.i3,A.i2,A.i8,A.i7,A.i6,A.ih,A.iw,A.is,A.ir,A.h7,A.h6,A.hp,A.ho,A.ht,A.hT,A.hS])
r(A.dS,A.fm)
r(A.ft,A.ec)
r(A.dZ,A.dW)
r(A.e0,A.e6)
q(A.ew,[A.im,A.il,A.hb,A.fg])
q(A.bm,[A.ez,A.eX])
r(A.eY,A.dj)
r(A.id,A.ie)
q(A.ez,[A.eZ,A.ff])
r(A.he,A.im)
r(A.hd,A.il)
q(A.ai,[A.bc,A.eI])
q(A.i_,[A.da,A.cJ,A.cG,A.cS,A.a8,A.a3,A.cy,A.dB,A.bb,A.f7,A.bQ,A.cF,A.eG,A.fQ,A.eO,A.fP])
r(A.iu,A.hU)
r(A.en,A.a9)
q(A.dd,[A.db,A.dc])
q(A.dy,[A.fn,A.f4])
r(A.et,A.bn)
r(A.bp,A.aQ)
q(A.S,[A.ce,A.cf,A.cm,A.bt,A.ch,A.ci,A.cl,A.cj,A.ck,A.cn,A.cg,A.co,A.d2])
q(A.b6,[A.bs,A.cd])
q(A.bo,[A.eT,A.f6,A.fk])
r(A.eL,A.dC)
r(A.h0,A.hu)
r(A.hr,A.fO)
r(A.eM,A.dN)
r(A.eN,A.dR)
r(A.de,A.bf)
q(A.a4,[A.d3,A.d4,A.d5,A.d6,A.d7,A.d8,A.cq,A.bu,A.cr,A.d9,A.cs,A.ct])
q(A.dz,[A.dA,A.bB])
r(A.f1,A.f9)
s(A.cD,A.aZ)
s(A.ed,A.y)
s(A.e2,A.y)
s(A.e3,A.ac)
s(A.e4,A.y)
s(A.e5,A.ac)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",w:"double",l:"num",W:"String",aG:"bool",ae:"Null",p:"List",D:"Object",aD:"Map",L:"JSObject"},mangledNames:{},types:["~(ad)","i(i,dI,i)","~()","~(b8,bv,i)","aL?()","~(~())","~(i,i,i,i,i,au)","@(@)","ae(@)","ae()","~(D?,D?)","@()","~(@)","~(W,aK)","jN?()","~(i,aG)","@(@,W)","@(W)","ae(~())","ae(D,cB)","~(@,@)","D?(D?)","aG(aa<w>)","aa<w>(aa<w>)","~(i,S)","~(i)","~(au)","bf?()","l(l,l,l,l)","l(l,l,l,l,l)","ae(L)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.nX(v.typeUniverse,JSON.parse('{"aS":"b9","f5":"b9","dJ":"b9","qa":"ba","eQ":{"aG":[],"E":[]},"dg":{"E":[]},"di":{"L":[]},"b9":{"L":[]},"u":{"p":["1"],"q":["1"],"L":[],"d":["1"],"a5":["1"]},"eP":{"dE":[]},"h3":{"u":["1"],"p":["1"],"q":["1"],"L":[],"d":["1"],"a5":["1"]},"cR":{"x":["1"]},"dh":{"w":[],"l":[]},"df":{"w":[],"i":[],"l":[],"E":[]},"eR":{"w":[],"l":[],"E":[]},"cu":{"W":[],"a5":["@"],"E":[]},"bg":{"d":["2"]},"cT":{"x":["2"]},"bl":{"bg":["1","2"],"d":["2"],"d.E":"2"},"dU":{"bl":["1","2"],"bg":["1","2"],"q":["2"],"d":["2"],"d.E":"2"},"dT":{"y":["2"],"p":["2"],"bg":["1","2"],"q":["2"],"d":["2"]},"az":{"dT":["1","2"],"y":["2"],"p":["2"],"bg":["1","2"],"q":["2"],"d":["2"],"y.E":"2","d.E":"2"},"cx":{"H":[]},"aj":{"y":["i"],"aZ":["i"],"p":["i"],"q":["i"],"d":["i"],"y.E":"i","aZ.E":"i"},"q":{"d":["1"]},"aB":{"q":["1"],"d":["1"]},"dH":{"aB":["1"],"q":["1"],"d":["1"],"d.E":"1","aB.E":"1"},"by":{"x":["1"]},"dk":{"aB":["2"],"q":["2"],"d":["2"],"d.E":"2","aB.E":"2"},"aV":{"d":["1"],"d.E":"1"},"cb":{"aV":["1"],"q":["1"],"d":["1"],"d.E":"1"},"dF":{"x":["1"]},"cW":{"q":["1"],"d":["1"],"d.E":"1"},"cX":{"x":["1"]},"cD":{"y":["1"],"aZ":["1"],"p":["1"],"q":["1"],"d":["1"]},"cU":{"aD":["1","2"]},"e_":{"x":["1"]},"br":{"cU":["1","2"],"aD":["1","2"]},"cV":{"bd":["1"],"q":["1"],"d":["1"]},"cZ":{"cV":["1"],"bd":["1"],"q":["1"],"d":["1"]},"dx":{"aX":[],"H":[]},"eW":{"H":[]},"fe":{"H":[]},"e7":{"cB":[]},"b4":{"bq":[]},"er":{"bq":[]},"es":{"bq":[]},"fc":{"bq":[]},"fb":{"bq":[]},"c_":{"bq":[]},"fa":{"H":[]},"aA":{"a6":["1","2"],"j0":["1","2"],"aD":["1","2"],"a6.K":"1","a6.V":"2"},"bx":{"q":["1"],"d":["1"],"d.E":"1"},"T":{"x":["1"]},"hg":{"q":["1"],"d":["1"],"d.E":"1"},"aT":{"x":["1"]},"bw":{"aA":["1","2"],"a6":["1","2"],"j0":["1","2"],"aD":["1","2"],"a6.K":"1","a6.V":"2"},"bz":{"ba":[],"L":[],"E":[]},"aN":{"al":[],"au":[],"y":["i"],"a_":["i"],"p":["i"],"ak":["i"],"q":["i"],"L":[],"a5":["i"],"d":["i"],"ac":["i"],"E":[],"y.E":"i"},"ba":{"L":[],"E":[]},"ds":{"L":[]},"f0":{"L":[],"E":[]},"a_":{"ak":["1"],"L":[],"a5":["1"]},"dr":{"y":["w"],"a_":["w"],"p":["w"],"ak":["w"],"q":["w"],"L":[],"a5":["w"],"d":["w"],"ac":["w"]},"al":{"y":["i"],"a_":["i"],"p":["i"],"ak":["i"],"q":["i"],"L":[],"a5":["i"],"d":["i"],"ac":["i"]},"dl":{"iR":[],"y":["w"],"a_":["w"],"p":["w"],"ak":["w"],"q":["w"],"L":[],"a5":["w"],"d":["w"],"ac":["w"],"E":[],"y.E":"w"},"dm":{"iS":[],"y":["w"],"a_":["w"],"p":["w"],"ak":["w"],"q":["w"],"L":[],"a5":["w"],"d":["w"],"ac":["w"],"E":[],"y.E":"w"},"dn":{"al":[],"bv":[],"y":["i"],"a_":["i"],"p":["i"],"ak":["i"],"q":["i"],"L":[],"a5":["i"],"d":["i"],"ac":["i"],"E":[],"y.E":"i"},"dp":{"al":[],"iV":[],"y":["i"],"a_":["i"],"p":["i"],"ak":["i"],"q":["i"],"L":[],"a5":["i"],"d":["i"],"ac":["i"],"E":[],"y.E":"i"},"dq":{"al":[],"iW":[],"y":["i"],"a_":["i"],"p":["i"],"ak":["i"],"q":["i"],"L":[],"a5":["i"],"d":["i"],"ac":["i"],"E":[],"y.E":"i"},"dt":{"al":[],"hC":[],"y":["i"],"a_":["i"],"p":["i"],"ak":["i"],"q":["i"],"L":[],"a5":["i"],"d":["i"],"ac":["i"],"E":[],"y.E":"i"},"du":{"al":[],"dI":[],"y":["i"],"a_":["i"],"p":["i"],"ak":["i"],"q":["i"],"L":[],"a5":["i"],"d":["i"],"ac":["i"],"E":[],"y.E":"i"},"dv":{"al":[],"y":["i"],"a_":["i"],"p":["i"],"ak":["i"],"q":["i"],"L":[],"a5":["i"],"d":["i"],"ac":["i"],"E":[],"y.E":"i"},"fo":{"H":[]},"e8":{"aX":[],"H":[]},"aI":{"H":[]},"dS":{"fm":["1"]},"aw":{"cc":["1"]},"ec":{"kr":[]},"ft":{"ec":[],"kr":[]},"dW":{"a6":["1","2"],"aD":["1","2"]},"dZ":{"dW":["1","2"],"a6":["1","2"],"aD":["1","2"],"a6.K":"1","a6.V":"2"},"dX":{"q":["1"],"d":["1"],"d.E":"1"},"dY":{"x":["1"]},"e0":{"bd":["1"],"q":["1"],"d":["1"]},"e1":{"x":["1"]},"y":{"p":["1"],"q":["1"],"d":["1"]},"a6":{"aD":["1","2"]},"bd":{"q":["1"],"d":["1"]},"e6":{"bd":["1"],"q":["1"],"d":["1"]},"ez":{"bm":["W","p<i>"]},"dj":{"H":[]},"eY":{"H":[]},"eX":{"bm":["D?","W"]},"eZ":{"bm":["W","p<i>"]},"ff":{"bm":["W","p<i>"]},"w":{"l":[]},"i":{"l":[]},"p":{"q":["1"],"d":["1"]},"eo":{"H":[]},"aX":{"H":[]},"ai":{"H":[]},"bc":{"H":[]},"eI":{"bc":[],"H":[]},"dK":{"H":[]},"fd":{"H":[]},"cC":{"H":[]},"ev":{"H":[]},"f2":{"H":[]},"dG":{"H":[]},"fu":{"cB":[]},"bO":{"mK":[]},"eJ":{"lP":[]},"db":{"dd":[]},"fn":{"dy":[]},"dc":{"dd":[]},"f4":{"dy":[]},"G":{"x":["l"]},"c0":{"t":[],"d":["l"],"d.E":"l"},"c1":{"t":[],"d":["l"],"d.E":"l"},"c2":{"t":[],"d":["l"],"d.E":"l"},"c3":{"t":[],"d":["l"],"d.E":"l"},"c4":{"t":[],"d":["l"],"d.E":"l"},"c5":{"t":[],"d":["l"],"d.E":"l"},"c6":{"t":[],"d":["l"],"d.E":"l"},"c7":{"t":[],"d":["l"],"d.E":"l"},"c8":{"t":[],"d":["l"],"d.E":"l"},"c9":{"t":[],"d":["l"],"d.E":"l"},"ca":{"t":[],"d":["l"],"d.E":"l"},"bn":{"t":[],"d":["l"],"d.E":"l"},"et":{"t":[],"d":["l"],"d.E":"l"},"bp":{"aQ":[]},"ce":{"S":[]},"cf":{"S":[]},"cm":{"S":[]},"bt":{"S":[]},"ch":{"S":[]},"ci":{"S":[]},"cl":{"S":[]},"cj":{"S":[]},"ck":{"S":[]},"cn":{"S":[]},"cg":{"S":[]},"co":{"S":[]},"d2":{"S":[]},"bs":{"b6":[]},"cd":{"b6":[]},"eT":{"bo":[]},"eL":{"dC":[]},"f6":{"bo":[]},"eN":{"dR":[]},"de":{"bf":[]},"fk":{"bo":[]},"aL":{"d":["m"],"d.E":"m"},"a4":{"d":["m"]},"d3":{"a4":[],"d":["m"],"d.E":"m"},"d4":{"a4":[],"d":["m"],"d.E":"m"},"d5":{"a4":[],"d":["m"],"d.E":"m"},"d6":{"a4":[],"d":["m"],"d.E":"m"},"d7":{"a4":[],"d":["m"],"d.E":"m"},"d8":{"a4":[],"d":["m"],"d.E":"m"},"cq":{"a4":[],"d":["m"],"d.E":"m"},"bu":{"a4":[],"d":["m"],"d.E":"m"},"cr":{"a4":[],"d":["m"],"d.E":"m"},"d9":{"a4":[],"d":["m"],"d.E":"m"},"cs":{"a4":[],"d":["m"],"d.E":"m"},"ct":{"a4":[],"d":["m"],"d.E":"m"},"dA":{"dz":[]},"bB":{"dz":[]},"bC":{"m":[],"t":[],"d":["l"],"x":["m"],"d.E":"l"},"bD":{"m":[],"t":[],"d":["l"],"x":["m"],"d.E":"l"},"bE":{"m":[],"t":[],"d":["l"],"x":["m"],"d.E":"l"},"bF":{"m":[],"t":[],"d":["l"],"x":["m"],"d.E":"l"},"bG":{"m":[],"t":[],"d":["l"],"x":["m"],"d.E":"l"},"bH":{"m":[],"t":[],"d":["l"],"x":["m"],"d.E":"l"},"bI":{"m":[],"t":[],"d":["l"],"x":["m"],"d.E":"l"},"bJ":{"m":[],"t":[],"d":["l"],"x":["m"],"d.E":"l"},"bK":{"m":[],"t":[],"d":["l"],"x":["m"],"d.E":"l"},"bL":{"m":[],"t":[],"d":["l"],"x":["m"],"d.E":"l"},"bM":{"m":[],"t":[],"d":["l"],"x":["m"],"d.E":"l"},"bN":{"m":[],"t":[],"d":["l"],"x":["m"],"d.E":"l"},"K":{"m":[],"t":[],"d":["l"],"x":["m"],"d.E":"l"},"f1":{"f9":[]},"iW":{"p":["i"],"q":["i"],"d":["i"]},"au":{"p":["i"],"q":["i"],"d":["i"]},"mN":{"p":["i"],"q":["i"],"d":["i"]},"bv":{"p":["i"],"q":["i"],"d":["i"]},"hC":{"p":["i"],"q":["i"],"d":["i"]},"iV":{"p":["i"],"q":["i"],"d":["i"]},"dI":{"p":["i"],"q":["i"],"d":["i"]},"iR":{"p":["w"],"q":["w"],"d":["w"]},"iS":{"p":["w"],"q":["w"],"d":["w"]},"m":{"t":[],"x":["m"],"d":["l"]}}'))
A.nW(v.typeUniverse,JSON.parse('{"cD":1,"ed":2,"a_":1,"e6":1,"ew":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.ag
return{n:s("aI"),k:s("cS"),G:s("t"),R:s("q<@>"),C:s("H"),Z:s("bq"),x:s("d_"),gj:s("eD"),ak:s("eE"),fa:s("d0"),P:s("aK"),r:s("S"),I:s("a4"),cV:s("bu"),dQ:s("bv"),bM:s("d<w>"),hf:s("d<@>"),hb:s("d<i>"),eB:s("u<eu>"),g5:s("u<bo>"),U:s("u<d_>"),g:s("u<aL>"),b7:s("u<b8>"),W:s("u<p<p<p<i>>>>"),o:s("u<p<p<i>>>"),cJ:s("u<p<au>>"),S:s("u<p<i>>"),dH:s("u<bz>"),as:s("u<aN>"),dm:s("u<dC>"),bI:s("u<aa<w>>"),s:s("u<W>"),h:s("u<au>"),ao:s("u<b_>"),Y:s("u<fi>"),J:s("u<dR>"),gn:s("u<fp>"),e8:s("u<cI>"),cO:s("u<@>"),t:s("u<i>"),f8:s("u<eU?>"),a6:s("u<D?>"),A:s("u<~(ad)>"),e:s("a5<@>"),T:s("dg"),m:s("L"),b:s("aS"),aU:s("ak<@>"),d2:s("b8"),gS:s("p<p<b_>>"),fS:s("p<aN>"),B:s("p<dL>"),e6:s("p<b_>"),eQ:s("p<dO>"),db:s("p<dP>"),cC:s("p<dQ>"),j:s("p<@>"),L:s("p<i>"),D:s("p<b6?>"),by:s("p<au?>"),ck:s("aD<W,W>"),f:s("aD<@,@>"),e9:s("bz"),bc:s("al"),gu:s("a_<@>"),bm:s("aN"),a:s("ae"),K:s("D"),dv:s("m"),O:s("aa<w>"),b8:s("bc"),i:s("cA"),gT:s("qc"),l:s("cB"),N:s("W"),ci:s("E"),eK:s("aX"),p:s("au"),bJ:s("dJ"),dd:s("dL"),fD:s("b_"),ai:s("dO"),cP:s("dP"),dE:s("dQ"),_:s("aw<@>"),hg:s("dZ<D?,D?>"),y:s("aG"),al:s("aG(D)"),V:s("w"),z:s("@"),fO:s("@()"),v:s("@(D)"),Q:s("@(D,cB)"),q:s("i"),c:s("jN?"),eH:s("cc<ae>?"),fe:s("b6?"),H:s("aL?"),bC:s("bv?"),an:s("L?"),eg:s("p<i>?"),ez:s("p<b6?>?"),di:s("p<i?>?"),cZ:s("aD<W,W>?"),X:s("D?"),dk:s("W?"),d:s("au?"),eW:s("dM?"),dP:s("fj?"),g2:s("bf?"),F:s("dV<@,@>?"),br:s("fr?"),fQ:s("aG?"),cD:s("w?"),h6:s("i?"),cg:s("l?"),bK:s("~(i)?"),e7:s("~(i,aG)?"),u:s("l"),w:s("~"),M:s("~()"),E:s("~(b8,bv,i)"),d6:s("~(i,aG)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.bo=J.eK.prototype
B.e=J.u.prototype
B.a=J.df.prototype
B.b=J.dh.prototype
B.r=J.cu.prototype
B.br=J.aS.prototype
B.bs=J.di.prototype
B.A=A.dl.prototype
B.B=A.dm.prototype
B.C=A.dn.prototype
B.q=A.dp.prototype
B.O=A.dq.prototype
B.n=A.dt.prototype
B.i=A.du.prototype
B.c=A.aN.prototype
B.b0=J.f5.prototype
B.ag=J.dJ.prototype
B.D=new A.cS(0,"littleEndian")
B.E=new A.cS(1,"bigEndian")
B.b5=new A.cX(A.ag("cX<0&>"))
B.ai=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.b6=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.bb=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.b7=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.ba=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.b9=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.b8=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.aj=function(hooks) { return hooks; }

B.bc=new A.eX()
B.ak=new A.eZ()
B.al=new A.he()
B.bd=new A.f2()
B.t=new A.hx()
B.be=new A.ff()
B.bf=new A.fs()
B.p=new A.ft()
B.R=new A.fu()
B.am=new A.fv()
B.an=new A.iu()
B.bg=new A.fP(2,"both")
B.bh=new A.a9("Image has no usable crop area",null,null)
B.bi=new A.a9("Invalid Huffman code length",null,null)
B.bj=new A.a9("Incomplete Huffman table",null,null)
B.a4=new A.a9("Image could not be decoded",null,null)
B.bk=new A.a9("Image exceeds 24 megapixels or is invalid",null,null)
B.bl=new A.a9("Oversubscribed Huffman table",null,null)
B.bm=new A.a9("Expected a PNG, JPEG or WebP image",null,null)
B.F=new A.a8(0,"uint1")
B.G=new A.a8(1,"uint2")
B.H=new A.a8(10,"float32")
B.I=new A.a8(11,"float64")
B.J=new A.a8(2,"uint4")
B.k=new A.a8(3,"uint8")
B.u=new A.a8(4,"uint16")
B.K=new A.a8(5,"uint32")
B.S=new A.a8(6,"int8")
B.T=new A.a8(7,"int16")
B.U=new A.a8(8,"int32")
B.L=new A.a8(9,"float16")
B.v=new A.fQ(2,"sequence")
B.a5=new A.eG(0,"none")
B.a6=new A.eG(1,"deflate")
B.d=new A.a3(0,"none")
B.ao=new A.a3(1,"byte")
B.ap=new A.a3(10,"sRational")
B.aq=new A.a3(11,"single")
B.ar=new A.a3(12,"double")
B.as=new A.a3(13,"ifd")
B.h=new A.a3(2,"ascii")
B.f=new A.a3(3,"short")
B.j=new A.a3(4,"long")
B.l=new A.a3(5,"rational")
B.at=new A.a3(6,"sByte")
B.w=new A.a3(7,"undefined")
B.au=new A.a3(8,"sShort")
B.av=new A.a3(9,"sLong")
B.a7=new A.da(0,"gzip")
B.M=new A.da(1,"zlib")
B.bn=new A.da(2,"raw")
B.bp=new A.eO(0,"nearest")
B.bq=new A.eO(1,"linear")
B.bt=new A.hb(null)
B.bu=new A.hd(!1)
B.x=s([0,2,8],t.t)
B.a8=s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],t.t)
B.aw=s([252,243,207,63],t.t)
B.hI=new A.cy(0,"none")
B.hJ=new A.cy(1,"background")
B.hK=new A.cy(2,"previous")
B.bI=s([B.hI,B.hJ,B.hK],A.ag("u<cy>"))
B.bK=s([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],t.t)
B.ax=s([2,3,7],t.t)
B.bL=s([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],t.t)
B.bS=s([3,3,11],t.t)
B.ae=s([128,128,128,128,128,128,128,128,128,128,128],t.t)
B.aA=s([B.ae,B.ae,B.ae],t.S)
B.ct=s([253,136,254,255,228,219,128,128,128,128,128],t.t)
B.dl=s([189,129,242,255,227,213,255,219,128,128,128],t.t)
B.dr=s([106,126,227,252,214,209,255,255,128,128,128],t.t)
B.eP=s([B.ct,B.dl,B.dr],t.S)
B.eV=s([1,98,248,255,236,226,255,255,128,128,128],t.t)
B.bW=s([181,133,238,254,221,234,255,154,128,128,128],t.t)
B.bU=s([78,134,202,247,198,180,255,219,128,128,128],t.t)
B.fi=s([B.eV,B.bW,B.bU],t.S)
B.co=s([1,185,249,255,243,255,128,128,128,128,128],t.t)
B.eT=s([184,150,247,255,236,224,128,128,128,128,128],t.t)
B.h5=s([77,110,216,255,236,230,128,128,128,128,128],t.t)
B.el=s([B.co,B.eT,B.h5],t.S)
B.et=s([1,101,251,255,241,255,128,128,128,128,128],t.t)
B.cr=s([170,139,241,252,236,209,255,255,128,128,128],t.t)
B.ez=s([37,116,196,243,228,255,255,255,128,128,128],t.t)
B.cd=s([B.et,B.cr,B.ez],t.S)
B.dD=s([1,204,254,255,245,255,128,128,128,128,128],t.t)
B.hk=s([207,160,250,255,238,128,128,128,128,128,128],t.t)
B.hj=s([102,103,231,255,211,171,128,128,128,128,128],t.t)
B.cM=s([B.dD,B.hk,B.hj],t.S)
B.c7=s([1,152,252,255,240,255,128,128,128,128,128],t.t)
B.hp=s([177,135,243,255,234,225,128,128,128,128,128],t.t)
B.eg=s([80,129,211,255,194,224,128,128,128,128,128],t.t)
B.eO=s([B.c7,B.hp,B.eg],t.S)
B.aC=s([1,1,255,128,128,128,128,128,128,128,128],t.t)
B.f9=s([246,1,255,128,128,128,128,128,128,128,128],t.t)
B.e1=s([255,128,128,128,128,128,128,128,128,128,128],t.t)
B.hy=s([B.aC,B.f9,B.e1],t.S)
B.cG=s([B.aA,B.eP,B.fi,B.el,B.cd,B.cM,B.eO,B.hy],t.o)
B.h7=s([198,35,237,223,193,187,162,160,145,155,62],t.t)
B.cs=s([131,45,198,221,172,176,220,157,252,221,1],t.t)
B.h6=s([68,47,146,208,149,167,221,162,255,223,128],t.t)
B.dM=s([B.h7,B.cs,B.h6],t.S)
B.fj=s([1,149,241,255,221,224,255,255,128,128,128],t.t)
B.fy=s([184,141,234,253,222,220,255,199,128,128,128],t.t)
B.dY=s([81,99,181,242,176,190,249,202,255,255,128],t.t)
B.fU=s([B.fj,B.fy,B.dY],t.S)
B.fL=s([1,129,232,253,214,197,242,196,255,255,128],t.t)
B.hh=s([99,121,210,250,201,198,255,202,128,128,128],t.t)
B.eQ=s([23,91,163,242,170,187,247,210,255,255,128],t.t)
B.e3=s([B.fL,B.hh,B.eQ],t.S)
B.d1=s([1,200,246,255,234,255,128,128,128,128,128],t.t)
B.fI=s([109,178,241,255,231,245,255,255,128,128,128],t.t)
B.bJ=s([44,130,201,253,205,192,255,255,128,128,128],t.t)
B.fY=s([B.d1,B.fI,B.bJ],t.S)
B.c1=s([1,132,239,251,219,209,255,165,128,128,128],t.t)
B.bw=s([94,136,225,251,218,190,255,255,128,128,128],t.t)
B.fN=s([22,100,174,245,186,161,255,199,128,128,128],t.t)
B.er=s([B.c1,B.bw,B.fN],t.S)
B.fx=s([1,182,249,255,232,235,128,128,128,128,128],t.t)
B.eI=s([124,143,241,255,227,234,128,128,128,128,128],t.t)
B.di=s([35,77,181,251,193,211,255,205,128,128,128],t.t)
B.dt=s([B.fx,B.eI,B.di],t.S)
B.hz=s([1,157,247,255,236,231,255,255,128,128,128],t.t)
B.cF=s([121,141,235,255,225,227,255,255,128,128,128],t.t)
B.fJ=s([45,99,188,251,195,217,255,224,128,128,128],t.t)
B.cc=s([B.hz,B.cF,B.fJ],t.S)
B.bx=s([1,1,251,255,213,255,128,128,128,128,128],t.t)
B.bN=s([203,1,248,255,255,128,128,128,128,128,128],t.t)
B.fz=s([137,1,177,255,224,255,128,128,128,128,128],t.t)
B.c8=s([B.bx,B.bN,B.fz],t.S)
B.fq=s([B.dM,B.fU,B.e3,B.fY,B.er,B.dt,B.cc,B.c8],t.o)
B.cQ=s([253,9,248,251,207,208,255,192,128,128,128],t.t)
B.fa=s([175,13,224,243,193,185,249,198,255,255,128],t.t)
B.hx=s([73,17,171,221,161,179,236,167,255,234,128],t.t)
B.f2=s([B.cQ,B.fa,B.hx],t.S)
B.fn=s([1,95,247,253,212,183,255,255,128,128,128],t.t)
B.e9=s([239,90,244,250,211,209,255,255,128,128,128],t.t)
B.h4=s([155,77,195,248,188,195,255,255,128,128,128],t.t)
B.fw=s([B.fn,B.e9,B.h4],t.S)
B.dF=s([1,24,239,251,218,219,255,205,128,128,128],t.t)
B.fc=s([201,51,219,255,196,186,128,128,128,128,128],t.t)
B.e8=s([69,46,190,239,201,218,255,228,128,128,128],t.t)
B.fl=s([B.dF,B.fc,B.e8],t.S)
B.dp=s([1,191,251,255,255,128,128,128,128,128,128],t.t)
B.ex=s([223,165,249,255,213,255,128,128,128,128,128],t.t)
B.eU=s([141,124,248,255,255,128,128,128,128,128,128],t.t)
B.fK=s([B.dp,B.ex,B.eU],t.S)
B.dO=s([1,16,248,255,255,128,128,128,128,128,128],t.t)
B.cD=s([190,36,230,255,236,255,128,128,128,128,128],t.t)
B.cu=s([149,1,255,128,128,128,128,128,128,128,128],t.t)
B.c2=s([B.dO,B.cD,B.cu],t.S)
B.eS=s([1,226,255,128,128,128,128,128,128,128,128],t.t)
B.f5=s([247,192,255,128,128,128,128,128,128,128,128],t.t)
B.h3=s([240,128,255,128,128,128,128,128,128,128,128],t.t)
B.bP=s([B.eS,B.f5,B.h3],t.S)
B.fX=s([1,134,252,255,255,128,128,128,128,128,128],t.t)
B.eH=s([213,62,250,255,255,128,128,128,128,128,128],t.t)
B.hn=s([55,93,255,128,128,128,128,128,128,128,128],t.t)
B.eR=s([B.fX,B.eH,B.hn],t.S)
B.ck=s([B.f2,B.fw,B.fl,B.fK,B.c2,B.bP,B.eR,B.aA],t.o)
B.eJ=s([202,24,213,235,186,191,220,160,240,175,255],t.t)
B.cq=s([126,38,182,232,169,184,228,174,255,187,128],t.t)
B.c4=s([61,46,138,219,151,178,240,170,255,216,128],t.t)
B.fu=s([B.eJ,B.cq,B.c4],t.S)
B.ef=s([1,112,230,250,199,191,247,159,255,255,128],t.t)
B.cb=s([166,109,228,252,211,215,255,174,128,128,128],t.t)
B.ev=s([39,77,162,232,172,180,245,178,255,255,128],t.t)
B.fs=s([B.ef,B.cb,B.ev],t.S)
B.eh=s([1,52,220,246,198,199,249,220,255,255,128],t.t)
B.cK=s([124,74,191,243,183,193,250,221,255,255,128],t.t)
B.dh=s([24,71,130,219,154,170,243,182,255,255,128],t.t)
B.fr=s([B.eh,B.cK,B.dh],t.S)
B.df=s([1,182,225,249,219,240,255,224,128,128,128],t.t)
B.hm=s([149,150,226,252,216,205,255,171,128,128,128],t.t)
B.hD=s([28,108,170,242,183,194,254,223,255,255,128],t.t)
B.he=s([B.df,B.hm,B.hD],t.S)
B.hE=s([1,81,230,252,204,203,255,192,128,128,128],t.t)
B.fF=s([123,102,209,247,188,196,255,233,128,128,128],t.t)
B.h1=s([20,95,153,243,164,173,255,203,128,128,128],t.t)
B.fG=s([B.hE,B.fF,B.h1],t.S)
B.dU=s([1,222,248,255,216,213,128,128,128,128,128],t.t)
B.eG=s([168,175,246,252,235,205,255,255,128,128,128],t.t)
B.dk=s([47,116,215,255,211,212,255,255,128,128,128],t.t)
B.cz=s([B.dU,B.eG,B.dk],t.S)
B.dT=s([1,121,236,253,212,214,255,255,128,128,128],t.t)
B.ei=s([141,84,213,252,201,202,255,219,128,128,128],t.t)
B.f0=s([42,80,160,240,162,185,255,205,128,128,128],t.t)
B.dv=s([B.dT,B.ei,B.f0],t.S)
B.ht=s([244,1,255,128,128,128,128,128,128,128,128],t.t)
B.bv=s([238,1,255,128,128,128,128,128,128,128,128],t.t)
B.f6=s([B.aC,B.ht,B.bv],t.S)
B.bG=s([B.fu,B.fs,B.fr,B.he,B.fG,B.cz,B.dv,B.f6],t.o)
B.c3=s([B.cG,B.fq,B.ck,B.bG],t.W)
B.ay=s([63,207,243,252],t.t)
B.bD=s([173,148,140],t.t)
B.bE=s([176,155,140,135],t.t)
B.bC=s([180,157,141,134,130],t.t)
B.bM=s([254,254,243,230,196,177,153,140,133,130,129],t.t)
B.az=s([B.bD,B.bE,B.bC,B.bM],t.S)
B.cw=s([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],t.t)
B.V=s([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29],t.t)
B.cR=s([0,1,1,2,4,8,1,1,2,4,8,4,8,4],t.t)
B.aB=s([2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],t.t)
B.aD=s([280,256,256,256,40],t.t)
B.aa=s([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],t.t)
B.aE=s([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],t.t)
B.ab=s([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],t.t)
B.ac=s([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],t.t)
B.y=s([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],t.t)
B.aF=s([254,253,251,247,239,223,191,127],t.t)
B.W=s([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],t.t)
B.ad=s([A.pG(),A.py(),A.pN(),A.pL(),A.pI(),A.pH(),A.pJ()],t.A)
B.aG=s([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],t.t)
B.hG=new A.dB(0,"source")
B.hH=new A.dB(1,"over")
B.dQ=s([B.hG,B.hH],A.ag("u<dB>"))
B.aJ=s([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],t.t)
B.X=s([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],t.t)
B.dX=s([B.d,B.ao,B.h,B.f,B.j,B.l,B.at,B.w,B.au,B.av,B.ap,B.aq,B.ar,B.as],A.ag("u<a3>"))
B.aK=s([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],t.t)
B.eY=s([231,120,48,89,115,113,120,152,112],t.t)
B.bH=s([152,179,64,126,170,118,46,70,95],t.t)
B.e7=s([175,69,143,80,85,82,72,155,103],t.t)
B.bZ=s([56,58,10,171,218,189,17,13,152],t.t)
B.eu=s([114,26,17,163,44,195,21,10,173],t.t)
B.eF=s([121,24,80,195,26,62,44,64,85],t.t)
B.eq=s([144,71,10,38,171,213,144,34,26],t.t)
B.fP=s([170,46,55,19,136,160,33,206,71],t.t)
B.d2=s([63,20,8,114,114,208,12,9,226],t.t)
B.dE=s([81,40,11,96,182,84,29,16,36],t.t)
B.by=s([B.eY,B.bH,B.e7,B.bZ,B.eu,B.eF,B.eq,B.fP,B.d2,B.dE],t.S)
B.cC=s([134,183,89,137,98,101,106,165,148],t.t)
B.fB=s([72,187,100,130,157,111,32,75,80],t.t)
B.eM=s([66,102,167,99,74,62,40,234,128],t.t)
B.bO=s([41,53,9,178,241,141,26,8,107],t.t)
B.dA=s([74,43,26,146,73,166,49,23,157],t.t)
B.da=s([65,38,105,160,51,52,31,115,128],t.t)
B.dd=s([104,79,12,27,217,255,87,17,7],t.t)
B.e5=s([87,68,71,44,114,51,15,186,23],t.t)
B.ft=s([47,41,14,110,182,183,21,17,194],t.t)
B.f8=s([66,45,25,102,197,189,23,18,22],t.t)
B.h2=s([B.cC,B.fB,B.eM,B.bO,B.dA,B.da,B.dd,B.e5,B.ft,B.f8],t.S)
B.eX=s([88,88,147,150,42,46,45,196,205],t.t)
B.ew=s([43,97,183,117,85,38,35,179,61],t.t)
B.dj=s([39,53,200,87,26,21,43,232,171],t.t)
B.e0=s([56,34,51,104,114,102,29,93,77],t.t)
B.em=s([39,28,85,171,58,165,90,98,64],t.t)
B.d6=s([34,22,116,206,23,34,43,166,73],t.t)
B.bz=s([107,54,32,26,51,1,81,43,31],t.t)
B.fS=s([68,25,106,22,64,171,36,225,114],t.t)
B.cB=s([34,19,21,102,132,188,16,76,124],t.t)
B.hb=s([62,18,78,95,85,57,50,48,51],t.t)
B.cO=s([B.eX,B.ew,B.dj,B.e0,B.em,B.d6,B.bz,B.fS,B.cB,B.hb],t.S)
B.ej=s([193,101,35,159,215,111,89,46,111],t.t)
B.cj=s([60,148,31,172,219,228,21,18,111],t.t)
B.c0=s([112,113,77,85,179,255,38,120,114],t.t)
B.h8=s([40,42,1,196,245,209,10,25,109],t.t)
B.dR=s([88,43,29,140,166,213,37,43,154],t.t)
B.d8=s([61,63,30,155,67,45,68,1,209],t.t)
B.dq=s([100,80,8,43,154,1,51,26,71],t.t)
B.bR=s([142,78,78,16,255,128,34,197,171],t.t)
B.ee=s([41,40,5,102,211,183,4,1,221],t.t)
B.cV=s([51,50,17,168,209,192,23,25,82],t.t)
B.cN=s([B.ej,B.cj,B.c0,B.h8,B.dR,B.d8,B.dq,B.bR,B.ee,B.cV],t.S)
B.dg=s([138,31,36,171,27,166,38,44,229],t.t)
B.cL=s([67,87,58,169,82,115,26,59,179],t.t)
B.fh=s([63,59,90,180,59,166,93,73,154],t.t)
B.h_=s([40,40,21,116,143,209,34,39,175],t.t)
B.bT=s([47,15,16,183,34,223,49,45,183],t.t)
B.cp=s([46,17,33,183,6,98,15,32,183],t.t)
B.hF=s([57,46,22,24,128,1,54,17,37],t.t)
B.ds=s([65,32,73,115,28,128,23,128,205],t.t)
B.eL=s([40,3,9,115,51,192,18,6,223],t.t)
B.dy=s([87,37,9,115,59,77,64,21,47],t.t)
B.ed=s([B.dg,B.cL,B.fh,B.h_,B.bT,B.cp,B.hF,B.ds,B.eL,B.dy],t.S)
B.hs=s([104,55,44,218,9,54,53,130,226],t.t)
B.ca=s([64,90,70,205,40,41,23,26,57],t.t)
B.fg=s([54,57,112,184,5,41,38,166,213],t.t)
B.d7=s([30,34,26,133,152,116,10,32,134],t.t)
B.f3=s([39,19,53,221,26,114,32,73,255],t.t)
B.cT=s([31,9,65,234,2,15,1,118,73],t.t)
B.ec=s([75,32,12,51,192,255,160,43,51],t.t)
B.d9=s([88,31,35,67,102,85,55,186,85],t.t)
B.dJ=s([56,21,23,111,59,205,45,37,192],t.t)
B.dK=s([55,38,70,124,73,102,1,34,98],t.t)
B.hw=s([B.hs,B.ca,B.fg,B.d7,B.f3,B.cT,B.ec,B.d9,B.dJ,B.dK],t.S)
B.dI=s([125,98,42,88,104,85,117,175,82],t.t)
B.dc=s([95,84,53,89,128,100,113,101,45],t.t)
B.eA=s([75,79,123,47,51,128,81,171,1],t.t)
B.c9=s([57,17,5,71,102,57,53,41,49],t.t)
B.fb=s([38,33,13,121,57,73,26,1,85],t.t)
B.hl=s([41,10,67,138,77,110,90,47,114],t.t)
B.ea=s([115,21,2,10,102,255,166,23,6],t.t)
B.cE=s([101,29,16,10,85,128,101,196,26],t.t)
B.dn=s([57,18,10,102,102,213,34,20,43],t.t)
B.dP=s([117,20,15,36,163,128,68,1,26],t.t)
B.e4=s([B.dI,B.dc,B.eA,B.c9,B.fb,B.hl,B.ea,B.cE,B.dn,B.dP],t.S)
B.dw=s([102,61,71,37,34,53,31,243,192],t.t)
B.hi=s([69,60,71,38,73,119,28,222,37],t.t)
B.dz=s([68,45,128,34,1,47,11,245,171],t.t)
B.bB=s([62,17,19,70,146,85,55,62,70],t.t)
B.hB=s([37,43,37,154,100,163,85,160,1],t.t)
B.hf=s([63,9,92,136,28,64,32,201,85],t.t)
B.fE=s([75,15,9,9,64,255,184,119,16],t.t)
B.cJ=s([86,6,28,5,64,255,25,248,1],t.t)
B.f7=s([56,8,17,132,137,255,55,116,128],t.t)
B.c5=s([58,15,20,82,135,57,26,121,40],t.t)
B.ep=s([B.dw,B.hi,B.dz,B.bB,B.hB,B.hf,B.fE,B.cJ,B.f7,B.c5],t.S)
B.eD=s([164,50,31,137,154,133,25,35,218],t.t)
B.cI=s([51,103,44,131,131,123,31,6,158],t.t)
B.hd=s([86,40,64,135,148,224,45,183,128],t.t)
B.e6=s([22,26,17,131,240,154,14,1,209],t.t)
B.cm=s([45,16,21,91,64,222,7,1,197],t.t)
B.h0=s([56,21,39,155,60,138,23,102,213],t.t)
B.hv=s([83,12,13,54,192,255,68,47,28],t.t)
B.eN=s([85,26,85,85,128,128,32,146,171],t.t)
B.e2=s([18,11,7,63,144,171,4,4,246],t.t)
B.cP=s([35,27,10,146,174,171,12,26,128],t.t)
B.dV=s([B.eD,B.cI,B.hd,B.e6,B.cm,B.h0,B.hv,B.eN,B.e2,B.cP],t.S)
B.fp=s([190,80,35,99,180,80,126,54,45],t.t)
B.fO=s([85,126,47,87,176,51,41,20,32],t.t)
B.fd=s([101,75,128,139,118,146,116,128,85],t.t)
B.fA=s([56,41,15,176,236,85,37,9,62],t.t)
B.c6=s([71,30,17,119,118,255,17,18,138],t.t)
B.eo=s([101,38,60,138,55,70,43,26,142],t.t)
B.dZ=s([146,36,19,30,171,255,97,27,20],t.t)
B.eW=s([138,45,61,62,219,1,81,188,64],t.t)
B.h9=s([32,41,20,117,151,142,20,21,163],t.t)
B.fQ=s([112,19,12,61,195,128,48,4,24],t.t)
B.fk=s([B.fp,B.fO,B.fd,B.fA,B.c6,B.eo,B.dZ,B.eW,B.h9,B.fQ],t.S)
B.aL=s([B.by,B.h2,B.cO,B.cN,B.ed,B.hw,B.e4,B.ep,B.dV,B.fk],t.o)
B.ey=s([0,1,1,1,0],t.t)
B.aM=s([A.pq(),A.px(),A.pz(),A.ps(),A.pv(),A.pB(),A.pu(),A.pA(),A.pr(),A.pt()],t.A)
B.aN=s([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],t.t)
B.Y=s([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],t.t)
B.fe=s([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],t.t)
B.a_=s([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],t.t)
B.hL=new A.bb(0,"none")
B.hM=new A.bb(1,"sub")
B.hN=new A.bb(2,"up")
B.hO=new A.bb(3,"average")
B.hP=new A.bb(4,"paeth")
B.a0=s([B.hL,B.hM,B.hN,B.hO,B.hP],A.ag("u<bb>"))
B.o=s([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],t.t)
B.a1=s([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],t.t)
B.m=s([255,255,255,255,255,255,255,255,255,255,255],t.t)
B.z=s([B.m,B.m,B.m],t.S)
B.e_=s([176,246,255,255,255,255,255,255,255,255,255],t.t)
B.ho=s([223,241,252,255,255,255,255,255,255,255,255],t.t)
B.cy=s([249,253,253,255,255,255,255,255,255,255,255],t.t)
B.eb=s([B.e_,B.ho,B.cy],t.S)
B.dG=s([255,244,252,255,255,255,255,255,255,255,255],t.t)
B.du=s([234,254,254,255,255,255,255,255,255,255,255],t.t)
B.aR=s([253,255,255,255,255,255,255,255,255,255,255],t.t)
B.cH=s([B.dG,B.du,B.aR],t.S)
B.hc=s([255,246,254,255,255,255,255,255,255,255,255],t.t)
B.f4=s([239,253,254,255,255,255,255,255,255,255,255],t.t)
B.aO=s([254,255,254,255,255,255,255,255,255,255,255],t.t)
B.fC=s([B.hc,B.f4,B.aO],t.S)
B.aH=s([255,248,254,255,255,255,255,255,255,255,255],t.t)
B.cZ=s([251,255,254,255,255,255,255,255,255,255,255],t.t)
B.eE=s([B.aH,B.cZ,B.m],t.S)
B.a9=s([255,253,254,255,255,255,255,255,255,255,255],t.t)
B.eC=s([251,254,254,255,255,255,255,255,255,255,255],t.t)
B.d5=s([B.a9,B.eC,B.aO],t.S)
B.bX=s([255,254,253,255,254,255,255,255,255,255,255],t.t)
B.dC=s([250,255,254,255,254,255,255,255,255,255,255],t.t)
B.Z=s([254,255,255,255,255,255,255,255,255,255,255],t.t)
B.dS=s([B.bX,B.dC,B.Z],t.S)
B.dm=s([B.z,B.eb,B.cH,B.fC,B.eE,B.d5,B.dS,B.z],t.o)
B.bF=s([217,255,255,255,255,255,255,255,255,255,255],t.t)
B.dW=s([225,252,241,253,255,255,254,255,255,255,255],t.t)
B.ff=s([234,250,241,250,253,255,253,254,255,255,255],t.t)
B.fR=s([B.bF,B.dW,B.ff],t.S)
B.af=s([255,254,255,255,255,255,255,255,255,255,255],t.t)
B.cA=s([223,254,254,255,255,255,255,255,255,255,255],t.t)
B.cn=s([238,253,254,254,255,255,255,255,255,255,255],t.t)
B.f1=s([B.af,B.cA,B.cn],t.S)
B.dx=s([249,254,255,255,255,255,255,255,255,255,255],t.t)
B.ha=s([B.aH,B.dx,B.m],t.S)
B.fT=s([255,253,255,255,255,255,255,255,255,255,255],t.t)
B.eB=s([247,254,255,255,255,255,255,255,255,255,255],t.t)
B.es=s([B.fT,B.eB,B.m],t.S)
B.ci=s([252,255,255,255,255,255,255,255,255,255,255],t.t)
B.bQ=s([B.a9,B.ci,B.m],t.S)
B.aT=s([255,254,254,255,255,255,255,255,255,255,255],t.t)
B.cl=s([B.aT,B.aR,B.m],t.S)
B.f_=s([255,254,253,255,255,255,255,255,255,255,255],t.t)
B.aI=s([250,255,255,255,255,255,255,255,255,255,255],t.t)
B.ch=s([B.f_,B.aI,B.Z],t.S)
B.c_=s([B.fR,B.f1,B.ha,B.es,B.bQ,B.cl,B.ch,B.z],t.o)
B.fm=s([186,251,250,255,255,255,255,255,255,255,255],t.t)
B.cW=s([234,251,244,254,255,255,255,255,255,255,255],t.t)
B.fD=s([251,251,243,253,254,255,254,255,255,255,255],t.t)
B.d3=s([B.fm,B.cW,B.fD],t.S)
B.d0=s([236,253,254,255,255,255,255,255,255,255,255],t.t)
B.eZ=s([251,253,253,254,254,255,255,255,255,255,255],t.t)
B.dL=s([B.a9,B.d0,B.eZ],t.S)
B.fo=s([254,254,254,255,255,255,255,255,255,255,255],t.t)
B.cX=s([B.aT,B.fo,B.m],t.S)
B.fH=s([254,254,255,255,255,255,255,255,255,255,255],t.t)
B.d_=s([B.af,B.fH,B.Z],t.S)
B.aU=s([B.m,B.Z,B.m],t.S)
B.bY=s([B.d3,B.dL,B.cX,B.d_,B.aU,B.z,B.z,B.z],t.o)
B.dB=s([248,255,255,255,255,255,255,255,255,255,255],t.t)
B.db=s([250,254,252,254,255,255,255,255,255,255,255],t.t)
B.cU=s([248,254,249,253,255,255,255,255,255,255,255],t.t)
B.dN=s([B.dB,B.db,B.cU],t.S)
B.bV=s([255,253,253,255,255,255,255,255,255,255,255],t.t)
B.fW=s([246,253,253,255,255,255,255,255,255,255,255],t.t)
B.d4=s([252,254,251,254,254,255,255,255,255,255,255],t.t)
B.fV=s([B.bV,B.fW,B.d4],t.S)
B.hA=s([255,254,252,255,255,255,255,255,255,255,255],t.t)
B.cS=s([248,254,253,255,255,255,255,255,255,255,255],t.t)
B.cg=s([253,255,254,254,255,255,255,255,255,255,255],t.t)
B.eK=s([B.hA,B.cS,B.cg],t.S)
B.hu=s([255,251,254,255,255,255,255,255,255,255,255],t.t)
B.ek=s([245,251,254,255,255,255,255,255,255,255,255],t.t)
B.en=s([253,253,254,255,255,255,255,255,255,255,255],t.t)
B.cv=s([B.hu,B.ek,B.en],t.S)
B.cx=s([255,251,253,255,255,255,255,255,255,255,255],t.t)
B.dH=s([252,253,254,255,255,255,255,255,255,255,255],t.t)
B.fv=s([B.cx,B.dH,B.af],t.S)
B.ce=s([255,252,255,255,255,255,255,255,255,255,255],t.t)
B.hr=s([249,255,254,255,255,255,255,255,255,255,255],t.t)
B.de=s([255,255,254,255,255,255,255,255,255,255,255],t.t)
B.bA=s([B.ce,B.hr,B.de],t.S)
B.hC=s([255,255,253,255,255,255,255,255,255,255,255],t.t)
B.cY=s([B.hC,B.aI,B.m],t.S)
B.cf=s([B.dN,B.fV,B.eK,B.cv,B.fv,B.bA,B.cY,B.aU],t.o)
B.fM=s([B.dm,B.c_,B.bY,B.cf],t.W)
B.aP=s([137,80,78,71,13,10,26,10],t.t)
B.N=s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],t.t)
B.aQ=s([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],t.t)
B.fZ=s([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],t.t)
B.b1=new A.bQ(0,"predictor")
B.i6=new A.bQ(1,"crossColor")
B.i7=new A.bQ(2,"subtractGreen")
B.b2=new A.bQ(3,"colorIndexing")
B.aS=s([B.b1,B.i6,B.i7,B.b2],A.ag("u<bQ>"))
B.hg=s([73,67,67,95,80,82,79,70,73,76,69,0],t.t)
B.aV=s([A.pC(),A.pw(),A.pM(),A.pK(),A.pE(),A.pD(),A.pF()],t.A)
B.aW=s([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],t.t)
B.aX=s([null,A.q1(),A.q2(),A.q0()],A.ag("u<~(i,i,i,i,i,au)?>"))
B.hq=s([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8],t.t)
B.aY=s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],t.t)
B.aZ=new A.br([34665,"exif",40965,"interop",34853,"gps"],A.ag("br<i,W>"))
B.b_=new A.br([B.F,1,B.G,3,B.J,15,B.k,255,B.u,65535,B.K,4294967295,B.S,127,B.T,32767,B.U,2147483647,B.L,1,B.H,1,B.I,1],A.ag("br<a8,i>"))
B.hQ=new A.f7(0,"none")
B.hR=new A.f7(4,"paeth")
B.hS=new A.cZ([B.L,B.H,B.I],A.ag("cZ<a8>"))
B.hT=A.aH("q3")
B.hU=A.aH("q4")
B.hV=A.aH("iR")
B.hW=A.aH("iS")
B.hX=A.aH("bv")
B.hY=A.aH("iV")
B.hZ=A.aH("iW")
B.i_=A.aH("D")
B.i0=A.aH("hC")
B.i1=A.aH("dI")
B.i2=A.aH("mN")
B.i3=A.aH("au")
B.i4=new A.fg(!1)
B.i5=new A.fg(!0)
B.P=new A.cF(0,"undefined")
B.ah=new A.cF(1,"lossy")
B.a2=new A.cF(2,"lossless")
B.i8=new A.cF(3,"animated")
B.a3=new A.cG(0,"none")
B.i9=new A.cG(1,"partial")
B.ia=new A.cG(2,"full")
B.Q=new A.cG(3,"finish")
B.b3=new A.cJ(0,"header")
B.ib=new A.cJ(1,"blocks")
B.ic=new A.cJ(2,"trailer")
B.b4=new A.cJ(3,"done")})();(function staticFields(){$.ic=null
$.aq=A.o([],A.ag("u<D>"))
$.kf=null
$.jI=null
$.jH=null
$.l1=null
$.kU=null
$.l4=null
$.iy=null
$.iF=null
$.jo=null
$.cK=null
$.ee=null
$.ef=null
$.jl=!1
$.X=B.p
$.b5=A.ks()
$.kT=null
$.ji=null
$.kp=!1
$.ns=A.o([A.jr(),A.pO(),A.pT(),A.pU(),A.pV(),A.pW(),A.pX(),A.pY(),A.pZ(),A.q_(),A.pP(),A.pQ(),A.pR(),A.pS(),A.jr(),A.jr()],A.ag("u<i(i,dI,i)>"))
$.V=null
$.jR=A.ks()})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"q6","l9",()=>A.iA("_$dart_dartClosure"))
s($,"q5","js",()=>A.iA("_$dart_dartClosure_dartJSInterop"))
s($,"qP","lA",()=>A.o([new J.eP()],A.ag("u<dE>")))
s($,"qd","ld",()=>A.aY(A.hB({
toString:function(){return"$receiver$"}})))
s($,"qe","le",()=>A.aY(A.hB({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"qf","lf",()=>A.aY(A.hB(null)))
s($,"qg","lg",()=>A.aY(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"qj","lj",()=>A.aY(A.hB(void 0)))
s($,"qk","lk",()=>A.aY(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"qi","li",()=>A.aY(A.kl(null)))
s($,"qh","lh",()=>A.aY(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"qm","lm",()=>A.aY(A.kl(void 0)))
s($,"ql","ll",()=>A.aY(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"qs","jx",()=>A.nA())
s($,"qy","ls",()=>A.dw(4096))
s($,"qw","lq",()=>new A.is().$0())
s($,"qx","lr",()=>new A.ir().$0())
s($,"qN","fI",()=>A.fG(B.i_))
s($,"qv","lp",()=>A.jd(B.W,B.a8,257,286,15))
s($,"qu","lo",()=>A.jd(B.aG,B.y,0,30,15))
s($,"qt","ln",()=>A.jd(null,B.bL,0,19,7))
s($,"q8","lb",()=>A.iU(B.hq,!1))
s($,"q7","la",()=>A.iU(B.fe,!1))
s($,"qR","lB",()=>{var q=null,p="ISOSpeed"
return A.k1([11,A.f("ProcessingSoftware",B.h,q),254,A.f("SubfileType",B.j,1),255,A.f("OldSubfileType",B.j,1),256,A.f("ImageWidth",B.j,1),257,A.f("ImageLength",B.j,1),258,A.f("BitsPerSample",B.f,1),259,A.f("Compression",B.f,1),262,A.f("PhotometricInterpretation",B.f,1),263,A.f("Thresholding",B.f,1),264,A.f("CellWidth",B.f,1),265,A.f("CellLength",B.f,1),266,A.f("FillOrder",B.f,1),269,A.f("DocumentName",B.h,q),270,A.f("ImageDescription",B.h,q),271,A.f("Make",B.h,q),272,A.f("Model",B.h,q),273,A.f("StripOffsets",B.j,q),274,A.f("Orientation",B.f,1),277,A.f("SamplesPerPixel",B.f,1),278,A.f("RowsPerStrip",B.j,1),279,A.f("StripByteCounts",B.j,1),280,A.f("MinSampleValue",B.f,1),281,A.f("MaxSampleValue",B.f,1),282,A.f("XResolution",B.l,1),283,A.f("YResolution",B.l,1),284,A.f("PlanarConfiguration",B.f,1),285,A.f("PageName",B.h,q),286,A.f("XPosition",B.l,1),287,A.f("YPosition",B.l,1),290,A.f("GrayResponseUnit",B.f,1),291,A.f("GrayResponseCurve",B.d,q),292,A.f("T4Options",B.d,q),293,A.f("T6Options",B.d,q),296,A.f("ResolutionUnit",B.f,1),297,A.f("PageNumber",B.f,2),300,A.f("ColorResponseUnit",B.d,q),301,A.f("TransferFunction",B.f,768),305,A.f("Software",B.h,q),306,A.f("DateTime",B.h,q),315,A.f("Artist",B.h,q),316,A.f("HostComputer",B.h,q),317,A.f("Predictor",B.f,1),318,A.f("WhitePoint",B.l,2),319,A.f("PrimaryChromaticities",B.l,6),320,A.f("ColorMap",B.f,q),321,A.f("HalftoneHints",B.f,2),322,A.f("TileWidth",B.j,1),323,A.f("TileLength",B.j,1),324,A.f("TileOffsets",B.j,q),325,A.f("TileByteCounts",B.d,q),326,A.f("BadFaxLines",B.d,q),327,A.f("CleanFaxData",B.d,q),328,A.f("ConsecutiveBadFaxLines",B.d,q),332,A.f("InkSet",B.d,q),333,A.f("InkNames",B.d,q),334,A.f("NumberofInks",B.d,q),336,A.f("DotRange",B.d,q),337,A.f("TargetPrinter",B.h,q),338,A.f("ExtraSamples",B.d,q),339,A.f("SampleFormat",B.f,1),340,A.f("SMinSampleValue",B.d,q),341,A.f("SMaxSampleValue",B.d,q),342,A.f("TransferRange",B.d,q),343,A.f("ClipPath",B.d,q),512,A.f("JPEGProc",B.d,q),513,A.f("JPEGInterchangeFormat",B.d,q),514,A.f("JPEGInterchangeFormatLength",B.d,q),529,A.f("YCbCrCoefficients",B.l,3),530,A.f("YCbCrSubSampling",B.f,1),531,A.f("YCbCrPositioning",B.f,1),532,A.f("ReferenceBlackWhite",B.l,6),700,A.f("ApplicationNotes",B.f,1),18246,A.f("Rating",B.f,1),33421,A.f("CFARepeatPatternDim",B.d,q),33422,A.f("CFAPattern",B.d,q),33423,A.f("BatteryLevel",B.d,q),33432,A.f("Copyright",B.h,q),33434,A.f("ExposureTime",B.l,1),33437,A.f("FNumber",B.l,q),33723,A.f("IPTC-NAA",B.j,1),34665,A.f("ExifOffset",B.d,q),34675,A.f("InterColorProfile",B.d,q),34850,A.f("ExposureProgram",B.f,1),34852,A.f("SpectralSensitivity",B.h,q),34853,A.f("GPSOffset",B.d,q),34855,A.f(p,B.j,1),34856,A.f("OECF",B.d,q),34864,A.f("SensitivityType",B.f,1),34866,A.f("RecommendedExposureIndex",B.j,1),34867,A.f(p,B.j,1),36864,A.f("ExifVersion",B.w,q),36867,A.f("DateTimeOriginal",B.h,q),36868,A.f("DateTimeDigitized",B.h,q),36880,A.f("OffsetTime",B.h,q),36881,A.f("OffsetTimeOriginal",B.h,q),36882,A.f("OffsetTimeDigitized",B.h,q),37121,A.f("ComponentsConfiguration",B.w,q),37122,A.f("CompressedBitsPerPixel",B.d,q),37377,A.f("ShutterSpeedValue",B.d,q),37378,A.f("ApertureValue",B.d,q),37379,A.f("BrightnessValue",B.d,q),37380,A.f("ExposureBiasValue",B.d,q),37381,A.f("MaxApertureValue",B.d,q),37382,A.f("SubjectDistance",B.d,q),37383,A.f("MeteringMode",B.d,q),37384,A.f("LightSource",B.d,q),37385,A.f("Flash",B.d,q),37386,A.f("FocalLength",B.d,q),37396,A.f("SubjectArea",B.d,q),37500,A.f("MakerNote",B.w,q),37510,A.f("UserComment",B.w,q),37520,A.f("SubSecTime",B.d,q),37521,A.f("SubSecTimeOriginal",B.d,q),37522,A.f("SubSecTimeDigitized",B.d,q),40091,A.f("XPTitle",B.d,q),40092,A.f("XPComment",B.d,q),40093,A.f("XPAuthor",B.d,q),40094,A.f("XPKeywords",B.d,q),40095,A.f("XPSubject",B.d,q),40960,A.f("FlashPixVersion",B.d,q),40961,A.f("ColorSpace",B.f,1),40962,A.f("ExifImageWidth",B.f,1),40963,A.f("ExifImageLength",B.f,1),40964,A.f("RelatedSoundFile",B.d,q),40965,A.f("InteroperabilityOffset",B.d,q),41483,A.f("FlashEnergy",B.d,q),41484,A.f("SpatialFrequencyResponse",B.d,q),41486,A.f("FocalPlaneXResolution",B.d,q),41487,A.f("FocalPlaneYResolution",B.d,q),41488,A.f("FocalPlaneResolutionUnit",B.d,q),41492,A.f("SubjectLocation",B.d,q),41493,A.f("ExposureIndex",B.d,q),41495,A.f("SensingMethod",B.d,q),41728,A.f("FileSource",B.d,q),41729,A.f("SceneType",B.d,q),41730,A.f("CVAPattern",B.d,q),41985,A.f("CustomRendered",B.d,q),41986,A.f("ExposureMode",B.d,q),41987,A.f("WhiteBalance",B.d,q),41988,A.f("DigitalZoomRatio",B.d,q),41989,A.f("FocalLengthIn35mmFilm",B.d,q),41990,A.f("SceneCaptureType",B.d,q),41991,A.f("GainControl",B.d,q),41992,A.f("Contrast",B.d,q),41993,A.f("Saturation",B.d,q),41994,A.f("Sharpness",B.d,q),41995,A.f("DeviceSettingDescription",B.d,q),41996,A.f("SubjectDistanceRange",B.d,q),42016,A.f("ImageUniqueID",B.d,q),42032,A.f("CameraOwnerName",B.h,q),42033,A.f("BodySerialNumber",B.h,q),42034,A.f("LensSpecification",B.d,q),42035,A.f("LensMake",B.h,q),42036,A.f("LensModel",B.h,q),42037,A.f("LensSerialNumber",B.h,q),42240,A.f("Gamma",B.l,1),50341,A.f("PrintIM",B.d,q),59932,A.f("Padding",B.d,q),59933,A.f("OffsetSchema",B.d,q),65e3,A.f("OwnerName",B.h,q),65001,A.f("SerialNumber",B.h,q)],t.q,A.ag("eB"))})
s($,"qO","lz",()=>new A.eC(new WeakMap(),A.ag("eC<hC>")))
s($,"qM","jD",()=>{var q,p=A.dw(768),o=J.h2(256,t.q)
for(q=0;q<256;++q)o[q]=q
B.c.ag(p,256,512,o)
B.c.al(p,512,768,255)
return p})
s($,"q9","fH",()=>A.mo(A.o([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63],t.t)))
r($,"qn","jt",()=>A.dw(511))
r($,"qo","ju",()=>A.dw(511))
r($,"qq","jv",()=>A.k3(2041))
r($,"qr","jw",()=>A.k3(225))
r($,"qp","iM",()=>A.dw(766))
s($,"qb","lc",()=>A.jV(0,0,0))
s($,"qK","jC",()=>A.dw(1))
s($,"qL","ly",()=>A.m8(B.c.gu($.jC()),0,null))
s($,"qD","jA",()=>A.ml(1))
s($,"qE","lv",()=>J.lD(B.n.gu($.jA()),0,null))
s($,"qF","cP",()=>A.mm(1))
s($,"qH","iN",()=>J.lE(B.i.gu($.cP()),0,null))
s($,"qG","lw",()=>A.m2(B.i.gu($.cP())))
s($,"qB","jz",()=>A.mi(1))
s($,"qC","lu",()=>A.km(B.q.gu($.jz()),0))
s($,"qz","jy",()=>A.mf(1))
s($,"qA","lt",()=>A.km(B.A.gu($.jy()),0))
s($,"qI","jB",()=>A.mM(1))
s($,"qJ","lx",()=>{var q=$.jB()
return A.m3(q.gu(q))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.ba,ArrayBuffer:A.bz,ArrayBufferView:A.ds,DataView:A.f0,Float32Array:A.dl,Float64Array:A.dm,Int16Array:A.dn,Int32Array:A.dp,Int8Array:A.dq,Uint16Array:A.dt,Uint32Array:A.du,Uint8ClampedArray:A.dv,CanvasPixelArray:A.dv,Uint8Array:A.aN})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a_.$nativeSuperclassTag="ArrayBufferView"
A.e2.$nativeSuperclassTag="ArrayBufferView"
A.e3.$nativeSuperclassTag="ArrayBufferView"
A.dr.$nativeSuperclassTag="ArrayBufferView"
A.e4.$nativeSuperclassTag="ArrayBufferView"
A.e5.$nativeSuperclassTag="ArrayBufferView"
A.al.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$1$0=function(){return this()}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.pf
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()