"use strict";(self.webpackChunktechnical_task=self.webpackChunktechnical_task||[]).push([[339],{7454:function(n,e,i){i.d(e,{Z:function(){return L}});var t,r,o,s,l,d,c,a,p,x,h,f,u=i(2791),g=i(9434),m=i(9452),j=i(168),v=i(5867),Z=i(1213),b=v.ZP.div(t||(t=(0,j.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000000;\n"]))),y=v.ZP.div(r||(r=(0,j.Z)(["\n  padding: 20px 37px 40px 37px;\n  border-radius: 24px;\n  background: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* \u0422\u0435\u043d\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430 */\n  max-width: 541px;\n  overflow: auto;\n  text-align: start;\n\n  div:nth-child(2) {\n    margin-bottom: 14px;\n  }\n\n  div:nth-child(6) {\n    margin-bottom: 24px;\n  }\n"]))),k=v.ZP.img(o||(o=(0,j.Z)(["\n  border-radius: 24px;\n"]))),w=(0,v.ZP)(Z.ySC)(s||(s=(0,j.Z)(["\n  position: relative;\n  width: 24px;\n  height: 24px;\n  left: 460px;\n  cursor: pointer;\n"]))),P=v.ZP.div(l||(l=(0,j.Z)(["\n  max-height: 44px;\n  margin-bottom: 14px;\n\n  p {\n    padding: 2px 6px;\n    border-right: 1px solid;\n    text-align: center;\n  }\n\n  p:last-child {\n    border-right: none;\n  }\n"]))),C=v.ZP.p(d||(d=(0,j.Z)(["\n  color: #121417;\n  font-size: 14px;\n  line-height: 1.42;\n  padding-left: 6px;\n  margin-bottom: 24px;\n"]))),z=(0,v.ZP)(C)(c||(c=(0,j.Z)(["\n  font-weight: 500;\n  margin-bottom: 8px;\n"]))),M=v.ZP.p(a||(a=(0,j.Z)(["\n  border-right: 1px solid;\n  padding-left: 6px;\n  padding-right: 6px;\n"]))),S=v.ZP.div(p||(p=(0,j.Z)(["\n  p:last-child {\n    border-right: none;\n  }\n"]))),I=(0,v.ZP)(S)(x||(x=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 24px;\n"]))),E=v.ZP.p(h||(h=(0,j.Z)(["\n  border-radius: 35px;\n  background: #f9f9f9;\n  padding: 7px 14px;\n  color: #363535;\n  font-family: Montserrat;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: -0.24px;\n\n  span {\n    color: #3470ff;\n    font-family: Montserrat;\n    font-size: 12px;\n    margin-left: 5px;\n    font-weight: 600;\n    line-height: 1.5;\n    letter-spacing: -0.24px;\n  }\n"]))),A=v.ZP.a(f||(f=(0,j.Z)(["\n  display: inline-flex;\n  padding: 12px 50px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  background: #3470ff;\n  color: var(--White, #fff);\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px; /* 142.857% */\n  text-decoration: none;\n"]))),F=i(4226),K=i(184),L=function(n){var e=n.id,i=n.onClose,t=(0,g.v9)((function(n){return n.modal.currentAdvert})),r=(0,g.I0)();(0,u.useEffect)((function(){r((0,m.T0)(e));var n=function(n){"Escape"===n.key&&i()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[r,e,i]);return t&&(0,K.jsx)(b,{onClick:function(n){n.target===n.currentTarget&&i()},children:(0,K.jsxs)(y,{children:[(0,K.jsx)(w,{onClick:i}),(0,K.jsx)("div",{children:(0,K.jsx)(k,{src:t.img,alt:t.model,width:465})}),(0,K.jsxs)("div",{children:[(0,K.jsxs)(F.rS,{children:[(0,K.jsx)("p",{children:t.make.length>8?t.make.slice(0,8)+"...":t.make}),(0,K.jsx)("p",{children:t.model.length>8?t.model.slice(0,8)+"...":t.model}),(0,K.jsxs)("p",{children:[",",t.year]})]}),(0,K.jsxs)(P,{children:[(0,K.jsx)("p",{children:t.address.split(",")[1].trim()}),(0,K.jsx)("p",{children:t.address.split(",")[2].trim()}),(0,K.jsxs)("p",{children:["id:",t.id]}),(0,K.jsxs)("p",{children:["Year:",t.year]}),(0,K.jsxs)("p",{children:["Type:",t.type]}),(0,K.jsxs)("p",{children:["Fuel Consumption:",t.fuelConsumption]}),(0,K.jsxs)("p",{children:["Engine Size:",t.engineSize]})]})]}),(0,K.jsx)(C,{children:t.description}),(0,K.jsx)(z,{children:"Accessories and functionalities:"}),(0,K.jsxs)(S,{children:[t.accessories.map((function(n,e){return(0,K.jsx)(M,{children:n},e)})),t.functionalities.map((function(n,e){return(0,K.jsx)(M,{children:n},e)}))]}),(0,K.jsx)(z,{children:"Rental Conditions:"}),(0,K.jsxs)(I,{children:[t.rentalConditions.split("\n").map((function(n,e){var i=n.match(/(\d+)/),t=i?n.replace(i[0],'<span style="color: #3470ff">'.concat(i[0],"</span>")):n;return(0,K.jsx)(E,{dangerouslySetInnerHTML:{__html:t}},e)})),(0,K.jsxs)(E,{children:["Mileage:",(0,K.jsx)("span",{children:t.mileage})]}),(0,K.jsxs)(E,{children:["Price:",(0,K.jsx)("span",{children:t.rentalPrice})]})]}),(0,K.jsx)(A,{href:"tel:+380730000000",children:"Rental car"})]})})}},4226:function(n,e,i){i.d(e,{CK:function(){return a},KM:function(){return p},mo:function(){return f},p$:function(){return x},rS:function(){return h}});var t,r,o,s,l,d=i(168),c=i(5867),a=c.ZP.ul(t||(t=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 29px;\n  padding: 0;\n  list-style: none;\n  margin-bottom: 100px;\n  li {\n    width: 274px;\n    max-height: 426px;\n  }\n"]))),p=c.ZP.button(r||(r=(0,d.Z)(["\n  width: 274px;\n  height: 44px;\n  padding: 12px 99px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background: #3470ff;\n  color: #fff;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.42;\n  cursor: pointer;\n"]))),x=c.ZP.button(o||(o=(0,d.Z)(["\n  background-color: transparent;\n  color: #3470ff;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n  cursor: pointer;\n"]))),h=c.ZP.div(s||(s=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n  padding: 0 4px;\n  p {\n    color: #121417;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 1.5;\n    /* margin-right: 4px; */\n  }\n  p:first-child {\n    margin-right: 5px;\n  }\n\n  p:nth-child(2) {\n    color: #3470ff;\n  }\n\n  p:nth-child(3) {\n    margin-right: auto;\n  }\n"]))),f=c.ZP.div(l||(l=(0,d.Z)(["\n  max-height: 44px;\n  margin-bottom: 22px;\n\n  p {\n    padding: 2px 6px;\n    border-right: 1px solid;\n    text-align: center;\n  }\n"])))},6959:function(n,e,i){i.d(e,{$:function(){return o}});var t,r=i(168),o=i(5867).ZP.section(t||(t=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 50px 128px;\n"])))},7339:function(n,e,i){i.r(e),i.d(e,{default:function(){return u}});var t=i(9439),r=i(7454),o=i(4226),s=i(2791),l=i(9434),d=i(4214),c=i(1240),a=i(203),p=i(184),x=function(){var n=(0,l.v9)((function(n){return n.adverts.favoriteAdverts})),e=(0,s.useState)(null),i=(0,t.Z)(e,2),x=i[0],h=i[1],f=(0,l.v9)((function(n){return n.modal.isOpen})),u=(0,l.I0)();return n&&(0,p.jsxs)(p.Fragment,{children:[" ",(0,p.jsx)(o.CK,{children:n.map((function(n){var e=n.address.split(", ");return(0,p.jsxs)("li",{children:[(0,p.jsx)("div",{style:{borderRadius:"12px",backgroundImage:"url(".concat(n.img,")"),backgroundSize:"cover",backgroundPosition:"center",width:"274px",height:"268px",marginBottom:"14px",position:"relative"},children:(0,p.jsx)(a.BgW,{style:{position:"absolute",zIndex:1e4,top:"10px",right:"10px",border:"none",color:"#3470FF",cursor:"pointer",width:"23px",height:"23px"},onClick:function(){return function(n){u((0,d.QJ)(n))}(n)}})}),(0,p.jsxs)(o.rS,{children:[(0,p.jsx)("p",{children:n.make.length>8?n.make.slice(0,8)+"...":n.make}),(0,p.jsx)("p",{children:n.model.length>8?n.model.slice(0,8)+"...":n.model}),(0,p.jsxs)("p",{children:[",",n.year]}),(0,p.jsx)("p",{children:n.rentalPrice})]}),(0,p.jsxs)(o.mo,{children:[(0,p.jsx)("p",{children:e[e.length-2]}),(0,p.jsx)("p",{children:e[e.length-1]}),(0,p.jsx)("p",{children:n.rentalCompany}),(0,p.jsx)("p",{children:n.type}),(0,p.jsx)("p",{children:n.model}),(0,p.jsx)("p",{children:n.mileage}),(0,p.jsx)("p",{children:n.accessories[2]})]}),(0,p.jsx)(o.KM,{onClick:function(){return e=n.id,h(e),void u((0,c.h7)());var e},children:"Learn more"})]},n.id)}))}),f&&(0,p.jsx)(r.Z,{onClose:function(){u((0,c.Mr)())},id:x})]})},h=i(6959),f=i(8174),u=function(){var n=(0,l.v9)((function(n){return n.adverts.favoriteAdverts})),e=(0,l.I0)();return(0,s.useEffect)((function(){e((0,d.QI)())}),[e]),(0,p.jsxs)(h.$,{children:[0!==n.length?(0,p.jsx)(x,{}):(0,p.jsx)("p",{children:"there's nothing here yet"}),(0,p.jsx)(f.Ix,{autoClose:2500})]})}}}]);
//# sourceMappingURL=339.2b7a6000.chunk.js.map