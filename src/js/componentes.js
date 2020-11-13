
import '../css/componentes.css';

//La palabra reservada export me permite habilitar el metodo saludar para que sea utilizado en otros archivos
export const saludar = ( nombre ) => {
    console.log('Creando etiqueta h1 en HTML');
    const h1        = document.createElement('h1');
    h1.innerText    = `Hola, ${nombre}, ¿Cómo estás?`;
    
    document.body.append(h1);

}
