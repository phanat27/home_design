<template>
  <div class="w3-light-grey">
    <div class="w3-content" style="max-width:1600px">
      <div class="w3-row w3-padding w3-border">
        <div class="w3-col l8 s12">
          <div class="w3-container w3-white w3-margin w3-padding-large">
            <div class="w3-justify">
              <h1>Laptops</h1><br><br>
              <div>
                <button
                  v-for="pageNumber in totalPages"
                  :key="pageNumber.id"
                  class="w3-button"
                  :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}"
                  @click="setPage(pageNumber)"
                >
                  {{ pageNumber }}
                </button>
              </div>
              <div v-for="article in paginate" :key="article._id" class="container w3-white w3-card">
                <br>
                <div class="row">
                  <div class="col-sm-4">
                    <!-- <img src="~/assets/laptop.jpg" style="width:100px; height:100px"> -->
                  </div>
                  <div class="col-sm-4">
                    <h5><span class="w3-large w3-text-teal">{{ article.title }},</span></h5>
                    <span>OS: {{ article.os }}</span><br>
                    <span>{{ article.size }} Inches</span><br>
                    <span>{{ article.ram }} GB RAM</span><br>
                    <span v-if="article.storage >= 1000">{{ article.storage/1000 }} TB Storage,</span>
                    <span v-else>{{ article.storage }} GB Storage,</span><br>
                  </div>
                  <div class="col-sm-4">
                    <h3>${{ article.price }}</h3>
                    <p><a href=""><button class="w3-button w3-block w3-teal">Buy Now</button></a></p>
                  </div>
                </div><hr>
              </div>
              <div>
                <button
                  v-for="pageNumber in totalPages"
                  :key="pageNumber.id"
                  class="w3-button"
                  :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}"
                  @click="setPage(pageNumber)"
                >
                  {{ pageNumber }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      articles: [{
        os: 'Windows',
        price: '500',
        weight: '3.9',
        size: '11.1',
        storage: '500',
        ram: '8',
        company: 'hp',
        title: 'HP laptop 14'
      },
      {
        os: 'Chromeos',
        price: '400',
        weight: '7.0 Pounds',
        size: '11.1',
        storage: '256 GB',
        ram: '4',
        company: 'hp',
        title: 'HP Chromebook 14'
      },
      {
        os: 'Windows',
        price: '450',
        weight: '3.9',
        size: '11.1',
        storage: '500',
        ram: '8',
        company: 'hp',
        title: 'HP laptop 14'
      },
      {
        os: 'Windows',
        price: '600',
        weight: '3.9',
        size: '11.1',
        storage: '500',
        ram: '8',
        company: 'hp',
        title: 'HP laptop 14'
      },
      {
        os: 'Windows',
        price: '700',
        weight: '3.9',
        size: '11.1',
        storage: '500',
        ram: '8',
        company: 'hp',
        title: 'HP laptop 14'
      },
      {
        os: 'Windows',
        price: '350',
        weight: '3.9',
        size: '11.1',
        storage: '500',
        ram: '8',
        company: 'hp',
        title: 'HP laptop 14'
      },
      {
        os: 'Windows',
        price: '400',
        weight: '3.9',
        size: '11.1',
        storage: '500',
        ram: '8',
        company: 'hp',
        title: 'HP laptop 14'
      }],
      currentPage: 1,
      itemsPerPage: 3,
      resultCount: 0
    }
  },
  computed: {
  /* eslint-disable */
      totalPages: function() {
        if (this.resultCount == 0){
          return 1
        }
        else {
        return Math.ceil(this.resultCount / this.itemsPerPage)
      }
      },
      /* eslint-disable */
      paginate: function() {
          if (!this.articles || this.articles.length != this.articles.length) {
              return
          }
          this.resultCount = this.articles.length
          if (this.currentPage >= this.totalPages) {
            this.currentPage = this.totalPages
          }
          var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
          return this.articles.slice(index, index + this.itemsPerPage)
      }
  },
  methods: {
    setPage (pageNumber) {
      this.currentPage = pageNumber
    }
  }
}
</script>

<style lang="css">
.current {
color: teal;
}
</style>