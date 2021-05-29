<template>
  <div>
    <div class="container my-5 py-5 z-depth-1">
      <!--Section: Content-->
      <section class="text-center">
        <!-- Section heading -->
        <h3 class="font-weight-bold mb-5">Product Details</h3>
        <div class="row">
          <div class="col-lg-6">
            <a-carousel arrows dots-class="slick-dots slick-thumb">
              <a slot="customPaging" slot-scope="props">
                <img :src="getImgUrl(props.i)" />
              </a>
              <div v-for="item in 4" :key="item">
                <img :src="baseUrl + 'abstract0' + item + '.jpg'" />
              </div>
            </a-carousel>
          </div>

          <div class="col-lg-5 text-center text-md-left">
            <h2
              class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4"
            >
              iPad PRO
            </h2>
            <span class="badge badge-danger product mb-4 ml-xl-0 ml-4"
              >bestseller</span
            >
            <span class="badge badge-success product mb-4 ml-2">SALE</span>

            <h3
              class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4"
            >
              <span class="red-text font-weight-bold">
                <strong>$1449</strong>
              </span>
              <span class="grey-text">
                <small>
                  <s>$1789</s>
                </small>
              </span>
            </h3>

            <div class="font-weight-normal">
              <p class="ml-xl-0 ml-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente nesciunt atque nemo neque ut officiis nostrum incidunt
                maiores, magni optio et sunt suscipit iusto nisi totam quis,
                nobis mollitia necessitatibus.
              </p>

              <p class="ml-xl-0 ml-4"><strong>Storage: </strong>64GB</p>
              <p class="ml-xl-0 ml-4"><strong>Size: </strong>9.6-inch</p>
              <p class="ml-xl-0 ml-4">
                <strong>Resolution: </strong>2048 x 1536
              </p>
              <p class="ml-xl-0 ml-4">
                <strong>Availability: </strong>In stock
              </p>

              <div class="mt-5">
                <p class="grey-text">Choose your color</p>
                <div class="row text-center text-md-left">
                  <div class="col-md-4 col-12 ">
                    <div class="form-group">
                      <input
                        class="form-check-input"
                        name="group100"
                        type="radio"
                        id="radio100"
                        checked="checked"
                      />
                      <label
                        for="radio100"
                        class="form-check-label dark-grey-text"
                        >White</label
                      >
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <input
                        class="form-check-input"
                        name="group100"
                        type="radio"
                        id="radio101"
                      />
                      <label
                        for="radio101"
                        class="form-check-label dark-grey-text"
                        >Silver</label
                      >
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <input
                        class="form-check-input"
                        name="group100"
                        type="radio"
                        id="radio102"
                      />
                      <label
                        for="radio102"
                        class="form-check-label dark-grey-text"
                        >Gold</label
                      >
                    </div>
                  </div>
                </div>
                <div class="row mt-3 mb-4">
                  <div class="col-md-12 text-center text-md-left text-md-right">
                    <button class="btn btn-primary btn-rounded">
                      <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Content-->
    </div>
  </div>
</template>

<script>
const baseUrl =
  "https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/";
export default {
  data() {
    return {
      baseUrl
    };
  },
  methods: {
    getImgUrl(i) {
      return `${baseUrl}abstract0${i + 1}.jpg`;
    }
  }
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-dots {
  height: auto;
}
.ant-carousel >>> .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>
