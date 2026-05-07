import { Outlet } from "react-router-dom"
import NavbarV2 from "./NavbarV2"

export default function RootV2() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] antialiased">
      <NavbarV2 />
      <Outlet />
    </div>
  )
}
