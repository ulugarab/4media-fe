<template>
  <v-app style="background: #110c19">
    <NavbarMenu />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import NavbarMenu from "./components/NavbarMenu";
export default {
  name: 'App',
  components: {NavbarMenu},
  data: () => ({
    //
  }),
};
</script>
