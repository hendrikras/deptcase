import gql from 'graphql-tag'

export const navItems = gql`
  query navItems ($country: String!) {
   navItems(country: $country){
    home
    work
    over
    services
    partners
    stories
    careers
    contact
  }
}`

export const tagLines = gql`
  query tagLines ($country: String!) {
   tagLines(country: $country){
    home
    work
    over
    services
    partners
    stories
    careers
    contact
  }
}`



export const employees = gql`query {
  employees {
    id,
    firstName,
    lastName,
    avatar,
  }
}`


export const locales = gql`query {
  locales {
    en_en
    nl_nl
    de_de
    en_gb
    en_ie
    de_ch
    da_dk
    en_us
  }
}`

export const allCompanies = gql`query allCompanies{
  allCompanies {
    id,
    name,
    industry,
  }
}`

