const {exec}=require("../db/mysql")
// const  xss=require("xss")

const getList=(author,keyword)=>{
    let sql=`select * from blogs where 1=1 `

    if(author){
        sql+=`and author='${author}' `
    }
    if(keyword) {
        sql+=`and title='%${keyword}%' `
    }

    sql+=`order by createtime desc; `

    return exec(sql)
}

const getDetail=(id)=>{
    let sql=`select * from blogs where id='${id}';`
    return exec(sql).then(res=>res[0]);
}



const addNew=(blogData={})=>{
    console.log("datadadttadtadt",blogData)
    const {title,content}=blogData
    const createtime=Date.now()
    const author="zhangsan"
    let sql=`insert into blogs (title,content,createtime,author) values('${title}','${content}','${createtime}','${author}')`
   return exec(sql).then(res=>res.insertId)
}

const updateBlog=(blogData={})=>{
  const {id,title,content}=blogData

  let sql=`update blogs set title='${title}',content='${content}'  where id='${id}'`
  return exec(sql).then(res=>{
    if(res.affectedRows>0){
        return true
    }
    return false;
})
 
}
const delBlog=(id)=>{
    let sql=`delete from blogs where id='${id}'`
    return exec(sql).then(res=>{
        if(res.affectedRows>0){
            return true
        }
        return false
    })
}

module.exports={getList,getDetail,addNew,updateBlog,delBlog}
