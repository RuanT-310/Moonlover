# R-W-A-Blog

Neste Repositorio iremos mostrar os detalhes do Blog RWA-Blog. Nesta Quinta-feira [23/01/2025] foi apresentado uma atividade na materia de Web ii, ministrada pelo professor Warley da UNIFESSPA a turma de SI-2022. Tal atividade visava a aplicação de conhecimentos misnistrados em aula para a concepção de uma página de post, popularmente chamada de blog. Para a concepção da atividade foi proposto a formação de trios de alunos para o desenvolvimento da aplicação. Alunos responsáveis pela aplicação representada neste repositório são respectivamente Ruan, Wesley e Alexandre. No decorrer deste repositorio será mostrado o objetivos que o trio de alunos tiveram contato durante o desenvolvimento da atividade.

### Alunos
- Ruan Vieira
- Wesley Costa
- Alexandre
  
## Vídeo de Demonstração
https://github.com/user-attachments/assets/72f81d40-7437-474a-8fc8-124dce12ccaf

## Como a aplicação foi desenvolvida?
A aplicação utiliza de renomadas bibliotecas, a biblioteca de React, a biblioteca Tailwinduma e uma ferramenta de build para a integração das bibliotecas. A biblioteca de react foi usada para a criação dos componentes visuais. A estilização dos referidos componentes fora feira com a inovadora biblioteca tailwind. A ferramenta de build foi usada para a incorporação eficaz das bibliotecas na aplicação. 

A aplicação tem como principal função a criação postagens e armazenamento de postagens, ressaltando que, não forá usado na aplicação tecnicas de percistencia de dados, uma vez que a aplicação se refere a uma atividade de aplicação de conhecimento.
A aplicação Utiliza de tres principais componentes, o Post, refere-se ao conponente visual da postagem, PostCreate, componente responsável pela criação de uma postagem e o PostContext o qual refere-se a um gerenciador de contexto que armazenamento temporariamente e gerencia as postagem. Todos esse elementos são ultilizados juntos em uma pagina chamada Blog.

A pagina utiliza do PostContext para a obtenção das postagem, em formato de lista de objetos, para a criação dinamica dos Post, que são exibidos em uma lista na vertical, a pagina tambem prove um botão de criação de postagem, o qual desencadeia a visualisação do PostCreate, que apos finalizado cria uma postagem, e atravez do gerenciador de contexto, atualiza o 'banco de dados' e já permite a visualização do msm na listagem da tela.

# Ferramentas Utilizadas
- Vite
- React
  - Componentes
  - Contextos
- Tailwind
# Referências
- [Documentação do Vite](https://vite.dev)
- [Documentação do React](https://react.dev)
- [Documentação do tailwind](https://tailwindcss.com)
