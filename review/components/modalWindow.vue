<template>
	<v-dialog
		v-model="dialog"
        class='modal-window'
    >
    <v-card class='modal-window__card'>
        <v-card-text class='pa-0 modal-window__header'>
            <Icon name="my-icon:logo" class='modal-window__logo d-flex'/>
        </v-card-text>
        <section class="modal-window__content">
        	<p>
        	    Відгук від наших користувачів дає можливість  поділитися 
        	    своїм досвідом, допомагаючи іншим у виборі відповідних програм навчання.
        	</p>
        	<p class="modal-window__review-guidelines">
        	    <h2 class="modal-window__guidelines-heading">При написанні відгуків дотримуйтесь таких рекомендацій:</h2>
        		    <ul class="modal-window__guidelines-list">
        			    <li>Уникайте образливих чи принизливих коментарів.</li>
        			    <li>Не використовуйте мову ворожнечі або загроз.</li>
        			    <li>Відгуки не повинні використовуватися для комерційних цілей, 
        			        таких як реклама, реферальні програми чи просування.
        		        </li>
        		        <li>
        		           Не впливайте штучно на рейтинги відгуків, використовуючи 
        		           кілька акаунтів, примушуючи інших залишати відгуки або 
        		           приймаючи оплату чи інші винагороди за написання відгуків.
        		        </li>
        		    </ul>
        	    </p>
            </section>
            <button
                class="modal-window__accept-button mx-auto"
                @click="dialog = false"
            >Погодитися</button>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: true,
    }
  },
}
</script>
<style lang="scss">
.modal-window{
	&__card{
		padding: 68px 0 22px 0;
		width: 334px;
		margin: 0 auto;
		height: auto;
	}
	&__header{
		height: 30px;
	}
	&__logo{
		height: 40px;
		width: auto;
	}
	&__content{
		font-size: 16px;
		padding: 28px 15px 30px 15px;
	}
	&__review-guidelines{
		padding-top: 10px;
	}
	&__guidelines-heading{
		font-size: 16px;
		font-weight: 300;
	}
	&__guidelines-list{
		padding-left: 28px;
	}
	&__accept-button{
		background: #FDD503;
		width: 180px;
		min-height: 50px;
		border-radius: 10px;
		font-weight: bold;
		font-size: 19px;
	}
	@media (min-width: 767px) {
		&__card{
			padding: 40px 0 22px 0;
			width: 707px;
			height: 510px;
		}
		&__logo{
			height: 45px;
		}
		&__content{
			padding: 0 28px 30px 63px;
		}
	}
	@media (min-width: 1024px) {
		&__card{
			padding: 68px 0 22px 0;
			width: 829px;
			height: 475px;	
		}
	}
}
</style>