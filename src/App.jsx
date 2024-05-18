import React from 'react'
import Card from './Card'

function App() {
  let planList = ["50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"]
      
  let data= [
    {
      title:"FREE",
      Price:"$0",
      user:"Single User",
      plans: planList
    },
    {
      title:"PLUS",
      Price:"$9",
      user:"5 Users",
      plans: planList
    },
    {
      title:"PRO",
      Price:"$49",
      user:"Unlimited Users",
      plans: planList
    }
   
  ]
  return<>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
    {
          data.map((e,i)=>{
            return <Card data = {e} key={i}/>
          })
        }
    </div>
  </div>
</section>
  </>
}

export default App