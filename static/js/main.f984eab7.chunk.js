(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),a=n(8),i=n.n(a),s=(n(15),n(4)),r=n(3),u=(n(16),n(1));var d=function(t){var e=Object(o.useState)(t.edit?t.edit.value:""),n=Object(r.a)(e,2),c=n[0],a=n[1],i=Object(o.useRef)(null);Object(o.useEffect)((function(){i.current.focus()}));var s=function(t){a(t.target.value)},d=function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),a("")};return Object(u.jsx)("form",{onSubmit:d,className:"todo-form",children:t.edit?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{placeholder:"Update your task",value:c,onChange:s,name:"text",ref:i,className:"todo-input edit"}),Object(u.jsx)("button",{onClick:d,className:"todo-button edit",children:Object(u.jsx)("span",{className:"update-text",children:"Update"})})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{placeholder:"Type to add...",value:c,onChange:s,name:"text",className:"todo-input",ref:i}),Object(u.jsx)("button",{onClick:d,className:"todo-button",children:Object(u.jsx)("span",{className:"todo-text",children:"Add Task"})})]})})},l=n(9),j=n(10),b=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,a=t.updateTodo,i=Object(o.useState)({id:null,value:""}),s=Object(r.a)(i,2),b=s[0],f=s[1];return b.id?Object(u.jsx)(d,{edit:b,onSubmit:function(t){a(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(u.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(u.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(u.jsxs)("div",{className:"icons",children:[Object(u.jsx)(l.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(u.jsx)(j.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var f=function(){var t=Object(o.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Start adding up your tasks..."}),Object(u.jsx)(d,{onSubmit:function(t){var e;if(t.text&&!/^\s*$/.test(t.text)){var o=[t].concat(Object(s.a)(n));c(o),(e=console).log.apply(e,Object(s.a)(n))}}}),Object(u.jsx)(b,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(s.a)(n).filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var O=function(){var t=Object(o.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(o.useEffect)((function(){var t=JSON.parse(localStorage.getItem("todos"));t&&c(t)}),[]),Object(o.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(u.jsx)("div",{className:"todo-app",children:Object(u.jsx)(f,{})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),o(t),c(t),a(t),i(t)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.f984eab7.chunk.js.map