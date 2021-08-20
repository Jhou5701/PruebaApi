module.exports = app => {
    const estudiantes = require("../controllers/estudiante.controller");
  
    var router = require("express").Router();
  
  //Obtiene listado de estudiantes - filtra por sexo
  // http://localhost:8080/api/estudiantes/listado
  router.get("/listado", estudiantes.getEstudiantes);
  
  //Guardar un estudiante - (no condicion)
  // http://localhost:8080/api/estudiantes/guardar
  router.post("/guardar", estudiantes.guardar);

   // http://localhost:8080/api/estudiantes/guardar
   router.delete("/borrar/:id", estudiantes.borrar);
  
  // localhost:8080/api/estudiantes
  app.use('/api/estudiantes', router);

  //elimina un estudiante - v2
  router.delete("/borrarv2/:matricula", estudiantes.borrarv2);

  //actualizar estudiante por matricula
  router.put("/actualizar/:matricula", estudiantes.actualizar);

};
  