<template>
  <NavBarComponent />

  <main id="main">
    <!-- ======= Works Section ======= -->
    <section class="section site-portfolio">
      <div class="container">
        <div class="row mb-5 align-items-center">
          <div class="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
            <h2>Hey, I'm Fahmi dwi syahputra</h2>
            <p class="mb-0">Mobile &amp; Web Developer</p>
            <div class="col-sm-6 social mt-3">
              <a href="https://github.com/dwidev" target="_blank"
                ><span class="bi bi-github"></span
              ></a>
              <a href="https://www.instagram.com/dwifhmi/reels/" target="_blank"
                ><span class="bi bi-instagram"></span
              ></a>
              <a href="https://www.linkedin.com/in/fahmi-dwi-syahputra-995994130/" target="_blank"
                ><span class="bi bi-linkedin"></span
              ></a>
            </div>
          </div>
          <div
            class="col-md-12 col-lg-6 text-start text-lg-end"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div id="filters" class="filters">
              <a href="#" data-filter="*" class="active">All</a>
              <a href="#" data-filter=".mobile">Mobile</a>
              <a href="#" data-filter=".web">Web</a>
              <a href="#" data-filter=".uiux">UI/UX</a>
            </div>
          </div>
        </div>

        <div id="portfolio-grid" class="row no-gutter" data-aos="fade-up" data-aos-delay="200">
          <template v-for="porto in listPortfolio">
            <div
              class="item mobile col-sm-6 col-md-4 col-lg-4 mb-4"
              data-bs-toggle="modal"
              data-bs-target="#portoModal"
              @click="onClickPorto(porto.image)"
            >
              <a href="#" class="item-wrap fancybox">
                <div class="work-info">
                  <h3>{{ porto.title }}</h3>
                  <span>{{ porto.type }}</span>
                </div>
                <img class="img-fluid" :src="imageSrc(porto.image)" />
              </a>
            </div>
          </template>
        </div>
      </div>
    </section>
    <div
      class="modal fade"
      id="portoModal"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div
          class="modal-content"
          style="background-color: transparent !important; border: none !important"
        >
          <div class="position-absolute top-0 end-0">
            <a href="#"
              ><span
                class="bi bi-x-lg"
                style="font-size: 30px; color: black; margin-right: 15px"
                data-bs-dismiss="modal"
              ></span
            ></a>
          </div>
          <img :src="imageSrc(imageModal)" />
        </div>
      </div>
    </div>
    <!-- End  Works Section -->

    <!-- ======= Services Section ======= -->
    <!-- <section class="section services">
      <div class="container">
        <div class="row justify-content-center text-center mb-4">
          <div class="col-5">
            <h3 class="h3 heading">My Services</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <i class="bi bi-card-checklist"></i>
            <h4 class="h4 mb-2">Website</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
            <ul class="list-unstyled list-line">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
              <li>Non pariatur nisi</li>
              <li>Magnam soluta quod</li>
              <li>Lorem ipsum dolor</li>
              <li>Cumque quae aliquam</li>
            </ul>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <i class="bi bi-binoculars"></i>
            <h4 class="h4 mb-2">Mobile Applications</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
            <ul class="list-unstyled list-line">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
              <li>Non pariatur nisi</li>
              <li>Magnam soluta quod</li>
              <li>Lorem ipsum dolor</li>
              <li>Cumque quae aliquam</li>
            </ul>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <i class="bi bi-brightness-high"></i>
            <h4 class="h4 mb-2">Graphic Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
            <ul class="list-unstyled list-line">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
              <li>Non pariatur nisi</li>
              <li>Magnam soluta quod</li>
              <li>Lorem ipsum dolor</li>
              <li>Cumque quae aliquam</li>
            </ul>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <i class="bi bi-calendar4-week"></i>
            <h4 class="h4 mb-2">SEO</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
            <ul class="list-unstyled list-line">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
              <li>Non pariatur nisi</li>
              <li>Magnam soluta quod</li>
              <li>Lorem ipsum dolor</li>
              <li>Cumque quae aliquam</li>
            </ul>
          </div>
        </div>
      </div>
    </section> -->
    <!-- End Services Section -->
  </main>
  <!-- End #main -->

  <Footer />
</template>
<script lang="ts">
export default {
  methods: {
    imageSrc(image: string) {
      const res = new URL(`../assets/img/${image}`, import.meta.url).href
      return res
    },
    onClickPorto(image: string) {
      console.log(import.meta.env.BASE_URL)

      this.imageModal = image
    }
  },
  data() {
    return {
      imageModal: '',
      listPortfolio: [
        {
          title: 'AMS',
          type: 'Mobile',
          image: 'ams.png'
        },
        {
          title: 'Career support - Candidate',
          type: 'Mobile',
          image: 'csm.png'
        },
        {
          title: 'Career support - Company',
          type: 'Mobile',
          image: 'csc.png'
        },
        {
          title: 'Fundraising Supporter',
          type: 'Mobile',
          image: 'fs.png'
        },
        {
          title: 'Fundraising Group',
          type: 'Mobile',
          image: 'fg.png'
        },
        {
          title: 'Contest APP',
          type: 'Mobile',
          image: 'contest.png'
        },
        {
          title: 'Superman APP',
          type: 'Mobile',
          image: 'sm.png'
        }
      ]
    }
  }
}
</script>
