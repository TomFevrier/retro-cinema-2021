const texts = {
	grid: {
		all: [
			`*{{ TOTAL_TIME }}*. C'est le temps que j'ai passé l'année dernière à regarder des films, que ce soit chez moi ou au cinéma.`,
			`Cela représente *{{ NB_MOVIES }} longs-métrages*, sortis entre {{ OLDEST_RELEASE }} et 2021 et venant des quatre coins du monde : des États-Unis à la Norvège, en passant par la France, le Japon et la Russie.`
		],
		theater: `Depuis la réouverture des cinémas le 19 mai 2021, je suis allé voir *{{ NB_MOVIES_THEATER }} films à l'affiche en salle*... certains même plusieurs fois. Autant dire que mon passe illimité Pathé-Gaumont a vite été rentabilisé !`,
		festival: `J'ai eu la chance de découvrir plusieurs de ces films au cours de festivals. L'*Arras Film Festival* du 11 au 14 novembre dernier, ou le festival queer *Chéries Chéris* les 27 et 28 novembre à Paris.`,
		vod: `J'ai également découvert *{{ NB_MOVIES_VOD }} films sortis l'année dernière en VOD*. Que ce soit sur Netflix, Amazon Prime, myCanal... ou par des moyens pas vraiment légaux.`,
		top: `Parmi tous ces films sortis en 2021, *voici mes 10 préférés*. Retrouvez le classement et mon avis rapide sur chacun d'entre eux tout en bas de cette page.`,
		rewatch: [
			`_“Nothing comforts anxiety like a little nostalgia.”_ Cette réplique de Morpheus dans *Matrix Resurrections* pourrait totalement s'appliquer à moi, avec *{{ NB_MOVIES_REWATCH }} films revus* l'année dernière.`,
			`Certains au cinéma et pour la première fois, comme *Cloud Atlas* ou la trilogie *Indiana Jones*.`
		],
		discovery: [
			`Mais 2021 a surtout été pour moi une année de découverte, avec *{{ NB_MOVIES_DISCOVERY }} films que je n'avais jamais vus*.`,
			`Dont certains "classiques" comme *La petite boutique des horreurs*, *Chérie, j'ai rétréci les gosses*, *West Side Story (1961)* ou *Le silence des agneaux*.`
		],
		unknownMovies: [
			`Parmi eux, *{{ NB_MOVIES_UM }} long-métrages plus ou moins étranges* dénichés par Victor Bonnefoy alias [InThePanda](https://www.youtube.com/channel/UCKpRJZK14ZH7ffHtXMwPcTg), et découverts dans le cadre des séances *Unknown Movies* au Club de l'Étoile.`,
			`Dont *T'aime*, le premier et unique film de Patrick Sébastien - et quand on le voit, on comprend pourquoi...`
		]
	},
	watchDate: [
		`Voici le temps que j'ai passé, *jour par jour*, à regarder des films en 2021. On remarque une accélération à partir de l'été, s'expliquant par la réouverture des cinémas d'une part, et par la fin de mes études d'autre part.`,
		`Également visibles : mon rattrapage des cinq James Bond de Daniel Craig en amont de ma séance de *Mourir peut attendre*, du 7 au 10 octobre, et le marathon de la trilogie *Indiana Jones* au Grand Rex le 23 octobre.`
	],
	releaseDate: [
		`Sans surprise au vu de ma génération, plus de 80 % des films que j'ai regardés l'année dernière sont sortis après l'an 2000, et *près de la moitié en 2020 ou 2021*.`,
		`Je tâcherai cette année de découvrir plus de cinéma dit "de patrimoine". En profitant de rétrospectives en salle, peut-être ?`
	],
	medium: [
		`Malgré leur fermeture pendant près de six mois, j'aurai passé *un peu moins de six jours dans une salle de cinéma* en 2021.`,
		`Avec la multiplication des plateformes de SVOD, il est parfois difficile de mettre la main sur un film sans devoir cumuler de coûteux abonnements. C'est pour cela qu'en plus de *Netflix*, j'ai aussi vu *beaucoup de films téléchargés illégalement*... ce qui m'a d'ailleurs valu mon premier avertissement d'Hadopi !`
	],
	originCountry: [
		`En 2021, j'aurai vu des films provenant de *{{ NB_COUNTRIES }} pays différents*, dont je n'avais parfois vu aucun film auparavant - la Pologne, l'Estonie ou l'Algérie, par exemple.`,
		`Mais ne nous mentons pas : plus de la moitié des films sont américains, et près d'un sur cinq est français. *Plus de diversité en 2022 ?*`
	],
	genres: [
		`Outre les genres courants (comédie, drame, action, aventure), les films que j'ai vus cette année trahissent mes goûts en terme de cinéma.`,
		`On trouve ainsi *un grand nombre de longs-métrages de genre* (horreur, thriller, science-fiction & fantastique), dont beaucoup de films français de l'année : *Le dernier voyage*, *La Nuée*, *Teddy*, *Oxygène*, *Titane*, etc.`,
		`On recense également un certain nombre de *comédies musicales* : *Annette*, les deux adaptations de *West Side Story*, mais aussi *D'où l'on vient*, *tick, tick... Boom!* ou *Encanto*. Décidément, 2021 est l'année de ma rencontre avec Lin-Manuel Miranda !`
	],
	topMovies: [
		{
			imdbId: 'tt12361974',
			quote: `“Your kid was one of them, dad. One of the best of the best.”`,
			review: [
				`Objet unique dans l’histoire du cinéma, cette nouvelle version du "film" de 2017 est du pur Snyder, pour le pire comme pour le meilleur. Une extravaganza de plus de 4 heures, complaisante et bourrée de défauts, mais la vision sincère d’un auteur en deuil.`,
				`Pour en savoir plus sur la genèse de cette "Snyder Cut" et sur les différences avec la version charcutée par le studio, j’y avais consacré [un article pour Les Échos Week-End](https://media.lesechos.fr/infographie/justice-league/).`
			]
		},
		{
			imdbId: 'tt9484998',
			quote: `“How do I stop it? I don’t want tomorrow to be today. I want tomorrow to be tomorrow.”`,
			review: `Une variation rafraîchissante et ensoleillée sur le concept d’Un jour sans fin, que l’on aurait pourtant cru usé jusqu’à la corde. Une comédie romantique pétillante et malicieuse, portée par un duo de comédien⋅ne⋅s irrésistibles.`
		},
		{
			imdbId: 'tt7979580',
			quote: `“It’s almost like stealing people’s data and giving it to a hyper-intelligent AI as a part of an unregulated tech monopoly was a bad thing.”`,
			review: `Une petite pépite d’animation à la patte graphique assumée et pop. À travers le destin d’une famille dysfonctionnelle s’unissant contre une IA rebelle, une réflexion plus nuancée qu’elle n’en a l’air sur les dérives des nouvelles technologies et du capitalisme de surveillance.`
		},
		{
			imdbId: 'tt6334354',
			quote: `“If rats have purpose, so do we all.”`,
			review: `Quel pied de découvrir un blockbuster d’un auteur à qui un studio laisse carte blanche ! James Gunn s’en donne à cœur joie avec son impertinence habituelle, et nous livre un message acide sur l’impérialisme américain dans une œuvre généreuse qui fait oublier la bouse de 2016.`
		},
		{
			imdbId: 'tt3581652',
			quote: `“There’s a place for us, somewhere a place for us...”`,
			review: `Supérieure en tous points au film de 1961, cette nouvelle adaptation de la comédie musicale de Leonard Bernstein et Stephen Sondheim est l’occasion pour Spielberg d’enfin réaliser un de ses rêves d’enfant. Et de démontrer une fois de plus, à l’âge de 75 ans, sa maestria absolue.`
		},
		{
			imdbId: 'tt10341034',
			quote: `"Ce que j’ai entendu, c’est une putain de suite d’incohérences !"`,
			review: `La vraie surprise de cette rentrée. Un thriller français haletant qui nous plonge dans le milieu de l’aéronautique, entre les bureaux sombres et insonorisés du BEA et l’entre-soi des jeunes diplômé⋅e⋅s de grandes écoles - doublé d’un travail remarquable sur le son.`
		},
		{
			imdbId: 'tt10838180',
			quote: `“So déjà vu, and yet it’s obviously all wrong.”`,
			review: [
				`Un cas étrange que ce Matrix 4, dont il m’a fallu deux visionnages et plusieurs nuits de réflexion pour savoir si je l’avais apprécié ou non.`,
				`Au-delà des attentes forcément (et judicieusement) contrariées, reste un doigt d’honneur jouissif aux majors hollywoodiennes et à leur recyclage incessant de franchises. Et un amour sincère de Lana Wachowski pour les personnages de Neo et Trinity.`
			]
		},
		{
			imdbId: 'tt14544192',
			quote: `“Should I be joking in a time like this?”`,
			review: [
				`Écrit, interprété et réalisé en solo par l’humoriste Bo Burnham pendant le confinement, Inside oscille constamment entre le stand-up, la comédie musicale et le film expérimental.`,
				`En une vingtaine de numéros musicaux aussi hilarants que profondément sombres, Bo Burnham parvient à mettre le doigt sur “that funny feeling” - cette dépression lancinante, révélée chez nombre d’entre nous par plusieurs mois de confinement et un monde devenu bien trop absurde.`
			]
		},
		{
			imdbId: 'tt9639470',
			quote: `“I had hopes and dreams, like you.”`,
			review: [
				`Avec cette plongée virtuose et vertigineuse dans l’envers du décor des "Swinging Sixties", Edgar Wright réussit avec brio son passage de la comédie à l’horreur et prouve une fois de plus qu’il est l’un des metteurs en scène les plus talentueux de sa génération.`,
				`Ma claque visuelle de l’année, portée par un trio d’actrices formidables : Anya Taylor-Joy, Thomasin McKenzie et la regrettée Diana Rigg.`
			]
		},
		{
			imdbId: 'tt6217926',
			quote: `“Now you have nothing to love.”`,
			review: [
				`Rarement un film n’aura autant crié "cinéma" que l’opéra-rock mené par Leos Carax et les Sparks. Une mise en scène grandiose, des chansons entêtantes et un Adam Driver magnétique font assurément d’Annette mon coup de cœur de cette année 2021.`
			]
		}
	],
	masthead: [
		{
			title: 'Réalisation',
			content: 'Tom Février'
		},
		{
			title: 'Sources des données<br />et des images',
			content: ['[IMDb](https://www.imdb.com/)', '[TMDB](https://www.themoviedb.org)']
		},
		{
			content: [
				`Merci aux *cinémas Pathé-Gaumont* : grâce à mon Cinépass, j'ai pu découvrir plus de films en salle cette année que les cinq années précédentes !`,
				`Merci au *Club de l'Étoile*, le meilleur cinéma indépendant de Paris, et merci à *Victor Bonnefoy* pour tous ces "Unknown Movies".`,
				`Et parce que le cinéma est un art qui se partage, merci à *toutes celles et ceux qui m'ont accompagné en salle* cette année : mes parents, Axel, Youssr, Vincent, Raphaëlle, Julien, Pauline, Damien et bien entendu Théo, mon fidèle acolyte cinéphile.`
			]
		}
	]
};

export default texts;