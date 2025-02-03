"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[535],{535:(e,s,t)=>{t.r(s),t.d(s,{default:()=>F});var l=t(3696),n=t(2540);function a({swap:e}){return(0,n.jsxs)("div",{className:"flex flex-row carousel-center carousel-item items-center gap-2",children:[(0,n.jsx)("img",{src:e.url||"/assets/image/default.png",className:"w-10 h-10 object-cover flex items-center justify-center rounded-xl",alt:"avatar"}),(0,n.jsx)("div",{className:"text-[14px] font-BelanosimaSemiBold text-[#F0F7FA]",children:e.userName}),(0,n.jsx)("img",{src:"/assets/image/sol-icon.png",className:"w-8 h-8",alt:"sol"}),(0,n.jsxs)("div",{className:"text-[14px] font-BelanosimaSemiBold text-[#5F7385]",children:[e.text," on ",e.pair]})]})}function i(){return(0,n.jsx)("div",{className:"carousel carousel-center h-14 overflow-hidden w-full px-5 lg:max-w-4xl mx-auto",children:(0,n.jsx)("div",{className:"carousel-inner flex animate-scroll gap-10",children:[{userName:"abc",pair:"SOL / USDC",text:"won 2 SOL"},{userName:"def",pair:"SOL / USDC",text:"won 3 SOL"},{userName:"def",pair:"SOL / USDC",text:"lost 5 SOL"}].map(((e,s)=>(0,n.jsx)(a,{swap:e},s)))})})}var o=t(5768),r=t(3530),c=t(8267),d=t(9758),x=t(8358),m=t(2362),u=t(7435),p=t(5981),f=t(3694);function h({hideModal:e,show:s,onSelectCallback:t}){const a=(0,p.NA)(),i=(0,f.F7)(),[o,r]=(0,l.useState)(""),c=a.allTokens.filter((e=>e.name&&e.name.toLowerCase().includes(o.toLowerCase())||e.symbol&&e.symbol.toLowerCase().includes(o.toLowerCase()))),u=c.filter((e=>!!(i.tokens&&e.mintAddress in i.tokens&&+i.tokens[e.mintAddress].amountAsFloat>0))),h=c.filter((e=>!u.includes(e)));function j(s){t(s),r(""),e()}return(0,n.jsxs)(m.Vm,{title:"Select a token",hide:e,show:s,children:[(0,n.jsxs)("label",{className:"input input-bordered bg-[#16171A] flex items-center gap-2",children:[(0,n.jsx)("input",{type:"text",className:"grow",placeholder:"Search",value:o,onChange:e=>r(e.target.value),onKeyDown:e=>{"Enter"===e.key&&1===c.length&&(e.stopPropagation(),setTimeout((()=>{j(c[0].mintAddress)}),1))}}),!!o&&(0,n.jsx)("span",{className:"badge cursor-pointer",onClick:()=>r(""),children:"x"}),(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"h-4 w-4 opacity-70",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",clipRule:"evenodd"})})]}),(0,n.jsxs)("div",{className:"min-h-96",children:[0===h.length&&0===u.length&&(0,n.jsx)("span",{children:"No token found"}),u.length>0&&(0,n.jsxs)("table",{className:"table",children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{children:(0,n.jsx)("span",{className:"text-[#F0F7FA]",children:"Your Tokens"})})})}),(0,n.jsx)("tbody",{children:u.map((e=>{const s=a.getStatsByMintAddress(e.mintAddress);return(0,n.jsxs)("tr",{className:"hover:cursor-pointer hover:bg-[#20295D]",onClick:()=>{j(e.mintAddress)},children:[(0,n.jsx)("td",{children:(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)("div",{className:"avatar",children:(0,n.jsx)("div",{className:"mask mask-squircle h-12 w-12",children:(0,n.jsx)("img",{src:e.logoURI,alt:`${e.symbol} logo`})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"font-bold",children:e.name}),(0,n.jsxs)("div",{className:"text-sm opacity-50",children:[(0,n.jsx)(d.xv,{mintAddress:e.mintAddress})," ",(0,m.qq)(e.mintAddress)]})]})]})}),(0,n.jsx)("td",{children:s&&s.volumeInUSD&&(0,n.jsx)("span",{className:"badge badge-ghost badge-sm",children:(0,x.az)(s.volumeInUSD)})})]},e.symbol)}))})]}),h.length>0&&(0,n.jsxs)("table",{className:"table",children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{children:(0,n.jsx)("span",{className:"text-[#F0F7FA]",children:"All other Tokens"})})})}),(0,n.jsx)("tbody",{children:h.map((e=>{const s=a.getStatsByMintAddress(e.mintAddress);return(0,n.jsxs)("tr",{className:"hover:cursor-pointer hover:bg-[#20295D]",onClick:()=>{j(e.mintAddress)},children:[(0,n.jsx)("td",{children:(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)("div",{className:"avatar",children:(0,n.jsx)("div",{className:"mask mask-squircle h-12 w-12",children:(0,n.jsx)("img",{src:e.logoURI,alt:`${e.symbol} logo`})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"font-bold",children:e.name}),(0,n.jsxs)("div",{className:"text-sm opacity-50",children:[e.symbol," ",(0,m.qq)(e.mintAddress)]})]})]})}),(0,n.jsx)("td",{children:s&&s.volumeInUSD&&(0,n.jsx)("span",{className:"badge badge-ghost badge-sm",children:(0,x.az)(s.volumeInUSD)})})]},e.mintAddress)}))})]})]})]})}var j=t(9166),g=t(7124);function v(e){const s=[{name:"Your odds",value:e.oddsAsFloat.toFixed(1),icon:(0,n.jsx)(g.Tw,{})},{name:"Your chance to win",value:e.probability,icon:(0,n.jsx)(g.R3,{})},{name:"You send",value:e.sendAmount+" "+e.sendSymbol,icon:(0,n.jsx)(g.qx,{})},{name:"Would be swapped to",value:e.swapOutputAmountAsFloat+" "+e.receiveSymbol,icon:(0,n.jsx)(g.vJ,{})},{name:"You can win",value:e.receiveAmountAsFloat+" "+e.receiveSymbol,icon:(0,n.jsx)(g.f,{})}],t=(0,j._)();return(0,n.jsxs)("div",{className:"flex flex-col gap-5 items-start -mt-6 z-10 w-full",children:[(0,n.jsx)("div",{onClick:()=>t.setSwapInfoVisible(!t.swapInfoVisible),className:"flex items-center ml-6 gap-2 custom-gradient p-px rounded-[40px] h-10 cursor-pointer select-none",children:(0,n.jsxs)("div",{className:"bg-[#232429] shadow-custom-inset flex items-center gap-2 rounded-[40px] px-4 h-full",children:[(0,n.jsx)("span",{className:"flex items-center justify-center "+(t.swapInfoVisible?"rotate-180":""),children:(0,n.jsx)(g.ZL,{})}),(0,n.jsx)("span",{className:"text-sm font-semibold font-BelanosimaSemiBold text-[#607583]",children:"Info"})]})}),t.swapInfoVisible&&(0,n.jsx)("div",{className:"flex flex-col gap-2 w-full px-6",children:s&&s.map(((e,s)=>(0,n.jsxs)("div",{className:"flex items-center justify-between py-2 w-full",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[e.icon,(0,n.jsx)("span",{className:"text-sm font-semibold font-BelanosimaSemiBold text-[#F0F7FA]",children:e.name})]}),(0,n.jsx)("span",{className:"text-sm font-semibold font-BelanosimaSemiBold text-[#F0F7FA]",children:e.value})]},s)))})]})}function b({wallet:e,name:s,amountAsFloat:t,amountOnChange:l,token:a,onChangeToken:i,canWinAmountAsFloat:o=!1,waitingForNumbers:r=!1}){return(0,n.jsxs)("div",{className:"bg-[url('/assets/image/subtract.png')] w-full bg-no-repeat bg-cover h-[144px] flex flex-col items-start justify-between relative pt-[20px] pl-[24px]",children:[(0,n.jsx)("div",{className:"flex items-center absolute top-[4px] right-0 justify-center custom-gradient p-px rounded-full h-14",children:(0,n.jsx)("div",{role:"button",onClick:i,className:"bg-[#232429] hover:bg-[#20295D] shadow-custom-inset font-BelanosimaSemiBold flex items-center h-full rounded-full pl-4 pr-4 py-2 justify-center text-[#607583] font-semibold text-xs tracking-[0.02em]",children:(0,n.jsx)("div",{className:"",children:(0,n.jsxs)("div",{className:"active:scale-[0.99] transition-all duration-100 flex gap-3 items-center justify-between",children:[(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsxs)("div",{className:"relative w-10 h-10",children:[(0,n.jsx)("div",{className:"absolute inset-0 w-full h-full bg-green-300 blur-2xl z-0"}),(0,n.jsx)("img",{src:a.logoURI,className:"w-full h-full rounded-full object-cover relative z-10",alt:"sell"})]}),(0,n.jsx)("div",{className:"text-xs text-sm font-BelanosimaSemiBold text-[#F0F7FA]",children:a.symbol})]}),(0,n.jsx)(g.ZL,{})]})})})}),(0,n.jsxs)("div",{className:"text-[14px] flex flex-row font-BelanosimaSemiBold text-[#F0F7FA] w-full",children:[s," ",e.publicKey&&(0,n.jsxs)("div",{className:"w-[14rem] text-right text-[13px] font-BelanosimaRegular",children:["You have"," ",(0,n.jsx)(d.xv,{mintAddress:a.mintAddress,clickCallback:o?void 0:e=>l({target:{value:e.toString()}})})]})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between pr-6 w-full",children:[(0,n.jsxs)("div",{className:"flex items-center gap-1 pb-2",children:[r&&(0,n.jsx)("span",{className:"h-[72px] text-[64px] text-[#F0F7FA] loading loading-dots loading-lg"}),!r&&(0,n.jsx)("input",{type:"text",value:o||t,placeholder:"Enter Amount",disabled:!!o,contentEditable:!(o||!l),className:"focus:outline-none bg-transparent w-64 text-[64px] placeholder:text-[32px] leading-[72px] font-BelanosimaRegular text-[#F0F7FA]",onChange:l})]}),!!o&&(0,n.jsxs)("div",{className:"flex flex-col items-end justify-end",children:[(0,n.jsx)("span",{className:"text-sm font-BelanosimaSemiBold text-[#F0F7FA] font-semibold",children:"Swap Return"}),(0,n.jsx)("span",{className:"text-[28px] leading-8 font-BelanosimaSemiBold font-semibold text-[#F0F7FA]",children:(0,n.jsxs)("span",{className:"text-[#4791FF] pr-0.5",children:[t," "]})})]})]})]})}function w({oddsAsFloat:e,oddsOnChange:s}){return(0,n.jsxs)("div",{className:"slider-container",children:[(0,n.jsxs)("div",{className:"flex flex-col absolute -top-[17px] px-1 w-full",children:[(0,n.jsxs)("div",{className:"slider-labels",children:[(0,n.jsx)("span",{className:"text-[#87ABCC] font-semibold font-BelanosimaSemiBold text-xs relative",children:"x1"}),(0,n.jsx)("span",{className:"text-[#87ABCC] font-semibold font-BelanosimaSemiBold text-xs relative",children:"x2"}),(0,n.jsx)("span",{className:"text-[#87ABCC] font-semibold font-BelanosimaSemiBold text-xs relative",children:"x3"}),(0,n.jsx)("span",{className:"text-[#87ABCC] font-semibold font-BelanosimaSemiBold text-xs relative",children:"x4"}),(0,n.jsx)("span",{className:"text-[#87ABCC] font-semibold font-BelanosimaSemiBold text-xs relative",children:"x5"})]}),(0,n.jsx)("div",{className:"flex justify-between w-full",children:Array(5).fill("").map(((e,s)=>(0,n.jsx)("span",{className:"point"},s)))})]}),(0,n.jsxs)("div",{className:"slider-wrapper",children:[(0,n.jsx)("input",{type:"range",min:"1",max:"5",step:"0.1",value:e,className:"slider w-full h-3 bg-no-repeat",onChange:s}),(0,n.jsx)("div",{style:{width:25*(e-1)+"%"},className:"absolute bg-no-repeat bg-full slider-bg rounded-[40px] -top-[5px] h-8 w-full  left-0 overflow-hidden pointer-events-none"})]})]})}function N({oddsAsFloat:e,oddsOnChange:s}){return(0,n.jsx)("div",{className:"flex flex-col relative z-10 w-full",children:(0,n.jsx)("div",{className:"flex items-center justify-center custom-gradient p-px rounded-[40px] relative w-full h-[144px]",children:(0,n.jsxs)("div",{className:"bg-[#232429] shadow-custom-inset font-BelanosimaSemiBold flex flex-col justify-between w-full h-full rounded-[40px] pl-[24px] pr-[24px] ",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,n.jsx)("span",{className:"text-sm font-semibold font-BelanosimaSemiBold text-[#F0F7FA]",children:"Odds"}),(0,n.jsx)("input",{value:e,onChange:s,className:"focus:outline-none bg-transparent w-24 font-normal text-right text-[64px] leading-[56px] tracking-[-0.02em] text-[#F0F7FA]"})]}),(0,n.jsx)("div",{className:"pb-2",children:(0,n.jsx)(w,{oddsAsFloat:e,oddsOnChange:s})})]})})})}function A({sendMint:e,receiveMint:s}){(0,m.RU)();const{connection:t}=(0,r.w)(),a=(0,c.v)(),i=(0,u.Zp)(),o=((0,m.hx)(),(0,p.NA)()),d=(0,p.Hk)(),f=o.satoshiToFloat(e,1e8).toString(),[j,g]=(0,l.useState)(2),[w,A]=(0,l.useState)(100),[F,y]=(0,l.useState)(f),[S,B]=(0,l.useState)(""),[k,C]=(0,l.useState)(""),[M,T]=(0,l.useState)(e),[O,z]=(0,l.useState)(s),[D,I]=(0,l.useState)(!1),L=!o.isHouseToken(O),$=(0,l.useMemo)((()=>{if(E()){if(L){const e=F?Number.parseFloat(F):null,s=U(e),t=s&&e?e-s:null;return null!=s&&null!=t?(t+s*j).toString():null}return F}return null}),[j,w,F,M]),q=(0,l.useMemo)((()=>E()?L?(+k/j).toPrecision(5):k:null),[k]);function R(e){e===O&&z(M),T(e),i(e===O?`/swap/${O}/${M}`:`/swap/${e}/${O}`)}function U(e){return e?e*w/100:null}function E(){return(0,x.uA)(F)&&j&&M&&O}(0,l.useEffect)((()=>{E()&&I(!0)}),[j,w,F,M,O]),(0,m.sv)((()=>{E()&&async function(){const e=M,s=O;if(!$||!e||!s)return;const t=+$*Math.pow(10,o.getTokenByMintAddress(e).decimals),l=await(await fetch(`https://quote-api.jup.ag/v6/quote?inputMint=${e}&outputMint=${s}&amount=${t}&slippageBps=50`)).json(),n=o.calculatePrice(l),a=+$*n;if(C(a.toPrecision(5)),L)B(a.toPrecision(5));else{const e=U(a),s=e&&a?a-e:null;if(null==e||null==s)throw Error("Something went wrong");B((s+e*j).toPrecision(5))}I(!1)}()}),[j,w,F,M,O]);const[P,Y]=(0,l.useState)(!1),[Z,V]=(0,l.useState)(!1),[W,G]=(0,l.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{show:P,hideModal:()=>Y(!1),onSelectCallback:e=>R(e)}),(0,n.jsx)(h,{show:Z,hideModal:()=>V(!1),onSelectCallback:e=>{return M===(s=e)&&T(O),z(s),void i(M===s?`/swap/${O}/${M}`:`/swap/${M}/${s}`);var s}}),(0,n.jsx)("div",{className:" p-px flex flex-col flex-1  rounded-[40px] min-w-[514px] w-[514px] max-w-[514px]",children:(0,n.jsxs)("div",{className:"flex flex-col gap-1 w-full rounded-[40px] p-1 relative z-[12] bg-[url('/assets/image/second.png')] bg-cover bg-no-repeat bg-center  bg-[#1B1C1F]",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-1 relative w-full",children:[(0,n.jsx)(b,{wallet:a,name:"Send Amount",amountAsFloat:F,amountOnChange:e=>y(e.target.value),token:o.getTokenByMintAddress(M),onChangeToken:()=>Y(!0)}),(0,n.jsx)("img",{alt:"swap-icon",src:"/assets/image/swap-icon.png",className:"w-10 h-10 object-cover flex items-center justify-center z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"}),(0,n.jsx)("div",{onClick:()=>R(O),className:"cursor-pointer rounded-full w-10 h-10 object-cover flex items-center justify-center z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hover:bg-[#20295D] hover:bg-opacity-50"}),(0,n.jsx)(b,{wallet:a,name:"You can win",amountAsFloat:q,amountOnChange:e=>B(e.target.value),token:o.getTokenByMintAddress(O),onChangeToken:()=>V(!0),canWinAmountAsFloat:S,waitingForNumbers:D})]}),(0,n.jsx)(N,{oddsAsFloat:j,oddsOnChange:e=>g(Number.parseFloat(e.target.value))}),(0,n.jsx)(v,{oddsAsFloat:j,probability:(1/j*100*.975).toFixed(1),sendAmount:F,sendSymbol:o.getTokenByMintAddress(M).symbol,receiveSymbol:o.getTokenByMintAddress(O).symbol,gambleBeforeSwap:L,swapInputAmountAsFloat:$,receiveAmountAsFloat:S,swapOutputAmountAsFloat:q}),W&&(0,n.jsx)("div",{className:"flex items-center justify-center px-6 my-6 w-full",children:(0,n.jsx)("div",{className:"z-10 w-full p-px h-16 flex items-center rounded-[40px] relative justify-center",children:(0,n.jsx)("span",{className:"animate-pulse flex text-gray-400 items-center justify-center relative z-10 rounded-[40px] shadow-blur-inset text-base font-semibold font-BelanosimaSemiBold w-full h-full",children:"Swapping in progress"})})}),!W&&(0,n.jsx)("div",{onClick:()=>{G(!0),async function(){const e=M,s=O,t=+F*Math.pow(10,o.getTokenByMintAddress(e).decimals);await d.mutateAsync({inputMint:e,outputMint:s,amountAsInteger:t,oddsAsFloat:j})}().then((()=>{G(!1)}))},className:"flex items-center justify-center px-6 transition hover:duration-500 hover:scale-110 active:duration-100 active:scale-90 my-6 w-full",children:(0,n.jsx)("button",{disabled:!E()||D,className:"bg-[url('/assets/image/swap-btn.png')] disabled:bg-none hover:bg-[#20295D55] transition duration-500 hover:bg-blend-overlay bg-no-repeat bg-center bg-cover z-10 w-full p-px h-16 flex items-center rounded-[40px] relative justify-center",children:(0,n.jsx)("span",{className:" flex items-center justify-center relative z-10 rounded-[40px] shadow-blur-inset text-base font-semibold font-BelanosimaSemiBold text-[#F0F7FA] w-full h-full",children:"Swap"})})})]})})]})}function F(){const e=(0,u.g)(),s=(0,l.useMemo)((()=>e.sendMint?e.sendMint:"So11111111111111111111111111111111111111112"),[e]),t=(0,l.useMemo)((()=>e.receiveMint?e.receiveMint:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),[e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("span",{className:"text-[#F0F7FA] font-BelanosimaRegular text-center font-normal text-[88px] leading-[96px] tracking-[-0.02em]",children:"Lucky Swaps"}),(0,n.jsx)("span",{className:"font-semibold text-base text-[#5F7385] text-center font-BelanosimaSemiBold",children:"Challenge your luck now"})]}),(0,n.jsxs)("div",{className:"flex flex-col px-5 md:px-12 my-14 w-full",children:[(0,n.jsxs)("div",{className:"flex flex-col xl:flex-row gap-8 h-full w-full max-w-[960px] mx-auto items-center xl:items-start justify-center",children:[(0,n.jsx)(o.x,{}),(0,n.jsx)(A,{sendMint:s,receiveMint:t})]}),(0,n.jsx)(i,{})]})]})}}}]);