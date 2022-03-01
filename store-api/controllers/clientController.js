const Client = require('../models/Client');

exports.createClient = async(req,res)=>{
    try{
        const client = new Client(req.body);
        await client.save();
        res.send({
            message: "Cliente creado exitosamente",
            client
        });
    }catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error al crear el cliente"
        })
    }    
}

exports.getClients = async (req,res) =>{
    try{
        const clientList = await Client.find();
        if(clientList.length>0){
            console.log(clientList.length);
            res.send(clientList);            
        }else{
            clientList.length>0
            res.send({
                 message: "No hay clientes registrados"
            });
        }
    }catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error al consultar los clientes"
        });
    }
}

exports.getClientById = async (req,res) =>{
    try{
        const client = await Client.findById(req.params.id);
        if(client === null || client === undefined){
            res.status(404).send({
                message: "No se encontraron coincidencias"
            });
        }else{
            res.send(client);
        }
    }catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error al hacer la consulta"
        });
    }    
}

exports.setClient = async(req,res) =>{
    try{
        let client = await Client.findById(req.params.id);
        if(client === null || client === undefined){
            res.status(404).send({
                message: "No se encontraron coincidencias para actualizar"
            });
        }else{
            const clientData = req.body;
            client =  await Client.findOneAndUpdate({_id:req.params.id}, clientData, {new:true});
            res.send({
                message: "Cliente actualizado",
                client                
            })
        }
    }catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error al actualizar los datos"
        });
    }
    
}

exports.deleteClient = async(req,res) =>{
    try{
        const client = await Client.findById(req.params.id);
        if(client === null || client === undefined){
            res.status(404).send({
                message: "No se encontraron coincidencias para eliminar"
            });
        }else{
            await Client.findOneAndRemove({_id: req.params.id});
            res.send({
                message: "Cliente eliminado"
            });
        }
    }catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error al actualizar los datos"
        });
    }   
}

