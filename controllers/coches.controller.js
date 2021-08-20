//const { coches } = require("../models");
const db = require("../models");
const coches = db.coches;

//borrar un coche 
exports.borrarcoche = (req, res) => {

    const modelo = req.params.modelo;
  
    coches.deleteOne(
      //pasar criterio de busqueda
      {modelo: modelo}
      ).then(data => {
      if(data.n==0){
        res.status(404).send({status:false, 
          mensaje: "No se pudo borrar el coche por modelo: "+ modelo});
      }
      else{
        res.send({status:true, mensaje: "Registro borrado..."});
      }
    }).catch(err => {
      res.status(500).send({ status:false,
        mensaje:
          err.message || "Error al eliminar un coche por modelo" + modelo
      });
    });
    
  }

  //actualiza coche por modelo
exports.actualizar = (req, res) => {

    if(!modelo){
      return res.status(404).send({status:false, mensaje:"falta parametro del modelo"})
    }
      const matricula = req.body.matricula;
      const modelo = req.body.modelo;
      const marca = req.body.marca;
      const precio = req.body.precio;
      const kilometraje = req.body.kilometraje;
    
    
      coches.updateOne(
        //pasar criterio de busqueda
        {modelo: modelo},
        {$set:
          {
            matricula:matricula,
            modelo:modelo,
            marca:marca,
            precio:precio,
            kilometraje:kilometraje,
          }
        }
        ).then(data => {
        if(data.n==0){
          res.status(404).send({status:false, 
            mensaje: "No se pudo actualizar el coche por modelo: "+ modelo});
        }
        else{
          res.send({status:true, mensaje: "Registro actualizado..."});
        }
      }).catch(err => {
        res.status(500).send({ status:false,
          mensaje:
            err.message || "Error al actualizar un coche por modelo" + modelo
        });
      });
      
    }
    
    //Guardar un coche 
exports.guardar = (req, res) => {
  const matricula = req.body.matricula;
  const modelo = req.body.modelo;
  const marca = req.body.marca;
  const precio = req.body.precio;
  const kilometraje = req.body.kilometraje;

  const est = new coches({
      "matricula": matricula,
      "modelo": modelo,
      "marca": marca,
      "precio": precio,
      "kilometraje": kilometraje
  });

  est.save(est).then( data => {
      res.send(data);
  }).catch( err => {
      res.status(500).send({
          mensaje:
              err.message || "Error al guardar datos en la coleccion de coches..."
      });
  });
}