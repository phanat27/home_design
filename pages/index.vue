<template>
  <div>
    <div>
      <!-- <Logo  /> -->
      <Menu />
      <Carousel />
      <div class="container">
      <Gallery />
      <Services />
      <ProductList :products="products"/>
      </div>
      <!-- <ProductCategory :products="products"/> -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Menu from '../components/Menu.vue'
import products from '@/service/products'
import ProductCategory from '../components/ProductCategory'
import ProductList from '../components/ProductList'
export default {
  components: { Carousel,Menu, ProductCategory, ProductList },
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}, callback) {
    setTimeout(()=>{
      callback(null,{products: products})
    },2000)
  },
  }
</script>

<style >

</style>
