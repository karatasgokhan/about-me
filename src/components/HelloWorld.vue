<template>
  <div>
    <h1 v-if="isLoggedIn === 'true'">{{ msg }} {{ userStatus }}</h1>
    <h1 v-if="isLoggedIn === 'false'">{{ msg }}</h1>
    <h1 v-show="isLoggedIn === 'true'">{{ msg }} {{ userStatus }}</h1>
    <h1 v-show="isLoggedIn === 'false'">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    userStatus: String,
    isLoggedIn: Boolean,
  },
};
</script>
