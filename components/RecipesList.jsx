import { useState, useEffect } from "react"


export default function Recipes({token}) {
  const [recipes, setRecipes] = useState()

  useEffect(() => {
    fetch('https://auth-api-jhs.web.app/')
    .then(res => res.json())
    .then(setRecipes)
    .catch(alert)
  }, [] ) 
  
  return (
<>

</>
  )
}