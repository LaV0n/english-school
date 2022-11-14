import styles from './Blog.module.scss'
import {useAppSelector} from "../../bll/store";

export const Blog = ()=>{

    const blogs=useAppSelector(state => state.school.blogs)

    return (
        <div className={styles.container}>
            {blogs.map(b=>
            <div className={styles.blog} key={b.id}>
                <img src={b.img} alt={'0'}/>
                <div className={styles.block}>
                    <div className={styles.description}>
                        <h4>{b.header}</h4>
                        <p>{b.description}</p>
                    </div>
                    <div className={styles.date}>
                        {b.date.toDateString()}
                    </div>
                </div>

            </div>
            )}
        </div>
    )
}