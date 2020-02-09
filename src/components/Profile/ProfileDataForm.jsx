import React from "react";
import {createField, Input, Textarea} from "../Common/FormControl/FormControl";
import {reduxForm} from "redux-form";
import styles from "../Common/FormControl/FormControl.module.css";

const ProfileDataForm = ({handleSubmit, error, ...props}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>сохранить</button></div>
        {error &&
        <div className={styles.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>Имя:</b>{createField("Имя", "fullName", [], Input)}
        </div>
        <div>
            <b>Ищу работу:</b>{createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>Мои навыки:</b>{createField("Мои навыки", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
            <b>Обо мне:</b>{createField("Расскажи о себе", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Контакты:</b> {Object.keys(props.profile.contacts).map(key => {
            return <div key={key}>
                <b>{key}:{createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;