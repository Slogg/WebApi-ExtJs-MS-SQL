Ext.define('App.model.ProductModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'Id', type: 'int' },
        { name: 'Name', type: 'string' },
        { name: 'Count', type: 'int' },
        { name: 'Unit', type: 'string' },
        { name: 'Stock', type: 'string' }
    ],
    validators: {
        category: { type: 'presence', allowEmpty: false },
        name: { type: 'presence', allowEmpty: false },
        vendorName: { type: 'presence', allowEmpty: false }
    }
});