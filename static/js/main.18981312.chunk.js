(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(12),i=a.n(o),l=a(37),s=(a(28),a(5)),c=a(6),m=a(8),d=a(7),u=a(9),h=a(3),p=[{id:1,title:"You can make a Chrome extension!",body:"Inspired by this post by Lindsay Grizzard on how to make a simple Chrome extension, I decided to try my own.\nAccording to the docs over at developer.chrome.com an extension should be a small program with a single, narrow purpose. Extensions are used to customize the browsing experience.\nI started by following the beginning of Lindsay\u2019s walkthrough to make an extension that renders a custom HTML page each time you open a new tab.\nI made a directory with an index.html file and a manifest.json file.\nEvery extension needs to have a manifest. It needs a name, description, version and manifest version. Manifest version should be set to \u20182.\u2019 That\u2019s the supported version right now. The other version is your project version number.\nchrome_url_overrides is what\u2019s going to let us start customizing. For the basic walkthrough we just told each new tab to load our simple index.html.\nTo test it, we go to chrome://extensions and use the toggle in the upper right corner to switch to developer mode. Click \u201cload unpacked\u201d and select the extension directory. Now when I open a new tab I see the result of my index.html file.\nThat\u2019s exciting, but I wanted to try something a little more fun.\nWith just one more file and a few more lines of code I made my extension trigger an alert on Twitter when you click the retweet button!\nFirst, I made a very simple index.js file that console.logs 'Hello Twitter' to make sure I'm connected.\nThen I made an addition to manifest.json.\nThe content scripts run on certain websites. Matches sets a match pattern. This one will match any URL with twitter.com in it. Then I specify the path to my new index.js file. After the updates were made and saved, I had return to Chrome developer mode and tell the extension to refresh so it would get those changes.\nThen, when I navigated to Twitter and checked the console to make sure index.js was connected.\nIt was! Next I spent some time poking around in the console. I practiced using querySelectorAll and getElementsByClassName to figure out how I was going to grab what I wanted to change.\nI ended up selecting the retweet buttons by class name. Then I turned them into an array so I could map over them and add event listeners that would trigger my alert on click.\nBack at the Chrome developer mode I refreshed again and headed back to Twitter and started trying to retweet things.\nIt works. It\u2019s not ready for the Chrome Extension Store, but it\u2019s fun to practice on!",date:"October 18, 2018",tags:["JavaScript","Chrome"],summary:"I made a simple extension that triggers an alert that asks ifyou're sure when you click a retweet button.",link:"https://aubreeabril.wordpress.com/2018/10/18/you-can-make-a-chrome-extension/"},{id:2,title:"Hiding secret credentials in Rails",body:"I\u2019ve tried to learn how to keep my API keys secret at some point during every Flatiron project I\u2019ve done so far and failed and gave up. This time my partner and I got it to work and I wanted to save the whole process in one place for the next time I do this.\nRails 5.2 introduced the credentials file. You\u2019ll find it in config/credentials.yml.env and it will look something like this.\nYou can hide your API keys and any other credentials that need to remain secret here, but as you can see, it\u2019s encrypted, so you can\u2019t edit it directly. You can run this command in your terminal:\n$ EDITOR=atom --wait rails credentials:edit\nYou can replace atom above with the name of your editor. This will open up a readable version of the file that you can edit. The file has a helpful commented out guide you can follow for formatting your secrets, but they should look something like this.\napi:\nid: 1234\nkey: 3456789\nIt\u2019s easy to draw on these secrets later when you\u2019re ready to use them.\nYour Rails app will also have a config/master.key file, which you should add to your .gitignore. This master key is used to encrypt and decrypt the credentials.\nOne wrinkle with this came up when my project partner cloned the project and tried to seed the database using our API keys. Since master.key was in the .gitignore file, she didn\u2019t have that to decrypt the credentials file. So if a collaborator clones your project and needs to use your app\u2019s credentials, they will need to create a master.key file that matches yours.\nHiding our API credentials this way caused us problems when we later deployed the app on Heroku (How to do that here). Since master.key was in our .gitignore, Heroku couldn\u2019t get to the unencrypted version of our keys.\nTo fix it we saved our master.key to an environment variable. You can set a Heroku environment variable from the Heroku CLI by running:\nheroku config:set RAILS_MASTER_KEY=YOUR APP'S MASTER KEY\nI discovered later that you can also set up environment variables right on the Heroku dashboard for your application. Navigate to your application\u2019s settings page and click the button that says Reveal Config Vars. You can add and edit your config variables here.\nAnd now you have an app that doesn\u2019t reveal your API secrets!",date:"October 4, 2018",tags:["Ruby"],summary:"I learned how to use credentials.yml to hide my API keys in Rails",link:"https://aubreeabril.wordpress.com/2018/10/04/hiding-secret-credentials-in-rails/"}],g=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.e,{className:"blog-container",style:{minHeight:window.innerHeight}},p.map(function(e){return r.a.createElement("div",{className:"blog-item"},r.a.createElement("h1",{className:"blog-headline"},r.a.createElement("a",{href:"".concat(e.link)},e.title)),r.a.createElement("p",null,e.summary))}))}}]),t}(n.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.i,{sticky:"top"},r.a.createElement(h.f,null,r.a.createElement(h.j,{href:"/portfolio/#aa"},r.a.createElement("strong",null,"AA")),r.a.createElement(h.g,null,r.a.createElement("strong",null,r.a.createElement(h.h,{href:"/portfolio/#about"},"About"))),r.a.createElement(h.g,null,r.a.createElement("strong",null,r.a.createElement(h.h,{href:"/portfolio/#projects"},"Projects"))),r.a.createElement(h.g,null,r.a.createElement("strong",null,r.a.createElement(h.h,{href:"/portfolio/blog"},"Blog")))))}}]),t}(n.Component),f=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{name:"about"}),r.a.createElement(h.e,{style:{height:window.innerHeight,backgroundColor:"white"}},r.a.createElement("i",{className:"fas fa-code",style:{fontSize:"7em",color:"#d1bfa7",margin:"20px",textAlign:"right"}}),r.a.createElement(h.a,{className:"text-left gold-card"},r.a.createElement(h.b,{className:"gold-card-text"},"I'm a full-stack web developer and recovering journalist with experience in"," ",r.a.createElement("span",{className:"emphasized"},r.a.createElement("strong",null,"Ruby on Rails")),","," ",r.a.createElement("span",{className:"emphasized"},r.a.createElement("strong",null,"JavaScript"))," ","and"," ",r.a.createElement("span",{className:"emphasized"},r.a.createElement("strong",null,"React")),". In my previous life, I worked on a team that was responsible for emailing developers when things were broken and discovered I wanted to be the one making improvements instead."))))},w=function(e){return r.a.createElement(h.a,{className:"project-card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("iframe",{title:"Book Club demo",width:"100%",src:"https://www.youtube.com/embed/bkCJCK8nF2Y",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0})),r.a.createElement(h.c,{style:{padding:"10px"}},"Book Club"),r.a.createElement(h.b,{className:"project-text"},"A single page web application for book club management. Built with a Rails API backend and React/Redux frontend, styled with Ant Design."))},y=function(e){return r.a.createElement(h.a,{className:"project-card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("iframe",{title:"Cookbook demo",width:"100%",src:"https://www.youtube.com/embed/gSKpxNr7-_s",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0})),r.a.createElement(h.c,{style:{padding:"10px"}},"Flatiron Cookbook"),r.a.createElement(h.b,{className:"project-text"},"An application for finding and saving recipes. Built with a Rails API backend and React frontend, styled with Semantic-React."))},E=function(e){return r.a.createElement(h.a,{className:"project-card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("iframe",{title:"Habit Tracker demo",width:"100%",src:"https://www.youtube.com/embed/KeW_IQzL-3I",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0})),r.a.createElement(h.c,{style:{padding:"10px"}},"Habit Tracker"),r.a.createElement(h.b,{className:"project-text"},"An application for finding and saving recipes. Built with a Rails API backend and vanilla JS frontend, styled using Semantic UI."))},k=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{name:"projects"}),r.a.createElement(h.e,{style:{minHeight:window.innerHeight,backgroundColor:"#bd8c7d"}},r.a.createElement("h1",{className:"header-right"},"Projects"),r.a.createElement(h.k,null,r.a.createElement(h.d,{sm:"4",xs:"12"},r.a.createElement(w,null)),r.a.createElement(h.d,{sm:"4",xs:"12"},r.a.createElement(y,null)),r.a.createElement(h.d,{sm:"4",xs:"12"},r.a.createElement(E,null)))))},v=function(e){return r.a.createElement("div",{className:"contact-text"},r.a.createElement("a",{href:"https://twitter.com/aubreeabril",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{class:"fab fa-twitter"})),r.a.createElement("a",{href:"https://github.com/aubreeabril",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{class:"fab fa-github"})),r.a.createElement("a",{href:"mailto:aubree.abril@gmail.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{class:"fas fa-envelope"})))},I=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{name:"aa"}),r.a.createElement(h.e,{style:{height:window.innerHeight,backgroundColor:"#8e8e90"}},r.a.createElement("h1",{className:"bigName"},"Aubree Abril"),r.a.createElement("h1",{className:"subhead"},"Web Developer"),r.a.createElement(v,null)),r.a.createElement(f,null),r.a.createElement(k,null))}}]),t}(n.Component),j=a(38),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={currentPost:p.find(function(e){return parseInt(a.props.match.params.id,10)===e.id})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.match.params.id),console.log(p)}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.currentPost?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,this.state.currentPost.title),r.a.createElement("p",null,this.state.currentPost.date),this.state.currentPost.body.split("\n").map(function(e){return r.a.createElement("p",null,e)})):"Loading ...")}}]),t}(r.a.Component),O=Object(j.a)(x),A=a(36),N=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(b,null),r.a.createElement(A.a,{exact:!0,path:"/",component:I}),r.a.createElement(A.a,{exact:!0,path:"/blog",component:g}),r.a.createElement(A.a,{path:"/blog/:id",component:O}),r.a.createElement("footer",null,"Made with ",r.a.createElement("i",{className:"far fa-heart"})," by Aubree Abril"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(33);i.a.render(r.a.createElement(l.a,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.18981312.chunk.js.map