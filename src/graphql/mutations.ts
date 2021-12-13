/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContract = /* GraphQL */ `
  mutation CreateContract(
    $input: CreateContractInput!
    $condition: ModelContractConditionInput
  ) {
    createContract(input: $input, condition: $condition) {
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
          price
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
export const updateContract = /* GraphQL */ `
  mutation UpdateContract(
    $input: UpdateContractInput!
    $condition: ModelContractConditionInput
  ) {
    updateContract(input: $input, condition: $condition) {
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
          price
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
export const deleteContract = /* GraphQL */ `
  mutation DeleteContract(
    $input: DeleteContractInput!
    $condition: ModelContractConditionInput
  ) {
    deleteContract(input: $input, condition: $condition) {
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
          price
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
export const createToken = /* GraphQL */ `
  mutation CreateToken(
    $input: CreateTokenInput!
    $condition: ModelTokenConditionInput
  ) {
    createToken(input: $input, condition: $condition) {
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
      product {
        id
        owner
        token {
          id
          price
          createdAt
          updatedAt
          contractTokensId
          tokenProductId
        }
        img
        name
        brand
        year
        minted
        redeemed
        createdAt
        updatedAt
        productTokenId
      }
      price
      createdAt
      updatedAt
      contractTokensId
      tokenProductId
    }
  }
`;
export const updateToken = /* GraphQL */ `
  mutation UpdateToken(
    $input: UpdateTokenInput!
    $condition: ModelTokenConditionInput
  ) {
    updateToken(input: $input, condition: $condition) {
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
      product {
        id
        owner
        token {
          id
          price
          createdAt
          updatedAt
          contractTokensId
          tokenProductId
        }
        img
        name
        brand
        year
        minted
        redeemed
        createdAt
        updatedAt
        productTokenId
      }
      price
      createdAt
      updatedAt
      contractTokensId
      tokenProductId
    }
  }
`;
export const deleteToken = /* GraphQL */ `
  mutation DeleteToken(
    $input: DeleteTokenInput!
    $condition: ModelTokenConditionInput
  ) {
    deleteToken(input: $input, condition: $condition) {
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
      product {
        id
        owner
        token {
          id
          price
          createdAt
          updatedAt
          contractTokensId
          tokenProductId
        }
        img
        name
        brand
        year
        minted
        redeemed
        createdAt
        updatedAt
        productTokenId
      }
      price
      createdAt
      updatedAt
      contractTokensId
      tokenProductId
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      owner
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
        product {
          id
          owner
          img
          name
          brand
          year
          minted
          redeemed
          createdAt
          updatedAt
          productTokenId
        }
        price
        createdAt
        updatedAt
        contractTokensId
        tokenProductId
      }
      img
      name
      brand
      year
      minted
      redeemed
      createdAt
      updatedAt
      productTokenId
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      owner
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
        product {
          id
          owner
          img
          name
          brand
          year
          minted
          redeemed
          createdAt
          updatedAt
          productTokenId
        }
        price
        createdAt
        updatedAt
        contractTokensId
        tokenProductId
      }
      img
      name
      brand
      year
      minted
      redeemed
      createdAt
      updatedAt
      productTokenId
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      owner
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
        product {
          id
          owner
          img
          name
          brand
          year
          minted
          redeemed
          createdAt
          updatedAt
          productTokenId
        }
        price
        createdAt
        updatedAt
        contractTokensId
        tokenProductId
      }
      img
      name
      brand
      year
      minted
      redeemed
      createdAt
      updatedAt
      productTokenId
    }
  }
`;
