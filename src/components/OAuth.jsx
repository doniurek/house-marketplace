import { useLocation, useNavigate } from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import googleIcon from "../assets/svg/googleIcon.svg"

function OAuth() {
  const navigate = useNavigate()
  const location = useLocation()

  const onGoogleClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      // Check if the user already exists in firestore
      const docRef = doc(db, "users", user.uid) /* reference to the document */
      const docSnap = await getDoc(docRef) /* snapshot of the document */

      // If user does'n exist, create user
      if(!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })
      }
      navigate("/")
    } catch (error) {
      toast.error("Could not autorize with Google")
    }
  }
  
  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-up" ? "Up" : "In"} with </p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img className="socialIconImg" src={googleIcon} alt="google" />
      </button>
    </div>
  )
}
export default OAuth