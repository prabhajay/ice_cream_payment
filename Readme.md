# Project Steps

# Project Name: IceCream Payment create, edit, delete and update

- initialize npm
- initialize git repo
- create `.gitignore`
- create `index.js`
> note:update `package.json` if you are using other file name as entry point
- install packages
    - review `package.json` for dependencies
- create `.env`for environment variables
- require express and create basic web server
- update `package.json` to have `dev` script

# Planning

### Endpoints and Controllers
 
| endpoint name| purpose |aciton type| controller|
|`api/v1/payment`| create  |  Payment | POST | CreatePayment |
|`api/v1/payment`| delete | payment | DELETE | deletePayment |
|`api/v1/payment`| modify |Payment | PATCH | updatePayment |
|`api/v1/payment`| get all Payments | GET | getPayments |
|`api/v1/payment/:id`| get one payment | GET | getPayment 


### Validation

- One per endpoint using joi and within the model


### Data Models

| model name | usage
| payment | payment collection |
| User | User Collection |

### Authentication 

- authentication custom middleware

