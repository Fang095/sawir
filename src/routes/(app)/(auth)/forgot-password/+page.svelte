<script lang="ts">
  import { Lock, Unlock } from 'lucide-svelte';

  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { AuthIcon } from '$lib/components';
  import { ForgotPasswordForm } from '$lib/components';

  export let data;
  export let form;
</script>

{#if form?.success}
  <Card.Root class="pt-10 pb-6 space-y-8">
    <Card.Header class="space-y-4">
      <AuthIcon>
        <Unlock />
      </AuthIcon>

      <div class="flex flex-col items-center justify-center space-y-2">
        <Card.Title tag="h2" class="text-xl font-medium">Reset Your Password</Card.Title>

        <Card.Description class="text-sm text-center text-text-secondary">
          Your password reset request has been submitted. Please check your email for further
          instructions.
        </Card.Description>
      </div>
    </Card.Header>

    <Card.Content>
      <Button href="/login" variant="outline" class="w-full">Login</Button>
    </Card.Content>
  </Card.Root>
{:else}
  <Card.Root class="pt-10 pb-6 space-y-8">
    <Card.Header class="space-y-4">
      <AuthIcon>
        <Lock />
      </AuthIcon>

      <div class="flex flex-col items-center justify-center space-y-2">
        <Card.Title tag="h2" class="text-2xl font-medium">Forgot Your Password?</Card.Title>

        <Card.Description class="text-sm text-center text-text-secondary">
          Enter the email address you used when you joined and we&apos;ll send you instructions on
          how to reset your password.
        </Card.Description>
      </div>
    </Card.Header>

    <Card.Content>
      <ForgotPasswordForm form={data.form} />
    </Card.Content>
  </Card.Root>

  <p class="flex items-center self-center space-x-1 text-sm">
    <span class="text-text-secondary">Remember your password?</span>
    <a href="/login" class="text-sm font-medium underline"> Login </a>
  </p>
{/if}
