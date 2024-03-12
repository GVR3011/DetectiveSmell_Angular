import * as fs from "fs";
import * as path from "path";

// Directorio del proyecto
const projectDirectory = "./ejemplos/MISW4104_202315_E18-master";

// Objeto para almacenar la estructura de carpetas y sus archivos
const folderStructure: { [folderName: string]: string[] } = {};

// Array para almacenar los mensajes de error
const errors: string[] = [];

// Función para leer todos los archivos TypeScript en un directorio y sus subdirectorios
function readProject(directory: string, parentFolder: string = ""): void {
    fs.readdirSync(directory).forEach(file => {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            // Si es un directorio, leer sus archivos recursivamente
            readProject(filePath, path.join(parentFolder, file));
        } else if (file.endsWith(".ts")) {
            // Si es un archivo TypeScript, agregarlo a la lista
            const folder = parentFolder || "/";
            if (!folderStructure[folder]) {
                folderStructure[folder] = [];
            }
            folderStructure[folder].push(filePath);
        }
    });
}

// Obtener la lista de archivos TypeScript del proyecto y construir la estructura de carpetas
readProject(projectDirectory);

// Verificar si los nombres de los archivos contienen el nombre de la carpeta
for (const folderName in folderStructure) {
    const files = folderStructure[folderName];
    const folderBaseName = path.basename(folderName);
    for (const filename of files) {
        const fileBaseName = path.basename(filename, path.extname(filename));
        if (!fileBaseName.includes(folderBaseName)) {
            errors.push(`El archivo ${filename} no contiene el nombre de la carpeta ${folderBaseName}`);
        }
    }
}

// Generar el reporte HTML
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Reporte DetectiveSmell</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #dddddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h2>Archivos en cada carpeta</h2>
    ${Object.entries(folderStructure).map(([folderName, files]) => `
        <h3>${folderName}</h3>
        <ul>
            ${files.map(file => `<li>${file}</li>`).join('')}
        </ul>
    `).join('')}
    
    ${errors.length > 0 ? `
    <h2>Errores</h2>
    <ul>
        ${errors.map(error => `<li>${error}</li>`).join('')}
    </ul>
    ` : ''}
</body>
</html>
`;

// Escribir el contenido HTML en un archivo
fs.writeFileSync("report.html", htmlContent);

console.log("Reporte generado: report.html");
