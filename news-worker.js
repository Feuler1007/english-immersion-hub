/**
 * English Immersion Hub · Google News RSS proxy
 * Deploy this file as a Cloudflare Worker. Public endpoint: /news
 * Headlines + metadata only; full article content remains on publisher sites.
 */
const FEEDS=[
 ["tech",'NVIDIA OR GPU OR graphics card OR AI hardware when:7d',"tech"],
 ["games",'video game OR gaming OR PlayStation OR Xbox OR Nintendo OR Steam when:7d',"games"],
 ["aviation",'airplane OR aircraft OR airport OR aviation incident OR emergency landing when:7d',"aviation"],
 ["weird",'bizarre OR strange story OR unusual event OR odd news when:7d',"weird"],
 ["animals",'cute animal OR animal rescue OR unusual animal OR pet story when:7d',"animals"],
 ["science",'weird science OR strange discovery OR unusual scientific discovery when:7d',"science"],
 ["internet",'viral internet trend OR meme OR social media bizarre when:7d',"internet"],
 ["transport",'train strange incident OR car bizarre incident OR transportation unusual when:7d',"transport"],
 ["food",'strange food OR bizarre food OR unusual restaurant when:7d',"food"],
 ["wholesome",'heartwarming story OR animal rescued OR good news unusual when:7d',"wholesome"]
];
const BASE="https://news.google.com/rss/search?q=",SUFFIX="&hl=en-US&gl=US&ceid=US:en";
const CORS={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, OPTIONS","Access-Control-Allow-Headers":"Content-Type","Cache-Control":"public, max-age=900"};
function decode(s){return s.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n))).replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16)));}
function getTag(x,n){const m=x.match(new RegExp("<"+n+"(?:\\s[^>]*)?>([\\s\\S]*?)<\/"+n+">","i"));return m?decode(m[1].replace(/^<!\[CDATA\[|\]\]>$/g,"").trim()):"";}
function parse(xml,category){return [...xml.matchAll(/<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/gi)].map(m=>{const x=m[1],pub=getTag(x,"pubDate"),desc=getTag(x,"description");return{title:getTag(x,"title").replace(/\s+-\s+[^-]+$/,"").trim(),url:getTag(x,"link"),source:getTag(x,"source")||"Google News",publishedAt:pub?new Date(pub).toISOString():null,description:desc.replace(/<[^>]+>/g," ").replace(/\s+/g," ").slice(0,260),category};}).filter(x=>x.title&&x.url);}
function score(a){const t=(a.title+" "+a.description).toLowerCase();let n=0;["nvidia","gpu","game","gaming","steam","playstation","xbox","nintendo","weird","bizarre","strange","unusual","airport","plane","aircraft","pilot","animal","cat","dog","puppy","kitten","cute","rescue","viral","meme","space","robot","ai","unexpected","record","squirrel","penguin","duck","fox","turtle","technology","science","odd"].forEach(k=>{if(t.includes(k))n+=2});["war","killed","death toll","murder","mass shooting","terror","graphic","fatal crash","fatal accident","victims","rape","suicide","explosion","disaster","earthquake","flood","wildfire"].forEach(k=>{if(t.includes(k))n-=10});return n;}
export default{async fetch(request){if(request.method==="OPTIONS")return new Response(null,{headers:CORS});const url=new URL(request.url);if(url.pathname!=="/news")return Response.json({ok:true,service:"English Immersion Hub Google News RSS proxy",endpoint:"/news"},{headers:CORS});const limit=Math.max(1,Math.min(100,Number(url.searchParams.get("limit")||70)));try{const results=await Promise.allSettled(FEEDS.map(async f=>{const res=await fetch(BASE+encodeURIComponent(f[1])+SUFFIX,{headers:{"User-Agent":"EnglishImmersionHub/1.0 RSS reader","Accept":"application/rss+xml, application/xml, text/xml"}});if(!res.ok)throw Error("Google News RSS "+res.status);return parse(await res.text(),f[2]);}));const all=results.flatMap(r=>r.status==="fulfilled"?r.value:[]),unique=new Map();for(const a of all){const k=a.title.toLowerCase().replace(/[^a-z0-9]/g,"");if(!unique.has(k))unique.set(k,a);}const articles=[...unique.values()].map(a=>Object.assign(a,{score:score(a)})).filter(a=>a.score>=0).sort((a,b)=>new Date(b.publishedAt||0)-new Date(a.publishedAt||0)||b.score-a.score).slice(0,limit);return Response.json({ok:true,provider:"Google News RSS",fetchedAt:new Date().toISOString(),feedCount:FEEDS.length,articles},{headers:CORS});}catch(e){return Response.json({ok:false,error:e.message,articles:[]},{status:502,headers:CORS});}}};