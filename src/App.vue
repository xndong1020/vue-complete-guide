<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <!-- <app-header></app-header> -->
        <router-view name="header-top"></router-view>
        <h1>Routing</h1>
        <hr />
        <router-view></router-view>
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>
