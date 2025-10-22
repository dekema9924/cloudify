


import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const file = formData.get('file');

}
