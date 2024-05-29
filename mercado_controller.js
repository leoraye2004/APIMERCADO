import connect from "../config/connection.js"
let produtos = {}
const con = await connect()

produtos.all = async function (req, res) {
try{
let produtos = await con.query("SELECT * FROM produtos")
res.send(produtos)
} catch (e) {
console.log("Erro na consulta...", e)

}
}

produtos.create = async function (req, res){

try{
let produtos = req.body
let sql = "INSERT INTO produtos (cod_produto, nome_produto, preco_produto) values (?,?,?);"
let values = [produtos.cod_produto, produtos.nome_produto, produtos.preco_produto]
let result = await con.query(sql,values)
res.send({
    status: "Inserção Efetuada com sucesso!",
    result: result
})
    
} catch (e) {
console.log("Erro", e)

}
}


export {produtos}

