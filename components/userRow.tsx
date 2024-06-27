import React, { useState } from 'react'
import { TUser } from '@/types/index'
import { Card } from './ui/card'
import Image from 'next/image'
import { Progress } from './ui/progress'
import { Badge } from './ui/badge'
import UseApiCallHook from '@/hooks/apiCallHook'
import axios from 'axios'
import { Eye } from 'lucide-react'

interface IUserRow {
    user: TUser,
    index: number
}

const UserRow = ({ user, index }: IUserRow) => {

    const [poolUser, setPoolUser] = useState<TUser>({
        level: 0,
        redundant: true,
        user: {
            id: "",
            login: "",
            displayname: "",
            image: {
                versions: {
                    large: ""
                }
            }
        }
    })
    const [clicked, setClicked] = useState<boolean>(false)

    const getUserById = async (id: string) => {

        if (clicked) {
            setPoolUser({
                level: 0,
                redundant: true,
                user: {
                    id: "",
                    login: "",
                    displayname: "",
                    image: {
                        versions: {
                            large: ""
                        }
                    }
                }
            })
            return setClicked(false)
        } else {
            setClicked(true)
        }

        try {

            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v2/users/${id}`, {
                headers: {
                    Authorization: `Bearer 0ea65be95663dd238aa98f2391bfd10391ddb4420ecee0736ccf71e0916a1b01`
                }
            })

            const t = {
                level: data.cursus_users[0].level,
                redundant: true,
                user: {
                    id: data.id,
                    login: data.login,
                    displayname: data.usual_full_name,
                    image: {
                        versions: {
                            large: data.image.versions.large
                        }
                    }
                }
            }

            setPoolUser(t)
            console.log(data)

            return data

        } catch(error: Error | any) {
            console.log("🚀 ~ getUserById ~ error:", error.message)
        }

    }

    const image = ["/first.png","/second.png","/third.png"]

    return (
    <div
        className={`p-5 flex items-center gap-6 hover:bg-[#343A46] duration-200 rounded-xl`}
    >
        <div className='w-1/12 flex items-center content-center flex-col'>
            {
                image[index] ? (
                    <Image
                        height={60}
                        width={60}
                        alt=''
                        className=''
                        src={image[index]}
                    />
                ) : (
                    <p className='text-white text-center'>{index + 1}</p>  
                )
            }
        </div>
        <Image
            src={ poolUser.user.image.versions.large || user.user.image.versions.large ||  "/jeffy.png"}
            alt=''
            width={64}
            height={64}
            className='rounded-full aspect-square'
        />
        <div className='w-full space-y-1'>
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-xl font-semibold capitalize text-white'>{user.user.displayname}</h1>
                {
                    user.redundant && <Badge className={"cursor-pointer space-x-1"} onClick={() => getUserById(user.user.login.replace(user.user.login[1], ""))} >
                        <p>{clicked ? "second" : "first"} pool data</p>
                        <Eye size={14} />
                        </Badge>
                }
            </div>
            <p className='text-white'>{ poolUser.user.login || user.user.login}</p>
            <div className='relative'>
                <Progress value={((poolUser.level % 1) * 100) || ((user.level % 1) * 100)} color={"#ef233c"} className='h-[22px]' />
                <p className={`absolute top-1 left-[45%] ${(((poolUser.level % 1) * 100) || ((user.level % 1) * 100)) > 50 ? "text-white" : ""} text-xs z-50`}>{ poolUser.level || user.level.toFixed(2)}</p>
            </div>
        </div>
    </div>
  )
}

export default UserRow