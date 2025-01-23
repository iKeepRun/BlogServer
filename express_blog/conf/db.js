const env=process.env.NODE_ENV 


let MYSQL_CONFIG;
let REDIS_CONFIG;

if(env==="dev"){
    MYSQL_CONFIG={
        host:"localhost",
        port:"3306",
        user:"root",
        password:"hcxh8888@@",
        database:"myblog"
    }

    REDIS_CONFIG={
        host:"localhost",
        port:"6379"
    }
}

if(env==="production"){
    MYSQL_CONFIG={
        host:"localhost",
        port:"3306",
        user:"root",
        password:"hcxh8888@@",
        database:"myblog"
    }

    REDIS_CONFIG={
        host:"localhost",
        port:"6379"
    }
}


module.exports={MYSQL_CONFIG,REDIS_CONFIG}



