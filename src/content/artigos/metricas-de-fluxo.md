# Métricas de fluxo: medir para enxergar o sistema, não para cobrar pessoas

Toda organização quer entregar mais rápido.

A pergunta difícil é outra: quanta coisa essa organização está tentando fazer ao mesmo tempo?

No trabalho do conhecimento, o excesso de trabalho em andamento costuma ser invisível. Ele não aparece como peças acumuladas no chão de uma fábrica, mas como reuniões demais, urgências concorrendo entre si, pessoas pulando de uma demanda para outra, retrabalho, cobrança, ansiedade e uma sensação permanente de que todo mundo está ocupado, mas pouca coisa termina.

Por isso eu gosto tanto das métricas de fluxo.

Quando bem usadas, elas ajudam a tornar o sistema de trabalho visível e, até certo ponto, previsível. Mostram onde a capacidade está sendo consumida, quanto tempo as coisas levam para serem concluídas e qual é o ritmo real de entrega de uma equipe, área ou organização.

O cuidado está no “quando bem usadas”.

Métrica pode melhorar uma conversa, mas também pode destruir uma conversa.

Quando escrevi *Métricas Ágeis*, uma das preocupações centrais era justamente essa: separar medição de vigilância. Métrica não existe para produzir teatro de controle; existe para melhorar a qualidade da decisão sobre o trabalho. Este texto continua essa conversa, agora olhando mais diretamente para fluxo, capacidade e previsibilidade.

## Métrica não deveria ser instrumento de humilhação

Uma das piores formas de usar métricas é transformar número em *ranking* simplista entre equipes.

Já vi situações em que alguém olhava para duas equipes e dizia:

> Essa equipe entrega dez coisas por mês. Aquela outra entrega cinco. Então a primeira é duas vezes mais produtiva.

Essa conclusão parece objetiva, mas costuma ser frágil.

Antes de comparar duas equipes, seria preciso entender a natureza do trabalho de cada uma. Uma pode estar lidando com demandas simples e repetitivas; outra pode estar trabalhando em problemas complexos, cheios de dependências, risco técnico e incerteza. Comparar apenas volume entregue, sem contexto, é comparar coisas diferentes como se fossem iguais.

Métrica boa ajuda um sistema a evoluir. Ela permite que uma equipe olhe para o próprio histórico e pergunte:

- Estamos melhorando?
- Nosso tempo de entrega está caindo?
- Nossa vazão está mais estável?
- Nossa capacidade está sendo consumida por trabalho planejado ou por urgência?

Esse tipo de pergunta muda a qualidade da conversa.

Número sem contexto vira julgamento. Número com contexto vira instrumento de gestão.

## *WIP*: o custo invisível de começar demais

A primeira métrica essencial para olhar fluxo é o *WIP*, *work in progress*, ou trabalho em progresso.

*WIP* é tudo aquilo que começamos e ainda não terminamos.

Parece simples, e é. Mesmo assim, poucas organizações tratam isso com a seriedade necessária.

Quando muita coisa começa ao mesmo tempo, a sensação inicial pode ser boa. O sistema parece ativo: todo mundo está ocupado, há várias frentes andando. O problema é que ocupação não é entrega.

Quanto mais trabalho em paralelo, maior tende a ser o tempo para terminar cada coisa. As pessoas trocam de contexto, retomam assuntos pela metade, esperam respostas, dependem de outras áreas, entram em reuniões de alinhamento e deixam itens envelhecendo no fluxo.

A frase clássica da comunidade *Kanban* continua forte porque é simples e verdadeira:

> Pare de começar e comece a terminar.

Esse princípio vale para uma equipe de tecnologia, para uma central de atendimento, para uma área de dados, para uma equipe comercial e também para a vida pessoal.

Se uma pessoa decide, ao mesmo tempo, fazer academia, aprender um idioma, começar um novo hobby, visitar mais amigos, estudar um tema novo e reorganizar a casa, ela provavelmente não criou um plano; criou uma fila de frustração.

Nas empresas acontece a mesma coisa, só que com nomes mais sofisticados: iniciativas estratégicas, projetos prioritários, demandas emergenciais, melhorias rápidas, ações regulatórias, pedidos da diretoria.

Tudo parece importante. Tudo parece urgente. Tudo começa. Pouca coisa termina.

Gerenciar *WIP* é proteger foco.

E proteger foco exige coragem para fazer perguntas simples:

- O que já está em andamento?
- O que precisa terminar antes de começarmos algo novo?
- Qual demanda vamos pausar se esta nova demanda entrar?
- Quem está assumindo esse compromisso?
- Temos capacidade real ou estamos apenas aceitando mais uma expectativa?

Sem esse tipo de conversa, o sistema vai acumulando trabalho — e trabalho acumulado cobra juros.

## *Throughput*: ritmo importa mais que heroísmo

A segunda métrica é *throughput*, ou vazão.

*Throughput* mostra quanto trabalho foi concluído em determinado período. Pode ser quantidade de chamados resolvidos por semana, funcionalidades entregues por mês, relatórios concluídos por trimestre, contratos fechados em um ciclo comercial.

Essa métrica ajuda a entender o ritmo real do sistema, e ritmo é uma palavra importante.

Muitas organizações confundem entrega com heroísmo. Uma equipe passa três finais de semana trabalhando, vira noites, entrega um projeto e isso é comemorado como prova de comprometimento.

Eu vejo de outra maneira.

Esse tipo de entrega pode até resolver uma emergência, mas não deveria virar modelo operacional. Ritmo insustentável quebra pessoas, derruba qualidade e cria uma cultura em que planejamento ruim é compensado por esforço extraordinário.

*Throughput* ajuda a fazer uma pergunta mais saudável: qual é o nosso ritmo sustentável de entrega?

Se uma equipe entrega dez itens em uma semana porque fez uma força-tarefa, isso não significa que ela consiga entregar dez itens toda semana. Pode significar apenas que ela antecipou esforço, acumulou desgaste e provavelmente pagará essa conta nas semanas seguintes.

A boa gestão de fluxo procura cadência: nem picos artificiais, nem vales profundos. O objetivo é entender o comportamento do sistema ao longo do tempo e melhorar sua previsibilidade.

*Throughput* também fica mais útil quando é quebrado por tipo de demanda.

Uma equipe pode entregar vinte itens em um mês. Mas vinte itens de quê: melhorias, correções, demandas regulatórias, incidentes, pedidos internos, trabalho planejado ou trabalho não planejado?

Essa classificação muda completamente a conversa.

Se metade da capacidade de uma equipe está sendo consumida por *bugs*, incidentes ou urgências, o problema talvez não seja falta de produtividade. Pode ser baixa qualidade na origem, ausência de prevenção, dívida técnica, processo mal desenhado ou uma operação que vive apagando incêndio.

Sem classificar o trabalho, a organização só enxerga volume. Com classificação, ela começa a enxergar padrão.

## *Lead time*: prazo não deveria ser chute

A terceira métrica é o *lead time*.

*Lead time* é o tempo entre um ponto inicial e um ponto final do fluxo. Em muitos contextos, gosto de olhar para o tempo entre o compromisso assumido e a entrega concluída.

Essa é uma das métricas mais importantes porque tempo é uma linguagem que todo mundo entende.

Quando alguém pede uma demanda, a pergunta aparece rapidamente: quando fica pronto?

A resposta comum nas empresas ainda é baseada em chute, pressão ou negociação política.

> Dá para entregar em duas semanas?
>
> Vamos tentar.
>
> Preciso disso até sexta.
>
> Vamos fazer o possível.

O problema é que “fazer o possível” não é uma política de gestão. É uma frase de sobrevivência.

*Lead time* permite qualificar melhor essa conversa. Se tenho histórico de demandas parecidas, consigo olhar para o passado e construir uma projeção mais honesta. Em vez de prometer com base em desejo, posso dizer:

> Historicamente, 75% das demandas desse tipo foram concluídas em até sete dias. 85% foram concluídas em até dez dias. 95% foram concluídas em até quinze dias.

Isso muda a conversa sobre prazo.

Eu gosto muito mais de percentis do que de média para esse tipo de análise.

A média pode ser distorcida por casos extremos. Um item que levou tempo demais pode puxar o número para cima. Um conjunto de itens muito simples pode dar uma falsa sensação de velocidade. Percentis ajudam a conversar sobre probabilidade e risco.

Quando eu digo que 85% das demandas foram entregues em até dez dias, também estou dizendo que 15% passaram disso.

Essa é uma conversa mais madura.

Prazo deixa de ser promessa absoluta e passa a ser uma projeção baseada em histórico. Ainda pode dar errado, mas, se der errado, aprendemos com o desvio e melhoramos o sistema.

É muito melhor do que fingir precisão onde existe incerteza.

## O ponto invisível: definição de pronto

Toda conversa sobre *lead time* exige uma pergunta anterior: o que significa pronto?

Essa pergunta parece banal, mas costuma revelar muita confusão.

Para uma equipe técnica, “pronto” pode significar desenvolvimento concluído.

Para uma área de homologação, “pronto” pode significar testado.

Para uma pessoa de negócio, “pronto” pode significar disponível para uso.

Para quem solicitou, “pronto” pode significar problema resolvido.

Se cada área usa uma definição diferente, a métrica vira ruído.

Já vi equipes dizendo que tinham *lead time* de poucos dias. Quando investigávamos melhor, aquele tempo media apenas uma parte do fluxo. O trabalho ainda passava por homologação, validação, segurança, comunicação, publicação e adoção. O tempo total era muito maior.

O *lead time* local pode até ser útil para melhoria interna, mas a gestão precisa enxergar o fluxo ponta a ponta.

Se a entrega depende de várias áreas, o sistema precisa medir a jornada completa. Caso contrário, cada parte comemora sua eficiência local enquanto o todo continua lento.

Esse é um dos pontos centrais da gestão de fluxo: o gargalo do sistema determina a performance do sistema.

Não adianta acelerar etapas anteriores se o trabalho vai apenas acumular na etapa seguinte.

## Quando tudo é urgente, nada é

Métricas de fluxo também ajudam a lidar com uma das frases mais comuns nas organizações:

> Isso é urgente.

O problema é que, quando tudo é urgente, nada é prioridade de verdade.

A urgência permanente costuma aparecer em sistemas que não têm critérios claros de entrada, priorização e compromisso. Demandas chegam por e-mail, WhatsApp, Teams, corredor, reunião, ligação, mensagem direta e, em alguns casos, até rede social.

Cada canal vira uma porta de entrada; cada porta de entrada cria uma fila invisível; cada fila invisível aumenta a confusão.

Por isso, ponto único de entrada não é burocracia inútil. É uma condição para enxergar o trabalho.

Se a demanda não entra no sistema, ela não pode ser priorizada, medida, comparada, acompanhada ou descartada; vira apenas uma expectativa solta na cabeça de alguém.

E expectativa solta é uma das matérias-primas da ansiedade organizacional.

Uma boa política de entrada pergunta:

- Qual problema precisa ser resolvido?
- Por que isso importa agora?
- Quem é impactado?
- Qual é o custo de não fazer?
- O que sai da fila se isso entrar?

Essas perguntas não eliminam urgências reais, que devem ser tratadas como urgências reais. Mas elas ajudam a separar urgência de ansiedade, preferência pessoal, pressão política ou falta de planejamento.

## Descartar também é gestão

Existe outro ponto pouco discutido: trabalho que envelhece demais precisa ser questionado.

Se um item está há meses em aberto, ocupando capacidade e energia, talvez ele precise ser revisitado. Ainda faz sentido? O problema continua existindo? A prioridade permanece? O impacto justifica continuar?

Muitas organizações têm dificuldade de descartar trabalho porque já investiram tempo, dinheiro e reputação nele.

Esse é o viés do custo afundado.

A lógica emocional é simples: já fomos longe demais para parar agora.

Só que, às vezes, continuar é exatamente o desperdício.

Trabalho do conhecimento não envelhece como vinho; em muitos casos, envelhece como oportunidade perdida.

Uma melhoria que demora três anos para chegar talvez resolva um problema que já mudou. Uma tecnologia implementada tarde demais pode nascer obsoleta. Um projeto mantido vivo por apego pode consumir a capacidade que deveria estar dedicada a algo mais relevante.

Descartar trabalho sem sentido também é uma forma de proteger o fluxo.

## Métrica como linguagem de gestão

No fundo, *WIP*, *throughput* e *lead time* não são apenas métricas operacionais.

Elas criam uma linguagem comum para discutir trabalho.

*WIP* ajuda a perguntar: quanta coisa estamos tentando fazer ao mesmo tempo?

*Throughput* ajuda a perguntar: qual é nosso ritmo real de entrega?

*Lead time* ajuda a perguntar: quanto tempo levamos para transformar compromisso em entrega?

Juntas, essas métricas tiram a conversa do campo do achismo.

Sem elas, as discussões ficam presas em percepções:

- “A equipe não entrega.”
- “A demanda demora demais.”
- “Estamos sobrecarregados.”
- “Tudo é urgente.”
- “Precisamos de mais gente.”

Com elas, a conversa fica mais concreta:

- O *WIP* cresceu nas últimas semanas.
- A vazão caiu depois da entrada de demandas não planejadas.
- O *lead time* aumentou nos itens com dependência externa.
- O percentil 85 mostra que nosso *SLA* atual é pouco realista.
- Metade da capacidade está sendo consumida por incidentes.

Esse tipo de clareza não resolve o sistema automaticamente, mas melhora muito a qualidade da decisão.

## Medir para evoluir

Métricas de fluxo não deveriam ser usadas para vigiar pessoas, mas para enxergar sistemas.

Quando uma equipe demora para entregar, a pergunta mais útil raramente é “quem está atrasando?”. A pergunta melhor costuma ser:

- Onde o trabalho está acumulando?
- Quais dependências estão travando o fluxo?
- O que começamos e não terminamos?
- Que tipo de demanda está consumindo nossa capacidade?
- Qual parte do processo está envelhecendo os itens?
- Que expectativa foi criada sem olhar para a capacidade real?

Essas perguntas deslocam a gestão da cobrança para o desenho do sistema.

Esse deslocamento importa porque, no trabalho do conhecimento, pessoas pressionadas dentro de sistemas ruins não produzem fluxo melhor. Produzem mais ansiedade, mais retrabalho e mais teatro de produtividade.

Medir bem é criar condição para conversar melhor. E conversar melhor é o começo de uma gestão mais adulta do trabalho.
