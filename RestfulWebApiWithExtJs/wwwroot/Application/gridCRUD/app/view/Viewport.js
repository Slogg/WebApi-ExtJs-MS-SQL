Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    controller: 'viewport',
    requires: ['Ext.grid.Panel'],
    style: 'padding:25px',
    layout: 'vbox',
    items: [
       {
           xtype: 'gridpanel',
           reference: 'modelProductGrid',
           width: 650,
           height: 300,
           title: 'Ext JS Grid',
           store: 'ProductsModel',
           columns: [
                {
                    text: 'Id',
                    hidden: true,  
                    dataIndex: 'id'
                },
                {
                    text: 'Name',
                    sortable: true,  
                    dataIndex: 'Name',
                    flex: 3,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                },
                {
                    text: 'Count',
                    sortable: true,
                    dataIndex: 'Count',
                    flex: 2,
                },
                {
                    text: 'Unit',
                    sortable: true,
                    dataIndex: 'Unit',
                    flex: 2,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                },
                {
                    text: 'Stock',
                    sortable: true,
                    dataIndex: 'Stock'
                }
           ],
           selType: 'rowmodel',
           plugins: {
               ptype: 'rowediting',
               pluginId: 'modelProductsRowEditingPlugin',
               clicksToEdit: 1,
               listeners: {
                   beforeedit: 'onGridEditorBeforeEdit',
                   canceledit: 'onGridEditorCancelEdit',
                   edit: 'onGridEditorEdit'
               }
           },
           tbar: {
               items: [
                   {
                       xtype: 'button',
                       reference: 'newRecordButton',
                       text: 'New',
                       handler: 'onNewButtonClick'
                   },
                   {
                       xtype: 'button',
                       reference: 'deleteRecordButton',
                       text: 'Delete',
                       handler: 'onDeleteButtonClick',
                       disabled:true
                   }
               ]
           },
           listeners: {
               select: 'onGridSelect',
               deselect: 'onGridDeselect'
           }
       }
    ]
});