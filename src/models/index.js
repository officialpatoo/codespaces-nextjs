// @ts-check
// @ts-ignore
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Task, Note } = initSchema(schema);

export {
  Task,
  Note
};
