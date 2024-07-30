<template>
    <section class="courses">
        <article v-for="course in courses" :key="course.id" class="courses__card">
          <NuxtLink :to="`/courseReview/${course.id}`" class='courses__link d-flex justify-space-between'>
          <div class="courses__details">
            <h2 class="courses__title overflow-hidden">
                {{ course.title }}
            </h2>
            <p class="courses__price">
              {{course.price}}
            </p>
            <p class="courses__text">
              {{course.age}}
            </p>
            <p class="courses__text">
              {{course.company}}
            </p>
            <p class="courses__text">
              {{course.location}} 
            </p>
          </div>
          <div class="courses__company-container d-flex justify-space-between">
          <img src="/logoCompany.png"/>
            <v-rating
                v-model="rating"
                    active-color="#999999"
                    readonly
                ></v-rating>
            </div>
            </NuxtLink> 
        </article>
        <v-pagination
            class='courses__pagination'
            v-model="currentPage"
            :length="totalPages"
            @input="fetchCourses"
        ></v-pagination>
    </section>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      totalPages: 1,
      courses: [],
      rating: 5
    };
  },
  methods: {
    fetchCourses() {
      this.$api.get(`courses/?page=${this.currentPage}`)
        .then(response => {
          this.courses = response.data.results;
          this.totalPages = Math.ceil(response.data.count / response.data.results.length);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  },
  watch: {
    currentPage() {
      this.fetchCourses();
    }
  },
  created() {
    this.fetchCourses();
  }
};
</script>
<style lang="scss">
.courses{
  &__card{
    border: 1px solid #C7C7C7;
    height: auto;
    border-radius: 10px;
    margin: 24px 0 0 0; 
  }
  &__link{
    text-decoration: none;
    color: black;
    padding: 24px 20px 24px 20px;
    flex-direction: column-reverse;
  }
  &__details{
    width: 70%;
  }
  &__title{
    font-size: 20px;
    width: 305px;
    height: 36px;
  }
  &__price{
    font-size: 16px;
    font-weight: bold;
  }
  &__text{
    font-size: 16px;
    padding-top: 10px;
  }
  &__company-container{
    flex-direction: row;
    align-items: center;
    padding-bottom: 30px;
  }
  &__pagination{
    padding-top: 20px;

    .v-btn{
      border-radius: 50%;
      height: 32px;
      width: 32px;
    }
    .v-pagination__item--is-active{
      background: #fdd503; 
      border-radius: 50%;
    }
  }
  @media (min-width: 768px) {
    &__company-container{
      flex-direction: column;
      align-items: flex-end;
      padding-bottom: 0;
    }
    &__card{
      height: 254px;
    }
    &__link{
      flex-direction: row;
      width: 100%; 
    }
  }
  @media (min-width: 1024px) {
    &__title{
      font-size: 24px;
      width: 405px;
      height: 44px;
    }
  }
  @media (min-width: 1440px) {
    &__title{
      font-size: 28px;
      width: 551px;
    }
  }
}
</style>