import mysql2 from "mysql2/promise"

async function connect(){

    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection
    const mysql = mysql2
    const connection = await mysql2.createConnection("mysql://root:@localhost:3306/mercado")
    console.log("banco conectado")
    global.connection = connection
    return connection
}
export default connect