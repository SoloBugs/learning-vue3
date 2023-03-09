<template>
  <div id="nav">
    <router-link :to="{name: 'home'}">Home</router-link> | 
    <router-link :to="{name: 'todo'}">Todo</router-link> |
    <router-link :to="{name: 'slots'}">Slots</router-link>

  </div>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
        <component :is="Component" :key="route.name" />
    </keep-alive>
  </router-view>
</template>

