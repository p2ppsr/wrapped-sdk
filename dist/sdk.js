/*! For license information please see sdk.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("isomorphic-fetch")):"function"==typeof define&&define.amd?define(["isomorphic-fetch"],e):"object"==typeof exports?exports.BabbageSDK=e(require("isomorphic-fetch")):t.BabbageSDK=e(t["isomorphic-fetch"])}(this,(t=>(()=>{var e={187:(t,e,r)=>{const o=r(182),n=r(494),a=r(809);t.exports=async({inputs:t,outputs:e,description:r,dangerouslyDisableMapi:i})=>{const s=await o();if("cicada-api"===s.substrate)return await n("http://localhost:3301/v1/createAction",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({inputs:t,outputs:e,description:r,dangerouslyDisableMapi:i})});if("babbage-xdm"===s.substrate)return new Promise(((o,n)=>{const s=Buffer.from(a()).toString("base64");window.addEventListener("message",(async t=>{if("CWI"===t.data.type&&t.isTrusted&&t.data.id===s&&!t.data.isInvocation)if("error"===t.data.status){const e=new Error(t.data.description);e.code=t.data.code,n(e)}else o(t.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:s,call:"createAction",params:{inputs:t,outputs:e,description:r,dangerouslyDisableMapi:i}},"*")}));if("window-api"===s.substrate)return window.CWI.createAction({inputs:t,outputs:e,description:r,dangerouslyDisableMapi:i});{const t=new Error(`Unknown Babbage substrate: ${s.substrate}`);throw t.code="ERR_UNKNOWN_SUBSTRATE",t}}},485:(t,e,r)=>{const o=r(182),n=r(494),a=r(809);t.exports=async({certificateType:t,fieldObject:e,certifierUrl:r,certifierPublicKey:i})=>{const s=await o();if("cicada-api"===s.substrate)return await n("http://localhost:3301/v1/createCertificate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({certificateType:t,fieldObject:e,certifierUrl:r,certifierPublicKey:i})});if("babbage-xdm"===s.substrate)return new Promise(((o,n)=>{const s=Buffer.from(a()).toString("base64");window.addEventListener("message",(async t=>{if("CWI"===t.data.type&&t.isTrusted&&t.data.id===s&&!t.data.isInvocation)if("error"===t.data.status){const e=new Error(t.data.description);e.code=t.data.code,n(e)}else o(t.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:s,call:"createCertificate",params:{certificateType:t,fieldObject:e,certifierUrl:r,certifierPublicKey:i}},"*")}));if("window-api"===s.substrate)return window.CWI.createCertificate({certificateType:t,fieldObject:e,certifierUrl:r,certifierPublicKey:i});{const t=new Error(`Unknown Babbage substrate: ${s.substrate}`);throw t.code="ERR_UNKNOWN_SUBSTRATE",t}}},481:(t,e,r)=>{const o=r(182),n=r(494),a=r(809);t.exports=async({data:t,protocolID:e,keyID:r,description:i="",counterparty:s="self",privileged:c=!1})=>{const d=await o();if("cicada-api"===d.substrate)return await n(`http://localhost:3301/v1/createHmac?protocolID=${encodeURIComponent(e)}&keyID=${encodeURIComponent(r)}&description=${encodeURIComponent(i)}&counterparty=${encodeURIComponent(s)}&privileged=${encodeURIComponent(c)}`,{method:"post",headers:{"Content-Type":"application/octet-stream"},body:t});if("babbage-xdm"===d.substrate)return new Promise(((o,n)=>{const d=Buffer.from(a()).toString("base64");window.addEventListener("message",(async t=>{if("CWI"===t.data.type&&t.isTrusted&&t.data.id===d&&!t.data.isInvocation)if("error"===t.data.status){const e=new Error(t.data.description);e.code=t.data.code,n(e)}else o(t.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:d,call:"createHmac",params:{data:t,protocolID:e,keyID:r,description:i,counterparty:s,privileged:c}},"*")}));if("window-api"===d.substrate)return window.CWI.createHmac({data:t,protocolID:e,keyID:r,description:i,counterparty:s,privileged:c});{const t=new Error(`Unknown Babbage substrate: ${d.substrate}`);throw t.code="ERR_UNKNOWN_SUBSTRATE",t}}},652:(t,e,r)=>{const o=r(182),n=r(494),a=r(809);t.exports=async({data:t,protocolID:e,keyID:r,description:i="",counterparty:s="self",privileged:c=!1})=>{const d=await o();if("cicada-api"===d.substrate)return await n(`http://localhost:3301/v1/createSignature?protocolID=${encodeURIComponent(e)}&keyID=${encodeURIComponent(r)}&description=${encodeURIComponent(i)}&counterparty=${encodeURIComponent(s)}&privileged=${encodeURIComponent(c)}`,{method:"post",headers:{"Content-Type":"application/octet-stream"},body:t});if("babbage-xdm"===d.substrate)return new Promise(((o,n)=>{const d=Buffer.from(a()).toString("base64");window.addEventListener("message",(async t=>{if("CWI"===t.data.type&&t.isTrusted&&t.data.id===d&&!t.data.isInvocation)if("error"===t.data.status){const e=new Error(t.data.description);e.code=t.data.code,n(e)}else o(t.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:d,call:"createSignature",params:{data:t,protocolID:e,keyID:r,description:i,counterparty:s,privileged:c}},"*")}));if("window-api"===d.substrate)return window.CWI.createSignature({data:t,protocolID:e,keyID:r,description:i,counterparty:s,privileged:c});{const t=new Error(`Unknown Babbage substrate: ${d.substrate}`);throw t.code="ERR_UNKNOWN_SUBSTRATE",t}}},122:(t,e,r)=>{const o=r(182),n=r(494),a=r(809);t.exports=async({ciphertext:t,protocolID:e,keyID:r,description:i="",counterparty:s="self",privileged:c=!1,returnType:d="Uint8Array"})=>{const p=await o();if("cicada-api"===p.substrate)return await n(`http://localhost:3301/v1/decrypt?protocolID=${encodeURIComponent(e)}&keyID=${encodeURIComponent(r)}&description=${encodeURIComponent(i)}&counterparty=${encodeURIComponent(s)}&privileged=${encodeURIComponent(c)}&returnType=${encodeURIComponent(d)}`,{method:"post",headers:{"Content-Type":"application/octet-stream"},body:t});if("babbage-xdm"===p.substrate)return new Promise(((o,n)=>{const p=Buffer.from(a()).toString("base64");window.addEventListener("message",(async t=>{if("CWI"===t.data.type&&t.isTrusted&&t.data.id===p&&!t.data.isInvocation)if("error"===t.data.status){const e=new Error(t.data.description);e.code=t.data.code,n(e)}else o(t.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:p,call:"decrypt",params:{ciphertext:t,protocolID:e,keyID:r,description:i,counterparty:s,privileged:c,returnType:d}},"*")}));if("window-api"===p.substrate)return window.CWI.decrypt({ciphertext:t,protocolID:e,keyID:r,description:i,counterparty:s,privileged:c,returnType:d});{const t=new Error(`Unknown Babbage substrate: ${p.substrate}`);throw t.code="ERR_UNKNOWN_SUBSTRATE",t}}},792:(t,e,r)=>{const o=r(182),n=r(494),a=r(809);t.exports=async({plaintext:t,protocolID:e,keyID:r,description:i="",counterparty:s="self",privileged:c=!1,returnType:d="Uint8Array"})=>{const p=await o();if("cicada-api"===p.substrate)return await n(`http://localhost:3301/v1/encrypt?protocolID=${encodeURIComponent(e)}&keyID=${encodeURIComponent(r)}&description=${encodeURIComponent(i)}&counterparty=${encodeURIComponent(s)}&privileged=${encodeURIComponent(c)}&returnType=${encodeURIComponent(d)}`,{method:"post",headers:{"Content-Type":"application/octet-stream"},body:t});if("babbage-xdm"===p.substrate)return new Promise(((o,n)=>{const p=Buffer.from(a()).toString("base64");window.addEventListener("message",(async t=>{if("CWI"===t.data.type&&t.isTrusted&&t.data.id===p&&!t.data.isInvocation)if("error"===t.data.status){const e=new Error(t.data.description);e.code=t.data.code,n(e)}else o(t.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:p,call:"encrypt",params:{plaintext:t,protocolID:e,keyID:r,description:i,counterparty:s,privileged:c,returnType:d}},"*")}));if("window-api"===p.substrate)return window.CWI.encrypt({plaintext:t,protocolID:e,keyID:r,description:i,counterparty:s,privileged:c,returnType:d});{const t=new Error(`Unknown Babbage substrate: ${p.substrate}`);throw t.code="ERR_UNKNOWN_SUBSTRATE",t}}},329:(t,e,r)=>{const o=r(182),n=r(494),a=r(809);t.exports=async({certifiers:t,types:e})=>{const r=await o();if("cicada-api"===r.substrate)return await n("http://localhost:3301/v1/ninja/findCertificates",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({certifiers:t,types:e})});if("babbage-xdm"===r.substrate)return new Promise(((r,o)=>{const n=Buffer.from(a()).toString("base64");window.addEventListener("message",(async t=>{if("CWI"===t.data.type&&t.isTrusted&&t.data.id===n&&!t.data.isInvocation)if("error"===t.data.status){const e=new Error(t.data.description);e.code=t.data.code,o(e)}else r(t.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:n,call:"ninja.findCertificates",params:{certifiers:t,types:e}},"*")}));if("window-api"===r.substrate)return window.CWI.ninja.findCertificates({certifiers:t,types:e});{const t=new Error(`Unknown Babbage substrate: ${r.substrate}`);throw t.code="ERR_UNKNOWN_SUBSTRATE",t}}},138:(t,e,r)=>{const o=r(182),n=r(494),a=r(809);t.exports=async()=>{const t=await o();if("cicada-api"===t.substrate)return await n("http://localhost:3301/v1/network");if("babbage-xdm"===t.substrate)return new Promise(((t,e)=>{const r=Buffer.from(a()).toString("base64");window.addEventListener("message",(async o=>{if("CWI"===o.data.type&&o.isTrusted&&o.data.id===r&&!o.data.isInvocation)if("error"===o.data.status){const t=new Error(o.data.description);t.code=o.data.code,e(t)}else t(o.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:r,call:"getNetwork",params:{}},"*")}));if("window-api"===t.substrate)return window.CWI.ninja.getNetwork();{const e=new Error(`Unknown Babbage substrate: ${t.substrate}`);throw e.code="ERR_UNKNOWN_SUBSTRATE",e}}},198:(t,e,r)=>{const o=r(182),n=r(494),a=r(809);t.exports=async({protocolID:t,keyID:e,privileged:r=!1,identityKey:i=!1,reason:s="No reason provided.",counterparty:c="self",forSelf:d=!1})=>{const p=await o();if("cicada-api"===p.substrate)return await n(`http://localhost:3301/v1/publicKey?protocolID=${encodeURIComponent(t)}&keyID=${encodeURIComponent(e)}&privileged=${encodeURIComponent(r)}&identityKey=${encodeURIComponent(i)}&reason=${encodeURIComponent(s)}&counterparty=${encodeURIComponent(c)}&forSelf=${encodeURIComponent(d)}`,{method:"get",headers:{"Content-Type":"application/json"}});if("babbage-xdm"===p.substrate)return new Promise(((o,n)=>{const p=Buffer.from(a()).toString("base64");window.addEventListener("message",(async t=>{if("CWI"===t.data.type&&t.isTrusted&&t.data.id===p&&!t.data.isInvocation)if("error"===t.data.status){const e=new Error(t.data.description);e.code=t.data.code,n(e)}else o(t.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:p,call:"getPublicKey",params:{protocolID:t,keyID:e,privileged:r,identityKey:i,reason:s,counterparty:c,forSelf:d}},"*")}));if("window-api"===p.substrate)return window.CWI.getPublicKey({protocolID:t,keyID:e,privileged:r,identityKey:i,reason:s,counterparty:c,forSelf:d});{const t=new Error(`Unknown Babbage substrate: ${p.substrate}`);throw t.code="ERR_UNKNOWN_SUBSTRATE",t}}},478:(t,e,r)=>{const o=r(182),n=r(494),a=r(809);t.exports=async({basket:t,tracked:e,includeEnvelope:r=!1,spendable:i,type:s,limit:c=25,offset:d=0})=>{const p=await o();if("cicada-api"===p.substrate)return await n("http://localhost:3301/v1/ninja/getTransactionOutputs",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({basket:t,tracked:e,includeEnvelope:r,spendable:i,type:s,limit:c,offset:d})});if("babbage-xdm"===p.substrate)return new Promise(((o,n)=>{const p=Buffer.from(a()).toString("base64");window.addEventListener("message",(async t=>{if("CWI"===t.data.type&&t.isTrusted&&t.data.id===p&&!t.data.isInvocation)if("error"===t.data.status){const e=new Error(t.data.description);e.code=t.data.code,n(e)}else o(t.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:p,call:"ninja.getTransactionOutputs",params:{basket:t,tracked:e,includeEnvelope:r,spendable:i,type:s,limit:c,offset:d}},"*")}));if("window-api"===p.substrate)return window.CWI.ninja.getTransactionOutputs({basket:t,tracked:e,includeEnvelope:r,spendable:i,type:s,limit:c,offset:d});{const t=new Error(`Unknown Babbage substrate: ${p.substrate}`);throw t.code="ERR_UNKNOWN_SUBSTRATE",t}}},803:(t,e,r)=>{const o=r(182);t.exports=async()=>(await o()).version},361:(t,e,r)=>{t.exports={createAction:r(187),createHmac:r(481),createSignature:r(652),decrypt:r(122),encrypt:r(792),getNetwork:r(138),getPublicKey:r(198),getVersion:r(803),isAuthenticated:r(76),verifyHmac:r(775),verifySignature:r(541),waitForAuthentication:r(636),createCertificate:r(485),getCertificates:r(329),proveCertificate:r(62),submitDirectTransaction:r(484),getTransactionOutputs:r(478)}},76:(t,e,r)=>{const o=r(182),n=r(494),a=r(809);t.exports=async()=>{const t=await o();if("cicada-api"===t.substrate)return await n("http://localhost:3301/v1/isAuthenticated",{method:"get",headers:{"Content-Type":"application/json"}});if("babbage-xdm"===t.substrate)return new Promise(((t,e)=>{const r=Buffer.from(a()).toString("base64");window.addEventListener("message",(async o=>{if("CWI"===o.data.type&&o.isTrusted&&o.data.id===r&&!o.data.isInvocation)if("error"===o.data.status){const t=new Error(o.data.description);t.code=o.data.code,e(t)}else t(o.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:r,call:"isAuthenticated"},"*")}));if("window-api"===t.substrate)return window.CWI.isAuthenticated();{const e=new Error(`Unknown Babbage substrate: ${t.substrate}`);throw e.code="ERR_UNKNOWN_SUBSTRATE",e}}},62:(t,e,r)=>{const o=r(494),n=r(182),a=r(809);t.exports=async({certificate:t,fieldsToReveal:e,verifierPublicIdentityKey:r})=>{const i=await n();if("cicada-api"===i.substrate)return await o("http://localhost:3301/v1/proveCertificate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({certificate:t,fieldsToReveal:e,verifierPublicIdentityKey:r})});if("babbage-xdm"===i.substrate)return new Promise(((o,n)=>{const i=Buffer.from(a()).toString("base64");window.addEventListener("message",(async t=>{if("CWI"===t.data.type&&t.isTrusted&&t.data.id===i&&!t.data.isInvocation)if("error"===t.data.status){const e=new Error(t.data.description);e.code=t.data.code,n(e)}else o(t.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:i,call:"proveCertificate",params:{certificate:t,fieldsToReveal:e,verifierPublicIdentityKey:r}},"*")}));if("window-api"===i.substrate)return window.CWI.proveCertificate({certificate:t,fieldsToReveal:e,verifierPublicIdentityKey:r});{const t=new Error(`Unknown Babbage substrate: ${i.substrate}`);throw t.code="ERR_UNKNOWN_SUBSTRATE",t}}},484:(t,e,r)=>{const o=r(182),n=r(494),a=r(809);t.exports=async({protocol:t,transaction:e,senderIdentityKey:r,note:i,amount:s,derivationPrefix:c})=>{const d=await o();if("cicada-api"===d.substrate)return await n("http://localhost:3301/v1/ninja/submitDirectTransaction",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({protocol:t,transaction:e,senderIdentityKey:r,note:i,amount:s,derivationPrefix:c})});if("babbage-xdm"===d.substrate)return new Promise(((o,n)=>{const d=Buffer.from(a()).toString("base64");window.addEventListener("message",(async t=>{if("CWI"===t.data.type&&t.isTrusted&&t.data.id===d&&!t.data.isInvocation)if("error"===t.data.status){const e=new Error(t.data.description);e.code=t.data.code,n(e)}else o(t.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:d,call:"ninja.submitDirectTransaction",params:{protocol:t,transaction:e,senderIdentityKey:r,note:i,amount:s,derivationPrefix:c}},"*")}));if("window-api"===d.substrate)return window.CWI.ninja.submitDirectTransaction({protocol:t,transaction:e,senderIdentityKey:r,note:i,amount:s,derivationPrefix:c});{const t=new Error(`Unknown Babbage substrate: ${d.substrate}`);throw t.code="ERR_UNKNOWN_SUBSTRATE",t}}},182:function(t,e,r){const o=r(494),n=r(617),a=r(809),i=()=>o("http://localhost:3301/v1/version",{method:"get",headers:{"Content-Type":"application/json"}});t.exports=async()=>{if(("babbage-xdm"===this.substrate||"cicada-api"===this.substrate||"window-api"===this.substrate)&&"string"==typeof this.version)return this;const t='The user does not have a current Babbage identity. Initialize a MetaNet portal onto one of the supported substrates. Supported substrates are "window-api", "babbage-xdm", and "cicada-api".',e=["window-api","babbage-xdm","cicada-api"];if("object"!=typeof window)try{return this.version=await i(),this.substrate="cicada-api",this}catch(r){const o=new Error(t);throw o.code="ERR_NO_METANET_IDENTITY",o.supportedSubstrates=e,o}let r,o;if("string"!=typeof r||"string"!=typeof o)try{r=await window.CWI.getVersion(),o="window-api"}catch(t){}if("string"!=typeof r||"string"!=typeof o)try{r=await(()=>{const t=new Promise(((t,e)=>{try{const r=Buffer.from(a()).toString("base64");window.addEventListener("message",(async o=>{try{if("CWI"!==o.data.type||!o.isTrusted||o.data.id!==r||"object"!=typeof o.data||"string"!=typeof o.data.result)return;t(o.data.result)}catch(o){e(o)}})),window.parent.postMessage({type:"CWI",id:r,call:"getVersion"},"*")}catch(t){e(t)}}));return n({promise:t,timeout:200})})(),o="babbage-xdm"}catch(t){}if("string"!=typeof r||"string"!=typeof o)try{r=await i(),o="cicada-api"}catch(t){}if("string"!=typeof r||"string"!=typeof o){const r=new Error(t);throw r.code="ERR_NO_METANET_IDENTITY",r.supportedSubstrates=e,r}if(!r.startsWith("0.3.")){const t=new Error(`Your MetaNet portal is running an incompatible kernel version ${r} This SDK requires a 0.3.x kernel`);throw t.code="ERR_INCOMPATIBLE_KERNEL",t.compatibleKernels="0.3.x",t.invalidVersion=r,t}return this.substrate=o,this.version=r,this}},809:t=>{t.exports=()=>{let t=(new Date).getTime(),e="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(r){let o=16*Math.random();return t>0?(o=(t+o)%16|0,t=Math.floor(t/16)):(o=(e+o)%16|0,e=Math.floor(e/16)),("x"===r?o:3&o|8).toString(16)}))}},494:(t,e,r)=>{const o="object"!=typeof window?r(444):window.fetch;t.exports=async(t,e={})=>{"object"!=typeof window&&(e.headers={...e.headers,Origin:"http://localhost"});const r=await o(t,e);if("application/octet-stream"===r.headers.get("content-type"))return await r.arrayBuffer();const n=await r.json();if("error"===n.status){const t=new Error(n.description);throw t.code=n.code||"ERR_BAD_REQUEST",Object.keys(n).forEach((e=>{"description"!==e&&"code"!==e&&"status"!==e&&(t[e]=n[e])})),t}return n.result}},617:t=>{t.exports=async({timeout:t,promise:e,error:r})=>(r||(r=new Error("Timed out")),Promise.race([e,new Promise(((e,o)=>setTimeout((()=>o(r)),t)))]))},775:(t,e,r)=>{const o=r(182),n=r(494),a=r(809);t.exports=async({data:t,hmac:e,protocolID:r,keyID:i,description:s="",counterparty:c="self",privileged:d=!1})=>{e&&"string"!=typeof e&&(e.constructor!==Uint8Array&&e.constructor!==Buffer||(e=Buffer.from(e).toString("base64")));const p=await o();if("cicada-api"===p.substrate)return await n(`http://localhost:3301/v1/verifyHmac?protocolID=${encodeURIComponent(r)}&keyID=${encodeURIComponent(i)}&description=${encodeURIComponent(s)}&counterparty=${encodeURIComponent(c)}&privileged=${encodeURIComponent(d)}&hmac=${encodeURIComponent(e)}`,{method:"post",headers:{"Content-Type":"application/octet-stream"},body:t});if("babbage-xdm"===p.substrate)return new Promise(((o,n)=>{const p=Buffer.from(a()).toString("base64");window.addEventListener("message",(async t=>{if("CWI"===t.data.type&&t.isTrusted&&t.data.id===p&&!t.data.isInvocation)if("error"===t.data.status){const e=new Error(t.data.description);e.code=t.data.code,n(e)}else o(t.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:p,call:"verifyHmac",params:{data:t,hmac:e,protocolID:r,keyID:i,description:s,counterparty:c,privileged:d}},"*")}));if("window-api"===p.substrate)return window.CWI.verifyHmac({data:t,hmac:e,protocolID:r,keyID:i,description:s,counterparty:c,privileged:d});{const t=new Error(`Unknown Babbage substrate: ${p.substrate}`);throw t.code="ERR_UNKNOWN_SUBSTRATE",t}}},541:(t,e,r)=>{const o=r(182),n=r(494),a=r(809);t.exports=async({data:t,signature:e,protocolID:r,keyID:i,description:s="",counterparty:c="self",privileged:d=!1,reason:p=""})=>{e&&"string"!=typeof e&&(e.constructor!==Uint8Array&&e.constructor!==Buffer||(e=Buffer.from(e).toString("base64")));const u=await o();if("cicada-api"===u.substrate)return await n(`http://localhost:3301/v1/verifySignature?signature=${encodeURIComponent(e)}&protocolID=${encodeURIComponent(r)}&keyID=${encodeURIComponent(i)}&description=${encodeURIComponent(s)}&counterparty=${encodeURIComponent(c)}&privileged=${encodeURIComponent(d)}&reason=${encodeURIComponent(p)}`,{method:"POST",headers:{"Content-Type":"application/octet-stream"},body:t});if("babbage-xdm"===u.substrate)return new Promise(((o,n)=>{const u=Buffer.from(a()).toString("base64");window.addEventListener("message",(async t=>{if("CWI"===t.data.type&&t.isTrusted&&t.data.id===u&&!t.data.isInvocation)if("error"===t.data.status){const e=new Error(t.data.description);e.code=t.data.code,n(e)}else o(t.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:u,call:"verifySignature",params:{data:t,signature:e,protocolID:r,keyID:i,description:s,counterparty:c,privileged:d,reason:p}},"*")}));if("window-api"===u.substrate)return window.CWI.verifySignature({data:t,signature:e,protocolID:r,keyID:i,description:s,counterparty:c,privileged:d,reason:p});{const t=new Error(`Unknown Babbage substrate: ${u.substrate}`);throw t.code="ERR_UNKNOWN_SUBSTRATE",t}}},636:(t,e,r)=>{const o=r(182),n=r(494),a=r(809);t.exports=async()=>{const t=await o();if("cicada-api"===t.substrate)return await n("http://localhost:3301/v1/waitForAuthentication",{method:"post",headers:{"Content-Type":"application/json"}});if("babbage-xdm"===t.substrate)return new Promise(((t,e)=>{const r=Buffer.from(a()).toString("base64");window.addEventListener("message",(async o=>{if("CWI"===o.data.type&&o.isTrusted&&o.data.id===r&&!o.data.isInvocation)if("error"===o.data.status){const t=new Error(o.data.description);t.code=o.data.code,e(t)}else t(o.data.result)})),window.parent.postMessage({type:"CWI",isInvocation:!0,id:r,call:"waitForAuthentication"},"*")}));if("window-api"===t.substrate)return window.CWI.waitForAuthentication();{const e=new Error(`Unknown Babbage substrate: ${t.substrate}`);throw e.code="ERR_UNKNOWN_SUBSTRATE",e}}},444:e=>{"use strict";e.exports=t}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var a=r[t]={exports:{}};return e[t].call(a.exports,a,a.exports,o),a.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{"use strict";o.r(n),o.d(n,{default:()=>l});var t=o(361),e=o.n(t);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(){a=function(){return t};var t={},e=Object.prototype,o=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",d=i.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(t){p=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof y?e:y,i=Object.create(a.prototype),s=new S(o||[]);return n(i,"_invoke",{value:x(t,r,s)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function y(){}function w(){}function b(){}var h={};p(h,s,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(U([])));g&&g!==e&&o.call(g,s)&&(h=g);var v=b.prototype=y.prototype=Object.create(h);function I(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function a(n,i,s,c){var d=f(t[n],t,i);if("throw"!==d.type){var p=d.arg,u=p.value;return u&&"object"==r(u)&&o.call(u,"__await")?e.resolve(u.__await).then((function(t){a("next",t,s,c)}),(function(t){a("throw",t,s,c)})):e.resolve(u).then((function(t){p.value=t,s(p)}),(function(t){return a("throw",t,s,c)}))}c(d.arg)}var i;n(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){a(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function x(t,e,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return{value:void 0,done:!0}}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var s=C(i,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var c=f(t,e,r);if("normal"===c.type){if(o=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o="completed",r.method="throw",r.arg=c.arg)}}}function C(t,e){var r=e.method,o=t.iterator[r];if(void 0===o)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),l;var n=f(o,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function U(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:N}}function N(){return{value:void 0,done:!0}}return w.prototype=b,n(v,"constructor",{value:b,configurable:!0}),n(b,"constructor",{value:w,configurable:!0}),w.displayName=p(b,d,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,p(t,d,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},I(E.prototype),p(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,o,n,a){void 0===a&&(a=Promise);var i=new E(u(e,r,o,n),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},I(v),p(v,d,"Generator"),p(v,s,(function(){return this})),p(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=U,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return i.type="throw",i.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;R(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:U(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function i(t,e,r,o,n,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(o,n)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(o,n){var a=t.apply(e,r);function s(t){i(a,o,n,s,c,"next",t)}function c(t){i(a,o,n,s,c,"throw",t)}s(void 0)}))}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}for(var d={},p=function(){var t,e,r=(t=f[u],e=2,function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var o,n,a,i,s=[],c=!0,d=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(o=a.call(r)).done)&&(s.push(o.value),s.length!==e);c=!0);}catch(t){d=!0,n=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(d)throw n}}return s}}(t,e)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],n=r[1];d[o]=s(a().mark((function t(){var e=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.apply(void 0,e);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),"ERR_NO_METANET_IDENTITY"===t.t0.code&&window.alert("A MetaNet Client is required for this operation!"),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))},u=0,f=Object.entries(e());u<f.length;u++)p();const l=d})(),n})()));