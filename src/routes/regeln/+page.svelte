<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>
<div>
	<div class="min-h-screen">
		<div
			class="container relative  mt-16 min-h-[15rem] rounded-lg border border-zinc-800 bg-[url('assets/art.png')] bg-cover lg:min-h-[30rem]"
		>
			<div class="absolute -top-12 left-1/2 -translate-x-1/2">
				<img src="./assets/title.png" alt="logo" />
			</div>
			<div
				class="absolute -bottom-[1px] left-1/2 min-w-[10rem] -translate-x-1/2 rounded-t-md border border-b-0 border-zinc-800 bg-[#010A07] px-8 py-2"
			>
				<div class="prose-zinc flex gap-2">
					<a
						href="https://dc.wandoria.net"
						target="_blank"
						class="rounded-sm bg-emerald-400 px-4 py-1"
					>
						<img src="./assets/tiktok.svg" alt="tiktok" class="h-5 w-5" />
					</a>
					<button
						class="copy-ip flex cursor-copy gap-2 rounded-sm bg-emerald-400 px-4 py-1 font-semibold"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
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
					<a
						href="https://www.tiktok.com/@wandoria.net"
						target="_blank"
						class="rounded-sm bg-emerald-400 px-4 py-1"
					>
						<img src="./assets/discord.svg" alt="discord" class="h-5 w-5" />
					</a>
				</div>
			</div>
		</div>
		<div class="container mx-auto mb-32 mt-16 gap-8 flex flex-col md:flex-row ">
			<div class="prose prose-invert max-w-none rounded-lg bg-zinc-900 p-4 lg:px-8">
				<!-- Regeln -->
				<h1>Regeln</h1>
				<h2>1. Allgemeine Regeln</h2>
				<h3>Respekt:</h3>
				<p>
					Geht respektvoll und höflich miteinander um. Beleidigungen, Diskriminierung, Hassrede oder
					Mobbing werden nicht toleriert.
				</p>
				<h3>Keine Belästigung:</h3>
				<p>Spam, Trolling, Griefing oder gezieltes Stören anderer Mitglieder ist nicht erlaubt</p>
				<h3>Sprachen:</h3>
				<p>
					Dieser Server ist primär deutschsprachig, aber das Sprechen und Schreiben in anderen
					Sprachen ist ebenfalls erlaubt. Bitte seid geduldig und verständnisvoll.
				</p>
				<h2>2. Chat- und Kommunikationsregeln</h2>
				<h3>Keine Provokation:</h3>
				<p>
					Kontroverse Themen sind erlaubt, aber achtet darauf, sachlich und höflich zu bleiben, um
					Konflikte zu vermeiden.
				</p>
				<h3>Keine Werbung:</h3>
				<p>
					Werbung für andere Server, Projekte oder Produkte ist ohne Erlaubnis der Admins nicht
					erlaubt.
				</p>
				<h3>Inhalte:</h3>
				<p>NSFW-Inhalte (nicht jugendfreie Inhalte) sind strengstens untersagt.</p>
				<h2>3. Minecraft Regeln</h2>
				<h3>Minecraft ToS:</h3>
				<p>
					An die <a href="https://www.minecraft.net/de-de/terms/r2">Minecraft ToS</a> und die
					<a href="https://www.minecraft.net/de-de/usage-guidelines">Minecraft Guidelines</a> ist sich
					jederzeit zu halten!
				</p>
				<h3>Bugs:</h3>
				<p>Das absichtliche Ausnutzen von Ingame-Bugs ist untersagt!</p>
				<h3>Griefing</h3>
				<p>
					Das absichtliche zerstören, plündern und verändern von Dingen anderer Leute ist verboten!
				</p>
				<h2>4. Moderation</h2>
				<h3>Anweisungen:</h3>
				<p>Folgt den Anweisungen des Teams</p>
				<h3>Probleme:</h3>
				<p>
					Solltet ihr Schwierigkeiten mit anderen Mitgliedern haben, meldet euch direkt bei einem
					Moderator oder Admin.
				</p>
				<h2>5. Strafen</h2>
				<h3>Warnungen:</h3>
				<p>Bei kleineren Verstößen werdet ihr verwarnt</p>
				<h3>Mute/Bann:</h3>
				<p>
					Wiederholte oder schwerwiegende Verstöße können zu temporären oder permanenten Strafen
					führen.
				</p>
				<h3>Schwere:</h3>
				<p>Die Schwere der Bestrafung liegt im Ermessensspielraum des Teams!</p>
			</div>
			<div class="flex flex-col gap-16">
				<div class="bg-zinc-900 p-4 lg:px-8 prose prose-invert rounded-lg">
					<h3>Inhalt</h3>
					<ol>
						<li>
							<a href="#allgemeine-regeln">Allgemeine Regeln</a>
						</li>
						<li>
							<a href="#chat-und-kommunikationsregeln">Chat- und Kommunikationsregeln</a>
						</li>
						<li>
							<a href="#minecraft-regeln">Minecraft Regeln</a>
						</li>
						<li>
							<a href="#moderation">Moderation</a>
						</li>
						<li>
							<a href="#strafen">Strafen</a>
						</li>
					</ol>

				</div>
				<iframe
					src="https://discordapp.com/widget?id=1324119249584783360&theme=dark"
					title="discord"
					class="mx-auto"
					width="350"
					height="500"
					allowtransparency={true}
					frameborder="0"
					sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
				></iframe>
			</div>
		</div>
	</div>
</div>
<div class="container prose prose-invert mx-auto mt-32 rounded-t-lg bg-zinc-900 py-8 text-center">
	<h4 class="">Geplante Beta ist Mitte Februar</h4>
	<a href="https://dc.wandoria.net">Komm auf unseren Discord</a>
</div>
<div class="mt-0 w-full border-t border-zinc-800 bg-zinc-900 py-4">
	<div class="container mx-auto flex items-center justify-center gap-8 text-zinc-300">
		<a href="/kontakt.html" class="hover:text-zinc-100">Kontakt</a>
		<div class="" id="logo">
			<img src="./assets/w.png" alt="logo" class="h-12 w-12" />
		</div>
		<a href="/impressum.html" class="hover:text-zinc-100">Impressum</a>
	</div>
	<div class="py-2 text-center">
		<p class="text-xs text-zinc-500">
			Unter der Leitung von AERNHARD, vertreten durch EinJOJO und CrayonGamer
		</p>
		<p class="text-xs text-zinc-500">
			Website erstellt von <a class="text-zinc-300" href="https://github.com/Ludoo0">Ludoo</a>
		</p>
	</div>
</div>
