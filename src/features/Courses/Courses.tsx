import styles from './Courses.module.scss'
import {useAppSelector} from "../../bll/store";

export const Courses = ()=>{

    const courser=useAppSelector(state => state.school.courses)

    return (
        <div className={styles.container}>
            <h2>
                What we have
            </h2>
            <div className={styles.block}>
                {courser.map(c=>
                <div className={styles.course} style={{backgroundImage:`url(${c.background})`}} key={c.name}>
                    <div className={styles.cover}>
                        <h3>
                            {c.name}
                        </h3>
                        <p>
                            {c.description}
                        </p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}