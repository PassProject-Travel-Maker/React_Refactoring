import { Area } from 'components/types/area'
import { create } from 'zustand'

type State ={
    areas : Area[]
}
type Action = {
    setArea: (areas: Area[]) => void

}

export const useMapStore = create<State & Action>((set) => ({
    areas : [],
    setArea: (areas) => set({ areas:areas }),
}))