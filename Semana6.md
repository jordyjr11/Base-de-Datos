<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulario con Validación Dinámica</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h2>Formulario de Registro</h2>

  <form id="formulario" action="#" method="POST" novalidate>
    
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    <span class="error" id="errorNombre"></span>

    <label for="email">Correo Electrónico:</label>
    <input type="email" id="email" name="email" required>
    <span class="error" id="errorEmail"></span>

    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required>
    <span class="error" id="errorPassword"></span>

    <label for="confirmPassword">Confirmar Contraseña:</label>
    <input type="password" id="confirmPassword" name="confirmPassword" required>
    <span class="error" id="errorConfirmPassword"></span>

    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad" required>
    <span class="error" id="errorEdad"></span>

    <div class="botones">
      <button type="submit" id="btnEnviar" disabled>Enviar</button>
      <button type="reset">Reiniciar</button>
    </div>

  </form>

  <script src="script.js"></script>
</body>
</html>
