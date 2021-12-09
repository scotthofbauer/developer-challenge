/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContractInput = {
  id?: string | null,
  title: string,
  gatewayAPIId: string,
  isERCBurnable: boolean,
  isERCMintable: boolean,
  isERC721: boolean,
  isERC20: boolean,
  creator: string,
  contractName: string,
};

export type ModelContractConditionInput = {
  title?: ModelStringInput | null,
  gatewayAPIId?: ModelStringInput | null,
  isERCBurnable?: ModelBooleanInput | null,
  isERCMintable?: ModelBooleanInput | null,
  isERC721?: ModelBooleanInput | null,
  isERC20?: ModelBooleanInput | null,
  creator?: ModelStringInput | null,
  contractName?: ModelStringInput | null,
  and?: Array< ModelContractConditionInput | null > | null,
  or?: Array< ModelContractConditionInput | null > | null,
  not?: ModelContractConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Contract = {
  __typename: "Contract",
  id: string,
  title: string,
  gatewayAPIId: string,
  isERCBurnable: boolean,
  isERCMintable: boolean,
  isERC721: boolean,
  isERC20: boolean,
  creator: string,
  contractName: string,
  tokens?: ModelTokenConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTokenConnection = {
  __typename: "ModelTokenConnection",
  items:  Array<Token >,
  nextToken?: string | null,
};

export type Token = {
  __typename: "Token",
  id: string,
  contract?: Contract | null,
  content: string,
  product?: Product | null,
  createdAt: string,
  updatedAt: string,
  contractTokensId?: string | null,
  tokenProductId?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  token?: Token | null,
  img: string,
  name: string,
  brand: string,
  year: string,
  color: string,
  createdAt: string,
  updatedAt: string,
  productTokenId?: string | null,
};

export type UpdateContractInput = {
  id: string,
  title?: string | null,
  gatewayAPIId?: string | null,
  isERCBurnable?: boolean | null,
  isERCMintable?: boolean | null,
  isERC721?: boolean | null,
  isERC20?: boolean | null,
  creator?: string | null,
  contractName?: string | null,
};

export type DeleteContractInput = {
  id: string,
};

export type CreateTokenInput = {
  id?: string | null,
  content: string,
  contractTokensId?: string | null,
  tokenProductId?: string | null,
};

export type ModelTokenConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelTokenConditionInput | null > | null,
  or?: Array< ModelTokenConditionInput | null > | null,
  not?: ModelTokenConditionInput | null,
  contractTokensId?: ModelIDInput | null,
  tokenProductId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTokenInput = {
  id: string,
  content?: string | null,
  contractTokensId?: string | null,
  tokenProductId?: string | null,
};

export type DeleteTokenInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  img: string,
  name: string,
  brand: string,
  year: string,
  color: string,
  productTokenId?: string | null,
};

export type ModelProductConditionInput = {
  img?: ModelStringInput | null,
  name?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  year?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  productTokenId?: ModelIDInput | null,
};

export type UpdateProductInput = {
  id: string,
  img?: string | null,
  name?: string | null,
  brand?: string | null,
  year?: string | null,
  color?: string | null,
  productTokenId?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type ModelContractFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  gatewayAPIId?: ModelStringInput | null,
  isERCBurnable?: ModelBooleanInput | null,
  isERCMintable?: ModelBooleanInput | null,
  isERC721?: ModelBooleanInput | null,
  isERC20?: ModelBooleanInput | null,
  creator?: ModelStringInput | null,
  contractName?: ModelStringInput | null,
  and?: Array< ModelContractFilterInput | null > | null,
  or?: Array< ModelContractFilterInput | null > | null,
  not?: ModelContractFilterInput | null,
};

export type ModelContractConnection = {
  __typename: "ModelContractConnection",
  items:  Array<Contract >,
  nextToken?: string | null,
};

export type ModelTokenFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelTokenFilterInput | null > | null,
  or?: Array< ModelTokenFilterInput | null > | null,
  not?: ModelTokenFilterInput | null,
  contractTokensId?: ModelIDInput | null,
  tokenProductId?: ModelIDInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  img?: ModelStringInput | null,
  name?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  year?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
  productTokenId?: ModelIDInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product >,
  nextToken?: string | null,
};

export type CreateContractMutationVariables = {
  input: CreateContractInput,
  condition?: ModelContractConditionInput | null,
};

export type CreateContractMutation = {
  createContract?:  {
    __typename: "Contract",
    id: string,
    title: string,
    gatewayAPIId: string,
    isERCBurnable: boolean,
    isERCMintable: boolean,
    isERC721: boolean,
    isERC20: boolean,
    creator: string,
    contractName: string,
    tokens?:  {
      __typename: "ModelTokenConnection",
      items:  Array< {
        __typename: "Token",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        contractTokensId?: string | null,
        tokenProductId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContractMutationVariables = {
  input: UpdateContractInput,
  condition?: ModelContractConditionInput | null,
};

export type UpdateContractMutation = {
  updateContract?:  {
    __typename: "Contract",
    id: string,
    title: string,
    gatewayAPIId: string,
    isERCBurnable: boolean,
    isERCMintable: boolean,
    isERC721: boolean,
    isERC20: boolean,
    creator: string,
    contractName: string,
    tokens?:  {
      __typename: "ModelTokenConnection",
      items:  Array< {
        __typename: "Token",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        contractTokensId?: string | null,
        tokenProductId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContractMutationVariables = {
  input: DeleteContractInput,
  condition?: ModelContractConditionInput | null,
};

export type DeleteContractMutation = {
  deleteContract?:  {
    __typename: "Contract",
    id: string,
    title: string,
    gatewayAPIId: string,
    isERCBurnable: boolean,
    isERCMintable: boolean,
    isERC721: boolean,
    isERC20: boolean,
    creator: string,
    contractName: string,
    tokens?:  {
      __typename: "ModelTokenConnection",
      items:  Array< {
        __typename: "Token",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        contractTokensId?: string | null,
        tokenProductId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTokenMutationVariables = {
  input: CreateTokenInput,
  condition?: ModelTokenConditionInput | null,
};

export type CreateTokenMutation = {
  createToken?:  {
    __typename: "Token",
    id: string,
    contract?:  {
      __typename: "Contract",
      id: string,
      title: string,
      gatewayAPIId: string,
      isERCBurnable: boolean,
      isERCMintable: boolean,
      isERC721: boolean,
      isERC20: boolean,
      creator: string,
      contractName: string,
      tokens?:  {
        __typename: "ModelTokenConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    product?:  {
      __typename: "Product",
      id: string,
      token?:  {
        __typename: "Token",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        contractTokensId?: string | null,
        tokenProductId?: string | null,
      } | null,
      img: string,
      name: string,
      brand: string,
      year: string,
      color: string,
      createdAt: string,
      updatedAt: string,
      productTokenId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    contractTokensId?: string | null,
    tokenProductId?: string | null,
  } | null,
};

export type UpdateTokenMutationVariables = {
  input: UpdateTokenInput,
  condition?: ModelTokenConditionInput | null,
};

export type UpdateTokenMutation = {
  updateToken?:  {
    __typename: "Token",
    id: string,
    contract?:  {
      __typename: "Contract",
      id: string,
      title: string,
      gatewayAPIId: string,
      isERCBurnable: boolean,
      isERCMintable: boolean,
      isERC721: boolean,
      isERC20: boolean,
      creator: string,
      contractName: string,
      tokens?:  {
        __typename: "ModelTokenConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    product?:  {
      __typename: "Product",
      id: string,
      token?:  {
        __typename: "Token",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        contractTokensId?: string | null,
        tokenProductId?: string | null,
      } | null,
      img: string,
      name: string,
      brand: string,
      year: string,
      color: string,
      createdAt: string,
      updatedAt: string,
      productTokenId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    contractTokensId?: string | null,
    tokenProductId?: string | null,
  } | null,
};

export type DeleteTokenMutationVariables = {
  input: DeleteTokenInput,
  condition?: ModelTokenConditionInput | null,
};

export type DeleteTokenMutation = {
  deleteToken?:  {
    __typename: "Token",
    id: string,
    contract?:  {
      __typename: "Contract",
      id: string,
      title: string,
      gatewayAPIId: string,
      isERCBurnable: boolean,
      isERCMintable: boolean,
      isERC721: boolean,
      isERC20: boolean,
      creator: string,
      contractName: string,
      tokens?:  {
        __typename: "ModelTokenConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    product?:  {
      __typename: "Product",
      id: string,
      token?:  {
        __typename: "Token",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        contractTokensId?: string | null,
        tokenProductId?: string | null,
      } | null,
      img: string,
      name: string,
      brand: string,
      year: string,
      color: string,
      createdAt: string,
      updatedAt: string,
      productTokenId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    contractTokensId?: string | null,
    tokenProductId?: string | null,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    token?:  {
      __typename: "Token",
      id: string,
      contract?:  {
        __typename: "Contract",
        id: string,
        title: string,
        gatewayAPIId: string,
        isERCBurnable: boolean,
        isERCMintable: boolean,
        isERC721: boolean,
        isERC20: boolean,
        creator: string,
        contractName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      product?:  {
        __typename: "Product",
        id: string,
        img: string,
        name: string,
        brand: string,
        year: string,
        color: string,
        createdAt: string,
        updatedAt: string,
        productTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      contractTokensId?: string | null,
      tokenProductId?: string | null,
    } | null,
    img: string,
    name: string,
    brand: string,
    year: string,
    color: string,
    createdAt: string,
    updatedAt: string,
    productTokenId?: string | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    token?:  {
      __typename: "Token",
      id: string,
      contract?:  {
        __typename: "Contract",
        id: string,
        title: string,
        gatewayAPIId: string,
        isERCBurnable: boolean,
        isERCMintable: boolean,
        isERC721: boolean,
        isERC20: boolean,
        creator: string,
        contractName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      product?:  {
        __typename: "Product",
        id: string,
        img: string,
        name: string,
        brand: string,
        year: string,
        color: string,
        createdAt: string,
        updatedAt: string,
        productTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      contractTokensId?: string | null,
      tokenProductId?: string | null,
    } | null,
    img: string,
    name: string,
    brand: string,
    year: string,
    color: string,
    createdAt: string,
    updatedAt: string,
    productTokenId?: string | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    token?:  {
      __typename: "Token",
      id: string,
      contract?:  {
        __typename: "Contract",
        id: string,
        title: string,
        gatewayAPIId: string,
        isERCBurnable: boolean,
        isERCMintable: boolean,
        isERC721: boolean,
        isERC20: boolean,
        creator: string,
        contractName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      product?:  {
        __typename: "Product",
        id: string,
        img: string,
        name: string,
        brand: string,
        year: string,
        color: string,
        createdAt: string,
        updatedAt: string,
        productTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      contractTokensId?: string | null,
      tokenProductId?: string | null,
    } | null,
    img: string,
    name: string,
    brand: string,
    year: string,
    color: string,
    createdAt: string,
    updatedAt: string,
    productTokenId?: string | null,
  } | null,
};

export type GetContractQueryVariables = {
  id: string,
};

export type GetContractQuery = {
  getContract?:  {
    __typename: "Contract",
    id: string,
    title: string,
    gatewayAPIId: string,
    isERCBurnable: boolean,
    isERCMintable: boolean,
    isERC721: boolean,
    isERC20: boolean,
    creator: string,
    contractName: string,
    tokens?:  {
      __typename: "ModelTokenConnection",
      items:  Array< {
        __typename: "Token",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        contractTokensId?: string | null,
        tokenProductId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContractsQueryVariables = {
  filter?: ModelContractFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContractsQuery = {
  listContracts?:  {
    __typename: "ModelContractConnection",
    items:  Array< {
      __typename: "Contract",
      id: string,
      title: string,
      gatewayAPIId: string,
      isERCBurnable: boolean,
      isERCMintable: boolean,
      isERC721: boolean,
      isERC20: boolean,
      creator: string,
      contractName: string,
      tokens?:  {
        __typename: "ModelTokenConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetTokenQueryVariables = {
  id: string,
};

export type GetTokenQuery = {
  getToken?:  {
    __typename: "Token",
    id: string,
    contract?:  {
      __typename: "Contract",
      id: string,
      title: string,
      gatewayAPIId: string,
      isERCBurnable: boolean,
      isERCMintable: boolean,
      isERC721: boolean,
      isERC20: boolean,
      creator: string,
      contractName: string,
      tokens?:  {
        __typename: "ModelTokenConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    product?:  {
      __typename: "Product",
      id: string,
      token?:  {
        __typename: "Token",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        contractTokensId?: string | null,
        tokenProductId?: string | null,
      } | null,
      img: string,
      name: string,
      brand: string,
      year: string,
      color: string,
      createdAt: string,
      updatedAt: string,
      productTokenId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    contractTokensId?: string | null,
    tokenProductId?: string | null,
  } | null,
};

export type ListTokensQueryVariables = {
  filter?: ModelTokenFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTokensQuery = {
  listTokens?:  {
    __typename: "ModelTokenConnection",
    items:  Array< {
      __typename: "Token",
      id: string,
      contract?:  {
        __typename: "Contract",
        id: string,
        title: string,
        gatewayAPIId: string,
        isERCBurnable: boolean,
        isERCMintable: boolean,
        isERC721: boolean,
        isERC20: boolean,
        creator: string,
        contractName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      product?:  {
        __typename: "Product",
        id: string,
        img: string,
        name: string,
        brand: string,
        year: string,
        color: string,
        createdAt: string,
        updatedAt: string,
        productTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      contractTokensId?: string | null,
      tokenProductId?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    token?:  {
      __typename: "Token",
      id: string,
      contract?:  {
        __typename: "Contract",
        id: string,
        title: string,
        gatewayAPIId: string,
        isERCBurnable: boolean,
        isERCMintable: boolean,
        isERC721: boolean,
        isERC20: boolean,
        creator: string,
        contractName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      product?:  {
        __typename: "Product",
        id: string,
        img: string,
        name: string,
        brand: string,
        year: string,
        color: string,
        createdAt: string,
        updatedAt: string,
        productTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      contractTokensId?: string | null,
      tokenProductId?: string | null,
    } | null,
    img: string,
    name: string,
    brand: string,
    year: string,
    color: string,
    createdAt: string,
    updatedAt: string,
    productTokenId?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      token?:  {
        __typename: "Token",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        contractTokensId?: string | null,
        tokenProductId?: string | null,
      } | null,
      img: string,
      name: string,
      brand: string,
      year: string,
      color: string,
      createdAt: string,
      updatedAt: string,
      productTokenId?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContractSubscription = {
  onCreateContract?:  {
    __typename: "Contract",
    id: string,
    title: string,
    gatewayAPIId: string,
    isERCBurnable: boolean,
    isERCMintable: boolean,
    isERC721: boolean,
    isERC20: boolean,
    creator: string,
    contractName: string,
    tokens?:  {
      __typename: "ModelTokenConnection",
      items:  Array< {
        __typename: "Token",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        contractTokensId?: string | null,
        tokenProductId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContractSubscription = {
  onUpdateContract?:  {
    __typename: "Contract",
    id: string,
    title: string,
    gatewayAPIId: string,
    isERCBurnable: boolean,
    isERCMintable: boolean,
    isERC721: boolean,
    isERC20: boolean,
    creator: string,
    contractName: string,
    tokens?:  {
      __typename: "ModelTokenConnection",
      items:  Array< {
        __typename: "Token",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        contractTokensId?: string | null,
        tokenProductId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContractSubscription = {
  onDeleteContract?:  {
    __typename: "Contract",
    id: string,
    title: string,
    gatewayAPIId: string,
    isERCBurnable: boolean,
    isERCMintable: boolean,
    isERC721: boolean,
    isERC20: boolean,
    creator: string,
    contractName: string,
    tokens?:  {
      __typename: "ModelTokenConnection",
      items:  Array< {
        __typename: "Token",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        contractTokensId?: string | null,
        tokenProductId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTokenSubscription = {
  onCreateToken?:  {
    __typename: "Token",
    id: string,
    contract?:  {
      __typename: "Contract",
      id: string,
      title: string,
      gatewayAPIId: string,
      isERCBurnable: boolean,
      isERCMintable: boolean,
      isERC721: boolean,
      isERC20: boolean,
      creator: string,
      contractName: string,
      tokens?:  {
        __typename: "ModelTokenConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    product?:  {
      __typename: "Product",
      id: string,
      token?:  {
        __typename: "Token",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        contractTokensId?: string | null,
        tokenProductId?: string | null,
      } | null,
      img: string,
      name: string,
      brand: string,
      year: string,
      color: string,
      createdAt: string,
      updatedAt: string,
      productTokenId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    contractTokensId?: string | null,
    tokenProductId?: string | null,
  } | null,
};

export type OnUpdateTokenSubscription = {
  onUpdateToken?:  {
    __typename: "Token",
    id: string,
    contract?:  {
      __typename: "Contract",
      id: string,
      title: string,
      gatewayAPIId: string,
      isERCBurnable: boolean,
      isERCMintable: boolean,
      isERC721: boolean,
      isERC20: boolean,
      creator: string,
      contractName: string,
      tokens?:  {
        __typename: "ModelTokenConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    product?:  {
      __typename: "Product",
      id: string,
      token?:  {
        __typename: "Token",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        contractTokensId?: string | null,
        tokenProductId?: string | null,
      } | null,
      img: string,
      name: string,
      brand: string,
      year: string,
      color: string,
      createdAt: string,
      updatedAt: string,
      productTokenId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    contractTokensId?: string | null,
    tokenProductId?: string | null,
  } | null,
};

export type OnDeleteTokenSubscription = {
  onDeleteToken?:  {
    __typename: "Token",
    id: string,
    contract?:  {
      __typename: "Contract",
      id: string,
      title: string,
      gatewayAPIId: string,
      isERCBurnable: boolean,
      isERCMintable: boolean,
      isERC721: boolean,
      isERC20: boolean,
      creator: string,
      contractName: string,
      tokens?:  {
        __typename: "ModelTokenConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    product?:  {
      __typename: "Product",
      id: string,
      token?:  {
        __typename: "Token",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        contractTokensId?: string | null,
        tokenProductId?: string | null,
      } | null,
      img: string,
      name: string,
      brand: string,
      year: string,
      color: string,
      createdAt: string,
      updatedAt: string,
      productTokenId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    contractTokensId?: string | null,
    tokenProductId?: string | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    token?:  {
      __typename: "Token",
      id: string,
      contract?:  {
        __typename: "Contract",
        id: string,
        title: string,
        gatewayAPIId: string,
        isERCBurnable: boolean,
        isERCMintable: boolean,
        isERC721: boolean,
        isERC20: boolean,
        creator: string,
        contractName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      product?:  {
        __typename: "Product",
        id: string,
        img: string,
        name: string,
        brand: string,
        year: string,
        color: string,
        createdAt: string,
        updatedAt: string,
        productTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      contractTokensId?: string | null,
      tokenProductId?: string | null,
    } | null,
    img: string,
    name: string,
    brand: string,
    year: string,
    color: string,
    createdAt: string,
    updatedAt: string,
    productTokenId?: string | null,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    token?:  {
      __typename: "Token",
      id: string,
      contract?:  {
        __typename: "Contract",
        id: string,
        title: string,
        gatewayAPIId: string,
        isERCBurnable: boolean,
        isERCMintable: boolean,
        isERC721: boolean,
        isERC20: boolean,
        creator: string,
        contractName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      product?:  {
        __typename: "Product",
        id: string,
        img: string,
        name: string,
        brand: string,
        year: string,
        color: string,
        createdAt: string,
        updatedAt: string,
        productTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      contractTokensId?: string | null,
      tokenProductId?: string | null,
    } | null,
    img: string,
    name: string,
    brand: string,
    year: string,
    color: string,
    createdAt: string,
    updatedAt: string,
    productTokenId?: string | null,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    token?:  {
      __typename: "Token",
      id: string,
      contract?:  {
        __typename: "Contract",
        id: string,
        title: string,
        gatewayAPIId: string,
        isERCBurnable: boolean,
        isERCMintable: boolean,
        isERC721: boolean,
        isERC20: boolean,
        creator: string,
        contractName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      product?:  {
        __typename: "Product",
        id: string,
        img: string,
        name: string,
        brand: string,
        year: string,
        color: string,
        createdAt: string,
        updatedAt: string,
        productTokenId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      contractTokensId?: string | null,
      tokenProductId?: string | null,
    } | null,
    img: string,
    name: string,
    brand: string,
    year: string,
    color: string,
    createdAt: string,
    updatedAt: string,
    productTokenId?: string | null,
  } | null,
};
