import { Document } from 'mongoose';

export interface Penguin extends Document {
  readonly name: string;
  readonly age: number;
  readonly color: string;
  readonly specie: string;
}