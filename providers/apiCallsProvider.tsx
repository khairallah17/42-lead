import apiCallsContext from "@/context/apiCallsContext";
import React, { useState } from "react";
import axios from "axios";
import { TUser } from "@/types/index";

export default function ApiCallsProvider( {children}: any) {

    const [searchQuery, setSearchQuery] = useState<string>("")
    const [user, setUser] = useState<TUser>({} as TUser)

    const getUsers = async () => {
        
        try {

            const { data } = await axios.get(`${process.env.API_URL}v2/cursus/9/cursus_users?filter[campus_id]=16&page[size]=100&filter[end_at]=2024-07-20T08:37:00.000Z&sort[level]=desc`, {
                headers: {
                    Authorization: `Bearer 54738de6ef016ca2d3c86c10787f7f78034f124513816f74543b0e92392b8da1`
                }
            })

            return data

        } catch (error) {
            console.log("🚀 ~ getUsers ~ error:", error)
        }

    }

    const getUserById = async (id: string) => {

        try {

            const { data } = await axios.get(`${process.env.API_URL}v2/users/${id}`, {
                headers: {
                    Authorization: `Bearer 54738de6ef016ca2d3c86c10787f7f78034f124513816f74543b0e92392b8da1`
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