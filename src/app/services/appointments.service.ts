import { db } from "../../../firebase.config";
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { client } from '@/types/client.type';

export const registerAppointment = async (data: client) => {
    const parsedData = {
      ...data,
      date: new Date(data.date).toISOString(),
      createdAt: new Date().toISOString(),
    };
  
    await addDoc(collection(db, "appointments"), parsedData);
  };

export const getAppointments = async () => {
    try {
        const snapshot = await getDocs(collection(db, 'appointments'));
        const data = snapshot.docs.map(doc => doc.data() as client);
        return data;
    } catch (error) {
        throw new Error('No se pudieron cargar las citas.');
    }
};