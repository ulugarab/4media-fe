<template>
  <div>
    <v-app-bar
        app
        color="dark"
        dark
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
        />

        <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
        />
      </div>
      <v-spacer>
        <div class="d-flex">
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
                    <span class="mr-2">Jangari</span>
                  </v-btn>

                </template>
                <v-list>
                  <v-list-item
                      v-for="(item, index) in items"
                      :key="index"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>

          </div>
          <div>
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
                    <span class="mr-2">Jangari</span>
                  </v-btn>

                </template>
                <v-list>
                  <v-list-item
                      v-for="(item, index) in items"
                      :key="index"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>

          </div>
          <div>
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
                    <span class="mr-2">Jangari</span>
                  </v-btn>

                </template>
                <v-list>
                  <v-list-item
                      v-for="(item, index) in items"
                      :key="index"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
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
export default {
  name: "NavbarMenu",
  data: () => ({
    items: [
      {title: 'Click Me'},
      {title: 'Click Me'},
      {title: 'Click Me'},
      {title: 'Click Me 2'},
    ],
    textcolor: false,
  }),
  methods: {
    onClick() {
      this.textcolor = !this.textcolor;
    }
  }
}
</script>

<style scoped>
.dropdown-text {
  color: aqua;
}
</style>