import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type MemoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Memo {
  readonly id: string;
  readonly name: string;
  readonly text?: string | null;
  readonly updatedOn: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Memo, MemoMetaData>);
  static copyOf(source: Memo, mutator: (draft: MutableModel<Memo, MemoMetaData>) => MutableModel<Memo, MemoMetaData> | void): Memo;
}