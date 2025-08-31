<?php
// =============================
// CONFIGURACIÓN DE PHPMailer
// =============================
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Estado de confirmación
$status = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre    = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $id        = $_POST['id'];
    $telefono  = $_POST['telefono'];
    $modalidad = $_POST['modalidad'];
    $menor     = isset($_POST['menor']) ? "Sí" : "No";
    $edad      = $_POST['edad'] ?? "-";
    $encargado = $_POST['encargado'] ?? "-";
    $telEnc    = $_POST['telEncargado'] ?? "-";

    // ====== CONFIGURA TU CORREO ======
    $correo_envia  = "dayanarr0driguz9@gmail.com";
    $clave_app     = "fvodsaijapyflplo"; 
    $correo_recibe = "riccysarmiento50@gmail.com";

    $asunto = "Nuevo Registro de Estudiante";

    // ====== CUERPO DEL MENSAJE ======
    $mensaje = "
    <html>
    <body style='font-family: Arial, sans-serif; background:#f9f9f9; padding:20px;'>
      <div style='max-width:600px; margin:auto; background:#fff; padding:20px; border-radius:10px; box-shadow:0 0 10px rgba(0,0,0,.1);'>
        <h2 style='color:#d4af37; text-align:center;'>
          <i class='fa-solid fa-user-graduate'></i> Nuevo Registro de Estudiante
        </h2>
        <hr>
        <p>Has recibido un nuevo registro en <strong>Academia de Belleza Riccy's Salon Studio</strong>. Aquí los detalles:</p>
        <p><strong>Nombre:</strong> $nombre</p>
        <p><strong>Dirección:</strong> $direccion</p>
        <p><strong>ID:</strong> $id</p>
        <p><strong>Teléfono:</strong> $telefono</p>
        <p><strong>Modalidad:</strong> $modalidad</p>
        <p><strong>Es menor de edad:</strong> $menor</p>
        <p><strong>Edad:</strong> $edad</p>
        <p><strong>Encargado:</strong> $encargado</p>
        <p><strong>Tel. Encargado:</strong> $telEnc</p>
        <br>
        <p style='text-align:center;color:#555;font-size:13px;'>
          <i class='fa-solid fa-star' style='color:#d4af37;'></i>  
          Gracias por confiar en nosotros.<br>
          <strong>Belleza Riccy's Salon Studio</strong>.
        </p>
      </div>
    </body>
    </html>";

    // ====== ENVIAR CON PHPMailer ======
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'dayanarr0driguz9@gmail.com';
        $mail->Password   = 'fvodsaijapyflplo';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        $mail->setFrom($correo_envia, "Belleza Riccy's");
        $mail->addAddress($correo_recibe);

        $mail->isHTML(true);
        $mail->Subject = $asunto;
        $mail->Body    = $mensaje;

        $mail->send();
        $status = "✅ Registro enviado correctamente.";
    } catch (Exception $e) {
        $status = "❌ Error al enviar el registro. {$mail->ErrorInfo}";
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Registro Estudiante</title>
  <link rel="stylesheet" href="estilos.css" />
  <link rel="stylesheet" href="registro.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
</head>
<body>
<div class="overlay"></div>

<!-- HEADER -->
<header>
  <div class="logo-nombre">
    <img src="LOGOOOO.png" alt="Logo" />
    <span>Academia de Belleza Riccy's Salon Studio</span>
  </div>
  <nav>
    <a href="index.html">Inicio</a>
    <a href="servicios.html">Servicios</a>
    <a href="catalogos.html">Productos</a>
    <a href="historia.html">Historia</a>
    <a href="reseñas.php">Reseñas</a>
    <a href="registro.php" class="btn">Entrar</a>
  </nav>
</header>

<!-- FORMULARIO -->
<main class="seccion">
  <h2 class="titulo-seccion">Formulario de Registro</h2>

  <?php if (!empty($status)) echo "<p style='text-align:center;color:#d4af37;'><strong>$status</strong></p>"; ?>

  <form method="POST" class="form-registro">
    <label>Nombre Completo</label>
    <input type="text" name="nombre" required>

    <label>Dirección</label>
    <input type="text" name="direccion" required>

    <label>ID</label>
    <input type="text" name="id" required>

    <label>Teléfono</label>
    <input type="tel" name="telefono" required>

    <label>Modalidad</label>
    <select name="modalidad" required>
      <option value="Presencial">Presencial</option>
      <option value="Virtual">Virtual</option>
    </select>

    <label><input type="checkbox" name="menor" id="chkMenor"> Soy menor de edad</label>

    <div id="extraMenor" style="display:none;">
      <label>Edad</label>
      <input type="number" name="edad" min="1" max="17">

      <label>Nombre del Encargado</label>
      <input type="text" name="encargado">

      <label>Teléfono del Encargado</label>
      <input type="tel" name="telEncargado">
    </div>

    <button type="submit">Enviar Registro</button>
  </form>
</main>

<!-- FOOTER -->
<footer class="site-footer">
  <div class="container">
    <small>© <span id="year"></span> Riccy Sarmiento • Todos los derechos reservados</small>
  </div>
</footer>

<style>
.site-footer{
  border-top:1px solid rgba(212,175,55,.25);
  background: rgba(0,0,0,.85);
  padding:18px 0;
  text-align:center;
  color:#c9c9c9;
  font-size: 14px;
}
</style>

<script>
document.getElementById('year').textContent = new Date().getFullYear();

// Script para mostrar campos de menor
document.addEventListener("DOMContentLoaded", function () {
  const chkMenor = document.getElementById("chkMenor");
  const extraMenor = document.getElementById("extraMenor");

  chkMenor.addEventListener("change", function () {
    extraMenor.style.display = this.checked ? "block" : "none";
  });
});
</script>
</body>
</html>