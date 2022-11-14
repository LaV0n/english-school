import styles from './Teachers.module.scss'
import {useAppSelector} from "../../bll/store";
import {Carousel} from '@trendyol-js/react-carousel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import {Box, Button, Modal } from '@mui/material';
import {TeacherModal} from "../../common/modal/TeacherModal";
import {TeacherType} from "../../bll/schoolReducer";

export const Teachers = () => {

    const teachers = useAppSelector(state => state.school.teachers)
    const [open, setOpen] = useState(false);
    const [selectedTeacher,setSelectedTeacher]=useState<TeacherType>(teachers[0])

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.container}>
            <h2>
                Our teachers
            </h2>
            <div className={styles.block}>
                <Carousel show={2.5}
                          slide={1}
                          transition={0.5}
                          useArrowKeys={true}
                          rightArrow={<NavigateNextIcon/>}
                              leftArrow={<ArrowBackIosNewIcon/>}
                          className={styles.carousel}
             >
                    {teachers.map((t, index) =>
                                <div className={styles.teacher} key={index}
                                     onClick={() => {
                                    setOpen(true);
                                    setSelectedTeacher(t)}}>
                                    <img src={t.avatar} alt={'0'}/>
                                    <h3>
                                        {t.name}
                                    </h3>
                                    <div>
                                        "{t.slogan}"
                                    </div>
                                    <Button >Read more</Button>
                                </div>
                    )}
                </Carousel>
                <Modal
                    open={open}
                    onClose={handleClose}

                ><Box className={styles.box}>
                    <TeacherModal teacher={selectedTeacher}/>
                </Box>
                </Modal>
            </div>
        </div>
    )
}