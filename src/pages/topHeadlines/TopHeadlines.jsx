import axios from 'axios';
import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './topheadlines.css'

function TopHeadlines() {

    const [data, setData] = useState([]);

    const getTopHeadlines = () => {
      axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=f134fc50e5c8414f93fde33421a5bf48')
        .then((response) => {
          console.log(response)
          setData(response.data.articles)
        })
    }
    

  return (
    <>
    <Header/>
    <div className='parent-div container'>
      <div className='btn-container'>
        <button className=' btn btn-primary ' onClick={getTopHeadlines}>Top-Headlines</button>
      </div>
      <div className='container'>
        <div className='row'>
            {
              data.map((value)=>{
                return(
                  <div className='col p-5' key={value.url}>
                  <div className="card" style={{width: "29rem", height: "37rem"}}>
                    <img src={value.urlToImage} className="img card-img-top" alt="..."/>
                      <div className="card-body">
                        <h3 className="card-title py-2">{value.title}</h3>
                        <p className="card-text">{value.description}</p>
                        <a href={value.url} className="btn btn-primary">Read More on {value.source.name}</a>
                      </div>
                  </div>
                </div>
                );
              })
            }
        </div>
      </div>
    </div>
    <Footer/>
  </>
  )
}

export default TopHeadlines