<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client';
  import { AlertCircle, KeyRound, ShieldCheck } from 'lucide-svelte';

  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { AuthIcon } from '$lib/components';
  import { ChangePasswordForm } from '$lib/components';

  export let data;
  export let form;
</script>

{#if form?.success === true}
  <Card.Root class="pt-10 pb-6 space-y-8">
    <Card.Header class="space-y-4">
      <AuthIcon>
        <ShieldCheck />
      </AuthIcon>

      <div class="flex flex-col items-center justify-center space-y-2">
        <Card.Title tag="h2" class="text-xl font-medium">Successfully Reset Password</Card.Title>

        <Card.Description class="text-sm text-center text-text-secondary">
          Your password has been successfully reset. You can now login to your account using your
          new password.
        </Card.Description>
      </div>
    </Card.Header>

    <Card.Content>
      <Button href="/login" variant="outline" class="w-full">Login</Button>
    </Card.Content>
  </Card.Root>
{:else if form?.success === false}
  <Card.Root class="pt-10 pb-6 space-y-8">
    <Card.Header class="space-y-4">
      <AuthIcon>
        <KeyRound />
      </AuthIcon>

      <div class="flex flex-col items-center justify-center space-y-2">
        <Card.Title tag="h2" class="text-xl font-medium">Password Reset Link Expired</Card.Title>

        <Card.Description class="text-sm text-center text-text-secondary">
          Sorry, the password reset link is invalid or has expired. Please request a new password
          reset link.
        </Card.Description>
      </div>
    </Card.Header>

    <Card.Content>
      <Button href="/forgot-password" variant="outline" class="w-full">Forgot Password</Button>
    </Card.Content>
  </Card.Root>
{:else}
  <Card.Root class="pt-10 pb-6 space-y-8">
    <Card.Header class="space-y-4">
      <AuthIcon>
        <KeyRound />
      </AuthIcon>

      <div class="flex flex-col items-center justify-center space-y-2">
        <Card.Title tag="h2" class="text-2xl font-medium">Change your password</Card.Title>

        <Card.Description class="text-sm text-center text-text-secondary">
          Please enter your new password below to reset your account.
        </Card.Description>
      </div>
    </Card.Header>

    <Card.Content>
      <ChangePasswordForm form={data.form} />
    </Card.Content>
  </Card.Root>

  <p class="flex items-center self-center space-x-1 text-sm">
    <span class="text-text-secondary">Remember your password?</span>
    <a href="/login" class="text-sm font-medium underline"> Login </a>
  </p>
{/if}
