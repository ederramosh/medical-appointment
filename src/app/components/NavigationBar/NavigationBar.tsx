import Link from "next/link";

export const NavigationBar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-center space-x-10">
        <Link
          href="/"
          className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
        >
          Inicio
        </Link>
        <Link
          href="/register"
          className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
        >
          Registrar Citas
        </Link>
        <Link
          href="/appointments"
          className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
        >
          Lista de Citas
        </Link>
      </div>
    </nav>
  );
};
