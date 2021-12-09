/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContract = /* GraphQL */ `
  query GetContract($id: ID!) {
    getContract(id: $id) {
      id
      title
      gatewayAPIId
      isERCBurnable
      isERCMintable
      isERC721
      isERC20
      creator
      contractName
      tokens {
        items {
          id
          content
          createdAt
          updatedAt
          contractTokensId
          tokenProductId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listContracts = /* GraphQL */ `
  query ListContracts(
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContracts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        gatewayAPIId
        isERCBurnable
        isERCMintable
        isERC721
        isERC20
        creator
        contractName
        tokens {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getToken = /* GraphQL */ `
  query GetToken($id: ID!) {
    getToken(id: $id) {
      id
      contract {
        id
        title
        gatewayAPIId
        isERCBurnable
        isERCMintable
        isERC721
        isERC20
        creator
        contractName
        tokens {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      product {
        id
        token {
          id
          content
          createdAt
          updatedAt
          contractTokensId
          tokenProductId
        }
        img
        name
        brand
        year
        color
        createdAt
        updatedAt
        productTokenId
      }
      createdAt
      updatedAt
      contractTokensId
      tokenProductId
    }
  }
`;
export const listTokens = /* GraphQL */ `
  query ListTokens(
    $filter: ModelTokenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTokens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contract {
          id
          title
          gatewayAPIId
          isERCBurnable
          isERCMintable
          isERC721
          isERC20
          creator
          contractName
          createdAt
          updatedAt
        }
        content
        product {
          id
          img
          name
          brand
          year
          color
          createdAt
          updatedAt
          productTokenId
        }
        createdAt
        updatedAt
        contractTokensId
        tokenProductId
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      token {
        id
        contract {
          id
          title
          gatewayAPIId
          isERCBurnable
          isERCMintable
          isERC721
          isERC20
          creator
          contractName
          createdAt
          updatedAt
        }
        content
        product {
          id
          img
          name
          brand
          year
          color
          createdAt
          updatedAt
          productTokenId
        }
        createdAt
        updatedAt
        contractTokensId
        tokenProductId
      }
      img
      name
      brand
      year
      color
      createdAt
      updatedAt
      productTokenId
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        token {
          id
          content
          createdAt
          updatedAt
          contractTokensId
          tokenProductId
        }
        img
        name
        brand
        year
        color
        createdAt
        updatedAt
        productTokenId
      }
      nextToken
    }
  }
`;
