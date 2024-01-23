 import connectMongo from '../../../../db';
import { NextResponse } from 'next/server';
import  Pool  from '../../../../db/schema/productsSchema';

export async function GET(request: Request) {
  try {
    const slug = request.url.slice(request.url.lastIndexOf('/') + 1);
    await connectMongo()
    const data = await Pool.find({category: slug})
    if (!data || data.length === 0)  return NextResponse.json(
      { message: 'product not found' },
      { status: 404 } )

    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json({ error: 'An error occurred' });
  }
}