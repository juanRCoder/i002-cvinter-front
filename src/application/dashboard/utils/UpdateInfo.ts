import { ChangeEvent } from "react";
import {
  Certificados,
  Education,
  Experiencia,
  TechSkills,
} from "../components/templates/interfaces-templates";

// Define tipos genéricos
type StateType = Education | Experiencia | Certificados | TechSkills;
type StateTypeArray<T> = T[];

// Función de actualización
export const updateInputs = <T extends StateType>(
  id: number,
  event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  state: StateTypeArray<T>,
  setState: (newState: StateTypeArray<T>) => void
) => {
  const { name, value } = event.target;
  const updatedState = state.map((obj) =>
    obj.id === id ? { ...obj, [name]: value } : obj
  );
  setState(updatedState);
};

// Función para añadir nuevos elementos
export const addGroupInputs = <T extends StateType>(
  id: number,
  setId: React.Dispatch<React.SetStateAction<number>>,
  state: StateTypeArray<T>,
  setState: (newState: StateTypeArray<T>) => void,
  newGroup: T
) => {
  setState([...state, newGroup]);
  setId(id + 1);
};

// Función para eliminar elementos
export const removeGroupInputs = <T extends StateType>(
  id: number,
  state: StateTypeArray<T>,
  setState: (newState: StateTypeArray<T>) => void
) => {
  const updatedState = state.filter((obj) => obj.id !== id);
  setState(updatedState);
};

// Funcion para seleccionar y enviar la opcion indicada
export const selectedOption = <T extends StateType>(
  id: number,
  select: string,
  setState: (newState: StateTypeArray<T>) => void,
  state: StateTypeArray<T>,
  setModalId: React.Dispatch<React.SetStateAction<number | null>> 
) => {
  const updatedState = state?.map((obj) =>  obj.id === id ? { ...obj, nivel: select } : obj);
  setState(updatedState);
  setModalId(null);
};