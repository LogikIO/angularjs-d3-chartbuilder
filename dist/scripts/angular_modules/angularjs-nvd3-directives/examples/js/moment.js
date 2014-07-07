(function(e){function J(e,t){return function(n){return tt(e.call(this,n),t)}}function K(e,t){return function(n){return this.lang().ordinal(e.call(this,n),t)}}function Q(){}function G(e){pt(e),Z(this,e)}function Y(e){var t=ut(e),n=t.year||0,r=t.month||0,i=t.week||0,s=t.day||0,o=t.hour||0,u=t.minute||0,a=t.second||0,f=t.millisecond||0;this._milliseconds=+f+a*1e3+u*6e4+o*36e5,this._days=+s+i*7,this._months=+r+n*12,this._data={},this._bubble()}function Z(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return t.hasOwnProperty("toString")&&(e.toString=t.toString),t.hasOwnProperty("valueOf")&&(e.valueOf=t.valueOf),e}function et(e){return e<0?Math.ceil(e):Math.floor(e)}function tt(e,t,n){var r=Math.abs(e)+"",i=e>=0;while(r.length<t)r="0"+r;return(i?n?"+":"":"-")+r}function nt(e,n,r,i){var s=n._milliseconds,o=n._days,u=n._months,a,f;s&&e._d.setTime(+e._d+s*r);if(o||u)a=e.minute(),f=e.hour();o&&e.date(e.date()+o*r),u&&e.month(e.month()+u*r),s&&!i&&t.updateOffset(e);if(o||u)e.minute(a),e.hour(f)}function rt(e){return Object.prototype.toString.call(e)==="[object Array]"}function it(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function st(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),s=0,o;for(o=0;o<r;o++)(n&&e[o]!==t[o]||!n&&ft(e[o])!==ft(t[o]))&&s++;return s+i}function ot(e){if(e){var t=e.toLowerCase().replace(/(.)s$/,"$1");e=R[e]||U[t]||t}return e}function ut(e){var t={},n,r;for(r in e)e.hasOwnProperty(r)&&(n=ot(r),n&&(t[n]=e[r]));return t}function at(n){var r,i;if(n.indexOf("week")===0)r=7,i="day";else{if(n.indexOf("month")!==0)return;r=12,i="month"}t[n]=function(s,o){var u,a,f=t.fn._lang[n],l=[];typeof s=="number"&&(o=s,s=e),a=function(e){var n=t().utc().set(i,e);return f.call(t.fn._lang,n,s||"")};if(o!=null)return a(o);for(u=0;u<r;u++)l.push(a(u));return l}}function ft(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(t>=0?n=Math.floor(t):n=Math.ceil(t)),n}function lt(e,t){return(new Date(Date.UTC(e,t+1,0))).getUTCDate()}function ct(e){return ht(e)?366:365}function ht(e){return e%4===0&&e%100!==0||e%400===0}function pt(e){var t;e._a&&e._pf.overflow===-2&&(t=e._a[u]<0||e._a[u]>11?u:e._a[a]<1||e._a[a]>lt(e._a[o],e._a[u])?a:e._a[f]<0||e._a[f]>23?f:e._a[l]<0||e._a[l]>59?l:e._a[c]<0||e._a[c]>59?c:e._a[h]<0||e._a[h]>999?h:-1,e._pf._overflowDayOfYear&&(t<o||t>a)&&(t=a),e._pf.overflow=t)}function dt(e){e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function vt(e){return e._isValid==null&&(e._isValid=!isNaN(e._d.getTime())&&e._pf.overflow<0&&!e._pf.empty&&!e._pf.invalidMonth&&!e._pf.nullInput&&!e._pf.invalidFormat&&!e._pf.userInvalidated,e._strict&&(e._isValid=e._isValid&&e._pf.charsLeftOver===0&&e._pf.unusedTokens.length===0)),e._isValid}function mt(e){return e?e.toLowerCase().replace("_","-"):e}function gt(e,n){return n._isUTC?t(e).zone(n._offset||0):t(e).local()}function yt(e,t){return t.abbr=e,p[e]||(p[e]=new Q),p[e].set(t),p[e]}function bt(e){delete p[e]}function wt(e){var n=0,r,i,s,o,u=function(e){if(!p[e]&&d)try{require("./lang/"+e)}catch(t){}return p[e]};if(!e)return t.fn._lang;if(!rt(e)){i=u(e);if(i)return i;e=[e]}while(n<e.length){o=mt(e[n]).split("-"),r=o.length,s=mt(e[n+1]),s=s?s.split("-"):null;while(r>0){i=u(o.slice(0,r).join("-"));if(i)return i;if(s&&s.length>=r&&st(o,s,!0)>=r-1)break;r--}n++}return t.fn._lang}function Et(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function St(e){var t=e.match(y),n,r;for(n=0,r=t.length;n<r;n++)V[t[n]]?t[n]=V[t[n]]:t[n]=Et(t[n]);return function(i){var s="";for(n=0;n<r;n++)s+=t[n]instanceof Function?t[n].call(i,e):t[n];return s}}function xt(e,t){return e.isValid()?(t=Tt(t,e.lang()),z[t]||(z[t]=St(t)),z[t](e)):e.lang().invalidDate()}function Tt(e,t){function r(e){return t.longDateFormat(e)||e}var n=5;b.lastIndex=0;while(n>=0&&b.test(e))e=e.replace(b,r),b.lastIndex=0,n-=1;return e}function Nt(e,t){var n,r=t._strict;switch(e){case"DDDD":return M;case"YYYY":case"GGGG":case"gggg":return r?_:S;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return r?D:x;case"S":if(r)return A;case"SS":if(r)return O;case"SSS":case"DDD":return r?M:E;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return N;case"a":case"A":return wt(t._l)._meridiemParse;case"X":return L;case"Z":case"ZZ":return C;case"T":return k;case"SSSS":return T;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return r?O:w;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return r?A:w;default:return n=new RegExp(Dt(_t(e.replace("\\","")),"i")),n}}function Ct(e){e=e||"";var t=e.match(C)||[],n=t[t.length-1]||[],r=(n+"").match(F)||["-",0,0],i=+(r[1]*60)+ft(r[2]);return r[0]==="+"?-i:i}function kt(e,t,n){var r,i=n._a;switch(e){case"M":case"MM":t!=null&&(i[u]=ft(t)-1);break;case"MMM":case"MMMM":r=wt(n._l).monthsParse(t),r!=null?i[u]=r:n._pf.invalidMonth=t;break;case"D":case"DD":t!=null&&(i[a]=ft(t));break;case"DDD":case"DDDD":t!=null&&(n._dayOfYear=ft(t));break;case"YY":i[o]=ft(t)+(ft(t)>68?1900:2e3);break;case"YYYY":case"YYYYY":case"YYYYYY":i[o]=ft(t);break;case"a":case"A":n._isPm=wt(n._l).isPM(t);break;case"H":case"HH":case"h":case"hh":i[f]=ft(t);break;case"m":case"mm":i[l]=ft(t);break;case"s":case"ss":i[c]=ft(t);break;case"S":case"SS":case"SSS":case"SSSS":i[h]=ft(("0."+t)*1e3);break;case"X":n._d=new Date(parseFloat(t)*1e3);break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=Ct(t);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":e=e.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":e=e.substr(0,2),t&&(n._w=n._w||{},n._w[e]=t)}}function Lt(e){var n,r,i=[],s,c,h,p,d,v,m,g;if(e._d)return;s=Ot(e),e._w&&e._a[a]==null&&e._a[u]==null&&(h=function(n){var r=parseInt(n,10);return n?n.length<3?r>68?1900+r:2e3+r:r:e._a[o]==null?t().weekYear():e._a[o]},p=e._w,p.GG!=null||p.W!=null||p.E!=null?d=zt(h(p.GG),p.W||1,p.E,4,1):(v=wt(e._l),m=p.d!=null?It(p.d,v):p.e!=null?parseInt(p.e,10)+v._week.dow:0,g=parseInt(p.w,10)||1,p.d!=null&&m<v._week.dow&&g++,d=zt(h(p.gg),g,m,v._week.doy,v._week.dow)),e._a[o]=d.year,e._dayOfYear=d.dayOfYear),e._dayOfYear&&(c=e._a[o]==null?s[o]:e._a[o],e._dayOfYear>ct(c)&&(e._pf._overflowDayOfYear=!0),r=Ft(c,0,e._dayOfYear),e._a[u]=r.getUTCMonth(),e._a[a]=r.getUTCDate());for(n=0;n<3&&e._a[n]==null;++n)e._a[n]=i[n]=s[n];for(;n<7;n++)e._a[n]=i[n]=e._a[n]==null?n===2?1:0:e._a[n];i[f]+=ft((e._tzm||0)/60),i[l]+=ft((e._tzm||0)%60),e._d=(e._useUTC?Ft:jt).apply(null,i)}function At(e){var t;if(e._d)return;t=ut(e._i),e._a=[t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond],Lt(e)}function Ot(e){var t=new Date;return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Mt(e){e._a=[],e._pf.empty=!0;var t=wt(e._l),n=""+e._i,r,i,s,o,u,a=n.length,l=0;s=Tt(e._f,t).match(y)||[];for(r=0;r<s.length;r++)o=s[r],i=(n.match(Nt(o,e))||[])[0],i&&(u=n.substr(0,n.indexOf(i)),u.length>0&&e._pf.unusedInput.push(u),n=n.slice(n.indexOf(i)+i.length),l+=i.length),V[o]?(i?e._pf.empty=!1:e._pf.unusedTokens.push(o),kt(o,i,e)):e._strict&&!i&&e._pf.unusedTokens.push(o);e._pf.charsLeftOver=a-l,n.length>0&&e._pf.unusedInput.push(n),e._isPm&&e._a[f]<12&&(e._a[f]+=12),e._isPm===!1&&e._a[f]===12&&(e._a[f]=0),Lt(e),pt(e)}function _t(e){return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,r,i){return t||n||r||i})}function Dt(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Pt(e){var t,n,r,i,s;if(e._f.length===0){e._pf.invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<e._f.length;i++){s=0,t=Z({},e),dt(t),t._f=e._f[i],Mt(t);if(!vt(t))continue;s+=t._pf.charsLeftOver,s+=t._pf.unusedTokens.length*10,t._pf.score=s;if(r==null||s<r)r=s,n=t}Z(e,n||t)}function Ht(e){var t,n=e._i,r=P.exec(n);if(r){e._pf.iso=!0;for(t=4;t>0;t--)if(r[t]){e._f=B[t-1]+(r[6]||" ");break}for(t=0;t<4;t++)if(j[t][1].exec(n)){e._f+=j[t][0];break}n.match(C)&&(e._f+="Z"),Mt(e)}else e._d=new Date(n)}function Bt(t){var n=t._i,r=v.exec(n);n===e?t._d=new Date:r?t._d=new Date(+r[1]):typeof n=="string"?Ht(t):rt(n)?(t._a=n.slice(0),Lt(t)):it(n)?t._d=new Date(+n):typeof n=="object"?At(t):t._d=new Date(n)}function jt(e,t,n,r,i,s,o){var u=new Date(e,t,n,r,i,s,o);return e<1970&&u.setFullYear(e),u}function Ft(e){var t=new Date(Date.UTC.apply(null,arguments));return e<1970&&t.setUTCFullYear(e),t}function It(e,t){if(typeof e=="string")if(!isNaN(e))e=parseInt(e,10);else{e=t.weekdaysParse(e);if(typeof e!="number")return null}return e}function qt(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function Rt(e,t,n){var r=i(Math.abs(e)/1e3),s=i(r/60),o=i(s/60),u=i(o/24),a=i(u/365),f=r<45&&["s",r]||s===1&&["m"]||s<45&&["mm",s]||o===1&&["h"]||o<22&&["hh",o]||u===1&&["d"]||u<=25&&["dd",u]||u<=45&&["M"]||u<345&&["MM",i(u/30)]||a===1&&["y"]||["yy",a];return f[2]=t,f[3]=e>0,f[4]=n,qt.apply({},f)}function Ut(e,n,r){var i=r-n,s=r-e.day(),o;return s>i&&(s-=7),s<i-7&&(s+=7),o=t(e).add("d",s),{week:Math.ceil(o.dayOfYear()/7),year:o.year()}}function zt(e,t,n,r,i){var s=(new Date(tt(e,6,!0)+"-01-01")).getUTCDay(),o,u;return n=n!=null?n:i,o=i-s+(s>r?7:0),u=7*(t-1)+(n-i)+o+1,{year:u>0?e:e-1,dayOfYear:u>0?u:ct(e-1)+u}}function Wt(e){var n=e._i,r=e._f;return typeof e._pf=="undefined"&&dt(e),n===null?t.invalid({nullInput:!0}):(typeof n=="string"&&(e._i=n=wt().preparse(n)),t.isMoment(n)?(e=Z({},n),e._d=new Date(+n._d)):r?rt(r)?Pt(e):Mt(e):Bt(e),new G(e))}function Xt(e,n){t.fn[e]=t.fn[e+"s"]=function(e){var r=this._isUTC?"UTC":"";return e!=null?(this._d["set"+r+n](e),t.updateOffset(this),this):this._d["get"+r+n]()}}function Vt(e){t.duration.fn[e]=function(){return this._data[e]}}function $t(e,n){t.duration.fn["as"+e]=function(){return+this/n}}function Jt(e){var n=!1,i=t;if(typeof ender!="undefined")return;e?(r.moment=function(){return!n&&console&&console.warn&&(n=!0,console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")),i.apply(null,arguments)},Z(r.moment,i)):r.moment=t}var t,n="2.5.0",r=this,i=Math.round,s,o=0,u=1,a=2,f=3,l=4,c=5,h=6,p={},d=typeof module!="undefined"&&module.exports&&typeof require!="undefined",v=/^\/?Date\((\-?\d+)/i,m=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,g=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,y=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,b=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,w=/\d\d?/,E=/\d{1,3}/,S=/\d{1,4}/,x=/[+\-]?\d{1,6}/,T=/\d+/,N=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,C=/Z|[\+\-]\d\d:?\d\d/gi,k=/T/i,L=/[\+\-]?\d+(\.\d{1,3})?/,A=/\d/,O=/\d\d/,M=/\d{3}/,_=/\d{4}/,D=/[+\-]?\d{6}/,P=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,H="YYYY-MM-DDTHH:mm:ssZ",B=["YYYY-MM-DD","GGGG-[W]WW","GGGG-[W]WW-E","YYYY-DDD"],j=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],F=/([\+\-]|\d\d)/gi,I="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),q={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},R={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},U={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},z={},W="DDD w W M D d".split(" "),X="M D H h m s w W".split(" "),V={M:function(){return this.month()+1},MMM:function(e){return this.lang().monthsShort(this,e)},MMMM:function(e){return this.lang().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.lang().weekdaysMin(this,e)},ddd:function(e){return this.lang().weekdaysShort(this,e)},dddd:function(e){return this.lang().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return tt(this.year()%100,2)},YYYY:function(){return tt(this.year(),4)},YYYYY:function(){return tt(this.year(),5)},YYYYYY:function(){var e=this.year(),t=e>=0?"+":"-";return t+tt(Math.abs(e),6)},gg:function(){return tt(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return tt(this.weekYear(),5)},GG:function(){return tt(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return tt(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return ft(this.milliseconds()/100)},SS:function(){return tt(ft(this.milliseconds()/10),2)},SSS:function(){return tt(this.milliseconds(),3)},SSSS:function(){return tt(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";return e<0&&(e=-e,t="-"),t+tt(ft(e/60),2)+":"+tt(ft(e)%60,2)},ZZ:function(){var e=-this.zone(),t="+";return e<0&&(e=-e,t="-"),t+tt(ft(e/60),2)+tt(ft(e)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},$=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];while(W.length)s=W.pop(),V[s+"o"]=K(V[s],s);while(X.length)s=X.pop(),V[s+s]=J(V[s],2);V.DDDD=J(V.DDD,3),Z(Q.prototype,{set:function(e){var t,n;for(n in e)t=e[n],typeof t=="function"?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var n,r,i;this._monthsParse||(this._monthsParse=[]);for(n=0;n<12;n++){this._monthsParse[n]||(r=t.utc([2e3,n]),i="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[n]=new RegExp(i.replace(".",""),"i"));if(this._monthsParse[n].test(e))return n}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},weekdaysParse:function(e){var n,r,i;this._weekdaysParse||(this._weekdaysParse=[]);for(n=0;n<7;n++){this._weekdaysParse[n]||(r=t([2e3,1]).day(n),i="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[n]=new RegExp(i.replace(".",""),"i"));if(this._weekdaysParse[n].test(e))return n}},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},isPM:function(e){return(e+"").toLowerCase().charAt(0)==="p"},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return typeof n=="function"?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,r){var i=this._relativeTime[n];return typeof i=="function"?i(e,t,n,r):i.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return typeof n=="function"?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return Ut(e,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),t=function(t,n,r,i){return typeof r=="boolean"&&(i=r,r=e),Wt({_i:t,_f:n,_l:r,_strict:i,_isUTC:!1})},t.utc=function(t,n,r,i){var s;return typeof r=="boolean"&&(i=r,r=e),s=Wt({_useUTC:!0,_isUTC:!0,_l:r,_i:t,_f:n,_strict:i}).utc(),s},t.unix=function(e){return t(e*1e3)},t.duration=function(e,n){var r=e,i=null,s,o,u;return t.isDuration(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:typeof e=="number"?(r={},n?r[n]=e:r.milliseconds=e):(i=m.exec(e))?(s=i[1]==="-"?-1:1,r={y:0,d:ft(i[a])*s,h:ft(i[f])*s,m:ft(i[l])*s,s:ft(i[c])*s,ms:ft(i[h])*s}):!(i=g.exec(e))||(s=i[1]==="-"?-1:1,u=function(e){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*s},r={y:u(i[2]),M:u(i[3]),d:u(i[4]),h:u(i[5]),m:u(i[6]),s:u(i[7]),w:u(i[8])}),o=new Y(r),t.isDuration(e)&&e.hasOwnProperty("_lang")&&(o._lang=e._lang),o},t.version=n,t.defaultFormat=H,t.updateOffset=function(){},t.lang=function(e,n){var r;return e?(n?yt(mt(e),n):n===null?(bt(e),e="en"):p[e]||wt(e),r=t.duration.fn._lang=t.fn._lang=wt(e),r._abbr):t.fn._lang._abbr},t.langData=function(e){return e&&e._lang&&e._lang._abbr&&(e=e._lang._abbr),wt(e)},t.isMoment=function(e){return e instanceof G},t.isDuration=function(e){return e instanceof Y};for(s=$.length-1;s>=0;--s)at($[s]);t.normalizeUnits=function(e){return ot(e)},t.invalid=function(e){var n=t.utc(NaN);return e!=null?Z(n._pf,e):n._pf.userInvalidated=!0,n},t.parseZone=function(e){return t(e).parseZone()},Z(t.fn=G.prototype,{clone:function(){return t(this)},valueOf:function(){return+this._d+(this._offset||0)*6e4},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var e=t(this).utc();return 0<e.year()&&e.year()<=9999?xt(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):xt(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return vt(this)},isDSTShifted:function(){return this._a?this.isValid()&&st(this._a,(this._isUTC?t.utc(this._a):t(this._a)).toArray())>0:!1},parsingFlags:function(){return Z({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(e){var n=xt(this,e||t.defaultFormat);return this.lang().postformat(n)},add:function(e,n){var r;return typeof e=="string"?r=t.duration(+n,e):r=t.duration(e,n),nt(this,r,1),this},subtract:function(e,n){var r;return typeof e=="string"?r=t.duration(+n,e):r=t.duration(e,n),nt(this,r,-1),this},diff:function(e,n,r){var i=gt(e,this),s=(this.zone()-i.zone())*6e4,o,u;return n=ot(n),n==="year"||n==="month"?(o=(this.daysInMonth()+i.daysInMonth())*432e5,u=(this.year()-i.year())*12+(this.month()-i.month()),u+=(this-t(this).startOf("month")-(i-t(i).startOf("month")))/o,u-=(this.zone()-t(this).startOf("month").zone()-(i.zone()-t(i).startOf("month").zone()))*6e4/o,n==="year"&&(u/=12)):(o=this-i,u=n==="second"?o/1e3:n==="minute"?o/6e4:n==="hour"?o/36e5:n==="day"?(o-s)/864e5:n==="week"?(o-s)/6048e5:o),r?u:et(u)},from:function(e,n){return t.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!n)},fromNow:function(e){return this.from(t(),e)},calendar:function(){var e=gt(t(),this).startOf("day"),n=this.diff(e,"days",!0),r=n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse";return this.format(this.lang().calendar(r,this))},isLeapYear:function(){return ht(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=It(e,this.lang()),this.add({d:e-t})):t},month:function(e){var n=this._isUTC?"UTC":"",r;if(e!=null){if(typeof e=="string"){e=this.lang().monthsParse(e);if(typeof e!="number")return this}return r=this.date(),this.date(1),this._d["set"+n+"Month"](e),this.date(Math.min(r,this.daysInMonth())),t.updateOffset(this),this}return this._d["get"+n+"Month"]()},startOf:function(e){e=ot(e);switch(e){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return e==="week"?this.weekday(0):e==="isoWeek"&&this.isoWeekday(1),this},endOf:function(e){return e=ot(e),this.startOf(e).add(e==="isoWeek"?"week":e,1).subtract("ms",1)},isAfter:function(e,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)>+t(e).startOf(n)},isBefore:function(e,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)<+t(e).startOf(n)},isSame:function(e,t){return t=t||"ms",+this.clone().startOf(t)===+gt(e,this).startOf(t)},min:function(e){return e=t.apply(null,arguments),e<this?this:e},max:function(e){return e=t.apply(null,arguments),e>this?this:e},zone:function(e){var n=this._offset||0;return e==null?this._isUTC?n:this._d.getTimezoneOffset():(typeof e=="string"&&(e=Ct(e)),Math.abs(e)<16&&(e*=60),this._offset=e,this._isUTC=!0,n!==e&&nt(this,t.duration(n-e,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):typeof this._i=="string"&&this.zone(this._i),this},hasAlignedHourOffset:function(e){return e?e=t(e).zone():e=0,(this.zone()-e)%60===0},daysInMonth:function(){return lt(this.year(),this.month())},dayOfYear:function(e){var n=i((t(this).startOf("day")-t(this).startOf("year"))/864e5)+1;return e==null?n:this.add("d",e-n)},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(e){var t=Ut(this,this.lang()._week.dow,this.lang()._week.doy).year;return e==null?t:this.add("y",e-t)},isoWeekYear:function(e){var t=Ut(this,1,4).year;return e==null?t:this.add("y",e-t)},week:function(e){var t=this.lang().week(this);return e==null?t:this.add("d",(e-t)*7)},isoWeek:function(e){var t=Ut(this,1,4).week;return e==null?t:this.add("d",(e-t)*7)},weekday:function(e){var t=(this.day()+7-this.lang()._week.dow)%7;return e==null?t:this.add("d",e-t)},isoWeekday:function(e){return e==null?this.day()||7:this.day(this.day()%7?e:e-7)},get:function(e){return e=ot(e),this[e]()},set:function(e,t){return e=ot(e),typeof this[e]=="function"&&this[e](t),this},lang:function(t){return t===e?this._lang:(this._lang=wt(t),this)}});for(s=0;s<I.length;s++)Xt(I[s].toLowerCase().replace(/s$/,""),I[s]);Xt("year","FullYear"),t.fn.days=t.fn.day,t.fn.months=t.fn.month,t.fn.weeks=t.fn.week,t.fn.isoWeeks=t.fn.isoWeek,t.fn.toJSON=t.fn.toISOString,Z(t.duration.fn=Y.prototype,{_bubble:function(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,s,o,u;r.milliseconds=e%1e3,i=et(e/1e3),r.seconds=i%60,s=et(i/60),r.minutes=s%60,o=et(s/60),r.hours=o%24,t+=et(o/24),r.days=t%30,n+=et(t/30),r.months=n%12,u=et(n/12),r.years=u},weeks:function(){return et(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months%12*2592e6+ft(this._months/12)*31536e6},humanize:function(e){var t=+this,n=Rt(t,!e,this.lang());return e&&(n=this.lang().pastFuture(t,n)),this.lang().postformat(n)},add:function(e,n){var r=t.duration(e,n);return this._milliseconds+=r._milliseconds,this._days+=r._days,this._months+=r._months,this._bubble(),this},subtract:function(e,n){var r=t.duration(e,n);return this._milliseconds-=r._milliseconds,this._days-=r._days,this._months-=r._months,this._bubble(),this},get:function(e){return e=ot(e),this[e.toLowerCase()+"s"]()},as:function(e){return e=ot(e),this["as"+e.charAt(0).toUpperCase()+e.slice(1)+"s"]()},lang:t.fn.lang,toIsoString:function(){var e=Math.abs(this.years()),t=Math.abs(this.months()),n=Math.abs(this.days()),r=Math.abs(this.hours()),i=Math.abs(this.minutes()),s=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(e?e+"Y":"")+(t?t+"M":"")+(n?n+"D":"")+(r||i||s?"T":"")+(r?r+"H":"")+(i?i+"M":"")+(s?s+"S":""):"P0D"}});for(s in q)q.hasOwnProperty(s)&&($t(s,q[s]),Vt(s.toLowerCase()));$t("Weeks",6048e5),t.duration.fn.asMonths=function(){return(+this-this.years()*31536e6)/2592e6+this.years()*12},t.lang("en",{ordinal:function(e){var t=e%10,n=ft(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}}),d?(module.exports=t,Jt(!0)):typeof define=="function"&&define.amd?define("moment",["require","exports","module"],function(n,r,i){return i.config&&i.config()&&i.config().noGlobal!==!0&&Jt(i.config().noGlobal===e),t}):Jt()}).call(this);