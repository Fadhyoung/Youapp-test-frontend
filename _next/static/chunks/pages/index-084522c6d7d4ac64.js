(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(1479)}])},66:function(e,t,s){"use strict";s.d(t,{oH:function(){return EyeGoldIcon},v8:function(){return PlusGoldIcon}});var l=s(5893);let PlusGoldIcon=e=>(0,l.jsxs)("svg",{className:"".concat(e.className||""),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"url(#textGoldGradient)",children:[(0,l.jsx)("defs",{children:(0,l.jsxs)("linearGradient",{id:"textGoldGradient",gradientTransform:"rotate(90)",children:[(0,l.jsx)("stop",{offset:"0%",stopColor:"#94783E"}),(0,l.jsx)("stop",{offset:"20%",stopColor:"#F3EDA6"}),(0,l.jsx)("stop",{offset:"40%",stopColor:"#F8FAE5"}),(0,l.jsx)("stop",{offset:"60%",stopColor:"#FFE2BE"}),(0,l.jsx)("stop",{offset:"80%",stopColor:"#D5BE88"}),(0,l.jsx)("stop",{offset:"100%",stopColor:"#F8FAE5"})]})}),(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})]}),EyeGoldIcon=e=>(0,l.jsxs)("svg",{className:"".concat(e.className||""),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"url(#textGoldGradient)",children:[(0,l.jsx)("defs",{children:(0,l.jsxs)("linearGradient",{id:"textGoldGradient",gradientTransform:"rotate(90)",children:[(0,l.jsx)("stop",{offset:"0%",stopColor:"#94783E"}),(0,l.jsx)("stop",{offset:"20%",stopColor:"#F3EDA6"}),(0,l.jsx)("stop",{offset:"40%",stopColor:"#F8FAE5"}),(0,l.jsx)("stop",{offset:"60%",stopColor:"#FFE2BE"}),(0,l.jsx)("stop",{offset:"80%",stopColor:"#D5BE88"}),(0,l.jsx)("stop",{offset:"100%",stopColor:"#F8FAE5"})]})}),(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"}),(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})]});t.ZP=e=>(0,l.jsxs)("svg",{className:"".concat(e.className||""),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"url(#textGoldGradient)",children:[(0,l.jsx)("defs",{children:(0,l.jsxs)("linearGradient",{id:"textGoldGradient",gradientTransform:"rotate(90)",children:[(0,l.jsx)("stop",{offset:"0%",stopColor:"#94783E"}),(0,l.jsx)("stop",{offset:"20%",stopColor:"#F3EDA6"}),(0,l.jsx)("stop",{offset:"40%",stopColor:"#F8FAE5"}),(0,l.jsx)("stop",{offset:"60%",stopColor:"#FFE2BE"}),(0,l.jsx)("stop",{offset:"80%",stopColor:"#D5BE88"}),(0,l.jsx)("stop",{offset:"100%",stopColor:"#F8FAE5"})]})}),(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"})]})},1479:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Home}});var l=s(5893),r=s(5233),a=s(7294),n=s(1163),o=s(5697),i=s(2575),d=s(66);function Home(){let{Profile:e,Edit:t,DisplayName:s,Birthday:c,Horoscope:x,Zodiac:h,Height:u,Weight:p,Interests:f,handleEditProfile:m,syncProfile:w}=(0,i.U)(),[j,g]=(0,a.useState)(!1),[N,v]=(0,a.useState)(null),[b,C]=(0,a.useState)(""),[k,y]=(0,a.useState)(""),[E,G]=(0,a.useState)(""),[L,F]=(0,a.useState)("--"),[S,D]=(0,a.useState)("--"),[A,B]=(0,a.useState)("cm"),[M,_]=(0,a.useState)(0),[P,U]=(0,a.useState)(0),[Z,I]=(0,a.useState)([""]),[H,T]=(0,a.useState)(!1),W=(0,n.useRouter)(),{setBackground:O}=(0,r.h)();(0,a.useEffect)(()=>{O("bg-secondary")},[O]),(0,a.useEffect)(()=>{try{console.log("trying fetch data","the profil is",e),g(e),T(t),C(s),G(c),F(x),D(h),_(u),U(p),I(f),console.log("succedd fetch data",s,c)}catch(e){console.error("Failed to fetch profile data:",e)}},[e,t,s,c,x,h,u,p,f,w]);let[R,z]=(0,a.useState)(!1),toggleGenderDropdown=()=>z(!R),handleGenderSelect=e=>{y(e),z(!1)},getZodiacSign=e=>{let t=new Date(e).getMonth()+1,s=new Date(e).getDate();if(3===t&&s>=21||4===t&&s<=19)return"Aries";if(4===t&&s>=20||5===t&&s<=20)return"Taurus";if(5===t&&s>=21||6===t&&s<=20)return"Gemini";if(6===t&&s>=21||7===t&&s<=22)return"Cancer";if(7===t&&s>=23||8===t&&s<=22)return"Leo";if(8===t&&s>=23||9===t&&s<=22)return"Virgo";if(9===t&&s>=23||10===t&&s<=22)return"Libra";else if(10===t&&s>=23||11===t&&s<=21)return"Scorpio";else if(11===t&&s>=22||12===t&&s<=21)return"Sagittarius";else if(12===t&&s>=22||1===t&&s<=19)return"Capricorn";else if(1===t&&s>=20||2===t&&s<=18)return"Aquarius";else if(2===t&&s>=19||3===t&&s<=20)return"Pisces";return""},getChineseZodiac=e=>["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat","Monkey","Rooster","Dog","Pig"][(e-1900)%12],handleCreateProfile=async e=>{try{await (0,o.ED)({displayName:b,birthday:E,height:M,weight:P,interest:Z}),await w(),await W.push("/"),console.log("pushed")}catch(e){console.error("Create profile failed",e)}},handleUpdateProfile=async e=>{try{await (0,o.ck)({displayName:b,birthday:E,height:M,weight:P,interest:Z}),m(),await w(),await W.push("/"),console.log("pushed")}catch(e){console.error("Update profile failed",e)}};return(0,l.jsxs)("div",{className:"p-2 flex flex-col gap-6",children:[(0,l.jsxs)("div",{className:"w-full relative rounded-xl h-60 foreground2",children:[N?(0,l.jsx)("img",{src:N,alt:"Uploaded Image",className:"h-full w-full object-cover"}):(0,l.jsx)("div",{}),(0,l.jsx)("span",{className:"p-4 absolute bottom-0 text-white font-semibold",children:b})]}),(0,l.jsx)("div",{className:"px-8 py-6 m-auto w-full flex flex-col gap-8 rounded-xl foreground3",children:H?(0,l.jsxs)("div",{className:"w-full flex flex-col gap-6 rounded-xl foreground3",children:[(0,l.jsxs)("div",{className:"w-full mb-5 flex justify-between",children:[(0,l.jsx)("h1",{className:"text-white",children:"About"}),(0,l.jsx)("button",{className:"text-gold2",onClick:e=>{j?handleUpdateProfile():handleCreateProfile()},children:"Link & Update"})]}),(0,l.jsxs)("div",{className:"flex gap-8 items-center",children:[(0,l.jsx)("button",{className:"p-5 rounded-3xl bg-white-8",onClick:()=>document.getElementById("imageUpload").click(),children:(0,l.jsx)(d.v8,{className:"size-10 hover:scale-150"})}),(0,l.jsx)("input",{id:"imageUpload",type:"file",accept:"image/*",style:{display:"none"},onChange:e=>{let t=e.target.files[0];if(t){let e=URL.createObjectURL(t);v(e),console.log("Uploaded file:",t)}}}),(0,l.jsx)("h1",{className:"text-white",children:"Add Image"})]}),(0,l.jsxs)("div",{className:"w-full h-auto flex flex-col gap-3",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center",children:[(0,l.jsx)("h3",{className:"text-sm text-white-33",children:"Display Name:"}),(0,l.jsx)("div",{className:"w-3/5 col-span-2 rounded-xl border-2 border-white-22 bg-white-6",children:(0,l.jsx)("input",{className:"w-full p-3 text-sm text-end text-white-30 bg-transparent",type:"name",value:b||"",onChange:e=>C(e.target.value),placeholder:"Enter Name"})})]}),(0,l.jsxs)("div",{className:"relative flex justify-between items-center",children:[(0,l.jsx)("h3",{className:"text-sm text-white-33",children:"Gender:"}),(0,l.jsxs)("div",{className:"w-3/5 flex flex-col gap-2",children:[(0,l.jsxs)("div",{className:"col-span-2 flex items-center rounded-xl border-2 border-white-22 bg-white-6",children:[(0,l.jsx)("input",{className:"w-full p-3 text-sm text-end text-white-30 bg-transparent",onChange:toggleGenderDropdown,value:k,type:"text",placeholder:"Select Gender"}),(0,l.jsx)("svg",{className:"size-6 mr-4",onClick:toggleGenderDropdown,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})]}),R&&(0,l.jsxs)("div",{className:"flex flex-col gap-2 rounded-xl border-2 border-white-22 text-white-30 bg-white-6",children:[(0,l.jsx)("div",{className:"p-3 text-sm text-end cursor-pointer hover:bg-gray-200",onClick:()=>handleGenderSelect("Male"),children:"Male"}),(0,l.jsx)("div",{className:"p-3 text-sm text-end cursor-pointer hover:bg-gray-200",onClick:()=>handleGenderSelect("Female"),children:"Female"})]})]})]}),(0,l.jsxs)("div",{className:"flex justify-between items-center",children:[(0,l.jsx)("h3",{className:"text-sm text-white-33",children:"Birthday:"}),(0,l.jsx)("div",{className:"w-3/5 col-span-2 rounded-xl border-2 border-white-22 bg-white-6",children:(0,l.jsx)("input",{className:"w-full p-3 text-sm text-end text-white-30 bg-transparent",onChange:e=>{let t=e.target.value;G(t);let s=getZodiacSign(t);F(s);let l=new Date(t).getFullYear(),r=getChineseZodiac(l);D(r)},value:E||" ",type:"date",placeholder:"DD MM YY"})})]}),(0,l.jsxs)("div",{className:"flex justify-between items-center",children:[(0,l.jsx)("h3",{className:"text-sm text-white-33",children:"Horoscope:"}),(0,l.jsx)("div",{className:"w-3/5 flex flex-col gap-2",children:(0,l.jsx)("div",{className:"col-span-2 flex items-center rounded-xl border-2 border-white-22 bg-white-6",children:(0,l.jsx)("input",{className:"w-full p-3 text-sm text-end text-white-30 bg-transparent",readOnly:!0,value:L,placeholder:"--"})})})]}),(0,l.jsxs)("div",{className:"flex justify-between items-center",children:[(0,l.jsx)("h3",{className:"text-sm text-white-33",children:"Zodiac:"}),(0,l.jsx)("div",{className:"w-3/5 flex flex-col gap-2",children:(0,l.jsx)("div",{className:"col-span-2 flex items-center rounded-xl border-2 border-white-22 bg-white-6",children:(0,l.jsx)("input",{className:"w-full p-3 text-sm text-end text-white-30 bg-transparent",readOnly:!0,value:S||"",placeholder:"--"})})})]}),(0,l.jsxs)("div",{className:"flex justify-between items-center",children:[(0,l.jsx)("h3",{className:"text-sm text-white-33",children:"Height:"}),(0,l.jsxs)("div",{className:"w-3/5 col-span-2 flex items-center rounded-xl border-2 border-white-22 bg-white-6",children:[(0,l.jsx)("input",{className:"w-full p-3 text-sm text-end text-white-30 bg-transparent",type:"number",value:M||"",onChange:e=>_(Number(e.target.value)),placeholder:"0"}),(0,l.jsx)("label",{className:"w-2/5 p-3 text-sm text-center text-white-30 cursor-pointer rounded-xl bg-white-8",onClick:()=>{B(e=>"cm"===e?"inches":"cm")},children:A})]})]}),(0,l.jsxs)("div",{className:"flex justify-between items-center",children:[(0,l.jsx)("h3",{className:"text-sm text-white-33",children:"Weight:"}),(0,l.jsxs)("div",{className:"w-3/5 col-span-2 flex items-center rounded-xl border-2 border-white-22 bg-white-6",children:[(0,l.jsx)("input",{className:"w-full p-3 text-sm text-end text-white-30 bg-transparent",type:"number",value:P||"",onChange:e=>U(Number(e.target.value)),placeholder:"0"}),(0,l.jsx)("label",{className:"w-2/5 p-3 text-sm text-center text-white-30 cursor-pointer rounded-xl bg-white-8",children:"Kg"})]})]})]})]}):(0,l.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)("h1",{className:"text-white",children:"About"}),(0,l.jsx)("button",{className:"text-white",onClick:()=>{!0==H?(m(),T(t)):(T(!0),m())},children:(0,l.jsx)("svg",{className:"size-6 underline",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"})})})]}),j?(0,l.jsxs)("div",{className:"flex flex-col gap-3 text-white-33",children:[(0,l.jsxs)("div",{children:["Birthday: ",(0,l.jsx)("span",{className:"text-white",children:E})," "]}),(0,l.jsxs)("div",{children:["Horoscope: ",(0,l.jsx)("span",{className:"text-white",children:L})," "]}),(0,l.jsxs)("div",{children:["zodiac: ",(0,l.jsx)("span",{className:"text-white",children:S})," "]}),(0,l.jsxs)("div",{children:["height: ",(0,l.jsx)("span",{className:"text-white",children:M})," ",A," "]}),(0,l.jsxs)("div",{children:["weight: ",(0,l.jsx)("span",{className:"text-white",children:P})," kg "]})]}):(0,l.jsx)("div",{className:"text-white-52",children:(0,l.jsx)("p",{children:"Add in your about to help others know yout better"})})]})}),(0,l.jsxs)("div",{className:"px-4 py-6 m-auto w-full flex flex-col gap-8 rounded-xl foreground3",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)("h1",{className:"text-white",children:"Interest"}),(0,l.jsx)("button",{className:"text-white",onClick:()=>{event.preventDefault(),W.push("/interest-edit")},children:(0,l.jsx)("svg",{className:"size-6 underline",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"})})})]}),j?(0,l.jsx)("div",{className:"flex gap-2 flex-wrap",children:Z.map((e,t)=>(0,l.jsx)("div",{className:"px-4 py-2 rounded-md text-white bg-white-8",children:e},t))}):(0,l.jsx)("div",{className:"text-white-52",children:(0,l.jsx)("p",{children:"Add in your interest to find a better match"})})]})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);