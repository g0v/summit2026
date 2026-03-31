/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ds={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nd=0,_c=1,Dd=2,nr=1,Fd=2,Js=3,ei=0,Ze=1,mn=2,Qn=0,fs=1,xc=2,vc=3,yc=4,Ud=5,Li=100,Od=101,Bd=102,zd=103,kd=104,Vd=200,Hd=201,Gd=202,Wd=203,Na=204,Da=205,Xd=206,qd=207,Yd=208,jd=209,Kd=210,Zd=211,$d=212,Jd=213,Qd=214,Fa=0,Ua=1,Oa=2,xs=3,Ba=4,za=5,ka=6,Va=7,_u=0,tf=1,ef=2,Pn=0,xu=1,vu=2,yu=3,Ll=4,Mu=5,Su=6,bu=7,Mc="attached",nf="detached",Eu=300,Oi=301,vs=302,Uo=303,Oo=304,Ro=306,ys=1e3,Rn=1001,yo=1002,Ce=1003,Tu=1004,Qs=1005,Pe=1006,po=1007,Zn=1008,en=1009,wu=1010,Au=1011,hr=1012,Nl=1013,Ln=1014,an=1015,ni=1016,Dl=1017,Fl=1018,ur=1020,Ru=35902,Cu=35899,Pu=1021,Iu=1022,ln=1023,ii=1026,Ui=1027,Ul=1028,Ol=1029,Ms=1030,Bl=1031,zl=1033,mo=33776,go=33777,_o=33778,xo=33779,Ha=35840,Ga=35841,Wa=35842,Xa=35843,qa=36196,Ya=37492,ja=37496,Ka=37488,Za=37489,$a=37490,Ja=37491,Qa=37808,tl=37809,el=37810,nl=37811,il=37812,sl=37813,rl=37814,ol=37815,al=37816,ll=37817,cl=37818,hl=37819,ul=37820,dl=37821,fl=36492,pl=36494,ml=36495,gl=36283,_l=36284,xl=36285,vl=36286,dr=2300,fr=2301,Bo=2302,Sc=2303,bc=2400,Ec=2401,Tc=2402,sf=2500,rf=0,Lu=1,yl=2,of=3200,Nu=0,af=1,gi="",Re="srgb",Ye="srgb-linear",Mo="linear",ae="srgb",Gi=7680,wc=519,lf=512,cf=513,hf=514,kl=515,uf=516,df=517,Vl=518,ff=519,Ml=35044,Ac="300 es",Cn=2e3,pr=2001;function pf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function mf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function mr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gf(){const r=mr("canvas");return r.style.display="block",r}const Rc={};function So(...r){const t="THREE."+r.shift();console.log(t,...r)}function Du(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ht(...r){r=Du(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function qt(...r){r=Du(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function bo(...r){const t=r.join(" ");t in Rc||(Rc[t]=!0,Ht(...r))}function _f(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const xf={[Fa]:Ua,[Oa]:ka,[Ba]:Va,[xs]:za,[Ua]:Fa,[ka]:Oa,[Va]:Ba,[za]:xs};class zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cc=1234567;const ir=Math.PI/180,Ss=180/Math.PI;function cn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[r&255]+ze[r>>8&255]+ze[r>>16&255]+ze[r>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Jt(r,t,e){return Math.max(t,Math.min(e,r))}function Hl(r,t){return(r%t+t)%t}function vf(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function yf(r,t,e){return r!==t?(e-r)/(t-r):0}function sr(r,t,e){return(1-e)*r+e*t}function Mf(r,t,e,n){return sr(r,t,1-Math.exp(-e*n))}function Sf(r,t=1){return t-Math.abs(Hl(r,t*2)-t)}function bf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Ef(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Tf(r,t){return r+Math.floor(Math.random()*(t-r+1))}function wf(r,t){return r+Math.random()*(t-r)}function Af(r){return r*(.5-Math.random())}function Rf(r){r!==void 0&&(Cc=r);let t=Cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cf(r){return r*ir}function Pf(r){return r*Ss}function If(r){return(r&r-1)===0&&r!==0}function Lf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Nf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Df(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),d=s((t-n)/2),h=o((t-n)/2),f=s((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*d,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*d,a*c);break;case"ZXZ":r.set(l*d,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*u,a*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function le(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Fu={DEG2RAD:ir,RAD2DEG:Ss,generateUUID:cn,clamp:Jt,euclideanModulo:Hl,mapLinear:vf,inverseLerp:yf,lerp:sr,damp:Mf,pingpong:Sf,smoothstep:bf,smootherstep:Ef,randInt:Tf,randFloat:wf,randFloatSpread:Af,seededRandom:Rf,degToRad:Cf,radToDeg:Pf,isPowerOfTwo:If,ceilPowerOfTwo:Lf,floorPowerOfTwo:Nf,setQuaternionFromProperEuler:Df,normalize:le,denormalize:gn};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let $e=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(d!==_||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*_;m<0&&(h=-h,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){const x=Math.acos(m),v=Math.sin(x);g=Math.sin(g*x)/v,a=Math.sin(a*x)/v,l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+_*a}else{l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+_*a;const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+u*d+l*f-c*h,t[e+1]=l*p+u*h+c*d-a*f,t[e+2]=c*p+u*f+a*h-l*d,t[e+3]=u*p-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zo.copy(this).projectOnVector(t),this.sub(zo)}reflect(t){return this.sub(zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new H,Pc=new $e;class jt{constructor(t,e,n,i,s,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],x=i[1],v=i[4],M=i[7],A=i[2],R=i[5],P=i[8];return s[0]=o*_+a*x+l*A,s[3]=o*m+a*v+l*R,s[6]=o*g+a*M+l*P,s[1]=c*_+u*x+d*A,s[4]=c*m+u*v+d*R,s[7]=c*g+u*M+d*P,s[2]=h*_+f*x+p*A,s[5]=h*m+f*v+p*R,s[8]=h*g+f*M+p*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,p=e*d+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=d*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=h*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ko.makeScale(t,e)),this}rotate(t){return this.premultiply(ko.makeRotation(-t)),this}translate(t,e){return this.premultiply(ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new jt,Ic=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ff(){const r={enabled:!0,workingColorSpace:Ye,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ae&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(i.r=ps(i.r),i.g=ps(i.g),i.b=ps(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?Mo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ye]:{primaries:t,whitePoint:n,transfer:Mo,toXYZ:Ic,fromXYZ:Lc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Ic,fromXYZ:Lc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),r}const ie=Ff();function ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ps(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Wi;class Uf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Wi===void 0&&(Wi=mr("canvas")),Wi.width=t.width,Wi.height=t.height;const i=Wi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Of=0;class Gl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=cn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Vo(i[o].image)):s.push(Vo(i[o]))}else s=Vo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Vo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Uf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let Bf=0;const Ho=new H;class Ie extends zi{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=Rn,i=Rn,s=Pe,o=Zn,a=ln,l=en,c=Ie.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=cn(),this.name="",this.source=new Gl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ho).x}get height(){return this.source.getSize(Ho).y}get depth(){return this.source.getSize(Ho).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ys:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ys:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Eu;Ie.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,i=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(f+1)/2,A=(g+1)/2,R=(u+h)/4,P=(d+_)/4,y=(p+m)/4;return v>M&&v>A?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=R/n,s=P/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=R/i,s=y/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=P/s,i=y/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(d-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zf extends zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},s=new Ie(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Gl(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends zf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uu extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kf extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zt{constructor(t,e,n,i,s,o,a,l,c,u,d,h,f,p,_,m){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,d,h,f,p,_,m)}set(t,e,n,i,s,o,a,l,c,u,d,h,f,p,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Xi.setFromMatrixColumn(t,0).length(),s=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,f=o*d,p=a*u,_=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,p=c*u,_=c*d;e[0]=h+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-p,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,p=c*u,_=c*d;e[0]=h-_*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,p=a*u,_=a*d;e[0]=l*u,e[4]=p*c-f,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=_-h*d,e[8]=p*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+p,e[10]=h-_*d}else if(t.order==="XZY"){const h=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+_,e[5]=o*u,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vf,t,Hf)}lookAt(t,e,n){const i=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ai.crossVectors(n,Qe),ai.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ai.crossVectors(n,Qe)),ai.normalize(),wr.crossVectors(Qe,ai),i[0]=ai.x,i[4]=wr.x,i[8]=Qe.x,i[1]=ai.y,i[5]=wr.y,i[9]=Qe.y,i[2]=ai.z,i[6]=wr.z,i[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],x=n[3],v=n[7],M=n[11],A=n[15],R=i[0],P=i[4],y=i[8],w=i[12],V=i[1],L=i[5],B=i[9],F=i[13],k=i[2],U=i[6],D=i[10],z=i[14],X=i[3],$=i[7],ft=i[11],_t=i[15];return s[0]=o*R+a*V+l*k+c*X,s[4]=o*P+a*L+l*U+c*$,s[8]=o*y+a*B+l*D+c*ft,s[12]=o*w+a*F+l*z+c*_t,s[1]=u*R+d*V+h*k+f*X,s[5]=u*P+d*L+h*U+f*$,s[9]=u*y+d*B+h*D+f*ft,s[13]=u*w+d*F+h*z+f*_t,s[2]=p*R+_*V+m*k+g*X,s[6]=p*P+_*L+m*U+g*$,s[10]=p*y+_*B+m*D+g*ft,s[14]=p*w+_*F+m*z+g*_t,s[3]=x*R+v*V+M*k+A*X,s[7]=x*P+v*L+M*U+A*$,s[11]=x*y+v*B+M*D+A*ft,s[15]=x*w+v*F+M*z+A*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],p=t[3],_=t[7],m=t[11],g=t[15],x=l*f-c*h,v=a*f-c*d,M=a*h-l*d,A=o*f-c*u,R=o*h-l*u,P=o*d-a*u;return e*(_*x-m*v+g*M)-n*(p*x-m*A+g*R)+i*(p*v-_*A+g*P)-s*(p*M-_*R+m*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],p=t[12],_=t[13],m=t[14],g=t[15],x=e*a-n*o,v=e*l-i*o,M=e*c-s*o,A=n*l-i*a,R=n*c-s*a,P=i*c-s*l,y=u*_-d*p,w=u*m-h*p,V=u*g-f*p,L=d*m-h*_,B=d*g-f*_,F=h*g-f*m,k=x*F-v*B+M*L+A*V-R*w+P*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/k;return t[0]=(a*F-l*B+c*L)*U,t[1]=(i*B-n*F-s*L)*U,t[2]=(_*P-m*R+g*A)*U,t[3]=(h*R-d*P-f*A)*U,t[4]=(l*V-o*F-c*w)*U,t[5]=(e*F-i*V+s*w)*U,t[6]=(m*M-p*P-g*v)*U,t[7]=(u*P-h*M+f*v)*U,t[8]=(o*B-a*V+c*y)*U,t[9]=(n*V-e*B-s*y)*U,t[10]=(p*R-_*M+g*x)*U,t[11]=(d*M-u*R-f*x)*U,t[12]=(a*w-o*L-l*y)*U,t[13]=(e*L-n*w+i*y)*U,t[14]=(_*v-p*A-m*x)*U,t[15]=(u*A-d*v+h*x)*U,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,p=s*d,_=o*u,m=o*d,g=a*d,x=l*c,v=l*u,M=l*d,A=n.x,R=n.y,P=n.z;return i[0]=(1-(_+g))*A,i[1]=(f+M)*A,i[2]=(p-v)*A,i[3]=0,i[4]=(f-M)*R,i[5]=(1-(h+g))*R,i[6]=(m+x)*R,i[7]=0,i[8]=(p+v)*P,i[9]=(m-x)*P,i[10]=(1-(h+_))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Xi.set(i[0],i[1],i[2]).length();const a=Xi.set(i[4],i[5],i[6]).length(),l=Xi.set(i[8],i[9],i[10]).length();s<0&&(o=-o),un.copy(this);const c=1/o,u=1/a,d=1/l;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,e.setFromRotationMatrix(un),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=Cn,l=!1){const c=this.elements,u=2*s/(e-t),d=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===Cn)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===pr)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Cn,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-i),h=-(e+t)/(e-t),f=-(n+i)/(n-i);let p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===Cn)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===pr)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xi=new H,un=new Zt,Vf=new H(0,0,0),Hf=new H(1,1,1),ai=new H,wr=new H,Qe=new H,Nc=new Zt,Dc=new $e;class Ve{constructor(t=0,e=0,n=0,i=Ve.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ve.DEFAULT_ORDER="XYZ";class Wl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gf=0;const Fc=new H,qi=new $e,zn=new Zt,Ar=new H,Ds=new H,Wf=new H,Xf=new $e,Uc=new H(1,0,0),Oc=new H(0,1,0),Bc=new H(0,0,1),zc={type:"added"},qf={type:"removed"},Yi={type:"childadded",child:null},Go={type:"childremoved",child:null};class ge extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new H,e=new Ve,n=new $e,i=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new jt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(Uc,t)}rotateY(t){return this.rotateOnAxis(Oc,t)}rotateZ(t){return this.rotateOnAxis(Bc,t)}translateOnAxis(t,e){return Fc.copy(t).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uc,t)}translateY(t){return this.translateOnAxis(Oc,t)}translateZ(t){return this.translateOnAxis(Bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ar.copy(t):Ar.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ds,Ar,this.up):zn.lookAt(Ar,Ds,this.up),this.quaternion.setFromRotationMatrix(zn),i&&(zn.extractRotation(i.matrixWorld),qi.setFromRotationMatrix(zn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zc),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qf),Go.child=t,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zc),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,Wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new H(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $n extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yf={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function Xo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Hl(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Xo(o,s,t+1/3),this.g=Xo(o,s,t),this.b=Xo(o,s,t-1/3)}return ie.colorSpaceToWorking(this,i),this}setStyle(t,e=Re){function n(s){s!==void 0&&parseFloat(s)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const n=Ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return ie.workingToColorSpace(ke.copy(this),t),Math.round(Jt(ke.r*255,0,255))*65536+Math.round(Jt(ke.g*255,0,255))*256+Math.round(Jt(ke.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(ke.copy(this),e);const n=ke.r,i=ke.g,s=ke.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Re){ie.workingToColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,i=ke.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Rr);const n=sr(li.h,Rr.h,e),i=sr(li.s,Rr.s,e),s=sr(li.l,Rr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Yt;Yt.NAMES=Ou;class Xl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new Xl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jf extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ve,this.environmentIntensity=1,this.environmentRotation=new Ve,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const dn=new H,kn=new H,qo=new H,Vn=new H,ji=new H,Ki=new H,kc=new H,Yo=new H,jo=new H,Ko=new H,Zo=new me,$o=new me,Jo=new me;class on{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){dn.subVectors(i,e),kn.subVectors(n,e),qo.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(kn),l=dn.dot(qo),c=kn.dot(kn),u=kn.dot(qo),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return s.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Zo.setScalar(0),$o.setScalar(0),Jo.setScalar(0),Zo.fromBufferAttribute(t,e),$o.fromBufferAttribute(t,n),Jo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Zo,s.x),o.addScaledVector($o,s.y),o.addScaledVector(Jo,s.z),o}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),kn.subVectors(t,e),dn.cross(kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),dn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return on.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ji.subVectors(i,n),Ki.subVectors(s,n),Yo.subVectors(t,n);const l=ji.dot(Yo),c=Ki.dot(Yo);if(l<=0&&c<=0)return e.copy(n);jo.subVectors(t,i);const u=ji.dot(jo),d=Ki.dot(jo);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ji,o);Ko.subVectors(t,s);const f=ji.dot(Ko),p=Ki.dot(Ko);if(p>=0&&f<=p)return e.copy(s);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ki,a);const m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return kc.subVectors(s,i),a=(d-u)/(d-u+(f-p)),e.copy(i).addScaledVector(kc,a);const g=1/(m+_+h);return o=_*g,a=h*g,e.copy(n).addScaledVector(ji,o).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class si{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fs),Pr.subVectors(this.max,Fs),Zi.subVectors(t.a,Fs),$i.subVectors(t.b,Fs),Ji.subVectors(t.c,Fs),ci.subVectors($i,Zi),hi.subVectors(Ji,$i),bi.subVectors(Zi,Ji);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-bi.z,bi.y,ci.z,0,-ci.x,hi.z,0,-hi.x,bi.z,0,-bi.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-bi.y,bi.x,0];return!Qo(e,Zi,$i,Ji,Pr)||(e=[1,0,0,0,1,0,0,0,1],!Qo(e,Zi,$i,Ji,Pr))?!1:(Ir.crossVectors(ci,hi),e=[Ir.x,Ir.y,Ir.z],Qo(e,Zi,$i,Ji,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Hn=[new H,new H,new H,new H,new H,new H,new H,new H],fn=new H,Cr=new si,Zi=new H,$i=new H,Ji=new H,ci=new H,hi=new H,bi=new H,Fs=new H,Pr=new H,Ir=new H,Ei=new H;function Qo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ei.fromArray(r,s);const a=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const be=new H,Lr=new dt;let Kf=0;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ml,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ml&&(t.usage=this.usage),t}}class Bu extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zu extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Le extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Zf=new si,Us=new H,ta=new H;class Dn{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);const e=Us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Us,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(ta)),this.expandByPoint(Us.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let $f=0;const sn=new Zt,ea=new ge,Qi=new H,tn=new si,Os=new si,Ue=new H;class He extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pf(t)?zu:Bu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return ea.lookAt(t),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(tn.min,Os.min),tn.expandByPoint(Ue),Ue.addVectors(tn.max,Os.max),tn.expandByPoint(Ue)):(tn.expandByPoint(Os.min),tn.expandByPoint(Os.max))}tn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ue.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ue.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(t,c),Ue.add(Qi)),i=Math.max(i,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new H,l[y]=new H;const c=new H,u=new H,d=new H,h=new dt,f=new dt,p=new dt,_=new H,m=new H;function g(y,w,V){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,V),h.fromBufferAttribute(s,y),f.fromBufferAttribute(s,w),p.fromBufferAttribute(s,V),u.sub(c),d.sub(c),f.sub(h),p.sub(h);const L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(L),a[y].add(_),a[w].add(_),a[V].add(_),l[y].add(m),l[w].add(m),l[V].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,w=x.length;y<w;++y){const V=x[y],L=V.start,B=V.count;for(let F=L,k=L+B;F<k;F+=3)g(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const v=new H,M=new H,A=new H,R=new H;function P(y){A.fromBufferAttribute(i,y),R.copy(A);const w=a[y];v.copy(w),v.sub(A.multiplyScalar(A.dot(w))).normalize(),M.crossVectors(R,w);const L=M.dot(l[y])<0?-1:1;o.setXYZW(y,v.x,v.y,v.z,L)}for(let y=0,w=x.length;y<w;++y){const V=x[y],L=V.start,B=V.count;for(let F=L,k=L+B;F<k;F+=3)P(t.getX(F+0)),P(t.getX(F+1)),P(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,d=new H;if(t)for(let h=0,f=t.count;h<f;h+=3){const p=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new qe(h,u,d)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ku{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ml,this.updateRanges=[],this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new H;class gr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){So("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new gr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){So("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Jf=0,xn=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=cn(),this.name="",this.type="Material",this.blending=fs,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Da,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Da&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Vu extends xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ts;const Bs=new H,es=new H,ns=new H,is=new dt,zs=new dt,Hu=new Zt,Nr=new H,ks=new H,Dr=new H,Vc=new dt,na=new dt,Hc=new dt;class ss extends ge{constructor(t=new Vu){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new He;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ku(e,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new gr(n,3,0,!1)),ts.setAttribute("uv",new gr(n,2,3,!1))}this.geometry=ts,this.material=t,this.center=new dt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),Hu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ns.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Fr(Nr.set(-.5,-.5,0),ns,o,es,i,s),Fr(ks.set(.5,-.5,0),ns,o,es,i,s),Fr(Dr.set(.5,.5,0),ns,o,es,i,s),Vc.set(0,0),na.set(1,0),Hc.set(1,1);let a=t.ray.intersectTriangle(Nr,ks,Dr,!1,Bs);if(a===null&&(Fr(ks.set(-.5,.5,0),ns,o,es,i,s),na.set(0,1),a=t.ray.intersectTriangle(Nr,Dr,ks,!1,Bs),a===null))return;const l=t.ray.origin.distanceTo(Bs);l<t.near||l>t.far||e.push({distance:l,point:Bs.clone(),uv:on.getInterpolation(Bs,Nr,ks,Dr,Vc,na,Hc,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fr(r,t,e,n,i,s){is.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(zs.x=s*is.x-i*is.y,zs.y=i*is.x+s*is.y):zs.copy(is),r.copy(t),r.x+=zs.x,r.y+=zs.y,r.applyMatrix4(Hu)}const Gn=new H,ia=new H,Ur=new H,ui=new H,sa=new H,Or=new H,ra=new H;let Cs=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ia.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(ia);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ur),a=ui.dot(this.direction),l=-ui.dot(Ur),c=ui.lengthSq(),u=Math.abs(1-o*o);let d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=s*u,d>=0)if(h>=-p)if(h<=p){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ia).addScaledVector(Ur,h),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,i,s){sa.subVectors(e,t),Or.subVectors(n,t),ra.crossVectors(sa,Or);let o=this.direction.dot(ra),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,t);const l=a*this.direction.dot(Or.crossVectors(ui,Or));if(l<0)return null;const c=a*this.direction.dot(sa.cross(ui));if(c<0||l+c>o)return null;const u=-a*ui.dot(ra);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class xi extends xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Gc=new Zt,Ti=new Cs,Br=new Dn,Wc=new H,zr=new H,kr=new H,Vr=new H,oa=new H,Hr=new H,Xc=new H,Gr=new H;class Te extends ge{constructor(t=new He,e=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Hr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(oa.fromBufferAttribute(d,t),o?Hr.addScaledVector(oa,u):Hr.addScaledVector(oa.sub(e),u))}e.add(Hr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),Ti.copy(t.ray).recast(t.near),!(Br.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Br,Wc)===null||Ti.origin.distanceToSquared(Wc)>(t.far-t.near)**2))&&(Gc.copy(s).invert(),Ti.copy(t.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,A=v;M<A;M+=3){const R=a.getX(M),P=a.getX(M+1),y=a.getX(M+2);i=Wr(this,g,t,n,c,u,d,R,P,y),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const x=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);i=Wr(this,o,t,n,c,u,d,x,v,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,A=v;M<A;M+=3){const R=M,P=M+1,y=M+2;i=Wr(this,g,t,n,c,u,d,R,P,y),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const x=m,v=m+1,M=m+2;i=Wr(this,o,t,n,c,u,d,x,v,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Qf(r,t,e,n,i,s,o,a){let l;if(t.side===Ze?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===ei,a),l===null)return null;Gr.copy(a),Gr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Gr);return c<e.near||c>e.far?null:{distance:c,point:Gr.clone(),object:r}}function Wr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,zr),r.getVertexPosition(l,kr),r.getVertexPosition(c,Vr);const u=Qf(r,t,e,n,zr,kr,Vr,Xc);if(u){const d=new H;on.getBarycoord(Xc,zr,kr,Vr,d),i&&(u.uv=on.getInterpolatedAttribute(i,a,l,c,d,new dt)),s&&(u.uv1=on.getInterpolatedAttribute(s,a,l,c,d,new dt)),o&&(u.normal=on.getInterpolatedAttribute(o,a,l,c,d,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};on.getNormal(zr,kr,Vr,h.normal),u.face=h,u.barycoord=d}return u}const qc=new H,Yc=new me,jc=new me,tp=new H,Kc=new Zt,Xr=new H,aa=new Dn,Zc=new Zt,la=new Cs;class ep extends Te{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mc,this.bindMatrix=new Zt,this.bindMatrixInverse=new Zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new si),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Xr),this.boundingBox.expandByPoint(Xr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Xr),this.boundingSphere.expandByPoint(Xr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(i),t.ray.intersectsSphere(aa)!==!1&&(Zc.copy(i).invert(),la.copy(t.ray).applyMatrix4(Zc),!(this.boundingBox!==null&&la.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,la)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new me,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Mc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ht("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Yc.fromBufferAttribute(i.attributes.skinIndex,t),jc.fromBufferAttribute(i.attributes.skinWeight,t),qc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=jc.getComponent(s);if(o!==0){const a=Yc.getComponent(s);Kc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(tp.copy(qc).applyMatrix4(Kc),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Gu extends ge{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ql extends Ie{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Ce,u=Ce,d,h){super(null,o,a,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=new Zt,np=new Zt;class Yl{constructor(t=[],e=[]){this.uuid=cn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Ht("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Zt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:np;$c.multiplyMatrices(a,e[s]),$c.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Yl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ql(e,t,t,ln,an);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(Ht("Skeleton: No bone found with UUID:",s),o=new Gu),this.bones.push(o),this.boneInverses.push(new Zt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Sl extends qe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const rs=new Zt,Jc=new Zt,qr=[],Qc=new si,ip=new Zt,Vs=new Te,Hs=new Dn;class sp extends Te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sl(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ip)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),Qc.copy(t.boundingBox).applyMatrix4(rs),this.boundingBox.union(Qc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),Hs.copy(t.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),t.ray.intersectsSphere(Hs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,rs),Jc.multiplyMatrices(n,rs),Vs.matrixWorld=Jc,Vs.raycast(t,qr);for(let o=0,a=qr.length;o<a;o++){const l=qr[o];l.instanceId=s,l.object=this,e.push(l)}qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ql(new Float32Array(i*this.count),i,this.count,Ul,an));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ca=new H,rp=new H,op=new jt;let mi=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ca.subVectors(n,e).cross(rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ca),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||op.getNormalMatrix(t),i=this.coplanarPoint(ca).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const wi=new Dn,ap=new dt(.5,.5),Yr=new H;class jl{constructor(t=new mi,e=new mi,n=new mi,i=new mi,s=new mi,o=new mi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn,n=!1){const i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],p=s[8],_=s[9],m=s[10],g=s[11],x=s[12],v=s[13],M=s[14],A=s[15];if(i[0].setComponents(c-o,f-u,g-p,A-x).normalize(),i[1].setComponents(c+o,f+u,g+p,A+x).normalize(),i[2].setComponents(c+a,f+d,g+_,A+v).normalize(),i[3].setComponents(c-a,f-d,g-_,A-v).normalize(),n)i[4].setComponents(l,h,m,M).normalize(),i[5].setComponents(c-l,f-h,g-m,A-M).normalize();else if(i[4].setComponents(c-l,f-h,g-m,A-M).normalize(),e===Cn)i[5].setComponents(c+l,f+h,g+m,A+M).normalize();else if(e===pr)i[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){wi.center.set(0,0,0);const e=ap.distanceTo(t.center);return wi.radius=.7071067811865476+e,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Yr.x=i.normal.x>0?t.max.x:t.min.x,Yr.y=i.normal.y>0?t.max.y:t.min.y,Yr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wu extends xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Eo=new H,To=new H,th=new Zt,Gs=new Cs,jr=new Dn,ha=new H,eh=new H;class Kl extends ge{constructor(t=new He,e=new Wu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Eo.fromBufferAttribute(e,i-1),To.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Eo.distanceTo(To);t.setAttribute("lineDistance",new Le(n,1))}else Ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),jr.radius+=s,t.ray.intersectsSphere(jr)===!1)return;th.copy(i).invert(),Gs.copy(t.ray).applyMatrix4(th);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){const g=u.getX(_),x=u.getX(_+1),v=Kr(this,t,Gs,l,g,x,_);v&&e.push(v)}if(this.isLineLoop){const _=u.getX(p-1),m=u.getX(f),g=Kr(this,t,Gs,l,_,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){const g=Kr(this,t,Gs,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){const _=Kr(this,t,Gs,l,p-1,f,p-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kr(r,t,e,n,i,s,o){const a=r.geometry.attributes.position;if(Eo.fromBufferAttribute(a,i),To.fromBufferAttribute(a,s),e.distanceSqToSegment(Eo,To,ha,eh)>n)return;ha.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ha);if(!(c<t.near||c>t.far))return{distance:c,point:eh.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const nh=new H,ih=new H;class lp extends Kl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)nh.fromBufferAttribute(e,i),ih.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nh.distanceTo(ih);t.setAttribute("lineDistance",new Le(n,1))}else Ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cp extends Kl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Xu extends xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sh=new Zt,bl=new Cs,Zr=new Dn,$r=new H;class hp extends ge{constructor(t=new He,e=new Xu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=s,t.ray.intersectsSphere(Zr)===!1)return;sh.copy(i).invert(),bl.copy(t.ray).applyMatrix4(sh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=h,_=f;p<_;p++){const m=c.getX(p);$r.fromBufferAttribute(d,m),rh($r,m,l,i,t,e,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=h,_=f;p<_;p++)$r.fromBufferAttribute(d,p),rh($r,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rh(r,t,e,n,i,s,o){const a=bl.distanceSqToPoint(r);if(a<e){const l=new H;bl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class qu extends Ie{constructor(t=[],e=Oi,n,i,s,o,a,l,c,u){super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class up extends Ie{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _r extends Ie{constructor(t,e,n=Ln,i,s,o,a=Ce,l=Ce,c,u=ii,d=1){if(u!==ii&&u!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class dp extends _r{constructor(t,e=Ln,n=Oi,i,s,o=Ce,a=Ce,l,c=ii){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Yu extends Ie{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Mr extends He{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(d,2));function p(_,m,g,x,v,M,A,R,P,y,w){const V=M/P,L=A/y,B=M/2,F=A/2,k=R/2,U=P+1,D=y+1;let z=0,X=0;const $=new H;for(let ft=0;ft<D;ft++){const _t=ft*L-F;for(let lt=0;lt<U;lt++){const Ct=lt*V-B;$[_]=Ct*x,$[m]=_t*v,$[g]=k,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[g]=R>0?1:-1,u.push($.x,$.y,$.z),d.push(lt/P),d.push(1-ft/y),z+=1}}for(let ft=0;ft<y;ft++)for(let _t=0;_t<P;_t++){const lt=h+_t+U*ft,Ct=h+_t+U*(ft+1),Z=h+(_t+1)+U*(ft+1),G=h+(_t+1)+U*ft;l.push(lt,Ct,G),l.push(Ct,Z,G),X+=6}a.addGroup(f,X,w),f+=X,h+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Zl extends He{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],f=[];let p=0;const _=[],m=n/2;let g=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(f,2));function x(){const M=new H,A=new H;let R=0;const P=(e-t)/n;for(let y=0;y<=s;y++){const w=[],V=y/s,L=V*(e-t)+t;for(let B=0;B<=i;B++){const F=B/i,k=F*l+a,U=Math.sin(k),D=Math.cos(k);A.x=L*U,A.y=-V*n+m,A.z=L*D,d.push(A.x,A.y,A.z),M.set(U,P,D).normalize(),h.push(M.x,M.y,M.z),f.push(F,1-V),w.push(p++)}_.push(w)}for(let y=0;y<i;y++)for(let w=0;w<s;w++){const V=_[w][y],L=_[w+1][y],B=_[w+1][y+1],F=_[w][y+1];(t>0||w!==0)&&(u.push(V,L,F),R+=3),(e>0||w!==s-1)&&(u.push(L,B,F),R+=3)}c.addGroup(g,R,0),g+=R}function v(M){const A=p,R=new dt,P=new H;let y=0;const w=M===!0?t:e,V=M===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,m*V,0),h.push(0,V,0),f.push(.5,.5),p++;const L=p;for(let B=0;B<=i;B++){const k=B/i*l+a,U=Math.cos(k),D=Math.sin(k);P.x=w*D,P.y=m*V,P.z=w*U,d.push(P.x,P.y,P.z),h.push(0,V,0),R.x=U*.5+.5,R.y=D*.5*V+.5,f.push(R.x,R.y),p++}for(let B=0;B<i;B++){const F=A+B,k=L+B;M===!0?u.push(k,k+1,F):u.push(k+1,k,F),y+=3}c.addGroup(g,y,M===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new dt:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new H,i=[],s=[],o=[],a=new H,l=new Zt;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new H)}s[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Jt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Jt(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $l extends Fn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new dt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class fp extends $l{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Jl(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,i(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Jr=new H,ua=new Jl,da=new Jl,fa=new Jl;class pp extends Fn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new H){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Jr.subVectors(i[0],i[1]).add(i[0]),c=Jr);const d=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Jr.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),ua.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,_,m),da.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,_,m),fa.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(ua.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),da.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),fa.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(ua.calc(l),da.calc(l),fa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new H().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function oh(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function mp(r,t){const e=1-r;return e*e*t}function gp(r,t){return 2*(1-r)*r*t}function _p(r,t){return r*r*t}function rr(r,t,e,n){return mp(r,t)+gp(r,e)+_p(r,n)}function xp(r,t){const e=1-r;return e*e*e*t}function vp(r,t){const e=1-r;return 3*e*e*r*t}function yp(r,t){return 3*(1-r)*r*r*t}function Mp(r,t){return r*r*r*t}function or(r,t,e,n,i){return xp(r,t)+vp(r,e)+yp(r,n)+Mp(r,i)}class ju extends Fn{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(or(t,i.x,s.x,o.x,a.x),or(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sp extends Fn{constructor(t=new H,e=new H,n=new H,i=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new H){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(or(t,i.x,s.x,o.x,a.x),or(t,i.y,s.y,o.y,a.y),or(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ku extends Fn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bp extends Fn{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zu extends Fn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(rr(t,i.x,s.x,o.x),rr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ep extends Fn{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(rr(t,i.x,s.x,o.x),rr(t,i.y,s.y,o.y),rr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $u extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(oh(a,l.x,c.x,u.x,d.x),oh(a,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new dt().fromArray(i))}return this}}var El=Object.freeze({__proto__:null,ArcCurve:fp,CatmullRomCurve3:pp,CubicBezierCurve:ju,CubicBezierCurve3:Sp,EllipseCurve:$l,LineCurve:Ku,LineCurve3:bp,QuadraticBezierCurve:Zu,QuadraticBezierCurve3:Ep,SplineCurve:$u});class Tp extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new El[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new El[i.type]().fromJSON(i))}return this}}class ms extends Tp{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ku(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Zu(this.currentPoint.clone(),new dt(t,e),new dt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new ju(this.currentPoint.clone(),new dt(t,e),new dt(n,i),new dt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new $u(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new $l(t,e,n,i,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}let ar=class extends ms{constructor(t){super(t),this.uuid=cn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ms().fromJSON(i))}return this}};function wp(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Ju(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Ip(r,t,s,e)),r.length>80*e){a=r[0],l=r[1];let u=a,d=l;for(let h=e;h<i;h+=e){const f=r[h],p=r[h+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return xr(s,o,e,a,l,c,0),o}function Ju(r,t,e,n,i){let s;if(i===Hp(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=ah(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=ah(o/n|0,r[o],r[o+1],s);return s&&bs(s,s.next)&&(yr(s),s=s.next),s}function Bi(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(bs(e,e.next)||xe(e.prev,e,e.next)===0)){if(yr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xr(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Up(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Rp(r,n,i,s):Ap(r)){t.push(l.i,r.i,c.i),yr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Cp(Bi(r),t),xr(r,t,e,n,i,s,2)):o===2&&Pp(r,t,e,n,i,s):xr(Bi(r),t,e,n,i,s,1);break}}}function Ap(r){const t=r.prev,e=r,n=r.next;if(xe(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(i,s,o),d=Math.min(a,l,c),h=Math.max(i,s,o),f=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&tr(i,a,s,l,o,c,p.x,p.y)&&xe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Rp(r,t,e,n){const i=r.prev,s=r,o=r.next;if(xe(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,d=s.y,h=o.y,f=Math.min(a,l,c),p=Math.min(u,d,h),_=Math.max(a,l,c),m=Math.max(u,d,h),g=Tl(f,p,t,e,n),x=Tl(_,m,t,e,n);let v=r.prevZ,M=r.nextZ;for(;v&&v.z>=g&&M&&M.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&tr(a,u,l,d,c,h,v.x,v.y)&&xe(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&tr(a,u,l,d,c,h,M.x,M.y)&&xe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&tr(a,u,l,d,c,h,v.x,v.y)&&xe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=x;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&tr(a,u,l,d,c,h,M.x,M.y)&&xe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Cp(r,t){let e=r;do{const n=e.prev,i=e.next.next;!bs(n,i)&&td(n,e,e.next,i)&&vr(n,i)&&vr(i,n)&&(t.push(n.i,e.i,i.i),yr(e),yr(e.next),e=r=i),e=e.next}while(e!==r);return Bi(e)}function Pp(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zp(o,a)){let l=ed(o,a);o=Bi(o,o.next),l=Bi(l,l.next),xr(o,t,e,n,i,s,0),xr(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Ip(r,t,e,n){const i=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Ju(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Bp(c))}i.sort(Lp);for(let s=0;s<i.length;s++)e=Np(i[s],e);return e}function Lp(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Np(r,t){const e=Dp(r,t);if(!e)return t;const n=ed(e,r);return Bi(n,n.next),Bi(e,e.next)}function Dp(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,o;if(bs(r,e))return e;do{if(bs(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s&&(s=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Qu(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);vr(e,r)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&Fp(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function Fp(r,t){return xe(r.prev,r,t.prev)<0&&xe(t.next,r,r.next)<0}function Up(r,t,e,n){let i=r;do i.z===0&&(i.z=Tl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Op(i)}function Op(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function Tl(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Bp(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Qu(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function tr(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&Qu(r,t,e,n,i,s,o,a)}function zp(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!kp(r,t)&&(vr(r,t)&&vr(t,r)&&Vp(r,t)&&(xe(r.prev,r,t.prev)||xe(r,t.prev,t))||bs(r,t)&&xe(r.prev,r,r.next)>0&&xe(t.prev,t,t.next)>0)}function xe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function bs(r,t){return r.x===t.x&&r.y===t.y}function td(r,t,e,n){const i=to(xe(r,t,e)),s=to(xe(r,t,n)),o=to(xe(e,n,r)),a=to(xe(e,n,t));return!!(i!==s&&o!==a||i===0&&Qr(r,e,t)||s===0&&Qr(r,n,t)||o===0&&Qr(e,r,n)||a===0&&Qr(e,t,n))}function Qr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function to(r){return r>0?1:r<0?-1:0}function kp(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&td(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function vr(r,t){return xe(r.prev,r,r.next)<0?xe(r,t,r.next)>=0&&xe(r,r.prev,t)>=0:xe(r,t,r.prev)<0||xe(r,r.next,t)<0}function Vp(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function ed(r,t){const e=wl(r.i,r.x,r.y),n=wl(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ah(r,t,e,n){const i=wl(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function yr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function wl(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hp(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Gp{static triangulate(t,e,n=2){return wp(t,e,n)}}class vi{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return vi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];lh(t),ch(n,t);let o=t.length;e.forEach(lh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,ch(n,e[l]);const a=Gp.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function lh(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function ch(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class wo extends He{constructor(t=new ar([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Le(i,3)),this.setAttribute("uv",new Le(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Wp;let v,M=!1,A,R,P,y;if(g){v=g.getSpacedPoints(u),M=!0,h=!1;const q=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(u,q),R=new H,P=new H,y=new H}h||(m=0,f=0,p=0,_=0);const w=a.extractPoints(c);let V=w.shape;const L=w.holes;if(!vi.isClockWise(V)){V=V.reverse();for(let q=0,Q=L.length;q<Q;q++){const tt=L[q];vi.isClockWise(tt)&&(L[q]=tt.reverse())}}function F(q){const tt=10000000000000001e-36;let at=q[0];for(let b=1;b<=q.length;b++){const O=b%q.length,ht=q[O],bt=ht.x-at.x,vt=ht.y-at.y,N=bt*bt+vt*vt,S=Math.max(Math.abs(ht.x),Math.abs(ht.y),Math.abs(at.x),Math.abs(at.y)),Y=tt*S*S;if(N<=Y){q.splice(O,1),b--;continue}at=ht}}F(V),L.forEach(F);const k=L.length,U=V;for(let q=0;q<k;q++){const Q=L[q];V=V.concat(Q)}function D(q,Q,tt){return Q||qt("ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(Q,tt)}const z=V.length;function X(q,Q,tt){let at,b,O;const ht=q.x-Q.x,bt=q.y-Q.y,vt=tt.x-q.x,N=tt.y-q.y,S=ht*ht+bt*bt,Y=ht*N-bt*vt;if(Math.abs(Y)>Number.EPSILON){const rt=Math.sqrt(S),mt=Math.sqrt(vt*vt+N*N),ct=Q.x-bt/rt,Pt=Q.y+ht/rt,Mt=tt.x-N/mt,kt=tt.y+vt/mt,Xt=((Mt-ct)*N-(kt-Pt)*vt)/(ht*N-bt*vt);at=ct+ht*Xt-q.x,b=Pt+bt*Xt-q.y;const xt=at*at+b*b;if(xt<=2)return new dt(at,b);O=Math.sqrt(xt/2)}else{let rt=!1;ht>Number.EPSILON?vt>Number.EPSILON&&(rt=!0):ht<-Number.EPSILON?vt<-Number.EPSILON&&(rt=!0):Math.sign(bt)===Math.sign(N)&&(rt=!0),rt?(at=-bt,b=ht,O=Math.sqrt(S)):(at=ht,b=bt,O=Math.sqrt(S/2))}return new dt(at/O,b/O)}const $=[];for(let q=0,Q=U.length,tt=Q-1,at=q+1;q<Q;q++,tt++,at++)tt===Q&&(tt=0),at===Q&&(at=0),$[q]=X(U[q],U[tt],U[at]);const ft=[];let _t,lt=$.concat();for(let q=0,Q=k;q<Q;q++){const tt=L[q];_t=[];for(let at=0,b=tt.length,O=b-1,ht=at+1;at<b;at++,O++,ht++)O===b&&(O=0),ht===b&&(ht=0),_t[at]=X(tt[at],tt[O],tt[ht]);ft.push(_t),lt=lt.concat(_t)}let Ct;if(m===0)Ct=vi.triangulateShape(U,L);else{const q=[],Q=[];for(let tt=0;tt<m;tt++){const at=tt/m,b=f*Math.cos(at*Math.PI/2),O=p*Math.sin(at*Math.PI/2)+_;for(let ht=0,bt=U.length;ht<bt;ht++){const vt=D(U[ht],$[ht],O);it(vt.x,vt.y,-b),at===0&&q.push(vt)}for(let ht=0,bt=k;ht<bt;ht++){const vt=L[ht];_t=ft[ht];const N=[];for(let S=0,Y=vt.length;S<Y;S++){const rt=D(vt[S],_t[S],O);it(rt.x,rt.y,-b),at===0&&N.push(rt)}at===0&&Q.push(N)}}Ct=vi.triangulateShape(q,Q)}const Z=Ct.length,G=p+_;for(let q=0;q<z;q++){const Q=h?D(V[q],lt[q],G):V[q];M?(P.copy(A.normals[0]).multiplyScalar(Q.x),R.copy(A.binormals[0]).multiplyScalar(Q.y),y.copy(v[0]).add(P).add(R),it(y.x,y.y,y.z)):it(Q.x,Q.y,0)}for(let q=1;q<=u;q++)for(let Q=0;Q<z;Q++){const tt=h?D(V[Q],lt[Q],G):V[Q];M?(P.copy(A.normals[q]).multiplyScalar(tt.x),R.copy(A.binormals[q]).multiplyScalar(tt.y),y.copy(v[q]).add(P).add(R),it(y.x,y.y,y.z)):it(tt.x,tt.y,d/u*q)}for(let q=m-1;q>=0;q--){const Q=q/m,tt=f*Math.cos(Q*Math.PI/2),at=p*Math.sin(Q*Math.PI/2)+_;for(let b=0,O=U.length;b<O;b++){const ht=D(U[b],$[b],at);it(ht.x,ht.y,d+tt)}for(let b=0,O=L.length;b<O;b++){const ht=L[b];_t=ft[b];for(let bt=0,vt=ht.length;bt<vt;bt++){const N=D(ht[bt],_t[bt],at);M?it(N.x,N.y+v[u-1].y,v[u-1].x+tt):it(N.x,N.y,d+tt)}}}T(),E();function T(){const q=i.length/3;if(h){let Q=0,tt=z*Q;for(let at=0;at<Z;at++){const b=Ct[at];K(b[2]+tt,b[1]+tt,b[0]+tt)}Q=u+m*2,tt=z*Q;for(let at=0;at<Z;at++){const b=Ct[at];K(b[0]+tt,b[1]+tt,b[2]+tt)}}else{for(let Q=0;Q<Z;Q++){const tt=Ct[Q];K(tt[2],tt[1],tt[0])}for(let Q=0;Q<Z;Q++){const tt=Ct[Q];K(tt[0]+z*u,tt[1]+z*u,tt[2]+z*u)}}n.addGroup(q,i.length/3-q,0)}function E(){const q=i.length/3;let Q=0;W(U,Q),Q+=U.length;for(let tt=0,at=L.length;tt<at;tt++){const b=L[tt];W(b,Q),Q+=b.length}n.addGroup(q,i.length/3-q,1)}function W(q,Q){let tt=q.length;for(;--tt>=0;){const at=tt;let b=tt-1;b<0&&(b=q.length-1);for(let O=0,ht=u+m*2;O<ht;O++){const bt=z*O,vt=z*(O+1),N=Q+at+bt,S=Q+b+bt,Y=Q+b+vt,rt=Q+at+vt;ot(N,S,Y,rt)}}}function it(q,Q,tt){l.push(q),l.push(Q),l.push(tt)}function K(q,Q,tt){gt(q),gt(Q),gt(tt);const at=i.length/3,b=x.generateTopUV(n,i,at-3,at-2,at-1);pt(b[0]),pt(b[1]),pt(b[2])}function ot(q,Q,tt,at){gt(q),gt(Q),gt(at),gt(Q),gt(tt),gt(at);const b=i.length/3,O=x.generateSideWallUV(n,i,b-6,b-3,b-2,b-1);pt(O[0]),pt(O[1]),pt(O[3]),pt(O[1]),pt(O[2]),pt(O[3])}function gt(q){i.push(l[q*3+0]),i.push(l[q*3+1]),i.push(l[q*3+2])}function pt(q){s.push(q.x),s.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Xp(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new El[i.type]().fromJSON(i)),new wo(n,t.options)}}const Wp={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new dt(s,o),new dt(a,l),new dt(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[i*3],f=t[i*3+1],p=t[i*3+2],_=t[s*3],m=t[s*3+1],g=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new dt(o,1-l),new dt(c,1-d),new dt(h,1-p),new dt(_,1-g)]:[new dt(a,1-l),new dt(u,1-d),new dt(f,1-p),new dt(m,1-g)]}};function Xp(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Es extends He{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=t/a,h=e/l,f=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const x=g*h-o;for(let v=0;v<c;v++){const M=v*d-s;p.push(M,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const v=x+c*g,M=x+c*(g+1),A=x+1+c*(g+1),R=x+1+c*g;f.push(v,M,R),f.push(M,A,R)}this.setIndex(f),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.width,t.height,t.widthSegments,t.heightSegments)}}function Ts(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function We(r){const t={};for(let e=0;e<r.length;e++){const n=Ts(r[e]);for(const i in n)t[i]=n[i]}return t}function qp(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function nd(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Yp={clone:Ts,merge:We};var jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jp,this.fragmentShader=Kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=qp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zp extends Nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _i extends xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Un extends _i{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class $p extends xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jp extends xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function eo(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Qp(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function hh(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function id(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class Ps{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tm extends Ps{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bc,endingEnd:bc}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ec:s=t,a=2*e-n;break;case Tc:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:o=t,l=2*n-e;break;case Tc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,g=-h*m+2*h*_-h*p,x=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*p+1,v=(-1-f)*m+(1.5+f)*_+.5*p,M=f*m-f*_;for(let A=0;A!==a;++A)s[A]=g*o[u+A]+x*o[c+A]+v*o[l+A]+M*o[d+A];return s}}class em extends Ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}}class nm extends Ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class im extends Ps{interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.settings||this.DefaultSettings_,d=u.inTangents,h=u.outTangents;if(!d||!h){const _=(n-e)/(i-e),m=1-_;for(let g=0;g!==a;++g)s[g]=o[c+g]*m+o[l+g]*_;return s}const f=a*2,p=t-1;for(let _=0;_!==a;++_){const m=o[c+_],g=o[l+_],x=p*f+_*2,v=h[x],M=h[x+1],A=t*f+_*2,R=d[A],P=d[A+1];let y=(n-e)/(i-e),w,V,L,B,F;for(let k=0;k<8;k++){w=y*y,V=w*y,L=1-y,B=L*L,F=B*L;const D=F*e+3*B*y*v+3*L*w*R+V*i-n;if(Math.abs(D)<1e-10)break;const z=3*B*(v-e)+6*L*y*(R-v)+3*w*(i-R);if(Math.abs(z)<1e-10)break;y=y-D/z,y=Math.max(0,Math.min(1,y))}s[_]=F*m+3*B*y*M+3*L*w*P+V*g}return s}}class vn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=eo(e,this.TimeBufferType),this.values=eo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:eo(t.times,Array),values:eo(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new em(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new im(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case dr:e=this.InterpolantFactoryMethodDiscrete;break;case fr:e=this.InterpolantFactoryMethodLinear;break;case Bo:e=this.InterpolantFactoryMethodSmooth;break;case Sc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ht("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return Bo;case this.InterpolantFactoryMethodBezier:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&mf(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Bo,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{const d=a*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){const _=e[d+p];if(_!==e[h+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const d=a*n,h=o*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=fr;class Is extends vn{constructor(t,e,n){super(t,e,n)}}Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=dr;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;class sd extends vn{constructor(t,e,n,i){super(t,e,n,i)}}sd.prototype.ValueTypeName="color";class ws extends vn{constructor(t,e,n,i){super(t,e,n,i)}}ws.prototype.ValueTypeName="number";class sm extends Ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let u=c+a;c!==u;c+=4)$e.slerpFlat(s,0,o,c-a,o,c,l);return s}}class As extends vn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new sm(this.times,this.values,this.getValueSize(),t)}}As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends vn{constructor(t,e,n){super(t,e,n)}}Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=dr;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends vn{constructor(t,e,n,i){super(t,e,n,i)}}Rs.prototype.ValueTypeName="vector";class rm{constructor(t="",e=-1,n=[],i=sf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=cn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(am(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,o=n.length;s!==o;++s)e.push(vn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Qp(l);l=hh(l,1,u),c=hh(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ws(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(Ht("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return qt("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,p,_){if(f.length!==0){const m=[],g=[];id(f,m,g,p),m.length!==0&&_.push(new d(h,m,g))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let p;for(p=0;p<h.length;p++)if(h[p].morphTargets)for(let _=0;_<h[p].morphTargets.length;_++)f[h[p].morphTargets[_]]=-1;for(const _ in f){const m=[],g=[];for(let x=0;x!==h[p].morphTargets.length;++x){const v=h[p];m.push(v.time),g.push(v.morphTarget===_?1:0)}i.push(new ws(".morphTargetInfluence["+_+"]",m,g))}l=f.length*o}else{const f=".bones["+e[d].name+"]";n(Rs,f+".position",h,"pos",i),n(As,f+".quaternion",h,"rot",i),n(Rs,f+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function om(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ws;case"vector":case"vector2":case"vector3":case"vector4":return Rs;case"color":return sd;case"quaternion":return As;case"bool":case"boolean":return Is;case"string":return Ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function am(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=om(r.type);if(r.times===void 0){const e=[],n=[];id(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Jn={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(uh(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!uh(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function uh(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class lm{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cm=new lm;class ki{constructor(t){this.manager=t!==void 0?t:cm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ki.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class hm extends Error{constructor(t,e){super(t),this.response=e}}class Ql extends ki{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Jn.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Wn[t]!==void 0){Wn[t].push({onLoad:e,onProgress:n,onError:i});return}Wn[t]=[],Wn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ht("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wn[t],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,p=f!==0;let _=0;const m=new ReadableStream({start(g){x();function x(){d.read().then(({done:v,value:M})=>{if(v)g.close();else{_+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let R=0,P=u.length;R<P;R++){const y=u[R];y.onProgress&&y.onProgress(A)}g.enqueue(M),x()}},v=>{g.error(v)})}}});return new Response(m)}else throw new hm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Jn.add(`file:${t}`,c);const u=Wn[t];delete Wn[t];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Wn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Wn[t];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const os=new WeakMap;class um extends ki{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Jn.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let d=os.get(o);d===void 0&&(d=[],os.set(o,d)),d.push({onLoad:e,onError:i})}return o}const a=mr("img");function l(){u(),e&&e(this);const d=os.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}os.delete(this),s.manager.itemEnd(t)}function c(d){u(),i&&i(d),Jn.remove(`image:${t}`);const h=os.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}os.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Jn.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}}class dm extends ki{constructor(t){super(t)}load(t,e,n,i){const s=new Ie,o=new um(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Co extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const pa=new Zt,dh=new H,fh=new H;class tc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jl,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(dh),fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fh),e.updateMatrixWorld(),pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===pr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const no=new H,io=new $e,Mn=new H;class rd extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(no,io,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Mn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(no,io,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const di=new H,ph=new dt,mh=new dt;class Xe extends rd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,ph,mh),e.subVectors(mh,ph)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class fm extends tc{constructor(){super(new Xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Ss*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class pm extends Co{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new fm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class mm extends tc{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0}}class gm extends Co{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new mm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Sr extends rd{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class _m extends tc{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class od extends Co{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new _m}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class xm extends Co{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class lr{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const ma=new WeakMap;class vm extends ki{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ht("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ht("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Jn.get(`image-bitmap:${t}`);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(c=>{if(ma.has(o)===!0)i&&i(ma.get(o)),s.manager.itemError(t),s.manager.itemEnd(t);else return e&&e(c),s.manager.itemEnd(t),c});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Jn.add(`image-bitmap:${t}`,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),ma.set(l,c),Jn.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});Jn.add(`image-bitmap:${t}`,l),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const as=-90,ls=1;class ym extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xe(as,ls,t,e);i.layers=this.layers,this.add(i);const s=new Xe(as,ls,t,e);s.layers=this.layers,this.add(s);const o=new Xe(as,ls,t,e);o.layers=this.layers,this.add(o);const a=new Xe(as,ls,t,e);a.layers=this.layers,this.add(a);const l=new Xe(as,ls,t,e);l.layers=this.layers,this.add(l);const c=new Xe(as,ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Mm extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Sm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=bm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function bm(){this._document.hidden===!1&&this.reset()}const ec="\\[\\]\\.:\\/",Em=new RegExp("["+ec+"]","g"),nc="[^"+ec+"]",Tm="[^"+ec.replace("\\.","")+"]",wm=/((?:WC+[\/:])*)/.source.replace("WC",nc),Am=/(WCOD+)?/.source.replace("WCOD",Tm),Rm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nc),Cm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nc),Pm=new RegExp("^"+wm+Am+Rm+Cm+"$"),Im=["material","materials","bones","map"];class Lm{constructor(t,e,n){const i=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ce{constructor(t,e,n){this.path=e,this.parsedPath=n||ce.parseTrackName(e),this.node=ce.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ce.Composite(t,e,n):new ce(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Em,"")}static parseTrackName(t){const e=Pm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Im.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=ce.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ce.Composite=Lm;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const gh=new Zt;class Nm{constructor(t,e,n=0,i=1/0){this.ray=new Cs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Wl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gh),this}intersectObject(t,e=!0,n=[]){return Al(t,this,n,e),n.sort(_h),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Al(t[i],this,n,e);return n.sort(_h),n}}function _h(r,t){return r.distance-t.distance}function Al(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Al(s[o],t,e,!0)}}class xh{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const vh=new dt;class Dm{constructor(t=new dt(1/0,1/0),e=new dt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vh.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vh).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class Ai{constructor(){this.type="ShapePath",this.color=new Yt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new ms,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(g){const x=[];for(let v=0,M=g.length;v<M;v++){const A=g[v],R=new ar;R.curves=A.curves,x.push(R)}return x}function n(g,x){const v=x.length;let M=!1;for(let A=v-1,R=0;R<v;A=R++){let P=x[A],y=x[R],w=y.x-P.x,V=y.y-P.y;if(Math.abs(V)>Number.EPSILON){if(V<0&&(P=x[R],w=-w,y=x[A],V=-V),g.y<P.y||g.y>y.y)continue;if(g.y===P.y){if(g.x===P.x)return!0}else{const L=V*(g.x-P.x)-w*(g.y-P.y);if(L===0)return!0;if(L<0)continue;M=!M}}else{if(g.y!==P.y)continue;if(y.x<=g.x&&g.x<=P.x||P.x<=g.x&&g.x<=y.x)return!0}}return M}const i=vi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new ar,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=t?!u:u;const d=[],h=[];let f=[],p=0,_;h[p]=void 0,f[p]=[];for(let g=0,x=s.length;g<x;g++)a=s[g],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!u&&h[p]&&p++,h[p]={s:new ar,p:_},h[p].s.curves=a.curves,u&&p++,f[p]=[]):f[p].push({h:a,p:_[0]});if(!h[0])return e(s);if(h.length>1){let g=!1,x=0;for(let v=0,M=h.length;v<M;v++)d[v]=[];for(let v=0,M=h.length;v<M;v++){const A=f[v];for(let R=0;R<A.length;R++){const P=A[R];let y=!0;for(let w=0;w<h.length;w++)n(P.p,h[w].p)&&(v!==w&&x++,y?(y=!1,d[w].push(P)):g=!0);y&&d[v].push(P)}}x>0&&g===!1&&(f=d)}let m;for(let g=0,x=h.length;g<x;g++){l=h[g].s,c.push(l),m=f[g];for(let v=0,M=m.length;v<M;v++)l.holes.push(m[v].h)}return c}}class Fm extends zi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ht("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function yh(r,t,e,n){const i=Um(n);switch(e){case Pu:return r*t;case Ul:return r*t/i.components*i.byteLength;case Ol:return r*t/i.components*i.byteLength;case Ms:return r*t*2/i.components*i.byteLength;case Bl:return r*t*2/i.components*i.byteLength;case Iu:return r*t*3/i.components*i.byteLength;case ln:return r*t*4/i.components*i.byteLength;case zl:return r*t*4/i.components*i.byteLength;case mo:case go:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _o:case xo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ga:case Xa:return Math.max(r,16)*Math.max(t,8)/4;case Ha:case Wa:return Math.max(r,8)*Math.max(t,8)/2;case qa:case Ya:case Ka:case Za:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ja:case $a:case Ja:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case el:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case nl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case il:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case sl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case rl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ol:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case al:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ll:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ul:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case fl:case pl:case ml:return Math.ceil(r/4)*Math.ceil(t/4)*16;case gl:case _l:return Math.ceil(r/4)*Math.ceil(t/4)*8;case xl:case vl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Um(r){switch(r){case en:case wu:return{byteLength:1,components:1};case hr:case Au:case ni:return{byteLength:2,components:1};case Dl:case Fl:return{byteLength:2,components:4};case Ln:case Nl:case an:return{byteLength:4,components:1};case Ru:case Cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ad(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Om(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$m=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ag=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ug=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Og=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,S0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,U0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,X0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Bm,alphahash_pars_fragment:zm,alphamap_fragment:km,alphamap_pars_fragment:Vm,alphatest_fragment:Hm,alphatest_pars_fragment:Gm,aomap_fragment:Wm,aomap_pars_fragment:Xm,batching_pars_vertex:qm,batching_vertex:Ym,begin_vertex:jm,beginnormal_vertex:Km,bsdfs:Zm,iridescence_fragment:$m,bumpmap_pars_fragment:Jm,clipping_planes_fragment:Qm,clipping_planes_pars_fragment:tg,clipping_planes_pars_vertex:eg,clipping_planes_vertex:ng,color_fragment:ig,color_pars_fragment:sg,color_pars_vertex:rg,color_vertex:og,common:ag,cube_uv_reflection_fragment:lg,defaultnormal_vertex:cg,displacementmap_pars_vertex:hg,displacementmap_vertex:ug,emissivemap_fragment:dg,emissivemap_pars_fragment:fg,colorspace_fragment:pg,colorspace_pars_fragment:mg,envmap_fragment:gg,envmap_common_pars_fragment:_g,envmap_pars_fragment:xg,envmap_pars_vertex:vg,envmap_physical_pars_fragment:Pg,envmap_vertex:yg,fog_vertex:Mg,fog_pars_vertex:Sg,fog_fragment:bg,fog_pars_fragment:Eg,gradientmap_pars_fragment:Tg,lightmap_pars_fragment:wg,lights_lambert_fragment:Ag,lights_lambert_pars_fragment:Rg,lights_pars_begin:Cg,lights_toon_fragment:Ig,lights_toon_pars_fragment:Lg,lights_phong_fragment:Ng,lights_phong_pars_fragment:Dg,lights_physical_fragment:Fg,lights_physical_pars_fragment:Ug,lights_fragment_begin:Og,lights_fragment_maps:Bg,lights_fragment_end:zg,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Vg,logdepthbuf_pars_vertex:Hg,logdepthbuf_vertex:Gg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:qg,map_particle_pars_fragment:Yg,metalnessmap_fragment:jg,metalnessmap_pars_fragment:Kg,morphinstance_vertex:Zg,morphcolor_vertex:$g,morphnormal_vertex:Jg,morphtarget_pars_vertex:Qg,morphtarget_vertex:t0,normal_fragment_begin:e0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:s0,normal_vertex:r0,normalmap_pars_fragment:o0,clearcoat_normal_fragment_begin:a0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:c0,iridescence_pars_fragment:h0,opaque_fragment:u0,packing:d0,premultiplied_alpha_fragment:f0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:x0,shadowmap_pars_fragment:v0,shadowmap_pars_vertex:y0,shadowmap_vertex:M0,shadowmask_pars_fragment:S0,skinbase_vertex:b0,skinning_pars_vertex:E0,skinning_vertex:T0,skinnormal_vertex:w0,specularmap_fragment:A0,specularmap_pars_fragment:R0,tonemapping_fragment:C0,tonemapping_pars_fragment:P0,transmission_fragment:I0,transmission_pars_fragment:L0,uv_pars_fragment:N0,uv_pars_vertex:D0,uv_vertex:F0,worldpos_vertex:U0,background_vert:O0,background_frag:B0,backgroundCube_vert:z0,backgroundCube_frag:k0,cube_vert:V0,cube_frag:H0,depth_vert:G0,depth_frag:W0,distance_vert:X0,distance_frag:q0,equirect_vert:Y0,equirect_frag:j0,linedashed_vert:K0,linedashed_frag:Z0,meshbasic_vert:$0,meshbasic_frag:J0,meshlambert_vert:Q0,meshlambert_frag:t_,meshmatcap_vert:e_,meshmatcap_frag:n_,meshnormal_vert:i_,meshnormal_frag:s_,meshphong_vert:r_,meshphong_frag:o_,meshphysical_vert:a_,meshphysical_frag:l_,meshtoon_vert:c_,meshtoon_frag:h_,points_vert:u_,points_frag:d_,shadow_vert:f_,shadow_frag:p_,sprite_vert:m_,sprite_frag:g_},wt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},An={basic:{uniforms:We([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:We([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:We([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:We([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:We([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:We([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:We([wt.points,wt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:We([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:We([wt.common,wt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:We([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:We([wt.sprite,wt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:We([wt.common,wt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:We([wt.lights,wt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};An.physical={uniforms:We([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const so={r:0,b:0,g:0},Ri=new Ve,__=new Zt;function x_(r,t,e,n,i,s){const o=new Yt(0);let a=i===!0?0:1,l,c,u=null,d=0,h=null;function f(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){const M=x.backgroundBlurriness>0;v=t.get(v,M)}return v}function p(x){let v=!1;const M=f(x);M===null?m(o,a):M&&M.isColor&&(m(M,1),v=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(x,v){const M=f(v);M&&(M.isCubeTexture||M.mapping===Ro)?(c===void 0&&(c=new Te(new Mr(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ts(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Ri.copy(v.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(__.makeRotationFromEuler(Ri)),c.material.toneMapped=ie.getTransfer(M.colorSpace)!==ae,(u!==M||d!==M.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Te(new Es(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ts(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ie.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,v){x.getRGB(so,nd(r)),e.buffers.color.setClear(so.r,so.g,so.b,v,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:_,dispose:g}}function v_(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(L,B,F,k,U){let D=!1;const z=d(L,k,F,B);s!==z&&(s=z,c(s.object)),D=f(L,k,F,U),D&&p(L,k,F,U),U!==null&&t.update(U,r.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,M(L,B,F,k),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function u(L){return r.deleteVertexArray(L)}function d(L,B,F,k){const U=k.wireframe===!0;let D=n[B.id];D===void 0&&(D={},n[B.id]=D);const z=L.isInstancedMesh===!0?L.id:0;let X=D[z];X===void 0&&(X={},D[z]=X);let $=X[F.id];$===void 0&&($={},X[F.id]=$);let ft=$[U];return ft===void 0&&(ft=h(l()),$[U]=ft),ft}function h(L){const B=[],F=[],k=[];for(let U=0;U<e;U++)B[U]=0,F[U]=0,k[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:F,attributeDivisors:k,object:L,attributes:{},index:null}}function f(L,B,F,k){const U=s.attributes,D=B.attributes;let z=0;const X=F.getAttributes();for(const $ in X)if(X[$].location>=0){const _t=U[$];let lt=D[$];if(lt===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),_t===void 0||_t.attribute!==lt||lt&&_t.data!==lt.data)return!0;z++}return s.attributesNum!==z||s.index!==k}function p(L,B,F,k){const U={},D=B.attributes;let z=0;const X=F.getAttributes();for(const $ in X)if(X[$].location>=0){let _t=D[$];_t===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(_t=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(_t=L.instanceColor));const lt={};lt.attribute=_t,_t&&_t.data&&(lt.data=_t.data),U[$]=lt,z++}s.attributes=U,s.attributesNum=z,s.index=k}function _(){const L=s.newAttributes;for(let B=0,F=L.length;B<F;B++)L[B]=0}function m(L){g(L,0)}function g(L,B){const F=s.newAttributes,k=s.enabledAttributes,U=s.attributeDivisors;F[L]=1,k[L]===0&&(r.enableVertexAttribArray(L),k[L]=1),U[L]!==B&&(r.vertexAttribDivisor(L,B),U[L]=B)}function x(){const L=s.newAttributes,B=s.enabledAttributes;for(let F=0,k=B.length;F<k;F++)B[F]!==L[F]&&(r.disableVertexAttribArray(F),B[F]=0)}function v(L,B,F,k,U,D,z){z===!0?r.vertexAttribIPointer(L,B,F,U,D):r.vertexAttribPointer(L,B,F,k,U,D)}function M(L,B,F,k){_();const U=k.attributes,D=F.getAttributes(),z=B.defaultAttributeValues;for(const X in D){const $=D[X];if($.location>=0){let ft=U[X];if(ft===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor)),ft!==void 0){const _t=ft.normalized,lt=ft.itemSize,Ct=t.get(ft);if(Ct===void 0)continue;const Z=Ct.buffer,G=Ct.type,T=Ct.bytesPerElement,E=G===r.INT||G===r.UNSIGNED_INT||ft.gpuType===Nl;if(ft.isInterleavedBufferAttribute){const W=ft.data,it=W.stride,K=ft.offset;if(W.isInstancedInterleavedBuffer){for(let ot=0;ot<$.locationSize;ot++)g($.location+ot,W.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ot=0;ot<$.locationSize;ot++)m($.location+ot);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let ot=0;ot<$.locationSize;ot++)v($.location+ot,lt/$.locationSize,G,_t,it*T,(K+lt/$.locationSize*ot)*T,E)}else{if(ft.isInstancedBufferAttribute){for(let W=0;W<$.locationSize;W++)g($.location+W,ft.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let W=0;W<$.locationSize;W++)m($.location+W);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let W=0;W<$.locationSize;W++)v($.location+W,lt/$.locationSize,G,_t,lt*T,lt/$.locationSize*W*T,E)}}else if(z!==void 0){const _t=z[X];if(_t!==void 0)switch(_t.length){case 2:r.vertexAttrib2fv($.location,_t);break;case 3:r.vertexAttrib3fv($.location,_t);break;case 4:r.vertexAttrib4fv($.location,_t);break;default:r.vertexAttrib1fv($.location,_t)}}}}x()}function A(){w();for(const L in n){const B=n[L];for(const F in B){const k=B[F];for(const U in k){const D=k[U];for(const z in D)u(D[z].object),delete D[z];delete k[U]}}delete n[L]}}function R(L){if(n[L.id]===void 0)return;const B=n[L.id];for(const F in B){const k=B[F];for(const U in k){const D=k[U];for(const z in D)u(D[z].object),delete D[z];delete k[U]}}delete n[L.id]}function P(L){for(const B in n){const F=n[B];for(const k in F){const U=F[k];if(U[L.id]===void 0)continue;const D=U[L.id];for(const z in D)u(D[z].object),delete D[z];delete U[L.id]}}}function y(L){for(const B in n){const F=n[B],k=L.isInstancedMesh===!0?L.id:0,U=F[k];if(U!==void 0){for(const D in U){const z=U[D];for(const X in z)u(z[X].object),delete z[X];delete U[D]}delete F[k],Object.keys(F).length===0&&delete n[B]}}}function w(){V(),o=!0,s!==i&&(s=i,c(s.object))}function V(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:V,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:y,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function y_(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let p=0;p<d;p++)f+=u[p];e.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_]*h[_];e.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function M_(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==ln&&n.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const y=P===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==en&&n.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==an&&!y)}function l(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Ht("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=r.getParameter(r.MAX_SAMPLES),R=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:M,maxSamples:A,samples:R}}function S_(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new mi,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,v=x*4;let M=g.clippingState||null;l.value=M,M=u(p,h,v,f);for(let A=0;A!==v;++A)M[A]=e[A];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,p){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,M=f;v!==_;++v,M+=4)o.copy(d[v]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}const yi=4,Mh=[.125,.215,.35,.446,.526,.582],Ni=20,b_=256,Ws=new Sr,Sh=new Yt;let ga=null,_a=0,xa=0,va=!1;const E_=new H;class bh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:o=256,position:a=E_}=s;ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ga,_a,xa),this._renderer.xr.enabled=va,t.scissorTest=!1,cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:ni,format:ln,colorSpace:Ye,depthBuffer:!1},i=Eh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=T_(s)),this._blurMaterial=A_(s,t,e),this._ggxMaterial=w_(s,t,e)}return i}_compileMaterial(t){const e=new Te(new He,t);this._renderer.compile(e,Ws)}_sceneToCubeUV(t,e,n,i,s){const l=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Sh),d.toneMapping=Pn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new Mr,new xi({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,g=!0):(m.color.copy(Sh),g=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));const A=this._cubeSize;cs(i,M*A,v>2?A:0,A,A),d.setRenderTarget(i),g&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Oi||t.mapping===vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;cs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ws)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-yi?n-p+yi:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,cs(s,m,g,3*_,2*_),i.setRenderTarget(s),i.render(a,Ws),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,cs(t,m,g,3*_,2*_),i.setRenderTarget(t),i.render(a,Ws)}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&qt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),_=s/p,m=isFinite(s)?1+Math.floor(u*_):Ni;m>Ni&&Ht(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const g=[];let x=0;for(let P=0;P<Ni;++P){const y=P/_,w=Math.exp(-y*y/2);g.push(w),P===0?x+=w:P<m&&(x+=2*w)}for(let P=0;P<g.length;P++)g[P]=g[P]/x;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=p,h.mipInt.value=v-n;const M=this._sizeLods[i],A=3*M*(i>v-yi?i-v+yi:0),R=4*(this._cubeSize-M);cs(e,A,R,3*M,2*M),l.setRenderTarget(e),l.render(d,Ws)}}function T_(r){const t=[],e=[],n=[];let i=r;const s=r-yi+1+Mh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-yi?l=Mh[o-r+yi-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,_=3,m=2,g=1,x=new Float32Array(_*p*f),v=new Float32Array(m*p*f),M=new Float32Array(g*p*f);for(let R=0;R<f;R++){const P=R%3*2/3-1,y=R>2?0:-1,w=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];x.set(w,_*p*R),v.set(h,m*p*R);const V=[R,R,R,R,R,R];M.set(V,g*p*R)}const A=new He;A.setAttribute("position",new qe(x,_)),A.setAttribute("uv",new qe(v,m)),A.setAttribute("faceIndex",new qe(M,g)),n.push(new Te(A,null)),i>yi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Eh(r,t,e){const n=new In(r,t,e);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function w_(r,t,e){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Po(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function A_(r,t,e){const n=new Float32Array(Ni),i=new H(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Th(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function wh(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Po(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ld extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new qu(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Mr(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Qn});s.uniforms.tEquirect.value=e;const o=new Te(i,s),a=e.minFilter;return e.minFilter===Zn&&(e.minFilter=Pe),new ym(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}function R_(r){let t=new WeakMap,e=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Uo||f===Oo)if(t.has(h)){const p=t.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new ld(p.height);return _.fromEquirectangularTexture(r,h),t.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,p=f===Uo||f===Oo,_=f===Oi||f===vs;if(p||_){let m=e.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new bh(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const x=h.image;return p&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new bh(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Uo?h.mapping=Oi:f===Oo&&(h.mapping=vs),h}function l(h){let f=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function C_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&bo("WebGLRenderer: "+n+" extension not supported."),i}}}function P_(r,t,e,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete i[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)t.update(h[f],r.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,p=d.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const x=f.array;_=f.version;for(let v=0,M=x.length;v<M;v+=3){const A=x[v+0],R=x[v+1],P=x[v+2];h.push(A,R,R,P,P,A)}}else{const x=p.array;_=p.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const A=v+0,R=v+1,P=v+2;h.push(A,R,R,P,P,A)}}const m=new(p.count>=65535?zu:Bu)(h,1);m.version=_;const g=s.get(d);g&&t.remove(g),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function I_(r,t,e){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*o),e.update(f,n,1)}function c(h,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,h*o,p),e.update(f,n,p))}function u(h,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,n,1)}function d(h,f,p,_){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)c(h[g]/o,f[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x]*_[x];e.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function L_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:qt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function N_(r,t,e){const n=new WeakMap,i=new me;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let V=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",V)};var f=V;h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let A=a.attributes.position.count*M,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const P=new Float32Array(A*R*4*d),y=new Uu(P,A,R,d);y.type=an,y.needsUpdate=!0;const w=M*4;for(let L=0;L<d;L++){const B=g[L],F=x[L],k=v[L],U=A*R*4*L;for(let D=0;D<B.count;D++){const z=D*w;p===!0&&(i.fromBufferAttribute(B,D),P[U+z+0]=i.x,P[U+z+1]=i.y,P[U+z+2]=i.z,P[U+z+3]=0),_===!0&&(i.fromBufferAttribute(F,D),P[U+z+4]=i.x,P[U+z+5]=i.y,P[U+z+6]=i.z,P[U+z+7]=0),m===!0&&(i.fromBufferAttribute(k,D),P[U+z+8]=i.x,P[U+z+9]=i.y,P[U+z+10]=i.z,P[U+z+11]=k.itemSize===4?i.w:1)}}h={count:d,texture:y,size:new dt(A,R)},n.set(a,h),a.addEventListener("dispose",V)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function D_(r,t,e,n,i){let s=new WeakMap;function o(c){const u=i.render.frame,d=c.geometry,h=t.get(c,d);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const F_={[xu]:"LINEAR_TONE_MAPPING",[vu]:"REINHARD_TONE_MAPPING",[yu]:"CINEON_TONE_MAPPING",[Ll]:"ACES_FILMIC_TONE_MAPPING",[Su]:"AGX_TONE_MAPPING",[bu]:"NEUTRAL_TONE_MAPPING",[Mu]:"CUSTOM_TONE_MAPPING"};function U_(r,t,e,n,i){const s=new In(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),o=new In(t,e,{type:ni,depthBuffer:!1,stencilBuffer:!1}),a=new He;a.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Le([0,2,0,0,2,0],2));const l=new Zp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Te(a,l),u=new Sr(-1,1,1,-1,0,1);let d=null,h=null,f=!1,p,_=null,m=[],g=!1;this.setSize=function(x,v){s.setSize(x,v),o.setSize(x,v);for(let M=0;M<m.length;M++){const A=m[M];A.setSize&&A.setSize(x,v)}},this.setEffects=function(x){m=x,g=m.length>0&&m[0].isRenderPass===!0;const v=s.width,M=s.height;for(let A=0;A<m.length;A++){const R=m[A];R.setSize&&R.setSize(v,M)}},this.begin=function(x,v){if(f||x.toneMapping===Pn&&m.length===0)return!1;if(_=v,v!==null){const M=v.width,A=v.height;(s.width!==M||s.height!==A)&&this.setSize(M,A)}return g===!1&&x.setRenderTarget(s),p=x.toneMapping,x.toneMapping=Pn,!0},this.hasRenderPass=function(){return g},this.end=function(x,v){x.toneMapping=p,f=!0;let M=s,A=o;for(let R=0;R<m.length;R++){const P=m[R];if(P.enabled!==!1&&(P.render(x,A,M,v),P.needsSwap!==!1)){const y=M;M=A,A=y}}if(d!==x.outputColorSpace||h!==x.toneMapping){d=x.outputColorSpace,h=x.toneMapping,l.defines={},ie.getTransfer(d)===ae&&(l.defines.SRGB_TRANSFER="");const R=F_[h];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(_),x.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const cd=new Ie,Rl=new _r(1,1),hd=new Uu,ud=new kf,dd=new qu,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Ih=new Float32Array(4);function Ns(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Ah[i];if(s===void 0&&(s=new Float32Array(i),Ah[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ne(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function De(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Io(r,t){let e=Rh[t];e===void 0&&(e=new Int32Array(t),Rh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function O_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function B_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2fv(this.addr,t),De(e,t)}}function z_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;r.uniform3fv(this.addr,t),De(e,t)}}function k_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4fv(this.addr,t),De(e,t)}}function V_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ne(e,n))return;Ih.set(n),r.uniformMatrix2fv(this.addr,!1,Ih),De(e,n)}}function H_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ne(e,n))return;Ph.set(n),r.uniformMatrix3fv(this.addr,!1,Ph),De(e,n)}}function G_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ne(e,n))return;Ch.set(n),r.uniformMatrix4fv(this.addr,!1,Ch),De(e,n)}}function W_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function X_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2iv(this.addr,t),De(e,t)}}function q_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3iv(this.addr,t),De(e,t)}}function Y_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4iv(this.addr,t),De(e,t)}}function j_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function K_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2uiv(this.addr,t),De(e,t)}}function Z_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3uiv(this.addr,t),De(e,t)}}function $_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4uiv(this.addr,t),De(e,t)}}function J_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Rl.compareFunction=e.isReversedDepthBuffer()?Vl:kl,s=Rl):s=cd,e.setTexture2D(t||s,i)}function Q_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ud,i)}function tx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||dd,i)}function ex(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||hd,i)}function nx(r){switch(r){case 5126:return O_;case 35664:return B_;case 35665:return z_;case 35666:return k_;case 35674:return V_;case 35675:return H_;case 35676:return G_;case 5124:case 35670:return W_;case 35667:case 35671:return X_;case 35668:case 35672:return q_;case 35669:case 35673:return Y_;case 5125:return j_;case 36294:return K_;case 36295:return Z_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return J_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return ex}}function ix(r,t){r.uniform1fv(this.addr,t)}function sx(r,t){const e=Ns(t,this.size,2);r.uniform2fv(this.addr,e)}function rx(r,t){const e=Ns(t,this.size,3);r.uniform3fv(this.addr,e)}function ox(r,t){const e=Ns(t,this.size,4);r.uniform4fv(this.addr,e)}function ax(r,t){const e=Ns(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function lx(r,t){const e=Ns(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function cx(r,t){const e=Ns(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function hx(r,t){r.uniform1iv(this.addr,t)}function ux(r,t){r.uniform2iv(this.addr,t)}function dx(r,t){r.uniform3iv(this.addr,t)}function fx(r,t){r.uniform4iv(this.addr,t)}function px(r,t){r.uniform1uiv(this.addr,t)}function mx(r,t){r.uniform2uiv(this.addr,t)}function gx(r,t){r.uniform3uiv(this.addr,t)}function _x(r,t){r.uniform4uiv(this.addr,t)}function xx(r,t,e){const n=this.cache,i=t.length,s=Io(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),De(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Rl:o=cd;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function vx(r,t,e){const n=this.cache,i=t.length,s=Io(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ud,s[o])}function yx(r,t,e){const n=this.cache,i=t.length,s=Io(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||dd,s[o])}function Mx(r,t,e){const n=this.cache,i=t.length,s=Io(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||hd,s[o])}function Sx(r){switch(r){case 5126:return ix;case 35664:return sx;case 35665:return rx;case 35666:return ox;case 35674:return ax;case 35675:return lx;case 35676:return cx;case 5124:case 35670:return hx;case 35667:case 35671:return ux;case 35668:case 35672:return dx;case 35669:case 35673:return fx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return Mx}}class bx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nx(e.type)}}class Ex{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sx(e.type)}}class Tx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function Lh(r,t){r.seq.push(t),r.map[t.id]=t}function wx(r,t,e){const n=r.name,i=n.length;for(ya.lastIndex=0;;){const s=ya.exec(n),o=ya.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Lh(e,c===void 0?new bx(a,r,t):new Ex(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Tx(a),Lh(e,d)),e=d}}}class vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);wx(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Nh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Ax=37297;let Rx=0;function Cx(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Dh=new jt;function Px(r){ie._getMatrix(Dh,ie.workingColorSpace,r);const t=`mat3( ${Dh.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(r)){case Mo:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Fh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Cx(r.getShaderSource(t),a)}else return s}function Ix(r,t){const e=Px(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Lx={[xu]:"Linear",[vu]:"Reinhard",[yu]:"Cineon",[Ll]:"ACESFilmic",[Su]:"AgX",[bu]:"Neutral",[Mu]:"Custom"};function Nx(r,t){const e=Lx[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ro=new H;function Dx(){ie.getLuminanceCoefficients(ro);const r=ro.x.toFixed(4),t=ro.y.toFixed(4),e=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function Ux(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ox(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function er(r){return r!==""}function Uh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(r){return r.replace(Bx,kx)}const zx=new Map;function kx(r,t){let e=Qt[t];if(e===void 0){const n=zx.get(t);if(n!==void 0)e=Qt[n],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cl(e)}const Vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(r){return r.replace(Vx,Hx)}function Hx(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Gx={[nr]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function Wx(r){return Gx[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Xx={[Oi]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE_UV"};function qx(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Xx[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Yx={[vs]:"ENVMAP_MODE_REFRACTION"};function jx(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Yx[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Kx={[_u]:"ENVMAP_BLENDING_MULTIPLY",[tf]:"ENVMAP_BLENDING_MIX",[ef]:"ENVMAP_BLENDING_ADD"};function Zx(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Kx[r.combine]||"ENVMAP_BLENDING_NONE"}function $x(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Jx(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Wx(e),c=qx(e),u=jx(e),d=Zx(e),h=$x(e),f=Fx(e),p=Ux(s),_=i.createProgram();let m,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(er).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(er).join(`
`),g.length>0&&(g+=`
`)):(m=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),g=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?Nx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Ix("linearToOutputTexel",e.outputColorSpace),Dx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),o=Cl(o),o=Uh(o,e),o=Oh(o,e),a=Cl(a),a=Uh(a,e),a=Oh(a,e),o=Bh(o),a=Bh(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=x+m+o,M=x+g+a,A=Nh(i,i.VERTEX_SHADER,v),R=Nh(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,R),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(L){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(A)||"",k=i.getShaderInfoLog(R)||"",U=B.trim(),D=F.trim(),z=k.trim();let X=!0,$=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,R);else{const ft=Fh(i,A,"vertex"),_t=Fh(i,R,"fragment");qt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+ft+`
`+_t)}else U!==""?Ht("WebGLProgram: Program Info Log:",U):(D===""||z==="")&&($=!1);$&&(L.diagnostics={runnable:X,programLog:U,vertexShader:{log:D,prefix:m},fragmentShader:{log:z,prefix:g}})}i.deleteShader(A),i.deleteShader(R),y=new vo(i,_),w=Ox(i,_)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=i.getProgramParameter(_,Ax)),V},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=R,this}let Qx=0;class tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ev(t),e.set(t,n)),n}}class ev{constructor(t){this.id=Qx++,this.code=t,this.usedTimes=0}}function nv(r,t,e,n,i,s){const o=new Wl,a=new tv,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,w,V,L,B){const F=L.fog,k=B.geometry,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,z=t.get(y.envMap||U,D),X=z&&z.mapping===Ro?z.image.height:null,$=f[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&Ht("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const ft=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_t=ft!==void 0?ft.length:0;let lt=0;k.morphAttributes.position!==void 0&&(lt=1),k.morphAttributes.normal!==void 0&&(lt=2),k.morphAttributes.color!==void 0&&(lt=3);let Ct,Z,G,T;if($){const oe=An[$];Ct=oe.vertexShader,Z=oe.fragmentShader}else Ct=y.vertexShader,Z=y.fragmentShader,a.update(y),G=a.getVertexShaderID(y),T=a.getFragmentShaderID(y);const E=r.getRenderTarget(),W=r.state.buffers.depth.getReversed(),it=B.isInstancedMesh===!0,K=B.isBatchedMesh===!0,ot=!!y.map,gt=!!y.matcap,pt=!!z,q=!!y.aoMap,Q=!!y.lightMap,tt=!!y.bumpMap,at=!!y.normalMap,b=!!y.displacementMap,O=!!y.emissiveMap,ht=!!y.metalnessMap,bt=!!y.roughnessMap,vt=y.anisotropy>0,N=y.clearcoat>0,S=y.dispersion>0,Y=y.iridescence>0,rt=y.sheen>0,mt=y.transmission>0,ct=vt&&!!y.anisotropyMap,Pt=N&&!!y.clearcoatMap,Mt=N&&!!y.clearcoatNormalMap,kt=N&&!!y.clearcoatRoughnessMap,Xt=Y&&!!y.iridescenceMap,xt=Y&&!!y.iridescenceThicknessMap,St=rt&&!!y.sheenColorMap,Ut=rt&&!!y.sheenRoughnessMap,Bt=!!y.specularMap,It=!!y.specularColorMap,te=!!y.specularIntensityMap,j=mt&&!!y.transmissionMap,Tt=mt&&!!y.thicknessMap,Et=!!y.gradientMap,Nt=!!y.alphaMap,yt=y.alphaTest>0,ut=!!y.alphaHash,Ot=!!y.extensions;let Kt=Pn;y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Kt=r.toneMapping);const pe={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:Ct,fragmentShader:Z,defines:y.defines,customVertexShaderID:G,customFragmentShaderID:T,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:K,batchingColor:K&&B._colorsTexture!==null,instancing:it,instancingColor:it&&B.instanceColor!==null,instancingMorph:it&&B.morphTexture!==null,outputColorSpace:E===null?r.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ye,alphaToCoverage:!!y.alphaToCoverage,map:ot,matcap:gt,envMap:pt,envMapMode:pt&&z.mapping,envMapCubeUVHeight:X,aoMap:q,lightMap:Q,bumpMap:tt,normalMap:at,displacementMap:b,emissiveMap:O,normalMapObjectSpace:at&&y.normalMapType===af,normalMapTangentSpace:at&&y.normalMapType===Nu,metalnessMap:ht,roughnessMap:bt,anisotropy:vt,anisotropyMap:ct,clearcoat:N,clearcoatMap:Pt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:kt,dispersion:S,iridescence:Y,iridescenceMap:Xt,iridescenceThicknessMap:xt,sheen:rt,sheenColorMap:St,sheenRoughnessMap:Ut,specularMap:Bt,specularColorMap:It,specularIntensityMap:te,transmission:mt,transmissionMap:j,thicknessMap:Tt,gradientMap:Et,opaque:y.transparent===!1&&y.blending===fs&&y.alphaToCoverage===!1,alphaMap:Nt,alphaTest:yt,alphaHash:ut,combine:y.combine,mapUv:ot&&p(y.map.channel),aoMapUv:q&&p(y.aoMap.channel),lightMapUv:Q&&p(y.lightMap.channel),bumpMapUv:tt&&p(y.bumpMap.channel),normalMapUv:at&&p(y.normalMap.channel),displacementMapUv:b&&p(y.displacementMap.channel),emissiveMapUv:O&&p(y.emissiveMap.channel),metalnessMapUv:ht&&p(y.metalnessMap.channel),roughnessMapUv:bt&&p(y.roughnessMap.channel),anisotropyMapUv:ct&&p(y.anisotropyMap.channel),clearcoatMapUv:Pt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:St&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&p(y.sheenRoughnessMap.channel),specularMapUv:Bt&&p(y.specularMap.channel),specularColorMapUv:It&&p(y.specularColorMap.channel),specularIntensityMapUv:te&&p(y.specularIntensityMap.channel),transmissionMapUv:j&&p(y.transmissionMap.channel),thicknessMapUv:Tt&&p(y.thicknessMap.channel),alphaMapUv:Nt&&p(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(at||vt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(ot||Nt),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&at===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:W,skinning:B.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:lt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Kt,decodeVideoTexture:ot&&y.map.isVideoTexture===!0&&ie.getTransfer(y.map.colorSpace)===ae,decodeVideoTextureEmissive:O&&y.emissiveMap.isVideoTexture===!0&&ie.getTransfer(y.emissiveMap.colorSpace)===ae,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===mn,flipSided:y.side===Ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ot&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&y.extensions.multiDraw===!0||K)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pe.vertexUv1s=l.has(1),pe.vertexUv2s=l.has(2),pe.vertexUv3s=l.has(3),l.clear(),pe}function m(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const V in y.defines)w.push(V),w.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(g(w,y),x(w,y),w.push(r.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function g(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function x(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const w=f[y.type];let V;if(w){const L=An[w];V=Yp.clone(L.uniforms)}else V=y.uniforms;return V}function M(y,w){let V=u.get(w);return V!==void 0?++V.usedTimes:(V=new Jx(r,w,y,i),c.push(V),u.set(w,V)),V}function A(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function R(y){a.remove(y)}function P(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:v,acquireProgram:M,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:P}}function iv(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function sv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function kh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Vh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,_,m,g){let x=r[t];return x===void 0?(x={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},r[t]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=p,x.materialVariant=o(h),x.groupOrder=_,x.renderOrder=h.renderOrder,x.z=m,x.group=g),t++,x}function l(h,f,p,_,m,g){const x=a(h,f,p,_,m,g);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):e.push(x)}function c(h,f,p,_,m,g){const x=a(h,f,p,_,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):e.unshift(x)}function u(h,f){e.length>1&&e.sort(h||sv),n.length>1&&n.sort(f||kh),i.length>1&&i.sort(f||kh)}function d(){for(let h=t,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function rv(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Vh,r.set(n,[o])):i>=s.length?(o=new Vh,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function ov(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Yt};break;case"SpotLight":e={position:new H,direction:new H,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new H,halfWidth:new H,halfHeight:new H};break}return r[t.id]=e,e}}}function av(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let lv=0;function cv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function hv(r){const t=new ov,e=av(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const i=new H,s=new Zt,o=new Zt;function a(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,x=0,v=0,M=0,A=0,R=0,P=0;c.sort(cv);for(let w=0,V=c.length;w<V;w++){const L=c[w],B=L.color,F=L.intensity,k=L.distance;let U=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ms?U=L.shadow.map.texture:U=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=B.r*F,d+=B.g*F,h+=B.b*F;else if(L.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(L.sh.coefficients[D],F);P++}else if(L.isDirectionalLight){const D=t.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const z=L.shadow,X=e.get(L);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=L.shadow.matrix,x++}n.directional[f]=D,f++}else if(L.isSpotLight){const D=t.get(L);D.position.setFromMatrixPosition(L.matrixWorld),D.color.copy(B).multiplyScalar(F),D.distance=k,D.coneCos=Math.cos(L.angle),D.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),D.decay=L.decay,n.spot[_]=D;const z=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,z.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[_]=z.matrix,L.castShadow){const X=e.get(L);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=U,M++}_++}else if(L.isRectAreaLight){const D=t.get(L);D.color.copy(B).multiplyScalar(F),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=D,m++}else if(L.isPointLight){const D=t.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),D.distance=L.distance,D.decay=L.decay,L.castShadow){const z=L.shadow,X=e.get(L);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,X.shadowCameraNear=z.camera.near,X.shadowCameraFar=z.camera.far,n.pointShadow[p]=X,n.pointShadowMap[p]=U,n.pointShadowMatrix[p]=L.shadow.matrix,v++}n.point[p]=D,p++}else if(L.isHemisphereLight){const D=t.get(L);D.skyColor.copy(L.color).multiplyScalar(F),D.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[g]=D,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const y=n.hash;(y.directionalLength!==f||y.pointLength!==p||y.spotLength!==_||y.rectAreaLength!==m||y.hemiLength!==g||y.numDirectionalShadows!==x||y.numPointShadows!==v||y.numSpotShadows!==M||y.numSpotMaps!==A||y.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,y.directionalLength=f,y.pointLength=p,y.spotLength=_,y.rectAreaLength=m,y.hemiLength=g,y.numDirectionalShadows=x,y.numPointShadows=v,y.numSpotShadows=M,y.numSpotMaps=A,y.numLightProbes=P,n.version=lv++)}function l(c,u){let d=0,h=0,f=0,p=0,_=0;const m=u.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const v=c[g];if(v.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(v.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Hh(r){const t=new hv(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function uv(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Hh(r),t.set(i,[a])):s>=o.length?(a=new Hh(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pv=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],mv=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Gh=new Zt,Xs=new H,Ma=new H;function gv(r,t,e){let n=new jl;const i=new dt,s=new dt,o=new me,a=new $p,l=new Jp,c={},u=e.maxTextureSize,d={[ei]:Ze,[Ze]:ei,[mn]:mn},h=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:dv,fragmentShader:fv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new He;p.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Te(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nr;let g=this.type;this.render=function(R,P,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===Fd&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nr);const w=r.getRenderTarget(),V=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Qn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=g!==this.type;F&&P.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(U=>U.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,U=R.length;k<U;k++){const D=R[k],z=D.shadow;if(z===void 0){Ht("WebGLShadowMap:",D,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const X=z.getFrameExtents();i.multiply(X),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/X.x),i.x=s.x*X.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/X.y),i.y=s.y*X.y,z.mapSize.y=s.y));const $=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=$,z.map===null||F===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Js){if(D.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new In(i.x,i.y,{format:Ms,type:ni,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),z.map.texture.name=D.name+".shadowMap",z.map.depthTexture=new _r(i.x,i.y,an),z.map.depthTexture.name=D.name+".shadowMapDepth",z.map.depthTexture.format=ii,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ce,z.map.depthTexture.magFilter=Ce}else D.isPointLight?(z.map=new ld(i.x),z.map.depthTexture=new dp(i.x,Ln)):(z.map=new In(i.x,i.y),z.map.depthTexture=new _r(i.x,i.y,Ln)),z.map.depthTexture.name=D.name+".shadowMap",z.map.depthTexture.format=ii,this.type===nr?(z.map.depthTexture.compareFunction=$?Vl:kl,z.map.depthTexture.minFilter=Pe,z.map.depthTexture.magFilter=Pe):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ce,z.map.depthTexture.magFilter=Ce);z.camera.updateProjectionMatrix()}const ft=z.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<ft;_t++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,_t),r.clear();else{_t===0&&(r.setRenderTarget(z.map),r.clear());const lt=z.getViewport(_t);o.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),B.viewport(o)}if(D.isPointLight){const lt=z.camera,Ct=z.matrix,Z=D.distance||lt.far;Z!==lt.far&&(lt.far=Z,lt.updateProjectionMatrix()),Xs.setFromMatrixPosition(D.matrixWorld),lt.position.copy(Xs),Ma.copy(lt.position),Ma.add(pv[_t]),lt.up.copy(mv[_t]),lt.lookAt(Ma),lt.updateMatrixWorld(),Ct.makeTranslation(-Xs.x,-Xs.y,-Xs.z),Gh.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Gh,lt.coordinateSystem,lt.reversedDepth)}else z.updateMatrices(D);n=z.getFrustum(),M(P,y,z.camera,D,this.type)}z.isPointLightShadow!==!0&&this.type===Js&&x(z,y),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(w,V,L)};function x(R,P){const y=t.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new In(i.x,i.y,{format:Ms,type:ni})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(P,null,y,h,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(P,null,y,f,_,null)}function v(R,P,y,w){let V=null;const L=y.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)V=L;else if(V=y.isPointLight===!0?l:a,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=V.uuid,F=P.uuid;let k=c[B];k===void 0&&(k={},c[B]=k);let U=k[F];U===void 0&&(U=V.clone(),k[F]=U,P.addEventListener("dispose",A)),V=U}if(V.visible=P.visible,V.wireframe=P.wireframe,w===Js?V.side=P.shadowSide!==null?P.shadowSide:P.side:V.side=P.shadowSide!==null?P.shadowSide:d[P.side],V.alphaMap=P.alphaMap,V.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,V.map=P.map,V.clipShadows=P.clipShadows,V.clippingPlanes=P.clippingPlanes,V.clipIntersection=P.clipIntersection,V.displacementMap=P.displacementMap,V.displacementScale=P.displacementScale,V.displacementBias=P.displacementBias,V.wireframeLinewidth=P.wireframeLinewidth,V.linewidth=P.linewidth,y.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const B=r.properties.get(V);B.light=y}return V}function M(R,P,y,w,V){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&V===Js)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,R.matrixWorld);const F=t.update(R),k=R.material;if(Array.isArray(k)){const U=F.groups;for(let D=0,z=U.length;D<z;D++){const X=U[D],$=k[X.materialIndex];if($&&$.visible){const ft=v(R,$,w,V);R.onBeforeShadow(r,R,P,y,F,ft,X),r.renderBufferDirect(y,null,F,ft,R,X),R.onAfterShadow(r,R,P,y,F,ft,X)}}}else if(k.visible){const U=v(R,k,w,V);R.onBeforeShadow(r,R,P,y,F,U,null),r.renderBufferDirect(y,null,F,U,R,null),R.onAfterShadow(r,R,P,y,F,U,null)}}const B=R.children;for(let F=0,k=B.length;F<k;F++)M(B[F],P,y,w,V)}function A(R){R.target.removeEventListener("dispose",A);for(const y in c){const w=c[y],V=R.target.uuid;V in w&&(w[V].dispose(),delete w[V])}}}function _v(r,t){function e(){let j=!1;const Tt=new me;let Et=null;const Nt=new me(0,0,0,0);return{setMask:function(yt){Et!==yt&&!j&&(r.colorMask(yt,yt,yt,yt),Et=yt)},setLocked:function(yt){j=yt},setClear:function(yt,ut,Ot,Kt,pe){pe===!0&&(yt*=Kt,ut*=Kt,Ot*=Kt),Tt.set(yt,ut,Ot,Kt),Nt.equals(Tt)===!1&&(r.clearColor(yt,ut,Ot,Kt),Nt.copy(Tt))},reset:function(){j=!1,Et=null,Nt.set(-1,0,0,0)}}}function n(){let j=!1,Tt=!1,Et=null,Nt=null,yt=null;return{setReversed:function(ut){if(Tt!==ut){const Ot=t.get("EXT_clip_control");ut?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),Tt=ut;const Kt=yt;yt=null,this.setClear(Kt)}},getReversed:function(){return Tt},setTest:function(ut){ut?E(r.DEPTH_TEST):W(r.DEPTH_TEST)},setMask:function(ut){Et!==ut&&!j&&(r.depthMask(ut),Et=ut)},setFunc:function(ut){if(Tt&&(ut=xf[ut]),Nt!==ut){switch(ut){case Fa:r.depthFunc(r.NEVER);break;case Ua:r.depthFunc(r.ALWAYS);break;case Oa:r.depthFunc(r.LESS);break;case xs:r.depthFunc(r.LEQUAL);break;case Ba:r.depthFunc(r.EQUAL);break;case za:r.depthFunc(r.GEQUAL);break;case ka:r.depthFunc(r.GREATER);break;case Va:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Nt=ut}},setLocked:function(ut){j=ut},setClear:function(ut){yt!==ut&&(yt=ut,Tt&&(ut=1-ut),r.clearDepth(ut))},reset:function(){j=!1,Et=null,Nt=null,yt=null,Tt=!1}}}function i(){let j=!1,Tt=null,Et=null,Nt=null,yt=null,ut=null,Ot=null,Kt=null,pe=null;return{setTest:function(oe){j||(oe?E(r.STENCIL_TEST):W(r.STENCIL_TEST))},setMask:function(oe){Tt!==oe&&!j&&(r.stencilMask(oe),Tt=oe)},setFunc:function(oe,On,Bn){(Et!==oe||Nt!==On||yt!==Bn)&&(r.stencilFunc(oe,On,Bn),Et=oe,Nt=On,yt=Bn)},setOp:function(oe,On,Bn){(ut!==oe||Ot!==On||Kt!==Bn)&&(r.stencilOp(oe,On,Bn),ut=oe,Ot=On,Kt=Bn)},setLocked:function(oe){j=oe},setClear:function(oe){pe!==oe&&(r.clearStencil(oe),pe=oe)},reset:function(){j=!1,Tt=null,Et=null,Nt=null,yt=null,ut=null,Ot=null,Kt=null,pe=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],p=null,_=!1,m=null,g=null,x=null,v=null,M=null,A=null,R=null,P=new Yt(0,0,0),y=0,w=!1,V=null,L=null,B=null,F=null,k=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,z=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),D=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),D=z>=2);let $=null,ft={};const _t=r.getParameter(r.SCISSOR_BOX),lt=r.getParameter(r.VIEWPORT),Ct=new me().fromArray(_t),Z=new me().fromArray(lt);function G(j,Tt,Et,Nt){const yt=new Uint8Array(4),ut=r.createTexture();r.bindTexture(j,ut),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ot=0;Ot<Et;Ot++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Tt,0,r.RGBA,1,1,Nt,0,r.RGBA,r.UNSIGNED_BYTE,yt):r.texImage2D(Tt+Ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,yt);return ut}const T={};T[r.TEXTURE_2D]=G(r.TEXTURE_2D,r.TEXTURE_2D,1),T[r.TEXTURE_CUBE_MAP]=G(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),T[r.TEXTURE_2D_ARRAY]=G(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),T[r.TEXTURE_3D]=G(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),E(r.DEPTH_TEST),o.setFunc(xs),tt(!1),at(_c),E(r.CULL_FACE),q(Qn);function E(j){u[j]!==!0&&(r.enable(j),u[j]=!0)}function W(j){u[j]!==!1&&(r.disable(j),u[j]=!1)}function it(j,Tt){return d[j]!==Tt?(r.bindFramebuffer(j,Tt),d[j]=Tt,j===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=Tt),j===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=Tt),!0):!1}function K(j,Tt){let Et=f,Nt=!1;if(j){Et=h.get(Tt),Et===void 0&&(Et=[],h.set(Tt,Et));const yt=j.textures;if(Et.length!==yt.length||Et[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,Ot=yt.length;ut<Ot;ut++)Et[ut]=r.COLOR_ATTACHMENT0+ut;Et.length=yt.length,Nt=!0}}else Et[0]!==r.BACK&&(Et[0]=r.BACK,Nt=!0);Nt&&r.drawBuffers(Et)}function ot(j){return p!==j?(r.useProgram(j),p=j,!0):!1}const gt={[Li]:r.FUNC_ADD,[Od]:r.FUNC_SUBTRACT,[Bd]:r.FUNC_REVERSE_SUBTRACT};gt[zd]=r.MIN,gt[kd]=r.MAX;const pt={[Vd]:r.ZERO,[Hd]:r.ONE,[Gd]:r.SRC_COLOR,[Na]:r.SRC_ALPHA,[Kd]:r.SRC_ALPHA_SATURATE,[Yd]:r.DST_COLOR,[Xd]:r.DST_ALPHA,[Wd]:r.ONE_MINUS_SRC_COLOR,[Da]:r.ONE_MINUS_SRC_ALPHA,[jd]:r.ONE_MINUS_DST_COLOR,[qd]:r.ONE_MINUS_DST_ALPHA,[Zd]:r.CONSTANT_COLOR,[$d]:r.ONE_MINUS_CONSTANT_COLOR,[Jd]:r.CONSTANT_ALPHA,[Qd]:r.ONE_MINUS_CONSTANT_ALPHA};function q(j,Tt,Et,Nt,yt,ut,Ot,Kt,pe,oe){if(j===Qn){_===!0&&(W(r.BLEND),_=!1);return}if(_===!1&&(E(r.BLEND),_=!0),j!==Ud){if(j!==m||oe!==w){if((g!==Li||M!==Li)&&(r.blendEquation(r.FUNC_ADD),g=Li,M=Li),oe)switch(j){case fs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xc:r.blendFunc(r.ONE,r.ONE);break;case vc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:qt("WebGLState: Invalid blending: ",j);break}else switch(j){case fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case vc:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yc:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",j);break}x=null,v=null,A=null,R=null,P.set(0,0,0),y=0,m=j,w=oe}return}yt=yt||Tt,ut=ut||Et,Ot=Ot||Nt,(Tt!==g||yt!==M)&&(r.blendEquationSeparate(gt[Tt],gt[yt]),g=Tt,M=yt),(Et!==x||Nt!==v||ut!==A||Ot!==R)&&(r.blendFuncSeparate(pt[Et],pt[Nt],pt[ut],pt[Ot]),x=Et,v=Nt,A=ut,R=Ot),(Kt.equals(P)===!1||pe!==y)&&(r.blendColor(Kt.r,Kt.g,Kt.b,pe),P.copy(Kt),y=pe),m=j,w=!1}function Q(j,Tt){j.side===mn?W(r.CULL_FACE):E(r.CULL_FACE);let Et=j.side===Ze;Tt&&(Et=!Et),tt(Et),j.blending===fs&&j.transparent===!1?q(Qn):q(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),s.setMask(j.colorWrite);const Nt=j.stencilWrite;a.setTest(Nt),Nt&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),O(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?E(r.SAMPLE_ALPHA_TO_COVERAGE):W(r.SAMPLE_ALPHA_TO_COVERAGE)}function tt(j){V!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),V=j)}function at(j){j!==Nd?(E(r.CULL_FACE),j!==L&&(j===_c?r.cullFace(r.BACK):j===Dd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):W(r.CULL_FACE),L=j}function b(j){j!==B&&(D&&r.lineWidth(j),B=j)}function O(j,Tt,Et){j?(E(r.POLYGON_OFFSET_FILL),(F!==Tt||k!==Et)&&(F=Tt,k=Et,o.getReversed()&&(Tt=-Tt),r.polygonOffset(Tt,Et))):W(r.POLYGON_OFFSET_FILL)}function ht(j){j?E(r.SCISSOR_TEST):W(r.SCISSOR_TEST)}function bt(j){j===void 0&&(j=r.TEXTURE0+U-1),$!==j&&(r.activeTexture(j),$=j)}function vt(j,Tt,Et){Et===void 0&&($===null?Et=r.TEXTURE0+U-1:Et=$);let Nt=ft[Et];Nt===void 0&&(Nt={type:void 0,texture:void 0},ft[Et]=Nt),(Nt.type!==j||Nt.texture!==Tt)&&($!==Et&&(r.activeTexture(Et),$=Et),r.bindTexture(j,Tt||T[j]),Nt.type=j,Nt.texture=Tt)}function N(){const j=ft[$];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(j){qt("WebGLState:",j)}}function Y(){try{r.compressedTexImage3D(...arguments)}catch(j){qt("WebGLState:",j)}}function rt(){try{r.texSubImage2D(...arguments)}catch(j){qt("WebGLState:",j)}}function mt(){try{r.texSubImage3D(...arguments)}catch(j){qt("WebGLState:",j)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(j){qt("WebGLState:",j)}}function Pt(){try{r.compressedTexSubImage3D(...arguments)}catch(j){qt("WebGLState:",j)}}function Mt(){try{r.texStorage2D(...arguments)}catch(j){qt("WebGLState:",j)}}function kt(){try{r.texStorage3D(...arguments)}catch(j){qt("WebGLState:",j)}}function Xt(){try{r.texImage2D(...arguments)}catch(j){qt("WebGLState:",j)}}function xt(){try{r.texImage3D(...arguments)}catch(j){qt("WebGLState:",j)}}function St(j){Ct.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),Ct.copy(j))}function Ut(j){Z.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),Z.copy(j))}function Bt(j,Tt){let Et=c.get(Tt);Et===void 0&&(Et=new WeakMap,c.set(Tt,Et));let Nt=Et.get(j);Nt===void 0&&(Nt=r.getUniformBlockIndex(Tt,j.name),Et.set(j,Nt))}function It(j,Tt){const Nt=c.get(Tt).get(j);l.get(Tt)!==Nt&&(r.uniformBlockBinding(Tt,Nt,j.__bindingPointIndex),l.set(Tt,Nt))}function te(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},$=null,ft={},d={},h=new WeakMap,f=[],p=null,_=!1,m=null,g=null,x=null,v=null,M=null,A=null,R=null,P=new Yt(0,0,0),y=0,w=!1,V=null,L=null,B=null,F=null,k=null,Ct.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:E,disable:W,bindFramebuffer:it,drawBuffers:K,useProgram:ot,setBlending:q,setMaterial:Q,setFlipSided:tt,setCullFace:at,setLineWidth:b,setPolygonOffset:O,setScissorTest:ht,activeTexture:bt,bindTexture:vt,unbindTexture:N,compressedTexImage2D:S,compressedTexImage3D:Y,texImage2D:Xt,texImage3D:xt,updateUBOMapping:Bt,uniformBlockBinding:It,texStorage2D:Mt,texStorage3D:kt,texSubImage2D:rt,texSubImage3D:mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Pt,scissor:St,viewport:Ut,reset:te}}function xv(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(N,S){return f?new OffscreenCanvas(N,S):mr("canvas")}function _(N,S,Y){let rt=1;const mt=vt(N);if((mt.width>Y||mt.height>Y)&&(rt=Y/Math.max(mt.width,mt.height)),rt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ct=Math.floor(rt*mt.width),Pt=Math.floor(rt*mt.height);d===void 0&&(d=p(ct,Pt));const Mt=S?p(ct,Pt):d;return Mt.width=ct,Mt.height=Pt,Mt.getContext("2d").drawImage(N,0,0,ct,Pt),Ht("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ct+"x"+Pt+")."),Mt}else return"data"in N&&Ht("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),N;return N}function m(N){return N.generateMipmaps}function g(N){r.generateMipmap(N)}function x(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(N,S,Y,rt,mt=!1){if(N!==null){if(r[N]!==void 0)return r[N];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ct=S;if(S===r.RED&&(Y===r.FLOAT&&(ct=r.R32F),Y===r.HALF_FLOAT&&(ct=r.R16F),Y===r.UNSIGNED_BYTE&&(ct=r.R8)),S===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.R8UI),Y===r.UNSIGNED_SHORT&&(ct=r.R16UI),Y===r.UNSIGNED_INT&&(ct=r.R32UI),Y===r.BYTE&&(ct=r.R8I),Y===r.SHORT&&(ct=r.R16I),Y===r.INT&&(ct=r.R32I)),S===r.RG&&(Y===r.FLOAT&&(ct=r.RG32F),Y===r.HALF_FLOAT&&(ct=r.RG16F),Y===r.UNSIGNED_BYTE&&(ct=r.RG8)),S===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.RG8UI),Y===r.UNSIGNED_SHORT&&(ct=r.RG16UI),Y===r.UNSIGNED_INT&&(ct=r.RG32UI),Y===r.BYTE&&(ct=r.RG8I),Y===r.SHORT&&(ct=r.RG16I),Y===r.INT&&(ct=r.RG32I)),S===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),Y===r.UNSIGNED_INT&&(ct=r.RGB32UI),Y===r.BYTE&&(ct=r.RGB8I),Y===r.SHORT&&(ct=r.RGB16I),Y===r.INT&&(ct=r.RGB32I)),S===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),Y===r.UNSIGNED_INT&&(ct=r.RGBA32UI),Y===r.BYTE&&(ct=r.RGBA8I),Y===r.SHORT&&(ct=r.RGBA16I),Y===r.INT&&(ct=r.RGBA32I)),S===r.RGB&&(Y===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(ct=r.R11F_G11F_B10F)),S===r.RGBA){const Pt=mt?Mo:ie.getTransfer(rt);Y===r.FLOAT&&(ct=r.RGBA32F),Y===r.HALF_FLOAT&&(ct=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ct=Pt===ae?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function M(N,S){let Y;return N?S===null||S===Ln||S===ur?Y=r.DEPTH24_STENCIL8:S===an?Y=r.DEPTH32F_STENCIL8:S===hr&&(Y=r.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ln||S===ur?Y=r.DEPTH_COMPONENT24:S===an?Y=r.DEPTH_COMPONENT32F:S===hr&&(Y=r.DEPTH_COMPONENT16),Y}function A(N,S){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ce&&N.minFilter!==Pe?Math.log2(Math.max(S.width,S.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?S.mipmaps.length:1}function R(N){const S=N.target;S.removeEventListener("dispose",R),y(S),S.isVideoTexture&&u.delete(S)}function P(N){const S=N.target;S.removeEventListener("dispose",P),V(S)}function y(N){const S=n.get(N);if(S.__webglInit===void 0)return;const Y=N.source,rt=h.get(Y);if(rt){const mt=rt[S.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&w(N),Object.keys(rt).length===0&&h.delete(Y)}n.remove(N)}function w(N){const S=n.get(N);r.deleteTexture(S.__webglTexture);const Y=N.source,rt=h.get(Y);delete rt[S.__cacheKey],o.memory.textures--}function V(N){const S=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(S.__webglFramebuffer[rt]))for(let mt=0;mt<S.__webglFramebuffer[rt].length;mt++)r.deleteFramebuffer(S.__webglFramebuffer[rt][mt]);else r.deleteFramebuffer(S.__webglFramebuffer[rt]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[rt])}else{if(Array.isArray(S.__webglFramebuffer))for(let rt=0;rt<S.__webglFramebuffer.length;rt++)r.deleteFramebuffer(S.__webglFramebuffer[rt]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let rt=0;rt<S.__webglColorRenderbuffer.length;rt++)S.__webglColorRenderbuffer[rt]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[rt]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Y=N.textures;for(let rt=0,mt=Y.length;rt<mt;rt++){const ct=n.get(Y[rt]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(Y[rt])}n.remove(N)}let L=0;function B(){L=0}function F(){const N=L;return N>=i.maxTextures&&Ht("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),L+=1,N}function k(N){const S=[];return S.push(N.wrapS),S.push(N.wrapT),S.push(N.wrapR||0),S.push(N.magFilter),S.push(N.minFilter),S.push(N.anisotropy),S.push(N.internalFormat),S.push(N.format),S.push(N.type),S.push(N.generateMipmaps),S.push(N.premultiplyAlpha),S.push(N.flipY),S.push(N.unpackAlignment),S.push(N.colorSpace),S.join()}function U(N,S){const Y=n.get(N);if(N.isVideoTexture&&ht(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){const rt=N.image;if(rt===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{T(Y,N,S);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+S)}function D(N,S){const Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){T(Y,N,S);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+S)}function z(N,S){const Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){T(Y,N,S);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+S)}function X(N,S){const Y=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Y.__version!==N.version){E(Y,N,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+S)}const $={[ys]:r.REPEAT,[Rn]:r.CLAMP_TO_EDGE,[yo]:r.MIRRORED_REPEAT},ft={[Ce]:r.NEAREST,[Tu]:r.NEAREST_MIPMAP_NEAREST,[Qs]:r.NEAREST_MIPMAP_LINEAR,[Pe]:r.LINEAR,[po]:r.LINEAR_MIPMAP_NEAREST,[Zn]:r.LINEAR_MIPMAP_LINEAR},_t={[lf]:r.NEVER,[ff]:r.ALWAYS,[cf]:r.LESS,[kl]:r.LEQUAL,[hf]:r.EQUAL,[Vl]:r.GEQUAL,[uf]:r.GREATER,[df]:r.NOTEQUAL};function lt(N,S){if(S.type===an&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Pe||S.magFilter===po||S.magFilter===Qs||S.magFilter===Zn||S.minFilter===Pe||S.minFilter===po||S.minFilter===Qs||S.minFilter===Zn)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,$[S.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,$[S.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,$[S.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,ft[S.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,ft[S.minFilter]),S.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ce||S.minFilter!==Qs&&S.minFilter!==Zn||S.type===an&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ct(N,S){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,S.addEventListener("dispose",R));const rt=S.source;let mt=h.get(rt);mt===void 0&&(mt={},h.set(rt,mt));const ct=k(S);if(ct!==N.__cacheKey){mt[ct]===void 0&&(mt[ct]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),mt[ct].usedTimes++;const Pt=mt[N.__cacheKey];Pt!==void 0&&(mt[N.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(S)),N.__cacheKey=ct,N.__webglTexture=mt[ct].texture}return Y}function Z(N,S,Y){return Math.floor(Math.floor(N/Y)/S)}function G(N,S,Y,rt){const ct=N.updateRanges;if(ct.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,Y,rt,S.data);else{ct.sort((xt,St)=>xt.start-St.start);let Pt=0;for(let xt=1;xt<ct.length;xt++){const St=ct[Pt],Ut=ct[xt],Bt=St.start+St.count,It=Z(Ut.start,S.width,4),te=Z(St.start,S.width,4);Ut.start<=Bt+1&&It===te&&Z(Ut.start+Ut.count-1,S.width,4)===It?St.count=Math.max(St.count,Ut.start+Ut.count-St.start):(++Pt,ct[Pt]=Ut)}ct.length=Pt+1;const Mt=r.getParameter(r.UNPACK_ROW_LENGTH),kt=r.getParameter(r.UNPACK_SKIP_PIXELS),Xt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let xt=0,St=ct.length;xt<St;xt++){const Ut=ct[xt],Bt=Math.floor(Ut.start/4),It=Math.ceil(Ut.count/4),te=Bt%S.width,j=Math.floor(Bt/S.width),Tt=It,Et=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,te),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),e.texSubImage2D(r.TEXTURE_2D,0,te,j,Tt,Et,Y,rt,S.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Mt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Xt)}}function T(N,S,Y){let rt=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(rt=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(rt=r.TEXTURE_3D);const mt=Ct(N,S),ct=S.source;e.bindTexture(rt,N.__webglTexture,r.TEXTURE0+Y);const Pt=n.get(ct);if(ct.version!==Pt.__version||mt===!0){e.activeTexture(r.TEXTURE0+Y);const Mt=ie.getPrimaries(ie.workingColorSpace),kt=S.colorSpace===gi?null:ie.getPrimaries(S.colorSpace),Xt=S.colorSpace===gi||Mt===kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let xt=_(S.image,!1,i.maxTextureSize);xt=bt(S,xt);const St=s.convert(S.format,S.colorSpace),Ut=s.convert(S.type);let Bt=v(S.internalFormat,St,Ut,S.colorSpace,S.isVideoTexture);lt(rt,S);let It;const te=S.mipmaps,j=S.isVideoTexture!==!0,Tt=Pt.__version===void 0||mt===!0,Et=ct.dataReady,Nt=A(S,xt);if(S.isDepthTexture)Bt=M(S.format===Ui,S.type),Tt&&(j?e.texStorage2D(r.TEXTURE_2D,1,Bt,xt.width,xt.height):e.texImage2D(r.TEXTURE_2D,0,Bt,xt.width,xt.height,0,St,Ut,null));else if(S.isDataTexture)if(te.length>0){j&&Tt&&e.texStorage2D(r.TEXTURE_2D,Nt,Bt,te[0].width,te[0].height);for(let yt=0,ut=te.length;yt<ut;yt++)It=te[yt],j?Et&&e.texSubImage2D(r.TEXTURE_2D,yt,0,0,It.width,It.height,St,Ut,It.data):e.texImage2D(r.TEXTURE_2D,yt,Bt,It.width,It.height,0,St,Ut,It.data);S.generateMipmaps=!1}else j?(Tt&&e.texStorage2D(r.TEXTURE_2D,Nt,Bt,xt.width,xt.height),Et&&G(S,xt,St,Ut)):e.texImage2D(r.TEXTURE_2D,0,Bt,xt.width,xt.height,0,St,Ut,xt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){j&&Tt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Bt,te[0].width,te[0].height,xt.depth);for(let yt=0,ut=te.length;yt<ut;yt++)if(It=te[yt],S.format!==ln)if(St!==null)if(j){if(Et)if(S.layerUpdates.size>0){const Ot=yh(It.width,It.height,S.format,S.type);for(const Kt of S.layerUpdates){const pe=It.data.subarray(Kt*Ot/It.data.BYTES_PER_ELEMENT,(Kt+1)*Ot/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,yt,0,0,Kt,It.width,It.height,1,St,pe)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,yt,0,0,0,It.width,It.height,xt.depth,St,It.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,yt,Bt,It.width,It.height,xt.depth,0,It.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Et&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,yt,0,0,0,It.width,It.height,xt.depth,St,Ut,It.data):e.texImage3D(r.TEXTURE_2D_ARRAY,yt,Bt,It.width,It.height,xt.depth,0,St,Ut,It.data)}else{j&&Tt&&e.texStorage2D(r.TEXTURE_2D,Nt,Bt,te[0].width,te[0].height);for(let yt=0,ut=te.length;yt<ut;yt++)It=te[yt],S.format!==ln?St!==null?j?Et&&e.compressedTexSubImage2D(r.TEXTURE_2D,yt,0,0,It.width,It.height,St,It.data):e.compressedTexImage2D(r.TEXTURE_2D,yt,Bt,It.width,It.height,0,It.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Et&&e.texSubImage2D(r.TEXTURE_2D,yt,0,0,It.width,It.height,St,Ut,It.data):e.texImage2D(r.TEXTURE_2D,yt,Bt,It.width,It.height,0,St,Ut,It.data)}else if(S.isDataArrayTexture)if(j){if(Tt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Bt,xt.width,xt.height,xt.depth),Et)if(S.layerUpdates.size>0){const yt=yh(xt.width,xt.height,S.format,S.type);for(const ut of S.layerUpdates){const Ot=xt.data.subarray(ut*yt/xt.data.BYTES_PER_ELEMENT,(ut+1)*yt/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ut,xt.width,xt.height,1,St,Ut,Ot)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,St,Ut,xt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Bt,xt.width,xt.height,xt.depth,0,St,Ut,xt.data);else if(S.isData3DTexture)j?(Tt&&e.texStorage3D(r.TEXTURE_3D,Nt,Bt,xt.width,xt.height,xt.depth),Et&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,St,Ut,xt.data)):e.texImage3D(r.TEXTURE_3D,0,Bt,xt.width,xt.height,xt.depth,0,St,Ut,xt.data);else if(S.isFramebufferTexture){if(Tt)if(j)e.texStorage2D(r.TEXTURE_2D,Nt,Bt,xt.width,xt.height);else{let yt=xt.width,ut=xt.height;for(let Ot=0;Ot<Nt;Ot++)e.texImage2D(r.TEXTURE_2D,Ot,Bt,yt,ut,0,St,Ut,null),yt>>=1,ut>>=1}}else if(te.length>0){if(j&&Tt){const yt=vt(te[0]);e.texStorage2D(r.TEXTURE_2D,Nt,Bt,yt.width,yt.height)}for(let yt=0,ut=te.length;yt<ut;yt++)It=te[yt],j?Et&&e.texSubImage2D(r.TEXTURE_2D,yt,0,0,St,Ut,It):e.texImage2D(r.TEXTURE_2D,yt,Bt,St,Ut,It);S.generateMipmaps=!1}else if(j){if(Tt){const yt=vt(xt);e.texStorage2D(r.TEXTURE_2D,Nt,Bt,yt.width,yt.height)}Et&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,St,Ut,xt)}else e.texImage2D(r.TEXTURE_2D,0,Bt,St,Ut,xt);m(S)&&g(rt),Pt.__version=ct.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function E(N,S,Y){if(S.image.length!==6)return;const rt=Ct(N,S),mt=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+Y);const ct=n.get(mt);if(mt.version!==ct.__version||rt===!0){e.activeTexture(r.TEXTURE0+Y);const Pt=ie.getPrimaries(ie.workingColorSpace),Mt=S.colorSpace===gi?null:ie.getPrimaries(S.colorSpace),kt=S.colorSpace===gi||Pt===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const Xt=S.isCompressedTexture||S.image[0].isCompressedTexture,xt=S.image[0]&&S.image[0].isDataTexture,St=[];for(let ut=0;ut<6;ut++)!Xt&&!xt?St[ut]=_(S.image[ut],!0,i.maxCubemapSize):St[ut]=xt?S.image[ut].image:S.image[ut],St[ut]=bt(S,St[ut]);const Ut=St[0],Bt=s.convert(S.format,S.colorSpace),It=s.convert(S.type),te=v(S.internalFormat,Bt,It,S.colorSpace),j=S.isVideoTexture!==!0,Tt=ct.__version===void 0||rt===!0,Et=mt.dataReady;let Nt=A(S,Ut);lt(r.TEXTURE_CUBE_MAP,S);let yt;if(Xt){j&&Tt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,te,Ut.width,Ut.height);for(let ut=0;ut<6;ut++){yt=St[ut].mipmaps;for(let Ot=0;Ot<yt.length;Ot++){const Kt=yt[Ot];S.format!==ln?Bt!==null?j?Et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot,0,0,Kt.width,Kt.height,Bt,Kt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot,te,Kt.width,Kt.height,0,Kt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot,0,0,Kt.width,Kt.height,Bt,It,Kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot,te,Kt.width,Kt.height,0,Bt,It,Kt.data)}}}else{if(yt=S.mipmaps,j&&Tt){yt.length>0&&Nt++;const ut=vt(St[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,te,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(xt){j?Et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,St[ut].width,St[ut].height,Bt,It,St[ut].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,te,St[ut].width,St[ut].height,0,Bt,It,St[ut].data);for(let Ot=0;Ot<yt.length;Ot++){const pe=yt[Ot].image[ut].image;j?Et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot+1,0,0,pe.width,pe.height,Bt,It,pe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot+1,te,pe.width,pe.height,0,Bt,It,pe.data)}}else{j?Et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Bt,It,St[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,te,Bt,It,St[ut]);for(let Ot=0;Ot<yt.length;Ot++){const Kt=yt[Ot];j?Et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot+1,0,0,Bt,It,Kt.image[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot+1,te,Bt,It,Kt.image[ut])}}}m(S)&&g(r.TEXTURE_CUBE_MAP),ct.__version=mt.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function W(N,S,Y,rt,mt,ct){const Pt=s.convert(Y.format,Y.colorSpace),Mt=s.convert(Y.type),kt=v(Y.internalFormat,Pt,Mt,Y.colorSpace),Xt=n.get(S),xt=n.get(Y);if(xt.__renderTarget=S,!Xt.__hasExternalTextures){const St=Math.max(1,S.width>>ct),Ut=Math.max(1,S.height>>ct);mt===r.TEXTURE_3D||mt===r.TEXTURE_2D_ARRAY?e.texImage3D(mt,ct,kt,St,Ut,S.depth,0,Pt,Mt,null):e.texImage2D(mt,ct,kt,St,Ut,0,Pt,Mt,null)}e.bindFramebuffer(r.FRAMEBUFFER,N),O(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,mt,xt.__webglTexture,0,b(S)):(mt===r.TEXTURE_2D||mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,rt,mt,xt.__webglTexture,ct),e.bindFramebuffer(r.FRAMEBUFFER,null)}function it(N,S,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,N),S.depthBuffer){const rt=S.depthTexture,mt=rt&&rt.isDepthTexture?rt.type:null,ct=M(S.stencilBuffer,mt),Pt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;O(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,b(S),ct,S.width,S.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,b(S),ct,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ct,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pt,r.RENDERBUFFER,N)}else{const rt=S.textures;for(let mt=0;mt<rt.length;mt++){const ct=rt[mt],Pt=s.convert(ct.format,ct.colorSpace),Mt=s.convert(ct.type),kt=v(ct.internalFormat,Pt,Mt,ct.colorSpace);O(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,b(S),kt,S.width,S.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,b(S),kt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,kt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function K(N,S,Y){const rt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,N),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=n.get(S.depthTexture);if(mt.__renderTarget=S,(!mt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),rt){if(mt.__webglInit===void 0&&(mt.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),mt.__webglTexture===void 0){mt.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),lt(r.TEXTURE_CUBE_MAP,S.depthTexture);const Xt=s.convert(S.depthTexture.format),xt=s.convert(S.depthTexture.type);let St;S.depthTexture.format===ii?St=r.DEPTH_COMPONENT24:S.depthTexture.format===Ui&&(St=r.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,St,S.width,S.height,0,Xt,xt,null)}}else U(S.depthTexture,0);const ct=mt.__webglTexture,Pt=b(S),Mt=rt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,kt=S.depthTexture.format===Ui?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===ii)O(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,kt,Mt,ct,0,Pt):r.framebufferTexture2D(r.FRAMEBUFFER,kt,Mt,ct,0);else if(S.depthTexture.format===Ui)O(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,kt,Mt,ct,0,Pt):r.framebufferTexture2D(r.FRAMEBUFFER,kt,Mt,ct,0);else throw new Error("Unknown depthTexture format")}function ot(N){const S=n.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==N.depthTexture){const rt=N.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),rt){const mt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,rt.removeEventListener("dispose",mt)};rt.addEventListener("dispose",mt),S.__depthDisposeCallback=mt}S.__boundDepthTexture=rt}if(N.depthTexture&&!S.__autoAllocateDepthBuffer)if(Y)for(let rt=0;rt<6;rt++)K(S.__webglFramebuffer[rt],N,rt);else{const rt=N.texture.mipmaps;rt&&rt.length>0?K(S.__webglFramebuffer[0],N,0):K(S.__webglFramebuffer,N,0)}else if(Y){S.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[rt]),S.__webglDepthbuffer[rt]===void 0)S.__webglDepthbuffer[rt]=r.createRenderbuffer(),it(S.__webglDepthbuffer[rt],N,!1);else{const mt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=S.__webglDepthbuffer[rt];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}else{const rt=N.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),it(S.__webglDepthbuffer,N,!1);else{const mt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function gt(N,S,Y){const rt=n.get(N);S!==void 0&&W(rt.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&ot(N)}function pt(N){const S=N.texture,Y=n.get(N),rt=n.get(S);N.addEventListener("dispose",P);const mt=N.textures,ct=N.isWebGLCubeRenderTarget===!0,Pt=mt.length>1;if(Pt||(rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture()),rt.__version=S.version,o.memory.textures++),ct){Y.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[Mt]=[];for(let kt=0;kt<S.mipmaps.length;kt++)Y.__webglFramebuffer[Mt][kt]=r.createFramebuffer()}else Y.__webglFramebuffer[Mt]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)Y.__webglFramebuffer[Mt]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Pt)for(let Mt=0,kt=mt.length;Mt<kt;Mt++){const Xt=n.get(mt[Mt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),o.memory.textures++)}if(N.samples>0&&O(N)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Mt=0;Mt<mt.length;Mt++){const kt=mt[Mt];Y.__webglColorRenderbuffer[Mt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Mt]);const Xt=s.convert(kt.format,kt.colorSpace),xt=s.convert(kt.type),St=v(kt.internalFormat,Xt,xt,kt.colorSpace,N.isXRRenderTarget===!0),Ut=b(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,St,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Mt])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),it(Y.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){e.bindTexture(r.TEXTURE_CUBE_MAP,rt.__webglTexture),lt(r.TEXTURE_CUBE_MAP,S);for(let Mt=0;Mt<6;Mt++)if(S.mipmaps&&S.mipmaps.length>0)for(let kt=0;kt<S.mipmaps.length;kt++)W(Y.__webglFramebuffer[Mt][kt],N,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt);else W(Y.__webglFramebuffer[Mt],N,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);m(S)&&g(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let Mt=0,kt=mt.length;Mt<kt;Mt++){const Xt=mt[Mt],xt=n.get(Xt);let St=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(St=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(St,xt.__webglTexture),lt(St,Xt),W(Y.__webglFramebuffer,N,Xt,r.COLOR_ATTACHMENT0+Mt,St,0),m(Xt)&&g(St)}e.unbindTexture()}else{let Mt=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Mt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Mt,rt.__webglTexture),lt(Mt,S),S.mipmaps&&S.mipmaps.length>0)for(let kt=0;kt<S.mipmaps.length;kt++)W(Y.__webglFramebuffer[kt],N,S,r.COLOR_ATTACHMENT0,Mt,kt);else W(Y.__webglFramebuffer,N,S,r.COLOR_ATTACHMENT0,Mt,0);m(S)&&g(Mt),e.unbindTexture()}N.depthBuffer&&ot(N)}function q(N){const S=N.textures;for(let Y=0,rt=S.length;Y<rt;Y++){const mt=S[Y];if(m(mt)){const ct=x(N),Pt=n.get(mt).__webglTexture;e.bindTexture(ct,Pt),g(ct),e.unbindTexture()}}}const Q=[],tt=[];function at(N){if(N.samples>0){if(O(N)===!1){const S=N.textures,Y=N.width,rt=N.height;let mt=r.COLOR_BUFFER_BIT;const ct=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=n.get(N),Mt=S.length>1;if(Mt)for(let Xt=0;Xt<S.length;Xt++)e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const kt=N.texture.mipmaps;kt&&kt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Xt=0;Xt<S.length;Xt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(mt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(mt|=r.STENCIL_BUFFER_BIT)),Mt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[Xt]);const xt=n.get(S[Xt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xt,0)}r.blitFramebuffer(0,0,Y,rt,0,0,Y,rt,mt,r.NEAREST),l===!0&&(Q.length=0,tt.length=0,Q.push(r.COLOR_ATTACHMENT0+Xt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Q.push(ct),tt.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,tt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Mt)for(let Xt=0;Xt<S.length;Xt++){e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[Xt]);const xt=n.get(S[Xt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.TEXTURE_2D,xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const S=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function b(N){return Math.min(i.maxSamples,N.samples)}function O(N){const S=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ht(N){const S=o.render.frame;u.get(N)!==S&&(u.set(N,S),N.update())}function bt(N,S){const Y=N.colorSpace,rt=N.format,mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==Ye&&Y!==gi&&(ie.getTransfer(Y)===ae?(rt!==ln||mt!==en)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",Y)),S}function vt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=U,this.setTexture2DArray=D,this.setTexture3D=z,this.setTextureCube=X,this.rebindTextures=gt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=W,this.useMultisampledRTT=O,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function vv(r,t){function e(n,i=gi){let s;const o=ie.getTransfer(i);if(n===en)return r.UNSIGNED_BYTE;if(n===Dl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Fl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ru)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Cu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===wu)return r.BYTE;if(n===Au)return r.SHORT;if(n===hr)return r.UNSIGNED_SHORT;if(n===Nl)return r.INT;if(n===Ln)return r.UNSIGNED_INT;if(n===an)return r.FLOAT;if(n===ni)return r.HALF_FLOAT;if(n===Pu)return r.ALPHA;if(n===Iu)return r.RGB;if(n===ln)return r.RGBA;if(n===ii)return r.DEPTH_COMPONENT;if(n===Ui)return r.DEPTH_STENCIL;if(n===Ul)return r.RED;if(n===Ol)return r.RED_INTEGER;if(n===Ms)return r.RG;if(n===Bl)return r.RG_INTEGER;if(n===zl)return r.RGBA_INTEGER;if(n===mo||n===go||n===_o||n===xo)if(o===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Ga||n===Wa||n===Xa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===Ya||n===ja||n===Ka||n===Za||n===$a||n===Ja)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===qa||n===Ya)return o===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ja)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ka)return s.COMPRESSED_R11_EAC;if(n===Za)return s.COMPRESSED_SIGNED_R11_EAC;if(n===$a)return s.COMPRESSED_RG11_EAC;if(n===Ja)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ol)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fl||n===pl||n===ml)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===fl)return o===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gl||n===_l||n===xl||n===vl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===gl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Yu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Nn({vertexShader:yv,fragmentShader:Mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new Es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bv extends zi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",m=new Sv,g={},x=e.getContextAttributes();let v=null,M=null;const A=[],R=[],P=new dt;let y=null;const w=new Xe;w.viewport=new me;const V=new Xe;V.viewport=new me;const L=[w,V],B=new Mm;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let E=A[T];return E===void 0&&(E=new Wo,A[T]=E),E.getTargetRaySpace()},this.getControllerGrip=function(T){let E=A[T];return E===void 0&&(E=new Wo,A[T]=E),E.getGripSpace()},this.getHand=function(T){let E=A[T];return E===void 0&&(E=new Wo,A[T]=E),E.getHandSpace()};function U(T){const E=R.indexOf(T.inputSource);if(E===-1)return;const W=A[E];W!==void 0&&(W.update(T.inputSource,T.frame,c||o),W.dispatchEvent({type:T.type,data:T.inputSource}))}function D(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",z);for(let T=0;T<A.length;T++){const E=R[T];E!==null&&(R[T]=null,A[T].disconnect(E))}F=null,k=null,m.reset();for(const T in g)delete g[T];t.setRenderTarget(v),f=null,h=null,d=null,i=null,M=null,G.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){s=T,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){a=T,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(T){c=T},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(T){if(i=T,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",D),i.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,it=null,K=null;x.depth&&(K=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=x.stencil?Ui:ii,it=x.stencil?ur:Ln);const ot={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(ot),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new In(h.textureWidth,h.textureHeight,{format:ln,type:en,depthTexture:new _r(h.textureWidth,h.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const W={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,W),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new In(f.framebufferWidth,f.framebufferHeight,{format:ln,type:en,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(T){for(let E=0;E<T.removed.length;E++){const W=T.removed[E],it=R.indexOf(W);it>=0&&(R[it]=null,A[it].disconnect(W))}for(let E=0;E<T.added.length;E++){const W=T.added[E];let it=R.indexOf(W);if(it===-1){for(let ot=0;ot<A.length;ot++)if(ot>=R.length){R.push(W),it=ot;break}else if(R[ot]===null){R[ot]=W,it=ot;break}if(it===-1)break}const K=A[it];K&&K.connect(W)}}const X=new H,$=new H;function ft(T,E,W){X.setFromMatrixPosition(E.matrixWorld),$.setFromMatrixPosition(W.matrixWorld);const it=X.distanceTo($),K=E.projectionMatrix.elements,ot=W.projectionMatrix.elements,gt=K[14]/(K[10]-1),pt=K[14]/(K[10]+1),q=(K[9]+1)/K[5],Q=(K[9]-1)/K[5],tt=(K[8]-1)/K[0],at=(ot[8]+1)/ot[0],b=gt*tt,O=gt*at,ht=it/(-tt+at),bt=ht*-tt;if(E.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(bt),T.translateZ(ht),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),K[10]===-1)T.projectionMatrix.copy(E.projectionMatrix),T.projectionMatrixInverse.copy(E.projectionMatrixInverse);else{const vt=gt+ht,N=pt+ht,S=b-bt,Y=O+(it-bt),rt=q*pt/N*vt,mt=Q*pt/N*vt;T.projectionMatrix.makePerspective(S,Y,rt,mt,vt,N),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}}function _t(T,E){E===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(E.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(i===null)return;let E=T.near,W=T.far;m.texture!==null&&(m.depthNear>0&&(E=m.depthNear),m.depthFar>0&&(W=m.depthFar)),B.near=V.near=w.near=E,B.far=V.far=w.far=W,(F!==B.near||k!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),F=B.near,k=B.far),B.layers.mask=T.layers.mask|6,w.layers.mask=B.layers.mask&-5,V.layers.mask=B.layers.mask&-3;const it=T.parent,K=B.cameras;_t(B,it);for(let ot=0;ot<K.length;ot++)_t(K[ot],it);K.length===2?ft(B,w,V):B.projectionMatrix.copy(w.projectionMatrix),lt(T,B,it)};function lt(T,E,W){W===null?T.matrix.copy(E.matrixWorld):(T.matrix.copy(W.matrixWorld),T.matrix.invert(),T.matrix.multiply(E.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(E.projectionMatrix),T.projectionMatrixInverse.copy(E.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=Ss*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(T){l=T,h!==null&&(h.fixedFoveation=T),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=T)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(T){return g[T]};let Ct=null;function Z(T,E){if(u=E.getViewerPose(c||o),p=E,u!==null){const W=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let it=!1;W.length!==B.cameras.length&&(B.cameras.length=0,it=!0);for(let pt=0;pt<W.length;pt++){const q=W[pt];let Q=null;if(f!==null)Q=f.getViewport(q);else{const at=d.getViewSubImage(h,q);Q=at.viewport,pt===0&&(t.setRenderTargetTextures(M,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(M))}let tt=L[pt];tt===void 0&&(tt=new Xe,tt.layers.enable(pt),tt.viewport=new me,L[pt]=tt),tt.matrix.fromArray(q.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(q.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Q.x,Q.y,Q.width,Q.height),pt===0&&(B.matrix.copy(tt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),it===!0&&B.cameras.push(tt)}const K=i.enabledFeatures;if(K&&K.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const pt=d.getDepthInformation(W[0]);pt&&pt.isValid&&pt.texture&&m.init(pt,i.renderState)}if(K&&K.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let pt=0;pt<W.length;pt++){const q=W[pt].camera;if(q){let Q=g[q];Q||(Q=new Yu,g[q]=Q);const tt=d.getCameraImage(q);Q.sourceTexture=tt}}}}for(let W=0;W<A.length;W++){const it=R[W],K=A[W];it!==null&&K!==void 0&&K.update(it,E,c||o)}Ct&&Ct(T,E),E.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:E}),p=null}const G=new ad;G.setAnimationLoop(Z),this.setAnimationLoop=function(T){Ct=T},this.dispose=function(){}}}const Ci=new Ve,Ev=new Zt;function Tv(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,nd(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,v,M){g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ze&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ze&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=t.get(g),v=x.envMap,M=x.envMapRotation;v&&(m.envMap.value=v,Ci.copy(M),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(Ci)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=v*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ze&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wv(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function c(x,v){let M=i[x.id];M===void 0&&(p(x),M=u(x),i[x.id]=M,x.addEventListener("dispose",m));const A=v.program;n.updateUBOMapping(x,A);const R=t.render.frame;s[x.id]!==R&&(h(x),s[x.id]=R)}function u(x){const v=d();x.__bindingPointIndex=v;const M=r.createBuffer(),A=x.__size,R=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=i[x.id],M=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let R=0,P=M.length;R<P;R++){const y=Array.isArray(M[R])?M[R]:[M[R]];for(let w=0,V=y.length;w<V;w++){const L=y[w];if(f(L,R,w,A)===!0){const B=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let U=0;U<F.length;U++){const D=F[U],z=_(D);typeof D=="number"||typeof D=="boolean"?(L.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,B+k,L.__data)):D.isMatrix3?(L.__data[0]=D.elements[0],L.__data[1]=D.elements[1],L.__data[2]=D.elements[2],L.__data[3]=0,L.__data[4]=D.elements[3],L.__data[5]=D.elements[4],L.__data[6]=D.elements[5],L.__data[7]=0,L.__data[8]=D.elements[6],L.__data[9]=D.elements[7],L.__data[10]=D.elements[8],L.__data[11]=0):(D.toArray(L.__data,k),k+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,v,M,A){const R=x.value,P=v+"_"+M;if(A[P]===void 0)return typeof R=="number"||typeof R=="boolean"?A[P]=R:A[P]=R.clone(),!0;{const y=A[P];if(typeof R=="number"||typeof R=="boolean"){if(y!==R)return A[P]=R,!0}else if(y.equals(R)===!1)return y.copy(R),!0}return!1}function p(x){const v=x.uniforms;let M=0;const A=16;for(let P=0,y=v.length;P<y;P++){const w=Array.isArray(v[P])?v[P]:[v[P]];for(let V=0,L=w.length;V<L;V++){const B=w[V],F=Array.isArray(B.value)?B.value:[B.value];for(let k=0,U=F.length;k<U;k++){const D=F[k],z=_(D),X=M%A,$=X%z.boundary,ft=X+$;M+=$,ft!==0&&A-ft<z.storage&&(M+=A-ft),B.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=z.storage}}}const R=M%A;return R>0&&(M+=A-R),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ht("WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function g(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}const Av=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function Rv(){return Sn===null&&(Sn=new ql(Av,16,16,Ms,ni),Sn.name="DFG_LUT",Sn.minFilter=Pe,Sn.magFilter=Pe,Sn.wrapS=Rn,Sn.wrapT=Rn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class Cv{constructor(t={}){const{canvas:e=gf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=en}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=f,m=new Set([zl,Bl,Ol]),g=new Set([en,Ln,hr,ur,Dl,Fl]),x=new Uint32Array(4),v=new Int32Array(4);let M=null,A=null;const R=[],P=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let V=!1;this._outputColorSpace=Re;let L=0,B=0,F=null,k=-1,U=null;const D=new me,z=new me;let X=null;const $=new Yt(0);let ft=0,_t=e.width,lt=e.height,Ct=1,Z=null,G=null;const T=new me(0,0,_t,lt),E=new me(0,0,_t,lt);let W=!1;const it=new jl;let K=!1,ot=!1;const gt=new Zt,pt=new H,q=new me,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function at(){return F===null?Ct:1}let b=n;function O(I,J){return e.getContext(I,J)}try{const I={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r183"),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",Kt,!1),e.addEventListener("webglcontextcreationerror",pe,!1),b===null){const J="webgl2";if(b=O(J,I),b===null)throw O(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw qt("WebGLRenderer: "+I.message),I}let ht,bt,vt,N,S,Y,rt,mt,ct,Pt,Mt,kt,Xt,xt,St,Ut,Bt,It,te,j,Tt,Et,Nt;function yt(){ht=new C_(b),ht.init(),Tt=new vv(b,ht),bt=new M_(b,ht,t,Tt),vt=new _v(b,ht),bt.reversedDepthBuffer&&h&&vt.buffers.depth.setReversed(!0),N=new L_(b),S=new iv,Y=new xv(b,ht,vt,S,bt,Tt,N),rt=new R_(w),mt=new Om(b),Et=new v_(b,mt),ct=new P_(b,mt,N,Et),Pt=new D_(b,ct,mt,Et,N),It=new N_(b,bt,Y),St=new S_(S),Mt=new nv(w,rt,ht,bt,Et,St),kt=new Tv(w,S),Xt=new rv,xt=new uv(ht),Bt=new x_(w,rt,vt,Pt,p,l),Ut=new gv(w,Pt,bt),Nt=new wv(b,N,bt,vt),te=new y_(b,ht,N),j=new I_(b,ht,N),N.programs=Mt.programs,w.capabilities=bt,w.extensions=ht,w.properties=S,w.renderLists=Xt,w.shadowMap=Ut,w.state=vt,w.info=N}yt(),_!==en&&(y=new U_(_,e.width,e.height,i,s));const ut=new bv(w,b);this.xr=ut,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const I=ht.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ht.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Ct},this.setPixelRatio=function(I){I!==void 0&&(Ct=I,this.setSize(_t,lt,!1))},this.getSize=function(I){return I.set(_t,lt)},this.setSize=function(I,J,st=!0){if(ut.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=I,lt=J,e.width=Math.floor(I*Ct),e.height=Math.floor(J*Ct),st===!0&&(e.style.width=I+"px",e.style.height=J+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,I,J)},this.getDrawingBufferSize=function(I){return I.set(_t*Ct,lt*Ct).floor()},this.setDrawingBufferSize=function(I,J,st){_t=I,lt=J,Ct=st,e.width=Math.floor(I*st),e.height=Math.floor(J*st),this.setViewport(0,0,I,J)},this.setEffects=function(I){if(_===en){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let J=0;J<I.length;J++)if(I[J].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(D)},this.getViewport=function(I){return I.copy(T)},this.setViewport=function(I,J,st,nt){I.isVector4?T.set(I.x,I.y,I.z,I.w):T.set(I,J,st,nt),vt.viewport(D.copy(T).multiplyScalar(Ct).round())},this.getScissor=function(I){return I.copy(E)},this.setScissor=function(I,J,st,nt){I.isVector4?E.set(I.x,I.y,I.z,I.w):E.set(I,J,st,nt),vt.scissor(z.copy(E).multiplyScalar(Ct).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(I){vt.setScissorTest(W=I)},this.setOpaqueSort=function(I){Z=I},this.setTransparentSort=function(I){G=I},this.getClearColor=function(I){return I.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(I=!0,J=!0,st=!0){let nt=0;if(I){let et=!1;if(F!==null){const At=F.texture.format;et=m.has(At)}if(et){const At=F.texture.type,Lt=g.has(At),Rt=Bt.getClearColor(),zt=Bt.getClearAlpha(),Gt=Rt.r,$t=Rt.g,ee=Rt.b;Lt?(x[0]=Gt,x[1]=$t,x[2]=ee,x[3]=zt,b.clearBufferuiv(b.COLOR,0,x)):(v[0]=Gt,v[1]=$t,v[2]=ee,v[3]=zt,b.clearBufferiv(b.COLOR,0,v))}else nt|=b.COLOR_BUFFER_BIT}J&&(nt|=b.DEPTH_BUFFER_BIT),st&&(nt|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&b.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),Bt.dispose(),Xt.dispose(),xt.dispose(),S.dispose(),rt.dispose(),Pt.dispose(),Et.dispose(),Nt.dispose(),Mt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",cc),ut.removeEventListener("sessionend",hc),Mi.stop()};function Ot(I){I.preventDefault(),So("WebGLRenderer: Context Lost."),V=!0}function Kt(){So("WebGLRenderer: Context Restored."),V=!1;const I=N.autoReset,J=Ut.enabled,st=Ut.autoUpdate,nt=Ut.needsUpdate,et=Ut.type;yt(),N.autoReset=I,Ut.enabled=J,Ut.autoUpdate=st,Ut.needsUpdate=nt,Ut.type=et}function pe(I){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function oe(I){const J=I.target;J.removeEventListener("dispose",oe),On(J)}function On(I){Bn(I),S.remove(I)}function Bn(I){const J=S.get(I).programs;J!==void 0&&(J.forEach(function(st){Mt.releaseProgram(st)}),I.isShaderMaterial&&Mt.releaseShaderCache(I))}this.renderBufferDirect=function(I,J,st,nt,et,At){J===null&&(J=Q);const Lt=et.isMesh&&et.matrixWorld.determinant()<0,Rt=Ad(I,J,st,nt,et);vt.setMaterial(nt,Lt);let zt=st.index,Gt=1;if(nt.wireframe===!0){if(zt=ct.getWireframeAttribute(st),zt===void 0)return;Gt=2}const $t=st.drawRange,ee=st.attributes.position;let Wt=$t.start*Gt,he=($t.start+$t.count)*Gt;At!==null&&(Wt=Math.max(Wt,At.start*Gt),he=Math.min(he,(At.start+At.count)*Gt)),zt!==null?(Wt=Math.max(Wt,0),he=Math.min(he,zt.count)):ee!=null&&(Wt=Math.max(Wt,0),he=Math.min(he,ee.count));const Me=he-Wt;if(Me<0||Me===1/0)return;Et.setup(et,nt,Rt,st,zt);let ve,ue=te;if(zt!==null&&(ve=mt.get(zt),ue=j,ue.setIndex(ve)),et.isMesh)nt.wireframe===!0?(vt.setLineWidth(nt.wireframeLinewidth*at()),ue.setMode(b.LINES)):ue.setMode(b.TRIANGLES);else if(et.isLine){let Be=nt.linewidth;Be===void 0&&(Be=1),vt.setLineWidth(Be*at()),et.isLineSegments?ue.setMode(b.LINES):et.isLineLoop?ue.setMode(b.LINE_LOOP):ue.setMode(b.LINE_STRIP)}else et.isPoints?ue.setMode(b.POINTS):et.isSprite&&ue.setMode(b.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)bo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))ue.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const Be=et._multiDrawStarts,Vt=et._multiDrawCounts,Je=et._multiDrawCount,se=zt?mt.get(zt).bytesPerElement:1,hn=S.get(nt).currentProgram.getUniforms();for(let yn=0;yn<Je;yn++)hn.setValue(b,"_gl_DrawID",yn),ue.render(Be[yn]/se,Vt[yn])}else if(et.isInstancedMesh)ue.renderInstances(Wt,Me,et.count);else if(st.isInstancedBufferGeometry){const Be=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Vt=Math.min(st.instanceCount,Be);ue.renderInstances(Wt,Me,Vt)}else ue.render(Wt,Me)};function lc(I,J,st){I.transparent===!0&&I.side===mn&&I.forceSinglePass===!1?(I.side=Ze,I.needsUpdate=!0,Tr(I,J,st),I.side=ei,I.needsUpdate=!0,Tr(I,J,st),I.side=mn):Tr(I,J,st)}this.compile=function(I,J,st=null){st===null&&(st=I),A=xt.get(st),A.init(J),P.push(A),st.traverseVisible(function(et){et.isLight&&et.layers.test(J.layers)&&(A.pushLight(et),et.castShadow&&A.pushShadow(et))}),I!==st&&I.traverseVisible(function(et){et.isLight&&et.layers.test(J.layers)&&(A.pushLight(et),et.castShadow&&A.pushShadow(et))}),A.setupLights();const nt=new Set;return I.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const At=et.material;if(At)if(Array.isArray(At))for(let Lt=0;Lt<At.length;Lt++){const Rt=At[Lt];lc(Rt,st,et),nt.add(Rt)}else lc(At,st,et),nt.add(At)}),A=P.pop(),nt},this.compileAsync=function(I,J,st=null){const nt=this.compile(I,J,st);return new Promise(et=>{function At(){if(nt.forEach(function(Lt){S.get(Lt).currentProgram.isReady()&&nt.delete(Lt)}),nt.size===0){et(I);return}setTimeout(At,10)}ht.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Do=null;function wd(I){Do&&Do(I)}function cc(){Mi.stop()}function hc(){Mi.start()}const Mi=new ad;Mi.setAnimationLoop(wd),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(I){Do=I,ut.setAnimationLoop(I),I===null?Mi.stop():Mi.start()},ut.addEventListener("sessionstart",cc),ut.addEventListener("sessionend",hc),this.render=function(I,J){if(J!==void 0&&J.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;const st=ut.enabled===!0&&ut.isPresenting===!0,nt=y!==null&&(F===null||st)&&y.begin(w,F);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(J),J=ut.getCamera()),I.isScene===!0&&I.onBeforeRender(w,I,J,F),A=xt.get(I,P.length),A.init(J),P.push(A),gt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),it.setFromProjectionMatrix(gt,Cn,J.reversedDepth),ot=this.localClippingEnabled,K=St.init(this.clippingPlanes,ot),M=Xt.get(I,R.length),M.init(),R.push(M),ut.enabled===!0&&ut.isPresenting===!0){const Lt=w.xr.getDepthSensingMesh();Lt!==null&&Fo(Lt,J,-1/0,w.sortObjects)}Fo(I,J,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(Z,G),tt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,tt&&Bt.addToRenderList(M,I),this.info.render.frame++,K===!0&&St.beginShadows();const et=A.state.shadowsArray;if(Ut.render(et,I,J),K===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt&&y.hasRenderPass())===!1){const Lt=M.opaque,Rt=M.transmissive;if(A.setupLights(),J.isArrayCamera){const zt=J.cameras;if(Rt.length>0)for(let Gt=0,$t=zt.length;Gt<$t;Gt++){const ee=zt[Gt];dc(Lt,Rt,I,ee)}tt&&Bt.render(I);for(let Gt=0,$t=zt.length;Gt<$t;Gt++){const ee=zt[Gt];uc(M,I,ee,ee.viewport)}}else Rt.length>0&&dc(Lt,Rt,I,J),tt&&Bt.render(I),uc(M,I,J)}F!==null&&B===0&&(Y.updateMultisampleRenderTarget(F),Y.updateRenderTargetMipmap(F)),nt&&y.end(w),I.isScene===!0&&I.onAfterRender(w,I,J),Et.resetDefaultState(),k=-1,U=null,P.pop(),P.length>0?(A=P[P.length-1],K===!0&&St.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?M=R[R.length-1]:M=null};function Fo(I,J,st,nt){if(I.visible===!1)return;if(I.layers.test(J.layers)){if(I.isGroup)st=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(J);else if(I.isLight)A.pushLight(I),I.castShadow&&A.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||it.intersectsSprite(I)){nt&&q.setFromMatrixPosition(I.matrixWorld).applyMatrix4(gt);const Lt=Pt.update(I),Rt=I.material;Rt.visible&&M.push(I,Lt,Rt,st,q.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||it.intersectsObject(I))){const Lt=Pt.update(I),Rt=I.material;if(nt&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),q.copy(I.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),q.copy(Lt.boundingSphere.center)),q.applyMatrix4(I.matrixWorld).applyMatrix4(gt)),Array.isArray(Rt)){const zt=Lt.groups;for(let Gt=0,$t=zt.length;Gt<$t;Gt++){const ee=zt[Gt],Wt=Rt[ee.materialIndex];Wt&&Wt.visible&&M.push(I,Lt,Wt,st,q.z,ee)}}else Rt.visible&&M.push(I,Lt,Rt,st,q.z,null)}}const At=I.children;for(let Lt=0,Rt=At.length;Lt<Rt;Lt++)Fo(At[Lt],J,st,nt)}function uc(I,J,st,nt){const{opaque:et,transmissive:At,transparent:Lt}=I;A.setupLightsView(st),K===!0&&St.setGlobalState(w.clippingPlanes,st),nt&&vt.viewport(D.copy(nt)),et.length>0&&Er(et,J,st),At.length>0&&Er(At,J,st),Lt.length>0&&Er(Lt,J,st),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function dc(I,J,st,nt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[nt.id]===void 0){const Wt=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[nt.id]=new In(1,1,{generateMipmaps:!0,type:Wt?ni:en,minFilter:Zn,samples:Math.max(4,bt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace})}const At=A.state.transmissionRenderTarget[nt.id],Lt=nt.viewport||D;At.setSize(Lt.z*w.transmissionResolutionScale,Lt.w*w.transmissionResolutionScale);const Rt=w.getRenderTarget(),zt=w.getActiveCubeFace(),Gt=w.getActiveMipmapLevel();w.setRenderTarget(At),w.getClearColor($),ft=w.getClearAlpha(),ft<1&&w.setClearColor(16777215,.5),w.clear(),tt&&Bt.render(st);const $t=w.toneMapping;w.toneMapping=Pn;const ee=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),A.setupLightsView(nt),K===!0&&St.setGlobalState(w.clippingPlanes,nt),Er(I,st,nt),Y.updateMultisampleRenderTarget(At),Y.updateRenderTargetMipmap(At),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let he=0,Me=J.length;he<Me;he++){const ve=J[he],{object:ue,geometry:Be,material:Vt,group:Je}=ve;if(Vt.side===mn&&ue.layers.test(nt.layers)){const se=Vt.side;Vt.side=Ze,Vt.needsUpdate=!0,fc(ue,st,nt,Be,Vt,Je),Vt.side=se,Vt.needsUpdate=!0,Wt=!0}}Wt===!0&&(Y.updateMultisampleRenderTarget(At),Y.updateRenderTargetMipmap(At))}w.setRenderTarget(Rt,zt,Gt),w.setClearColor($,ft),ee!==void 0&&(nt.viewport=ee),w.toneMapping=$t}function Er(I,J,st){const nt=J.isScene===!0?J.overrideMaterial:null;for(let et=0,At=I.length;et<At;et++){const Lt=I[et],{object:Rt,geometry:zt,group:Gt}=Lt;let $t=Lt.material;$t.allowOverride===!0&&nt!==null&&($t=nt),Rt.layers.test(st.layers)&&fc(Rt,J,st,zt,$t,Gt)}}function fc(I,J,st,nt,et,At){I.onBeforeRender(w,J,st,nt,et,At),I.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),et.onBeforeRender(w,J,st,nt,I,At),et.transparent===!0&&et.side===mn&&et.forceSinglePass===!1?(et.side=Ze,et.needsUpdate=!0,w.renderBufferDirect(st,J,nt,et,I,At),et.side=ei,et.needsUpdate=!0,w.renderBufferDirect(st,J,nt,et,I,At),et.side=mn):w.renderBufferDirect(st,J,nt,et,I,At),I.onAfterRender(w,J,st,nt,et,At)}function Tr(I,J,st){J.isScene!==!0&&(J=Q);const nt=S.get(I),et=A.state.lights,At=A.state.shadowsArray,Lt=et.state.version,Rt=Mt.getParameters(I,et.state,At,J,st),zt=Mt.getProgramCacheKey(Rt);let Gt=nt.programs;nt.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?J.environment:null,nt.fog=J.fog;const $t=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;nt.envMap=rt.get(I.envMap||nt.environment,$t),nt.envMapRotation=nt.environment!==null&&I.envMap===null?J.environmentRotation:I.envMapRotation,Gt===void 0&&(I.addEventListener("dispose",oe),Gt=new Map,nt.programs=Gt);let ee=Gt.get(zt);if(ee!==void 0){if(nt.currentProgram===ee&&nt.lightsStateVersion===Lt)return mc(I,Rt),ee}else Rt.uniforms=Mt.getUniforms(I),I.onBeforeCompile(Rt,w),ee=Mt.acquireProgram(Rt,zt),Gt.set(zt,ee),nt.uniforms=Rt.uniforms;const Wt=nt.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Wt.clippingPlanes=St.uniform),mc(I,Rt),nt.needsLights=Cd(I),nt.lightsStateVersion=Lt,nt.needsLights&&(Wt.ambientLightColor.value=et.state.ambient,Wt.lightProbe.value=et.state.probe,Wt.directionalLights.value=et.state.directional,Wt.directionalLightShadows.value=et.state.directionalShadow,Wt.spotLights.value=et.state.spot,Wt.spotLightShadows.value=et.state.spotShadow,Wt.rectAreaLights.value=et.state.rectArea,Wt.ltc_1.value=et.state.rectAreaLTC1,Wt.ltc_2.value=et.state.rectAreaLTC2,Wt.pointLights.value=et.state.point,Wt.pointLightShadows.value=et.state.pointShadow,Wt.hemisphereLights.value=et.state.hemi,Wt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Wt.spotLightMatrix.value=et.state.spotLightMatrix,Wt.spotLightMap.value=et.state.spotLightMap,Wt.pointShadowMatrix.value=et.state.pointShadowMatrix),nt.currentProgram=ee,nt.uniformsList=null,ee}function pc(I){if(I.uniformsList===null){const J=I.currentProgram.getUniforms();I.uniformsList=vo.seqWithValue(J.seq,I.uniforms)}return I.uniformsList}function mc(I,J){const st=S.get(I);st.outputColorSpace=J.outputColorSpace,st.batching=J.batching,st.batchingColor=J.batchingColor,st.instancing=J.instancing,st.instancingColor=J.instancingColor,st.instancingMorph=J.instancingMorph,st.skinning=J.skinning,st.morphTargets=J.morphTargets,st.morphNormals=J.morphNormals,st.morphColors=J.morphColors,st.morphTargetsCount=J.morphTargetsCount,st.numClippingPlanes=J.numClippingPlanes,st.numIntersection=J.numClipIntersection,st.vertexAlphas=J.vertexAlphas,st.vertexTangents=J.vertexTangents,st.toneMapping=J.toneMapping}function Ad(I,J,st,nt,et){J.isScene!==!0&&(J=Q),Y.resetTextureUnits();const At=J.fog,Lt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?J.environment:null,Rt=F===null?w.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ye,zt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Gt=rt.get(nt.envMap||Lt,zt),$t=nt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ee=!!st.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Wt=!!st.morphAttributes.position,he=!!st.morphAttributes.normal,Me=!!st.morphAttributes.color;let ve=Pn;nt.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ve=w.toneMapping);const ue=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Be=ue!==void 0?ue.length:0,Vt=S.get(nt),Je=A.state.lights;if(K===!0&&(ot===!0||I!==U)){const Fe=I===U&&nt.id===k;St.setState(nt,I,Fe)}let se=!1;nt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Je.state.version||Vt.outputColorSpace!==Rt||et.isBatchedMesh&&Vt.batching===!1||!et.isBatchedMesh&&Vt.batching===!0||et.isBatchedMesh&&Vt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&Vt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&Vt.instancing===!1||!et.isInstancedMesh&&Vt.instancing===!0||et.isSkinnedMesh&&Vt.skinning===!1||!et.isSkinnedMesh&&Vt.skinning===!0||et.isInstancedMesh&&Vt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Vt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Vt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Vt.instancingMorph===!1&&et.morphTexture!==null||Vt.envMap!==Gt||nt.fog===!0&&Vt.fog!==At||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==St.numPlanes||Vt.numIntersection!==St.numIntersection)||Vt.vertexAlphas!==$t||Vt.vertexTangents!==ee||Vt.morphTargets!==Wt||Vt.morphNormals!==he||Vt.morphColors!==Me||Vt.toneMapping!==ve||Vt.morphTargetsCount!==Be)&&(se=!0):(se=!0,Vt.__version=nt.version);let hn=Vt.currentProgram;se===!0&&(hn=Tr(nt,J,et));let yn=!1,Si=!1,Vi=!1;const fe=hn.getUniforms(),Oe=Vt.uniforms;if(vt.useProgram(hn.program)&&(yn=!0,Si=!0,Vi=!0),nt.id!==k&&(k=nt.id,Si=!0),yn||U!==I){vt.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),fe.setValue(b,"projectionMatrix",I.projectionMatrix),fe.setValue(b,"viewMatrix",I.matrixWorldInverse);const oi=fe.map.cameraPosition;oi!==void 0&&oi.setValue(b,pt.setFromMatrixPosition(I.matrixWorld)),bt.logarithmicDepthBuffer&&fe.setValue(b,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&fe.setValue(b,"isOrthographic",I.isOrthographicCamera===!0),U!==I&&(U=I,Si=!0,Vi=!0)}if(Vt.needsLights&&(Je.state.directionalShadowMap.length>0&&fe.setValue(b,"directionalShadowMap",Je.state.directionalShadowMap,Y),Je.state.spotShadowMap.length>0&&fe.setValue(b,"spotShadowMap",Je.state.spotShadowMap,Y),Je.state.pointShadowMap.length>0&&fe.setValue(b,"pointShadowMap",Je.state.pointShadowMap,Y)),et.isSkinnedMesh){fe.setOptional(b,et,"bindMatrix"),fe.setOptional(b,et,"bindMatrixInverse");const Fe=et.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),fe.setValue(b,"boneTexture",Fe.boneTexture,Y))}et.isBatchedMesh&&(fe.setOptional(b,et,"batchingTexture"),fe.setValue(b,"batchingTexture",et._matricesTexture,Y),fe.setOptional(b,et,"batchingIdTexture"),fe.setValue(b,"batchingIdTexture",et._indirectTexture,Y),fe.setOptional(b,et,"batchingColorTexture"),et._colorsTexture!==null&&fe.setValue(b,"batchingColorTexture",et._colorsTexture,Y));const ri=st.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&It.update(et,st,hn),(Si||Vt.receiveShadow!==et.receiveShadow)&&(Vt.receiveShadow=et.receiveShadow,fe.setValue(b,"receiveShadow",et.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&J.environment!==null&&(Oe.envMapIntensity.value=J.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=Rv()),Si&&(fe.setValue(b,"toneMappingExposure",w.toneMappingExposure),Vt.needsLights&&Rd(Oe,Vi),At&&nt.fog===!0&&kt.refreshFogUniforms(Oe,At),kt.refreshMaterialUniforms(Oe,nt,Ct,lt,A.state.transmissionRenderTarget[I.id]),vo.upload(b,pc(Vt),Oe,Y)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(vo.upload(b,pc(Vt),Oe,Y),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&fe.setValue(b,"center",et.center),fe.setValue(b,"modelViewMatrix",et.modelViewMatrix),fe.setValue(b,"normalMatrix",et.normalMatrix),fe.setValue(b,"modelMatrix",et.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Fe=nt.uniformsGroups;for(let oi=0,Hi=Fe.length;oi<Hi;oi++){const gc=Fe[oi];Nt.update(gc,hn),Nt.bind(gc,hn)}}return hn}function Rd(I,J){I.ambientLightColor.needsUpdate=J,I.lightProbe.needsUpdate=J,I.directionalLights.needsUpdate=J,I.directionalLightShadows.needsUpdate=J,I.pointLights.needsUpdate=J,I.pointLightShadows.needsUpdate=J,I.spotLights.needsUpdate=J,I.spotLightShadows.needsUpdate=J,I.rectAreaLights.needsUpdate=J,I.hemisphereLights.needsUpdate=J}function Cd(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(I,J,st){const nt=S.get(I);nt.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),S.get(I.texture).__webglTexture=J,S.get(I.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:st,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,J){const st=S.get(I);st.__webglFramebuffer=J,st.__useDefaultFramebuffer=J===void 0};const Pd=b.createFramebuffer();this.setRenderTarget=function(I,J=0,st=0){F=I,L=J,B=st;let nt=null,et=!1,At=!1;if(I){const Rt=S.get(I);if(Rt.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(b.FRAMEBUFFER,Rt.__webglFramebuffer),D.copy(I.viewport),z.copy(I.scissor),X=I.scissorTest,vt.viewport(D),vt.scissor(z),vt.setScissorTest(X),k=-1;return}else if(Rt.__webglFramebuffer===void 0)Y.setupRenderTarget(I);else if(Rt.__hasExternalTextures)Y.rebindTextures(I,S.get(I.texture).__webglTexture,S.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const $t=I.depthTexture;if(Rt.__boundDepthTexture!==$t){if($t!==null&&S.has($t)&&(I.width!==$t.image.width||I.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(I)}}const zt=I.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(At=!0);const Gt=S.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Gt[J])?nt=Gt[J][st]:nt=Gt[J],et=!0):I.samples>0&&Y.useMultisampledRTT(I)===!1?nt=S.get(I).__webglMultisampledFramebuffer:Array.isArray(Gt)?nt=Gt[st]:nt=Gt,D.copy(I.viewport),z.copy(I.scissor),X=I.scissorTest}else D.copy(T).multiplyScalar(Ct).floor(),z.copy(E).multiplyScalar(Ct).floor(),X=W;if(st!==0&&(nt=Pd),vt.bindFramebuffer(b.FRAMEBUFFER,nt)&&vt.drawBuffers(I,nt),vt.viewport(D),vt.scissor(z),vt.setScissorTest(X),et){const Rt=S.get(I.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt.__webglTexture,st)}else if(At){const Rt=J;for(let zt=0;zt<I.textures.length;zt++){const Gt=S.get(I.textures[zt]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+zt,Gt.__webglTexture,st,Rt)}}else if(I!==null&&st!==0){const Rt=S.get(I.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Rt.__webglTexture,st)}k=-1},this.readRenderTargetPixels=function(I,J,st,nt,et,At,Lt,Rt=0){if(!(I&&I.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=S.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Lt!==void 0&&(zt=zt[Lt]),zt){vt.bindFramebuffer(b.FRAMEBUFFER,zt);try{const Gt=I.textures[Rt],$t=Gt.format,ee=Gt.type;if(I.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Rt),!bt.textureFormatReadable($t)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(ee)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=I.width-nt&&st>=0&&st<=I.height-et&&b.readPixels(J,st,nt,et,Tt.convert($t),Tt.convert(ee),At)}finally{const Gt=F!==null?S.get(F).__webglFramebuffer:null;vt.bindFramebuffer(b.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(I,J,st,nt,et,At,Lt,Rt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=S.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Lt!==void 0&&(zt=zt[Lt]),zt)if(J>=0&&J<=I.width-nt&&st>=0&&st<=I.height-et){vt.bindFramebuffer(b.FRAMEBUFFER,zt);const Gt=I.textures[Rt],$t=Gt.format,ee=Gt.type;if(I.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Rt),!bt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Wt),b.bufferData(b.PIXEL_PACK_BUFFER,At.byteLength,b.STREAM_READ),b.readPixels(J,st,nt,et,Tt.convert($t),Tt.convert(ee),0);const he=F!==null?S.get(F).__webglFramebuffer:null;vt.bindFramebuffer(b.FRAMEBUFFER,he);const Me=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await _f(b,Me,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Wt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,At),b.deleteBuffer(Wt),b.deleteSync(Me),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,J=null,st=0){const nt=Math.pow(2,-st),et=Math.floor(I.image.width*nt),At=Math.floor(I.image.height*nt),Lt=J!==null?J.x:0,Rt=J!==null?J.y:0;Y.setTexture2D(I,0),b.copyTexSubImage2D(b.TEXTURE_2D,st,0,0,Lt,Rt,et,At),vt.unbindTexture()};const Id=b.createFramebuffer(),Ld=b.createFramebuffer();this.copyTextureToTexture=function(I,J,st=null,nt=null,et=0,At=0){let Lt,Rt,zt,Gt,$t,ee,Wt,he,Me;const ve=I.isCompressedTexture?I.mipmaps[At]:I.image;if(st!==null)Lt=st.max.x-st.min.x,Rt=st.max.y-st.min.y,zt=st.isBox3?st.max.z-st.min.z:1,Gt=st.min.x,$t=st.min.y,ee=st.isBox3?st.min.z:0;else{const Oe=Math.pow(2,-et);Lt=Math.floor(ve.width*Oe),Rt=Math.floor(ve.height*Oe),I.isDataArrayTexture?zt=ve.depth:I.isData3DTexture?zt=Math.floor(ve.depth*Oe):zt=1,Gt=0,$t=0,ee=0}nt!==null?(Wt=nt.x,he=nt.y,Me=nt.z):(Wt=0,he=0,Me=0);const ue=Tt.convert(J.format),Be=Tt.convert(J.type);let Vt;J.isData3DTexture?(Y.setTexture3D(J,0),Vt=b.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Y.setTexture2DArray(J,0),Vt=b.TEXTURE_2D_ARRAY):(Y.setTexture2D(J,0),Vt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,J.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,J.unpackAlignment);const Je=b.getParameter(b.UNPACK_ROW_LENGTH),se=b.getParameter(b.UNPACK_IMAGE_HEIGHT),hn=b.getParameter(b.UNPACK_SKIP_PIXELS),yn=b.getParameter(b.UNPACK_SKIP_ROWS),Si=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ve.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ve.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Gt),b.pixelStorei(b.UNPACK_SKIP_ROWS,$t),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ee);const Vi=I.isDataArrayTexture||I.isData3DTexture,fe=J.isDataArrayTexture||J.isData3DTexture;if(I.isDepthTexture){const Oe=S.get(I),ri=S.get(J),Fe=S.get(Oe.__renderTarget),oi=S.get(ri.__renderTarget);vt.bindFramebuffer(b.READ_FRAMEBUFFER,Fe.__webglFramebuffer),vt.bindFramebuffer(b.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let Hi=0;Hi<zt;Hi++)Vi&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,S.get(I).__webglTexture,et,ee+Hi),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,S.get(J).__webglTexture,At,Me+Hi)),b.blitFramebuffer(Gt,$t,Lt,Rt,Wt,he,Lt,Rt,b.DEPTH_BUFFER_BIT,b.NEAREST);vt.bindFramebuffer(b.READ_FRAMEBUFFER,null),vt.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(et!==0||I.isRenderTargetTexture||S.has(I)){const Oe=S.get(I),ri=S.get(J);vt.bindFramebuffer(b.READ_FRAMEBUFFER,Id),vt.bindFramebuffer(b.DRAW_FRAMEBUFFER,Ld);for(let Fe=0;Fe<zt;Fe++)Vi?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Oe.__webglTexture,et,ee+Fe):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Oe.__webglTexture,et),fe?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ri.__webglTexture,At,Me+Fe):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ri.__webglTexture,At),et!==0?b.blitFramebuffer(Gt,$t,Lt,Rt,Wt,he,Lt,Rt,b.COLOR_BUFFER_BIT,b.NEAREST):fe?b.copyTexSubImage3D(Vt,At,Wt,he,Me+Fe,Gt,$t,Lt,Rt):b.copyTexSubImage2D(Vt,At,Wt,he,Gt,$t,Lt,Rt);vt.bindFramebuffer(b.READ_FRAMEBUFFER,null),vt.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else fe?I.isDataTexture||I.isData3DTexture?b.texSubImage3D(Vt,At,Wt,he,Me,Lt,Rt,zt,ue,Be,ve.data):J.isCompressedArrayTexture?b.compressedTexSubImage3D(Vt,At,Wt,he,Me,Lt,Rt,zt,ue,ve.data):b.texSubImage3D(Vt,At,Wt,he,Me,Lt,Rt,zt,ue,Be,ve):I.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,At,Wt,he,Lt,Rt,ue,Be,ve.data):I.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,At,Wt,he,ve.width,ve.height,ue,ve.data):b.texSubImage2D(b.TEXTURE_2D,At,Wt,he,Lt,Rt,ue,Be,ve);b.pixelStorei(b.UNPACK_ROW_LENGTH,Je),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,se),b.pixelStorei(b.UNPACK_SKIP_PIXELS,hn),b.pixelStorei(b.UNPACK_SKIP_ROWS,yn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Si),At===0&&J.generateMipmaps&&b.generateMipmap(Vt),vt.unbindTexture()},this.initRenderTarget=function(I){S.get(I).__webglFramebuffer===void 0&&Y.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Y.setTextureCube(I,0):I.isData3DTexture?Y.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Y.setTexture2DArray(I,0):Y.setTexture2D(I,0),vt.unbindTexture()},this.resetState=function(){L=0,B=0,F=null,vt.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}function Wh(r,t){if(t===rf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===yl||t===Lu){let e=r.getIndex();if(e===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,i=[];if(t===yl)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}function Pv(r){const t=new Map,e=new Map,n=r.clone();return fd(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=t.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return e.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function fd(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)fd(r.children[n],t.children[n],e)}class Iv extends ki{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Uv(e)}),this.register(function(e){return new Ov(e)}),this.register(function(e){return new qv(e)}),this.register(function(e){return new Yv(e)}),this.register(function(e){return new jv(e)}),this.register(function(e){return new zv(e)}),this.register(function(e){return new kv(e)}),this.register(function(e){return new Vv(e)}),this.register(function(e){return new Hv(e)}),this.register(function(e){return new Fv(e)}),this.register(function(e){return new Gv(e)}),this.register(function(e){return new Bv(e)}),this.register(function(e){return new Xv(e)}),this.register(function(e){return new Wv(e)}),this.register(function(e){return new Nv(e)}),this.register(function(e){return new Xh(e,ne.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Xh(e,ne.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Kv(e)})}load(t,e,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=lr.extractUrlBase(t);o=lr.resolveURL(c,this.path)}else o=lr.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new Ql(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,o,function(u){e(u),s.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===pd){try{o[ne.KHR_BINARY_GLTF]=new Zv(t)}catch(d){i&&i(d);return}s=JSON.parse(o[ne.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new cy(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case ne.KHR_MATERIALS_UNLIT:o[d]=new Dv;break;case ne.KHR_DRACO_MESH_COMPRESSION:o[d]=new $v(s,this.dracoLoader);break;case ne.KHR_TEXTURE_TRANSFORM:o[d]=new Jv;break;case ne.KHR_MESH_QUANTIZATION:o[d]=new Qv;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function Lv(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}function Se(r,t,e){const n=r.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}const ne={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Nv{constructor(t){this.parser=t,this.name=ne.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const u=new Yt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ye);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new od(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new gm(u),c.distance=d;break;case"spot":c=new pm(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),wn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class Dv{constructor(){this.name=ne.KHR_MATERIALS_UNLIT}getMaterialType(){return xi}extendParams(t,e,n){const i=[];t.color=new Yt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Ye),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,Re))}return Promise.all(i)}}class Fv{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=Se(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Uv{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Se(this.parser,t,this.name)!==null?Un:null}extendMaterialParams(t,e){const n=Se(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new dt(s,s)}return Promise.all(i)}}class Ov{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Se(this.parser,t,this.name)!==null?Un:null}extendMaterialParams(t,e){const n=Se(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Bv{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Se(this.parser,t,this.name)!==null?Un:null}extendMaterialParams(t,e){const n=Se(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class zv{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_SHEEN}getMaterialType(t){return Se(this.parser,t,this.name)!==null?Un:null}extendMaterialParams(t,e){const n=Se(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(e.sheenColor=new Yt(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;e.sheenColor.setRGB(s[0],s[1],s[2],Ye)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,Re)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class kv{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Se(this.parser,t,this.name)!==null?Un:null}extendMaterialParams(t,e){const n=Se(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class Vv{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_VOLUME}getMaterialType(t){return Se(this.parser,t,this.name)!==null?Un:null}extendMaterialParams(t,e){const n=Se(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return e.attenuationColor=new Yt().setRGB(s[0],s[1],s[2],Ye),Promise.all(i)}}class Hv{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_IOR}getMaterialType(t){return Se(this.parser,t,this.name)!==null?Un:null}extendMaterialParams(t,e){const n=Se(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class Gv{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Se(this.parser,t,this.name)!==null?Un:null}extendMaterialParams(t,e){const n=Se(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return e.specularColor=new Yt().setRGB(s[0],s[1],s[2],Ye),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,Re)),Promise.all(i)}}class Wv{constructor(t){this.parser=t,this.name=ne.EXT_MATERIALS_BUMP}getMaterialType(t){return Se(this.parser,t,this.name)!==null?Un:null}extendMaterialParams(t,e){const n=Se(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(i)}}class Xv{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Se(this.parser,t,this.name)!==null?Un:null}extendMaterialParams(t,e){const n=Se(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class qv{constructor(t){this.parser=t,this.name=ne.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}}class Yv{constructor(t){this.parser=t,this.name=ne.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class jv{constructor(t){this.parser=t,this.name=ne.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class Xh{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(f),u,d,h,i.mode,i.filter),f})})}else return null}}class Kv{constructor(t){this.name=ne.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==rn.TRIANGLES&&c.mode!==rn.TRIANGLE_STRIP&&c.mode!==rn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const p of d){const _=new Zt,m=new H,g=new $e,x=new H(1,1,1),v=new sp(p.geometry,p.material,h);for(let M=0;M<h;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,M),l.SCALE&&x.fromBufferAttribute(l.SCALE,M),v.setMatrixAt(M,_.compose(m,g,x));for(const M in l)if(M==="_COLOR_0"){const A=l[M];v.instanceColor=new Sl(A.array,A.itemSize,A.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&p.geometry.setAttribute(M,l[M]);ge.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const pd="glTF",qs=12,qh={JSON:1313821514,BIN:5130562};class Zv{constructor(t){this.name=ne.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==pd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-qs,s=new DataView(t,qs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===qh.JSON){const c=new Uint8Array(t,qs+o,a);this.content=n.decode(c)}else if(l===qh.BIN){const c=qs+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $v{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ne.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=Pl[u]||u.toLowerCase();a[d]=o[u]}for(const u in t.attributes){const d=Pl[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[t.attributes[u]],f=gs[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return e.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){i.decodeDracoFile(u,function(f){for(const p in f.attributes){const _=f.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}d(f)},a,c,Ye,h)})})}}class Jv{constructor(){this.name=ne.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Qv{constructor(){this.name=ne.KHR_MESH_QUANTIZATION}}class md extends Ps{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-e,d=(n-e)/u,h=d*d,f=h*d,p=t*c,_=p-c,m=-2*f+3*h,g=f-h,x=1-m,v=g-h+d;for(let M=0;M!==a;M++){const A=o[_+M+a],R=o[_+M+l]*u,P=o[p+M+a],y=o[p+M]*u;s[M]=x*A+v*R+m*P+g*y}return s}}const ty=new $e;class ey extends md{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return ty.fromArray(s).normalize().toArray(s),s}}const rn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yh={9728:Ce,9729:Pe,9984:Tu,9985:po,9986:Qs,9987:Zn},jh={33071:Rn,33648:yo,10497:ys},Sa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ny={CUBICSPLINE:void 0,LINEAR:fr,STEP:dr},ba={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new _i({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ei})),r.DefaultMaterial}function Pi(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function wn(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function sy(r,t,e){let n=!1,i=!1,s=!1;for(let c=0,u=t.length;c<u;c++){const d=t[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=t.length;c<u;c++){const d=t[c];if(n){const h=d.POSITION!==void 0?e.getDependency("accessor",d.POSITION):r.attributes.position;o.push(h)}if(i){const h=d.NORMAL!==void 0?e.getDependency("accessor",d.NORMAL):r.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?e.getDependency("accessor",d.COLOR_0):r.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function ry(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oy(r){let t;const e=r.extensions&&r.extensions[ne.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Ea(e.attributes):t=r.indices+":"+Ea(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+Ea(r.targets[n]);return t}function Ea(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function Il(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ay(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ly=new Zt;class cy{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Lv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new dm(this.options.manager):this.textureLoader=new vm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ql(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Pi(s,a,i),wn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ne.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(lr.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Sa[i.type],a=gs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new qe(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Sa[i.type],c=gs[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,m;if(f&&f!==d){const g=Math.floor(h/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let v=e.cache.get(x);v||(_=new c(a,g*f,i.count*f/u),v=new ku(_,f/u),e.cache.add(x,v)),m=new gr(v,l,h%f/u,p)}else a===null?_=new c(i.count*l):_=new c(a,h,i.count*l),m=new qe(_,l,p);if(i.sparse!==void 0){const g=Sa.SCALAR,x=gs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,A=new x(o[1],v,i.sparse.count*g),R=new c(o[2],M,i.sparse.count*l);a!==null&&(m=new qe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,y=A.length;P<y;P++){const w=A[P];if(m.setX(w,R[P*l]),l>=2&&m.setY(w,R[P*l+1]),l>=3&&m.setZ(w,R[P*l+2]),l>=4&&m.setW(w,R[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,o=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Yh[h.magFilter]||Pe,u.minFilter=Yh[h.minFilter]||Zn,u.wrapS=jh[h.wrapS]||ys,u.wrapT=jh[h.wrapT]||ys,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ce&&u.minFilter!==Pe,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let p=h;e.isImageBitmapLoader===!0&&(p=function(_){const m=new Ie(_);m.needsUpdate=!0,h(m)}),e.load(lr.resolveURL(d,s.path),p,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),wn(d,o),d.userData.mimeType=o.mimeType||ay(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ne.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ne.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ne.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Xu,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Wu,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return _i}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let o;const a={},l=s.extensions||{},c=[];if(l[ne.KHR_MATERIALS_UNLIT]){const d=i[ne.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,e))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Yt(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Ye),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",d.baseColorTexture,Re)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=mn);const u=s.alphaMode||ba.OPAQUE;if(u===ba.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ba.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==xi&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new dt(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==xi&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==xi){const d=s.emissiveFactor;a.emissive=new Yt().setRGB(d[0],d[1],d[2],Ye)}return s.emissiveTexture!==void 0&&o!==xi&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,Re)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),wn(d,s),e.associations.set(d,{materials:t}),s.extensions&&Pi(i,d,s),d})}createUniqueName(t){const e=ce.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ne.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Kh(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],u=oy(c),d=i[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[ne.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Kh(new He,c,e),i[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?iy(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,p=u.length;f<p;f++){const _=u[f],m=o[f];let g;const x=c[f];if(m.mode===rn.TRIANGLES||m.mode===rn.TRIANGLE_STRIP||m.mode===rn.TRIANGLE_FAN||m.mode===void 0)g=s.isSkinnedMesh===!0?new ep(_,x):new Te(_,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===rn.TRIANGLE_STRIP?g.geometry=Wh(g.geometry,Lu):m.mode===rn.TRIANGLE_FAN&&(g.geometry=Wh(g.geometry,yl));else if(m.mode===rn.LINES)g=new lp(_,x);else if(m.mode===rn.LINE_STRIP)g=new Kl(_,x);else if(m.mode===rn.LINE_LOOP)g=new cp(_,x);else if(m.mode===rn.POINTS)g=new hp(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&ry(g,s),g.name=e.createUniqueName(s.name||"mesh_"+t),wn(g,s),m.extensions&&Pi(i,g,m),e.assignFinalMaterial(g),d.push(g)}for(let f=0,p=d.length;f<p;f++)e.associations.set(d[f],{meshes:t,primitives:f});if(d.length===1)return s.extensions&&Pi(i,d[0],s),d[0];const h=new $n;s.extensions&&Pi(i,h,s),e.associations.set(h,{meshes:t});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);return h})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Xe(Fu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Sr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),wn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new Zt;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Yl(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=i.channels.length;d<h;d++){const f=i.channels[d],p=i.samplers[f.sampler],_=f.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",x)),c.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],p=d[2],_=d[3],m=d[4],g=[];for(let v=0,M=h.length;v<M;v++){const A=h[v],R=f[v],P=p[v],y=_[v],w=m[v];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const V=n._createAnimationTracks(A,R,P,y,w);if(V)for(let L=0;L<V.length;L++)g.push(V[L])}const x=new rm(s,void 0,g);return wn(x,i),x})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,ly)});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);if(u.userData.pivot!==void 0&&d.length>0){const f=u.userData.pivot,p=d[0];u.pivot=new H().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Gu:c.length>1?u=new $n:c.length===1?u=c[0]:u=new ge,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),wn(u,s),s.extensions&&Pi(n,u,s),s.matrix!==void 0){const d=new Zt;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const d=i.associations.get(u);i.associations.set(u,{...d})}return i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new $n;n.name&&(s.name=i.createUniqueName(n.name)),wn(s,n),n.extensions&&Pi(e,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++){const h=l[u];h.parent!==null?s.add(Pv(h)):s.add(h)}const c=u=>{const d=new Map;for(const[h,f]of i.associations)(h instanceof xn||h instanceof Ie)&&d.set(h,f);return u.traverse(h=>{const f=i.associations.get(h);f!=null&&d.set(h,f)}),d};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const o=[],a=t.name?t.name:t.uuid,l=[];fi[s.path]===fi.weights?t.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(fi[s.path]){case fi.weights:c=ws;break;case fi.rotation:c=As;break;case fi.translation:case fi.scale:c=Rs;break;default:switch(n.itemSize){case 1:c=ws;break;case 2:case 3:default:c=Rs;break}break}const u=i.interpolation!==void 0?ny[i.interpolation]:fr,d=this._getArrayFromAccessor(n);for(let h=0,f=l.length;h<f;h++){const p=new c(l[h]+"."+fi[s.path],e.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Il(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof As?ey:md;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function hy(r,t,e){const n=t.attributes,i=new si;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){const u=Il(gs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new H,l=new H;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const h=e.json.accessors[d.POSITION],f=h.min,p=h.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),h.normalized){const _=Il(gs[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Dn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Kh(r,t,e){const n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Pl[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return ie.workingColorSpace!==Ye&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ie.workingColorSpace}" not supported.`),wn(r,t),hy(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?sy(r,t.targets,e):r})}const uy=Re;class cr extends ki{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,i){const s=this,o=new Ql(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t){const e=this;function n(Z,G){if(Z.nodeType!==1)return;const T=M(Z);let E=!1,W=null;switch(Z.nodeName){case"svg":G=p(Z,G);break;case"style":s(Z);break;case"g":G=p(Z,G);break;case"path":G=p(Z,G),Z.hasAttribute("d")&&(W=i(Z));break;case"rect":G=p(Z,G),W=l(Z);break;case"polygon":G=p(Z,G),W=c(Z);break;case"polyline":G=p(Z,G),W=u(Z);break;case"circle":G=p(Z,G),W=d(Z);break;case"ellipse":G=p(Z,G),W=h(Z);break;case"line":G=p(Z,G),W=f(Z);break;case"defs":E=!0;break;case"use":G=p(Z,G);const ot=(Z.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),gt=Z.viewportElement.getElementById(ot);gt?n(gt,G):console.warn("SVGLoader: 'use node' references non-existent node id: "+ot);break}W&&(G.fill!==void 0&&G.fill!=="none"&&W.color.setStyle(G.fill,uy),R(W,_t),B.push(W),W.userData={node:Z,style:G});const it=Z.childNodes;for(let K=0;K<it.length;K++){const ot=it[K];E&&ot.nodeName!=="style"&&ot.nodeName!=="defs"||n(ot,G)}T&&(k.pop(),k.length>0?_t.copy(k[k.length-1]):_t.identity())}function i(Z){const G=new Ai,T=new dt,E=new dt,W=new dt;let it=!0,K=!1;const ot=Z.getAttribute("d");if(ot===""||ot==="none")return null;const gt=ot.match(/[a-df-z][^a-df-z]*/ig);for(let pt=0,q=gt.length;pt<q;pt++){const Q=gt[pt],tt=Q.charAt(0),at=Q.slice(1).trim();it===!0&&(K=!0,it=!1);let b;switch(tt){case"M":b=m(at);for(let O=0,ht=b.length;O<ht;O+=2)T.x=b[O+0],T.y=b[O+1],E.x=T.x,E.y=T.y,O===0?G.moveTo(T.x,T.y):G.lineTo(T.x,T.y),O===0&&W.copy(T);break;case"H":b=m(at);for(let O=0,ht=b.length;O<ht;O++)T.x=b[O],E.x=T.x,E.y=T.y,G.lineTo(T.x,T.y),O===0&&K===!0&&W.copy(T);break;case"V":b=m(at);for(let O=0,ht=b.length;O<ht;O++)T.y=b[O],E.x=T.x,E.y=T.y,G.lineTo(T.x,T.y),O===0&&K===!0&&W.copy(T);break;case"L":b=m(at);for(let O=0,ht=b.length;O<ht;O+=2)T.x=b[O+0],T.y=b[O+1],E.x=T.x,E.y=T.y,G.lineTo(T.x,T.y),O===0&&K===!0&&W.copy(T);break;case"C":b=m(at);for(let O=0,ht=b.length;O<ht;O+=6)G.bezierCurveTo(b[O+0],b[O+1],b[O+2],b[O+3],b[O+4],b[O+5]),E.x=b[O+2],E.y=b[O+3],T.x=b[O+4],T.y=b[O+5],O===0&&K===!0&&W.copy(T);break;case"S":b=m(at);for(let O=0,ht=b.length;O<ht;O+=4)G.bezierCurveTo(_(T.x,E.x),_(T.y,E.y),b[O+0],b[O+1],b[O+2],b[O+3]),E.x=b[O+0],E.y=b[O+1],T.x=b[O+2],T.y=b[O+3],O===0&&K===!0&&W.copy(T);break;case"Q":b=m(at);for(let O=0,ht=b.length;O<ht;O+=4)G.quadraticCurveTo(b[O+0],b[O+1],b[O+2],b[O+3]),E.x=b[O+0],E.y=b[O+1],T.x=b[O+2],T.y=b[O+3],O===0&&K===!0&&W.copy(T);break;case"T":b=m(at);for(let O=0,ht=b.length;O<ht;O+=2){const bt=_(T.x,E.x),vt=_(T.y,E.y);G.quadraticCurveTo(bt,vt,b[O+0],b[O+1]),E.x=bt,E.y=vt,T.x=b[O+0],T.y=b[O+1],O===0&&K===!0&&W.copy(T)}break;case"A":b=m(at,[3,4],7);for(let O=0,ht=b.length;O<ht;O+=7){if(b[O+5]==T.x&&b[O+6]==T.y)continue;const bt=T.clone();T.x=b[O+5],T.y=b[O+6],E.x=T.x,E.y=T.y,o(G,b[O],b[O+1],b[O+2],b[O+3],b[O+4],bt,T),O===0&&K===!0&&W.copy(T)}break;case"m":b=m(at);for(let O=0,ht=b.length;O<ht;O+=2)T.x+=b[O+0],T.y+=b[O+1],E.x=T.x,E.y=T.y,O===0?G.moveTo(T.x,T.y):G.lineTo(T.x,T.y),O===0&&W.copy(T);break;case"h":b=m(at);for(let O=0,ht=b.length;O<ht;O++)T.x+=b[O],E.x=T.x,E.y=T.y,G.lineTo(T.x,T.y),O===0&&K===!0&&W.copy(T);break;case"v":b=m(at);for(let O=0,ht=b.length;O<ht;O++)T.y+=b[O],E.x=T.x,E.y=T.y,G.lineTo(T.x,T.y),O===0&&K===!0&&W.copy(T);break;case"l":b=m(at);for(let O=0,ht=b.length;O<ht;O+=2)T.x+=b[O+0],T.y+=b[O+1],E.x=T.x,E.y=T.y,G.lineTo(T.x,T.y),O===0&&K===!0&&W.copy(T);break;case"c":b=m(at);for(let O=0,ht=b.length;O<ht;O+=6)G.bezierCurveTo(T.x+b[O+0],T.y+b[O+1],T.x+b[O+2],T.y+b[O+3],T.x+b[O+4],T.y+b[O+5]),E.x=T.x+b[O+2],E.y=T.y+b[O+3],T.x+=b[O+4],T.y+=b[O+5],O===0&&K===!0&&W.copy(T);break;case"s":b=m(at);for(let O=0,ht=b.length;O<ht;O+=4)G.bezierCurveTo(_(T.x,E.x),_(T.y,E.y),T.x+b[O+0],T.y+b[O+1],T.x+b[O+2],T.y+b[O+3]),E.x=T.x+b[O+0],E.y=T.y+b[O+1],T.x+=b[O+2],T.y+=b[O+3],O===0&&K===!0&&W.copy(T);break;case"q":b=m(at);for(let O=0,ht=b.length;O<ht;O+=4)G.quadraticCurveTo(T.x+b[O+0],T.y+b[O+1],T.x+b[O+2],T.y+b[O+3]),E.x=T.x+b[O+0],E.y=T.y+b[O+1],T.x+=b[O+2],T.y+=b[O+3],O===0&&K===!0&&W.copy(T);break;case"t":b=m(at);for(let O=0,ht=b.length;O<ht;O+=2){const bt=_(T.x,E.x),vt=_(T.y,E.y);G.quadraticCurveTo(bt,vt,T.x+b[O+0],T.y+b[O+1]),E.x=bt,E.y=vt,T.x=T.x+b[O+0],T.y=T.y+b[O+1],O===0&&K===!0&&W.copy(T)}break;case"a":b=m(at,[3,4],7);for(let O=0,ht=b.length;O<ht;O+=7){if(b[O+5]==0&&b[O+6]==0)continue;const bt=T.clone();T.x+=b[O+5],T.y+=b[O+6],E.x=T.x,E.y=T.y,o(G,b[O],b[O+1],b[O+2],b[O+3],b[O+4],bt,T),O===0&&K===!0&&W.copy(T)}break;case"Z":case"z":G.currentPath.autoClose=!0,G.currentPath.curves.length>0&&(T.copy(W),G.currentPath.currentPoint.copy(T),it=!0);break;default:console.warn(Q)}K=!1}return G}function s(Z){if(!(!Z.sheet||!Z.sheet.cssRules||!Z.sheet.cssRules.length))for(let G=0;G<Z.sheet.cssRules.length;G++){const T=Z.sheet.cssRules[G];if(T.type!==1)continue;const E=T.selectorText.split(/,/gm).filter(Boolean).map(W=>W.trim());for(let W=0;W<E.length;W++){const it=Object.fromEntries(Object.entries(T.style).filter(([,K])=>K!==""));F[E[W]]=Object.assign(F[E[W]]||{},it)}}}function o(Z,G,T,E,W,it,K,ot){if(G==0||T==0){Z.lineTo(ot.x,ot.y);return}E=E*Math.PI/180,G=Math.abs(G),T=Math.abs(T);const gt=(K.x-ot.x)/2,pt=(K.y-ot.y)/2,q=Math.cos(E)*gt+Math.sin(E)*pt,Q=-Math.sin(E)*gt+Math.cos(E)*pt;let tt=G*G,at=T*T;const b=q*q,O=Q*Q,ht=b/tt+O/at;if(ht>1){const Mt=Math.sqrt(ht);G=Mt*G,T=Mt*T,tt=G*G,at=T*T}const bt=tt*O+at*b,vt=(tt*at-bt)/bt;let N=Math.sqrt(Math.max(0,vt));W===it&&(N=-N);const S=N*G*Q/T,Y=-N*T*q/G,rt=Math.cos(E)*S-Math.sin(E)*Y+(K.x+ot.x)/2,mt=Math.sin(E)*S+Math.cos(E)*Y+(K.y+ot.y)/2,ct=a(1,0,(q-S)/G,(Q-Y)/T),Pt=a((q-S)/G,(Q-Y)/T,(-q-S)/G,(-Q-Y)/T)%(Math.PI*2);Z.currentPath.absellipse(rt,mt,G,T,ct,ct+Pt,it===0,E)}function a(Z,G,T,E){const W=Z*T+G*E,it=Math.sqrt(Z*Z+G*G)*Math.sqrt(T*T+E*E);let K=Math.acos(Math.max(-1,Math.min(1,W/it)));return Z*E-G*T<0&&(K=-K),K}function l(Z){const G=v(Z.getAttribute("x")||0),T=v(Z.getAttribute("y")||0),E=v(Z.getAttribute("rx")||Z.getAttribute("ry")||0),W=v(Z.getAttribute("ry")||Z.getAttribute("rx")||0),it=v(Z.getAttribute("width")),K=v(Z.getAttribute("height")),ot=1-.551915024494,gt=new Ai;return gt.moveTo(G+E,T),gt.lineTo(G+it-E,T),(E!==0||W!==0)&&gt.bezierCurveTo(G+it-E*ot,T,G+it,T+W*ot,G+it,T+W),gt.lineTo(G+it,T+K-W),(E!==0||W!==0)&&gt.bezierCurveTo(G+it,T+K-W*ot,G+it-E*ot,T+K,G+it-E,T+K),gt.lineTo(G+E,T+K),(E!==0||W!==0)&&gt.bezierCurveTo(G+E*ot,T+K,G,T+K-W*ot,G,T+K-W),gt.lineTo(G,T+W),(E!==0||W!==0)&&gt.bezierCurveTo(G,T+W*ot,G+E*ot,T,G+E,T),gt}function c(Z){function G(it,K,ot){const gt=v(K),pt=v(ot);W===0?E.moveTo(gt,pt):E.lineTo(gt,pt),W++}const T=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,E=new Ai;let W=0;return Z.getAttribute("points").replace(T,G),E.currentPath.autoClose=!0,E}function u(Z){function G(it,K,ot){const gt=v(K),pt=v(ot);W===0?E.moveTo(gt,pt):E.lineTo(gt,pt),W++}const T=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,E=new Ai;let W=0;return Z.getAttribute("points").replace(T,G),E.currentPath.autoClose=!1,E}function d(Z){const G=v(Z.getAttribute("cx")||0),T=v(Z.getAttribute("cy")||0),E=v(Z.getAttribute("r")||0),W=new ms;W.absarc(G,T,E,0,Math.PI*2);const it=new Ai;return it.subPaths.push(W),it}function h(Z){const G=v(Z.getAttribute("cx")||0),T=v(Z.getAttribute("cy")||0),E=v(Z.getAttribute("rx")||0),W=v(Z.getAttribute("ry")||0),it=new ms;it.absellipse(G,T,E,W,0,Math.PI*2);const K=new Ai;return K.subPaths.push(it),K}function f(Z){const G=v(Z.getAttribute("x1")||0),T=v(Z.getAttribute("y1")||0),E=v(Z.getAttribute("x2")||0),W=v(Z.getAttribute("y2")||0),it=new Ai;return it.moveTo(G,T),it.lineTo(E,W),it.currentPath.autoClose=!1,it}function p(Z,G){G=Object.assign({},G);let T={};if(Z.hasAttribute("class")){const K=Z.getAttribute("class").split(/\s/).filter(Boolean).map(ot=>ot.trim());for(let ot=0;ot<K.length;ot++)T=Object.assign(T,F["."+K[ot]])}Z.hasAttribute("id")&&(T=Object.assign(T,F["#"+Z.getAttribute("id")]));function E(K,ot,gt){gt===void 0&&(gt=function(q){return q.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),q}),Z.hasAttribute(K)&&(G[ot]=gt(Z.getAttribute(K))),T[ot]&&(G[ot]=gt(T[ot])),Z.style&&Z.style[K]!==""&&(G[ot]=gt(Z.style[K]))}function W(K){return Math.max(0,Math.min(1,v(K)))}function it(K){return Math.max(0,v(K))}return E("fill","fill"),E("fill-opacity","fillOpacity",W),E("fill-rule","fillRule"),E("opacity","opacity",W),E("stroke","stroke"),E("stroke-opacity","strokeOpacity",W),E("stroke-width","strokeWidth",it),E("stroke-linejoin","strokeLineJoin"),E("stroke-linecap","strokeLineCap"),E("stroke-miterlimit","strokeMiterLimit",it),E("visibility","visibility"),G}function _(Z,G){return Z-(G-Z)}function m(Z,G,T){if(typeof Z!="string")throw new TypeError("Invalid input: "+typeof Z);const E={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},W=0,it=1,K=2,ot=3;let gt=W,pt=!0,q="",Q="";const tt=[];function at(bt,vt,N){const S=new SyntaxError('Unexpected character "'+bt+'" at index '+vt+".");throw S.partial=N,S}function b(){q!==""&&(Q===""?tt.push(Number(q)):tt.push(Number(q)*Math.pow(10,Number(Q)))),q="",Q=""}let O;const ht=Z.length;for(let bt=0;bt<ht;bt++){if(O=Z[bt],Array.isArray(G)&&G.includes(tt.length%T)&&E.FLAGS.test(O)){gt=it,q=O,b();continue}if(gt===W){if(E.WHITESPACE.test(O))continue;if(E.DIGIT.test(O)||E.SIGN.test(O)){gt=it,q=O;continue}if(E.POINT.test(O)){gt=K,q=O;continue}E.COMMA.test(O)&&(pt&&at(O,bt,tt),pt=!0)}if(gt===it){if(E.DIGIT.test(O)){q+=O;continue}if(E.POINT.test(O)){q+=O,gt=K;continue}if(E.EXP.test(O)){gt=ot;continue}E.SIGN.test(O)&&q.length===1&&E.SIGN.test(q[0])&&at(O,bt,tt)}if(gt===K){if(E.DIGIT.test(O)){q+=O;continue}if(E.EXP.test(O)){gt=ot;continue}E.POINT.test(O)&&q[q.length-1]==="."&&at(O,bt,tt)}if(gt===ot){if(E.DIGIT.test(O)){Q+=O;continue}if(E.SIGN.test(O)){if(Q===""){Q+=O;continue}Q.length===1&&E.SIGN.test(Q)&&at(O,bt,tt)}}E.WHITESPACE.test(O)?(b(),gt=W,pt=!1):E.COMMA.test(O)?(b(),gt=W,pt=!0):E.SIGN.test(O)?(b(),gt=it,q=O):E.POINT.test(O)?(b(),gt=K,q=O):at(O,bt,tt)}return b(),tt}const g=["mm","cm","in","pt","pc","px"],x={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(Z){let G="px";if(typeof Z=="string"||Z instanceof String)for(let E=0,W=g.length;E<W;E++){const it=g[E];if(Z.endsWith(it)){G=it,Z=Z.substring(0,Z.length-it.length);break}}let T;return G==="px"&&e.defaultUnit!=="px"?T=x.in[e.defaultUnit]/e.defaultDPI:(T=x[G][e.defaultUnit],T<0&&(T=x[G].in*e.defaultDPI)),T*parseFloat(Z)}function M(Z){if(!(Z.hasAttribute("transform")||Z.nodeName==="use"&&(Z.hasAttribute("x")||Z.hasAttribute("y"))))return null;const G=A(Z);return k.length>0&&G.premultiply(k[k.length-1]),_t.copy(G),k.push(G),G}function A(Z){const G=new jt,T=U;if(Z.nodeName==="use"&&(Z.hasAttribute("x")||Z.hasAttribute("y"))){const E=v(Z.getAttribute("x")||0),W=v(Z.getAttribute("y")||0);G.translate(E,W)}if(Z.hasAttribute("transform")){const E=Z.getAttribute("transform").split(")");for(let W=E.length-1;W>=0;W--){const it=E[W].trim();if(it==="")continue;const K=it.indexOf("("),ot=it.length;if(K>0&&K<ot){const gt=it.slice(0,K),pt=m(it.slice(K+1));switch(T.identity(),gt){case"translate":if(pt.length>=1){const q=pt[0];let Q=0;pt.length>=2&&(Q=pt[1]),T.translate(q,Q)}break;case"rotate":if(pt.length>=1){let q=0,Q=0,tt=0;q=pt[0]*Math.PI/180,pt.length>=3&&(Q=pt[1],tt=pt[2]),D.makeTranslation(-Q,-tt),z.makeRotation(q),X.multiplyMatrices(z,D),D.makeTranslation(Q,tt),T.multiplyMatrices(D,X)}break;case"scale":if(pt.length>=1){const q=pt[0];let Q=q;pt.length>=2&&(Q=pt[1]),T.scale(q,Q)}break;case"skewX":pt.length===1&&T.set(1,Math.tan(pt[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":pt.length===1&&T.set(1,0,0,Math.tan(pt[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":pt.length===6&&T.set(pt[0],pt[2],pt[4],pt[1],pt[3],pt[5],0,0,1);break}}G.premultiply(T)}}return G}function R(Z,G){function T(K){ft.set(K.x,K.y,1).applyMatrix3(G),K.set(ft.x,ft.y)}function E(K){const ot=K.xRadius,gt=K.yRadius,pt=Math.cos(K.aRotation),q=Math.sin(K.aRotation),Q=new H(ot*pt,ot*q,0),tt=new H(-gt*q,gt*pt,0),at=Q.applyMatrix3(G),b=tt.applyMatrix3(G),O=U.set(at.x,b.x,0,at.y,b.y,0,0,0,1),ht=D.copy(O).invert(),N=z.copy(ht).transpose().multiply(ht).elements,S=L(N[0],N[1],N[4]),Y=Math.sqrt(S.rt1),rt=Math.sqrt(S.rt2);if(K.xRadius=1/Y,K.yRadius=1/rt,K.aRotation=Math.atan2(S.sn,S.cs),!((K.aEndAngle-K.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const ct=D.set(Y,0,0,0,rt,0,0,0,1),Pt=z.set(S.cs,S.sn,0,-S.sn,S.cs,0,0,0,1),Mt=ct.multiply(Pt).multiply(O),kt=Xt=>{const{x:xt,y:St}=new H(Math.cos(Xt),Math.sin(Xt),0).applyMatrix3(Mt);return Math.atan2(St,xt)};K.aStartAngle=kt(K.aStartAngle),K.aEndAngle=kt(K.aEndAngle),P(G)&&(K.aClockwise=!K.aClockwise)}}function W(K){const ot=w(G),gt=V(G);K.xRadius*=ot,K.yRadius*=gt;const pt=ot>Number.EPSILON?Math.atan2(G.elements[1],G.elements[0]):Math.atan2(-G.elements[3],G.elements[4]);K.aRotation+=pt,P(G)&&(K.aStartAngle*=-1,K.aEndAngle*=-1,K.aClockwise=!K.aClockwise)}const it=Z.subPaths;for(let K=0,ot=it.length;K<ot;K++){const pt=it[K].curves;for(let q=0;q<pt.length;q++){const Q=pt[q];Q.isLineCurve?(T(Q.v1),T(Q.v2)):Q.isCubicBezierCurve?(T(Q.v0),T(Q.v1),T(Q.v2),T(Q.v3)):Q.isQuadraticBezierCurve?(T(Q.v0),T(Q.v1),T(Q.v2)):Q.isEllipseCurve&&($.set(Q.aX,Q.aY),T($),Q.aX=$.x,Q.aY=$.y,y(G)?E(Q):W(Q))}}}function P(Z){const G=Z.elements;return G[0]*G[4]-G[1]*G[3]<0}function y(Z){const G=Z.elements,T=G[0]*G[3]+G[1]*G[4];if(T===0)return!1;const E=w(Z),W=V(Z);return Math.abs(T/(E*W))>Number.EPSILON}function w(Z){const G=Z.elements;return Math.sqrt(G[0]*G[0]+G[1]*G[1])}function V(Z){const G=Z.elements;return Math.sqrt(G[3]*G[3]+G[4]*G[4])}function L(Z,G,T){let E,W,it,K,ot;const gt=Z+T,pt=Z-T,q=Math.sqrt(pt*pt+4*G*G);return gt>0?(E=.5*(gt+q),ot=1/E,W=Z*ot*T-G*ot*G):gt<0?W=.5*(gt-q):(E=.5*q,W=-.5*q),pt>0?it=pt+q:it=pt-q,Math.abs(it)>2*Math.abs(G)?(ot=-2*G/it,K=1/Math.sqrt(1+ot*ot),it=ot*K):Math.abs(G)===0?(it=1,K=0):(ot=-.5*it/G,it=1/Math.sqrt(1+ot*ot),K=ot*it),pt>0&&(ot=it,it=-K,K=ot),{rt1:E,rt2:W,cs:it,sn:K}}const B=[],F={},k=[],U=new jt,D=new jt,z=new jt,X=new jt,$=new dt,ft=new H,_t=new jt,lt=new DOMParser().parseFromString(t,"image/svg+xml");return n(lt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:B,xml:lt.documentElement}}static createShapes(t){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function s(_,m,g,x){const v=_.x,M=m.x,A=g.x,R=x.x,P=_.y,y=m.y,w=g.y,V=x.y,L=(R-A)*(P-w)-(V-w)*(v-A),B=(M-v)*(P-w)-(y-P)*(v-A),F=(V-w)*(M-v)-(R-A)*(y-P),k=L/F,U=B/F;if(F===0&&L!==0||k<=0||k>=1||U<0||U>1)return null;if(L===0&&F===0){for(let D=0;D<2;D++)if(o(D===0?g:x,_,m),i.loc==n.ORIGIN){const z=D===0?g:x;return{x:z.x,y:z.y,t:i.t}}else if(i.loc==n.BETWEEN){const z=+(v+i.t*(M-v)).toPrecision(10),X=+(P+i.t*(y-P)).toPrecision(10);return{x:z,y:X,t:i.t}}return null}else{for(let X=0;X<2;X++)if(o(X===0?g:x,_,m),i.loc==n.ORIGIN){const $=X===0?g:x;return{x:$.x,y:$.y,t:i.t}}const D=+(v+k*(M-v)).toPrecision(10),z=+(P+k*(y-P)).toPrecision(10);return{x:D,y:z,t:k}}}function o(_,m,g){const x=g.x-m.x,v=g.y-m.y,M=_.x-m.x,A=_.y-m.y,R=x*A-M*v;if(_.x===m.x&&_.y===m.y){i.loc=n.ORIGIN,i.t=0;return}if(_.x===g.x&&_.y===g.y){i.loc=n.DESTINATION,i.t=1;return}if(R<-Number.EPSILON){i.loc=n.LEFT;return}if(R>Number.EPSILON){i.loc=n.RIGHT;return}if(x*M<0||v*A<0){i.loc=n.BEHIND;return}if(Math.sqrt(x*x+v*v)<Math.sqrt(M*M+A*A)){i.loc=n.BEYOND;return}let P;x!==0?P=M/x:P=A/v,i.loc=n.BETWEEN,i.t=P}function a(_,m){const g=[],x=[];for(let v=1;v<_.length;v++){const M=_[v-1],A=_[v];for(let R=1;R<m.length;R++){const P=m[R-1],y=m[R],w=s(M,A,P,y);w!==null&&g.find(V=>V.t<=w.t+Number.EPSILON&&V.t>=w.t-Number.EPSILON)===void 0&&(g.push(w),x.push(new dt(w.x,w.y)))}}return x}function l(_,m,g){const x=new dt;m.getCenter(x);const v=[];return g.forEach(M=>{M.boundingBox.containsPoint(x)&&a(_,M.points).forEach(R=>{v.push({identifier:M.identifier,isCW:M.isCW,point:R})})}),v.sort((M,A)=>M.point.x-A.point.x),v}function c(_,m,g,x,v){(v==null||v==="")&&(v="nonzero");const M=new dt;_.boundingBox.getCenter(M);const A=[new dt(g,M.y),new dt(x,M.y)],R=l(A,_.boundingBox,m);R.sort((B,F)=>B.point.x-F.point.x);const P=[],y=[];R.forEach(B=>{B.identifier===_.identifier?P.push(B):y.push(B)});const w=P[0].point.x,V=[];let L=0;for(;L<y.length&&y[L].point.x<w;)V.length>0&&V[V.length-1]===y[L].identifier?V.pop():V.push(y[L].identifier),L++;if(V.push(_.identifier),v==="evenodd"){const B=V.length%2===0,F=V[V.length-2];return{identifier:_.identifier,isHole:B,for:F}}else if(v==="nonzero"){let B=!0,F=null,k=null;for(let U=0;U<V.length;U++){const D=V[U];B?(k=m[D].isCW,B=!1,F=D):k!==m[D].isCW&&(k=m[D].isCW,B=!0)}return{identifier:_.identifier,isHole:B,for:F}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let u=999999999,d=-999999999,h=t.subPaths.map(_=>{const m=_.getPoints();let g=-999999999,x=999999999,v=-999999999,M=999999999;for(let A=0;A<m.length;A++){const R=m[A];R.y>g&&(g=R.y),R.y<x&&(x=R.y),R.x>v&&(v=R.x),R.x<M&&(M=R.x)}return d<=v&&(d=v+1),u>=M&&(u=M-1),{curves:_.curves,points:m,isCW:vi.isClockWise(m),identifier:-1,boundingBox:new Dm(new dt(M,x),new dt(v,g))}});h=h.filter(_=>_.points.length>1);for(let _=0;_<h.length;_++)h[_].identifier=_;const f=h.map(_=>c(_,h,u,d,t.userData?t.userData.style.fillRule:void 0)),p=[];return h.forEach(_=>{if(!f[_.identifier].isHole){const g=new ar;g.curves=_.curves,f.filter(v=>v.isHole&&v.for===_.identifier).forEach(v=>{const M=h[v.identifier],A=new ms;A.curves=M.curves,g.holes.push(A)}),p.push(g)}}),p}static getStrokeStyle(t,e,n,i,s){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(t,e,n,i){const s=[],o=[],a=[];if(cr.pointsToStrokeWithBuffers(t,e,n,i,s,o,a)===0)return null;const l=new He;return l.setAttribute("position",new Le(s,3)),l.setAttribute("normal",new Le(o,3)),l.setAttribute("uv",new Le(a,2)),l}static pointsToStrokeWithBuffers(t,e,n,i,s,o,a,l){const c=new dt,u=new dt,d=new dt,h=new dt,f=new dt,p=new dt,_=new dt,m=new dt,g=new dt,x=new dt,v=new dt,M=new dt,A=new dt,R=new dt,P=new dt,y=new dt,w=new dt;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,t=pt(t);const V=t.length;if(V<2)return 0;const L=t[0].equals(t[V-1]);let B,F=t[0],k;const U=e.strokeWidth/2,D=1/(V-1);let z=0,X,$,ft,_t,lt=!1,Ct=0,Z=l*3,G=l*2;T(t[0],t[1],c).multiplyScalar(U),m.copy(t[0]).sub(c),g.copy(t[0]).add(c),x.copy(m),v.copy(g);for(let q=1;q<V;q++){B=t[q],q===V-1?L?k=t[1]:k=void 0:k=t[q+1];const Q=c;if(T(F,B,Q),d.copy(Q).multiplyScalar(U),M.copy(B).sub(d),A.copy(B).add(d),X=z+D,$=!1,k!==void 0){T(B,k,u),d.copy(u).multiplyScalar(U),R.copy(B).sub(d),P.copy(B).add(d),ft=!0,d.subVectors(k,F),Q.dot(d)<0&&(ft=!1),q===1&&(lt=ft),d.subVectors(k,B),d.normalize();const tt=Math.abs(Q.dot(d));if(tt>Number.EPSILON){const at=U/tt;d.multiplyScalar(-at),h.subVectors(B,F),f.copy(h).setLength(at).add(d),y.copy(f).negate();const b=f.length(),O=h.length();h.divideScalar(O),p.subVectors(k,B);const ht=p.length();switch(p.divideScalar(ht),h.dot(y)<O&&p.dot(y)<ht&&($=!0),w.copy(f).add(B),y.add(B),_t=!1,$?ft?(P.copy(y),A.copy(y)):(R.copy(y),M.copy(y)):it(),e.strokeLineJoin){case"bevel":K(ft,$,X);break;case"round":ot(ft,$),ft?W(B,M,R,X,0):W(B,P,A,X,1);break;case"miter":case"miter-clip":default:const bt=U*e.strokeMiterLimit/b;if(bt<1)if(e.strokeLineJoin!=="miter-clip"){K(ft,$,X);break}else ot(ft,$),ft?(p.subVectors(w,M).multiplyScalar(bt).add(M),_.subVectors(w,R).multiplyScalar(bt).add(R),E(M,X,0),E(p,X,0),E(B,X,.5),E(B,X,.5),E(p,X,0),E(_,X,0),E(B,X,.5),E(_,X,0),E(R,X,0)):(p.subVectors(w,A).multiplyScalar(bt).add(A),_.subVectors(w,P).multiplyScalar(bt).add(P),E(A,X,1),E(p,X,1),E(B,X,.5),E(B,X,.5),E(p,X,1),E(_,X,1),E(B,X,.5),E(_,X,1),E(P,X,1));else $?(ft?(E(g,z,1),E(m,z,0),E(w,X,0),E(g,z,1),E(w,X,0),E(y,X,1)):(E(g,z,1),E(m,z,0),E(w,X,1),E(m,z,0),E(y,X,0),E(w,X,1)),ft?R.copy(w):P.copy(w)):ft?(E(M,X,0),E(w,X,0),E(B,X,.5),E(B,X,.5),E(w,X,0),E(R,X,0)):(E(A,X,1),E(w,X,1),E(B,X,.5),E(B,X,.5),E(w,X,1),E(P,X,1)),_t=!0;break}}else it()}else it();!L&&q===V-1&&gt(t[0],x,v,ft,!0,z),z=X,F=B,m.copy(R),g.copy(P)}if(!L)gt(B,M,A,ft,!1,X);else if($&&s){let q=w,Q=y;lt!==ft&&(q=y,Q=w),ft?(_t||lt)&&(Q.toArray(s,0),Q.toArray(s,9),_t&&q.toArray(s,3)):(_t||!lt)&&(Q.toArray(s,3),Q.toArray(s,9),_t&&q.toArray(s,0))}return Ct;function T(q,Q,tt){return tt.subVectors(Q,q),tt.set(-tt.y,tt.x).normalize()}function E(q,Q,tt){s&&(s[Z]=q.x,s[Z+1]=q.y,s[Z+2]=0,o&&(o[Z]=0,o[Z+1]=0,o[Z+2]=1),Z+=3,a&&(a[G]=Q,a[G+1]=tt,G+=2)),Ct+=3}function W(q,Q,tt,at,b){c.copy(Q).sub(q).normalize(),u.copy(tt).sub(q).normalize();let O=Math.PI;const ht=c.dot(u);Math.abs(ht)<1&&(O=Math.abs(Math.acos(ht))),O/=n,d.copy(Q);for(let bt=0,vt=n-1;bt<vt;bt++)h.copy(d).rotateAround(q,O),E(d,at,b),E(h,at,b),E(q,at,.5),d.copy(h);E(h,at,b),E(tt,at,b),E(q,at,.5)}function it(){E(g,z,1),E(m,z,0),E(M,X,0),E(g,z,1),E(M,X,0),E(A,X,1)}function K(q,Q,tt){Q?q?(E(g,z,1),E(m,z,0),E(M,X,0),E(g,z,1),E(M,X,0),E(y,X,1),E(M,tt,0),E(R,tt,0),E(y,tt,.5)):(E(g,z,1),E(m,z,0),E(A,X,1),E(m,z,0),E(y,X,0),E(A,X,1),E(A,tt,1),E(y,tt,0),E(P,tt,1)):q?(E(M,tt,0),E(R,tt,0),E(B,tt,.5)):(E(A,tt,1),E(P,tt,0),E(B,tt,.5))}function ot(q,Q){Q&&(q?(E(g,z,1),E(m,z,0),E(M,X,0),E(g,z,1),E(M,X,0),E(y,X,1),E(M,z,0),E(B,X,.5),E(y,X,1),E(B,X,.5),E(R,z,0),E(y,X,1)):(E(g,z,1),E(m,z,0),E(A,X,1),E(m,z,0),E(y,X,0),E(A,X,1),E(A,z,1),E(y,X,0),E(B,X,.5),E(B,X,.5),E(y,X,0),E(P,z,1)))}function gt(q,Q,tt,at,b,O){switch(e.strokeLineCap){case"round":b?W(q,tt,Q,O,.5):W(q,Q,tt,O,.5);break;case"square":if(b)c.subVectors(Q,q),u.set(c.y,-c.x),d.addVectors(c,u).add(q),h.subVectors(u,c).add(q),at?(d.toArray(s,3),h.toArray(s,0),h.toArray(s,9)):(d.toArray(s,3),a[7]===1?h.toArray(s,9):d.toArray(s,9),h.toArray(s,0));else{c.subVectors(tt,q),u.set(c.y,-c.x),d.addVectors(c,u).add(q),h.subVectors(u,c).add(q);const ht=s.length;at?(d.toArray(s,ht-3),h.toArray(s,ht-6),h.toArray(s,ht-12)):(h.toArray(s,ht-6),d.toArray(s,ht-3),h.toArray(s,ht-12))}break}}function pt(q){let Q=!1;for(let at=1,b=q.length-1;at<b;at++)if(q[at].distanceTo(q[at+1])<i){Q=!0;break}if(!Q)return q;const tt=[];tt.push(q[0]);for(let at=1,b=q.length-1;at<b;at++)q[at].distanceTo(q[at+1])>=i&&tt.push(q[at]);return tt.push(q[q.length-1]),tt}}}const Zh={type:"change"},ic={type:"start"},gd={type:"end"},oo=new Cs,$h=new mi,dy=Math.cos(70*Fu.DEG2RAD),we=new H,je=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ta=1e-6;class fy extends Fm{constructor(t,e=null){super(t,e),this.state=de.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new $e,this._lastTargetPosition=new H,this._quat=new $e().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xh,this._sphericalDelta=new xh,this._scale=1,this._panOffset=new H,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new H,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=my.bind(this),this._onPointerDown=py.bind(this),this._onPointerUp=gy.bind(this),this._onContextMenu=by.bind(this),this._onMouseWheel=vy.bind(this),this._onKeyDown=yy.bind(this),this._onTouchStart=My.bind(this),this._onTouchMove=Sy.bind(this),this._onMouseDown=_y.bind(this),this._onMouseMove=xy.bind(this),this._interceptControlDown=Ey.bind(this),this._interceptControlUp=Ty.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zh),this.update(),this.state=de.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=je:n>Math.PI&&(n-=je),i<-Math.PI?i+=je:i>Math.PI&&(i-=je),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=we.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new H(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(oo.origin.copy(this.object.position),oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oo.direction))<dy?this.object.lookAt(this.target):($h.setFromNormalAndCoplanarPoint(this.object.up,this.target),oo.intersectPlane($h,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ta||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ta||this._lastTargetPosition.distanceToSquared(this.target)>Ta?(this.dispatchEvent(Zh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?je/60*this.autoRotateSpeed*t:je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;we.copy(i).sub(this.target);let s=we.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function py(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function my(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function gy(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gd),this.state=de.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function _y(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=de.DOLLY;break;case ds.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=de.ROTATE}break;case ds.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(ic)}function xy(r){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function vy(r){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(r.preventDefault(),this.dispatchEvent(ic),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(gd))}function yy(r){this.enabled!==!1&&this._handleKeyDown(r)}function My(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=de.TOUCH_ROTATE;break;case Fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case Fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=de.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(ic)}function Sy(r){switch(this._trackPointer(r),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=de.NONE}}function by(r){this.enabled!==!1&&r.preventDefault()}function Ey(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ty(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class wy extends ge{constructor(t,e){super(),this.isViewHelper=!0,this.animating=!1,this.center=new H,this.location={top:null,right:0,bottom:0,left:null};const n=new Yt("#ff4466"),i=new Yt("#88ff44"),s=new Yt("#4488ff"),o=new Yt("#000000"),a={},l=[],c=new Nm,u=new dt,d=new ge,h=new Sr(-2,2,2,-2,0,4);h.position.set(0,0,2);const f=new Zl(.04,.04,.8,5).rotateZ(-Math.PI/2).translate(.4,0,0),p=new Te(f,_t(n)),_=new Te(f,_t(i)),m=new Te(f,_t(s));_.rotation.z=Math.PI/2,m.rotation.y=-Math.PI/2,this.add(p),this.add(m),this.add(_);const g=Z(n),x=Z(i),v=Z(s),M=Z(o),A=new ss(g),R=new ss(x),P=new ss(v),y=new ss(M),w=new ss(M),V=new ss(M);A.position.x=1,R.position.y=1,P.position.z=1,y.position.x=-1,w.position.y=-1,V.position.z=-1,y.material.opacity=.2,w.material.opacity=.2,V.material.opacity=.2,A.userData.type="posX",R.userData.type="posY",P.userData.type="posZ",y.userData.type="negX",w.userData.type="negY",V.userData.type="negZ",this.add(A),this.add(R),this.add(P),this.add(y),this.add(w),this.add(V),l.push(A),l.push(R),l.push(P),l.push(y),l.push(w),l.push(V);const L=new H,B=128,F=2*Math.PI;this.render=function(T){this.quaternion.copy(t.quaternion).invert(),this.updateMatrixWorld(),L.set(0,0,1),L.applyQuaternion(t.quaternion);const E=this.location;let W,it;E.left!==null?W=E.left:W=e.offsetWidth-B-E.right,E.top!==null?it=T.isWebGPURenderer?E.top:e.offsetHeight-B-E.top:it=T.isWebGPURenderer?e.offsetHeight-B-E.bottom:E.bottom,T.clearDepth(),T.getViewport(X),T.setViewport(W,it,B,B),T.render(this,h),T.setViewport(X.x,X.y,X.z,X.w)};const k=new H,U=new $e,D=new $e,z=new $e,X=new me;let $=0;this.handleClick=function(T){if(this.animating===!0)return!1;const E=e.getBoundingClientRect(),W=this.location;let it,K;W.left!==null?it=E.left+W.left:it=E.left+e.offsetWidth-B-W.right,W.top!==null?K=E.top+W.top:K=E.top+e.offsetHeight-B-W.bottom,u.x=(T.clientX-it)/B*2-1,u.y=-((T.clientY-K)/B)*2+1,c.setFromCamera(u,h);const ot=c.intersectObjects(l);if(ot.length>0){const pt=ot[0].object;return ft(pt,this.center),this.animating=!0,!0}else return!1},this.setLabels=function(T,E,W){a.labelX=T,a.labelY=E,a.labelZ=W,G()},this.setLabelStyle=function(T,E,W){a.font=T,a.color=E,a.radius=W,G()},this.update=function(T){const E=T*F;D.rotateTowards(z,E),t.position.set(0,0,1).applyQuaternion(D).multiplyScalar($).add(this.center),t.quaternion.rotateTowards(U,E),D.angleTo(z)===0&&(this.animating=!1)},this.dispose=function(){f.dispose(),p.material.dispose(),_.material.dispose(),m.material.dispose(),A.material.map.dispose(),R.material.map.dispose(),P.material.map.dispose(),y.material.map.dispose(),w.material.map.dispose(),V.material.map.dispose(),A.material.dispose(),R.material.dispose(),P.material.dispose(),y.material.dispose(),w.material.dispose(),V.material.dispose()};function ft(T,E){switch(T.userData.type){case"posX":k.set(1,0,0),U.setFromEuler(new Ve(0,Math.PI*.5,0));break;case"posY":k.set(0,1,0),U.setFromEuler(new Ve(-Math.PI*.5,0,0));break;case"posZ":k.set(0,0,1),U.setFromEuler(new Ve);break;case"negX":k.set(-1,0,0),U.setFromEuler(new Ve(0,-Math.PI*.5,0));break;case"negY":k.set(0,-1,0),U.setFromEuler(new Ve(Math.PI*.5,0,0));break;case"negZ":k.set(0,0,-1),U.setFromEuler(new Ve(0,Math.PI,0));break;default:console.error("ViewHelper: Invalid axis.")}$=t.position.distanceTo(E),k.multiplyScalar($).add(E),d.position.copy(E),d.lookAt(t.position),D.copy(d.quaternion),d.lookAt(k),z.copy(d.quaternion)}function _t(T){return new xi({color:T,toneMapped:!1})}function lt(){let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}return T}function Ct(T,E){let W;return lt()?W=new OffscreenCanvas(T,E):(W=document.createElement("canvas"),W.width=T,W.height=E),W}function Z(T,E){const{font:W="24px Arial",color:it="#000000",radius:K=14}=a,ot=Ct(64,64),gt=ot.getContext("2d");gt.beginPath(),gt.arc(32,32,K,0,2*Math.PI),gt.closePath(),gt.fillStyle=T.getStyle(),gt.fill(),E&&(gt.font=W,gt.textAlign="center",gt.fillStyle=it,gt.fillText(E,32,41));const pt=new up(ot);return pt.colorSpace=Re,new Vu({map:pt,toneMapped:!1})}function G(){A.material.map.dispose(),R.material.map.dispose(),P.material.map.dispose(),A.material.dispose(),R.material.dispose(),P.material.dispose(),A.material=Z(n,a.labelX),R.material=Z(i,a.labelY),P.material=Z(s,a.labelZ)}}}class _n{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new C);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new C);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new _n);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],d=n[5],h=n[6],f=n[7],p=n[8],_=i[0],m=i[1],g=i[2],x=i[3],v=i[4],M=i[5],A=i[6],R=i[7],P=i[8];return s[0]=o*_+a*x+l*A,s[1]=o*m+a*v+l*R,s[2]=o*g+a*M+l*P,s[3]=c*_+u*x+d*A,s[4]=c*m+u*v+d*R,s[5]=c*g+u*M+d*P,s[6]=h*_+f*x+p*A,s[7]=h*m+f*v+p*R,s[8]=h*g+f*M+p*P,e}scale(t,e){e===void 0&&(e=new _n);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new C);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3]=t.x,s[7]=t.y,s[11]=t.z;let l=3;const c=l;let u;const d=4;let h;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){u=d;do h=d-u,s[h+i*o]+=s[h+i*a];while(--u);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];u=d;do h=d-u,s[h+i*a]=h<=o?0:s[h+i*a]-s[h+i*o]*f;while(--u)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new _n);const e=3,n=6,i=Ay;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const l=a;let c;const u=n;let d;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=u;do d=u-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const h=i[s+n*o]/i[s+n*s];c=u;do d=u-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*h;while(--c)}}while(--a);s=2;do{o=s-1;do{const h=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*h;while(--c)}while(o--)}while(--s);s=2;do{const h=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*h;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,u=e*a,d=e*l,h=n*a,f=n*l,p=i*l,_=s*o,m=s*a,g=s*l,x=this.elements;return x[0]=1-(h+p),x[1]=u-g,x[2]=d+m,x[3]=u+g,x[4]=1-(c+p),x[5]=f-_,x[6]=d-m,x[7]=f+_,x[8]=1-(c+h),this}transpose(t){t===void 0&&(t=new _n);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Ay=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class C{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new C);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new C(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new C(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new _n([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new C);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new C);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new C),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new C),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new C),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Ry,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Cy;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Jh),Jh.almostEquals(t,e)}clone(){return new C(this.x,this.y,this.z)}}C.ZERO=new C(0,0,0);C.UNIT_X=new C(1,0,0);C.UNIT_Y=new C(0,1,0);C.UNIT_Z=new C(0,0,1);const Ry=new C,Cy=new C,Jh=new C;class nn{constructor(t){t===void 0&&(t={}),this.lowerBound=new C,this.upperBound=new C,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Qh),c=Qh),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new nn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),s.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=tu,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=tu,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(d,h)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(d,h));return!(p<0||f>p)}}const Qh=new C,tu=[new C,new C,new C,new C,new C,new C,new C,new C];class eu{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class _d{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class ye{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new C),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Py,i=Iy;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new ye);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+o*a+i*c-s*l,e.y=i*u+o*l+s*a-n*c,e.z=s*u+o*c+n*l-i*a,e.w=o*u-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new ye);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new ye),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new C);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*s-l*i,d=c*i+l*n-o*s,h=c*s+o*i-a*n,f=-o*n-a*i-l*s;return e.x=u*c+f*-o+d*-l-h*-a,e.y=d*c+f*-a+h*-o-u*-l,e.z=h*c+f*-l+u*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const d=o*o,h=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*f),i=Math.asin(2*u),s=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*u,this.y=s*c*a-l*o*u,this.z=s*o*u+l*c*a,this.w=s*o*a-l*c*u):i==="YXZ"?(this.x=l*o*a+s*c*u,this.y=s*c*a-l*o*u,this.z=s*o*u-l*c*a,this.w=s*o*a+l*c*u):i==="ZXY"?(this.x=l*o*a-s*c*u,this.y=s*c*a+l*o*u,this.z=s*o*u+l*c*a,this.w=s*o*a-l*c*u):i==="ZYX"?(this.x=l*o*a-s*c*u,this.y=s*c*a+l*o*u,this.z=s*o*u-l*c*a,this.w=s*o*a+l*c*u):i==="YZX"?(this.x=l*o*a+s*c*u,this.y=s*c*a+l*o*u,this.z=s*o*u-l*c*a,this.w=s*o*a-l*c*u):i==="XZY"&&(this.x=l*o*a-s*c*u,this.y=s*c*a-l*o*u,this.z=s*o*u+l*c*a,this.w=s*o*a+l*c*u),this}clone(){return new ye(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new ye);const i=this.x,s=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,u=t.z,d=t.w,h,f,p,_,m;return f=i*l+s*c+o*u+a*d,f<0&&(f=-f,l=-l,c=-c,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),p=Math.sin(h),_=Math.sin((1-e)*h)/p,m=Math.sin(e*h)/p):(_=1-e,m=e),n.x=_*i+m*l,n.y=_*s+m*c,n.z=_*o+m*u,n.w=_*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new ye);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,u=this.z,d=this.w,h=e*.5;return i.x+=h*(s*d+o*u-a*c),i.y+=h*(o*d+a*l-s*u),i.z+=h*(a*d+s*c-o*l),i.w+=h*(-s*l-o*c-a*u),i}}const Py=new C,Iy=new C,Ly={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Dt{constructor(t){t===void 0&&(t={}),this.id=Dt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Dt.idCounter=0;Dt.types=Ly;class re{constructor(t){t===void 0&&(t={}),this.position=new C,this.quaternion=new ye,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return re.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return re.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new C),n.vsub(t,i),e.conjugate(nu),nu.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new C),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new C),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new C),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const nu=new ye;class _s extends Dt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:Dt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new C;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new C;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];_s.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new C,o=new C;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){const u=new C;let d=-1,h=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){u.copy(n.faceNormals[p]),s.vmult(u,u);const _=u.dot(o);_>h&&(h=_,d=p)}const f=[];for(let p=0;p<n.faces[d].length;p++){const _=n.vertices[n.faces[d][p]],m=new C;m.copy(_),s.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){const c=new C,u=new C,d=new C,h=new C,f=new C,p=new C;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],c);const x=m.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<_&&(_=x,o.copy(c))}else{const g=a?a.length:m.faces.length;for(let x=0;x<g;x++){const v=a?a[x]:x;c.copy(m.faceNormals[v]),n.vmult(c,c);const M=m.testSepAxis(c,t,e,n,i,s);if(M===!1)return!1;M<_&&(_=M,o.copy(c))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){s.vmult(t.uniqueAxes[g],u);const x=m.testSepAxis(u,t,e,n,i,s);if(x===!1)return!1;x<_&&(_=x,o.copy(u))}else{const g=l?l.length:t.faces.length;for(let x=0;x<g;x++){const v=l?l[x]:x;u.copy(t.faceNormals[v]),s.vmult(u,u);const M=m.testSepAxis(u,t,e,n,i,s);if(M===!1)return!1;M<_&&(_=M,o.copy(u))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],h);for(let x=0;x!==t.uniqueEdges.length;x++)if(s.vmult(t.uniqueEdges[x],f),h.cross(f,p),!p.almostZero()){p.normalize();const v=m.testSepAxis(p,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(p))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;_s.project(a,t,n,i,wa),_s.project(e,t,s,o,Aa);const l=wa[0],c=wa[1],u=Aa[0],d=Aa[1];if(l<d||u<c)return!1;const h=l-d,f=u-c;return h<f?h:f}calculateLocalInertia(t,e){const n=new C,i=new C;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const l=new C,c=new C,u=new C,d=new C,h=new C,f=new C,p=new C,_=new C,m=this,g=[],x=i,v=g;let M=-1,A=Number.MAX_VALUE;for(let V=0;V<m.faces.length;V++){l.copy(m.faceNormals[V]),n.vmult(l,l);const L=l.dot(t);L<A&&(A=L,M=V)}if(M<0)return;const R=m.faces[M];R.connectedFaces=[];for(let V=0;V<m.faces.length;V++)for(let L=0;L<m.faces[V].length;L++)R.indexOf(m.faces[V][L])!==-1&&V!==M&&R.connectedFaces.indexOf(V)===-1&&R.connectedFaces.push(V);const P=R.length;for(let V=0;V<P;V++){const L=m.vertices[R[V]],B=m.vertices[R[(V+1)%P]];L.vsub(B,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[M]),n.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(L),n.vmult(f,f),e.vadd(f,f);const F=R.connectedFaces[V];p.copy(this.faceNormals[F]);const k=this.getPlaneConstantOfFace(F);_.copy(p),n.vmult(_,_);const U=k-_.dot(e);for(this.clipFaceAgainstPlane(x,v,_,U);x.length;)x.shift();for(;v.length;)x.push(v.shift())}p.copy(this.faceNormals[M]);const y=this.getPlaneConstantOfFace(M);_.copy(p),n.vmult(_,_);const w=y-_.dot(e);for(let V=0;V<x.length;V++){let L=_.dot(x[V])+w;if(L<=s&&(console.log(`clamped: depth=${L} to minDist=${s}`),L=s),L<=o){const B=x[V];if(L<=1e-6){const F={point:B,normal:_,depth:L};a.push(F)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let u=0;u<a;u++){if(c=t[u],o=n.dot(c)+i,s<0)if(o<0){const d=new C;d.copy(c),e.push(d)}else{const d=new C;l.lerp(c,s/(s-o),d),e.push(d)}else if(o<0){const d=new C;l.lerp(c,s/(s-o),d),e.push(d),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new C);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new C);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,l,c,u,d,h=new C;for(let f=0;f<s.length;f++){h.copy(s[f]),e.vmult(h,h),t.vadd(h,h);const p=h;(o===void 0||p.x<o)&&(o=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(u===void 0||p.y>u)&&(u=p.y),(l===void 0||p.z<l)&&(l=p.z),(d===void 0||p.z>d)&&(d=p.z)}n.set(o,a,l),i.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new C);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new C;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new C;t.vsub(l,c);const u=a.dot(c),d=new C;s.vsub(l,d);const h=a.dot(d);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=Ny;let l=0,c=0;const u=Dy,d=t.vertices;u.setZero(),re.vectorToLocalFrame(n,i,e,a),re.pointToLocalFrame(n,i,u,u);const h=u.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const p=d[f].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=h,l-=h,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const wa=[],Aa=[];new C;const Ny=new C,Dy=new C;class sc extends Dt{constructor(t){super({type:Dt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=C,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new _s({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new C),sc.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)pi.set(s[o][0],s[o][1],s[o][2]),e.vmult(pi,pi),t.vadd(pi,pi),n(pi.x,pi.y,pi.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;bn[0].set(s.x,s.y,s.z),bn[1].set(-s.x,s.y,s.z),bn[2].set(-s.x,-s.y,s.z),bn[3].set(-s.x,-s.y,-s.z),bn[4].set(s.x,-s.y,-s.z),bn[5].set(s.x,s.y,-s.z),bn[6].set(-s.x,s.y,-s.z),bn[7].set(s.x,-s.y,s.z);const o=bn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=bn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,d=l.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),d>i.z&&(i.z=d),c<n.x&&(n.x=c),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const pi=new C,bn=[new C,new C,new C,new C,new C,new C,new C,new C],rc={DYNAMIC:1,STATIC:2,KINEMATIC:4},oc={AWAKE:0,SLEEPY:1,SLEEPING:2};class Ft extends _d{constructor(t){t===void 0&&(t={}),super(),this.id=Ft.idCounter++,this.index=-1,this.world=null,this.vlambda=new C,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new C,this.previousPosition=new C,this.interpolatedPosition=new C,this.initPosition=new C,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new C,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new C,this.force=new C;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Ft.STATIC:Ft.DYNAMIC,typeof t.type==typeof Ft.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Ft.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new C,this.quaternion=new ye,this.initQuaternion=new ye,this.previousQuaternion=new ye,this.interpolatedQuaternion=new ye,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new C,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new C,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new C,this.invInertia=new C,this.invInertiaWorld=new _n,this.invMassSolve=0,this.invInertiaSolve=new C,this.invInertiaWorldSolve=new _n,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new C(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new C(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new nn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new C,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Ft.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Ft.SLEEPING&&this.dispatchEvent(Ft.wakeupEvent)}sleep(){this.sleepState=Ft.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===Ft.AWAKE&&n<i?(this.sleepState=Ft.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Ft.sleepyEvent)):e===Ft.SLEEPY&&n>i?this.wakeUp():e===Ft.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ft.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ft.SLEEPING||this.type===Ft.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new C),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new C),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new C,s=new ye;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Fy,o=Uy,a=this.quaternion,l=this.aabb,c=Oy;for(let u=0;u!==i;u++){const d=t[u];a.vmult(e[u],s),s.vadd(this.position,s),a.mult(n[u],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=By,i=zy;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new C),this.type!==Ft.DYNAMIC)return;this.sleepState===Ft.SLEEPING&&this.wakeUp();const n=ky;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new C),this.type!==Ft.DYNAMIC)return;const n=Vy,i=Hy;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===Ft.DYNAMIC&&(this.sleepState===Ft.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new C),this.type!==Ft.DYNAMIC)return;this.sleepState===Ft.SLEEPING&&this.wakeUp();const n=e,i=Gy;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Wy;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new C),this.type!==Ft.DYNAMIC)return;const n=Xy,i=qy;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Yy;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),sc.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new C;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ft.DYNAMIC||this.type===Ft.KINEMATIC)||this.sleepState===Ft.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*t;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;const p=d.elements,_=this.angularFactor,m=l.x*_.x,g=l.y*_.y,x=l.z*_.z;s.x+=t*(p[0]*m+p[1]*g+p[2]*x),s.y+=t*(p[3]*m+p[4]*g+p[5]*x),s.z+=t*(p[6]*m+p[7]*g+p[8]*x),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Ft.idCounter=0;Ft.COLLIDE_EVENT_NAME="collide";Ft.DYNAMIC=rc.DYNAMIC;Ft.STATIC=rc.STATIC;Ft.KINEMATIC=rc.KINEMATIC;Ft.AWAKE=oc.AWAKE;Ft.SLEEPY=oc.SLEEPY;Ft.SLEEPING=oc.SLEEPING;Ft.wakeupEvent={type:"wakeup"};Ft.sleepyEvent={type:"sleepy"};Ft.sleepEvent={type:"sleep"};const Fy=new C,Uy=new ye,Oy=new nn,By=new _n,zy=new _n;new _n;const ky=new C,Vy=new C,Hy=new C,Gy=new C,Wy=new C,Xy=new C,qy=new C,Yy=new C;class jy{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Ft.STATIC)!==0||t.sleepState===Ft.SLEEPING)&&((e.type&Ft.STATIC)!==0||e.sleepState===Ft.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Ky;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Zy,i=$y,s=Jy,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new C;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Ky=new C;new C;new ye;new C;const Zy={keys:[]},$y=[],Jy=[];new C;new C;new C;class xd extends jy{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Ao{constructor(){this.rayFromWorld=new C,this.rayToWorld=new C,this.hitNormalWorld=new C,this.hitPointWorld=new C,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let vd,yd,Md,Sd,bd,Ed,Td;const ac={CLOSEST:1,ANY:2,ALL:4};vd=Dt.types.SPHERE;yd=Dt.types.PLANE;Md=Dt.types.BOX;Sd=Dt.types.CYLINDER;bd=Dt.types.CONVEXPOLYHEDRON;Ed=Dt.types.HEIGHTFIELD;Td=Dt.types.TRIMESH;class Ee{get[vd](){return this._intersectSphere}get[yd](){return this._intersectPlane}get[Md](){return this._intersectBox}get[Sd](){return this._intersectConvex}get[bd](){return this._intersectConvex}get[Ed](){return this._intersectHeightfield}get[Td](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new C),e===void 0&&(e=new C),this.from=t.clone(),this.to=e.clone(),this.direction=new C,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ee.ANY,this.result=new Ao,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ee.ANY,this.result=e.result||new Ao,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(iu),Ra.length=0,t.broadphase.aabbQuery(t,iu,Ra),this.intersectBodies(Ra),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=Qy,s=tM;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(pM(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new C(0,0,1);e.vmult(c,c);const u=new C;o.vsub(n,u);const d=u.dot(c);a.vsub(n,u);const h=u.dot(c);if(d*h>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const p=new C,_=new C,m=new C;o.vsub(n,p);const g=-c.dot(p)/f;l.scale(g,_),o.vadd(_,m),this.reportIntersection(c,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=eM;o.from.copy(this.from),o.to.copy(this.to),re.pointToLocalFrame(n,e,o.from,o.from),re.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=nM;let l,c,u,d;l=c=0,u=d=t.data.length-1;const h=new nn;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<u;f++)for(let p=c;p<d;p++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,p,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(f,p,!1),re.pointToWorldFrame(n,e,t.pillarOffset,ao),this._intersectConvex(t.pillarConvex,e,ao,i,s,su),this.result.shouldStop)return;t.getConvexTrianglePillar(f,p,!0),re.pointToWorldFrame(n,e,t.pillarOffset,ao),this._intersectConvex(t.pillarConvex,e,ao,i,s,su)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*d,f=iM,p=sM;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1);else{const _=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=rM,l=ru,c=o&&o.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,f=this.direction,p=this.from,_=this.to,m=p.distanceTo(_),g=c?c.length:u.length,x=this.result;for(let v=0;!x.shouldStop&&v<g;v++){const M=c?c[v]:v,A=u[M],R=h[M],P=e,y=n;l.copy(d[A[0]]),P.vmult(l,l),l.vadd(y,l),l.vsub(p,l),P.vmult(R,a);const w=f.dot(a);if(Math.abs(w)<this.precision)continue;const V=a.dot(l)/w;if(!(V<0)){f.scale(V,Ke),Ke.vadd(p,Ke),pn.copy(d[A[0]]),P.vmult(pn,pn),y.vadd(pn,pn);for(let L=1;!x.shouldStop&&L<A.length-1;L++){En.copy(d[A[L]]),Tn.copy(d[A[L+1]]),P.vmult(En,En),P.vmult(Tn,Tn),y.vadd(En,En),y.vadd(Tn,Tn);const B=Ke.distanceTo(p);!(Ee.pointInTriangle(Ke,pn,En,Tn)||Ee.pointInTriangle(Ke,En,pn,Tn))||B>m||this.reportIntersection(a,Ke,s,i,M)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=oM,l=dM,c=fM,u=ru,d=aM,h=lM,f=cM,p=uM,_=hM,m=t.indices;t.vertices;const g=this.from,x=this.to,v=this.direction;c.position.copy(n),c.quaternion.copy(e),re.vectorToLocalFrame(n,e,v,d),re.pointToLocalFrame(n,e,g,h),re.pointToLocalFrame(n,e,x,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,f.vsub(h,d),d.normalize();const M=h.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let A=0,R=l.length;!this.result.shouldStop&&A!==R;A++){const P=l[A];t.getNormal(P,a),t.getVertex(m[P*3],pn),pn.vsub(h,u);const y=d.dot(a),w=a.dot(u)/y;if(w<0)continue;d.scale(w,Ke),Ke.vadd(h,Ke),t.getVertex(m[P*3+1],En),t.getVertex(m[P*3+2],Tn);const V=Ke.distanceSquared(h);!(Ee.pointInTriangle(Ke,En,pn,Tn)||Ee.pointInTriangle(Ke,pn,En,Tn))||V>M||(re.vectorToWorldFrame(e,a,_),re.pointToWorldFrame(n,e,Ke,p),this.reportIntersection(_,p,s,i,P))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Ee.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case Ee.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case Ee.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Di),n.vsub(e,Ys),t.vsub(e,Ca);const s=Di.dot(Di),o=Di.dot(Ys),a=Di.dot(Ca),l=Ys.dot(Ys),c=Ys.dot(Ca);let u,d;return(u=l*a-o*c)>=0&&(d=s*c-o*a)>=0&&u+d<s*l-o*o}}Ee.CLOSEST=ac.CLOSEST;Ee.ANY=ac.ANY;Ee.ALL=ac.ALL;const iu=new nn,Ra=[],Ys=new C,Ca=new C,Qy=new C,tM=new ye,Ke=new C,pn=new C,En=new C,Tn=new C;new C;new Ao;const su={faceList:[0]},ao=new C,eM=new Ee,nM=[],iM=new C,sM=new C,rM=new C;new C;new C;const ru=new C,oM=new C,aM=new C,lM=new C,cM=new C,hM=new C,uM=new C;new nn;const dM=[],fM=new re,Di=new C,lo=new C;function pM(r,t,e){e.vsub(r,Di);const n=Di.dot(t);return t.scale(n,lo),lo.vadd(r,lo),e.distanceTo(lo)}class mM{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class ou{constructor(){this.spatial=new C,this.rotational=new C}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class br{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=br.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new ou,this.jacobianElementB=new ou,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,u=i.invMassSolve;return s.scale(c,au),a.scale(u,lu),n.invInertiaWorldSolve.vmult(o,cu),i.invInertiaWorldSolve.vmult(l,hu),t.multiplyVectors(au,cu)+e.multiplyVectors(lu,hu)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(t.rotational,co),c+=co.dot(t.rotational),l.vmult(e.rotational,co),c+=co.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=gM;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}br.idCounter=0;const au=new C,lu=new C,cu=new C,hu=new C,co=new C,gM=new C;class _M extends br{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new C,this.rj=new C,this.ni=new C}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=xM,c=vM,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=s.velocity,f=s.angularVelocity;s.force,s.torque;const p=yM,_=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(_.spatial),l.negate(_.rotational),m.spatial.copy(g),m.rotational.copy(c),p.copy(s.position),p.vadd(a,p),p.vsub(i.position,p),p.vsub(o,p);const x=g.dot(p),v=this.restitution+1,M=v*h.dot(g)-v*u.dot(g)+f.dot(c)-d.dot(l),A=this.computeGiMf();return-x*e-M*n-t*A}getImpactVelocityAlongNormal(){const t=MM,e=SM,n=bM,i=EM,s=TM;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const xM=new C,vM=new C,yM=new C,MM=new C,SM=new C,bM=new C,EM=new C,TM=new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class uu extends br{constructor(t,e,n){super(t,e,-n,n),this.ri=new C,this.rj=new C,this.t=new C}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=wM,o=AM,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}}const wM=new C,AM=new C;class Lo{constructor(t,e,n){n=mM.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Lo.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Lo.idCounter=0;class No{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=No.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}No.idCounter=0;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new Ee;new C;new C;new C;new C(1,0,0),new C(0,1,0),new C(0,0,1);new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class RM extends _s{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],a=[],l=[],c=[],u=[],d=Math.cos,h=Math.sin;o.push(new C(-e*h(0),-n*.5,e*d(0))),c.push(0),o.push(new C(-t*h(0),n*.5,t*d(0))),u.push(1);for(let p=0;p<s;p++){const _=2*Math.PI/s*(p+1),m=2*Math.PI/s*(p+.5);p<s-1?(o.push(new C(-e*h(_),-n*.5,e*d(_))),c.push(2*p+2),o.push(new C(-t*h(_),n*.5,t*d(_))),u.push(2*p+3),l.push([2*p,2*p+1,2*p+3,2*p+2])):l.push([2*p,2*p+1,1,0]),(s%2===1||p<s/2)&&a.push(new C(-h(m),0,d(m)))}l.push(c),a.push(new C(0,1,0));const f=[];for(let p=0;p<u.length;p++)f.push(u[u.length-p-1]);l.push(f),super({vertices:o,faces:l,axes:a}),this.type=Dt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}class js extends Dt{constructor(){super({type:Dt.types.PLANE}),this.worldNormal=new C,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new C),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Xn.set(0,0,1),e.vmult(Xn,Xn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Xn.x===1?i.x=t.x:Xn.x===-1&&(n.x=t.x),Xn.y===1?i.y=t.y:Xn.y===-1&&(n.y=t.y),Xn.z===1?i.z=t.z:Xn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Xn=new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new nn;new C;new nn;new C;new C;new C;new C;new C;new C;new C;new nn;new C;new re;new nn;class CM{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class PM extends CM{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,u=t;let d,h,f,p,_,m;if(a!==0)for(let M=0;M!==c;M++)l[M].updateSolveMassProperties();const g=LM,x=NM,v=IM;g.length=a,x.length=a,v.length=a;for(let M=0;M!==a;M++){const A=o[M];v[M]=0,x[M]=A.computeB(u),g[M]=1/A.computeC()}if(a!==0){for(let R=0;R!==c;R++){const P=l[R],y=P.vlambda,w=P.wlambda;y.set(0,0,0),w.set(0,0,0)}for(n=0;n!==i;n++){p=0;for(let R=0;R!==a;R++){const P=o[R];d=x[R],h=g[R],m=v[R],_=P.computeGWlambda(),f=h*(d-_-P.eps*m),m+f<P.minForce?f=P.minForce-m:m+f>P.maxForce&&(f=P.maxForce-m),v[R]+=f,p+=f>0?f:-f,P.addToWlambda(f)}if(p*p<s)break}for(let R=0;R!==c;R++){const P=l[R],y=P.velocity,w=P.angularVelocity;P.vlambda.vmul(P.linearFactor,P.vlambda),y.vadd(P.vlambda,y),P.wlambda.vmul(P.angularFactor,P.wlambda),w.vadd(P.wlambda,w)}let M=o.length;const A=1/u;for(;M--;)o[M].multiplier=v[M]*A}return n}}const IM=[],LM=[],NM=[];class DM{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class FM extends DM{constructor(){super(...arguments),this.type=C}constructObject(){return new C}}const _e={sphereSphere:Dt.types.SPHERE,spherePlane:Dt.types.SPHERE|Dt.types.PLANE,boxBox:Dt.types.BOX|Dt.types.BOX,sphereBox:Dt.types.SPHERE|Dt.types.BOX,planeBox:Dt.types.PLANE|Dt.types.BOX,convexConvex:Dt.types.CONVEXPOLYHEDRON,sphereConvex:Dt.types.SPHERE|Dt.types.CONVEXPOLYHEDRON,planeConvex:Dt.types.PLANE|Dt.types.CONVEXPOLYHEDRON,boxConvex:Dt.types.BOX|Dt.types.CONVEXPOLYHEDRON,sphereHeightfield:Dt.types.SPHERE|Dt.types.HEIGHTFIELD,boxHeightfield:Dt.types.BOX|Dt.types.HEIGHTFIELD,convexHeightfield:Dt.types.CONVEXPOLYHEDRON|Dt.types.HEIGHTFIELD,sphereParticle:Dt.types.PARTICLE|Dt.types.SPHERE,planeParticle:Dt.types.PLANE|Dt.types.PARTICLE,boxParticle:Dt.types.BOX|Dt.types.PARTICLE,convexParticle:Dt.types.PARTICLE|Dt.types.CONVEXPOLYHEDRON,cylinderCylinder:Dt.types.CYLINDER,sphereCylinder:Dt.types.SPHERE|Dt.types.CYLINDER,planeCylinder:Dt.types.PLANE|Dt.types.CYLINDER,boxCylinder:Dt.types.BOX|Dt.types.CYLINDER,convexCylinder:Dt.types.CONVEXPOLYHEDRON|Dt.types.CYLINDER,heightfieldCylinder:Dt.types.HEIGHTFIELD|Dt.types.CYLINDER,particleCylinder:Dt.types.PARTICLE|Dt.types.CYLINDER,sphereTrimesh:Dt.types.SPHERE|Dt.types.TRIMESH,planeTrimesh:Dt.types.PLANE|Dt.types.TRIMESH};class UM{get[_e.sphereSphere](){return this.sphereSphere}get[_e.spherePlane](){return this.spherePlane}get[_e.boxBox](){return this.boxBox}get[_e.sphereBox](){return this.sphereBox}get[_e.planeBox](){return this.planeBox}get[_e.convexConvex](){return this.convexConvex}get[_e.sphereConvex](){return this.sphereConvex}get[_e.planeConvex](){return this.planeConvex}get[_e.boxConvex](){return this.boxConvex}get[_e.sphereHeightfield](){return this.sphereHeightfield}get[_e.boxHeightfield](){return this.boxHeightfield}get[_e.convexHeightfield](){return this.convexHeightfield}get[_e.sphereParticle](){return this.sphereParticle}get[_e.planeParticle](){return this.planeParticle}get[_e.boxParticle](){return this.boxParticle}get[_e.convexParticle](){return this.convexParticle}get[_e.cylinderCylinder](){return this.convexConvex}get[_e.sphereCylinder](){return this.sphereConvex}get[_e.planeCylinder](){return this.planeConvex}get[_e.boxCylinder](){return this.boxConvex}get[_e.convexCylinder](){return this.convexConvex}get[_e.heightfieldCylinder](){return this.heightfieldCylinder}get[_e.particleCylinder](){return this.particleCylinder}get[_e.sphereTrimesh](){return this.sphereTrimesh}get[_e.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new FM,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new _M(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=i.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=s.material||n.material,d=o.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const p=this.frictionEquationPool,_=p.length?p.pop():new uu(n,i,h*f),m=p.length?p.pop():new uu(n,i,h*f);return _.bi=m.bi=n,_.bj=m.bj=i,_.minForce=m.minForce=-h*f,_.maxForce=m.maxForce=h*f,_.ri.copy(t.ri),_.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(_.t,m.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=m.enabled=t.enabled,e.push(_,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Ii.setZero(),hs.setZero(),us.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Ii.vadd(e.ni,Ii),hs.vadd(e.ri,hs),us.vadd(e.rj,us)):(Ii.vsub(e.ni,Ii),hs.vadd(e.rj,hs),us.vadd(e.ri,us));const o=1/t;hs.scale(o,n.ri),us.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Ii.normalize(),Ii.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=zM,c=kM,u=OM,d=BM;for(let h=0,f=t.length;h!==f;h++){const p=t[h],_=e[h];let m=null;p.material&&_.material&&(m=n.getContactMaterial(p.material,_.material)||null);const g=p.type&Ft.KINEMATIC&&_.type&Ft.STATIC||p.type&Ft.STATIC&&_.type&Ft.KINEMATIC||p.type&Ft.KINEMATIC&&_.type&Ft.KINEMATIC;for(let x=0;x<p.shapes.length;x++){p.quaternion.mult(p.shapeOrientations[x],l),p.quaternion.vmult(p.shapeOffsets[x],u),u.vadd(p.position,u);const v=p.shapes[x];for(let M=0;M<_.shapes.length;M++){_.quaternion.mult(_.shapeOrientations[M],c),_.quaternion.vmult(_.shapeOffsets[M],d),d.vadd(_.position,d);const A=_.shapes[M];if(!(v.collisionFilterMask&A.collisionFilterGroup&&A.collisionFilterMask&v.collisionFilterGroup)||u.distanceTo(d)>v.boundingSphereRadius+A.boundingSphereRadius)continue;let R=null;v.material&&A.material&&(R=n.getContactMaterial(v.material,A.material)||null),this.currentContactMaterial=R||m||n.defaultContactMaterial;const P=v.type|A.type,y=this[P];if(y){let w=!1;v.type<A.type?w=y.call(this,v,A,u,d,l,c,p,_,v,A,g):w=y.call(this,A,v,d,u,c,l,_,p,v,A,g),w&&g&&(n.shapeOverlapKeeper.set(v.id,A.id),n.bodyOverlapKeeper.set(p.id,_.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,u,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,l,t,e,c,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,u,d){const h=this.createContactEquation(a,l,t,e,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,ho),h.ni.scale(h.ni.dot(ho),du),ho.vsub(du,h.rj),-ho.dot(h.ni)<=t.radius){if(d)return!0;const f=h.ri,p=h.rj;f.vadd(n,f),f.vsub(a.position,f),p.vadd(i,p),p.vsub(l.position,p),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}sphereBox(t,e,n,i,s,o,a,l,c,u,d){const h=this.v3pool,f=dS;n.vsub(i,uo),e.getSideNormals(f,o);const p=t.radius;let _=!1;const m=pS,g=mS,x=gS;let v=null,M=0,A=0,R=0,P=null;for(let D=0,z=f.length;D!==z&&_===!1;D++){const X=cS;X.copy(f[D]);const $=X.length();X.normalize();const ft=uo.dot(X);if(ft<$+p&&ft>0){const _t=hS,lt=uS;_t.copy(f[(D+1)%3]),lt.copy(f[(D+2)%3]);const Ct=_t.length(),Z=lt.length();_t.normalize(),lt.normalize();const G=uo.dot(_t),T=uo.dot(lt);if(G<Ct&&G>-Ct&&T<Z&&T>-Z){const E=Math.abs(ft-$-p);if((P===null||E<P)&&(P=E,A=G,R=T,v=$,m.copy(X),g.copy(_t),x.copy(lt),M++,d))return!0}}}if(M){_=!0;const D=this.createContactEquation(a,l,t,e,c,u);m.scale(-p,D.ri),D.ni.copy(m),D.ni.negate(D.ni),m.scale(v,m),g.scale(A,g),m.vadd(g,m),x.scale(R,x),m.vadd(x,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.vadd(i,D.rj),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let y=h.get();const w=fS;for(let D=0;D!==2&&!_;D++)for(let z=0;z!==2&&!_;z++)for(let X=0;X!==2&&!_;X++)if(y.set(0,0,0),D?y.vadd(f[0],y):y.vsub(f[0],y),z?y.vadd(f[1],y):y.vsub(f[1],y),X?y.vadd(f[2],y):y.vsub(f[2],y),i.vadd(y,w),w.vsub(n,w),w.lengthSquared()<p*p){if(d)return!0;_=!0;const $=this.createContactEquation(a,l,t,e,c,u);$.ri.copy(w),$.ri.normalize(),$.ni.copy($.ri),$.ri.scale(p,$.ri),$.rj.copy(y),$.ri.vadd(n,$.ri),$.ri.vsub(a.position,$.ri),$.rj.vadd(i,$.rj),$.rj.vsub(l.position,$.rj),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}h.release(y),y=null;const V=h.get(),L=h.get(),B=h.get(),F=h.get(),k=h.get(),U=f.length;for(let D=0;D!==U&&!_;D++)for(let z=0;z!==U&&!_;z++)if(D%3!==z%3){f[z].cross(f[D],V),V.normalize(),f[D].vadd(f[z],L),B.copy(n),B.vsub(L,B),B.vsub(i,B);const X=B.dot(V);V.scale(X,F);let $=0;for(;$===D%3||$===z%3;)$++;k.copy(n),k.vsub(F,k),k.vsub(L,k),k.vsub(i,k);const ft=Math.abs(X),_t=k.length();if(ft<f[$].length()&&_t<p){if(d)return!0;_=!0;const lt=this.createContactEquation(a,l,t,e,c,u);L.vadd(F,lt.rj),lt.rj.copy(lt.rj),k.negate(lt.ni),lt.ni.normalize(),lt.ri.copy(lt.rj),lt.ri.vadd(i,lt.ri),lt.ri.vsub(n,lt.ri),lt.ri.normalize(),lt.ri.scale(p,lt.ri),lt.ri.vadd(n,lt.ri),lt.ri.vsub(a.position,lt.ri),lt.rj.vadd(i,lt.rj),lt.rj.vsub(l.position,lt.rj),this.result.push(lt),this.createFrictionEquationsFromContact(lt,this.frictionResult)}}h.release(V,L,B,F,k)}planeBox(t,e,n,i,s,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}convexConvex(t,e,n,i,s,o,a,l,c,u,d,h,f){const p=IS;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,p,h,f)){const _=[],m=LS;t.clipAgainstHull(n,s,e,i,o,p,-100,100,_);let g=0;for(let x=0;x!==_.length;x++){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,u),M=v.ri,A=v.rj;p.negate(v.ni),_[x].normal.negate(m),m.scale(_[x].depth,m),_[x].point.vadd(m,M),A.copy(_[x].point),M.vsub(n,M),A.vsub(i,A),M.vadd(n,M),M.vsub(a.position,M),A.vadd(i,A),A.vsub(l.position,A),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,i,s,o,a,l,c,u,d){const h=this.v3pool;n.vsub(i,_S);const f=e.faceNormals,p=e.faces,_=e.vertices,m=t.radius;let g=!1;for(let x=0;x!==_.length;x++){const v=_[x],M=MS;o.vmult(v,M),i.vadd(M,M);const A=yS;if(M.vsub(n,A),A.lengthSquared()<m*m){if(d)return!0;g=!0;const R=this.createContactEquation(a,l,t,e,c,u);R.ri.copy(A),R.ri.normalize(),R.ni.copy(R.ri),R.ri.scale(m,R.ri),M.vsub(i,R.rj),R.ri.vadd(n,R.ri),R.ri.vsub(a.position,R.ri),R.rj.vadd(i,R.rj),R.rj.vsub(l.position,R.rj),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult);return}}for(let x=0,v=p.length;x!==v&&g===!1;x++){const M=f[x],A=p[x],R=SS;o.vmult(M,R);const P=bS;o.vmult(_[A[0]],P),P.vadd(i,P);const y=ES;R.scale(-m,y),n.vadd(y,y);const w=TS;y.vsub(P,w);const V=w.dot(R),L=wS;if(n.vsub(P,L),V<0&&L.dot(R)>0){const B=[];for(let F=0,k=A.length;F!==k;F++){const U=h.get();o.vmult(_[A[F]],U),i.vadd(U,U),B.push(U)}if(lS(B,R,n)){if(d)return!0;g=!0;const F=this.createContactEquation(a,l,t,e,c,u);R.scale(-m,F.ri),R.negate(F.ni);const k=h.get();R.scale(-V,k);const U=h.get();R.scale(-m,U),n.vsub(i,F.rj),F.rj.vadd(U,F.rj),F.rj.vadd(k,F.rj),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),h.release(k),h.release(U),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let D=0,z=B.length;D!==z;D++)h.release(B[D]);return}else for(let F=0;F!==A.length;F++){const k=h.get(),U=h.get();o.vmult(_[A[(F+1)%A.length]],k),o.vmult(_[A[(F+2)%A.length]],U),i.vadd(k,k),i.vadd(U,U);const D=xS;U.vsub(k,D);const z=vS;D.unit(z);const X=h.get(),$=h.get();n.vsub(k,$);const ft=$.dot(z);z.scale(ft,X),X.vadd(k,X);const _t=h.get();if(X.vsub(n,_t),ft>0&&ft*ft<D.lengthSquared()&&_t.lengthSquared()<m*m){if(d)return!0;const lt=this.createContactEquation(a,l,t,e,c,u);X.vsub(i,lt.rj),X.vsub(n,lt.ni),lt.ni.normalize(),lt.ni.scale(m,lt.ri),lt.rj.vadd(i,lt.rj),lt.rj.vsub(l.position,lt.rj),lt.ri.vadd(n,lt.ri),lt.ri.vsub(a.position,lt.ri),this.result.push(lt),this.createFrictionEquationsFromContact(lt,this.frictionResult);for(let Ct=0,Z=B.length;Ct!==Z;Ct++)h.release(B[Ct]);h.release(k),h.release(U),h.release(X),h.release(_t),h.release($);return}h.release(k),h.release(U),h.release(X),h.release(_t),h.release($)}for(let F=0,k=B.length;F!==k;F++)h.release(B[F])}}}planeConvex(t,e,n,i,s,o,a,l,c,u,d){const h=AS,f=RS;f.set(0,0,1),s.vmult(f,f);let p=0;const _=CS;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,_),f.dot(_)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,u),v=PS;f.scale(f.dot(_),v),h.vsub(v,v),v.vsub(n,x.ri),x.ni.copy(f),h.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,l,c,u,d){const h=e.data,f=t.radius,p=e.elementSize,_=WS,m=GS;re.pointToLocalFrame(i,o,n,m);let g=Math.floor((m.x-f)/p)-1,x=Math.ceil((m.x+f)/p)+1,v=Math.floor((m.y-f)/p)-1,M=Math.ceil((m.y+f)/p)+1;if(x<0||M<0||g>h.length||v>h[0].length)return;g<0&&(g=0),x<0&&(x=0),v<0&&(v=0),M<0&&(M=0),g>=h.length&&(g=h.length-1),x>=h.length&&(x=h.length-1),M>=h[0].length&&(M=h[0].length-1),v>=h[0].length&&(v=h[0].length-1);const A=[];e.getRectMinMax(g,v,x,M,A);const R=A[0],P=A[1];if(m.z-f>P||m.z+f<R)return;const y=this.result;for(let w=g;w<x;w++)for(let V=v;V<M;V++){const L=y.length;let B=!1;if(e.getConvexTrianglePillar(w,V,!1),re.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,_,s,o,a,l,t,e,d)),d&&B||(e.getConvexTrianglePillar(w,V,!0),re.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,_,s,o,a,l,t,e,d)),d&&B))return!0;if(y.length-L>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,l,c,u,d){const h=e.data,f=e.elementSize,p=t.boundingSphereRadius,_=VS,m=HS,g=kS;re.pointToLocalFrame(i,o,n,g);let x=Math.floor((g.x-p)/f)-1,v=Math.ceil((g.x+p)/f)+1,M=Math.floor((g.y-p)/f)-1,A=Math.ceil((g.y+p)/f)+1;if(v<0||A<0||x>h.length||M>h[0].length)return;x<0&&(x=0),v<0&&(v=0),M<0&&(M=0),A<0&&(A=0),x>=h.length&&(x=h.length-1),v>=h.length&&(v=h.length-1),A>=h[0].length&&(A=h[0].length-1),M>=h[0].length&&(M=h[0].length-1);const R=[];e.getRectMinMax(x,M,v,A,R);const P=R[0],y=R[1];if(!(g.z-p>y||g.z+p<P))for(let w=x;w<v;w++)for(let V=M;V<A;V++){let L=!1;if(e.getConvexTrianglePillar(w,V,!1),re.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,_,s,o,a,l,null,null,d,m,null)),d&&L||(e.getConvexTrianglePillar(w,V,!0),re.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,_,s,o,a,l,null,null,d,m,null)),d&&L))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,u,d){const h=US;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;const p=this.createContactEquation(l,a,e,t,c,u);h.normalize(),p.rj.copy(h),p.rj.scale(t.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,u,d){const h=NS;h.set(0,0,1),a.quaternion.vmult(h,h);const f=DS;if(i.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(l,a,e,t,c,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=FS;h.scale(h.dot(i),m),i.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexParticle(t,e,n,i,s,o,a,l,c,u,d){let h=-1;const f=BS,p=zS;let _=null;const m=OS;if(m.copy(i),m.vsub(n,m),s.conjugate(fu),fu.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let g=0,x=t.faces.length;g!==x;g++){const v=[t.worldVertices[t.faces[g][0]]],M=t.worldFaceNormals[g];i.vsub(v[0],pu);const A=-M.dot(pu);if(_===null||Math.abs(A)<Math.abs(_)){if(d)return!0;_=A,h=g,f.copy(M)}}if(h!==-1){const g=this.createContactEquation(l,a,e,t,c,u);f.scale(_,p),p.vadd(i,p),p.vsub(n,p),g.rj.copy(p),f.negate(g.ni),g.ri.set(0,0,0);const x=g.ri,v=g.rj;x.vadd(i,x),x.vsub(l.position,x),v.vadd(n,v),v.vsub(a.position,v),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,u,d){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,u,d)}particleCylinder(t,e,n,i,s,o,a,l,c,u,d){return this.convexParticle(e,t,i,n,o,s,l,a,c,u,d)}sphereTrimesh(t,e,n,i,s,o,a,l,c,u,d){const h=jM,f=KM,p=ZM,_=$M,m=JM,g=QM,x=iS,v=YM,M=XM,A=sS;re.pointToLocalFrame(i,o,n,m);const R=t.radius;x.lowerBound.set(m.x-R,m.y-R,m.z-R),x.upperBound.set(m.x+R,m.y+R,m.z+R),e.getTrianglesInAABB(x,A);const P=qM,y=t.radius*t.radius;for(let F=0;F<A.length;F++)for(let k=0;k<3;k++)if(e.getVertex(e.indices[A[F]*3+k],P),P.vsub(m,M),M.lengthSquared()<=y){if(v.copy(P),re.pointToWorldFrame(i,o,v,P),P.vsub(n,M),d)return!0;let U=this.createContactEquation(a,l,t,e,c,u);U.ni.copy(M),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(P),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let F=0;F<A.length;F++)for(let k=0;k<3;k++){e.getVertex(e.indices[A[F]*3+k],h),e.getVertex(e.indices[A[F]*3+(k+1)%3],f),f.vsub(h,p),m.vsub(f,g);const U=g.dot(p);m.vsub(h,g);let D=g.dot(p);if(D>0&&U<0&&(m.vsub(h,g),_.copy(p),_.normalize(),D=g.dot(_),_.scale(D,g),g.vadd(h,g),g.distanceTo(m)<t.radius)){if(d)return!0;const X=this.createContactEquation(a,l,t,e,c,u);g.vsub(m,X.ni),X.ni.normalize(),X.ni.scale(t.radius,X.ri),X.ri.vadd(n,X.ri),X.ri.vsub(a.position,X.ri),re.pointToWorldFrame(i,o,g,g),g.vsub(l.position,X.rj),re.vectorToWorldFrame(o,X.ni,X.ni),re.vectorToWorldFrame(o,X.ri,X.ri),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}}const w=tS,V=eS,L=nS,B=WM;for(let F=0,k=A.length;F!==k;F++){e.getTriangleVertices(A[F],w,V,L),e.getNormal(A[F],B),m.vsub(w,g);let U=g.dot(B);if(B.scale(U,g),m.vsub(g,g),U=g.distanceTo(m),Ee.pointInTriangle(g,w,V,L)&&U<t.radius){if(d)return!0;let D=this.createContactEquation(a,l,t,e,c,u);g.vsub(m,D.ni),D.ni.normalize(),D.ni.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),re.pointToWorldFrame(i,o,g,g),g.vsub(l.position,D.rj),re.vectorToWorldFrame(o,D.ni,D.ni),re.vectorToWorldFrame(o,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}A.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,u,d){const h=new C,f=VM;f.set(0,0,1),s.vmult(f,f);for(let p=0;p<e.vertices.length/3;p++){e.getVertex(p,h);const _=new C;_.copy(h),re.pointToWorldFrame(i,o,_,h);const m=HM;if(h.vsub(n,m),f.dot(m)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,u);x.ni.copy(f);const v=GM;f.scale(m.dot(f),v),h.vsub(v,v),x.ri.copy(v),x.ri.vsub(a.position,x.ri),x.rj.copy(h),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Ii=new C,hs=new C,us=new C,OM=new C,BM=new C,zM=new ye,kM=new ye,VM=new C,HM=new C,GM=new C,WM=new C,XM=new C;new C;const qM=new C,YM=new C,jM=new C,KM=new C,ZM=new C,$M=new C,JM=new C,QM=new C,tS=new C,eS=new C,nS=new C,iS=new nn,sS=[],ho=new C,du=new C,rS=new C,oS=new C,aS=new C;function lS(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=rS;r[(s+1)%i].vsub(o,a);const l=oS;a.cross(t,l);const c=aS;e.vsub(o,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const uo=new C,cS=new C,hS=new C,uS=new C,dS=[new C,new C,new C,new C,new C,new C],fS=new C,pS=new C,mS=new C,gS=new C,_S=new C,xS=new C,vS=new C,yS=new C,MS=new C,SS=new C,bS=new C,ES=new C,TS=new C,wS=new C;new C;new C;const AS=new C,RS=new C,CS=new C,PS=new C,IS=new C,LS=new C,NS=new C,DS=new C,FS=new C,US=new C,fu=new ye,OS=new C;new C;const BS=new C,pu=new C,zS=new C,kS=new C,VS=new C,HS=[0],GS=new C,WS=new C;class mu{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const u=n[l];for(;u>i[a];)a++;c=u===i[a],c||gu(t,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=i[l];for(;u>n[a];)a++;c=n[a]===u,c||gu(e,u)}}}function gu(r,t){r.push((t&4294901760)>>16,t&65535)}const Pa=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class XS{constructor(){this.data={keys:[]}}get(t,e){const n=Pa(t,e);return this.data[n]}set(t,e,n){const i=Pa(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Pa(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class qS extends _d{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new C,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new C,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new xd,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new PM,this.constraints=[],this.narrowphase=new UM(this),this.collisionMatrix=new eu,this.collisionMatrixPrevious=new eu,this.bodyOverlapKeeper=new mu,this.shapeOverlapKeeper=new mu,this.contactmaterials=[],this.contactMaterialTable=new XS,this.defaultMaterial=new No("default"),this.defaultContactMaterial=new Lo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Ao?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Ee.ALL,n.from=t,n.to=e,n.callback=i,Ia.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Ee.ANY,n.from=t,n.to=e,n.result=i,Ia.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Ee.CLOSEST,n.from=t,n.to=e,n.result=i,Ia.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Ft&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ae.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Ae.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Ae.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=$S,i=JS,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=Ft.DYNAMIC;let h=-1/0;const f=this.constraints,p=ZS;l.length();const _=l.x,m=l.y,g=l.z;let x=0;for(c&&(h=Ae.now()),x=0;x!==s;x++){const F=o[x];if(F.type===d){const k=F.force,U=F.mass;k.x+=U*_,k.y+=U*m,k.z+=U*g}}for(let F=0,k=this.subsystems.length;F!==k;F++)this.subsystems[F].update();c&&(h=Ae.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(u.broadphase=Ae.now()-h);let v=f.length;for(x=0;x!==v;x++){const F=f[x];if(!F.collideConnected)for(let k=n.length-1;k>=0;k-=1)(F.bodyA===n[k]&&F.bodyB===i[k]||F.bodyB===n[k]&&F.bodyA===i[k])&&(n.splice(k,1),i.splice(k,1))}this.collisionMatrixTick(),c&&(h=Ae.now());const M=KS,A=e.length;for(x=0;x!==A;x++)M.push(e[x]);e.length=0;const R=this.frictionEquations.length;for(x=0;x!==R;x++)p.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,M,this.frictionEquations,p),c&&(u.narrowphase=Ae.now()-h),c&&(h=Ae.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const P=e.length;for(let F=0;F!==P;F++){const k=e[F],U=k.bi,D=k.bj,z=k.si,X=k.sj;let $;if(U.material&&D.material?$=this.getContactMaterial(U.material,D.material)||this.defaultContactMaterial:$=this.defaultContactMaterial,$.friction,U.material&&D.material&&(U.material.friction>=0&&D.material.friction>=0&&U.material.friction*D.material.friction,U.material.restitution>=0&&D.material.restitution>=0&&(k.restitution=U.material.restitution*D.material.restitution)),a.addEquation(k),U.allowSleep&&U.type===Ft.DYNAMIC&&U.sleepState===Ft.SLEEPING&&D.sleepState===Ft.AWAKE&&D.type!==Ft.STATIC){const ft=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),_t=D.sleepSpeedLimit**2;ft>=_t*2&&(U.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===Ft.DYNAMIC&&D.sleepState===Ft.SLEEPING&&U.sleepState===Ft.AWAKE&&U.type!==Ft.STATIC){const ft=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),_t=U.sleepSpeedLimit**2;ft>=_t*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,D,!0),this.collisionMatrixPrevious.get(U,D)||(Ks.body=D,Ks.contact=k,U.dispatchEvent(Ks),Ks.body=U,D.dispatchEvent(Ks)),this.bodyOverlapKeeper.set(U.id,D.id),this.shapeOverlapKeeper.set(z.id,X.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Ae.now()-h,h=Ae.now()),x=0;x!==s;x++){const F=o[x];F.wakeUpAfterNarrowphase&&(F.wakeUp(),F.wakeUpAfterNarrowphase=!1)}for(v=f.length,x=0;x!==v;x++){const F=f[x];F.update();for(let k=0,U=F.equations.length;k!==U;k++){const D=F.equations[k];a.addEquation(D)}}a.solve(t,this),c&&(u.solve=Ae.now()-h),a.removeAllEquations();const y=Math.pow;for(x=0;x!==s;x++){const F=o[x];if(F.type&d){const k=y(1-F.linearDamping,t),U=F.velocity;U.scale(k,U);const D=F.angularVelocity;if(D){const z=y(1-F.angularDamping,t);D.scale(z,D)}}}this.dispatchEvent(jS),c&&(h=Ae.now());const V=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(x=0;x!==s;x++)o[x].integrate(t,V,L);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Ae.now()-h),this.stepnumber+=1,this.dispatchEvent(YS);let B=!0;if(this.allowSleep)for(B=!1,x=0;x!==s;x++){const F=o[x];F.sleepTick(this.time),F.sleepState!==Ft.SLEEPING&&(B=!0)}this.hasActiveBodies=B}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(qn,Yn),t){for(let s=0,o=qn.length;s<o;s+=2)Zs.bodyA=this.getBodyById(qn[s]),Zs.bodyB=this.getBodyById(qn[s+1]),this.dispatchEvent(Zs);Zs.bodyA=Zs.bodyB=null}if(e){for(let s=0,o=Yn.length;s<o;s+=2)$s.bodyA=this.getBodyById(Yn[s]),$s.bodyB=this.getBodyById(Yn[s+1]),this.dispatchEvent($s);$s.bodyA=$s.bodyB=null}qn.length=Yn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(qn,Yn),n){for(let s=0,o=qn.length;s<o;s+=2){const a=this.getShapeById(qn[s]),l=this.getShapeById(qn[s+1]);jn.shapeA=a,jn.shapeB=l,a&&(jn.bodyA=a.body),l&&(jn.bodyB=l.body),this.dispatchEvent(jn)}jn.bodyA=jn.bodyB=jn.shapeA=jn.shapeB=null}if(i){for(let s=0,o=Yn.length;s<o;s+=2){const a=this.getShapeById(Yn[s]),l=this.getShapeById(Yn[s+1]);Kn.shapeA=a,Kn.shapeB=l,a&&(Kn.bodyA=a.body),l&&(Kn.bodyB=l.body),this.dispatchEvent(Kn)}Kn.bodyA=Kn.bodyB=Kn.shapeA=Kn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new nn;const Ia=new Ee,Ae=globalThis.performance||{};if(!Ae.now){let r=Date.now();Ae.timing&&Ae.timing.navigationStart&&(r=Ae.timing.navigationStart),Ae.now=()=>Date.now()-r}new C;const YS={type:"postStep"},jS={type:"preStep"},Ks={type:Ft.COLLIDE_EVENT_NAME,body:null,contact:null},KS=[],ZS=[],$S=[],JS=[],qn=[],Yn=[],Zs={type:"beginContact",bodyA:null,bodyB:null},$s={type:"endContact",bodyA:null,bodyB:null},jn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Kn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},QS=()=>"ontouchstart"in window||navigator.maxTouchPoints>0;function tb(){const r=document.querySelector(".model-viewer");if(!r)return;let t,e,n,i,s,o,a={mesh:null,radius:.33,speed:5};const l=[];let c,u=new H,d=new H,h=Math.floor(Math.random()*3);const f=new H(...h<1?[3,1,-1]:h>1?[-3,1,-1]:[-2,1,-1]),_=new H(...h<1?[3,0,2]:h>1?[3,0,-2]:[3.23,0,0]).clone().sub(f),m=r.clientWidth<=r.clientHeight,g=r.dataset.modelPath||"",x=r.dataset.invertOrbit==="true",v=16578033,M=[{color:12593194,position:new H(0,0,0),scale:new H(1,1,1)},{color:2913972,position:new H(0,0,-.5),scale:new H(1,.6,1)},{color:13812806,position:new H(0,0,.5),scale:new H(1,.6,1)},{color:4238394,position:new H(0,0,1),scale:new H(1,.8,1)},{color:4238394,position:new H(0,0,-1),scale:new H(1,.8,1)}],A=()=>{o=new qS({gravity:new C(0,-9.82,0)}),o.broadphase=new xd,o.solver.iterations=10,o.defaultContactMaterial.friction=.3,o.defaultContactMaterial.restitution=.1;const U=new js;c=new Ft({mass:0,shape:U}),c.quaternion.setFromEuler(-Math.PI/2,0,0),o.addBody(c);const D=new Ft({mass:0}),z=(G,T,E)=>{let W=new ye;return W.setFromEuler(G,T,E),W};D.addShape(new js,new C(-1,0,0),z(0,Math.PI/2,0)),D.addShape(new js,new C(2,0,0),z(0,-Math.PI/2,0)),D.addShape(new js,new C(0,0,4),z(-Math.PI/6,Math.PI,0)),D.addShape(new js,new C(0,0,-4),z(Math.PI/6,0,0)),o.addBody(D),t=new jf,t.background=new Yt(v);const X=new xm(16777215,2),$=new od(16777215,1.5);$.position.set(0,3,1),$.castShadow=!0,$.shadow.mapSize.width=4096,$.shadow.mapSize.height=4096,$.shadow.camera.near=.1,$.shadow.camera.far=10,$.shadow.camera.left=-2,$.shadow.camera.right=2,$.shadow.camera.top=2,$.shadow.camera.bottom=-2,$.shadow.bias=-1e-4,$.shadow.normalBias=.02,t.add(X),t.add($),t.fog=new Xl(v,3,10),e=new Xe(m?60:35,r.clientWidth/r.clientHeight,.1,1e3),e.position.copy(f),n=new Cv({antialias:!0}),n.setPixelRatio(Math.min(window.devicePixelRatio,3)),n.setSize(r.clientWidth,r.clientHeight),n.toneMapping=Ll,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=nr,n.autoClear=!1,r.appendChild(n.domElement),s=new wy(e,n.domElement);const ft=document.createElement("div");ft.style.position="absolute",ft.style.right="0",ft.style.top="0",ft.style.width="128px",ft.style.height="128px",document.body.appendChild(ft),i=new fy(e,n.domElement),i.enableDamping=!0,i.enablePan=!1,i.enableZoom=QS(),i.touches.ONE=null,i.touches.TWO=Fi.DOLLY_ROTATE,i.minPolarAngle=Math.PI*.1,i.maxPolarAngle=Math.PI*.4,i.enabled=!1,x?i.rotateSpeed=-.3:i.rotateSpeed=.5,m&&(i.rotateSpeed*=2.5),i.target.set(0,.4,0),i.update();const _t=new Es(30,30),lt=new _i({color:v}),Ct=new Te(_t,lt);Ct.receiveShadow=!0,Ct.rotation.x=-Math.PI/2,Ct.position.set(0,-.002,0),t.add(Ct);for(let G=0;G<8;G++){const T=new Es(.1,30),E=new _i({color:G%2==0?15082279:3310264,opacity:.5,transparent:!0}),W=new Te(T,E);W.receiveShadow=!0,W.rotation.x=-Math.PI/2,W.position.set(-.8+G*.2,-.001,0),t.add(W)}const Z=new cr;Z.load("models/slogan_merge.svg",G=>{const T=G.paths,E=new $n,W=new _i({color:3355443});T.forEach(it=>{cr.createShapes(it).forEach(ot=>{const gt=new wo(ot,{depth:4,bevelEnabled:!1}),pt=new Te(gt,W);E.add(pt)})}),m?E.position.set(-1,1.5,1.15):E.position.set(-1,1,1.15),E.scale.set(.002,.002,.002),E.rotation.set(0,-Math.PI/2,Math.PI),t.add(E)}),Z.load("models/pangolin-mono.svg",G=>{const T=G.paths,E=new $n,W=new _i({color:13679231});T.forEach(it=>{cr.createShapes(it).forEach(ot=>{const gt=new wo(ot,{depth:30,bevelEnabled:!1});gt.center();const pt=new Te(gt,W);E.add(pt)})}),E.scale.set(.002,.002,.002),E.rotation.y=-Math.PI/2,E.position.set(-1.5,a.radius/2,-10),a.mesh=E,t.add(E)}),Promise.all([new Promise((G,T)=>{g?new Iv().load(g,E=>{const W=E.scene.children[0];W.castShadow=!0,W.receiveShadow=!0,W.geometry.computeBoundingBox(),W.geometry.center();for(const it of M){const K=W.clone(),ot=new _i;ot.color.setHex(it.color),ot.side=mn,K.material=ot,K.scale.set(it.scale.x,it.scale.y,it.scale.z);const gt=.24*it.scale.x,pt=.48*it.scale.y,q=new RM(gt*.78,gt,pt,4),Q=pt/2+.1,tt=new Ft({mass:1,position:new C(it.position.x,Q,it.position.z),linearDamping:.4,angularDamping:.8}),at=new ye;at.setFromAxisAngle(new C(0,1,0),Math.PI/4),tt.addShape(q,new C,at),o.addBody(tt),l.push({mesh:K,body:tt}),t.add(K)}G()},E=>{},E=>{console.error("An error occurred loading the model:",E),T(E)}):G()})]).then(()=>{document.querySelector(".model-viewer")?.classList.add("loaded"),F()})},R=new Sm,P=1/60;let y=0,w=0,V=!0,L=!1;new IntersectionObserver(U=>{U.forEach(D=>{V=D.isIntersecting,V&&F()})},{threshold:.1}).observe(r);const F=()=>{if(!V)return;requestAnimationFrame(F),R.update();const U=Math.min(R.getDelta(),.1);for(y+=U,w+=U;y>=P;)o.step(P),y-=P;if(L){const D=e.position.clone();d.copy(D).sub(u),u.copy(D);const z=d.length();if(z>5e-4){const X=z*100;l.forEach(({body:$})=>{const ft=new C(-d.x*X,.1,-d.z*X),_t=new C($.position.x,$.position.y,$.position.z);$.applyForce(ft,_t);const lt=X*.2,Ct=new C((Math.random()-.5)*lt,0,(Math.random()-.5)*lt);$.torque.vadd(Ct,$.torque)})}}else{const D=w/1.1;if(D<=1){const z=Math.min(1.724*D*(1-.26*D*(1+.616*D)),1),X=f.clone().add(_.clone().multiplyScalar(z));e.position.copy(X)}else u.copy(e.position.clone().add(new H(0,1.5+Math.random(),0))),i.enabled=!0,L=!0}i.update(),w>5&&a.mesh&&(a.mesh.rotation.x+=a.speed*U,a.mesh.position.z+=a.speed*a.radius*U,a.mesh.position.z>10&&(a.mesh.position.z=-10,a.speed=Math.random()*4+3)),l.forEach(({mesh:D,body:z})=>{D.position.copy(z.position),D.quaternion.copy(z.quaternion)}),n.clear(),n.render(t,e),n.clearDepth(),s.render(n)},k=()=>{e&&n&&r&&(e.aspect=r.clientWidth/r.clientHeight,e.updateProjectionMatrix(),n.setSize(r.clientWidth,r.clientHeight))};A(),window.addEventListener("load",()=>{try{window.addEventListener("resize",k)}catch(U){alert(U)}}),window.addEventListener("beforeunload",()=>{window.removeEventListener("resize",k),n&&n.dispose()})}tb();const eb=()=>"ontouchstart"in window||navigator.maxTouchPoints>0;let La;const fo=document.querySelector(".overlay");eb()&&(document.querySelector(".viewer-container")?.addEventListener("click",function(){fo?.classList.remove("hidden"),La=setTimeout(function(){fo?.classList.add("hidden")},1e3)}),window.addEventListener("scroll",function(){fo?.classList.remove("hidden"),window.clearTimeout(La),La=setTimeout(function(){fo?.classList.add("hidden")},500)}));
