import { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
	const [LoginInfo, setLoginInfo] = useState({ displayName: '', uid: '' });

	return <GlobalProvider.Provider value={{ LoginInfo, setLoginInfo }}>{children}</GlobalProvider.Provider>;
}

export function useGlobalData() {
	const globalContext = useContext(GlobalContext);
	if (!globalContext) throw new Error('useGlobalData hook은 GlobalProvider 컴포넌트 안쪽에서만 호출할 수 있습니다.');
}
