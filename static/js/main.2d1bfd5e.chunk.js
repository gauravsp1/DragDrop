(this.webpackJsonpdragdrop=this.webpackJsonpdragdrop||[]).push([[0],{13:function(e,t,r){"use strict";r.r(t);var n=r(1),i=r(6),c=r.n(i),u=r(7),d=r(5),a=r(0);var o=function(e){var t=Object(n.useState)(e.data),r=Object(d.a)(t,2),i=r[0],c=r[1],o=Object(n.useState)(!1),s=Object(d.a)(o,2),l=s[0],m=s[1],g=Object(n.useRef)(),p=Object(n.useRef)();function j(){m(!1),g.current=null,p.current.removeEventListener("dragend",j),p.current=null}function I(e,t){p.current!==e.target&&(console.log(t.itemId),c((function(e){var r=Object(u.a)(e);return r[t.groupId].items.splice(t.itemId,0,r[g.current.groupId].items.splice(g.current.itemId,1)),g.current=t,r})))}function b(e){return g.current.groupId===e.groupId&&g.current.itemId===e.itemId?"dnd_item current":"dnd_item"}return Object(a.jsx)("div",{className:"dragdrop",children:i.map((function(e,t){return Object(a.jsxs)("div",{onDragEnter:l&&!e.items.length?function(e){return I(e,{groupId:t,itemId:0})}:null,className:"dnd_group",children:[Object(a.jsx)("div",{className:"dnd_group_title",children:e.title}),e.items.map((function(e,r){return Object(a.jsx)("div",{draggable:!0,onDragStart:function(e){return function(e,t){p.current=e.target,p.current.addEventListener("dragend",j),g.current=t,setTimeout((function(){m(!0)}),0)}(e,{groupId:t,itemId:r})},onDragEnter:l?function(e){I(e,{groupId:t,itemId:r})}:null,className:l?b({groupId:t,itemId:r}):"dnd_item",children:e})}))]})}))})};var s=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(o,{data:[{title:"Task",items:["Buy Books Online","Grocery","Iron Clothes","Check Mails"]},{title:"To-Do",items:["Daily Reading","Walk","Wash Car"]},{title:"Done",items:["Meditate"]}]})})};c.a.render(Object(a.jsx)(s,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.2d1bfd5e.chunk.js.map