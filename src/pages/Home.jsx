import React from 'react'
import Header from '../components/Header'
import ListMovie from '../components/ListMovie'
import requests from '../config/apiRequest'
const Home = () => {
  return (
    <>
      <Header/>
      <ListMovie isLarge title="Upcoming" requestMovie = {requests.requestUpcoming}/>
      <ListMovie title="TopRated" requestMovie = {requests.requestTopRated}/>
      <ListMovie title="Trending" requestMovie = {requests.requestTrending}/>
      <ListMovie title="Horror" requestMovie = {requests.requestUpcoming}/>
    </>
  )
}

export default Home