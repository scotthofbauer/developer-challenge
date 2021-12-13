import { UpdateProductMutation, UpdateProductMutationVariables } from "../API";

export type MintTokenKaliedoResponse = {
  data: {
    headers: {
      id: String;
      type: String;
      timeReceived: String;
      timeElapsed: Number;
      requestOffset: String;
      requestId: String;
      requestABIId: String;
    };
    blockHash: String;
    blockNumber: String;
    cumulativeGasUsed: String;
    from: String;
    gasUsed: String;
    nonce: String;
    status: 1;
    to: String;
    transactionHash: String;
    transactionIndex: String;
  };
};

export type MintTokenResponse = {
  token: MintTokenKaliedoResponse;
  product: UpdateProductMutationVariables;
};
