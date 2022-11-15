import styles from './PostModal.module.scss'
import { useFormik} from "formik";
import {Alert, Button} from "@mui/material";
import {BlogType, createNewPost} from "../../../bll/schoolReducer";
import {useAppDispatch} from "../../../bll/store";

type PostModalType = {
    onClose: () => void
    setOpenSnackbar: (value: boolean) => void
}
type FormikErrorsType = { img?: string, header?: string, description?: string }

export const PostModal = ({onClose, setOpenSnackbar}: PostModalType) => {

    const dispatch = useAppDispatch()


    const submitHandler = (values: BlogType) => {
        dispatch(createNewPost({post: values}))
        setOpenSnackbar(true)
        onClose()
    }

    const formik = useFormik({
        initialValues: {
            id: new Date().getTime(),
            date: new Date(),
            img: '',
            header: '',
            description: ''
        },
        onSubmit: (
            values: BlogType,
            {resetForm}
        ) => {
            submitHandler(values)
            resetForm()
        },
        validate: (values)=>{
            const errors = {} as FormikErrorsType;
            if (!values.img) {
                errors.img = "Required";
            } else if ((typeof values.img) !== "string") {
                errors.img = "Invalid image url";
            }
            if (!values.header) {
                errors.header = "Required";
            } else if (values.header.length < 5) {
                errors.header = "Header must be 5 characters long";
            }
            if (!values.description) {
                errors.description = "Required";
            } else if (values.description.length < 10) {
                errors.description = "Description must be 10 characters long";
            }
            return errors;
        }

    })

    return (
        <div className={styles.container}>

                <form onSubmit={formik.handleSubmit}>
                    <input
                        id="header"
                        name="header"
                        placeholder="header"
                        value={formik.values.header}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.header && formik.touched.header &&
                        <Alert variant="filled" severity="error">
                            {formik.errors.header}
                        </Alert>
                    }
                    <input
                        id="description"
                        name="description"
                        placeholder="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.description && formik.touched.description &&
                        <Alert variant="filled" severity="error">
                            {formik.errors.description}
                        </Alert>
                    }
                    <input
                        id="img"
                        name="img"
                        placeholder="img url"
                        value={formik.values.img}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.img && formik.touched.img &&
                        <Alert variant="filled" severity="error">
                            {formik.errors.img}
                        </Alert>
                    }
                    <Button type="submit" color={'success'} variant={'contained'}>Add Post</Button>
                </form>

        </div>
    )
}