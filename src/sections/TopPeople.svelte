<script>
	import TopContainer from './TopContainer.svelte';
	
	export let data;
	export let posters;

	const directors = ['Steven Spielberg', 'Steven Soderbergh', 'Lana Wachowski', 'Zack Snyder', 'Robert Zemeckis']
		.reduce((map, director) => {
			return map.set(director, data.filter((d) => (d.directors ? d.directors : [d.director]).includes(director)));
		}, new Map());

	const actors = ['Daniel Craig', 'Ben Stiller', 'Gal Gadot', 'Rick Moranis', 'Pierre Niney']
		.reduce((map, actor) => {
			return map.set(actor, data.filter((d) => d.actors && d.actors.includes(actor)));
		}, new Map());

</script>

{#if posters}
	<div class='top-people-wrapper'>
		<TopContainer c='top-directors' style='flex: 1;'>
			<h2>Top cinéastes de 2021</h2>
			{#each [...directors.entries()] as [director, movies]}
				<div class='card'>
					<img class='portrait' src='people/{director}.jpg' />
					<div class='content'>
						<h3>{director}</h3>
						<div class='movies'>
							{#each movies as movie}
								<a href='https://imdb.com/title/{movie.imdbId}'>
									<img class='poster' src={posters.get(movie.imdbId || movie.title).src} />
								</a>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</TopContainer>
		<TopContainer c='top-actors' style='flex: 1;'>
			<h2>Top interprètes de 2021</h2>
			{#each [...actors.entries()] as [actor, movies]}
				<div class='card'>
					<img class='portrait' src='people/{actor}.jpg' />
					<div class='content'>
						<h3>{actor}</h3>
						<div class='movies'>
							{#each movies as movie}
								<a href='https://imdb.com/title/{movie.imdbId}'>
									<img class='poster' src={posters.get(movie.imdbId || movie.title).src} />
								</a>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</TopContainer>
	</div>
{/if}

<style lang='scss'>
	@import '../global.scss';

	.top-people-wrapper {
		display: flex;
		justify-content: space-between;
		width: 64rem;
		margin: 0 auto;

		@include lg {
			grid-template-columns: 1fr;
		}

		h2 {
			margin-bottom: 0.5rem;
			text-align: left;
		}

		.card {
			display: flex;
			align-items: flex-start;
			width: 100%;
			margin: 1rem auto;

			.portrait {
				display: block;
				border-radius: 50%;
				width: 6rem;
				aspect-ratio: 1;
			}

			.content {
				margin-left: 1rem;

				.movies {
					display: flex;

					.poster {
						width: 2.5rem;
						aspect-ratio: 2/3;
						transition: transform 0.2s ease-in-out;

						@include sm {
							width: 2rem;
						}

						&:nth-child(n + 1) {
							margin-left: 0.25rem;
						}

						&:hover {
							z-index: 101;
							transform: scale(1.1);
						}
						
					}
				}
			}

			@include sm {
				flex-direction: column;
				align-items: center;

				h3 {
					text-align: center;
				}

				.content {
					margin: 0;
				}
			}
		}
	}
</style>
