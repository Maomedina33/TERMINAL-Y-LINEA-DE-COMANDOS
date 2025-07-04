cd /  // nos posiciona en la raiz   
"recuerda "/" representa el inicio de la raiz en linux
cd /home/  // ir a mi ruta de usuario

//permiten desplazarnos rápidamente usando comandos como:
 cd ..    // para retroceder y
 cd ~    //para ir al home del usuario rápidamente, independientemente del directorio actual.
 cd -   //regresas al directorio donde te encontrabas anteriormente
 

/* facilitan almacenar temporalmente una ubicación y regresar posteriormente  
 a ella:
*/
pushd .  //: guarda la ubicación actual en una pila.
popd    //: recupera la última ubicación almacenada y nos desplaza automáticamente a ella.

Este mecanismo es muy útil para navegar cómodamente cuando trabajamos en
 múltiples directorios simultáneamente.

tree //comando para ver arbol de jerarquia (muestra tambien cantidad de directorios y archivos)
    "ojo ,activar desde una carpeta pequeña, porque si lo hace desde la raiz vomita toda la compilacion mostrando todo lo que hay"
    

neofetch // si no lo tienen lo pueden instalar con el comando 
    sudo apt install neofetch


ls -R /usr | less  //este comando listará todo el contenido del directorio usr y de sus subcarpetas

en cmd :// quiero que me muestre en que archivo esta el siguiente texto "static"
   findstr /s /m /i "static" *.*

   // solo archivo de texto
   findstr /s /m /i "static" *.txt
   