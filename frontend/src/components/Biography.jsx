import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
  At Jeevan Jyoti, our mission is to bring quality healthcare within the reach of every individual.
  We believe that timely diagnosis, compassionate treatment, and patient education are the keys
  to healthier communities. Our services focus on blending modern medical technology with
  a human touch to ensure every patient feels cared for and understood.
</p>
{/* <p>
  In 2024, we are expanding our reach through digital health platforms and
  telemedicine solutions, making expert medical advice accessible from anywhere.
</p> */}
<p>
  Our team works closely with medical professionals to create innovative tools that assist
  in accurate diagnoses, monitor patient recovery, and ensure continuity of care.
  From preventive screenings to post-treatment follow-ups, we’re committed to
  supporting patients at every stage of their health journey.
</p>
<p>
  Because at Jeevan Jyoti, we believe that every life is precious—and every heartbeat matters.
</p>
<p>
  Together, let's build a healthier tomorrow.
</p>

        </div>
      </div>
    </>
  );
};

export default Biography;
