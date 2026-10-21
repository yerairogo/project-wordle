import React from 'react';

function Banner({ status, answer, tries }) {
  const getBannerMessage = () => {
    if (status === 'lost') {
      return (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      );
    } else {
      return (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{tries} guesses</strong>.
        </p>
      );
    }
  };

  const getClassname = () => {
    const className = status === 'lost' ? 'sad banner' : 'happy banner';
    return className;
  };

  return <div className={getClassname()}>{getBannerMessage()}</div>;
}

export default Banner;
