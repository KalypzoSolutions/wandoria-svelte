<script>
	import { serverName } from '$lib/config';
	import DiscordWidget from '$lib/DiscordWidget.svelte';
	import Header from '$lib/Header.svelte';
</script>
<svelte:head>
	<title>Regeln auf {serverName}</title>
	<meta name="description" content="Erfahre die Regeln von Wandoria.net! Unsere klaren und fairen Richtlinien sorgen für ein harmonisches Spielerlebnis auf unserem Minecraft Realm Server. Lies bitte die Regeln, respektiere die Community und werde Teil des Abenteuers." />
</svelte:head>
<div class="smouthscroll">
	<div class="min-h-screen">
		<Header />
		<div class="container mx-auto mb-32 mt-16 flex flex-col gap-8 md:flex-row" id="a">
			<div class="prose prose-invert max-w-none rounded-lg bg-zinc-900 p-4 lg:px-8">
				<!-- Regeln -->
				<h1>Regeln</h1>
				<h2 id="allgemeine-regeln">1. Allgemeine Regeln</h2>
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
				<h2 id="chat-und-kommunikationsregeln">2. Chat- und Kommunikationsregeln</h2>
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
				<h2 id="minecraft-regeln">3. Minecraft Regeln</h2>
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
				<h2 id="moderation">4. Moderation</h2>
				<h3>Anweisungen:</h3>
				<p>Folgt den Anweisungen des Teams</p>
				<h3>Probleme:</h3>
				<p>
					Solltet ihr Schwierigkeiten mit anderen Mitgliedern haben, meldet euch direkt bei einem
					Moderator oder Admin.
				</p>
				<h2 id="strafen">5. Strafen</h2>
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
				<div class="prose prose-invert rounded-lg bg-zinc-900 p-4 lg:px-8">
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
				<DiscordWidget />
			</div>
		</div>
	</div>
</div>
