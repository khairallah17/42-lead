import { useContext } from "react";
import apiCallsContext from "@/context/apiCallsContext";

export default function UseApiCallHook() {
    
    const context = useContext(apiCallsContext)

    if (!context)
        throw new Error("error creating context")

    return context
}