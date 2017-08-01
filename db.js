const data = {
  "Bar Category": [
    {
      "name": "bar 1",
      "id": 1
    },
    {
      "name": "bar 2",
      "id": 2
    },
    {
      "name": "bar 1",
      "id": 3
    },
    {
      "name": "gsg",
      "id": 4
    }
  ],
  "Foo Category": [
    {
      "name": "Fubu",
      "id": 2
    },
    {
      "name": "",
      "id": 3
    }
  ]
}
      
module.exports = {
  
  getCategoryNames: function(){
    return Object.keys(data);
  },
  getProductsByCategory: function(category){
    return data[category];
  },
  createProduct: function(productName, categoryName){
    productName.id = data[categoryName].length;
    data[categoryName].push(productName);
  },
  deleteProduct: function(categoryName, id){
    data[categoryName] = data[categoryName].filter(function(product){
        return product.id !== id;
    })
  },
  deleteCategory: function(category){
    delete data[category]
  },
  createCategory: function(categoryName){
    data[categoryName] = [];
  }
}