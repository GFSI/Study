//Crear funcion de usuario/admin/borrarusuario, el admin ocupara las propiedades del usuario pero con algo agregado

function createUser(name){
    return {
        name : name,

        greet(){
            console.log('Hola soy ',name);
        }
    }
}

function createAdmin(name){
    const usuario = createUser(name);
    usuario.isAdmin = true;

    usuario.deleteUser = function() {
        console.log("Usuario eliminado.");
      };
    
      return usuario;
}

const admin = createAdmin('Juan');
admin.greet();
console.log(admin.isAdmin);
admin.deleteUser(); 