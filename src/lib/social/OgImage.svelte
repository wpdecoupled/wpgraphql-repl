<script>
	export let title = 'REPL • WPGraphQL';
</script>

<div id="outer">
	<div id="inner">
		<svg xmlns="http://www.w3.org/2000/svg" fill="#464646" viewBox="0 0 512 512"
			><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
				d="M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z"
			/></svg
		>
		<span>+</span>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#e10098"
			><path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M50 6.90308L87.323 28.4515V71.5484L50 93.0968L12.677 71.5484V28.4515L50 6.90308ZM16.8647 30.8693V62.5251L44.2795 15.0414L16.8647 30.8693ZM50 13.5086L18.3975 68.2457H81.6025L50 13.5086ZM77.4148 72.4334H22.5852L50 88.2613L77.4148 72.4334ZM83.1353 62.5251L55.7205 15.0414L83.1353 30.8693V62.5251Z"
			/><circle cx="50" cy="9.3209" r="8.82" /><circle cx="85.2292" cy="29.6605" r="8.82" /><circle
				cx="85.2292"
				cy="70.3396"
				r="8.82"
			/><circle cx="50" cy="90.6791" r="8.82" /><circle cx="14.7659" cy="70.3396" r="8.82" /><circle
				cx="14.7659"
				cy="29.6605"
				r="8.82"
			/></svg
		>
		<span>=</span>
		<svg xmlns="http://www.w3.org/2000/svg" fill="darkred" viewBox="0 0 512 512">
			<path
				d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
			/>
		</svg>
	</div>

	<h1>{title}</h1>
</div>

<style>
	#outer {
		font-family: 'Inter';
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		background-color: #e2e8f0;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
		text-align: center;
		/* gap: 15px; */
		font-size: 50px;
		background-image: radial-gradient(circle at 25px 25px, #f97316 2%, transparent 0%),
			radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%);
		background-size: 100px 100px;
	}

	h1 {
		grid-area: title;
		letter-spacing: 4px;
		margin-top: 150px;
	}

	#inner {
		margin-top: 140px;
		grid-area: logos;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}

	#inner svg {
		height: 150px;
		width: 150px;
	}

	#inner span {
		font-size: 100px;
	}
</style>
