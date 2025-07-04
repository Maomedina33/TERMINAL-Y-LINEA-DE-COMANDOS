awk '{print $1}' archivo    //que columna queremos imprimiir?
awk -F ',' '{print $1,$3}' archivo    //Imprimir más de una columna con espacio
awk '{print NF}' parrafo_awk.txt   //(imprime el número de columnas/ palabras presentes por línea. NF significa Number of fields)
awk 'length($0) > 55 {print $0}' parrafo_awk.txt //(imprime las líneas que cumplen con el criterio de N número de caracteres)
awk '{print NR ": " $0}' parrafo_awk.txt // (añade al output el numeral de cada línea. NR se refiere a Number of Record)
awk -F ',' 'NR > 1 {suma += $9} END {print "Suma de col9: ", suma}' tiendas.csv //(Este comando se compone de 3 partes: 1 condicional, 1 proceso y un producto. - NR >1 condiciona a que solo si el # línea es mayor a 1, se aplique el proceso. Esto para excluir el encabezado de la tabla. - El proceso indica sumar a una variable llamada 'suma' el valor de cada línea presente en la columna 9 y se termina el proceso explícitamente con el comando END. - El producto es un formato de impresión del output con la variable suma)
awk 'BEGIN {print "---TIENDAS EJEMPLO---"} {print $0}' tiendas.csv // (permite agregar un encabezado al output original al agregar el comando BEGIN)