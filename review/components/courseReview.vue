<template>
  <div class="d-flex mx-auto justify-space-between course-review">
    <nav class="course-review__nav-menu align-center">
      <span class="course-review__nav-title">Головна</span>
    </nav>
    <div class="course-review__content">
      <section class="course-review__top-section d-flex justify-space-between">
        <div class="course-review__info">
          <h2 class="course-review__title font-weight-black">{{course.title}}</h2>
          <p class="course-review__price">{{course.price}}</p>
          <p class="course-review__info-item">{{course.age}}</p>
          <p class="course-review__info-item">{{course.company}}</p>
          <p class="course-review__info-item">{{course.location}}</p>
        </div>
        <img src="/logoCompany.png" class="course-review__logo"/>
      </section>
      <div class="d-flex">
        <button class="course-review__apply-btn font-weight-black">Відправити заявку</button>
        <button class="course-review__contacts-btn font-weight-black">Показати контакти</button>
      </div>
      <section class="course-review__about">
        <h2 class="course-review__section-title">Про курс</h2>
        <p class="course-review__description">{{course.description}}</p>
      </section>
      <section class="course-review__section">
        <h2 class="course-review__section-title">Програма курсу</h2>
        <ul class="course-review__program-list">
          <li>Мовний інвентар – лексика, граматика.</li>
          <li>Ситуативне спілкування у групах за темами: «Друзі», «Родина», «Житло», «Дозвілля і розваги», «Подорожі», «Одяг», «Їжа», «Місто», «Транспорт», «Погода», «Навколишнє середовище», «Здоров'я».</li>
          <li>Аудіювання</li>
        </ul>
        <button class="course-review__apply-btn font-weight-black">Відправити заявку</button>
      </section>
      <section class="course-review__section">
        <h2 class="course-review__section-title">Категорії курсів</h2>
        <div class="d-flex course-review__categories-list">
          <div class="course-review__category-item d-flex flex-row align-center">
            <div class="course-review__category-icon rounded-circle"></div> 
            <span>Англійська мова</span>
          </div>
          <div class="course-review__category-item d-flex flex-row align-center">
            <div class="course-review__category-icon rounded-circle"></div>
            <span>Мова</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: {}
    };
  },
  mounted() {
    this.$api.get(`courses/${this.$route.params.id}`)
      .then(response => {
        this.course = response.data;
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
};
</script>

<style>
.course-review {
  width: 365px;
  padding: 0 10px 0 10px;
}
</style>
