import styles from './PostModal.module.scss'
import {Field, Form, Formik} from "formik";
import {Button} from "@mui/material";
import {BlogType, createNewPost} from "../../../bll/schoolReducer";
import {useAppDispatch} from "../../../bll/store";

type PostModalType={
    onClose:()=>void
}

export const PostModal = ({onClose}:PostModalType) => {

    const dispatch=useAppDispatch()

    const submitHandler = (values: BlogType) => {
        dispatch(createNewPost({post:values}))
        console.log(values)
        alert('new post has been created')
        onClose()
    }

    return (
        <div className={styles.container}>
            <Formik
                initialValues={{
                    id:new Date().getTime(),
                    date:new Date(),
                    img: '',
                    header: '',
                    description:''
                }}
                onSubmit={(
                    values: BlogType,
                    {resetForm}
                ) => {
                    submitHandler(values)
                    resetForm()
                }}
            >
                <Form>
                    <Field
                        id="header"
                        name="header"
                        placeholder="header"
                    />
                    <Field
                        id="description"
                        name="description"
                        placeholder="description"
                    />
                    <Field
                        id="img"
                        name="img"
                        placeholder="img url"
                    />

                    <Button type="submit" color={'success'} variant={'contained'}>Add Post</Button>
                </Form>
            </Formik>
        </div>
    )
}