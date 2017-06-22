Ext.define('App.store.ProductsModel', {
    extend: 'Ext.data.Store',
    model: 'App.model.ProductModel',
    sorters: ['name'],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '../../GridRestful.svc',
        //noCache: false,
        api: {
            create: '../../GridRestful.svc/Grid/NewProduct',
            read: '../../GridRestful.svc/Grid/AllProducts',
            update: '../../GridRestful.svc/Grid/UpdateProduct',
            destroy: '../../GridRestful.svc/Grid/DeleteProduct'
        },
        reader: {
            type: 'json',
            rootProperty: 'GetAllProductResult'
        }
    }
});