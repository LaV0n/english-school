import styles from './Header.module.scss'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TelegramIcon from '@mui/icons-material/Telegram';
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../bll/store";
import SchoolIcon from '@mui/icons-material/School';

export const Header = () => {

    const isAdmin=useAppSelector(state => state.school.isAdmin)

    return (
        <div className={styles.container}>
            <div className={styles.infoBlock}>
                <div className={styles.logo}>
                   <SchoolIcon fontSize={'large'}/>
                    <div className={styles.logoText}>
                        English language school
                    </div>
                </div>
                <div>
                    <div className={styles.contact}>
                        <LocalPhoneIcon/>
                        <div>+12 34 567 890 123</div>
                    </div>
                    <div className={styles.contact}>
                        <LocalPhoneIcon/>
                        <div>+12 34 567 890 123</div>
                    </div>
                    <div className={styles.contact}>
                        <LocationOnIcon/>
                        <div>Warsaw, Piwna 8</div>
                    </div>
                    <div className={styles.contact}>
                        <TelegramIcon/>
                        <div>@user</div>
                    </div>
                </div>
            </div>
            <div className={styles.navBar}>
                <NavLink to={'/'} className={({isActive})=> isActive?styles.navLinkActive:styles.navLink} >About Us</NavLink>
                <NavLink to={'/courses'} className={({isActive})=> isActive?styles.navLinkActive:styles.navLink}>Courses</NavLink>
                <NavLink to={'/price'} className={({isActive})=> isActive?styles.navLinkActive:styles.navLink}>Price</NavLink>
                <NavLink to={'/teachers'} className={({isActive})=> isActive?styles.navLinkActive:styles.navLink}>Teachers</NavLink>
                <NavLink to={'/testing'} className={({isActive})=> isActive?styles.navLinkActive:styles.navLink}>Testing</NavLink>
                 <NavLink to={'/blog'} className={({isActive})=> isActive?styles.navLinkActive:styles.navLink}>Blog</NavLink>
                {isAdmin && <NavLink to={'/admin'} className={({isActive})=> isActive?styles.navLinkActive:styles.navLink}>Admin</NavLink>}
            </div>
        </div>
    )
}