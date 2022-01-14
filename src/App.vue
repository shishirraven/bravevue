<template>
  <div id="app">
    <layout>
      <template #logo>
        <img
          class="img-fluid logo"
          alt="Counterdraw Logo"
          src="@/assets/logo.svg"
        />
      </template>
      <template #sidebar>
        <!-- <div class="d-grid2">
          <button
            type="button"
            class="d-flex align-items-center btn btn-light2 bg-white btn-large text-start rounded-pill shadow-sm py-1 px-3 pe-5"
          >
            <i class="bi fs-4 bi-plus-lg fs-3 text-danger"></i>
            <div class="ms-2">New</div>
          </button>
        </div> -->
        <div class=" d-grid gap-1">
          <router-link
            to="/"
            class="btn  btn-large text-start rounded-pill py-2 px-3"
          >
            <i class="bi fs-4 bi-house me-2"></i>
            Home
          </router-link>

          <div class="fs-7 px-3 pt-3 mb-2 text-muted">COMPONENTS</div>

          <router-link
            to="/brave_dialog"
            type="button"
            class="btn  btn-large text-start rounded-pill py-2 px-3"
          >
            <i class="bi me-2 fs-4 bi-window"></i>
            Dialog
          </router-link>

          <router-link
            to="/brave_position_dialog"
            type="button"
            class="btn  btn-large text-start rounded-pill py-2 px-3"
          >
            <i class="bi me-2 fs-4 bi-window-stack"></i>
            Position Dialog
          </router-link>
          
          <router-link
            to="/brave_gist_embed"
            type="button"
            class="btn  btn-large text-start rounded-pill py-2 px-3"
          >
            <i class="bi me-2 fs-4 bi-github"></i>
            Gist Embed
          </router-link>

           <router-link
            to="/brave_drop_menu"
            type="button"
            class="btn  btn-large text-start rounded-pill py-2 px-3"
          >
            <i class="bi me-2 fs-4 bi-menu-button-wide"></i>
            Drop Menu
          </router-link>
<!-- 
          <router-link
            to="/brave_tip"
            type="button"
            class="btn  btn-large text-start rounded-pill py-2 px-3"
          >
            <i class="bi me-2 fs-4 bi-chat-square-text"></i>
            Tip
          </router-link>

          <router-link
            to="/brave_context_menu"
            type="button"
            class="btn  btn-large text-start rounded-pill py-2 px-3"
          >
            <i class="bi me-2 fs-4 bi-menu-app"></i>
             Context Menu
          </router-link> -->
          

    
        </div>
      </template>
      <template #content>
        <router-view class="" />
      </template>
    </layout>
  </div>
</template>
<script>
// @ is an alias to /src
import layout from "@/components/layout.vue";

export default {
  name: "Home",
  components: { layout },
};
</script>

<style lang="scss">
$card-border-radius:.95rem;
$card-bg:rgba(248,246,242,.3);

$border-radius:               .45rem !default;
$border-radius-sm:            .3rem !default;
$border-radius-lg:            .4rem !default;


@import url(https://fonts.googleapis.com/css?family=Poppins:200,300,400,700);
$font-family-base:Poppins;
@import url(https://fonts.googleapis.com/css?family=Poppins:200,300,400,700);
$headings-font-family:Poppins;

//@import '@/../../node_modules/bootstrap/scss/bootstrap.scss';
// Configuration

  @import "@/../../node_modules/bootstrap/scss/functions";
$light : #F8F6F2;
$danger : #F06445;
$primary_old : #4FC9DA;
$primary : shift-color($primary_old, 5%);


$font-size-base:              .92rem ; // Assumes the browser default, typically `16px`
$font-size-sm:                $font-size-base * .875 ;
$font-size-lg:                $font-size-base * 1.25 ;

$border-radius:               .55rem;
$border-radius-sm:            .5rem ;
$border-radius-lg:            .6rem ;

$theme-colors: (
  "primary": $primary,
  "secondary": #DAD3C3,
  "success": #B8D935,
  "info": #4F55DA,
  "warning": #E8C444,
  "danger": $danger,
  "dark": #211F1C,
  "white": #ffffff,
  "light": $light,
  );


  // $card-cap-bg: shift-color($light, 0%);
$card-cap-bg: shift-color($light, 0%);
@import "@/../../node_modules/bootstrap/scss/variables";
@import "@/../../node_modules/bootstrap/scss/mixins";
@import "@/../../node_modules/bootstrap/scss/utilities";

// Layout & components
@import "@/../../node_modules/bootstrap/scss/root";
@import "@/../../node_modules/bootstrap/scss/reboot";
@import "@/../../node_modules/bootstrap/scss/type";
@import "@/../../node_modules/bootstrap/scss/images";
@import "@/../../node_modules/bootstrap/scss/containers";
@import "@/../../node_modules/bootstrap/scss/grid";
@import "@/../../node_modules/bootstrap/scss/tables";
@import "@/../../node_modules/bootstrap/scss/forms";
@import "@/../../node_modules/bootstrap/scss/buttons";
@import "@/../../node_modules/bootstrap/scss/transitions";
@import "@/../../node_modules/bootstrap/scss/dropdown";
@import "@/../../node_modules/bootstrap/scss/button-group";
@import "@/../../node_modules/bootstrap/scss/nav";
@import "@/../../node_modules/bootstrap/scss/navbar";
@import "@/../../node_modules/bootstrap/scss/card";
@import "@/../../node_modules/bootstrap/scss/accordion";
@import "@/../../node_modules/bootstrap/scss/breadcrumb";
@import "@/../../node_modules/bootstrap/scss/pagination";
@import "@/../../node_modules/bootstrap/scss/badge";
@import "@/../../node_modules/bootstrap/scss/alert";
@import "@/../../node_modules/bootstrap/scss/progress";
@import "@/../../node_modules/bootstrap/scss/list-group";
@import "@/../../node_modules/bootstrap/scss/close";
//@import "@/../../node_modules/bootstrap/scss/toasts";
//@import "@/../../node_modules/bootstrap/scss/modal";
//@import "@/../../node_modules/bootstrap/scss/tooltip";
//@import "@/../../node_modules/bootstrap/scss/popover";
//@import "@/../../node_modules/bootstrap/scss/carousel";
@import "@/../../node_modules/bootstrap/scss/spinners";
//@import "@/../../node_modules/bootstrap/scss/offcanvas";
@import "@/../../node_modules/bootstrap/scss/placeholders";

// Helper
@import "@/../../node_modules/bootstrap/scss/helpers";

// Utilities
@import "@/../../node_modules/bootstrap/scss/utilities/api";
.card {
    border: 1px dashed #e8e5dd;
    box-shadow: none;
}

.router-link-exact-active {
  background:$primary;
  color: white;
}
.router-link-exact-active:hover {
  //background:$primary;
  color: white;
}


.card-footer {
  border-top: 1px dashed #e8e5dd;
}


::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0.5);
}

* {
  scrollbar-width: thin;
  scrollbar-color: var(--scroll-bar-color) var(--scroll-bar-bg-color);
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

*::-webkit-scrollbar-track {
  background: var(--scroll-bar-bg-color);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--scroll-bar-color);
  border-radius: 20px;
  border: 3px solid var(--scroll-bar-bg-color);
}

.logo {
  height: 25px;
}

.splitpanes--vertical > .splitpanes__splitter {
  /* min-width: 6px; */
   background: rgb(230, 230, 230) !important;
}

.splitpanes.default-theme .splitpanes__splitter:before,.splitpanes.default-theme .splitpanes__splitter:after{
  background: rgb(145, 145, 145) !important;
}
.splitpanes--horizontal > .splitpanes__splitter {
  min-height: 6px;
  background: linear-gradient(0deg, #ccc, #111);
}
</style>
