<template>
  <div>
    <HeadProductCategory />
    <!-- <div> -->
    <b-card no-body>
      <b-tabs pills card>
        <b-tab title="All" active>
          <div class="row">
            <Product
              v-for="product in fetchAllProduct"
              :key="product.id"
              :product="product"
            />
          </div>
        </b-tab>
        <b-tab
          v-for="category in category"
          :key="category.id"
          :title="category"
          @click="activeCategory = category"
        >
          <!-- <b-card-text>{{ fetchProduct }}</b-card-text> -->
          <div class="row">
          <Product
            v-for="product in fetchProduct"
            :key="product.id"
            :product="product"
          />
          </div>
        </b-tab>
      </b-tabs>
    </b-card>
    <!-- </div> -->
  </div>
</template>

<script>
import HeadProductCategory from "./HeadProductCategory";
import Product from "./Product";
export default {
  components: { HeadProductCategory, Product },
  props: ["products"],
  data() {
    return {
      //   products: null,
      category: null,
      productsList: null,
      activeCategory: "All"
    };
  },

  computed: {
    fetchProduct() {
      return this.products.filter(x => {
        let res = x.category == this.activeCategory;
        console.log("res : ", res);
        return res;
      });
      console.log("this.product : ", this.product);
    },
    fetchAllProduct() {
      return this.products.map(x => {
        return x;
      });
    }
    // fetchProducts() {
    //  return this.products = products.map(res => {
    //     console.log("res.category : ", res.category)
    //     return res.category
    //   })
    //   console.log('this.products : ', this.products)
    // }
  },
  mounted() {
    this.fetchProducts(), this.fetchProductsCategory();
    //  this.fetchProduct,
    // console.log('this.category :', this.category)
  },
  methods: {
    fetchProducts() {
      this.product = this.products.map(res => {
        console.log("res.category : ", res.category);
        return res.category;
      });
      console.log("this.products : ", this.products);
    },
    fetchProductsCategory() {
      const unique = (value, index, self) => {
        return self.indexOf(value) === index;
      };
      this.category = this.product.filter(unique);
      console.log("this.category :", this.category);
    }
    // fetchProduct(){
    //    this.product = products.filter( (products) =>
    //   { let res = products.category == this.category
    //   console.log('res : ', res)
    //     return res}
    //   )
    //   console.log('this.product : ', this.product)
    // }
  }
};
</script>
