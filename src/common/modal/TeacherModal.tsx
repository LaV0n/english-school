import styles from './TeacherModal.module.scss'
import {TeacherType} from "../../bll/schoolReducer";

type TeacherModalType = {
    teacher: TeacherType
}

export const TeacherModal = ({teacher}: TeacherModalType) => {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <img src={teacher.avatar} alt={'0'}/>
                <div className={styles.bio}>
                    <h3><span>name</span> {teacher.name}</h3>
                    <h4><span>age</span> {teacher.age}</h4>
                    <h4><span>experience</span> {teacher.experience}</h4>
                </div>
            </div>
            <div className={styles.description}>
                <h4>About me</h4>
                {teacher.description}
            </div>
        </div>
    )
}