import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Card from '../components/card'; 
import './home.css';

function HomePage() {
  const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate('/learn'); 
  };

  return (
    <div className="home">
      <h1 className="home-title">EduNexus</h1>
      <div className="card-container">
        <Card
          title="Learn"
          description="Unlock new horizons of knowledge, one lesson at a time"
          image="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/afdd3a7d6384.png"
          link="/learn"
          className="home-card"
        />
        <Card
          title="Summarize"
          description="Why read a whole book when you can get the gist in seconds?"
          image="https://basmo.app/wp-content/uploads/2021/10/how-to-write-a-book-summary-1.gif"
          link="/summarize"
          className="home-card"
        />
        <Card
          title="Quiz with review"
          description="Your brain's about to get a workout—no gym membership needed!"
          image="https://chintanjain.com/img/journey/learning-from-mistakes.jpg"
          link="/quiz"
          className="home-card"
        />
        <Card
          title="Doubt"
          description="Let’s bust those doubts you got and be clear about every concept"
          image="https://d24x9can9aadud.cloudfront.net/wp-content/uploads/sites/3/2015/09/iStock_000050938528_Medium.jpg"
          link="/doubt"
          className="home-card"
        />
      </div>
      <div className="button-container">
        <button className="home-button" onClick={handleNavigate}>Try now</button> 
      </div>
    </div>
  );
}

export default HomePage;
