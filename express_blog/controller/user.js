const {exec,escape}=require("../db/mysql")


const login=(username,password) => {
    //去语义化 防止sql注入
    username=escape(username)
    password=escape(password)
    
    //去语义之后sql 拼接字段的时候不需要加  ''
    let sql=`select * from users where username=${username} and password=${password}`
    return  exec(sql).then(rows=>{return rows[0] || null })
}



module.exports={login}