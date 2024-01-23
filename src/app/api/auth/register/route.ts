import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { UserPool } from '@/db/schema/userSchema';
import connectMongo from '@/db';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    await connectMongo();

    const alreadyExist = await UserPool.findOne({ email });
    if (alreadyExist)
      return NextResponse.json(
        { message: 'Email already exists' },
        { status: 409 }
      );

    const hashedPassword = await hash(password, 10);

    await UserPool.insertMany({
      email,
      password: hashedPassword,
    });

    console.log({ email, password });
  } catch (e) {
    console.log(e);
  }

  return NextResponse.json({ message: 'success' });
}
