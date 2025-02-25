"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60535],{59758:(e,s,t)=>{t.d(s,{w3:()=>h,xv:()=>N,v9:()=>p,w_:()=>f,Xn:()=>j});var n=t(78267),l=t(99367),a=(0,t(37185).A)("outline","refresh","IconRefresh",[["path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4",key:"svg-0"}],["path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",key:"svg-1"}]]),i=t(60720),o=t(63696),r=t(36049),d=t(86231),c=t(47371),x=t(33694),u=t(85981),m=t(62540);function h({address:e}){const s=(0,x.MP)({address:e});return(0,m.jsx)("div",{children:(0,m.jsxs)("h1",{className:"text-5xl font-bold cursor-pointer",onClick:()=>s.refetch(),children:[s.data?(0,m.jsx)(b,{balance:s.data}):"..."," SOL"]})})}function p({address:e}){var s,t;const l=(0,n.v)(),{cluster:a}=(0,d.Gx)(),[i,r]=(0,o.useState)(!1),[c,x]=(0,o.useState)(!1),[u,h]=(0,o.useState)(!1);return(0,m.jsxs)("div",{children:[(0,m.jsx)(v,{hide:()=>r(!1),address:e,show:i}),(0,m.jsx)(g,{address:e,show:c,hide:()=>x(!1)}),(0,m.jsx)(w,{address:e,show:u,hide:()=>h(!1)}),(0,m.jsxs)("div",{className:"space-x-2",children:[(0,m.jsx)("button",{disabled:null==(s=a.network)?void 0:s.includes("mainnet"),className:"btn btn-xs lg:btn-md btn-outline",onClick:()=>r(!0),children:"Airdrop"}),(0,m.jsx)("button",{disabled:(null==(t=l.publicKey)?void 0:t.toString())!==e.toString(),className:"btn btn-xs lg:btn-md btn-outline",onClick:()=>h(!0),children:"Send"}),(0,m.jsx)("button",{className:"btn btn-xs lg:btn-md btn-outline",onClick:()=>x(!0),children:"Receive"})]})]})}function f({address:e}){var s,t,n;const[l,d]=(0,o.useState)(!1),u=(0,x.$d)({address:e}),h=(0,i.jE)(),p=(0,o.useMemo)((()=>{var e;return l?u.data:null==(e=u.data)?void 0:e.slice(0,5)}),[u.data,l]);return(0,m.jsxs)("div",{className:"space-y-2",children:[(0,m.jsx)("div",{className:"justify-between",children:(0,m.jsxs)("div",{className:"flex justify-between",children:[(0,m.jsx)("h2",{className:"text-2xl font-bold",children:"Token Accounts"}),(0,m.jsx)("div",{className:"space-x-2",children:u.isLoading?(0,m.jsx)("span",{className:"loading loading-spinner"}):(0,m.jsx)("button",{className:"btn btn-sm btn-outline",onClick:async()=>{await u.refetch(),await h.invalidateQueries({queryKey:["getTokenAccountBalance"]})},children:(0,m.jsx)(a,{size:16})})})]})}),u.isError&&(0,m.jsxs)("pre",{className:"alert alert-error",children:["Error: ",null==(s=u.error)?void 0:s.message.toString()]}),u.isSuccess&&(0,m.jsx)("div",{children:0===u.data.length?(0,m.jsx)("div",{children:"No token accounts found."}):(0,m.jsxs)("table",{className:"table border-4 rounded-lg border-separate border-base-300",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Public Key"}),(0,m.jsx)("th",{children:"Mint"}),(0,m.jsx)("th",{className:"text-right",children:"Balance"})]})}),(0,m.jsxs)("tbody",{children:[null==p?void 0:p.map((({account:e,pubkey:s})=>(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:(0,m.jsx)("div",{className:"flex space-x-2",children:(0,m.jsx)("span",{className:"font-mono",children:(0,m.jsx)(c.wq,{label:(0,r.qq)(s.toString()),path:`account/${s.toString()}`})})})}),(0,m.jsx)("td",{children:(0,m.jsx)("div",{className:"flex space-x-2",children:(0,m.jsx)("span",{className:"font-mono",children:(0,m.jsx)(c.wq,{label:(0,r.qq)(e.data.parsed.info.mint),path:`account/${e.data.parsed.info.mint.toString()}`})})})}),(0,m.jsx)("td",{className:"text-right",children:(0,m.jsx)("span",{className:"font-mono",children:e.data.parsed.info.tokenAmount.uiAmount})})]},s.toString()))),(null!=(t=null==(n=u.data)?void 0:n.length)?t:0)>5&&(0,m.jsx)("tr",{children:(0,m.jsx)("td",{colSpan:4,className:"text-center",children:(0,m.jsx)("button",{className:"btn btn-xs btn-outline",onClick:()=>d(!l),children:l?"Show Less":"Show All"})})})]})]})})]})}function j({address:e}){var s,t,n;const l=(0,x.ry)({address:e}),[i,d]=(0,o.useState)(!1),u=(0,o.useMemo)((()=>{var e;return i?l.data:null==(e=l.data)?void 0:e.slice(0,5)}),[l.data,i]);return(0,m.jsxs)("div",{className:"space-y-2",children:[(0,m.jsxs)("div",{className:"flex justify-between",children:[(0,m.jsx)("h2",{className:"text-2xl font-bold",children:"Transaction History"}),(0,m.jsx)("div",{className:"space-x-2",children:l.isLoading?(0,m.jsx)("span",{className:"loading loading-spinner"}):(0,m.jsx)("button",{className:"btn btn-sm btn-outline",onClick:()=>l.refetch(),children:(0,m.jsx)(a,{size:16})})})]}),l.isError&&(0,m.jsxs)("pre",{className:"alert alert-error",children:["Error: ",null==(s=l.error)?void 0:s.message.toString()]}),l.isSuccess&&(0,m.jsx)("div",{children:0===l.data.length?(0,m.jsx)("div",{children:"No transactions found."}):(0,m.jsxs)("table",{className:"table border-4 rounded-lg border-separate border-base-300",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Signature"}),(0,m.jsx)("th",{className:"text-right",children:"Slot"}),(0,m.jsx)("th",{children:"Block Time"}),(0,m.jsx)("th",{className:"text-right",children:"Status"})]})}),(0,m.jsxs)("tbody",{children:[null==u?void 0:u.map((e=>{var s;return(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{className:"font-mono",children:(0,m.jsx)(c.wq,{path:`tx/${e.signature}`,label:(0,r.qq)(e.signature,8)})}),(0,m.jsx)("td",{className:"font-mono text-right",children:(0,m.jsx)(c.wq,{path:`block/${e.slot}`,label:e.slot.toString()})}),(0,m.jsx)("td",{children:new Date(1e3*(null!=(s=e.blockTime)?s:0)).toISOString()}),(0,m.jsx)("td",{className:"text-right",children:e.err?(0,m.jsx)("div",{className:"badge badge-error",title:JSON.stringify(e.err),children:"Failed"}):(0,m.jsx)("div",{className:"badge badge-success",children:"Success"})})]},e.signature)})),(null!=(t=null==(n=l.data)?void 0:n.length)?t:0)>5&&(0,m.jsx)("tr",{children:(0,m.jsx)("td",{colSpan:4,className:"text-center",children:(0,m.jsx)("button",{className:"btn btn-xs btn-outline",onClick:()=>d(!i),children:i?"Show Less":"Show All"})})})]})]})})]})}function b({balance:e}){return(0,m.jsx)("span",{children:Math.round(e/l.LAMPORTS_PER_SOL*1e5)/1e5})}function g({hide:e,show:s,address:t}){return(0,m.jsxs)(r.Vm,{title:"Receive",hide:e,show:s,children:[(0,m.jsx)("p",{children:"Receive assets by sending them to your public key:"}),(0,m.jsx)("code",{children:t.toString()})]})}function v({hide:e,show:s,address:t}){const n=(0,x.u1)({address:t}),[l,a]=(0,o.useState)("2");return(0,m.jsx)(r.Vm,{hide:e,show:s,title:"Airdrop",submitDisabled:!l||n.isPending,submitLabel:"Request Airdrop",submit:()=>n.mutateAsync(parseFloat(l)).then((()=>e())),children:(0,m.jsx)("input",{disabled:n.isPending,type:"number",step:"any",min:"1",placeholder:"Amount",className:"input input-bordered w-full",value:l,onChange:e=>a(e.target.value)})})}function w({hide:e,show:s,address:t}){const a=(0,n.v)(),i=(0,x.bQ)({address:t}),[d,c]=(0,o.useState)(""),[u,h]=(0,o.useState)("1");return t&&a.sendTransaction?(0,m.jsxs)(r.Vm,{hide:e,show:s,title:"Send",submitDisabled:!d||!u||i.isPending,submitLabel:"Send",submit:()=>{i.mutateAsync({destination:new l.PublicKey(d),amount:parseFloat(u)}).then((()=>e()))},children:[(0,m.jsx)("input",{disabled:i.isPending,type:"text",placeholder:"Destination",className:"input input-bordered w-full",value:d,onChange:e=>c(e.target.value)}),(0,m.jsx)("input",{disabled:i.isPending,type:"number",step:"any",min:"1",placeholder:"Amount",className:"input input-bordered w-full",value:u,onChange:e=>h(e.target.value)})]}):(0,m.jsx)("div",{children:"Wallet not connected"})}function N({mintAddress:e,clickCallback:s}){const t=(0,x.F7)(),n=(0,u.NA)();let l="...";t.tokens&&(l=t.tokens[e.toString()]&&t.tokens[e.toString()].amountAsFloat?t.tokens[e.toString()].amountAsFloat:"0");const a=s&&t.tokens;return(0,m.jsxs)("span",{className:a?"cursor-pointer":"",onClick:()=>{a&&s(l)},children:[l," ",n.getSymbolByMintAddress(e.toString())]})}},60535:(e,s,t)=>{t.r(s),t.d(s,{default:()=>M});var n=t(63696),l=t(29166),a=t(36049),i=t(85981),o=t(83393),r=t(47371),d=t(62540);function c({swap:e}){const s=(0,i.NA)();return(0,d.jsxs)("div",{className:"flex flex-row carousel-center carousel-item items-center gap-2",children:[(0,d.jsx)(a.H8,{user:e.user}),(0,d.jsx)("div",{className:"text-[14px] font-BelanosimaSemiBold text-[#F0F7FA]",children:(0,a.qq)(e.user.name)}),(0,d.jsx)("img",{src:s.getTokenByMintAddress(e.mintAddress).logoURI,className:"w-8 h-8 rounded-full object-cover relative z-10",alt:"sell"}),(0,d.jsxs)("div",{className:"text-[14px] font-BelanosimaSemiBold text-[#5F7385]",children:[e.result," ",e.amountAsFloat," ",s.getTokenByMintAddress(e.mintAddress).symbol," on ",e.pair,"\xa0",e.transaction&&(0,d.jsx)(r.wq,{path:`tx/${e.transaction.signature}`,className:""})]})]})}function x(){const e=(0,l._)(),s=(0,o.y)();return(0,d.jsx)("div",{className:"carousel carousel-center h-12 overflow-hidden w-full px-5 lg:max-w-4xl mx-auto",children:e.tickerVisible&&(0,d.jsx)("div",{className:"carousel-inner flex animate-scroll hover:[animation-play-state:paused] w-full gap-10 justify-items-center",children:s.tickerItems.map(((e,s)=>(0,d.jsx)(c,{swap:e},s)))})})}var u=t(45768),m=t(63530),h=t(78267),p=t(59758),f=t(28358),j=t(67435),b=t(33694);function g({hideModal:e,show:s,onSelectCallback:t,onlyHouseToken:l=!1}){const o=(0,i.NA)(),r=(0,b.F7)(),[c,x]=(0,n.useState)(""),u=(l?i.Sf:o.allTokens).filter((e=>e.name&&e.name.toLowerCase().includes(c.toLowerCase())||e.symbol&&e.symbol.toLowerCase().includes(c.toLowerCase()))),m=u.filter((e=>!!(r.tokens&&e.mintAddress in r.tokens&&+r.tokens[e.mintAddress].amountAsFloat>0))),h=u.filter((e=>!m.includes(e)));function j(s){t(s),x(""),e()}return(0,d.jsxs)(a.Vm,{title:"Select a token",hide:e,show:s,children:[(0,d.jsxs)("label",{className:"input input-bordered bg-[#16171A] flex items-center gap-2",children:[(0,d.jsx)("input",{type:"text",className:"grow",placeholder:"Search",value:c,onChange:e=>x(e.target.value),onKeyDown:e=>{"Enter"===e.key&&1===u.length&&(e.stopPropagation(),setTimeout((()=>{j(u[0].mintAddress)}),1))}}),!!c&&(0,d.jsx)("span",{className:"badge cursor-pointer",onClick:()=>x(""),children:"x"}),(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"h-4 w-4 opacity-70",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",clipRule:"evenodd"})})]}),(0,d.jsxs)("div",{className:"min-h-96",children:[0===h.length&&0===m.length&&(0,d.jsx)("span",{children:"No token found"}),m.length>0&&(0,d.jsxs)("table",{className:"table",children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:(0,d.jsx)("th",{children:(0,d.jsx)("span",{className:"text-[#F0F7FA]",children:"Your Tokens"})})})}),(0,d.jsx)("tbody",{children:m.map((e=>{const s=o.getStatsByMintAddress(e.mintAddress);return(0,d.jsxs)("tr",{className:"hover:cursor-pointer hover:bg-[#20295D]",onClick:()=>{j(e.mintAddress)},children:[(0,d.jsx)("td",{children:(0,d.jsxs)("div",{className:"flex items-center gap-3",children:[(0,d.jsx)("div",{className:"avatar",children:(0,d.jsx)("div",{className:"mask mask-squircle h-12 w-12",children:(0,d.jsx)("img",{src:e.logoURI,alt:`${e.symbol} logo`})})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"font-bold",children:e.name}),(0,d.jsxs)("div",{className:"text-sm opacity-50",children:[(0,d.jsx)(p.xv,{mintAddress:e.mintAddress})," ",(0,a.qq)(e.mintAddress)]})]})]})}),(0,d.jsx)("td",{children:s&&s.volumeInUSD&&(0,d.jsx)("span",{className:"badge badge-ghost badge-sm",children:(0,f.az)(s.volumeInUSD)})})]},e.symbol)}))})]}),h.length>0&&(0,d.jsxs)("table",{className:"table",children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:(0,d.jsx)("th",{children:(0,d.jsx)("span",{className:"text-[#F0F7FA]",children:"All other Tokens"})})})}),(0,d.jsx)("tbody",{children:h.map((e=>{const s=o.getStatsByMintAddress(e.mintAddress);return(0,d.jsxs)("tr",{className:"hover:cursor-pointer hover:bg-[#20295D]",onClick:()=>{j(e.mintAddress)},children:[(0,d.jsx)("td",{children:(0,d.jsxs)("div",{className:"flex items-center gap-3",children:[(0,d.jsx)("div",{className:"avatar",children:(0,d.jsx)("div",{className:"mask mask-squircle h-12 w-12",children:(0,d.jsx)("img",{src:e.logoURI,alt:`${e.symbol} logo`})})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"font-bold",children:e.name}),(0,d.jsxs)("div",{className:"text-sm opacity-50",children:[e.symbol," ",(0,a.qq)(e.mintAddress)]})]})]})}),(0,d.jsx)("td",{children:s&&s.volumeInUSD&&(0,d.jsx)("span",{className:"badge badge-ghost badge-sm",children:(0,f.az)(s.volumeInUSD)})})]},e.mintAddress)}))})]}),l&&(0,d.jsx)("span",{children:"LuckySwap has reserves in the so-called house tokens, which are used to pay out winnings. Thus, either one of the tokens that you are swapping must be a house token and the above selection is limited to those."})]})]})}var v=t(17124);function w(e){const s=[{name:"Your odds",value:e.oddsAsFloat.toFixed(1),icon:(0,d.jsx)(v.Tw,{})},{name:"Your chance to win",value:e.probability+"%",icon:(0,d.jsx)(v.R3,{})},{name:"You send",value:e.sendAmount+" "+e.sendSymbol,icon:(0,d.jsx)(v.qx,{})},{name:"Would be swapped to",value:(e.swapOutputAmountAsFloat||"")+" "+e.receiveSymbol,icon:(0,d.jsx)(v.vJ,{})},{name:"You can win",value:e.receiveAmountAsFloat+" "+e.receiveSymbol,icon:(0,d.jsx)(v.f,{})}],t=(0,l._)();return(0,d.jsxs)("div",{className:"flex flex-col gap-5 items-start -mt-6 z-10 w-full",children:[(0,d.jsx)("div",{onClick:()=>t.setSwapInfoVisible(!t.swapInfoVisible),className:"flex items-center ml-6 gap-2 custom-gradient p-px rounded-[40px] h-10 cursor-pointer select-none",children:(0,d.jsxs)("div",{className:"bg-[#232429] shadow-custom-inset flex items-center gap-2 rounded-[40px] px-4 h-full",children:[(0,d.jsx)("span",{className:"flex items-center justify-center "+(t.swapInfoVisible?"rotate-180":""),children:(0,d.jsx)(v.ZL,{})}),(0,d.jsx)("span",{className:"text-sm font-semibold font-BelanosimaSemiBold text-[#607583]",children:"Info"})]})}),t.swapInfoVisible&&(0,d.jsx)("div",{className:"flex flex-col gap-2 w-full px-6",children:s&&s.map(((e,s)=>(0,d.jsxs)("div",{className:"flex items-center justify-between py-2 w-full",children:[(0,d.jsxs)("div",{className:"flex items-center gap-2",children:[e.icon,(0,d.jsx)("span",{className:"text-sm font-semibold font-BelanosimaSemiBold text-[#F0F7FA]",children:e.name})]}),(0,d.jsx)("span",{className:"text-sm font-semibold font-BelanosimaSemiBold text-[#F0F7FA]",children:e.value})]},s)))})]})}var N=t(30513),y=t(82358);function A({wallet:e,name:s,amountAsFloat:t,amountOnChange:n,token:l,onChangeToken:a,canWinAmountAsFloat:i=!1,waitingForNumbers:o=!1}){const r="You can win"===s,c=r&&!!n,x="..."===l.symbol;return(0,d.jsxs)("div",{className:"bg-[url('/assets/image/subtract.png')] w-full bg-no-repeat bg-full h-[144px] flex flex-col items-start justify-between relative pt-[20px] pl-[24px]",children:[(0,d.jsx)("div",{className:"flex items-center absolute top-[4px] right-0 justify-center custom-gradient p-px rounded-full h-14",children:(0,d.jsx)("div",{role:"button",onClick:a,className:(x?"bg-[#20295D] hover:bg-[#162060]":"bg-[#232429] hover:bg-[#20295D]")+" shadow-custom-inset font-BelanosimaSemiBold flex items-center h-full rounded-full pl-4 pr-4 py-2 justify-center text-[#607583] font-semibold text-xs tracking-[0.02em]",children:(0,d.jsx)("div",{className:"min-w-[108px]",children:(0,d.jsxs)("div",{className:"active:scale-[0.99] transition-all duration-100 flex gap-3 items-center justify-between",children:[(0,d.jsxs)("div",{className:"flex items-center gap-3",children:[!x&&(0,d.jsxs)("div",{className:"relative w-10 h-10",children:[(0,d.jsx)("div",{className:"absolute inset-0 w-full h-full bg-green-300 blur-2xl z-0"}),(0,d.jsx)("img",{src:l.logoURI,className:"w-full h-full rounded-full object-cover relative z-10",alt:"sell"})]}),(0,d.jsx)("div",{className:"text-xs font-BelanosimaSemiBold text-[#F0F7FA]",children:x?"Select Token":l.symbol})]}),(0,d.jsx)(v.ZL,{})]})})})}),(0,d.jsxs)("div",{className:"text-[14px] flex flex-col sm:flex-row font-BelanosimaSemiBold text-[#F0F7FA] w-full",children:[s," ",e.publicKey&&(0,d.jsxs)("div",{className:"sm:w-[14rem] sm:text-right text-[13px] font-BelanosimaRegular",children:["You have"," ",(0,d.jsx)(p.xv,{mintAddress:l.mintAddress,clickCallback:r?void 0:e=>n({target:{value:e.toString()}})})]})]}),(0,d.jsxs)("div",{className:"flex items-center justify-between pr-6 w-full",children:[(0,d.jsxs)("div",{className:"flex items-center gap-1 pb-2",children:[o&&(0,d.jsx)("span",{className:"h-[72px] text-[64px] text-[#F0F7FA] loading loading-dots loading-lg"}),!o&&(0,d.jsx)("input",{type:"text",autoFocus:!r,value:r?i:t,placeholder:"0.0",disabled:r,contentEditable:c,className:"focus:outline-none bg-transparent w-64 text-[64px] leading-[72px] font-BelanosimaRegular text-[#F0F7FA]",onChange:n})]}),r&&!!i&&(0,d.jsxs)("div",{className:"flex flex-col items-end justify-end",children:[(0,d.jsx)("span",{className:"text-sm font-BelanosimaSemiBold text-[#F0F7FA] font-semibold",children:"Swap Return"}),(0,d.jsx)("span",{className:"text-[28px] leading-8 font-BelanosimaSemiBold font-semibold text-[#F0F7FA]",children:(0,d.jsxs)("span",{className:"text-[#4791FF] pr-0.5",children:[t," "]})})]})]})]})}function S({oddsAsFloat:e,oddsOnChange:s}){return(0,d.jsxs)("div",{className:"slider-container",children:[(0,d.jsxs)("div",{className:"flex flex-col absolute -top-[17px] px-1 w-full",children:[(0,d.jsxs)("div",{className:"slider-labels",children:[(0,d.jsx)("span",{className:"text-[#87ABCC] font-semibold font-BelanosimaSemiBold text-xs relative",children:"x1"}),(0,d.jsx)("span",{className:"text-[#87ABCC] font-semibold font-BelanosimaSemiBold text-xs relative",children:"x2"}),(0,d.jsx)("span",{className:"text-[#87ABCC] font-semibold font-BelanosimaSemiBold text-xs relative",children:"x3"}),(0,d.jsx)("span",{className:"text-[#87ABCC] font-semibold font-BelanosimaSemiBold text-xs relative",children:"x4"}),(0,d.jsx)("span",{className:"text-[#87ABCC] font-semibold font-BelanosimaSemiBold text-xs relative",children:"x5"})]}),(0,d.jsx)("div",{className:"flex justify-between w-full",children:Array(5).fill("").map(((e,s)=>(0,d.jsx)("span",{className:"point"},s)))})]}),(0,d.jsxs)("div",{className:"slider-wrapper",children:[(0,d.jsx)("input",{type:"range",min:"1",max:"5",step:"0.1",value:e,className:"slider w-full h-3 bg-no-repeat",onChange:s}),(0,d.jsx)("div",{style:{width:25*(e-1)+"%"},className:"absolute bg-no-repeat bg-full slider-bg rounded-[40px] -top-[5px] h-8 w-full  left-0 overflow-hidden pointer-events-none"})]})]})}function k({oddsAsFloat:e,oddsOnChange:s}){return(0,d.jsx)("div",{className:"flex flex-col relative z-10 w-full",children:(0,d.jsx)("div",{className:"flex items-center justify-center custom-gradient p-px rounded-[40px] relative w-full h-[144px]",children:(0,d.jsxs)("div",{className:"bg-[#232429] shadow-custom-inset font-BelanosimaSemiBold flex flex-col justify-between w-full h-full rounded-[40px] pl-[24px] pr-[24px] ",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,d.jsx)("span",{className:"text-sm font-semibold font-BelanosimaSemiBold text-[#F0F7FA]",children:"Odds"}),(0,d.jsx)("input",{value:e,onChange:s,className:"focus:outline-none bg-transparent w-24 font-normal text-right text-[64px] leading-[56px] tracking-[-0.02em] text-[#F0F7FA]"})]}),(0,d.jsx)("div",{className:"pb-2",children:(0,d.jsx)(S,{oddsAsFloat:e,oddsOnChange:s})})]})})})}function F(){return(0,d.jsx)("span",{className:"flex items-center justify-center cursor-pointer",children:(0,d.jsx)("img",{className:"w-8 h-8",alt:"share-icon",src:"/assets/image/share-icon.png"})})}function B({startPosition:e,swap:s}){const t=(0,N.c)(),n=((0,i.NA)(),(0,l._)()),a=-20,o=100,r="won"===s.result?"animate-swap-happy-jump":"animate-swap-sad-fall";return(0,d.jsx)("div",{className:"z-[50] fixed inset-0",children:(0,d.jsxs)("div",{className:`z-[50] rounded-full flex items-center justify-center absolute ${r}`,style:{top:`${e.top}px`,left:`${e.left}px`,"--end-x":`${a}px`,"--end-y":`${o}px`},children:[(0,d.jsx)(c,{swap:s}),(0,d.jsx)("div",{className:"hover:cursor-pointer pl-5",onClick:function(){n.setChatVisible(!0),t.onSendMessage({sender:s.user,payload:`swap: ${JSON.stringify(s)}`,created:(0,y.O5)()})},children:(0,d.jsx)(F,{})})]})})}function C({sendMint:e,receiveMint:s}){(0,a.RU)();const{connection:t}=(0,m.w)(),r=(0,h.v)(),c=(0,j.Zp)(),x=((0,a.hx)(),(0,i.NA)()),u=(0,o.y)(),[p,b]=(0,n.useState)(2),[v,N]=(0,n.useState)(100),[y,S]=(0,n.useState)(""),[F,C]=(0,n.useState)(""),[M,T]=(0,n.useState)(""),[$,q]=(0,n.useState)(e),[R,I]=(0,n.useState)(s),[P,z]=(0,n.useState)(!1),L=(0,n.useRef)(null),[O,D]=(0,n.useState)({state:"idle",swap:null}),V=(0,n.useRef)({top:0,left:0}),E=(0,l._)(),[H,U]=(0,n.useState)(!1),Y=(0,i.Hk)(U),K=!x.isHouseToken(R),_=(0,n.useMemo)((()=>{if(Q()){if(K){const e=y?Number.parseFloat(y):null,s=J(e),t=s&&e?e-s:null;return null!=s&&null!=t?(t+s*p).toString():null}return y}return null}),[p,v,y,$,R]),W=(0,n.useMemo)((()=>Q()?K?(+M/p).toPrecision(5):M:null),[M]);function Z(e){e===R&&I($),q(e),R&&c(e===R?`/swap/${R}/${$}`:`/swap/${e}/${R}`)}function J(e){return e?e*v/100:null}function Q(){return(0,f.uA)(y)&&p&&$&&R}(0,n.useEffect)((()=>{Q()&&z(!0)}),[p,v,y,$,R]),(0,a.sv)((()=>{Q()&&async function(){const e=$,s=R;if(!_||!e||!s)return;const t=+_*Math.pow(10,x.getTokenByMintAddress(e).decimals),n=await(await fetch(`https://quote-api.jup.ag/v6/quote?inputMint=${e}&outputMint=${s}&amount=${t}&slippageBps=50`)).json(),l=x.calculatePrice(n),a=+_*l;if(T(a.toPrecision(5)),K)C(a.toPrecision(5));else{const e=J(a),s=e&&a?a-e:null;if(null==e||null==s)throw Error("Something went wrong");C((s+e*p).toPrecision(5))}z(!1)}()}),[p,v,y,$,R]);const[G,X]=(0,n.useState)(!1),[ee,se]=(0,n.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{show:G,hideModal:()=>X(!1),onSelectCallback:e=>Z(e),onlyHouseToken:!!R&&!x.isHouseToken(R)}),(0,d.jsx)(g,{show:ee,hideModal:()=>se(!1),onSelectCallback:e=>{return $===(s=e)&&q(R),I(s),void c($===s?`/swap/${R}/${$}`:`/swap/${$}/${s}`);var s},onlyHouseToken:!x.isHouseToken($)}),(0,d.jsx)("div",{className:" p-px flex flex-col flex-1 shadow-sm shadow-[#F0F7FA] rounded-[40px] min-w-[380px] w-[100%] xl:w-[514px] xl:min-w-[514px] max-w-[514px]",children:(0,d.jsxs)("div",{className:"flex flex-col gap-1 w-full rounded-[40px] p-1 relative z-[12] bg-[url('/assets/image/second.png')] bg-cover bg-no-repeat bg-center  bg-[#1B1C1F]",children:[(0,d.jsxs)("div",{className:"flex flex-col gap-1 relative w-full",children:[(0,d.jsx)(A,{wallet:r,name:"Send Amount",amountAsFloat:y,amountOnChange:e=>S(e.target.value),token:x.getTokenByMintAddress($),onChangeToken:()=>X(!0)}),(0,d.jsx)("img",{alt:"swap-icon",src:"/assets/image/swap-icon.png",className:"w-10 h-10 object-cover flex items-center justify-center z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"}),(0,d.jsx)("div",{onClick:()=>Z(R),className:"cursor-pointer rounded-full w-10 h-10 object-cover flex items-center justify-center z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hover:bg-[#20295D] hover:bg-opacity-50"}),(0,d.jsx)(A,{wallet:r,name:"You can win",amountAsFloat:W,amountOnChange:e=>C(e.target.value),token:x.getTokenByMintAddress(R),onChangeToken:()=>se(!0),canWinAmountAsFloat:F,waitingForNumbers:P})]}),(0,d.jsx)(k,{oddsAsFloat:p,oddsOnChange:e=>b(Number.parseFloat(e.target.value))}),(0,d.jsx)(w,{oddsAsFloat:p,probability:(1/p*100*.975).toFixed(1),sendAmount:y,sendSymbol:x.getTokenByMintAddress($).symbol,receiveSymbol:x.getTokenByMintAddress(R).symbol,gambleBeforeSwap:K,swapInputAmountAsFloat:_,receiveAmountAsFloat:F,swapOutputAmountAsFloat:W}),!H&&(0,d.jsx)("div",{onClick:()=>{if(!L.current)return;const e=L.current.getBoundingClientRect();V.current={top:e.top,left:e.left},U("Swapping in Progress"),async function(){const e=$,s=R,t=+y*Math.pow(10,x.getTokenByMintAddress(e).decimals);return await Y.mutateAsync({inputMint:e,outputMint:s,amountAsInteger:K?t*+p:t,oddsAsFloat:p})}().then((e=>{U(!1);const s={user:{name:r.publicKey.toString()},amountAsFloat:F,mintAddress:R,result:e.userHasWon?"won":"lost",pair:x.getTokenByMintAddress($).symbol+" / "+x.getTokenByMintAddress(R).symbol,transaction:{signature:e.signature}};E.setTickerVisible(!1),D({state:"animating",swap:s}),setTimeout((()=>{D({state:"animating",swap:s}),setTimeout((()=>{D({state:"idle",swap:null}),E.setTickerVisible(!0),u.onAddTickerItem(s)}),4e3)}),2300)}))},className:"flex items-center justify-center px-6 transition hover:duration-500 hover:scale-110 active:duration-100 active:scale-90 my-6 w-full",children:(0,d.jsx)("button",{ref:L,disabled:!Q()||P,className:"bg-[url('/assets/image/swap-btn.png')] disabled:bg-none enabled:hover:bg-[#20295D55] enabled:transition duration-500 enabled:hover:bg-blend-overlay bg-no-repeat bg-center bg-cover z-10 w-full p-px h-16 flex items-center rounded-[40px] relative justify-center",children:(0,d.jsx)("span",{className:" flex items-center justify-center relative z-10 rounded-[40px] shadow-blur-inset text-base font-semibold font-BelanosimaSemiBold text-[#F0F7FA] w-full h-full",children:"Swap"})})}),H&&(0,d.jsx)("div",{className:"flex items-center justify-center px-6 my-6 w-full",children:(0,d.jsx)("div",{className:"z-10 w-full p-px h-16 flex items-center rounded-[40px] relative justify-center",children:(0,d.jsx)("span",{className:"animate-pulse flex text-gray-400 items-center justify-center relative z-10 rounded-[40px] shadow-blur-inset text-base font-semibold font-BelanosimaSemiBold w-full h-full",children:H})})}),("animating"===O.state||"completed"===O.state)&&(0,d.jsx)(B,{startPosition:V.current,swap:O.swap})]})})]})}function M(){const e=(0,j.g)(),s=(0,n.useMemo)((()=>e.sendMint?e.sendMint:"So11111111111111111111111111111111111111112"),[e]),t=(0,n.useMemo)((()=>e.receiveMint?e.receiveMint:""),[e]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,d.jsx)("span",{className:"text-[#F0F7FA] font-BelanosimaRegular text-center font-normal text-[64px] xl:text-[88px] leading-[96px] tracking-[-0.02em]",children:"Lucky\xa0Swaps"}),(0,d.jsx)("span",{className:"font-semibold text-base text-[#5F7385] text-center font-BelanosimaSemiBold",children:"Challenge your luck now"})]}),(0,d.jsxs)("div",{className:"flex flex-col px-5 md:px-12 my-5 w-full",children:[(0,d.jsxs)("div",{className:"flex flex-col xl:flex-row gap-8 h-full w-full max-w-[960px] mx-auto items-center xl:items-start justify-center",children:[(0,d.jsx)(u.x,{}),(0,d.jsx)(C,{sendMint:s,receiveMint:t})]}),(0,d.jsx)(x,{})]})]})}}}]);