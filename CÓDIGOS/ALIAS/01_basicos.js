cls    // Limpiar la pantalla (equivalente a clear).
ll     //: Listar archivos en formato detallado (equivalente a ls -la).
greet  //: Un comando personalizado para ejecutar un script de saludo.
backup //: Copiar archivos importantes a una ubicación de respaldo.
update  //: Ejecutar comandos para actualizar el sistema.
Estos alias simplifican tareas repetitivas y mejoran la productividad en la terminal.

/etc/       // significa: todo archivo o carpeta en "/etc"   

//alias
alias dragon='cowsay -f dragon "hola mundo"' //ten cuidado en el uso de las comillas
dragon



unalias // elimina la definición de un alias previamente creado. Si ejecutaste 
alias nombre='comando', 
unalias nombre desactiva ese atajo, restaurando el comportamiento original de nombre. Útil para deshacer alias peligrosos o temporales.