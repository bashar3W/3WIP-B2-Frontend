import React from "react";
import Button from "../../components/button";
import becomeAMemberImg1 from "../../assets/becomeAMemberImg1.jpg";

const BecomeAMember = () => {
  return (
    <div className="becomeAMember-section">
      <div className="becomeAMember bbb-container">
        <div className="becomeAMember__heading">
          <h4 className="becomeAMember__heading--heading">
            Become a member of Lifesaving Leadership System (LLS)
          </h4>
          <p className="becomeAMember__heading--pera">
            Become a member of lifesaving leadership and get access to learning
            resources online.
          </p>
        </div>
        <div className="becomeAMember__body">
          <div className="textArea">
            <h4 className="textArea--heading">
              To fully turbocharge Engagement in Health, Safety and Wellbeing in
              your organisation, and make it stick, for good, you need three
              things:
            </h4>
            <p className="textArea--para1">
              <strong>1. The ‘People Power’ philosophy</strong> for a
              collaborative and cross-company approach to Health, Safety and
              Wellbeing.
              <br />
              <br />
              <strong>
                2. The ‘Build, Buzz, Bake’® formula (3 phases, 15 steps)
              </strong>{" "}
              for turbocharging cross-company Engagement in Health, Safety and
              Wellbeing and making it stick.
              <br />
              <br />
              <strong>
                3. All the supporting tools, templates and learning materials
              </strong>{" "}
              you need to implement the system within your own organisation.
            </p>
            <p className="textArea--para2">
              This is what we at Leaderlike call the Lifesaving Leadership®
              System, and when you become a member, you get access to all three.
              <br /> <br />
              Not only that, but as a result of your membership, if you used the
              methods and materials as designed, you will see your ‘power’
              skills dramatically improve in these three areas: - Communication,
              Strategy and Transformational Leadership.
              <br />
              <br />
              Ready to take the next step?
              <br />
              <br />
              <strong>
                Become a Lifesaving Leadership® member now and get access to all
                the resources you need.
              </strong>
            </p>
            <Button styles="becomeAMember-btn" name="Become a member" />
          </div>
          <div className="imgArea">
            <img className="imgArea--img" src={becomeAMemberImg1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAMember;
