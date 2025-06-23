import { connectToDatabase } from '../../utils/mongodb';
import mongoose from 'mongoose';

const TestSchema = new mongoose.Schema({ name: String }, { collection: 'test' });
const Test = mongoose.models.Test || mongoose.model('Test', TestSchema);

export async function GET() {
  await connectToDatabase();
  const docs = await Test.find({});
  return Response.json({ docs });
}

export async function POST(request: Request) {
  await connectToDatabase();
  const docs = await Test.create({ name: 'Изя' });
  return Response.json({ docs });
}

