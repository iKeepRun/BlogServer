const { MYSQL_CONFIG, REDIS_CONFIG } = require("../conf/db");


const mysql = require("mysql")

const conn = mysql.createConnection(MYSQL_CONFIG)
conn.connect();



function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        conn.query(sql, (err, res) => {
            if (err) {
                reject(err)
                return
            }
            resolve(res)

        })
    })

    return promise
}


module.exports = {
    exec,
    escape: mysql.escape
}