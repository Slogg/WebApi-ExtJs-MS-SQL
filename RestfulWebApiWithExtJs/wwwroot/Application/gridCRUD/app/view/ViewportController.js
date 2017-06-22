Ext.define('App.view.ViewportController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewport',
    newRecordId: '',
    isNewRecord: false,
    onGridEditorBeforeEdit: function (editor, ctx, eOpts) {
        this.lookupReference('newRecordButton').setDisabled(true);
    },
    onGridEditorCancelEdit: function (editor, ctx, eOpts) {
        if (this.newRecordId && ctx.record.get('Id') === this.newRecordId && this.isNewRecord) {
            ctx.grid.getStore().remove(ctx.record);
            this.isNewRecord = false;
            this.newRecordId = null;
        }
        this.lookupReference('newRecordButton').setDisabled(false);
    },
    onGridEditorEdit: function (editor, ctx, eOpts) {
        ctx.grid.getStore().sync();  // Force a post with the updated data.
        this.isNewRecord = false;
        this.newRecordId = null;
        this.lookupReference('newRecordButton').setDisabled(false);
        this.lookupReference('deleteRecordButton').setDisabled(true);
    },
    onNewButtonClick: function (button, evt) {
        var newProduct = Ext.create('App.model.ProductModel', {
            Name: '',
            Count: '',
            Unit: '',
            Stock: ''
        });
        this.isNewRecord = true;
        this.newRecordId = newProduct.get('Id');
        var grid = this.lookupReference('modelProductGrid');
        grid.getStore().insert(0, newProduct);
        grid.getPlugin('modelProductsRowEditingPlugin').startEdit(newProduct);
    },
    onDeleteButtonClick: function (button, evt) {
        var grid = this.lookupReference('modelProductGrid'),
            selectedRecords = grid.getSelection(),
            store = grid.getStore();
        store.remove(selectedRecords);
        store.sync(); this.lookupReference('deleteRecordButton').setDisabled(true);
    },
    onGridSelect: function (rowModel, record, idx, eOpts) {
        this.lookupReference('deleteRecordButton').setDisabled(false);
    },
    onGridDeselect: function (rowModel, record, idx, eOpts) {
        this.lookupReference('deleteRecordButton').setDisabled(true);
    }
});