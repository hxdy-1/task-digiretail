import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
	const [searchValue, setSearchValue] = useState("");

	return (
		<AppContext.Provider value={{ searchValue, setSearchValue }}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
