const sqls=require('mssql');
const dbsinfo={
    user:'yuli',
    password:'Suicidio2206',
    server:'yulibasedatos.database.windows.net',
    database:'Almacen1',
    options:{
        encrypt:true,
        trustServerCertificate:true
    }
}
async function getConnection(){

    try{
        const pool = await sqls.connect(dbsinfo);
        return pool;
    }catch(error){
        console.error(error);
    }
}

getConnection();

module.exports=sqls;