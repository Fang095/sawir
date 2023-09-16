import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import { registerFormSchema } from '$lib/schemas';

export function load() {
  return {
    form: superValidate(registerFormSchema)
  };
}

export const actions = {
  default: async (event) => {
    const form = await superValidate(event, registerFormSchema);

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
