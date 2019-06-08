const Model = require('../../../models');

const setProduct = (product, cb, productError) => {
  console.log('***** Preparing product set *****');
  product.nameId = product.name.toLowerCase().replace(/ /g, '_');
  getProducts({ nameId: product.nameId }, function(catchProduct) {
    if (catchProduct && catchProduct.length > 0) {
      const product_error_message = `>>> Product with name ${
        product.name
      } already exist on the database`;
      console.log(product_error_message);
      console.log('***** Error while adding product *****');
      productError({ message: product_error_message });
    } else {
      console.log('>>> Adding Product to database');
      new Model.Product(product).save().then(function(newProduct) {
        console.log(
          `>>> Product ${newProduct.name} added with id ${newProduct.id}`
        );
        cb(newProduct);
      });
    }
  });
};

const getProducts = (productCriteria, cb) => {
  console.log('***** Getting product from database *****');
  Model.Product.find(productCriteria).then(function(products) {
    if (products && products.length > 0)
      console.log(`>>> ${products.length} Products found`);
    else console.log(`>>> No products found with criteria ${productCriteria}`);
    cb(products);
  });
};

module.exports = {
  getProducts,
  setProduct
};
