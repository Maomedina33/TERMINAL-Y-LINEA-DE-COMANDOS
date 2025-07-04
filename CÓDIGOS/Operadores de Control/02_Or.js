(|) Se ejecuta el comando sólo sí el primero falla.

ls asasdfasd || touch error.log   // se genera error y seguido se crea el archivo

ls -la || haocurridounerror.log  // en este caso se ejecuta la lista pero no se genera el segundo archivo por el fallo.

ls -la &&echo "exito" || echo "fracaso" // mixto

