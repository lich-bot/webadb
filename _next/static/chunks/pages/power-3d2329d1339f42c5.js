(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[995],{3324:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/power",function(){return i(8489)}])},8489:function(e,n,i){"use strict";i.r(n);var s=i(9405),r=i(4145),o=i(3470),t=i(8833),a=i(8978),l=i(1835),c=i(5959),d=i(5859),m=i(7199),g=i(3115),u=i(4204),f=i.n(u),p=i(4937),x=i(8298);n.default=(0,g.Pi)((function(){return(0,o.jsxs)(t.K,(0,r.Z)((0,s.Z)({},x.LE),{children:[(0,o.jsx)(f(),{children:(0,o.jsx)("title",{children:"Power Menu - Android Web Toolbox"})}),(0,o.jsx)("div",{children:(0,o.jsx)(a.a,{text:"Reboot",disabled:!p.q.device,onClick:function(){return p.q.device.power.reboot()}})}),(0,o.jsx)("div",{style:{marginTop:20},children:(0,o.jsx)(a.a,{text:"Power Off",disabled:!p.q.device,onClick:function(){return p.q.device.power.powerOff()}})}),(0,o.jsx)("div",{style:{marginTop:20},children:(0,o.jsx)(a.a,{text:"Press Power Button",disabled:!p.q.device,onClick:function(){return p.q.device.power.powerButton()}})}),(0,o.jsx)("div",{style:{marginTop:20},children:(0,o.jsx)(l.c,{messageBarType:c.f.severeWarning,children:"Danger Zone Below"})}),(0,o.jsx)("div",{style:{marginTop:20},children:(0,o.jsx)(a.a,{text:"Reboot to Bootloader",disabled:!p.q.device,onClick:function(){return p.q.device.power.bootloader()}})}),(0,o.jsx)("div",{style:{marginTop:20},children:(0,o.jsx)(a.a,{text:"Reboot to Fastboot",disabled:!p.q.device,onClick:function(){return p.q.device.power.fastboot()}})}),(0,o.jsx)("div",{style:{marginTop:20},children:(0,o.jsx)(a.a,{text:"Reboot to Recovery",disabled:!p.q.device,onClick:function(){return p.q.device.power.recovery()}})}),(0,o.jsx)("div",{style:{marginTop:20},children:(0,o.jsx)(a.a,{text:"Reboot to Sideload",disabled:!p.q.device,onClick:function(){return p.q.device.power.sideload()}})}),(0,o.jsxs)("div",{style:{marginTop:20},children:[(0,o.jsx)(a.a,{text:"Reboot to Qualcomm EDL Mode",disabled:!p.q.device,onClick:function(){return p.q.device.power.qualcommEdlMode()}}),(0,o.jsx)(d.G,{content:(0,o.jsx)("span",{children:"Only works on some Qualcomm devices."}),children:(0,o.jsx)(m.J,{style:{verticalAlign:"middle",marginLeft:4,fontSize:18},iconName:x.PJ.Info})})]}),(0,o.jsxs)("div",{style:{marginTop:20},children:[(0,o.jsx)(a.a,{text:"Reboot to Samsung Odin Download Mode",disabled:!p.q.device,onClick:function(){return p.q.device.power.samsungOdin()}}),(0,o.jsx)(d.G,{content:(0,o.jsx)("span",{children:"Only works on Samsung devices."}),children:(0,o.jsx)(m.J,{style:{verticalAlign:"middle",marginLeft:4,fontSize:18},iconName:x.PJ.Info})})]}),(0,o.jsxs)("div",{style:{marginTop:20},children:[(0,o.jsx)(a.a,{text:"Reboot to Factory",disabled:!p.q.device,onClick:function(){return p.q.device.power.reboot("factory")}}),(0,o.jsx)(d.G,{content:(0,o.jsx)("span",{children:"Only works on some devices."}),children:(0,o.jsx)(m.J,{style:{verticalAlign:"middle",marginLeft:4,fontSize:18},iconName:x.PJ.Info})})]})]}))}))},1835:function(e,n,i){"use strict";i.d(n,{c:function(){return C}});var s,r=i(4985),o=i(7449),t=i(1348),a=i(5699),l=i(9652),c=i(1852),d=i(5900),m=i(5943),g=i(7199),u=i(5959),f=i(8811),p=i(3604),x=((s={})[u.f.info]="Info",s[u.f.warning]="Info",s[u.f.error]="ErrorBadge",s[u.f.blocked]="Blocked2",s[u.f.severeWarning]="Warning",s[u.f.success]="Completed",s),v=(0,a.y)(),h=function(e){switch(e){case u.f.blocked:case u.f.error:case u.f.severeWarning:return"assertive"}return"polite"},w=function(e){switch(e){case u.f.blocked:case u.f.error:case u.f.severeWarning:return"alert"}return"status"},b=t.forwardRef((function(e,n){var i=(0,f.k)(!1),s=i[0],r=i[1].toggle,a=(0,p.M)("MessageBar"),b=e.actions,k=e.className,B=e.children,y=e.overflowButtonAriaLabel,S=e.dismissIconProps,M=e.styles,j=e.theme,L=e.messageBarType,T=void 0===L?u.f.info:L,C=e.onDismiss,N=void 0===C?void 0:C,q=e.isMultiline,W=void 0===q||q,E=e.truncated,I=e.dismissButtonAriaLabel,P=e.messageBarIconProps,R=e.role,_=e.delayedRender,J=void 0===_||_,D=e.expandButtonProps,O=(0,l.pq)(e,l.iY,["className","role"]),H=v(M,{theme:j,messageBarType:T||u.f.info,onDismiss:void 0!==N,actions:void 0!==b,truncated:E,isMultiline:W,expandSingleLine:s,className:k}),z={iconName:s?"DoubleChevronUp":"DoubleChevronDown"},A=b||N?{"aria-describedby":a,role:"region"}:{},G=b?t.createElement("div",{className:H.actions},b):null,U=N?t.createElement(m.h,{disabled:!1,className:H.dismissal,onClick:N,iconProps:S||{iconName:"Clear"},title:I,ariaLabel:I}):null;return t.createElement("div",(0,o.pi)({ref:n,className:H.root},A),t.createElement("div",{className:H.content},t.createElement("div",{className:H.iconContainer,"aria-hidden":!0},P?t.createElement(g.J,(0,o.pi)({},P,{className:(0,c.i)(H.icon,P.className)})):t.createElement(g.J,{iconName:x[T],className:H.icon})),t.createElement("div",{className:H.text,id:a,role:R||w(T),"aria-live":h(T)},t.createElement("span",(0,o.pi)({className:H.innerText},O),J?t.createElement(d.U,null,t.createElement("span",null,B)):t.createElement("span",null,B))),!W&&!G&&E&&t.createElement("div",{className:H.expandSingleLine},t.createElement(m.h,(0,o.pi)({disabled:!1,className:H.expand,onClick:r,iconProps:z,ariaLabel:y,"aria-expanded":s},D))),!W&&G,!W&&U&&t.createElement("div",{className:H.dismissSingleLine},U),W&&U),W&&G)}));b.displayName="MessageBar";var k,B,y,S=i(8491),M={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},j=((k={})[u.f.error]="errorBackground",k[u.f.blocked]="errorBackground",k[u.f.success]="successBackground",k[u.f.warning]="warningBackground",k[u.f.severeWarning]="severeWarningBackground",k[u.f.info]="infoBackground",k),L=((B={})[u.f.error]="rgba(255, 0, 0, 0.3)",B[u.f.blocked]="rgba(255, 0, 0, 0.3)",B[u.f.success]="rgba(48, 241, 73, 0.3)",B[u.f.warning]="rgba(255, 254, 57, 0.3)",B[u.f.severeWarning]="rgba(255, 0, 0, 0.3)",B[u.f.info]="Window",B),T=((y={})[u.f.error]="errorIcon",y[u.f.blocked]="errorIcon",y[u.f.success]="successIcon",y[u.f.warning]="warningIcon",y[u.f.severeWarning]="severeWarningIcon",y[u.f.info]="infoIcon",y),C=(0,r.z)(b,(function(e){var n,i,s,r,t,a=e.theme,l=e.className,c=e.onDismiss,d=e.truncated,m=e.isMultiline,g=e.expandSingleLine,f=e.messageBarType,p=void 0===f?u.f.info:f,x=a.semanticColors,v=a.fonts,h=(0,S.sK)(0,S.mV),w=(0,S.Cn)(M,a),b={fontSize:S.ld.xSmall,height:10,lineHeight:"10px",color:x.messageText,selectors:(n={},n[S.qJ]=(0,o.pi)((0,o.pi)({},(0,S.xM)()),{color:"WindowText"}),n)},k=[(0,S.GL)(a,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":b,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[w.root,v.medium,p===u.f.error&&w.error,p===u.f.blocked&&w.blocked,p===u.f.severeWarning&&w.severeWarning,p===u.f.success&&w.success,p===u.f.warning&&w.warning,m?w.multiline:w.singleline,!m&&c&&w.dismissalSingleLine,!m&&d&&w.expandingSingleLine,{background:x[j[p]],color:x.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:(i={".ms-Link":{color:x.messageLink,selectors:{":hover":{color:x.messageLinkHovered}}}},i[S.qJ]=(0,o.pi)((0,o.pi)({},(0,S.xM)()),{background:L[p],border:"1px solid WindowText",color:"WindowText"}),i)},m&&{flexDirection:"column"},l],content:[w.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[w.iconContainer,{fontSize:S.ld.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:x[T[p]],selectors:(s={},s[S.qJ]=(0,o.pi)((0,o.pi)({},(0,S.xM)()),{color:"WindowText"}),s)},text:[w.text,(0,o.pi)((0,o.pi)({minWidth:0,display:"flex",flexGrow:1,margin:8},v.small),{selectors:(r={},r[S.qJ]=(0,o.pi)({},(0,S.xM)()),r)}),!c&&{marginRight:12}],innerText:[w.innerText,{lineHeight:16,selectors:{"& span a:last-child":{paddingLeft:4}}},d&&{overflow:"visible",whiteSpace:"pre-wrap"},!m&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!m&&!d&&{selectors:(t={},t[h]={overflow:"visible",whiteSpace:"pre-wrap"},t)},g&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:w.dismissSingleLine,expandSingleLine:w.expandSingleLine,dismissal:[w.dismissal,k],expand:[w.expand,k],actions:[m?w.actions:w.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},m&&{marginBottom:8},c&&!m&&{marginRight:0}]}}),void 0,{scope:"MessageBar"})},5959:function(e,n,i){"use strict";var s;i.d(n,{f:function(){return s}}),function(e){e[e.info=0]="info",e[e.error=1]="error",e[e.blocked=2]="blocked",e[e.severeWarning=3]="severeWarning",e[e.success=4]="success",e[e.warning=5]="warning"}(s||(s={}))},5900:function(e,n,i){"use strict";i.d(n,{U:function(){return t}});var s=i(7449),r=i(1348),o=i(4326),t=function(e){function n(n){var i=e.call(this,n)||this;return i.state={isRendered:void 0===(0,o.J)()},i}return(0,s.ZT)(n,e),n.prototype.componentDidMount=function(){var e=this,n=this.props.delay;this._timeoutId=window.setTimeout((function(){e.setState({isRendered:!0})}),n)},n.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},n.prototype.render=function(){return this.state.isRendered?r.Children.only(this.props.children):null},n.defaultProps={delay:0},n}(r.Component)}},function(e){e.O(0,[774,888,179],(function(){return n=3324,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=power-3d2329d1339f42c5.js.map