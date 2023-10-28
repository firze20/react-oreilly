import Star from './Star';

const createArray = length => [...Array(length)]; //create Array function can be moved to utils



export default function StarRating({ totalStars = 5}) {
  return (
    createArray(totalStars).map((n, i) => <Star key={i} />)
  )
}

