Imagen creada en:

https://www.asciiart.eu/

//Puedes ver toda la lista de cows existente con el comando:

ls /usr/share/cowsay/cows/

//Crea un nuevo cow con el comando:

cp /usr/share/cowsay/cows/default.cow ./platzi.cow

//Personaliza el nuevo cow con el comando:

nano platzi.cow

//No olvides dejar al inicio:

$the_cow = <<EOC;

// y al final:

EOC

// Finalmente muévelo a la carpeta cows:

sudo mv ./platzi.cow /usr/share/cowsay/cows/

//Y ya podrás usarlo:

cowsay -f platzi "Nunca pares de aprender" | lolcat
 _   _      _ _        __        __         _     _ _ 
| | | | ___| | | ___   \ \      / /__  _ __| | __| | |
| |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | |
|  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|
|_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_)
  
                                                                                       
 
   \`"-.
    )  _`-.
   ,  : `. \
  : _   '  \
  ; *` _.   `--._
  `-.-'          `-.
    |       `       `.
    :.       .        \
    | \  .   :   .-'   .
    :  )-.;  ;  /      :
    :  ;  | :  :       ;-.
    ; /   : |`-:     _ `- )
  ,-' /  ,-' ; .-`- .' `--'
  `--'   `---' `---'