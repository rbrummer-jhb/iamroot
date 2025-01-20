<script>
  import IcRoundKeyboardDoubleArrowDown from '~icons/ic/round-keyboard-double-arrow-down';

  export let open = false;
	import { slide } from 'svelte/transition';
	const handleClick = () => open = !open
</script>

<div class="accordion">
	<div class="header" on:click={handleClick}>
		<div class="text">
			<slot name="head"></slot>	
		</div>
		
		<button >
			<IcRoundKeyboardDoubleArrowDown />
		</button>
	</div>
	
	{#if open}
	<div class="details" transition:slide>
		<slot name="details">
		</slot>
	</div>
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
  
  div.accordion {
		/* margin: 1rem 0; */
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 10px;
	}
	
	div.header {
		display:flex;
		width:100%;
    align-items: center;
    padding-bottom: 20px;
    padding-left: 10px;
    border-radius: 4px;
    cursor: pointer;
    border-bottom: 1px solid var(--clr-terminal-bg);
	}
  
  div.header:hover button {
    border: 1px solid var(--clr-secondary);
    background-color: var(--clr-terminal-bg);
    color: white;
  }
  
	div.header .text {
    flex: 1;
		margin-right: 5px;
    font-family: 'Ubuntu';
    transition: filter 0.3s ease-in-out;
	}
	
	div.details {
    /* width:90%; */
    background-image: linear-gradient(
    0deg,
    var(--clr-terminal-bg),
    var(--clr-bg)
  );
		padding:1rem;
    border-radius: 4px;
	}
  
  button {
    background-color: var(--clr-terminal-bg);
    border: 1px solid var(--clr-terminal-bg);
    padding: 7px;
    border-radius: 5px;
    transition: filter 0.3s ease-in-out, background-color 0.3s ease-in-out, border 0.3s ease-in-out;
    cursor: pointer;
  }

  @media all and (max-width: 768px) {
    div.accordion {
      padding-left: 0px;
    }
  }
</style>
