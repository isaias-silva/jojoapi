import multer from "multer";

const storage = multer.diskStorage({
    filename: (req, file, cb) => {

        cb(null, req.body.name)
    },
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
})

const upload = multer({ storage });
export default upload

