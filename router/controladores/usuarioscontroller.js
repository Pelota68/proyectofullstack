const usuarios = require('../../modelos/usuarios');
exports.getusuariosbyname=async(req,res)=>{
    try {
        const usuarios = await usuarios.find();
        const usuariosByname={}
        usuarios.forEach((usuarios) => {
         if(!usuariosByname[usuarios.name]){
         usuariosByname[usuarios.name]=[]
        }
  
        usuariosByname[usuarios.name].push(usuarios);
        
        
      });
  
        res.json(usuariosByname)
      } catch (error) {
        res.status(500).json('Error al obtener usuarios');
      }
    };