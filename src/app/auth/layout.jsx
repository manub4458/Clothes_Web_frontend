// import { Button } from "../../@/components/ui/button"
import { SessionProvider } from "next-auth/react"
import SecondNav from "../component/SecondNav"
// import Footer from "../components/Footer"
// import Optional_navbar from "../components/Optional_navbar"


const AuthLayout = ({
    children
}) => {
  return (
  <SessionProvider>
      <div 
    // className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 h-[100vh]"
    className="h-[100vh]"
    >
        <SecondNav />
        
        {children}
        
        {/* <Button >
          Hello
        </Button> */}
        <div
        className="mt-24"
        >
          {/* <Footer /> */}
        </div>
    </div>
  </SessionProvider>
  )
}

export default AuthLayout

