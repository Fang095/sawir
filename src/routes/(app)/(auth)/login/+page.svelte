<script lang="ts">
  import { User } from 'lucide-svelte';

  import * as Card from '$lib/components/ui/card';
  import { AuthIcon } from '$lib/components';
  import { LoginForm } from '$lib/components';

  export let data;
</script>

<Card.Root class="pt-10 pb-6 space-y-8">
  <Card.Header class="space-y-4">
    <AuthIcon>
      <User />
    </AuthIcon>

    <div class="flex flex-col items-center justify-center space-y-2">
      <Card.Title tag="h2" class="text-2xl font-medium">Welcome back to Sawir</Card.Title>

      <Card.Description class="text-sm text-center text-text-secondary">
        Welcome back to Sawir, where your adventures continue. Share moments and connect with
        friends!
      </Card.Description>
    </div>
  </Card.Header>

  <Card.Content>
    <LoginForm form={data.form} />
  </Card.Content>
</Card.Root>

<p class="flex items-center self-center space-x-1 text-sm">
  <span class="text-text-secondary">Don't have an account?</span>
  <a href="/register" class="text-sm font-medium underline">Register</a>
</p>
