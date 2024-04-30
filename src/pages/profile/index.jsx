import React from 'react'
import ProfilePageContent from './components/ProfilePageContent'
import ProfilePageRight from './components/ProfilePageRight'
import ProfileSidebar from './components/ProfileSidebar'

function ProfilePage() {
  return (
    <div className='profile-page'>
      <div className="container">
        <div className="profile-page__wrapper">
           <ProfileSidebar/>
           <ProfilePageContent/>
           <ProfilePageRight/>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage