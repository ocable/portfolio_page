import { Outlet } from "react-router-dom"
import NavbarV2 from "./NavbarV2"
import { ImageDevProvider } from "../context/ImageDevContext"

export default function RootV2() {
  return (
    <ImageDevProvider>
      <div className="min-h-screen bg-[#FAFAFA] text-[#111111] antialiased">
        <NavbarV2 />
        <Outlet />
      </div>
    </ImageDevProvider>
  )
}
