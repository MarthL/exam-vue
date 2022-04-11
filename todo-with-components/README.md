# todo


## Project setup
```
npm install
```

### Setup MongoDB

```bash
mongo
use todos
db.createUser( { user: "<user>", pwd: "<password>", roles: [ {role: "readWrite", db:"todos"} ] })
```
Update logs in .env

```js
MONGO_USERNAME=<user>
MONGO_PASSWORD=<password>
```

### Run 

This command will launch the vuejs frontend and the nodejs backend
```bash
cd todo-with-components
npm run serve
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
