const t={block:document.querySelector(".advertising-block"),text:document.querySelector(".advertising-text")},{block:e,text:n}=t;let o=5;n.textContent=`Зачекайте ${o} хвилин`;const l=setInterval((()=>{o-=1,n.textContent=`Зачекайте ${o} хвилин`}),1e3);setTimeout((()=>{clearInterval(l),n.style.display="none"}),1e3*o);
//# sourceMappingURL=advertising.7fa2ebfd.js.map
