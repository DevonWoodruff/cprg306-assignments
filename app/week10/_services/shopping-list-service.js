import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const getItems = async (userId) => {
  const wahtever = await getDocs(collection(db, "items"))
  return wahtever
}

const addItem = () => {

}

export default getItems;