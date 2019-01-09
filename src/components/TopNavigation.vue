<template>
  <div class="top-nav">
      <input type="text" name="search" placeholder="Search..">
  </div>
</template>

<script>
export default {
}
</script>

<style>
.top-nav {
  position: fixed;
  left: 250px;
  border-right: 2px solid;
  top: 0;
  right: 250px;
  height: 49px;
}
/* Style the search box inside the navigation bar */
.top-nav input[type=text] {
  width: 130px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}
.top-nav input[type=text]:hover:focus {
  width: 100%;
}
</style>
