(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);n(0);var c=n(38),a=(n(56),n(7));t.default=function(e){var t=e.placeholder,n=e.onEnter,s=e.taskText,r=e.onTextChange;return Object(a.jsx)("div",{className:"c-taskbox",children:Object(a.jsx)(c.a.Control,{type:"text",placeholder:t,value:s,onChange:function(e){return r(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e.target.value):null}})})}},56:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(12),r=n.n(s),i=(n(46),n.p,n(47),n(40)),o=n(41),l=n(22),u=n(39),j=n(38),d=(n(48),n(7));var f=function(e){var t=e.task,n=e.index,a=e.onTaskRemove,s=e.onTaskSelected,r=Object(c.useState)(!1),i=Object(l.a)(r,2),o=i[0],f=i[1];return Object(d.jsxs)(u.a.Item,{action:!0,onMouseOver:function(){return f(!0)},onMouseOut:function(){return f(!1)},children:[Object(d.jsx)(j.a.Check,{className:t.status?"c-active-task":"c-complited-task",label:t.text,onClick:function(){return s(n)}}),Object(d.jsx)("button",{type:"button",class:o?"btn":"btn hide",onClick:function(){return a(n)},children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x text-danger",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})})})]})};n(53);var b=function(e){var t=e.tasks,n=e.onTaskRemove,c=e.onTaskSelected;return Object(d.jsx)("div",{className:"c-task",children:Object(d.jsx)(u.a,{variant:"flush",children:t.map((function(e,t){return Object(d.jsx)(f,{task:e,index:t,onTaskRemove:n,onTaskSelected:c})}))})})},h=(n(54),n(23)),x=h.Container,v=h.Modal,O=h.Button,k=h.Navbar,p=(h.Row,n(55).default);var m=function(){var e=a.a.useState([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=a.a.useState(""),r=Object(l.a)(s,2),i=r[0],u=r[1],j=a.a.useState("All"),f=Object(l.a)(j,2),h=f[0],m=f[1];return Object(d.jsxs)("div",{className:"p-todo",children:[Object(d.jsxs)(x,{children:[Object(d.jsx)("h1",{className:"display-1",children:"Todos"}),Object(d.jsx)(p,{placeholder:"Add task ... (to finish press enter)",onEnter:function(e){c((function(t){return t.concat({text:e,status:!0})})),u("")},taskText:i,onTextChange:function(e){u(e)}}),Object(d.jsx)(b,{tasks:function(){switch(h){case"All":return n;case"Active":return n.filter((function(e){return e.status}));case"Complite":return n.filter((function(e){return!e.status}))}}(),onTaskRemove:function(e){if(n[e].status)return Object(d.jsxs)(v.Dialog,{children:[Object(d.jsx)(v.Header,{closeButton:!0,children:Object(d.jsx)(v.Title,{children:"Delete Action"})}),Object(d.jsx)(v.Body,{children:Object(d.jsx)("p",{children:"Are you sure you want to delete your active task?"})}),Object(d.jsxs)(v.Footer,{children:[Object(d.jsx)(O,{variant:"secondary",children:"Close"}),Object(d.jsx)(O,{variant:"primary",children:"Yes"})]})]});c((function(t){return t.slice(0,e).concat(t.slice(e+1,t.length))}))},onTaskSelected:function(e){var t=n.map((function(t,n){if(e==n){var c=Object(o.a)({},t);return c.status=!c.status,c}return t}));c(t)}})]}),Object(d.jsxs)(k,{className:0==n.length?"hide":"",children:[Object(d.jsxs)(k.Brand,{children:[n.filter((function(e){return e.status})).length," items left"]}),Object(d.jsxs)(k.Collapse,{className:"justify-content-end",children:[Object(d.jsx)(k.Brand,{className:"All"===h?"nav-filter marked":"nav-filter",onClick:function(){return m("All")},children:"All"}),Object(d.jsx)(k.Brand,{className:"Active"===h?"nav-filter marked":"nav-filter",onClick:function(){return m("Active")},children:"Active"}),Object(d.jsx)(k.Brand,{className:"Complite"===h?"nav-filter marked":"nav-filter",onClick:function(){return m("Complite")},children:"Complite"})]})]})]})};var C=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(i.a,{children:Object(d.jsx)(m,{})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(57);r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),g()}},[[58,1,2]]]);
//# sourceMappingURL=main.cc5c6cc9.chunk.js.map