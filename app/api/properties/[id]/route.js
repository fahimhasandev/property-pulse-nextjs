import connectDB from '@/config/database';
import Property from '@/models/Property';

export const GET = async (request, { params }) => {
  const { id } = await params;
  try {
    await connectDB();
    const properties = await Property.findById(id);

    return new Response(properties, {
      status: 200,
    });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};
