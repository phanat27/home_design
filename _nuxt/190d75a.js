(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1227:function(t,e,r){var content=r(1234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(103).default)("bab90490",content,!0,{sourceMap:!1})},1233:function(t,e,r){"use strict";r(1227)},1234:function(t,e,r){(e=r(102)(!1)).push([t.i,".current{color:teal}",""]),t.exports=e},1243:function(t,e,r){"use strict";r.r(e);r(29);var n={data:function(){return{articles:[{os:"Windows",price:"500",weight:"3.9",size:"11.1",storage:"500",ram:"8",company:"hp",title:"HP laptop 14"},{os:"Chromeos",price:"400",weight:"7.0 Pounds",size:"11.1",storage:"256 GB",ram:"4",company:"hp",title:"HP Chromebook 14"},{os:"Windows",price:"450",weight:"3.9",size:"11.1",storage:"500",ram:"8",company:"hp",title:"HP laptop 14"},{os:"Windows",price:"600",weight:"3.9",size:"11.1",storage:"500",ram:"8",company:"hp",title:"HP laptop 14"},{os:"Windows",price:"700",weight:"3.9",size:"11.1",storage:"500",ram:"8",company:"hp",title:"HP laptop 14"},{os:"Windows",price:"350",weight:"3.9",size:"11.1",storage:"500",ram:"8",company:"hp",title:"HP laptop 14"},{os:"Windows",price:"400",weight:"3.9",size:"11.1",storage:"500",ram:"8",company:"hp",title:"HP laptop 14"}],currentPage:1,itemsPerPage:3,resultCount:0}},computed:{totalPages:function(){return 0==this.resultCount?1:Math.ceil(this.resultCount/this.itemsPerPage)},paginate:function(){if(this.articles&&this.articles.length==this.articles.length){this.resultCount=this.articles.length,this.currentPage>=this.totalPages&&(this.currentPage=this.totalPages);var t=this.currentPage*this.itemsPerPage-this.itemsPerPage;return this.articles.slice(t,t+this.itemsPerPage)}}},methods:{setPage:function(t){this.currentPage=t}}},o=(r(1233),r(101)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w3-light-grey"},[r("div",{staticClass:"w3-content",staticStyle:{"max-width":"1600px"}},[r("div",{staticClass:"w3-row w3-padding w3-border"},[r("div",{staticClass:"w3-col l8 s12"},[r("div",{staticClass:"w3-container w3-white w3-margin w3-padding-large"},[r("div",{staticClass:"w3-justify"},[r("h1",[t._v("Laptops")]),r("br"),r("br"),t._v(" "),r("div",t._l(t.totalPages,(function(e){return r("button",{key:e.id,staticClass:"w3-button",class:{current:t.currentPage===e,last:e==t.totalPages&&Math.abs(e-t.currentPage)>3,first:1==e&&Math.abs(e-t.currentPage)>3},on:{click:function(r){return t.setPage(e)}}},[t._v("\n                "+t._s(e)+"\n              ")])})),0),t._v(" "),t._l(t.paginate,(function(article){return r("div",{key:article._id,staticClass:"container w3-white w3-card"},[r("br"),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"}),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("h5",[r("span",{staticClass:"w3-large w3-text-teal"},[t._v(t._s(article.title)+",")])]),t._v(" "),r("span",[t._v("OS: "+t._s(article.os))]),r("br"),t._v(" "),r("span",[t._v(t._s(article.size)+" Inches")]),r("br"),t._v(" "),r("span",[t._v(t._s(article.ram)+" GB RAM")]),r("br"),t._v(" "),article.storage>=1e3?r("span",[t._v(t._s(article.storage/1e3)+" TB Storage,")]):r("span",[t._v(t._s(article.storage)+" GB Storage,")]),r("br")]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("h3",[t._v("$"+t._s(article.price))]),t._v(" "),t._m(0,!0)])]),r("hr")])})),t._v(" "),r("div",t._l(t.totalPages,(function(e){return r("button",{key:e.id,staticClass:"w3-button",class:{current:t.currentPage===e,last:e==t.totalPages&&Math.abs(e-t.currentPage)>3,first:1==e&&Math.abs(e-t.currentPage)>3},on:{click:function(r){return t.setPage(e)}}},[t._v("\n                "+t._s(e)+"\n              ")])})),0)],2)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:""}},[e("button",{staticClass:"w3-button w3-block w3-teal"},[this._v("Buy Now")])])])}],!1,null,null,null);e.default=component.exports}}]);