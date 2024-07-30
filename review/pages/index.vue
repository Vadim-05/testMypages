<template>
	<div class="container-main d-flex mx-auto justify-space-between">
		<nav class="container-main__nav-menu align-center">
			  <Icon name="my-icon:home" class='container-main__icon'/>
			  Головна
		  </nav>
			<section class="container-main__content-section">
				<div class="container-main__header-section">
					<h2 class="container-main__title">
					  Ви зараз студент?
					</h2>
					<p class="container-main__description">
					  Поділіться своїм студентським досвідом та напишіть відгук!
					</p>
				</div>
			  <div class="container-main__action-section d-flex justify-space-between align-center">
			    <button class="container-main__feedback-button cursor-pointer">
			    	Написати відгук
			    </button>
			    <div class="container-main__text-center">
			    	<v-rating
			    		v-model="rating"
              active-color="#999999"
              readonly
            ></v-rating>
          </div>
        </div>
        <paginationCourses/>
			</section>
	    <modalWindow/>
	</div>
</template>
<script>
  export default {
    data: () => ({ rating: 5 }),
  }
</script>
<style lang="scss">
.container-main{
	width: 365px;
	padding: 0 10px 0 10px;

	&__nav-menu{
		display: none;
	}
	&__icon{
		width: 16px;
		height: 18px;
		margin: 0 20px 0 12px;	
	}
	&__content-section{
		width: 333px;
		padding-top: 30px;
	}
	&__header-section{
		padding: 20px;
		background: #FDD503;
		height: 122px;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;	
	}
	&__title{
		font-weight: bold;
		font-size: 16px;
	}
	&__description{
		font-size: 20px;
	}
	&__action-section{
		background: #EBEBEB;
		height: 63px;
		padding: 20px;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	&__feedback-button{
		font-size: 16px;
		font-weight: bold;
		text-decoration: underline;	
	}
	@media (min-width: 768px) {
		width: 768px;	
		padding: 0 96px 0 30px;

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
		&__content-section{
			width: 480px;
			padding-top: 72px;
		}
	}
	@media (min-width: 1024px) {
		width: 1024px;
  	padding: 0 140px 0 30px;

		&__header-section{
			height: 100px;
			border-top-right-radius: 10px;
			border-top-left-radius: 10px;
		}
		&__nav-menu{
			width: 182px;
		}
		&__content-section{
			width: 606px;
		}
	}
	@media (min-width: 1440px) {
		width: 1440px;
		padding: 0 226px 0 30px;

		&__content-section{
			width: 907px;
		}
		&__description{
			font-size: 24px;	
		}
	}
}
</style>
