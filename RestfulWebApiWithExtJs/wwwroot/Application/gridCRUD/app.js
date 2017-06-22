Ext.application({
    name: 'App',
    models: ['ProductModel'],
    stores: ['ProductsModel'],
    views: ['Viewport', 'ViewportController'],
    autoCreateViewport: true,    
    launch: function () {
    }
});
