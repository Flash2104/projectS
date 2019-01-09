<template>
  <div id="app" class="container-fluid">
    <div id="header-row" class="header-row bg-dark text-white">
      <div id="logo-block" class="logo">
      </div>
      <TopNavigation />
      <Settings />
    </div>
    <div id="body-row" class="body-row bg-dark text-white">
      <LeftNavigation />
      <MainBody />
    </div>
    <div id="footer-row" class="footer-row bg-dark text-white text-center">
      Footer block
    </div>
  </div>
</template>

<script>
import TopNavigation from './components/TopNavigation.vue';
import Settings from './components/Settings.vue';
import LeftNavigation from './components/leftNavigation/LeftNavigation.vue';
import MainBody from './components/MainBody.vue';

export default {
  name: 'app',
  components: {
    TopNavigation,
    Settings,
    LeftNavigation,
    MainBody,
  }
}
</script>

<style>
.header-row {
  position: fixed;
  display: flex;
  height: 49px;
  width: 100%;
  border-bottom: 2px groove;
  left: 0;
  top: 0;
  z-index: 2;
}
.body-row {
  position: fixed;
  left: 0%;
  top: 49px;
  border-bottom: 2px groove;
  bottom: 22px;
  width: 100%;
  z-index: 1;
}
.footer-row {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;  
  height: 22px;
}
.logo {
  position: fixed;
  left: 0;
  top: 0;
  height: 49px;
  border-right: 2px solid;
  width: 250px;
  background: url(assets/logo.png) no-repeat; 
  background-size: contain;
}
</style>
