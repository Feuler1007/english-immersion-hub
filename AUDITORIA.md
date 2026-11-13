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
