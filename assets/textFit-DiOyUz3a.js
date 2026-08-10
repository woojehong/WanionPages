function o(e,{max:t=13,min:i=9,comfortable:n=8,step:f=.55}={}){const r=Array.from(String(e||"").trim()).length;return r<=n?`${t}px`:`${Math.max(i,t-(r-n)*f).toFixed(1)}px`}export{o as f};
