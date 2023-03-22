<template>
  <NavBarComponent />

  <main id="main">
    <section class="section pb-5">
      <div class="container">
        <div class="row mb-5 align-items-end">
          <div class="col-md-6" data-aos="fade-up">
            <h2>About Me (Mobile Dev)</h2>
            <p class="mb-0">
              I am a very simple person, right now I am a Mobile & Frontend engineer use Flutter
              Framework for Mobile development and VueJS for Web development, i'm just a person who
              is developing myself and wants to be even better.
            </p>
            <br />
          </div>
          <div data-aos="fade-up">
            <div class="row">
              <p class="col-md-4"><strong>Email</strong> : fahmidwi45@gmail.com</p>
              <p class="col-md-6"><strong>Place</strong> : Bogor, Indonesia</p>
            </div>
            <div class="row">
              <p class="col-md-4"><strong>Phone</strong> : +6289516262195</p>
              <p class="col-md-6"><strong>Scope</strong> : Mobile & Website</p>
            </div>
            <div class="row">
              <p class="col-md-4"><strong>Age</strong> : 23</p>
              <p class="col-md-6"><strong>Tech Curently </strong> : Flutter</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-7 ml-auto order-2" data-aos="fade-up">
            <h3 class="h3 mb-">Skills</h3>
            <ul class="list-unstyled">
              <li v-for="skill in listSkill" class="mb-3">
                <div class="d-flex mb-1">
                  <strong>{{ skill.name }}</strong>
                  <span class="ml-auto">({{ skill.level }}) {{ skill.percentage }}%</span>
                </div>
                <div class="progress custom-progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="{ width: skill.percentage + '%' }"
                    :aria-valuenow="skill.percentage"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </li>
            </ul>

            <ul class="list-unstyled">
              <li v-for="workflow in workFlows">
                <div class="d-flex">
                  <strong>{{ workflow.desc }}</strong>
                </div>
              </li>
            </ul>
            <br />

            <h3 class="h3 mb-3">Interest</h3>
            <div class="list-unstyled">
              <template v-for="(interst, index) in interests">
                <strong>{{ interst }}{{ index == interests.length - 1 ? '' : ', ' }}</strong>
              </template>
            </div>
            <br />
          </div>

          <div class="col-md-4 mb-5 mb-md-0" data-aos="fade-up">
            <p><img src="../assets/img/me.jpeg" alt="Image" class="img-fluid" /></p>
            <!-- <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dignissimos delectus
              minima reprehenderit molestias illo dolorem et, odio!
            </p>
            <p>
              Fuga fugit distinctio delectus iure vitae consequatur excepturi, mollitia, consectetur
              molestias sapiente rem consequuntur, illum adipisci, sed obcaecati!
            </p>
            <p>
              Ex, dolorem qui voluptas reprehenderit provident, ad ipsum iure a consequatur
              voluptatem incidunt nobis. Vitae reiciendis quae ex.
            </p>
            <p>
              Optio consectetur culpa nemo, fugit pariatur veniam voluptate laudantium rerum fuga
              dolor in maiores ea nisi voluptatibus. Minus?
            </p> -->
            <!-- <p><a href="#" class="readmore">Download my CV</a></p> -->
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
      listSkill: [
        {
          name: 'Flutter & Dart',
          level: 'Advances',
          percentage: '90'
        },
        {
          name: 'Vue JS',
          level: 'Medium',
          percentage: '75'
        },
        {
          name: 'React Native',
          level: 'Medium',
          percentage: '50'
        },
        {
          name: 'React JS',
          level: 'Medium',
          percentage: '50'
        },
        {
          name: 'Kotlin',
          level: 'Beginner',
          percentage: '30'
        },
        {
          name: 'Swift',
          level: 'Beginner',
          percentage: '30'
        }
      ],
      //       Project Management
      // Lead Team
      //
      //
      // Clean Architecture
      //
      workFlows: [
        {
          desc: '- Mobile Apps, Support & Manage Multiple Devices'
        },
        {
          desc: '- Website, Responsive Design, Browser testing & Debugging'
        },
        {
          desc: '- Agile Development & Scrum'
        },
        { desc: '- Cross Functional Teams' },
        { desc: '- GIT' },
        { desc: '- Solid Principle & Clean Architecture' },
        { desc: '- Strong OPP Logic' },
        { desc: '- Optimize Code' },
        { desc: '- Unit Testing' }
      ],
      interests: ['Coding', 'Read book', 'Movie', 'Gaming', 'Coffea', 'Flutter & Go']
    }
  }
}
</script>
