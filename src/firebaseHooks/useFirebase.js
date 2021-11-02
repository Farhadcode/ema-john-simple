
import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getIdToken } from "firebase/auth";
import { useEffect } from 'react';
import initializeAuthentication from './../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [loading, setLoaging] = useState(true);

    const auth = getAuth();
    const googleProviider = new GoogleAuthProvider();

    // Google sing In system apply 

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProviider)

            .finally(() => { setLoaging(false) });
        // .then(result => {
        //     const user = result.user;
        //     console.log(user);
        // })

    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setLoaging(false))
    }

    //e obsere system whene user auth state changed or not

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem("idToken", idToken));
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoaging(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut,
        loading
    }

}
export default useFirebase;