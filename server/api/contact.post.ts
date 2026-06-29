import { createClient } from '@supabase/supabase-js'
import { H3Event, readBody } from 'h3'

export default async (event: H3Event) => {
  const body = await readBody(event)
  const { name, email, message } = body || {}

  if (!name || !email || !message) {
    return createError({ statusCode: 400, statusMessage: 'All fields are required.' })
  }

  const config = useRuntimeConfig()
  const supabaseUrl = config.public.supabaseUrl || process.env.NUXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey =
    config.supabaseServiceRoleKey ||
    process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    return createError({ statusCode: 500, statusMessage: 'Supabase server configuration is missing.' })
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey)
  const { error } = await supabase.from('contacts').insert([
    {
      name,
      email,
      message
    }
  ])

  if (error) {
    return createError({ statusCode: 500, statusMessage: error.message })
  }

  return {
    success: true
  }
}
