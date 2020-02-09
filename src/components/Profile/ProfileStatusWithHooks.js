import React, {useState, useEffect} from 'react';
import styles from "../../CSS/profileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
       setStatus(props.status);
    }, [props.status]);

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode (false);
        props.updateStatus(status);
    }
    return (
        <div className={styles.status}>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}><b>Статус:</b>{props.status || "------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;