import { create } from 'zustand'

type State ={
    title : string,
    subject : string
}
type Action = {
    updateTitle: (title: string) => void
    updateSubject: (subject: string) => void
  }

export const usePlanformStore = create<State & Action>((set) => ({
    title : '',
    subject : '',
    updateTitle: (title) => set({ title }),
    updateSubject: (subject) => set({ subject }),
}))