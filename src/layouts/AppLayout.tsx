import { Link, Navigate, Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Logo from "@/components/Logo"
import NavMenu from "@/components/NavMenu"
import { useAuth } from "@/hooks/useAuth"

export default function AppLayout() {

  const { data, isError, isLoading } = useAuth()

  if (isLoading) return 'Loading...'

  if (isError) {
    return <Navigate to={'/auth/login'} />
  }

  if (data) return (
    <>
      <header className="bg-gray-900 py-5 px-3">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-2">
          <div className="w-52 md:w-64">
            <Link to={'/'}>
              <Logo />
            </Link>
          </div>

          <NavMenu
            userName={data.name}
          />
        </div>
      </header>

      <section className="max-w-screen-xl mx-auto mt-10 p-5">
        <Outlet />
      </section>

      <footer className="py-5">
        <p className="text-center">
          &copy; All rights reserved 2024 - {new Date().getFullYear()}
        </p>
      </footer>

      <ToastContainer
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </>
  )
}
