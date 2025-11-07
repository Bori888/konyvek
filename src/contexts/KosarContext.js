import { createContext } from "react";
import { konyvLista } from "../adat";
import { useState } from "react";

export const KosarContext = createContext("")
export const Kosarprovider = ({ children }) => {
    const [kosarLista, setKosarLista] = useState([]);

    function kosarba(adatIndex) {
        const ujKosar = [...kosarLista];
        ujKosar.push(konyvLista[adatIndex]);
        setKosarLista(ujKosar);
    }

    return (
        <KosarContext.Provider value={{ konyvLista, kosarLista, kosarba }}>
            {children}
        </KosarContext.Provider>
    );
};
