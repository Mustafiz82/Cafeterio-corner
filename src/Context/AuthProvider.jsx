import { createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { app } from "../../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const SignUpUser = (email, pass) => {
		return createUserWithEmailAndPassword(auth, email, pass);
	};

	const SignIN = (email, pass) => {
		return signInWithEmailAndPassword(auth, email, pass);
	};

	const googleSignIn = () => {
		return signInWithPopup(auth, provider);
	};

	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
			// Set loading to false in both cases
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authObj = {
		user,
		SignIN,
		googleSignIn,
		SignUpUser,
		logOut,
		loading,
	};

	return (
		<AuthContext.Provider value={authObj}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
