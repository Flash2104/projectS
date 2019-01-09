<template>
  <div class="settings">
    <button class="dropdownbtn">Kirill</button>
    <div class="dropdown-content bg-dark">
        <a href="#">Profile</a>
        <a href="#">System settings</a>
        <a href="#">Theme</a>
        <a href="#">Log out</a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Settings'
}
</script>

<style>
.settings {
  position: fixed;
  text-align: center;
  width: 250px;
  top: 0;
  right: 0;
  height: 49px;
  display: inline-block;
  z-index: 3;
}
/* Dropdown Button */
.settings .dropdownbtn {
  padding: 0;
  font-size: 16px;
  border: none;
}

/* Dropdown Content (Hidden by Default) */
.settings .dropdown-content {
  display: none;
  min-width: 160px;
  color: inherit;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 3;
}

/* Links inside the dropdown */
.settings .dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  z-index: 3;
  color: white;
}

/* Change color of dropdown links on hover */
.settings .dropdown-content a:hover {
  background-color: rgb(151, 43, 43);
  z-index: 3;
}

/* Show the dropdown menu on hover */
.settings:hover .dropdown-content {
  display: block; 
  z-index: 3;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.settings:hover .dropdownbtn {
  background-color: #3e8e41;
}
</style>
