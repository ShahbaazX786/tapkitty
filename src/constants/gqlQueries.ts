import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
query {
  getUsers{
    id,
    username,
    coin_balance
  }
}`

export const GET_USER_BY_ID = gql`
query getUserById ($userid:ID) {
  getUserById(id:$userid){
    id,
    username,
    coin_balance
  }
}`
