(window["webpackJsonptest-stubbs-pro"]=window["webpackJsonptest-stubbs-pro"]||[]).push([[0],[,function(e,a,t){e.exports={Item:"Item_Item__3e7YM",value:"Item_value__26SKM",name:"Item_name__3s8Yo",index:"Item_index__3f0Lr",add:"Item_add__AaNpS",remove:"Item_remove__1K2Je",total:"Item_total__1OlqQ"}},function(e,a,t){e.exports={BalanceSection:"BalanceSection_BalanceSection__2LE2G",label:"BalanceSection_label__2OC1G",edit:"BalanceSection_edit__3XlLd",total:"BalanceSection_total__3lst0",totalData:"BalanceSection_totalData__1Io4B"}},function(e,a,t){e.exports={Transcript:"Transcript_Transcript__3uOFr",history:"Transcript_history__2Xyoy",details:"Transcript_details__3jgCx",close:"Transcript_close__2QOLX"}},,function(e,a,t){e.exports={Button:"Button_Button__1mrMq",primary:"Button_primary__2nxhy",main:"Button_main__ENYwr",small:"Button_small__lRKN_"}},function(e,a,t){e.exports={Input:"Input_Input__1mwbt",main:"Input_main__2R0vp",middle:"Input_middle__3Z_RZ",small:"Input_small__2EoZG"}},,,,,,,,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),o=t.n(r),c=(t(20),t(21),t(12)),i=t(9),s=t(10),m=t(13),u=t(11),d=t(14),_=t(6),v=t.n(_),p=function(e){var a=e.type||"text",t=[v.a.Input,v.a[e.size]];return l.a.createElement("input",{className:t.join(" "),type:a,value:e.value,name:e.name,placeholder:e.placeholder,onChange:e.onChange,size:e.size})},h=t(5),f=t.n(h),E=function(e){var a=[f.a.Button,f.a[e.type],f.a[e.size]];return l.a.createElement("button",{onClick:e.onClick,className:a.join(" "),disabled:e.disabled},e.children)};E.defaultProps={onClick:function(){},disabled:!1,type:"primary",size:"main"};var N=E,b=t(4),g=t(1),w=t.n(g),I=t(3),S=t.n(I),y=function(e){var a=e.handleValue,t=e.index,r=e.item,o=e.setVisible,c=Object(n.useState)(0),i=Object(b.a)(c,2),s=i[0],m=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:S.a.close,onClick:function(){return o(!1)}},"\xd7"),r.value.map((function(e,a){return e?l.a.createElement("div",{className:S.a.history,key:a},l.a.createElement("span",{className:S.a.details},new Date(e.id).toLocaleString().split(", ")[0]),l.a.createElement("span",{className:S.a.details},e.value)):null})),l.a.createElement("div",{className:S.a.Transcript},l.a.createElement(N,{onClick:function(){a(t,parseFloat(s)),m(0)},disabled:!parseFloat(s),size:"small"},"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),l.a.createElement(p,{type:"text",onChange:function(e){return m(e.target.value)},value:s,size:"small"})))},C=function(e){var a=e.index,t=e.item,r=e.handleValue,o=e.handleName,c=e.remove,i=Object(n.useState)(!1),s=Object(b.a)(i,2),m=s[0],u=s[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:w.a.Item},l.a.createElement("div",{className:w.a.name},l.a.createElement("span",{className:w.a.index},a+1," \u2002"),l.a.createElement(p,{size:"middle",value:t.name,onChange:function(e){return o(a,e.target.value)}})),l.a.createElement("div",{className:w.a.value},l.a.createElement("span",{className:w.a.add,onClick:function(){return u(!m)}},m?null:"+"),l.a.createElement("p",{className:w.a.total},t.value.reduce((function(e,a){return e+(a.value?a.value:a)}),0)),l.a.createElement("span",{className:w.a.remove,onClick:function(){return c(t.id)}},"\xd7"))),m?l.a.createElement(y,{handleValue:r,index:a,item:t,setVisible:u}):null)},x=function(e){var a=e.store,t=e.onremove,n=e.handleName,r=e.handleValue;return l.a.createElement("div",null," ",a.map((function(e,a){return l.a.createElement(C,{key:e.id,remove:t,handleValue:r,handleName:n,item:e,index:a})})))},B=function(e){var a=[{name:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430",id:Date.now()+1,value:[]},{name:"\u041f\u0440\u0435\u043c\u0438\u0438",id:Date.now()+2,value:[]},{name:"\u041f\u043e\u0434\u0430\u0440\u043a\u0438",id:Date.now()+3,value:[]}],t=[{name:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",id:Date.now()+4,value:[]},{name:"\u041a\u0432\u0430\u0440\u0442\u043f\u043b\u0430\u0442\u0430",id:Date.now()+5,value:[]},{name:"\u041e\u0434\u0435\u0436\u0434\u0430",id:Date.now()+6,value:[]}];try{var n=JSON.parse(localStorage.getItem("store".concat(e)));return n||("Income"===e?a:t)}catch(l){console.log(l.massage),localStorage.removeItem("store".concat(e))}},k=function(e){return"Income"===e?"\u0414\u043e\u0445\u043e\u0434\u044b":"\u0420\u0430\u0441\u0445\u043e\u0434\u044b"},O=function(e,a){return e.map((function(e){return e.name.toLowerCase()})).includes(a.trim().toLowerCase())},j=t(2),D=t.n(j),z=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={line:"",store:B(t.props.name)||[]},t.handleChange=function(e){t.setState({line:e.target.value})},t.reset=function(){t.setState({line:""})},t.handleAdd=function(e){t.setState({store:[].concat(Object(c.a)(t.state.store),[{id:Date.now(),name:e,value:[]}])},(function(){return t.reset()}))},t.handleValue=function(e,a){if(!isNaN(a)){var n=t.state.store;n[e].value.push({value:+a,id:Date.now()}),t.setState({store:n})}},t.handleName=function(e,a){var n=t.state.store;n[e].name=a,t.setState({store:n})},t.handleRemove=function(e){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443?")&&t.setState({store:t.state.store.filter((function(a){return a.id!==e}))})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.line,n=a.store,r=this.props.name;return l.a.createElement("div",{className:D.a.BalanceSection},l.a.createElement("h1",{className:D.a.label},k(r)),l.a.createElement(x,{store:n,onremove:this.handleRemove,handleValue:this.handleValue,handleName:this.handleName}),l.a.createElement("div",{className:D.a.total},l.a.createElement("span",{className:D.a.totalData},"\u0418\u0422\u041e\u0413\u041e"),l.a.createElement("span",{className:D.a.totalData},function(e){return e.reduce((function(e,a){return e+a.value.reduce((function(e,a){return e+a.value}),0)}),0)}(n)," \u20b4")),l.a.createElement("div",{className:D.a.edit},l.a.createElement(p,{size:"main",onChange:this.handleChange,value:this.state.line}),l.a.createElement(N,{size:"main",onClick:function(){return e.handleAdd(t)},disabled:!t.trim()||O(n,t)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),l.a.createElement(N,{size:"main",onClick:function(){!function(e,a){localStorage.removeItem("store".concat(e)),localStorage.setItem("store".concat(e),JSON.stringify(a)),alert("\u0420\u0430\u0437\u0434\u0435\u043b ".concat(k(e)," \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d"))}(r,n)}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f")))}}]),a}(l.a.Component);var V=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement(z,{name:"Expenses"}),l.a.createElement(z,{name:"Income"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.5fb772c7.chunk.js.map