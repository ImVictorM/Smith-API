# Smith API 🔨

## Project Context 💡
Medieval items Store, in the format of an API, following the MSC architecture (Model -> Service -> Controller), where you can do the basic operations you can do in a database (CRUD). That's my first project using Typescript 💙

### Acquired Knowledge 📖

In this project, I was able to:
- Configure a Node.js project with Typescript;
- Create an Express application using Typescript;
- Use classes and interfaces to structure the MSC layers;
- Declare variables and functions with Typescript typing;

## Main Technologies used 🧰
<table>
    <thead>
        <tr>
            <th>TypeScript</th>
            <th>Express</th>
            <th>Node.JS</th>
            <th>MySQL</th>
            <th>JWT</th>
            <th>Joi</th>
            <th>Docker</th>
            <th>Insomnia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center">
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" 
                        alt="typescript" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                <a href="https://expressjs.com/" target="_blank">
                    <img
                        src="https://www.orafox.com/wp-content/uploads/2019/01/expressjs.png"
                        alt="express"
                        width="40"
                        height="40"
                    />
                </a>
            </td>
            <td align="center">
                <a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" 
                        alt="nodejs" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                 <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> 
                     <img 
                         src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" 
                         alt="mysql" 
                         width="40" 
                         height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                 <a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank" rel="noreferrer"> 
                     <img 
                         src="https://jwt.io/img/pic_logo.svg" 
                         alt="jwt" 
                         width="40" 
                         height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                <a href="https://joi.dev/" target="_blank" rel="noreferrer">
                    <img
                        src="https://avatars.githubusercontent.com/u/3774533?s=200&v=4"
                        alt="joi"
                        width="40"
                        height="40"
                    />
                </a>
            </td>
            <td align="center">
                <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" 
                        alt="docker" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                <a href="https://insomnia.rest/" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://storage.googleapis.com/indie-hackers.appspot.com/product-avatars/insomnia/ibTLPyjwVebnZjMGKvz6ztarnuV2" 
                        alt="insomnia" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
        </tr>
    </tbody>
</table>

## Running the application ⚙️

1. Clone the repository and enter it
```
git clone git@github.com:ImVictorM/Smith-API.git && cd Smith-API
```
### Methods

<details>
<summary><h4>🐋 Running with docker (recommended)</h4></summary>

 > You must have docker and docker-compose installed
 
2. Get the containers running
```
docker-compose up -d
```
3. Enter the server's container
```
docker exec -it trybesmith bash
```
4. Install the dependencies
```
npm install
```
    
5. Create (or recreate) and populate the database
```
npm run db:create
```

6. Start the server
```
npm run start
---- or ----
npm run dev (with nodemon)
```
</details>

<details>
<summary><h4>🖥️ Running locally</h4></summary>

 > You must have node and MySQL installed
 
2. Install the dependencies
```
npm install
```

3. Rename the file `.env.example` to `.env`
    
4. Create (or recreate) and populate the database
```
npm run db:create
```

5. Start the server
```
npm run start
---- or ----
npm run dev (with nodemon)
```

</details>

## Endpoints 🌐

Click here to export automatically:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Blog%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FImVictorM%2FBlog-API%2Fmain%2FinsomniaEndpoints.json)

Or just import the file `insomniaRoutes.json` inside your environment: https://docs.insomnia.rest/insomnia/import-export-data
