# Auditoria técnica inicial

**Projeto:** English Immersion Hub  
**Branch analisada:** `main`  
**Arquivo principal:** `index.html`  
**Escopo:** etapa 1 de 8, auditoria e estrutura  
**Data:** 13/11/2026

## Resultado executivo

O aplicativo está concentrado em um único arquivo HTML de aproximadamente 324 KB, com CSS, JavaScript, dados de conteúdo e telas no mesmo documento. Isso facilita a publicação estática no GitHub Pages, mas aumenta o risco de regressões: uma alteração localizada pode afetar outras áreas do aplicativo.

A auditoria desta etapa foi somente de leitura do código e dos metadados do repositório. Nenhuma regra de negócio, XP, conteúdo, conta ou dado salvo dos usuários foi alterado.

## Estrutura encontrada

- Repositório contém `index.html` e `README.md` na raiz.
- Aplicativo publicado como site estático pelo GitHub Pages.
- Um bloco principal de CSS e um bloco principal de JavaScript inline.
- Navegação por telas renderizadas no próprio documento.
- Conteúdo de músicas, curso e exercícios incorporado ao código.
- Persistência principal em `localStorage`, com exportação e importação manual de backup.
- Integrações externas identificadas com Google Identity, YouTube/YouTube embeds, Google Fonts e fontes de artigos científicos.

## Pontos que exigem atenção

### 1. Manutenção e risco de regressão
O arquivo único tem centenas de milhares de caracteres e concentra interface, conteúdo e lógica. Recomenda-se organizar internamente os módulos por responsabilidade antes de mudanças estruturais maiores. A migração para múltiplos arquivos deve ser gradual para não quebrar o GitHub Pages nem os dados existentes.

### 2. Persistência e recuperação de dados
O progresso é salvo no armazenamento local do navegador. O próprio aplicativo informa que os dados não são sincronizados automaticamente entre dispositivos e oferece backup manual. A rotina de gravação captura falhas sem apresentar aviso ao usuário. Na etapa de perfil e salvamento, será necessário testar migrações, importação, exportação e cenários de armazenamento indisponível, sem apagar nem sobrescrever progresso existente.

### 3. Gamificação e XP
A fórmula atual de nível é `xpTo(n) = round(25*n + 0,28*n²)`, e o nível 301 exige aproximadamente **32.893 XP**. O código atual usa meta diária de 90 XP, metas de projeção de 180/90/60 XP por dia e multiplicador geral de 2,4. Há também bônus diário, bônus por sequência, combo, primeira conclusão, repetição e redenção. Esses fatores precisam ser avaliados em conjunto na etapa 3 para evitar inflação de XP, recompensas duplicadas ou estimativas incoerentes. Esta auditoria não recalculou nem modificou essas regras.

### 4. Renderização dinâmica e segurança
Há diversas atribuições a `innerHTML`, além de conteúdo personalizado e importado. Isso não comprova uma vulnerabilidade por si só, mas exige revisão cuidadosa de todos os caminhos em que texto do usuário, letras, nomes ou dados de backup chegam ao HTML. A função de escape atual é simples e precisa ser validada conforme o contexto de uso (texto, atributo ou URL).

### 5. Qualidade e testes
Não foi encontrada infraestrutura de testes automatizados, configuração de build ou pipeline de validação na raiz do repositório. Antes de cada publicação, será necessário ao menos validar sintaxe JavaScript, carregamento das telas críticas e fluxos principais. A etapa final deverá consolidar uma lista de testes de regressão.

### 6. Identificadores e navegação
A varredura estática encontrou identificadores HTML repetidos (`pr` e `bk`) em pontos distintos do código. Como as telas são montadas dinamicamente, é preciso confirmar se esses elementos podem coexistir no DOM antes de corrigir. Também há navegação por botões gerados dinamicamente, que deve ser testada em desktop e celular.

### 7. Dependências externas
O funcionamento de recursos específicos depende de serviços externos, incluindo Google Identity e YouTube. Falhas de rede, bloqueadores, políticas de incorporação e mudanças de terceiros podem afetar esses recursos. As próximas etapas devem preservar alternativas e mensagens de erro claras sempre que possível.

## Plano de execução após a auditoria

1. Design e experiência visual: ajustar consistência visual, hierarquia, densidade e animações sem alterar regras de estudo.
2. XP, níveis e gamificação: auditar cada origem de XP, limites, bônus, metas e curva de progressão.
3. Sistema de aprendizado: revisar artigos, Básico do Inglês, exercícios, vocabulário e feedback.
4. Músicas e imersão: testar player, letras, sincronização, pronúncia e exercícios.
5. Perfil e salvamento: revisar armazenamento, backup, restauração e integração de conta.
6. Responsividade e desempenho: avaliar telas, navegação, carregamento e animações em diferentes tamanhos.
7. Revisão geral e testes: executar regressão dos fluxos e publicar correções finais.

## Critérios de segurança para as próximas etapas

- Não remover nem reinicializar dados existentes.
- Não alterar o formato das chaves de armazenamento sem migração compatível.
- Não substituir recursos funcionais por telas demonstrativas.
- Fazer alterações pequenas e isoladas, com publicação e verificação ao fim de cada etapa.
- Interromper o trabalho após cada etapa e aguardar autorização explícita para continuar.

---
*Documento de auditoria técnica inicial. Os itens identificados são pontos de revisão e não devem ser interpretados automaticamente como falhas confirmadas.*

## Etapa 3 de 8 — XP, níveis e gamificação

**Status:** concluída e publicada.

- Corrigida a contabilização da meta diária: os quarenta e cinco XP de bônus continuam sendo adicionados ao XP total, mas deixam de inflar o contador de XP obtido em atividades.
- Adicionada migração única e conservadora para descontar o bônus legado do contador diário quando ele já tiver sido concedido no dia atual. O XP total acumulado e os níveis não são alterados.
- Indicador da tela inicial renomeado para “XP de atividades hoje”, deixando explícito o que a meta mede.
- Explicação das regras atualizada para diferenciar XP de atividades e bônus diário.
- Mantidos o multiplicador global de 2,4, os níveis e seus limites, os bônus por combo e sequência, as recompensas únicas, o limite diário de XP por repetição e o limite de bônus de sessão.

**Validação realizada:** confirmação do conteúdo publicado, presença de uma tag de abertura e fechamento do script, ausência da sequência de escape de quebra de linha que havia sido corrigida antes da verificação, e checagem estática das regras de bônus, repetição e sessão.

**Limitação:** não foi executado teste interativo em navegador real nesta etapa. A validação de interface e fluxos completos permanece para a etapa final de regressão.

## Etapas 4 a 8 de 8 — concluídas na publicação consolidada

**Status:** alterações publicadas no arquivo principal e verificadas por leitura posterior do conteúdo do GitHub.

### Etapa 4 — Sistema de aprendizado
- Mantidos os percursos existentes de Básico do Inglês, Inglês real, Dia a dia, revisão de erros e leitura científica.
- Refinada a apresentação responsiva de lições, exemplos, perguntas, feedbacks, textos acadêmicos e campos de escrita.
- Melhorada a legibilidade de textos longos e a adaptação de cartões e opções em telas estreitas.
- Não foram inventadas novas lições nem substituídos conteúdos pedagógicos existentes nesta etapa.

### Etapa 5 — Músicas e imersão
- Mantidos biblioteca musical, favoritos, músicas personalizadas, player do YouTube, letras inseridas pelo usuário, marcação de tempos, karaokê, vocabulário e exercícios.
- Corrigida uma condição assíncrona: se o carregamento da API do YouTube terminar depois que o usuário sair da tela da música, o player não tenta ser montado em um elemento que já não existe.
- Refinada a adaptação do player, controles, letras sincronizadas e cartões de vocabulário para telas menores.
- Letras adicionadas pelo usuário continuam salvas localmente no navegador; esta publicação não cria sincronização em nuvem.

### Etapa 6 — Perfil, dados e salvamento
- A gravação em `localStorage` agora informa o usuário uma única vez por sessão quando o navegador não consegue salvar, em vez de falhar silenciosamente.
- Datas de meta diária e sequência passaram a usar o calendário local do dispositivo, evitando a virada de dia baseada em UTC.
- A importação de backup agora rejeita arquivos acima de dez megabytes, informa falhas de leitura e valida que o XP seja um número finito e não negativo antes de substituir os dados.
- Mantidos o formato de armazenamento, o backup exportado e a confirmação explícita antes da restauração.

### Etapa 7 — Responsividade e acessibilidade
- Ajustes de layout para biblioteca musical, player, controles, letras, artigos, vocabulário, formulários e lições em celulares.
- Melhor tratamento de quebra de palavras e conteúdo extenso, evitando estouro horizontal.
- Preservados foco visível, controles desabilitados e preferência por movimento reduzido.
- O tema escolhido pelo aplicativo continua controlando a aparência dos elementos nativos.

### Etapa 8 — Revisão final e publicação
- Confirmada a publicação do HTML e a existência de um único bloco de script com abertura e fechamento.
- Confirmada a presença das proteções de escape HTML, datas locais, aviso de falha de armazenamento, limite e validação de backup, proteção do carregamento assíncrono do player e regras responsivas.
- Confirmada a preservação do documento de auditoria e do código de XP das etapas anteriores.

**Limitação de validação:** não foi executada uma bateria de testes interativos em navegadores reais, nem testes automatizados de ponta a ponta. A revisão final desta rodada foi estática, baseada no conteúdo publicado no GitHub. Recomenda-se abrir o site em desktop e celular e testar login opcional, player, backup/restauração, letras, missões e XP antes de considerar a validação operacional completa.

**Observação de escopo:** as etapas 4 a 8 foram concluídas em uma publicação consolidada para reduzir o número de ciclos da conversa. As alterações foram focadas em robustez, clareza, responsividade e preservação das funcionalidades existentes; não houve reescrita integral do curso nem migração para backend.


## Auditoria de segurança — 13/11/2026

**Escopo:** leitura estática do repositório público, do HTML principal, do motor de conversas, do agregador RSS e da configuração do Worker. Não foram executados testes de intrusão nem testes em navegador real.

### Correções aplicadas nesta revisão
- Sanitização estrutural das músicas personalizadas carregadas do armazenamento local ou de backups: somente IDs e IDs de vídeo no formato esperado são aceitos; título, artista, pares de vocabulário e matiz são limitados/normalizados; campos de apresentação são fixados pelo aplicativo.
- Escape HTML dos campos `level` provenientes dos bancos de conteúdo importados nas telas de diálogos, simulações e listening.
- Limite de 10 MB também aplicado à importação do banco de conteúdo, além do limite já existente para backups.
- Worker agora aceita apenas GET e OPTIONS, responde 405 para outros métodos e envia `X-Content-Type-Options: nosniff` e `Referrer-Policy: no-referrer`.

### Resultado da inspeção
- Não foram encontrados tokens privados, chaves de API ou credenciais embutidos nos arquivos de código revisados.
- O Worker consulta apenas uma lista fixa de feeds RSS; a URL de destino não é fornecida pelo visitante. Isso reduz o risco de SSRF.
- O Worker publica apenas títulos, descrições curtas e links HTTP/HTTPS; não executa HTML dos feeds.
- O CORS do Worker usa origem curinga porque o endpoint entrega notícias públicas e precisa ser consumido por visitantes anônimos. Isso não é autenticação e não protege contra abuso automatizado.
- O site guarda progresso, letras, músicas personalizadas e histórico de conversa no localStorage do navegador. Esses dados não são contas/sessões autenticadas e não são sincronizados entre usuários.
- O recurso de tradução envia o texto da mensagem selecionada ao serviço de tradução do Google. Não inserir dados pessoais ou confidenciais nas mensagens.
- O HTML principal contém JavaScript inline e integrações de terceiros (YouTube, Google Fonts e tradução). Não há uma Content Security Policy (CSP) estrita configurada. Como o site é publicado estaticamente no GitHub Pages, cabeçalhos HTTP de segurança completos exigem configuração adicional de hospedagem ou uma camada de proxy.
- O endpoint de notícias é público e não possui autenticação nem limite de requisições por IP configurado nesta revisão. Os feeds externos são fixos, mas convém acompanhar uso e consumo no Cloudflare.

### Limitações
- A integração GitHub usada nesta revisão não permitiu ler as configurações de proteção de branch nem os alertas privados de segurança do repositório. Não é possível confirmar por esta auditoria se branch protection, secret scanning e Dependabot estão habilitados.
- Não foram testados fluxos reais de navegador, importações com payloads maliciosos, limites de taxa, nem configurações de segurança do painel Cloudflare.
- Esta revisão estática reduz riscos identificados, mas não equivale a um pentest ou a uma certificação de segurança.
