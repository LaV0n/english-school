import styles from './Footer.module.scss'
import SchoolIcon from '@mui/icons-material/School';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link} from "@mui/material";
import { useNavigate} from "react-router-dom";

export const Footer = () => {

    let navigate = useNavigate();
    const onDoubleClickHandler=()=>{
       navigate('/login')
    }

    return (
        <div className={styles.container}>
            <div className={styles.iconPanel}>
                <SchoolIcon fontSize={'large'} onDoubleClick={onDoubleClickHandler}/>
                <div>
                    <Link href={'#'} color={'inherit'}>
                        <FacebookIcon/>
                    </Link>
                    <Link href={'#'} color={'inherit'}>
                        <TelegramIcon/>
                    </Link>
                    <Link href={'#'} color={'inherit'}>
                        <YouTubeIcon/>
                    </Link>
                    <Link href={'#'} color={'inherit'}>
                        <InstagramIcon/>
                    </Link>
                </div>
            </div>
            <div className={styles.linkPanel}>
                <div className={styles.linkColum}>
                    <a href={'#'} style={{color:'yellowgreen'}}>Send request</a>
                    <a href={'#'}>Document</a>
                    <a href={'#'}>Document</a>
                    <a href={'#'}>Document</a>
                </div>
                <div className={styles.linkColum}>
                    <a href={'/'}>About Us</a>
                    <a href={'/courses'}>Courses</a>
                    <a href={'/price'}>Price</a>
                    <a href={'/teachers'}>Teachers</a>
                </div>
                <div className={styles.linkColum}>
                    <a href={'/testing'}>Testing</a>
                    <a href={'/blog'}>Blog</a>

                </div>
                <div className={styles.linkColum}>
                    <div>Call Us</div>
                    <div>+12 34 567 890 123</div>
                    <div>+12 34 567 890 123</div>
                    <a href={'#'}>skype</a>
                    <a href={'#'}>telegram</a>
                </div>
            </div>
        </div>
    )
}