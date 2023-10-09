/*! For license information please see 52.8ff64a99.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunktechnical_task=self.webpackChunktechnical_task||[]).push([[52],{52:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,i,o,a,c,l,s,u,h,f,d=t(439),p=t(791),x=t(434),g=t(452),v=t(184),y=function(n){var e=n.id,t=n.onClose,r=(0,x.v9)((function(n){return n.modal.currentAdvert})),i=(0,x.I0)();return(0,p.useEffect)((function(){i((0,g.T0)(e))}),[i,e]),console.log(r),r&&(0,v.jsxs)("div",{children:[(0,v.jsx)("button",{onClick:t,children:"close"}),(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:r.img,alt:r.model,width:465})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:r.address}),(0,v.jsxs)("p",{children:["id:",r.id]}),(0,v.jsxs)("p",{children:["Year:",r.year]}),(0,v.jsxs)("p",{children:["Type:",r.type]}),(0,v.jsxs)("p",{children:["Fuel Consumption:",r.fuelConsumption]}),(0,v.jsxs)("p",{children:["Engine Size:",r.engineSize]})]}),(0,v.jsx)("p",{children:r.description}),(0,v.jsx)("h3",{children:"Accessories and functionalities:"}),(0,v.jsx)("p",{children:r.accessories}),(0,v.jsx)("p",{children:r.functionalities}),(0,v.jsx)("h3",{children:"Rental Conditions:"}),r.rentalConditions.split("\n").map((function(n){return(0,v.jsx)("p",{children:n},n)})),(0,v.jsxs)("p",{children:["Mileage:",r.mileage]}),(0,v.jsxs)("p",{children:["Price:",r.rentalPrice]}),(0,v.jsx)("a",{href:"tel:+380730000000",children:"Rental car"})]})},m=t(240),j=t(292),w=t(168),b=t(867),k=b.ZP.ul(r||(r=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 29px;\n  padding: 0;\n  list-style: none;\n  li {\n    width: 274px;\n  }\n"]))),L=b.ZP.button(i||(i=(0,w.Z)(["\n  width: 274px;\n  height: 44px;\n  padding: 12px 99px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background: #3470ff;\n  color: #fff;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.42;\n"]))),P=function(){var n=(0,x.v9)((function(n){return n.adverts.adverts})),e=(0,x.v9)((function(n){return n.modal.isOpen})),t=(0,p.useState)(null),r=(0,d.Z)(t,2),i=r[0],o=r[1],a=(0,x.v9)((function(n){return n.adverts.currentPage})),c=(0,x.I0)();(0,p.useEffect)((function(){c((0,g.u8)(a))}),[c,a]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(k,{children:null===n||void 0===n?void 0:n.map((function(n){return(0,v.jsxs)("li",{children:[(0,v.jsxs)("div",{style:{backgroundImage:"url(".concat(n.img,")"),backgroundSize:"cover",backgroundPosition:"center",width:"274px",height:"200px",position:"relative"},children:[(0,v.jsx)("button",{onClick:function(){return function(n){c((0,j.Jh)(n))}(n)},style:{position:"absolute",zIndex:1e4,top:"10px",right:"10px",background:"transparent",border:"none",color:"white",cursor:"pointer"},children:"to favorite"}),(0,v.jsx)("img",{src:n.img,alt:n.make,width:274,height:200,style:{opacity:"0"}})]}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h2",{children:[n.make,n.model]}),(0,v.jsx)("p",{children:n.year}),(0,v.jsx)("p",{children:n.rentalPrice})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:n.address}),(0,v.jsx)("p",{children:n.rentalCompany}),(0,v.jsx)("p",{children:n.type}),(0,v.jsx)("p",{children:n.model}),(0,v.jsx)("p",{children:n.mileage}),(0,v.jsx)("p",{children:n.accessories[1]})]}),(0,v.jsx)(L,{onClick:function(){return e=n.id,o(e),void c((0,m.h7)());var e},children:"Learn more"})]},n.id)}))}),a<5&&(0,v.jsx)("button",{onClick:function(){c((0,j.fr)(a))},children:"Load more"}),e&&(0,v.jsx)(y,{onClose:function(){c((0,m.Mr)())},id:i})]})},E=t(861),Z=t(942),C=t(413),_=function(n,e){return n.filter((function(n){var t=n.make.includes(e.make),r=+n.rentalPrice.slice(1,5)<=e.rentalPrice,i=n.mileage>=e.mileageFrom&&n.mileage<=e.mileageTo;return t&&r&&i}))},O=t(341),M=b.ZP.form(o||(o=(0,w.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 18px;\n  width: 859px;\n  margin-bottom: 50px;\n\n  select {\n    border-radius: 14px;\n    background: #f7f7fb;\n  }\n\n  input {\n    padding: 14px 24px 14px 24px;\n    border: 1px solid;\n    background: #f7f7fb;\n  }\n"]))),S=b.ZP.select(a||(a=(0,w.Z)(["\n  width: 224px;\n  padding: 14px 89px 14px 18px;\n"]))),T=b.ZP.select(c||(c=(0,w.Z)(["\n  width: 125px;\n  padding: 14px 18px 14px 18px;\n"]))),F=b.ZP.option(l||(l=(0,w.Z)(["\n  color: #121417;\n  font-family: Manrope;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.1;\n"]))),z=b.ZP.div(s||(s=(0,w.Z)(["\n  display: flex;\n"]))),I=b.ZP.input(u||(u=(0,w.Z)(["\n  border-radius: 14px 0px 0px 14px;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n  width: 111px;\n\n  &::placeholder {\n    color: #121417;\n    font-family: Manrope;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.1;\n  }\n"]))),N=b.ZP.input(h||(h=(0,w.Z)(["\n  border-radius: 0px 14px 14px 0px;\n  width: 111px;\n\n  &::placeholder {\n    color: #121417;\n    font-family: Manrope;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.1;\n  }\n"]))),G=b.ZP.button(f||(f=(0,w.Z)(["\n  display: flex;\n\n  height: 48px;\n  padding: 14px 44px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  background: #3470ff;\n  color: #fff;\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.42;\n"])));function A(){A=function(){return e};var n,e={},t=Object.prototype,r=t.hasOwnProperty,i=Object.defineProperty||function(n,e,t){n[e]=t.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(n,e,t){return Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{s({},"")}catch(n){s=function(n,e,t){return n[e]=t}}function u(n,e,t,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),c=new _(r||[]);return i(a,"_invoke",{value:P(n,t,c)}),a}function h(n,e,t){try{return{type:"normal",arg:n.call(e,t)}}catch(n){return{type:"throw",arg:n}}}e.wrap=u;var f="suspendedStart",d="executing",p="completed",x={};function g(){}function v(){}function y(){}var m={};s(m,a,(function(){return this}));var j=Object.getPrototypeOf,w=j&&j(j(O([])));w&&w!==t&&r.call(w,a)&&(m=w);var b=y.prototype=g.prototype=Object.create(m);function k(n){["next","throw","return"].forEach((function(e){s(n,e,(function(n){return this._invoke(e,n)}))}))}function L(n,e){function t(i,o,a,c){var l=h(n[i],n,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?e.resolve(u.__await).then((function(n){t("next",n,a,c)}),(function(n){t("throw",n,a,c)})):e.resolve(u).then((function(n){s.value=n,a(s)}),(function(n){return t("throw",n,a,c)}))}c(l.arg)}var o;i(this,"_invoke",{value:function(n,r){function i(){return new e((function(e,i){t(n,r,e,i)}))}return o=o?o.then(i,i):i()}})}function P(e,t,r){var i=f;return function(o,a){if(i===d)throw new Error("Generator is already running");if(i===p){if("throw"===o)throw a;return{value:n,done:!0}}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var l=E(c,r);if(l){if(l===x)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===f)throw i=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=d;var s=h(e,t,r);if("normal"===s.type){if(i=r.done?p:"suspendedYield",s.arg===x)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(i=p,r.method="throw",r.arg=s.arg)}}}function E(e,t){var r=t.method,i=e.iterator[r];if(i===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,E(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),x;var o=h(i,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,x;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,x):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,x)}function Z(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function C(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function _(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(Z,this),this.reset(!0)}function O(e){if(e||""===e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function t(){for(;++i<e.length;)if(r.call(e,i))return t.value=e[i],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return v.prototype=y,i(b,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=s(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,y):(n.__proto__=y,s(n,l,"GeneratorFunction")),n.prototype=Object.create(b),n},e.awrap=function(n){return{__await:n}},k(L.prototype),s(L.prototype,c,(function(){return this})),e.AsyncIterator=L,e.async=function(n,t,r,i,o){void 0===o&&(o=Promise);var a=new L(u(n,t,r,i),o);return e.isGeneratorFunction(t)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},k(b),s(b,l,"Generator"),s(b,a,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(n){var e=Object(n),t=[];for(var r in e)t.push(r);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function i(r,i){return c.type="throw",c.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(n,e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===n||"continue"===n)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=n,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,x):this.complete(a)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),x},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),C(t),x}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===n){var r=t.completion;if("throw"===r.type){var i=r.arg;C(t)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),x}},e}var B,R=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"],V=function(){var n=(0,x.I0)(),e=(0,p.useState)({make:"",rentalPrice:1e5,mileageFrom:0,mileageTo:1e7}),t=(0,d.Z)(e,2),r=t[0],i=t[1],o=function(n){var e=n.target,t=e.name,o=e.value;i((0,C.Z)((0,C.Z)({},r),{},(0,Z.Z)({},t,o)))},a=function(){var e=(0,E.Z)(A().mark((function e(t){var i,o;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,(0,O.Br)();case 3:i=e.sent,o=_(i,r),n((0,j.O7)(o));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsxs)(M,{children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:"Car brand"}),(0,v.jsxs)(S,{name:"make",id:"make",defaultValue:"",onChange:o,children:[(0,v.jsx)(F,{value:"",disabled:!0,children:"Enter the text"}),R.map((function(n){return(0,v.jsx)("option",{value:n,children:n},n)}))]})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:"Price/ 1 hour"}),(0,v.jsxs)(T,{name:"rentalPrice",id:"price",defaultValue:"",onChange:o,children:[(0,v.jsx)(F,{value:"",disabled:!0,children:"To $"}),Array.from({length:21},(function(n,e){return(0,v.jsx)("option",{value:10*e,children:10*e},e)}))]})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:"\u0421ar mileage / km"}),(0,v.jsxs)(z,{children:[(0,v.jsx)(I,{type:"text",name:"mileageFrom",id:"from",placeholder:"From",onChange:o}),(0,v.jsx)(N,{type:"text",name:"mileageTo",id:"to",placeholder:"To",onChange:o})]})]}),(0,v.jsx)(G,{type:"button",onClick:a,children:"Search"})]})},Y=b.ZP.section(B||(B=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 150px 128px;\n"]))),H=function(){return(0,v.jsxs)(Y,{children:[(0,v.jsx)(V,{}),(0,v.jsx)(P,{})]})}}}]);
//# sourceMappingURL=52.8ff64a99.chunk.js.map