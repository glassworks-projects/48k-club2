(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var i=n(0),o=n.n(i),a=n(193),r=n(192);n(118);var l=r.a.ul.withConfig({displayName:"pages__HomeNav",componentId:"sc-6kvjaa-0"})(["padding-top:5%;font-size:7em;text-align:center;list-style:none;@media screen and (max-width:600px){padding-top:20%;font-size:3.5em;}@media screen and (max-height:500px){padding-top:12%;font-size:4em;}"]),d=r.a.li.withConfig({displayName:"pages__BlueLi",componentId:"sc-6kvjaa-1"})(["color:white;text-decoration:none;cursor:inherit;&:hover{text-decoration:underline;text-decoration-color:blue;}"]);function s(){if("undefined"!=typeof window)return.99*window.innerWidth}function c(){if("undefined"!=typeof window)return.99*window.innerHeight}var u=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).state={showBlog:!1,width:0,height:0},n.updateWindowDimensions=n.updateWindowDimensions.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=i.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions))},r.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.updateWindowDimensions)},r.updateWindowDimensions=function(){"undefined"!=typeof window&&this.setState({width:window.innerWidth,height:window.innerHeight})},r.postLoad=function(){this.setState({showBlog:!this.state.showBlog})},r.render=function(){return o.a.createElement(a.k,{title:"Home",blue:!0,svg:!0},o.a.createElement("body",null,o.a.createElement(l,null,o.a.createElement(d,{onClick:this.postLoad.bind(this)},"BLOG"),this.state.showBlog&&o.a.createElement(a.a,null),o.a.createElement("li",null,o.a.createElement(a.f,{to:"releases"},"RELEASES")),o.a.createElement("li",null,o.a.createElement(a.f,{to:"geofront"},"GEOFRONT")),o.a.createElement("li",null,o.a.createElement(a.f,{to:"offpeak"},"OFF PEAK")),o.a.createElement("li",null,o.a.createElement(a.d,{href:"https://48ksps.bigcartel.com"},"STORE")),o.a.createElement("li",null,o.a.createElement(a.f,{to:"about"},"ABOUT"))),o.a.createElement("br",null),o.a.createElement(a.j,{color:"black"}),o.a.createElement(a.i,null,o.a.createElement("polygon",{points:"0,2 "+s()+",2 2,"+c()}))))},i}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-8691212bf4313907b3f6.js.map