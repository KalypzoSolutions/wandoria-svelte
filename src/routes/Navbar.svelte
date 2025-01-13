<script lang="ts">
	import w from '$lib/images/w.png';
	import '../app.css';

	let navbar = false;

	function toggleNavbar() {
		navbar = !navbar;
	}
</script>

<nav class="container flex items-center justify-between pb-8 pt-6">
	<!-- Logo -->
	<div class="flex items-center gap-4">
		<img src={w} height="32" width="32" alt="logo" />
	</div>

	<!-- Burger Menu -->
	<button
		onclick={toggleNavbar}
		class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
		aria-controls="navbar-default"
		aria-expanded={navbar}
	>
		<span class="sr-only">Open main menu</span>
		<svg
			class="h-5 w-5"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 17 14"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M1 1h15M1 7h15M1 13h15"
			/>
		</svg>
	</button>

	<!-- Backdrop -->
	{#if navbar}
		<button
			type="button"
			class="md:hidden fixed inset-0 z-20 bg-black/50 transition-opacity duration-300"
			onclick={toggleNavbar}
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') toggleNavbar();
			}}
			aria-label="Close menu backdrop"
		></button>
	{/if}

	<!-- Links -->
	<div
		class={`fixed inset-y-0 right-0 z-30 w-full max-w-[20rem] transform bg-zinc-900 ${navbar ? 'translate-x-0' : 'translate-x-[20rem]'} transition-transform duration-300 md:relative md:h-auto md:w-auto md:translate-x-0 md:bg-transparent`}
		id="navbar-default"
	>
		<!-- Sidebar Container -->
		<div
			class="relative flex h-full flex-col space-y-8 p-16 md:static md:h-auto md:w-auto md:max-w-none md:flex-row md:items-center md:justify-center md:space-x-8 md:space-y-0 md:p-0 rtl:space-x-reverse"
		>
			<!-- Close Button -->
			<button
				onclick={toggleNavbar}
				class="absolute right-4 top-4 text-gray-200 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 md:hidden"
				aria-label="Close menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			<!-- Links -->
			<ul
				class="flex flex-col space-y-8 font-medium md:flex-row md:space-x-8 md:space-y-0 rtl:space-x-reverse"
				aria-label="Primary navigation"
			>
				<!-- Logo -->
				<li class="md:hidden" aria-hidden="true">
					<img src={w} height="32" width="32" alt="Logo for Wandoria" />
				</li>

				<!-- Home Link -->
				<li>
					<a
						href="/"
						class="text-zinc-200 hover:text-zinc-400"
						onclick={toggleNavbar}
						aria-label="Navigate to Home page"
					>
						Home
					</a>
				</li>

				<!-- Regeln Link -->
				<li>
					<a
						href="/regeln"
						class="text-zinc-200 hover:text-zinc-400"
						onclick={toggleNavbar}
						aria-label="View the rules of Wandoria"
					>
						Regeln
					</a>
				</li>

				<!-- Discord Link -->
				<li>
					<a
						target="_blank"
						href="https://dc.wandoria.net"
						class="text-zinc-200 hover:text-zinc-400"
						onclick={toggleNavbar}
						aria-label="Visit the Wandoria Discord"
						rel="noopener noreferrer"
					>
						Discord
					</a>
				</li>

				<!-- Wandoria.net Button -->
				<li>
					<button
						onclick={toggleNavbar}
						class="flex cursor-pointer items-center gap-2 rounded-md bg-emerald-400 px-4 py-2 text-zinc-950 hover:bg-emerald-500"
						aria-label="Visit wandoria.net"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								d="M6 11C6 8.172 6 6.757 6.879 5.879C7.757 5 9.172 5 12 5H15C17.828 5 19.243 5 20.121 5.879C21 6.757 21 8.172 21 11V16C21 18.828 21 20.243 20.121 21.121C19.243 22 17.828 22 15 22H12C9.172 22 7.757 22 6.879 21.121C6 20.243 6 18.828 6 16V11Z"
								stroke="black"
								stroke-width="1.5"
							/>
							<path
								opacity="0.5"
								d="M6 19C5.20435 19 4.44129 18.6839 3.87868 18.1213C3.31607 17.5587 3 16.7956 3 16V10C3 6.229 3 4.343 4.172 3.172C5.344 2.001 7.229 2 11 2H15C15.7956 2 16.5587 2.31607 17.1213 2.87868C17.6839 3.44129 18 4.20435 18 5"
								stroke="black"
								stroke-width="1.5"
							/>
						</svg>
						wandoria.net
					</button>
				</li>
			</ul>
		</div>
	</div>
</nav>
