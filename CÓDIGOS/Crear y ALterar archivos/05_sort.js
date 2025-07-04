sort // ordena las filas de una entrada o un archivo de texto e
  ls -l | sort -nk 5

uniq // filtra las líneas duplicadas de una entrada o de un archivo de texto.
   sort archivo.txt | uniq > archivo_sin_duplicados.txt

date // muestra fecha y hora del sistema.
    date +%Y-%m-%d