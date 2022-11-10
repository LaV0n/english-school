import styles from './Main.module.scss'
import background from '../../assets/image/16_jul_-_learn_new_language.jpg'
import {Button} from "@mui/material";
import {useAppDispatch} from "../../bll/store";
import {Field, Form, Formik,} from 'formik';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import {setUserData, UserType} from "../../bll/schoolReducer";

export const Main = () => {

    const dispatch = useAppDispatch()

    const submitHandler = (values: UserType) => {
        dispatch(setUserData({user:values}))
        console.log(values)
        alert('Request has been sent')
    }

    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <img src={background} alt={'0'}/>
                <div className={styles.about}>
                    <h2>
                        What is Lorem Ipsum?
                    </h2>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className={styles.form}>
                    <h3>
                        sign up for a free consultation
                    </h3>
                    <Formik
                        initialValues={{
                            email: '',
                            telephone: ''
                        }}
                        onSubmit={(
                            values: UserType,
                            {resetForm}
                        ) => {
                            submitHandler(values)
                            resetForm()
                        }}
                    >
                        <Form>
                            <Field
                                id="email"
                                name="email"
                                placeholder="email"
                                type="email"
                            />
                            <Field
                                id="telephone"
                                name="telephone"
                                placeholder="telephone"
                                type="telephone"
                            />

                            <Button type="submit" color={'success'} variant={'contained'}>Submit</Button>
                        </Form>
                    </Formik>
                </div>
            </div>
            <div className={styles.title}>
                <h2>
                    Where does it come from?
                </h2>
                <h3>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </h3>
            </div>
            <div className={styles.problemBlock}>
                <div className={styles.item}>
                    <div>
                        <h3>
                            Why do we use it?
                        </h3>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English.
                        </p>
                    </div>
                    <CastForEducationIcon fontSize={'large'}/>
                </div>
                <div className={styles.item}>
                    <div>
                        <h3>
                            Why do we use it?
                        </h3>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English.
                        </p>
                    </div>
                    <FlightTakeoffIcon fontSize={'large'}/>
                </div>
                <div className={styles.item}>
                    <div>
                        <h3>
                            Why do we use it?
                        </h3>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English.
                        </p>
                    </div>
                    <EngineeringIcon fontSize={'large'}/>
                </div>
                <div className={styles.item}>
                    <div>
                        <h3>
                            Why do we use it?
                        </h3>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English.
                        </p>
                    </div>
                    <HourglassTopIcon fontSize={'large'}/>
                </div>
            </div>

        </div>
    )
}