!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("reactstrap"),require("react-router-dom"),require("prop-types")):"function"==typeof define&&define.amd?define(["exports","react","reactstrap","react-router-dom","prop-types"],t):t((e=e||self)["library-layout-react"]={},e.React,e.reactstrap,e.reactRouterDom,e.PropTypes)}(this,(function(e,t,r,n,a){"use strict";function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?u(e):t}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var a=i(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return l(this,r)}}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(f,e);var a,i,l,p=s(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=p.call(this,e)).toggle=t.toggle.bind(u(t)),t.state={isOpen:!1},t}return a=f,(i=[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return t.createElement(r.Row,null,t.createElement(r.Col,{sm:"12",md:"12",lg:"12"},t.createElement(r.Navbar,{color:"dark",dark:!0,expand:"lg"},t.createElement(r.NavbarBrand,{href:"/"},"Home"),t.createElement(r.NavbarToggler,{onClick:this.toggle}),t.createElement(r.Collapse,{isOpen:this.state.isOpen,navbar:!0},t.createElement(r.Nav,{navbar:!0,className:"mr-auto"},t.createElement(r.NavItem,null,this.props.links.map((function(e){return t.createElement(n.NavLink,{key:e.name.toString(),className:"nav-link",to:e.path},e.name)}))))))))}}])&&o(a.prototype,i),l&&o(a,l),f}(t.Component);p.propTypes={links:a.arrayOf(a.shape({name:a.string.isRequired,path:a.string.isRequired})).isRequired};var f=function(e){return t.createElement(n.Switch,null,e.routes.map((function(e){return t.createElement(n.Route,{exact:e.exact,key:e.name.toString(),path:e.path,component:e.name})})))};f.propTypes={routes:a.arrayOf(a.shape({exact:a.bool,name:a.elementType.isRequired,path:a.string.isRequired})).isRequired};var m=function(){return t.createElement("footer",{className:"page-footer font-small blue"},t.createElement(r.Row,null,t.createElement(r.Col,{sm:"12",md:"12",lg:"12"},t.createElement("p",{className:"footer-copyright text-center py-3"},"© 2020 Copyright. ",t.createElement("a",{href:"/"}," Rick and Morty")))))};function y(e){return t.createElement(n.BrowserRouter,null,t.createElement(r.Container,{fluid:!0},t.createElement("header",null,t.createElement(p,{links:e.links})),t.createElement(f,{routes:e.routes}),t.createElement(m,null)))}y.propTypes={links:a.arrayOf(a.shape({name:a.string.isRequired,path:a.string.isRequired})).isRequired,routes:a.arrayOf(a.shape({exact:a.bool,name:a.elementType.isRequired,path:a.string.isRequired})).isRequired},e.Layout=y,Object.defineProperty(e,"__esModule",{value:!0})}));