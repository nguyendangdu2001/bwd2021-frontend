import{_ as t,a as n,b as e,c as r,d as a}from"./index.31f1eedc.js";import{F as i}from"./vendor.b7c2e3e2.js";import{u as o,A as u,a as s,i as l,b as c,p as f,c as v,n as d,d as m,e as p,f as y,v as g,g as h,h as x,j as A,k as T,m as P,r as V,l as E,s as b,o as L,q as S,t as w,w as R,x as C,P as B,M as j,y as F,V as k,z as H,B as M,C as I,D as U,E as D,F as O,G as N,H as z,S as K,I as X,J as Y,K as $,L as _,N as W,O as Z,Q as q,R as G,T as J,U as Q,W as tt,X as nt,Y as et,Z as rt,_ as at,$ as it,a0 as ot,a1 as ut,a2 as st,a3 as lt,a4 as ct,a5 as ft,a6 as vt,a7 as dt,a8 as mt,a9 as pt,aa as yt,ab as gt,ac as ht,ad as xt}from"./SharedLayoutContext.b79c17c9.js";function At(t,n,e){return function(r,a){var i;l(r)&&t.isHoverEventsEnabled&&!c()&&(null==e||e(r,a),null===(i=t.animationState)||void 0===i||i.setActive(u.Hover,n))}}var Tt=function(t,n){return!!n&&(t===n||Tt(t,n.parentElement))};function Pt(t){return i.useEffect((function(){return function(){return t()}}),[])}var Vt=function(t){return function(n){return t(n),null}},Et={tap:Vt((function(t){var n=t.onTap,e=t.onTapStart,r=t.onTapCancel,a=t.whileTap,o=t.visualElement,l=n||e||r||a,d=i.useRef(!1),m=i.useRef(null);function p(){var t;null===(t=m.current)||void 0===t||t.call(m),m.current=null}function y(){var t;return p(),d.current=!1,null===(t=o.animationState)||void 0===t||t.setActive(u.Tap,!1),!c()}function g(t,e){y()&&(Tt(o.getInstance(),t.target)?null==n||n(t,e):null==r||r(t,e))}function h(t,n){y()&&(null==r||r(t,n))}s(o,"pointerdown",l?function(t,n){var r;p(),d.current||(d.current=!0,m.current=f(v(window,"pointerup",g),v(window,"pointercancel",h)),null==e||e(t,n),null===(r=o.animationState)||void 0===r||r.setActive(u.Tap,!0))}:void 0),Pt(p)})),focus:Vt((function(t){var n=t.whileFocus,e=t.visualElement;o(e,"focus",n?function(){var t;null===(t=e.animationState)||void 0===t||t.setActive(u.Focus,!0)}:void 0),o(e,"blur",n?function(){var t;null===(t=e.animationState)||void 0===t||t.setActive(u.Focus,!1)}:void 0)})),hover:Vt((function(t){var n=t.onHoverStart,e=t.onHoverEnd,r=t.whileHover,a=t.visualElement;s(a,"pointerenter",n||r?At(a,!0,n):void 0),s(a,"pointerleave",e||r?At(a,!1,e):void 0)}))};function bt(t,n){if(!Array.isArray(n))return!1;var e=n.length;if(e!==t.length)return!1;for(var r=0;r<e;r++)if(n[r]!==t[r])return!1;return!0}var Lt=function(t){return function(n){return n.test(t)}},St=[d,m,p,y,g,h,{test:function(t){return"auto"===t},parse:function(t){return t}}],wt=function(t){return St.find(Lt(t))},Rt=t(t([],n(St)),[x,A]),Ct=function(t){return Rt.find(Lt(t))};function Bt(t,n,e){t.hasValue(n)?t.getValue(n).set(e):t.addValue(n,P(e))}function jt(t,n){if(n)return(n[t]||n.default||n).from}function Ft(t,e,a){var i;void 0===a&&(a={});var o=V(t,e,a.custom),u=(o||{}).transition,s=void 0===u?t.getDefaultTransition()||{}:u;a.transitionOverride&&(s=a.transitionOverride);var l=o?function(){return kt(t,o,a)}:function(){return Promise.resolve()},c=(null===(i=t.variantChildren)||void 0===i?void 0:i.size)?function(n){void 0===n&&(n=0);var i=s.delayChildren,o=void 0===i?0:i,u=s.staggerChildren,l=s.staggerDirection;return function(t,n,e,a,i,o){void 0===e&&(e=0);void 0===a&&(a=0);void 0===i&&(i=1);var u=[],s=(t.variantChildren.size-1)*a,l=1===i?function(t){return void 0===t&&(t=0),t*a}:function(t){return void 0===t&&(t=0),s-t*a};return Array.from(t.variantChildren).sort(Ht).forEach((function(t,a){u.push(Ft(t,n,r(r({},o),{delay:e+l(a)})).then((function(){return t.notifyAnimationComplete(n)})))})),Promise.all(u)}(t,e,o+n,u,l,a)}:function(){return Promise.resolve()},f=s.when;if(f){var v=n("beforeChildren"===f?[l,c]:[c,l],2),d=v[0],m=v[1];return d().then(m)}return Promise.all([l(),c(a.delay)])}function kt(t,n,a){var i,o=void 0===a?{}:a,u=o.delay,s=void 0===u?0:u,l=o.transitionOverride,c=o.type,f=t.makeTargetAnimatable(n),v=f.transition,d=void 0===v?t.getDefaultTransition():v,m=f.transitionEnd,p=e(f,["transition","transitionEnd"]);l&&(d=l);var y=[],g=c&&(null===(i=t.animationState)||void 0===i?void 0:i.getState()[c]);for(var h in p){var x=t.getValue(h),A=p[h];if(!(!x||void 0===A||g&&Mt(g,h))){var T=b(h,x,A,r({delay:s},d));y.push(T)}}return Promise.all(y).then((function(){m&&function(t,n){var a=V(t,n),i=a?t.makeTargetAnimatable(a,!1):{},o=i.transitionEnd,u=void 0===o?{}:o;i.transition;var s=e(i,["transitionEnd","transition"]);for(var l in s=r(r({},s),u))Bt(t,l,E(s[l]))}(t,m)}))}function Ht(t,n){return t.sortNodePosition(n)}function Mt(t,n){var e=t.protectedKeys,r=t.needsAnimating,a=e.hasOwnProperty(n)&&!0!==r[n];return r[n]=!1,a}var It=[u.Animate,u.Hover,u.Tap,u.Drag,u.Focus,u.Exit],Ut=t([],n(It)).reverse(),Dt=It.length;function Ot(t){return function(n){return Promise.all(n.map((function(n){var e=n.animation,r=n.options;return function(t,n,e){var r;if(void 0===e&&(e={}),t.notifyAnimationStart(),Array.isArray(n)){var a=n.map((function(n){return Ft(t,n,e)}));r=Promise.all(a)}else if("string"==typeof n)r=Ft(t,n,e);else{var i="function"==typeof n?V(t,n,e.custom):n;r=kt(t,i,e)}return r.then((function(){return t.notifyAnimationComplete(n)}))}(t,e,r)})))}}function Nt(a){var i,o=Ot(a),s=((i={})[u.Animate]=zt(!0),i[u.Hover]=zt(),i[u.Tap]=zt(),i[u.Drag]=zt(),i[u.Focus]=zt(),i[u.Exit]=zt(),i),l={},c=!0,f=function(t,n){var i=V(a,n);if(i){i.transition;var o=i.transitionEnd,u=e(i,["transition","transitionEnd"]);t=r(r(r({},t),u),o)}return t};function v(e,i){for(var u,v=a.getProps(),d=a.getVariantContext(!0)||{},m=[],p=new Set,y={},g=1/0,h=function(o){var l=Ut[o],h=s[l],x=null!==(u=v[l])&&void 0!==u?u:d[l],A=R(x),T=l===i?h.isActive:null;!1===T&&(g=o);var P=x===d[l]&&x!==v[l]&&A;if(P&&c&&a.manuallyAnimateOnMount&&(P=!1),h.protectedKeys=r({},y),!h.isActive&&null===T||!x&&!h.prevProp||L(x)||"boolean"==typeof x)return"continue";var V=function(t,n){if("string"==typeof n)return n!==t;if(w(n))return!bt(n,t);return!1}(h.prevProp,x)||l===i&&h.isActive&&!P&&A||o>g&&A,E=Array.isArray(x)?x:[x],b=E.reduce(f,{});!1===T&&(b={});var C=h.prevResolvedValues,B=void 0===C?{}:C,j=r(r({},B),b),F=function(t){V=!0,p.delete(t),h.needsAnimating[t]=!0};for(var k in j){var H=b[k],M=B[k];y.hasOwnProperty(k)||(H!==M?S(H)&&S(M)?bt(H,M)?h.protectedKeys[k]=!0:F(k):void 0!==H?F(k):p.add(k):void 0!==H&&p.has(k)?F(k):h.protectedKeys[k]=!0)}h.prevProp=x,h.prevResolvedValues=b,h.isActive&&(y=r(r({},y),b)),c&&a.blockInitialAnimation&&(V=!1),V&&!P&&m.push.apply(m,t([],n(E.map((function(t){return{animation:t,options:r({type:l},e)}})))))},x=0;x<Dt;x++)h(x);if(l=r({},y),p.size){var A={};p.forEach((function(t){var n=a.getBaseTarget(t);void 0!==n&&(A[t]=n)})),m.push({animation:A})}var T=Boolean(m.length);return c&&!1===v.initial&&!a.manuallyAnimateOnMount&&(T=!1),c=!1,T?o(m):Promise.resolve()}return{isAnimated:function(t){return void 0!==l[t]},animateChanges:v,setActive:function(t,n,e){var r;return s[t].isActive===n?Promise.resolve():(null===(r=a.variantChildren)||void 0===r||r.forEach((function(e){var r;return null===(r=e.animationState)||void 0===r?void 0:r.setActive(t,n)})),s[t].isActive=n,v(e,t))},setAnimateFunction:function(t){o=t(a)},getState:function(){return s}}}function zt(t){return void 0===t&&(t=!1),{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}var Kt={animation:Vt((function(t){var n=t.visualElement,e=t.animate;n.animationState||(n.animationState=Nt(n)),L(e)&&i.useEffect((function(){return e.subscribe(n)}),[e])})),exit:Vt((function(t){var e=t.custom,r=t.visualElement,a=n(C(),2),o=a[0],s=a[1],l=i.useContext(B);i.useEffect((function(){var t,n,a=null===(t=r.animationState)||void 0===t?void 0:t.setActive(u.Exit,!o,{custom:null!==(n=null==l?void 0:l.custom)&&void 0!==n?n:e});!o&&(null==a||a.then(s))}),[o])}))};var Xt={pan:Vt((function(t){var n=t.onPan,e=t.onPanStart,r=t.onPanEnd,a=t.onPanSessionStart,o=t.visualElement,u=n||e||r||a,l=i.useRef(null),c=i.useContext(j).transformPagePoint,f={onSessionStart:a,onStart:e,onMove:n,onEnd:function(t,n){l.current=null,r&&r(t,n)}};i.useEffect((function(){null!==l.current&&l.current.updateHandlers(f)})),s(o,"pointerdown",u&&function(t){l.current=new H(t,f,{transformPagePoint:c})}),Pt((function(){return l.current&&l.current.end()}))})),drag:Vt((function(t){var n=t.dragControls,e=t.visualElement,a=i.useContext(j).transformPagePoint,o=F((function(){return new k({visualElement:e})}));o.setProps(r(r({},t),{transformPagePoint:a})),i.useEffect((function(){return n&&n.subscribe(o)}),[o]),i.useEffect((function(){return o.mount(e)}),[])}))};function Yt(t,n){return{min:n.min-t.min,max:n.max-t.min}}function $t(t,n){return{x:Yt(t.x,n.x),y:Yt(t.y,n.y)}}function _t(t,n){var e=t.getLayoutId(),r=n.getLayoutId();return e!==r||void 0===r&&t!==n}function Wt(t){return"string"==typeof t&&t.startsWith("var(--")}var Zt=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function qt(t,e,r){var a=n(function(t){var e=Zt.exec(t);if(!e)return[,];var r=n(e,3);return[r[1],r[2]]}(t),2),i=a[0],o=a[1];if(i){var u=window.getComputedStyle(e).getPropertyValue(i);return u?u.trim():Wt(o)?qt(o,e):o}}function Gt(t,n){return t/(n.max-n.min)*100}var Jt={process:function(t,n,e){var r=e.target;if("string"==typeof t){if(!m.test(t))return t;t=parseFloat(t)}return Gt(t,r.x)+"% "+Gt(t,r.y)+"%"}},Qt={borderRadius:r(r({},Jt),{applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]}),borderTopLeftRadius:Jt,borderTopRightRadius:Jt,borderBottomLeftRadius:Jt,borderBottomRightRadius:Jt,boxShadow:{process:function(t,n){var e=n.delta,r=n.treeScale,a=t,i=t.includes("var("),o=[];i&&(t=t.replace(Zt,(function(t){return o.push(t),"_$css"})));var u=A.parse(t);if(u.length>5)return a;var s=A.createTransformer(t),l="number"!=typeof u[0]?1:0,c=e.x.scale*r.x,f=e.y.scale*r.y;u[0+l]/=c,u[1+l]/=f;var v=M(c,f,.5);"number"==typeof u[2+l]&&(u[2+l]/=v),"number"==typeof u[3+l]&&(u[3+l]/=v);var d=s(u);if(i){var m=0;d=d.replace("_$css",(function(){var t=o[m];return m++,t}))}return d}}},tn=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.frameTarget=I(),n.currentAnimationTarget=I(),n.isAnimating={x:!1,y:!1},n.stopAxisAnimation={x:void 0,y:void 0},n.isAnimatingTree=!1,n.animate=function(t,a,i){void 0===i&&(i={});var o=i.originBox,u=i.targetBox,s=i.visibilityAction,l=i.shouldStackAnimate,c=i.onComplete,f=i.prevParent,v=e(i,["originBox","targetBox","visibilityAction","shouldStackAnimate","onComplete","prevParent"]),d=n.props,m=d.visualElement,p=d.layout;if(!1===l)return n.isAnimatingTree=!1,n.safeToRemove();if(!n.isAnimatingTree||!0===l){l&&(n.isAnimatingTree=!0),a=o||a,t=u||t;var y=!1,g=m.getProjectionParent();if(g){var h=g.prevViewportBox,x=g.getLayoutState().layout;f&&(u&&(x=f.getLayoutState().layout),o&&!_t(f,g)&&f.prevViewportBox&&(h=f.prevViewportBox)),h&&un(f,o,u)&&(y=!0,a=$t(h,a),t=$t(x,t))}var A=nn(a,t),T=U((function(e){if("position"===p){var i=t[e].max-t[e].min;a[e].max=a[e].min+i}if(!m.projection.isTargetLocked)return void 0===s?A?n.animateAxis(e,t[e],a[e],r(r({},v),{isRelative:y})):m.setProjectionTargetAxis(e,t[e].min,t[e].max,y):void m.setVisibility(s===N.Show)}));return m.syncRender(),Promise.all(T).then((function(){n.isAnimatingTree=!1,c&&c(),m.notifyLayoutAnimationComplete()}))}},n}return a(n,t),n.prototype.componentDidMount=function(){var t=this,n=this.props.visualElement;n.animateMotionValue=b,n.enableLayoutProjection(),this.unsubLayoutReady=n.onLayoutUpdate(this.animate),n.layoutSafeToRemove=function(){return t.safeToRemove()},D(Qt)},n.prototype.componentWillUnmount=function(){var t=this;this.unsubLayoutReady(),U((function(n){var e,r;return null===(r=(e=t.stopAxisAnimation)[n])||void 0===r?void 0:r.call(e)}))},n.prototype.animateAxis=function(t,n,e,r){var a,i,o=this,u=void 0===r?{}:r,s=u.transition,l=u.isRelative;if(!this.isAnimating[t]||!an(n,this.currentAnimationTarget[t])){null===(i=(a=this.stopAxisAnimation)[t])||void 0===i||i.call(a),this.isAnimating[t]=!0;var c=this.props.visualElement,f=this.frameTarget[t],v=c.getProjectionAnimationProgress()[t];v.clearListeners(),v.set(0),v.set(0);var d=function(){var r=v.get()/1e3;!function(t,n,e,r){t.min=M(n.min,e.min,r),t.max=M(n.max,e.max,r)}(f,e,n,r),c.setProjectionTargetAxis(t,f.min,f.max,l)};d();var m=v.onChange(d);this.stopAxisAnimation[t]=function(){o.isAnimating[t]=!1,v.stop(),m()},this.currentAnimationTarget[t]=n;var p=s||c.getDefaultTransition()||on;return b("x"===t?"layoutX":"layoutY",v,1e3,p&&O(p,"layout")).then(this.stopAxisAnimation[t])}},n.prototype.safeToRemove=function(){var t,n;null===(n=(t=this.props).safeToRemove)||void 0===n||n.call(t)},n.prototype.render=function(){return null},n}(i.Component);function nn(t,n){return!(rn(t)||rn(n)||an(t.x,n.x)&&an(t.y,n.y))}var en={min:0,max:0};function rn(t){return an(t.x,en)&&an(t.y,en)}function an(t,n){return t.min===n.min&&t.max===n.max}var on={duration:.45,ease:[.4,0,.1,1]};function un(t,n,e){return t||!t&&!(n||e)}var sn=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a(n,t),n.prototype.componentDidMount=function(){var t=this.props,n=t.syncLayout,e=t.framerSyncLayout,r=t.visualElement;z(n)&&n.register(r),z(e)&&e.register(r),r.onUnmount((function(){z(n)&&n.remove(r),z(e)&&e.remove(r)}))},n.prototype.getSnapshotBeforeUpdate=function(){var t=this.props,n=t.syncLayout,e=t.visualElement;return z(n)?n.syncUpdate():(e.snapshotViewportBox(),n.add(e)),null},n.prototype.componentDidUpdate=function(){var t=this.props,n=t.syncLayout,e=t.visualElement;z(n)||n.flush(),e.rebaseProjectionTarget()},n.prototype.render=function(){return null},n}(i.Component);var ln={measureLayout:function(t){var n=i.useContext(K),e=i.useContext(X);return i.createElement(sn,r({},t,{syncLayout:n,framerSyncLayout:e}))},layoutAnimation:function(t){var e=n(C(),2)[1];return i.createElement(tn,r({},t,{safeToRemove:e}))}};function cn(t,n){t.min=n.min,t.max=n.max}function fn(t,n,e){return e+n*(t-e)}function vn(t,n,e,r,a){return void 0!==a&&(t=fn(t,a,r)),fn(t,e,r)+n}function dn(t,n,e,r,a){void 0===n&&(n=0),void 0===e&&(e=1),t.min=vn(t.min,n,e,r,a),t.max=vn(t.max,n,e,r,a)}function mn(t,n){var e=n.x,r=n.y;dn(t.x,e.translate,e.scale,e.originPoint),dn(t.y,r.translate,r.scale,r.originPoint)}function pn(t,e,r,a){var i=n(a,3),o=i[0],u=i[1],s=i[2];t.min=e.min,t.max=e.max;var l=void 0!==r[s]?r[s]:.5,c=M(e.min,e.max,l);dn(t,r[o],r[u],c,r.scale)}var yn=["x","scaleX","originX"],gn=["y","scaleY","originY"];function hn(t,n,e,r,a){return t=fn(t-=n,1/e,r),void 0!==a&&(t=fn(t,1/a,r)),t}function xn(t,e,r){var a=n(r,3),i=a[0],o=a[1],u=a[2];!function(t,n,e,r,a){void 0===n&&(n=0),void 0===e&&(e=1),void 0===r&&(r=.5);var i=M(t.min,t.max,r)-n;t.min=hn(t.min,n,e,i,a),t.max=hn(t.max,n,e,i,a)}(t,e[i],e[o],e[u],e.scale)}function An(){return{isHydrated:!1,layout:I(),layoutCorrected:I(),treeScale:{x:1,y:1},delta:Y(),deltaFinal:Y(),deltaTransform:""}}var Tn=An();function Pn(t,n,e){var r=t.x,a=t.y,i="translate3d("+r.translate/n.x+"px, "+a.translate/n.y+"px, 0) ";if(e){var o=e.rotate,u=e.rotateX,s=e.rotateY;o&&(i+="rotate("+o+") "),u&&(i+="rotateX("+u+") "),s&&(i+="rotateY("+s+") ")}return i+="scale("+r.scale+", "+a.scale+")",e||i!==En?i:""}function Vn(t){var n=t.deltaFinal;return 100*n.x.origin+"% "+100*n.y.origin+"% 0"}var En=Pn(Tn.delta,Tn.treeScale,{x:1,y:1}),bn=["LayoutMeasure","BeforeLayoutMeasure","LayoutUpdate","ViewportBoxUpdate","Update","Render","AnimationComplete","LayoutAnimationComplete","AnimationStart","SetAxisTarget","Unmount"];function Ln(t,n,e,r){var a,i,o=t.delta,u=t.layout,s=t.layoutCorrected,l=t.treeScale,c=n.target;i=u,cn((a=s).x,i.x),cn(a.y,i.y),function(t,n,e){var r=e.length;if(r){n.x=n.y=1;for(var a=0;a<r;a++){var i=e[a].getLayoutState().delta;n.x*=i.x.scale,n.y*=i.y.scale,mn(t,i)}}}(s,l,e),W(o,s,c,r)}var Sn=function(){function t(){this.children=[],this.isDirty=!1}return t.prototype.add=function(t){Z(this.children,t),this.isDirty=!0},t.prototype.remove=function(t){q(this.children,t),this.isDirty=!0},t.prototype.forEach=function(t){this.isDirty&&this.children.sort(G);for(var n=this.children.length,e=0;e<n;e++)t(this.children[e])},t}(),wn=function(e){var a=e.treeType,i=void 0===a?"":a,o=e.build,u=e.getBaseTarget,s=e.makeTargetAnimatable,l=e.measureViewportBox,c=e.render,v=e.readValueFromInstance,d=e.resetTransform,m=e.restoreTransform,p=e.removeValueFromRenderState,y=e.sortNodePosition,g=e.scrapeMotionValuesFromProps;return function(e,a){var h=e.parent,x=e.props,A=e.presenceId,T=e.blockInitialAnimation,V=e.visualState;void 0===a&&(a={});var E,b,L,S,w,C,B=V.latestValues,j=V.renderState,F=function(){var e=bn.map((function(){return new $})),r={},a={clearAllListeners:function(){return e.forEach((function(t){return t.clear()}))},updatePropListeners:function(t){return bn.forEach((function(n){var e;null===(e=r[n])||void 0===e||e.call(r);var i="on"+n,o=t[i];o&&(r[n]=a[i](o))}))}};return e.forEach((function(e,r){a["on"+bn[r]]=function(t){return e.add(t)},a["notify"+bn[r]]=function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return e.notify.apply(e,t([],n(r)))}})),a}(),k={isEnabled:!1,isTargetLocked:!1,target:I(),targetFinal:I()},H=k,M=B,D=An(),O=!1,N=new Map,z=new Map,K={},X=r({},B);function Y(){var t,n,e;E&&(k.isEnabled&&D.isHydrated&&(t=H.targetFinal,n=H.target,e=M,pn(t.x,n.x,e,yn),pn(t.y,n.y,e,gn),W(D.deltaFinal,D.layoutCorrected,H.targetFinal,B)),Z(),c(E,j))}function Z(){var t=B;if(S&&S.isActive()){var n=S.getCrossfadeState(ct);n&&(t=n)}o(ct,j,t,H,D,a,x)}function q(){F.notifyUpdate(B)}function G(){ct.layoutTree.forEach(Cn)}var it=g(x);for(var ot in it){var ut=it[ot];void 0!==B[ot]&&_(ut)&&ut.set(B[ot],!1)}var st=J(x),lt=Q(x),ct=r(r({treeType:i,current:null,depth:h?h.depth+1:0,path:h?t(t([],n(h.path)),[h]):[],layoutTree:h?h.layoutTree:new Sn,presenceId:A,projection:k,variantChildren:lt?new Set:void 0,isVisible:void 0,manuallyAnimateOnMount:Boolean(null==h?void 0:h.isMounted()),blockInitialAnimation:T,isHoverEventsEnabled:!0,isMounted:function(){return Boolean(E)},mount:function(t){E=ct.current=t,ct.pointTo(ct),lt&&h&&!st&&(C=null==h?void 0:h.addVariantChild(ct))},unmount:function(){tt.update(q),tt.render(Y),tt.preRender(ct.updateLayoutProjection),z.forEach((function(t){return t()})),ct.stopLayoutAnimation(),ct.layoutTree.remove(ct),null==C||C(),null==L||L(),F.clearAllListeners()},addVariantChild:function(t){var n,e=ct.getClosestVariantNode();if(e)return null===(n=e.variantChildren)||void 0===n||n.add(t),function(){return e.variantChildren.delete(t)}},sortNodePosition:function(t){return y&&i===t.treeType?y(ct.getInstance(),t.getInstance()):0},getClosestVariantNode:function(){return lt?ct:null==h?void 0:h.getClosestVariantNode()},scheduleUpdateLayoutProjection:h?h.scheduleUpdateLayoutProjection:function(){return nt.preRender(ct.updateTreeLayoutProjection,!1,!0)},getLayoutId:function(){return x.layoutId},getInstance:function(){return E},getStaticValue:function(t){return B[t]},setStaticValue:function(t,n){return B[t]=n},getLatestValues:function(){return B},setVisibility:function(t){ct.isVisible!==t&&(ct.isVisible=t,ct.scheduleRender())},makeTargetAnimatable:function(t,n){return void 0===n&&(n=!0),s(ct,t,x,n)},suspendHoverEvents:function(){ct.isHoverEventsEnabled=!1,nt.postRender((function(){return setTimeout((function(){return ct.isHoverEventsEnabled=!0}),10)}))},addValue:function(t,n){ct.hasValue(t)&&ct.removeValue(t),N.set(t,n),B[t]=n.get(),function(t,n){var e=n.onChange((function(n){B[t]=n,x.onUpdate&&nt.update(q,!1,!0)})),r=n.onRenderRequest(ct.scheduleRender);z.set(t,(function(){e(),r()}))}(t,n)},removeValue:function(t){var n;N.delete(t),null===(n=z.get(t))||void 0===n||n(),z.delete(t),delete B[t],p(t,j)},hasValue:function(t){return N.has(t)},getValue:function(t,n){var e=N.get(t);return void 0===e&&void 0!==n&&(e=P(n),ct.addValue(t,e)),e},forEachValue:function(t){return N.forEach(t)},readValue:function(t){var n;return null!==(n=B[t])&&void 0!==n?n:v(E,t,a)},setBaseTarget:function(t,n){X[t]=n},getBaseTarget:function(t){if(u){var n=u(x,t);if(void 0!==n&&!_(n))return n}return X[t]}},F),{build:function(){return Z(),j},scheduleRender:function(){nt.render(Y,!1,!0)},syncRender:Y,setProps:function(t){x=t,F.updatePropListeners(t),K=function(t,n,e){var r;for(var a in n){var i=n[a],o=e[a];if(_(i))t.addValue(a,i);else if(_(o))t.addValue(a,P(i));else if(o!==i)if(t.hasValue(a)){var u=t.getValue(a);!u.hasAnimated&&u.set(i)}else t.addValue(a,P(null!==(r=t.getStaticValue(a))&&void 0!==r?r:i))}for(var a in e)void 0===n[a]&&t.removeValue(a);return n}(ct,g(x),K)},getProps:function(){return x},getVariant:function(t){var n;return null===(n=x.variants)||void 0===n?void 0:n[t]},getDefaultTransition:function(){return x.transition},getVariantContext:function(t){if(void 0===t&&(t=!1),t)return null==h?void 0:h.getVariantContext();if(!st){var n=(null==h?void 0:h.getVariantContext())||{};return void 0!==x.initial&&(n.initial=x.initial),n}for(var e={},r=0;r<kn;r++){var a=Fn[r],i=x[a];(R(i)||!1===i)&&(e[a]=i)}return e},enableLayoutProjection:function(){k.isEnabled=!0,ct.layoutTree.add(ct)},lockProjectionTarget:function(){k.isTargetLocked=!0},unlockProjectionTarget:function(){ct.stopLayoutAnimation(),k.isTargetLocked=!1},snapshotViewportBox:function(){ct.prevViewportBox=ct.measureViewportBox(!1),ct.rebaseProjectionTarget(!1,ct.prevViewportBox)},getLayoutState:function(){return D},setCrossfader:function(t){S=t},startLayoutAnimation:function(t,n){var e=ct.getProjectionAnimationProgress()[t],r=k.target[t],a=r.min,i=r.max-a;return e.clearListeners(),e.set(a),e.set(a),e.onChange((function(n){return ct.setProjectionTargetAxis(t,n,n+i)})),ct.animateMotionValue(t,e,0,n)},stopLayoutAnimation:function(){U((function(t){return ct.getProjectionAnimationProgress()[t].stop()}))},measureViewportBox:function(t){void 0===t&&(t=!0);var n,e,r=l(E,a);return t||(e=B,xn((n=r).x,e,yn),xn(n.y,e,gn)),r},updateLayoutMeasurement:function(){ct.notifyBeforeLayoutMeasure(D.layout),D.isHydrated=!0,D.layout=ct.measureViewportBox(),D.layoutCorrected=et(D.layout),ct.notifyLayoutMeasure(D.layout,ct.prevViewportBox||D.layout),nt.update((function(){return ct.rebaseProjectionTarget()}))},getProjectionAnimationProgress:function(){return w||(w={x:P(0),y:P(0)}),w},setProjectionTargetAxis:function(t,n,e,r){var a;void 0===r&&(r=!1),r?(k.relativeTarget||(k.relativeTarget=I()),a=k.relativeTarget[t]):(k.relativeTarget=void 0,a=k.target[t]),a.min=n,a.max=e,O=!0,F.notifySetAxisTarget()},rebaseProjectionTarget:function(t,n){void 0===n&&(n=D.layout);var e=ct.getProjectionAnimationProgress(),r=e.x,a=e.y,i=!(k.relativeTarget||k.isTargetLocked||r.isAnimating()||a.isAnimating());(t||i)&&U((function(t){var e=n[t],r=e.min,a=e.max;ct.setProjectionTargetAxis(t,r,a)}))},notifyLayoutReady:function(t){ct.notifyLayoutUpdate(D.layout,ct.prevViewportBox||D.layout,t)},resetTransform:function(){return d(ct,E,x)},withoutTransform:function(t){var n=k.isEnabled;n&&ct.resetTransform(),h?h.withoutTransform(t):t(),n&&m(E,j)},updateLayoutProjection:function(){var t=D.delta,n=D.treeScale,e=n.x,r=n.x,a=D.deltaTransform;Ln(D,H,ct.path,B),O&&ct.notifyViewportBoxUpdate(H.target,t),O=!1;var i=Pn(t,n);i===a&&e===n.x&&r===n.y||ct.scheduleRender(),D.deltaTransform=i},updateTreeLayoutProjection:function(){ct.layoutTree.forEach(Rn),nt.preRender(G,!1,!0)},getProjectionParent:function(){if(void 0===b){for(var t=!1,n=ct.path.length-1;n>=0;n--){var e=ct.path[n];if(e.projection.isEnabled){t=e;break}}b=t}return b},resolveRelativeTargetBox:function(){if(k.relativeTarget){var t=ct.getProjectionParent();t&&rt(k,t.projection)}},pointTo:function(t){H=t.projection,M=t.getLatestValues(),null==L||L(),L=f(t.onSetAxisTarget(ct.scheduleUpdateLayoutProjection),t.onLayoutAnimationComplete((function(){var t;ct.isPresent?ct.presence=at.Present:null===(t=ct.layoutSafeToRemove)||void 0===t||t.call(ct)})))},isPresent:!0,presence:at.Entering});return ct}};function Rn(t){t.resolveRelativeTargetBox()}function Cn(t){t.updateLayoutProjection()}var Bn,jn,Fn=t(["initial"],n(It)),kn=Fn.length,Hn=new Set(["width","height","top","left","right","bottom","x","y"]),Mn=function(t){return Hn.has(t)},In=function(t,n){t.set(n,!1),t.set(n)},Un=function(t){return t===d||t===m};(jn=Bn||(Bn={})).width="width",jn.height="height",jn.left="left",jn.right="right",jn.top="top",jn.bottom="bottom";var Dn=function(t,n){return parseFloat(t.split(", ")[n])},On=function(t,n){return function(e,r){var a=r.transform;if("none"===a||!a)return 0;var i=a.match(/^matrix3d\((.+)\)$/);if(i)return Dn(i[1],n);var o=a.match(/^matrix\((.+)\)$/);return o?Dn(o[1],t):0}},Nn=new Set(["x","y","z"]),zn=it.filter((function(t){return!Nn.has(t)}));var Kn={width:function(t){var n=t.x;return n.max-n.min},height:function(t){var n=t.y;return n.max-n.min},top:function(t,n){var e=n.top;return parseFloat(e)},left:function(t,n){var e=n.left;return parseFloat(e)},bottom:function(t,n){var e=t.y,r=n.top;return parseFloat(r)+(e.max-e.min)},right:function(t,n){var e=t.x,r=n.left;return parseFloat(r)+(e.max-e.min)},x:On(4,13),y:On(5,14)},Xn=function(t,e,a,i){void 0===a&&(a={}),void 0===i&&(i={}),e=r({},e),i=r({},i);var o=Object.keys(e).filter(Mn),u=[],s=!1,l=[];if(o.forEach((function(n){var r=t.getValue(n);if(t.hasValue(n)){var o,c=a[n],f=e[n],v=wt(c);if(S(f))for(var d=f.length,p=null===f[0]?1:0;p<d;p++)o?ot(wt(f[p])===o):o=wt(f[p]);else o=wt(f);if(v!==o)if(Un(v)&&Un(o)){var y=r.get();"string"==typeof y&&r.set(parseFloat(y)),"string"==typeof f?e[n]=parseFloat(f):Array.isArray(f)&&o===m&&(e[n]=f.map(parseFloat))}else(null==v?void 0:v.transform)&&(null==o?void 0:o.transform)&&(0===c||0===f)?0===c?r.set(o.transform(c)):e[n]=v.transform(f):(s||(u=function(t){var n=[];return zn.forEach((function(e){var r=t.getValue(e);void 0!==r&&(n.push([e,r.get()]),r.set(e.startsWith("scale")?1:0))})),n.length&&t.syncRender(),n}(t),s=!0),l.push(n),i[n]=void 0!==i[n]?i[n]:e[n],In(r,f))}})),l.length){var c=function(t,n,e){var r=n.measureViewportBox(),a=n.getInstance(),i=getComputedStyle(a),o=i.display,u={top:i.top,left:i.left,bottom:i.bottom,right:i.right,transform:i.transform};"none"===o&&n.setStaticValue("display",t.display||"block"),n.syncRender();var s=n.measureViewportBox();return e.forEach((function(e){var a=n.getValue(e);In(a,Kn[e](r,u)),t[e]=Kn[e](s,i)})),t}(e,t,l);return u.length&&u.forEach((function(e){var r=n(e,2),a=r[0],i=r[1];t.getValue(a).set(i)})),t.syncRender(),{target:c,transitionEnd:i}}return{target:e,transitionEnd:i}};function Yn(t,n,e,r){return function(t){return Object.keys(t).some(Mn)}(n)?Xn(t,n,e,r):{target:n,transitionEnd:r}}var $n=function(t,n,a,i){var o=function(t,n,a){var i,o=e(n,[]),u=t.getInstance();if(!(u instanceof HTMLElement))return{target:o,transitionEnd:a};for(var s in a&&(a=r({},a)),t.forEachValue((function(t){var n=t.get();if(Wt(n)){var e=qt(n,u);e&&t.set(e)}})),o){var l=o[s];if(Wt(l)){var c=qt(l,u);c&&(o[s]=c,a&&(null!==(i=a[s])&&void 0!==i||(a[s]=l)))}}return{target:o,transitionEnd:a}}(t,n,i);return Yn(t,n=o.target,a,i=o.transitionEnd)};var _n={treeType:"dom",readValueFromInstance:function(t,n){if(ut(n)){var e=st(n);return e&&e.default||0}var r,a=(r=t,window.getComputedStyle(r));return(lt(n)?a.getPropertyValue(n):a[n])||0},sortNodePosition:function(t,n){return 2&t.compareDocumentPosition(n)?1:-1},getBaseTarget:function(t,n){var e;return null===(e=t.style)||void 0===e?void 0:e[n]},measureViewportBox:function(t,n){var e=n.transformPagePoint;return ct(t,e)},resetTransform:function(t,n,e){t.suspendHoverEvents();var r=e.transformTemplate;n.style.transform=r?r({},""):"none",t.scheduleRender()},restoreTransform:function(t,n){t.style.transform=n.style.transform},removeValueFromRenderState:function(t,n){var e=n.vars,r=n.style;delete e[t],delete r[t]},makeTargetAnimatable:function(t,n,a,i){var o=a.transformValues;void 0===i&&(i=!0);var u=n.transition,s=n.transitionEnd,l=e(n,["transition","transitionEnd"]),c=function(t,n,e){var r,a,i={};for(var o in t)i[o]=null!==(r=jt(o,n))&&void 0!==r?r:null===(a=e.getValue(o))||void 0===a?void 0:a.get();return i}(l,u||{},t);if(o&&(s&&(s=o(s)),l&&(l=o(l)),c&&(c=o(c))),i){!function(t,n,e){var r,a,i,o,u=Object.keys(n).filter((function(n){return!t.hasValue(n)})),s=u.length;if(s)for(var l=0;l<s;l++){var c=u[l],f=n[c],v=null;Array.isArray(f)&&(v=f[0]),null===v&&(v=null!==(a=null!==(r=e[c])&&void 0!==r?r:t.readValue(c))&&void 0!==a?a:n[c]),null!=v&&("string"==typeof v&&/^\-?\d*\.?\d+$/.test(v)?v=parseFloat(v):!Ct(v)&&A.test(f)&&(v=T(c,f)),t.addValue(c,P(v)),null!==(i=(o=e)[c])&&void 0!==i||(o[c]=v),t.setBaseTarget(c,v))}}(t,l,c);var f=$n(t,l,c,s);s=f.transitionEnd,l=f.target}return r({transition:u,transitionEnd:s},l)},scrapeMotionValuesFromProps:ft,build:function(t,n,e,r,a,i,o){void 0!==t.isVisible&&(n.style.visibility=t.isVisible?"visible":"hidden");var u=r.isEnabled&&a.isHydrated;vt(n,e,r,a,i,o.transformTemplate,u?Pn:void 0,u?Vn:void 0)},render:dt},Wn=wn(_n),Zn=wn(r(r({},_n),{getBaseTarget:function(t,n){return t[n]},readValueFromInstance:function(t,n){var e;return ut(n)?(null===(e=st(n))||void 0===e?void 0:e.default)||0:(n=mt.has(n)?n:pt(n),t.getAttribute(n))},scrapeMotionValuesFromProps:yt,build:function(t,n,e,r,a,i,o){var u=r.isEnabled&&a.isHydrated;gt(n,e,r,a,i,o.transformTemplate,u?Pn:void 0,u?Vn:void 0)},render:ht})),qn=r(r({renderer:function(t,n){return xt(t)?Zn(n,{enableHardwareAcceleration:!1}):Wn(n,{enableHardwareAcceleration:!0})}},Kt),Et),Gn=r(r(r({},qn),Xt),ln);export default Gn;