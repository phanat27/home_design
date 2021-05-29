<template>
  <div >
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        img-src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img(10).jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img(11).jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img(12).jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style scoped>
</style>
