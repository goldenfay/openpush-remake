import React from "react";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import withWidth,{ isWidthUp } from '@material-ui/core/withWidth';

// Pages

import {MyWallet as WalletPage,FortuneWheel as WheelPage} from './pages/wallet/';
import {DesktopLayout,MobileLayout} from './pages/profile/';
const Main=React.lazy(()=>import('./pages/main/') );
const MainPage=React.lazy(()=>import('./pages/main/main') );
const BuyProduct=React.lazy(()=>import('./pages/buy/'));
const ProdileMainMobile=React.lazy(()=>import('./pages/profile/small/Main') );
const EditProfile=React.lazy(()=>import('./pages/profile/EditProfile') );
const UpgradeLevel=React.lazy(()=>import('./pages/profile/UpgradeLevel') );
const SocialConnection=React.lazy(()=>import('./pages/profile/SocialConnection') );
const Achievements=React.lazy(()=>import('./pages/profile/Achievement') );
const Settings=React.lazy(()=>import('./pages/profile/Settings') );
const FAQ=React.lazy(()=>import('./pages/FAQ') );

export default withWidth()(function router(props) {

    const isLargeDevice=isWidthUp('lg',props.width);

    return (
      <React.Suspense fallback={<></>}>
      <Router>
      <Routes>
      
        {/* <Route path='/' element={<Main /> } /> */}
        <Route path="/"   element={<Main {...props}/>}>
         
          <Route path="" element={<MainPage {...props}  />} />
          <Route path="wallet" element={<WalletPage {...props} />} />
          <Route path="wheel" element={<WheelPage {...props} />} />
          <Route path="buy/step1" element={<BuyProduct {...props} />} />
          <Route path="faq" element={<FAQ  {...props}/>} />
          <Route path="profile" element={isLargeDevice ? <DesktopLayout {...props} />: <MobileLayout {...props}/> } >
            <Route path="" element={isLargeDevice ? <EditProfile/>: <ProdileMainMobile {...props}/> } />
            <Route path="edit" element={<EditProfile currentPage={0}{...props }/>} />
            <Route path="achievements" element={<Achievements currentPage={1} {...props }/>} />
            <Route path="upgrade" element={<UpgradeLevel currentPage={2} {...props }/>} />
            <Route path="social" element={<SocialConnection currentPage={3}  {...props}/>} />
            <Route path="settings" element={<Settings currentPage={4}  {...props}/>} />
          </Route>
          
        </Route>
        
       
      </Routes>
    </Router>
    </React.Suspense>
    )
  })