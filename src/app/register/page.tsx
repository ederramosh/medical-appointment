'use client';

import { useForm } from "react-hook-form";
import { client } from "@/types/client.type";
import { useState } from "react";
import { registerAppointment } from "../services/appointments.service";

const Page = () => {
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<client>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      date: new Date(),
      time: "",
    }
  });

  const onSubmit = async (data: client) => {
    try {
      await registerAppointment(data);
      setSubmitMessage({ type: 'success', text: "✅ Cita registrada exitosamente." });
      reset();
    } catch (error) {
      console.error("Error al registrar cita:", error);
      setSubmitMessage({ type: 'error', text: "❌ Ocurrió un error al guardar la cita." });
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Registro de Citas</h1>
        
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("firstname", {
                required: "Este campo es obligatorio",
                minLength: { value: 3, message: "Mínimo 3 caracteres" },
              })}
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-red-500 text-sm">{errors.firstname?.message}</p>
          </div>

          <div>
            <input
              {...register("lastname", {
                required: "Este campo es obligatorio",
                minLength: { value: 3, message: "Mínimo 3 caracteres" },
              })}
              type="text"
              placeholder="Apellido"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-red-500 text-sm">{errors.lastname?.message}</p>
          </div>

          <div>
            <input
              {...register("email", {
                required: "Este campo es obligatorio",
              })}
              type="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>

          <div>
            <input
              {...register("phone", {
                required: "Este campo es obligatorio",
                minLength: { value: 4, message: "Mínimo 4 dígitos" },
              })}
              type="tel"
              placeholder="Teléfono"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-red-500 text-sm">{errors.phone?.message}</p>
          </div>

          <div>
            <input
              {...register("date", {
                required: "Este campo es obligatorio",
              })}
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-red-500 text-sm">{errors.date?.toString()}</p>
          </div>

          <div>
            <input
              {...register("time", {
                required: "Este campo es obligatorio",
              })}
              type="time"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-red-500 text-sm">{errors.time?.message}</p>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Registrar Cita
            </button>
          </div>

          {submitMessage && (
            <p
              className={`text-center mt-4 text-sm font-medium ${
                submitMessage.type === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {submitMessage.text}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Page;
