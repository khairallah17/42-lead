import apiCallsContext from "@/context/apiCallsContext";
import React, { useState } from "react";
import axios from "axios";
import { TUser } from "@/types/index";

export default function ApiCallsProvider( {children}: any) {

    const [searchQuery, setSearchQuery] = useState<string>("")
    const [user, setUser] = useState<TUser>({} as TUser)

    const getUsers = async () => {
        
        try {

            console.log(process.env.NEXT_PUBLIC_API_URL)

            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}v2/cursus/9/cursus_users?filter[campus_id]=16&filter[end_at]=2024-07-20T08:37:00.000Z&sort=-level`, {
                headers: {
                    Authorization: `Bearer ee118d4088001c001895f1ccaf6d32ff968bb7f074a1d91650b7604b249eea67`
                }
            })

            return data

        } catch (error) {
            console.log("🚀 ~ getUsers ~ error:", error)
        }

    }

    const getUserById = async (id: string) => {

        try {

            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}v2/users/${id}`, {
                headers: {
                    Authorization: `Bearer ee118d4088001c001895f1ccaf6d32ff968bb7f074a1d91650b7604b249eea67`
                }
            })

            return data

        } catch(error) {
            console.log("🚀 ~ getUserById ~ error:", error)
        }

    }

    const values = {
        getUsers,
        searchQuery, setSearchQuery,
        getUserById,
        user, setUser
    }

    return (
        <apiCallsContext.Provider value={values}>
            {children}
        </apiCallsContext.Provider>
    )

}