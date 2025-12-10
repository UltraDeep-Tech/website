const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'assets');
const destDir = path.join(__dirname, 'public', 'assets');

// Crear carpeta public si no existe
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('✅ Carpeta public creada');
}

// Función para copiar directorios recursivamente
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copiar assets a public/assets
if (fs.existsSync(sourceDir)) {
  // Siempre copiar para asegurar que estén actualizados
  if (fs.existsSync(destDir)) {
    // Eliminar carpeta destino si existe para evitar archivos obsoletos
    fs.rmSync(destDir, { recursive: true, force: true });
  }
  copyRecursiveSync(sourceDir, destDir);
  console.log('✅ Assets copiados a public/assets');
  
  // Verificar que se copió correctamente
  const testFile = path.join(destDir, 'img', 'favicon.webp');
  if (fs.existsSync(testFile)) {
    console.log('✅ Verificación: Archivos copiados correctamente');
    const stats = fs.statSync(testFile);
    console.log(`   Archivo de prueba: ${testFile} (${stats.size} bytes)`);
  } else {
    console.log('⚠️  Advertencia: No se pudo verificar la copia');
    console.log(`   Buscado en: ${testFile}`);
    // Listar contenido de destDir para debug
    if (fs.existsSync(destDir)) {
      console.log(`   Contenido de ${destDir}:`, fs.readdirSync(destDir));
    }
  }
} else {
  console.log('❌ La carpeta assets no existe en:', sourceDir);
  console.log('   Directorio actual:', __dirname);
  process.exit(1);
}

console.log('✅ Setup completado');

