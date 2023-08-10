import React from 'react';
import UserHero from '../User Hero/UserHero';
import UserCliens from '../User Cliens/UserCliens';
import UserSkills from '../User Skills/UserSkills';
import UserCta from '../User Cta/UserCta';
import UserWhy from "../User Why/UserWhy";
import UserPricing from "../User Pricing/UserPricing";
import UserJoinletter from "../User Join/UserJoinletter";
import UserFooter from '../User Footer/UserFooter';
import UserHeader from '../User Header/UserHeader';
function UserHomes() {
    return (
        <React.Fragment>
            <UserHeader/>
            <UserHero />
            <UserCliens />
            <UserSkills />
            <UserCta />
            <UserWhy />
            <UserPricing />
            <UserJoinletter />
            <UserFooter/>
        </React.Fragment>
    );
}

export default UserHomes;