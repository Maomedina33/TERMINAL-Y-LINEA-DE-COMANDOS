touch file1.txt file2.txt fileA.txt fileB.md data.log archivo.csv  //crear todos esos archivos

ls *.txt  // (*) cualquier nombre de archivo que tenga .txt quiero que lo muestres
      ls -la *.txt
ls -la file*        // mostrar todos los archivos sin importar su extension pero que empiecen con File

ls file?.txt    //Este comodín hace que coincida únicamente un solo carácter en la posición exacta del patrón

ls -la *[AB].*   //Todo lo que empiece con AB sin importar su extension

ls *.{md,log}   //•	Para listar archivos con extensiones específicas múltiples

-r  // opcion que invierte el orden de listado (muestra de abajo hacia arriba)

/etc/ // significa: todo archivo o carpeta en "/etc"   

[^t]*     //: significa “todo lo que NO comience con la letra t”.