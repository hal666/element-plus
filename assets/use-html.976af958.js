import{B as s}from"./index.d3e4a048.js";import{a as n}from"./index.57050740.js";import{j as a,y as _,k as l,z as r,A as u,E as i,L as g}from"./framework.fc81e243.js";const m=i("Click to open the Message Box"),f=a({setup(p){const o=()=>{s.alert("This is a message","Title",{confirmButtonText:"OK",callback:t=>{n({type:"info",message:`action: ${t}`})}})};return(t,c)=>{const e=_("el-button");return l(),r(e,{type:"text",onClick:o},{default:u(()=>[m]),_:1})}}});var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:f});const d=i("Click to open Message Box"),x=a({setup(p){const o=()=>{s.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",center:!0}).then(()=>{n({type:"success",message:"Delete completed"})}).catch(()=>{n({type:"info",message:"Delete canceled"})})};return(t,c)=>{const e=_("el-button");return l(),r(e,{type:"text",onClick:o},{default:u(()=>[d]),_:1})}}});var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});const b=i("Click to open the Message Box"),h=a({setup(p){const o=()=>{s.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(()=>{n({type:"success",message:"Delete completed"})}).catch(()=>{n({type:"info",message:"Delete canceled"})})};return(t,c)=>{const e=_("el-button");return l(),r(e,{type:"text",onClick:o},{default:u(()=>[b]),_:1})}}});var K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:h});const y=i("Click to open Message Box"),C=a({setup(p){const o=()=>{s({title:"Message",message:g("p",null,[g("span",null,"Message can be "),g("i",{style:"color: teal"},"VNode")]),showCancelButton:!0,confirmButtonText:"OK",cancelButtonText:"Cancel",beforeClose:(t,c,e)=>{t==="confirm"?(c.confirmButtonLoading=!0,c.confirmButtonText="Loading...",setTimeout(()=>{e(),setTimeout(()=>{c.confirmButtonLoading=!1},300)},3e3)):e()}}).then(t=>{n({type:"info",message:`action: ${t}`})})};return(t,c)=>{const e=_("el-button");return l(),r(e,{type:"text",onClick:o},{default:u(()=>[y]),_:1})}}});var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const T=i("Click to open Message Box"),B=a({setup(p){const o=()=>{s.confirm("You have unsaved changes, save and proceed?","Confirm",{distinguishCancelAndClose:!0,confirmButtonText:"Save",cancelButtonText:"Discard Changes"}).then(()=>{n({type:"info",message:"Changes saved. Proceeding to a new route."})}).catch(t=>{n({type:"info",message:t==="cancel"?"Changes discarded. Proceeding to a new route.":"Stay in the current route"})})};return(t,c)=>{const e=_("el-button");return l(),r(e,{type:"text",onClick:o},{default:u(()=>[T]),_:1})}}});var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const M=i("Click to open Message Box"),k=a({setup(p){const o=()=>{s.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",draggable:!0}).then(()=>{n({type:"success",message:"Delete completed"})}).catch(()=>{n({type:"info",message:"Delete canceled"})})};return(t,c)=>{const e=_("el-button");return l(),r(e,{type:"text",onClick:o},{default:u(()=>[M]),_:1})}}});var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});const S=i("Click to open Message Box"),$=a({setup(p){const o=()=>{s.prompt("Please input your e-mail","Tip",{confirmButtonText:"OK",cancelButtonText:"Cancel",inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"Invalid Email"}).then(({value:t})=>{n({type:"success",message:`Your email is:${t}`})}).catch(()=>{n({type:"info",message:"Input canceled"})})};return(t,c)=>{const e=_("el-button");return l(),r(e,{type:"text",onClick:o},{default:u(()=>[S]),_:1})}}});var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$});const w=i("Click to open Message Box"),v=a({setup(p){const o=()=>{s.alert("<strong>proxy is <i>HTML</i> string</strong>","HTML String",{dangerouslyUseHTMLString:!0})};return(t,c)=>{const e=_("el-button");return l(),r(e,{type:"text",onClick:o},{default:u(()=>[w]),_:1})}}});var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:v});export{D as _,L as a,K as b,E as c,P as d,H as e,W as f,A as g};
