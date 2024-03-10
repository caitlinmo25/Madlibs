// MadlibApp.js
import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';

const storyTemplates = [
  { id: 1, text: "There was a {color} {noun} who loved a {color} {noun2}." },
  { id: 2, text: "In a {adjective} world, a {noun} and a {noun2} were the best of friends." },
  // Add more story templates as needed
];

function MadlibApp() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedStory, setSelectedStory] = useState(storyTemplates[0]);
  const [inputs, setInputs] = useState({
    noun: '',
    noun2: '',
    adjective: '',
    color: ''
  });

  const handleStoryChange = (event) => {
    const storyId = Number(event.target.value);
    const story = storyTemplates.find(story => story.id === storyId);
    setSelectedStory(story);
  };

  const handleSubmit = (newInputs) => {
    setInputs(newInputs);
    setIsSubmitted(true);
  };

  const handleRestart = () => {
    setIsSubmitted(false);
    setInputs({
      noun: '',
      noun2: '',
      adjective: '',
      color: ''
    });
  };

  return (
    <div>
      {!isSubmitted && (
        <>
          <select onChange={handleStoryChange} value={selectedStory.id}>
            {storyTemplates.map(story => (
              <option key={story.id} value={story.id}>
                Story {story.id}
              </option>
            ))}
          </select>
          <MadlibForm onSubmit={handleSubmit} />
        </>
      )}
      {isSubmitted && (
        <MadlibStory story={selectedStory.text} inputs={inputs} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default MadlibApp;
