
import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from 'react';
import initializeAuthentication from './../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProviider = new GoogleAuthProvider();

    // Google sing In system apply 

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProviider)
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
    }

    // fireBase ovbservser system

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }

        });

    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut,
    }

}
export default useFirebase;