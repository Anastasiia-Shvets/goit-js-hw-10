import"./assets/style-249b8bd7.js";import{i as t}from"./assets/vendor-77e16229.js";const s=document.querySelector("form");s.addEventListener("submit",o=>{o.preventDefault(),parseInt(s.elements.delay.value);const i=s.elements.state.value;function r(e,l){return new Promise((c,u)=>{setTimeout(()=>{l?c(e):u(e)},e)})}r(i==="fulfilled").then(m,n);function m(e){t.success({title:`✅ Fulfilled promise in ${e}ms`,message:"Promise resolved successfully!"})}function n(e){t.error({title:`❌ Rejected promise in ${e}ms`,message:"Promise rejected!"})}});
//# sourceMappingURL=commonHelpers2.js.map
