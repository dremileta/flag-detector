# Flag Detector
The application to detect(by using the AI) the country flag from uploaded photo and display found country details and mark it on the Google Map.

## How to start
```
npm install
npm run dev
```

## TODO
- [ ] Research how to add TensorFlow.js library to work with React;  
- [ ] Research how to teach TensorFlow AI to recognize country flags;  
- [ ] Set up Tensorflow;  
- [ ] Teach TensorFlow with country flags; Can use dataset from [here](https://github.com/iamvukasin/flagnet/tree/master/dataset) if needed. 

## Used approaches

### Context API
In this application I was using the Context API to set and update the "selected country". 
This approach should not be used for set/update the global state. It's a bad practice. 

But still, I wanted to try it out, to have better understanding how the Context API works and what problems I could face with it.

I splitted my selected country context into two separate contextes:

```SelectedCountryContext``` - which holds the selected ```Country```;   
```SelectedCountryContextAPI``` - which holds the API for changing the selected ```Country```.

This split was done to prevent components that are not reading the "selected country" state to re-render each time when 
this state changes by invoking the update function.
