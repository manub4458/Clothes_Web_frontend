import { create } from "zustand";

import { persist, createJSONStorage } from 'zustand/middleware'

export const useCart = create(persist((set, get) => ({
    items: [],
    addItem: (id) => {
        const existingItem = get().items.find((item) => item === id)
        if (!existingItem) {
            set({ items: [id, ...get().items] })
        }
    },
    removeItem: (id) => {
        const existingItem = get().items.find((item) => item === id)
        if (existingItem) {
            const filterItems = get().items.filter((item) => item !== id)
            set({ items: filterItems })
        }
    }
}),
    {
       name:"cart-items",
       storage:createJSONStorage(()=>localStorage)
    }))