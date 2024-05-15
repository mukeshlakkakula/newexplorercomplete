import React from 'react';
import Register from "../Register";
import './index.css';

function MeetYourMentor() {
  return (
    <section className="mentor-section">
      <h2 className="meet">Meet Your Mentor</h2>
      <div className="mentor-info">
        <img src="https://res.cloudinary.com/djlhr4ycg/image/upload/c_fill,w_1400,h_2000,g_auto/v1715327360/ACHYUTHANAND-1024x1024_ujwzq5.jpg" alt="Mentor" className="mentor-image" />
        <div className="mentor-details">
          <div className="mentor-name">
            <h3 style={{textAlign:'center', fontWeight: 'bold' }}><strong> MENTOR NAME :</strong> ACHYUTHANAND</h3>
            <div className="mentor-additional-info">
              <div className="container">
                <div>
                  <div className="box">
                    <p><strong>Location:</strong> Hyderabad</p>
                  </div>
                  <div className="box">
                    <p><strong>Field:</strong> Tourism</p>
                  </div>
                </div>
                <div>
                  <div className="box">
                    <p><strong>Experience:</strong> 6+ years</p>
                  </div>
                  <div className="box">
                    <p><strong>Availability:</strong> MON TO SUN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mentor-description">
            <p className='description'>
              As the CEO of our company, he is a <span style={{ color: 'green', fontWeight: 'bold' }}>young, energetic leader</span> with a 
              <span style={{ color: 'green', fontWeight: 'bold' }}> strong sense of purpose</span> and a <span style={{ color: 'green', fontWeight: 'bold' }}>clear vision for the future</span>.
              He is always on the go and looking for new opportunities to grow his business, and he is highly business-minded and values money.
              However,He is known for his <span style={{ color: 'green', fontWeight: 'bold' }}>outgoing and friendly personality</span>, and he loves to talk to people and make connections.
              He has a laid-back and approachable style that makes people feel at ease, and he believes that work should be enjoyable.
              Despite his <span style={{ color: 'green', fontWeight: 'bold' }}>youthful energy and enthusiasm</span>, he is a serious and strategic thinker who is always looking for ways to drive results
              and stay ahead of the competition. He is always looking for new ways to innovate and push the boundaries, and he tries to foster a
              <span style={{ color: 'green', fontWeight: 'bold' }}>culture of collaboration and creativity</span> within our company.
            </p>
          </div>
        </div>
      </div>
      <Register />
    </section>
  );
}
export default MeetYourMentor;
