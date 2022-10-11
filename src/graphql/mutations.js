/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMemo = /* GraphQL */ `
  mutation CreateMemo(
    $input: CreateMemoInput!
    $condition: ModelMemoConditionInput
  ) {
    createMemo(input: $input, condition: $condition) {
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
export const updateMemo = /* GraphQL */ `
  mutation UpdateMemo(
    $input: UpdateMemoInput!
    $condition: ModelMemoConditionInput
  ) {
    updateMemo(input: $input, condition: $condition) {
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
export const deleteMemo = /* GraphQL */ `
  mutation DeleteMemo(
    $input: DeleteMemoInput!
    $condition: ModelMemoConditionInput
  ) {
    deleteMemo(input: $input, condition: $condition) {
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
