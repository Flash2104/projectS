<template>
  <div class="left-nav">
        <router-view>
      <div v-for="item in getNavigationItems" :key="item.url">
        <router-link :to="item.url">
          {{item.name}}
        </router-link>           
      </div>
      </router-view>
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
            title: 'Armory'
          },
          {
            title: 'People'
          },
          {
            title: 'Command'
          },
          {
            title: 'Calendar'
          }
      ];
      this.navigationItems = data.map((i) => {
        let result = {};
        result.name = i.title;
        result.url = UrlStock.getLeftNavigationUrl(i.title);
        return result;
      });
      return this.navigationItems;
    }
  },
  
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
