(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0KRp":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),s=n("YFqc"),r=n.n(s),u=n("5Yp1"),i=n("0iUn"),c=n("sLSF"),o=n("MI3g"),p=n("a7VT"),h=n("AT/M"),d=n("Tit0"),f=n("vYYK"),E=n("/MKj"),b=function(e){function t(e){var n;return Object(i.default)(this,t),n=Object(o.default)(this,Object(p.default)(t).call(this,e)),Object(f.a)(Object(h.default)(n),"style",{fontSize:"12pt",padding:"5px 10px"}),n.state={input:""},n.onChange=n.onChange.bind(Object(h.default)(n)),n.onKeyPress=n.onKeyPress.bind(Object(h.default)(n)),n.doAction=n.doAction.bind(Object(h.default)(n)),n.reset=n.reset.bind(Object(h.default)(n)),n}return Object(d.default)(t,e),Object(c.default)(t,[{key:"onChange",value:function(e){this.setState({input:e.target.value})}},{key:"onKeyPress",value:function(e){13==event.keyCode&&this.doAction(e)}},{key:"doAction",value:function(e){return this.setState({input:""}),this.props.dispatch({type:"ENTER",value:this.state.input})}},{key:"reset",value:function(){return this.setState({input:""}),this.props.dispatch({type:"RESET"})}},{key:"render",value:function(){for(var e=[],t=this.props.data.length,n=0;n<t;n++)e.push(l.a.createElement("tr",{key:n},l.a.createElement("th",null,this.props.data[n]),l.a.createElement("td",null,this.props.number[n])));return l.a.createElement("div",null,l.a.createElement("p",null,"TOTAL: ",this.props.result),l.a.createElement("input",{type:"text",style:this.style,size:"40",value:this.state.input,onChange:this.onChange,onKeyPress:this.onKeyPress}),l.a.createElement("button",{style:this.style,onClick:this.doAction},"Enter"),l.a.createElement("button",{style:this.style,onClick:this.reset},"Reset"),l.a.createElement("hr",null),l.a.createElement("table",null,l.a.createElement("tbody",null,e)),l.a.createElement("p",null,this.props.message))}}]),t}(a.Component),y=b=Object(E.b)(function(e){return e})(b);t.default=function(){return l.a.createElement(u.a,{header:"Calc",title:"calculator"},l.a.createElement(y,null),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement(r.a,{href:"/"},l.a.createElement("button",null,"<< Back to Top"))))}},TjsE:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calc",function(){var e=n("0KRp");return{page:e.default||e}}])}},[["TjsE",1,0]]]);