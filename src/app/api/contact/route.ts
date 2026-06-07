import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, inquiry, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { error } = await supabase
    .from('contact_submissions')
    .insert({ name, email, inquiry: inquiry ?? 'General', message });

  if (error) {
    console.error('[contact] Supabase error:', error);
    return NextResponse.json({ error: 'Failed to submit message.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
