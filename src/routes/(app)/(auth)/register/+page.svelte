<script lang="ts">
  import { Fingerprint } from 'lucide-svelte';

  import * as Card from '$lib/components/ui/card';
  import { AuthIcon } from '$lib/components';
  import RegisterForm from './register-form.svelte';

  export let data;
</script>

<Card.Root class="pt-10 pb-6 space-y-8">
  <Card.Header class="space-y-4">
    <AuthIcon>
      <Fingerprint />
    </AuthIcon>

    <div class="flex flex-col items-center justify-center space-y-2">
      <Card.Title tag="h2" class="text-2xl font-medium">Welcome to Sawir</Card.Title>

      <Card.Description class="text-sm text-center text-text-secondary">
        A platform for your thoughts, where you can share, connect and discover endless
        conversations.
      </Card.Description>
    </div>
  </Card.Header>

  <Card.Content>
    <RegisterForm form={data.form} />
  </Card.Content>
</Card.Root>

<p class="flex items-center self-center space-x-1 text-sm">
  <span class="text-text-secondary">Already have an account?</span>
  <a href="/login" class="text-sm font-medium underline">Login</a>
</p>
