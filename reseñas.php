<?php
$conexion = new mysqli("localhost", "root", "", "aca");
if ($conexion->connect_error) {
    die("Error conexión: " . $conexion->connect_error);
}

// Insertar reseña
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $conexion->real_escape_string($_POST['nombre']);
    $estrella = (int)$_POST['estrella'];
    $comentario = $conexion->real_escape_string($_POST['comentario']);
    $conexion->query("INSERT INTO reseñas (nombre, estrella, comentario) 
                      VALUES ('$nombre',$estrella,'$comentario')");
}

// Calcular promedio
$prom = $conexion->query("SELECT AVG(estrella) AS p FROM reseñas")->fetch_assoc();
$promedio = $prom && $prom['p'] ? round($prom['p'],1) : 0;

// Contar reseñas totales
$total = $conexion->query("SELECT COUNT(*) AS t FROM reseñas")->fetch_assoc()['t'];

// Distribución por estrellas
$dist = [];
for ($i=1;$i<=5;$i++) {
  $r = $conexion->query("SELECT COUNT(*) AS c FROM reseñas WHERE estrella=$i")->fetch_assoc();
  $dist[$i] = $r['c'];
}

// Reseñas para mostrar
$resenas = $conexion->query("SELECT * FROM reseñas ORDER BY fecha DESC");
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reseñas</title>
  <link rel="stylesheet" href="estilos.css" />

  <link rel="stylesheet" href="reseñas.css" />
</head>
<body>
<div class="overlay"></div>

<!-- HEADER ORIGINAL -->
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

<!-- BLOQUE DE RESEÑAS -->
<main class="seccion">
  <h2 class="titulo-seccion">Calificaciones y Opiniones</h2>

  <div class="contenedor-reseñas">
    <!-- IZQUIERDA: PROMEDIO Y DISTRIBUCIÓN -->
    <div class="lado-izq">
      <!-- Promedio -->
      <div class="promedio">
        <h1><?php echo $promedio; ?></h1>
        <p><?php echo str_repeat("⭐", round($promedio)); ?></p>
        <small><?php echo $total; ?> reseñas</small>
      </div>

      <!-- Distribución -->
      <div class="distribucion">
        <?php for($i=5;$i>=1;$i--): 
          $cant = $dist[$i];
          $porc = $total>0 ? ($cant/$total*100) : 0;
        ?>
          <div class="fila">
            <span><?php echo $i; ?> ★</span>
            <div class="barra"><div style="width:<?php echo $porc; ?>%"></div></div>
            <span><?php echo $cant; ?></span>
          </div>
        <?php endfor; ?>
      </div>
    </div>

    <!-- DERECHA: LISTA DE RESEÑAS + FORMULARIO -->
    <div class="lado-der">
      <!-- Listado -->
      <section class="lista-reseñas">
        <?php if ($resenas->num_rows > 0): ?>
          <?php while($r = $resenas->fetch_assoc()): ?>
            <div class="reseña">
              <strong><?php echo htmlspecialchars($r['nombre']); ?></strong>
              <span><?php echo str_repeat("⭐",$r['estrella']); ?></span>
              <p><?php echo htmlspecialchars($r['comentario']); ?></p>
              <small><?php echo date("d/m/Y", strtotime($r['fecha'])); ?></small>
            </div>
          <?php endwhile; ?>
        <?php else: ?>
          <p>No hay reseñas aún.</p>
        <?php endif; ?>
      </section>

      <!-- Formulario -->
      <section class="form-reseña">
        <h3>Agrega tu reseña</h3>
        <form method="POST">
          <input type="text" name="nombre" placeholder="Tu nombre" required>
          <select name="estrella" required>
            <option value="5">★★★★★</option>
            <option value="4">★★★★☆</option>
            <option value="3">★★★☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="1">★☆☆☆☆</option>
          </select>
          <textarea name="comentario" placeholder="Escribe tu comentario..." required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  </div>
</main>

<!-- FOOTER ORIGINAL -->
<footer class="site-footer">
  
  <!-- Contenedor central para limitar el ancho del contenido -->
  <div class="container">
    <!-- Texto del copyright -->
    <!-- El año se inserta automáticamente con JavaScript -->
    <small>© <span id="year"></span> Riccy Sarmiento • Todos los derechos reservados</small>
  </div>

</footer>

<!-- =========================
     ESTILOS DEL FOOTER
     ========================= -->
<style>
  /* Estilo general del footer */
  .site-footer{
    border-top:1px solid rgba(212,175,55,.25); /* Línea superior en dorado semi-transparente */
    background: rgba(0,0,0,.85); /* Fondo negro con 85% opacidad */
    padding:18px 0; /* Espacio arriba y abajo del texto */
    text-align:center; /* Centrar el contenido */
    color:#c9c9c9; /* Texto gris claro */
    font-size: 14px; /* Tamaño de letra */
  }

  /* Contenedor para alinear el contenido y mantener márgenes */

</style>


 <script>
  // Obtiene el año actual del sistema y lo coloca en el span con id="year"
  document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  // Verificamos que ScrollReveal esté disponible
  if (typeof window.ScrollReveal !== 'function') return;

  const sr = ScrollReveal({ reset: false, mobile: true, cleanup: true });

  // Animar el título
  sr.reveal('#servicios .titulo-seccion', {
    distance: '24px',
    origin: 'bottom',
    duration: 700,
    delay: 80,
    easing: 'ease-out',
    opacity: 0,
    scale: 0.98
  });

  // Animar cada tarjeta
  sr.reveal('#servicios .servicio', {
    distance: '22px',
    origin: 'bottom',
    duration: 650,
    interval: 120,
    opacity: 0,
    easing: 'ease-out'
  });

  // Animar el icono de cada tarjeta
  sr.reveal('#servicios .servicio .icono-servicio', {
    distance: '12px',
    origin: 'top',
    duration: 500,
    opacity: 0,
    delay: 100
  });
});
</script>

</body>
</html>