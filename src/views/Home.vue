<template>
  <section class="view-body">
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-head">
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">Spatial Planning Tools</h1>
          <h2 class="subtitle">Tools for spatial planning researchers and planners.</h2>
          <div class="buttons is-centered">
            <b-button
              @click="gotoMjollnir"
              type="is-link"
              inverted
              outlined>Mjollnir-SWS</b-button>
            <b-button
              @click="gotoPatj"
              type="is-link"
              inverted
              outlined>PATJ-Manager</b-button>
          </div>
        </div>
      </div>
      <div class="hero-foot has-text-centered">
        <p class="has-text-dark">2019 <strong class="has-text-dark">Spatial Planning Tools</strong> developed by planners for planners.</p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  computed: {
    currentProjects() {
      return this.$store.state.counties;
    },
  },
  methods: {
    gotoMjollnir() {
      this.$router.push({ name: 'mjollnirsws' });
    },
    gotoPatj() {
      this.$router.push({ name: 'patjmngr' });
    },
  },
};
</script>

<style lang="sass">
.button-box

.view-body
  height: 100%

</style>
