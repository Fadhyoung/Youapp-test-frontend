(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[761],{8843:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interest-edit",function(){return l(980)}])},980:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return Home}});var s=l(5893),n=l(5233),r=l(7294),i=l(1163),a=l(1977),o=l(2575);function Home(){let[e,t]=(0,r.useState)([""]),{Interests:l,syncInterests:u}=(0,o.U)(),c=(0,i.useRouter)(),{setBackground:d}=(0,n.h)();(0,r.useEffect)(()=>{d("bg-default"),t(l)},[d,l]);let deleteInterest=e=>{t(t=>t.filter((t,l)=>l!==e))};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{interestsSave:()=>{u({interests:e}),c.push("/")}}),(0,s.jsxs)("div",{className:"p-8 flex flex-col gap-6 overflow-scroll",children:[(0,s.jsx)("p",{className:"text-gold2 font-medium",children:"Tell everyone about yourself"}),(0,s.jsx)("h1",{className:"text-xl font-black text-white",children:"What interest you?"}),(0,s.jsxs)("div",{className:"w-full p-6 flex flex-col gap-6 rounded-xl bg-white-6 mt-5",children:[(0,s.jsx)("input",{className:"w-full pl-5 bg-transparent",type:"text",onKeyDown:e=>{if("Enter"===e.key&&""!==e.target.value.trim()){let l=e.target.value.trim();t(e=>[...e,l]),e.target.value=""}},placeholder:"Type your interest here"}),(0,s.jsx)("div",{className:"flex gap-2 flex-wrap",children:e.map((e,t)=>(0,s.jsxs)("div",{className:"px-4 py-2 flex gap-2 rounded-md text-white bg-white-8",children:[e,(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",onClick:()=>deleteInterest(t),className:"size-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})]},t))})]})]})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8843)}),_N_E=e.O()}]);