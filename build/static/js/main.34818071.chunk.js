(this["webpackJsonpform-app-cool"]=this["webpackJsonpform-app-cool"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/logo.dbb1f262.svg"},32:function(e,t,a){e.exports=a(54)},37:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a.n(l),o=(a(37),a(9)),i=a(4),m=a(11),u=a.n(m),s=a(27),p=(a(41),a(43),s.initializeApp({apiKey:"AIzaSyB5DrUbL9b_Ol6olMDonUVwDZs3i_81A38",authDomain:"test-84e96.firebaseapp.com",databaseURL:"https://test-84e96.firebaseio.com",projectId:"test-84e96",storageBucket:"test-84e96.appspot.com",messagingSenderId:"719954603174"})),d=a(14),E=a(15),b=(a(47),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sideBar"},r.a.createElement("button",{id:"signOut",onClick:function(){return p.auth().signOut()}},"Salir"),r.a.createElement(o.b,{to:{pathname:"List",typeList:"Pacientes de operatoria"}},r.a.createElement(d.a,{className:"icon",icon:E.c})),r.a.createElement(o.b,{to:{pathname:"List",typeList:"Pacientes de ortodoncia"}},r.a.createElement(d.a,{className:"icon",icon:E.a})),r.a.createElement(o.b,{to:"/"},r.a.createElement(d.a,{className:"icon",icon:E.b}))))}),f=a(12),v=a.n(f),h=(a(50),Object(i.f)((function(){var e=Object(n.useRef)(),t=Object(n.useCallback)((function(t){var a,n,r,l,c,o,i,m,s,d;return u.a.async((function(E){for(;;)switch(E.prev=E.next){case 0:return t.preventDefault(),a=t.target.elements,n=a.name,r=a.lastName,l=a.number,c=a.exNumber,o=a.email,i=a.id,m=a.direction,s=a.type,d={name:n.value,lastName:r.value,number:l.value,exNumber:c.value,email:o.value,id:i.value,direction:m.value,type:s.value},E.prev=3,E.next=6,u.a.awrap(p.database().ref(s.value).push(d));case 6:v()({title:"Contacto guardado \ud83d\ude0e",icon:"success",button:"Listo"}),e.reset(),E.next=14;break;case 10:E.prev=10,E.t0=E.catch(3),console.log(E.t0),v()({title:"Error,\ud83d\udc72\ud83c\udffc",icon:"error",button:"Listo"});case 14:case"end":return E.stop()}}),null,null,[[3,10]])}),[]);return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement("section",{className:"formSection"},r.a.createElement("div",{className:"titleForm"},r.a.createElement("h2",null,"Formulario de ingreso de pacientes")),r.a.createElement("div",{className:"formWrapper"},r.a.createElement("form",{ref:function(t){return e=t},onSubmit:t,name:"form"},r.a.createElement("input",{id:"name",name:"name",placeholder:"Nombre",type:"text"}),r.a.createElement("br",null),r.a.createElement("input",{id:"lastName",name:"lastName",placeholder:"Apellidos",type:"text"}),r.a.createElement("br",null),r.a.createElement("input",{id:"number",name:"number",placeholder:"N\xfamero ",type:"number"}),r.a.createElement("br",null),r.a.createElement("input",{id:"exNumber",name:"exNumber",placeholder:"N\xfamero extra",type:"number"}),r.a.createElement("br",null),r.a.createElement("input",{id:"mail",name:"email",placeholder:"Correo electr\xf3nico",type:"text"}),r.a.createElement("br",null),r.a.createElement("input",{id:"id",name:"id",placeholder:"N\xfamero de cedula",type:"number"}),r.a.createElement("br",null),r.a.createElement("textarea",{rows:"4",id:"direction",placeholder:"Direcci\xf3n",name:"direction",type:"text"}),r.a.createElement("br",null),r.a.createElement("label",null,"Paciente de:")," ",r.a.createElement("br",null),r.a.createElement("select",{name:"type",id:"type"},r.a.createElement("option",{value:"Pacientes de ortodoncia"},"Ortodoncia"),r.a.createElement("option",{value:"Pacientes de operatoria"},"Operatoria"))," ",r.a.createElement("br",null),r.a.createElement("p",null,"*Recuerde seleccionar correctamente el tipo de paciente*"),r.a.createElement("button",{type:"submit"}," Enviar ")))))}))),g=a(13),N=r.a.createContext(),x=function(e){var t=e.children,a=Object(n.useState)(null),l=Object(g.a)(a,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){p.auth().onAuthStateChanged(o)}),[]),r.a.createElement(N.Provider,{value:{currentUser:c}},t)},y=(a(51),a(30)),O=a.n(y),j=Object(i.f)((function(e){var t=e.history,a=Object(n.useCallback)((function(e){var a,n,r;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e.preventDefault(),a=e.target.elements,n=a.email,r=a.password,l.prev=2,l.next=5,u.a.awrap(p.auth().signInWithEmailAndPassword(n.value,r.value));case 5:t.push("/"),l.next=11;break;case 8:l.prev=8,l.t0=l.catch(2),alert(l.t0);case 11:case"end":return l.stop()}}),null,null,[[2,8]])}),[t]);return Object(n.useContext)(N).currentUser?r.a.createElement(i.a,{to:"/"}):r.a.createElement("div",{className:"loginWrapper"},r.a.createElement("div",{className:"loginContein"},r.a.createElement("img",{className:"logo",src:O.a,alt:""}),r.a.createElement("form",{onSubmit:a,name:"loginForm",className:"Login-form"},r.a.createElement("input",{id:"mailLogin",type:"text",name:"email",placeholder:"Correo eletr\xf3nico"})," ",r.a.createElement("br",null),r.a.createElement("input",{id:"mailPassword",type:"password",name:"password",placeholder:"Contrase\xf1a"}),r.a.createElement("br",null),r.a.createElement("button",{className:"buttonLogin",type:"submit"},"Entrar"," "))))})),w=function(e){var t=Object(n.useState)([]),a=Object(g.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(null),o=Object(g.a)(c,2),i=o[0],m=o[1];return Object(n.useEffect)((function(){p.database().ref(e).once("value").then((function(e){l(Object.values(e.val()))})).catch((function(e){m(e),console.log(e)}))}),[e]),{list:r,error:i}},L=(a(52),a(53),Object(i.f)((function(e){var t=w(e.location.typeList),a=t.list,n=t.error;return n?v()({title:n.message}):(console.log(a),r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement("div",{className:"listWrapper"},r.a.createElement("h2",null,e.location.typeList),a.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"item"},r.a.createElement("h3",null,r.a.createElement("b",null,"Nombre:")," ",e.name," ",e.lastName),r.a.createElement("p",null,r.a.createElement("b",null,"Correo electr\xf3nico:"),e.email),r.a.createElement("p",null,r.a.createElement("b",null,"N\xfamero:"),e.number),r.a.createElement("p",null,r.a.createElement("b",null,"N\xfamero extra:"),e.exNumber),r.a.createElement("p",null,r.a.createElement("b",null,"N\xfamero de cedula:"),e.id),r.a.createElement("p",null,r.a.createElement("b",null,"Direcci\xf3n:"),e.direction)))})))))}))),C=a(31),k=function(e){var t=e.component,a=Object(C.a)(e,["component"]),l=Object(n.useContext)(N).currentUser;return r.a.createElement(i.b,Object.assign({},a,{render:function(e){return l?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/login"})}}))},S=function(){return r.a.createElement(x,null,r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(k,{exact:!0,path:"/",component:h}),r.a.createElement(k,{exact:!0,path:"/List",component:L}),r.a.createElement(i.b,{exact:!0,path:"/login",component:j}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.34818071.chunk.js.map