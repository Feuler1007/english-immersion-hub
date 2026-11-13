# BREAKING NEWS 💀 · Setup

The English Immersion Hub group chat uses Google News RSS through a small Cloudflare Worker. No Google API key is required.

## 1. Deploy the news proxy

1. Open the Cloudflare dashboard: https://dash.cloudflare.com/
2. Go to **Workers & Pages**.
3. Choose **Create** and create a Worker.
4. Open the Worker editor.
5. Replace the starter code with the complete contents of `news-worker.js` from this repository.
6. Deploy the Worker.
7. Copy its public `workers.dev` address and append `/news`.

Example format (replace the name with your own Worker):
`https://your-worker-name.your-account.workers.dev/news`

## 2. Automatic connection in the public site

The Worker endpoint is configured centrally in `shitpost-engine.js`. Visitors do not need to paste a URL, save settings, or configure their browsers. To change the Worker in the future, update the `endpoint()` function once in the repository and publish the site again.

Current endpoint: `https://english-immersion-news.felipechves8.workers.dev/news`

## 3. What the feed collects

Ten Google News RSS searches are combined:
- NVIDIA, GPUs, chips and technology
- Video games, consoles, Steam and esports
- Aviation, airports, unusual incidents and emergency landings
- Bizarre events and unusual human-interest stories
- Animals, pets and rescues
- Strange science and discoveries
- Viral internet stories and memes
- Odd transport stories
- Unusual food and restaurants
- Wholesome and heartwarming stories

The Worker deduplicates headlines, ranks relevant stories, filters a list of graphic or tragic terms, and returns up to 70 headlines with source, publication date, short metadata and the original link.

## 4. Language engine

`shitpost-engine.js` contains the local rule-based conversation engine:
- Keyword and synonym expansion
- Communicative intent detection
- Informal expressions and internet slang glossary
- Common grammar error patterns with short explanations
- Current headline vocabulary and recent conversational intent
- Six recurring character voices with distinct sarcastic, chaotic, wholesome and conspiracy-leaning personalities
- 144 contextual scene seeds across technology, gaming, aviation, weird news, animals, science, internet memes, transport, food, wholesome stories, school and everyday life
- 12 reaction styles, producing more than 1,700 contextual line combinations, plus intent-specific replies
- Expanded Gen Z / brainrot slang recognition, including aura, rizz, sigma, cooked, mog, fanum tax, crash out and locked in
- Recent-line memory to reduce immediate repetition, including varied opening reactions

No generative AI service or paid token API is used. The interpreter is intentionally bounded: it recognizes known patterns and context, but it cannot understand every novel sentence like a human or an LLM.

## Important limitations

- Google News RSS supplies headlines and links, not full article text. Users open the publisher's original article for the full report.
- The Worker fetches feeds when the site requests them. The Worker endpoint is shared by all visitors. The daily featured headline and chat history are still selected/stored per browser; a globally synchronized daily headline would require a separate shared server-side store (for example, a Cloudflare KV or D1 binding).
- The chat is currently a personal group simulation. Messages are stored in that browser and are not synchronized between different users.
- Aviation and accident stories are filtered to reduce graphic/tragic material, but automated keyword filtering is not perfect.
- The initial preview stories are clearly marked as built-in examples and are not real news reports.
