import UserList from "@/components/ usersList"
import SearchInput from "@/components/searchInput"

const Page = () => {

  return (
    <div className='my-10 flex flex-col w-full gap-12'>
        <SearchInput/>
        <UserList/>
    </div>
  )
}

export default Page