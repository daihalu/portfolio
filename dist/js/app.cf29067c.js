(function(e){function t(t){for(var n,r,o=t[0],c=t[1],l=t[2],u=0,v=[];u<o.length;u++)r=o[u],a[r]&&v.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(v.length)v.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},a={app:0},s=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0349":function(e,t,i){},"0edd":function(e,t,i){e.exports=i.p+"img/pomodoro.176ac93c.png"},"0f4e":function(e,t,i){"use strict";var n=i("fea5"),a=i.n(n);a.a},"11e7":function(e,t,i){},1249:function(e,t,i){"use strict";var n=i("0349"),a=i.n(n);a.a},"18cf":function(e,t,i){"use strict";var n=i("11e7"),a=i.n(n);a.a},"209a":function(e,t,i){},3800:function(e,t,i){},"42b7":function(e,t,i){e.exports=i.p+"img/score-keeper.a8e0bb91.png"},"4a20":function(e,t,i){"use strict";var n=i("b657"),a=i.n(n);a.a},"4d41":function(e,t,i){e.exports=i.p+"img/avatar.58aa150a.png"},"4f17":function(e,t,i){"use strict";var n=i("9cef"),a=i.n(n);a.a},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Header",{staticClass:"header"}),i("Home",{attrs:{id:"Home"}}),i("section",{staticClass:"main-container"},[i("div",{staticStyle:{height:"4.7rem"},attrs:{id:"Profile"}}),i("Profile"),i("div",{staticStyle:{height:"4.7rem"},attrs:{id:"Experience"}}),i("Experience"),i("div",{staticStyle:{height:"4.7rem"},attrs:{id:"Skills"}}),i("Skills"),i("div",{staticStyle:{height:"4.7rem"},attrs:{id:"Projects"}}),i("Projects"),i("div",{staticStyle:{height:"4.7rem"},attrs:{id:"Education"}}),i("Education")],1),i("Footer")],1)},s=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"header",class:{"dark-background":e.scrollDown}},[i("nav",{staticClass:"wrapper"},[i("div",{staticClass:"logo"},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#Home",duration:300,easing:"linear"},expression:"{\n         el: '#Home',\n         duration: 300,\n         easing: 'linear'}"}],attrs:{href:"#Home"}},[e._v("\n        MDEV\n      ")])]),i("ul",{staticClass:"menu"},[i("li",[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#Home",duration:300,easing:"linear"},expression:"{\n           el: '#Home',\n           duration: 300,\n           easing: 'linear'}"}],class:{active:"Home"===e.activeItem},attrs:{href:"#Home"},on:{click:function(t){e.activeItem="Home"}}},[e._v("\n          Home\n        ")])]),i("li",[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#Profile",duration:300,easing:"linear"},expression:"{\n           el: '#Profile',\n           duration: 300,\n           easing: 'linear'}"}],class:{active:"Profile"===e.activeItem},attrs:{href:"#Profile"},on:{click:function(t){e.activeItem="Profile"}}},[e._v("\n          Profile\n        ")])]),i("li",[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#Experience",duration:300,easing:"linear"},expression:"{\n           el: '#Experience',\n           duration: 300,\n           easing: 'linear'}"}],class:{active:"Experience"===e.activeItem},attrs:{href:"#Experience"},on:{click:function(t){e.activeItem="Experience"}}},[e._v("\n          Experience\n        ")])]),i("li",[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#Skills",duration:300,easing:"linear"},expression:"{\n           el: '#Skills',\n           duration: 300,\n           easing: 'linear'}"}],class:{active:"Skills"===e.activeItem},attrs:{href:"#Skills"},on:{click:function(t){e.activeItem="Skills"}}},[e._v("\n          Skills\n        ")])]),i("li",[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#Projects",duration:300,easing:"linear"},expression:"{\n           el: '#Projects',\n           duration: 300,\n           easing: 'linear'}"}],class:{active:"Projects"===e.activeItem},attrs:{href:"#Projects"},on:{click:function(t){e.activeItem="Projects"}}},[e._v("\n          Projects\n        ")])]),i("li",[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#Education",duration:300,easing:"linear"},expression:"{\n           el: '#Education',\n           duration: 300,\n           easing: 'linear'}"}],class:{active:"Education"===e.activeItem},attrs:{href:"#Education"},on:{click:function(t){e.activeItem="Education"}}},[e._v("\n          Education\n        ")])])])])])},o=[],c={name:"Header",data:function(){return{activeItem:"Home",scrollDown:!1}},methods:{handleScroll:function(){console.log(window.scrollY),this.scrollDown=window.scrollY>10,window.scrollY<300?this.activeItem="Home":window.scrollY>=600&&window.scrollY<1300?this.activeItem="Profile":window.scrollY>=1300&&window.scrollY<2900?this.activeItem="Experience":window.scrollY>=2900&&window.scrollY<3780?this.activeItem="Skills":window.scrollY>=3780&&window.scrollY<4580?this.activeItem="Projects":window.scrollY>=4590&&(this.activeItem="Education")}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},mounted:function(){console.log(window)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},l=c,d=(i("0f4e"),i("2877")),u=Object(d["a"])(l,r,o,!1,null,"65bc1dce",null);u.options.__file="Header.vue";var v=u.exports,f=i("bb51"),p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"profile"},[n("div",{staticClass:"box-title"},[n("strong",[e._v("#")]),n("h1",[e._v("Profile")])]),n("div",{staticClass:"profile-container"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:i("4d41"),alt:"Micheal's avatar"}})]),n("div",{staticClass:"sumary"},[n("p",{staticClass:"intro"},[n("strong",[e._v(" Hi, there! I'm Dai")])]),n("p",{staticClass:"description"},[e._v("\n        I'm a young designer based in Vietnam and at the momentI focus my work on ceramic, furniture, sofa and chair\n        design, but anyway I'm a curious person and I love to make different things, so I also work on web and graphic\n        design.\n      ")]),n("p",{staticClass:"description"},[e._v("\n        I'm really looking foward to hear some offers. Contact me if you want to collaborate in any web, graphics or\n        UX/UI design project. I will use all my expirience to satisfy your most serious and precise requirements.\n      ")]),n("div",{staticClass:"contact"},[n("ul",[n("li",[n("div",{staticClass:"icon"},[n("i",{staticClass:"fal fa-user"})]),n("p",[n("span",{staticClass:"t-b-500"},[e._v("Name:")]),e._v(" Nguyen Van Dai")])]),n("li",[n("div",{staticClass:"icon"},[n("i",{staticClass:"fal fa-birthday-cake"})]),n("p",[n("span",{staticClass:"t-b-500"},[e._v("Date of birth:")]),e._v(" January 24, 1997")])])]),n("ul",[n("li",[n("div",{staticClass:"icon"},[n("i",{staticClass:"fal fa-map-marker-alt"})]),n("p",[n("span",{staticClass:"t-b-500"},[e._v("Address:")]),e._v(" Hanoi, Vietnam")])]),n("li",[n("div",{staticClass:"icon"},[n("i",{staticClass:"fal fa-envelope"})]),n("p",[n("span",{staticClass:"t-b-500"},[e._v("Email:")]),e._v(" nvdai2401@gmail.com")])])])]),n("a",{attrs:{href:"https://drive.google.com/file/d/1f1C5fuIpM4q-FUOOWqyBx24qDShUClI1/view?usp=sharing",target:"_blank"}},[n("button",{staticClass:"btn"},[e._v("\n          Download resume\n          "),n("i",{staticClass:"fal fa-cloud-download"})])])])])])}],h={name:"Profile",components:{}},_=h,g=(i("1249"),Object(d["a"])(_,p,m,!1,null,"0146e59f",null));g.options.__file="Profile.vue";var b=g.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"experience"},[e._m(0),i("div",{staticClass:"timeline"},[i("div",[i("div",{staticClass:"badge_circle"},[e._v("12/2018")]),i("div",{staticClass:"timeline_maker"}),i("transition",{attrs:{name:"slide-fade-to-right"}},[e.firstCardExperienceVisible?i("div",{staticClass:"experience-card"},[i("h2",[e._v("Front-end Developer")]),i("h3",[e._v("HaluTech")]),i("ul",[i("li",[i("strong",[e._v("Project")]),e._v(": HaluJobs")]),i("li",[i("strong",[e._v("Project Description")]),e._v(": A free mobile app delivering Lancaster University services,\n              resources, and information - at your fingertips - whenever you want them, from wherever you are!\n            ")]),i("li",[i("strong",[e._v("Team Size")]),e._v(": 2")]),i("li",[i("strong",[e._v("Responsibilities")]),e._v(": Meeting with customers and teammates to get clear requirement.\n              Develop the frameworks and modules of the system.\n            ")]),i("li",[i("strong",[e._v("Accomplishments")]),e._v(": Learned new Microsoft technologies and frameworks. Improved teamwork\n              and communication skills.\n            ")]),i("li",[i("strong",[e._v("Technologies")]),e._v(": NuxtJS, Webpack\n            ")])])]):e._e()])],1),i("div",{staticStyle:{position:"absolute",top:"700px",left:"0",right:"0"}},[i("div",{staticClass:"badge_circle",staticStyle:{position:"relative","z-index":"1"}},[e._v("6/2018")]),i("div",{staticClass:"timeline_maker"}),i("transition",{attrs:{name:"slide-fade-to-left"}},[e.secondCardExperienceVisible?i("div",{staticClass:"experience-card",staticStyle:{float:"right"}},[i("h2",[e._v("Front-end Developer")]),i("h3",[e._v("TechKids")]),i("ul",[i("li",[i("strong",[e._v("Project")]),e._v(": Pomodoro Timer")]),i("li",[i("strong",[e._v("Project Description")]),e._v(": A free mobile app delivering Lancaster University services,\n            resources, and information - at your fingertips - whenever you want them, from wherever you are!\n          ")]),i("li",[i("strong",[e._v("Team Size")]),e._v(": 4")]),i("li",[i("strong",[e._v("Responsibilities")]),e._v(": Meeting with customers and teammates to get clear requirement.\n            Develop the frameworks and modules of the system.\n          ")]),i("li",[i("strong",[e._v("Accomplishments")]),e._v(": Learned new Microsoft technologies and frameworks. Improved teamwork\n            and communication skills.\n          ")]),i("li",[i("strong",[e._v("Technologies")]),e._v(": HTML, CSS, JS, Bootstrap 4\n          ")])])]):e._e()])],1)])])},C=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"box-title"},[i("strong",[e._v("#")]),i("h1",[e._v("Experience")])])}],k={name:"Experience",data:function(){return{firstCardExperienceVisible:!1,secondCardExperienceVisible:!1}},methods:{handleScroll:function(){window.scrollY>=window.innerHeight+367&&(this.firstCardExperienceVisible=!0,window.scrollY>=window.innerHeight+850&&(this.secondCardExperienceVisible=!0)),0===window.scrollY&&(this.firstCardExperienceVisible=!1,this.secondCardExperienceVisible=!1)}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},x=k,E=(i("f90c"),Object(d["a"])(x,w,C,!1,null,"473c4d5c",null));E.options.__file="Experience.vue";var j=E.exports,y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"skills"},[e._m(0),i("div",{staticClass:"skills-container"},[i("ProgressBar",{attrs:{label:"HTML & CSS",percent:70}}),i("ProgressBar",{staticClass:"mg-top-60",attrs:{label:"JavaScript",percent:50}}),i("ProgressBar",{staticClass:"mg-top-60",attrs:{label:"Reactjs",percent:30}}),i("ProgressBar",{staticClass:"mg-top-60",attrs:{label:"Vuejs",percent:50}}),i("ProgressBar",{staticClass:"mg-top-60",attrs:{label:"Photoshop",percent:10}}),i("ProgressBar",{staticClass:"mg-top-60",attrs:{label:"Illustrator",percent:20}})],1)])},S=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"box-title"},[i("strong",[e._v("#")]),i("h1",[e._v("Skills")])])}],P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h3",[e._v(e._s(e.label))]),i("div",{staticClass:"progress-line"},[i("div",{ref:"percentBox",attrs:{title:e.percent+"%"}},[i("span",{ref:"percentRef"},[e._v(e._s(e.percent))]),e._v("%\n    ")]),i("p",{staticStyle:{transition:"all 1.5s ease"},style:{width:e.lineWidth+"%"}})])])},I=[],H=(i("c5f6"),i("cffa")),D={name:"ProgressBar",props:{label:String,percent:Number},data:function(){return{isScrollActive:!1,lineWidth:0,percentNumber:0}},methods:{handleScroll:function(){var e=this.$refs.percentBox,t=new H["a"];window.scrollY>=window.innerHeight+1700&&(this.lineWidth=this.percent,t.to(e,1.45,{x:this.percent/100*910})),0===window.scrollY&&(this.lineWidth=0,t.to(e,0,{x:0}))}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},O=D,M=(i("9850"),Object(d["a"])(O,P,I,!1,null,"3ca12bdc",null));M.options.__file="ProgressBar.vue";var T=M.exports,$={name:"Skills",components:{ProgressBar:T}},N=$,Y=(i("5efd"),Object(d["a"])(N,y,S,!1,null,"0be8dc88",null));Y.options.__file="Skills.vue";var L=Y.exports,B=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"education"},[i("div",{staticClass:"box-title"},[i("strong",[e._v("#")]),i("h1",[e._v("Education")])]),i("div",[i("div",{staticClass:"edu-box"},[i("div",{staticClass:"edu-duration"},[i("p",[e._v("9/2015")]),e._v(" -\n        "),i("p",[e._v("1/2020")])]),i("div",{staticClass:"edu-circle"}),i("div",{staticClass:"edu-info"},[i("h2",[e._v("Engineer's degree")]),i("h3",[e._v("Post and Telecommunication Institute Technology")]),i("p",[i("span",[e._v("Major: ")]),e._v("Electronics and Telecommunication")]),i("p",[i("span",[e._v("GPA: ")]),e._v("3.2")])])]),i("div",{staticClass:"edu-box"},[i("div",{staticClass:"edu-duration"},[i("p",[e._v("2/2018")]),e._v("\n        -\n        "),i("p",[e._v("6/2018")])]),i("div",{staticClass:"edu-circle"}),i("div",{staticClass:"edu-info"},[i("h2",[e._v("Full-stack Web Development course")]),i("h3",[e._v("Techkids school")]),i("p",[i("span",[e._v("Major: ")]),e._v("Full-stack Web Development")]),i("p",[i("span",[e._v("Award: ")]),e._v("First rank of final hackathon")])])]),i("div",{staticClass:"edu-box"},[i("div",{staticClass:"edu-duration"},[i("p",[e._v("1/2018")])]),i("div",{staticClass:"edu-circle"}),i("div",{staticClass:"edu-info"},[i("h2",[e._v("TOEIC Certificate")]),i("p",[i("span",[e._v("Score: ")]),e._v("770")])])])])])}],V={name:"Education",mounted:function(){this.$refs.bubble,new H["a"]}},F=V,q=(i("947b"),Object(d["a"])(F,B,U,!1,null,"db32ccbc",null));q.options.__file="Education.vue";var A=q.exports,W=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"projects"},[e._m(0),i("div",{staticClass:"projects-container"},[i("div",{staticClass:"row"},[i("ProjectCard",{attrs:{project:e.projects[0]}}),i("ProjectCard",{attrs:{project:e.projects[1]}})],1)])])},J=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"box-title"},[i("strong",[e._v("#")]),i("h1",[e._v("Projects")])])}],R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"project-card card"},[n("div",{staticClass:"wrapper",style:{backgroundImage:"url("+i("e078")("./"+e.project.imgName+".png")+")"}},[n("div",{staticClass:"data"},[n("div",{staticClass:"content"},[n("span",{staticClass:"author"},[e._v(e._s(e.project.author))]),n("h1",{staticClass:"title"},[n("a",{attrs:{href:e.project.projectUrl,target:"_blank"}},[e._v("\n            "+e._s(e.project.title)+"\n          ")])]),n("p",{staticClass:"text"},[n("strong",[e._v("Description: ")]),e._v(e._s(e.project.description))]),n("p",{staticClass:"text"},[n("strong",[e._v("Technologies: ")]),e._v(e._s(e.project.technologies))]),n("p",{staticClass:"text"},[n("strong",[e._v("Date: ")]),e._v(e._s(e.project.date))]),n("a",{staticClass:"button",attrs:{href:e.project.projectUrl,target:"_blank"}},[e._v("\n          Visit\n        ")])])])])])},z=[],K={name:"ProjectCard",props:{project:Object}},X=K,G=(i("4a20"),Object(d["a"])(X,R,z,!1,null,"5c3067a4",null));G.options.__file="ProjectCard.vue";var Q=G.exports,Z={name:"Projects",components:{ProjectCard:Q},data:function(){return{projects:[{author:"Micheal vs DK2T Team",title:"Pomodoro Timer",projectUrl:"https://tkpomodorotimer.herokuapp.com/",description:"This is the app that helps user study more effective with 25 minutes method",technologies:"HTML, CSS, Bootstrap, Jquery, Nodejs",date:"23/5/2018",imgName:"pomodoro"},{author:"Micheal",title:"Score Keeper",projectUrl:"https://score-keeper-2018.herokuapp.com/",description:"This is the app that helps player keep their scores when playing a 4-player game",technologies:"HTML, CSS, Bootstrap, Reactjs, Nodejs",date:"4/2018",imgName:"score-keeper"}]}}},ee=Z,te=(i("4f17"),Object(d["a"])(ee,W,J,!1,null,"e36dbb76",null));te.options.__file="Projects.vue";var ie=te.exports,ne=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ae=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",{staticClass:"footer"},[i("div",[i("h2",[e._v("MDEV")]),i("ul",[i("li",{staticClass:"facebook-icon"},[i("a",{attrs:{href:"https://www.facebook.com/nvdai2401",target:"_blank"}},[i("i",{staticClass:"fab fa-facebook-f"})])]),i("li",{staticClass:"twitter-icon"},[i("a",{attrs:{href:"https://twitter.com/micheal2401",target:"_blank"}},[i("i",{staticClass:"fab fa-twitter"})])]),i("li",{staticClass:"linked-in-icon"},[i("a",{attrs:{href:"https://linkedin.com/in/nvdai2401",target:"_blank"}},[i("i",{staticClass:"fab fa-linkedin-in"})])])]),i("div",{staticClass:"desc"},[e._v("\n      Micheal "),i("i",{staticClass:"fal fa-copyright",staticStyle:{"font-size":"16px"}}),e._v("\n      2018 Copyright | Theme designed by Micheal\n      "),i("br"),e._v("\n      All Rights Reserved\n    ")])])])}],se={name:"Footer"},re=se,oe=(i("c17f"),Object(d["a"])(re,ne,ae,!1,null,"615e8da3",null));oe.options.__file="Footer.vue";var ce=oe.exports,le={components:{Header:v,Home:f["default"],Profile:b,Experience:j,Skills:L,Projects:ie,Education:A,Footer:ce}},de=le,ue=(i("5c0b"),Object(d["a"])(de,a,s,!1,null,null,null));ue.options.__file="App.vue";var ve=ue.exports,fe=i("8c4f");n["a"].use(fe["a"]);var pe=new fe["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return Promise.resolve().then(i.bind(null,"bb51"))}}]}),me=i("2f62");n["a"].use(me["a"]);var he=new me["a"].Store({state:{},mutations:{},actions:{}}),_e=i("98c9"),ge=i("f13c"),be=i.n(ge);n["a"].use(be.a),n["a"].use(_e["a"]),new n["a"]({router:pe,store:he,render:function(e){return e(ve)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var n=i("5e27"),a=i.n(n);a.a},"5c3e":function(e,t,i){},"5e27":function(e,t,i){},"5efd":function(e,t,i){"use strict";var n=i("c2ef"),a=i.n(n);a.a},7695:function(e,t,i){"use strict";var n=i("b325"),a=i.n(n);a.a},"7efd":function(e,t,i){"use strict";var n=i("a435"),a=i.n(n);a.a},"947b":function(e,t,i){"use strict";var n=i("dfd6"),a=i.n(n);a.a},9850:function(e,t,i){"use strict";var n=i("209a"),a=i.n(n);a.a},"9cef":function(e,t,i){},a435:function(e,t,i){},b2f3:function(e,t,i){e.exports=i.p+"img/cover.ad8777bd.jpg"},b325:function(e,t,i){},b657:function(e,t,i){},bb51:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"home-container"},[i("img",{staticClass:"background-image",attrs:{src:e.backgroundImage,width:"100%",height:"100%",alt:"Cover"}}),i("div",{staticClass:"overlay"}),i("vue-particles",{staticClass:"particle-layer",attrs:{color:"#ffffff",particleOpacity:1,particlesNumber:80,shapeType:"polygon",particleSize:5,linesColor:"#ffffff",linesWidth:1,lineLinked:!0,lineOpacity:.7,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),i("introduction",{staticClass:"introduction-layer"})],1)},a=[],s=(i("cadf"),i("551c"),i("097d"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"header",class:{"dark-background":e.scrollDown}},[i("nav",{staticClass:"wrapper"},[e._m(0),i("ul",{staticClass:"menu"},[i("li",[i("a",{class:{active:"Home"===e.activeItem},attrs:{href:"#Home"},on:{click:function(t){e.activeItem="Home"}}},[e._v("\n          Home\n        ")])]),i("li",[i("a",{class:{active:"Profile"===e.activeItem},attrs:{href:"#Profile"},on:{click:function(t){e.activeItem="Profile"}}},[e._v("\n          Profile\n        ")])]),i("li",[i("a",{class:{active:"Experience"===e.activeItem},attrs:{href:"#Experience"},on:{click:function(t){e.activeItem="Experience"}}},[e._v("\n          Experience\n        ")])]),i("li",[i("a",{class:{active:"Skills"===e.activeItem},attrs:{href:"#Skills"},on:{click:function(t){e.activeItem="Skills"}}},[e._v("\n          Skills\n        ")])]),i("li",[i("a",{class:{active:"Projects"===e.activeItem},attrs:{href:"#Projects"},on:{click:function(t){e.activeItem="Projects"}}},[e._v("\n          Projects\n        ")])]),i("li",[i("a",{class:{active:"Education"===e.activeItem},attrs:{href:"#Education"},on:{click:function(t){e.activeItem="Education"}}},[e._v("\n          Education\n        ")])])])])])}),r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"logo"},[i("a",{attrs:{href:"#Home"}},[e._v("MDEV")])])}],o={name:"Header",data:function(){return{activeItem:"Home",scrollDown:!1}},methods:{handleScroll:function(){console.log(window.scrollY),this.scrollDown=window.scrollY>10}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},mounted:function(){console.log(window)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},c=o,l=(i("7efd"),i("2877")),d=Object(l["a"])(c,s,r,!1,null,"7e37f7b6",null);d.options.__file="Header.vue";var u=d.exports,v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"intro-container"},[i("p",{staticClass:"name"},[e._v("I'm Micheal")]),i("div",{staticClass:"intro"},[i("p",[e._v("Front-end Developer")]),i("br"),i("p",[e._v("UI/UX Designer")])]),i("div",{staticClass:"more"},[i("a",{attrs:{href:"https://drive.google.com/file/d/1f1C5fuIpM4q-FUOOWqyBx24qDShUClI1/view?usp=sharing",target:"_blank"}},[i("button",{staticClass:"btn"},[e._v("\n        Download resume\n        "),i("i",{staticClass:"fal fa-cloud-download"})])])])])}],p={name:"Introduction"},m=p,h=(i("18cf"),Object(l["a"])(m,v,f,!1,null,"03cfc140",null));h.options.__file="Introduction.vue";var _=h.exports,g={name:"home",components:{Header:u,Introduction:_},data:function(){return{backgroundImage:i("b2f3"),text:"This is home page"}}},b=g,w=(i("7695"),Object(l["a"])(b,n,a,!1,null,"380f016c",null));w.options.__file="Home.vue";t["default"]=w.exports},c17f:function(e,t,i){"use strict";var n=i("5c3e"),a=i.n(n);a.a},c2ef:function(e,t,i){},dfd6:function(e,t,i){},e078:function(e,t,i){var n={"./avatar.png":"4d41","./pomodoro.png":"0edd","./score-keeper.png":"42b7"};function a(e){var t=s(e);return i(t)}function s(e){var t=n[e];if(!(t+1)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return t}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="e078"},f90c:function(e,t,i){"use strict";var n=i("3800"),a=i.n(n);a.a},fea5:function(e,t,i){}});
//# sourceMappingURL=app.cf29067c.js.map