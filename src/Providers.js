import React from "react"
import { AuthProvider } from "./providers/AuthProvider"
import Route from "./Route"

export default function Providers({}){
    return (
        <AuthProvider>
            <Route/>
        </AuthProvider>
    )
}