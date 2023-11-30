"use client";
import { useEffect } from "react";

export default function Users() {
  useEffect(() => {
    alert("cargo!");
  }, []);

  return <div>Users</div>;
}
