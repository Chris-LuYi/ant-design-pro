(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+QRC":function(U,L,n){"use strict";var d=n("E9nw"),g={"text/plain":"Text","text/html":"Url",default:"Text"},a="Copy to clipboard: #{key}, Enter";function Y(z){var O=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return z.replace(/#{\s*key\s*}/g,O)}function w(z,O){var R,ie,ce,ee,V,j,H=!1;O||(O={}),R=O.debug||!1;try{ce=d(),ee=document.createRange(),V=document.getSelection(),j=document.createElement("span"),j.textContent=z,j.style.all="unset",j.style.position="fixed",j.style.top=0,j.style.clip="rect(0, 0, 0, 0)",j.style.whiteSpace="pre",j.style.webkitUserSelect="text",j.style.MozUserSelect="text",j.style.msUserSelect="text",j.style.userSelect="text",j.addEventListener("copy",function(C){if(C.stopPropagation(),O.format)if(C.preventDefault(),typeof C.clipboardData=="undefined"){R&&console.warn("unable to use e.clipboardData"),R&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var de=g[O.format]||g.default;window.clipboardData.setData(de,z)}else C.clipboardData.clearData(),C.clipboardData.setData(O.format,z);O.onCopy&&(C.preventDefault(),O.onCopy(C.clipboardData))}),document.body.appendChild(j),ee.selectNodeContents(j),V.addRange(ee);var Z=document.execCommand("copy");if(!Z)throw new Error("copy command was unsuccessful");H=!0}catch(C){R&&console.error("unable to copy using execCommand: ",C),R&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(O.format||"text",z),O.onCopy&&O.onCopy(window.clipboardData),H=!0}catch(de){R&&console.error("unable to copy using clipboardData: ",de),R&&console.error("falling back to prompt"),ie=Y("message"in O?O.message:a),window.prompt(ie,z)}}finally{V&&(typeof V.removeRange=="function"?V.removeRange(ee):V.removeAllRanges()),j&&document.body.removeChild(j),ce()}return H}U.exports=w},"/qDX":function(U,L,n){},"14J3":function(U,L,n){"use strict";var d=n("cIOH"),g=n.n(d),a=n("1GLa")},BMrR:function(U,L,n){"use strict";var d=n("qrJ5");L.a=d.a},E9nw:function(U,L){U.exports=function(){var n=document.getSelection();if(!n.rangeCount)return function(){};for(var d=document.activeElement,g=[],a=0;a<n.rangeCount;a++)g.push(n.getRangeAt(a));switch(d.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":d.blur();break;default:d=null;break}return n.removeAllRanges(),function(){n.type==="Caret"&&n.removeAllRanges(),n.rangeCount||g.forEach(function(Y){n.addRange(Y)}),d&&d.focus()}}},G3dp:function(U,L,n){"use strict";var d=n("q1tI"),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},a=g,Y=n("6VBw"),w=function(R,ie){return d.createElement(Y.a,Object.assign({},R,{ref:ie,icon:a}))};w.displayName="EditOutlined";var z=L.a=d.forwardRef(w)},IzEo:function(U,L,n){"use strict";var d=n("cIOH"),g=n.n(d),a=n("lnY3"),Y=n.n(a),w=n("Znn+"),z=n("14J3"),O=n("jCWc")},bx4M:function(U,L,n){"use strict";var d=n("rePB"),g=n("wx14"),a=n("q1tI"),Y=n("TSYQ"),w=n.n(Y),z=n("bT9E"),O=n("H84U"),R=function(y,u){var x={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&u.indexOf(s)<0&&(x[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,s=Object.getOwnPropertySymbols(y);m<s.length;m++)u.indexOf(s[m])<0&&Object.prototype.propertyIsEnumerable.call(y,s[m])&&(x[s[m]]=y[s[m]]);return x},ie=function(u){var x=u.prefixCls,s=u.className,m=u.hoverable,ue=m===void 0?!0:m,le=R(u,["prefixCls","className","hoverable"]);return a.createElement(O.a,null,function(oe){var te=oe.getPrefixCls,q=te("card",x),F=w()("".concat(q,"-grid"),s,Object(d.a)({},"".concat(q,"-grid-hoverable"),ue));return a.createElement("div",Object(g.a)({},le,{className:F}))})},ce=ie,ee=function(y,u){var x={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&u.indexOf(s)<0&&(x[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,s=Object.getOwnPropertySymbols(y);m<s.length;m++)u.indexOf(s[m])<0&&Object.prototype.propertyIsEnumerable.call(y,s[m])&&(x[s[m]]=y[s[m]]);return x},V=function(u){return a.createElement(O.a,null,function(x){var s=x.getPrefixCls,m=u.prefixCls,ue=u.className,le=u.avatar,oe=u.title,te=u.description,q=ee(u,["prefixCls","className","avatar","title","description"]),F=s("card",m),pe=w()("".concat(F,"-meta"),ue),fe=le?a.createElement("div",{className:"".concat(F,"-meta-avatar")},le):null,se=oe?a.createElement("div",{className:"".concat(F,"-meta-title")},oe):null,ge=te?a.createElement("div",{className:"".concat(F,"-meta-description")},te):null,be=se||ge?a.createElement("div",{className:"".concat(F,"-meta-detail")},se,ge):null;return a.createElement("div",Object(g.a)({},q,{className:pe}),fe,be)})},j=V,H=n("ZTPi"),Z=n("BMrR"),C=n("kPKH"),de=n("3Nzz"),ze=function(y,u){var x={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&u.indexOf(s)<0&&(x[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,s=Object.getOwnPropertySymbols(y);m<s.length;m++)u.indexOf(s[m])<0&&Object.prototype.propertyIsEnumerable.call(y,s[m])&&(x[s[m]]=y[s[m]]);return x};function We(y){var u=y.map(function(x,s){return a.createElement("li",{style:{width:"".concat(100/y.length,"%")},key:"action-".concat(s)},a.createElement("span",null,x))});return u}var Se=function(u){var x,s,m=a.useContext(O.b),ue=m.getPrefixCls,le=m.direction,oe=a.useContext(de.b),te=function(Pe){var ae;(ae=u.onTabChange)===null||ae===void 0||ae.call(u,Pe)},q=function(){var Pe;return a.Children.forEach(u.children,function(ae){ae&&ae.type&&ae.type===ce&&(Pe=!0)}),Pe},F=u.prefixCls,pe=u.className,fe=u.extra,se=u.headStyle,ge=se===void 0?{}:se,be=u.bodyStyle,Te=be===void 0?{}:be,Oe=u.title,Me=u.loading,Ie=u.bordered,$e=Ie===void 0?!0:Ie,He=u.size,xe=u.type,Ke=u.cover,Ne=u.actions,ve=u.tabList,h=u.children,Ce=u.activeTabKey,De=u.defaultActiveTabKey,_e=u.tabBarExtraContent,ke=u.hoverable,Ae=u.tabProps,Ge=Ae===void 0?{}:Ae,Fe=ze(u,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),S=ue("card",F),Je=Te.padding===0||Te.padding==="0px"?{padding:24}:void 0,_=a.createElement("div",{className:"".concat(S,"-loading-block")}),Re=a.createElement("div",{className:"".concat(S,"-loading-content"),style:Je},a.createElement(Z.a,{gutter:8},a.createElement(C.a,{span:22},_)),a.createElement(Z.a,{gutter:8},a.createElement(C.a,{span:8},_),a.createElement(C.a,{span:15},_)),a.createElement(Z.a,{gutter:8},a.createElement(C.a,{span:6},_),a.createElement(C.a,{span:18},_)),a.createElement(Z.a,{gutter:8},a.createElement(C.a,{span:13},_),a.createElement(C.a,{span:9},_)),a.createElement(Z.a,{gutter:8},a.createElement(C.a,{span:4},_),a.createElement(C.a,{span:3},_),a.createElement(C.a,{span:16},_))),ye=Ce!==void 0,Qe=Object(g.a)(Object(g.a)({},Ge),(x={},Object(d.a)(x,ye?"activeKey":"defaultActiveKey",ye?Ce:De),Object(d.a)(x,"tabBarExtraContent",_e),x)),we,Be=ve&&ve.length?a.createElement(H.a,Object(g.a)({size:"large"},Qe,{className:"".concat(S,"-head-tabs"),onChange:te}),ve.map(function(me){return a.createElement(H.a.TabPane,{tab:me.tab,disabled:me.disabled,key:me.key})})):null;(Oe||fe||Be)&&(we=a.createElement("div",{className:"".concat(S,"-head"),style:ge},a.createElement("div",{className:"".concat(S,"-head-wrapper")},Oe&&a.createElement("div",{className:"".concat(S,"-head-title")},Oe),fe&&a.createElement("div",{className:"".concat(S,"-extra")},fe)),Be));var Xe=Ke?a.createElement("div",{className:"".concat(S,"-cover")},Ke):null,Ye=a.createElement("div",{className:"".concat(S,"-body"),style:Te},Me?Re:h),Ve=Ne&&Ne.length?a.createElement("ul",{className:"".concat(S,"-actions")},We(Ne)):null,Ze=Object(z.a)(Fe,["onTabChange"]),Ue=He||oe,qe=w()(S,(s={},Object(d.a)(s,"".concat(S,"-loading"),Me),Object(d.a)(s,"".concat(S,"-bordered"),$e),Object(d.a)(s,"".concat(S,"-hoverable"),ke),Object(d.a)(s,"".concat(S,"-contain-grid"),q()),Object(d.a)(s,"".concat(S,"-contain-tabs"),ve&&ve.length),Object(d.a)(s,"".concat(S,"-").concat(Ue),Ue),Object(d.a)(s,"".concat(S,"-type-").concat(xe),!!xe),Object(d.a)(s,"".concat(S,"-rtl"),le==="rtl"),s),pe);return a.createElement("div",Object(g.a)({},Ze,{className:qe}),we,Xe,Ye,Ve)};Se.Grid=ce,Se.Meta=j;var he=L.a=Se},jCWc:function(U,L,n){"use strict";var d=n("cIOH"),g=n.n(d),a=n("1GLa")},kPKH:function(U,L,n){"use strict";var d=n("/kpp");L.a=d.a},lnY3:function(U,L,n){},tU7J:function(U,L,n){"use strict";var d=n("cIOH"),g=n.n(d),a=n("/qDX"),Y=n.n(a),w=n("5Dmo"),z=n("5NDa")},wFql:function(U,L,n){"use strict";var d=n("wx14"),g=n("rePB"),a=n("q1tI"),Y=n("TSYQ"),w=n.n(Y),z=n("c+Xe"),O=n("H84U"),R=n("uaoM"),ie=function(i,r){var o={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&r.indexOf(e)<0&&(o[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(i);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(i,e[t])&&(o[e[t]]=i[e[t]]);return o},ce=function(r,o){var e=r.prefixCls,t=r.component,l=t===void 0?"article":t,c=r.className,f=r["aria-label"],p=r.setContentRef,v=r.children,T=ie(r,["prefixCls","component","className","aria-label","setContentRef","children"]),E=o;return p&&(Object(R.a)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),E=Object(z.a)(o,p)),a.createElement(O.a,null,function(I){var D=I.getPrefixCls,J=I.direction,k=l,K=D("typography",e),Q=w()(K,Object(g.a)({},"".concat(K,"-rtl"),J==="rtl"),c);return a.createElement(k,Object(d.a)({className:Q,"aria-label":f,ref:E},T),v)})},ee=a.forwardRef(ce);ee.displayName="Typography";var V=ee,j=V,H=n("U8pU"),Z=n("bT9E"),C=n("KQm4"),de=n("1OyB"),ze=n("vuIU"),We=n("Ji7U"),Se=n("LK+K"),he=n("Zm9Q"),y=n("+QRC"),u=n.n(y),x=n("G3dp"),s=n("bRQS"),m=n("lfch"),ue=n("6ner"),le=n("wEI+"),oe=n("YMnH"),te=n("gDlH"),q=n("oHiP"),F=n("R3zJ"),pe=n("3S7+"),fe=n("ODXe"),se=n("4IlW"),ge={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},be=ge,Te=n("6VBw"),Oe=function(r,o){return a.createElement(Te.a,Object.assign({},r,{ref:o,icon:be}))};Oe.displayName="EnterOutlined";var Me=a.forwardRef(Oe),Ie=n("whJP"),$e=function(r){var o=r.prefixCls,e=r["aria-label"],t=r.className,l=r.style,c=r.direction,f=r.maxLength,p=r.autoSize,v=p===void 0?!0:p,T=r.value,E=r.onSave,I=r.onCancel,D=r.onEnd,J=a.useRef(),k=a.useRef(!1),K=a.useRef(),Q=a.useState(T),ne=Object(fe.a)(Q,2),G=ne[0],re=ne[1];a.useEffect(function(){re(T)},[T]),a.useEffect(function(){if(J.current&&J.current.resizableTextArea){var P=J.current.resizableTextArea.textArea;P.focus();var N=P.value.length;P.setSelectionRange(N,N)}},[]);var Ee=function(N){var B=N.target;re(B.value.replace(/[\n\r]/g,""))},b=function(){k.current=!0},M=function(){k.current=!1},A=function(N){var B=N.keyCode;k.current||(K.current=B)},W=function(){E(G.trim())},X=function(N){var B=N.keyCode,et=N.ctrlKey,tt=N.altKey,at=N.metaKey,nt=N.shiftKey;K.current===B&&!k.current&&!et&&!tt&&!at&&!nt&&(B===se.a.ENTER?(W(),D==null||D()):B===se.a.ESC&&I())},$=function(){W()},je=w()(o,"".concat(o,"-edit-content"),Object(g.a)({},"".concat(o,"-rtl"),c==="rtl"),t);return a.createElement("div",{className:je,style:l},a.createElement(Ie.a,{ref:J,maxLength:f,value:G,onChange:Ee,onKeyDown:A,onKeyUp:X,onCompositionStart:b,onCompositionEnd:M,onBlur:$,"aria-label":e,autoSize:v}),a.createElement(Me,{className:"".concat(o,"-edit-content-confirm")}))},He=$e,xe=n("i8i4"),Ke=1,Ne=3,ve=8,h,Ce={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function De(i){if(!i)return 0;var r=i.match(/^\d*(\.\d*)?/);return r?Number(r[0]):0}function _e(i){var r=Array.prototype.slice.apply(i);return r.map(function(o){return"".concat(o,": ").concat(i.getPropertyValue(o),";")}).join("")}function ke(i){var r=[];return i.forEach(function(o){var e=r[r.length-1];typeof o=="string"&&typeof e=="string"?r[r.length-1]+=o:r.push(o)}),r}var Ae=function(i,r,o,e,t){h||(h=document.createElement("div"),h.setAttribute("aria-hidden","true"),document.body.appendChild(h));var l=r.rows,c=r.suffix,f=c===void 0?"":c,p=window.getComputedStyle(i),v=_e(p),T=De(p.lineHeight),E=Math.round(T*(l+1)+De(p.paddingTop)+De(p.paddingBottom));h.setAttribute("style",v),h.style.position="fixed",h.style.left="0",h.style.height="auto",h.style.minHeight="auto",h.style.maxHeight="auto",h.style.top="-999999px",h.style.zIndex="-1000",h.style.textOverflow="clip",h.style.whiteSpace="normal",h.style.webkitLineClamp="none";var I=ke(Object(he.a)(o));Object(xe.render)(a.createElement("div",{style:Ce},a.createElement("span",{style:Ce},I,f),a.createElement("span",{style:Ce},e)),h);function D(){return h.offsetHeight<E}if(D())return Object(xe.unmountComponentAtNode)(h),{content:o,text:h.innerHTML,ellipsis:!1};var J=Array.prototype.slice.apply(h.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(b){var M=b.nodeType;return M!==ve}),k=Array.prototype.slice.apply(h.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Object(xe.unmountComponentAtNode)(h);var K=[];h.innerHTML="";var Q=document.createElement("span");h.appendChild(Q);var ne=document.createTextNode(t+f);Q.appendChild(ne),k.forEach(function(b){h.appendChild(b)});function G(b){Q.insertBefore(b,ne)}function re(b,M){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,W=arguments.length>3&&arguments[3]!==void 0?arguments[3]:M.length,X=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,$=Math.floor((A+W)/2),je=M.slice(0,$);if(b.textContent=je,A>=W-1)for(var P=W;P>=A;P-=1){var N=M.slice(0,P);if(b.textContent=N,D()||!N)return P===M.length?{finished:!1,reactNode:M}:{finished:!0,reactNode:N}}return D()?re(b,M,$,W,$):re(b,M,A,$,X)}function Ee(b,M){var A=b.nodeType;if(A===Ke)return G(b),D()?{finished:!1,reactNode:I[M]}:(Q.removeChild(b),{finished:!0,reactNode:null});if(A===Ne){var W=b.textContent||"",X=document.createTextNode(W);return G(X),re(X,W)}return{finished:!1,reactNode:null}}return J.some(function(b,M){var A=Ee(b,M),W=A.finished,X=A.reactNode;return X&&K.push(X),W}),{content:K,text:h.innerHTML,ellipsis:!0}},Ge=function(i,r){var o={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&r.indexOf(e)<0&&(o[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(i);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(i,e[t])&&(o[e[t]]=i[e[t]]);return o},Fe=Object(F.c)("webkitLineClamp"),S=Object(F.c)("textOverflow");function Je(i,r){var o=i.mark,e=i.code,t=i.underline,l=i.delete,c=i.strong,f=i.keyboard,p=r;function v(T,E){!T||(p=a.createElement(E,{},p))}return v(c,"strong"),v(t,"u"),v(l,"del"),v(e,"code"),v(o,"mark"),v(f,"kbd"),p}var _="...",Re=function(i){Object(We.a)(o,i);var r=Object(Se.a)(o);function o(){var e;return Object(de.a)(this,o),e=r.apply(this,arguments),e.contentRef=a.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,l=e.context.getPrefixCls;return l("typography",t)},e.onExpandClick=function(t){var l,c=e.getEllipsis(),f=c.onExpand;e.setState({expanded:!0}),(l=f)===null||l===void 0||l(t)},e.onEditClick=function(){e.triggerEdit(!0)},e.onEditChange=function(t){var l=e.getEditable(),c=l.onChange;c==null||c(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,l;(l=(t=e.getEditable()).onCancel)===null||l===void 0||l.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var l=e.props,c=l.children,f=l.copyable,p=Object(d.a)({},Object(H.a)(f)==="object"?f:null);p.text===void 0&&(p.text=String(c)),u()(p.text||""),e.setState({copied:!0},function(){p.onCopy&&p.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var l=e.getEditable(),c=l.onStart;t&&c&&c(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){q.a.cancel(e.rafId),e.rafId=Object(q.a)(function(){e.syncEllipsis()})},e}return Object(ze.a)(o,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var l=this.props.children,c=this.getEllipsis(),f=this.getEllipsis(t);(l!==t.children||c.rows!==f.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),q.a.cancel(this.rafId)}},{key:"getEditable",value:function(t){var l=this.state.edit,c=t||this.props,f=c.editable;return f?Object(d.a)({editing:l},Object(H.a)(f)==="object"?f:null):{editing:l}}},{key:"getEllipsis",value:function(t){var l=t||this.props,c=l.ellipsis;return c?Object(d.a)({rows:1,expandable:!1},Object(H.a)(c)==="object"?c:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,l=this.props,c=l.editable,f=l.copyable,p=this.getEllipsis(),v=p.rows,T=p.expandable,E=p.suffix,I=p.onEllipsis,D=p.tooltip;return E||D||c||f||T||!t||I?!1:v===1?S:Fe}},{key:"syncEllipsis",value:function(){var t=this.state,l=t.ellipsisText,c=t.isEllipsis,f=t.expanded,p=this.getEllipsis(),v=p.rows,T=p.suffix,E=p.onEllipsis,I=this.props.children;if(!(!v||v<0||!this.contentRef.current||f)&&!this.canUseCSSEllipsis()){Object(R.a)(Object(he.a)(I).every(function(Q){return typeof Q=="string"}),"Typography","`ellipsis` should use string as children only.");var D=Ae(this.contentRef.current,{rows:v,suffix:T},I,this.renderOperations(!0),_),J=D.content,k=D.text,K=D.ellipsis;(l!==k||c!==K)&&(this.setState({ellipsisText:k,ellipsisContent:J,isEllipsis:K}),c!==K&&E&&E(K))}}},{key:"renderExpand",value:function(t){var l=this.getEllipsis(),c=l.expandable,f=l.symbol,p=this.state,v=p.expanded,T=p.isEllipsis;if(!c||!t&&(v||!T))return null;var E;return f?E=f:E=this.expandStr,a.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},E)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var l=t.icon,c=t.tooltip,f=Object(he.a)(c)[0]||this.editStr,p=typeof f=="string"?f:"";return a.createElement(pe.a,{key:"edit",title:c===!1?"":f},a.createElement(te.a,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":p},l||a.createElement(x.a,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,l=this.props.copyable;if(!!l){var c=this.getPrefixCls(),f=l.tooltips,p=Object(he.a)(f);p.length===0&&(p=[this.copyStr,this.copiedStr]);var v=t?p[1]:p[0],T=typeof v=="string"?v:"",E=Object(he.a)(l.icon);return a.createElement(pe.a,{key:"copy",title:f===!1?"":v},a.createElement(te.a,{className:w()("".concat(c,"-copy"),t&&"".concat(c,"-copy-success")),onClick:this.onCopyClick,"aria-label":T},t?E[1]||a.createElement(s.a,null):E[0]||a.createElement(m.a,null)))}}},{key:"renderEditInput",value:function(){var t=this.props,l=t.children,c=t.className,f=t.style,p=this.context.direction,v=this.getEditable(),T=v.maxLength,E=v.autoSize,I=v.onEnd;return a.createElement(He,{value:typeof l=="string"?l:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:I,prefixCls:this.getPrefixCls(),className:c,style:f,direction:p,maxLength:T,autoSize:E})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(l){return l})}},{key:"renderContent",value:function(){var t=this,l=this.state,c=l.ellipsisContent,f=l.isEllipsis,p=l.expanded,v=this.props,T=v.component,E=v.children,I=v.className,D=v.type,J=v.disabled,k=v.style,K=Ge(v,["component","children","className","type","disabled","style"]),Q=this.context.direction,ne=this.getEllipsis(),G=ne.rows,re=ne.suffix,Ee=ne.tooltip,b=this.getPrefixCls(),M=Object(Z.a)(K,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard"].concat(Object(C.a)(le.a))),A=this.canUseCSSEllipsis(),W=G===1&&A,X=G&&G>1&&A,$=E;if(G&&f&&!p&&!A){var je=K.title,P=je||"";!je&&(typeof E=="string"||typeof E=="number")&&(P=String(E)),P=P==null?void 0:P.slice(String(c||"").length),$=a.createElement(a.Fragment,null,c,a.createElement("span",{title:P,"aria-hidden":"true"},_),re),Ee&&($=a.createElement(pe.a,{title:Ee===!0?E:Ee},a.createElement("span",null,$)))}else $=a.createElement(a.Fragment,null,E,re);return $=Je(this.props,$),a.createElement(oe.a,{componentName:"Text"},function(N){var B,et=N.edit,tt=N.copy,at=N.copied,nt=N.expand;return t.editStr=et,t.copyStr=tt,t.copiedStr=at,t.expandStr=nt,a.createElement(ue.a,{onResize:t.resizeOnNextFrame,disabled:!G},a.createElement(j,Object(d.a)({className:w()((B={},Object(g.a)(B,"".concat(b,"-").concat(D),D),Object(g.a)(B,"".concat(b,"-disabled"),J),Object(g.a)(B,"".concat(b,"-ellipsis"),G),Object(g.a)(B,"".concat(b,"-ellipsis-single-line"),W),Object(g.a)(B,"".concat(b,"-ellipsis-multiple-line"),X),B),I),style:Object(d.a)(Object(d.a)({},k),{WebkitLineClamp:X?G:void 0}),component:T,ref:t.contentRef,direction:Q},M),$,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),l=t.editing;return l?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var l=t.children,c=t.editable;return Object(R.a)(!c||typeof l=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),o}(a.Component);Re.contextType=O.b,Re.defaultProps={children:""};var ye=Re,Qe=function(i,r){var o={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&r.indexOf(e)<0&&(o[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(i);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(i,e[t])&&(o[e[t]]=i[e[t]]);return o},we=function(r){var o=r.ellipsis,e=Qe(r,["ellipsis"]),t=a.useMemo(function(){return o&&Object(H.a)(o)==="object"?Object(Z.a)(o,["expandable","rows"]):o},[o]);return Object(R.a)(Object(H.a)(o)!=="object"||!o||!("expandable"in o)&&!("rows"in o),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),a.createElement(ye,Object(d.a)({},e,{ellipsis:t,component:"span"}))},Be=we,Xe=function(i,r){var o={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&r.indexOf(e)<0&&(o[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(i);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(i,e[t])&&(o[e[t]]=i[e[t]]);return o},Ye=function(r,o){var e=r.ellipsis,t=r.rel,l=Xe(r,["ellipsis","rel"]);Object(R.a)(Object(H.a)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var c=a.useRef(null);a.useImperativeHandle(o,function(){var p;return(p=c.current)===null||p===void 0?void 0:p.contentRef.current});var f=Object(d.a)(Object(d.a)({},l),{rel:t===void 0&&l.target==="_blank"?"noopener noreferrer":t});return delete f.navigate,a.createElement(ye,Object(d.a)({},f,{ref:c,ellipsis:!!e,component:"a"}))},Ve=a.forwardRef(Ye),Ze=n("CWQg"),Ue=function(i,r){var o={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&r.indexOf(e)<0&&(o[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(i);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(i,e[t])&&(o[e[t]]=i[e[t]]);return o},qe=Object(Ze.b)(1,2,3,4,5),me=function(r){var o=r.level,e=o===void 0?1:o,t=Ue(r,["level"]),l;return qe.indexOf(e)!==-1?l="h".concat(e):(Object(R.a)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),l="h1"),a.createElement(ye,Object(d.a)({},t,{component:l}))},Pe=me,ae=function(r){return a.createElement(ye,Object(d.a)({},r,{component:"div"}))},rt=ae,Le=j;Le.Text=Be,Le.Link=Ve,Le.Title=Pe,Le.Paragraph=rt;var it=L.a=Le}}]);
