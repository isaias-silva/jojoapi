import multer from "multer";

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        const [name, mime] = file.originalname.split('.')
        console.log(name)
        cb(null, `${name}.${mime}`)
    },
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
})

const upload = multer({ storage });
export default upload

