import {create} from "zustand";
import { Template5Props } from "../../dashboard/components/templates/interfaces-templates";

export const useCvStore = create<Template5Props>((set)=> ({
    name: "",
    lastName: "",
    titulo: "",
    bio: "",
    education: [],
    experiencia: [],
    redes: [],
    techSkills: [],
    idiomas: [],
    certificados: [],
    softSkills: [],
    location: [],
    template: null,
    setTemplate: (templateId) => set({ template: templateId }),
    setName: (name) => set({ name }),
    setLastName: (lastName) => set({ lastName }),
})) 