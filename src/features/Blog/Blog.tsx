import styles from './Blog.module.scss'
import {useAppDispatch, useAppSelector} from "../../bll/store";
import CloseIcon from "@mui/icons-material/Close";
import {Alert, Box, Button, Modal, Snackbar} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useState} from "react";
import {PostModal} from "../../common/modal/PostModal/PostModal";
import {deletePost} from "../../bll/schoolReducer";

export const Blog = ()=>{

    const blogs=useAppSelector(state => state.school.blogs)
    const isAdmin=useAppSelector(state => state.school.isAdmin)
    const [open, setOpen] = useState(false);
    const dispatch=useAppDispatch()

    const [openSnackbar,setOpenSnackbar]=useState(false)

    const handleCloseSnackbar=()=>{
        setOpenSnackbar(false)
    }

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const deletePostHandler=(id:number)=>{
        dispatch(deletePost({id}))
    }

    return (
        <div className={styles.container}>
            {isAdmin &&
                <div className={styles.addPost}>
                    Add new Post
                <Button color={'inherit'} onClick={handleOpen}><AddCircleOutlineIcon fontSize={'large'}/></Button>
                </div>
            }
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
                {isAdmin &&
                    <Button color={'inherit'} onClick={()=>deletePostHandler(b.id)}><CloseIcon/></Button>
                }
            </div>
            )}
            <Modal
                open={open}
                onClose={handleClose}
            ><Box className={styles.box}>
                <PostModal  onClose={handleClose} setOpenSnackbar={setOpenSnackbar}/>
            </Box>
            </Modal>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" variant="filled">
                    New post has been created!
                </Alert>
            </Snackbar>
        </div>
    )
}