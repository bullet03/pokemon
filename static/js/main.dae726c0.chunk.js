(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{10:function(e,t,n){e.exports={text:"PokemonContainer_text__RxWNE",card:"PokemonContainer_card__2aWnF",data:"PokemonContainer_data__3xu3m"}},28:function(e,t,n){e.exports={cardsContainer:"ListOfCards_cardsContainer__2T6nY"}},29:function(e,t,n){e.exports={card:"Card_card__IVMtL"}},60:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),o=n(27),i=n.n(o),r=n(8),j=n(2),d=n(13),b=n(28),p=n.n(b),m=n(29),x=n.n(m);var O=function(e){return console.log(e),Object(c.jsx)("div",{className:x.a.card,children:Object(c.jsx)(r.b,{to:"/pokemons/".concat(e.name),children:Object(c.jsx)("img",{alt:"",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(e.id,".png")})})})},h=n(12),l=n.n(h);var u=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){l.a.get("https://pokeapi.co/api/v2/pokemon").then((function(e){s(e.data.results)}))}),[]),Object(c.jsx)("div",{className:p.a.cardsContainer,children:n.map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsx)(O,{name:e.name,id:t+1})},e.name)}))})};var f=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(r.b,{to:"/pokemons",children:"Go to pokemons list"})})},v=n(31),k=n(10),g=n.n(k);var _=function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:g.a.text,children:[Object(c.jsx)("div",{className:g.a.card,children:Object(c.jsx)("img",{alt:"",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(e.id,".png")})}),Object(c.jsxs)("div",{children:["Name: ",Object(c.jsx)("span",{className:g.a.data,children:e.name})]}),Object(c.jsxs)("div",{children:["Type(s) of surface:",e.types.map((function(e){return Object(c.jsx)("div",{className:g.a.data,children:e.type.name},e.type.name)}))]}),Object(c.jsxs)("div",{children:["Weight: ",Object(c.jsx)("span",{className:g.a.data,children:e.weight})]}),Object(c.jsx)("div",{})]})})},N=function(){var e=Object(j.e)().id,t=Object(a.useState)(),n=Object(d.a)(t,2),s=n[0],o=n[1];return Object(a.useEffect)((function(){l.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(e){o(e.data)}))}),[]),s?Object(c.jsx)(_,Object(v.a)({},s)):"Loading..."};var C=function(){return Object(c.jsxs)(r.a,{children:[Object(c.jsx)(j.a,{path:"/",children:Object(c.jsx)(f,{})}),Object(c.jsx)(j.a,{exact:!0,path:"/pokemons",children:Object(c.jsx)(u,{})}),Object(c.jsx)(j.a,{path:"/pokemons/:id",children:Object(c.jsx)(N,{})})]})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.dae726c0.chunk.js.map