Ext.define('App.store.ModelCars', {
    extend: 'Ext.data.Store',
    model: 'App.model.ModelCar',
    sorters: ['name'],
    autoLoad: true,
    autoSync: false,    // Make sure that autosync is disabled to avoid posting invalid vendorName.
    proxy: {
        type: 'ajax',
        url: 'model-cars.php',
        api: {
            create: '../../GridRestful.svc/Grid/NewProduct',
            read: '../../GridRestful.svc/Grid/AllProducts',
            update: '../../GridRestful.svc/Grid/UpdateProduct',
            destroy: '../../GridRestful.svc/Grid/DeleteProduct'
        },
        reader: {
            type: 'json',
            rootProperty: 'modelCars'
        }
    }
});