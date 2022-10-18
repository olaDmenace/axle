import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Membership/Login/Login'
import Register from './Membership/Register/Register'
import Verify from './Membership/Register/VerifyMail'
import ResetPassword from './Membership/UserRecovery/ResetPassword'
import CreatePassword from './Membership/UserRecovery/CreateNewPassword'
import Membership from './Membership/Membership'
import Dashboard from './dashboard/Dashboard'
import TruckVisibilityReport from './dashboard/dashboard/TruckVisibiltyReport'
import TruckProgramming from './dashboard/operations/TruckProgramming'
import Journeymanagement from './dashboard/operations/Journeymanagement'
import AssetRegister from './dashboard/operations/assetRegister/AssetRegister'



/* ***IMPORTANT NOTICE***
    This project is a React JS project buitl with Daisy UI Tailwind CSS UI component.
    Below is a list of routes and links on the app. 
*/


function App() {
  return (
    <div className="App">
      {/* <Reg /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Membership/>}>
            <Route path='' index element={<Login/>} />
            <Route path='register' element={<Register/>} />
            <Route path='verify' element={<Verify/>}/>
            <Route path='ResetPassword' element={<ResetPassword/>}/>
            <Route path='CreatePassword' element={<CreatePassword/>}/>
          </Route>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='' element={<TruckVisibilityReport/>}/>
            <Route path='TruckProgramming' element={<TruckProgramming/>} />
            <Route path='JourneyManagement' element={<Journeymanagement/>}/>
            <Route path='AssetRegister' element={<AssetRegister />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
