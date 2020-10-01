<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand" data-testid="home-link">Home</router-link>
    <nav>
      <router-link :to="{name: 'profile'}">Profile</router-link> |
      <router-link :to="{name: 'messages-list'}">Messages List</router-link> |
      <router-link :to="{name: 'events-list'}">Events List</router-link> |
      <router-link :to="{name: 'create-event'}">Create Event</router-link>
      <router-link :to="{name: 'about'}" data-testid="about-link">
        About
      </router-link>
    </nav>
  </div>
</template>
