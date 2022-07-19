(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[793],{7634:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logcat",function(){return i(5697)}])},5697:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return _}});var n=i(9405),s=i(4145),r=i(1422),o=i(7832),h=i(3470),l=i(8833),c=i(4368),a=i(7294),d=i(3198),u=i(4590),y=i(6420),m=i(7228);function k(e,t,i,n){n!==t&&e.set(e.subarray(n,t),n+1),e[n]=i}function f(e,t,i){i<t-1&&e.set(e.subarray(i+1,t),i)}class C{order;mid;minKeyCount;keys;keyCount;height;children;constructor(e,t,i,n,s){this.order=e,this.mid=this.order>>1,this.minKeyCount=(this.order+1>>1)-1,this.keys=t,this.keyCount=i,this.height=n,this.children=s}split(e,t,i){let n;const s=new Int32Array(this.order-1);let r;return t<this.mid?(n=this.keys[this.mid-1],s.set(this.keys.subarray(this.mid),0),k(this.keys,this.mid-1,e,t),i?(r=this.children.splice(this.mid,this.order-this.mid),this.children.splice(t+1,0,i)):r=new Array(this.order)):(t===this.mid?(n=e,s.set(this.keys.subarray(this.mid),0)):(n=this.keys[this.mid],t!==this.mid+1&&s.set(this.keys.subarray(this.mid+1,t),0),s[t-this.mid-1]=e,s.set(this.keys.subarray(t),t-this.mid)),i?(r=this.children.splice(this.mid+1,this.order-this.mid-1),r.splice(t-this.mid,0,i)):r=new Array(this.order)),this.keyCount=this.mid,{key:n,child:new C(this.order,s,this.order-1-this.mid,this.height,r)}}search(e){let t=0,i=this.keyCount-1;for(;t<=i;){const n=t+i>>1;if(this.keys[n]===e)return n;this.keys[n]<e?t=n+1:i=n-1}return~t}has(e){let t=this.search(e);return t>=0||this.height>0&&(t=~t,this.children[t].has(e))}add(e){let t=this.search(e);if(t>=0)return!1;if(t=~t,0===this.height)return this.keyCount===this.order-1?this.split(e,t):(k(this.keys,this.keyCount,e,t),this.keyCount+=1,!0);const i=this.children[t].add(e);if("object"===typeof i){if(this.keyCount===this.order-1)return this.split(i.key,t,i.child);k(this.keys,this.keyCount,i.key,t),this.keyCount+=1,this.children.splice(t+1,0,i.child)}return!0}delete(e){let t=this.search(e);if(t>=0)return this.deleteAt(t),!0;if(this.height>0){t=~t;const i=this.children[t].delete(e);return i&&this.balance(t),i}return!1}max(){return 0===this.height?this.keys[this.keyCount-1]:this.children[this.keyCount].max()}balance(e){const t=this.children[e];if(t.keyCount>=this.minKeyCount)return;if(e>0){const i=this.children[e-1];if(i.keyCount>this.minKeyCount)return k(t.keys,t.keyCount,this.keys[e-1],0),this.height>1&&t.children.splice(0,0,i.children[i.keyCount]),t.keyCount+=1,this.keys[e-1]=i.keys[i.keyCount-1],void(i.keyCount-=1);if(i.keys[i.keyCount]=this.keys[e-1],i.keyCount+=1,i.keys.set(t.keys.subarray(0,t.keyCount),i.keyCount),this.height>1)for(let e=0;e<=t.keyCount;e++)i.children[i.keyCount+e]=t.children[e];return i.keyCount+=t.keyCount,f(this.keys,this.keyCount,e-1),this.children.splice(e,1),void(this.keyCount-=1)}const i=this.children[e+1];if(i.keyCount>this.minKeyCount)return t.keys[t.keyCount]=this.keys[e],this.height>1&&(t.children[t.keyCount+1]=i.children.splice(0,1)[0]),t.keyCount+=1,this.keys[e]=i.keys[0],f(i.keys,i.keyCount,0),void(i.keyCount-=1);if(t.keys[t.keyCount]=this.keys[e],t.keyCount+=1,t.keys.set(i.keys.subarray(0,i.keyCount),t.keyCount),this.height>1)for(let n=0;n<=i.keyCount;n++)t.children[t.keyCount+n]=i.children[n];t.keyCount+=i.keyCount,f(this.keys,this.keyCount,e),this.children.splice(e+1,1),this.keyCount-=1}deleteMax(){if(0===this.height)return void(this.keyCount-=1);this.children[this.keyCount].deleteMax(),this.balance(this.keyCount)}deleteAt(e){if(0===this.height)return f(this.keys,this.keyCount,e),void(this.keyCount-=1);const t=this.children[e].max();this.keys[e]=t,this.children[e].deleteMax(),this.balance(e)}*[Symbol.iterator](){if(this.height>0){for(let e=0;e<this.keyCount;e+=1)yield*this.children[e],yield this.keys[e];yield*this.children[this.keyCount]}else for(let e=0;e<this.keyCount;e+=1)yield this.keys[e]}}class x{order;root;size=0;constructor(e){this.order=e,this.root=new C(e,new Int32Array(e-1),0,0,new Array(e))}has(e){let t=this.root;for(;;){const i=t.search(e);if(i>=0)return!0;if(t=t.children[~i],!t)return!1}}add(e){const t=this.root.add(e);if("object"===typeof t){const e=new Int32Array(this.order-1);e[0]=t.key;const i=new Array(this.order);i[0]=this.root,i[1]=t.child,this.root=new C(this.order,e,1,this.root.height+1,i)}return t&&(this.size+=1),!!t}delete(e){const t=this.root.delete(e);return t&&(this.root.height>0&&0===this.root.keyCount&&(this.root=this.root.children[0]),this.size-=1),t}clear(){this.root.keyCount=0,this.root.height=0,this.root.children=new Array(this.order),this.size=0}[Symbol.iterator](){return this.root[Symbol.iterator]()}}var g=i(1498),p=i(7076),w=i(3115),v=i(4204),b=i.n(v),I=i(1348),N=i(1361),Z=i(4937),j=i(8298),S=(0,d.Z)({grid:{height:"100%",marginLeft:"-16px",marginRight:"-16px"},header:{textAlign:"center",lineHeight:"".concat(32,"px")},row:{"&:hover":{backgroundColor:"#f3f2f1"}},selected:{backgroundColor:"#edebe9"},code:(0,n.Z)({fontFamily:"monospace",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:"32px",cursor:"default"},u.q5.overflow("hidden"))}),z=(0,p.ky)({logcat:void 0,running:!1,buffer:[],flushRequested:!1,list:[],selection:new x(6),count:0,stream:void 0,stopSignal:void 0,selectedCount:0,animationFrameId:void 0,start:function(){var e=this;this.running||(this.list=[],this.running=!0,this.stream=this.logcat.binary(),this.stopSignal=new g.HS,this.stream.pipeTo(new g.Vj({write:function(t){e.buffer.push(t),e.flushRequested||(e.flushRequested=!0,requestAnimationFrame(e.flush))}}),{signal:this.stopSignal.signal}).catch((function(){})))},flush:function(){var e;(e=this.list).push.apply(e,(0,o.Z)(this.buffer)),this.buffer=[],this.flushRequested=!1},stop:function(){this.running=!1,this.stopSignal.abort()},clear:function(){this.list=[],this.selection.clear(),this.selectedCount=0},get empty(){return 0===this.list.length},get commandBar(){var e=this;return[this.running?{key:"stop",text:"Stop",iconProps:{iconName:j.PJ.Stop},onClick:function(){return e.stop()}}:{key:"start",text:"Start",disabled:void 0===this.logcat,iconProps:{iconName:j.PJ.Play},onClick:function(){return e.start()}},{key:"clear",text:"Clear",disabled:this.empty,iconProps:{iconName:j.PJ.Delete},onClick:function(){return e.clear()}},{key:"copyAll",text:"Copy Rows",disabled:0===this.selectedCount,iconProps:{iconName:j.PJ.Copy},onClick:function(){var t="",i=!0,n=!1,s=void 0;try{for(var r,o=e.selection[Symbol.iterator]();!(i=(r=o.next()).done);i=!0){var h=r.value;t+=(0,m.oo)(e.list[h],m.vj.Brief)+"\n"}}catch(l){n=!0,s=l}finally{try{i||null==o.return||o.return()}finally{if(n)throw s}}t=t.replace(/\u0000/g,""),navigator.clipboard.writeText(t)}},{key:"copyText",text:"Copy Messages",disabled:0===this.selectedCount,iconProps:{iconName:j.PJ.Copy},onClick:function(){var t="",i=!0,n=!1,s=void 0;try{for(var r,o=e.selection[Symbol.iterator]();!(i=(r=o.next()).done);i=!0){var h=r.value;t+=e.list[h].message+"\n"}}catch(l){n=!0,s=l}finally{try{i||null==o.return||o.return()}finally{if(n)throw s}}t=t.replace(/\u0000/g,""),navigator.clipboard.writeText(t)}}]},get columns(){var e=this;return[{width:40,title:"",CellComponent:function(t){var i=e,o=t.rowIndex,a=(t.columnIndex,t.className),d=(0,r.Z)(t,["rowIndex","columnIndex","className"]),u=(0,I.useState)(!1),y=u[0],m=u[1];(0,I.useEffect)((function(){m(i.selection.has(o))}),[o]);var k=(0,j.R9)((function(e,t){var n=i;void 0!==t&&(t?(i.selection.add(o),m(!0)):(i.selection.delete(o),m(!1)),(0,p.z)((function(){n.selectedCount=n.selection.size})))}));return(0,h.jsx)(l.K,(0,s.Z)((0,n.Z)({className:a,verticalAlign:"center",horizontalAlign:"center"},d),{children:(0,h.jsx)(c.X,{checked:y,onChange:k})}))}},{width:200,title:"Time",CellComponent:function(t){var i=t.rowIndex,o=(t.columnIndex,t.className),l=(0,r.Z)(t,["rowIndex","columnIndex","className"]),c=e.list[i];c.timeString||(c.timeString=new Date(1e3*c.second).toISOString());var a=S();return(0,h.jsx)("div",(0,s.Z)((0,n.Z)({className:(0,y.z)(a.code,o)},l),{children:c.timeString}))}},{width:60,title:"PID",CellComponent:function(t){var i=t.rowIndex,o=(t.columnIndex,t.className),l=(0,r.Z)(t,["rowIndex","columnIndex","className"]),c=e.list[i],a=S();return(0,h.jsx)("div",(0,s.Z)((0,n.Z)({className:(0,y.z)(a.code,o)},l),{children:c.pid}))}},{width:60,title:"TID",CellComponent:function(t){var i=t.rowIndex,o=(t.columnIndex,t.className),l=(0,r.Z)(t,["rowIndex","columnIndex","className"]),c=e.list[i],a=S();return(0,h.jsx)("div",(0,s.Z)((0,n.Z)({className:(0,y.z)(a.code,o)},l),{children:c.tid}))}},{width:80,title:"Priority",CellComponent:function(t){var i=t.rowIndex,o=(t.columnIndex,t.className),l=(0,r.Z)(t,["rowIndex","columnIndex","className"]),c=e.list[i],a=S();return(0,h.jsx)("div",(0,s.Z)((0,n.Z)({className:(0,y.z)(a.code,o)},l),{children:m.As[c.priority]}))}},{width:300,title:"Tag",CellComponent:function(t){var i=t.rowIndex,o=(t.columnIndex,t.className),l=(0,r.Z)(t,["rowIndex","columnIndex","className"]),c=e.list[i],a=S();return(0,h.jsx)("div",(0,s.Z)((0,n.Z)({className:(0,y.z)(a.code,o)},l),{children:c.tag}))}},{width:300,flexGrow:1,title:"Message",CellComponent:function(t){var i=t.rowIndex,o=(t.columnIndex,t.className),l=(0,r.Z)(t,["rowIndex","columnIndex","className"]),c=e.list[i],a=S();return(0,h.jsx)("div",(0,s.Z)((0,n.Z)({className:(0,y.z)(a.code,o)},l),{children:c.message}))}}]}},{buffer:!1,list:p.LO.shallow,flush:p.aD.bound});(0,p.EH)((function(){Z.q.device?(0,p.z)((function(){z.logcat=new m.J(Z.q.device)})):(0,p.z)((function(){z.logcat=void 0,z.running&&z.stop()}))}));var A=(0,w.Pi)((function(e){var t=e.className,i=e.columnIndex,o=(0,r.Z)(e,["className","columnIndex"]),l=S();return(0,h.jsx)("div",(0,s.Z)((0,n.Z)({className:(0,y.z)(t,l.header)},o),{children:z.columns[i].title}))})),P=function(e){var t=e.className,i=e.rowIndex,s=(0,r.Z)(e,["className","rowIndex"]),o=(z.list[i],S()),l=(0,j.R9)((function(){(0,p.z)((function(){}))}));return(0,h.jsx)("div",(0,n.Z)({className:(0,y.z)(t,o.row),onClick:l},s))},_=(0,w.Pi)((function(){var e=S();return(0,h.jsxs)(l.K,(0,s.Z)((0,n.Z)({},j.LE),{children:[(0,h.jsx)(b(),{children:(0,h.jsx)("title",{children:"Logcat - Android Web Toolbox"})}),(0,h.jsx)(N.X3,{items:z.commandBar}),(0,h.jsx)(a.v,{grow:!0,children:(0,h.jsx)(N.rj,{className:e.grid,rowCount:z.list.length,rowHeight:32,columns:z.columns,HeaderComponent:A,RowComponent:P})})]}))}))}},function(e){e.O(0,[774,888,179],(function(){return t=7634,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=logcat-ba9f1303ed0d85ef.js.map