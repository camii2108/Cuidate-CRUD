const multer = require('multer');/* que sea fácil manipular este multipart/form-data cuando tus usuarios suben archivos */
const path = require('path');
/* esta coonstante va aa guardar lo que me devuelva el motodo diskStorage */
/* destination: una fucnon callback con 3 parametro que me ejecuta, que mme lleve a la ruta donde estan las imagenes o la ejecucion de donde estan la imagenes  */
const storeImageProduct = multer.diskStorage({
    destination : function (req,file, callback) {
        callback(null, 'public/images' )/* Hago un ruta relativa dentro del servidor */
    },
    filename : function (req, file, callback) {
        callback(null, `${Date.now()}_products_${path.extname(file.originalname)}`)/*  me va a trapa el .jpg  */
    }
});

const uploadImageProduct = multer({
    storage : storeImageProduct
});

module.exports = {
    uploadImageProduct
}