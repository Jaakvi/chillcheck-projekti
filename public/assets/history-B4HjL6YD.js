import{f as i}from"./fetch-BAm4Q6xJ.js";/* empty css               */const u=document.querySelector(".get_users");u.addEventListener("click",m);async function m(){console.log("Haetaan kaikki entriet");const n="https://hyte-server-aura.northeurope.cloudapp.azure.com/api/kubios/user-data",e={method:"GET",headers:{Authorization:"Bearer: "+localStorage.getItem("token")}};i(n,e).then(t=>{p(t),console.log(t)})}function p(n){const o=document.querySelector(".tbody");o.innerHTML="",n.results.slice(-10).forEach(e=>{console.log(e.user_comment);const t=document.createElement("tr"),c=document.createElement("td");c.innerText=e.daily_result,t.appendChild(c);const a=document.createElement("td");a.innerText=e.result.artefact_level,t.appendChild(a);const d=document.createElement("td");d.innerText=parseFloat(e.result.stress_index).toFixed(1),t.appendChild(d);const r=document.createElement("td"),l=document.createElement("button");l.className="check",l.innerText="Avaa",l.addEventListener("click",function(){const s=e.user_comment;g(s)}),r.appendChild(l),t.appendChild(r),o.appendChild(t)})}function g(n){const o=document.getElementById("notesDialog"),e=document.getElementById("header"),t=document.getElementById("dialogText");e.innerHTML="";const c=document.createElement("h4");c.textContent="Muistiinpano: ",t.innerText=n,e.appendChild(c),o.showModal()}document.getElementById("closeNotes").addEventListener("click",function(){document.getElementById("notesDialog").close()});document.getElementById("logout").addEventListener("click",h);function h(n){n.preventDefault(),localStorage.removeItem("token"),console.log("Kirjaudutaan ulos"),window.location.href="kirjautuminen.html"}
