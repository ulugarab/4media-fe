<template>
  <div>
    <v-app-bar
        app
        style="background: #110c19"
        dark
    >
      <div class="d-flex align-center">


        <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="../assets/azuxmedia.png"
            width="140"
        />
      </div>
      <v-spacer>
        <div class="d-flex">
          <div v-for="category in categories" :key="category">
            <div class="offset-1">
              <div>
                <v-menu offset-y>
                <span>
                </span>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        href="#"
                        v-bind="attrs"
                        v-on="on"
                        text
                    >
                      <span class="mr-2">{{ category.name }}</span>
                    </v-btn>

                  </template>
                  <div v-if="genres.length">

                    <div v-for="genre in genres"
                         :key="genre"
                    >
                      <v-list
                          v-if="genre.category === category.id">
                          {{ genre.name }}

                      </v-list>

                    </div>
                  </div>
                  <div v-else>

                    <div
                    >
                      <v-list>
                        Janrlar yo'q
                      </v-list>
                    </div>
                  </div>

                  <!--                  <v-list v-else>-->
                  <!--                    <v-list-item>-->

                  <!--                      <div >-->
                  <!--                        <v-list-item-title>Janlar yo'q</v-list-item-title>-->

                  <!--                      </div>-->
                  <!--                    </v-list-item>-->
                  <!--                  </v-list>-->

                </v-menu>
              </div>

            </div>
          </div>


        </div>
      </v-spacer>

      <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

  </div>
</template>

<script>
import {$api} from "../plugins/api";

export default {
  name: "NavbarMenu",
  data: () => ({
    genres: null,
    textcolor: false,
    categories: null
  }),
  mounted() {
    this.onCategory();
    this.onGenres();
  },
  methods: {
    async onCategory() {
      let resp = await $api.movies.category.get()


      this.categories = resp.data.results

    },
    async onGenres() {
      let resp = await $api.movies.genre.get()


      this.genres = resp.data.results

    },
  }
}
</script>

<style scoped>
.dropdown-text {
  color: aqua;
}
</style>