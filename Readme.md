# Project Steps

# Project Name: IceCream Payment create, edit, delete and update

-initialize npm
-initialize git repo
-create `.gitignore`
-create `index.js`
>note:update `package.json` if you are using other file name as entry point
-install packages
    -review `package.json` for dependencies
-create `.env`for environment variables
-require express and create basic web server
-update `package.json` to have `dev` script

# Planning

### Endpoints
 
 endpoint name| purpose |aciton type|
 `api/v1/payment`|create  |  Payment | POST
`api/v1/payment`|delete | payment | DELETE
`api/v1/payment`| modify |Payment |PATCH
`api/v1/payment`| get all Payments | GET
`api/v1/payment/:id`| get one payment |GET

### Controllers

-five controllers for the five endpoints

