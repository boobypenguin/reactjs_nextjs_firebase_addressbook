(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RNiq:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),i=n.n(a),r=n("YFqc"),c=n.n(r),u=n("5Yp1"),l=n("t4UJ");e.default=function(){return i.a.createElement(u.a,{header:"Next",title:"Top page."},i.a.createElement(l.a,null),i.a.createElement("hr",null),i.a.createElement(c.a,{href:"./other"},i.a.createElement("button",null,"go to Other >>")))}},t4UJ:function(t,e,n){"use strict";var a=n("0iUn"),i=n("sLSF"),r=n("MI3g"),c=n("a7VT"),u=n("AT/M"),l=n("Tit0"),o=n("vYYK"),s=n("q1tI"),p=n.n(s),d=n("/MKj"),f=function(t){function e(t){var n;return Object(a.default)(this,e),n=Object(r.default)(this,Object(c.default)(e).call(this,t)),Object(o.a)(Object(u.default)(n),"style",{fontSize:"12pt",padding:"5px 15px"}),n.doAction=n.doAction.bind(Object(u.default)(n)),n.reset=n.reset.bind(Object(u.default)(n)),n}return Object(l.default)(e,t),Object(i.default)(e,[{key:"doAction",value:function(t){return t.shiftKey?this.props.dispatch({type:"DECREMENT"}):this.props.dispatch({type:"INCREMENT"})}},{key:"reset",value:function(){return this.props.dispatch({type:"RESET"})}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("p",null,this.props.message,": ",this.props.count),p.a.createElement("button",{style:this.style,onClick:this.doAction},"Count"),p.a.createElement("button",{style:this.style,onClick:this.reset},"Reset"))}}]),e}(s.Component);f=Object(d.b)(function(t){return t})(f),e.a=f},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var t=n("RNiq");return{page:t.default||t}}])}},[["vlRD",1,0]]]);