import { Outlet, useNavigate } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"
import { SidebarProvider } from "@/components/ui/sidebar"
import RootSidebar from "@/components/RootSidebar"
import MobileRootNavbar from "@/components/MobileRootNavBar"
import { isTokenValid } from "@/utils/Helper/common"

const RootLayout = () => {
  const navigate = useNavigate()

  // useEffect(() => {
  //   checkToken()
  // }, [navigate])

  const checkToken = async () => {
    const token = localStorage.getItem("token")
    const tokenCheck = await isTokenValid(token)
    if (tokenCheck.success) {
      navigate("/dashboard")
    } else {
      navigate("/auth/login")
    }
  }

  return (
    <SidebarProvider>
      <div className="flex flex-col md:flex-row min-h-screen w-full">
        <MobileRootNavbar />
        <RootSidebar />
        <main className="flex-grow w-full">
          <div className="w-full">
            <Outlet />
          </div>
          <Toaster
            toastOptions={{
              style: {
                color: "#752ceb",
              },
              className: "z-[1000]",
            }}
            position="top-center"
          />
        </main>
      </div>
    </SidebarProvider>
  )
}

export default RootLayout