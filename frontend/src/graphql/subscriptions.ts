/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContract = /* GraphQL */ `
  subscription OnCreateContract {
    onCreateContract {
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
export const onUpdateContract = /* GraphQL */ `
  subscription OnUpdateContract {
    onUpdateContract {
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
export const onDeleteContract = /* GraphQL */ `
  subscription OnDeleteContract {
    onDeleteContract {
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
export const onCreateToken = /* GraphQL */ `
  subscription OnCreateToken {
    onCreateToken {
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
export const onUpdateToken = /* GraphQL */ `
  subscription OnUpdateToken {
    onUpdateToken {
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
export const onDeleteToken = /* GraphQL */ `
  subscription OnDeleteToken {
    onDeleteToken {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
