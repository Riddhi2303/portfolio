new fullpage('#fullpage', { 
	autoScrolling: true,
	navigation: true,
	responsiveWidth: 700,
	scrollingSpeed: 1400,
	onLeave: (origin,destination,direction) =>{
		const section = destination.item;
		const title = section.querySelector('h1');
		const subtitle = section.querySelector('span');
		const parag = section.querySelector('p');


		const tl = new TimelineMax({ delay: 0.5 });
		tl.fromTo(title, 2, {y: '-50', opacity: '0'}, {y: '0', opacity: '1'});
		tl.fromTo(subtitle, 2, {opacity: '0'}, {opacity: '1'});
		// tl.fromTo(parag, 2, {opacity: '0'}, {opacity: '1'});


	}

})