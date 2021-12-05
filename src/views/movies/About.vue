<template>
  <div>
    <v-container>
      <div class="row">
        <div class="offset-2 col-8 my-4">
          <div class="movie-detail d-flex flex-column white--text">
            <span class="text-capitalize font-weight-bold" style="font-size: 40px;">{{ detailmovie.title }}</span>
            <span class="tagline">{{ detailmovie.tagline }}</span>

            <div class="d-flex color-movie my-2 genres">
              <span class="movie-year">{{ detailmovie.year }},</span>
              <span class="movie-country ml-1">{{ detailmovie.country }},</span>
              <div v-for="(genre, index) in detailmovie.genres" :key="genre">
                <span class="movie-genres ml-1">{{ genre }}</span>
                <span v-if="index+1 < detailmovie.genres.length">, </span>

              </div>

            </div>
            <div class="d-flex color-movie my-1 actors">
              <span class="font-weight-bold">Aktyorlar:</span>
              <div v-for="(actor, index) in detailmovie.actors.slice(0, 4)" :key="actor">
                <span class="actor ml-1">{{ actor.first_name }} {{ actor.last_name }}</span>
                <span v-if="index+1 < detailmovie.actors.slice(0, 4).length">, </span>

              </div>


              <div class="movie-young ml-auto"
                   style="background: #070707; width: 28px; height: 22px; margin-top: -2px; border-radius: 3px">
                <span class="font-weight-bold pa-1" style="font-size: 12px;">16+</span>
              </div>

            </div>
            <div class="movie mt-4">
              <iframe class="iframe-mov"
                      :src="detailmovie.movie">
              </iframe>

              <div class="d-flex">
                <a href="#" class="text-decoration-none ">
                  <v-icon dark style="color: #797191; font-size: 2rem">mdi-share-variant</v-icon>
                  <span class="ml-2 share-variant--text"
                        style="font-weight: bold; font-size: 17px">Do'stlarga jo'natish</span>
                </a>
              </div>
              <div class="d-flex mt-3">
                <div class="rating-number">
                  <div style="font-size: 50px; font-weight: bold">7,<span style="font-size: 40px">0</span></div>
                  <div style="color: #797191; font-size: 12px; position: absolute">Reyting 4media</div>
                  <div class="mt-6" style="position: absolute">
                    <v-btn style="border-color: #a5a1b2;" dark small outlined depressed>
                      Reyting
                    </v-btn>
                  </div>
                </div>
                <div class="col-3 ml-4 flex-column">
                  <div class="rejisor d-flex">
                    <v-progress-linear class="my-2" style="width: 50%; height: 5px; border-radius: 12px" color="red"
                                       value="50"></v-progress-linear>
                    <span class="text--white ml-2" style="font-size: 12px; color: #797191">Rejisyor</span>
                  </div>
                  <div class="rejisor d-flex">
                    <v-progress-linear class="my-2" style="width: 50%; height: 5px; border-radius: 12px" color="red"
                                       value="50"></v-progress-linear>
                    <span class="text--white ml-2" style="font-size: 12px; color: #797191">Syujet</span>
                  </div>
                  <div class="rejisor d-flex">
                    <v-progress-linear class="my-2" style="width: 50%; height: 5px; border-radius: 12px" color="red"
                                       value="50"></v-progress-linear>
                    <span class="text--white ml-2" style="font-size: 12px; color: #797191">Ko'rish</span>
                  </div>
                  <div class="rejisor d-flex">
                    <v-progress-linear class="my-2" style="width: 50%; height: 5px; border-radius: 12px" color="red"
                                       value="50"></v-progress-linear>
                    <span class="text--white ml-2" style="font-size: 12px; color: #797191">Aktyor</span>
                  </div>
                </div>
                <div class="flex-column">

                  <div class="movie--bio special-text" style="color: #797191">
                    <p v-html="detailmovie.description"></p>

                  </div>
                  <button @click="onButton" class="expand-button">
                    Oxirgacha o'qing
                  </button>
                </div>


              </div>
              <div class="d-flex mt-10">
                <div class="flex-column col-4">
                  <div style="font-size: 19px; font-weight: bold" class="lang_title">Kino Tili</div>
                  <div v-for="(lang, index) in detailmovie.movie_language" :key="lang">
                    <span style="font-size: 15px" class="black--text-50">{{ lang.name }}</span>
                    <span v-if="index+1 < detailmovie.movie_language.length">, </span>

                  </div>
                </div>
                <div class="flex-column mt-2 ml-4">
                  <div style="font-size: 19px; font-weight: bold">Bizda bor kachestvolar</div>
                  <div class="d-flex">
                    <div v-for="(quality, index) in detailmovie.movie_quality" :key="quality">
                      <span style="font-size: 15px" class="black--text-50">{{ quality.name }}</span>
                      <span v-if="index+1 < detailmovie.movie_quality.length">,  </span>

                    </div>

                  </div>
                </div>
              </div>

              <div class="d-flex mt-10">
                <div class="flex-column">
                  <div>
                    <v-dialog
                        v-model="dialog"
                        fullscreen
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <div
                            class="on-actors"
                            v-bind="attrs"
                            v-on="on"
                            style="font-size: 20px; color: #ffffff; font-weight: bold"
                        >
                          <span class="on-actors">Aktyor va rejissorlar</span>
                        </div>
                      </template>
                      <div style="opacity:0.9; background-color: #110c19;z-index:0;">
                        <div style="z-index: 5">

                          <v-btn
                              icon
                              dark
                              @click="dialog = false"
                          >
                            <v-icon>mdi-close</v-icon>
                          </v-btn>
                          <v-container class="modal-container">
                            <div class="row">
                              <div class="offset-2 col-8 my-4 mt-13">
                                <div style="color: #ffffff; font-size: 4rem; font-weight: bold;">Kino 1+1</div>
                                <div class="mt-3">
                                  <span
                                      style="color: #ffffff; font-size: 18px; border-radius: 2px; border-bottom: 3px solid #ea0042">Aktyorlar</span>
                                </div>
                                <div class="mt-6 flex-column">
                                  <div style="color: #ffffff; font-size: 20px; font-weight: bold">Rejissor:</div>
                                  <div v-for="director in detailmovie.directors" :key="director">
                                    <div class="d-flex">
                                      <img class="mt-5" :src="director.photo" width="130" height="130"
                                           style="border-radius: 50%"/>
                                    </div>
                                    <div class="name" style="font-weight: bold; color: #a5a1b2;">{{
                                        director.first_name
                                      }}
                                    </div>
                                    <div class="surname" style="font-weight: bold; color: #a5a1b2;">
                                      {{ director.last_name }}
                                    </div>
                                    <div class="count_movie" style="font-size: 15px; color: #797191;">
                                      {{ director.count_movie }}
                                    </div>

                                  </div>

                                </div>
                                  <div class="mt-6 flex-column">
                                    <div style="color: #ffffff; font-size: 20px; font-weight: bold">Aktyorlar:</div>
                                    <div class="d-flex">
                                      <div v-for="(actor, index) in detailmovie.actors"   :key="actor">
                                          <div v-if="index === 0" class="flex-column">
                                            <img class="mt-5" :src="actor.photo" width="130" height="130"
                                                 style="border-radius: 50%"/>
                                            <div class="name" style="font-weight: bold; color: #a5a1b2;">{{
                                                actor.first_name
                                              }}
                                            </div>
                                            <div class="surname" style="font-weight: bold; color: #a5a1b2;">
                                              {{ actor.last_name }}
                                            </div>
                                            <div class="count_movie" style="font-size: 15px; color: #797191;">
                                              {{ actor.count_movie }}
                                            </div>
                                          </div>
                                          <div v-else class="flex-column ml-5">
                                            <img class="mt-5" :src="actor.photo" width="130" height="130"
                                                 style="border-radius: 50%"/>
                                            <div class="name" style="font-weight: bold; color: #a5a1b2;">{{
                                                actor.first_name
                                              }}
                                            </div>
                                            <div class="surname" style="font-weight: bold; color: #a5a1b2;">
                                              {{ actor.last_name }}
                                            </div>
                                            <div class="count_movie" style="font-size: 15px; color: #797191;">
                                              {{ actor.count_movie }}
                                            </div>
                                          </div>



                                      </div>

                                    </div>
                                    <div class="d-flex">

                                      <div class="flex-column">
                                        <img class="mt-5" src="../../assets/arnold.jpeg" width="130" height="130"
                                             style="border-radius: 50%"/>
                                        <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                                        <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                                        <div class="count_movie" style="font-size: 15px; color: #797191;">7 films</div>
                                      </div>
                                      <div class="flex-column ml-5">
                                        <img class="mt-5" src="../../assets/arnold.jpeg" width="130" height="130"
                                             style="border-radius: 50%"/>
                                        <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                                        <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                                        <div class="count_movie" style="font-size: 15px; color: #797191;">7 films</div>
                                      </div>
                                      <div class="flex-column ml-5">
                                        <img class="mt-5" src="../../assets/arnold.jpeg" width="130" height="130"
                                             style="border-radius: 50%"/>
                                        <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                                        <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                                        <div class="count_movie" style="font-size: 15px; color: #797191;">7 films</div>
                                      </div>

                                    </div>
                                  </div>

                                </div>
                              </div>

                          </v-container>
                        </div>

                      </div>
                    </v-dialog>

                  </div>
                  <div class="d-flex">

                    <div v-for="director in detailmovie.directors" :key="director">
                      <div class="flex-column">
                        <img class="mt-5" :src="director.photo" width="100" height="100" style="border-radius: 50%"/>
                        <div class="name" style="font-weight: bold; color: #a5a1b2;">{{ director.first_name }}</div>
                        <div class="surname" style="font-weight: bold; color: #a5a1b2;">{{ director.last_name }}</div>
                        <div class="count_movie" style="font-size: 15px; color: #797191;">Rejissor</div>
                      </div>
                    </div>
                      <div v-for="actor in detailmovie.actors.slice(0, 4)" :key="actor">
                        <div class="flex-column ml-8">
                          <img class="mt-5" :src="actor.photo" width="100" height="100" style="border-radius: 50%"/>
                          <div class="name" style="font-weight: bold; color: #a5a1b2;">{{ actor.first_name }}</div>
                          <div class="surname" style="font-weight: bold; color: #a5a1b2;">{{ actor.last_name }}</div>
                          <div class="count_movie" style="font-size: 15px; color: #797191;">Aktyor</div>
                        </div>
                      </div>



                    <div class="flex-column ml-8">
                      <div class="mt-5" @click="dialog = true"
                           style="width: 100px; height: 100px; background: #797191; border-radius: 50%; text-align: center; line-height: 100px; font-size: 20px; font-weight: bold; cursor: pointer">
                        Yana
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
        <div class="col-12">
          <div class="white--text ma-2 mx-16">
            <h2 class="">
              <a class="white--text">
                Shunga o'xshash filmlar
                <v-icon
                    dark
                    style="font-size: 30px">
                  mdi mdi-chevron-right
                </v-icon>
              </a>
            </h2>
            <p class="black--text-50"><a class="black--text-50">Ko'rishni tavsiya qilamiz</a></p>
          </div>

          <div class="mt-10">
            <v-sheet
                max-width="100%"
                style="background: transparent"

            >
              <v-slide-group
                  v-model="model"
                  class="pa-4"
                  dark
              >
                <v-slide-item
                    v-for="n in movies"
                    :key="n"
                    v-slot="{ active, toggle }"

                >
                  <v-card
                      :color="active ? 'primary' : 'grey lighten-1'"

                      class="ma-6 v-card-slide"
                      style="border-radius: 12px;"
                      height="260"
                      width="175"
                      @click="toggle"

                  >
                    <v-img height="100%" style="border-radius: 12px" :src="n.src"/>

                    <v-row
                        align="center"
                        justify="center"


                    >

                      <div class="hover-box">
                        <div class="top">
                          <v-icon>mdi-bookmark</v-icon>
                          <v-icon>mdi-share-variant</v-icon>
                        </div>

                        <div class="rating">
                          <span>9,9</span>
                          <i class="fa fa-bars"></i>
                        </div>

                        <div class="progress-bar">
                          <p>Сюжет</p>
                          <div class="progress">
                            <span></span>
                          </div>
                        </div>

                        <p class="text">2016, США, Боевик</p>
                        <p class="text">134 минуты</p>
                      </div>

                      <v-scale-transition>

                        <v-icon
                            v-if="active"
                            color="white"
                            size="48"
                            v-text="'mdi-close-circle-outline'"
                        ></v-icon>

                      </v-scale-transition>

                    </v-row>

                    <v-card-actions>
                      <div class="text-content d-flex">
                        <h5>{{ n.name }}</h5>
                        <p class="type-of-subscribe mx-5">Бесплатно</p>
                      </div>
                    </v-card-actions>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>

          </div>

        </div>
        <div class="offset-1 col-11 my-4">
          <div class="movie-detail d-flex flex-column white--text">
    
            <div class="d-flex mt-5">
              <div style="font-size: 1.5rem; font-weight: bold; color: #ffffff">Kamentariya
              </div>
              <span class="mt-2 ml-1" style="font-size: 10px; color: #b3c2c2">3</span>
              <div class="ml-4 mt-1">

                <v-btn style="border-color: #a5a1b2;" dark small outlined depressed>
                  Komentariya yozish
                </v-btn>
              </div>
            </div>
            <div class="flex-column">
              <div style="font-size: 12px; color: #a5a1b2">1+1 filmi haqida</div>
              <div class="comment-movie mt-4 d-flex" style="margin-left: -4rem">
                <v-sheet   max-width="100%"
                           style="background: transparent">
                  <v-slide-group
                      class="pa-4"
                      dark>
                    <v-slide-item
                        v-for="n in 10"
                        :key="n">
                      <v-card
                          class="ml-2"
                          width="300"
                          height="160"
                          style="background: #1b172a; border-radius: 12px"
                      >
                        <div class="card-title ml-5">Arab</div>
                        <div class="card-content ml-5 mt-3 black--text-50">Kino juda zo'r</div>
                        <div class="d-flex " style="margin-top: 15%">
                          <div class="card-date ml-5 mt-3" style="font-size: 14px; color: #797191">12.21.2021</div>
                          <div class="ml-auto">
                            <v-btn flat icon color="blue lighten-2">
                              <v-icon>mdi-thumb-up</v-icon>
                            </v-btn>
                            <span style="font-size: 18px; color: deepskyblue">
                          1
                        </span>
                            <v-btn flat icon color="red lighten-2">
                              <v-icon>mdi-thumb-down</v-icon>
                            </v-btn>

                          </div>
                        </div>
                      </v-card>

                    </v-slide-item>
                  </v-slide-group>
                </v-sheet>


              </div>

            </div>

          </div>

        </div>

      </div>
    </v-container>
  </div>
</template>


<style lang="scss">

@import "../../../node_modules/@mdi/font/css/materialdesignicons.css";

.special-text {
  position: relative;
  max-height: 100px;
  overflow: hidden;
  transition: max-height 1s ease;

  &.-expanded {
    max-height: 100vh;
  }
}

.special-text:not(.-expanded)::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.on-actors:hover {
  color: #b3c2c2;
}

.color-movie {
  color: #797191;
}

.tagline {
  color: #7e71aa;
}

.iframe-mov {
  width: 100%;
  height: 350px;
  border: none
}

.black--text-50 {
  color: #b3c2c2 !important;
}

.share-variant--text {
  color: #d9d7e0;
}

.share-variant--text:hover {
  color: #ffffff;
}

.modal-container {
  position: relative;
  z-index: 999;
}
</style>

<script>
import $ from 'jquery'
import {$api} from "../../plugins/api";


export default {
  props: ['id'],
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
      movies: [
        {
          src: 'https://static.tvtropes.org/pmwiki/pub/images/100420.jpg',
          name: 'Qasoskorlar',
        },
        {
          src: 'https://m.media-amazon.com/images/I/A1v9PaRUE6L._SY445_.jpg',
          name: 'Qasoskorlar',

        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg',
          name: 'Qasoskorlar',

        },
        {
          src: 'https://m.media-amazon.com/images/I/51BOoBOooAL.jpg',
          name: 'Qasoskorlar',

        },
        {
          src: 'https://i2.wp.com/aronboss.com/wp-content/uploads/2021/05/thor-aronboss.jpg?fit=585%2C366&ssl=1',
          name: 'Qasoskorlar',

        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg',
          name: 'Qasoskorlar',

        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKQ0Z-ZpO72b2dbLiFzJD0o71BdiQl8iVJgZGujtT1hh8NwwVL_2HLAStbiPh6RGd9nM&usqp=CAU',
          name: 'Qasoskorlar',
        },
      ],
      interesting: [
        {
          src: 'https://static.tvtropes.org/pmwiki/pub/images/100420.jpg',
          name: 'Qasoskorlar',
        },
        {
          src: 'https://m.media-amazon.com/images/I/A1v9PaRUE6L._SY445_.jpg',
          name: 'Qasoskorlar',

        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg',
          name: 'Qasoskorlar',

        },
        {
          src: 'https://m.media-amazon.com/images/I/51BOoBOooAL.jpg',
          name: 'Qasoskorlar',

        },
        {
          src: 'https://i2.wp.com/aronboss.com/wp-content/uploads/2021/05/thor-aronboss.jpg?fit=585%2C366&ssl=1',
          name: 'Qasoskorlar',

        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg',
          name: 'Qasoskorlar',

        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKQ0Z-ZpO72b2dbLiFzJD0o71BdiQl8iVJgZGujtT1hh8NwwVL_2HLAStbiPh6RGd9nM&usqp=CAU',
          name: 'Qasoskorlar',
        },
      ],
      detailmovie: null,
      ids: 0,

    }
  },
  mounted() {
    this.onDetailMovie()

  },
  methods: {
    async onDetailMovie() {
      let resp = await $api.movies.movie[this.id].get()


      this.detailmovie = resp
    },
    onButton() {
      $('.special-text').toggleClass('-expanded');

      if ($('.special-text').hasClass('-expanded')) {
        $('.expand-button').html('Qaytarish');
      } else {
        $('.expand-button').html('Davom etirrish');
      }
    }
  }
}

</script>