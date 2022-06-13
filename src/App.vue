<template>
  <HelloWorld msg="About" userStatus="Logged" isLoggedIn="true" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import "./styles/global.css";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style></style>
