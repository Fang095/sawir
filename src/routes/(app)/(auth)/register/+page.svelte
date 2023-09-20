<script lang="ts">
  import { Fingerprint, UserPlus } from 'lucide-svelte';

  import * as Card from '$lib/components/ui/card';
  import { AuthIcon } from '$lib/components';
  import { RegisterForm } from '$lib/components';

  export let data;
  export let form;
</script>

{#if form?.success}
  <Card.Root class="pt-10 pb-6 space-y-6">
    <Card.Header class="space-y-4">
      <AuthIcon>
        <Fingerprint />
      </AuthIcon>

      <div class="flex flex-col items-center justify-center space-y-2">
        <Card.Title tag="h2" class="text-xl font-medium">Confirm Your Email</Card.Title>

        <Card.Description class="text-sm text-center text-text-secondary">
          An email has been sent to <em class="text-neutral-500">{form.email}</em> for verification.
          Please check your email and click the link to activate your account.
        </Card.Description>
      </div>
    </Card.Header>
  </Card.Root>

  <p class="flex items-center self-center space-x-1 text-sm">
    <span class="text-text-secondary">Remember your password?</span>
    <a href="/login" class="text-sm font-medium underline">Login</a>
  </p>
{:else}
  <Card.Root class="pt-10 pb-6 space-y-8">
    <Card.Header class="space-y-4">
      <AuthIcon>
        <UserPlus />
      </AuthIcon>

      <div class="flex flex-col items-center justify-center space-y-2">
        <Card.Title tag="h2" class="text-2xl font-medium">Welcome to Sawir</Card.Title>

        <Card.Description class="text-sm text-center text-text-secondary">
          Ready to embark on a journey of connection and creativity? Join Sawir today and start
          sharing your world with friends.
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
{/if}
