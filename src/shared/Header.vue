<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link">
        <router-link to="/">Home</router-link>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <router-link to="/form">Form</router-link>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <router-link to="/directive">Directive</router-link>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <router-link to="/filter">Filters and Mixins</router-link>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <router-link to="/router/5">Router/5</router-link>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <router-link to="/router/10">Router/10</router-link>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <router-link
          to="{name = 'router', params: 10, query:{lang: 'en', country:'us'}  }"
        >Router query</router-link>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <router-link to="/communication">Communication</router-link>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <router-link to="/http">Http</router-link>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <router-link to="/vuex">Vuex</router-link>
      </a>
    </li>
  </ul>
</template>