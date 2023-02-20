const {readJSON,writeJSON} = require('../data')/* hago destructuring y dentro tengo las dos funciones */

module.exports = {
    addOneImage : (req,res) => {
        return res.render('addOneImage')
    },
    storeOneImage : (req,res) => {
        
        const products = readJSON('productsOneImage.json');
        const newProduct = {
            id : products.length ? products[products.length - 1].id + 1 : 1,/* Devuelve la cantidad de elemento sque tiene el array, 
            - si es que products tiene lementos, traeme la el ultimo elemento, [-1] ya que empeiza en 0 el array, .id + 1 : 1=> de la propiedad id que 
            lee el lenght del json, le sume 1(es decir que sume de uno en uno el id) ":1" => y sino(en caso de que no exista) a ese producto dejale id=   */
            name : req.body.name,
            description : "Lorem ipsum dolor amet sit.",
            image : req.file ? req.file.filename : null /* si existe req.file traeme filename(nombre del archivo que guardo multer): null de lo contrario no 
            me traigas nada */
        };

        products.push(newProduct);/* voy al array de productos que esto leyendo y le pusheo un nuevo producto */

        writeJSON('productsOneImage.json', products)/* me recibe el json donde guardo el array y la onformacion que quiero mandar  */

        return res.redirect('/')
    },
    detailOneImage : (req,res) => {
        const products = readJSON('productsOneImage.json');
        const product = products.find(product => product.id === +req.params.id)
        return res.render('detailOneImage',{
            ...product
        })
    },

    addMultipleImages : (req,res) => {
        return res.render('addMultipleImages')
    },
    storeAddMultipleImages : (req,res) => {
        
        const images = req.files.map(file => file.filename);

        const products = readJSON('productsMultipleImages.json');
        const newProduct = {
            id : products.length ? products[products.length - 1].id + 1 : 1,
            name : req.body.name,
            description : "Lorem ipsum dolor amet sit.",
            images
        };

        products.push(newProduct);

        writeJSON('productsMultipleImages.json', products)

        return res.redirect('/')

    },
    detailMultipleImages : (req,res) => {

        const products = readJSON('productsMultipleImages.json');
        const product = products.find(product => product.id === +req.params.id)
        return res.render('detailMultipleImages',{
            ...product
        })
    },

    addMainImage : (req,res) => {
        return res.render('addMainImage')
    },
    storeAddMainImage : (req,res) => {

        const products = readJSON('productsMainImage.json');

        const newProduct = {
            id : products.length ? products[products.length - 1].id + 1 : 1,
            name : req.body.name,
            description : "Lorem ipsum dolor amet sit.",
            images : req.files.images ? req.files.images.map(file => file.filename) : [],
            mainImage : req.files.mainImage ? req.files.mainImage[0].filename : null
        };

        products.push(newProduct);

        writeJSON('productsMainImage.json', products)

        return res.redirect('/')
    },
    detailMainImage : (req,res) => {

        const products = readJSON('productsMainImage.json');
        const product = products.find(product => product.id === +req.params.id);

        return res.render('detailMainImage',{
            ...product
        })
    },
   
}