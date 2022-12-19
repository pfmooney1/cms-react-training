import { useState } from "react";

function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		if (typeof window === "undefined") {
			return initialValue;
		}
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});
	const setValue = (value) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			if (typeof window !== "undefined") {
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
			}
		} catch (error) {
			console.log(error);
		}
	};
	function addValue(value) {
		let oGArray = [...storedValue];
		if (oGArray.length >= 10) return;
		oGArray.push(value);
		setValue(oGArray);
		if (typeof window !== "undefined") {
			window.localStorage.setItem(key, JSON.stringify(oGArray));
		}
	};
	function clearStorage() {
		setStoredValue([]);
		if (typeof window !== "undefined") {
			window.localStorage.removeItem(key);
		}
	};
	return [storedValue, setValue, addValue, clearStorage];
}
export default useLocalStorage;