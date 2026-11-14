(function(){
"use strict";
const D={
 feeds:[
 ["tech","Tech chaos",'NVIDIA OR GPU OR graphics card OR AI hardware when:7d',["nvidia","gpu","graphics card","chip","robot","ai","computer","technology","hardware","server","software","bug","update","internet","phone","microsoft","apple","google","meta"]],
 ["games","Gaming",'video game OR gaming OR PlayStation OR Xbox OR Nintendo OR Steam when:7d',["game","gaming","gamer","steam","xbox","playstation","nintendo","minecraft","fortnite","pokemon","console","pc","esports","patch","mod","speedrun","server"]],
 ["aviation","Aviation weirdness",'airplane OR aircraft OR airport OR aviation incident OR emergency landing when:7d',["plane","airplane","aircraft","aviation","pilot","airport","flight","runway","landing","passenger","airline","helicopter","drone","turbulence","emergency"]],
 ["weird","Humanity.exe stopped",'bizarre OR strange story OR unusual event OR odd news when:7d',["weird","bizarre","strange","unusual","odd","unexpected","mystery","neighbor","town","record","museum","statue","stolen","costume"]],
 ["animals","Cute & chaotic animals",'cute animal OR animal rescue OR unusual animal OR pet story when:7d',["animal","dog","cat","puppy","kitten","bird","penguin","bear","monkey","turtle","wildlife","pet","rescue","zoo","squirrel","duck","fox","horse"]],
 ["science","Science gone wild",'weird science OR strange discovery OR unusual scientific discovery when:7d',["science","scientist","research","discovery","space","nasa","planet","ocean","dinosaur","fossil","experiment","laboratory","species","volcano"]],
 ["internet","Internet brainrot",'viral internet trend OR meme OR social media bizarre when:7d',["viral","meme","internet","social media","tiktok","reddit","youtube","streamer","influencer","online","trend","video","creator"]],
 ["transport","Transportation fails",'train strange incident OR car bizarre incident OR transportation unusual when:7d',["train","car","truck","bus","traffic","road","bridge","vehicle","transport","subway","metro","ship","boat","ferry"]],
 ["food","Food crimes",'strange food OR bizarre food OR unusual restaurant when:7d',["food","pizza","burger","restaurant","chef","recipe","chocolate","coffee","cake","sandwich","menu","spicy","ice cream"]],
 ["wholesome","Wholesome break",'heartwarming story OR animal rescued OR good news unusual when:7d',["heartwarming","good news","help","rescue","kindness","community","volunteer","reunited","saved","found","surprise","donation","cute","happy"]]
 ],
 seeds:[
 {title:"A sleepy cat accidentally became the star of a local library's social media page",category:"animals",source:"Built-in preview",description:"A low-stakes animal story to warm up the group.",url:"https://news.google.com/",starter:true},
 {title:"Gamers are once again arguing about whether a tiny update changed everything",category:"games",source:"Built-in preview",description:"The patch notes are short. The arguments are not.",url:"https://news.google.com/",starter:true},
 {title:"A bizarre airport incident has people asking: how did this even happen?",category:"aviation",source:"Built-in preview",description:"Aviation curiosity, discussed without graphic details.",url:"https://news.google.com/",starter:true},
 {title:"NVIDIA and the never-ending race for more powerful chips",category:"tech",source:"Built-in preview",description:"Technology news with enough jargon to start a group argument.",url:"https://news.google.com/",starter:true},
 {title:"Someone, somewhere, has probably invented a completely unnecessary gadget",category:"weird",source:"Built-in preview",description:"Human creativity remains a threat to common sense.",url:"https://news.google.com/",starter:true}
 ],
 chars:[["Oliver","📰","News Admin"],["Jake","💀","Certified shitposter"],["Sophie","🙄","Professional hater"],["Daniel","🫠","Confidently confused"],["Mike","🛸","Conspiracy department"],["Emily","🐸","The wholesome one"]],
 synonyms:{good:["great","nice","awesome","cool","amazing","excellent","fantastic","brilliant","sweet","lovely"],bad:["terrible","awful","horrible","rough","cursed","broken"],funny:["hilarious","lol","lmao","rofl","cracked me up","made me laugh"],weird:["strange","bizarre","odd","wild","crazy","unusual","ridiculous","cursed","insane"],agree:["exactly","true","facts","same","you're right","fair point","makes sense","absolutely"],disagree:["not really","no way","I don't think so","nah","wrong","not true","I doubt it"],surprise:["really","seriously","no way","for real","unbelievable","can't believe"],cute:["adorable","precious","wholesome","sweet","lovely","heartwarming"]},
 intents:[
 ["reaction_funny",["funny","hilarious","lol","lmao","haha","joke","meme","dead","crying"],3],
 ["reaction_agree",["agree","exactly","true","facts","same","right","makes sense","absolutely"],3],
 ["reaction_disagree",["disagree","nah","nope","not true","wrong","doubt","don't think"],3],
 ["reaction_surprise",["really","seriously","no way","what","wait","for real","unbelievable"],2],
 ["ask_explain",["what happened","explain","what does","what is","how did","why did","who is","tell me more","context"],4],
 ["ask_word",["meaning","translate","vocabulary","what's","how do you say"],4],
 ["personal_story",["i saw","i had","my friend","my dog","my cat","yesterday","last week","one time"],2],
 ["opinion",["i think","in my opinion","i believe","personally","i feel like"],2],
 ["greeting",["hello","hi","hey","what's up","how are you","good morning"],2],
 ["thanks",["thank you","thanks","thx","cheers"],2]
 ],
 grammar:[
 [/\b(he|she|it)\s+(go|have|do|say|make|want|like|play|work|think|know)\b/i,"In the present simple, add -s to most verbs after he, she or it: “She likes”, “He goes”."],
 [/\b(he|she|it)\s+have\b/i,"Use “has” with he, she and it: “She has a cat”."],
 [/\bdid\s+\w+(ed|went|saw|ate|had|made|took|bought|came|got)\b/i,"After “did”, use the base form: “Did you go?”, not “Did you went?”."],
 [/\bpeople\s+is\b/i,"“People” is plural: say “people are”."],
 [/\bI\s+am\s+agree\b/i,"Say “I agree”. “Agree” is a verb, so it doesn't need “am”."],
 [/\btell\s+to\s+me\b/i,"Use “tell me” without “to”: “Tell me what happened”."],
 [/\bI went to (cinema|restaurant|airport|store|hospital)\b/i,"Many singular countable nouns need an article: “I went to the cinema” or “I went to a restaurant”."],
 [/\b(in|at)\s+(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\b/i,"Use “on” with days: “on Monday”."],
 [/\b(what|where|why|when|how)\s+(you|he|she|they|we)\s+(is|are|do|does)\b/i,"Check question order: “Where are you?” or “What do you do?”."],
 [/\bI\s+(go|eat|watch|play|do|see|talk|work|study)\s+(to\s+)?(the\s+)?(cinema|movies|school|work|store|gym|park)\s+(with|now|today|tonight)\b/i,"For a plan or an action happening now, try the present continuous: “I'm going…” or “I'm going to…”."],
 [/\b(many|much)\s+(money|people|water|information|advice|friends|cars|time)\b/i,"Check countable and uncountable nouns: “many people”, but “much information”."],
 [/\bmake\s+a\s+fun\b/i,"The natural expression is “have fun”, not usually “make a fun”."],
 [/\bthere\s+have\s+(a|an)\b/i,"For existence, use “there is” with a singular noun: “There is a problem”."]
 ],
 slang:{"bro":"informal way to address someone, like 'mano' or 'cara'","cooked":"in serious trouble or completely done for","let him cook":"let someone continue; they might do something impressive","skill issue":"a teasing way to say someone lacks the skill","no cap":"honestly; I'm not lying","lowkey":"a little, secretly or without making a big deal of it","highkey":"very openly or strongly","wild":"surprising, unbelievable or chaotic","I'm dead":"I'm laughing really hard","rent free":"something you can't stop thinking about","touch grass":"spend time offline, usually as a teasing insult","NPC":"a joking label for someone acting predictably","based":"admiringly unapologetic","cringe":"awkward or embarrassing","yapping":"talking too much","W":"a win","L":"a loss","sus":"suspicious","goated":"exceptionally good","brainrot":"absurd internet content or humor"}
};

/* Expanded language knowledge base: conversational synonyms, intents, slang and grammar. */
Object.assign(D.synonyms,{
 happy:["glad","pleased","delighted","cheerful","in a good mood","made my day"],
 angry:["mad","annoyed","pissed","furious","irritated","fed up"],
 tired:["sleepy","exhausted","worn out","burnt out","need a nap"],
 scared:["afraid","terrified","nervous","creeped out","freaked out"],
 confused:["lost","confused","don't get it","doesn't make sense","what on earth"],
 bored:["boring","uninteresting","nothing to do","dead chat"],
 excited:["hyped","can't wait","looking forward","pumped","stoked"],
 surprised:["shocked","speechless","mind blown","caught off guard"],
 money:["cash","bucks","dollars","expensive","cheap","price","cost"],
 technology:["tech","computer","laptop","phone","gpu","processor","chip","software","hardware"],
 gaming:["game","gamer","gaming","console","controller","patch","update","ranked","match"],
 aviation:["airplane","plane","flight","airport","pilot","runway","aircraft","airline"],
 animal:["pet","dog","cat","puppy","kitten","bird","wildlife","zoo"],
 accident:["crash","collision","incident","emergency","mishap","breakdown"],
 joke:["funny","hilarious","lol","lmao","haha","meme","comedy","roast"],
 apology:["sorry","my bad","I apologize","didn't mean to","forgive me"],
 request:["please","could you","can you","would you","do you mind"],
 possibility:["maybe","perhaps","possibly","might","could be","I guess"],
 certainty:["definitely","for sure","absolutely","certainly","no doubt"],
 negative:["no","not","never","can't","cannot","don't","doesn't","isn't","won't"],
 positive:["yes","yeah","yep","sure","of course","absolutely","definitely"]
});
D.intents.push(
 ["compliment",["nice one","well done","good job","you nailed","that's clever","smart move","love this"],2],
 ["frustration",["annoying","frustrated","fed up","pissed off","so done","can't deal","this sucks"],2],
 ["confusion",["i don't get","i dont get","confused","makes no sense","what on earth","how is that"],3],
 ["excitement",["can't wait","so excited","hyped","let's go","lets go","pumped","stoked"],2],
 ["apology",["sorry","my bad","i apologize","didn't mean to","forgive me"],2],
 ["suggestion",["we should","why don't we","what if","maybe we can","i suggest","how about"],2],
 ["request_opinion",["what do you think","your opinion","do you agree","am i wrong","thoughts"],3],
 ["empathy",["hope they're okay","hope everyone is safe","that's sad","poor guy","poor thing","feel bad"],3],
 ["sarcasm",["sure buddy","yeah right","as if","totally believable","good one","what could go wrong"],2],
 ["followup",["and then","what happened next","then what","after that","so what happened"],2],
 ["comparison",["better than","worse than","compared to","the same as","more than","less than"],2],
 ["reason",["because","since","the reason","that's why","thats why"],2],
 ["example",["for example","for instance","like when","such as"],2],
 ["clarification",["i mean","what i mean","in other words","let me explain","to be clear"],2]
);
D.grammar.push(
 [/\bI have (\d+) years\b/i,"For age, English uses “I am 20 years old”, not “I have 20 years”."],
 [/\bI am (go|going) to went\b/i,"After “going to”, use the base verb: “I'm going to go”."],
 [/\bmore better\b/i,"“Better” is already comparative. Say “much better” or simply “better”."],
 [/\bdiscuss about\b/i,"“Discuss” takes a direct object: “discuss the problem”, without “about”."],
 [/\bdepend of\b/i,"The natural form is “depend on”: “It depends on the weather”."],
 [/\bmarried with\b/i,"Use “married to”: “She is married to Alex”."],
 [/\bexplain me\b/i,"Use “explain something to me”: “Can you explain it to me?”."],
 [/\blisten me\b/i,"Use “listen to me”: the verb “listen” normally takes “to”."],
 [/\bI look forward to see\b/i,"After “look forward to”, use a noun or -ing form: “I look forward to seeing you”."],
 [/\bI am boring\b/i,"“I'm bored” describes how you feel. “I'm boring” means you make other people feel bored."],
 [/\bI feel myself\b/i,"For a general feeling, say “I feel…”: “I feel tired”, not “I feel myself tired”."],
 [/\bthe people which\b/i,"For people, use “who” or “that”: “the people who called”."],
 [/\bchilds\b/i,"The plural of “child” is irregular: “children”."],
 [/\binformations\b/i,"“Information” is uncountable in standard English. Say “some information” or “pieces of information”."],
 [/\badvices\b/i,"“Advice” is uncountable. Say “some advice” or “a piece of advice”."],
 [/\bhomeworks\b/i,"“Homework” is uncountable. Say “some homework” or “a homework assignment”."],
 [/\beverydays\b/i,"Use “every day” for frequency. “Everyday” is an adjective, as in “everyday life”."],
 [/\bI didn't knew\b/i,"After “didn't”, use the base form: “I didn't know”."],
 [/\bI should to\b/i,"Modal verbs like should are followed by the base verb without “to”: “I should go”."],
 [/\bI can to\b/i,"After “can”, use the base verb without “to”: “I can help”."],
 [/\bI must to\b/i,"After “must”, use the base verb without “to”: “I must leave”."],
 [/\bI have seen it yesterday\b/i,"With a finished time like “yesterday”, the simple past is usually natural: “I saw it yesterday”."],
 [/\bshe don't\b/i,"Use “doesn't” with he, she and it: “She doesn't know”."],
 [/\bhe don't\b/i,"Use “doesn't” with he, she and it: “He doesn't know”."],
 [/\bI didn't went\b/i,"After “didn't”, use the base form: “I didn't go”."],
 [/\bI am here since\b/i,"For a situation continuing until now, use “I've been here since…”."],
 [/\bmore easier\b/i,"“Easier” is already comparative. Say “much easier” or “easier”."],
 [/\bthe most easiest\b/i,"Use “the easiest”. The double superlative is not standard."],
 [/\bI have \d+ years old\b/i,"Say “I am 20 years old”. English uses “be” for age."],
 [/\bopen the light\b/i,"The natural expression is “turn on the light”, not “open the light”."],
 [/\bclose the light\b/i,"The natural expression is “turn off the light”, not “close the light”."],
 [/\bmake a party\b/i,"Usually say “have a party” or “throw a party”."],
 [/\bI am with hunger\b/i,"Say “I'm hungry”. English uses the adjective, not “with hunger”."],
 [/\baccording with\b/i,"Use “according to”: “According to the report…”."],
 [/\barrive to\b/i,"Use “arrive at” for a specific place and “arrive in” for a city or country."],
 [/\bI am used to do\b/i,"After “be used to”, use a noun or -ing form: “I'm used to waking up early”."]
);
Object.assign(D.slang,{
 fr:"for real; used to emphasize that something is true",
 ngl:"not gonna lie; introduces an honest opinion",
 tbh:"to be honest",imo:"in my opinion",imho:"in my humble opinion",
 idk:"I don't know",ikr:"I know, right?; shared surprise or agreement",
 brb:"be right back",btw:"by the way",irl:"in real life",afk:"away from keyboard",fyi:"for your information",
 smh:"shaking my head; disappointment or disbelief",istg:"I swear to God; strong emphasis",
 iykyk:"if you know, you know; a reference understood by people who know the context",
 delulu:"delusional, often used playfully",slay:"do something impressively well",ate:"did something extremely well",
 "left no crumbs":"did something perfectly","it's giving":"it has the vibe or impression of",
 "the ick":"a sudden feeling of being turned off",yikes:"reaction to something awkward or unfortunate",
 oof:"reaction to a mistake, pain or awkward moment",sheesh:"expression of surprise or admiration",
 bruh:"informal reaction to disbelief or frustration",fam:"friendly way to address a group or friend",
 bestie:"playful way to address a close friend","caught in 4k":"caught clearly doing something",
 "plot twist":"an unexpected change in a story",lore:"the background story or history behind something",
 "canon event":"an important experience someone supposedly has to go through",
 "side quest":"a small unrelated task or adventure","core memory":"an especially memorable experience",
 "I can't even":"I'm overwhelmed or have no words","send help":"I'm overwhelmed, often jokingly",
 "it's not that deep":"it isn't very serious","we move":"accept it and move on",
 "say less":"I understand; no more explanation needed",bet:"okay; agreed",valid:"reasonable or acceptable",
 mid:"mediocre or average",goofy:"silly or ridiculous",yapper:"someone who talks a lot",
 "crash out":"lose control emotionally or act recklessly","locked in":"fully focused",
 aura:"someone's perceived coolness or presence","aura points":"joking score for someone's coolness"
});


/* Brainrot conversation expansion: 12 topic lanes × 12 contextual seeds × 12
   reaction patterns = 1,728 contextual line combinations before intent variants. */
const BRAINROT_SCENES={
 tech:["GPU prices","NVIDIA's latest announcement","a laptop with 47 browser tabs open","AI doing everyone's homework","a software update nobody asked for","a graphics card costing rent money","a keyboard with suspicious RGB","the Wi-Fi dying at the worst moment","a robot with too much confidence","a phone update changing one icon","a PC running like a jet engine","a startup pitching an app for breathing"],
 games:["a ranked match going horribly wrong","a patch note longer than a novel","a teammate blaming lag","a game launcher updating forever","a boss fight with one pixel of health","a speedrun that broke reality","a cosmetic skin costing actual money","a server maintenance announcement","an NPC behaving like the main character","a controller mysteriously disconnecting","a gamer arguing over graphics settings","a game sequel nobody expected"],
 aviation:["an airport announcement nobody understood","a plane delayed for a deeply unserious reason","an aircraft with an unusual paint job","a passenger bringing impossible luggage","a pilot calmly handling a weird situation","an airport moving walkway becoming drama","a flight attendant delivering elite customer service","a suitcase taking a world tour","a plane spotter catching a rare moment","a runway inspection with unexpected results","an airline's questionable policy","an aviation mystery with a boring explanation"],
 weird:["a town inventing a bizarre competition","a person breaking an extremely specific record","a museum displaying something questionable","a local council making a strange decision","a vending machine with main-character energy","a statue becoming an internet celebrity","a mysterious noise with a normal explanation","a neighbor's deeply confusing project","a bizarre object found in a garden","a headline that sounds generated by a sleep-deprived bot","a person taking a side quest too seriously","a situation nobody could pitch in a meeting"],
 animals:["a cat acting like the landlord","a dog discovering its own reflection","a raccoon committing tiny crimes","a penguin with celebrity energy","a parrot exposing everyone's secrets","a sleepy puppy refusing to cooperate","a duck walking like it owns the street","a rescued animal finding a home","a squirrel executing a perfect heist","a horse ignoring the entire plan","a kitten becoming the office manager","a very dramatic goat"],
 science:["a scientist finding something unexpected","a space discovery raising more questions","a robot failing a simple task","an experiment producing a weird result","a deep-sea creature looking unreal","a fossil with surprising details","a planet behaving in an interesting way","a laboratory mishap without danger","a telescope capturing a strange image","a new species with a ridiculous name","a research paper nobody expected to go viral","a scientific explanation ruining a good conspiracy"],
 internet:["a meme escaping its original platform","a streamer having an accidental viral moment","a comment section losing all objectivity","an influencer making a confusing apology","a trend nobody can explain","a group chat screenshot becoming famous","an algorithm recommending absolute nonsense","a video with suspiciously specific timing","a fandom starting another civil war","a social media challenge getting weird","a niche meme reaching everyone's timeline","a post with 900 quote posts and no context"],
 transport:["a train arriving with unexpected drama","a bus route confusing the entire town","a car with an unnecessarily loud modification","a traffic sign becoming a meme","a parking attempt worthy of a documentary","a delivery robot blocking the pavement","a bridge with an unusual design","a scooter taking the scenic route","a subway announcement going viral","a truck carrying a very strange object","a bicycle with more technology than a car","a navigation app choosing chaos"],
 food:["a pizza topping causing international debate","a restaurant menu with questionable confidence","a coffee order requiring a flowchart","a sandwich with architectural ambitions","a dessert that looks scientifically impossible","a chef inventing a suspicious combination","a fast-food item returning from the dead","a food review taken too seriously","a cake with an identity crisis","a vending machine serving a surprise","a recipe with 37 unnecessary steps","a snack becoming a collector's item"],
 wholesome:["a stranger helping someone unexpectedly","a lost pet finding its family","a tiny act of kindness going viral","a community building something together","an elderly person learning a new skill","a dog helping someone feel better","a reunion nobody saw coming","a volunteer doing something lovely","a kid solving a surprisingly big problem","a small business receiving unexpected support","a rescued animal thriving","a neighbor quietly making everyone's day"],
 school:["a group project with one person doing everything","a teacher saying 'this will be on the test'","a classmate asking if there is homework","a school laptop running at 2 FPS","a presentation with 47 animations","a student arriving exactly at the bell","a cafeteria meal becoming a debate","a group chat before an exam","a calculator with more intelligence than the class","a surprise quiz ruining the mood","someone saying 'I didn't study' and getting 100%","the last five minutes before the weekend"],
 daily:["waking up five minutes before an alarm","opening the fridge for the sixth time","trying to sleep while remembering one awkward moment","a phone battery dropping from 20% to 1%","ordering food and tracking it like a space mission","cleaning a room and finding ancient artifacts","a bus arriving the second you sit down","saying 'one more video' at 2 AM","forgetting why you entered a room","making plans and immediately wanting to cancel","a notification arriving during a serious moment","trying to be productive with zero brain cells"]
};
const BRAINROT_PATTERNS=[
 ["Jake","💀","The {scene} lore is getting out of hand. I need a 12-part documentary."],
 ["Sophie","🙄","I refuse to let the {scene} discourse ruin my remaining brain cells."],
 ["Daniel","🫠","Wait, so the {scene} is real? My brain was not patched for this."],
 ["Mike","🛸","The {scene} situation raises questions. I have created a suspicious spreadsheet."],
 ["Emily","🐸","Not gonna lie, the {scene} part is oddly wholesome in its own chaotic way."],
 ["Jake","😭","Bro, the {scene} has more plot twists than my entire week."],
 ["Sophie","💅","The {scene} is giving 'nobody checked the idea before publishing'."],
 ["Daniel","🤡","I understood the headline and somehow became more confused."],
 ["Mike","👁️","I am not saying there is a secret plan behind the {scene}. I am simply asking questions."],
 ["Emily","✨","Can we appreciate the tiny detail in the {scene} for a second? That's actually sweet."],
 ["Jake","🗿","New side quest unlocked: explain the {scene} to someone from 2005."],
 ["Sophie","🧍","Anyway, who approved the {scene}? I just want to talk."]
];
const BRAINROT_INTENT_PATTERNS={
 reaction_funny:["I laughed harder than the situation deserved. This is a certified internet moment.","The punchline arrived before my brain finished loading.","This belongs in the group chat hall of fame.","I am wheezing. Someone archive this before the timeline resets."],
 reaction_agree:["Facts. I fear you cooked and left absolutely no crumbs.","That is painfully accurate. Rare group-chat wisdom detected.","I agree, and I hate how much sense that makes.","Correct take. The council has reviewed your application."],
 reaction_disagree:["Respectfully, that take needs a software update.","I see the vision, but the execution is fighting for its life.","Counterpoint: absolutely not. I brought imaginary evidence.","We can disagree without starting a 300-comment thread. Probably."],
 ask_explain:["The headline gives us the short version. The original report is where the actual details live.","Let's separate what the report confirms from what the internet is inventing.","Context first, conspiracy board later. What part should we unpack?","The group chat has theories, but the source deserves the final word."],
 ask_word:["Drop the exact phrase and we will translate it into normal-human English.","That expression has internet energy. I can explain the meaning and when people use it.","Send the sentence too. Context changes slang more than people expect.","We can decode it without summoning a dictionary from 1840."],
 personal_story:["Wait, that is a whole side quest. Continue, I am invested now.","This has become a story-time channel. What happened after that?","I need the next episode immediately. The lore is expanding.","That sounds oddly familiar. The universe keeps reusing plotlines."],
 opinion:["Interesting take. Give us the reasoning, not just the headline reaction.","I see your point. What detail made you land there?","The comments section would fight over this for at least three business days.","A take with actual reasoning? In this economy? Continue."],
 greeting:["You made it. The brain cells were about to hold an emergency meeting.","Welcome back. Today's agenda is questionable headlines and worse decisions.","We were one meme away from becoming a research institution. Join us.","The chat is alive. Productivity has officially left the building."],
 thanks:["Anytime. Helping the group chat is my unpaid internship.","No worries. Your English XP has increased by one suspicious point.","You're welcome. Now return to the daily nonsense.","All good. We accept payment in memes and coherent sentences."],
 followup:["We are still on the same plotline. The lore has not been lost.","Correct, and that connects to the thing we were discussing earlier.","Keep going. The group chat memory is surprisingly functional today.","That follow-up makes sense. The investigation continues."],
 general:["I need one more detail because my context window is currently powered by vibes.","That could mean three different things. Give us the missing clue.","The chat is listening. Make your case before Jake posts another meme.","Interesting. Connect that thought to the headline and let the chaos develop."],
 brainrot_reaction:["That sentence has enough aura to crash the server.","The brainrot levels are now legally unmeasurable.","This is either peak comedy or a cry for better Wi-Fi.","The council has awarded you 900 imaginary aura points."],
 meme_reference:["That reference is so niche it needs its own museum wing.","The lore goes deeper than the original post.","Someone explain this meme to the historians of 2040.","This reference has escaped containment."],
 daily_chat:["Current status: online, under-caffeinated and avoiding responsibilities.","I was going to be productive, then the group chat happened.","Today's side quest is surviving the next 24 hours.","Mood check: one minor inconvenience away from becoming a philosopher."]
};
const BRAINROT_NAMES={
 tech:["NVIDIA","the GPU market","the update","the algorithm"],games:["the devs","ranked mode","the patch","the server"],aviation:["the airline","the airport","the flight crew","the report"],weird:["the council","the town","the internet","the headline"],animals:["the tiny legend","the animal","the rescue team","the cat"],science:["the researchers","the lab","the discovery","the data"],internet:["the algorithm","the timeline","the streamer","the comment section"],transport:["the driver","the transport authority","the vehicle","the route"],food:["the chef","the menu","the snack","the restaurant"],wholesome:["the kind stranger","the community","the rescue team","the tiny hero"],school:["the teacher","the group project","the class","the school system"],daily:["my alarm","the universe","my last brain cell","the group chat"]
};


Object.assign(D.slang,{
 rizz:"charisma or flirting ability, often used jokingly",
 sigma:"an exaggerated internet archetype of an independent, supposedly cool person",
 skibidi:"a deliberately absurd meme word; meaning depends heavily on the joke",
 gyatt:"an exaggerated internet reaction, often about someone's appearance; use carefully",
 "fanum tax":"jokingly taking a portion of someone else's food",
 "negative aura":"a joking way to say someone lost cool points",
 "aura farming":"doing something mainly to look cool",
 mog:"to outshine or visually outclass someone",
 "let him cook":"allow someone to continue because their idea might work",
 "crash out":"lose composure and react impulsively",
 "locked in":"fully focused and committed",
 "caught lacking":"caught unprepared or doing something embarrassing",
 "brainrot edit":"an intentionally overstimulating meme edit",
 "lore accurate":"matching the established personality or backstory",
 "bro thinks he's":"teasing someone for acting like a character or celebrity",
 "we got X before GTA 6":"a meme about an unexpected event happening first",
 "chat is this real":"a streamer-style reaction expressing disbelief",
 "I fear":"a playful phrase introducing an honest or dramatic conclusion",
 "it's so over":"dramatic slang for a situation that seems hopeless",
 "we are so back":"dramatic slang for a comeback or sudden optimism",
 "cooked beyond belief":"completely doomed, usually as a joke",
 "standing on business":"being serious and following through",
 "main character energy":"acting as if the moment revolves around you",
 "side eye":"a look or reaction expressing suspicion or disapproval",
 "rent was due":"joking praise for someone performing unusually well",
 "skill issue":"teasing explanation that someone lacks the required skill",
 "touch grass":"teasing advice to spend time offline",
 "bro is NOT":"a meme-style way to express disbelief about someone's action",
 "one job":"a teasing phrase for a simple task that went wrong",
 "canon event":"a memorable experience framed as unavoidable character development"
});
D.intents.push(
 ["direct_question",["what","where","when","who","which","can you","could you","do you","is it","are they","does it","why","how"],1],
 ["news_reaction",["this headline","this news","the article","the report","is this true","is that confirmed","what does this mean"],3],
 ["complaint",["this sucks","i hate","annoying","i am tired","im tired","i am bored","im bored","cant believe","cannot believe"],2],
 ["plan",["lets","should we","anyone want","whos up","wanna play","want to play","what are we doing"],2],
 ["brainrot_reaction",["aura","rizz","sigma","skibidi","gyatt","fanum tax","brainrot","mog","cooked","ate","no cap","chat is this real","it's so over","we are so back","negative aura","aura farming"],2],
 ["meme_reference",["bro thinks he's","we got","before gta","main character energy","side eye","caught lacking","standing on business","rent was due","lore accurate","touch grass"],2],
 ["daily_chat",["what are you doing","wyd","i'm bored","im bored","any plans","what's the plan","good night","good afternoon","i just woke up","i'm hungry","im hungry","going to sleep"],2]
);

/* Character profiles: each member has a stable role, interests and conversational limits. */
const CHAT_PERSONAS=[
 {name:"Oliver",avatar:"📰",role:"The fact-checker",style:"calm, curious and precise",categories:["tech","aviation","science","transport","wholesome"],strength:["ask_explain","ask_word","direct_question","news_reaction"],voice:"He separates confirmed details from guesses."},
 {name:"Jake",avatar:"💀",role:"The shitposter",style:"quick, playful and shamelessly unserious",categories:["games","internet","weird","tech","food"],strength:["reaction_funny","meme_reference","brainrot_reaction","daily_chat"],voice:"He jokes about the actual message, not random topics."},
 {name:"Sophie",avatar:"🙄",role:"The skeptic",style:"dry, sharp and hard to impress",categories:["weird","tech","food","transport","internet"],strength:["reaction_disagree","opinion","sarcasm","direct_question"],voice:"She challenges weak takes and delivers concise deadpan replies."},
 {name:"Daniel",avatar:"🫠",role:"The relatable one",style:"casual, slightly confused and honest",categories:["school","daily","games","tech","transport"],strength:["personal_story","confusion","daily_chat","followup"],voice:"He relates topics to ordinary life and asks natural follow-ups."},
 {name:"Mike",avatar:"🛸",role:"The theory guy",style:"curious, dramatic and knowingly ridiculous",categories:["science","aviation","weird","tech","internet"],strength:["surprise","comparison","meme_reference","news_reaction"],voice:"His theories are obviously playful, never presented as facts."},
 {name:"Emily",avatar:"🐸",role:"The kind one",style:"warm, funny and observant",categories:["animals","wholesome","food","daily","school"],strength:["empathy","compliment","thanks","personal_story"],voice:"She responds with empathy and notices human details."}
];

const norm=s=>String(s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[’‘]/g,"'").replace(/\b(gonna)\b/g,"going to").replace(/\b(wanna)\b/g,"want to").replace(/\b(gotta)\b/g,"got to").replace(/\b(gimme)\b/g,"give me").replace(/\b(dunno)\b/g,"do not know").replace(/[^a-z0-9'\s]/g," ").replace(/\s+/g," ").trim();
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const app={
 state:{news:[],messages:[],category:"all",selected:null,context:{topicTerms:[],newsTitle:""},loading:false},
 endpoint(){return "https://english-immersion-news.felipechves8.workers.dev/news"},
 stamp(){return new Date().toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})},
 save(){try{localStorage.setItem("eih_shitpost_chat_v2",JSON.stringify(this.state.messages.slice(-90)));localStorage.setItem("eih_shitpost_context_v2",JSON.stringify(this.state.context))}catch(e){}},
 load(){try{this.state.messages=JSON.parse(localStorage.getItem("eih_shitpost_chat_v2")||"[]");this.state.context=JSON.parse(localStorage.getItem("eih_shitpost_context_v2")||'{"topicTerms":[]}');if(this.state.context.chatDay!==new Date().toISOString().slice(0,10)){this.state.messages=[];this.state.context={topicTerms:[]};}}catch(e){this.state.messages=[];this.state.context={topicTerms:[]};}},
 status(t){const e=document.getElementById("sp-status");if(e)e.textContent=t},
 category(a){if(a.category)return a.category;const t=(a.title+" "+(a.description||"")).toLowerCase();for(const f of D.feeds)if(f[3].some(x=>t.includes(x)))return f[0];return"weird"},
 score(a){const t=(a.title+" "+(a.description||"")).toLowerCase();let n=0;["nvidia","gpu","game","gaming","steam","playstation","xbox","nintendo","weird","bizarre","strange","unusual","airport","plane","aircraft","pilot","animal","cat","dog","puppy","kitten","cute","rescue","viral","meme","space","robot","ai","unexpected","record","squirrel","penguin","duck","fox","turtle","technology","science","odd"].forEach(k=>{if(t.includes(k))n+=2});["war","killed","death toll","murder","mass shooting","terror","graphic","fatal crash","fatal accident","victims","rape","suicide","explosion","disaster","earthquake","flood","wildfire"].forEach(k=>{if(t.includes(k))n-=10});return n},
 async fetchNews(forceRefresh=false){
  if(this.state.loading)return;
  this.state.loading=true;
  this.status(forceRefresh?"Refreshing independent news sources…":"Loading independent news sources…");
  const previous=this.state.news||[];
  const oldTitles=new Set(previous.map(a=>(a.title||"").toLowerCase()));
  try{
   let items=[];
   const endpoint=this.endpoint();
   if(endpoint){
    const u=new URL(endpoint);
    u.searchParams.set("limit","70");
    u.searchParams.set("_refresh",String(Date.now()));
    const r=await fetch(u.toString(),{cache:"no-store"});
    if(!r.ok)throw Error("News worker returned HTTP "+r.status);
    const data=await r.json();
    if(data.ok===false)throw Error(data.error||"News worker reported a feed error");
    if(!Array.isArray(data.articles))throw Error("News worker returned an invalid articles list");
    items=data.articles;
   }else{
    items=D.seeds.slice();
   }
   const seen=new Set();
   items=items.map(a=>Object.assign({},a,{category:this.category(a)})).filter(a=>{
    const k=(a.title||"").toLowerCase().replace(/[^a-z0-9]/g,"");
    if(!k||seen.has(k))return false;
    seen.add(k);
    return true;
   }).map(a=>Object.assign(a,{score:this.score(a)}))
    .filter(a=>a.score>=0)
    .sort((a,b)=>new Date(b.publishedAt||0)-new Date(a.publishedAt||0)||b.score-a.score);
   if(!items.length)throw Error("The live news feed returned zero usable headlines");
   const newCount=items.filter(a=>!oldTitles.has((a.title||"").toLowerCase())).length;
   this.state.news=items;
   const selectedTitle=this.state.selected&&this.state.selected.title;
   const matching=this.state.news.find(a=>a.title===selectedTitle);
   if(matching){
    this.state.selected=matching;
    this.news();
    this.topic();
   }else{
    this.select(this.state.news[0]);
   }
   this.status(forceRefresh
    ?(newCount?newCount+" new headlines found · "+items.length+" total · "+this.stamp():"No new headlines since the last check · feed checked at "+this.stamp())
    :items.length+" headlines loaded · Independent publisher feeds · "+this.stamp());
  }catch(e){
   if(!previous.length){
    this.state.news=D.seeds.slice();
    this.state.selected=this.state.selected||this.state.news[0];
    this.news();
    this.topic();
   }
   this.status("Live feed unavailable. "+(previous.length?"Keeping the last successful headlines. ":"Showing preview headlines. ")+e.message);
  }finally{
   this.state.loading=false;
  }
 },
 msg(name,avatar,text,kind,meta){this.state.messages.push({name:name,avatar:avatar,text:text,kind:kind||"",meta:meta||"",time:this.stamp()});this.state.messages=this.state.messages.slice(-90);this.save();this.messages()},
 opening(a){
  const cat=a.category||"weird",title=String(a.title||"this story"),shortTitle=title.length>105?title.slice(0,102)+"…":title;
  const profiles=CHAT_PERSONAS.filter(p=>p.categories.includes(cat));
  const pick=x=>x[Math.floor(Math.random()*x.length)];
  const first=profiles.find(p=>["Jake","Sophie","Emily","Daniel"].includes(p.name))||profiles[0]||CHAT_PERSONAS[1];
  const oliver=CHAT_PERSONAS[0];
  const openers={
   tech:["That headline is going to start another GPU argument, isn't it?","Can someone explain the practical impact before Jake starts pricing kidneys?"],
   games:["I already know the comments are blaming the patch.","Please tell me the server is not involved again."],
   aviation:["Let's see what the report actually confirms before we invent a disaster movie.","Airports really do generate side quests nobody asked for."],
   weird:["This headline sounds fake, which is unfortunately not proof that it is.","I need the actual context before I judge the town."],
   animals:["Okay, this is the kind of news I needed today.","Protect this tiny legend at all costs."],
   science:["Interesting. What did the researchers actually find?","Mike is about to turn one study into a 40-page theory."],
   internet:["The timeline is going to make this ten times weirder.","I give the comment section six minutes before it loses the plot."],
   transport:["Somehow transport news always becomes a group project.","I need to know how this happened before I judge anyone."],
   food:["This is how a food debate ruins a perfectly normal afternoon.","I already know Sophie has a strong opinion about the menu."],
   wholesome:["A rare piece of good news. Let people enjoy this one.","Emily has officially adopted this story."],
   school:["This sounds exactly like a group project problem.","Daniel is having flashbacks to the last school assignment."],
   daily:["This is painfully relatable already.","The group chat has found today's collective struggle."]
  };
  const chosen=[[first.name,first.avatar,pick(openers[cat]||openers.weird)]];
  if(Math.random()<0.38)chosen.push([oliver.name,oliver.avatar,"The headline says: “"+shortTitle+"”. Let's stick to the details we actually have."]);
  this.state.context.recentLines=(this.state.context.recentLines||[]).concat(chosen.map(x=>x[2])).slice(-80);
  this.state.context.lastScene=cat;
  return chosen;
 },
 select(a){this.state.selected=a;this.state.context={topicTerms:norm(a.title+" "+(a.description||"")).split(" "),newsTitle:a.title,chatDay:new Date().toISOString().slice(0,10)};this.state.messages=[];this.msg("Oliver","📰","BREAKING NEWS 💀\n"+a.title,"news",a.source||"Google News");this.opening(a).forEach(x=>this.msg(x[0],x[1],x[2]));this.news();this.topic()},
 news(){const h=document.getElementById("sp-news");if(!h)return;const cats=[["all","All chaos"]].concat(D.feeds.map(x=>[x[0],x[1]]));let list=this.state.news.filter(a=>this.state.category==="all"||a.category===this.state.category).slice(0,35);h.innerHTML='<div class="sp-categories">'+cats.map(x=>'<button data-cat="'+x[0]+'" class="'+(this.state.category===x[0]?"active":"")+'">'+esc(x[1])+'</button>').join("")+'</div><div class="sp-news-list">'+(list.map((a,i)=>'<button class="sp-news-item '+(this.state.selected===a?"selected":"")+'" data-n="'+i+'"><span class="sp-news-tag">'+esc((D.feeds.find(x=>x[0]===a.category)||[])[1]||"Odd")+'</span><b>'+esc(a.title)+'</b><small>'+esc(a.source||"Google News")+' · '+(a.publishedAt?new Date(a.publishedAt).toLocaleDateString():"")+'</small></button>').join("")||'<p class="mut">No stories in this category yet.</p>')+'</div>';h.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{this.state.category=b.dataset.cat;this.news()});h.querySelectorAll("[data-n]").forEach(b=>b.onclick=()=>this.select(list[Number(b.dataset.n)]))},
 async translateMessage(index){const m=this.state.messages[index];if(!m)return;if(m.translation){m.showTranslation=!m.showTranslation;this.messages();return}if(m.translating)return;m.translationError="";m.translating=true;this.messages();try{const params=new URLSearchParams({client:"gtx",sl:"auto",tl:"pt",dt:"t",q:m.text});const response=await fetch("https://translate.googleapis.com/translate_a/single?"+params.toString());if(!response.ok)throw Error("Translation service returned "+response.status);const data=await response.json();m.translation=(data[0]||[]).map(part=>part[0]||"").join("");if(!m.translation)throw Error("No translation returned");m.showTranslation=true;this.save()}catch(error){m.translationError="Não foi possível traduzir agora. Tente novamente.";console.warn("Chat translation failed:",error)}finally{m.translating=false;this.messages()}},
 messages(){const h=document.getElementById("sp-messages");if(!h)return;h.innerHTML=this.state.messages.map((m,i)=>'<article class="sp-msg '+(m.kind==="mine"?"mine":m.kind==="news"?"news":"")+'"><div class="sp-avatar">'+esc(m.avatar)+'</div><div class="sp-bubble"><div class="sp-msg-meta"><b>'+esc(m.name)+'</b><time>'+esc(m.time)+'</time></div><p>'+esc(m.text).replace(/\n/g,"<br>")+'</p><button type="button" class="sp-translate-btn" data-translate="'+i+'" '+(m.translating?"disabled":"")+'>'+(m.translating?"Traduzindo…":m.showTranslation?"Ocultar tradução":m.translation?"Mostrar tradução":"Traduzir para português")+'</button>'+(m.showTranslation&&m.translation?'<div class="sp-translation"><small>PORTUGUÊS (BRASIL)</small><p>'+esc(m.translation).replace(/\n/g,"<br>")+'</p></div>':"")+(m.translationError?'<small class="sp-translation-error">'+esc(m.translationError)+'</small>':"")+(m.meta?'<small>'+esc(m.meta)+'</small>':"")+'</div></article>').join("");h.querySelectorAll("[data-translate]").forEach(button=>button.onclick=()=>this.translateMessage(Number(button.dataset.translate)));h.scrollTop=h.scrollHeight},
 topic(){const e=document.getElementById("sp-topic"),a=document.getElementById("sp-source-link");if(e)e.textContent=this.state.selected?this.state.selected.title:"Choose a headline to start";if(a){a.hidden=!(this.state.selected&&this.state.selected.url);if(!a.hidden)a.href=this.state.selected.url}},
 analyse(s){
  const raw=norm(s);
  const has=(haystack,needle)=>{
   const phrase=norm(needle).replace(/[.*+?^\$()|[\]\\]/g,"\\$&").replace(/\s+/g,"\\s+");
   return phrase?new RegExp("(^|\\s)"+phrase+"(?=$|\\s)","i").test(haystack):false;
  };
  let expanded=raw;
  Object.keys(D.synonyms).forEach(group=>{if(D.synonyms[group].some(word=>has(raw,word)))expanded+=" "+group;});
  const found=[];
  D.intents.forEach(it=>{
   let score=0;
   it[1].forEach(term=>{if(has(raw,term))score+=norm(term).includes(" ")?2:1;});
   if(score)found.push({id:it[0],score:score*it[2]});
  });
  found.sort((a,b)=>b.score-a.score);
  const toks=raw.split(" ").filter(x=>x.length>2);
  const overlap=toks.filter(x=>(this.state.context.topicTerms||[]).includes(x)).length;
  let intent=found[0]?found[0].id:"general";
  if((intent==="general"||intent==="reaction_surprise")&&/[?？]/.test(s))intent="direct_question";
  if(intent==="general"&&this.state.context.lastIntent&&/^(yes|no|why|how|what about that|exactly|maybe|i guess)$/.test(raw))intent="followup";
  return{intent,overlap,normalized:expanded,raw,previousIntent:this.state.context.lastIntent||""};
 },
 grammar(s){return D.grammar.filter(x=>x[0].test(s)).map(x=>x[1])},
 slang(s){
  const raw=norm(s);
  const has=k=>{
   const phrase=norm(k).replace(/[.*+?^\$()|[\]\\]/g,"\\$&").replace(/\s+/g,"\\s+");
   return new RegExp("(^|\\s)"+phrase+"(?=$|\\s)","i").test(raw);
  };
  return Object.keys(D.slang).filter(has).map(k=>k+" = "+D.slang[k]);
 }, feedback(s,a){
  const g=this.grammar(s),sl=this.slang(s);
  if(g.length)return "Grammar tip: "+g[0];
  if(sl.length)return "Informal English: "+sl[0]+". This expression is casual, so it fits a group chat better than a formal email.";
  const tips={
   direct_question:"Natural question pattern: “What exactly happened?” Use “what exactly” when you want a clearer detail.",
   ask_explain:"Useful follow-up: “Could you explain what happened?” It sounds natural when asking someone to clarify a story.",
   ask_word:"Useful vocabulary question: “What does that mean in this context?” The phrase “in this context” asks for the meaning in the actual conversation.",
   opinion:"Useful opinion pattern: “I think so because…” Add a reason after “because” to make your point clearer.",
   reaction_agree:"Natural agreement: “Exactly, that's what I mean.” It sounds more conversational than repeating “I agree”.",
   reaction_disagree:"Polite disagreement: “I see your point, but…” It lets you disagree without sounding unnecessarily aggressive.",
   personal_story:"Storytelling phrase: “So here's what happened…” Use it to introduce the next part of a personal story.",
   greeting:"Casual greeting: “What's everyone up to?” This is a natural way to start a group chat.",
   daily_chat:"Everyday English: “I'm just chilling” means you are relaxing and not doing much.",
   plan:"Making plans: “I'm down” means “I'm interested” or “I'm in” in informal conversation.",
   empathy:"Showing empathy: “That sounds rough” is a natural, informal way to say something seems difficult.",
   complaint:"Describing frustration: “I'm so done with this” is informal and stronger than simply saying “I'm annoyed”."
  };
  if(tips[a.intent])return tips[a.intent];
  if(a.overlap)return "Context tip: you used vocabulary connected to the headline. Try adding “because”, “but” or “so” to explain your reasoning.";
  const meaningful=a.raw.split(" ").filter(x=>x.length>2&&!["the","and","but","you","are","was","this","that","with","have","what","who","how","why","when","where","from","just","like","very","really"].includes(x));
  if(meaningful.length<2)return "Try adding one detail, a reason or a follow-up question. Real group chats usually build on the previous message.";
  return "Your message is understandable. To sound more natural, react to one specific detail and add a short reason or follow-up question.";
 },
 reply(s){
  const a=this.analyse(s),fb=this.feedback(s,a),sl=this.slang(s),g=this.grammar(s);
  const cat=(this.state.selected&&this.state.selected.category)||"weird";
  const title=(this.state.selected&&this.state.selected.title)||"the current topic";
  const titleWords=norm(title).split(" ").filter(w=>w.length>3);
  const userWords=a.normalized.split(" ").filter(w=>w.length>2&&!["the","and","but","you","are","was","this","that","with","have","what","who","how","why","when","where","from","just","like","very","really","about","your","they","them","then","there","their","would","could","should"].includes(w));
  const overlap=userWords.filter(w=>(this.state.context.topicTerms||[]).includes(w)||titleWords.includes(w)).length;
  const related=overlap>0||a.intent==="ask_explain"||a.intent==="news_reaction"||a.intent==="followup";
  const clean=s.replace(/\s+/g," ").trim();
  const focus=clean.length>76?clean.slice(0,73)+"…":clean;
  const pick=x=>x[Math.floor(Math.random()*x.length)];
  this.msg("You","🙂",s,"mine");
  const eligible=CHAT_PERSONAS.filter(p=>p.categories.includes(cat));
  const pool=eligible.length?eligible:CHAT_PERSONAS;
  const preferred={ask_explain:"Oliver",ask_word:"Oliver",direct_question:"Daniel",news_reaction:"Oliver",reaction_funny:"Jake",reaction_agree:"Daniel",reaction_disagree:"Sophie",opinion:"Sophie",personal_story:"Daniel",confusion:"Daniel",empathy:"Emily",thanks:"Emily",greeting:"Jake",daily_chat:"Daniel",complaint:"Emily",plan:"Jake",brainrot_reaction:"Jake",meme_reference:"Jake",sarcasm:"Sophie",surprise:"Mike"};
  let primary=CHAT_PERSONAS.find(p=>p.name===preferred[a.intent]);
  if(!primary||(!primary.categories.includes(cat)&&a.intent!=="ask_explain"&&a.intent!=="ask_word"&&a.intent!=="news_reaction"))primary=pick(pool);
  const others=pool.filter(p=>p.name!==primary.name);
  const secondary=pick(others.length?others:CHAT_PERSONAS.filter(p=>p.name!==primary.name));
  const shortHeadline=title.length>88?title.slice(0,85)+"…":title;
  const quoted=focus.length>58?focus.slice(0,55)+"…":focus;
  const makeLine=person=>{
   const n=person.name;
   if(a.intent==="greeting")return n==="Jake"?"You appeared. The group chat was about to file a missing-person report.":"Hey! What are we talking about today?";
   if(a.intent==="thanks")return n==="Emily"?"Anytime! That's what the group chat is for.":"No problem. You owe us one decent meme.";
   if(a.intent==="ask_word")return sl.length?"You used “"+sl[0].split(" = ")[0]+"”. Do you want its meaning here or a more natural example?":"Which exact word or phrase in “"+quoted+"” do you want explained? The full sentence will help.";
   if(a.intent==="ask_explain"||a.intent==="news_reaction"){
    if(n==="Oliver")return "The headline is “"+shortHeadline+"”. That gives us the topic, but not every detail. Which part do you want to understand?";
    if(n==="Mike")return "I have three theories, two are nonsense. First, let's check what the report actually says.";
    return "Wait, are you asking what happened in the story or why it matters?";
   }
   if(a.intent==="reaction_agree")return n==="Sophie"?"I agree with the point, but let's not pretend the headline proves more than it says.":"Fair. Your point about “"+quoted+"” makes sense.";
   if(a.intent==="reaction_disagree")return n==="Sophie"?"Okay, which part do you disagree with? I want the argument, not just the dramatic entrance.":"Wait, what part doesn't convince you?";
   if(["reaction_funny","meme_reference","brainrot_reaction"].includes(a.intent))return n==="Jake"?"“"+quoted+"” is going straight into the group chat archives. I'm crying.":n==="Sophie"?"I hate that I laughed at “"+quoted+"”.":"That was so specific I actually pictured it.";
   if(a.intent==="personal_story")return n==="Daniel"?"Hold on, you can't drop “"+quoted+"” and leave out what happened next.":"Wait, what happened after that?";
   if(a.intent==="opinion")return n==="Sophie"?"Interesting. What made you think that about “"+quoted+"”?":"I can see where you're coming from. Which detail convinced you?";
   if(a.intent==="confusion")return "Which part is confusing: the wording, the situation, or the reason behind it?";
   if(a.intent==="empathy")return n==="Emily"?"That's rough. I hope things get better. Do you want to tell us what happened?":"Yeah, that's not an easy situation.";
   if(a.intent==="complaint")return n==="Emily"?"That sounds exhausting. What happened?":"Honestly, fair. What set this off?";
   if(a.intent==="plan")return n==="Jake"?"I'm in, but somebody else is responsible for choosing. I refuse to be blamed.":"Could work. What time are we thinking?";
   if(a.intent==="daily_chat"||/\b(hungry|food|eat|pizza|sleep|tired|bored|woke up|work|school|homework)\b/.test(a.normalized)){
    if(/hungry|food|eat|pizza/.test(a.normalized))return n==="Emily"?"What are you craving? I'm always one message away from ordering food.":"Same. Are we cooking or spending money we don't have?";
    if(/sleep|tired|woke up/.test(a.normalized))return n==="Daniel"?"Same. My sleep schedule is a social experiment at this point.":"Go get some rest. The group chat will still be making bad decisions later.";
    if(/bored/.test(a.normalized))return n==="Jake"?"We could play something, or continue staring at the wall professionally.":"Pick a game or give us a topic. Dead chat is unacceptable.";
    if(/school|homework|work/.test(a.normalized))return n==="Daniel"?"How much do you have left? I'm trying to calculate how doomed we are.":"The responsibilities have found us again.";
   }
   if(a.intent==="direct_question"||s.includes("?")){
    if(related&&n==="Oliver")return "About “"+shortHeadline+"”: the headline alone doesn't answer that. We should check the linked report rather than guess.";
    return "I read your question: “"+quoted+"”. Are you asking for an explanation, an opinion, or what we would do?";
   }
   if(related){
    if(cat==="games"){
     if(n==="Jake")return "Ranked matchmaking is one patch away from becoming a group therapy session. What changed in the update?";
     if(n==="Daniel")return "Did the update mess with matchmaking, the balance, or the whole game?";
     if(n==="Sophie")return "Worse how, exactly? Matchmaking, performance, or did the devs somehow break the menu too?";
    }
    if(cat==="tech"){
     if(n==="Jake")return "Another update and somehow the device has developed a new personality. What changed for you?";
     if(n==="Daniel")return "Is it actually slower, or did they just move every setting somewhere impossible to find?";
     if(n==="Sophie")return "What is the actual impact? The headline could use a little more than tech-bro excitement.";
    }
    if(cat==="science"&&n==="Oliver")return "The discovery sounds interesting. What detail from the report caught your attention?";
    if(cat==="aviation"&&n==="Oliver")return "Which part are you reacting to: the flight, the airport procedure, or the airline's response?";
    if(cat==="animals"&&n==="Emily")return "Wait, are you talking about the animal itself or the people who helped it? I need the wholesome details.";
    if(cat==="food"&&n==="Sophie")return "Food discourse again. Is your point about the taste, the price, or the very questionable decision behind it?";
    if(cat==="internet"&&n==="Jake")return "The internet has found a new thing to overanalyse. What part of the post got you?";
    if(cat==="weird"&&n==="Sophie")return "That is the detail I want explained. Who thought this was a sensible idea?";
    if(cat==="transport"&&n==="Daniel")return "Wait, how did that happen? Was it the route, the vehicle, or the person in charge?";
    if(cat==="wholesome"&&n==="Emily")return "That's genuinely lovely. Which part of the story stood out to you?";
    if(cat==="school"&&n==="Daniel")return "This sounds like something that would happen five minutes before the deadline. What happened?";
    if(cat==="daily"&&n==="Daniel")return "That is painfully relatable. Is this a one-day problem or has the whole week been like this?";

    if(n==="Oliver")return "Your point connects with “"+quoted+"”. The story we're discussing is “"+shortHeadline+"”. Let's keep confirmed details separate from speculation.";
    if(n==="Jake")return "So we're adding “"+quoted+"” to the “"+cat+"” chaos. This chat has a new side quest.";
    if(n==="Sophie")return "That is actually relevant to the story. I'm more interested in the detail behind “"+quoted+"” than the headline drama.";
    if(n==="Mike")return "“"+quoted+"” raises a question. I am not calling it a conspiracy, but I am opening a spreadsheet.";
    if(n==="Emily")return "That's a good point about “"+quoted+"”. I hadn't looked at it that way.";
    return "Wait, so your point is “"+quoted+"”? I think I get what you mean.";
   }
   if(n==="Daniel")return "I get what you're saying about “"+quoted+"”. What happened next?";
   if(n==="Sophie")return "Noted. But what's your actual point about “"+quoted+"”?";
   if(n==="Jake")return "“"+quoted+"” is now the official topic. Nobody knows how we got here.";
   if(n==="Emily")return "I hear you. Tell us a little more about “"+quoted+"”.";
   if(n==="Mike")return "Interesting. I have a theory, but I need one more detail about “"+quoted+"”.";
   return "Got it. What made you bring up “"+quoted+"”?";
  };
  const firstLine=makeLine(primary);
  const isTiny=s.length<24,question=["ask_explain","ask_word","direct_question","news_reaction"].includes(a.intent);
  const wantsSecond=!isTiny&&(question||["personal_story","opinion","plan","reaction_funny","news_reaction"].includes(a.intent)||(related&&a.intent!=="greeting"&&a.intent!=="thanks"&&Math.random()<0.18));
  let secondLine="";
  if(wantsSecond){
   if(a.intent==="opinion")secondLine=secondary.name==="Jake"?"I'm only here to watch this debate turn into a 40-message thread.":"I want to hear the reason behind that take too.";
   else if(["direct_question","ask_explain","news_reaction"].includes(a.intent))secondLine=secondary.name==="Mike"?"I have a theory, but let's wait for the actual details first.":"I was about to ask the same thing.";
   else if(a.intent==="personal_story")secondLine=secondary.name==="Jake"?"Story time. I'm putting my phone on charge for this.":"Wait, I'm invested now. Keep going.";
   else secondLine=related?"I was reading the same part of the story. What do you make of it?":"I'm following. What happened next?";
  }
  const activeTitle=title;
  const el=document.getElementById("sp-feedback");
  if(el)el.innerHTML='<div class="sp-feedback-head"><b>🧠 English check</b><span>'+esc(a.intent.replace(/_/g," "))+'</span></div><p>'+esc(fb)+'</p>'+(g.length?'<small>Grammar: '+esc(g[0])+'</small>':"")+(sl.length?'<small>Slang: '+esc(sl.join(" · "))+'</small>':"")+'<small>Conversation tip: '+esc(related?"Your message connects to the selected story.":"This reply follows your message without forcing the news topic.")+'</small>';
  this.state.context.lastIntent=a.intent;
  this.state.context.lastUserMessage=s;
  this.state.context.lastResponder=primary.name;
  this.state.context.lastNewsTitle=activeTitle;
  const schedule=(person,line,delay)=>window.setTimeout(()=>{
   if(!this.state.selected||this.state.selected.title!==activeTitle)return;
   this.msg(person.name,person.avatar,line);
   this.state.context.recentLines=(this.state.context.recentLines||[]).concat([line]).slice(-80);
   this.state.context.lastResponder=person.name;
   this.save();
  },delay);
  schedule(primary,firstLine,520+Math.floor(Math.random()*700));
  if(secondLine&&secondLine!==firstLine)schedule(secondary,secondLine,1900+Math.floor(Math.random()*1700));
  this.save();
 },
 send(){const i=document.getElementById("sp-input");if(!i)return;const s=i.value.trim();if(!s)return;if(s.length>500){this.status("Keep it under 500 characters. The group chat is chaotic, not a legal deposition.");return}this.reply(s);i.value="";i.focus()},
 render(){const h=document.getElementById("view");if(!h)return;this.load();h.innerHTML='<section class="sp-hero"><div><span class="sp-kicker">ENGLISH IMMERSION HUB · GROUP SIMULATOR</span><h1>BREAKING NEWS 💀</h1><p>A daily dose of headlines, bad jokes and suspiciously useful English.</p><div class="sp-hero-meta"><span>● 6 recurring members</span><span>English only</span><span>Rule-based engine · no generative AI</span></div></div><div class="sp-hero-sticker">TODAY’S<br>CHAOS</div></section><div class="sp-layout"><aside class="sp-news-panel"><div class="sp-section-title"><div><h2>Today’s headlines</h2><p class="mut">Tech, games, aviation, weird stories and wholesome breaks.</p></div><button id="sp-refresh" title="Refresh news">↻</button></div><div id="sp-status" class="sp-status">Preparing the chaos…</div><div id="sp-news"></div><div class="sp-source-note">Headlines and short metadata are shown here. Full articles remain on the publishers’ websites.</div></aside><section class="sp-chat-panel"><div class="sp-chat-head"><div class="sp-group-avatar">💬</div><div><b>BREAKING NEWS 💀</b><small>Oliver, Jake, Sophie, Daniel, Mike & Emily</small></div><span class="sp-online">● 6 online</span></div><div class="sp-topic-banner"><small>DISCUSSING</small><b id="sp-topic">Choose a headline to start</b><a id="sp-source-link" target="_blank" rel="noopener noreferrer" hidden>Read original story ↗</a></div><div class="sp-messages" id="sp-messages"></div><div id="sp-feedback" class="sp-feedback"><div class="sp-feedback-head"><b>🧠 English check</b><span>Waiting</span></div><p>Write naturally. The engine checks context, meaning, common grammar patterns and informal expressions.</p></div><form class="sp-composer" id="sp-form"><input id="sp-input" maxlength="500" autocomplete="off" placeholder="Type your message in English…" aria-label="Your message in English"><button class="pri" type="submit">Send ↗</button></form><div class="sp-chat-foot">React, ask a question, disagree or make a joke. Mistakes are part of the conversation.</div></section></div><section class="sp-engine-info"><h2>Behind the scenes: the language engine</h2><div class="sp-engine-grid"><article><b>01 · Meaning first</b><p>Reads the actual message, question, opinion or story before choosing a response.</p></article><article><b>02 · News connection</b><p>Uses the selected headline only when your message is relevant. No forced topic changes.</p></article><article><b>03 · Character roles</b><p>Each member has interests, a voice and reasons to join or stay quiet.</p></article><article><b>04 · Natural pacing</b><p>One person usually replies. A second may join later when the conversation calls for it.</p></article></div><div class="sp-persona-grid">${CHAT_PERSONAS.map(p=>`<article><b>${p.avatar} ${p.name} · ${p.role}</b><p>${p.style}. Topics: ${p.categories.join(", ")}.</p></article>`).join("")}</div><p class="mut">The conversation engine uses contextual rules, not a generative AI model. Complex or unusual wording can still be misunderstood, but replies are selected from the message, active news category and each character’s role.</p></section>';document.getElementById("sp-form").onsubmit=e=>{e.preventDefault();this.send()};document.getElementById("sp-refresh").onclick=()=>this.fetchNews(true);this.messages();this.news();this.topic();this.fetchNews()}
};
window.EnglishShitpost=app;
})();