<script>
  import Button from "./components/button/button.svelte";
  import Switch from "./components/switch/switch.svelte";
  import Checkbox from "./components/checkbox/checkbox.svelte";
  export let name;

  let checked = true;
  const onClick = e => {
    console.log(e.target.textContent);
  };
  const onChange = () => {
    console.log("onChange", `${checked} to ${!checked}`);

    checked = !checked;
  };

  const onOptionCheck = optionId => {
    const option = options.find(option => option.id === optionId);
    option.checked = !option.checked;
  };
  const options = [
    { id: 0, text: "Option 1", checked: true },
    { id: 1, text: "Option 2", checked: true },
    { id: 2, text: "Option 3", checked: true }
  ];
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<svelte:options tag="svelte-app" />
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <Button text={'Click Me !'} {onClick} variant={'secondary'} />
  <Switch {onChange} {checked} variant={'secondary'} />
  <div>
    {#each options as { id, checked, text }}
      <Checkbox
        {id}
        onChange={onOptionCheck}
        {text}
        {checked}
        variant={'secondary'} />
    {/each}
  </div>
</main>
