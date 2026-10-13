<script lang="ts">
	let inspected = $state(false);
</script>

<div class="solomon-system" class:boundary-inspected={inspected}>
	<p class="exhibit-caption">Concept architecture</p>
	<div class="oversight-plane">
		<span class="gate-symbol" aria-hidden="true"></span>
		<div>
			<h4>Human oversight</h4>
			<p>Objectives, decisions &amp; accountability</p>
		</div>
	</div>
	<div class="workforce-boundary">
		<div class="workforce-header">
			<h4>Role-based AI workers</h4>
			<span class="system-annotation">Defined responsibility</span>
		</div>
		<div class="worker-definition">
			<div><span class="worker-symbol" aria-hidden="true"></span><span>Role</span></div>
			<div><span class="worker-symbol" aria-hidden="true"></span><span>Skills</span></div>
			<div><span class="worker-symbol" aria-hidden="true"></span><span>Rules</span></div>
		</div>
		<div class="shared-knowledge">
			<h4>Organisational knowledge</h4>
			<p>Durable context &amp; multi-agent collaboration</p>
		</div>
	</div>
	<button
		type="button"
		class="capability-boundary"
		aria-expanded={inspected}
		aria-controls="solomon-boundary-detail"
		onclick={() => (inspected = !inspected)}
		><span class="gate-symbol" aria-hidden="true"></span><span>Controlled capabilities</span><span
			class="boundary-action">{inspected ? 'Close' : 'Inspect'}</span
		></button
	>
	<div class="model-independence">
		<span class="model-port" aria-hidden="true"></span>
		<p>LLM-independent design</p>
		<span class="model-port" aria-hidden="true"></span>
	</div>
	<div id="solomon-boundary-detail" class="boundary-detail" hidden={!inspected}>
		<p>
			A worker’s ability to reason is separate from its authority to act. Defined capabilities and
			human oversight make that boundary explicit.
		</p>
	</div>
</div>
