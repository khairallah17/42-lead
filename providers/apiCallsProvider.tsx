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

            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v2/cursus/9/cursus_users?filter[campus_id]=16&filter[end_at]=2024-07-20T08:37:00.000Z&sort=-level`, {
                headers: {
                    Authorization: `Bearer 0ea65be95663dd238aa98f2391bfd10391ddb4420ecee0736ccf71e0916a1b01`
                }
            })

            console.log(data)

            redundantPooler(data)

            return data

        } catch (error: Error | any) {
            console.log("🚀 ~ getUsers ~ error:", error.message)
        }

    }

    const getUserById = async (id: string) => {

        try {

            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v2/users/${id}`, {
                headers: {
                    Authorization: `Bearer 0ea65be95663dd238aa98f2391bfd10391ddb4420ecee0736ccf71e0916a1b01`
                }
            })

            console.log(data)

            return data

        } catch(error: Error | any) {
            console.log("🚀 ~ getUserById ~ error:", error.message)
        }

    }

    const redundantPooler = (users: TUser[]) => {

        const res = users.filter(item => {
            if (item.user.login.slice(0, 2) == item.user.displayname.slice(0, 2).toLocaleLowerCase())
                item.redundant = true
            else
                item.redundant = false
        })
    }

    const values = {
        getUsers,
        searchQuery, setSearchQuery,
        getUserById,
        user, setUser,
        redundantPooler
    }

    return (
        <apiCallsContext.Provider value={values}>
            {children}
        </apiCallsContext.Provider>
    )

}