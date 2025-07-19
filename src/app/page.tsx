export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Bienvenido</h1>
        <p>Favor toma en cuenta las siguientes consideraciones:</p>
        <ol>
          <li>Se debe de descargar el proyecto</li>
          <li>Correr el comando NPM Install</li>
          <li>Dentro del archivo de block de notas encontrara todas las keys para conectar a Firebase</li>
          <li>Crear un archivo .env y copiar y pegar los valores de las keys.</li>
        </ol>
      </div>
    </div>
  );
}
