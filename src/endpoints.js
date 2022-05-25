import {dobro,somar,media,tabuada,temperatura,cinema} from './service.js'
import { Router } from 'express'
const server = Router();

server.get('/ping' , (req, resp) => {
    resp.send('pong');
})



server.get('/dobro/:numero' , (req, resp) => {
    const numero = Number(req.params.numero);

    const d = dobro(numero);

    resp.send({
        dobro: d
    });

})



server.get ('/somar' , (req, resp) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const x = somar (a,b);
    resp.send({
        soma: x
    })
})



server.post('/somar' , (req, resp) =>{
    try{
    const { valores: {a,b} } = req.body;
    const x = somar(a,b); 
    resp.send({        soma: x
    })
}

catch (err){
    resp.status(404).send({erro: err.message})
}
})


server.get('/media' , (req, resp) =>{
    try{
    const n1 = Number(req.query.n1);
    const n2 = Number(req.query.n2);
    const n3 = Number(req.query.n3);
    const x = media (n1, n2, n3)
    resp.send({media: x})
}
catch (err){resp.status(404).send({erro: err.message})
}
})


server.get('/tabuada/:numero/:multiplicacao' , (req, resp) => {
    try {
    const numero = Number(req.params.numero);
    const multiplicacao = Number(req.params.multiplicacao);
    const d = tabuada(numero, multiplicacao);
    resp.send({tabuada: d});
    } 
    catch (err) {resp.status(404).send({erro: err.message})    
    }
})


server.get('/temperatura/:a' , (req, resp) =>{
    try{

        const a = Number(req.params.a);
        const x = temperatura (a);
        resp.send({temperatura: x})
    }
    
    catch{
        resp.status(404).send({erro: err.message})
    }
})

server.post('/cinema' , (req, resp) =>{
    try{
        const { valores: {inteiras,meias,dia} } = req.body;
        const x = cinema(inteiras,meias,dia); 
        resp.send({Valor: x})
    }
    
    catch (err){
        resp.status(404).send({erro: err.message})
    }
})


export default server;
