import styles from './Price.module.scss'
import {useAppSelector} from "../../bll/store";

export const Price = ()=>{

    const courses=useAppSelector(state => state.school.courses)

    return (
        <div className={styles.container}>
            <h2>
                Our courses
            </h2>
            <h4>
                Choose that you want
            </h4>
            <div className={styles.block}>
                {courses.map(c=>
                <div className={styles.course} key={c.name}>
                    <h3>
                        {c.name}
                    </h3>
                    <p>
                        {c.description}
                    </p>
                    <p> Price from
                        <span>
                            {c.price}
                        </span>
                     per mouth</p>
                </div>
                )}
            </div>
        </div>
    )
}