import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { CartPool } from '@/db/schema/cartSchema';
import connectMongo from '@/db';

/** GET */
export async function GET() {
  const session = await getServerSession();
  if (!session || !session.user)
    return NextResponse.json({ message: 'Route protected' }, { status: 401 });

  try {
    await connectMongo();
    const data = await CartPool.find({ email: session?.user?.email });
    return NextResponse.json({
      message: 'success',
      cartItems: data || [],
      session: session.user.email,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: 'server Error' }, { status: 500 });
  }
}

/**  POST */
export async function POST(request: Request) {
  const session = await getServerSession();
  if (!session || !session.user)
    return NextResponse.json({ message: 'Route protected' }, { status: 401 });

  try {
    await connectMongo();
    const item = await request.json();
    const data = await CartPool.insertMany(item);
    return NextResponse.json({ message: 'success', data });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: 'server Error' }, { status: 500 });
  }
}

/** PATCH */

export async function PATCH(request: Request) {
  const session = await getServerSession();
  if (!session || !session.user)
    return NextResponse.json({ message: 'Route protected' }, { status: 401 });

  try {
    await connectMongo();
    const item = await request.json();
    const data = await CartPool.findOneAndUpdate(
      { email: session.user.email, slug: item.slug },
      { $set: { quantity: item.quantity } },
      { new: true }
    );
    if (!data)
      return NextResponse.json(
        { message: 'Cart item not found' },
        { status: 404 }
      );

    return NextResponse.json({ message: 'success' });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: 'Internal Error' }, { status: 500 });
  }
}

/** DELETE */
export async function DELETE(request: Request) {
  const session = await getServerSession();
  if (!session || !session.user)
    return NextResponse.json({ message: 'Route protected' }, { status: 401 });

  try {
    await connectMongo();
    const { item, all } = await request.json();

    if (all) {
      const data = await CartPool.deleteMany({ email: session.user.email });
      if (!data)
        return NextResponse.json(
          { message: 'item not found' },
          { status: 404 }
        );
    } else if (!all) {
      const data = await CartPool.deleteOne({
        email: session.user.email,
        slug: item.slug,
      });

      if (!data)
        return NextResponse.json(
          { message: 'item not found' },
          { status: 404 }
        );
    }

    return NextResponse.json({ message: 'success' });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: 'server Error' }, { status: 500 });
  }
}
