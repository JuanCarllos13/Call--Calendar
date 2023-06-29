<h1 align="center">
  <br>Call
</h1>

<h4 align="center">
  Projeto criado com o intuito de mostrar meus conhecimentos ao decorrer da minha carreira.
</h4>

![Landing](https://user-images.githubusercontent.com/86435195/236067414-ef58987a-127f-4c10-8ae8-eb641d0ffa9a.png)


## ❓ O que é ?

O projeto é um sistema de agendamento que permite ao usuário criar uma conta de usuário, fazer login com a conta do Google e agendar eventos em uma agenda virtual. O usuário pode selecionar os dias disponíveis para agendamento, de segunda a sexta-feira, com horários disponíveis das 8:00 às 18:00.

Ao selecionar um horário para um evento, o sistema verifica se esse horário já está em uso na agenda e bloqueia os horários que já estão ocupados. Os dias em que o usuário não selecionou também serão bloqueados.

Este sistema de agendamento é útil para pessoas que desejam marcar reuniões ou outros eventos com outras pessoas. Ele garante que o horário e o dia escolhidos estejam disponíveis e evita conflitos de agenda.
<hr>

<h3>🧭 Rodando a aplicação</h3>

<span class="pl-c"><span class="pl-c"></span> Acesse a pasta do projeto no terminal/cmd e execute os seguintes comandos:</span>

```
cd call
code .
npm install
```
<span class="pl-c"><span class="pl-c"></span>Depois de ter iniciado o projeto no vscode, apenas digite o comando no terminal:</span>

```
npm run dev
```
<hr>

<span class="pl-c"><span class="pl-c"></span>Lembrando que você precisa criar um arquivo ".env" e adicionar as seguintes informações.</span>

```
# Você precisa adicionar as varias de ambiente

DATABASE_URL=


# Google Auth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=
```
<hr>


## 📚 Seções
O site é composto por 2 seções diferentes:

- **Home:** onde o usuário pode criar um username exclusivo para sua conta.


- **Register:** onde o usuário pode criar uma nova conta ou fazer login com a conta do Google e selecionar os dias disponíveis para agendamento.

- **Calendar:** onde o usuário pode visualizar a agenda com os horários disponíveis e criar eventos. O usuário deve inserir o nome da pessoa que participará do evento.;

## 💼 Tecnologias utilizadas
Para o desenvolvimento deste site utilizei as seguintes tecnologias:

- HTML;
- CSS;
- JavaScript;
- React.js;
- Next.js
- Prisma
- MYSQL
- Zod
- React Hook Form
- Node
- TypeScript

Deploy: https://call-calendar.vercel.app/



---

## 👨‍💻 Autor<br>
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/JuanCarllos13">
        <img src="https://github.com/JuanCarllos13.png" height="100px" alt="Foto do Juan no GitHub"/><br>
        <sub>
          <b>JUAN CARLOS</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
</table>
<hr>
