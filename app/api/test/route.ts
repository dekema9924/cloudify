// app/api/test/route.ts
import { connectDB } from '@/lib/server/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  return NextResponse.json({ ok: true });
}
