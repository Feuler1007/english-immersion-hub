[English Immersion Hub (2).html](https://github.com/user-attachments/files/34762208/English.Immersion.Hub.2.html)
# english-immersion-hub
English Immersion Hub site
<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>English Immersion Hub</title>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{color-scheme:dark;--bg:#16121f;--card:#221c31;--card2:#2c2540;--tx:#f3eefb;--mut:#a79fbd;--ac:#ff5d8f;--ac2:#ffc857;--ok:#4fd6a0;--bad:#ff7a6b;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
html{scroll-padding-top:env(safe-area-inset-top,0px)}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--tx);font:400 16px/1.55 "DM Sans",system-ui,sans-serif}
h1,h2,h3{font-family:"Bricolage Grotesque",system-ui,sans-serif;margin:0 0 .4em;line-height:1.15}
nav{display:flex;gap:6px;overflow-x:auto;padding:12px 16px;position:sticky;top:env(safe-area-inset-top,0px);background:var(--bg);z-index:5}
nav button{white-space:nowrap}
main{max-width:860px;margin:0 auto;padding:8px 16px 48px}
button,.btn{font:inherit;cursor:pointer;border:0;border-radius:999px;padding:9px 16px;background:var(--card2);color:var(--tx);text-decoration:none;display:inline-block;transition:background .15s}
button:hover,.btn:hover{background:#3a3156}
button:focus-visible,.btn:focus-visible,a:focus-visible{outline:2px solid var(--ac2);outline-offset:2px}
.on{background:var(--ac);color:#1a0b12;font-weight:500}
.pri{background:var(--ac);color:#1a0b12;font-weight:500}
.pri:hover{background:#ff7aa4}
.card{background:var(--card);border-radius:16px;padding:18px;margin:12px 0}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px}
.stat{background:var(--card);border-radius:14px;padding:14px}
.stat b{display:block;font:700 26px "Bricolage Grotesque",sans-serif}
.mut{color:var(--mut);font-size:14px}
.bar{height:10px;background:var(--card2);border-radius:9px;overflow:hidden;margin:8px 0}
.bar i{display:block;height:100%;background:linear-gradient(90deg,var(--ac),var(--ac2));transition:width .5s}
.disc{width:84px;height:84px;border-radius:50%;flex:none;display:grid;place-items:center;font:700 28px "Bricolage Grotesque",sans-serif;color:#fff;position:relative}
.disc:after{content:"";position:absolute;inset:36%;border-radius:50%;background:var(--bg);box-shadow:0 0 0 3px rgba(255,255,255,.15)}
.disc span{position:absolute;z-index:1;display:none}
.row{display:flex;gap:14px;align-items:center}
.opts{display:grid;gap:8px;margin-top:12px}
.opts button{text-align:left;border-radius:12px;padding:12px 14px}
.opts .ok{background:var(--ok);color:#06241a}
.opts .no{background:var(--bad);color:#2a0b07}
.tag{font-size:13px;color:var(--mut);background:var(--card2);padding:2px 10px;border-radius:99px;margin-right:4px;display:inline-block}
.chips{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0}
dl{margin:8px 0}dt{font-weight:500}dd{margin:0 0 6px;color:var(--mut)}
.player{aspect-ratio:16/9;border-radius:14px;overflow:hidden;background:#000;margin:12px 0}.player iframe{width:100%;height:100%;border:0}
.poster{display:grid;gap:10px;justify-items:center;text-align:center;padding:26px 16px;background:var(--card);border-radius:14px;margin:12px 0}mark{background:var(--ac2);color:#2a1d00;border-radius:4px;padding:0 3px}.lyr p{margin:2px 0}
input,textarea{width:100%;background:var(--card2);color:var(--tx);border:1px solid #433a5e;border-radius:10px;padding:10px;font:inherit;margin:4px 0}
.toast{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(20px + env(safe-area-inset-bottom,0px));background:var(--ac2);color:#2a1d00;padding:10px 18px;border-radius:99px;font-weight:500;z-index:9}
</style></head><body>
<nav id="nav"></nav><main id="view"></main>
<script>
const $=s=>document.querySelector(s);
const LV=["Beginner","Elementary","Pre-Intermediate","Intermediate","Upper-Intermediate","Advanced"],TH=[0,100,250,500,900,1500];
const GOAL=60;
const SONGS=[
{id:"bj",t:"Billie Jean",a:"Michael Jackson",c:"Michael Jackson",y:"Zi_XLOBDo_Y",l:"Intermediário",h:330,m:"O narrador nega ser o pai do filho de uma mulher que o acusa, e a música fala de fama, boatos e pressão pública.",v:[["claim","alegar, afirmar"],["rumor","boato"],["deny","negar"],["truth","verdade"]],e:[["take the blame","levar a culpa"],["spread a rumor","espalhar um boato"]],f:["Don’t believe every ___ you read online.",["rumor","kitchen","window"],"rumor"]},
{id:"bi",t:"Beat It",a:"Michael Jackson",c:"Michael Jackson",y:"oRdxUFDoQe0",l:"Iniciante",h:10,m:"Uma mensagem para fugir de brigas: ser corajoso de verdade é saber evitar o confronto.",v:[["fight","briga, lutar"],["brave","corajoso"],["tough","durão"],["run away","fugir"]],e:[["beat it","sai fora, vai embora (gíria)"],["back down","recuar, ceder"]],f:["He didn’t want trouble, so he decided to back ___.",["down","pizza","blue"],"down"]},
{id:"dm",t:"Dear Mama",a:"2Pac",c:"2Pac",y:"Mb1ZvUDvLDY",l:"Intermediário",h:200,m:"Uma homenagem à mãe, que criou o filho sozinha enfrentando dificuldades, com gratidão e honestidade.",v:[["struggle","luta, dificuldade"],["grateful","grato"],["raise","criar (um filho)"],["sacrifice","sacrifício"]],e:[["look up to","admirar"],["bring up","criar, educar"]],f:["I really look ___ to my mother.",["up","out","sad"],"up"]},
{id:"ch",t:"Changes",a:"2Pac",c:"2Pac",y:"eXvBjCO19QY",l:"Avançado",h:35,m:"Uma crítica à desigualdade, à violência e ao racismo, dizendo que as coisas precisam mudar.",v:[["poverty","pobreza"],["violence","violência"],["wrong","errado"],["change","mudança"]],e:[["face the facts","encarar os fatos"],["make a change","provocar uma mudança"]],f:["We need to face the ___ and fix this.",["facts","cats","soups"],"facts"]},
{id:"vi",t:"Virtual Insanity",a:"Jamiroquai",c:"Jamiroquai",y:"4JkIs37a2JE",l:"Avançado",h:270,m:"Uma crítica ao futuro cada vez mais artificial e tecnológico, longe da natureza.",v:[["insane","louco"],["future","futuro"],["nature","natureza"],["technology","tecnologia"]],e:[["what’s going on","o que está acontecendo"],["make a difference","fazer diferença"]],f:["Spending time in ___ helps me relax.",["nature","phones","taxes"],"nature"]},
{id:"ir",t:"Iris",a:"Goo Goo Dolls",c:"Goo Goo Dolls",y:"NdYWuo9OFAw",l:"Intermediário",h:180,m:"Sobre querer ser visto e amado de verdade, deixando as defesas de lado e se mostrando vulnerável.",v:[["soul","alma"],["breathe","respirar"],["real","de verdade"],["feel","sentir"]],e:[["be yourself","seja você mesmo"],["let someone in","deixar alguém se aproximar"]],f:["It’s hard to ___ people in after a bad breakup.",["let","eat","jump"],"let"]},
{id:"ly",t:"Lose Yourself",a:"Eminem",c:"Hip-hop e Rap",y:"_Yhyp-_hX2s",l:"Avançado",h:15,m:"Sobre aproveitar uma única chance na vida, lidando com nervosismo e medo de falhar.",v:[["chance","chance, oportunidade"],["nervous","nervoso"],["moment","momento"],["shot","tentativa, chance"]],e:[["once in a lifetime","uma vez na vida"],["seize the moment","aproveitar o momento"]],f:["This is a once in a ___ opportunity.",["lifetime","table","sandwich"],"lifetime"]},
{id:"gp",t:"Gangsta’s Paradise",a:"Coolio",c:"Edits (carros, jogos, filmes)",y:"fPO76Jlnz6c",l:"Intermediário",h:300,m:"Um retrato sombrio de uma vida difícil e sem muitas escolhas, muito usada em edits e vídeos cinematográficos.",v:[["paradise","paraíso"],["fear","medo"],["spend","gastar, passar (tempo)"],["walk through","atravessar"]],e:[["watch your back","tome cuidado"],["no way out","sem saída"]],f:["Be careful out there and watch your ___.",["back","hat","cake"],"back"]},
{id:"bl",t:"Blinding Lights",a:"The Weeknd",c:"TikTok",y:"4NRXx6U8ABQ",l:"Iniciante",h:350,m:"Saudade e solidão de quem dirige à noite pensando em alguém, um dos maiores sucessos virais do TikTok.",v:[["blind","cego, ofuscar"],["lonely","solitário"],["miss","sentir falta de"],["drive","dirigir"]],e:[["miss you","sinto sua falta"],["can’t sleep","não consigo dormir"]],f:["I really ___ you when you travel.",["miss","paint","wash"],"miss"]}
];
const CT={M:["Michael Jackson","Michael Jackson"],P:["2Pac","2Pac"],H:["Hip-hop e Rap"],R:["Rock internacional"],O:["Pop internacional"],T:["TikTok"],E:["Edits (carros, jogos, filmes)"],C:["Clássicos internacionais"]},LL={I:"Iniciante",M:"Intermediário",A:"Avançado"};
const EX=`Thriller|Michael Jackson|M|sOnqjkJTMaA|M|Uma noite de terror divertida, com monstros e suspense, num dos clipes mais famosos da história.|scary=assustador;ghost=fantasma;midnight=meia-noite;monster=monstro|creep out=assustar alguém
Smooth Criminal|Michael Jackson|M|h_D3VFfhvs4|M|A história de uma investigação sobre o ataque a uma mulher chamada Annie.|criminal=criminoso;attack=ataque;apartment=apartamento;wound=ferida|crime scene=cena do crime
Man in the Mirror|Michael Jackson|M|PivWY9wn5ps|M|A mudança começa por você: olhe para si antes de tentar consertar o mundo.|mirror=espelho;change=mudar;selfish=egoísta;world=mundo|start with yourself=começar por você mesmo
Black or White|Michael Jackson|M|F2AitTPI5U0|M|Uma mensagem contra o racismo e o preconceito: o que importa é quem a pessoa é.|race=raça;prejudice=preconceito;skin=pele;gang=gangue|it doesn’t matter=não importa
They Don’t Care About Us|Michael Jackson|M|QNJL6nfu__Q|A|Um protesto contra injustiça, preconceito e abuso de poder.|injustice=injustiça;abuse=abuso;police=polícia;protest=protesto|stand up for=defender, lutar por
Earth Song|Michael Jackson|M|XAi3VTSdTxU|M|Um lamento pelo planeta, pelos animais e pelas guerras.|planet=planeta;war=guerra;animals=animais;cry=chorar|take care of=cuidar de
California Love|2Pac|P|omOCHrh8vQs|M|Uma celebração da Califórnia, da festa e da costa oeste, com Dr. Dre.|party=festa;west coast=costa oeste;ride=andar de carro;crowd=multidão|throw a party=fazer uma festa
Without Me|Eminem|H|YVkUvmDQ3HY|A|Eminem volta ao cenário do rap provocando críticos e a cultura pop.|comeback=retorno;critic=crítico;controversy=polêmica;miss=sentir falta|make a comeback=voltar à ativa
Mockingbird|Eminem|H|S9bCLPwzSC0|M|Uma carta de pai para os filhos, prometendo cuidar deles apesar das dificuldades.|promise=promessa;daughter=filha;hurt=machucar;dream=sonho|hang in there=aguente firme
Juicy|The Notorious B.I.G.|H|_JZom_gVfuw|A|A trajetória da pobreza ao sucesso, com nostalgia de quem venceu.|success=sucesso;rise=subir;hustle=correria;dream=sonho|rags to riches=da pobreza à riqueza
Empire State of Mind|Jay-Z e Alicia Keys|H|vk6014HuxcE|M|Uma homenagem a Nova York, a cidade onde os sonhos se realizam.|empire=império;city=cidade;streets=ruas;lights=luzes|big apple=Nova York (apelido)
Stronger|Kanye West|H|PsO6ZnUZI0g|M|Superar as dificuldades e ficar mais forte, muito usada em treinos e edits.|stronger=mais forte;faster=mais rápido;harder=mais difícil;better=melhor|what doesn’t kill you makes you stronger=o que não mata fortalece
Bohemian Rhapsody|Queen|R|fJ9rUzIMcZQ|A|Uma narrativa teatral e dramática sobre culpa, destino e liberdade.|reality=realidade;fantasy=fantasia;landslide=deslizamento;mama=mamãe|easy come, easy go=veio fácil, vai fácil
Smells Like Teen Spirit|Nirvana|R|hTWKbfoikeg|A|O hino do grunge, sobre apatia e rebeldia da juventude.|teen=adolescente;spirit=espírito;boring=entediante;rebel=rebelde|teen spirit=espírito adolescente
Livin’ on a Prayer|Bon Jovi|R|lDK9QqIzhwk|M|Um casal jovem enfrenta dificuldades acreditando que vai dar certo.|prayer=oração;halfway=pela metade;work=trabalho;struggle=luta|hold on=aguentar firme
Wonderwall|Oasis|R|bx1Bh8ZvH84|M|Sobre alguém que serve de apoio emocional para outra pessoa.|maybe=talvez;save=salvar;hope=esperança;road=estrada|you’re my wonderwall=você é meu apoio
In the End|Linkin Park|R|eVTXPUF4Oz4|M|Sobre esforço, tempo e a frustração de ver que nem tudo dá certo.|effort=esforço;waste=desperdiçar;matter=importar;try=tentar|in the end=no final das contas
Someone Like You|Adele|O|hLQl3WQQoQ0|I|Uma balada sobre aceitar o fim de um relacionamento e desejar o melhor ao ex.|forget=esquecer;find=encontrar;regret=arrepender-se;memory=lembrança|move on=seguir em frente
Shape of You|Ed Sheeran|O|JGwWNGJdvx8|I|Atração e flerte numa noite de bar, com ritmo grudento.|body=corpo;feel=sentir;dance=dançar;bar=bar|hit it off=se dar bem logo de cara
See You Again|Wiz Khalifa e Charlie Puth|O|RgKAFK5djSk|I|Uma despedida emocionada e a esperança de reencontrar um amigo querido.|friend=amigo;road=estrada;memories=lembranças;miss=sentir falta|see you around=até mais
Shallow|Lady Gaga e Bradley Cooper|O|bo_efYhYU2A|M|Cansaço da vida comum e vontade de mergulhar em algo mais profundo.|shallow=raso;deep=profundo;fall=cair;crash=bater|dive in=mergulhar de cabeça
Heat Waves|Glass Animals|T|mRD0-GxqHVo|M|Saudade e confusão por causa de um relacionamento que ficou para trás.|heat=calor;wave=onda;stay=ficar;late=tarde|can’t help it=não consigo evitar
As It Was|Harry Styles|T|H5v3kku4y6Q|I|Sobre mudança, solidão e saudade de como as coisas eram.|change=mudança;alone=sozinho;turn around=virar;old=velho|as it was=como era antes
Sweater Weather|The Neighbourhood|T|GCdwKhTtNNw|I|Frio e proximidade, ótima para vídeos e edits calmos.|sweater=suéter;weather=clima;cold=frio;close=perto|warm up=esquentar
Save Your Tears|The Weeknd|T|XXYlFuWEuKI|I|Arrependimento por ter magoado alguém e a sensação de que é tarde demais.|tears=lágrimas;sorry=desculpa;hurt=machucar;too late=tarde demais|it’s too late=é tarde demais
Seven Nation Army|The White Stripes|E|0J2QdDbelmY|M|Riff famoso, tema de estádios, sobre se sentir pressionado e cercado.|army=exército;nation=nação;fight=lutar;talk=conversar|fight back=revidar
Another One Bites the Dust|Queen|E|rY0WxgSXdEE|M|Baixo marcante, muito usada em edits, sobre inimigos caindo um a um.|dust=poeira;bite=morder;shoot=atirar;walk=andar|bite the dust=cair derrotado
Eye of the Tiger|Survivor|E|btPJPFnesV4|I|Superação e foco, trilha de Rocky III, perfeita para treinos e edits.|tiger=tigre;rival=rival;fight=lutar;survive=sobreviver|eye of the tiger=garra e determinação
Thunderstruck|AC/DC|E|v2AC41dglnM|M|Energia pura de rock, sobre ser atingido por um trovão.|thunder=trovão;struck=atingido;loud=alto;rock=rock|loud and clear=alto e claro
Imagine|John Lennon|C|YkgkThdzX-8|I|Um convite a imaginar um mundo em paz, sem fronteiras.|imagine=imaginar;peace=paz;heaven=céu;dream=sonho|give peace a chance=dar uma chance à paz
Hey Jude|The Beatles|C|A_MjCqQoLLA|I|Um conselho de ânimo: não tenha medo de se abrir e confiar no amor.|afraid=com medo;better=melhor;sad=triste;skin=pele|cheer up=anime-se
Hotel California|Eagles|C|BciS5krYL80|A|Um hotel misterioso onde o visitante entra e não consegue mais sair.|desert=deserto;guest=hóspede;leave=sair;dark=escuro|check out=fazer check-out
Take On Me|a-ha|C|djV11Xbc914|I|Um convite para tentar um relacionamento e aproveitar a chance.|chance=chance;away=longe;sure=certo;take=aceitar|take a chance=arriscar`.split("\n").map(l=>{const p=l.split("|");return{id:"x"+p[3],t:p[0],a:p[1],c:CT[p[2]][0],y:p[3],l:LL[p[4]],h:[...p[0]].reduce((a,c)=>a+c.charCodeAt(0),0)*7%360,m:p[5],v:p[6].split(";").map(x=>x.split("=")),e:p[7].split(";").map(x=>x.split("=")),f:null}});
SONGS.push(...EX);
const yt=s=>s.y?"https://www.youtube.com/watch?v="+s.y:"https://www.youtube.com/results?search_query="+encodeURIComponent(s.t+" "+s.a+" official video");
const EX2=`Rolling in the Deep|Adele|O|M|Mágoa e raiva depois de uma traição, e a força para seguir em frente.|scar=cicatriz;fire=fogo;betray=trair;heart=coração|move on=seguir em frente
Thinking Out Loud|Ed Sheeran|O|I|Uma declaração de amor que imagina o casal junto até a velhice.|grow old=envelhecer;darling=querido(a);love=amor;heart=coração|fall in love=se apaixonar
Perfect|Ed Sheeran|O|I|Uma canção de amor sobre ter encontrado a pessoa certa.|perfect=perfeito;dance=dançar;darling=querido(a);hold=segurar|hold hands=dar as mãos
Uptown Funk|Mark Ronson e Bruno Mars|O|M|Funk festivo, cheio de estilo e confiança, feito para dançar.|funk=funk;hot=quente;style=estilo;dance=dançar|show off=se exibir
Just the Way You Are|Bruno Mars|O|I|Um elogio carinhoso: você é perfeita do jeito que é.|amazing=incrível;perfect=perfeito;change=mudar;beautiful=bonito|just the way you are=do jeito que você é
Counting Stars|OneRepublic|O|M|Sobre dinheiro, sonhos e viver sem se preocupar tanto com o amanhã.|count=contar;star=estrela;dream=sonho;money=dinheiro|lose sleep=perder o sono
Bad Guy|Billie Eilish|T|M|Ironia e atitude: a cantora brinca com a ideia de ser a vilã.|bad guy=vilão;tough=durão;mood=humor;duty=dever|act tough=fingir ser durão
Happier Than Ever|Billie Eilish|T|M|Desabafo sobre um relacionamento que acabou mal, indo da calma à explosão.|happier=mais feliz;hurt=machucar;leave=deixar;ever=sempre|fed up=de saco cheio
Levitating|Dua Lipa|T|I|Pop dançante sobre a empolgação de uma paixão que faz flutuar.|levitate=levitar;moonlight=luar;dance=dançar;fall=cair|out of this world=fora deste mundo
Don’t Start Now|Dua Lipa|T|I|Superação de um ex: ela segue a vida e não quer ele de volta.|ex=ex;walk=andar;heart=coração;dance=dançar|get over=superar
Lucid Dreams|Juice WRLD|T|M|A dor de um relacionamento que acabou e a dificuldade de esquecer.|dream=sonho;pain=dor;lose=perder;forget=esquecer|let go=deixar ir
Viva la Vida|Coldplay|R|A|Um rei que perdeu o poder reflete sobre ascensão e queda.|king=rei;rule=governar;fall=cair;power=poder|rise and fall=ascensão e queda
Yellow|Coldplay|R|I|Uma declaração de amor simples e sincera.|yellow=amarelo;star=estrela;shine=brilhar;love=amor|shine bright=brilhar forte
Numb|Linkin Park|R|M|Sobre a pressão e as expectativas que deixam alguém sem sentir nada.|numb=dormente;pressure=pressão;expect=esperar;tired=cansado|live up to=corresponder a
Sweet Child o’ Mine|Guns N’ Roses|R|M|Uma canção de amor cheia de nostalgia, com um dos riffs mais famosos do rock.|sweet=doce;child=criança;smile=sorriso;memory=lembrança|bring back memories=trazer lembranças
Have You Ever Seen the Rain?|Creedence Clearwater Revival|C|M|Uma imagem de tristeza que aparece mesmo quando tudo parece bem.|rain=chuva;sunny=ensolarado;storm=tempestade;ever=alguma vez|rain or shine=faça chuva ou faça sol
Stand by Me|Ben E. King|C|I|Uma promessa de ficar ao lado de alguém nos momentos difíceis.|stand=ficar de pé;dark=escuro;night=noite;afraid=com medo|stand by someone=apoiar alguém
Country Roads|John Denver|C|I|Saudade de casa e das estradas do interior.|road=estrada;home=casa;mountain=montanha;miss=sentir falta|homesick=com saudade de casa
Believer|Imagine Dragons|E|M|Transformar dor em força, muito usada em treinos e edits.|pain=dor;break=quebrar;strength=força;believer=quem acredita|break down=desmoronar
Radioactive|Imagine Dragons|E|M|Sensação de recomeço num mundo em colapso, popular em jogos e edits.|radioactive=radioativo;dust=poeira;survive=sobreviver;world=mundo|start over=recomeçar
Hall of Fame|The Script|E|I|Incentivo para correr atrás dos sonhos e entrar para a história.|dream=sonho;fame=fama;champion=campeão;proud=orgulhoso|stand tall=ficar de cabeça erguida
Love the Way You Lie|Eminem e Rihanna|H|A|Um relacionamento tóxico e o ciclo de brigas e reconciliações.|lie=mentira;burn=queimar;rage=raiva;hurt=machucar|on and off=vai e volta
Keep Ya Head Up|2Pac|P|M|Mensagem de apoio e respeito às mulheres, incentivando a não desistir.|respect=respeito;struggle=luta;proud=orgulhoso;strong=forte|keep your head up=mantenha a cabeça erguida
Don’t Stop ’Til You Get Enough|Michael Jackson|M|I|Convite para dançar sem parar e se entregar à música.|enough=suficiente;stop=parar;power=poder;dance=dançar|keep going=continuar
Rock with You|Michael Jackson|M|I|Vontade de dançar e curtir a noite junto com alguém.|rock=balançar;night=noite;dance=dançar;feel=sentir|rock with someone=curtir junto
Heal the World|Michael Jackson|M|I|Um pedido por um mundo melhor, com amor e cuidado com as crianças.|heal=curar;world=mundo;children=crianças;better=melhor|make the world a better place=tornar o mundo melhor
Bad|Michael Jackson|M|M|Atitude e confiança; aqui “bad” é gíria para “muito bom”.|bad=ruim (gíria: ótimo);tough=durão;street=rua;stand=ficar|stand your ground=manter sua posição`.split("\n").map(l=>{const p=l.split("|");return{id:"n"+p[0].replace(/\W/g,""),t:p[0],a:p[1],c:CT[p[2]][0],y:null,l:LL[p[3]],h:[...p[0]].reduce((a,c)=>a+c.charCodeAt(0),0)*7%360,m:p[4],v:p[5].split(";").map(x=>x.split("=")),e:p[6].split(";").map(x=>x.split("=")),f:null}});
SONGS.push(...EX2);
const cats=()=>["Todas",...new Set(SONGS.map(s=>s.c))];
const REAL=[["gonna","going to","vou, vai (futuro)","GÓ-na","I’m gonna call you later.","informal"],["wanna","want to","querer","UÓ-na","Do you wanna grab lunch?","informal"],["gotta","got to / have to","ter que","GÓ-ra","I gotta go now.","informal"],["kinda","kind of","meio, mais ou menos","KÁIN-da","It’s kinda cold today.","informal"],["lemme","let me","deixa eu","LÉ-mi","Lemme check real quick.","informal"],["gimme","give me","me dá","GUÍ-mi","Gimme a minute.","informal"],["ain’t","am not / is not / has not","não (muito informal)","ÊINT","That ain’t right.","gíria"],["IDK","I don’t know","não sei","ai-di-QUEI","IDK, maybe tomorrow?","chat"],["BTW","by the way","a propósito","bi-ti-DÁBLIU","BTW, I loved that song.","chat"],["IMO","in my opinion","na minha opinião","ai-ém-ÔU","IMO, that’s the best album.","chat"],["TBH","to be honest","sendo sincero","ti-bi-ÊITCH","TBH, I didn’t like the ending.","chat"],["NGL","not gonna lie","não vou mentir","én-dji-ÉL","NGL, that edit was amazing.","chat e gíria"],["WTH","what the hell","que diabos","dábliu-ti-ÊITCH","WTH is that noise?","gíria"],["BRB","be right back","já volto","bi-ar-BI","BRB, getting some water.","chat"],["FYI","for your information","para sua informação","éf-uai-AI","FYI, the store closes soon.","neutro e chat"]];
const DAILY=[["Restaurante: o garçom pergunta “Ready to order?”. Qual resposta é mais natural?",["Yeah, I’ll have the burger, please.","I want eat burger.","Yes, I am ready for order.","Give burger."],0,"“I’ll have…” é o jeito natural de pedir comida."],["Um amigo chama: “Wanna hang out later?” e você quer ir.",["Sure, sounds good!","I am wanting go.","Yes, I hang out.","No problem, I wanna."],0,"“Sounds good” aceita um convite de forma leve."],["Na loja, a vendedora pergunta “Need any help?” e você só quer olhar.",["I’m just looking, thanks.","I look only.","No help me.","Just see."],0,"“I’m just looking” é a resposta padrão."],["Num jogo online, um colega erra e pede desculpa. Resposta amigável:",["No worries, it happens!","You are bad.","I don’t forgive.","Is okay for me yes."],0,"“No worries” significa sem problema."],["No aeroporto, você não entendeu o que a pessoa disse.",["Sorry, could you say that again?","What?","I no understand.","Repeat."],0,"É educado e natural para pedir repetição."]];

let S={xp:0,streak:0,last:"",day:"",dxp:0,done:{},weak:{}};
try{S=Object.assign(S,JSON.parse(localStorage.getItem("eih")||"{}"))}catch(e){}
S.custom=S.custom||[];S.lyrics=S.lyrics||{};SONGS.push(...S.custom);
const esc=t=>String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;");
const today=()=>new Date().toISOString().slice(0,10);
function save(){try{localStorage.setItem("eih",JSON.stringify(S))}catch(e){}}
function lvl(){let i=0;TH.forEach((t,k)=>{if(S.xp>=t)i=k});return i}
const sh=a=>[...a].sort(()=>Math.random()-.5);
const pick=(a,n)=>sh(a).slice(0,n);
function toast(t){const d=document.createElement("div");d.className="toast";d.textContent=t;document.body.appendChild(d);setTimeout(()=>d.remove(),1800)}
function touch(){const t=today();if(S.day!==t){S.day=t;S.dxp=0}
 if(S.last!==t){const y=new Date(Date.now()-864e5).toISOString().slice(0,10);S.streak=S.last===y?S.streak+1:1;S.last=t}}

/* item builders */
const realItems=()=>REAL.map(r=>({id:"r:"+r[0],q:"O que significa “"+r[0]+"”?",a:r[1],opts:[r[1],...pick(REAL.filter(x=>x!==r).map(x=>x[1]),3)],note:r[0]+" = "+r[1]+" ("+r[2]+"). Exemplo: "+r[4]}));
const vocabItems=s=>s.v.map(v=>({id:"v:"+v[0],q:"Na música “"+s.t+"”, o que significa “"+v[0]+"”?",a:v[1],opts:[v[1],...pick(SONGS.flatMap(x=>x.v).filter(x=>x[0]!==v[0]).map(x=>x[1]),3)],note:v[0]+" = "+v[1]}));
const songItems=s=>[...vocabItems(s),...(s.f?[{id:"f:"+s.id,q:"Complete a frase: "+s.f[0],a:s.f[2],opts:s.f[1],note:"Expressão da música “"+s.t+"”."}]:[]),...lyricItems(s),...s.e.map(e=>({id:"e:"+e[0],q:"Qual é o sentido de “"+e[0]+"”?",a:e[1],opts:[e[1],...pick(SONGS.flatMap(x=>x.e).filter(x=>x[0]!==e[0]).map(x=>x[1]),3)],note:e[0]+" = "+e[1]}))];
const lyricItems=s=>{const t=S.lyrics[s.id]||"";const L=t.split("\n").map(x=>x.trim()).filter(x=>x.split(/\s+/).length>=4);const W=[...new Set(t.toLowerCase().match(/[a-z’']{4,}/g)||[])];if(W.length<4)return[];return pick(L,8).map(ln=>{const ws=ln.split(/\s+/),c=ws.map((w,k)=>[w,k]).filter(x=>x[0].replace(/[^a-zA-Z’']/g,"").length>=4);if(!c.length)return null;const [w,k]=pick(c,1)[0],a=w.replace(/[^a-zA-Z’']/g,"").toLowerCase();ws[k]="_____";return{id:"l:"+s.id+":"+ln.slice(0,24),q:"Ouça a música e complete: "+ws.join(" "),a,opts:[a,...pick(W.filter(x=>x!==a),3)],note:"Frase completa: "+ln}}).filter(Boolean)};
const dailyItems=()=>DAILY.map((d,i)=>({id:"d:"+i,q:d[0],a:d[1][d[2]],opts:d[1],note:d[3]}));

/* quiz engine */
function quiz(items,title,back){
 let i=0,hit=0;
 const step=()=>{
  if(i>=items.length){touch();save();
   $("#view").innerHTML=`<div class="card"><h2>${title}: concluído</h2><p>Você acertou ${hit} de ${items.length}. XP total: ${S.xp}.</p><button class="pri" id="b1">Voltar</button> <button id="b2">Revisar erros</button></div>`;
   $("#b1").onclick=back;$("#b2").onclick=()=>go("review");return}
  const it=items[i],o=sh(it.opts);
  $("#view").innerHTML=`<div class="card"><p class="mut">${title}, pergunta ${i+1} de ${items.length}</p><h3>${it.q}</h3><div class="opts">${o.map((x,k)=>`<button data-k="${k}">${x}</button>`).join("")}</div><p id="fb" class="mut"></p></div><button id="ex">Sair</button>`;
  $("#ex").onclick=back;
  document.querySelectorAll(".opts button").forEach(b=>b.onclick=()=>{
   const ok=o[b.dataset.k]===it.a;touch();
   document.querySelectorAll(".opts button").forEach(x=>{x.disabled=true;if(o[x.dataset.k]===it.a)x.classList.add("ok")});
   if(ok){hit++;S.xp+=10;S.dxp+=10;S.done[it.id]=(S.done[it.id]||0)+1;if(S.weak[it.id]){S.weak[it.id].ok=(S.weak[it.id].ok||0)+1;if(S.weak[it.id].ok>=2)delete S.weak[it.id]}}
   else{b.classList.add("no");S.xp=Math.max(0,S.xp-2);const w=S.weak[it.id]||{item:it,n:0,ok:0};w.n++;w.ok=0;w.item=it;S.weak[it.id]=w}
   save();$("#fb").innerHTML=(ok?"Correto! +10 XP. ":"Quase! −2 XP. A resposta é “"+it.a+"”. ")+it.note+`<br><br><button class="pri" id="nx">Continuar</button>`;
   $("#nx").onclick=()=>{i++;step()}});
 };step();
}

/* views */
const TABS=[["home","Início"],["music","Músicas"],["real","Inglês real"],["daily","Dia a dia"],["review","Meus erros"]];
function go(v,arg){touch();save();
 $("#nav").innerHTML=TABS.map(t=>`<button class="${t[0]===v?"on":""}" data-v="${t[0]}">${t[1]}</button>`).join("");
 document.querySelectorAll("#nav button").forEach(b=>b.onclick=()=>go(b.dataset.v));
 scrollTo(0,0);V[v](arg)}
const disc=s=>`<div class="disc" style="background:conic-gradient(hsl(${s.h} 70% 50%),hsl(${s.h+60} 70% 35%),hsl(${s.h} 70% 50%))" aria-hidden="true"></div>`;
const V={
home(){
 const L=lvl(),next=TH[L+1]??TH[L],pct=L>=5?100:Math.round((S.xp-TH[L])/(next-TH[L])*100);
 const day=Math.floor(Date.now()/864e5),ph=REAL[day%REAL.length],sg=SONGS[day%SONGS.length];
 const wk=Object.keys(S.weak).length,ln=Object.keys(S.done).length;
 const ach=[["Primeira resposta certa",ln>=1],["100 XP",S.xp>=100],["3 dias seguidos",S.streak>=3],["20 itens aprendidos",ln>=20],["Meta diária batida",S.dxp>=GOAL]];
 $("#view").innerHTML=`<h1>English Immersion Hub</h1><p class="mut">Aprenda inglês com música e conversas reais. Comece pelo treino rápido.</p>
 <div class="stats"><div class="stat"><b>${LV[L]}</b>nível ${L+1} de 6</div><div class="stat"><b>${S.xp}</b>XP total</div><div class="stat"><b>${S.streak}</b>dias seguidos</div><div class="stat"><b>${ln}</b>itens aprendidos</div></div>
 <div class="card"><b>Meta de hoje: ${Math.min(S.dxp,GOAL)} de ${GOAL} XP</b><div class="bar"><i style="width:${Math.min(100,S.dxp/GOAL*100)}%"></i></div><b>Rumo ao próximo nível</b><div class="bar"><i style="width:${pct}%"></i></div>
 <button class="pri" id="qk">Treino rápido de hoje</button> <button id="rv">Revisar erros (${wk})</button></div>
 <div class="card"><h3>Expressão do dia: ${ph[0]}</h3><p>${ph[0]} = ${ph[1]} (${ph[2]})<br><span class="mut">Pronúncia: ${ph[3]}. Exemplo: ${ph[4]}</span></p></div>
 <div class="card row">${disc(sg)}<div><h3>Música recomendada</h3><p>${sg.t}, ${sg.a}</p><button id="sg">Estudar esta música</button></div></div>
 <div class="card"><h3>Conquistas</h3><div class="chips">${ach.map(a=>`<span class="tag" style="${a[1]?"background:var(--ok);color:#06241a":""}">${a[1]?"Desbloqueada: ":"Bloqueada: "}${a[0]}</span>`).join("")}</div></div>`;
 $("#qk").onclick=()=>quiz(sh([...pick(realItems(),3),...pick(dailyItems(),2),...pick(SONGS.flatMap(vocabItems),3)]),"Treino rápido",()=>go("home"));
 $("#rv").onclick=()=>go("review");$("#sg").onclick=()=>go("music",sg.id)},
music(id){
 let cat="Todas";
 const addSong=()=>{const t=$("#at").value.trim(),a=$("#aa").value.trim(),m=$("#au").value.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);if(!t||!m){toast("Preencha o título e um link válido do YouTube");return}const s={id:"u"+Date.now(),t,a:a||"Desconhecido",c:"Minhas músicas",y:m[1],l:"Personalizada",h:t.length*37%360,m:"Música adicionada por você. Cole a letra abaixo para gerar exercícios.",v:[],e:[],f:null};S.custom.push(s);SONGS.push(s);save();cat="Minhas músicas";draw()};
 const draw=()=>{
  $("#view").innerHTML=`<h2>Biblioteca musical</h2><div class="chips">${cats().map(c=>`<button class="${c===cat?"on":""}" data-c="${c}">${c}</button>`).join("")}</div><div class="card"><h3>Adicionar música</h3><input id="at" placeholder="Título"><input id="aa" placeholder="Artista"><input id="au" placeholder="Link do YouTube"><button id="ad" class="pri">Adicionar</button></div><div class="grid">${SONGS.filter(s=>cat==="Todas"||s.c===cat).map(s=>`<div class="card row" style="margin:0">${disc(s)}<div><b>${s.t}</b><br><span class="mut">${s.a}</span><br><span class="tag">${s.l}</span><br><button data-s="${s.id}" style="margin-top:8px">Estudar</button></div></div>`).join("")}</div>`;
  document.querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>{cat=b.dataset.c;draw()});
  document.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>detail(b.dataset.s));$("#ad").onclick=addSong};
 const detail=i=>{const s=SONGS.find(x=>x.id===i);const VW=s.v.map(x=>x[0].toLowerCase()),rd=t=>esc(t).split("\n").map(l=>`<p>${l.replace(/[A-Za-z’']+/g,w=>VW.includes(w.toLowerCase())?`<mark>${w}</mark>`:w)}</p>`).join("");
  $("#view").innerHTML=`<button id="bk">Voltar à biblioteca</button><div class="card row" style="margin-top:12px">${disc(s)}<div><h2>${s.t}</h2><p class="mut">${s.a} <span class="tag">${s.l}</span></p><a class="btn" target="_blank" rel="noopener noreferrer" href="${yt(s)}">Abrir no YouTube</a></div></div><div id="pp" class="poster">${disc(s)}<a class="btn pri" target="_blank" rel="noopener noreferrer" href="${yt(s)}">Assistir no YouTube</a>${s.y?'<button id="em">Tentar player aqui na página</button>':""}<span class="mut" style="word-break:break-all">${yt(s)}</span><span class="mut">Se o player aparecer bloqueado, o ambiente onde o site está hospedado não permite vídeos embutidos. O botão acima sempre funciona.</span></div>
  <div class="card"><h3>O que a música quer dizer</h3><p>${s.m}</p><p class="mut">Dica: ouça uma vez só prestando atenção, depois ouça lendo a letra no próprio YouTube e compare com o vocabulário abaixo.</p></div>
  <div class="card"><h3>Vocabulário</h3><dl>${s.v.map(v=>`<dt>${v[0]}</dt><dd>${v[1]}</dd>`).join("")}</dl><h3>Expressões</h3><dl>${s.e.map(v=>`<dt>${v[0]}</dt><dd>${v[1]}</dd>`).join("")}</dl></div>
  <button class="pri" id="pl">Praticar esta música (${songItems(s).length} perguntas)</button><div class="card"><h3>Completar a letra</h3><p class="mut">Clique em “Buscar letra no Cifra Club”, copie a letra em inglês e cole aqui. Ela fica salva só no seu navegador, aparece com o vocabulário destacado e vira exercícios de lacuna.</p><textarea id="ly" rows="6">${esc(S.lyrics[s.id]||"")}</textarea><button id="sl">Salvar letra</button> <a class="btn" target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=${encodeURIComponent('site:cifraclub.com.br letra '+s.t+' '+s.a)}">Buscar no Cifra Club</a> <a class="btn" target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=${encodeURIComponent('site:letras.mus.br '+s.t+' '+s.a)}">Buscar no Letras.mus.br</a>${S.lyrics[s.id]?`<h3 style="margin-top:16px">Sua letra, com o vocabulário em destaque</h3><div class="lyr">${rd(S.lyrics[s.id])}</div>`:""}</div>`;
  $("#bk").onclick=()=>go("music");if(s.y)$("#em").onclick=()=>{const b=$("#pp");b.className="player";b.innerHTML=`<iframe src="https://www.youtube.com/embed/${s.y}" title="${esc(s.t)}" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`};$("#pl").onclick=()=>{const it=songItems(s);if(!it.length){toast("Cole a letra para gerar exercícios");return}quiz(it,s.t,()=>detail(i))};$("#sl").onclick=()=>{S.lyrics[s.id]=$("#ly").value;save();toast("Letra salva");detail(i)}};
 id?detail(id):draw()},
real(){
 $("#view").innerHTML=`<h2>Inglês real</h2><p class="mut">Contrações, gírias e abreviações que os nativos usam de verdade.</p><button class="pri" id="pr">Praticar (8 perguntas)</button>
 <div class="grid" style="margin-top:12px">${REAL.map(r=>`<div class="card" style="margin:0"><h3>${r[0]}</h3><b>${r[1]}</b><br><span class="mut">${r[2]}<br>Pronúncia: ${r[3]}<br>Exemplo: ${r[4]}</span><br><span class="tag" style="margin-top:6px">${r[5]}</span></div>`).join("")}</div>`;
 $("#pr").onclick=()=>quiz(pick(realItems(),8),"Inglês real",()=>go("real"))},
daily(){
 $("#view").innerHTML=`<h2>Inglês do dia a dia</h2><p class="mut">Escolha a resposta que um nativo realmente diria.</p><div class="card"><p>Cinco situações reais: restaurante, convite de amigo, loja, jogo online e viagem.</p><button class="pri" id="pr">Começar</button></div>`;
 $("#pr").onclick=()=>quiz(sh(dailyItems()),"Dia a dia",()=>go("daily"))},
review(){
 const w=Object.values(S.weak).sort((a,b)=>b.n-a.n);
 $("#view").innerHTML=`<h2>Meus erros</h2>${w.length?`<p class="mut">Cada item sai da lista depois de dois acertos seguidos.</p><button class="pri" id="pr">Revisar agora</button><div class="card"><dl>${w.map(x=>`<dt>${x.item.a}</dt><dd>${x.item.q} Errou ${x.n} vez(es).</dd>`).join("")}</dl></div>`:`<div class="card"><p>Nenhum erro por enquanto. Faça um treino rápido na aba Início.</p></div>`}`;
 if(w.length)$("#pr").onclick=()=>quiz(w.slice(0,8).map(x=>x.item),"Revisão",()=>go("review"))}
};
go("home");
</script></body></html>
