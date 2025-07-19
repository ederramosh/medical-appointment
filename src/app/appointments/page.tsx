import { formatDate } from '../utilities/utillities';
import { getAppointments } from '../services/appointments.service';

const page = async () => {

  const appointments = await getAppointments();

  return (
    <div className="flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="w-full bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Listado de Citas</h1>

        {appointments.length === 0 ? (
          <p className="text-center text-gray-500">No hay citas registradas.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border">Nombre</th>
                  <th className="p-3 border">Apellido</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Teléfono</th>
                  <th className="p-3 border">Fecha</th>
                  <th className="p-3 border">Hora</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="p-2 border text-center">{appt.firstname}</td>
                    <td className="p-2 border text-center">{appt.lastname}</td>
                    <td className="p-2 border text-center">{appt.email}</td>
                    <td className="p-2 border text-center">{appt.phone}</td>
                    <td className="p-2 border text-center">{formatDate(appt.date)}</td>
                    <td className="p-2 border text-center">{appt.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default page