(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{139:function(e,a,t){},171:function(e,a,t){e.exports=t(207)},176:function(e,a,t){},207:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(13),c=t.n(r),i=(t(176),t(14)),s=(t(139),t(8)),o=t(60),m=t(234),u=t(237),d=t(253),E=t(238),p=t(252),v=t(90),h=t.n(v),b=t(105),g=t.n(b),f=t(106),y=t.n(f),N=t(102),C=t.n(N),w=t(104),S=t.n(w),k=t(15),x=t.n(k),O=t(39),j=t(45),I=t.n(j),B=Object(n.createContext)({bus:[],fish:[],villagers:[],creatures:[]}),U=function(e){var a=Object(n.useState)([]),t=Object(s.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),m=o[0],u=o[1],d=Object(n.useState)([]),E=Object(s.a)(d,2),p=E[0],v=E[1],h=Object(n.useState)([]),b=Object(s.a)(h,2),g=b[0],f=b[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(O.a)(x.a.mark((function e(a){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("https://acnhapi.com/v1a/".concat(a));case 3:return t=e.sent,e.next=6,t.data;case 6:n=e.sent,"bugs"===a&&c(n),"fish"===a&&u(n),"villagers"===a&&v(n),"sea"===a&&f(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(a){return e.apply(this,arguments)}}();e("bugs"),e("fish"),e("villagers"),e("sea"),e("fossils")}),[]),l.a.createElement(B.Provider,{value:{bugs:r,fishes:m,villagers:p,creatures:g}},e.children)},D=function(){return Object(n.useContext)(B)},L=t(33),A=t.n(L),F=Object(m.a)({searchDiv:{display:"flex",alignItems:"center",flexDirection:"column"},search:{display:"flex",alignItems:"center",backgroundColor:"black",width:340,padding:8,borderRadius:10},searchBar:{color:"white",backgroundColor:"black",border:"none",width:340,padding:8}}),T=function(){var e=D(),a=l.a.useState(""),t=Object(s.a)(a,2),n=t[0],r=t[1],c=F(),i=e.villagers.filter((function(e){return e.name["name-USen"].toLowerCase().includes(n.toLowerCase())||e.personality.toLowerCase().includes(n.toLowerCase())||e["birthday-string"].toLowerCase().includes(n.toLowerCase())||e.species.toLowerCase().includes(n.toLowerCase())})).map((function(e){return l.a.createElement("div",{key:e.id,className:"listItem"},l.a.createElement("div",{className:"listItemHeader"},l.a.createElement(h.a,null,l.a.createElement("img",{alt:"",src:e.icon_uri})),l.a.createElement("p",null,e.name["name-USen"])),l.a.createElement("div",null,l.a.createElement("div",{className:"listItemContent"},l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement("img",{alt:"",src:e.image_uri})),l.a.createElement("p",null,'"',e["catch-phrase"],'"'),l.a.createElement("p",{className:"saying"},e.saying)),l.a.createElement("div",{className:"attributes"},l.a.createElement("div",{className:"attribute"},l.a.createElement(C.a,null)," ",l.a.createElement("p",null,e.gender)),l.a.createElement("div",{className:"attribute"},l.a.createElement(S.a,null)," ",l.a.createElement("p",null,e.species)),l.a.createElement("div",{className:"attribute"},l.a.createElement(g.a,null),l.a.createElement("p",null,e["birthday-string"])),l.a.createElement("div",{className:"attribute"},l.a.createElement(y.a,null),l.a.createElement("p",null,e.personality))))))}));return l.a.createElement("div",{className:"villagers"},l.a.createElement("h1",null,"All Villagers"),l.a.createElement("div",{className:c.searchDiv},l.a.createElement("div",{className:c.search},l.a.createElement(A.a,null),l.a.createElement("input",{className:c.searchBar,placeholder:"Search name, personality, birthday, species",onChange:function(e){r(e.target.value)},value:n})),l.a.createElement("div",{className:"list"},i)))},_=function(){var e=D(),a=Object(n.useState)([]),t=Object(s.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){if(e.villagers.length>0){var a=[],t=e.villagers.find((function(e){return"Daisy"===e.name["name-USen"]})),n=e.villagers.find((function(e){return"Buck"===e.name["name-USen"]})),l=e.villagers.find((function(e){return"Nan"===e.name["name-USen"]})),r=e.villagers.find((function(e){return"Stitches"===e.name["name-USen"]})),i=e.villagers.find((function(e){return"Chevre"===e.name["name-USen"]})),s=e.villagers.find((function(e){return"Graham"===e.name["name-USen"]})),o=e.villagers.find((function(e){return"Croque"===e.name["name-USen"]})),m=e.villagers.find((function(e){return"Carmen"===e.name["name-USen"]})),u=e.villagers.find((function(e){return"Tank"===e.name["name-USen"]})),d=e.villagers.find((function(e){return"Claudia"===e.name["name-USen"]}));a.push(o),a.push(t),a.push(n),a.push(l),a.push(r),a.push(i),a.push(s),a.push(m),a.push(u),a.push(d),c(a)}}),[e]),l.a.createElement("div",{className:"villagers"},l.a.createElement("h1",null,"My Villagers"),l.a.createElement("div",{className:"list"},r.map((function(e){return l.a.createElement("div",{key:e.id,className:"listItem"},l.a.createElement("div",{className:"listItemHeader"},l.a.createElement(h.a,null,l.a.createElement("img",{alt:"",src:e.icon_uri})),l.a.createElement("p",null,e.name["name-USen"])),l.a.createElement("div",null,l.a.createElement("div",{className:"listItemContent"},l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement("img",{alt:"",src:e.image_uri})),l.a.createElement("p",null,'"',e["catch-phrase"],'"'),l.a.createElement("p",{className:"saying"},e.saying)),l.a.createElement("div",{className:"attributes"},l.a.createElement("div",{className:"attribute"},l.a.createElement(C.a,null)," ",l.a.createElement("p",null,e.gender)),l.a.createElement("div",{className:"attribute"},l.a.createElement(S.a,null)," ",l.a.createElement("p",null,e.species)),l.a.createElement("div",{className:"attribute"},l.a.createElement(g.a,null),l.a.createElement("p",null,e["birthday-string"])),l.a.createElement("div",{className:"attribute"},l.a.createElement(y.a,null),l.a.createElement("p",null,e.personality))))))}))))},R=t(75),M=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1];return window.addEventListener("scroll",(function(){!t&&window.pageYOffset>400?r(!0):t&&window.pageYOffset<=400&&r(!1)})),l.a.createElement(R.a,{className:"scrollTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:40,display:t?"flex":"none"}})},W=Object(m.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function q(e){var a=e.children,t=e.value,n=e.index,r=Object(o.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),t===n&&l.a.createElement(p.a,{p:3},a))}function V(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function H(){var e=W(),a=l.a.useState(0),t=Object(s.a)(a,2),n=t[0],r=t[1];return l.a.createElement("div",{className:e.root},l.a.createElement(M,null),l.a.createElement(u.a,{position:"static",className:e.appBar},l.a.createElement(d.a,{value:n,onChange:function(e,a){r(a)},centered:!0},l.a.createElement(E.a,Object.assign({label:"My Villagers "},V(0))),l.a.createElement(E.a,Object.assign({label:"All Villagers"},V(1))))),l.a.createElement(q,{value:n,index:0},l.a.createElement(_,null)),l.a.createElement(q,{value:n,index:1},l.a.createElement(T,null)))}var G=t(54),P=t.n(G),Y=t(27),J=t.n(Y),z=t(34),$=t.n(z),K=Object(m.a)({searchDiv:{display:"flex",alignItems:"center",flexDirection:"column"},search:{display:"flex",alignItems:"center",backgroundColor:"black",width:340,padding:8,borderRadius:10},searchBar:{color:"white",backgroundColor:"black",border:"none",width:340,padding:8}}),Q=function(){var e=D(),a=l.a.useState(""),t=Object(s.a)(a,2),n=t[0],r=t[1],c=K(),i=e.bugs.filter((function(e){return e.name["name-USen"].toLowerCase().includes(n.toLowerCase())||e.availability.location.toLowerCase().includes(n.toLowerCase())})).map((function(e){return l.a.createElement("div",{key:e.id,className:"listItem"},l.a.createElement("div",{className:"listItemContentBugs listItemContent"},l.a.createElement("div",null,l.a.createElement("img",{alt:e.name["name-USen"],src:e.icon_uri}),l.a.createElement("p",null,e.name["name-USen"]),l.a.createElement("p",null,l.a.createElement(J.a,null)," ",e.price)),l.a.createElement("div",{className:"attributes"},l.a.createElement("div",{className:"attribute"},l.a.createElement(P.a,null)," ",l.a.createElement("p",null,e.availability.location)),l.a.createElement("div",{className:"attribute"},l.a.createElement($.a,null)," ",l.a.createElement("p",null,""===e.availability.time?"All Day":e.availability.time)))))}));return l.a.createElement("div",{className:"bugs"},l.a.createElement("h1",null," ",e.bugs.length," Bugs"),l.a.createElement("div",{className:c.searchDiv},l.a.createElement("div",{className:c.search},l.a.createElement(A.a,null),l.a.createElement("input",{className:c.searchBar,placeholder:"Search name or location",onChange:function(e){r(e.target.value)},value:n})),l.a.createElement("div",{className:"list"},i)))},X=function(){var e=D(),a=(new Date).getMonth()+1,t=(new Date).getHours();console.log(a,t);var n=e.bugs.filter((function(e){return e.availability["month-array-northern"].includes(a)&&e.availability["time-array"].includes(t)})).map((function(e){return{id:e.id,img:e.icon_uri,name:e.name["name-USen"],price:e.price,time:""===e.availability.time?"All Day":e.availability.time,location:e.availability.location}}));return l.a.createElement("div",{className:"bugs"},l.a.createElement("h1",null," ",n.length," Bugs Availible Now"),l.a.createElement("div",{className:"list"},n.map((function(e){return l.a.createElement("div",{key:e.id,className:"listItem"},l.a.createElement("div",{className:"listItemContentBugs listItemContent"},l.a.createElement("div",null,l.a.createElement("img",{alt:e.name,src:e.img}),l.a.createElement("p",null,e.name),l.a.createElement("p",null,l.a.createElement(J.a,null)," ",e.price)),l.a.createElement("div",{className:"attributes"},l.a.createElement("div",{className:"attribute"},l.a.createElement(P.a,null)," ",l.a.createElement("p",null,e.location)),l.a.createElement("div",{className:"attribute"},l.a.createElement($.a,null)," ",l.a.createElement("p",null,e.time)))))}))))};function Z(e){var a=e.children,t=e.value,n=e.index,r=Object(o.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),t===n&&l.a.createElement(p.a,{p:3},a))}function ee(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var ae=Object(m.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function te(){var e=ae(),a=l.a.useState(0),t=Object(s.a)(a,2),n=t[0],r=t[1];return l.a.createElement("div",{className:e.root},l.a.createElement(M,null),l.a.createElement(u.a,{position:"static"},l.a.createElement(d.a,{value:n,onChange:function(e,a){r(a)},centered:!0},l.a.createElement(E.a,Object.assign({label:"Current Bugs"},ee(0))),l.a.createElement(E.a,Object.assign({label:"All Bugs"},ee(1))))),l.a.createElement(Z,{value:n,index:0},l.a.createElement(X,null)),l.a.createElement(Z,{value:n,index:1},l.a.createElement(Q,null)))}var ne=t(55),le=t.n(ne),re=Object(m.a)({searchDiv:{display:"flex",alignItems:"center",flexDirection:"column"},search:{display:"flex",alignItems:"center",backgroundColor:"black",width:340,padding:8,borderRadius:10},searchBar:{color:"white",backgroundColor:"black",border:"none",width:340,padding:8}}),ce=function(){var e=D(),a=l.a.useState(""),t=Object(s.a)(a,2),n=t[0],r=t[1],c=re(),i=e.fishes.filter((function(e){return e.name["name-USen"].toLowerCase().includes(n.toLowerCase())||e.availability.location.toLowerCase().includes(n.toLowerCase())})).map((function(e){return l.a.createElement("div",{key:e.id,className:"listItem"},l.a.createElement("div",{className:"listItemContentFish listItemContent"},l.a.createElement("div",null,l.a.createElement("img",{alt:"",src:e.icon_uri}),l.a.createElement("p",null,e.name["name-USen"]),l.a.createElement("p",null,l.a.createElement(J.a,null),e.price)),l.a.createElement("div",{className:"attributes"},l.a.createElement("div",{className:"attribute"},l.a.createElement(P.a,null)," ",l.a.createElement("p",null,e.availability.location)),l.a.createElement("div",{className:"attribute"},l.a.createElement($.a,null)," ",l.a.createElement("p",null,""===e.availability.time?"All Day":e.availability.time," ")),l.a.createElement("div",{className:"attribute"},l.a.createElement(le.a,null)," ",l.a.createElement("p",null,e.shadow)))))}));return l.a.createElement("div",{className:"fish"},l.a.createElement("h1",null,e.fishes.length," Fish"),l.a.createElement("div",{className:c.searchDiv},l.a.createElement("div",{className:c.search},l.a.createElement(A.a,null),l.a.createElement("input",{className:c.searchBar,placeholder:"Search name or location",onChange:function(e){r(e.target.value)},value:n})),l.a.createElement("div",{className:"list"},i)))},ie=function(){var e=D(),a=(new Date).getMonth()+1,t=(new Date).getHours();console.log(t);var n=e.fishes.filter((function(e){return e.availability["month-array-northern"].includes(a)&&e.availability["time-array"].includes(t)})).map((function(e){return{id:e.id,img:e.icon_uri,name:e.name["name-USen"],price:e.price,time:""===e.availability.time?"All Day":e.availability.time,location:e.availability.location,rarity:e.availability.rarity,shadow:e.shadow}}));return l.a.createElement("div",{className:"fish"},l.a.createElement("h1",null,n.length," Fish Availible Now"),l.a.createElement("div",{className:"list"},n.map((function(e){return l.a.createElement("div",{key:e.id,className:"listItem"},l.a.createElement("div",{className:"listItemContentFish listItemContent"},l.a.createElement("div",null,l.a.createElement("img",{alt:"",src:e.img}),l.a.createElement("p",null,e.name),l.a.createElement("p",null,l.a.createElement(J.a,null),e.price)),l.a.createElement("div",{className:"attributes"},l.a.createElement("div",{className:"attribute"},l.a.createElement(P.a,null)," ",l.a.createElement("p",null,e.location)),l.a.createElement("div",{className:"attribute"},l.a.createElement($.a,null),l.a.createElement("p",null,e.time," ")),l.a.createElement("div",{className:"attribute"},l.a.createElement(le.a,null),l.a.createElement("p",null,e.shadow," ")))))}))))};function se(e){var a=e.children,t=e.value,n=e.index,r=Object(o.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),t===n&&l.a.createElement(p.a,{p:3},a))}function oe(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var me=Object(m.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function ue(){var e=me(),a=l.a.useState(0),t=Object(s.a)(a,2),n=t[0],r=t[1];return l.a.createElement("div",{className:e.root},l.a.createElement(M,null),l.a.createElement(u.a,{position:"static"},l.a.createElement(d.a,{value:n,onChange:function(e,a){r(a)},centered:!0},l.a.createElement(E.a,Object.assign({label:"Current Fish"},oe(0))),l.a.createElement(E.a,Object.assign({label:"All Fish"},oe(1))))),l.a.createElement(se,{value:n,index:0},l.a.createElement(ie,null)),l.a.createElement(se,{value:n,index:1},l.a.createElement(ce,null)))}var de=t(107),Ee=t.n(de),pe=Object(m.a)({searchDiv:{display:"flex",alignItems:"center",flexDirection:"column"},search:{display:"flex",alignItems:"center",backgroundColor:"black",width:340,padding:8,borderRadius:10},searchBar:{color:"white",backgroundColor:"black",border:"none",width:340,padding:8}}),ve=function(){var e=D(),a=l.a.useState(""),t=Object(s.a)(a,2),n=t[0],r=t[1],c=pe(),i=e.creatures.filter((function(e){return e.name["name-USen"].toLowerCase().includes(n.toLowerCase())||e.speed.toLowerCase().includes(n.toLowerCase())})).map((function(e){return l.a.createElement("div",{key:e.id,className:"listItem"},l.a.createElement("div",{className:"listItemContentSeaCreatures listItemContent"},l.a.createElement("div",null,l.a.createElement("img",{alt:e.name["name-USen"],src:e.icon_uri}),l.a.createElement("p",null,e.name["name-USen"]),l.a.createElement("p",null,l.a.createElement(J.a,null)," ",e.price)),l.a.createElement("div",{className:"attributes"},l.a.createElement("div",{className:"attribute"},l.a.createElement(Ee.a,null)," ",l.a.createElement("p",null,e.speed)),l.a.createElement("div",{className:"attribute"},l.a.createElement($.a,null),l.a.createElement("p",null," ",""===e.availability.time?"All Day":e.availability.time," ")),l.a.createElement("div",{className:"attribute"},l.a.createElement(le.a,null)," ",l.a.createElement("p",null,e.shadow)))))}));return l.a.createElement("div",{className:"creatures"},l.a.createElement("h1",null," ",e.creatures.length," Sea Creatures"),l.a.createElement("div",{className:c.searchDiv},l.a.createElement("div",{className:c.search},l.a.createElement(A.a,null),l.a.createElement("input",{className:c.searchBar,placeholder:"Search name or location",onChange:function(e){r(e.target.value)},value:n})),l.a.createElement("div",{className:"list"},i)))},he=function(){var e=D(),a=(new Date).getMonth()+1,t=(new Date).getHours(),n=e.creatures.filter((function(e){return e.availability["month-array-northern"].includes(a)&&e.availability["time-array"].includes(t)})).map((function(e){return{id:e.id,img:e.icon_uri,name:e.name["name-USen"],price:e.price,time:""===e.availability.time?"All Day":e.availability.time,speed:e.speed,shadow:e.shadow}}));return l.a.createElement("div",{className:"creatures"},l.a.createElement("h1",null," ",n.length," Sea Creatures Availible Now"),l.a.createElement("div",{className:"list"},n.map((function(e){return l.a.createElement("div",{key:e.id,className:"listItem"},l.a.createElement("div",{className:"listItemContentCreatures listItemContent"},l.a.createElement("div",null,l.a.createElement("img",{alt:e.name,src:e.img}),l.a.createElement("p",null,e.name),l.a.createElement("p",null,l.a.createElement(J.a,null)," ",e.price)),l.a.createElement("div",{className:"attributes"},l.a.createElement("div",{className:"attribute"},l.a.createElement(Ee.a,null)," ",l.a.createElement("p",null,e.speed)),l.a.createElement("div",{className:"attribute"},l.a.createElement($.a,null)," ",l.a.createElement("p",null,e.time)),l.a.createElement("div",{className:"attribute"},l.a.createElement(le.a,null)," ",l.a.createElement("p",null,e.shadow)))))}))))};function be(e){var a=e.children,t=e.value,n=e.index,r=Object(o.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),t===n&&l.a.createElement(p.a,{p:3},a))}function ge(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var fe=Object(m.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function ye(){var e=fe(),a=l.a.useState(0),t=Object(s.a)(a,2),n=t[0],r=t[1];return l.a.createElement("div",{className:e.root},l.a.createElement(M,null),l.a.createElement(u.a,{position:"static"},l.a.createElement(d.a,{value:n,onChange:function(e,a){r(a)},centered:!0},l.a.createElement(E.a,Object.assign({label:"Current Sea Creatures"},ge(0))),l.a.createElement(E.a,Object.assign({label:"All Sea Creatures"},ge(1))))),l.a.createElement(be,{value:n,index:0},l.a.createElement(he,null)),l.a.createElement(be,{value:n,index:1},l.a.createElement(ve,null)))}var Ne=t(116),Ce=t.n(Ne),we=t(115),Se=t.n(we),ke=t(155),xe=t.n(ke),Oe=t(239),je=t(255),Ie=t(240),Be=t(241),Ue=t(242),De=t(251),Le=t(244),Ae=t(245),Fe=t(88),Te=t(22),_e=Object(m.a)({searchDiv:{display:"flex",alignItems:"center",flexDirection:"column"},search:{display:"flex",alignItems:"center",backgroundColor:"black",width:340,padding:8,borderRadius:10},searchBar:{color:"white",backgroundColor:"black",border:"none",width:340,padding:8}}),Re=function(){var e=_e(),a=Object(n.useState)(null),t=Object(s.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),m=o[0],u=o[1],d=l.a.useState(""),E=Object(s.a)(d,2),p=E[0],v=E[1],h=Object(n.useState)(!1),b=Object(s.a)(h,2),g=b[0],f=b[1],y=Object(n.useState)(!1),N=Object(s.a)(y,2),C=N[0],w=N[1],S=function(){var e=Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!1),console.log(r._id),e.prev=2,e.next=5,I.a.delete("http://localhost:5050/fossil/delete",{data:{fossilId:r._id}});case 5:U(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),k=function(){f(!1)},j=function(){var e=Object(O.a)(x.a.mark((function e(a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.put("http://localhost:5050/fossil/update",{data:{fossilId:a.id,name:a.name,image:a.image,price:a.price}});case 3:200===e.sent.status&&U(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),B=function(){w(!1)},U=function(){var e=Object(O.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("http://localhost:5050/fossil");case 3:a=e.sent,u(a.data),console.log(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){U()}),[]);var D=m.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())})).map((function(e){return l.a.createElement("div",{key:e._id,className:"listItem"},l.a.createElement("div",{className:"listItemContentFossils listItemContent"},l.a.createElement("div",{className:"btnList"},l.a.createElement(Oe.a,{className:"editBtn btn",onClick:function(){return function(e){c(e.fossil),f(!0)}({fossil:e})}},l.a.createElement(Se.a,null)),l.a.createElement(Oe.a,{className:"deleteBtn btn",onClick:function(){return function(e){c(e.fossil),w(!0)}({fossil:e})}},l.a.createElement(Ce.a,null))),l.a.createElement("div",{className:"fossil"},l.a.createElement("img",{alt:e.name,src:e.image}),l.a.createElement("p",null,e.name),l.a.createElement("p",null,l.a.createElement(J.a,null)," ",e.price))))}));return l.a.createElement("div",{className:"fossils"},l.a.createElement("h1",null," ",m.length," Fossils"),l.a.createElement("div",{className:e.searchDiv},l.a.createElement("div",{className:e.search},l.a.createElement(A.a,null),l.a.createElement("input",{className:e.searchBar,placeholder:"Search name or location",onChange:function(e){v(e.target.value)},value:p}))),l.a.createElement(Oe.a,null,l.a.createElement(xe.a,null)),l.a.createElement(je.a,{open:g,onClose:k},l.a.createElement(Fe.a,{initialValues:{id:null===r||void 0===r?void 0:r._id,name:null===r||void 0===r?void 0:r.name,image:null===r||void 0===r?void 0:r.image,price:null===r||void 0===r?void 0:r.price},validationSchema:Te.b().shape({name:Te.c("Enter fossil name.").required("Name is required"),image:Te.c("Image URL"),price:Te.a("Price")}),onSubmit:function(){var e=Object(O.a)(x.a.mark((function e(a,t){var n,l,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setErrors,l=t.setStatus,r=t.setSubmitting,e.prev=1,e.next=4,j(a);case 4:k(),e.next=13;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),l({success:!1}),n({submit:e.t0.message}),r(!1);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(a){var t=a.values,n=a.errors,r=a.touched,c=a.handleChange,i=a.handleBlur,s=a.handleSubmit;a.isSubmitting;return l.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:s,className:e.dialogContent},l.a.createElement(Ie.a,null,"Edit Fossil"),l.a.createElement(Be.a,null,l.a.createElement(Ue.a,null,"Make changes below to the data about this fossil"),l.a.createElement(De.a,{autoFocus:!0,id:"name",name:"name",label:"Fossil Name",type:"text",fullWidth:!0,value:t.name,onChange:c,onBlur:i,error:Boolean(r.name&&n.name),helperText:r.name&&n.name}),l.a.createElement(De.a,{autoFocus:!0,id:"image",name:"image",label:"Image URL",type:"text",fullWidth:!0,value:t.image,onChange:c,onBlur:i,error:Boolean(r.image&&n.image),helperText:r.image&&n.image}),l.a.createElement(De.a,{autoFocus:!0,id:"price",name:"price",label:"Price",fullWidth:!0,value:t.price,onChange:c,onBlur:i,error:Boolean(r.price&&n.price),helperText:r.price&&n.price})),l.a.createElement(Le.a,null,l.a.createElement(Ae.a,{onClick:k},"Cancel"),l.a.createElement(Ae.a,{type:"submit"},"Save")))}))),l.a.createElement(je.a,{open:C,onClose:B},l.a.createElement(Ie.a,null,"Delete Fossil"),l.a.createElement(Be.a,null,l.a.createElement(Ue.a,null,"Are you sure want to delete this fossil?")),l.a.createElement(Le.a,null,l.a.createElement(Ae.a,{onClick:B},"Cancel"),l.a.createElement(Ae.a,{onClick:S},"Delete"))),l.a.createElement("div",{className:"list"},D))},Me=t(156),We=t.n(Me),qe=t(243),Ve=t(246),He=t(247),Ge=t(248),Pe=t(249),Ye=t(161),Je=t(250),ze=Object(m.a)((function(){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap"},card:{width:345,margin:20},content:{display:"flex",justifyContent:"space-between",alignItems:"center"}}})),$e=function(){var e,a,t,r=ze(),c=Object(n.useState)({title:""}),i=Object(s.a)(c,2),o=i[0],m=i[1],u=Object(n.useState)([]),d=Object(s.a)(u,2),E=d[0],v=d[1],h=Object(n.useState)(""),b=Object(s.a)(h,2),g=b[0],f=b[1],y=Object(n.useState)(!1),N=Object(s.a)(y,2),C=N[0],w=N[1],S=Object(n.useState)(!1),k=Object(s.a)(S,2),j=k[0],B=k[1],U=Object(n.useCallback)(We.a.debounce((function(e){f(e)}),1e3),[]),D=function(){var e=Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!1),console.log(o._id),e.prev=2,e.next=5,I.a.delete("http://localhost:5050/movie/delete",{data:{movieId:o._id}});case 5:_(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),L=function(){w(!1)},F=function(){var e=Object(O.a)(x.a.mark((function e(a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.put("http://localhost:5050/movie/update",{data:{movieId:a.id,title:a.title,rank:a.rank,year:a.year,imageUrl:a.imageUrl,height:a.height,width:a.width}});case 3:200===e.sent.status&&_(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),T=function(){B(!1)},_=function(){var e=Object(O.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("http://localhost:5050/movie");case 3:a=e.sent,v(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){_()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("form",null,l.a.createElement(qe.a,{placeholder:"Search",onChange:function(e){U(e.target.value)}}),l.a.createElement(Oe.a,{"aria-label":"search",onClick:function(){g?v(E.filter((function(e){return e.title.includes(g)}))):_()}},l.a.createElement(A.a,null))),l.a.createElement(Ve.a,{className:r.root},E.map((function(e){var a;return l.a.createElement(He.a,{className:r.card,key:e._id},l.a.createElement(Ge.a,{component:"img",height:"300",className:r.media,image:null===(a=e.image)||void 0===a?void 0:a.imageUrl,title:e.title}),l.a.createElement(Pe.a,null,l.a.createElement(Ye.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),l.a.createElement(p.a,{className:r.content},l.a.createElement(Ye.a,{variant:"subtitle1",color:"textSecondary"},"Year: ",e.year),l.a.createElement(Ye.a,{variant:"subtitle1",color:"textSecondary"},"Rank: ",e.rank))),l.a.createElement(Je.a,null,l.a.createElement(Oe.a,{"aria-label":"edit",onClick:function(){return function(e){m(e.movie),w(!0)}({movie:e})}},l.a.createElement(Se.a,null)),l.a.createElement(Oe.a,{"aria-label":"delete",onClick:function(){return function(e){m(e.movie),B(!0)}({movie:e})}},l.a.createElement(Ce.a,null))))}))),l.a.createElement(je.a,{open:C,onClose:L,"aria-labelledby":"edit-dialog-title"},l.a.createElement(Fe.a,{initialValues:{title:null===o||void 0===o?void 0:o.title,rank:null===o||void 0===o?void 0:o.rank,imageUrl:null===o||void 0===o||null===(e=o.image)||void 0===e?void 0:e.imageUrl,height:null===o||void 0===o||null===(a=o.image)||void 0===a?void 0:a.height,width:null===o||void 0===o||null===(t=o.image)||void 0===t?void 0:t.width,id:null===o||void 0===o?void 0:o._id,year:null===o||void 0===o?void 0:o.year},validationSchema:Te.b().shape({title:Te.c("Enter movie title.").required("Title is required"),rank:Te.a("Movie rank number"),height:Te.a("Height"),imageUrl:Te.c("Image URL"),width:Te.a("Width"),id:Te.c("ID").required("ID is required."),year:Te.c("Year")}),onSubmit:function(){var e=Object(O.a)(x.a.mark((function e(a,t){var n,l,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setErrors,l=t.setStatus,r=t.setSubmitting,e.prev=1,e.next=4,F(a);case 4:L(),e.next=13;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),l({success:!1}),n({submit:e.t0.message}),r(!1);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var a=e.values,t=e.errors,n=e.touched,c=e.handleChange,i=e.handleBlur,s=e.handleSubmit;e.isSubmitting;return l.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:s,className:r.dialogContent},l.a.createElement(Ie.a,{id:"edit-dialog-title"},"Edit Movie"),l.a.createElement(Be.a,null,l.a.createElement(Ue.a,null,"Make changes below to the data about this movie:"),l.a.createElement(De.a,{autoFocus:!0,id:"title",name:"title",label:"Movie Title",type:"text",fullWidth:!0,value:a.title,onChange:c,onBlur:i,error:Boolean(n.title&&t.title),helperText:n.title&&t.title}),l.a.createElement(p.a,{className:r.content},l.a.createElement(De.a,{autoFocus:!0,id:"year",name:"year",label:"Year",type:"text",value:a.year,onChange:c,onBlur:i,error:Boolean(n.year&&t.year),helperText:n.year&&t.year}),l.a.createElement(De.a,{autoFocus:!0,name:"rank",id:"rank",label:"Rank",type:"number",value:a.rank,onChange:c,onBlur:i,error:Boolean(n.rank&&t.rank),helperText:n.rank&&t.rank})),l.a.createElement(De.a,{autoFocus:!0,id:"imageUrl",name:"imageUrl",label:"Image URL",type:"text",fullWidth:!0,value:a.imageUrl,onChange:c,onBlur:i,error:Boolean(n.imageUrl&&t.imageUrl),helperText:n.imageUrl&&t.imageUrl}),l.a.createElement(p.a,{className:r.content},l.a.createElement(De.a,{autoFocus:!0,id:"height",name:"height",label:"Height",type:"number",value:a.height,onChange:c,onBlur:i,error:Boolean(n.height&&t.height),helperText:n.height&&t.height}),l.a.createElement(De.a,{autoFocus:!0,id:"width",name:"width",label:"Width",type:"number",value:a.width,onChange:c,onBlur:i,error:Boolean(n.width&&t.width),helperText:n.width&&t.width}))),l.a.createElement(Le.a,null,l.a.createElement(Ae.a,{onClick:L,color:"primary"},"Cancel"),l.a.createElement(Ae.a,{type:"submit",color:"primary"},"Save")))}))),l.a.createElement(je.a,{open:j,onClose:T},l.a.createElement(Ie.a,null,"Delete Movie"),l.a.createElement(Be.a,null,l.a.createElement(Ue.a,null,"Are you sure you want to delete this movie?")),l.a.createElement(Le.a,null,l.a.createElement(Ae.a,{onClick:T,color:"primary"},"Cancel"),l.a.createElement(Ae.a,{onClick:D,color:"primary"},"Delete"))))},Ke=t(50),Qe=t(157),Xe=t(118),Ze=t(158),ea=Object(n.createContext)({isAuth:!1,logout:function(){}}),aa=function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),r=t[0],c=t[1];return l.a.createElement(ea.Provider,{value:{login:function(){c(!0)},logout:function(){c(!1)},isAuth:r}},e.children)},ta=Object(m.a)((function(e){return{button:{color:"#fff",paddingLeft:40,paddingRight:40,paddingTop:10,paddingBottom:10,borderRadius:10,fontSize:16}}})),na=function(){var e=ta(),a=Object(n.useState)(!1),t=Object(s.a)(a,2),r=t[0],c=t[1],i=function(){c(!1)},o=Object(n.useContext)(ea);return l.a.createElement("div",null,o.isAuth?l.a.createElement(Ae.a,{className:e.button,onClick:function(){if(console.log(o.isAuth),o.isAuth)return o.logout(),void c(!1);if(!o.isAuth){if(!r)return void c(!0);c(!1)}}},"Logout"):l.a.createElement(Ae.a,{className:e.button,onClick:function(){c(!0)}},"Signup"),l.a.createElement(je.a,{open:r,onClose:i,"aria-labelledby":"form-dialog-title"},l.a.createElement(Ie.a,{id:"form-dialog-title"},"Sign Up"),l.a.createElement(Be.a,null,l.a.createElement(Fe.a,{initialValues:{email:"",password:"",submit:null},validationSchema:Te.b().shape({email:Te.c().email().max(50).required(),password:Te.c().min(8).max(50).required()}),onSubmit:function(e,a){a.setErrors,a.setStatus,a.setSubmitting;try{o.login(),console.log(e.email,e.password,e.name,e.hemisphere),i()}catch(t){console.log(t)}}},(function(e){var a=e.values,t=e.errors,n=e.touched,r=e.handleChange,c=e.handleBlur,s=e.handleSubmit;e.isSubmitting;return l.a.createElement("form",{noValidate:!0,onSubmit:s,autoComplete:"off"},l.a.createElement(De.a,{autoFocus:!0,required:!0,fullWidth:!0,margin:"normal",label:"Email Address",type:"email",name:"email",onChange:r,onBlur:c,value:a.email,error:Boolean(n.email&&t.email),helperText:n.email&&t.email}),l.a.createElement(De.a,{required:!0,fullWidth:!0,margin:"normal",label:"Password",type:"password",name:"password",onChange:r,onBlur:c,value:a.password,error:Boolean(n.password&&t.password),helperText:n.password&&t.password}),l.a.createElement(De.a,{margin:"normal",label:"Island Name",id:"name",name:"name",onChange:r,onBlur:c,value:a.name}),l.a.createElement(Le.a,null,l.a.createElement(Ae.a,{onClick:i,variant:"contained",color:"primary"},"Cancel"),l.a.createElement(Ae.a,{color:"primary",variant:"contained",type:"submit",disabled:Boolean(t.email||t.password)},"Signup")))})))))},la=Object(m.a)((function(e){return{root:{padding:30,textAlign:"left"}}})),ra=function(){var e=la();return l.a.createElement("div",{className:e.root},l.a.createElement("div",{className:"homeMenu"},l.a.createElement(Ke.b,{to:"/fish",className:"menuItem"},l.a.createElement(R.b,{className:"icon"}),l.a.createElement("p",null,"FISH")),l.a.createElement(Ke.b,{to:"/bugs",className:"menuItem"},l.a.createElement(Qe.a,{className:"icon"}),l.a.createElement("p",null,"BUGS")),l.a.createElement(Ke.b,{to:"/seacreatures",className:"menuItem"},l.a.createElement(Xe.b,{className:"icon"}),l.a.createElement("p",null,"SEA CREATURES")),l.a.createElement(Ke.b,{to:"/fossils",className:"menuItem"},l.a.createElement(Xe.a,{className:"icon"}),l.a.createElement("p",null,"FOSSILS")),l.a.createElement(Ke.b,{to:"/villagers",className:"menuItem"},l.a.createElement(R.c,{className:"icon"}),l.a.createElement("p",null,"VILLAGERS")),l.a.createElement("div",{className:"menuItem signUp"},l.a.createElement(Ze.a,{className:"icon"}),l.a.createElement(na,null))))};var ca=function(){return l.a.createElement(U,null,l.a.createElement("div",{className:"App"},l.a.createElement(ra,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/fish",component:ue}),l.a.createElement(i.a,{path:"/bugs",component:te}),l.a.createElement(i.a,{path:"/seacreatures",component:ye}),l.a.createElement(i.a,{path:"/villagers",component:H}),l.a.createElement(i.a,{path:"/fossils",component:Re}),l.a.createElement(i.a,{path:"/movies",component:$e}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(aa,null,l.a.createElement(Ke.a,null,l.a.createElement(ca,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[171,1,2]]]);
//# sourceMappingURL=main.7214411f.chunk.js.map