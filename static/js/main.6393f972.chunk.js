(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),l=(n(14),n(5)),i=n(1),s=n(2),d=n(4),u=n(3),p=(n(15),function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).getStyle=function(){return{background:"#f4f4f4",paddding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)}),n,o.a.createElement("button",{style:m,onClick:this.props.clickHandler.bind(this,e)},"x")))}}]),n}(o.a.Component)),m={background:"#ff0000",color:"#fff",border:"none",borderRadius:"50%",padding:"5px 8px",cursor:"pointer",float:"right"},h=p,f=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e,n){return o.a.createElement(h,{key:e.id,todo:e,markComplete:t.props.markComplete,clickHandler:t.props.clickHandler})}))}}]),n}(o.a.Component);function b(t){return o.a.createElement("header",{style:g},o.a.createElement("h1",null,"Todolist"),o.a.createElement("button",{style:k,onClick:t.buttonClickHandler},"About"))}var g={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},k={color:"#fff",background:"#333",padding:"5px",border:"none",margin:"5px"},v=n(8),y=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={title:""},t.onChange=function(e){return t.setState(Object(v.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{style:{display:"flex"},onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo....",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",className:"btn",style:{flex:"1"}}))}}]),n}(o.a.Component),E=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todos:[{id:1,title:"wash the cloths",completed:!1},{id:2,title:"study react",completed:!1},{id:3,title:"do some project",completed:!1}],about:!0},t.length=Object(l.a)(t.state.todos).length,t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.clickHandler=function(e){t.setState({todos:Object(l.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){if(t.length+=1,""!==e){var n={id:t.length,title:e,completed:!1};t.setState({todos:[].concat(Object(l.a)(t.state.todos),[n])})}},t.buttonClickHandler=function(){t.setState({about:!t.state.about})},t}return Object(s.a)(n,[{key:"render",value:function(){return this.state.about?o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(b,{buttonClickHandler:this.buttonClickHandler}),o.a.createElement(y,{addTodo:this.addTodo}),o.a.createElement(f,{todos:this.state.todos,markComplete:this.markComplete,clickHandler:this.clickHandler}))):o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(b,{buttonClickHandler:this.buttonClickHandler}),o.a.createElement("h4",{style:{textAlign:"center"}},"TodoApp_v1.0")))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.6393f972.chunk.js.map