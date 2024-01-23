import { getSession } from "next-auth/react"

import SignBubbleText from './SignBubbleText'


async function SignBubble() {


 const loggedIn = await getSession()
             


  return (
    <div>
      <SignBubbleText loggedIn={loggedIn} /> 
    </div>
  )
}

export default SignBubble
