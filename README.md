# Table of Contents / Índice
## [English](https://github.com/MultiWar/StoryTime/blob/main/README.md#english)
* [What is StoryTime?](https://github.com/MultiWar/StoryTime/blob/main/README.md#what-is-storytime)
* [Why these technologies?](https://github.com/MultiWar/StoryTime/blob/main/README.md#why-these-technologies)
  * [TypeScript](https://github.com/MultiWar/StoryTime/blob/main/README.md#typescript)
  * [Next](https://github.com/MultiWar/StoryTime/blob/main/README.md#next)
  * [DatoCMS](https://github.com/MultiWar/StoryTime/blob/main/README.md#datocms)
  * [Slate](https://github.com/MultiWar/StoryTime/blob/main/README.md#slate)
  * [Social Authentication, and why Twitter?](https://github.com/MultiWar/StoryTime/blob/main/README.md#social-authentication-and-why-twitter)
  * [Chakra UI](https://github.com/MultiWar/StoryTime/blob/main/README.md#chakra-ui)
## [Português](https://github.com/MultiWar/StoryTime/blob/main/README.md#português)
* [O que é StoryTime?](https://github.com/MultiWar/StoryTime/blob/main/README.md#o-que-é-storytime)
* [Por que estas tecnologias?](https://github.com/MultiWar/StoryTime/blob/main/README.md#por-que-estas-tecnologias)
  * [TypeScript](https://github.com/MultiWar/StoryTime/blob/main/README.md#typescript-1)
  * [Next](https://github.com/MultiWar/StoryTime/blob/main/README.md#next-1)
  * [DatoCMS](https://github.com/MultiWar/StoryTime/blob/main/README.md#datocms-1)
  * [Slate](https://github.com/MultiWar/StoryTime/blob/main/README.md#slate-1)
  * [Autenticação Social, e por que Twitter?](https://github.com/MultiWar/StoryTime/blob/main/README.md#slate-1)
  * [Chakra UI](https://github.com/MultiWar/StoryTime/blob/main/README.md#chakra-ui-1)
## [HOTKEYS](https://github.com/MultiWar/StoryTime/blob/main/README.md#hotkeys-1)
## [Screenshots](https://github.com/MultiWar/StoryTime/blob/main/README.md#screenshots)
* [Home Page / Página Inicial](https://github.com/MultiWar/StoryTime/blob/main/README.md#home-page--página-inicial)
* [All authors / Todos os autores](https://github.com/MultiWar/StoryTime/blob/main/README.md#all-authors--todos-os-autores)
* [An author's page / Página de um autor específico](https://github.com/MultiWar/StoryTime/blob/main/README.md#an-authors-page--página-de-um-autor-específico)
* [A story's page / Página de uma história específica](https://github.com/MultiWar/StoryTime/blob/main/README.md#a-storys-page--página-de-uma-história-específica)
* [Rich Text Editor](https://github.com/MultiWar/StoryTime/blob/main/README.md#rich-text-editor)

# English

## What is StoryTime?
StoryTime is a platform for amateur (or otherwise) writers, where people will be able to share their stories and read what others have shared. It is being built with Next and Slate. The CMS chosen was DatoCMS. Login will be done with Twitter auth, probably. I also plan on including internationalization, so interfaces work on both Brazilian portuguese and english.

## Why these technologies?
### TypeScript
I like the previsibility it adds to the code. IDE helpers are also great, and I can't live without TypeScript anymore.

### Next
Next was picked because it offers Incremental Static Regeneration, which is, to me, a core functionality of the platform, as, most of the time, users will probably be reading a simple text, which doesn't have to be generated every time, and can be served as static HTML with no problem. Not only that, but changes to the text are probably not going to be frequent. Aside from this feature, Next also has api routes, which make it quite easy to do stuff like social authentication. The fact that I was already familiar with it also weighted on the decision.

### DatoCMS
I wanted a CMS so I could store content without using any database and even without having any backend whatsoever. I picked Dato because it provides a GraphQL API, which I like a lot and makes sense for the project, I liked their content modeling (including the Structured Text type of field, which I'll probably use for the main text of the chapters) and it seemed to have an easy integration with Next.

### Slate
As I wanted to use DatoCMS's Structured Text field, I also wanted a rich text editor that gave me a nice data structure. Not only that, but, as StoryTime already has a visual identity, I needed it to be flexible in how it looked. I also wanted it to be flexible on how it worked, so I could easily add whatever I felt was interesting and useful to writers. It took me some time to get used to working with it, but it delivered all of that.

### Social Authentication, and why Twitter?
As I said before, I didn't want to build a backend for this project, but I needed a way to authenticate my users, so social authentication was the best option. I picked Twitter because it seemed like the most fitting of all of them. It didn't have extra requirements, had some of the things I intend to store on my CMS and most people will probably already have a Twitter account anyway. I won't be doing any feed integration, though, at least for now.

### Chakra UI
I wanted something to speed up my design, and, knowing how easy it is to extend themes in Chakra and to build around their basic components, I had to use it. I tried creating my own little thing before deciding on it, and it was just too much work for what Chakra had already done, and done better, with built in accessibility concerns and a bunch of helpful components.

# Português
## O que é StoryTime?
StoryTime é uma plataforma para escritores amadores (ou não), onde as pessoas poderão compartilhar suas próprias histórias e ver o que outros usuários compartilharam. Está sendo construído com Next e Slate. O CMS escolhido foi o DatoCMS. O login será realizado com autenticação social, provavelmente pelo Twitter. Além disso, planejo incluir internacionalizações, no futuro, para que as interfaces funcionem tanto em português quanto em inglês.

## Por que estas tecnologias?
### TypeScript
Eu gosto da previsibilidade que ele traz pro código. Além disso, as ajudas que a IDE dá por estar usando TS são incríveis. Simplesmente, não consigo viver sem TS mais.

### Next
Eu escolhi o Next principalmente porque ele me possibilita usar Incremental Static Regeneration, o que me parece ser a feature que reside no coração da aplicação. Acredito que, provavelmente, os usuários passariam a maior parte do tempo lendo histórias, e, com essa feature, a navegação será extremamente rápida, pois serão servidos arquivos estáticos do servidor. Além disso, provavelmente, o texto da história não vai ser alterado com frequência, o que torna essa feature ainda mais relevante. Outros motivos que me fizeram escolher Next foram as API Routes, que facilitam muito para, entre outras coisas, adicionar autenticação social, e o fato de eu já estar familiarizado com a tecnologia.

### DatoCMS
Eu queria utilizar algum CMS para que eu pudesse salvar dados sem precisar de um backend próprio. Escolhi o Dato, especificamente, porque ele provém uma API GraphQL muito rica, eu gostei da modelagem de dados (incluindo o Structured Text, que é um tipo de dado possível que provavelmente utilizarei para os Rich Texts) e porque possui uma integração interessante com Next.

### Slate
Eu precisava de um editor de texto que fosse flexível em aparência e funcionalidade, que me permitisse renderizar os elementos e alterar o funcionamento da maneira que quisesse, incluindo adicionar formatações diferentes, outros tipos de bloco e o que mais eu achasse útil e interessante pra escritores. Demorei um pouco pra me habituar com o Slate, mas ele entregou tudo isso.

### Autenticação Social. E por que Twitter?
Como mencionado anteriormente, eu não queria construir um backend próprio, então, autenticação social foi uma escolha simples. Escolhi Twitter porque parecia ter uma integração tranquila, que não fosse adicionar muitos requisitos, e porque me pareceu apropriado, já que imagino que a maioria dos usuários já terá uma conta na rede social, de qualquer forma. Porém, não pretendo utilizar as funcionalidades de feed, pelo menos por enquanto.

### Chakra UI
Eu queria algo que fosse acelerar meu processo de desenvolver o design, e, sabendo o quão fácil é estender temas no Chakra e contruir em volta dos componentes base, eu tive que usá-lo. Cheguei a tentar criar meu próprio design system, mas isso estava sendo trabalhoso demais e me tomando tempo demais que eu poderia poupar usando Chakra, que, além de já dar tudo que eu estava fazendo pronto, dá tudo melhor, com questões de acessibilidade já feitas, por exemplo, além de muitos componentes utilitários.

# HOTKEYS
ctrl/command + b: bold / negrito
ctrl/command + i: italic / itálico
ctrl/command + u: underline / sublinhado
ctrl/command + ,: code / código
ctrl/command + k: strikethrough / cortado no meio
ctrl/command + m: highlight / destaque

# Screenshots

## Home Page / Página Inicial
![Screenshot_1123](https://user-images.githubusercontent.com/54380823/137223768-90ed87f0-7917-4035-ac48-e60a09538d19.png)
(there's 2 login related call to actions there, but that's a remnant of a previous age where social authentication wasn't the idea yet)

## All authors / Todos os autores
![Screenshot_1124](https://user-images.githubusercontent.com/54380823/137225998-56dc27a0-7be1-4b0c-8718-a4ee5c38157e.png)

## An author's page / Página de um autor específico
![Screenshot_1125](https://user-images.githubusercontent.com/54380823/137226040-e7e52532-e38c-4884-ba52-b0e0649f42bc.png)

## A story's page / Página de uma história específica
![Screenshot_1126](https://user-images.githubusercontent.com/54380823/137226582-e497fc54-cf05-4928-b91a-f3cdbce345de.png)

## Rich Text Editor
![Screenshot_1128](https://user-images.githubusercontent.com/54380823/137230256-62062775-ec87-4a77-8439-8f02e08364bc.png)
