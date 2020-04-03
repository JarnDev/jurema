import app from '../src/config/custom-express';

const port = process.env.PORT || 3333;

app.listen( port, ()=>{
  console.log(`Servidor ativo =>> localhost:${port}`)
})
