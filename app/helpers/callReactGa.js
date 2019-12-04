export default function callReactGa() {
  /* Future research:

    Do we need to filter out calls to ReactGA when the location doesn't 
    change? Or, sometimes, when it doesn't change/ Otherwise, what we're
    doing now is to call it every time there's a re-render...not great?
  
  */
  return process.env.NODE_ENV !== 'development';
}
