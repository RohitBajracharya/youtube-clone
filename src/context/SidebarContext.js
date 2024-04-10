import { createContext, useContext } from "react";

export const SidebarContext = createContext()

export const useSideBar = () => {
    return useContext(SidebarContext)
}

export const SidebarProvider = SidebarContext.Provider