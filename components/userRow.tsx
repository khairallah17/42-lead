import React from 'react'
import { TUser } from '@/types/index'
import { Card } from './ui/card'
import Image from 'next/image'
import { Progress } from './ui/progress'

interface IUserRow {
    user: TUser
}

const UserRow = ({ user }: IUserRow) => {

    return (
    <Card
        className='p-5 flex items-center gap-6'
    >
        <Image
            src={ user.user.image.versions.large ||  "/jeffy.png"}
            alt=''
            width={64}
            height={64}
            className='rounded-full aspect-square'
        />
        <div className='w-full'>
            <h1 className='text-xl font-semibold text-themed-secondary'>{user.user.displayname}</h1>
            <p className=''>{user.user.login}</p>
            <div className='relative'>
                <Progress value={user.level} color={"#ef233c"} className='h-[22px]' />
                <p className='absolute top-1 left-1/2 text-themed-secondary text-xs z-50'>{user.level}</p>
            </div>
        </div>
    </Card>
  )
}

export default UserRow