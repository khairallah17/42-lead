"use client"
import { useQuery } from 'react-query'
import UserRow from '@/components/userRow'
import UseApiCallHook from '@/hooks/apiCallHook'
import { useEffect } from 'react'
import { LoadingSkeleton } from './loadingScreen'

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

    if (isLoading) return <LoadingSkeleton/>

    return (
        <div className='flex flex-col w-full gap-3'>
            {
                data?.map((user, index) => (
                    index == 2 ? (
                        <>
                            <UserRow key={user.user.id} user={user} index={index} />
                            <div className='bg-slate-200 bg-opacity-50 h-[1px] w-full'></div>
                        </>
                    ) : (
                        <UserRow key={user.user.id} user={user} index={index} />
                    )
                ))
            }
        </div>
    )
}

export default UserList