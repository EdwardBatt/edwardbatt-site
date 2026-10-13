<script lang="ts">
	let exception = $state(false);
</script>

<div class="system-exhibit maestro-system" class:has-exception={exception}>
	<div class="exhibit-toolbar">
		<p class="exhibit-caption">Illustrative operating model</p>
		<div class="system-switch" role="group" aria-label="Maestro operating scenario">
			<button type="button" aria-pressed={!exception} onclick={() => (exception = false)}
				>Work moving</button
			>
			<button type="button" aria-pressed={exception} onclick={() => (exception = true)}
				>Exception raised</button
			>
		</div>
	</div>
	<div class="maestro-desktop">
		<svg viewBox="0 0 1200 330" role="img" aria-labelledby="maestro-map-title maestro-map-desc">
			<title id="maestro-map-title">A shared operating model across teams</title>
			<desc id="maestro-map-desc"
				>Intake and planning begin in Client Services. Resource-aware scheduling connects to
				creative production. A human decision controls approval and delivery, with a path back for
				review. AI assistance supports the workflow. Exceptions can be brought to human attention.</desc
			>
			<g class="system-lanes"
				><path d="M150 102H1170M150 177H1170M150 252H1170" /><text x="0" y="107"
					>Client services</text
				><text x="0" y="182">Resources</text><text x="0" y="257">Creative work</text></g
			>
			<g class="system-stage-labels"
				><text x="180" y="27" text-anchor="middle">Intake</text><text
					x="360"
					y="27"
					text-anchor="middle">Planning</text
				><text x="550" y="27" text-anchor="middle">Scheduling</text><text
					x="750"
					y="27"
					text-anchor="middle">Production</text
				><text x="960" y="27" text-anchor="middle">Approval</text><text
					x="1140"
					y="27"
					text-anchor="middle">Delivery</text
				></g
			>
			<path
				class="system-path"
				d="M180 102H360C430 102 480 177 550 177S680 252 750 252S890 102 960 102H1140"
			/>
			<path class="system-assist" d="M180 64H360V89" /><path
				class="assist-mark"
				d="M360 81l6 6-6 6-6-6Z"
			/><text class="system-small" x="384" y="68">AI assistance</text>
			<path class="resource-bracket" d="M360 172V183M750 172V183" /><text
				class="system-small"
				x="360"
				y="205"
				text-anchor="middle">Resource awareness</text
			>
			<g class="system-events"
				><circle cx="180" cy="102" r="7" /><circle cx="360" cy="102" r="7" /><circle
					cx="550"
					cy="177"
					r="7"
				/><circle cx="750" cy="252" r="7" /><circle cx="1140" cy="102" r="7" /></g
			>
			<rect class="system-gate" x="952" y="90" width="16" height="24" /><text
				class="system-small"
				x="980"
				y="133">Human decision</text
			>
			<path class="review-path" d="M980 143V289Q980 300 968 300H762Q750 300 750 289V267" />
			<path class="review-arrow" d="M745 276L750 267L755 276" />
			<text class="review-label" x="860" y="326" text-anchor="middle"
				>{exception
					? 'Exception routed to human review'
					: 'Review and revision remain connected'}</text
			>
			{#if exception}<circle class="exception-ring" cx="750" cy="252" r="14" />{/if}
		</svg>
	</div>
	<ol class="maestro-mobile" aria-label="Maestro workflow">
		<li>
			<span>Intake &amp; planning</span>
			<p>Client services define the request, scope and responsibility.</p>
		</li>
		<li>
			<span>Scheduling</span>
			<p>Resource awareness informs allocation.</p>
		</li>
		<li class:exception-step={exception}>
			<span>Production</span>
			<p>Creative work and activity stay traceable.</p>
			{#if exception}<p class="mobile-exception">
					Exception raised: bring this work to human review.
				</p>{/if}
		</li>
		<li class="human-step">
			<span>Human approval</span>
			<p>An explicit decision, with a route back for revision.</p>
		</li>
		<li>
			<span>Delivery</span>
			<p>Completed work retains its decision history.</p>
		</li>
	</ol>
	<p class="system-response" aria-live="polite">
		{exception
			? 'An exception becomes visible without making every other piece of work stop. Human review stays connected to the work and its history.'
			: 'Work moves across teams while its context stays connected. Resource awareness and human approval are part of the operating model.'}
	</p>
	<div class="system-foundations">
		<div>
			<h3>Shared visibility</h3>
			<p>Intake, scheduling and production in one operational picture.</p>
		</div>
		<div>
			<h3>Traceable decisions</h3>
			<p>Activity, alerts and human decisions connected to the work.</p>
		</div>
		<div>
			<h3>Assistance with control</h3>
			<p>AI support and non-blocking controls, with clear accountability.</p>
		</div>
	</div>
</div>
