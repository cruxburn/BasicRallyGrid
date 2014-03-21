Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    
    launch: function() {
      console.log("My first App, Woot!");
      this._loadData();
    },
    
    // Get data from Rally
    _loadData: function() {
      
      var myStore = Ext.create('Rally.data.wsapi.Store', {
        model: 'Project',
        autoLoad: true,
        listeners: {
          load: function(myStore, myData, success) {
            console.log('got data:', myStore, myData, success);
            this._loadGrid(myStore);
          },
          scope: this
        },
        fetch: ['Name', 'Owner', 'TeamMembers']
      });
    },
    // Create and Show Grid
    _loadGrid: function(store) {
      
      var myGrid = Ext.create('Rally.ui.grid.Grid', {
              store: store,
              columnCfgs: [
                 'Name',
                 'Owner',
                 'TeamMembers'
              ]
            });
            this.add(myGrid);
            console.log('what is this:', this);
    }
});
