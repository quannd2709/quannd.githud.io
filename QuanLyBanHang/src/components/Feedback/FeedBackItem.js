import React from "react";
import { useHistory } from "react-router-dom";
function FeedBackItem({ feedback, index }) {
  let history = useHistory();

  const updateStaff = (feedback) => {
    history.push({
      pathname: `/feedback/detail`,
      state: { feedback: feedback },
    });
  };

  return (
    <>
      <tr onClick={() => updateStaff(feedback)}>
        <td>{index + 1}</td>
        <td>{feedback.customerName}</td>
        <td>{feedback.title}</td>
        <td>{feedback.slove}</td>
        <td>{new Date(feedback.createdDate).toLocaleDateString()}</td>
      </tr>
    </>
  );
}

export default FeedBackItem;
