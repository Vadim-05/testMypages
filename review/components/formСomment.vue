<template>
    <section class="comment-section">
		<h2 class="comment-section__title">
		    Залишити Коментар
		</h2>
		<div class="comment-section__form">
			<v-textarea class='comment-section__textarea' label="Коментар" auto-grow maxlength="1000"></v-textarea>
			<div class="d-flex align-center justify-space-between comment-section__controls">
				<button class="comment-section__submit">Відправити </button>
				<div class="comment-section__counter">1000 Символів</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss">
.comment-section{
	padding: 40px 0 40px 0;
    border-bottom: 1px solid #C7C7C7;
    	&__title{
			font-size: 20px;
		}
		&__form{
			background: #EBE8FA;
			width: 100%;
			height: 382px;
			border-radius: 10px;
			margin-top: 24px;
			padding: 15px;
		}
		&__textarea{
			.v-input__control{
		        background: white;
		        border-radius: 10px;
		        overflow: auto;
		        height: 284px;
			}
			.v-input__details{
				display: none;
			}
			.v-field__field{
				overflow: auto;
			}
			.v-field__overlay{
				background: none;
			}
			.v-field__outline::before{
				border: none;
			}
		}
		&__controls{
			padding-top: 16px;
		}
		&__submit{
			background: #FDD503;
			padding: 10px 30.5px 10px 30.5px;
			font-size: 13px;
			font-weight: bold;
			border-radius: 10px;	
		}
		&__counter{
			font-size: 14px;
		}
    @media (min-width: 768px) {
    	&__form{
    		padding: 20px 24px 20px 24px;
    	}
		&__title{
			font-size: 22px;
		}
		&__submit{
			font-size: 14px;	
		}
	}
	@media (min-width: 1440px) {
		&__title{
			font-size: 28px;
		}
		&__submit{
			font-size: 16px;
		}
	}
}

</style>
