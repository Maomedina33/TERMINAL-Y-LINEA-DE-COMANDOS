//Para comenzar la búsqueda, GREP espera dos cosas fundamentales: 
//1.el patrón que buscas 
//2.la ubicación del archivo a revisar.


-i No sensible a mayúsculas

-c Cuenta la cantidad de veces que aparece el termino que se esta buscando

-v Retorna todas las lineas que no contienen o no hacen match con el termino buscado

grep -i "spider" archivo.txt

// Si deseas contar cuántas veces aparece un término, utiliza la opción -c:

grep -c "spider" archivo.txt
//-------------------------------------------------------------------------------

// Para mostrar líneas que no coincidan con tu búsqueda específica:
//Este método es útil cuando incluyes filtros para analizar grandes cantidades de datos.

grep -i -v "spider" archivo.txt

// ------------------------FIND---------------------------
//Para buscar todos los directorios desde tu ubicación actual:
//La opción type permite especificar qué buscar: d para directorios y f para archivos.
find . -type d -name "*"

//Buscar archivos mayores a cierto tamaño (por ejemplo, 1 MB):
find . -type f -size +1M
