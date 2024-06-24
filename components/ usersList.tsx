"use client"
import { useQuery } from 'react-query'
import UserRow from '@/components/userRow'
import UseApiCallHook from '@/hooks/apiCallHook'
import { useEffect } from 'react'

export type TUser = {
    level: number,
    user: {
        id: string,
        login: string,
        displayname: string,
        image: {
            versions: {
                large: string
            }
        }  
    }
}

const UserList = () => {

    const { getUsers } = UseApiCallHook()

    const { data, isLoading, error, refetch } = useQuery<TUser[]>({
        queryKey: ["users"],
        queryFn: getUsers,
        enabled: false
    })

    useEffect(() => {
        refetch()
    }, [refetch])

    if (isLoading) return <div>Loading...</div>

    return (
        <div className='flex flex-col w-full gap-12'>
            {
                data?.map((user) => (
                    <UserRow key={user.user.id} user={user} />
                ))
            }
        </div>
    )
}

export default UserList