
require('dotenv').config()
const express = require('express')

console.log("My First Backend Application")

const app = express()

const githubData = {
  "login": "PrathamsinhParmar",
  "id": 186924789,
  "node_id": "U_kgDOCyQ-9Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/186924789?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/PrathamsinhParmar",
  "html_url": "https://github.com/PrathamsinhParmar",
  "followers_url": "https://api.github.com/users/PrathamsinhParmar/followers",
  "following_url": "https://api.github.com/users/PrathamsinhParmar/following{/other_user}",
  "gists_url": "https://api.github.com/users/PrathamsinhParmar/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/PrathamsinhParmar/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/PrathamsinhParmar/subscriptions",
  "organizations_url": "https://api.github.com/users/PrathamsinhParmar/orgs",
  "repos_url": "https://api.github.com/users/PrathamsinhParmar/repos",
  "events_url": "https://api.github.com/users/PrathamsinhParmar/events{/privacy}",
  "received_events_url": "https://api.github.com/users/PrathamsinhParmar/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Prathamsinh Parmar",
  "company": null,
  "blog": "",
  "location": "Drs. Kiran & Pallavi Patel Global University",
  "email": null,
  "hireable": true,
  "bio": "👋 Hi, I'm Pratham.\r\n💻 Passionate about coding, learning, and building projects.\r\n🚀 Currently exploring Web Development, Python and JavaScript.",
  "twitter_username": null,
  "public_repos": 16,
  "public_gists": 0,
  "followers": 3,
  "following": 1,
  "created_at": "2024-10-31T11:26:45Z",
  "updated_at": "2026-01-07T18:22:28Z"
}

app.get('/' , (request, response)=>{
    response.send("You Are On Home Page !")
})

app.get('/Login', (request, response)=>{
    response.send("Please Login !")
})

app.get('/Signup', (request, response)=>{
    response.send("SignUp Done")
})

app.get('/Dashboard', (request, response)=>{
    response.send("Employee Dashboard")
})

app.get('/github', (request, response)=>{
    response.json(githubData)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Backend Application Is In Listening Mode At Port ${process.env.PORT}!`)
})