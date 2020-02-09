import React, {useState} from 'react';
import styles from '../../CSS/profileInfo.module.css';
import Preloader from "../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../assets/images/user_image.png';
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = (props, {saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if(!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
       if(e.target.files.length){
           props.savePhoto(e.target.files[0]);
       }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        });
    }

    return (
        <div>
            <div className={styles.profileG}>
                <img src={props.profile.photos.large || userPhoto} className={styles.mainPhoto}/>
                {props.isOwner && <input className={styles.loadImage} type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                {editMode ? <ProfileDataFormReduxForm initialValues={props.profile} {...props} onSubmit={onSubmit}/> : <ProfileData {...props} goToEditMode={() => {setEditMode(true)}}/>}
            </div>
        </div>
    )
};

const ProfileData = (props) => {
    return <div className={styles.profileDataG}>
        {props.isOwner && <div className={styles.profileData}><button onClick={props.goToEditMode}>редактировать</button></div>}
        <div className={styles.profileData}>
            <b>Имя:</b>{props.profile.fullName}
        </div>
        <div className={styles.profileData}>
            <b>Ищу работу:</b>{props.profile.lookingForAJob ? "да" : "нет"}
        </div>
        {props.profile.lookingForAJob &&
        <div className={styles.profileData}>
            <b>Мои навыки:</b>{props.profile.lookingForAJobDescription}
        </div>
        }
        <div className={styles.profileData}>
            <b>Обо мне:</b>{props.profile.aboutMe}
        </div>
        <div className={styles.profileData}>
            <b>Контакты:</b> {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div>
        <b>{contactTitle}:</b>{contactValue}
    </div>
}

export default ProfileInfo;