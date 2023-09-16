import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import { formSchema } from './schema';

export function load() {
  return {
    form: superValidate(formSchema)
  };
}

export const actions = {
  default: async (event) => {
    const form = await superValidate(event, formSchema);

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
