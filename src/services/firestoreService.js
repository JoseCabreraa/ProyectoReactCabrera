import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

export const getAllProducts = async () => {
  const productsCol = collection(db, "products");
  const snapshot = await getDocs(productsCol);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };
  else return null;
};

export const getProductsByCategory = async (categoryId) => {
  const q = query(
    collection(db, "products"),
    where("category", "==", categoryId)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const createOrder = async (orderData) => {
  const ordersCol = collection(db, "orders");
  const docRef = await addDoc(ordersCol, orderData);
  return docRef.id;
};
