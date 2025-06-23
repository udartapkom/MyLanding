import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/mylandingpage';

declare global {
  // eslint-disable-next-line no-var
  var mongooseConnectionPromise: Promise<typeof mongoose> | undefined;
}

const globalAny: any = global;

if (!globalAny.mongooseConnectionPromise) {
  globalAny.mongooseConnectionPromise = mongoose.connect(uri);
  console.log('Connected to MongoDB');
}

export async function connectToDatabase() {
  await globalAny.mongooseConnectionPromise;
} 