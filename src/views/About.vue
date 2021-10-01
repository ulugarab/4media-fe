<template>
  <div>
    <v-container>
      <div class="row">
        <div class="offset-2 col-8 my-4">
          <div class="movie-detail d-flex flex-column white--text">
            <span class="text-capitalize font-weight-bold" style="font-size: 40px;">Kino 1+1</span>
            <span class="tagline">Intouchables</span>
            <div class="d-flex color-movie my-2 genres">
              <span class="movie-year">2011,</span>
              <span class="movie-country ml-1">Fransiya,</span>
              <span class="movie-genres ml-1">Dramma,</span>
              <span class="movie-genres ml-1">Komediya,</span>
              <span class="movie-genres ml-1">Biografiya</span>
            </div>
            <div class="d-flex color-movie my-1 actors">
              <span class="font-weight-bold">Aktyorlar:</span>
              <span class="actor ml-1">Usman li,</span>
              <span class="actor ml-1">Usman li,</span>
              <span class="actor ml-1">Usman li,</span>
              <span class="actor ml-1">Usman li,</span>
              <span class="actor ml-1">Usman li</span>

              <div class="movie-young ml-auto"
                   style="background: #070707; width: 28px; height: 22px; margin-top: -2px; border-radius: 3px">
                <span class="font-weight-bold pa-1" style="font-size: 12px;">16+</span>
              </div>

            </div>
            <div class="movie mt-4">
              <iframe class="iframe-mov"
                      src="https://www.youtube.com/embed/tgbNymZ7vqY">
              </iframe>

              <div class="d-flex">
                <a href="#" class="text-decoration-none ">
                  <v-icon dark style="color: #797191; font-size: 2rem">mdi-share-variant</v-icon>
                  <span class="ml-2 share-variant--text" style="font-weight: bold; font-size: 17px">Do'stlarga jo'natish</span>
                </a>
              </div>
              <div class="d-flex mt-3">
                <div class="rating-number">
                  <div style="font-size: 50px; font-weight: bold">7,<span style="font-size: 40px">0</span></div>
                  <div  style="color: #797191; font-size: 12px; position: absolute">Reyting 4media</div>
                  <div class="mt-6" style="position: absolute">
                  <v-btn style="border-color: #a5a1b2;" dark small outlined depressed>
                    Reyting
                  </v-btn>
                  </div>
                </div>
                <div class="col-3 ml-4 flex-column">
                  <div class="rejisor d-flex">
                    <v-progress-linear class="my-2" style="width: 50%; height: 5px; border-radius: 12px" color="red" value="50"></v-progress-linear>
                    <span class="text--white ml-2" style="font-size: 12px; color: #797191">Rejisyor</span>
                  </div>
                  <div class="rejisor d-flex">
                    <v-progress-linear class="my-2" style="width: 50%; height: 5px; border-radius: 12px" color="red" value="50"></v-progress-linear>
                    <span class="text--white ml-2" style="font-size: 12px; color: #797191">Syujet</span>
                  </div>
                  <div class="rejisor d-flex">
                    <v-progress-linear class="my-2" style="width: 50%; height: 5px; border-radius: 12px" color="red" value="50"></v-progress-linear>
                    <span class="text--white ml-2" style="font-size: 12px; color: #797191">Ko'rish</span>
                  </div>
                  <div class="rejisor d-flex">
                    <v-progress-linear class="my-2" style="width: 50%; height: 5px; border-radius: 12px" color="red" value="50"></v-progress-linear>
                    <span class="text--white ml-2" style="font-size: 12px; color: #797191">Aktyor</span>
                  </div>
                </div>
                <div class="flex-column">

                <div class="movie--bio special-text" style="color: #797191">
                  <p>
                    Seitan everyday carry leggings try-hard, hammock food truck thundercats jean shorts gentrify pinterest gastropub trust fund kinfolk scenester schlitz. Hammock pabst +1 four loko ennui. Before they sold out pickled crucifix umami kickstarter craft beer,
                    cronut flexitarian austin post-ironic whatever single-origin coffee. Brooklyn franzen authentic, try-hard DIY craft beer sartorial hella actually. Four loko ramps celiac 3 wolf moon neutra. Food truck leggings pork belly disrupt echo park four loko.
                    Deep v paleo shabby chic, 90's vinyl tofu vice seitan authentic whatever skateboard put a bird on it semiotics readymade sartorial.
                  </p>
                  <p>
                    Vice pop-up farm-to-table semiotics. Shabby chic ugh swag migas brooklyn jean shorts narwhal flannel, selfies wolf umami. Flexitarian chillwave bicycle rights tacos, trust fund selvage synth waistcoat. Mlkshk yr hashtag yuccie shoreditch. 3 wolf moon
                    humblebrag gastropub, intelligentsia gochujang tilde farm-to-table PBR&B fap vinyl pinterest irony 8-bit. Drinking vinegar XOXO hella portland ugh, man bun banjo kitsch kale chips iPhone fashion axe kinfolk chia. Intelligentsia ennui affogato cornhole,
                    etsy roof party quinoa pug thundercats franzen tacos sartorial cardigan.
                  </p>
                  <p>
                    Vice pop-up farm-to-table semiotics. Shabby chic ugh swag migas brooklyn jean shorts narwhal flannel, selfies wolf umami. Flexitarian chillwave bicycle rights tacos, trust fund selvage synth waistcoat. Mlkshk yr hashtag yuccie shoreditch. 3 wolf moon
                    humblebrag gastropub, intelligentsia gochujang tilde farm-to-table PBR&B fap vinyl pinterest irony 8-bit. Drinking vinegar XOXO hella portland ugh, man bun banjo kitsch kale chips iPhone fashion axe kinfolk chia. Intelligentsia ennui affogato cornhole,
                    etsy roof party quinoa pug thundercats franzen tacos sartorial cardigan.
                  </p>
                  <p>
                    Vice pop-up farm-to-table semiotics. Shabby chic ugh swag migas brooklyn jean shorts narwhal flannel, selfies wolf umami. Flexitarian chillwave bicycle rights tacos, trust fund selvage synth waistcoat. Mlkshk yr hashtag yuccie shoreditch. 3 wolf moon
                    humblebrag gastropub, intelligentsia gochujang tilde farm-to-table PBR&B fap vinyl pinterest irony 8-bit. Drinking vinegar XOXO hella portland ugh, man bun banjo kitsch kale chips iPhone fashion axe kinfolk chia. Intelligentsia ennui affogato cornhole,
                    etsy roof party quinoa pug thundercats franzen tacos sartorial cardigan.
                  </p>
                </div>
                <button class="expand-button">
                  Oxirgacha o'qing
                </button>
                </div>


              </div>
              <div class="d-flex mt-10">
                <div class="flex-column col-4">
                  <div style="font-size: 19px; font-weight: bold" class="lang_title">Kino Tili</div>
                  <span style="font-size: 15px" class="black--text-50">Uzbek tilida</span>
                </div>
                <div class="flex-column mt-2 ml-4">
                  <div style="font-size: 19px; font-weight: bold">Bizda bor kachestvolar</div>

                  <span style="font-size: 15px" class="black--text-50">HD, 1080, 720</span>

                </div>
              </div>

              <div class="d-flex mt-10">
                <div class="flex-column">
                  <div >
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
                                    <span style="color: #ffffff; font-size: 18px; border-radius: 2px; border-bottom: 3px solid #ea0042">Aktyorlar</span>
                                  </div>
                                  <div class="mt-6 flex-column">
                                    <div style="color: #ffffff; font-size: 20px; font-weight: bold">Rejissor:</div>
                                    <div class="d-flex">
                                      <img class="mt-5" src="../assets/arnold.jpeg" width="130" height="130" style="border-radius: 50%"/>
                                    </div>
                                    <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                                    <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                                    <div class="count_movie" style="font-size: 15px; color: #797191;">7 films</div>
                                  </div>
                                  <div class="mt-6 flex-column">
                                    <div style="color: #ffffff; font-size: 20px; font-weight: bold">Aktyorlar:</div>

                                    <div class="d-flex">

                                      <div class="flex-column">
                                        <img class="mt-5" src="../assets/arnold.jpeg" width="130" height="130" style="border-radius: 50%"/>
                                        <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                                        <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                                        <div class="count_movie" style="font-size: 15px; color: #797191;">7 films</div>
                                      </div>
                                      <div class="flex-column ml-5">
                                        <img class="mt-5" src="../assets/arnold.jpeg" width="130" height="130" style="border-radius: 50%"/>
                                        <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                                        <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                                        <div class="count_movie" style="font-size: 15px; color: #797191;">7 films</div>
                                      </div>
                                      <div class="flex-column ml-5">
                                        <img class="mt-5" src="../assets/arnold.jpeg" width="130" height="130" style="border-radius: 50%"/>
                                        <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                                        <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                                        <div class="count_movie" style="font-size: 15px; color: #797191;">7 films</div>
                                      </div>
                                      <div class="flex-column ml-5">
                                        <img class="mt-5" src="../assets/arnold.jpeg" width="130" height="130" style="border-radius: 50%"/>
                                        <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                                        <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                                        <div class="count_movie" style="font-size: 15px; color: #797191;">7 films</div>
                                      </div>
                                    </div>
                                    <div class="d-flex">

                                      <div class="flex-column">
                                        <img class="mt-5" src="../assets/arnold.jpeg" width="130" height="130" style="border-radius: 50%"/>
                                        <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                                        <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                                        <div class="count_movie" style="font-size: 15px; color: #797191;">7 films</div>
                                      </div>
                                      <div class="flex-column ml-5">
                                        <img class="mt-5" src="../assets/arnold.jpeg" width="130" height="130" style="border-radius: 50%"/>
                                        <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                                        <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                                        <div class="count_movie" style="font-size: 15px; color: #797191;">7 films</div>
                                      </div>
                                      <div class="flex-column ml-5">
                                        <img class="mt-5" src="../assets/arnold.jpeg" width="130" height="130" style="border-radius: 50%"/>
                                        <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                                        <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                                        <div class="count_movie" style="font-size: 15px; color: #797191;">7 films</div>
                                      </div>
                                      <div class="flex-column ml-5">
                                        <img class="mt-5" src="../assets/arnold.jpeg" width="130" height="130" style="border-radius: 50%"/>
                                        <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                                        <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                                        <div class="count_movie" style="font-size: 15px; color: #797191;">7 films</div>
                                      </div>
                                    </div>
                                    <div class="d-flex">

                                      <div class="flex-column">
                                        <img class="mt-5" src="../assets/arnold.jpeg" width="130" height="130" style="border-radius: 50%"/>
                                        <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                                        <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                                        <div class="count_movie" style="font-size: 15px; color: #797191;">7 films</div>
                                      </div>
                                      <div class="flex-column ml-5">
                                        <img class="mt-5" src="../assets/arnold.jpeg" width="130" height="130" style="border-radius: 50%"/>
                                        <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                                        <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                                        <div class="count_movie" style="font-size: 15px; color: #797191;">7 films</div>
                                      </div>
                                      <div class="flex-column ml-5">
                                        <img class="mt-5" src="../assets/arnold.jpeg" width="130" height="130" style="border-radius: 50%"/>
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

                        </div >
                      </v-dialog>

                  </div>
                  <div class="d-flex">
                    <div class="flex-column">
                      <img class="mt-5" src="../assets/arnold.jpeg" width="100" height="100" style="border-radius: 50%"/>
                      <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                      <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                      <div class="count_movie" style="font-size: 15px; color: #797191;">Rejissor</div>
                    </div>
                    <div class="flex-column ml-8">
                      <img class="mt-5" src="../assets/arnold.jpeg" width="100" height="100" style="border-radius: 50%"/>
                      <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                      <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                      <div class="count_movie" style="font-size: 15px; color: #797191;">Aktyor</div>
                    </div>
                    <div class="flex-column ml-8">
                      <img class="mt-5" src="../assets/arnold.jpeg" width="100" height="100" style="border-radius: 50%"/>
                      <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                      <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                      <div class="count_movie" style="font-size: 15px; color: #797191;">Aktyor</div>
                    </div>

                    <div class="flex-column ml-8">
                      <img class="mt-5" src="../assets/arnold.jpeg" width="100" height="100" style="border-radius: 50%"/>
                      <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                      <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                      <div class="count_movie" style="font-size: 15px; color: #797191;">Aktyor</div>
                    </div>

                    <div class="flex-column ml-8">
                      <img class="mt-5" src="../assets/arnold.jpeg" width="100" height="100" style="border-radius: 50%"/>
                      <div class="name" style="font-weight: bold; color: #a5a1b2;">Arnold</div>
                      <div class="surname" style="font-weight: bold; color: #a5a1b2;">Svasnegr</div>
                      <div class="count_movie" style="font-size: 15px; color: #797191;">Aktyor</div>
                    </div>



                    <div class="flex-column ml-8">
                      <div class="mt-5" @click="dialog = true" style="width: 100px; height: 100px; background: #797191; border-radius: 50%; text-align: center; line-height: 100px; font-size: 20px; font-weight: bold; cursor: pointer">Yana</div>
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
        <div class="offset-2 col-8 my-4">
          <div class="movie-detail d-flex flex-column white--text">
              <div class="d-flex mt-3">
                <div class="flex-column">
                <div class="flex-column">
                  <div style="font-size: 1.5rem; font-weight: bold; color: #ffffff">Syujet</div>
                  <div class="movie--bio special-text" style="color: #797191">
                    <p>
                      Seitan everyday carry leggings try-hard, hammock food truck thundercats jean shorts gentrify pinterest gastropub trust fund kinfolk scenester schlitz. Hammock pabst +1 four loko ennui. Before they sold out pickled crucifix umami kickstarter craft beer,
                      cronut flexitarian austin post-ironic whatever single-origin coffee. Brooklyn franzen authentic, try-hard DIY craft beer sartorial hella actually. Four loko ramps celiac 3 wolf moon neutra. Food truck leggings pork belly disrupt echo park four loko.
                      Deep v paleo shabby chic, 90's vinyl tofu vice seitan authentic whatever skateboard put a bird on it semiotics readymade sartorial.
                    </p>
                    <p>
                      Vice pop-up farm-to-table semiotics. Shabby chic ugh swag migas brooklyn jean shorts narwhal flannel, selfies wolf umami. Flexitarian chillwave bicycle rights tacos, trust fund selvage synth waistcoat. Mlkshk yr hashtag yuccie shoreditch. 3 wolf moon
                      humblebrag gastropub, intelligentsia gochujang tilde farm-to-table PBR&B fap vinyl pinterest irony 8-bit. Drinking vinegar XOXO hella portland ugh, man bun banjo kitsch kale chips iPhone fashion axe kinfolk chia. Intelligentsia ennui affogato cornhole,
                      etsy roof party quinoa pug thundercats franzen tacos sartorial cardigan.
                    </p>
                    <p>
                      Vice pop-up farm-to-table semiotics. Shabby chic ugh swag migas brooklyn jean shorts narwhal flannel, selfies wolf umami. Flexitarian chillwave bicycle rights tacos, trust fund selvage synth waistcoat. Mlkshk yr hashtag yuccie shoreditch. 3 wolf moon
                      humblebrag gastropub, intelligentsia gochujang tilde farm-to-table PBR&B fap vinyl pinterest irony 8-bit. Drinking vinegar XOXO hella portland ugh, man bun banjo kitsch kale chips iPhone fashion axe kinfolk chia. Intelligentsia ennui affogato cornhole,
                      etsy roof party quinoa pug thundercats franzen tacos sartorial cardigan.
                    </p>
                    <p>
                      Vice pop-up farm-to-table semiotics. Shabby chic ugh swag migas brooklyn jean shorts narwhal flannel, selfies wolf umami. Flexitarian chillwave bicycle rights tacos, trust fund selvage synth waistcoat. Mlkshk yr hashtag yuccie shoreditch. 3 wolf moon
                      humblebrag gastropub, intelligentsia gochujang tilde farm-to-table PBR&B fap vinyl pinterest irony 8-bit. Drinking vinegar XOXO hella portland ugh, man bun banjo kitsch kale chips iPhone fashion axe kinfolk chia. Intelligentsia ennui affogato cornhole,
                      etsy roof party quinoa pug thundercats franzen tacos sartorial cardigan.
                    </p>
                  </div>
                  <button class="expand-button">
                    Oxirgacha o'qing
                  </button>
                </div>


              </div>


            </div>
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
                <div class="comment-movie mt-4 d-flex">
                  <v-card
                      class=""
                      width="300"
                      height="160"
                      style="background: #1b172a; border-radius: 12px"
                  >
                    <div class="card-title ml-5">Arab</div>
                    <div class="card-content ml-5 mt-3 black--text-50" >Kino juda zo'r</div>
                    <div class="d-flex " style="margin-top: 15%">
                      <div class="card-date ml-5 mt-3" style="font-size: 14px; color: #797191">12.21.2021</div>
                      <div class="ml-auto">
                        <v-btn flat icon color="blue lighten-2">
                          <v-icon>mdi-thumb-up</v-icon>
                        </v-btn>
                        <span style="font-size: 18px; color: deepskyblue">
                          1
                        </span>
                        <v-btn  flat icon color="red lighten-2">
                          <v-icon>mdi-thumb-down</v-icon>
                        </v-btn>

                      </div>
                    </div>
                  </v-card>
                  <v-card
                      class="ml-10"
                      width="300"
                      height="160"
                      style="background: #1b172a; border-radius: 12px"
                  >
                    <div class="card-title ml-5">Arab</div>
                    <div class="card-content ml-5 mt-3 black--text-50" >Kino juda zo'r</div>
                    <div class="d-flex " style="margin-top: 15%">
                      <div class="card-date ml-5 mt-3" style="font-size: 14px; color: #797191">12.21.2021</div>
                      <div class="ml-auto">
                        <v-btn flat icon color="blue lighten-2">
                          <v-icon>mdi-thumb-up</v-icon>
                        </v-btn>
                        <span style="font-size: 18px; color: deepskyblue">
                          1
                        </span>
                        <v-btn  flat icon color="red lighten-2">
                          <v-icon>mdi-thumb-down</v-icon>
                        </v-btn>

                      </div>
                    </div>
                  </v-card>

                </div>
              </div>
          </div>

        </div>

      </div>
    </v-container>
  </div>
</template>


<style lang="scss">

@import "~@mdi/font/css/materialdesignicons.css";
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

.on-actors:hover{
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

.share-variant--text{
  color: #d9d7e0;
}

.share-variant--text:hover{
  color: #ffffff;
}

.modal-container{
  position: relative;
  z-index: 999;
}
</style>

<script>
import $ from 'jquery'



export default {
  data () {
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
      ]

    }
  },
  mounted() {
    $('.expand-button').on('click', function(){
      $('.special-text').toggleClass('-expanded');

      if ($('.special-text').hasClass('-expanded')) {
        $('.expand-button').html('Qaytarish');
      } else {
        $('.expand-button').html('Davom etirrish');
      }
    });
  }
}

</script>