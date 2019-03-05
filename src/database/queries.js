import gql from 'graphql-tag'

export const navItems = gql`{
    navItems (country: "en_en") {
      home
      work
      over
      services
      partners
      stories
      careers
      contact
    }
  }
`

export const employees = gql`query {
  employees {
    id,
    firstName,
    lastName
  }
}`
