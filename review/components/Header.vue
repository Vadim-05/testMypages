<template>
	<header class="header d-flex align-center justify-space-between mx-auto">
		<div class="header__mobile align-center justify-space-between mx-auto">
		    <Icon name="my-icon:logo"  class='header__logo'/>
			<div class="d-flex align-center justify-space-between header__actions">	
					
			<img src="/sidebar.svg" class='header__sidebar-icon cursor-pointer'/>
				<!-- <Icon name="my-icon:sidebar" class='header__sidebar-icon'/> -->
				<button class='header__login-button d-flex align-center'>
					<!-- <Icon name="my-icon:btn-picture" class='header__login-icon'/> -->
					<img src="/btn-picture.svg" class='header__login-icon'/>
					<div class="header__login-text">Вхід</div>
				</button>
			</div>
		</div>
		<Icon name="my-icon:logo"  class='header__logo-desktop'/>
		<v-card-text class='pa-0 header__search-container d-flex justify-space-between'>
		    <v-text-field
			    class='header__search-input'
			    :loading="loading"
                density="compact"
                label="Search"
                variant="solo"
                hide-details
                single-line
                @click:append-inner="onClick"
            >
                <template #append-inner>
                	<img src="/search.svg" class='header__search-icon cursor-pointer'/>
          	        <!-- <Icon name="my-icon:search" class='header__search-icon cursor-pointer' /> -->
                </template>
            </v-text-field>
            <Icon name="my-icon:voice" class='header__voice-icon cursor-pointer'/>
        </v-card-text>
		<div class="header__actions-desktop align-center justify-space-between">	
			<img src="/sidebar.svg" class='header__sidebar-icon cursor-pointer'/>
			<!-- <Icon name="my-icon:sidebar" class='header__sidebar-icon cursor-pointer'/> -->
			<button class='header__login-button d-flex align-center'>
				<img src="/btn-picture.svg" class='header__login-icon'/>
				<!-- <Icon name="my-icon:btn-picture" class='header__login-icon'/> -->
				<div class="header__login-text">Вхід</div>
			</button>
		</div>
	</header>
</template>
<style lang="scss">
.header{
	max-width: 375px;
	padding: 16px 30px 16px 15px;
	flex-direction: column;

	&__mobile{
		display: flex;
        width: 340px;
	}
	&__logo{
		width: 110px;
		height: 20px;
	}
	&__actions{
		width: 138px;
	}
	&__sidebar-icon{
		width: 24px;
		height: 24px;
	}
	&__login-button{
		font-size: 14px;
		font-weight: bold;
		background: #EBEBEB;
		width: 100px;
		height: 36px;
		border: 0.5px solid #999999;
		border-radius: 40px;
		color: #1F12AC;
	}
	&__login-text{
		padding-top: 3px;
	}
	&__login-icon{
		width: 25px;
		height: 25px;
		margin: 0 10px 0 10px;
	}
	&__search-container{
		min-width: 332px;
		margin-top: 20px;
	}
	&__actions-desktop,
	&__logo-desktop{
		display: none;
	}
	&__search-icon{
		width: 64px;
		height: 40px;
	}
	&__voice-icon{
		width: 40px;
		height: 40px;
	}
	&__search-input{
		border-radius: 50px;
		max-width: 276px;

		.v-field{
			padding: 0;
			border-radius: 40px;
		}
		.v-field__overlay{
			border: 1px solid #999;
		}
	}
	@media (min-width: 768px){
		max-width: 767px;
		flex-direction: row;

		&__mobile{
			display: none;
		}
		&__search-container{
			margin: 0;
			max-width: 332px;
		}
		&__logo-desktop{
			display: block;
			width: 110px;
			height: 20px;
		}
		&__actions-desktop{
			display: flex;
			width: 138px;
		}
	}
	@media (min-width: 1024px){
		max-width: 1024px;
		padding: 16px 64px 16px 20px;

		&__search-container{
			max-width: 450px;
		}
		&__logo-desktop{
			width: 127px;
			height: 25px;
		}
		&__search-input{
			max-width: 384px;
		}
	}
	@media (min-width: 1440px){
		max-width: 1440px;

		&__search-container{
			max-width: 655px;
		}
		&__search-input{
			max-width: 600px;
		}
	}
}
</style>