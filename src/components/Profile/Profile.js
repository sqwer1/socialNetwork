import React from 'react';
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const Profile = (props) => (
    <div>
        <ProfileInfo
            savePhoto={props.savePhoto}
            isOwner={props.isOwner}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            saveProfile={props.saveProfile}
        />
        <MyPosts/>
    </div>
);

export default Profile;