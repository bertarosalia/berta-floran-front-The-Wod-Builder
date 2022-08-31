# COMPONENTES

APP:

- Recibe: usuario
- Muestra:
  La aplicación
- Estado: logueado o no logueado
- Acción: Setea o Guarda en datos de login del usuario

REGISTER:

- Recibe: si es Form Register
- Muestra: un formulario con campos name, email y password, y un botón con su texto.
- Estado propio: ir actualizando los datos del usuario.
- Acción: al clickar se envía la info formulario de registro

LOGIN:

- Recibe: si es Form Login
- Muestra: un formulario con campos email y password, con un botón y su texto.
- Estado: actualizará los datos que va introduciendo el usuario.
- Acción: al clickar el usuario, enviar el formulario y los datos del usuario pasan al store.

LISTA DE EJERCICIOS:

- Recibe: el array con los ejercicios
- Muestra: Botón de filtrar, tantas cards de ejercicios como reciba.
- Estado: variable según el número de ejercicios que haya
- Acción del usuario: al clicar la card lo lleva a card al detalle

FORM LA CARD DE DETALLE:

- Recibe: info del ejercicio y qué tipo de formulario es
- Muestra: formulario con inputs llenos, nombre, parte del cuerpo, descripción y foto, y botones crear y borrar
- Estado: nada
- Acción: submit

BOTÓN

- Recibe: un texto y la acción a realizar (props)
- Muestra: un botón con el texto recibido
- Estado: nada
- Acción del usuario: invoca acción a realizar al ser clickado

MODALES

- Recibe: su tipo y texto.
- Estado: Loading in process. Loading successful. Loading failed.
- Muestra: un texto con un icono.
- Acciones del usuario: Ninguna.

NAVEGACIÓN:

Recibe: Los links a las páginas
Estado: Ninguno.
Muestra: menú de navegación
Acciones del usuario: Cuando el usuario clickea los botones, lo reirige a esa página.

LOGOUT:

- Recibe: acción a realizar
- Estado: nada.
- Muestra: icono de logout
- Acciones del usuario: cuando el usuario clica lo lleva a la página de login.

# Datos:

- Array de objetos ejercicios

# Modificaciones:

cargar todos los ejercicios
Crear ejercicio
Modificar ejercicio
Eliminar ejercicio
