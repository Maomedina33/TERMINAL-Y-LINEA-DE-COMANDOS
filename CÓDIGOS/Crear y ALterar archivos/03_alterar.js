mv ./Escuela ./Colegio    //RENOMBRAR

//INTRODUCIR TEXTO A ARCHIVOS
echo "prueba" >>archivo.txt

// ELIMINAR ARCHIVO ----------------
rm Archivo2.txt
rm {arc1,arc2,arc3}.txt      // varios archivos

//ELIMINAR DIRECTORIO
rm -r Documentos

Para eliminar archivos con el comando rm, es fundamental seguir ciertas recomendaciones:

Verifica el archivo: Asegúrate de que estás eliminando el archivo correcto. Usa "ls" y "tree" para listar tus archivos antes de borrarlos.

Usa la opción -i: Al ejecutar "rm -i archivo" te pedirá confirmación antes de eliminar, lo que reduce errores.

"OJO Evita -rf sin cuidado:" No uses "rm -rf" a la ligera. Este comando elimina directorios y su contenido sin preguntar, lo que puede resultar en pérdida de datos.

Haz respaldos: Antes de eliminar archivos importantes, considera hacer copias de seguridad.

Consulta el manual: Usa "man rm" para conocer más opciones y evitar errores.

//Para eliminar directorios únicamente vacios
rmdir -p.

rmdir -p uno/dos/tres. // VARIOS tendrán que estár vacíos para que pueda ejecutarse.

