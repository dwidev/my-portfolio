<script lang="ts">
export default {
  methods: {
    toHome() {
      this.$router.push({ path: '/' }).then(() => {
        this.$router.go(0)
      })
    }
  }
}
</script>
<template>
  <!-- ======= Navbar ======= -->
  <div class="collapse navbar-collapse custom-navmenu" id="main-navbar">
    <div class="container py-2 py-md-5">
      <div class="row align-items-start">
        <div class="col-md-8">
          <ul class="custom-menu">
            <li><a href="#" :onclick="toHome">Home</a></li>
            <li><RouterLink to="/about">About Me</RouterLink></li>
            <!-- <li><RouterLink to="/portfolio">Portfolio</RouterLink></li> -->
            <li><RouterLink to="/service">Services</RouterLink></li>
          </ul>
        </div>
        <div class="col-md-4 d-none d-md-block">
          <h3>Contact/Hire me</h3>
          <p>
            I would be happy to establish a good cooperation with you. If you are interested, please
            feel free to contact me.<br />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=fahmidwi45@gmail.com"
              target="_blank"
              >fahmidwi45@gmail.com (+6289516262195)</a
            >
          </p>
          <div class="col-sm-12 social text-md-end">
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
      </div>
    </div>
  </div>

  <nav class="navbar navbar-light custom-navbar">
    <div class="container">
      <a class="navbar-brand">{{ $route.path != '/' ? 'Fahmi dwi syahputra.' : 'MyPortfolio.' }}</a>
      <a href="#" class="burger" data-bs-toggle="collapse" data-bs-target="#main-navbar">
        <span></span>
      </a>
    </div>
  </nav>
</template>
