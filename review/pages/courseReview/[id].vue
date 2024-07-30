<template>
	<div class="d-flex mx-auto container-main justify-space-between course-review">
		<nav class="course-review__nav-menu align-center">
			<!-- <Icon name="my-icon:home" class='course-review__icon-home'/> -->
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
				<img src="/logoCompany.png" class='course-review__logo'/>
			</section>
			<div class="d-flex">
				
			<button class='course-review__apply-btn font-weight-black'>Відправити заявку</button>
			<button class='course-review__contacts-btn font-weight-black'>Показати контакти</button>
			</div>
			<section class="course-review__about">
				<h2 class="course-review__section-title">Про курс</h2>
				<p class="course-review__description">{{course.description}}</p>
			</section>
			<section class="course-review__section">
				<h2 class="course-review__section-title">Програма курсу</h2>
				<ul class="course-review__program-list">
					<li>
					    Мовний інвентар – лексика, граматика.
					</li>
					<li>
					    Ситуативне спілкування у групах за темами: «Друзі», «Родина», «Житло»,
					    «Дозвілля і розваги», «Подорожі», «Одяг», «Їжа», «Місто», «Транспорт», 
				        «Погода», «Навколишнє середовище», «Здоров'я».
				    </li>
					<li>Аудіювання</li>
				</ul>
				<button class='course-review__apply-btn font-weight-black'>Відправити заявку</button>
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
			<formСomment/>
			<viewReviews/>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      course: '',
    };
  },
  async mounted() {
    try {
      const response = await this.$api.get(`courses/${this.$route.params.id}`);
      this.course = response.data;
    } catch (error) {
      console.error('Error fetching course:', error);
    }
  }
}
</script>

<style lang="scss">
.course-review{
	&__nav-menu{
		display: none;
	}
	&__icon-home{
		margin: 0 20px 0 12px;
	}
	&__nav-title{
		font-size: 14px;
	}
	&__content{
		width: 345px;
		margin: 0 auto;
	}	
	&__top-section{
		padding: 10px 0 10px 0;
		flex-direction: column-reverse;
	}
	&__info{
		width: 100%;
	}
	&__title{
		font-size: 20px;
	}
	&__price{
		padding-top: 20px;
		font-size: 20px;
	}
	&__info-item{
		font-size: 15px;
		padding-top: 16px;
	}
	&__logo{
		width: 134px;
		height: 63px;
		margin: 0 auto;
	}
	&__apply-btn{
		font-size: 13px;
		background: #FDD503;
		width: 148px;
		height: 42px;
		border-radius: 10px;
	}
	&__contacts-btn{
		color: #7B34D8;
		font-size: 13px;
		width: 153px;
		height: 42px;
		background: none;
		border: 1px solid #7B34D8;
		margin-left: 16px;
		border-radius: 10px;
	}
	&__about{
		padding: 40px 0 40px 0;
		border-top: 1px solid #C7C7C7;
		border-bottom: 1px solid #C7C7C7;
		margin-top: 40px;	
	}
	&__section-title{
		font-size: 20px;
	}
	&__description{
		padding-top: 24px;
		font-size: 15px;
	}
	&__section{
		padding: 40px 0 40px 0;
		border-bottom: 1px solid #C7C7C7;
	}
	&__program-list{
		list-style-type: none; 
		padding: 6px 0 24px 20px;

		li{
			position: relative;
      width: 300px;
      padding-top: 18px;
      font-size: 15px;
        
        &::before {
          content: '';
          width: 8px; 
          height: 8px;
          background-color: #FDD503; 
          border-radius: 50%; 
          position: absolute;
          left: -20px; 
          margin-top: 7px;
        }	
			}
		}
		&__categories-list{
			padding-top: 24px;
		}

		&__category-item{
			padding: 8px 18px 8px 18px;
			border: 1px solid #FDD503;
			border-radius: 10px;
			font-size: 15px;
			margin-right: 24px;
		}
		&__category-icon{
			width: 8px;
			height: 8px;
			background-color: #FDD503;
			margin-right: 10px;
		}
	@media (min-width: 768px) {
		&__nav-menu{
			box-shadow: 0px 5px 7px 2px rgba(0, 0, 0, 0.5);
			width: 126px;
			height: 32px;
			background: #EBEBEB;
			display: flex;
			font-size: 14px;
			border-radius: 10px;
			margin-top: 40px;	
		}	
		&__content{
			width: 480px;
		}	
		&__top-section{
			flex-direction: row;
			padding: 130px 0 32px 0;
		}
		&__info{
			width: 67%;
		}
		&__title{
			font-size: 22px;
		}
		&__logo{
			margin: 0;
		}
		&__apply-btn{
			font-size: 14px;
			width: 160px;
		}
		&__contacts-btn{
			font-size: 14px;
			width: 173px;
		}
		&__section-title{
			font-size: 22px;
		}
		&__description{
			font-size: 17px;
		}
		&__program-list{
			li{
        width: 400px;
			}
		}
	}
	@media (min-width: 1024px) {
		&__nav-menu{
			width: 182px;
		}
			&__content{
			width: 606px;
		}	
		&__info{
			width: 72%;
		}
		&__info-item{
			font-size: 16px;
		}
		&__program-list{

			li{
        width: 500px;
        font-size: 17px;
			}
		}
		&__category-item{
			padding: 10px 24px 10px 24px;
		}
	}
	@media (min-width: 1440px) {
		&__content{
			width: 906px;
		}	
		&__info{
			width: 75%;
		}
		&__title{
			font-size: 36px;
		}
		&__price{
			padding-top: 24px;
			font-size: 28px;
		}
		&__info-item{
			font-size: 20px;
		}
		&__logo{
			width: 150px;
		}
		&__apply-btn{
			font-size: 16px;
			width: 190px;
		}
		&__contacts-btn{
			font-size: 16px;
			width: 193px;
		}
		&__section-title{
			font-size: 28px;
		}
		&__description{
			font-size: 18px;
		}
		&__program-list{
			li{
        width: 600px;
        font-size: 18px;
			}
		}
		&__category-item{
			font-size: 18px;
		}
	}
}
</style>