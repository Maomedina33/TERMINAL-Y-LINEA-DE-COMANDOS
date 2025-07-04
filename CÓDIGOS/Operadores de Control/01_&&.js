"&&" // garantiza que el segundo comando sólo se ejecute si el primero tuvo éxito, 

gcc programa.c -o programa && ./programa   // este es el caso de si deseo compilar primero el archivo y luego ejecutarlo

ls -la && echo "se mostro el listado de archivos"   // en este caso muestra el listado y luego aparece el aviso