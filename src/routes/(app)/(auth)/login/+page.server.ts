import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import { loginFormSchema } from '$lib/schemas.js';

export function load() {
  return {
    form: superValidate(loginFormSchema)
  };
}

export const actions = {
  default: async (event) => {
    const form = await superValidate(event, loginFormSchema);

    console.log('form - ', form);

    if (!form.valid) {
      return fail(400, {
        form
      });
    }

    return {
      form
    };
  }
};
