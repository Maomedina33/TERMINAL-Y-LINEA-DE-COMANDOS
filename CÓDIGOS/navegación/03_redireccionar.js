Para esto se requieren instalar los siguientes paquetes: 
•	Sudo apt install lolcat
•	Sudo apt install cowsay

//sobreescribir datos en archivos 
echo "saludo" > archivo_hola.txt
cat archivo_hola.txt

//agregar nuevo contenido a archivos
echo "hola personas" >> archivo_hola.txt 
cat archivo_hola.txt


lolcat // dar color  con operador "|" de un Output a un input
   echo "saludo" | lolcat

   // otra forma de verlo 
   cat archivoHola.txt | lolcat

cowsay  // mostrar imagen 
   cowsay "hola" | lolcat
   

   en cmd :// quiero que me muestre en que archivo esta el siguiente texto "static"
   findstr /s /m /i "static" *.*