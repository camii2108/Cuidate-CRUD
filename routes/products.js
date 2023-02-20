/*  */
const express = require('express');
const router = express.Router();
/* Aplico destructuring al objeto */
const {addMainImage, addMultipleImages,addOneImage, storeAddMainImage, storeAddMultipleImages, storeOneImage, detailMainImage, detailMultipleImages, detailOneImage} = require('../controllers/productsController');

const {uploadImageProduct} = require('../middlewares/upload')

/* /products: a la vez que me esta enlazando con la vista, va estar usando uno de los metodos que hicimos en controllers */

router
  .get('/add-one-image', addOneImage)/* Me deriva al metodo que me lleva la formulario. es decir captura la informacion */
  .post('/add-one-image', uploadImageProduct.single('image'), storeOneImage)/* me lleva la informacion por metodo POST. 
  -Le agego la constante const {uploadImageProduct},ya que es quein va aenviar la imagen 
  -single('iamge') es el nombre del campo que saco de la vista "addOneImage", es decir el "name del input"  */
  .get('/detail-one-image/:id', detailOneImage) /* me lleva por id al numero de producto en cuestion. Es decir me muestra el formulario con la img */

  .get('/add-multiple-images', addMultipleImages)
  .post('/add-multiple-images',uploadImageProduct.array('images'), storeAddMultipleImages)
  .get('/detail-multiple-images/:id', detailMultipleImages)

  .get('/add-main-image', addMainImage)
  .post('/add-main-image', uploadImageProduct.fields([{name:'mainImage'},{name:'images'}]), storeAddMainImage)
  .get('/detail-main-image/:id', detailMainImage)

module.exports = router;
