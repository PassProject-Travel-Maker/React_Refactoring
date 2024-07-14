import { Area } from 'types/area'
import { create } from 'zustand'

type State ={
    areas : Area[]
    latitude : number,
    longitude : number
}
type Action = {
    setArea: (areas: Area[]) => void
    computeAreaCenter : (areas: Area[])=> void

}

export const useMapStore = create<State & Action>((set) => ({
    areas : [],
    latitude : 33.450705,
    longitude :  126.570667,
    setArea: (areas) => set({ areas:areas }),
    computeAreaCenter: (areas) => {
        if (areas.length === 0) return;

        let lat = 0;
        let lng = 0;
        areas.forEach((area) => {
            lat += area.latitude;
            lng += area.longitude;
        });
        lat = lat / areas.length;
        lng = lng / areas.length;

        set({ latitude : lat, longitude : lng });
    },
}))