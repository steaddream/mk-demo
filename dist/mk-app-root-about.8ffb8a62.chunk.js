webpackJsonp([2],{1587:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o,r=n(2),i=u(r),c=n(58),d=u(c),f=n(5),l=u(f),s=n(10),p=u(s),h=n(7),m=u(h),v=n(8),_=u(v),k=n(0),b=(u(k),n(273)),w=n(618),y=u(w),M=(a=(0,b.wrapper)(y.default))(o=function(e){function t(){return(0,l.default)(this,t),(0,m.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,i.default)({},this.props,{path:"root"}))}}]),t}(k.Component))||o;t.default=M,e.exports=t.default},1588:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=new f.action(e),n=new p((0,r.default)({},e,{metaAction:t})),u=(0,r.default)({},t,n);return t.config({metaHandlers:u}),u}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=u(o),i=n(5),c=u(i);t.default=a;var d=n(0),f=(u(d),n(273)),l=n(608),s=u(l),p=function e(t){var n=this;(0,c.default)(this,e),this.onInit=function(e){var t=e.component,u=e.injections;n.component=t,n.injections=u,u.reduce("init")},this.handleAboutClick=function(){n.component.props.onRedirect({appName:"mk-app-root-about",appParams:{}})},this.handleHelloClick=function(){n.component.props.onRedirect({appName:"mk-app-root-helloWorld",appParams:{}})},this.metaAction=t.metaAction,this.config=s.default.current};e.exports=t.default},1589:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=new d.reducer(e),n=new s((0,r.default)({},e,{metaReducer:t}));return(0,r.default)({},t,n)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=u(o),i=n(5),c=u(i);t.default=a;var d=(n(80),n(273)),f=n(608),l=u(f),s=function e(t){var n=this;(0,c.default)(this,e),this.init=function(e,t){var u={data:{}};return n.metaReducer.init(e,u)},this.metaReducer=t.metaReducer,this.config=l.default.current};e.exports=t.default}});