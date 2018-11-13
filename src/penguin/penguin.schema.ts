import * as mongoose from 'mongoose';

export const PenguinSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false,
    },
    color: {
        type: String,
        required: true,
    },
    specie: {
        type: String,
        required: true,
    },
});