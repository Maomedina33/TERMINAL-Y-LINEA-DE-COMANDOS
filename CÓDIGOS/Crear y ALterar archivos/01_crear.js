touch    // Crear Archivo
     touch archivo.tx
//tambien con direccionamiento
ls -l > archivo.txt

    //también puedes hacerlo de esta manera para varios
touch {archivo1,archivo2,archivo3}.txt
mkdir   //  Crear carpeta
     mkdir documentos
mkdir -p    //Crear subcarpetas
     mkdir -p ./Escuela/Matematicas             //deben ir pegadas al "/" o se crean mas 
                                            // carpetas lo mismo deben ir cerradas con "/".
ls ./Escuela/   //Mostrar lo que hay dentro de esa carpeta


// si queremos duplicar info de un archivo pasándolo a otro
ls -l proyecto1 >> listado.txt


// Crear archivo con contenido
echo "Hola mundo" > saludo.txt     //11 bits de contenido



cat saludo.txt            // para ver el contenido dentro

// Crear una secuencia de archivos con nombres numerados
touch archivo{1..5}.txt
// Crear archivos con múltiples extensiones o variaciones
touch archivo{A,B,C}.txt
// Combinación de secuencias y letras
touch archivo{1..3}_{a,b}.log
