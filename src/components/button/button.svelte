<script>
  export let text, onClick, variant;
</script>

<style>
  button {
    display: inline-block;
    border: none;
    padding: 0.75rem 1.5rem;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 150ms ease-in-out, transform 100ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
  }
  button,
  button.primary {
    background: #0053ba;
  }

  button:hover,
  button:focus,
  button.primary:hover,
  button.primary:focus {
    background: #0053ba;
  }

  button.secondary {
    background: #3a8f15;
  }

  button.secondary:hover,
  button.secondary:focus {
    background: #4aba1a;
  }

  button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  button:active {
    transform: scale(0.99);
  }
</style>

<svelte:options tag="custom-button" />
<button on:click={onClick} class={variant}>{text}</button>
