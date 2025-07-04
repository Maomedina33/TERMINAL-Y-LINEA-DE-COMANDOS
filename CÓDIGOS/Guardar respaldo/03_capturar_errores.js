Caso de capturar errores (>)
- todo lo que sea un error en los sistemas Linux siempre se hacer referencia con un 2.

ls sdfjksh 2> error.logs     // aca le damos la orden de capturar
  cat error.logs             // aca lo que hacemos es ver si lo tiene

  // para concatenar varios errores (>>)
 ls archivo_inexistente 2>> errores.log
 
 
 //Encadenacion Salida-Errores
  sudo apt install neovim 2>&1 info-install.log
Aquí, &> indica que se almacenarán ambas informaciones (salida y error estándar) en "instalación.log".

