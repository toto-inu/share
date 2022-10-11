// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Memo } = initSchema(schema);

export {
  Memo
};