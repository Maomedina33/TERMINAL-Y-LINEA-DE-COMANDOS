grep // Úsalo para una búsqueda simple de líneas que coincidan con una expresión regular. 
// Es el más rápido para esta tarea.
	
cut  // Úsalo para extraer columnas de forma muy simple, cuando el separador es un solo carácter.
//  No tiene lógica de programación.

sed //Úsalo para editar texto en el flujo (stream editor), principalmente para buscar y reemplazar.
// realiza operaciones básicas de edición de texto sin la necesidad de abrir el archivo. ej.: sed 's/manzana/pera/' fruta.txt
sed 's/manzana/pera/' fruta.txt