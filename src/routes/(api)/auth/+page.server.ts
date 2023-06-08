import { fail, redirect } from '@sveltejs/kit'
import { AuthApiError } from '@supabase/supabase-js'

export const actions = {
  login: async ({ url, locals: { supabase } }) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'github',
			options: {
				scopes: 'read:user',
				redirectTo: `${url.origin}/auth/callback`
			}
		});

    if (error) {
      if (error instanceof AuthApiError && error.status === 400) {
        return fail(400, {
          error: 'Invalid credentials.',
        })
      }
      return fail(500, {
        error: 'Server error. Try again later.',
      })
    }

    throw redirect(303, data.url)
  },

  logout: async ({ locals: { supabase } }) => {
    await supabase.auth.signOut()
    throw redirect(303, '/')
  },
}
