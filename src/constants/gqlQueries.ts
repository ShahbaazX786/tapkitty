import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
query {
  getUsers{
    id,
    username,
    coin_balance
  }
}`