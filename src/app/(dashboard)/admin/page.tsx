import UserCards from "@/components/UserCards"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/*LEFT*/ }
      <div className = "w-full lg:w-2/3">
        {/*USER CARDS*/ }
        <div className = "flex gap-4 justify-between flex-wrap">
          <UserCards type = "student"></UserCards>
          <UserCards type = "teacher"></UserCards>
          <UserCards type = "parent"></UserCards>
          <UserCards type = "staff"></UserCards>
        </div>
      </div>
        {/*RIGHT*/ }
        <div className ="w-full lg:w-1/3">r</div>
    </div>

  )
}

export default AdminPage