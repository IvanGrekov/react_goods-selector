(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(3),l=n.n(s),r=n(4),o=n(5),d=n(7),i=n(6),u=n(1),m=n.n(u),h=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(e){Object(d.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={selectedGoods:["Jam"]},e.clearSelected=function(){e.setState({selectedGoods:[]})},e.renderTitle=function(e){switch(e.length){case 0:return"No goods selected";case 1:return"".concat(e[0]," is selected");default:return"".concat(e.slice(0,-1).join(", ")," \n          and ").concat(e[e.length-1]," \n          are selected")}},e}return Object(o.a)(n,[{key:"addProduct",value:function(e){this.setState((function(t){return t.selectedGoods.push(e),{selectedGoods:t.selectedGoods}}))}},{key:"removeProduct",value:function(e){this.setState((function(t){return{selectedGoods:t.selectedGoods.filter((function(t){return t!==e}))}}))}},{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"title"},a.a.createElement(a.a.Fragment,null,this.renderTitle(t),t.length>0&&a.a.createElement("button",{type:"button",className:"title__clear",title:"Clear selected",onClick:this.clearSelected},"x"))),a.a.createElement("ul",{className:"product-list"},h.map((function(n){return a.a.createElement("li",{key:n,className:"product-list__item"},a.a.createElement("span",{className:m()({hightlighted:t.includes(n)})},n),a.a.createElement("button",{className:m()("product-list__add",{hidden:t.includes(n)}),type:"button",onClick:e.addProduct.bind(e,n)},"Add"),a.a.createElement("button",{className:m()({hidden:!t.includes(n),"product-list__remove":!0}),type:"button",onClick:e.removeProduct.bind(e,n)},"Remove"))}))))}}]),n}(a.a.Component);l.a.render(a.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.2a9a19a3.chunk.js.map