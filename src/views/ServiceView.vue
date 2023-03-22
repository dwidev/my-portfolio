<template>
  <NavBarComponent />

  <main id="main">
    <section class="section">
      <div class="container">
        <div class="row mb-4 align-items-center">
          <div class="col-md-6" data-aos="fade-up">
            <h2>My Services</h2>
            <p>
              These are some of the stacks that could working on or help meet your needs, for this
              you can use me to make the whole application, team colaborations, bug fixing
              (depending on complexity), implementation of one of the features
            </p>
          </div>
        </div>
      </div>

      <div class="site-section pb-0 services">
        <div class="container">
          <div class="row">
            <div
              class="col-12 col-sm-6 col-md-6 col-lg-6 mb-5"
              data-aos="fade-up"
              data-aos-delay=""
              v-for="service in services"
            >
              <i :class="service.icon"></i>
              <h4 class="h4 mb-2">{{ service.name }}</h4>
              <p>{{ service.desc }}</p>
              <ul class="list-unstyled list-line" v-for="stack in service.techStack">
                <li>{{ stack }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->

  <Footer />
</template>
<script lang="ts">
export default {
  data() {
    return {
      services: [
        {
          icon: 'bi bi-phone',
          name: 'Mobile Development',
          desc: 'Creating mobile app for multiplatform Android & IOS',
          techStack: [
            'Flutter',
            'Provider/Getx/Riverpod/Bloc(Medium)',
            'Firebase',
            'Notification',
            'Local database',
            'etc.'
          ]
        },
        {
          icon: 'bi bi-card-checklist',
          name: 'Web Development',
          desc: 'Creating beatifull website',
          techStack: ['VueJS', 'Vuex', 'Firebase', 'etc.']
        }
      ]
    }
  }
}
</script>
