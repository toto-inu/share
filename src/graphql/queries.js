/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMemo = /* GraphQL */ `
  query GetMemo($id: ID!) {
    getMemo(id: $id) {
      id
      name
      text
      updatedOn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMemos = /* GraphQL */ `
  query ListMemos(
    $filter: ModelMemoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        text
        updatedOn
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMemos = /* GraphQL */ `
  query SyncMemos(
    $filter: ModelMemoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMemos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        text
        updatedOn
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
