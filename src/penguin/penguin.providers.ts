import { Connection } from 'mongoose';

import { PenguinSchema } from './penguin.schema';
import { PENGUIN_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const penguinProviders = [
    {
        provide: PENGUIN_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Penguin', PenguinSchema),
        inject: [DB_PROVIDER],
    },
];