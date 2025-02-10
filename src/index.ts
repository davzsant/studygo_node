import app from "./server/Server"
const startServer = () => {
    app.listen(3333,()=>{
        console.log("Servidor Rodando")
    })
}

startServer()