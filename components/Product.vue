<template>
    <div class="col-lg-4 col-md-12" >
         <b-card-text >
                <div
                  class="card hoverable mb-4"  @click="goToProduct(product.id)"
                >
                  <img
                    class="card-img-top"
                    :src="product.imgURL"
                    :alt="product.title"
                  />
                  <div class="card-body">
                    <h5 class="my-3">{{ product.name }}</h5>
                    <p class="card-text text-uppercase mb-3">
                      {{ product.price }}
                    </p>
                  </div>
                </div>
              </b-card-text>
    </div>
</template>

<script>
export default {
    props:['product'],
    methods:{
     goToProduct(id) {
      this.$router.push('/product/'+id)
    }
    }
}
</script>