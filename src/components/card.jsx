function Card(props) {
  return (
    <div className="Card">
      <div className="top-card">
        <img
          src={props.image}
          alt=""
        />

        <div className="company-title">
          <span>
            <h3>{props.name}</h3>
            <p>{props.days}</p>
          </span>
        </div>

        <div className="job-role">
        {props.job}
        </div>

        <div className="tags">
          <span>{props.tag1}</span>
          <span>{props.tag2}</span>
        </div>

        <div className="Salary">
          {props.salary}
          <div className="location">
            {props.state}, {props.country}
          </div>
        </div>

        <div className="apply">
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card