<template>
  <div class="left-nav">
      <div v-for="item in getNavigationItems" :key="item.id">
        {{item.name}}              
      </div>
  </div>
</template>

<script>
import UrlStock from './UrlStock';
export default {
    name: 'LeftNavigation',
    computed: {
    getNavigationItems() {
      let data = [
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
      this.navigationItems = data.map((i) => {
        let result = {};
        result.id = i.id;
        result.name = i.title;
        result.url = UrlStock.getLeftNavigationUrl(i.title);
        return result;
      });
      return this.navigationItems;
    }
  }
}
</script>

<style>
.left-nav {
  position: fixed;
  text-align: center;
  border-right: 2px solid;
  border-bottom: 2px solid;
  left: 0;
  top: 49px;
  width: 250px;
  bottom: 22px;
}
</style>
