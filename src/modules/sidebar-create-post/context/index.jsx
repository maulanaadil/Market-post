import { createContext, useContext, useState } from 'react';

const CreatePostContext = createContext({
  postFor: [],
  setPostFor: () => {},

  postCaption: '',
  setPostCapiton: () => {},

  location: '',
  setLocation: () => {},

  images: [],
  setImages: () => {},

  schedule: {},
  setSchedule: () => {},
});

export const CreatePostProvider = ({ children }) => {
  const [postFor, setPostFor] = useState([]);
  const [postCaption, setPostCaption] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState([]);
  const [schedule, setSchedule] = useState({
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(
      'en-US',
      { hour: 'numeric', minute: 'numeric', hour12: false },
    ),
  });

  return (
    <CreatePostContext.Provider
      value={{
        postFor,
        setPostFor,
        postCaption,
        setPostCaption,
        location,
        setLocation,
        images,
        setImages,
        schedule,
        setSchedule,
      }}
    >
      {children}
    </CreatePostContext.Provider>
  );
};

export const CreatePostConsumer = ({ children }) => {
  return <CreatePostContext.Consumer>{children}</CreatePostContext.Consumer>;
};

export const useCreatePost = () => useContext(CreatePostContext);
