(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),o=n.n(s),l=(n(9),n(2)),r=(n(10),n(0));var i=function(e){return Object(r.jsx)("ol",{children:e.notes&&e.notes.notes.map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsx)("hr",{}),Object(r.jsx)("a",{href:"/notes/",onClick:function(n){return function(t,n){t.preventDefault(),e.noteDetail(n.id)}(n,t)},children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsx)("h6",{children:t.title})}),Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsx)("small",{children:t.created_on})})]})})]},t.id)}))})};var j=function(e){var t=Object(c.useState)(),n=Object(l.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){fetch("https://eazynote.herokuapp.com/notes/"+e.id,{method:"GET",headers:{Accept:"application/json","Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(e){return console.log(e)}))}),[e]),Object(r.jsx)("div",{className:"detail",children:a&&Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:a.note.title}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col",children:Object(r.jsx)("small",{children:a.note.created_on})}),Object(r.jsx)("div",{className:"col",children:a.note.tags&&a.note.tags.map((function(e){return Object(r.jsx)("span",{className:"badge rounded-pill bg-warning text-dark",children:e},e)}))})]}),Object(r.jsx)("p",{className:"note-detail",children:a.note.detail}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col"}),Object(r.jsxs)("div",{className:"col",children:[Object(r.jsx)("button",{className:"btn btn-info btn-sm btn-detail",onClick:function(){e.editNote(a)},children:"Edit"}),Object(r.jsx)("button",{className:"btn btn-danger btn-sm btn-detail",onClick:function(){fetch("https://eazynote.herokuapp.com/notes/deletenote/"+e.id,{method:"DELETE",headers:{Accept:"application/json","Content-type":"application/json"}}).then((function(){return e.deleteSuccess("note",null)}))},children:"Delete"})]})]})]})})};var b=function(e){var t={},n=e.note.note.id,a=Object(c.useState)(e.note.note.title),s=Object(l.a)(a,2),o=s[0],i=s[1],j=Object(c.useState)(e.note.note.detail),b=Object(l.a)(j,2),d=b[0],u=b[1];return e.tags.tags.forEach((function(n){e.note.note.tags.includes(n[0])?t[n[0]]=!0:t[n[0]]=!1})),Object(r.jsx)("div",{children:e.note&&Object(r.jsxs)("form",{onSubmit:function(c){c.preventDefault(),t.title=o,t.detail=d,fetch("https://eazynote.herokuapp.com/notes/"+n+"/edit",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(t)}).then((function(t){e.success("note",n)}))},children:[Object(r.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title : "}),Object(r.jsx)("input",{type:"text",className:"form-control-sm",placeholder:"Enter Title",value:o,name:"title",onChange:function(e){return i(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("textarea",{className:"form-control-sm",name:"detail",id:"detail",cols:"50",rows:"5",value:d,placeholder:"...note...",onChange:function(e){return u(e.target.value)}}),Object(r.jsx)("div",{className:"tagcheckbox",children:e.tags.tags&&e.tags.tags.map((function(e){return Object(r.jsx)("span",{children:t[e[0]]?Object(r.jsxs)("span",{className:"form-check form-check-inline",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",name:e,id:e,defaultChecked:!0,onChange:function(e){return t[e.target.name]=e.target.checked}}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:e,children:e})]}):Object(r.jsxs)("span",{className:"form-check form-check-inline",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",name:e,id:e,onChange:function(e){return t[e.target.name]=e.target.checked}}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:e,children:e})]})},e)}))}),Object(r.jsx)("div",{className:"Addbtn",children:Object(r.jsx)("button",{className:"btn btn-success",type:"submit",children:"Save"})})]})})};var d=function(e){var t={},n=Object(c.useState)(),a=Object(l.a)(n,2),s=a[0],o=a[1],i=Object(c.useState)(),j=Object(l.a)(i,2),b=j[0],d=j[1];return e.tags.tags.forEach((function(e){t[e[0]]=!1})),Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t.title=s,t.detail=b,fetch("https://eazynote.herokuapp.com/notes/addnew",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(t)}).then((function(){return e.success("note")})).catch((function(e){return console.log(e)}))},children:[Object(r.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title : "}),Object(r.jsx)("input",{className:"form-control-sm",type:"text",placeholder:"Enter Title Here",name:"title",onChange:function(e){return o(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("textarea",{name:"detail",cols:"50",rows:"5",className:"form-control-sm",placeholder:"Add Notes Here",onChange:function(e){return d(e.target.value)}}),Object(r.jsx)("div",{className:"tagcheckbox",children:e.tags.tags&&e.tags.tags.map((function(e){return Object(r.jsxs)("span",{className:"form-check form-check-inline",children:[Object(r.jsx)("input",{type:"checkbox",className:"form-check-input",name:e,onChange:function(e){return t[e.target.name]=e.target.checked}}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:e,children:e})]},e)}))}),Object(r.jsx)("div",{className:"Addbtn",children:Object(r.jsx)("button",{className:"btn btn-success btn-sm",type:"submit",children:"Add"})})]})})};var u=function(e){var t=Object(c.useState)(),n=Object(l.a)(t,2),a=n[0],s=n[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={};n.newtag=a,console.log(a),fetch("https://eazynote.herokuapp.com/notes/newtag",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(n)}).then((function(){return e.success("tag")})).catch((function(e){return console.log(e)}))},children:[Object(r.jsx)("label",{className:"form-label",htmlFor:"newtag",children:" New Tag : "}),Object(r.jsx)("input",{className:"form-control-sm",type:"text",placeholder:"Enter Tag Name Here",name:"newtag",onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("div",{className:"Addbtn",children:Object(r.jsx)("button",{className:"btn btn-success btn-sm",type:"submit",children:"Add"})})]})})};var h=function(){var e=Object(c.useState)("home"),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(),o=Object(l.a)(s,2),h=o[0],m=o[1],f=Object(c.useState)(),p=Object(l.a)(f,2),O=p[0],x=p[1],g=Object(c.useState)(),v=Object(l.a)(g,2),N=v[0],k=v[1],y=Object(c.useState)(),S=Object(l.a)(y,2),C=S[0],T=S[1],A=Object(c.useState)(!1),E=Object(l.a)(A,2),w=E[0],D=E[1],F=Object(c.useState)(null),z=Object(l.a)(F,2),J=z[0],P=z[1],H=Object(c.useState)(null),G=Object(l.a)(H,2),L=G[0],B=G[1],I=Object(c.useState)(!1),_=Object(l.a)(I,2),M=_[0],q=_[1];Object(c.useEffect)((function(){fetch("https://eazynote.herokuapp.com/notes/",{method:"GET",headers:{Accept:"application/json","Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return m(e)})).catch((function(e){return console.log(e)}))}),[w]),Object(c.useEffect)((function(){fetch("https://eazynote.herokuapp.com/tags",{method:"GET",headers:{Accept:"application/json","Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return x(e)})).catch((function(e){return console.log(e)}))}),[M]);var K=function(e){k(e),a("detail")},Q=function(e,t){"note"===e?(D(!w),t?K(t):a("home")):(q(!M),a("home"))};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("nav",{className:"navbar sticky-top nav-bar-dark navbar-expand-lg",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand link",href:"/",children:Object(r.jsx)("h1",{children:"EasyNote"})}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon",children:Object(r.jsx)("h1",{children:Object(r.jsx)("i",{class:"bi bi-justify"})})})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:Object(r.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("button",{className:"nav-link btn btn-link link",onClick:function(){return a("addnoteform")},children:" + Add Note "})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("button",{className:"nav-link btn btn-link link",onClick:function(){return a("addtagform")},children:" + Add Tag "})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active link","aria-current":"page",href:"/",children:"Home"})})]})})]})}),Object(r.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var t={};t.searchstring=L,t.tag=J,fetch("https://eazynote.herokuapp.com/notes/search",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return m(e)})).catch((function(e){return console.log(e)})),a("searchresults")},children:[Object(r.jsx)("input",{className:"form-control-sm form-item",type:"search",placeholder:"Search the Notes",onChange:function(e){return B(e.target.value)}}),Object(r.jsxs)("select",{name:"tag",className:"form-control-sm form-select-sm form-item",onChange:function(e){return P(e.target.value)},children:[Object(r.jsx)("option",{value:"null",children:"-Apply Filter-"}),O&&O.tags.map((function(e){return Object(r.jsxs)("option",{value:e,children:[e," "]},e)}))]}),Object(r.jsxs)("button",{className:"form-item btn btn-outline-info",type:"submit",children:[Object(r.jsx)("i",{className:"bi bi-search"})," Search / ",Object(r.jsx)("i",{class:"bi bi-filter"})," Filter"]})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsx)(i,{notes:h,noteDetail:K})}),Object(r.jsxs)("div",{className:"col-lg-6",children:["detail"===n&&Object(r.jsx)(j,{id:N,editNote:function(e){T(e),a("editform")},deleteSuccess:Q}),"editform"===n&&Object(r.jsx)(b,{note:C,tags:O,success:Q}),"addnoteform"===n&&Object(r.jsx)(d,{tags:O,success:Q}),"addtagform"===n&&Object(r.jsx)(u,{success:Q})]})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),m()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.a179bf15.chunk.js.map