import React from 'react';

import LayoutSider1 from '../components/LayoutSider1'; 
import LayoutHeader1 from '../components/LayoutHeader1'; 
import { Outlet } from 'react-router-dom';


import {
LandingPage,
Content, Body,
Sider,
Header,
} from './styles';

const LandingPagePage = () => {









return (
        <LandingPage>
<Sider>
    <LayoutSider1 />
</Sider>
<Body>
<Header>
    <LayoutHeader1 />
</Header>
<Content>
<Outlet/>
</Content>
</Body>
</LandingPage>

    )

}

export default LandingPagePage
