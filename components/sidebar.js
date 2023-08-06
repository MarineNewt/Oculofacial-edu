import utilStyles from '../styles/utils.module.css';

export default function Sidebar({ current, children }) {
    return <>
      <h1>{current}</h1>
      <div> Hello{children}</div>
    
    </>
  }