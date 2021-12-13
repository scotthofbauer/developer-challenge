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
          price
          expiration
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
          price
          expiration
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
          price
          expiration
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
      product {
        id
        owner
        token {
          id
          price
          expiration
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
      expiration
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
      product {
        id
        owner
        token {
          id
          price
          expiration
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
      expiration
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
      product {
        id
        owner
        token {
          id
          price
          expiration
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
      expiration
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
        expiration
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
        expiration
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
        expiration
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
