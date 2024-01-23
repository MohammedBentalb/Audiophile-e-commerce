import connectMongo from '../../../../db';
import Pool from '../../../../db/schema/productsSchema';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const slug = request.url.slice(request.url.lastIndexOf('/') + 1);
    await connectMongo();
    const data = await Pool.find({ slug });

    if (!data || data.length === 0)
      return NextResponse.json(
        { message: 'product not found' },
        { status: 404 }
      );

    console.log(slug);
    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
