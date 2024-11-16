import { create } from 'zustand'
export const useStore = create((set,get) => ({
  
    smallcats:0,
    bigcats:0,
total:0,
  Addsmallcat: () => set((state) => ({ smallcats: state.smallcats + 1 })),
  Addbigcats: () => set((state) => ({bigcats: state.bigcats + 1  })),
Summary:()=>{
  const total=get().smallcats+get().bigcats
  return `There is ${total} in stock`;
}
}))