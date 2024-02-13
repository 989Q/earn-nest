### 🐣 env

environment
```bash
# start proj
npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express
# add mongo
npm i @nestjs/mongoose mongoose
```

dependency
```
nest g resource blogs

nest g resource authors
```

</br>

### 🐣 Schema

Blog Schema
```bash
# blog
blog_ID # Blog123
blog_User # User123
# content
blog_Title # การยืมเงิน
blog_Body # เนื้อหาการยืมเงิน
# State
blog_Tag # การยืมเงิน
blog_Status # show , hidden
# Date
blog_Create # var datetime = new Date();
blog_Update # var datetime = new Date();
```

</br>

### 🍺 Branch

State : 1
> add graphql 
State : 2
> add mongo-local
State : 3
> crud 

