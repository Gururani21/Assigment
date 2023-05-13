import {Outlet} from 'react-router-dom'
const Layout = () => {
  // add toaster here for error msgs
  return (
    <>
      <div className="bg-[#D8D8D8] min-h-screen w-full">
        <Outlet />
      </div>
    </>
  )
}
export default Layout
