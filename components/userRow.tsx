import React from 'react'
import { TUser } from '@/types/index'
import { Card } from './ui/card'
import Image from 'next/image'
import { Progress } from './ui/progress'
import { Badge } from './ui/badge'

interface IUserRow {
    user: TUser,
    index: number
}

const UserRow = ({ user, index }: IUserRow) => {

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
            src={ user.user.image.versions.large ||  "/jeffy.png"}
            alt=''
            width={64}
            height={64}
            className='rounded-full aspect-square'
        />
        <div className='w-full space-y-1'>
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-xl font-semibold capitalize text-white'>{user.user.displayname}</h1>
                {
                    user.redundant && <Badge>second pool</Badge>
                }
            </div>
            <p className='text-white'>{user.user.login}</p>
            <div className='relative'>
                <Progress value={((user.level % 1) * 100)} color={"#ef233c"} className='h-[22px]' />
                <p className={`absolute top-1 left-[45%] ${(user.level % 1 * 100) > 50 ? "text-white" : ""} text-xs z-50`}>{user.level.toFixed(2)}</p>
            </div>
        </div>
    </div>
  )
}

export default UserRow