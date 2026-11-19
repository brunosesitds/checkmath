// Tela de senha (cosmética). Para trocar a senha: abra o console (F12) e rode gerarHash("nova")
// depois cole o número em HASH abaixo.
(function(){
  const HASH=7327437235557853; // senha padrão: 0000
  const f=(str,seed=0)=>{let h1=0xdeadbeef^seed,h2=0x41c6ce57^seed;for(let i=0,ch;i<str.length;i++){ch=str.charCodeAt(i);h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677)}h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);return 4294967296*(2097151&h2)+(h1>>>0)};
  window.gerarHash=s=>console.log(f(String(s)));
  if(sessionStorage.getItem("cat_ok")==="1")return;
  const st=document.createElement("style");
  st.textContent="body>*:not(#gate){display:none!important}#gate{position:fixed;inset:0;display:grid;place-items:center;background:#14141c;color:#eee;font-family:system-ui,sans-serif;text-align:center}#gate form{display:flex;flex-direction:column;gap:12px;align-items:center}#gate input{padding:12px 16px;border-radius:10px;border:0;background:#23232f;color:#eee;font-size:22px;text-align:center;width:160px;letter-spacing:6px}#gate button{padding:10px 24px;border:0;border-radius:999px;background:#7c5cff;color:#fff;font-size:16px;cursor:pointer}#gate p{margin:0;min-height:1.2em;color:#ff7b7b}";
  document.head.appendChild(st);
  document.addEventListener("DOMContentLoaded",()=>{
    const g=document.createElement("div");g.id="gate";
    g.innerHTML='<form><div style="font-size:48px">🔒</div><div>Digite a senha</div><input type="password" inputmode="numeric" autocomplete="off" autofocus><button>Entrar</button><p></p></form>';
    document.body.appendChild(g);
    const i=g.querySelector("input");i.focus();
    g.querySelector("form").onsubmit=e=>{e.preventDefault();
      if(f(i.value)===HASH){sessionStorage.setItem("cat_ok","1");g.remove();st.remove()}
      else{g.querySelector("p").textContent="Senha incorreta";i.value="";i.focus()}};
  });
})();
