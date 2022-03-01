const Product = require('../models/Product');

exports.createProduct = async(req,res)=>{
    try{
        const producto = new Product(req.body);
        await producto.save();
        res.send({
            message: "Usuario creado con exito",
            ...producto
        });
    }catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error al crear el usuario"
        });
    }
}

exports.getProducts = async(req,res) =>{
    try{
        productList = await Product.find();
        res.send(productList);      
    }catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error al consultar los productos"
        });
    }
}

exports.getProductById = async(req,res) =>{
    try{
        const product = await Product.findById(req.params.id);
        if (product === null || product === undefined){
            res.status(404).send({
                message: "No se encontraron coincidencias"
            });
        }else{
            res.send(product)
        }   
    }catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error al realizar la consulta"
        });
    }
}

exports.setProduct = async(req,res) =>{
    try{
        let product = await Product.findById(req.params.id);
        if ( product === null || product === undefined ){
            res.status(404).send({
                message: "No existen coincidencias para actualizar"
            })
        }else{
            const productData = req.body;
            product = await Product.findOneAndUpdate({_id: req.params.id}, productData, {new: true});
            res.send({
                message: "Actualización de producto exitosa",
                product
            });            
        }
    }catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error al realizar la consulta y actualizacion del dato"
        });
    }
}  

    
exports.deleteProduct = async (req,res) =>{
    try{
        const product = await Product.findById(req.params.id);
        if ( product === null || product === undefined ){
            res.status(404).send({
                message: "No existen coincidencias para eliminar"
            })
        }else{
            await Product.findOneAndRemove({_id:req.params.id});
            res.send({
                message: "Producto eliminado"
            })
        }
        
    }catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error al realizar al eliminar el producto"
        });
    }
}
   
 