import React  from 'react'
import newsimg from './newsimg.jpg'
const NewsItem=(props)=> {
    let {title,description,imgUrl,url,author,date,source}=props;
    return (
      <div className='my-3'>
        <div className="card">'
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:0}}>
          <span className=" badge rounded-pill bg-danger" >{source}</span>
        </div>
          <img src={imgUrl?imgUrl:newsimg} className="card-img-top" alt='..'/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {author?author:"unknown"} on {new Date(date).toTimeString()}</small></p>
            <a  href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">View more</a>
        </div>
</div>
      </div>
    )
}

export default NewsItem