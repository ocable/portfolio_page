import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Background from "./Background";

export default function Root() {
  return (
    <>
      <main className="w-full dark:text-white">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
        <Outlet />
      </main>
    </>
  );
}
