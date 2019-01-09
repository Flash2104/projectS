export default {
    initialize() {
        this.navigationItems = [
            {
              id: '1',
              title: 'Armory'
            },
            {
              id: '2',
              title: 'People'
            },
            {
              id: '3',
              title: 'Command'
            },
            {
              id: '4',
              title: 'Calendar'
            }
        ];
    },

    getNavigationItems() {
        return this.navigationItems;
    }
}