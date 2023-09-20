<script lang="ts">
  import { enhance } from '$app/forms';
  import Button from '$lib/components/ui/button/button.svelte';

  export let data;
</script>

<h1>Main Home Feed page</h1>
<p>user - {data.username}</p>

<form method="POST" action="?/logout" use:enhance>
  <input type="hidden" name="logout" />
  <Button variant="secondary">Logout</Button>
</form>
