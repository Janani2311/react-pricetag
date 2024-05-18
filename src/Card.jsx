function Card(props){
    return <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{props.data.title}</h5>
        <h6 className="card-price text-center">{props.data.Price}/month</h6>
        <hr/>
        <ul className="fa-ul">
          <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.user}</li>
          {
            
            props.data.plans.map((e,i)=> {
              if(props.data.title == "FREE")
                return (i <= 2) ? <li><span className="fa-li" key = {i}><i className="fas fa-check"></i></span>{e}</li>
                : <li className="text-muted"><span className="fa-li" key = {i}><i class="fas fa-times"></i></span>{e}</li>
  
              if(props.data.title == "PLUS")
                return (i <= 5) ? <li><span className="fa-li" key = {i}><i className="fas fa-check"></i></span>{e}</li>
                : <li className="text-muted"><span className="fa-li" key = {i}><i class="fas fa-times"></i></span>{e}</li>
  
              if(props.data.title == "PRO")
                return <li><span className="fa-li" key = {i}><i className="fas fa-check"></i></span>{e}</li>
                
            })
                
          }
        </ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
  
}

export default Card