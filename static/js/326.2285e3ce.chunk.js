"use strict";(self.webpackChunkinstagram=self.webpackChunkinstagram||[]).push([[326],{326:function(e,n,s){s.r(n),s.d(n,{default:function(){return p}});var r=s(1413),i=s(4165),l=s(5861),t=s(885),a=s(2791),c=s(5830),o=s(7606),d=s(5015),u=s(6901),h=s(6871),v=s(184);var f=function(e){var n=e.userId,s=e.username,r=e.fullName,f=e.following,x=e.followers,m=e.photos,p=e.docId,j=a.useState(!1),g=(0,t.Z)(j,2),w=g[0],N=g[1],b=a.useState(!1),Z=(0,t.Z)(b,2),k=Z[0],y=Z[1],I=a.useState(),C=(0,t.Z)(I,2),S=C[0],z=C[1],F=a.useContext(c.Z),A=(0,h.s0)(),E=!(!F||!n)&&(null===F||void 0===F?void 0:F.userId)===n;a.useEffect((function(){E||null!==F&&void 0!==F&&F.following.includes(n)&&N(!0)}),[n]),a.useEffect((function(){z(null===x||void 0===x?void 0:x.length)}),[x]);var B=!1;function L(){return(L=(0,l.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!F){e.next=10;break}return e.next=3,(0,o.zZ)(F.docId,n,!0);case 3:return e.next=5,(0,o.bp)(p,F.userId,!0);case 5:N(!1),y(!1),z((function(e){return e-1})),e.next=11;break;case 10:A(u.ym);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}E||null!==f&&void 0!==f&&f.includes(null===F||void 0===F?void 0:F.userId)&&(B=!0);var M=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!F){e.next=9;break}return e.next=3,(0,o.zZ)(F.docId,n,!1);case 3:return e.next=5,(0,o.bp)(p,F.userId,!1);case 5:N(!0),z((function(e){return e+1})),e.next=10;break;case 9:A(u.ym);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)("div",{className:"profile-header",children:[(0,v.jsxs)("div",{className:"main-info",children:[(0,v.jsx)("div",{className:"profile-img",children:(0,v.jsx)("img",{src:"https://raw.githubusercontent.com/Amr-Zain/React-Instagram-Clone/master/public/images/avatars/".concat(s,".jpg"),alt:"@".concat(s),onError:function(e){e.target.src="https://raw.githubusercontent.com/Amr-Zain/React-Instagram-Clone/master/public/images/avatars/default.png"}})}),(0,v.jsx)("div",{children:(0,v.jsxs)("div",{className:"profile-info",children:[(0,v.jsxs)("div",{className:"user-info",children:[(0,v.jsx)("h3",{className:"username",children:s}),(0,v.jsx)("div",{children:E?(0,v.jsx)(v.Fragment,{}):(0,v.jsx)(v.Fragment,{children:w?(0,v.jsx)("button",{className:"following",onClick:function(){y(!0)},children:(0,v.jsx)("svg",{style:{cursor:"pointer"},"aria-label":"Following",className:"_ab6-",color:"#262626",fill:"#262626",height:"15",role:"img",viewBox:"0 0 95.28 70.03",width:"20",children:(0,v.jsx)("path",{d:"M64.23 69.98c-8.66 0-17.32-.09-26 0-3.58.06-5.07-1.23-5.12-4.94-.16-11.7 8.31-20.83 \r 20-21.06 7.32-.15 14.65-.14 22 0 11.75.22 20.24 9.28 20.1 21 0 3.63-1.38 5.08-5 5-8.62-.1-17.28 0-25.98 \r 0zm19-50.8A19 19 0 1164.32 0a19.05 19.05 0 0118.91 19.18zM14.76 50.01a5 5 0 01-3.37-1.31L.81 39.09a2.5 2.5 0 \r 01-.16-3.52l3.39-3.7a2.49 2.49 0 013.52-.16l7.07 6.38 15.73-15.51a2.48 2.48 0 013.52 0l3.53 3.58a2.49 2.49 0 010 \r 3.52L18.23 48.57a5 5 0 01-3.47 1.44z"})})}):(0,v.jsx)("button",{className:"not-following",onClick:M,children:(0,v.jsx)("p",{children:B?"Follow Back":"Follow"})})})})]}),(0,v.jsxs)("div",{className:"user-follow",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{children:m})," posts"]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{children:S})," followers"]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{children:null===f||void 0===f?void 0:f.length})," following"]})]}),(0,v.jsx)("h4",{className:"full-name",children:r})]})})]}),(0,v.jsx)("h4",{className:"full-name-col",children:r}),(0,v.jsxs)("div",{className:"user-follow-col",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{children:m})," ",(0,v.jsx)("h3",{children:"posts"})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{children:S})," ",(0,v.jsx)("h3",{children:"followers"})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{children:null===f||void 0===f?void 0:f.length})," ",(0,v.jsx)("h3",{children:"following"})]})]}),(0,v.jsx)(d.Z,{overlayState:k,setOverlayState:y,username:s,unfollowHandler:function(){return L.apply(this,arguments)}})]})},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")};var m=function(e){var n=e.userId,s=a.useState(null),r=(0,t.Z)(s,2),c=r[0],d=r[1];a.useEffect((function(){function e(){return e=(0,l.Z)((0,i.Z)().mark((function e(){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.a0)(n);case 2:s=e.sent,d(s);case 4:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}n&&function(){e.apply(this,arguments)}()}),[n]);for(var u=null===c||void 0===c?void 0:c.map((function(e){return(0,v.jsxs)("div",{className:"img-container",children:[(0,v.jsx)("div",{className:"el"}),(0,v.jsxs)("div",{className:"photo",children:[(0,v.jsx)("div",{className:"over",children:"  "}),(0,v.jsxs)("div",{className:"icons",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("svg",{style:{fill:"white"},"aria-label":"Unlike",className:"_ab6-",color:"#ed4956",fill:"#ed4956",height:"24",role:"img",viewBox:"0 0 48 48",width:"24",children:(0,v.jsx)("path",{d:"M34.6 3.1c-4.5 0-7.9 \r 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 \r 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 \r 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}),(0,v.jsx)("span",{children:null===e||void 0===e?void 0:e.likes.length})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("svg",{style:{color:"white"},"aria-label":"Comment",className:"_ab6-",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:(0,v.jsx)("path",{d:"M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2"})}),(0,v.jsx)("span",{children:null===e||void 0===e?void 0:e.comments})]})]}),(0,v.jsx)("img",{src:"https://raw.githubusercontent.com/Amr-Zain/React-Instagram-Clone/master/public".concat(null===e||void 0===e?void 0:e.imageSrc),alt:"userimg"})]})]},null===e||void 0===e?void 0:e.dicId)})),h=[],f=0;f<(null===c||void 0===c?void 0:c.length);f+=3){var m=(0,v.jsxs)("div",{className:"photos-row",children:[u[f],u[f+1],u[f+2]]},x());h.push(m)}return(0,v.jsx)("div",{className:"profile-photos",children:h.length<1?(0,v.jsx)("p",{className:"no-photos",children:"No Posts Yet"}):h})};var p=function(){var e=(0,h.UO)().username,n=a.useState(null),s=(0,t.Z)(n,2),c=s[0],d=s[1],x=(0,h.s0)();return a.useEffect((function(){function n(){return(n=(0,l.Z)((0,i.Z)().mark((function n(){var s;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.dQ)(e);case 2:if(!(s=n.sent)){n.next=7;break}d(s),n.next=9;break;case 7:return x(u.Hi),n.abrupt("return");case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}e&&function(){n.apply(this,arguments)}()}),[e]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"profile",children:(0,v.jsxs)("div",{className:"profile-container",children:[(0,v.jsx)(f,(0,r.Z)({},c)),(0,v.jsx)(m,{userId:null===c||void 0===c?void 0:c.userId})]})})})}}}]);
//# sourceMappingURL=326.2285e3ce.chunk.js.map