// MadlibStory.js
import React from 'react';

function MadlibStory({ story, inputs, onRestart }) {
  const filledStory = story.replace(/{(\w+)}/g, (_, key) => inputs[key]);

  return (
    <div>
      <p>{filledStory}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default MadlibStory;
