import UserList from "@/components/ usersList"
import SearchInput from "@/components/searchInput"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import Logo42 from "@/components/svg42"

const Page = () => {

  return (
    <div className="h-full flex flex-col justify-center items-center p-1 ">
        <Card className='my-10 flex w-1/2 h-1/2 px-5 pb-5 flex-col overflow-y-scroll bg-transparent pr-[17px] box-content hide rounded-3xl relative'>
          <div className="bg-themed-bg sticky top-0 py-5 z-[99]">
            <Header/>
            <SearchInput/>
          </div>
          <UserList/>
        </Card>
    </div>
  )
}

export default Page