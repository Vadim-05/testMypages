<template>
	<section class="reviews-message">
		<div class="d-flex justify-space-between align-center reviews-message__header">
			<div>
				<h2 class="reviews-message__title">
					Відгуки
				</h2> 
				<span class="reviews-message__count">
					1 відгук
				</span>
			</div>
			<div class="reviews-message__v-rating">
				<v-rating
        		    v-model="rating"
                    active-color="#FDD503"
                    readonly
                ></v-rating>
			</div>
		</div>
		<h2 class="reviews-message__author">
			Василь Романів
		</h2>
		<div class="reviews-message__details d-flex align-center">
			<v-rating
        		v-model="rating"
                active-color="#FDD503"
                readonly
            ></v-rating>
            <time class="reviews-message__date" datetime="2023-08-23T17:51">
                23.08.2023, 17:51
            </time>
		</div>
		<p class="reviews-message__content">
		    Здали документи для вступу, пройшли всі етапи .На електрону 
		    почту нічого не прийшло коли прийшли в приймальні комісії що ми спізнилися.
		</p>
	</section>
</template>
<script>
export default{
	data(){
		return{
			course: '',
			rating: 5
		}
	},
}
</script>
<style lang="scss">
.reviews-message {
	&__header{
		padding: 20px 0 20px 0;
	}
	&__title{
		display: inline;
		font-size: 20px;
		font-weight: bold;
	}
	&__author{
		font-size: 18px;
	}
	&__count{
	    color: #616161;
	    font-size: 19px;
	}
	&__details{
		height: 32px;
	}
	&__v-rating{
		.v-rating{
			width: 170px;
			height: 38px;
		}
	}
	&__date{
		padding-left: 15px;
		color: #616161;
		font-size: 16px;
	}
	&__content{
		font-size: 15px;
		padding-top: 15px;
	}
	@media (min-width: 768px) {
		&__title{
			font-size: 22px;
		}
	    &__count{
	    	font-size: 21px;
	    }
		&__content{
			font-size: 17px;
		}
	}
	@media (min-width: 1440px) {
		&__title{
			font-size: 28px;
		}
	    &__count{
	    	font-size: 24px;
	    }
		&__content{
			font-size: 18px;
		}
	}
}
</style>