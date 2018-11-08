(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(61)},31:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),c=a.n(l),o=a(63),s=(a(31),a(6)),i=a(7),m=a(9),u=a(8),d=a(10),p=a(62),b=a(3),h=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(b.e,{style:{minHeight:window.innerHeight,backgroundColor:"white"},className:"single-post"},r.a.createElement("h1",{style:{marginTop:"-40px"}},this.props.post.title),r.a.createElement("p",{className:"meta-text"},"".concat(this.props.post.author.first_name," ").concat(this.props.post.author.last_name)," ","| ",new Date(this.props.post.published).toString()),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.post.body}}))}}]),t}(r.a.Component),g=a(14),E=a.n(g),f=E()("6dace5c05c2b95c7d81a97d199bdf07c67918e63"),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={blogPosts:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.post.list({page:1,page_size:10}).then(function(t){e.setState({blogPosts:t.data.data})})}},{key:"render",value:function(){return r.a.createElement(b.e,{className:"blog-container",style:{minHeight:window.innerHeight}},r.a.createElement(b.f,null,this.state.blogPosts?this.state.blogPosts.map(function(e){return r.a.createElement(b.g,{className:"headline-card"},r.a.createElement(b.h,{className:"blog-headline"},r.a.createElement(p.a,{to:"/blog/".concat(e.slug)},e.title," ")),r.a.createElement("p",{className:"meta-text"},new Date(e.published).toString()),r.a.createElement(b.i,null,e.summary))}):"Loading ..."))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(b.m,{sticky:"top"},r.a.createElement(b.j,null,r.a.createElement(b.n,{href:"/portfolio/#aa"},r.a.createElement("strong",null,"AA")),r.a.createElement(b.k,null,r.a.createElement("strong",null,r.a.createElement(b.l,{href:"/portfolio/#about"},"About"))),r.a.createElement(b.k,null,r.a.createElement("strong",null,r.a.createElement(b.l,{href:"/portfolio/#projects"},"Projects")))))}}]),t}(n.Component),j=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{name:"about"}),r.a.createElement(b.e,{style:{minHeight:window.innerHeight,backgroundColor:"white"}},r.a.createElement("i",{className:"fas fa-code",style:{fontSize:"7em",color:"#d1bfa7",margin:"20px",textAlign:"right"}}),r.a.createElement(b.a,{className:"text-left gold-card"},r.a.createElement(b.b,{className:"gold-card-text"},"I'm a full-stack web developer and recovering journalist with experience in"," ",r.a.createElement("span",{className:"emphasized"},r.a.createElement("strong",null,"Ruby on Rails")),","," ",r.a.createElement("span",{className:"emphasized"},r.a.createElement("strong",null,"JavaScript"))," ","and"," ",r.a.createElement("span",{className:"emphasized"},r.a.createElement("strong",null,"React")),". In my previous life, I worked on a team that was responsible for emailing developers when things were broken and discovered I wanted to be the one making improvements instead."))))},k=function(e){return r.a.createElement(b.a,{className:"project-card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("iframe",{title:"Book Club demo",width:"100%",src:"https://www.youtube.com/embed/bkCJCK8nF2Y",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0})),r.a.createElement(b.c,{style:{padding:"10px"}},"Book Club"),r.a.createElement(b.b,{className:"project-text"},"A single page web application for book club management. Built with a Rails API backend and React/Redux frontend, styled with Ant Design."))},v=function(e){return r.a.createElement(b.a,{className:"project-card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("iframe",{title:"Cookbook demo",width:"100%",src:"https://www.youtube.com/embed/gSKpxNr7-_s",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0})),r.a.createElement(b.c,{style:{padding:"10px"}},"Flatiron Cookbook"),r.a.createElement(b.b,{className:"project-text"},"An application for finding and saving recipes. Built with a Rails API backend and React frontend, styled with Semantic-React."))},N=function(e){return r.a.createElement(b.a,{className:"project-card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("iframe",{title:"Habit Tracker demo",width:"100%",src:"https://www.youtube.com/embed/KeW_IQzL-3I",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0})),r.a.createElement(b.c,{style:{padding:"10px"}},"Habit Tracker"),r.a.createElement(b.b,{className:"project-text"},"An application for finding and saving recipes. Built with a Rails API backend and vanilla JS frontend, styled using Semantic UI."))},O=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{name:"projects"}),r.a.createElement(b.e,{style:{minHeight:window.innerHeight,backgroundColor:"#bd8c7d"}},r.a.createElement("h1",{className:"header-right"},"Projects"),r.a.createElement(b.o,null,r.a.createElement(b.d,{sm:"4",xs:"12"},r.a.createElement(k,null)),r.a.createElement(b.d,{sm:"4",xs:"12"},r.a.createElement(v,null)),r.a.createElement(b.d,{sm:"4",xs:"12"},r.a.createElement(N,null)))))},x=function(e){return r.a.createElement("div",{className:"contact-text"},r.a.createElement("a",{href:"https://twitter.com/aubreeabril",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-twitter"})),r.a.createElement("a",{href:"https://github.com/aubreeabril",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:"mailto:aubree.abril@gmail.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fas fa-envelope"})))},A=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{name:"aa"}),r.a.createElement(b.e,{style:{height:window.innerHeight,backgroundColor:"#8e8e90"}},r.a.createElement("h1",{className:"bigName"},"Aubree Abril"),r.a.createElement("h1",{className:"subhead"},"Web Developer"),r.a.createElement(x,null)),r.a.createElement(j,null),r.a.createElement(O,null))}}]),t}(n.Component),C=a(64),P=E()("6dace5c05c2b95c7d81a97d199bdf07c67918e63"),H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={blogPosts:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;P.post.list({page:1,page_size:10}).then(function(t){e.setState({blogPosts:t.data.data})})}},{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,this.state.blogPosts?r.a.createElement(n.Fragment,null,r.a.createElement(y,null),r.a.createElement(C.a,{exact:!0,path:"/",component:A}),r.a.createElement(C.a,{exact:!0,path:"/blog",component:w}),r.a.createElement(C.a,{path:"/blog/:id",render:function(t){console.log(t);var a=e.state.blogPosts.find(function(e){return e.slug==t.match.params.id});return r.a.createElement(h,{post:a})}}),r.a.createElement("footer",null,"Made with ",r.a.createElement("i",{className:"far fa-heart"})," by Aubree Abril")):"Loading...")}}]),t}(n.Component);a(59);c.a.render(r.a.createElement(o.a,{basename:"/portfolio"},r.a.createElement(H,null)),document.getElementById("root"))}},[[26,2,1]]]);
//# sourceMappingURL=main.1475b0ee.chunk.js.map