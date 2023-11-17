<script>
	// @ts-nocheck
	import { urlFor } from '$lib/sanity';
	import PortableText from '@portabletext/svelte';
	import NoParagraphTag from '../custom-blocks/no-paragraph-tag.svelte';

	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// import required modules
	import { Pagination, A11y, FreeMode, Scrollbar, Mousewheel } from 'swiper';

	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/navigation';
	import 'swiper/css/scrollbar';
	import 'swiper/css/a11y';

	const onSwiper = (e) => {
		document.querySelector('[data-team-list-container]').classList.add('swiper-active');
	};

	export let headline;
	export let team_members;
</script>

<section class="team-members">
	<div class="team-members__inner">
		<h2 class="team-members__headline  headline">
			<PortableText
				blocks="{headline}"
				serializers="{{ blockStyles: { normal: NoParagraphTag } }}"
			/>
		</h2>
		<div class="team-member-list-container" data-team-list-container>
			<Swiper
				class="team-member-list"
				on:swiper="{onSwiper}"
				spaceBetween="{0}"
				loop="{false}"
				A11y="{true}"
				grabCursor="{true}"
				scrollbar="{{
					hide: false,
					snapOnRelease: true,
					draggable: true,
					dragSize: 100
				}}"
				breakpoints="{{ 975: { slidesPerView: 3, scrollbar: { dragSize: 450 } } }}"
				pagination="{{ clickable: true }}"
				mousewheel="{true}"
				freeMode="{{
					enabled: true,
					minimumVelocity: 0.01,
					momentum: true,
					momentumRatio: 0.5,
					momentumBounce: false
				}}"
				modules="{[FreeMode, A11y, Scrollbar, Mousewheel]}"
			>
				{#each team_members as team_member}
					<SwiperSlide class="team-member-list__item">
						<div class="team-member">
							<div class="team-member__photo-container">
								<div class="team-member__photo">
									<img
										src="{urlFor(team_member.photo.asset).width(20).auto('format')}"
										srcset="{urlFor(team_member.photo.asset).width(300).auto('format')} 400w,
												{urlFor(team_member.photo.asset).width(600).auto('format')} 600w,
												{urlFor(team_member.photo.asset).width(800).auto('format')} 800w,  
												{urlFor(team_member.photo.asset).width(900).auto('format')} 900w"
										sizes="(min-width: 975px) calc(100vw - 40rem), (min-width: 600px) calc(100vw - 60rem), 80vw"
										loading="lazy"
										decoding="async"
										alt="{team_member.photo.alt_text}"
									/>
								</div>
							</div>
							<div class="team-member__information">
								<div class="team-member__name-title">
									<h3 class="team-member__name">{team_member.name}</h3>
									<p class="team-member__title">{team_member.title}</p>
								</div>
								<div class="team-member__bio">
									<PortableText blocks="{team_member.bio}" />
								</div>
							</div>
						</div>
					</SwiperSlide>
				{/each}
			</Swiper>
		</div>
	</div>
</section>

<style>
	/* Team Members */
	.team-members {
		border-bottom: 1px solid black;
		background-color: var(--secondary-color);
		padding-top: var(--level7);
	}

	@media only screen and (min-width: 975px) {
		.team-members {
			padding-top: var(--level6);
		}
	}

	.team-members__inner {
	}

	.team-members__headline {
		font-weight: normal;
		font-size: var(--h1);
		font-family: var(--tertiary-font-family);
		padding-left: var(--level4);
		padding-right: var(--level4);
		margin-bottom: var(--level4);
	}

	@media screen and (min-width: 975px) {
		.team-members__headline {
			font-size: var(--kilo);
			max-width: 90%;
			margin-right: auto;
			margin-left: auto;
			margin-bottom: var(--level1);
		}
	}

	.team-members__headline :global(strong) {
		font-family: var(--secondary-font-family);
		font-weight: normal;
	}

	.team-member-list__item {
		padding-left: var(--level5);
		padding-right: var(--level5);
	}

	.team-member-list
		.team-member-list__item:nth-child(even)
		.team-member
		.team-member__photo-container {
		border-radius: 200px;
	}

	.team-member-list .team-member-list__item:last-child .team-member {
		margin-bottom: 0;
	}

	/* Swiper Styles */
	.team-member-list-container :global(.swiper) {
		padding-top: var(--level8);
	}

	@media screen and (min-width: 975px) {
		.team-member-list-container :global(.swiper) {
			padding-top: var(--level7);
		}
	}

	.team-member-list-container {
		position: relative;
	}

	.team-member-list-container :global(.swiper-scrollbar) {
		max-width: 89%;
		width: 100%;
		margin-right: auto;
		margin-left: auto;
		left: 0;
		right: 0;
		top: 0;
		position: absolute;
		height: 0.25rem;
	}

	@media screen and (min-width: 975px) {
		.team-member-list-container :global(.swiper-scrollbar) {
			max-width: 85%;
		}
	}

	.team-member-list-container :global(.swiper-scrollbar-drag) {
		background-color: var(--accent-color);
	}

	@media screen and (min-width: 975px) {
		.team-member-list-container :global(.swiper) {
			padding-left: var(--level7);
			padding-right: var(--level7);
		}
	}

	/* Team Member */
	.team-member {
		width: 70%;
		margin-right: auto;
		margin-left: auto;
		max-width: 30rem;
		margin-bottom: var(--level8);
	}

	@media screen and (min-width: 975px) {
		.team-member {
			max-width: 20rem;
		}
	}

	.team-member__photo-container {
		position: relative;
		width: 100%;
		border-radius: 30px;
		overflow: hidden;
		margin-bottom: var(--level5);
	}

	@media screen and (min-width: 975px) {
		.team-member__photo-container {
			margin-bottom: var(--level4);
		}
	}

	.team-member__photo {
		position: relative;
		padding-bottom: 140%;
	}

	.team-member__photo img {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	@media screen and (min-width: 975px) {
		.team-member__information {
			padding-left: var(--level4);
			padding-right: var(--level4);
		}
	}

	.team-member__name-title {
		display: flex;
		flex-direction: column-reverse;
	}

	.team-member__title {
		text-transform: uppercase;
		font-weight: bold;
		margin-bottom: var(--level1);
		font-size: var(--normal);
	}

	@media screen and (min-width: 975px) {
		.team-member__title {
		}
	}

	.team-member__name {
		font-family: var(--secondary-font-family);
		font-weight: normal;
		font-style: italic;
		margin-bottom: var(--level1);
		font-size: var(--h4);
	}

	.team-member__bio {
		font-family: var(--secondary-font-family);
		font-weight: normal;
		font-size: var(--normal);
	}
</style>
