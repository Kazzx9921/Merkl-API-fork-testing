// @ts-nocheck
import { gql } from "graphql-request";
// End timestamp is 0 for active positions
export const positionsQuery = gql `
  query Positions($owner: String!) {
    nft: nftpositions(where: { owner: $owner, endTimestamp: 0 }) {
      id
      pool {
        id
      }
      startTimestamp
      endTimestamp
      tickLower
      tickUpper
      liquidity
      owner
    }
    direct: directPositions(where: { owner: $owner, endTimestamp: 0 }) {
      id
      pool {
        id
      }
      startTimestamp
      endTimestamp
      tickLower
      tickUpper
      liquidity
      owner
    }
  }
`;
export const nftWrapperPositionsQuery = gql `
  query Holders($owners: [String!], $first: Int!, $skip: Int!) {
    holderNFTs(where: { holder_in: $owners, balance: 1 }, first: $first, skip: $skip) {
      holder
      token
      tokenId
      id
    }
  }
`;
export const nftPositionByIdsQuery = gql `
  query Positions($ids: [String!], $skip: Int) {
    nft: nftpositions(where: { id_in: $ids, endTimestamp: 0 }, first: 1000, skip: $skip, orderBy: liquidity, orderDirection: desc) {
      id
      pool {
        id
      }
      startTimestamp
      endTimestamp
      tickLower
      tickUpper
      liquidity
      owner
    }
  }
`;
/** Queries */
// End timestamp is 0 for active positions
// TODO: add sorting
export const positionMultipleOwnersQuery = gql `
  query Positions($owners: [String!], $skip: Int) {
    nft: nftpositions(where: { owner_in: $owners, endTimestamp: 0 }, first: 1000, skip: $skip, orderBy: liquidity, orderDirection: desc) {
      id
      pool {
        id
      }
      startTimestamp
      endTimestamp
      tickLower
      tickUpper
      liquidity
      owner
    }
    direct: directPositions(
      where: { owner_in: $owners, endTimestamp: 0 }
      first: 1000
      skip: $skip
      orderBy: liquidity
      orderDirection: desc
    ) {
      id
      pool {
        id
      }
      startTimestamp
      endTimestamp
      tickLower
      tickUpper
      liquidity
      owner
    }
  }
`;
export const positionsWithPastQuery = gql `
  query Positions($owners: [String!], $timestamp: Int!, $pool: String!) {
    nft: nftpositions(where: { owner_in: $owners, pool: $pool, endTimestamp: 0 }) {
      id
      pool {
        id
      }
      startTimestamp
      endTimestamp
      tickLower
      tickUpper
      liquidity
      owner
    }
    nftPast: nftpositions(where: { owner_in: $owners, pool: $pool, endTimestamp_gt: $timestamp }) {
      id
      pool {
        id
      }
      startTimestamp
      endTimestamp
      tickLower
      tickUpper
      liquidity
      owner
    }
    direct: directPositions(where: { owner_in: $owners, pool: $pool, endTimestamp: 0 }) {
      id
      pool {
        id
      }
      startTimestamp
      endTimestamp
      tickLower
      tickUpper
      liquidity
      owner
    }
    directPast: directPositions(where: { owner_in: $owners, pool: $pool, endTimestamp_gt: $timestamp }) {
      id
      pool {
        id
      }
      startTimestamp
      endTimestamp
      tickLower
      tickUpper
      liquidity
      owner
    }
  }
`;
export const almBalancesQuery = gql `
  query Holders($owner: String!) {
    holders(where: { holder: $owner, week: 0 }) {
      token
      balance
    }
  }
`;
export const almNFTBalancesQuery = gql `
  query Holders($owner: String!) {
    holders: holderNFTs(where: { holder: $owner, week: 0 }) {
      token
      tokenId
      balance
    }
  }
`;
