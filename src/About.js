// AboutUsPage.js
import React from 'react';

const AboutUsPage = () => {
  return (
    <div className='about'>
      <h1 className="about-us-heading">About Us</h1>
      <div className="about-us-container">
        <div className="card">
          <img className="card-image" src="../img1.jpg" alt="Image 1" />
          <div className="card-content">
            <h2>Who We Are</h2>
            <p>
              We are a dedicated group of four final-year computer engineering students, passionate about leveraging
              technology to make a positive impact on healthcare. In our journey, we have learned to tackle complex
              challenges and find innovative solutions. Our diverse skill set and shared vision drive us to create
              meaningful and transformative projects that contribute to the well-being of individuals and communities.
            </p>
          </div>
        </div>

        <div className="card">
          <img className="card-image" src="../img2.jpg" alt="Image 2" />
          <div className="card-content">
            <h2>What Is Our Project</h2>
            <p>
            VoicePD utilizes advanced Machine Learning (ML) algorithms for improved early detection of Parkinson's disease. 
            Users submit voice recordings through our intuitive interface, and the ML analysis examines key characteristics like pitch, 
            tone, and articulation. The resulting predictive model processes patterns, providing an accurate indication of the likelihood 
            of Parkinson's disease. This represents a significant advancement in non-invasive diagnostics, offering an accessible tool 
            for early intervention and disease management.
            </p>
          </div>
        </div>

        <div className="card">
          <img className="card-image" src="../img3.png" alt="Image 3" />
          <div className="card-content">
            <h2>Why Use VoicePD</h2>
            <ul>
              <li>Early Detection: Focus on identifying subtle alterations in vocal characteristics.</li>
              <li>Non-Invasive: Utilizes a simple voice recording for potential diagnosis.</li>
              <li>Incorporating ML: Enhances diagnostic accuracy by analyzing intricate patterns in vocal data.</li>
              <li>Revolutionizing Diagnosis: Aims to revolutionize Parkinson's disease diagnosis for early interventions.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
