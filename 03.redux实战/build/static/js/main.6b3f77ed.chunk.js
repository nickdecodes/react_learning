(this.webpackJsonpredux_test=this.webpackJsonpredux_test||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n(7),a=n.n(i),s=n(2),u=n(3),o=n(5),d=n(4),l=n(9);var j=Object(l.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.data;switch(n){case"increment":return e+c;case"decrement":return e-c;default:return e}})),b=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={carName:"\u5954\u9a70c63"},e.increment=function(){var t=e.selectNumber.value;j.dispatch({type:"increment",data:1*t})},e.decrement=function(){var t=e.selectNumber.value;j.dispatch({type:"decrement",data:1*t})},e.incrementIfOdd=function(){var t=e.selectNumber.value;j.getState()%2!==0&&j.dispatch({type:"increment",data:1*t})},e.incrementAsync=function(){var t=e.selectNumber.value;setTimeout((function(){j.dispatch({type:"increment",data:1*t})}),500)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{children:["\u5f53\u524d\u6c42\u548c\u4e3a\uff1a",j.getState()]}),Object(c.jsxs)("select",{ref:function(t){return e.selectNumber=t},children:[Object(c.jsx)("option",{value:"1",children:"1"}),Object(c.jsx)("option",{value:"2",children:"2"}),Object(c.jsx)("option",{value:"3",children:"3"})]}),"\xa0",Object(c.jsx)("button",{onClick:this.increment,children:"+"}),"\xa0",Object(c.jsx)("button",{onClick:this.decrement,children:"-"}),"\xa0",Object(c.jsx)("button",{onClick:this.incrementIfOdd,children:"\u5f53\u524d\u6c42\u548c\u4e3a\u5947\u6570\u518d\u52a0"}),"\xa0",Object(c.jsx)("button",{onClick:this.incrementAsync,children:"\u5f02\u6b65\u52a0"}),"\xa0"]})}}]),n}(r.Component),h=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(b,{})})}}]),n}(r.Component);a.a.render(Object(c.jsx)(h,{}),document.getElementById("root")),j.subscribe((function(){a.a.render(Object(c.jsx)(h,{}),document.getElementById("root"))}))}},[[18,1,2]]]);
//# sourceMappingURL=main.6b3f77ed.chunk.js.map