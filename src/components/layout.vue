<template>
  <div>
    <div class="navbar-vertical shadow bg-light">
      <div class="d-flex bg-white p-3">
        <div
          @click="showmenu = !showmenu"
          class="btn btn-sm btn-light d-sm-block d-md-none me-2"
        >
          <i class="bi bi-three-dots-vertical"></i>
        </div>
        <slot name="logo"></slot>
        <div class="fs-5 ms-2">BraveVue</div>
      </div>
     
      <div class="sidebar-menu pt-4 p-3" :class="{ show: showmenu }">
        <slot name="sidebar"></slot>
      </div>
    </div>
    <div class="main-content mt-5 pt-3 mt-md-0 pt-md-0">
      <slot name="content"> </slot>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      showmenu: false,
    };
  },
};
</script>
<style >
.navbar-vertical{
     position: fixed;
     top: 0;
    width: 100%;
    z-index: 1;
}
.sidebar-menu {
  display: none;
}
.sidebar-menu.show {
  display: block !important;
}
@media (min-width: 768px) {
  .navbar-vertical {
    bottom: 0;
    display: block;
    max-width: 250px;
    overflow-y: auto;

    position: fixed;
    
  }
  .sidebar-menu {
    display: block;
  }
  .main-content {
    margin-left: 250px;
  }
}
</style>
