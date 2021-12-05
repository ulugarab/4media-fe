<template>
  <div class="pt-5 px-4">
    <v-carousel
        cycle
        style="border-radius: 25px"
        height="400"
        hide-delimiter-background
        hide-delimiters
        show-arrows-on-hover
    >
      <v-carousel-item
          v-for="(item,i) in poster"
          :key="i"
          :src="item.image"
      >

      </v-carousel-item>
    </v-carousel>
    <div v-for="movie in homemovies" :key="movie">
      <div class="py-3">

        <div class="white--text ma-2 mx-16">
          <h2 class="">
            <a class="white--text">
              {{movie.title}}
              <v-icon
                  dark
                  style="font-size: 30px">
                mdi mdi-chevron-right
              </v-icon>
            </a>
          </h2>
          <p class="black--text-50"><a class="black--text-50">{{movie.small_title}}</a></p>
        </div>
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
                v-for="n in movie.movies"
                :key="n"

            >
              <v-card
                  :color="active ? 'primary' : 'grey lighten-1'"

                  class="ma-6 v-card-slide"
                  style="border-radius: 12px;"
                  height="260"
                  width="175"
                  @click="toDetailMovie(n.id)"

              >
                <v-img height="100%" style="border-radius: 12px" :src="n.photo" />

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

                    <p class="text">{{ n.year }}, {{n.country}}, {{n.genres[0]}}</p>
                    <p class="text">{{ n.minutes }}</p>
                  </div>


                </v-row>

                <v-card-actions>
                  <div class="text-content d-flex">
                    <h5>{{ n.title }}</h5>
                    <p class="type-of-subscribe mx-5">{{movie.type}}</p>
                  </div>
                </v-card-actions>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>

      </div>

    </div>
    <div class="py-3">
      <div class="white--text ma-2 mx-16">
        <h2 class="">
          <a class="white--text">
            Haqiqiy voqealarga asoslangan filmlar            <v-icon
                dark
                style="font-size: 30px">
              mdi mdi-chevron-right
            </v-icon>
          </a>
        </h2>

      </div>
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
              <v-img height="100%" style="border-radius: 12px" :src="n.src" />

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
    <div class="py-3">
      <div class="white--text ma-2 mx-16">
        <h2 class="">
          <a class="white--text">
            Harakatli filmlar
            <v-icon
                dark
                style="font-size: 30px">
              mdi mdi-chevron-right
            </v-icon>
          </a>
        </h2>
        <p class="black--text-50"><a class="black--text-50">Sizga yoqadigan narsa</a></p>
      </div>
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
              <v-img height="100%" style="border-radius: 12px" :src="n.src" />

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
    <div class="py-3">
      <div class="white--text ma-2 mx-16">
        <h2 class="">
          <a class="white--text">
            Rus komediya seriyallari
            <v-icon
                dark
                style="font-size: 30px">
              mdi mdi-chevron-right
            </v-icon>
          </a>
        </h2>
        <p class="black--text-50"><a class="black--text-50">Sizning tarixingizga asoslangan</a></p>
      </div>
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
              <v-img height="100%" style="border-radius: 12px" :src="n.src" />

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
<!--    qiziqarli-->
    <div class="py-3">
      <div class="white--text ma-2 mx-16">
        <h2 class="">
          <a class="white--text">
            Eng qiziqarlilar
            <v-icon
                dark
                style="font-size: 30px">
              mdi mdi-chevron-right
            </v-icon>
          </a>
        </h2>
      </div>
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
              v-for="n in interesting"
              :key="n"
              v-slot="{ active, toggle }"

          >
            <v-card
                :color="active ? 'primary' : 'grey lighten-1'"

                class="ma-6"
                style="border-radius: 12px;"
                height="160"
                width="320"
                @click="toggle"

            >
              <v-img height="100%" style="border-radius: 12px" :src="n.src" />

              <v-row
                  align="center"
                  justify="center"

              >


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
                </div>
              </v-card-actions>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>

    </div>
<!---->
    <div class="py-3">

      <div class="white--text ma-2 mx-16">
        <h2 class="">
          <a class="white--text">
            Hind kinolari
            <v-icon
                dark
                style="font-size: 30px">
              mdi mdi-chevron-right
            </v-icon>
          </a>
        </h2>
        <p class="black--text-50"><a class="black--text-50">Sizning tarixingizga asoslangan</a></p>
      </div>
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
              <v-img height="100%" style="border-radius: 12px" :src="n.src" />

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
</template>

<script>
// @ is an alias to /src

import {$api} from "../../plugins/api";

export default {
  name: 'Home',
  components: {},
  data() {
    return {
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
      homemovies: null,
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
      categories: null,
      poster: null,
    }
  },
  mounted() {
    this.onCarousel();
    this.onMovies();
  },
  methods: {
    async onCarousel() {
      let resp = await $api.movies.home.poster.get()


      this.poster = resp.data.results

    },
    async onMovies() {
      let resp = await $api.movies.home.movie.get()


      this.homemovies = resp.data.results

    },
    toDetailMovie(id) {
      this.$router.push({name: 'About', params: {id: id}})
    }

  }
}
</script>


<style>


.v-slide-group__prev i{
  font-size: 50px !important;
}
.v-slide-group__next i{
  font-size: 50px !important;
}

.black--text-50 {
  color: #b3c2c2 !important;
}



.v-card-slide:hover{
  transform: scale(1.1) translateY(-10px);
  transition: 0.5s;
}

.v-card-slide:hover .hover-box{
  opacity: 1;
  border-radius: 12px;
}

.hover-box{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(7,5,14,.8);
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  opacity: 0;
  transition: 0.4s;
}
.hover-box .top{
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.hover-box i{
  font-size: 20px;
  cursor: pointer;
  opacity: 0.5;
}
.hover-box i:hover{
  opacity: 1;
}

.hover-box .rating{
  font-size: 35px;
  color: #fff;
}

.hover-box .progress-bar{
  margin: 10px 0;
}

.hover-box .progress-bar p{
  font-size: 13px;
  color: #a5a1b2;
  margin-bottom: 4px;
}

.hover-box .progress-bar .progress{
  width: 105px;
  height: 4px;
  background: #7e798f52;
  position: relative;
}

.hover-box .progress-bar .progress span{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 75%;
  background: #ea0042;
}

.hover-box .text{
  font-size: 13px;
  color: #d9d7e0;
  margin-top: 10px;
}


.text-content{
  margin-top: 15px;

}
.text-content h5{
  font-size: 15px;
  color: #d9d7e0;
}
.text-content .type-of-subscribe{
  font-size: 13px;
  margin-top: 2px;
  color: #7e71aa;
}

</style>