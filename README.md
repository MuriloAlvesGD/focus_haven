# Focus Haven

O projeto **Focus Haven** é uma ferramento que buscar ser um refugio para todos aqueles que buscam melhorar seu foco, independente da atividade. O projeto inclui o **Memo** inspirado na ideia do famoso [TAMAGOCHI](https://pt.wikipedia.org/wiki/Tamagotchi). Em resumo, trata-se de um "pet virtual", mas com funcionalidades que vão além dessa definição.

## Índice

- [História](#história)
- [Características](#características)
- [Tecnologias Utilizadas](#Tecnologias-Utilizadas)
- [Instalação](#instalação)
- [Contribuição](#Atenção)

## História

O **Focus Haven** deriva de uma ideia que foi escrita há bastante tempo, chamada "MEU PALÁCIO MENTAL", que também seria uma ferramenta de estudos e teria o **Memo** como personagem principal, representando o subconsciente ou a própria MEMOria. A ideia original era mais complexa e, possivelmente, ineficiente. Assim, buscou-se simplificá-la e melhorar sua usabilidade e aplicabilidade, resultando no projeto **Focus Haven**.

## Características

- **Método Pomodoro**: A técnica foi implementada da seguinte forma:
  1. Parâmetros configuráveis:
     - Tempo de trabalho de até 60 minutos (1 hora);
     - Realização de até 4 ciclos (Trabalho -> Descanso);
     - Tempo de descanso de até 10 minutos.
  2. O cronômetro pode ser pausado/interrompido a qualquer momento:
     - Interrupções geram penalidades, que se manifestam na forma de diminuição do status do Memo;
     - A penalidade é proporcional ao quão prematura for a desistência:
       - Sem tempo de trabalho concluído: **maior redução de status**;
       - Tempo de trabalho concluído: **redução proporcional ao percentual de conclusão**;
    - **Fechar/Trocar de Página não irá interromper o contador.**
  3. A conclusão do Pomodoro gera recompensas para o Memo (recompensas ainda em elaboração).

- **PET Virtual - Memo**: Utilizado para humanizar a solução e gerenciar recompensas e punições:
  - **STATUS** (precisa de revisão): Felicidade, Sono, Fome. Cada um diminui gradativamente e com mais intensidade de acordo com as ações:
    - **Felicidade**:
      - Aumenta com: **Ciclos Concluídos**;
      - Reduz com: **Ciclos quebrados e/ou distrações**.
    - **Sono**:
      - Aumenta com: **Períodos de descanso pós-período de trabalho**;
      - Reduz com: **Tempo de tela ou trabalho excessivo**.
    - **Fome/Alimentação**:
      - Aumenta com: **Tempo trabalhado**;
      - Reduz com: **Tempo sem trabalho**.

- **Bloqueio de Distrações**: O usuário poderá informar quais sites são suas fontes de distração e que precisa de auxílio para ignorá-los.
  - **Caso acesse algum site da lista**: O usuário será redirecionado automaticamente para uma página de aviso.

#### Recursos de Planos Pagos
1. **Chat com IA**: O chat estará disponível no plano **Foco Profundo** usuário poderá conversar com o Memo, sendo o chat criado utilizando técnicas para limitação de escopo e conteúdo.
  - **Conteúdos inapropriados** para menores de 18 anos não serão permitidos, seguindo os padrões estabelecidos no Brasil.
  - O chat será limitado a conversas que estimulem o estudo e a produtividade.
    - *Quer perguntar sobre o novo namorado de fulano? Quem é o ator mais bonito?* **Aqui não vai rolar.**
- **Sincronização:** A sincronização será oferecida no plano **Foco Sincronizado** os dados serão salvos regularmente em nuvem e sincronizados com outros dispositivos.

## Tecnologias-Utilizadas

- **Formato**: Extensão Google
- **Linguagem de Programação**: JavaScript / JSX
- **Frameworks**:
  - React
  - GrommetUI
  - Pixel Art Icons
- **Banco de Dados**: Armazenamento em Extension Storage (para a primeira versão)
- **A DEFINIR**: I.A., Banco de Dados, Back-End

## Compilação

Siga os passos abaixo para instalar o projeto:

1. Clone o repositório:
   ```bash
   git clone https://github.com/muriloalvesgd/focus_haven.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd focus_haven
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Compile a versão de produção:
   ```bash
   npm run build
   ```

## Instalação

1. Abra o navegador e na barra de pesquisa acesse:
   ```
   chrome://extensions/
   ```

2. Ative o **modo de desenvolvedor** no canto superior direito.
3. Clique em **Carregar sem compactação** e, na janela que abrir, navegue até o diretório do projeto e selecione a pasta **dist**.
4. **Pronto!** A extensão será instalada e aparecerá em seu menu de extensões.

## Atenção

Este é um projeto ainda em desenvolvimento e contém diversos bugs e falhas.

Achou algum erro? Mande um e-mail para: muriloalves.dev@gmail.com

Sua contribuição será de grande ajuda para o desenvolvimento dessa solução!
